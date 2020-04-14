$(document).ready(function(){
    
    var delta = 300;
    var timer = null;

    resizeDone();
    
    //jquery
    $(window).on('resize',function(){
        clearTimeout(timer);
        timer = setTimeout(resizeDone,delta);
    });
    
    //============================================================================
    //  intro
    //============================================================================
    $(".intro_banner > ul").slick({
        slidesToShow: 3,
        speed: 800,
        arrows: false,
        dots: true,
        appendDots: $(".intro_banner > .dotsset"),
        autoplay: true,
        centerMode: true,
        focusOnSelect: true,
        variableWidth:true,
    });
    
    //============================================================================
    //  header
    //============================================================================
    $("#pushobj").click(function(){
        $("#menu").css({"opacity":"1"});
    });

    // HTML markup implementation, overlap mode
    $( '#menu' ).multilevelpushmenu({
        containersToPush: [$( '#pushobj' )],
        direction: 'rtl',
        fullCollapse: true,
        collapsed: true,
        preventItemClick: false,

        // Just for fun also changing the look of the menu
        wrapperClass: 'mlpm_w',
        menuInactiveClass: 'mlpm_inactive'
    });

    // Base expand
    $( '#baseexpand' ).click(function(){
        $( '#menu' ).multilevelpushmenu( 'expand' );
        
    });
    
    function resizeDone() {
        var brand_img = $(".brand_img").offset();
        var pushobj = $("#pushobj");
        
        if(parseInt($(window).width()) > 768){
            pushobj.css('right', 10);
        }
        else{
            pushobj.css('right', 10);
        }

    }
    
    //============================================================================
    //  footer
    //============================================================================
    
    $(".footer_nav .utill > ul").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 400,
        arrows: true,
        dots: false,
        autoplay: true,
        appendArrows: $(".footer_nav .utill > .btnset"),
        touchMove: false,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    
    //============================================================================
    //  main banner
    //============================================================================
    $(".main_banner").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: false,
        appendArrows: $(".main_banner_wrapper .btnset"),
        touchMove: false
    });
    
    //============================================================================
    //  main - responsive_wrap
    //============================================================================
    $("#slider2").slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
    
    $("#tab01 .solution_result .row").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 400,
        arrows: true,
        dots: false,
        appendArrows: $("#tab01 .btnset"),
        touchMove: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    
    $("#tab02 .solution_result .row").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 400,
        arrows: true,
        dots: false,
        appendArrows: $("#tab02 .btnset"),
        touchMove: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    
    $("#tab03 .solution_result .row").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 400,
        arrows: true,
        dots: false,
        appendArrows: $("#tab03 .btnset"),
        touchMove: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    
    $("#tab04 .solution_result .row").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 400,
        arrows: true,
        dots: false,
        appendArrows: $("#tab04 .btnset"),
        touchMove: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    
    $("#tab05 .solution_result .row").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 400,
        arrows: true,
        dots: false,
        appendArrows: $("#tab05 .btnset"),
        touchMove: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    
    //============================================================================
    //  sub - 상단배너
    //============================================================================
    // 이존엠소개
    $("#web_product.web_slide1 > ul").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrow: false,
        speed: 500,
        appendDots: $("#web_product.web_slide1 > .dotsset"),
    });
    
    // 템플릿
    $("#web_product.web_slide2 > ul").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrow: true,
        speed: 500,
        appendArrows: $("#web_product.web_slide2 > .btnset"),
    });
    
    // 반응형솔루션
    $("#web_product.web_slide3 > ul").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrow: false,
        speed: 500,
        appendDots: $("#web_product.web_slide3 > .dotsset"),
    });
    
    // 포트폴리오
    $("#web_product.web_slide4 > ul").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrow: false,
        speed: 500,
        appendDots: $("#web_product.web_slide4 > .dotsset"),
    });
    
    // 정기유지보수
    $("#web_product.web_slide5 > ul").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrow: false,
        speed: 500,
        appendDots: $("#web_product.web_slide5 > .dotsset"),
    });
    
    //============================================================================
    //  sub - ezonM이란?
    //============================================================================
    // topBanner
    $(".icon_gr > ul").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 400,
        arrows: true,
        dots: false,
        appendArrows: $(".icon_gr > .btnset"),
        touchMove: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },{
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    
    // bottomBanner
    $(".bottomBanner > ul").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 400,
        arrows: true,
        dots: false,
        appendArrows: $(".bottomBanner > .btnset"),
    });
    
    // hostSlide
    $(".hostSlide > ul").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 400,
        arrows: false,
        dots: true,
        appendDots: $(".hostSlide > .dotsset"),
    });
    
    //============================================================================
    //  sub - ezonTMS란?
    //============================================================================
    $(".myflexslider1 > ul").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 400,
        arrows: false,
        dots: true,
        appendDots: $(".myflexslider1 > .dotsset"),
    }); 
    
    $(".myflexslider2 > ul").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 400,
        arrows: false,
        dots: true,
        appendDots: $(".myflexslider2 > .dotsset"),
    }); 
    
    //============================================================================
    //  sub - tamplate
    //============================================================================
    $(".solution_result .more_btn").click(function(){
        var list_clone = $(this).parent().siblings(".row").children(".col-md-4").clone();
        var btn_clone = $(this).parent().clone(true);
        
        $(this).hide();
        $(this).parents(".solution_result").append(list_clone).append(btn_clone);
    });
    
    $(".solution_portfolio_wrap .more_btn").click(function(){
        var list_clone = $(this).parent().siblings(".row").children(".col-md-3").clone();
        var btn_clone = $(this).parent().clone(true);
        
        $(this).hide();
        $(this).parents(".solution_portfolio_wrap").append(list_clone).append(btn_clone);
    });
    
    //============================================================================
    //  sub - responsive_web (반응형솔루션)
    //============================================================================
    $(".proceed_slide > ul").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        speed: 400,
        auto:false,
        appendArrows: $(".proceed_slide > .btnset"),
        infinite: false,
        responsive: [{
            breakpoint:992,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },{
            breakpoint:480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        }]
    });

    //============================================================================
    //  sub - responsive_view (반응형솔루션 view)
    //============================================================================
    // responsive 상세이미지
    $(".product_view1 > ul").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        speed: 400,
        auto:false,
        appendArrows: $(".product_view1 > .btnset"),
        infinite: false,
    });
    
    // my_tab
    $(".my_tab_content").eq(0).show();

    $(".my_tab li a").click(function(){
        var index = $(this).parent().index();
        var tab_content = $(".my_tab_content");

        $(this).parent().addClass('active').siblings().removeClass('active');

        for(var i = 0; i < tab_content.length; i++){
            if(i == index){
                tab_content.eq(index).fadeIn();
            }
            else{
                tab_content.eq(i).fadeOut(200);
            }
        }
        $(".myflexslider1 > ul").slick("setPosition");
        $(".myflexslider2 > ul").slick("setPosition");
        
        return false;
        
    });
    
    // 기능설명
    $(".solution_func li").eq(0).find('.content').css('display', 'block');
    $(".solution_faq .solution_func li").eq(0).find('.content').css('display', 'block');

    $(".func_list"). click(function(){
        $(this).find('.content').slideDown();   //duration 400
        $(this).parent().siblings().find('.content').slideUp();
        
        $(".solution_wrap .solution_portfolio_wrap .row").slick("setPosition");
        
        return false;
    });
    
    // 관련 포트폴리오
    $(".solution_wrap .solution_portfolio_wrap .row").slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        slide: '.item',
        dots: false,
        arrows: true,
        appendArrows: $(".solution_wrap .solution_portfolio_wrap .row > .btnset"),
    });
    
    // radio 선택
    $("input[type='radio']").click(function(){
        var thisId = $(this).attr("id");
        $("."+thisId).show().siblings("[class^='radio']").hide();
    });
    
    //============================================================================
    //  정기유지보수
    //============================================================================
    $(".maintenancetype > ul").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        appendArrows: $(".maintenancetype > .btnset"),
        responsive: [{
            breakpoint:992,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },{
            breakpoint:640,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        }]
    });
    
    // 신청서 클릭이벤트
    $("#opentable").click(function () {
        var target = $(this).attr("target");
        var top = $(this).offset().top;
        if ($(target).hasClass('hide')) {
            $(target).removeClass('hide');
            $(this).find('i').removeClass('fa-plus');
            $(this).find('i').addClass('fa-minus');
            $(window).resize(function(){
                var winWid = $(window).width();
                
                if(winWid < 1310) {
                    $("html, body").stop().animate({"scrollTop":top},900,"swing");
                }else {
                    top = top + 76;
                    $("html, body").stop().animate({"scrollTop":top},900,"swing");
                }
            }).resize();
        }
        else {
            $(target).addClass('hide');
            $(this).find('i').removeClass('fa-minus');
            $(this).find('i').addClass('fa-plus');

        }
    });
    
    //============================================================================
    //  홍보동영상제작
    //============================================================================
    $('.section3_4 > ul').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: false,    
        appendDots: $(".section3_4 > .dotsset"),
        responsive: [{
            breakpoint:1280,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },{
            breakpoint:640,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        }]
    });
    
    $('.section4_2 > ul').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,
        appendArrows: $(".section4_2 > .btnset"),
        responsive: [{
            breakpoint:640,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        }]
    });
    
    //============================================================================
    //  상품상세페이지제작
    //============================================================================
    $('.promotion2 > ul').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,    
        appendArrows: $(".promotion2 > .btnset"),
    });
    
    //============================================================================
    //  견적상담
    //============================================================================
    $(".faq").eq(0).show().siblings(".faq").hide();
    $(".rightsubmenu a").click(function(){
        var i = $(this).index();
        $(".rightsubmenu a").removeClass("on");
        $(this).addClass("on");
        $(".faq").hide();
        $(".faq").eq(i).show();
    });

    var article = (".recruit .show");
    $(".recruit .item  td").click(function () {
        var myArticle = $(this).parents().next("tr");
        if ($(myArticle).hasClass('hide')) {
            $(article).removeClass('show').addClass('hide');
            $(myArticle).removeClass('hide').addClass('show');
        }
        else {
            $(myArticle).addClass('hide').removeClass('show');
        }
    });

    $(".recruit .item").click(function () {
        var isopen = $(".recruit .item.open");
        for (var i = 0; i < isopen.length; i++) {
            $(isopen[i]).removeClass("open");
        }
        var myArticle = $(this).parents().next("tr");
        if (!$(myArticle).hasClass('show')) {
            $(this).addClass("open");
        }
    });
    
    //============================================================================
    //  견적상담 - 인터뷰슬라이드
    //============================================================================
    
    $('.interviewslide > ul').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,
    });
    
    //============================================================================
    //  호스팅신청현황
    //============================================================================
    var article = (".hosting .show");
    $(".hosting .item .morehosting").click(function () {
        var myArticle = $(this).parents().next("tr");
        if ($(myArticle).hasClass('hide')) {
            $(article).removeClass('show').addClass('hide');
            $(myArticle).removeClass('hide').addClass('show');
        }
        else {
            $(myArticle).addClass('hide').removeClass('show');
        }
    });
    $(".doitclose").click(function () {
        $(this).parent().parent().parent().parent().removeClass('show').addClass('hide');
    })
    
    //============================================================================
    //  고객센터 - 제안하기
    //============================================================================
    $('#slick_partner > ul').slick({
        arrows: true,
        appendArrows: $("#slick_partner > .btnset"),
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
    //============================================================================
    //  device demo
    //============================================================================
    $('.modal_active').click(function(e){
        e.preventDefault();
        if($(window).width() < 1024){
            
            alert('1024px 이상일 때만 동작합니다.');
            return false;
        }
        else{
            var src = $(this).attr('target');

            $("#exampleModal1 iframe").attr('src', '');
            $("#exampleModal1 iframe").attr('src', src);
            $("#exampleModal2 iframe").attr('src', '');
            $("#exampleModal2 iframe").attr('src', src);
            $("#exampleModal3 iframe").attr('src', '');
            $("#exampleModal3 iframe").attr('src', src);
        }
    });

    //============================================================================
    //  testmodal
    //============================================================================
    $(".testmodal").click(function () {
        var src = $(this).attr("target");
        $("#textiframe").attr('src', src);

    });
    
    $('#myModal').on('shown.bs.modal', function (e) {
        if ($('body').width() < 769) {
            alert("데스크탑에서만 사용가능합니다.");
            $('#myModal').modal('hide');
        }
    });

    $("#mmtablet").click(function () {
        var src = $("#textiframe").attr('src');
        $('.modal-dialog').width(768);
        $("#textiframe").attr('src', "");
        $("#textiframe").attr('src', src);
        $("#textiframe").width(768+17);
    });
    $("#mmmobile").click(function () {
        $('.modal-dialog').width(375);
        var src = $("#textiframe").attr('src');
        $("#textiframe").attr('src', "");
        $("#textiframe").attr('src', src);
        $("#textiframe").width(375+17);
    });
    $("#mmlaptop").click(function () {
//        var src = $("#textiframe").attr('src');
//        window.open(src, "_blank");
        $('.modal-dialog').width(1280);
        var src = $("#textiframe").attr('src');
        $("#textiframe").attr('src', "");
        $("#textiframe").attr('src', src);
        $("#textiframe").width(1280+17);
    });
    
    //============================================================================
    //  교육일정
    //============================================================================
    var holidays = {};
    
    $("#cal").datepicker({
        dateFormat: 'yy-mm',
        prevText: '◁',
        nextText: '▷',
        monthNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        dayNames: ['SUN', 'MON.', 'TUE.', 'WED.', 'THU.', 'FRI.', 'SAT.'],
        dayNamesShort: ['SUN.', 'MON.', 'TUE.', 'WED.', 'THU.', 'FRI.', 'SAT.'],
        dayNamesMin: ['SUN.', 'MON.', 'TUE.', 'WED.', 'THU.', 'FRI.', 'SAT.'],
        showMonthAfterYear: true,
        yearSuffix: '.',
        showOn: "both",
        beforeShowDay: function (day) {
            var result;
            var holiday = holidays[$.datepicker.formatDate("mmdd", day)];
            if (holiday) {
                result = [true, "date-holiday" + holiday.type, holiday.title];
            } else {
                switch (day.getDay()) {
                    case 0: // 일요일?
                        result = [true, "date-sunday"];
                        break;
                    case 6: // 토요일?
                        result = [true, "date-saturday"];
                        break;
                    default:
                        result = [true, ""];
                        break;
                }
            }
            return result;
        }  ,
        onSelect: function (dateText, inst) {
            inst.inline = false,
            $('.caldiv').remove();
          var y = inst.currentYear;
          var d =  inst.selectedDay;
          var m = inst.currentMonth + 1;

          var alld = $('#cal td a')
          for (var i = 0; i < alld.length; i++) {
              $(alld[i]).removeClass('ui-state-active')
              if ($(alld[i]).text() == d) {
                  $(alld[i]).addClass('ui-state-active')
                  $(alld[i]).append('<div class="caldiv"><img class="topar" src="images/contents/topar.png" /><div class="callog">  <span class="callogtr"><span class="callogtitle">일시</span><span class="callogbody">2015.5.18 13:00~16:00</span></span> <span class="callogtr"><span class="callogtitle">강의명</span><span class="callogbody">반응형 홈페이지 제작 무료교육</span></span> <span class="callogtr"><span class="callogtitle">강사</span><span class="callogbody">홍길동</span></span> <span class="callogtr"><span class="callogtitle">교육장</span><span class="callogbody">본사교육장</span></span></div></div> ');
                }
            }

        }
    });
    
    //============================================================================
    //  file_form
    //============================================================================
    $("#file_form1 > div").hide();
    $("#file_form1 > div").eq(0).show();
    var file_form1 = ($("#file_form1 > div").length)+1;
    var index1 = 1;
    $(".btn_addfile").click(function(){
        index1++
        if(index1==file_form1){
            alert("3개 이상 파일 추가 하실 수 없습니다.");
            index1=3;
        }else{
            $("#file"+index1).show();
        }
    });
    
    $("#file_form1 .btn_removefile").click(function(){
        $("#file"+index1).hide();
        index1--
    });
    
    //============================================================================
    //  scrollTab
    //============================================================================
    $(".scrollTab li").click(function(e){
        e.preventDefault();
        
        $(this).addClass("on").siblings().removeClass("on");
        var hash_id = $(this).find("a").attr("href");
        var hash_offset = $(hash_id).offset().top;
        var hash_offset_mobile = $(hash_id).offset().top - 95;
        
        $(window).resize(function(){
            var winWid = $(window).width();
            if(winWid <= 1310) {
                $("html, body").stop().animate({"scrollTop":hash_offset_mobile},900,"swing");        
            }else {
                $("html, body").stop().animate({"scrollTop":hash_offset},900,"swing");        
            }
        }).resize();
    });
    
    $(".mobile_category").click(function(){
        $(this).siblings(".solution_category").toggleClass("show");
        if($(".solution_category").hasClass("show")){
            $(".mobile_category a").html("<a href='javascript:;'>카테고리접기<i class='fa fa-angle-double-up'></i></a>");
        }else {
            $(".mobile_category a").html("<a href='javascript:;'>카테고리보기<i class='fa fa-angle-double-down'></i></a>");
        }
    });
    
    //============================================================================
    //  scroll
    //============================================================================
    // 템플릿, 포트폴리오, 반응형솔루션 scroll
    if($("div").hasClass("scroll_point")) {
        
        // 탭메뉴 고정
        var offset_top = $(".scroll_point").next().offset().top;
        var $tabpanel = $(".tabpanel .nav-tabs");
        
        $(window).scroll(function(){
            var scrollTop = $(this).scrollTop();
            
            if(scrollTop > offset_top) {
                $tabpanel.addClass("fixed");
            }else {
                $tabpanel.removeClass("fixed");
            }
        });
        
        var header_height = $(".top_bg").height() + $(".top_menu_2").height();
        var category_top = $(".nav_button").offset().top - header_height - 20;
        var category_top_tablet = $(".mobile_category").offset().top - header_height - 20;
        var category_top_mobile = $(".mobile_category").offset().top - header_height - 20;
        
        $(".nav-tabs li").click(function(e){
            e.preventDefault();
            $(window).resize(function(){
                var winWid = $(window).width();
                if(winWid <= 768) {
                    $("html, body").stop().animate({"scrollTop":category_top_mobile},900,"swing");
                }else if(winWid > 768 && winWid <= 1310) {
                    $("html, body").stop().animate({"scrollTop":category_top_tablet},900,"swing");
                }else {
                    $("html, body").stop().animate({"scrollTop":category_top},900,"swing");
                }
            }).resize();
        });
        
        var nav_tab_height = $tabpanel.height();
        
        
        // 2차 카테고리
        $(".button1 li").click(function(e){
            e.preventDefault();
            var list_top = $(this).parents(".solution_category").next().offset().top - header_height - nav_tab_height + 10;
            var list_top_mobile = $(this).parents(".solution_category").siblings(".row").offset().top - header_height - nav_tab_height - 20;
            $(window).resize(function(){
                var winWid = $(window).width();
                if(winWid >= 1280) {
                    $('html, body').stop().animate({'scrollTop':list_top},900,"swing");
                }
            }).resize();
            $(".mobile_category").siblings(".solution_category").removeClass("show");
            $(".mobile_category a").html("<a href='javascript:;'>카테고리보기<i class='fa fa-angle-double-down'></i></a>");
        });
        
    }else {
        return false;
    }
    
});

