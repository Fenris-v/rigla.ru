$(document).ready(() => {
    /**
     * SLICK
     */
    let slidesCount = 2;
    if ($('.vacancies__item').length === 1) {
        slidesCount = 1;
    }

    $('.vacancies__slider').slick({
        infinite: true,
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="33" cy="33" r="30" fill="#666666" stroke="white" stroke-width="6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M30.4529 32.5001L36.2265 38.2736L35.1069 39.3932L28.2137 32.5001L35.1069 25.6069L36.2265 26.7265L30.4529 32.5001Z" fill="white"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="33" cy="33" r="30" fill="#666666" stroke="white" stroke-width="6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M30.4529 32.5001L36.2265 38.2736L35.1069 39.3932L28.2137 32.5001L35.1069 25.6069L36.2265 26.7265L30.4529 32.5001Z" fill="white"/></svg></button>',
        slidesToShow: slidesCount,
        autoplay: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });

    /**
     * SLICK BOTTOM
     */
    $('.bottomSlider').slick({
        infinite: true,
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="33" cy="33" r="30" fill="#666666" stroke="white" stroke-width="6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M30.4529 32.5001L36.2265 38.2736L35.1069 39.3932L28.2137 32.5001L35.1069 25.6069L36.2265 26.7265L30.4529 32.5001Z" fill="white"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="33" cy="33" r="30" fill="#666666" stroke="white" stroke-width="6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M30.4529 32.5001L36.2265 38.2736L35.1069 39.3932L28.2137 32.5001L35.1069 25.6069L36.2265 26.7265L30.4529 32.5001Z" fill="white"/></svg></button>',
        slidesToShow: 3,
        autoplay: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    /**
     * CHECKBOX
     */
    $('input[type=checkbox]').css({'opacity': 0})
        .wrap('<span class="wrap-checkbox"></span>');
    $('.wrap-checkbox').on('click', function () {
        $(this).toggleClass('active');
        $(this).siblings().toggleClass('spanActive');
    });

    /**
     * ANCHORS
     */
    $('.anchor').on('click', (e) => {
        e.preventDefault();
        let id = $(e.target).attr('href');
        let top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 1500);
    });

    /**
     * CHECK VACANCY
     */
    $('.check__vacancy').on('click', (e) => {
        e.preventDefault();
        let id = $(e.target).attr('href');
        let top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 1500);

        $('#profession').val($(e.target).data('prof'));
    });

    /**
     * PHONE MASK
     */
    $('#phone').mask('+7 (999) 999-99-99')
        .on('click', function () {
            $(this).get(0).setSelectionRange(4, 4);
        });

    /**
     * HAMBURGER
     */
    $('.menu-toggle-inner').on('click', function (e) {
        $('.adaptive-menu-toggle').toggleClass('adaptive-menu-toggle--open');
        $('.headerNav_adaptive').toggleClass('header_opened');
    });
});
