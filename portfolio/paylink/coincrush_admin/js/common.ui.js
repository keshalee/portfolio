// html엘리먼트 ie7,8인식;
 document.createElement('header');
 document.createElement('nav');
 document.createElement('article');
 document.createElement('section');
 document.createElement('aside');
 document.createElement('footer');

$(document).ready(function(){
	//============================================================================
    //  browser check!
    //============================================================================
    var ua = navigator.userAgent.toLowerCase(),
        doc = document.documentElement;
    if (ua.indexOf("opr") != -1) {
        doc.className = doc.className + " opera";
    }else if (ua.indexOf("chrome") != -1) {
        doc.className = doc.className + " chrome";
    }else if (ua.indexOf("safari") != -1) {
        doc.className = doc.className + " safari";
    }else if (ua.indexOf("firefox") != -1) {
        doc.className = doc.className + " firefox";
    }else if (ua.indexOf("msie") != -1) {
        // ie css-hack 
        if ((ua.match(/MSIE 10.0/i))) {
            doc.className = doc.className + " ie10";
        } else if((ua.match(/MSIE 9.0/i))) {
            doc.className = doc.className + " ie9";	
        } else if((ua.match(/MSIE 8.0/i))) {
            doc.className = doc.className + " ie8";	
        } else if((ua.match(/MSIE 7.0/i))) {
            doc.className = doc.className + " ie7";
        } else if((ua.match(/rv:11.0/i))){
            doc.className = doc.className + " ie11";
        } else {
            doc.className = doc.className + " edge";
        };
    }
    
    //============================================================================
    //  window resize
    //============================================================================
    $(window).resize(function(){
        if(document.getElementById("dragArea")) {
            fixDragBtn();
        }
    }).resize();
    
    // 반응형 테이블 
    var frboxWid = $("#frbox .innerbox").width();
    var flboxWid = $("#flbox .innerbox").width();

    if(frboxWid < 540) {
        $("#frbox").addClass("respon");
    }else {
        $("#frbox").removeClass("respon");
    }
    if(flboxWid < 800) {
        $("#flbox").addClass("respon");
    }else {
        $("#flbox").removeClass("respon");
    }
    
    //============================================================================
    //  nicescroll
    //============================================================================
    $("body").niceScroll();
    $(".responsive_table").niceScroll();
    
    //============================================================================
    //  scroll top
    //============================================================================
    $('.topwrap').hide();
    $(window).scroll(function() {
    	if($(this).scrollTop() > 200) {
    		$('.topwrap').fadeIn();
    	}else {
    		$('.topwrap').fadeOut();
    	}
    });
    $('.topwrap').click(function() {
    	$('html, body').animate({scrollTop:"0"}, 400);
    	return false;
    });
    
    //============================================================================
    //  form common
    //============================================================================
    // input file
    $(".file_box .file_input_div").click(function(){
        $(this).find(".upload").click(function(){
            $(this).change(function(){
                var val = $(this).val();
                $(this).parent().siblings(".file_name").val(val);
            });
        });
    });
    
    // select
    $(".form_group.select select").selectmenu();
    $(".ui-menu[id^='location']").parent(".ui-front").css({"z-index":"105"});
    $(".ui-menu[id^='selectTop']").parent(".ui-front").css({"z-index":"9999"});
    $(document).scroll(function(){
        $(".form_group.select select").selectmenu("close");
    });
    
    // radio, checkbox 테두리 삭제
    $("input[type=radio], input[type=checkbox]").click(function(){$(this).blur();});  
    
    //============================================================================
    //  datepicker
    //============================================================================
    $("#datepicker1").datepicker({
        showOn: "button",
        buttonImage: "../../images/common/ico_common.png",
        buttonImageOnly: true,
        dateFormat: "yy-mm-dd",
        buttonText: "Select date",
        changeYear: true,
        changeMonth: true,
        showOtherMonths: true,
        monthNamesShort: [ "1","2","3","4","5","6","7","8","9","10","11","12" ],
        dayNamesMin: [ "일","월","화","수","목","금","토" ],
        buttonText: "날짜선택"
    });
    $("#datepicker2").datepicker({
        showOn: "button",
        buttonImage: "../../images/common/ico_common.png",
        buttonImageOnly: true,
        dateFormat: "yy-mm-dd",
        buttonText: "Select date",
        changeYear: true,
        changeMonth: true,
        showOtherMonths: true,
        monthNamesShort: [ "1","2","3","4","5","6","7","8","9","10","11","12" ],
        dayNamesMin: [ "일","월","화","수","목","금","토" ],
        buttonText: "날짜선택"
    });
    
    //============================================================================
    //  search date
    //============================================================================
    $(".sh_wrap .btn_group .btn").on("click", function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
    
    //============================================================================
    //  accordion
    //============================================================================
	var $accordionList =  $('.accordion .acc_header');
    $(".acc_content").hide();
    $(".acc_content.on").show();
    
	$accordionList.click(function(){
        $(this).siblings(".acc_content").toggleClass("on").stop().slideToggle(function(){
            if($(this).hasClass("on")) {
                $(this).siblings(".acc_header").find("i").removeClass("plus").addClass("minus");
            }else {
                $(this).siblings(".acc_header").find("i").removeClass("minus").addClass("plus");
            }
        });
	});
	
	//============================================================================
    //  today,3day,7day,30day,90day //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
    //============================================================================
	$('.search_group button').click(function(){
        
        var day = $(this).attr("day");
		if(day == 0){
			$('#datepicker1').datepicker('setDate', 'today');
			$('#datepicker2').datepicker('setDate', 'today');
		}else if(day == 3){
			$('#datepicker1').datepicker('setDate', '-3D');
			$('#datepicker2').datepicker('setDate', 'today');
		}else if(day == 7){
			$('#datepicker1').datepicker('setDate', '-7D');
			$('#datepicker2').datepicker('setDate', 'today');
		}else if(day == 30){
			$('#datepicker1').datepicker('setDate', '-1M');
			$('#datepicker2').datepicker('setDate', 'today');
		}else if(day == 90){
			$('#datepicker1').datepicker('setDate', '-3M');
			$('#datepicker2').datepicker('setDate', 'today');
		}else if(day == 'all'){
			$('#datepicker1').datepicker('setDate', '');
			$('#datepicker2').datepicker('setDate', '');
		}
	});
	
    //============================================================================
    //  paging
    //============================================================================
    $(".paging a").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
    });

    //============================================================================
    //  gnb toggle
    //============================================================================
    var menu_cookie_key = 'btn_gnb';

    $(".btn_gnb").click(function(){

        var $this = $(this);

        try {
            if( ! $this.hasClass("btn_gnb_open") ){
                set_cookie(menu_cookie_key, 1, 60*60*24*365);
            } else {
                delete_cookie(menu_cookie_key);
            }
        }
        catch(err) {
        }

        $("#container").toggleClass("on");
        $("#gnb").toggleClass("on");
        $this.toggleClass("btn_gnb_open");
        fixDragBtn();
        $("body").getNiceScroll().resize();
        $(".responsive_table").getNiceScroll().resize();
    });

    $(".gnb_ul > li").click(function() {
        $(this).addClass("on").siblings().removeClass("on");
    });
    $("#gnb .gnb_dth_ul li").click(function() {
        $("#gnb .gnb_dth_ul li").removeClass("on");
        $(this).addClass("on");
    });
    
    //============================================================================
    //  container 드래그
    //============================================================================
    if(window.addEventListener && document.getElementById("flbox") && document.getElementById("frbox")) {
        document.getElementById("dragbar").addEventListener("mousedown", function(e) {
            dragstart(e);
        });
        window.addEventListener("mousemove", function(e) {
            dragmove(e);
        });
        window.addEventListener("mouseup", dragend);
        window.addEventListener("load", fixDragBtn);
    }else if(window.addEventListener && document.getElementById("flbox") && !document.getElementById("frbox")) {
        document.getElementById("flbox").style.width = "100%";
        document.getElementById("flbox").style.maxWidth = "calc(100% - 10px)";
        document.getElementById("flbox").style.padding = "8px";
        document.getElementById("dragbar").addEventListener("mousedown", function(e) {
            dragstart(e);
        });
        window.addEventListener("mousemove", function(e) {
            dragmove(e);
        });
        window.addEventListener("mouseup", dragend);
        window.addEventListener("load", fixDragBtn);
    }else {
        
    }
    
    //============================================================================
    //  tooltip
    //============================================================================
    $(".tb_widr td").tooltip({
      items: "[data-geo]",
      content: function() {
        var element = $( this );
        if ( element.is( "[data-geo]" ) ) {
          return "<p><span>홍길동</span> <span>Level 1, SILVER</span></p><p>010-1234-5678</p><p>국민은행 (450-5674-87-03256)</p>";
        }
      }
    });
    
    //============================================================================
    //  modal
    //============================================================================
    $(document).on('click', '.close', function(){
        $('.modal').css('display', 'none');
    });

    $(document).on('click', function(event){
        if ($(event.target).attr('class') == 'modal') {
            $('.modal').css('display', 'none');
        }
    });
    $('#mainModal').css('display', 'block');
    
    // mainModal
    $(document).on('click', '.btn_mainModal', function(){
        $('#mainModal').css('display', 'block');
    });	
    
    // otpModal
    $(document).on("click", ".btn_otpmodal", function(){
        $('#otpModal').css('display', 'block');
    });
    
    // withdrawModal
    $(document).on("click", ".btn_withdraw", function(){
        $('#withdrawModal').css('display', 'block');
    });
	
});

