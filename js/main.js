$(function() {
    "use strict";

    let body = $('body');
    let mobileIcon = $('#hamburger-menu');
    let mobileNav = $('#mobile-menu');
    let menu = $(".navigation-main__primary.desktop .main-menu");
    let pageUrl = window.location.pathname.split("/");
    let activeUrl = pageUrl[pageUrl.length - 1];

    function activeMenu () {
        menu.find('.active').removeClass('active');
        menu.find('a[href="'+ activeUrl + '"]').addClass('active');

        menu.on('click', 'a',function () {
            $(this).find('.active').removeClass('active');
            $(this).find('a[href="'+ activeUrl + '"]').addClass('active');
        });
    }

    function mobileMenu () {
        mobileIcon.on('click', function () {
            body.toggleClass('open-menu');
            mobileIcon.toggleClass('open');
            mobileNav.toggleClass('active');
        });

        mobileNav.on('swipe', function () {
            mobileIcon.removeClass('open');
            mobileNav.removeClass('active');
        });
    }

    $(window).on('scroll', function () {
        let header = $("header");

        $(window).scrollTop() > header.outerHeight() ? header.addClass('fixed') : header.removeClass('fixed');
    });

    mobileMenu();
    activeMenu();
});
