$.ajax({
    method: "GET",
    url: `https://dapi.kakao.com/v3/search/book?target=title`,
    data: { query: "이", size: 18 },
    headers: { Authorization: "KakaoAK 3e72338bf5f39f0b5513f22abd6a2ed7" }
})
    .done(function (msg) {

        for (var i = 0; i < 19; i++) {
            $("#book-ranking .bookimg").eq(i).append("<img src ='" + msg.documents[i].thumbnail + "'/>");
            $("#book-ranking .title").eq(i).append("<h4>" + msg.documents[i].title.substring(0, 13) + "</h4>");
            $("#book-ranking .by").eq(i).append(msg.documents[i].authors[0]);
            var title = msg.documents[i].title;

            if (title.length > 13) {
                $("#book-ranking .title").eq(i).append("...");
            }

        }
    });