// commonTab
function commonTab(tabParent, tabName){
	$("."+tabParent+" ul.tabbox li").removeClass("on");
	$("."+tabParent+" ul.tabbox li."+tabName).addClass("on");
	$("."+tabParent+" .hiddencontents").removeClass("on");
	$("."+tabParent+" .hiddencontents."+tabName).addClass("on");
}

// 쿠키 생성
function set_cookie(name, value, exp) {
    var date = new Date();
    date.setTime(date.getTime() + exp*24*60*60*1000);
    document.cookie = name + '=' + escape(value) + ';expires=' + date.toUTCString() + ';path=/';
};

// 쿠키 가져오기
function get_cookie(name) {
    
    var find_sw = false;
    var start, end;
    var i = 0;

    for (i=0; i<= document.cookie.length; i++)
    {
        start = i;
        end = start + name.length;

        if(document.cookie.substring(start, end) == name)
        {
            find_sw = true
            break
        }
    }

    if (find_sw == true)
    {
        start = end + 1;
        end = document.cookie.indexOf(";", start);

        if(end < start)
            end = document.cookie.length;

        return unescape(document.cookie.substring(start, end));
    }
    return "";
};

// 쿠키삭제
function delete_cookie(name) {
    
    var date = new Date();
    date.setTime(date.getTime() - 1);
    var value = get_cookie(name);
    if(value != "")
        document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';

}

