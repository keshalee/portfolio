function getBrowserType() {
    var _ua = navigator.userAgent;
    var rv = -1;
    //IE 11,10,9,8
    var trident = _ua.match(/Trident\/(\d.\d)/i);
    if (trident != null) {
        if (trident[1] == "7.0" || trident[1] == "6.0" || trident[1] == "5.0" || (trident[1] == "4.0")) {
            return rv = "IE";
          
        }
        else {
         
        }
      
    }
}
function getBrowser() {
    if (navigator.userAgent.toLowerCase().indexOf('msie') != -1) {
        return "rv8";
    }
}

if (getBrowserType() == 'IE') {
    document.write('<link href="css/main-ie.css" rel="stylesheet" />')
    if (getBrowser() == "rv8") {
        document.write('<link href="css/main-ie8.css" rel="stylesheet" />')
        document.write('<script src="js/slide-ie.js"></script>')
    }
    else {
        document.write('<script src="js/slide.js"></script>')
    }
}

else {
    document.write('  <script src="js/slide.js"></script>')
}







