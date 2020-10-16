$(document).ready(() => {
    /**
     * SLICK
     */
    $('.vacancies__slider').slick({
        infinite: true,
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><svg style="display: block" viewBox="0 0 10.6 18" xmlns="http://www.w3.org/2000/svg"> <desc>Left</desc> <polyline fill="none" stroke="#ffffff" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="2" points="1,1 9,9 1,17"></polyline> </svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg style="display: block" viewBox="0 0 10.6 18" xmlns="http://www.w3.org/2000/svg"> <desc>Right</desc> <polyline fill="none" stroke="#ffffff" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="2" points="1,1 9,9 1,17"></polyline> </svg></button>',
        slidesToShow: 2,
        autoplay: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });
});
