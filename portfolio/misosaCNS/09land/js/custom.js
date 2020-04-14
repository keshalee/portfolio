$(function() {

	init();
    
})//endfunction

function init() {
	sub_menu();
	teb();
	star();
	size();
	load();
	teb2();
//	slide();
}

function sub_menu() {
	
	$(".select_list").hide();
	
	$(".menu_select").click(function(e){

		$(this).find(".select_list").slideToggle();

	});
	
	$(".m_cart_go li").click(function(e){
		
		$(".mobile_price form").slideToggle();
		
	});
	
	$(".detaile_pay li.video").click(function(e){
		
		$(".video_popup").slideToggle();
        $(".video_popup").toggleClass("on");
        if($(".video_popup").hasClass("on")){
            $(this).find("img").attr("src","images/close_icon.jpg");
        }else {
            $(this).find("img").attr("src","images/video_icon.jpg");
        }
	});
}

function teb() {
	$(".teb_main>ul>li").hide().first().show();
	var num=0;
	$("#tab_nav>li").click(function(e){
	num=$(this).index();
	$(".teb_main>ul>li").hide();
	$(".teb_main>ul>li").eq(num).show();
	
	});		 	
				 	
}

function star() {
	
	$('.star').click(function () {
    $('.star').removeClass('active2');
    $(this).prevAll('.star').addBack().addClass('active2');
	});
}

function size() {
	
	$(".size li").click(function(e){
	
		$(".size li").removeClass("on");
		$(this).addClass("on");
		
	});		
	
	$(".plan_nav li").click(function(e){
	
		$(".plan_nav li").removeClass("on");
		$(this).addClass("on");
		
	});
	
	
}

function load() {
	
	$('.price_table table tr.first').addClass('active');
				
	$('.load_more a').on('click', function(e) {
	  e.preventDefault();  
	  var $rows = $('.price_table table tr');
	  var lastActiveIndex = $rows.filter('.active:last').index();
	  $rows.filter(':lt(' + (lastActiveIndex + 3) + ')').addClass('active');
	});
}

function teb2() {
	
	$(".table_num ol li").click(function(e){
	
		$(".table_num ol li").removeClass("on");
		$(this).addClass("on");
		
	});	
}

//function slide() {
//    $("#category li").click(function(e){
//        $("#category li").removeClass("on");
//        $(this).addClass("on");
//    });	
//}

                