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
		if (windowWidth > 1025 && windowWidth < 1400){
			$("body").addClass("smallbrowser");
		}else if(windowWidth > 1401) {
			$("body").removeClass("smallbrowser");
		}
		$(".funding-detailview .transparents-layer").remove();
		$(".funding-detailview .innerbox .frbox").removeClass("active");
		$(".funding-detailview .innerbox .frbox").css("right", "0");
	}else if (windowWidth <= 1024 && windowWidth > 700){
		$("body").removeClass("mobile_portrait").removeClass("smallbrowser").removeClass("normal").removeClass("mobile").addClass("tablet");
		$(".funding-detailview .innerbox .frbox").removeClass("active");
		$(".funding-detailview .innerbox .frbox").css("right", "-300px");
	}else if (windowWidth <= 700){
		$("body").removeClass("mobile_portrait").removeClass("smallbrowser").removeClass("normal").removeClass("tablet").addClass("mobile");	
		if (windowWidth < 481) {
			$("body").addClass("mobile_portrait");
		}
		$(".funding-detailview .innerbox .frbox").removeClass("active");
		$(".funding-detailview .innerbox .frbox").css("right", "-250px");
	}
}

function defaultLoad(){
	if ($("body").hasClass("normal")){
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
	}else{
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		var contentsHeight = $("body").height();
		$(".mobile .funding-detailview .innerbox .frbox").height(contentsHeight);
		$(".tablet .funding-detailview .innerbox .frbox").height(contentsHeight);
	}
}
defaultLoad();

/* Scrolll Top Fixed */
function scrollFixed(){	
	if ($(window).scrollTop() > 20){
		if ($("body").hasClass("mobile")){
			$(".funding-detailview").addClass("scrollFixed");
			$(".btn-layerclose").css("left", (windowWidth-50)+"px");
		}else if ($("body").hasClass("tablet")){
			$(".funding-detailview").addClass("scrollFixed");
			$(".btn-layerclose").css("left", (windowWidth-50)+"px");
		}else{
			$(".funding-detailview").removeClass("scrollFixed");
		}
	}else{		
		$(".funding-detailview").removeClass("scrollFixed");
		$(".btn-layerclose").css("left", "-50px");
	}
}
scrollFixed();

$(window).scroll(function() {
	scrollFixed();	
});

$(window).resize(function(){
	windowWidth = $(window).width();
	windowHeight = $(window).height();
	bodyClassChange();
	defaultLoad();
}).resize();

function goTop(){
	window.scrollTo(0, 0);
}

$(".topgnb .innerbox > ul.mobile-only").slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	speed: 500,
	arrows: true,
	centerMode:true,
	variableWidth: true,
	touchMove: false
});

$(".notice-linebox > ul").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 500,
	vertical:true,
	arrows: true,
	touchMove: false
});

$(".popular-ranking > ul").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 500,
	vertical:true,
	autoplay: true,
	autoplaySpeed: 5000,
	arrows: false,
	touchMove: false
});

function commonTab(tabParent, tabName){
	$("."+tabParent+" ul.tabbox li").removeClass("on");
	$("."+tabParent+" ul.tabbox li."+tabName).addClass("on");
	$("."+tabParent+" .hiddencontents").removeClass("on");
	$("."+tabParent+" .hiddencontents."+tabName).addClass("on");
}
