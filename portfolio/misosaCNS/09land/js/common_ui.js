"use strict";

/* 전역 변수 */
var ua = navigator.userAgent;
var windowWidth = $(window).width();
var windowHeight = $(window).height();

/* useagent check */
function userAgentChk(){
	if(ua.match(/iPhone|iPod|LG|Android|SAMSUNG|Samsung/i) != null){
		if (windowWidth > 720){
			$("body").addClass("device").addClass("tablet");
			switch(window.orientation){ 
				case -90:
				$("body").addClass("tablet_landscape");
				$("body").addClass("pc").removeClass("tablet");
				break;
				case 90:
				$("body").addClass("tablet_landscape");
				$("body").addClass("pc").removeClass("tablet");
				break;
				case 0:
				$("body").addClass("tablet_portrait");
				$("body").removeClass("pc").removeClass("normal").addClass("tablet");
				break;
				case 180:
				$("body").addClass("tablet_portrait");
				$("body").removeClass("pc").removeClass("normal").addClass("tablet");
				break;
			 }
		}else{
			$("body").addClass("mobile").addClass("device");
			switch(window.orientation){  
				case -90:
				$("body").addClass("mobile_landscape")
				break;
				case 90:
				$("body").addClass("mobile_landscape");
				break;
				case 0:
				$("body").addClass("mobile_portrait");
				break;
				case 180:
				$("body").addClass("mobile_portrait");
				break;
			 }
		}
	}else if (ua.match(/iPad|GallaxyTab/i) != null){
		$("body").addClass("device").addClass("tablet");
		switch(window.orientation){ 
			case -90:
			$("body").addClass("tablet_landscape");
			$("body").addClass("pc").removeClass("tablet");
			break;
			case 90:
			$("body").addClass("tablet_landscape");
			$("body").addClass("pc").removeClass("tablet");
			break;
			case 0:
			$("body").addClass("tablet_portrait");
			$("body").removeClass("pc").removeClass("normal").addClass("tablet");
			break;
			case 180:
			$("body").addClass("tablet_portrait");
			$("body").removeClass("pc").removeClass("normal").addClass("tablet");
			break;
		 }
	}else{
		if(ua.indexOf("MSIE 8.0") > -1 || ua.indexOf("Trident/4.0") > -1){ //IE8 이하일 경우
			$("body").addClass("pc").addClass("pc_ie8");
			if(ua.indexOf("Windows NT 6.2") > -1){
			}else if (ua.indexOf("Windows NT 6.1") > -1){			
				$("body").addClass("pc").addClass("pc_ie8").addClass("w7"); //window7, IE8
			}else if (ua.indexOf("Windows NT 5.1") > -1){
				$("body").addClass("pc").addClass("pc_ie8").addClass("xp"); //windowXP, IE8
			}
		}else if(ua.indexOf("MSIE 9.0") > -1 || ua.indexOf("Trident/5.0") > -1){ //IE9 일 경우
			$("body").addClass("pc").addClass("pc_ie9");
		}else if(ua.indexOf("Trident") > -1){ // IE10 이상
			$("body").addClass("pc").addClass("ie");
		}else if (ua.indexOf("Chrome") > -1){  // Chrome 
			if (ua.indexOf("Edge") > -1){  // Chrome 
				$("body").addClass("pc").addClass("edge");
			}else{
				$("body").addClass("pc").addClass("chrome");
			}
		}else if(ua.indexOf("Mac") > -1){  //Mac
			$("body").addClass("mac");
		}else{
			$("body").addClass("pc");
		}
	}
}
userAgentChk();
bodyClassChange();
$(window).resize(function(){
	windowWidth = $(window).width();
	windowHeight = $(window).height();
	bodyClassChange();
}).resize();

function firstLoad(){
	setTimeout(function(){
		$("#wrap").animate({opacity:1}, 100);
		$(".rightarea").animate({opacity:1}, 100);
	}, 100);
}
firstLoad();


