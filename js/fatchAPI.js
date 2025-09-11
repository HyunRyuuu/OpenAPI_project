$(document).ready(function(){

    async function bookData() {
        const params = new URLSearchParams({
            target: "title",
            query: "상수리나무 아래"
        });

        try {
            const response = await fetch(`https://dapi.kakao.com/v3/search/book?${params}`, {
                method: 'GET',
                headers: {
                    Authorization: "KakaoAK 80e18246616d3ae2d38201542e89f197"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
            }

            const data = await response.json();
            

            // 영역 선택
            const parantBox = $('.webtoon_time_lank.lanking__slide-wrap');
            const childrenBox = $(parantBox).find('.lanking__slide-inner');
            const mainBox = $(childrenBox).find('.lanking__slide').eq(0);

            const imgSrc = data.documents[0].thumbnail;
            const title = data.documents[0].title;
            const writer = data.documents[0].authors;

            // thumbnail
            $(mainBox).find('.img-wrap > a').append('<img src='+ imgSrc +'>');
            // title
            $(mainBox).find('.text-wrap .title').text(title);
            // writer
            $(mainBox).find('.text-wrap .writer > span').eq(0).text(writer);

            // // <h3> 요소 생성 및 텍스트 설정 (제목)
            // const titleElement = document.createElement("h3");
            // titleElement.textContent = data.documents[0].title;
            // boxElement.appendChild(titleElement);

            // // <h6> 요소 생성 및 텍스트 설정 (저자)
            // const authorElement = document.createElement("h6");
            // authorElement.textContent = data.documents[0].authors;
            // boxElement.appendChild(authorElement);

            // // 본문 내용 일부 잘라내기
            // let str = data.documents[0].contents.substring(0, 60);

            // // <p> 요소 생성 및 텍스트 설정 (내용 요약)
            // const contentsElement = document.createElement("p");
            // contentsElement.textContent = str;
            // boxElement.appendChild(contentsElement);

        } catch (error) {
            console.log('에러 발생', error);
        }
    }

    bookData();
});