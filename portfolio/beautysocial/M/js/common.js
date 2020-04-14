// Scroll Move
function scrollMove(t,h) {
	'use strict';
	if(h==undefined) h=0;
	var o = jQuery('html,body');
	o.animate({
		scrollTop:jQuery(t).offset().top-h
	},500);
}

jQuery(function($){
	"use strict";
	var $body = $('body'),
		$window = $(window);
    
    $(".stars-grade.step5").rating5();
    $(".stars-grade.step3").rating3();
    
	$window.scroll(function(){
		if($window.scrollTop() > $window.height()/2){
			$body.addClass('is-scroll');
		} else {
			$body.removeClass('is-scroll');
		}
	});
    
    $("html").on("click", ".btn", function(evt) {
        var btn = $(evt.currentTarget);
        var x = evt.pageX - btn.offset().left;
        var y = evt.pageY - btn.offset().top;

        $("<b/>").appendTo(btn).css({
            "left": x,
            "top": y,
            "opacity": "0",
            "transform":"scale(0)"
        }).animate({"opacity":"1","transform":"scale(10)"},800, function(){
            $(".btn b").remove();
        });
    });
    
    $("html").on("click", ".lst-default li", function(evt) {
        var btn = $(evt.currentTarget);
        var x = evt.pageX - btn.offset().left;
        var y = evt.pageY - btn.offset().top;

        $("<b/>").appendTo(btn).css({
            "left": x,
            "top": y,
            "opacity": "0",
            "transform":"scale(0)"
        }).animate({"opacity":"1","transform":"scale(10)"},800, function(){
            $(".lst-default li b").remove();
        });
    });

	// toggle
	$body
	.on('click','[data-toggle=accordion]',function(){
		$(this).toggleClass('open').next().slideToggle(300).parent().siblings().find('.cnt-wrp').removeClass('open').next().slideUp(300);
		return false;
	})
	.on('click','a[data-toggle=folding]',function(){
		var _toggleFolding = function($target, $btn) {
			$target.toggleClass('open');
            var txt = "";
            if($target.hasClass("open")) {
                txt = $btn.find("span").data("text-folding");
            }else {
            	txt = $btn.find("span").data("text-more");
            }
            $btn.find("span").html(txt);
		};
		var $target = $(this);
		if ($target[0] && $target[0].classList.contains('folding-cnt')) {
			_toggleFolding($target, $(this).next());
			return false;
		}
		_toggleFolding($(this).prev(), $(this));
		return false;
	})
	.on('click','[data-toggle=toast]',function(){
		var t = $(this),
			target = $(t.attr('href')),
			time = t.data('time');
		if(!time){
			time = 1500;
		}
		target.modal();
		setTimeout(function(){
			target.modal('hide');
		},time)
		return false;
	})
	.on("click",".view-tab a", function(){
		var $this = $(this),
			hash = $this.attr("href");
        
		$(".view-tab a").removeClass("active");
		$this.addClass("active");
		$(hash).addClass("active").siblings().removeClass("active");
	});
	
    // image viewer
	var openPhotoSwipe = function(items, steIndex){
		var pswpElement = document.getElementById('pswp');
		var options = {
			index: parseInt(steIndex),
			captionEl:false
		};
		var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
		gallery.init();
	};
	$body.on('click','ul.lst-tmb a',function(){
		var items = [];
		var steIndex = 0;

		$(this).closest('.lst-tmb').find('img').each(function(){
			var t = $(this);
			var src = t.attr('src');
			var w = this.naturalWidth;
			var h = this.naturalHeight;
			items.push({'src':src,'w':w,'h':h});
		});
		try{
			steIndex = $(this).attr("data-index");
		}
		catch(e){
			steIndex = 0;
		}
		openPhotoSwipe(items, steIndex);
		return false;
	})
    .on('click','ul.lst-tmb2 a',function(){
		var items = [];
		var steIndex = 0;
		$(this).closest('.lst-tmb2').find('img').each(function(){
			var t = $(this);
			var src = t.attr('src');
			var w = this.naturalWidth;
			var h = this.naturalHeight;
            var title = this.getAttribute("data-title");
			items.push({'src':src,'w':w,'h':h,'title':title});
		});

		try{
			steIndex = $(this).attr("data-index");
		}
		catch(e){
			steIndex = 0;
		}

		openPhotoSwipe(items, steIndex);
		return false;
	})
    .on('click','.view .swiper-wrapper a',function(){
		var items = [];
		var steIndex = 0;
		$(this).closest('.swiper-wrapper').find('img').each(function(){
			var t = $(this);
			var src = t.attr('src');
			var w = this.naturalWidth;
			var h = this.naturalHeight;
			items.push({'src':src,'w':w,'h':h});
		});
		openPhotoSwipe(items, steIndex);
		return false;
	})
    .on('click','ul.upload-list a',function(){
		var items = [];
		$(this).closest('.upload-list').find('img').each(function(){
			var t = $(this);
			var src = t.attr('src');
			var w = this.naturalWidth;
			var h = this.naturalHeight;
			items.push({'src':src,'w':w,'h':h});
		});
		openPhotoSwipe(items);
		return false;
	});
	$(".dropdown-menu a").click(function(){
        $(".sort-btn").html($(this).text());
    });
});

