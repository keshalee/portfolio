/*##############################################################
제작자 : 박현종
제작일시 : 2015-02-25
##############################################################*/
(function ($) {
    $.frmvalid = {
        valid: function (selector, type, message, title) {
            var MSG = new Array();
            MSG["EMPTY"] = "필수입력항목입니다.";
            MSG["MAX"] = "{범위} 이하로 입력해주세요.";
            MSG["MIN"] = "{범위} 이상 입력해주세요.";
            MSG["LEN"] = "{범위} 로 입력해주세요.";
            MSG["BAX"] = "{범위} 이하로 입력해주세요.";
            MSG["BIN"] = "{범위} 이상 입력해주세요.";
            MSG["BITE"] = "{범위} 로 입력해주세요.";
            MSG["ENG"] = "영문으로만 입력해주세요.";
            MSG["NUM"] = "숫자로만 입력해주세요.";
            MSG["KOR"] = "한글만 입력해주세요.";
            MSG["ENG+NUM"] = "영문또는숫자로만 입력해주세요.";
            MSG["ENG*NUM"] = "영문,숫자 둘다포함되게 입력해주세요.";
            MSG["ENG+NUM+CHAR"] = "영문또는숫자또는특수문자로만 입력해주세요.";
            MSG["ENG*NUM*CHAR"] = "영문,숫자,특수문자 모두 포함되게 입력해주세요.";
            MSG["DATE"] = "날짜형식으로 입력해주세요.";
            MSG["EMAIL"] = "이메일형식으로 입력해주세요.";
            MSG["HP"] = "핸드폰형식으로 입력해주세요.";
            MSG["TEL"] = "전화번호형식으로 입력해주세요.";
            MSG["EQUALS"] = "값이 동일하지않습니다.";

            //셀렉터별 체크
            var objSplit = selector.split(",");
            for (var iCnt = 0; iCnt < objSplit.length; iCnt++) {
                //타입별로 인증검색
                var typeSplit = type.split(",");
                for (var jCnt = 0; jCnt < typeSplit.length; jCnt++) {
                    //같은값인지 확인하는 로직은 여기서 처리한다.
                    if (typeSplit[jCnt] == "EQUALS") {
                        //객체가 2개가 설정되지 않으면 무시하고 나간다.
                        if (objSplit.length < 2) { return false; }
                        if ($(objSplit[0]).val() != $(objSplit[1]).val()) {
                            showMsg("EQUALS", objSplit[1], message, title);
                            return true;
                        }
                    }
                    else if (chkValid(typeSplit[jCnt], objSplit[iCnt], message, title)) {
                        return true;
                    }
                }
            }
            return false;

            //타입별체크
            function chkValid(t, s, m, tit) {
                var val = "";
                //값을 더해서 처리해야할경우 EMAIL,HP등등
                if (s.indexOf("+") >= 0) {
                    var tList = s.split("+");
                    for (var i = 0; i < tList.length; i++) {
                        //셀렉터가아닌 일반 텍스트인경우
                        if (tList[i].indexOf("{") >= 0 && tList[i].indexOf("}") >= 0) {
                            val = val + tList[i].replace("{", "").replace("}", "");
                        } else {
                            val = val + $(tList[i]).val();
                        }
                    }
                } else {
                    val = $(s).val();
                }

                //타입대문자로 변경.
                t = t.toUpperCase();
                //빈값 확인
                if (t == "EMPTY") {
                    //타입별로 필수값 확인(라디오,체크박스,인풋,셀렉트박스)
                    var starget = "";
                    if (s.indexOf("+") >= 0) {
                        starget = s.split("+")[0];
                    } else {
                        starget = s;
                    }
                    if ($(starget).attr('type') != undefined) {
                        if ($(starget).attr('type').toUpperCase() == "RADIO" || $(starget).attr('type').toUpperCase() == "CHECKBOX") {
                            if (!$(s).is(":checked")) {
                                showMsg(t, starget, m, tit);
                                return true;
                            }
                        } else {
                            if (val == "" || val == "-" || val == "--" || val == "@") {
                                showMsg(t, s, m, tit);
                                return true;
                            }
                        }
                    } else {
                        if (val == "" || val == "-" || val == "--" || val == "@") {
                            showMsg(t, s, m, tit);
                            return true;
                        }
                    }
                }
                //최소LENGTH 확인
                if (t.indexOf("MIN") >= 0) {
                    var min = t.replace("MIN", "").replace("(", "").replace(")", "");
                    if (minLen(val, min)) {
                        showMsg("MIN", s, m, tit, min + "자");
                        return true;
                    } else {
                        return false;
                    }
                }
                //최대LENGTH 확인
                if (t.indexOf("MAX") >= 0) {
                    var max = t.replace("MAX", "").replace("(", "").replace(")", "");
                    if (maxLen(val, max)) {
                        showMsg("MAX", s, m, tit, max + "자");
                        return true;
                    } else {
                        return false;
                    }
                }
                //최대,최소 LENGTH 확인
                if (t.indexOf("LEN") >= 0) {
                    var len = t.replace("LEN", "").replace("(", "").replace(")", "");
                    var min = len.split("-")[0];
                    var max = len.split("-")[1];
                    if (minLen(val, min) || maxLen(val, max)) {
                        showMsg("LEN", s, m, tit, len + "자");
                        return true;
                    }
                    return false;
                }
                //최소BITE 확인
                if (t.indexOf("BIN") >= 0) {
                    var min = t.replace("BIN", "").replace("(", "").replace(")", "");
                    if (minBites(val, min)) {
                        showMsg("BIN", s, m, tit, min + "Byte");
                        return true;
                    } else {
                        return false;
                    }
                }
                //최대BITE 확인
                if (t.indexOf("BAX") >= 0) {
                    var max = t.replace("BAX", "").replace("(", "").replace(")", "");
                    if (maxBites(val, max)) {
                        showMsg("BAX", s, m, tit, max + "Byte");
                        return true;
                    } else {
                        return false;
                    }
                }
                //최대,최소 LENGTH 확인
                if (t.indexOf("BITE") >= 0) {
                    var len = t.replace("BITE", "").replace("(", "").replace(")", "");
                    var min = len.split("-")[0];
                    var max = len.split("-")[1];
                    if (minBites(val, min) || maxBites(val, max)) {
                        showMsg("BITE", s, m, tit, len + "Byte");
                        return true;
                    }
                    return false;
                }
                //영문확인
                if (t == "ENG") {
                    if (isEng(val)) {
                        showMsg(t, s, m, tit);
                        return true;
                    } else {
                        return false;
                    }
                }
                //숫자확인
                if (t == "NUM") {
                    if (isNum(val)) {
                        showMsg(t, s, m, tit);
                        return true;
                    } else {
                        return false;
                    }
                }
                //한글확인
                if (t == "KOR") {
                    if (isKor(val)) {
                        showMsg(t, s, m, tit);
                        return true;
                    } else {
                        return false;
                    }
                }
                //영문+숫자(둘중하나면됨) 확인
                if (t == "ENG+NUM" || t == "NUM+ENG") {
                    if (isEngOrNum(val)) {
                        showMsg("ENG+NUM", s, m, tit);
                        return true;
                    } else {
                        return false;
                    }
                }
                //영문*숫자(둘다들어가아햠)확인
                if (t == "ENG*NUM" || t == "NUM*ENG") {
                    if (isEngNum(val)) {
                        showMsg("ENG*NUM", s, m, tit);
                        return true;
                    } else {
                        return false;
                    }
                }
                //영문+숫자+특수문자(셋중하나면됨) 확인
                if (t == "ENG+NUM+CHAR" || t == "NUM+ENG+CHAR") {
                    if (isEngOrNumOrCharS(val)) {
                        showMsg("ENG+NUM+CHAR", s, m, tit);
                        return true;
                    } else {
                        return false;
                    }
                }
                //영문*숫자*특수문자(모두 포함되어야함) 확인
                if (t == "ENG*NUM*CHAR" || t == "NUM*ENG*CHAR") {
                    if (isEngNumCharS(val)) {
                        showMsg("ENG*NUM*CHAR", s, m, tit);
                        return true;
                    } else {
                        return false;
                    }
                }


                //YYYY-MM-DD 날짜형식인지확인
                if (t == "DATE") {
                    if (isDate(val)) {
                        showMsg(t, s, m, tit);
                        return true;
                    } else {
                        return false;
                    }
                }

                //이메일형식 확인
                if (t == "EMAIL") {
                    if (isEmail(val)) {
                        showMsg(t, s, m, tit);
                        return true;
                    } else {
                        return false;
                    }
                }
                //핸폰번호형식 확인
                if (t == "HP" || t == "HP-") {
                    if (isHp(val, t)) {
                        showMsg("HP", s, m, tit);
                        return true;
                    } else {
                        return false;
                    }
                }
                //전화번호 확인
                if (t == "TEL" || t == "TEL-") {
                    if (isTel(val, t)) {
                        showMsg("TEL", s, m, tit);
                        return true;
                    } else {
                        return false;
                    }
                }

                return false;
            };

            //숫자인지 확인
            function isNum(v) {
                if (v == "") return false;
                var regx = /^[0-9]*$/;
                if (!regx.test(v)) {
                    return true;
                } else {
                    return false;
                }
            };

            //영문인지 확인
            function isEng(v) {
                if (v == "") return false;
                var regx = /^[a-zA-Z]*$/;
                if (!regx.test(v)) {
                    return true;
                } else {
                    return false;
                }
            };

            //영문 * 숫자인지 확인
            function isEngNum(v) {
                if (v == "") return false;
                var chk_num = v.search(/[0-9]/g);
                var chk_eng = v.search(/[a-z]/ig);
                if (chk_num >= 0 && chk_eng >= 0) {
                    return false;
                }
                return true;
            };

            //영문 + 숫자인지 확인
            function isEngOrNum(v) {
                if (v == "") return false;
                var regx = /^[a-zA-Z0-9]*$/;
                if (!regx.test(v)) {
                    return true;
                } else {
                    return false;
                }
            };

            //영문 * 숫자 * 특수문자인지 확인
            function isEngNumCharS(v) {
                if (v == "") return false;
                var chk_num = v.search(/[0-9]/g);
                var chk_eng = v.search(/[a-z]/ig);
                var chk_charS = v.search(/[~!@#%*()\-_=+:?\,\.\/\$\^\&\{\}\[\]\;]/g);
                if (chk_num >= 0 && chk_eng >= 0 && chk_charS >= 0) {
                    return false;
                }
                return true;
            };


            //영문 + 숫자 + 특수문자인지 확인
            function isEngOrNumOrCharS(v) {
                if (v == "") return false;
                var regx = /^[a-zA-Z0-9`~!@#%*()\-_=+:?\,\.\/\$\^\&\{\}\[\]\;]*$/;
                //var regx = /^[a-zA-Z0-9]*$/;
                if (!regx.test(v)) {
                    return true;
                } else {
                    return false;
                }
            };

            //한글인지 확인
            function isKor(v) {
                if (v == "") return false;
                var regx = /^[가-힣]+$/;
                if (!regx.test(v)) {
                    return true;
                } else {
                    return false;
                }
            };

            //날짜형식 YYYY-MM-DD 확인
            function isDate(v) {
                if (v == "") return false;
                var regx = /^([0-9]{4})-([0-9]{2})-([0-9]{2}$)/g;
                if (!regx.test(v)) {
                    return true;
                } else {
                    return false;
                }
            };

            //이메일형식인지 확인
            function isEmail(v) {
                if (v == "" || v == "@") return false;
                var regx = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
                //var regx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                if (regx.test(v) === false) {
                    return true;
                } else {
                    return false;
                }
            };

            //휴대폰 번호인지 확인
            function isHp(v, type) {
                if (v == "" || v == "-" || v == "--") return false;
                if (type == "HP-") {
                    var regx = /^01[016789]-\d{3,4}-\d{4}$/g;
                    if (!regx.test(v)) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    var regx = /^01[016789]\d{3,4}\d{4}$/g;
                    if (!regx.test(v)) {
                        return true;
                    } else {
                        return false;
                    }
                }
            };

            //전화번호 인지 확인
            function isTel(v, type) {
                if (v == "" || v == "-" || v == "--") return false;
                if (type == "TEL-") {
                    var telno_regx = /^\d{2,3}-\d{3,4}-\d{4}$/;
                    if (!telno_regx.test(v)) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    var telno_regx = /^\d{2,3}\d{3,4}\d{4}$/;
                    if (!telno_regx.test(v)) {
                        return true;
                    } else {
                        return false;
                    }
                }
            };

            //맥스 LENGTH 체크 함수
            function maxLen(v, len) {
                if (len < v.length) {
                    return true;
                } else {
                    return false;
                }
            };

            //MIN LENGTH 체크 함수
            function minLen(v, len) {
                if (len > v.length) {
                    return true;
                } else {
                    return false;
                }
            };

            //맥스 BITES 체크
            function maxBites(v, len) {
                var size = GetBytes(v);
                if (size > len) {
                    return true;
                } else {
                    return false;
                }
            };

            //최소 BITES 체크
            function minBites(v, len) {
                var size = GetBytes(v);
                if (size < len) {
                    return true;
                } else {
                    return false;
                }
            };

            //메세지출력
            function showMsg(t, s, m, tt, o) {
                var starget = "";
                if (s.indexOf("+") >= 0) {
                    starget = s.split("+")[0];
                } else {
                    starget = s;
                }

                if (m != undefined && m != "") {
                    alert(m);
                    $(starget).focus();
                } else {
                    if (tt != undefined && tt != "") {
                        alert(tt + " " + MSG[t].replace("{범위}", o));
                    } else {
                        alert(MSG[t].replace("{범위}", o));
                    }
                    $(starget).focus();
                }
            };

            function GetBytes(v) {
                var nbytes = 0;
                for (i = 0; i < v.length; i++) {
                    var ch = v.charAt(i);
                    if (escape(ch).length > 4) {
                        nbytes += 2;
                    } else if (ch == '\n') {
                        if (v.charAt(i - 1) != '\r') {
                            nbytes += 1;
                        }
                    } else if (ch == '<' || ch == '>') {
                        nbytes += 4;
                    } else {
                        nbytes += 1;
                    }
                }
                return nbytes;
            };

            //객체확인
            function isObj(o) {
                if (o == undefined) return true;
                else return false;
            };

            //디버깅 로그 출력
            function setLog(v) {
                console.log(v);
            };
        }
    }; //frmvalid

    //빈값확인
    $.fn.emptyCheck = function (options) {
        if ($(this).val() == "") {
            return true;
        } else {
            return false;
        }
    }; //

    //숫자만받기
    $.fn.onlyNumberChek = function (options) {
        return this.each(function () {
            try {
                var $this = $(this);
                $this.css('ime-mode', 'disabled');
                $this.keydown(function (e) {
                    var keycode = e.keyCode;
                    var isShift = e.shiftKey ? true : false;
                    //키코드 확인(TAB,DELETE) + 키코드값 추가하면 허용됨.
                    if (!isShift && (keycode == 8 || keycode == 9 || (keycode >= 35 && keycode <= 40) || (keycode >= 46 && keycode <= 57) || (keycode >= 96 && keycode <= 105) || keycode == 110 || keycode == 190)) {
                        return true;
                    } else {
                        return false;
                    }
                });
            } catch (e) {
                alert("[numberFormat] " + e.description);
            }
        });
    }; //$.fn.onlyNum

    //영문자만받기
    $.fn.onlyEngCheck = function (options) {
        return this.each(function () {
            try {
                var $this = $(this);
                $this.css('ime-mode', 'disabled');
                $this.keydown(function (e) {
                    var keycode = e.keyCode;
                    //키코드 확인(TAB,DELETE)
                    if (keycode == 8 || keycode == 9 || (keycode >= 65 && keycode <= 90) || (keycode >= 96 && keycode <= 105) || keycode == 110 || keycode == 190) {
                        return true;
                    } else {
                        return false;
                    }
                });
            } catch (e) {
                alert("[numberFormat] " + e.description);
            }
        });
    }; //$.fn.onlyEng

    //숫자+영문자만받기
    $.fn.onlyEngNumberCheck = function (options) {
        return this.each(function () {
            try {
                var $this = $(this);
                $this.css('ime-mode', 'disabled');
                $this.keydown(function (e) {
                    var keycode = e.keyCode;
                    var isShift = e.shiftKey ? true : false;
                    if (!isShift && (keycode == 8 || keycode == 9 || (keycode >= 35 && keycode <= 40) || (keycode >= 46 && keycode <= 57) || (keycode >= 96 && keycode <= 105) || keycode == 110 || keycode == 190) || (keycode >= 65 && keycode <= 90)) {
                        return true;
                    } else {
                        return false;
                    }
                });
            } catch (e) {
                alert("[numberFormat] " + e.description);
            }
        });
    }; //$.fn.onlyEngNum
})(jQuery);