function bodyClassChange(){
	if (windowWidth > 1025){
		$("body").removeClass("mobile_portrait").removeClass("mobile").removeClass("tablet").addClass("normal");		
		if (windowWidth >= 1024 && windowWidth < 1400){
			$("body").addClass("smallbrowser");
		}else if(windowWidth > 1401) {
			$("body").removeClass("smallbrowser");
		}
		$(".mobile-allcategorybox").hide();
		$(".mobile-leftmenubox").css("top","-99999px").css("left","-99999px").css("opacity","0").removeClass("active");
		$("#wrap").css("height","auto").css("overflow","visible");
	}else if (windowWidth <= 1024 && windowWidth > 700){
		$("body").removeClass("mobile_portrait").removeClass("smallbrowser").removeClass("normal").removeClass("mobile").addClass("tablet");
	}else if (windowWidth <= 700){
		$("body").removeClass("mobile_portrait").removeClass("smallbrowser").removeClass("normal").removeClass("tablet").addClass("mobile");	
		if (windowWidth < 481) {
			$("body").addClass("mobile_portrait");
		}
	}
}



var yOffset;
function modalView(modalName){
	var modalWidth = $(".modalpop .popupwrap."+modalName).width()/2;
	var modalHeight = $(".modalpop .popupwrap."+modalName).height()/2;
	$(".transparents-layer").remove();
	$("#wrap").append("<div class='transparents-layer' style='position:fixed'></div>");
	$(".transparents-layer").attr("onclick", "modalHide('"+modalName+"')");
	$(".modalpop .popupwrap."+modalName).css("top", "50%").css("left","50%").css("margin-top", -modalHeight+"px").css("margin-left", -modalWidth+"px").animate({opacity:1}, 500);
}

function modalHide(modalName){
	$(".modalpop .popupwrap."+modalName).animate({opacity:0}, 400, function(){
		$(".modalpop .popupwrap."+modalName).css("top", "-99999px").css("left","-99999px");
	})
	$(".transparents-layer").animate({opacity:0}, 400, function(){
		$(this).remove();
	});
}


/* Scrolll Top Fixed */
function scrollFixed(){	
	if ($(window).scrollTop() > 20){
		if ($("body").hasClass("normal")){
			$(".toparea").addClass("scrollFixed");
			$(".rightarea").addClass("scrollFixed");
		}else{
			$(".topmenu").addClass("scrollFixed");
		}
	}else{
		if ($("body").hasClass("normal")){
			$(".toparea").removeClass("scrollFixed");
			$(".rightarea").removeClass("scrollFixed");
		}else{
			$(".topmenu").removeClass("scrollFixed");
		}
	}
}
scrollFixed();

$(window).scroll(function() {
	scrollFixed();	
});

if ($(window).width() > 1280){
	var rightPos = ((windowWidth-1280)/2) - 120;
	$(".rightarea").css("right", rightPos+"px");
	$(".rightarea").fadeIn();
}else{
	$(".rightarea").fadeOut();
}

$(window).resize(function(){
	windowWidth = $(window).width();
	windowHeight = $(window).height();
	if ($(window).width() > 1280){
		rightPos = ((windowWidth-1280)/2) - 120;
		$(".rightarea").css("right", rightPos+"px");
		$(".rightarea").fadeIn();
	}else{
		$(".rightarea").fadeOut();
	}
}).resize();

function toggleReport(){
	if ($(".counselbox .counsel-innerbox > fieldset").hasClass("active") == false){
		$(".counselbox .counsel-innerbox > fieldset").animate({height:"134px"}, 400);
		$(".counselbox").animate({height:"687px"}, 400);
		$(".counselbox .counsel-innerbox > fieldset").addClass("active");
	}else{
		$(".counselbox .counsel-innerbox > fieldset").animate({height:"0"}, 400);
		$(".counselbox .counsel-innerbox > fieldset").removeClass("active");
		$(".counselbox").animate({height:"553px"}, 400);
	}
}

function popClose(popName){
	$(".popupbox."+popName).hide();
}

