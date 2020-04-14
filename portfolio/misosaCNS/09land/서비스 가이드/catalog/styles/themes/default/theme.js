//define(function (require, exports, module) {
define(
[
    'exports',
    'text!./template.html'
], function (
    exports,
    TemplateHTML) {
 
    "use strict";

    // --------------------------------------------------------------------//
    // --------------------------- 기본 테마 ------------------------------//
    // --------------------------------------------------------------------//

    var _$el, // 테마 DOM 엘리먼트
        _$navbar, // 상단바
        _$controlsbar, // 하단 바
        _$navbarBrand, // 상단 브랜드
        _$toggleZoom, // 확대 토글 버튼
        _$fullscreen, // 전체 화면
        _$toggleBookmark, // 북마크 토글 버튼
        _$pagelabel, // 페이지 라벨
        _$pageInput, // 페이지 입력 상자
        _$thumbnail, // 전체보기(썸네일) 버튼
        _$toggleDoublePage, // 양면 보기 토글 버튼
        _$first, // 첫번째 페이지
        _$prev, // 이전 페이지 버튼
        _$next, // 다음 페이지 버튼
        _$last, // 마지막 페이지
        _$menubarShowButton, // 모바일에서 가로 모드일때 메뉴바 보이기 버튼
        _isHiddenMenubar; // 모바일에서 가로 모드일때 메뉴바 숨기기 상태
    
    // ----------------------------------------------------------------------
    // 커맨드 실행
    // ----------------------------------------------------------------------
    function _excuteCommand(e) {
        var command = $(e.currentTarget).attr('command');
        if (!_.isUndefined(command)) {
            Toast.executeCommand(command);
        }
    }

    // ----------------------------------------------------------------------
    // 버튼 상태를 업데이트 합니다.
    // ----------------------------------------------------------------------
    function _updateButtonStates() {

        _$pagelabel.text( Toast.Book.getLogicalPageNumber().current + ' / ' + Toast.Book.getLogicalPageNumber().total );

        var pageNavigation = Toast.Book.availablePageNavigation();
        _$first.tt_disable();
        _$prev.tt_disable();
        _$next.tt_disable();
        _$last.tt_disable();

        if (pageNavigation.prev) {
            _$first.tt_enable();
            _$prev.tt_enable();  
        } 
        if (pageNavigation.next) {
            _$last.tt_enable();
            _$next.tt_enable();  
        } 

        _$toggleBookmark.removeClass('on');

        if (Toast.Bookmark.has()) {            
            _$toggleBookmark.addClass('on');
        }

        if (Toast.BookZoom.isActivate()) {
            _$toggleZoom.addClass('active');
        } else {
            _$toggleZoom.removeClass('active');
        }

        if (Toast.Book.isDoublePage()) {
            _$toggleDoublePage.addClass('active');
        } else {
            _$toggleDoublePage.removeClass('active');
        }
    }

    // ----------------------------------------------------------------------
    // 모바일에서 가로 모드일때 메뉴바 보이기/숨기기
    // ----------------------------------------------------------------------
    function _showbar() {
        _$menubarShowButton.css('opacity', 0);
        _$navbar.removeClass('hide');
        _$controlsbar.removeClass('hide');
        _isHiddenMenubar = false;
    }

    function _hidebar() {
        _$navbar.addClass('hide');
        _$controlsbar.addClass('hide');
        _$menubarShowButton.css('opacity', 1);
        _isHiddenMenubar = true;
    }

    // ----------------------------------------------------------------------
    // 페이지 입력 처리
    // ----------------------------------------------------------------------
    function _setPageInput() {
        
        _unsetPageInput();
        
        if (Toast.isMobileDevice) {
            BootstrapDialog.show({
                size: BootstrapDialog.SIZE_SMALL,
                cssClass: 'page-input-modal',
                title: Toast.Strings.MOVE_PAGE_TITLE,
                message: $('<input type="text" class="form-control" />'),
                buttons: [
                    {
                        label: Toast.Strings.CANCEL,
                        cssClass: 'btn-canel',
                        hotkey: Toast.KeyEvent.DOM_VK_ESCAPE,
                        action: function(dialogRef) {
                            dialogRef.setData('hotkey', Toast.KeyEvent.DOM_VK_ESCAPE);
                            dialogRef.close();
                        }
                    },
                    {
                        label: Toast.Strings.OK,
                        cssClass: 'btn-primary',
                        hotkey: Toast.KeyEvent.DOM_VK_RETURN,
                        action: function(dialogRef) {
                            dialogRef.setData('hotkey', Toast.KeyEvent.DOM_VK_RETURN);
                            dialogRef.close();
                        }
                    }
                ],
                
                onhidden: function(dialogRef) {
                    var val = dialogRef.$modalBody.find('input').val();
                    if (dialogRef.getData('hotkey')===Toast.KeyEvent.DOM_VK_RETURN && !_.isEmpty(val)) {
                        Toast.Book.move(val, { isLogical: true });
                    }
                }
            });

        } else {

            _$pagelabel.parent().hide();
            _$pageInput.parent().show();
            _$pageInput.focus();
            _$pageInput.on('focusout', _unsetPageInput);
            _$pageInput.on('keydown', _onPageInputKeydown);
        }
    }

    function _unsetPageInput() {
        _$pagelabel.parent().show();
        
        _$pageInput.val('');
        _$pageInput.parent().hide();
    }

    function _onPageInputKeydown(event) {
        if (event.keyCode == Toast.KeyEvent.DOM_VK_RETURN) {
            event.stopPropagation();
            event.preventDefault();
            
            var val = $(event.target).val();
            
            _unsetPageInput();

            if (!_.isEmpty(val)) {
                Toast.Book.move(val, { isLogical: true });
            }
        }
    }

    // ----------------------------------------------------------------------
    // 페이지가 변경 될 때 ...
    // ----------------------------------------------------------------------
    Toast.on(Toast.Events.WILL_MOVE_PAGE, function(page, totalPage) {
        _updateButtonStates();
        
        if (!_.isUndefined(_$pageInput) && _$pageInput.is(':visible')) {
            _unsetPageInput();
        }
        if (Toast.isLandscape() && _isHiddenMenubar===false) {
            _hidebar();
        }
    });

    // ----------------------------------------------------------------------
    // 페이지가 변경 되었을때 ...
    // ----------------------------------------------------------------------
    Toast.on(Toast.Events.PAGE_DID_CHANGE, function(page, totalPage) {
        _updateButtonStates();
    });
    
    // ----------------------------------------------------------------------
    // 북마크 상태가 변경되었을때 ...
    // ----------------------------------------------------------------------
    Toast.on(Toast.Events.BOOKMARK_DID_CHANGE, function(bookmarks) {
        _updateButtonStates();
    });

    // ----------------------------------------------------------------------
    // 확대/축소 상태가 변경되었을때 ...
    // ----------------------------------------------------------------------
    Toast.on(Toast.Events.ZOOM_MODE_DID_CHANGE, function(isOn) {
        _updateButtonStates();
        if (Toast.isMobileDevice && Toast.isLandscape()) {
            if (isOn) {
                _showbar();
            } else {
                _hidebar();
            }
        }
    });

    // ----------------------------------------------------------------------
    // 검색 모드 시작
    // ----------------------------------------------------------------------
    Toast.on(Toast.Events.BEGIN_SEARCH_MODE, function() {
        _$navbar.addClass('hide');
    });

    // ----------------------------------------------------------------------
    // 검색 모드 종료
    // ----------------------------------------------------------------------
    Toast.on(Toast.Events.END_SEARCH_MODE, function() {
        _$navbar.removeClass('hide');
    });

    // ----------------------------------------------------------------------
    // 디바이스 방향 전환이 되었을때...
    // ----------------------------------------------------------------------
    Toast.on(Toast.Events.ORIENTATION_DID_CHANGE, function(orientation) {
        if (orientation==='landscape') {
            _hidebar();
        } else {
            _showbar();
        }
    });

    // ----------------------------------------------------------------------
    // 단면/양면 페이지 변경
    // ----------------------------------------------------------------------
    Toast.on(Toast.Events.DOUBLEPAGE_DID_CHANGE, function(isDoublePage) {
        if (isDoublePage) {
            _$toggleDoublePage.addClass('active');
        } else {
            _$toggleDoublePage.removeClass('active');
        }
    });
   
    // --------------------------------------------------------------------//
    // ----------------------------- 테마 API -----------------------------//
    // --------------------------------------------------------------------//
    // ----------------------------------------------------------------------
    // 테마 로드/언로드
    // ----------------------------------------------------------------------
    exports.load = function(baseUrl) {
        
        _$el = $(TemplateHTML);
        $('.toast').append(_$el);
        
        _$el.find('[command]').on('click', _excuteCommand);

        _$navbarBrand = _$el.find('.navbar-brand');
        _$toggleZoom = _$el.find('[command="toggleZoom"]');
        _$fullscreen = _$el.find('[command="fullscreen"]');
        _$toggleBookmark = _$el.find('[command="toggleBookmark"]');
        _$first = _$el.find('[command="firstPage"]');
        _$prev = _$el.find('[command="previousPage"]');
        _$next = _$el.find('[command="nextPage"]');
        _$last = _$el.find('[command="lastPage"]');
        _$thumbnail = _$el.find('[command="thumbnail"]');
        _$toggleDoublePage = _$el.find('[command="toggleDoublePage"]');
        _$pagelabel = _$el.parent().find('.navigate .label-page');

        _$pageInput = _$el.parent().find('.navigate .input-page');
        _$menubarShowButton = _$el.parent().find('.btn.btn-show-menubar');
        _$navbar = _$el.parent().find('.navbar');
                
        _$controlsbar = _$el.parent().find('.controls');

        if(Toast.isMobileDevice) {
            _$el.parent().find('.navbar').addClass('no-hover');
            if (Toast.isLandscape()) {
                _hidebar();
            }
        }

        if (Toast._msieVersion && Toast._msieVersion<11) {
            _$fullscreen.remove();
        }

        _$pagelabel.text( Toast.Book.getLogicalPageNumber().current + ' / ' + Toast.Book.getLogicalPageNumber().total );

        _$pagelabel.parent().on('click', _setPageInput);
        _$menubarShowButton.on('click', _showbar);
    }

    exports.unload = function() {
        _$el.remove();
    }

    exports.hasMobileStyleSheet = function() {
        return true;
    }
});