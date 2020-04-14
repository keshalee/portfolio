define(function (require, exports, module) {
    "use strict";

    // 에러 코드
    var ERROR_NO                             = 0,
        ERROR_UNSUPPORTED_BROWSER            = 1,
        ERROR_UNSUPPORTED_PROTOCOL           = 2

    var error = ERROR_NO;

    var url = window.document.location.href;

    var message;

    if ( url.substr(0, 5) === "file:")  {
        // 로컬 실행 미지원
        error = ERROR_UNSUPPORTED_PROTOCOL;
        message = "로컬 모드에서는 실행 할 수 없습니다. 웹 서버에 업로드 하십시요.";

    } else if (document.querySelectorAll('.unsupport').length!==0) {
        error = ERROR_UNSUPPORTED_BROWSER;

    }/* else if ((/msie|trident/i).test(navigator.userAgent)) {
        // 인터넷 익스플로러 9 이하 버전 체크
        var userAgent = navigator.userAgent.toString().toLowerCase();
        var match = /(trident)(?:.*rv:([\w.]+))?/.exec(userAgent) ||/(msie) ([\w.]+)/.exec(userAgent)||['',null,-1];
        var version = match[2];
        if (version<9) {
            error = ERROR_UNSUPPORTED_BROWSER;
            message = "인터넷 익스플로러 9 이상 브라우저에서 정상 작동 합니다.<br>브라우저를 업데이트 하십시요.";
        }
    }*/
    
    if ( error === ERROR_UNSUPPORTED_BROWSER) {
        return;
    }

    var $runenv = $('.runenv');
    if ( error !== ERROR_NO) {
        $runenv.children('.title').text('ERROR');
        $runenv.children('span').html(message);
        $('.preloader').hide();
        $runenv.show();
        $('html').addClass('unsupport');
        
    } else  {
        $runenv.remove();
    }


    // 공개 변수 및 함수들
    exports.error                           = error;
});
