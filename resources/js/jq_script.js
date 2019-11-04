$(document).ready(function () {

    /*For the sticky*/
    

    var originHeight = $('header').height();
    var stickyHeaderHeight;
    if ($('.mobile-menu').css("display") == "none") {
        stickyHeaderHeight = 57.5;
    } else {
        stickyHeaderHeight = 111;
    }

    $('.js--startStick').waypoint(function (direction) {
        /* Check if mobile menu exists */
        if ($('.mobile-menu').css("display") != 'none') {
            originHeight = parseFloat($('nav').height());
        } else {
            originHeight = (parseFloat($('nav').height()) + parseFloat($('.siteName').css("margin-top")));
        }

        if (direction == "down") {
            $('nav').addClass('sticky');
            stickyHeaderHeight = parseFloat($('nav').height());
            $('body').css("padding-top", originHeight);
        } else {
            $('nav').removeClass('sticky');
            stickyHeaderHeight = parseFloat($('nav').height());
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
                        scrollTop: target.offset().top - stickyHeaderHeight
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

    /* Mobile menu */
    var nav = $('.js--menu');
    var icon = $('.js--mobile-menu-icon i');
    $('.js--mobile-menu-icon').click(function () {


        nav.slideToggle(200, function () {
            /* Waypoint.refreshAll(); */
        });

        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });

    /* scroll will automatically close mobile menu when it is open */

    $(window).scroll(function () {

        var lastScrollTop = 0;
        if (icon.hasClass('ion-close-round')) {

            var nowScrollTop = $(this).scrollTop();

            if (nowScrollTop > lastScrollTop) {
                nav.slideUp(200);
                icon.addClass('ion-navicon-round');
                icon.removeClass('ion-close-round');
            }
            lastScrollTop = nowScrollTop;
        }
    });


});
