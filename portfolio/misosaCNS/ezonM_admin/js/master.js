
function close_Popup(layer) {
    // iframe을 넣은 element를 안보이게 한다.
    document.getElementById(layer).style.display = 'none';
}

function layer_Popup(layer, url, width, height, borderWidth) {

    // 화면을 넣을 element
    var element_layerPopup = document.getElementById(layer);

    boxdiv = document.createElement('div');
    boxdiv.setAttribute('id', "layerPopupDiv");
    boxdiv.style.display = 'block';
    boxdiv.style.position = 'absolute';
    boxdiv.style.width = '100%';
    boxdiv.style.height = '100%';
    //boxdiv.style.width = width + 'px';
    //boxdiv.style.height = height + 'px';
    //boxdiv.style.border = borderStyle;
    boxdiv.style.backgroundColor = '#fff';

    var contents = document.createElement('iframe');
    contents.scrolling = 'no';
    contents.frameBorder = '0';
    contents.style.width = '100%';
    contents.style.height = '100%';

    //contents.style.width = width + 'px';
    //contents.style.height = height + 'px';
    contents.src = url;

    boxdiv.appendChild(contents);
    element_layerPopup.appendChild(boxdiv);

    // iframe을 넣은 element를 보이게 한다.
    element_layerPopup.style.display = 'block';

    MoveLayerPosition(element_layerPopup, width, height, borderWidth);
}

// 브라우저의 크기 변경에 따라 레이어를 가운데로 이동시키고자 하실때에는
// resize이벤트나, orientationchange이벤트를 이용하여 값이 변경될때마다 아래 함수를 실행 시켜 주시거나,
// 직접 element_layer의 top,left값을 수정해 주시면 됩니다.
function MoveLayerPosition(layer, width, height, borderWidth) {

    layer.style.width = width + 'px';
    layer.style.height = height + 'px';
    layer.style.border = borderWidth + 'px solid';
    // 실행되는 순간의 화면 너비와 높이 값을 가져와서 중앙에 뜰 수 있도록 위치를 계산한다.
    layer.style.left = (((window.innerWidth || document.documentElement.clientWidth) - width) / 2 - borderWidth) + 'px';
    layer.style.top = (((window.innerHeight || document.documentElement.clientHeight) - height) / 2 - borderWidth) + 'px';
}


function close_Modal(modal) {
    // 화면을 넣을 element
    var element_modalPopupContentIframe = document.getElementById('modalPopupContentiframe');
    element_modalPopupContentIframe.remove();

    $("#" + modal).modal('hide');
}

function modal_Popup(modal, url) {

    // 화면을 넣을 element
    var element_modalPopup = document.getElementById('modalPopupContent');

    var contents = document.createElement('iframe');
    contents.id = 'modalPopupContentiframe';
    contents.scrolling = 'no';
    contents.frameBorder = '0';
    contents.style.width = '100%';
    contents.style.height = '100%';

    contents.src = url;

    element_modalPopup.appendChild(contents);

    $("#" + modal).modal();

}



$(document).ready(function () {

    //사이트정보
    if (document.location.href.indexOf("/pages/site/") >= 0) {
        $('#nav-accordion .sub-menu > a').eq(0).addClass("active");
        if (document.location.href.indexOf("/site/info") >= 0) {
            $('#nav-accordion .sub-menu a.active').parent().find('.sub > li').eq(0).addClass("active");
            //$('#nav-accordion .sub-menu .sub > li').eq(0).addClass("active");
        }
        if (document.location.href.indexOf("/site/addinfo") >= 0) {
            $('#nav-accordion .sub-menu a.active').parent().find('.sub > li').eq(1).addClass("active");
            //$('#nav-accordion .sub-menu .sub > li').eq(1).addClass("active");
        }
        if (document.location.href.indexOf("/site/changeTemplate") >= 0) {
            $('#nav-accordion .sub-menu a.active').parent().find('.sub > li').eq(2).addClass("active");
            //$('#nav-accordion .sub-menu .sub > li').eq(2).addClass("active");
        }
    }
    //사이트설정
    if (document.location.href.indexOf("/pages/setting/") >= 0) {
        $('#nav-accordion .sub-menu > a').eq(1).addClass("active");
        if (document.location.href.indexOf("/setting/menu") >= 0) {
            $('#nav-accordion .sub-menu a.active').parent().find('.sub > li').eq(0).addClass("active");
        }
        if (document.location.href.indexOf("/setting/logo") >= 0) {
            $('#nav-accordion .sub-menu a.active').parent().find('.sub > li').eq(1).addClass("active");
        }
        if (document.location.href.indexOf("/setting/footer") >= 0) {
            $('#nav-accordion .sub-menu a.active').parent().find('.sub > li').eq(2).addClass("active");
        }
    }
    //페이지관리
    if (document.location.href.indexOf("/pages/data") >= 0) {
        $('#nav-accordion .sub-menu > a').eq(2).addClass("active");
    }
    //게시판관리
    if (document.location.href.indexOf("/pages/board") >= 0) {
        $('#nav-accordion .sub-menu > a').eq(3).addClass("active");
        if (document.location.href.indexOf("/board/boardcate") >= 0) {
            $('#nav-accordion .sub-menu a.active').parent().find('.sub > li').eq(0).addClass("active");
        }
    }
    //예약관리
    if (document.location.href.indexOf("/pages/booking") >= 0) {
        $('#nav-accordion .sub-menu > a').eq(4).addClass("active");
        if (document.location.href.indexOf("/booking/booking") >= 0) {
            $('#nav-accordion .sub-menu a.active').parent().find('.sub > li').eq(0).addClass("active");
        }

    }
    //회원관리
    if (document.location.href.indexOf("/pages/user") >= 0) {
        $('#nav-accordion .sub-menu > a').eq(5).addClass("active");
        if (document.location.href.indexOf("/user/user") >= 0) {
            $('#nav-accordion .sub-menu a.active').parent().find('.sub > li').eq(0).addClass("active");
        }
        if (document.location.href.indexOf("/user/changeuserpwd") >= 0) {
            $('#nav-accordion .sub-menu a.active').parent().find('.sub > li').eq(1).addClass("active");
        }

    }

});

