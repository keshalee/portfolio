(function($) {
    $.fn.rating = function(method, options) {
        method = method || 'create';
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            limit: 5,
            value: 5,
            glyph: "fa-star",
            coloroff: "#aaaaaa",
            coloron: "#f7b310",
            size: "1.2em",
            cursor: "default",
            onClick: function() {},
            endofarray: "idontmatter"
        }, options);
        var style = "";
        style = style + "font-size:" + settings.size + "; ";
        style = style + "color:" + settings.coloroff + "; ";
        style = style + "cursor:" + settings.cursor + "; ";
        
        if (method == 'create') {
            //this.html('');	//junk whatever was there
            //initialize the data-rating property
            this.each(function() {
                attr = $(this).attr('data-rating');
                if (attr === undefined || attr === false) {
                    $(this).attr('data-rating', settings.value);
                }
            });
            //bolt in the glyphs
            for (var i = 0; i < settings.limit; i++) {
                this.append('<span data-value="' + (i + 1) + '" class="ratingicon fa ' + settings.glyph + '" style="' + style + '" aria-hidden="true"></span>');
            }
            //paint
            this.each(function() {
                paint($(this));
            });
        }
        if (method == 'set') {
            this.attr('data-rating', options);
            this.each(function() {
                paint($(this));
            });
        }
        if (method == 'get') {
            return this.attr('data-rating');
        }
        //register the click events
        this.find("span.ratingicon").click(function() {
            rating = $(this).attr('data-value');
            $(this).parent().attr('data-rating', rating);
            $(this).closest('.star').next('.grade').find('span').text(rating); //add rating
            paint($(this).parent());
            settings.onClick.call($(this).parent());
        });
        function paint(div) {
            rating = parseInt(div.attr('data-rating'));
            div.find("input").val(rating); //if there is an input in the div lets set it's value
            div.find("span.ratingicon").each(function() { //now paint the stars

                var rating = parseInt($(this).parent().attr('data-rating'));
                var value = parseInt($(this).attr('data-value'));
                if (value > rating) {
                    $(this).css('color', settings.coloroff);
                } else {
                    $(this).css('color', settings.coloron);
                }
            });
        }
    };
}(jQuery));

