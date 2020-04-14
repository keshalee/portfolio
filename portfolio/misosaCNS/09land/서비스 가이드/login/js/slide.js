
$(document).ready(function () {
    $('.mainslide ul').bxSlider({
        slideWidth: 99999,
        hideControlOnEnd:true
    });
    var w = $("body").width();
    if (w <= 750) {
        $('.menuarea ul').bxSlider({
            slideWidth: 250,
            minSlides: 2,
            maxSlides: 2,
            slideMargin: 15
        });
    }
    else {
        $('.menuarea ul').bxSlider({
            slideWidth: 366.666,
            minSlides: 3,
            maxSlides: 3,
            slideMargin:20
        });
    }

    $('.notice ul').bxSlider({
    });


    $('.adarea ul').bxSlider({
        slideWidth: 285,
        minSlides: 1,
        maxSlides: 4,
        pager:false,
    });
    $('.descslide ul').bxSlider({
        slideWidth: 1029,
        pager: false,
        prevText: '<img src="Images/ico/prev-white.png"/>',
        nextText: '<img src="Images/ico/next-white.png"/>',
    });
    $('.mobilephoto ul').bxSlider({
        slideWidth: 99999,
    });
    $('.photo ul').bxSlider({
        slideWidth: 1140,
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