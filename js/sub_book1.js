$.ajax({
    method: "GET",
    url: `https://dapi.kakao.com/v3/search/book?target=title`,
    data: { query: "구병모", size: 6 },
    headers: { Authorization: "KakaoAK 3e72338bf5f39f0b5513f22abd6a2ed7" }
})
    .done(function (msg) {

        for (var i = 0; i < msg.documents.length; i++) {
            $(".wrap3 .imgbox").eq(i).append("<img src ='" + msg.documents[i].thumbnail + "'/>");
            $(".wrap3 .title").eq(i).append("<h5>" + msg.documents[i].title.substring(0, 14) + "</h5>");
            $(".wrap3 .by").eq(i).append(msg.documents[i].authors[0]);
            var title = msg.documents[i].title;

        }
    });