(function ($) {
    $.fn.rating5 = function(method, options) {
        method = method || 'create';
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            limit: 5,
            value: 0,
            glyph: "icon-eval-star",
            coloroff: "#d9d9d9",
            coloron: "#ff4662",
            size: "24px",
            cursor: "default",
            onClick: function () {},
            endofarray: "idontmatter"
        }, options );
        var style = "";
        style = style + "font-size:" + settings.size + "; ";
        style = style + "color:" + settings.coloroff + "; ";
        style = style + "cursor:" + settings.cursor + "; ";

        if (method == 'create')
        {
            //this.html('');	//junk whatever was there

            //initialize the data-rating property
            this.each(function(){
                attr = $(this).attr('data-rating');
                if (attr === undefined || attr === false) { $(this).attr('data-rating',settings.value); }
            });

            //bolt in the glyphs
            for (var i = 0; i < settings.limit; i++)
            {
                this.append('<i data-value="' + (i+1) + '" class="ratingicon ' + settings.glyph + '" style="' + style + '" aria-hidden="true"></i>');
            }

            //paint
            this.each(function() { paint($(this)); });

        }
        if (method == 'set')
        {
            this.attr('data-rating',options);
            this.each(function() { paint($(this)); });
        }
        if (method == 'get')
        {
            return this.attr('data-rating');
        }
        //register the click events
        this.find("i.ratingicon").click(function() {
            rating = $(this).attr('data-value');
            $(this).parent().attr('data-rating',rating);
            $(this).closest('.star').next('.grade').find('span').text(rating);//add rating
            paint($(this).parent());
            settings.onClick.call( $(this).parent() );
        });
        function paint(div)
        {
            rating = parseInt(div.attr('data-rating'));
            div.find("input").val(rating);	//if there is an input in the div lets set it's value
            div.find("i.ratingicon").each(function(){	//now paint the stars

                var rating = parseInt($(this).parent().attr('data-rating'));
                var value = parseInt($(this).attr('data-value'));
                if (value > rating) { $(this).removeClass("active"); }
                else { $(this).addClass("active"); }
            });
        }

    };

    // 별 3개
    $.fn.rating3 = function(method, options) {
        method = method || 'create';
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            limit: 3,
            value: 0,
            glyph: "icon-eval-star",
            coloroff: "#d9d9d9",
            coloron: "#ff4662",
            size: "24px",
            cursor: "default",
            onClick: function () {},
            endofarray: "idontmatter"
        }, options );
        var style = "";
        style = style + "font-size:" + settings.size + "; ";
        style = style + "color:" + settings.coloroff + "; ";
        style = style + "cursor:" + settings.cursor + "; ";

        if (method == 'create')
        {
            //this.html('');	//junk whatever was there

            //initialize the data-rating property
            this.each(function(){
                attr = $(this).attr('data-rating');
                if (attr === undefined || attr === false) { $(this).attr('data-rating',settings.value); }
            });

            //bolt in the glyphs
            for (var i = 0; i < settings.limit; i++)
            {
                switch (i) {
                    case 0: this.append('<i data-value="' + (1) + '" class="ratingicon ' + settings.glyph + '" style="' + style + '" aria-hidden="true"></i>');
                        break;
                    case 1: this.append('<i data-value="' + (3) + '" class="ratingicon ' + settings.glyph + '" style="' + style + '" aria-hidden="true"></i>');
                        break;
                    case 2: this.append('<i data-value="' + (5) + '" class="ratingicon ' + settings.glyph + '" style="' + style + '" aria-hidden="true"></i>');
                        break;
                }
            }
            //paint
            this.each(function() { paint($(this)); });

        }
        if (method == 'set')
        {
            this.attr('data-rating',options);
            this.each(function() { paint($(this)); });
        }
        if (method == 'get')
        {
            return this.attr('data-rating');
        }
        //register the click events
        this.find("i.ratingicon").click(function() {
            rating = $(this).attr('data-value');
            $(this).parent().attr('data-rating',rating);
            $(this).closest('.star').next('.grade').find('span').text(rating);//add rating
            paint($(this).parent());
            settings.onClick.call( $(this).parent() );
        });
        function paint(div)
        {
            rating = parseInt(div.attr('data-rating'));
            div.find("input").val(rating);	//if there is an input in the div lets set it's value
            div.find("i.ratingicon").each(function(){	//now paint the stars

                var rating = parseInt($(this).parent().attr('data-rating'));
                var value = parseInt($(this).attr('data-value'));
                if (value > rating) { $(this).removeClass("active"); }
                else { $(this).addClass("active"); }
            });
        }

    };
}( jQuery ));

// commonTab
function commonTab(tabParent, tabName){
	$("#"+tabParent+" ul.tabbox li").removeClass("active");
	$("#"+tabParent+" ul.tabbox li."+tabName).addClass("active");
	$("#"+tabParent+" .hiddencontents").removeClass("active");
	$("#"+tabParent+" .hiddencontents."+tabName).addClass("active");
    
}
