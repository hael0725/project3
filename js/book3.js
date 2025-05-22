$.ajax({
    method: "GET",
    url: `https://dapi.kakao.com/v3/search/book?target=title`,
    data: { query: "추천" },
    headers: { Authorization: "KakaoAK 3e72338bf5f39f0b5513f22abd6a2ed7" }
})
    .done(function (msg) {

        for (var i = 0; i < 10; i++) {
            $(".boximg").eq(i).append("<img src ='" + msg.documents[i].thumbnail + "'/>");
            $("#md .text h5").eq(i).append("<h4>" + msg.documents[i].contents.substring(0, 37) + "</h4>");
            $("#md .p").eq(i).append("<p>" + msg.documents[i].authors[0] + "</p>");
            var content = msg.documents[i].contents;

            if (content.length > 30) {
                $("#md .text h5").eq(i).append("...");
            }

        }
    });