// container 드래그
var dragging = false;

// 드래그 버튼
function fixDragBtn() {
    var flboxWid = $("#flbox").innerWidth();
    document.getElementById("dragbar").style.left = flboxWid + "px";
    
}

// 드래그 시작
function dragstart(e) {
    e.preventDefault();
    dragging = true;

}

//드래그 무브
function dragmove(e) {
    e.preventDefault();
    if(dragging) {
        var wrap = $("#dragArea").innerWidth();
        var percent; 
        if($("#gnb").hasClass("on")) {
            
            percent = ((e.pageX - 178) / wrap) * 100;
            
            if(percent > 5 && percent < 100) {
                var mainPercent = 100 - percent;
                if(document.getElementById("flbox") && document.getElementById("frbox")) {
                	console.log("111");
                    document.getElementById("flbox").style.width = percent + "%";
                    document.getElementById("flbox").style.minWidth = "50%";
                    document.getElementById("flbox").style.maxWidth = "calc(100% - 400px)";
                    document.getElementById("frbox").style.width = mainPercent + "%";
                    document.getElementById("frbox").style.minWidth = "400px";
                    document.getElementById("frbox").style.maxWidth = "50%";
                }
                if(document.getElementById("flbox") && !document.getElementById("frbox")) {
                	console.log("222");
                    document.getElementById("flbox").style.width = percent + "%";
                    document.getElementById("flbox").style.minWidth = "50%";
                    document.getElementById("flbox").style.maxWidth = "100%";
                }
                fixDragBtn();
            }
        }else {
            percent = ((e.pageX - 47) / wrap) * 100;
            if(percent > 5 && percent < 100) {
                var mainPercent = 100 - percent;
                if(document.getElementById("flbox") && document.getElementById("frbox")) {
                	console.log("333");
                    document.getElementById("flbox").style.width = percent + "%";
                    document.getElementById("flbox").style.minWidth = "50%";
                    document.getElementById("flbox").style.maxWidth = "calc(100% - 400px)";
                    document.getElementById("frbox").style.width = mainPercent + "%";
                    document.getElementById("frbox").style.minWidth = "400px";
                    document.getElementById("frbox").style.maxWidth = "50%";
                }
                if(document.getElementById("flbox") && !document.getElementById("frbox")) {
                	console.log("444");
                    document.getElementById("flbox").style.width = percent + "%";
                    document.getElementById("flbox").style.minWidth = "50%";
                    document.getElementById("flbox").style.maxWidth = "100%";
                }
                fixDragBtn();
            }
        }
        // 반응형 테이블 
        var frboxWid = $("#frbox .innerbox").width();
        var flboxWid = $("#flbox .innerbox").width();

        if(frboxWid < 540) {
            $("#frbox").addClass("respon");
        }else {
            $("#frbox").removeClass("respon");
        }
        if(flboxWid < 800) {
            $("#flbox").addClass("respon");
        }else {
            $("#flbox").removeClass("respon");
        }
        $("body").getNiceScroll().resize();
        $(".responsive_table").getNiceScroll().resize();
        grid.resizeCanvas();
    }
}

// 드래그 끝
function dragend(e) {
    dragging = false;

}