function commonTab(tabParent, tabName){
    $("."+tabParent+" ul.tabbox li").removeClass("on");
    $("."+tabParent+" ul.tabbox li."+tabName).addClass("on");
    $("."+tabParent+" .hiddencontents").removeClass("on");
    $("."+tabParent+" .hiddencontents."+tabName).addClass("on");

    if(tabParent == "solution_result") {
        $("#tab01 .solution_result .row").slick("setPosition");
        $("#tab02 .solution_result .row").slick("setPosition");
        $("#tab03 .solution_result .row").slick("setPosition");
        $("#tab04 .solution_result .row").slick("setPosition");
        $("#tab05 .solution_result .row").slick("setPosition");
    }
    if(tabParent == "table_layout5") {
        $(window).resize(function(){
            var winWid = $(window).width();
            var top = $(".table_layout5").offset().top - 105;
            if(winWid < 1024) {
               $("html, body").stop().animate({"scrollTop":top},900,'swing');
           }
        }).resize();
    }
    
    
}

function scroll_top() {
    $('html, body').stop().animate({'scrollTop':0}, 900, 'swing');
}

function paymentSelect(){
    var paymentSelect = document.getElementById("payment_method");

    var paymentValue = paymentSelect.options[paymentSelect.selectedIndex].value;
    
    switch (paymentValue) {
        case "1" : $(".writemaintenancelast .writemaintenancelasttitle table th").css({"width":"50%"});
            $(".writemaintenancelast .writemaintenancelasttitle table td").show();
            $(".writemaintenancelast .writemaintenancelasttitle table th").attr("colspan","0");
            break;
        case "2" : $(".writemaintenancelast .writemaintenancelasttitle table th").css({"width":"100%"});
            $(".writemaintenancelast .writemaintenancelasttitle table td").hide();
            $(".writemaintenancelast .writemaintenancelasttitle table th").attr("colspan","2");
            break;
        case "3" : $(".writemaintenancelast .writemaintenancelasttitle table th").css({"width":"100%"});
            $(".writemaintenancelast .writemaintenancelasttitle table td").hide();
            $(".writemaintenancelast .writemaintenancelasttitle table th").attr("colspan","2");
            break;
        default: alert("잘못된 선택입니다.");
             break;
    }
    
}
function paymentSelect2(){
    var paymentSelect = document.getElementById("payment_method2");

    var paymentValue = paymentSelect.options[paymentSelect.selectedIndex].value;
    
    switch (paymentValue) {
        case "1" : 
            $(".ssrequestwrap .sumpircepaymentwarp .paysele").show();
            
            break;
        case "2" : 
            $(".ssrequestwrap .sumpircepaymentwarp .paysele").hide();
            
            break;
        case "3" : 
            $(".ssrequestwrap .sumpircepaymentwarp .paysele").hide();
            
            break;
        default: alert("잘못된 선택입니다.");
             break;
    }
    
}