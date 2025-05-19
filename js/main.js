
//슬라이드
$(document).ready(function () {
    $(".slide").not(":first").css({ "width": "48px" });
    $(".page").eq(0).show();
    $(".text").eq(0).show();
    // $(".prev_2").addClass("hide");
    // $(".prev_3").addClass("hide");
    // $(".prev_4").addClass("hide");
    // $(".prev_5").addClass("hide");
    // $(".prev_6").addClass("hide");
    // $(".prev_7").addClass("hide");


    function prev() {
        $(".slide:last").prependTo(".allslide").css({ "width": 0 });
        $(".slide:first").stop().animate({ "width": 1024 }, "slow", "linear");
        $(".slide").eq(1).stop().animate({ "width": 48 }, "slow", "linear");
        $(".text").eq(1).fadeOut("slow");
        $(".text").eq(0).fadeIn("slow");
        $(".page").eq(1).fadeOut("slow");
        $(".page").eq(0).fadeIn("slow");
    }

    function next() {
        $(".slide:first").stop().animate({ "width": 0 }, "slow", "linear");
        $(".slide").eq(1).stop().animate({ "width": 1024 }, "slow", "linear", function () {
            $(".slide:first").appendTo(".allslide");
            $(".slide:last").css({ "width": "48px" });
        });
        $(".text").eq(0).fadeOut("slow");
        $(".text").eq(1).fadeIn("slow");
        $(".page").eq(0).fadeOut("slow");
        $(".page").eq(1).fadeIn("slow");
    }

    var time = setInterval(next, 4000);

    $("#banner .warp ul").hover(function () {
        clearInterval(time);
    }, function () {
        setTimeout(time = setInterval(next, 4000), 2000);
    })

    $(".prev").on("click", function () {
        prev();
    })

    $(".next").on("click", function () {
        next();
    })
})
// for(i=1; i<11; i++){
//     $(".slide1"+i).css("background","url(img/banner_"+i+".webp)")
// }