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
	a_link();
	side_menu();
	
	owl_slide();
	owl_slide2();
	
	slide();
}

function sub_menu() {
	
	$(".select_list").hide();
	
	$(".menu_select").click(function(e){

		$(this).find(".select_list").slideToggle()

	})
	
	$(".m_cart_go li").click(function(e){
		
		$(".mobile_price form").slideToggle()
		
	})
	
	$(".detaile_pay li.video").click(function(e){
		
		$(".video_popup").slideToggle()
		
	})
	
	
	
}


function teb() {
	$(".teb_main>ul>li").hide().first().show()
	var num=0;
	$("#tab_nav>li").click(function(e){
	num=$(this).index();
	$(".teb_main>ul>li").hide()
	$(".teb_main>ul>li").eq(num).show()
	
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
	
		$(".size li").removeClass("on")
		$(this).addClass("on")	
		
	});		
	
	$(".plan_nav li").click(function(e){
	
		$(".plan_nav li").removeClass("on")
		$(this).addClass("on")	
		
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
	
		$(".table_num ol li").removeClass("on")
		$(this).addClass("on")	
		
	});	
}


function a_link() {
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
}


function side_menu() {

	

 
			

}


function owl_slide() {
	
	$("#owl-demo").owlCarousel({

      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      pagination : false,
      // paginationSpeed : 400,
      singleItem:true

      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
  });
  
  $("#owl-demo2").owlCarousel({

      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true

      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });
  
  
  $("#owl-demo3").owlCarousel({

      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      pagination : false,
      // paginationSpeed : 400,
      singleItem:true

      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });
  
   $("#owl-demo4").owlCarousel({

      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      pagination : false,
      // paginationSpeed : 400,
      singleItem:true

      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });
    

  	
}

function owl_slide2() {

$('.item_slider1').bxSlider({
    slideWidth: 150,
    minSlides: 2,
    maxSlides: 3,
    pager:false,
    slideMargin: 10
  });


$('.item_slider2').bxSlider({
    slideWidth: 150,
    minSlides: 2,
    maxSlides: 3,
     pager:false,
    slideMargin: 10
  });
	

$('.item_slider3').bxSlider({
    slideWidth: 628,
    minSlides: 2,
    maxSlides: 2,
    pager:true,
    controls:false,
    slideMargin: 20
  });	

	
}
function slide() {
    $("#category li").click(function(e){
        $("#category li").removeClass("on")
        $(this).addClass("on")		
    });	
}
