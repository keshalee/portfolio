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
    //  mobile nav toggle
    //============================================================================
    var winWid; // window width
    $(window).resize(function(){
        winWid = $(window).width();
        if(winWid > 1024) {
            $("#header nav").css({"right":"0"}, 500);
        }else {
            $("#header nav").css({"right":"-200px"}, 500);
        }
    }).resize();
    
    $(".nav_bar").on("click",function(){
        $(this).toggleClass("active");
        
        if($(this).hasClass("active")) {
            $("#header nav").stop().animate({"right":"0"}, 500);
        }else {
            $("#header nav").stop().animate({"right":"-200px"}, 500);
        }
    });
    
    $("#header nav li").on(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
    
    //============================================================================
    //  공통 tab
    //============================================================================
	$('.tab_type > ul > li a').on("click",function(){
		$(this).parents('.tab_type').find("li").removeClass('on');
		$(this).parent().addClass('on');
		$(this).parents('.tab_type').find('.tab_view_box').removeClass('on');
		var contenttitle = $(this).attr('title');
		$('.tab_view_box.' + contenttitle).addClass('on');
	});
    
    //============================================================================
    //  switch
    //============================================================================
    $(".switch_track").click(function(){
        $(this).toggleClass("off");
        if($(this).hasClass("off")){
            $(this).children(".switch_track_on").stop().animate({"width":"0"},300);
            $(this).children(".switch_track_off").stop().animate({"width":"66px"},300);
            $(this).children(".switch_ball").stop().animate({"left":"0"},300);
        }else {
            $(this).children(".switch_track_on").stop().animate({"width":"66px"},300);
            $(this).children(".switch_track_off").stop().animate({"width":"0"},300);
            $(this).children(".switch_ball").stop().animate({"left":"52px"},300);
        }
    });
    
    //============================================================================
    //  iframe
    //============================================================================
    $(".btn_frm").click(function(){
        var src = $(this).attr("target");
        $("#ifmCon").attr("src", src);
         
//        $('#ifmCon').load(function(e) {
//            $(this).height(0); 
//            $(this).height($(this).contents().find('body')[0].scrollHeight+"px"); 
//        });
//        $("<iframe scrolling='no' id='ifmCon' />").attr("src", src).attr("frameborder", 0).attr("width", "100%").attr("height", "0px").appendTo(".ifm_contents");
//    $('#ifmCon').iframeAutoHeight({heightOffset: 10});
        
    });
    
//    var ifm = document.getElementById('ifmCon'); 
//    var ifmW = (ifm.contentWindow) ? ifm.contentWindow : (ifm.contentDocument.document) ? ifm.contentDocument.document : ifm.contentDocument;
//    var x = document.getElementById("ifmCon");
//    console.log(x.contentDocument);
//    console.log(x.contentWindow);
    
//    console.log($("#ifmCon").contents().prevObject);

//var y = (x.contentWindow || x.contentDocument);
//if (y.document)y = y.document;
    
    
    //============================================================================
    //  datepicker
    //============================================================================
    $("#datepicker1").datepicker({
        showOn: "button",
        buttonImage: "../../images/common/icon_cal.png",
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
        buttonImage: "../../images/common/icon_cal.png",
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
    //  coin bar slider
    //============================================================================
    $(".coin_slider > ul").slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: true,
        appendArrows: $(".coin_slider > .btnset"),
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    
    //============================================================================
    //  scrollbar
    //============================================================================
    $(".responsive_table").mCustomScrollbar({
        theme: "dark-thin",
        scrollbarPosition: "outside",
        autoHideScrollbar:true,
        mouseWheel:{ preventDefault: true }
    });
    
    //============================================================================
    //  시장현황 팝업
    //============================================================================
    $(window).resize(function(){
        winWid = $(window).width();
        if(winWid > 1024) {
        	$(".list_wrap").hover(function(){
                $(this).addClass("active");
                $(".layer_market_list").addClass("active");
            }, function(){
                $(this).removeClass("active");
                $(".layer_market_list").removeClass("active");
            });
        }else {
        	$(".btn_list_pop").on("click", function(){
                $(this).toggleClass("active");
                $(".layer_market_list").toggleClass("active");
            });
        }
    }).resize();
    
    //============================================================================
    //  시장현황 리스트
    //============================================================================
    $(".ticker_box .ticker_list_table button").on("click", function(){
        $(this).children("i").toggleClass("on");
    });
    $(".ticker_list_table tr[data-href]").on("click", function(){
        document.location = $(this).data("href");
    });
    
    //============================================================================
    //  가격그래프
    //============================================================================
    //<![CDATA[
    var $slider = $("#priceBar1"),
        $lowerInput = $('#priceStart1'),
        $upperInput =$('#priceEnd1'),
        default_min = 0,
        default_max = 100;

    $( "#priceBar1" ).slider({
        range: true,
        min: default_min,
        max: default_max,
        values: [ default_min , default_max ],
        step : 1,
        create: function(event, ui) {
            var pos_handle =$('.price_data1').find('.ui-slider-handle');
            $(pos_handle[0]).append('<span class="ico_comb min_price1"></span>');
            $(pos_handle[1]).append('<span class="ico_comb max_price1"></span>');
        },
        slide: function( event, ui ) {
            $('.min_price1').text(ui.values[0]+'%');
            $('.max_price1').text(ui.values[1]+'%');
            $lowerInput.val(ui.values[0]);
            $upperInput.val(ui.values[1]);
        },
        change: function( event, ui){
            $('.min_price1').text(ui.values[0]+'%');
            $('.max_price1').text(ui.values[1]+'%');
        }
    });

        var val_01 = $slider.slider('values', 0);
        var val_02 = $slider.slider('values', 1);
        $('.min_price1').text('$'+val_01);
        $('.max_price1').text('$'+val_02);
        $lowerInput.val(0);
        $upperInput.val(100);
        $slider.slider('values', 0, 0);
        $slider.slider('values', 1, 75);

    $lowerInput.change(function () {
        var low = $lowerInput.val(),
            high = $upperInput.val();
        low = Math.min(low, high);
        $lowerInput.val(low);
        $slider.slider('values', 0, low);
    });
    $upperInput.change(function () {
        var low = $lowerInput.val(),
            high = $upperInput.val();
        high = Math.max(low, high);
        if (high > default_max){
            high = default_max ;
        }
        $upperInput.val(high);
        $slider.slider('values', 1, high);
    });
    // ]]>
    
    //<![CDATA[
    var $slider = $("#priceBar2"),
        $lowerInput = $('#priceStart2'),
        $upperInput =$('#priceEnd2'),
        default_min = 0,
        default_max = 100;

    $( "#priceBar2" ).slider({
        range: true,
        min: default_min,
        max: default_max,
        values: [ default_min , default_max ],
        step : 1,
        create: function(event, ui) {
            var pos_handle =$('.price_data2').find('.ui-slider-handle');
            $(pos_handle[0]).append('<span class="ico_comb min_price2"></span>');
            $(pos_handle[1]).append('<span class="ico_comb max_price2"></span>');
        },
        slide: function( event, ui ) {
            $('.min_price2').text(ui.values[0]+'%');
            $('.max_price2').text(ui.values[1]+'%');
            $lowerInput.val(ui.values[0]);
            $upperInput.val(ui.values[1]);
        },
        change: function( event, ui){
            $('.min_price2').text(ui.values[0]+'%');
            $('.max_price2').text(ui.values[1]+'%');
        }
    });

        var val_01 = $slider.slider('values', 0);
        var val_02 = $slider.slider('values', 1);
        $('.min_price2').text('$'+val_01);
        $('.max_price2').text('$'+val_02);
        $lowerInput.val(0);
        $upperInput.val(100);
        $slider.slider('values', 0, 0);
        $slider.slider('values', 1, 75);

    $lowerInput.change(function () {
        var low = $lowerInput.val(),
            high = $upperInput.val();
        low = Math.min(low, high);
        $lowerInput.val(low);
        $slider.slider('values', 0, low);
    });
    $upperInput.change(function () {
        var low = $lowerInput.val(),
            high = $upperInput.val();
        high = Math.max(low, high);
        if (high > default_max){
            high = default_max ;
        }
        $upperInput.val(high);
        $slider.slider('values', 1, high);
    });
    // ]]>
    
    //============================================================================
    //  dialog
    //============================================================================
    $(window).resize(function(){
//        $(".dialog").position({my: "center", at: "center", of: "#wrapper"});
        $(".dialog").dialog("option","position", $(".dialog").dialog("option","position"));
    });
    $(".close_dialog").on("click", function(){
        $(this).parents(".dialog").dialog("close");
    });
    $(document).on('click', '.ui-widget-overlay', function(){
        $(".dialog").dialog("close");
    });
    
    // loginDialog
    $("#loginDialog").dialog({
        autoOpen: false,
        modal: true,
        resizable: false,
        draggable: false,
        dialogClass: "no_title form_dialog login_dialog",
        width: "auto",
        height: "auto"
    });
    $(".btn_login").on("click",function(){
        $("#loginDialog").dialog("open");
    });
    
    // joinDialog
    $("#joinDialog").dialog({
        autoOpen: false,
        modal: true,
        resizable: false,
        draggable: false,
        dialogClass: "no_title form_dialog join_dialog",
        width: "auto",
        height: "auto"
    });
    $(".btn_join").on("click",function(){
        $("#joinDialog").dialog("open");
    });
    
    // findIdDialog
    $("#findIdDialog").dialog({
        autoOpen: false,
        modal: true,
        resizable: false,
        draggable: false,
        dialogClass: "no_title form_dialog find_id_dialog",
        width: "auto",
        height: "auto"
    });
    $(".btn_find_id").on("click",function(){
        $("#findIdDialog").dialog("open");
    });
    
    // findPwDialog
    $("#findPwDialog").dialog({
        autoOpen: false,
        modal: true,
        resizable: false,
        draggable: false,
        dialogClass: "no_title form_dialog find_pw_dialog",
        width: "auto",
        height: "auto"
    });
    $(".btn_find_pw").on("click",function(){
        $("#findPwDialog").dialog("open");
    });
    
    //============================================================================
    //  약관보기
    //============================================================================
    $(".join_dialog .dialog_content .checkbox_wrap .p_agree").slideUp();
    $(".join_dialog .dialog_content .checkbox_wrap a.btn_c01").click(function(){
        $(this).parent().next().slideToggle();
    });
    
    //============================================================================
    //  checkbox click event
    //============================================================================
    $(".check_box input[type='checkbox']").prop("checked",false);
    $(".check_box label").on("click",function(){
        var chk = $(this).children("input[type='checkbox']").prop("checked");
        chk = !chk;
        $(this).children("input[type='checkbox']").prop("checked",chk);
        if(chk) {
//            $(this).children("span").css({"color":"#5b9cc4"});
            $(this).children("img").attr("src","../../images/common/icon_chk_on.png");
        }else {
//            $(this).children("span").css({"color":"#fff"});
            $(this).children("img").attr("src","../../images/common/icon_chk_off.png");
        }
    });
    
    //============================================================================
    //  selectmenu
    //============================================================================
    $(".form_control.select").selectmenu();
    
    //============================================================================
    //  radio, checkbox 테두리 삭제
    //============================================================================
    $("input[type=radio], input[type=checkbox]").click(function(){$(this).blur();}); 
    
    //============================================================================
    //  input file
    //============================================================================
	$('.fake_file').click(function(){
		$(".real_file").click();
	});
	$('.real_file').change(function() {
		$('.file_name').text($('.real_file')[0].files[0].name);
	});
    
    //============================================================================
    //  table scroll
    //============================================================================
    var thead = $(".trade_history_box .thead");
    var tbody = $(".trade_history_box .tbody");

    thead.scroll(function(){
        tbody.scrollLeft(thead.scrollLeft());
    });

    tbody.scroll(function(){
        thead.scrollLeft(tbody.scrollLeft());
    });

});

// commonTab
function commonTab(tabParent, tabName){
	$("."+tabParent+" ul.tabbox li").removeClass("active");
	$("."+tabParent+" ul.tabbox li."+tabName).addClass("active");
	$("."+tabParent+" .hiddencontents").removeClass("active");
	$("."+tabParent+" .hiddencontents."+tabName).addClass("active");
}

// tb_panel
function panelOpen(panel){
    var $panel = $(panel);
    var $panel_content = $(panel).next(".panel_content");
    
    if($panel_content.is(":visible")) {
        $panel_content.slideUp("fast",function(){
            $panel.find(".btn_d04").removeClass("active");
        });
    }else {
        $panel_content.slideDown("fast",function(){
            $panel.find(".btn_d04").addClass("active");
        });
        $panel.parent(".panel_open").siblings().find(".panel_content").slideUp("fast",function(){

            $panel.parent(".panel_open").siblings().find(".btn_d04").removeClass("active");
        });
    }
}

//function getDocHeight(doc) {
//    doc = doc || document;
//    // stackoverflow.com/questions/1145850/
//    var body = doc.body, html = doc.documentElement;
//    var height = Math.max( body.scrollHeight, body.offsetHeight, 
//        html.clientHeight, html.scrollHeight, html.offsetHeight );
//    return height;
//}
//
//function setIframeHeight(id) {
//    var ifrm = document.getElementById(id);
//    var doc = ifrm.contentDocument? ifrm.contentDocument: 
//        ifrm.contentWindow.document;
//    ifrm.style.visibility = 'hidden';
//    ifrm.style.height = "10px"; // reset to minimal height ...
//    // IE opt. for bing/msn needs a bit added or scrollbar appears
//    ifrm.style.height = getDocHeight( doc ) + 4 + "px";
//    ifrm.style.visibility = 'visible';
//}
