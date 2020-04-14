$(document).ready(function () {
    $(".loginimg").css({ "background-size": "cover" });
 
    var ctemp = "";
    $('.index a').mouseleave(function () {
        $(this).stop().animate({
            backgroundColor: '#FFF',
            fontSize: 14,
            color: "#000",
        }, 300);
        $(this).find('span').stop().animate({
            bottom: 10,
        })
    })
    $('.index a').mouseenter(function () {


        if ($(this).hasClass('cbb')) {
            $(this).stop().animate({
                fontSize: 18,
            }, 300);
            $(this).find('span').stop().animate({
                bottom: 40,
            })
        }
        else {
            $(this).stop().animate({
                
                fontSize: 18,
                color: "#fff",
                backgroundColor: $(this).css('border-top-color'),
            }, 300);
            $(this).find('span').stop().animate({
                bottom: 40,
            })
        }

      
    })

   


        
 
    

  
})