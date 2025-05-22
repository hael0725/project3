
async function bookData() {
    const params = new URLSearchParams({
        target: "title",
        query: "고양이",
        size: 50
    });

    try {
        const response = await fetch(`https://dapi.kakao.com/v3/search/book?${params}`, {
            method: 'GET',
            headers: {
                Authorization: "KakaoAK 3e72338bf5f39f0b5513f22abd6a2ed7"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

        const data = await response.json();

        // for문 (6개)
        const divs = $('.book1');

        for (let i = 0; i < divs.length; i++) {
            divs.eq(i).append("<img src=" + data.documents[i].thumbnail + ">");
            divs.eq(i).append("<h5>" + data.documents[i].title + "</h5>");
            // divs.eq(i).append("<h6>" + data.documents[i].authors + "</h6>");

            let str = data.documents[0].contents.substring(0, 60);
        }

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData();
