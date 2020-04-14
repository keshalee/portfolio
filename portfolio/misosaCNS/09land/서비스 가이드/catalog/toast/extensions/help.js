define(
[
    'exports'
], function (exports) {
 
 	"use strict";

 	var _$el;
    if (Toast.isMobileDevice) {
        _$el = $(Toast.ThemeLoader.getHTMLTemplates().mobileHelp);
    } else {
        _$el = $(Toast.ThemeLoader.getHTMLTemplates().help);
    }
    
 	// 커맨드 실행
    function _excuteCommand() {

    	// 중복 확인
    	if ( !_.isEmpty($(document.body).children('#toast-help')) ) {
    		return;
    	}

    	// 도움말을 HTML Document body에 붙인다.
    	$(document.body).append(_$el);

    	// 종료 이벤트
    	_$el.click(_close);
    	_$el.find('.btn-close').click(_close);
    }

    // 닫기
    function _close() {
    	_$el.remove();
    }

    // ----------------------------------------------------------------------
    // 시작 메뉴 로드 완료 이벤트
    // ----------------------------------------------------------------------
    Toast.on( Toast.Events.START_MENU_DID_LOAD, function() {

        var $startmenu = $('.toast .controls .start-menu');
        
        var $item = $('<li/>');
        $item.append('<a class="dropdown-toggle"><span class="glyphicon glyphicon-question-sign" />도움말</a>');
        $item.click(_excuteCommand);

        $startmenu.children('ul').append($item);

        //_excuteCommand();
        /*var preview = Toast.params.get("preview");
        if ( _.isUndefined(preview) || preview !== 'true' ) {

            var onceShowHelp = Toast.project.config.publishUniqueId + '-once-show-help';
            if (_.isNull(Toast.LocalStorage.getItem(onceShowHelp))) {
                _excuteCommand();
                Toast.LocalStorage.setItem(onceShowHelp, true);
            }
        }*/
    });

    // 커맨드 등록
    Toast.CommandManager.registerInternal("help", _excuteCommand);
});