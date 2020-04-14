
/*
var C_id;
function SetC_id(id) {
    C_id = id;
}
*/
function _swid(Str) { return document.getElementById(Str); }

function _swnm(Str) { return document.getElementsByName(Str); }

if (window.attachEvent) {
	var addEvent = function (Element,Handle,Action) { return Element.attachEvent(Handle,Action); }
} else if (window.addEventListener) {
	var addEvent = function (Element,Handle,Action) { return Element.addEventListener(Handle.replace(/^on/i,""),Action,false); }
}
//파일 다운 패스 경로 필수 설정
var _downFilePath = "/upfile/";

// ---------------------------------------------------------------------------------------------------------------------
// 전체 리플라이스
// ---------------------------------------------------------------------------------------------------------------------
String.prototype.replaceAll = function (strTarget, strSubString) {
    var strText = this;
    var intIndexOfMatch = strText.indexOf(strTarget);

    while (intIndexOfMatch != -1) {
        strText = strText.replace(strTarget, strSubString)
        intIndexOfMatch = strText.indexOf(strTarget);
    }

    return (strText);
}

// ---------------------------------------------------------------------------------------------------------------------
// 파이어폭스에서 innerText 인식 하게 한다.
// ---------------------------------------------------------------------------------------------------------------------
if(typeof HTMLElement != "undefined" && typeof HTMLElement.prototype.__defineGetter__ != "undefined") {
	HTMLElement.prototype.__defineGetter__("innerText",
		function() {
			if(this.textContent) { return(this.textContent)	} 
			else 
			{	
				var r = this.ownerDocument.createRange();
				r.selectNodeContents(this);
				return r.toString();
			}
		});

	HTMLElement.prototype.__defineSetter__("innerText",
		function(sText) { this.innerHTML = sText });
}

function setPng24(obj) 
{
	obj.width=obj.height=1;
	obj.className=obj.className.replace(/\bpng24\b/i,"");
	obj.style.filter =
	"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');"
	obj.src="";
	return "";
}


//파라미터 데이타를 url형태로 변경
function getParamUrl(paramData){
	var returnParam = '';
	var paramCnt = 0;
	for(key in paramData){
		if(paramCnt > 0) returnParam += '&';
		returnParam += key+'='+encodeURIComponent(paramData[key]);
		paramCnt++;
	}
	return returnParam;
} 

//파라미터 변경
function getChangeParam(data){
	var paramData = {};
	if(window.location.href.indexOf('?') > 0)
	{
		var params = window.location.href.slice(window.location.href.indexOf('?') + 1).split('#');
		var requstParams = decodeURIComponent(params[0]).split('&');
		for(var i = 0; i < requstParams.length; i++){
			var tempArray = requstParams[i].split('=');
			paramData[trim(tempArray[0])] = trim(tempArray[1]);
		}
	}
	$.extend(paramData, data);
	return paramData;
} 

//파라미터 value값 가져오기
function getRequestParam(key){
	if(window.location.href.indexOf('?') > 0)
	{
		var params = window.location.href.slice(window.location.href.indexOf('?') + 1).split('#');
		var requstParams = decodeURIComponent(params[0]).split('&');
		for(var i = 0; i < requstParams.length; i++){
			var tempArray = requstParams[i].split('=');
			if(tempArray[0] == key) {
				return tempArray[1];
			}
		}
	}
	return '';
}

//팝업창 닫기
function pop_closed() {
    window.opener = self;
    self.close();
}


function MakeParamStr(theForm) {
    var param = "";

    var radios = new Array();
    var selects = new Array();

    for (var i = 0; i < theForm.length; i++) {

        obj = theForm[i];

        switch (obj.type) {

            case "text":
            case "textarea":
            case "hidden":
            case "password":
                param += encodeURIComponent(obj.name) + "=" + encodeURIComponent(obj.value) + "&";
                break;

            case "checkbox":
                param += encodeURIComponent(obj.name) + "=";
                if (obj.checked) param += encodeURIComponent(obj.value);
                param += "&";
                break;

            case "radio":

                if (obj.checked) {
                    param += encodeURIComponent(obj.name) + "=" + encodeURIComponent(obj.value) + "&";
                    radios[obj.name] = true;
                }
                else if (!radios[obj.name]) { radios[obj.name] = false; }
                break;

            case "select-one":
                param += encodeURIComponent(obj.name) + "=";

                for (var x = 0; x < obj.options.length; x++) {
                    if (obj.options[x].selected) param += obj.options[x].value;
                }
                param += "&";
                break;

            case "select-multiple":
                break;

            case "file":
                break;
        }
    }

    var objname;
    for (objname in radios) {
        if (!radios[objname]) param += encodeURIComponent(objname) + "=" + "&";
    }

    return param;
}

