/**
 * Created by PowerUser on 2015-12-10.
 */
$(window).load(function(){

    $(".marketing_list li").on('mouseenter', function(){

        var index = $(this).index();
        var marketing_img = $("#marketing_img");

        switch(index) {
            case 0:
                marketing_img.attr('src', 'images/contents/marketing_1.png');
                break;
            case 1:
                marketing_img.attr('src', 'images/contents/marketing_2.png');
                break;
            case 2:
                marketing_img.attr('src', 'images/contents/marketing_1.png');
                break;
            case 3:
                marketing_img.attr('src', 'images/contents/marketing_2.png');
                break;
            case 4:
                marketing_img.attr('src', 'images/contents/marketing_1.png');
                break;
            case 5:
                marketing_img.attr('src', 'images/contents/marketing_2.png');
                break;
            default:
                return false;
        }
    });

    $(".card3_wrapper").on('mouseenter', function(){
        $(this).find('.card3_txt').removeClass('hidden').css('backgroundColor', '#525252');
        $(this).find('.card3_innner').css('opacity', '0.4');
    });

    $(".card3_wrapper").on('mouseleave', function(){
        $(this).find('.card3_innner').css('opacity', '1');
        $(this).find('.card3_txt').addClass('hidden').css('backgroundColor', 'initial');
    });

    if(parseInt($(window).width()) < 520){
        $("#dot1").dotdotdot();
    }

    var browser = getBrowserType();

    if(browser == 'IE11'){
        $(".mar_bot_ie").css('margin-bottom',  11 + 'px');
    }
    if(browser == 'IE10'){
        $(".mar_bot_ie").css('margin-bottom',  11 + 'px');
    }
    if(browser == 'IE9'){
        $(".mar_bot_ie").css('margin-bottom',  11 + 'px');
    }
    if(browser == 'IE8'){
        $(".mar_bot_ie").css('margin-bottom',  13 + 'px');
    }

    //ie browser check
    function getBrowserType(){

        var _ua = navigator.userAgent;
        var rv = -1;

        //IE 11,10,9,8
        var trident = _ua.match(/Trident\/(\d.\d)/i);
        if( trident != null )
        {
            if( trident[1] == "7.0" ) return rv = "IE" + 11;
            if( trident[1] == "6.0" ) return rv = "IE" + 10;
            if( trident[1] == "5.0" ) return rv = "IE" + 9;
            if( trident[1] == "4.0" ) return rv = "IE" + 8;
        }

        //IE 7...
        if( navigator.appName == 'Microsoft Internet Explorer' ) return rv = "IE" + 7;

        /*
         var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
         if(re.exec(_ua) != null) rv = parseFloat(RegExp.$1);
         if( rv == 7 ) return rv = "IE" + 7;
         */

        //other
        var agt = _ua.toLowerCase();
        if (agt.indexOf("chrome") != -1) return 'Chrome';
        if (agt.indexOf("opera") != -1) return 'Opera';
        if (agt.indexOf("staroffice") != -1) return 'Star Office';
        if (agt.indexOf("webtv") != -1) return 'WebTV';
        if (agt.indexOf("beonex") != -1) return 'Beonex';
        if (agt.indexOf("chimera") != -1) return 'Chimera';
        if (agt.indexOf("netpositive") != -1) return 'NetPositive';
        if (agt.indexOf("phoenix") != -1) return 'Phoenix';
        if (agt.indexOf("firefox") != -1) return 'Firefox';
        if (agt.indexOf("safari") != -1) return 'Safari';
        if (agt.indexOf("skipstone") != -1) return 'SkipStone';
        if (agt.indexOf("netscape") != -1) return 'Netscape';
        if (agt.indexOf("mozilla/5.0") != -1) return 'Mozilla';
    }


    rebuild_layout();

    $(window).resize(function(){
        rebuild_layout();
    });

    function rebuild_layout(){
        if(parseInt($(window).width()) > 750){
            $('.small-view').hide();
            $('.big-view').show();
            $('#pos_1').hide();
        }
        else{
            $('.small-view').show();
            $('.big-view').hide();
            $('#pos_1').show();
        }
    }
});