function counselToggle(type){
	if ($("body").hasClass("normal")){			
		if (type == "open"){
			if ($(".counselbox").hasClass("active") == false){
				$(".counselbox").animate({"width":"320px", "height":"553px"}, 500, function(){
					$(".counselbox .counsel-innerbox > button.btn-close").show();
				});
				$(".counselbox").addClass("active");
			}
		}else{
			$(".counselbox .counsel-innerbox > button.btn-close").hide();
			$(".counselbox").animate({"width":"72px", "height":"72px"}, 500);
			$(".counselbox").removeClass("active");
		}
	}else if($("body").hasClass("tablet")){
		if (type == "open"){
			if ($(".counselbox").hasClass("active") == false){
				$(".counselbox").css({"width":"250px", "height":"523px"});
				$(".counselbox").animate({"top":"10%"}, 500, function(){
					$(".counselbox .counsel-innerbox > button.btn-close").show();
				})
				$(".counselbox").addClass("active");
			}else{
				$(".counselbox .counsel-innerbox > button.btn-close").hide();
				$(".counselbox").removeClass("active");
				$(".counselbox").animate({"top":"75%"}, 500, function(){
					$(".counselbox").animate({"width":"70px", "height":"70px"}, 400);
				});
			}
		}else{
			$(".counselbox .counsel-innerbox > button.btn-close").hide();
			$(".counselbox").removeClass("active");
			$(".counselbox").animate({"top":"75%"}, 500, function(){
				$(".counselbox").animate({"width":"70px", "height":"70px"}, 400);
			});
		}
	}else if($("body").hasClass("mobile")){
		if (type == "open"){
			if ($(".counselbox").hasClass("active") == false){
				$(".counselbox").css({"width":"250px", "height":"523px"});
				$(".counselbox").animate({"top":"10%"}, 500, function(){
					$(".counselbox .counsel-innerbox > button.btn-close").show();
				})
				$(".counselbox").addClass("active");
			}else{
				$(".counselbox .counsel-innerbox > button.btn-close").hide();
				$(".counselbox").removeClass("active");
				$(".counselbox").animate({"top":"80%"}, 500, function(){
					$(".counselbox").animate({"width":"50px", "height":"50px"}, 400);
				});
			}
		}else{
			$(".counselbox .counsel-innerbox > button.btn-close").hide();
			$(".counselbox").removeClass("active");
			$(".counselbox").animate({"top":"80%"}, 500, function(){
				$(".counselbox").animate({"width":"50px", "height":"50px"}, 400);
			});
		}
	}
}

function commonTab(tabParent, tabName){
	$("."+tabParent+" ul.tabbox li").removeClass("on");
	$("."+tabParent+" ul.tabbox li."+tabName).addClass("on");
	$("."+tabParent+" .hiddencontents").removeClass("on");
	$("."+tabParent+" .hiddencontents."+tabName).addClass("on");
    $(".slide_item1").slick("setPosition");
    $(".slide_item2").slick("setPosition");
    $(".slide_item3").slick("setPosition");
	if (tabParent == "brand-tabcontents"){
		$(".brand-tabcontents .tabcontents .hiddencontents."+tabName+" > ul").slick({slidesToShow: 1,slidesToScroll: 1,speed: 400,fade:true,arrows: true,touchMove: false});
	}else if (tabParent == "faqlist"){
		$(".faqlist .hiddencontents."+tabName+" > ul").slick({slidesToShow: 1,slidesToScroll: 1,fade:true,arrows: true,touchMove: false});
	}else if (tabParent == "category-best10"){
		$(".category-best10 .hiddencontents."+tabName+" .mobile-only > ul").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 300,
			arrows: true,
			appendArrows: $(".category-best10 .hiddencontents."+tabName+" .pager"),
			autoplay: false,
			autoplaySpeed: 5000,
			touchMove: false
		});
	}else if (tabParent == "sub_wrap2"){
		$('.item_slider3').bxSlider({
            slideWidth: 628,
            minSlides: 2,
            maxSlides: 2,
            pager:true,
            controls:false,
            slideMargin: 20
          });
	}
}

function allCategoryToggle(){
	if($(".allcategory").hasClass("active") == false){
		$(".allcategory").addClass("active");
		$(".allcategory .allcategorylist").show();
		$(".allcategory .allcategorylist").append("<span class='arr'></span>");
	}else{
		$(".allcategory").removeClass("active");
		$(".allcategory .allcategorylist").hide();
		$(".allcategory .allcategorylist .arr").remove();
	}
}