function convertByte(f) {
    var ret = Math.round(f / 1024 * 10000) / 10000;
    if (ret < 1000) return ret + " K";
    else ret = Math.round(f / 1048576 * 10000) / 10000;
    if (ret < 1000) return ret + " M";
    else return (Math.round(f / 1073741824 * 10000) / 10000) + "G";
}


function getXmlDom(txt) {
    var xmlDoc = null;
    if (window.DOMParser) {
        var parser = new DOMParser();
        if (txt != '') {
            xmlDoc = parser.parseFromString(txt, "text/xml");
        } else {
            return '';
        }
    } else if (window.ActiveXObject) {
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = false;
        xmlDoc.loadXML(txt);
    } else {
        alert("XML 문자열로부터 XML DOM을 만들 수 없습니다");
        return null;
    }
    return xmlDoc;

}


function getFirstChild(node) {
    var fChild = node.firstChild;
    while (fChild.nodeType != 1)
        fChild = fChild.nextSibling;

    return fChild;
}

function getNodeValue(nodes) {
    var nodeValue = "";
    for (i = 0; i < nodes.length; i++) {
        try {
            nodeValue = nodes[i].childNodes[0].nodeValue;
        } catch (e) {
            nodeValue = "찾을수 없습니다.";
        }
    }

    return nodeValue;
}

function getNodeAt(nodes, aname) {
    var nodeValue = "";
    for (i = 0; i < nodes.length; i++) {
        for (j = 0; j < nodes[i].attributes.length ; j++) {
            nodeValue = nodes[i].attributes[j];
            if (nodeValue.name == aname) break;
        }
    }

    return nodeValue.value;
}

function SelectBoxChildNodesDel(elementId) {
    var obj = document.getElementById(elementId);
    if (obj == null) return;
    for (var o = obj.length - 1; o >= 0; o--) {
        obj.options[o] = null;
    }
}

function SelectBoxChildNodesDel2(elementId) {
    var obj = document.getElementById(elementId);
    if (obj == null) return;
    for (var i = obj.length - 1; i >= 1; i--) {
        obj.options[i] = null;
    }
}

function ChildNodesDel(elementId) {
    var obj = document.getElementById(elementId);
    if (obj == null) return;
    for (var i = obj.childNodes.length - 1; i >= 0; i--) {
        obj.removeChild(obj.childNodes.item(i));
    }
}


//좌우 공백제거
function ltrim(str) {
    var strreturn = "";
    for (i = 0; i <= str.length - 1; i++) {
        if (str.charAt(i) != ' ') {
            strreturn = str.substring(i, str.length);
            return strreturn;
        }
    }
    return strreturn;
}

function rtrim(str) {
    var strreturn = "";
    for (i = str.length - 1; i >= 0; i--) {
        if (str.charAt(i) != ' ') {
            strreturn = str.substring(0, i + 1);
            return strreturn;
        }
    }
    return strreturn;
}

function trim(str) {
    return rtrim(ltrim(str));
}


//숫자체크
function CheckNumber(fl) {
    t = fl.value;
    for (i = 0; i < t.length; i++)
        if (t.charAt(i) < '0' || t.charAt(i) > '9') {
            alert("숫자만 입력해주세요.");
            fl.value = "";
            fl.focus();
            return false;
        }
}

//소수점체크
function CheckFloat(fl) {
    t = fl.value;
    for (i = 0; i < t.length; i++)
        if (t.charAt(i) != '.' && (t.charAt(i) < '0' || t.charAt(i) > '9')) {
            alert(" 소수점과 숫자만 입력해주세요.");
            fl.value = "";
            fl.focus();
            return false;
        }
}

