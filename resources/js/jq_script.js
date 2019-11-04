$(document).ready(function () {

/*For the sticky*/

var originHeight = (parseFloat($('nav').height()) + parseFloat($('.siteName').css("margin-top")));
var stickyHeight = 50;

$('.js--startStick').waypoint(function (direction) {
    if (direction == "down") {
        $('nav').addClass('sticky');
        $('body').css("padding-top", originHeight);
        stickyHeight = parseFloat($('nav').height());
        console.log(originHeight);
    } else {
        $('nav').removeClass('sticky');
        $('body').css("padding-top", 0);
    }
});

/* Navi scroll (smooth scrolling) */

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - stickyHeight
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

/* For the image height */
    
    

});
