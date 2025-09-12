$(document).ready(function(){

    async function fetchBooks(query) {
        const params = new URLSearchParams({
            target: "title",
            query,
            size: 18
        });

        const url = `https://dapi.kakao.com/v3/search/book?${params}`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: "KakaoAK 80e18246616d3ae2d38201542e89f197"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP 오류: ${response.status}`);
        }

        return response.json();
    }

    async function bookData() {
        try {          

            const querise = [
                { query: '만화', sectionId: 'webtoon_time_lank' },
                { query: '웹툰', sectionId: 'webtoom-lank' },
            ];

            for (const { query, sectionId } of querise ){
                const data = await fetchBooks(query);

                // 영역 선택
                // const section = $('#' + sectionId).find('.lanking__slide-wrap');
                // const mainBox = $(section).find('.lanking__slide');

                const section = document.querySelector(`#${sectionId}`);
                const mainBox = section.querySelectorAll(".lanking__slide");

                mainBox.forEach((box, i) => {
                    const doc = data.documents[i];

                    const imgSrc = doc.thumbnail;
                    const title = doc.title;
                    const writer = doc.authors;

                    // thumbnail
                    $(box).find('.img-wrap > a').append('<img src='+ imgSrc +'>');
                    // title
                    $(box).find('.text-wrap .title').text(title);
                    // writer
                    $(box).find('.text-wrap .writer > span').eq(0).text(writer);
                });

            }

        } catch (error) {
            console.log('에러 발생', error);
        }
    }

    bookData();
});