//마이너스체크
function CheckMinus(fl) {
    t = fl.value;
    for (i = 0; i < t.length; i++)
        if (t.charAt(i) != '-' && (t.charAt(i) < '0' || t.charAt(i) > '9')) {
            alert(" '-'와 숫자만 입력해주세요.");
            fl.value = "";
            fl.focus();
            return false;
        }
}

//|체크
function CheckBar(fl) {
    t = fl.value;
    for (i = 0; i < t.length; i++)
        if (t.charAt(i) != '|' && (t.charAt(i) < '0' || t.charAt(i) > '9')) {
            alert(" '|'와 숫자만 입력해주세요.");
            fl.value = "";
            fl.focus();
            return false;
        }
}


// ---------------------------------------------------------------------------------------------------------------------
// 금액 표기
// ---------------------------------------------------------------------------------------------------------------------
function number_format(val) {
    val = parseInt(val)
    ret_val = val.toLocaleString();
    pos = ret_val.indexOf(".");
    if (pos == -1) pos = ret_val.length;
    ret_val = ret_val.substr(0, pos);
    return (ret_val);
}

// ---------------------------------------------------------------------------------------------------------------------
// 금액 표기 취소
// ---------------------------------------------------------------------------------------------------------------------
function renumber_format(val) {
    var returnValue = val.replace(",", "");
    returnValue = returnValue.replace(",", "");
    returnValue = returnValue.replace(",", "");
    return returnValue;
}

// ---------------------------------------------------------------------------------------------------------------------
// 즐겨찾기
// ---------------------------------------------------------------------------------------------------------------------
function bookmarksite(title, url) {
    // Internet Explorer
    if (document.all) {
        window.external.AddFavorite(url, title);
    }
        // Google Chrome
    else if (window.chrome) {
        alert("Ctrl+D키를 누르시면 즐겨찾기에 추가하실 수 있습니다.");
    }
        // Firefox
    else if (window.sidebar) // firefox
    {
        window.sidebar.addPanel(title, url, "");
    }
        // Opera
    else if (window.opera && window.print) { // opera
        var elem = document.createElement('a');
        elem.setAttribute('href', url);
        elem.setAttribute('title', title);
        elem.setAttribute('rel', 'sidebar');
        elem.click();
    } else if (window.external) {
        window.external.AddFavorite(url, title);
    }
}

function UrlCopy() {
    if (window.clipboardData) {
        window.clipboardData.setData("Text", location.href);
        alert("게시물 내용이 클립보드에 복사되었습니다.");
    }
    else {
        prompt("Ctrl+C를 눌러 게시물 내용을 클립보드로 복사하세요", location.href);
    }
}

function TryParseInt(str,defaultValue) {
    var retValue = defaultValue;
    if(str != null) {
        if(str.length > 0) {
            if (!isNaN(str)) {
                retValue = parseInt(str);
            }
        }
    }
    return retValue;
}


function check_biznum(tmp) {
    var chkRule = "137137135";
    var strCorpNum = tmp;
    var step1, step2, step3, step4, step5, step6, step7;

    step1 = 0;

    for (i = 0; i < 7; i++) {
        step1 = step1 + (strCorpNum.substring(i, i + 1) * chkRule.substring(i, i + 1));
    }

    step2 = step1 % 10;
    step3 = (strCorpNum.substring(7, 8) * chkRule.substring(7, 8)) % 10;
    step4 = strCorpNum.substring(8, 9) * chkRule.substring(8, 9);
    step5 = Math.round(step4 / 10 - 0.5);
    step6 = step4 - (step5 * 10);
    step7 = (10 - ((step2 + step3 + step5 + step6) % 10)) % 10;

    if (strCorpNum.substring(9, 10) != step7) return false;
    else return true;
}

function getDoc(frame) {
    var doc = null;

    // IE8 cascading access check
    try {
        if (frame.contentWindow) {
            doc = frame.contentWindow.document;
        }
    } catch (err) {
    }

    if (doc) { // successful getting content
        return doc;
    }

    try { // simply checking may throw in ie8 under ssl or mismatched protocol
        doc = frame.contentDocument ? frame.contentDocument : frame.document;
    } catch (err) {
        // last attempt
        doc = frame.document;
    }
    return doc;
}