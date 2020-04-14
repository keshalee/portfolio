$(function() {
    a_link();
    star();
});

function a_link() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var target2 = $(target);
        var offset = $(target).offset().top - 120;
        
        $('html, body').stop().animate({'scrollTop':target2.offset().top}, 900, 'swing', function() {window.location.hash = target;});
        
    });
}
function star() {
    $('.star').click(function () {
        $('.star').removeClass('active');
        $(this).prevAll('.star').addBack().addClass('active');
    });
}


$(window).load(function(){

    $('.body_wrap').remove();
    
    var headerHeight = $('#header').height() + 40,
        $navbar = $('#navbar'),
        $slideinfo = $('.slideinfo1')

    if($(window).scrollTop() > headerHeight){
        if(!$navbar.is(':visible')){
            $navbar.fadeIn(300);
        }
        if($(this).scrollTop() > headerHeight) {
            if(!$slideinfo.is(':visible')){
                $slideinfo.fadeIn(300);
            }
        }else{
            if($slideinfo.is(':visible')) {
                $slideinfo.fadeOut(300);
            }
        }
    }else{
        if($navbar.is(':visible')){
            $navbar.fadeOut(300);
        }
    }
    
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        if(scrollTop > headerHeight){
            if(!$navbar.is(':visible')){
                $navbar.fadeIn(300);
            }
            if(scrollTop > headerHeight){
                if(!$slideinfo.is(':visible')){
                    $slideinfo.fadeIn(300);
                }
            }else{
                if($slideinfo.is(':visible')){
                    $slideinfo.fadeOut(300);
                }
            }
        }else{
            if($navbar.is(':visible')){
                $navbar.fadeOut(300);
            }
        }
        $(".slideinfo2 ul").slick('setPosition'); 
    });

    // slideinfo2
    $(".slideinfo2 ul").slick({
        slidesToShow: 11,
        slidesToScroll: 1,
        infinite: false,
        autoplay: false,
        touchMove: false,
        speed: 400,
        arrows: false,
        dots: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 9,
            }
        },{
            breakpoint: 768,
            settings: {
                slidesToShow: 9,
                variableWidth: true,
                infinite: true,
            }
        },{
            breakpoint: 480,
            settings: {
                slidesToShow: 6,
                variableWidth: true,
                infinite: true,
            }
        }]
    });
    
    $("#datepicker3").datepicker({
        dateFormat: 'yy.mm.dd',
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
        buttonImage:"../images/contents/icon_23.png",
        buttonImageOnly:true,
        
    }).datepicker("setDate", "0");
        
    $("#datepicker4").datepicker({
        dateFormat: 'yy.mm.dd',
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
        buttonImage:"../images/contents/icon_23.png",
        buttonImageOnly:true,
    }).datepicker("setDate", "0");
    
    var holidays = {
                
    };

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
      var d = inst.selectedDay;
      var m = inst.currentMonth + 1;

      var alld = $('#cal td a')
      for (var i = 0; i < alld.length; i++) {
          $(alld[i]).removeClass('ui-state-active')
          if ($(alld[i]).text() == d) {
              $(alld[i]).addClass('ui-state-active')
              $(alld[i]).append('<div class="caldiv">휴무</div> ');
                }
            }

        }
    });
    
    // input check 
    $(".consult").click(function(){
        if($(this).parent(".imgbox").hasClass("on")){
            $(this).parent(".imgbox").removeClass("on");
            $(this).parent(".imgbox").find("img").attr("src",$(this).parent(".imgbox").find("img").attr("src").replace('_on.png','_off.png'));
        }else {
            $(this).parent(".imgbox").addClass("on");
            $(this).parent(".imgbox").find("img").attr("src",$(this).parent(".imgbox").find("img").attr("src").replace('_off.png','_on.png'));
        }
    });
    
    //=====================================================================================

    // 1:1 상담하기
    $(document).on('click', '.modal_qna', function(){
        var index = $(this).index();

        $('#modal_qna').css('display', 'block');
        return false;
    });
    
    // 신고하기
    $(document).on('click', '.modal_report', function(){
        var index = $(this).index();

        $('#modal_report').css('display', 'block');
        return false;
    });
    
    // 협의된 가격주문
    $(document).on('click', '.modal_price', function(){
        var index = $(this).index();

        $('#modal_price').css('display', 'block');
        return false;
    });
    
    // 공유
    $(document).on('click', '.modal_share', function(){
        var index = $(this).index();

        $('#modal_share').css('display', 'block');
        return false;
    });
    
    // 쪽지
    $(document).on('click', '.modal_message', function(){
        var index = $(this).index();

        $('#modal_message').css('display', 'block');
        return false;
    });
    
    // 쪽지
    $(document).on('click', '.modal_recieve', function(){
        var index = $(this).index();

        $('#modal_recieve').css('display', 'block');
        return false;
    });
    
    // 쪽지
    $(document).on('click', '.modal_send', function(){
        var index = $(this).index();

        $('#modal_send').css('display', 'block');
        return false;
    });
    
    // 나의 오더
    $(document).on('click', '.modal_suggest1', function(){
        var index = $(this).index();

        $('#modal_suggest1').css('display', 'block');
        return false;
    });
    
    // 제안하기
    $(document).on('click', '.modal_suggest', function(){
        var index = $(this).index();

        $('#modal_suggest').css('display', 'block');
        return false;
    });
    
    // 인증내역
    $(document).on('click', '.modal_profile', function(){
        var index = $(this).index();

        $('#modal_profile').css('display', 'block');
        return false;
    });
    
    // modal common
    $(document).on('click', '.close', function(){
        $('.modal').css('display', 'none');
    });

    $(document).on('click', function(event){
        if ($(event.target).attr('class') == 'modal') {
            $('.modal').css('display', 'none');
        }
    });

    //=====================================================================================
    
    // 파일추가 버튼 클릭시
    $("#file_form1 > div").hide();
    $("#file_form1 > div").eq(0).show();
    var file_form1 = ($("#file_form1 > div").length)+1;
    var index1 = 1;
    $(".btn_addfile").click(function(){
        index1++
        if(index1==file_form1){
            alert("5개 이상 파일 추가 하실 수 없습니다.");
            index1=5;
        }else{
            $("#file"+index1).show();
        }
    });
    
    // 파일추가 버튼 클릭시
    $("#file_form2 > div").hide();
    $("#file_form2 > div").eq(0).show();
    var file_form2 = ($("#file_form2 > div").length)+6;
    var index6 = 6;
    $(".btn_addfile2").click(function(){
        index6++
        if(index6==file_form2){
            alert("5개 이상 파일 추가 하실 수 없습니다.");
            index6 = 10;
        }else{
            $("#file"+index6).show();
        }
    });
    
    $("#file_form1 .btn_removefile").click(function(){
        $("#file"+index1).hide();
        index1--
    });
    $("#file_form2 .btn_removefile").click(function(){
        $("#file"+index6).hide();
        index6--
    });
    
    
    // 옵션추가btn_clone
    $(".btn_clone").click(function(){
        var clone = $(".clone_item").eq(0).clone(true);
        $(".clone_wrap").append(clone.show());
    });
    
    $(".btn_remove").click(function(){
        $(this).parents(".clone_item").remove();
    });
    
    // 마이페이지 메뉴
    $(".mypage_menu_title").click(function(){
        if($(".mypage_menu_list").hasClass("on")){
            $(".mypage_menu_list").removeClass("on");
        }else {
            $(".mypage_menu_list").addClass("on");
        }
    });
    
    // 마이페이지 좌측메뉴
    var acc_item = $('.mypage_menu_list .accordion > li');
    var acc_active = $('.mypage_menu_list .accordion > li.active').index();
    if(acc_item.hasClass("active")){
        $('.mypage_menu_list .accordion').accordion({
            heightStyle: "content",
            collapsible: true,
            active: acc_active
        });
    }
    
    
    
    //쪽지관리 버튼
    $(".message_list_selectType1").selectmenu();
    $(".message_list_selectType2").selectmenu({
        change: function() {
        if($(this).val() != '') {
            window.location = $(this).val();
        }
    }
    });
    $(".message_list_selectType3").selectmenu();
    $(".cash_charge_type1").selectmenu();
    $(".location_selectType1").selectmenu();
    $(".location_selectType2").selectmenu();
    $(".detail_selectType1").selectmenu();
    $(".select_t3").selectmenu();
    $(".pop_select1").selectmenu();

    //=====================================================================================
    
    // 찜하기
    $(".like_btn i").click(function(){
        $(this).toggleClass("on");
    });
    
    // 더보기 - 오더메인
    $(".btn_more.btn_more4").click(function(e){
        var clone = $(this).parents(".section_board").find("li").clone();
        var btn_clone = $(this).parents(".table_num").clone();
        $(this).parents(".section_board").find("ul").append(clone);
        $(this).parents(".table_num").css({"display":"none"});
        $(this).parents(".section_board").append(btn_clone);
        e.preventDefault();
    });
    
    // 더보기 - 전문가검색, 비디오검색
    $(".btn_more.btn_more2").click(function(e){
        var clone = $(this).parents(".table_num").siblings(".section_board").find("li").clone();
        var btn_clone = $(this).parents(".table_num").clone();
        $(this).parents(".table_num").siblings(".section_board").find("ul").append(clone);
        $(this).parents(".table_num").css({"display":"none"});
        $(this).parents(".table_num").siblings(".section_board").append(btn_clone);
        e.preventDefault();
    });
    
    // 더보기 - 상세페이지
    $(".btn_more.btn_more3").click(function(e){
        var clone = $(this).parents(".d_txt").find("ol").children("li").clone();
        var btn_clone = $(this).parents(".table_num").clone();
        $(this).parents(".table_num").css({"display":"none"});
        $(this).parents(".d_txt").find("ol").append(clone);
        $(this).parents(".d_txt").children("fieldset").append(btn_clone);
        e.preventDefault();
    });
    
    //=====================================================================================
    
    // header
    $(".mobilebanner .close").click(function(){
        $(".mobilebanner").hide();
    });

    $(window).resize(function(){
        var win_wid = $(this).width();
        var height = $(".header-mobile").height();
        if(win_wid < 992) {
            
            $(".mobile-bars").click(function(){
                
                $(".header-mobile").addClass("on").css("height",$(window).height()).css("position","fixed").css("overflow-y", "scroll");
                $("body").css("height","0").css("position","fixed").css("overflow-y", "hidden");
            });
        }else {
            $(".header-mobile").removeClass("on").css("overflow-y", "visible");
            $("body").css("height", "auto").css("position","relative").css("overflow-y", "visible");
        }
    }).resize();
    
    $(".header-mobile .close").click(function(){
        $(".header-mobile").removeClass("on");
        $("body").css("height", "auto").css("position","relative").css("overflow-y", "visible");
    });
    
    //=====================================================================================
    
    // 판매자 스케줄
    $(".btn_dal a").click(function(){
        $("#cal").toggleClass("on");
    });
    
    $('.panel_title').find(".close").hide();
    $('.panel_open').eq(0).find(".close").show().siblings(".btn_down").hide();
    
});

