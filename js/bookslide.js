$(document).ready(function () {
    $('.next2').click(function () {
        $('#book_ranking .wrap').stop().animate({ marginLeft: -1110 }, 800);
        $('.next2').fadeOut(200);
        $('.prev2').fadeIn(200);
    });

    $('.prev2').click(function () {
        $('#book_rank .wrap').stop().animate({ marginLeft: 0 }, 800);
        $('.next2').fadeIn(200);
        $('.prev2').fadeOut(200);
    });
});