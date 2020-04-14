/**
 * Created by PowerUser on 2015-12-10.
 */
$(function () {

    $("#slider1").responsiveSlides({
        auto: true,
        pager: true,
        speed: 300,
        pause: true,
        pauseControls: true
        //maxwidth: 540
    });

    $("#slider2").responsiveSlides({
        auto: true,
        pager: false,
        pause: true,
        pauseControls: true,
        speed: 300
    });

    $("#owl_slide1").owlCarousel({
        //Autoplay
        autoPlay : true,
        stopOnHover : true,
        // Navigation
        navigation : true,
        pagination : false,
        lazyLoad : true,
        slideSpeed: 700,
        itemsScaleUp: true,
        navigationText: false
    });


    $("#owl_slide2").owlCarousel({
        //Autoplay
        autoPlay : true,
        stopOnHover : true,
        // Navigation
        navigation : true,
        pagination : false,
        lazyLoad : true,
        slideSpeed: 700,
        itemsScaleUp: true,
        navigationText: false,
        items: 6,
        itemsDesktop : [1310,4],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,2],
        itemsTabletSmall: false,
        itemsMobile : [320,2]
    });

});
