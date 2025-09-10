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
    const webtoon_time_lank = new Swiper('.webtoon_time_lank', {
        slidesPerView: 3,
		slidesPerColumn: 3,
		slidesPerGroup: 9,
		spaceBetween: 26,
        navigation: {
            nextEl: "#webtoon_time_lank .lanking__slide-next",
            prevEl: "#webtoon_time_lank .lanking__slide-prev",
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

    // 웹툰 실시간 랭킹
    const webtoon_best = new Swiper('.webtoom-lank', {
        slidesPerView: 3,
		slidesPerColumn: 3,
		slidesPerGroup: 9,
		spaceBetween: 26,
        navigation: {
            nextEl: "#webtoom-lank .lanking__slide-next",
            prevEl: "#webtoom-lank .lanking__slide-prev",
        },
        watchOverflow: true,
    });

    // 지금, 리디에서만 볼 수 있는 웹툰
    const now_ridi_only_webtoon_lank = new Swiper('.book__slide-wrap.now_ridi_only', {
        slidesPerView: 6,
		spaceBetween: 6,
        navigation: {
            nextEl: ".book__slide-wrap.now_ridi_only .book__list-next",
            prevEl: ".book__slide-wrap.now_ridi_only .book__list-prev",
        },
        watchOverflow: true,
    });

    // 매수 화수목엔 포인트 줍줍!
    const point_webtoon_lank = new Swiper('.book__slide-wrap.point', {
        slidesPerView: 6,
		spaceBetween: 6,
        navigation: {
            nextEl: ".book__slide-wrap.point .book__list-next",
            prevEl: ".book__slide-wrap.point .book__list-prev",
        },
        watchOverflow: true,
    });

    // 오직 리디에서만!

    // 새로 나온 작품
    const new_webtoon_lank = new Swiper('.book__slide-wrap.new', {
        slidesPerView: 6,
		spaceBetween: 6,
        navigation: {
            nextEl: ".book__slide-wrap.new .book__list-next",
            prevEl: ".book__slide-wrap.new .book__list-prev",
        },
        watchOverflow: true,
    });

    // 이벤트 보러가기

    // 늘 짜릿한 신작 #BL
    const new_bl_webtoon_lank = new Swiper('.book__slide-wrap.new_bl', {
        slidesPerView: 6,
		spaceBetween: 6,
        navigation: {
            nextEl: ".book__slide-wrap.new_bl .book__list-next",
            prevEl: ".book__slide-wrap.new_bl .book__list-prev",
        },
        watchOverflow: true,
    });
});