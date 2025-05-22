$.ajax({
    method: "GET",
    url: `https://dapi.kakao.com/v3/search/book?target=title`,
    data: { query: "나", size: 50 },
    headers: { Authorization: "KakaoAK 3e72338bf5f39f0b5513f22abd6a2ed7" }
})
    .done(function (msg) {

        for (var i = 0; i < 23; i++) {
            $("#new .imgbox").eq(i).append("<img src ='" + msg.documents[i].thumbnail + "'/>");
            $("#new .title").eq(i).append("<h4>" + msg.documents[i].title.substring(0, 14) + "</h4>");
            $("#new .by").eq(i).append(msg.documents[i].authors[0]);
            var title = msg.documents[i].title;

            // if (title.length > 14) {
            //     $(".newBookText a h4").eq(i).append("...");
            // }

        }
    });