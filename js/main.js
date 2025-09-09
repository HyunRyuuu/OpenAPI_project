$(document).ready(function(){

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