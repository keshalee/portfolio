/**
 * Created by PowerUser on 2016-01-05.
 */
$(window).load(function(){

    $('input, textarea').placeholder({customClass:'my-placeholder'});
    $('.menu').tendina();       //메인메뉴


    //header border remove
    var header_border = $('.header_border');
    var header_border_width = parseInt($('body').css('width')) - 210;
    header_border.css('width', header_border_width + 'px');

    //메뉴 사이즈 조절
    var body_height = parseInt($('.contents').css('height')) + 50;

    //console.log(body_height);
    $('.menu_wrapper').css('min-height', body_height);

    //회원관리 그룹권한설정
    $('.menu_list_txt li').click(function(){
        $(this).toggleClass('txt_choose');
        $(this).siblings().removeClass('txt_choose');
    });

    //popup close
    $('.pop_close').click(function(){
        window.close();
    });


    //메일발송진행바
    $(".progressbars1").jprogress({
        background: "#2c3d4f"
    });
});

function open_window(filepath, target, w, h){
    var width = screen.width;
    var height = screen.height;
    var w2 = (width - w) / 2;
    var h2 = (height - h) / 2;

    window.open(filepath, target, 'location=no,toolbar=no,menubars=no,scrollbars=no,resizable=no,width='+w+',height='+h+',left='+w2+',top='+h2);
}