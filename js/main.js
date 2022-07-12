$(function() {
    "use strict";

    let body = $('body');
    let mobileIcon = $('#hamburger-menu');
    let mobileNav = $('#mobile-menu');
    let menu = $(".navigation-main__primary.desktop .main-menu");
    let pageUrl = window.location.pathname.split("/");
    let activeUrl = pageUrl[pageUrl.length - 1];
    let showMoreLink = $('#show_more_link');
    let showMoreProductsLink = $('#products_show_more');
    let showMoreText = $('.show-more-heading').find('.text-row');
    let productsBlock = $('.products-block');
    let showMoreItems = productsBlock.find('.toggle-products');

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

    function showMore () {
        showMoreLink.on('click', function (event) {
            event.preventDefault();
            showMoreText.toggleClass('visible');
        });
    }
    function showMoreProducts () {
        showMoreProductsLink.on('click', function (event) {
            event.preventDefault();

            productsBlock.toggleClass('active');
            showMoreItems.toggleClass('visible');

            productsBlock[0].scrollIntoView({
                behavior: "smooth", // or "auto" or "instant"
                block: "end" // or "end"
            });
        });
    }

    $(window).on('scroll', function () {
        let header = $("header");

        $(window).scrollTop() > header.outerHeight() ? header.addClass('fixed') : header.removeClass('fixed');
    });

    mobileMenu();
    activeMenu();
    showMore();
    showMoreProducts();
});
