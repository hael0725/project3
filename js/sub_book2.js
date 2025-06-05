$.ajax({
    method: "GET",
    url: `https://dapi.kakao.com/v3/search/book?target=title`,
    data: { query: "살인", size: 6 },
    headers: { Authorization: "KakaoAK 3e72338bf5f39f0b5513f22abd6a2ed7" }
})
    .done(function (msg) {

        for (var i = 0; i < msg.documents.length; i++) {
            $("#books .wrap .imgbox").eq(i).append("<img src ='" + msg.documents[i].thumbnail + "'/>");
            $("#books .wrap1 .title").eq(i).append("<h5>" + msg.documents[i].title.substring(0, 14) + "</h5>");
            $("#books .wrap .by").eq(i).append(msg.documents[i].authors[0]);
            var title = msg.documents[i].title;

        }
    });

    $.ajax({
    method: "GET",
    url: `https://dapi.kakao.com/v3/search/book?target=title`,
    data: { query: "러브", size: 6 },
    headers: { Authorization: "KakaoAK 3e72338bf5f39f0b5513f22abd6a2ed7" }
})
    .done(function (msg) {

        for (var i = 0; i < msg.documents.length; i++) {
            $("#books .wrap2 .imgbox").eq(i).append("<img src ='" + msg.documents[i].thumbnail + "'/>");
            $("#books .wrap2 .title").eq(i).append("<h5>" + msg.documents[i].title.substring(0, 14) + "</h5>");
            $("#books .wrap2 .by").eq(i).append(msg.documents[i].authors[0]);
            var title = msg.documents[i].title;

        }
    });