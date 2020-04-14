// 엄격한 자바스크립트 룰 적용
'use strict';

var protocol = window.location.href.substr(0, 6);
if (protocol==='app://') { // NodeJS 웹브라우저에서 실행시...
    window.__nw__ = { require: window.require };
}

window.require = window.requirejs;

// 기본 설정 부분
require.config({
    paths:{
        'text'  : 'framework/text',
        'i18n'  : 'framework/i18n',
        'strings': 'toast/strings'
    },
    
    // 기본 로케일 한국어
    locale: 'ko'
});

// 실행환경 모듈
define(['toast/utils/runenv'], function (runenv) {

    if (!runenv.error) 
    {
        require(['toast/toast'], function(Toast) 
        {
            Toast.ready(function() {
                Toast.start();
            });
        });
    }
});
