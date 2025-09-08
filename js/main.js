$(document).ready(function(){

    // 웹툰 실시간 랭킹
    const webtoon_lank = new Swiper('.lanking__slide-wrap', {
        slidesPerView: 3,
		slidesPerColumn: 3,
		slidesPerGroup: 9,
		spaceBetween: 26,
        navigator: {
            prevEl: '.lanking__slide-prev',
            nextEl: '.lanking__slide-next'
        },
        watchOverflow: true,
    });
});