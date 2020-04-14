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
    //  main_slider
    //============================================================================
    $(".main_slider > ul").slick({
        autoplay: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: false,
        speed: 3000,
        autoplaySpeed: 3000,
    });
    
    //============================================================================
    //  coinbar slider
    //============================================================================
    $(".coinbar ul").slick({
        autoplay: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: false,
        speed: 3000,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    //============================================================================
    //  webtrading scroll
    //============================================================================
    var mainHt = $(".main_slider").height();
    $(window).scroll(function(){
        var moveTop = $(this).scrollTop();
        if(moveTop > 350) {
            $(".webtrading .txt_wrap").stop().animate({"top":"70px"}, "500", "linear");
            $(".webtrading .ani_img01").stop().animate({"left":"50%"}, "500", "linear", function(){
                $(".webtrading .ani_img02").stop().animate({"left":"50%"}, "500", "linear", function(){
                    $(".webtrading .ani_img03").stop().animate({"left":"50%"}, "500", "linear");
                });
            });
        }else {
            $(".webtrading .txt_wrap").stop().animate({"top":"300px"}, "500", "linear");
            $(".webtrading .ani_img03").stop().animate({"left":"-20%"}, "500", "linear", function(){
                $(".webtrading .ani_img02").stop().animate({"left":"-20%"}, "500", "linear", function(){
                    $(".webtrading .ani_img01").stop().animate({"left":"-20%"}, "500", "linear");
                });
            });
        }
    });
    
    //============================================================================
    //  // coin slider
    //============================================================================
    if($('.coin_slider .bxslider').length != 0) {
        var coinSlide = $('.coin_slider .bxslider').bxSlider({
            auto: false,
            moveSlides: 1,
            minSlides: 2,
            maxSlides: 7,
            slideWidth: 155,
            slideMargin: 10,
            pager: false,
            controls: false,
            infiniteLoop: false,
            shrinkItems: true,
        });
    }
    $(document).on('click', '.coin_slider .next', function(){
        coinSlide.goToNextSlide();
    });

    $(document).on('click', '.coin_slider .prev', function(){
        coinSlide.goToPrevSlide ();
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
        if($(this).children("i").hasClass("staron")) {
            $(this).children("i").removeClass("staron").addClass("star");
        }else if($(this).children("i").hasClass("star")) {
            $(this).children("i").removeClass("star").addClass("staron");
        }
        
    });
    $(".ticker_list_table tr[data-href]").on("click", function(){
        document.location = $(this).data("href");
    });
    
    //============================================================================
    //  mode change
    //============================================================================
//    $(".chart_change a").on("click", function(){
//        var $this = $(this).attr("class");
//        
//        switch($this) {
//            case "candle_mode" :
//                $(".chart_change a.candle_mode span").addClass("active");
//                $(".chart_change a.depth_mode span").removeClass("active");
//                
//                $(".depth_chart_box").removeClass("active");
//                $(".candle_chart_box").addClass("active");
//                break;
//            case "depth_mode" :
//                $(".chart_change a.depth_mode span").addClass("active");
//                $(".chart_change a.candle_mode span").removeClass("active");
//                
//                $(".candle_chart_box").removeClass("active");
//                $(".depth_chart_box").addClass("active");
//                break;
//        }
//    });
    
    
    //select
    $( ".sel_type" ).selectmenu();
	
	// radio, checkbox 테두리 삭제
    $("input[type=radio], input[type=checkbox]").click(function(){$(this).blur();}); 
    
    // table re open
	$(".tr_open .detail_open").click(function(){
		if($(this).parent().parent().next().is(":hidden")){
			$(".tr_open .detail_open").parent().parent().next().hide();
			$(this).parent().parent().next().show();
			$('.tr_open .detail_open_box').removeClass("active");
			$(this).parent().parent().addClass("active")
		}else if($(this).parent().parent().next().is(":visible")){
			$(this).parent().parent().next().hide();
			$(this).parent().parent().removeClass("active");
		}
	});
    
	/* faq */
	$(".faq dt").click(function(){
		if($(this).next().is(":hidden")){
			$(".faq dt").next().hide();
			$(".faq dt").removeClass("active");
			$(this).next().show();
			$(this).addClass("active");
		}else if($(this).next().is(":visible")){
			$(this).next().hide();
			$(this).removeClass("active");
		}
	});

	// input file
	$('.fake_file').click(function(){
		$(".real_file").click();
	});
	$('.real_file').change(function() {
		$('.file_name').text($('.real_file')[0].files[0].name);
	});

	// texearea
	$(function(){
		var $textAreaW =  $('.textarea_wrap textarea');
		$textAreaW.on('blur',function(){
			$(this).parent().removeClass('active');
		});
		$textAreaW.on('focus',function(){
			$(this).parent().addClass('active');
		});
	});

	// member input
	$(function(){
		var $inputAreaW =  $('.join_row > input[type="text"], .join_row > input[type="password"]');
		var $inputAreaW2 =  $('.join_col > input[type="text"], .join_col > input[type="password"]');
		var $inputAreaW3 =  $('.blocks2 .join_col > input[type="text"], .blocks2 .join_col > input[type="password"]');
		var $inputAreaW4 =  $('.join_col > .join_cols input[type="text"], .join_col > .join_cols input[type="password"]');
		$inputAreaW.on('blur',function(){
			$(this).parent().removeClass('active');
		});
		$inputAreaW.on('focus',function(){
			$(this).parent().addClass('active');
		});
		$inputAreaW2.on('blur',function(){
			$(this).parent().removeClass('active');
		});
		$inputAreaW2.on('focus',function(){
			$(this).parent().addClass('active');
		});
		$inputAreaW3.on('blur',function(){
			$(this).parent().parent().removeClass('active');
		});
		$inputAreaW3.on('focus',function(){
			$(this).parent().parent().addClass('active');
		});
		$inputAreaW4.on('blur',function(){
			$(this).parent().parent().removeClass('active');
		});
		$inputAreaW4.on('focus',function(){
			$(this).parent().parent().addClass('active');
		});
		$('.blocks2').has('input[type="text"]:disabled').addClass('dis');
	});

    // exchange input
    $(".order_form_box #orderSel-button, .order_form_box input").on("focus",function(){
        $(this).parents(".flbox").addClass("active");
        $(this).parents(".frbox").addClass("active");
    });
    $(".order_form_box #orderSel-button, .order_form_box input").on("blur",function(){
        $(this).parents(".flbox").removeClass("active");
        $(this).parents(".frbox").removeClass("active");
    });
    
	// placeholder
	var $placeholderWrap =  $('.placeholder_wrap input[type="text"], .placeholder_wrap input[type="password"]')
	$placeholderWrap.change(function() {
		if ($(this).val().length == 0){
			$(this).parent().find('label').css("display", "block");
		}
	}).keypress(function() {
		$(this).parent().find('label').css("display", "none");
	}).blur(function() {
		if ($(this).val().length == 0) {
			$(this).parent().find('label').css("display", "block");
		} else {
			$(this).parent().find('label').css("display", "none");
		}
	});

	//datepicker
	$( function() {
	    $( ".datepicker" ).datepicker({
	      showOn: "button",
	      buttonImage: "../../images/common/calendar.png",
	      buttonImageOnly: true,
	      dateFormat: "yy-mm-dd",
	      buttonText: "Select date",
	      changeYear: true,
	      changeMonth: true,
	      showOtherMonths: true,
	      monthNamesShort: [ "1","2","3","4","5","6","7","8","9","10","11","12" ],
	      dayNamesMin: [ "일","월","화","수","목","금","토" ],
	      buttonText: "Select date",
            showOptions: { direction: "up" }
	    });
	});
    
	$(document).ready(function(){
		
		$('ul.tabs li').click(function(){
			var tab_id = $(this).attr('data-tab');

			$('ul.tabs li').removeClass('current');
			$('.tab-content').removeClass('current');

			$(this).addClass('current');
			$("#"+tab_id).addClass('current');
		})
	});
	// 공통 tab
    $(".tab_type01 ul li a").click(function(){
        $(this).parents('.tab_type01').find("a").removeClass('active');
        $(this).addClass('active');
        $(this).parents(".tab_type01").find(".tab_view_box").removeClass("block");
        var contentid = $(this).attr("title");
        $("#" + contentid).addClass("block");
        
        if($(".market_tab.tab_type01 ul li:nth-child(1) a").hasClass("active")) {
            $(".market_tab.tab_type01 ul li i").removeClass("star").addClass("staron");
        }else {
            $(".market_tab.tab_type01 ul li i").removeClass("staron").addClass("star");
        }
    });
    
    //============================================================================
    //  ballance banner
    //============================================================================
    if($('.balance_box .bxslider').length != 0) {
        var coinSlide = $('.balance_box .bxslider').bxSlider({
            mode: "fade",
        	auto: true,
            speed: 5000,
            moveSlides: 1,
            pager: false,
            controls: false,
            infiniteLoop: true,
        });
    }
    
    //============================================================================
    //  가격그래프
    //============================================================================
    //<![CDATA[
    var $slider = $("#priceBar1"),
        default_min = 0,
        default_max = 100;

    $( "#priceBar1" ).slider({
        range: "min",
        min: default_min,
        max: default_max,
        values: default_max,
        step : 1,
        create: function(event, ui) {
            var pos_handle =$('.price_data1').find('.ui-slider-handle');
            $(pos_handle).append('<span class="ico_comb min_price1"></span>');
            $('.min_price1').text($(this).slider("value")+"%");
        },
        slide: function(event, ui ) {
            $('.min_price1').text(ui.value+'%');
        },
        change: function(event, ui){
            $('.min_price1').text(ui.value+'%');
        }
    });
    $slider.slider("value", 75);
    // ]]>
    
    //<![CDATA[
    var $slider = $("#priceBar2"),
        default_min = 0,
        default_max = 100;

    $( "#priceBar2" ).slider({
        range: "min",
        min: default_min,
        max: default_max,
        values: default_max,
        step : 1,
        create: function(event, ui) {
            var pos_handle =$('.price_data2').find('.ui-slider-handle');
            $(pos_handle).append('<span class="ico_comb min_price2"></span>');
            $('.min_price2').text($(this).slider("value")+"%");
        },
        slide: function(event, ui ) {
            $('.min_price2').text(ui.value+'%');
        },
        change: function(event, ui){
            $('.min_price2').text(ui.value+'%');
        }
    });
    $slider.slider("value", 75);
    // ]]>
    
    //<![CDATA[
    var $slider = $("#priceBar3"),
        default_min = 0,
        default_max = 100;

    $( "#priceBar3" ).slider({
        range: "min",
        min: default_min,
        max: default_max,
        values: default_max,
        step : 1,
        create: function(event, ui) {
            var pos_handle =$('.price_data3').find('.ui-slider-handle');
            $(pos_handle).append('<span class="ico_comb min_price3"></span>');
            $('.min_price3').text($(this).slider("value")+"%");
        },
        slide: function(event, ui ) {
            $('.min_price3').text(ui.value+'%');
        },
        change: function(event, ui){
            $('.min_price3').text(ui.value+'%');
        }
    });
    $slider.slider("value", 75);
    // ]]>
    
    //<![CDATA[
    var $slider = $("#priceBar4"),
        default_min = 0,
        default_max = 100;

    $( "#priceBar4" ).slider({
        range: "min",
        min: default_min,
        max: default_max,
        values: default_max,
        step : 1,
        create: function(event, ui) {
            var pos_handle =$('.price_data4').find('.ui-slider-handle');
            $(pos_handle).append('<span class="ico_comb min_price4"></span>');
            $('.min_price4').text($(this).slider("value")+"%");
        },
        slide: function(event, ui ) {
            $('.min_price4').text(ui.value+'%');
        },
        change: function(event, ui){
            $('.min_price4').text(ui.value+'%');
        }
    });
    $slider.slider("value", 75);
    // ]]>
    
    //============================================================================
    //  table scroll
    //============================================================================
    var thead1 = $("#trade_tab1 .thead");
    var tbody1 = $("#trade_tab1 .tbody");
    var thead2 = $("#trade_tab2 .thead");
    var tbody2 = $("#trade_tab2 .tbody");
    var thead3 = $("#trade_tab3 .thead");
    var tbody3 = $("#trade_tab3 .tbody");
    
    thead1.scroll(function(){
        tbody1.scrollLeft(thead1.scrollLeft());
    });

    tbody1.scroll(function(){
        thead1.scrollLeft(tbody1.scrollLeft());
    });
    
    thead2.scroll(function(){
        tbody2.scrollLeft(thead2.scrollLeft());
    });

    tbody2.scroll(function(){
        thead2.scrollLeft(tbody2.scrollLeft());
    });
    
    thead3.scroll(function(){
        tbody3.scrollLeft(thead3.scrollLeft());
    });

    tbody3.scroll(function(){
        thead3.scrollLeft(tbody3.scrollLeft());
    });
    
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
    	$('html, body').animate({scrollTop:"95px"}, 400);
    	return false;
    });
    
    //============================================================================
    //  mypage click
    //============================================================================
    $(".sh_wrap .btn_basic").on("click", function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
    
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
    
    // 매수 팝업 
    $("#comptePop01").dialog({
        autoOpen: false,
        modal: true,
        resizable: false,
        draggable: false,
        dialogClass: "compte_dialog",
        width: "auto",
        height: "auto",
        position: {my: "center", at: "center", of: ".order_form_box .flbox"}
    });
    $(".order_form_box .btn_buy").on("click",function(){
        $("#comptePop01").dialog("open");
    });
    
    // 매도 팝업 
    $("#comptePop02").dialog({
        autoOpen: false,
        modal: true,
        resizable: false,
        draggable: false,
        dialogClass: "compte_dialog",
        width: "auto",
        height: "auto",
        position: {my: "center", at: "center", of: ".order_form_box .frbox"}
    });
    $(".order_form_box .btn_sell").on("click",function(){
        $("#comptePop02").dialog("open");
    });
    
    // 입금 팝업 
    $("#comptePop03").dialog({
        autoOpen: false,
        modal: true,
        resizable: false,
        draggable: false,
        dialogClass: "compte_dialog",
        width: "auto",
        height: "auto",
        position: {my: "center", at: "center", of: "#tems01"}
    });
    // 출금 팝업 
    $("#comptePop04").dialog({
        autoOpen: false,
        modal: true,
        resizable: false,
        draggable: false,
        dialogClass: "compte_dialog",
        width: "auto",
        height: "auto",
        position: {my: "center", at: "center", of: "#tems02"}
    });
    
    // KRW 입출금 내역 
    $("#comptePop05").dialog({
        autoOpen: false,
        modal: true,
        resizable: false,
        draggable: false,
        dialogClass: "compte_dialog",
        width: "auto",
        height: "auto",
        position: {my: "center", at: "center", of: window}
    });
    $(".tb_widr .btn_basic.type4").on("click",function(){
        $("#comptePop05").dialog("open");
    });
    
    $("#otpClose").click(function name() {
    	$("#otpModal").css("display","none");
    });
    
    //============================================================================
    //  eventModal
    //============================================================================
//    $(document).on('click', '.close', function(){
//        $('.modal').css('display', 'none');
//    });
//
//    $(document).on('click', function(event){
//        if ($(event.target).attr('class') == 'modal') {
//            $('.modal').css('display', 'none');
//        }
//    });
    $('#eventModal01').css('display', 'block');
    $('#modal02').css('display', 'block');
    
    $(document).on('click', function(event){
        if ($(event.target).attr('class') == 'btn_event_close01 close') {
            $('#eventModal01').css('display', 'none');
        }
    });
    $(document).on('click', function(event){
        if ($(event.target).attr('class') == 'btn_event_close02 close') {
            $('#modal02').css('display', 'none');
        }
    });
    
    // KRW 입출금 내역 툴팁 
    $(".tb_widr .tb_list td").tooltip({
      items: "[data-geo]",
      content: function() {
        var element = $( this );
        if ( element.is( "[data-geo]" ) ) {
          return "<p><span>홍길동</span> <span>Level 1, SILVER</span></p><p>010-1234-5678</p><p>국민은행 (450-5674-87-03256)</p>";
        }
      }
    });
    
});