// 모달창 팝업
function pwd_input(){
    $( "#dialog" ).dialog();
}

function modal_open(modal, type, event){
    //type == false, dialog not open

    if(type){
        $( "#dialog" ).dialog( "destroy" );
    }

    $(modal).css('display', 'block');

    if(event.target.id == $(modal).attr('id')){
        $(modal).css('display', 'none');
    }
}

// 모달창 닫기
function modal_close(modal){
    $(modal).css('display', 'none');
}

// 탭메뉴
function commonTab(tabParent, tabName){
	$("."+tabParent+" ul.tabbox li").removeClass("on");
	$("."+tabParent+" ul.tabbox li."+tabName).addClass("on");
	$("."+tabParent+" .hiddencontents").removeClass("on");
	$("."+tabParent+" .hiddencontents."+tabName).addClass("on");
    
//    $('.section_board2 > ul').slick('setPosition');
    
    
    
    
    if(tabParent == "service_wrap"){
        $('.service_slide1 > ul').slick('setPosition');
        $('.service_slide2 > ul').slick('setPosition');
    }else if(tabParent == "channel_wrap"){
        $('.channel_slide1 > ul').slick('setPosition');
        $('.channel_slide2 > ul').slick('setPosition');
        $('.channel_slide3 > ul').slick('setPosition');
        $('.channel_slide4 > ul').slick('setPosition');
        $('.channel_slide5 > ul').slick('setPosition');
    }else if(tabParent == "ad_request"){
        $(".text_type1 > ul").slick('setPosition');
    }
    
}



// 공지사항, 자주하는질문
function panelOpen(panel){
    var $panel = $(panel);
    var $panel_content = $(panel).next('.panel_content');
    
    if($panel_content.is(':visible')) {
        $panel_content.slideUp("fast",function(){
            $panel.find(".close").hide();
            $panel.find(".btn_down").show();
        });
    }else {
        $panel_content.slideDown("fast",function(){
            $panel.find(".close").show();
            $panel.find(".btn_down").hide();
        });
        $panel.parent('.panel_open').siblings().find('.panel_content').slideUp("fast",function(){
            $panel.parent('.panel_open').siblings().find(".close").hide();
            $panel.parent('.panel_open').siblings().find(".btn_down").show();
        });
    }
}

//  drop down menu
function dropDown(obj) {
    //모든 열려진 드랍다운 닫기
    $('.dropdown-content').not($(obj).closest('.dropdown').find('.dropdown-content')).removeClass('show');

    var id = $(obj).data('id');
    $('#' + id).toggleClass('show');
    
    $('.dropdown-content li').click(function(){
        $('.dropdown-content').removeClass('show');
        var txt = $(this).text();
        $(".dropbtn_default").text(txt);
    });
}