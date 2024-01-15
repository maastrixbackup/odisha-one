jQuery(".house_banner_sec").owlCarousel({
    lazyLoad: true,
    loop: true,
    margin: 0,
    responsiveClass: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    mouseDrag: true,
    touchDrag: true,
    smartSpeed: 1000,
    nav: true,
    navText: [
        "<i class='far fa-chevron-left'></i>",
        "<i class='far fa-chevron-right'></i>",
    ],
    dots: true,
    responsive: {
        0: {
            items: 1,
        },

        600: {
            items: 1,
        },

        1024: {
            items: 1,
        },

        1366: {
            items: 1,
        },
    },
});

jQuery(".team-slider").owlCarousel({
    lazyLoad: true,
    loop: true,
    margin: 30,
    responsiveClass: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    mouseDrag: true,
    touchDrag: true,
    smartSpeed: 1000,
    nav: true,
    navText: [
        "<i class='far fa-chevron-left'></i>",
        "<i class='far fa-chevron-right'></i>",
    ],
    dots: false,
    responsive: {
        0: {
            items: 1,
        },

        600: {
            items: 2,
        },

        1024: {
            margin: 20,
            items: 4,
        },

        1366: {
            items: 4,
        },
    },
});

$(document).ready(function () {
    $(".image-slider1").owlCarousel({
        margin: 30,
        loop: false,
        autoplay: false,
        nav: true,
        navText: [
            "<i class='far fa-chevron-left'></i>",
            "<i class='far fa-chevron-right'></i>",
        ],
        responsive: {
            0: {
            items: 1,
            },
            400: {
                items: 2
            },
            600: {
                items: 3
            },
            767: {
                items: 4
            },
            992: {
                items: 5
            },
            1000: {
                items: 6
            }
        }
    });
});

$(document).ready(function () {
    $(".image-slider2").owlCarousel({
        margin: 20,
        loop: false,
        autoplay: false,
        nav: true,
        navText: [
            "<i class='far fa-chevron-left'></i>",
            "<i class='far fa-chevron-right'></i>",
        ],
        responsive: {
            0: {
            items: 1,
            },
            400: {
                items: 2
            },
            600: {
                items: 2
            },
            767: {
                items: 3
            },
            992: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    });
});

jQuery(".team-slider2").owlCarousel({
    lazyLoad: true,
    loop: true,
    margin: 30,
    responsiveClass: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    mouseDrag: true,
    touchDrag: true,
    smartSpeed: 1000,
    nav: true,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-angle-right'></i>",
    ],
    dots: true,
    responsive: {
        0: {
            items: 1,
        },

        600: {
            items: 2,
        },

        1024: {
            items: 3,
        },

        1366: {
            items: 4,
        },
    },
});


jQuery(".health-box").owlCarousel({
    lazyLoad: true,
    stagePadding: 140,
    loop: true,
    margin: 30,
    responsiveClass: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    mouseDrag: true,
    touchDrag: true,
    smartSpeed: 1000,
    nav: true,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-angle-right'></i>",
    ],
    dots: false,
    responsive: {
        0: {
            items: 1,
            stagePadding: 0,
        },

        600: {
            items: 1,
            stagePadding: 50,
        },
        992: {
            items: 1,
            stagePadding: 20,
        },

        1024: {
            items: 1,
            stagePadding: 120,
        },

        1366: {
            items: 1,
        },
        1700: {
            items: 2,
            stagePadding: 0,
        },
        2200: {
            items: 3,
            stagePadding: 0,
        },
    },
});

jQuery(".cn-brow-slider").owlCarousel({
    lazyLoad: true,
    loop: true,
    margin: 30,
    padding:0,
    responsiveClass: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    mouseDrag: true,
    touchDrag: true,
    smartSpeed: 1000,
    nav: true,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-angle-right'></i>",
    ],
    dots: true,
    responsive: {
        0: {
            items: 1,
           
        },

        600: {
            items: 2,
           
        },
        992: {
            items: 3,
            
        },

        1024: {
            items: 3,
           
        },
    },
});

// Back to top
jQuery(document).ready(function () {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });

    jQuery('.back-to-top').click(function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })
});