$(window).load(function() {

    $('.body_wrap').remove();
    
    //메뉴 고정
    scroll_top();
    $(window).scroll(function(){
        scroll_top();
    });
    $(window).resize(function(){
        scroll_top();
    });
    
    // 상단메뉴 마우스오버효과
    $('#mainMenu ul.topnav li.menu_w').hover(function() {
        $(this).addClass('on');
    }, function() {
        $(this).removeClass('on');
    });

    // 프리미엄형 모바일메뉴
    $('li.icon').click(function() {
        if ($('#mobile_menu').hasClass('active')) {
            $('body').css('overflow', 'auto');
            $('#mobile_menu').removeClass('active');
            $('#mainMenu .ulright').show();
            $('#section21 .slick-arrow').css('z-index', '0');
        } else {
            if ($('#mainMenu').hasClass('active')) {
                $('#mobile_menu').css('top', '51px');
                $('#mobile_menu .w50.right ul:last-child').css('padding-bottom', '60px')
                $('#mobile_menu .w50.left .wrap ul').css('padding-bottom', '55px')
            } else {
                $('#mobile_menu').css('top', '90px');
                $('#mobile_menu .w50.right ul:last-child').css('padding-bottom', '102px')
                $('#mobile_menu .w50.left .wrap ul').css('padding-bottom', '90px')
            }

            $('body').css('overflow', 'hidden');
            $('#mobile_menu').addClass('active');
            $('#mainMenu .ulright').hide();
            $('#section21 .slick-arrow').css('z-index', '0');
        }
    });
    
    $('#mobile_menu .left li').click(function() {
        $('#mobile_menu .left li').removeClass('on');
        $(this).addClass('on');
        var index = $(this).index();
        var top = $('#mobile_menu .right .inner > ul').eq(index).position().top;
        if (index > 0) top += 40;
        $('#mobile_menu .right').stop().animate({
            scrollTop: top
        }, 1000);
    });
    
    $(".stars-default").rating();
    
    $('input, textarea').placeholder();
    
    $(".ell2").dotdotdot({
        ellipsis : "...",
        watch:true,
    });
    
    $(".ell3").dotdotdot({
        ellipsis : "...",
        watch:true,
    });
    
    $(".ell4").dotdotdot({
        ellipsis : "...",
        watch:true,
    });
    
    $(".ell5").dotdotdot({
        ellipsis : "...",
        watch:true,
    });
    
    // #section_menu
    var menu_ea = $("#section_menu ul li").length;
    var menu_wid = $("#section_menu ul").width();
    var menu_li_wid = menu_wid / menu_ea;
    if(menu_ea <= 5) {
        $("#section_menu ul li").css({"width":menu_li_wid});
    }else if(menu_ea > 5) {
        $("#section_menu ul li").css({"width":"20%"});
    }
    
    $('#select_menu li').click(function(){
		if($(this).index()==2 ) {
            if($(this).hasClass('on')) {
                $(this).removeClass('on');
            }else {
                $(this).addClass('on');
            }
        }
	});
    
    //  top scroll btn
    $(document).on('click', '#top_scroll', function(event){
        event.preventDefault();
        $("html, body").stop().animate({ scrollTop: "0" }, 'slow', 'easeInQuint');
    });
    
    //============================================================================
    //  메인
    //============================================================================
    //탭메뉴 공통
    function init_tabs() {
        if (!$(".tab-nav").length) {
            return;
        }
        $("div.tab-contentsWrap").each(function() {
            $(this).find("div.tab-contents:first").addClass('open');
        });
        $(".tab-nav > li").on('click', 'a', function() {
            if (!$(this).hasClass('on')) {
                $(this).addClass('on').parent('li').siblings('li').find('a.on').removeClass('on');
                $($(this).attr('href')).addClass('open').siblings('div.tab-contents').removeClass('open');
            }
            return false;
        });
    }

    init_tabs();
    
    $(window).resize(function(){
        var wid = $(window).width();
        if(wid > 1024) {
            //탭메뉴 공통
            $(".tab-nav .video01").click(function() {
                $('#videoTheme .video01').addClass('open');
                $('#videoTheme .video02').removeClass('open');
                $('#videoTheme .video03').removeClass('open');
                $('.bf_news_content').stop().animate({
                    'bottom': "-445",
                    'opacity': "0"
                });

                $('.scrolling').fadeIn('slow');
            });
            $(".tab-nav .video02").click(function() {
                $('#videoTheme .video01').removeClass('open');
                $('#videoTheme .video02').addClass('open');
                $('#videoTheme .video03').removeClass('open');
                $('.bf_news_content').stop().animate({
                    'bottom': "-445",
                    'opacity': "0"
                });

                $('.scrolling').fadeIn('slow');
            });
            $(".tab-nav .video03").click(function() {
                $('#videoTheme .video01').removeClass('open');
                $('#videoTheme .video02').removeClass('open');
                $('#videoTheme .video03').addClass('open');
                $('.bf_news_content').stop().animate({
                    'bottom': "-445",
                    'opacity': "0"
                });

                $('.scrolling').fadeIn('slow');
            });
       }else {
           //탭메뉴 공통
            $(".tab-nav .video01").click(function() {
                $('#videoTheme .video01').addClass('open');
                $('#videoTheme .video02').removeClass('open');
                $('#videoTheme .video03').removeClass('open');
                $('.bf_news_content').stop().animate({
                    'bottom': "-445",
                    'opacity': "0"
                });

                $('.scrolling').fadeOut('slow');
            });
            $(".tab-nav .video02").click(function() {
                $('#videoTheme .video01').removeClass('open');
                $('#videoTheme .video02').addClass('open');
                $('#videoTheme .video03').removeClass('open');
                $('.bf_news_content').stop().animate({
                    'bottom': "-445",
                    'opacity': "0"
                });

                $('.scrolling').fadeOut('slow');
            });
            $(".tab-nav .video03").click(function() {
                $('#videoTheme .video01').removeClass('open');
                $('#videoTheme .video02').removeClass('open');
                $('#videoTheme .video03').addClass('open');
                $('.bf_news_content').stop().animate({
                    'bottom': "-445",
                    'opacity': "0"
                });

                $('.scrolling').fadeOut('slow');
            });
       }
    }).resize();

    $(".bf_news .newsTxt a").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
    
    // 비디오
    $('.video_btn').on('click',function(){
        $('.video').append('<div class="video_box"><iframe src="https://www.youtube.com/embed/-wJ4bv_U5pw?showinfo=0&controls=2&modestbranding=1&rel=0&vq=hd720" frameborder="0" allowfullscreen></iframe></div>');
        $(this).hide();
        $('.bx-prev').hide();
        $('.bx-next').hide();
        $('.video_close').show();
        $('.section1 .scrolling').hide();
    })
    $('.video_close').on('click',function(){
        $('.video_btn').show();
        $('.bx-prev').show();
        $('.bx-next').show();
        $('.video_close').hide();
        $('.video_box').remove();
        $('.section1 .scrolling').show();
    })

    $('.start-best .tab-nav li a').on('click',function(){
        $('.video_close').hide();
        $('.video_box').remove();
        $('.video_btn').show();
    })
    
    // 메인 - 상품슬라이더
    $('.arrTab01 > div').slick({
        infinite: false,
        slidesToScroll: 1,
        variableWidth: true,
        focusOnSelect: true,
        accessibility: false,
        prevArrow: $('.prev01'),
        nextArrow: $('.next01'),
        speed: 1000
    }).on({
        beforeChange: function(event, slick, currentSlide, nextSlide) {
            $(slick.$slides[nextSlide]).addClass('active');
            $(slick.$slides[nextSlide]).next('div').removeClass('active');
        }
    });
	
    function scrolling() {
        $('.scrolling span').stop().animate({
            'bottom': 115,
            'opacity': 0.2
        }, {
            queue: false,
            duration: 700,
            complete: function() {
                $('.scrolling span').stop().css({
                    'bottom': 100,
                    'opacity': 1
                });
                scrolling();
            }
        });
    }

    scrolling();
    
    var slider = $('.bf_news_content .bxslider').bxSlider({
        mode: 'fade',
        auto: true,
        autoHover: true,
        speed: 500,
        controls: false,
        pagerCustom: '.bf_news_content #bx-pager'
    });

    var testInterval = setInterval(function() {
        $('.scrolling').delay(1000).hide('slow');
        $('.bf_news_content').delay(1000).stop().animate({'bottom':0, 'opacity':50 });
        $(".bf_news").delay(500).stop().animate({"height":"390px"});
    },1000);

    setTimeout(function() {            
        clearTimeout(testInterval);
    },1000);

    $('.scrolling').click(function() {
        $(".bf_news").stop().animate({"height":"390px"});
        $('.bf_news_content').stop().animate({
            'bottom': 0,
            'opacity': 1
        });
        $('.scrolling').hide();
        slider.reloadSlider({mode:"fade"});
    });
    
    $('.bf_news_colse_btn').click(function() {
        $(".bf_news").stop().animate({"height":"0"});
        $('.bf_news_content').stop().animate({
            'bottom': -390,
            'opacity': 0
        });
        $('.scrolling').fadeIn('slow');
    });
    
    //============================================================================
    //  #section2 - 개요
    //============================================================================
    $(".ceoslider > ul").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        appendArrows: $(".ceoslider > .btnset"),
    });
	
	//============================================================================
    //  #section5 - 스텝소개
    //============================================================================
    $(document).on('click', '#section5 .myModalBtn', function(){
        var index = $(this).index();

        $('#section5 #myModal').css('display', 'block');

		$("body").css({ overflow:'hidden'});
    });
    
	//============================================================================
    //  #section11 - 지사안내
    //============================================================================
	$(document).on('click', '#section11 .myModalBtn', function(){
        var index = $(this).index();
		if($(window).width() <= 1200)
		{
			$('#section11 #myModal').css('display', 'block');
			
			$("body").css({ overflow:'hidden'});
		}
	});
	
    //============================================================================
    //  #section13 - 사업분야
    //============================================================================
    $("#section13 .intro_top > ul").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: false,
		draggable: false,
    });
    
    $("#section13 .intro_img > ul").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: false,
    });
    
	//============================================================================
    //  #section19 - 사회공헌
    //============================================================================
    $('#section20 .bg_slider > ul').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows:true,
        appendArrows: $("#section20 .bg_slider > .btnset"),
    });
	
	//============================================================================
    //  #section21 - 인증서
    //============================================================================
    $(document).on('click', '#section21 .myModalBtn', function(){
        var index = $(this).index();

        $('#section21 #emmodal01').css('display', 'block');

		$("body").css({ overflow:'hidden'});
    });
	
	//============================================================================
    //  #section25 - 이용후기
    //============================================================================
    // 첫번째 타입
    $(document).on('click', '#section25 .modal_review', function(){
        var index = $(this).index();

        $('#section25 #modal_review').css('display', 'block');
        
        $("#section25 .review_slide .slider-for").slick('setPosition'); 
        $("#section25 .review_slide .slider-nav").slick('setPosition'); 
		
		$("body").css({ overflow:'hidden'});
    });
    
    $('#section25 .review_slide .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        appendArrows: $(".for_wrapper > .btnset"),
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('#section25 .review_slide .slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows:false,
        centerMode: true,
        centerPadding: 0,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    
    // 리뷰2
    $(document).on('click', '#section25 .modal_review2', function(){
        var index = $(this).index();

        $('#section25 #modal_review2').css('display', 'block');

		$("body").css({ overflow:'hidden'});
    });
	
	//============================================================================
    //  #section27 - 행사일정표  
    //============================================================================
    $(document).on('click', '#section27 .myModalBtn', function(){
        var index = $(this).index();

        $('#section27 #myModal').css('display', 'block');
		
		$("body").css({ overflow:'hidden'});
    });
	
	//============================================================================
    //  #section33 - 쇼핑
    //============================================================================
	$(".boardbox .board2 > ul").slick({
		slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
		centerMode: true,
		centerPadding: "25%",
	});
	
	$("#section33 .best_shop_slide > ul").slick({
		slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
		responsive: [
			{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },{
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
	});
	
	$("#section33 .rec_shop_slide > ul").slick({
		slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
		responsive: [
			{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },{
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
	});
	
	$(document).on('click', '.shop_list_wrap .category button', function(){
        var index = $(this).index();
		
        $(this).addClass("active").siblings().removeClass("active");
    });
	
	//============================================================================
    //  #section34 - 상세페이지
    //============================================================================
	$(".btn_video").click(function(){
		$(this).css({"background-image":"none"});
		$(this).stop().animate({"width":"100%","height":"100%"}, 1000, function(){
			$(this).children("iframe").css({"display":"block"});
			$(".btn_video_close").css({"display":"block"});
		});
	});
	
	$(".btn_video_close").click(function(){
		$(".btn_video").children("iframe").css({"display":"none"});
		$(this).css({"display":"none"});
		$(".btn_video").stop().animate({"width":"30px","height":"30px"}, 1000);
		$(".btn_video").css({"background":"rgba(0,0,0,0.4) url('../images/contents/icon_video.png') no-repeat center","background-size":"20px"});
		
	});
	
	$(".detail_img .tabbox").slick({
		slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
		infinite: false,
	});
	
	$(".btn-like").click(function(){
		$(this).toggleClass("on");
		if($(".btn-like").hasClass("on")) {
			$(".btn-like").find("img").attr("src","../images/contents/icon_heart_on.png");
		}else {
			$(".btn-like").find("img").attr("src","../images/contents/icon_heart_off.png");
		}
	});
	
	// 상세페이지 scroll
	scrollFixed();

	$(window).scroll(function() {
		scrollFixed();	
	});
	
	$(".tab_wrap li").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
	});
	
	$(".login_alert").click(function(){
		var check = confirm("로그인 후 이용이 가능합니다.\n로그인 하시겠습니까?");
		if(check == true) {
			location.href="../login/login.html";
		}
	});
	
	$("#detail2 .detail_mobile .btn_option").click(function(){
		$("#detail2 .detail_mobile").toggleClass("active");
		if($("#detail2 .detail_mobile").hasClass("active")) {
			var text = $(this).text();
			$(this).text(text.replace('옵션선택','옵션닫기'));
		}else {
			var text = $(this).text();
			$(this).text(text.replace('옵션닫기','옵션선택'));
		}
	});
	
	$("#section33 .btn_more").click(function(){
		var clone = $(this).parents(".thumb_list").find("li").clone();
		var btn_clone = $(this).parent().clone(true);
		
		$(this).parent().hide();
		$(this).parents(".thumb_list").children("ul").append(clone);
		$(this).parents(".thumb_list").append(btn_clone);
	});
	
	
	//============================================================================
    //  modal
    //============================================================================
	// 공유하기
	$(document).on('click', '.btn-share', function(){
        var index = $(this).index();

        $('#share').css('display', 'block');
		
		$("body").css({ overflow:'hidden'});
    });
	
	// 미리보기
	$(document).on('click', '.btn-preview', function(){
        var index = $(this).index();

        $('#preview').css('display', 'block');
		$(".detail_img .tabbox").slick('setPosition',0); 
		
		$("body").css({ overflow:'hidden'});
    });
	
	// 장바구니
	$(document).on('click', '.btn-cart', function(){
        var index = $(this).index();

        $('#cart').css('display', 'block');
		
		$("body").css({ overflow:'hidden'});
    });
	
    //============================================================================
    //  modal common
    //============================================================================
    $(document).on('click', '.close', function(){
        $('.modal').css('display', 'none');
		
		$("body").css({ overflow: 'inherit' })
    });

    $(document).on('click', function(event){
        if ($(event.target).attr('class') == 'modal') {
            $('.modal').css('display', 'none');
			
			$("body").css({ overflow: 'inherit' })
        }
    });
	
	//============================================================================
    //  마이페이지
    //============================================================================
	$(".htitle").click(function(){
		$(".menu").toggleClass("menu_on");
	});
	
	// 상품비교
	$(document).on('click', '.btn-cate', function(){
        var index = $(this).index();

        $('#cate').css('display', 'block');
		
		$("body").css({ overflow:'hidden'});
    });

});


/* Scrolll Top Fixed */
function scrollFixed(){	
	var $detail2 = document.getElementById('detail2');

	if($detail2){
		var main_height = $("#mainMenu").height();

		var $thisScroll = parseInt($(window).scrollTop());
		var detail_wrap = parseInt($("#detail2").offset().top);
		var detail_sub = $("#detail2 .detail_sub").height();
		
		var offset_wrapHeight = parseInt($("#detail2").height());
		
	}
	
	if ($thisScroll >= 0 && $thisScroll < detail_wrap) {
		$(".tab_wrap").removeClass("scrollFixed");
		$("#detail2 .detail_sub").removeClass("scrollFixed").removeClass("scrollFixed2");
		$("#detail2 .detail_mobile").removeClass("scrollFixed");
		
	}else if($thisScroll > detail_wrap && $thisScroll < offset_wrapHeight) {
		$(".tab_wrap").addClass("scrollFixed");
		$("#detail2 .detail_sub").removeClass("scrollFixed2").addClass("scrollFixed");
		$("#detail2 .detail_mobile").addClass("scrollFixed");
		
	}else if($thisScroll > offset_wrapHeight) {
//		$(".tab_wrap").removeClass("scrollFixed");
		$("#detail2 .detail_sub").removeClass("scrollFixed").addClass("scrollFixed2");
	}
}

//main menu
function mainMenu(obj) {
    $('.dropdown-content').removeClass('show');

    var icon = $(obj);
    icon.closest('.topnav').toggleClass('responsive');
}

//헤더 픽스
function scroll_top(){
    var scrollTop = $(window).scrollTop();
    var mainMenu = $('#mainMenu');
    var scroll_pos = parseInt($('#contents').offset().top);

    if(scrollTop >= scroll_pos){
        mainMenu.addClass('active');
    }else if(scrollTop < scroll_pos){
        mainMenu.removeClass('active');
    }
}

/* 자주하는질문 */
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function panelOpen(panel){
    if($(panel).next('.panel_content').is(":visible")){
        $(panel).next('.panel_content').slideUp("fast",function(){
            $(panel).find(".iconbox").children("img").attr("src",$(panel).find(".iconbox").children("img").attr("src").replace("_on","_off"));
        });
    }else{
        $(panel).next('.panel_content').slideDown("fast",function(){
            $(panel).find(".iconbox").children("img").attr("src",$(panel).find(".iconbox").children("img").attr("src").replace("_off","_on"));
        });
        $(panel).parent(".panel_open").siblings().find(".panel_content").slideUp("fast",function(){
            $(panel).parent(".panel_open").siblings().find(".iconbox").children("img").attr("src",$(panel).find(".iconbox").children("img").attr("src").replace("_on","_off"));
        });
    }
}

function pwd_input(){
    $( "#dialog" ).dialog({
        modal: true,
        draggable: false,
		resizeable: 'false',
		create: function(event, ui) {
			$("body").css({ overflow: 'hidden' })
		},
		beforeClose: function(event, ui) {
			$("body").css({ overflow: 'inherit' })
		}
    });
}

//모달창 팝업
function modal_open(modal, type, event){
    //type == false, dialog not open

    if(type){
        $( "#dialog" ).dialog( "destroy" );
    }

    $(modal).css('display', 'block');

    if(event.target.id == $(modal).attr('id')){
        $(modal).css('display', 'none');
    }
	
	$("body").css({ overflow:'hidden'});
}

//모달창 닫기
function modal_close(modal){
    $(modal).css('display', 'none');
	
	$("body").css({ overflow: 'inherit' })
}

function commonTab(tabParent, tabName) {

    $("." + tabParent + " ul.tabbox li").removeClass("on");
    $("." + tabParent + " ul.tabbox li." + tabName).addClass("on");
    $("." + tabParent + " .hiddencontents").removeClass("on");
    $("." + tabParent + " .hiddencontents." + tabName).addClass("on");

	if (tabParent == 'intro_tab')
	{
		$('#section13 .intro_top > ul').slick('setPosition',0); 
		$('#section13 .intro_img > ul').slick('setPosition',0); 
	}
}

//특정 영역까지 스크롤 이동
function scrollLink(obj, index){
    var header_height = $('#mainMenu').height();
	var tab_wrap_height = $('.tab_wrap .tabbox').height();
	
    var position = $("#"+obj).offset().top - 140;
    
    $('html, body').animate({scrollTop : position }, 900);

}