function mobileCategoryToggle(type){
	if (type == "open"){
		if ($(".mobile-allcategorybox").hasClass("active") == false){
			$(".mobile-allcategorybox").addClass("active").fadeIn();
			$("#wrap").height($(".mobile-allcategorybox").height()).css("overflow", "hidden");
            $(".shadow").fadeIn('slow');
		}
	}else{
		if ($(".mobile-allcategorybox").hasClass("active") == true){
            $(".shadow").fadeOut('slow');
			$(".mobile-allcategorybox").removeClass("active").fadeOut();
			$("#wrap").css("height", "auto").css("overflow", "visible");
		}
	}
}
function mobileMajorMenuToggle(type){
	if (type == "open"){
		if ($(".mobile-leftmenubox").hasClass("active") == false){
			$(".mobile-leftmenubox").addClass("active");
			$(".mobile-leftmenubox").animate({top:"0", left:"0"}, 400, function(){
				$(".mobile-leftmenubox").animate({opacity:"1"}, 500);
				$("#wrap").height($(".mobile-leftmenubox").height()).css("overflow", "hidden");
                $(".shadow").fadeIn('slow');
			});	
		}
        
	}else{
		if ($(".mobile-leftmenubox").hasClass("active") == true){
            $(".shadow").fadeOut('slow');
			$("#wrap").css("height", "auto").css("overflow", "visible");
			$(".mobile-leftmenubox").removeClass("active").animate({opacity:"0"}, 400, function(){
				$(".mobile-leftmenubox").animate({top:"-99999px", left:"-99999px"}, 400);
                
			});	
		}
	}
}

function goTop(){
	window.scrollTo(0, 0);
}

$(".toparea .topmenu > .innerbox > ul.mobile-only").slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	speed: 300,
	arrows: true,
	touchMove: false,	
	responsive: [
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 3
			}
		}
	]
});
$(".toparea .snsbox > ul").slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	speed: 300,
	arrows: true,
	touchMove: false,
    responsive: [
        {
			breakpoint: 740,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 3
			}
		}
	]
});
$(".bottomarea .innerbox .snsbox ul").slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	speed: 300,
	arrows: true,
	touchMove: false
});

function companyMenuToggle(){
	if($(".topmenu").hasClass("active") == false){
		$(".topmenu").addClass("active");
		$(".topmenu").append("<div class='transparents-layer' style='position:fixed; opacity:0.3' onclick='companyMenuClose()'></div>");
		if ($("body").hasClass("mobile")){
			$(".topmenu > ul").animate({right:"0"}, 400, function(){
				$(".topmenu > ul").append("<button type=button class='mobile-only btn-companymenu-close' onclick='companyMenuToggle()' title='모바일 카테고리 닫힘'>모바일 카테고리 닫힘</button>");
				$("body").css("height", "800px").css("overflow-y", "hidden");
				$("#wrap").css("height", "800px").css("overflow-y", "hidden");
			});
		}else{
			$(".topmenu > ul").animate({right:"0"}, 400, function(){
				$(".topmenu > ul").append("<button type=button class='mobile-only btn-companymenu-close' onclick='companyMenuToggle()' title='모바일 카테고리 닫힘'>모바일 카테고리 닫힘</button>");
				$("body").css("height", "900px").css("overflow-y", "hidden");
				$("#wrap").css("height", "900px").css("overflow-y", "hidden");
			});
		}
	}else{
		$(".topmenu").removeClass("active");
		if ($("body").hasClass("mobile")){
			$(".topmenu > ul").animate({right:"-200px"}, 400);
		}else{
			$(".topmenu > ul").animate({right:"-300px"}, 400);
		}
		$(".topmenu .transparents-layer").remove();
		$(".topmenu .btn-companymenu-close").remove();
		$("body").css("height", "auto").css("overflow-y", "visible");
		$("#wrap").css("height", "auto").css("overflow-y", "visible");
	}
}

function companyMenuClose(){
	$(".topmenu").removeClass("active");
	$(".topmenu > ul").animate({right:"-200px"}, 400);
	$(".topmenu .transparents-layer").remove();
	$(".topmenu .btn-companymenu-close").remove();
	$("body").css("height", "auto").css("overflow-y", "visible");
}





