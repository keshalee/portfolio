
$(document).ready(function () {
    w = $('body').width();
    $('.mainslide ul').bxSlider({
        slideWidth: w,
        hideControlOnEnd:true
    });
    $('.menuarea ul').bxSlider({
        slideWidth: 360,
        minSlides: 3,
        maxSlides: 3,
        slideMargin: 15
    });

    $('.notice ul').bxSlider({
        slideWidth:443
    });


    $('.adarea ul').bxSlider({
        slideWidth: 285,
        minSlides: 1,
        maxSlides: 4,
    });
    $('.descslide ul').bxSlider({
        slideWidth: 680,
        pager: false,
        prevText: '<img src="Images/ico/prev-white.png"/>',
        nextText: '<img src="Images/ico/next-white.png"/>',
    });
   
    $('.photo ul').bxSlider({
        slideWidth: 1100,
    });
    $('.maintitle').dotdotdot({
        ellipsis: '....',
        wrap: 'letter',
        height:40
    })

    $('.panel-body').bind('click', function () {
        return false;
    })

    $(document).ready(function () {
        $(".star_rating i").click(function () {
            $(this).parent().children("i").removeClass("on");
            $(this).addClass("on").prevAll("i").addClass("on");
            return false;
        });
    })
   
})