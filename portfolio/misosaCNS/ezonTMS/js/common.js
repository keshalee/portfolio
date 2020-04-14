/**
 * Created by PowerUser on 2015-12-10.
 */
$(window).load(function(){

    var delta = 300;
    var timer = null;

    resizeDone();


    $("#owl_slide2").owlCarousel({
        //Autoplay
        autoPlay : true,
        stopOnHover : true,
        // Navigation
        navigation : true,
        navigationText: ["이전","다음"],
        pagination : false,
        lazyLoad : true,
        slideSpeed: 700,
        itemsScaleUp: true,
        items: 6,
        itemsDesktop : [1310,4],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,2],
        itemsTabletSmall: false,
        itemsMobile : [320,2]
    });


    //jquery
    $( window ).on( 'resize', function( ) {
        clearTimeout( timer );
        timer = setTimeout( resizeDone, delta );
    } );

    //관련포트폴리오, 이존tms?
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
        return false;
    });

    function resizeDone( ) {
        var brand_img = $(".brand_img").offset();
        var pushobj = $("#pushobj");

        if(parseInt($(window).width()) > 768){
            pushobj.css('right', brand_img.left);
        }
        else{
            pushobj.css('right', 15);
        }

        if(parseInt($(window).width()) >= 994){
            $(".responsive_web_2 img").attr('src', 'images/contents/banner3_2.png');
        }
        else{
            $(".responsive_web_2 img").attr('src', 'images/contents/banner3_3.png');
        }


        if($("#dot1").length != 0){
            if(parseInt($(window).width()) < 520){
                $("#dot1").dotdotdot();
            }
            else{
                $("#dot1").trigger("update");
            }
        }

        if(parseInt($(window).width()) < 1024){
            $(".footer1_bg").css('background-color', '#363636');
            $(".footer2_bg").css('background-color', '#434343');
            $(".copyImg2").css('height', temp*2 + 15);
        }
        if(parseInt($(window).width()) < 768){
            var temp = parseInt($(".copy_img1").css('height')) - 1;
            $(".copyImg2").css('height', temp*2 + 15);
        }
        if(parseInt($(window).width()) >= 768){
            var temp = parseInt($(".copy_img1").css('height')) - 1;
            $(".copyImg1").css('height', temp);
            $(".copyImg2").css('height', temp*2 + 15);
        }
        if(parseInt($(window).width()) >= 1024){
            var temp = parseInt($(".copy_img1").css('height')) - 1;
            $(".copyImg1").css('height', temp);
            $(".copyImg2").css('height', temp*2 + 20);

            $(".footer1_bg").css('background-color', 'inherit');
            $(".footer2_bg").css('background-color', 'inherit');
        }


    }

    //============================================================================
    //  device demo
    //============================================================================
    $('.modal_active').click(function(){
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
        }
    });

    //============================================================================
    //  device demo
    //============================================================================
});



