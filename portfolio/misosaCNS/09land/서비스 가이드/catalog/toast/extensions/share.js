////////////////////////////////////////////////////////////////////
// 페이스북, 트위터, 카카오, 카카오스토리 공유하기
////////////////////////////////////////////////////////////////////
define(
[
    'exports'
],  function (exports) {
    
	
	var _$el;

    function _getCurrentUrl() {
        var url = window.location.href.substr(0, window.location.href.indexOf('#'));
        url += "index.html?startpage=" + Toast.Book.getCurrentPageNumber()[0];
        return url;
    }

    function _onButtonClick(event) {
        event.preventDefault();
        event.stopPropagation();

        var command = $(event.currentTarget).attr('command');
        if (command=='sendKakaotalk') {
            _sendKakaotalkCommand();
        } else if (command=='sendKakaostory') {
            _sendKakaostoryCommand();
        } else if (command=='sendFacebook') {
            _sendFacebookCommand();
        } else if (command=='sendTwitter') {
            _sendTwitterCommand();
        }
    }
    
    function _onCopyShortUrl(event) {
        event.preventDefault();
        event.stopPropagation();
              
        if (!Toast.isMobileDevice || Toast.isAndroid) {
            _$el.find('.input-short-url').focus();
            _$el.find('.input-short-url').select();

            document.execCommand("Copy");

            alert("주소가 복사되었습니다.\n원하시는 블로그나 게시판에 붙여넣기 하세요.\n");
        }
    }

    function _close(event) {
        var $modalContent = $(event.target).parents('.modal-content');
        
        if (!$(event.target).hasClass('close') && !_.isUndefined($modalContent[0])) {
            return;
        }
    	_$el.remove();
    }

    function _sendKakaotalkCommand() {

        var title = $('meta[property="og:title"]').attr('content');
        var description = $('meta[property="og:description"]').attr('content');
        var image = $('meta[property="og:image"]').attr('content');
        
        var senderurl = Toast.config.kakaotalk_sender;
        var url = window.location.href.substr(0, window.location.href.indexOf('#'));
        var q = 'url=' + url;
        q += '&startpage=' + Toast.Book.getCurrentPageNumber()[0];
        q += '&title=' + title;
        q += '&text=' + description;
        if (image.substr(0, 4)!=='http' && image.substr(0, 2)!=='//') {
            image = window.location.host + getUrlPath(window.location.pathname) + image;
        }
        q += '&image=' + image;
        
        window.open(senderurl + '?' + q);
    }

    function _sendKakaostoryCommand() {
        var url = _getCurrentUrl();
        window.open('https://story.kakao.com/share?url=' + url);
    }

    function _sendFacebookCommand() {
        var url = _getCurrentUrl();
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + url);
    }

    function _sendTwitterCommand() {
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(Toast.project.metadata.title) + '&url=' + _getCurrentUrl());
    }

    function _shareEbookCommand() {
        if ( !_.isEmpty($(document.body).children('.share-modal-wrapper')) ) {
            return;
        }

        _$el = $(Toast.ThemeLoader.getHTMLTemplates().ShareEbook);
        $(document.body).append(_$el);

        if (Toast.isMobileDevice && !Toast.isAndroid) {
            _$el.find('.group-short-url').hide();
            _$el.find('.group-short-url-ios').show();
        }
        
        _$el.click(_close);
        _$el.find('.btn-close').click(_close);
        _$el.find('.btn-group > button').on('click', _onButtonClick);

        
        _$el.find('.input-short-url').val(_getCurrentUrl());

        _$el.find('.btn-short-url').attr('href', _getCurrentUrl());

        _$el.find('.btn-short-url').text(_getCurrentUrl());

        _$el.find('.copy-short-url-addon').tt_disable();

        if (!Toast.isMobileDevice || Toast.isAndroid) {
            _$el.find('.copy-short-url-addon').on('click', _onCopyShortUrl);
        } else {
            _$el.find('.copy-short-url-addon').hide();

            _$el.find('.btn-short-url').on('click', function(event) {    
                event.preventDefault();
                event.stopPropagation();
            });
        }
    }

    // 커맨드 등록 및 실행
    Toast.CommandManager.registerInternal("shareEbook", _shareEbookCommand);
    Toast.CommandManager.registerInternal("sendFacebook", _sendFacebookCommand);
    Toast.CommandManager.registerInternal("sendTwitter", _sendTwitterCommand);
    Toast.CommandManager.registerInternal("sendKakaotalk", _sendKakaotalkCommand);
    Toast.CommandManager.registerInternal("sendKakaostory", _sendKakaostoryCommand);
});