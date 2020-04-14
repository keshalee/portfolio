$(window).load(function() {

    var resizeId;
    var stop = false;

    $(window).resize(function() {
        if(!stop){
            clearTimeout(resizeId);
            resizeId = setTimeout(doneResizing, 500);
            stop = true;
        }
        else{
            stop = false;
        }
    });

    function doneResizing(){
        //console.log('sub');
        item_inner.resize();
    }


    $('.myFlexslider1').flexslider({
        animation: "slide",
        animationLoop: false,
        slideshow: false,
        itemWidth: 32,
        itemMargin: 5,
        minItems: 6,
        pauseOnHover: true,
        controlNav: false
    });

    //============================================================================
    //  card slide
    //============================================================================
    if($('#card_list').length == 1){
        $('#card_list').owlCarousel({
            items : 4,
            navigation: true,
            pagination: false,
            lazyLoad: true,
            navigationText: ["<img src='../images/sub/card_list_prev.png'>","<img src='../images/sub/card_list_next.png'>"],
            itemsCustom : [
                [0, 1],
                [600, 2],
                [992, 3],
                [1280, 4]
            ]
        });
        var card_list = $("#card_list").data('owlCarousel');
    }

    if($('.item_inner').length != 0) {
        $('.item_inner').each(function (index) {

            $('.item_inner').eq(index).flexslider({
                selector: ".myItems > .myItem",
                animation: "slide",
                animationLoop: false,
                slideshow: false,
                controlNav: false,
                customDirectionNav: $('.item_inner').eq(index).parent().find('.custom-navigation a')
            });
        });
        var item_inner = $('.item_inner').data('flexslider');
    }
    //============================================================================
    //  card slide end
    //============================================================================


    //===============================================================================
    //  ie8슬라이드 내용 중앙정렬(부가서비스 하단 카드섹션)
    //===============================================================================
    function getInternetExplorerVersion() {
        var rv = -1;
        if (navigator.appName == 'Microsoft Internet Explorer') {
            var ua = navigator.userAgent;
            var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(ua) != null)
                rv = parseFloat(RegExp.$1);
        }
        return rv;
    }

    var ie8 = getInternetExplorerVersion() == 8 ? true : false;

    if(ie8){
        setTimeout(function(){
            card_list.reinit();
            item_inner.resize();
        }, 7000);
    }
    //===============================================================================
    //  ie8슬라이드 내용 중앙정렬
    //===============================================================================


    //===============================================================================
    //  youtube ie에서 z-index가 작동하지 않는 현상
    //===============================================================================
    $('iframe').each(function(){            //Z-index issues with iframe in IE
        var url = $(this).attr("src");
        $(this).attr("src",url+"?wmode=transparent");
    });
    //===============================================================================
    //  youtube ie에서 z-index가 작동하지 않는 현상
    //===============================================================================
});
