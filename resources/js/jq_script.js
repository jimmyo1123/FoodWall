$(document).ready(function () {
    var originHeight = (parseFloat($('nav').height()) + parseFloat($('.siteName').css("margin-top")));
    
    $('.js--startStick').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
            $('body').css("padding-top", originHeight);
            console.log(originHeight);
        } else {
            $('nav').removeClass('sticky');
            $('body').css("padding-top", 0);
            console.log(originHeight);
        }
    });
    
});
