$(document).ready(function(){

    // main banner
    const main_banner = new Swiper('.main__banner-wrap', {
        width: 56,
        // loop: true,
        slidesPerView: "auto",
		spaceBetween: 6,
        navigation: {
            nextEl: ".main__banner-next",
            prevEl: ".main__banner-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        watchOverflow: true,
        on: {
        }
    });

    function swiperPositionSet(el, Xposition, index) {
        $(el).attr(
            'style',
            'transform:translate3d(' + Xposition + 'px ,0px,0px); transition-duration: 300ms;'
        )
    ;}

    function mainSlideChangeStart () {
        var swiper_position_X = '-' + main_banner.realIndex * 52;

        swiperPositionSet(
            '.main__banner-wrap .swiper-wrapper',
            swiper_position_X,
            main_banner.realIndex
        )
    ;}

    main_banner.on('slideChangeTransitionStart', mainSlideChangeStart);

    // 웹툰 실시간 랭킹
    const webtoon_lank = new Swiper('.lanking__slide-wrap', {
        slidesPerView: 3,
		slidesPerColumn: 3,
		slidesPerGroup: 9,
		spaceBetween: 26,
        navigation: {
            nextEl: ".lanking__slide-next",
            prevEl: ".lanking__slide-prev",
        },
        watchOverflow: true,
    });

    // 요일별 웹툰
    const weekly_webtoon_lank = new Swiper('.book__slide-wrap.weekly', {
        slidesPerView: 6,
		spaceBetween: 6,
        navigation: {
            nextEl: ".book__slide-wrap.weekly .book__list-next",
            prevEl: ".book__slide-wrap.weekly .book__list-prev",
        },
        watchOverflow: true,
    });

    // 기다리면 무료로 시작해!
    const wait_webtoon_lank = new Swiper('.book__slide-wrap.wait', {
        slidesPerView: 6,
		spaceBetween: 6,
        navigation: {
            nextEl: ".book__slide-wrap.wait .book__list-next",
            prevEl: ".book__slide-wrap.wait .book__list-prev",
        },
        watchOverflow: true,
    });

    // 오늘, 리디의 발견
    const today_webtoon_lank = new Swiper('.book__slide-wrap.today', {
        slidesPerView: 6,
		spaceBetween: 6,
        navigation: {
            nextEl: ".book__slide-wrap.today .book__list-next",
            prevEl: ".book__slide-wrap.today .book__list-prev",
        },
        watchOverflow: true,
    });
});