jQuery(function($){
	"use strict";
    var $w = $(window),
        $body = $('body');
    
	$body.on('click','.lst-tmb3 a',function(){
		var items = [];
		$(this).closest('.lst-tmb3').find('img').each(function(){
			var t = $(this);
			var src = t.attr('src');
			var w = this.naturalWidth;
			var h = this.naturalHeight;
			items.push({'src':src,'w':w,'h':h});
		});
		openPhotoSwipe(items);
		return false;
	})
    .on('click','.lst-tmb a',function(){
		var items = [];
		$(this).closest('.lst-tmb').find('img').each(function(){
			var t = $(this);
			var src = t.attr('src');
			var w = this.naturalWidth;
			var h = this.naturalHeight;
			items.push({'src':src,'w':w,'h':h});
		});
		openPhotoSwipe(items);
		return false;
	});
    
    // image viewer
	var openPhotoSwipe = function(items){
		var pswpElement = document.getElementById('pswp');
		var options = {
			index: 0,
			captionEl:false
		};
		var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
		gallery.init();
	};
    
    $(".lst-tmb3").each(function(){
        var length = $(this).find("li").length;
        if(length > 2) {
            $(".lst-tmb3 li").eq(3).nextAll().css({"display":"none"});
            $(".lst-tmb3 li").eq(3).find("a").append("<span class='shadow'>" + "+3" + "</span>");
        }
    });
});
