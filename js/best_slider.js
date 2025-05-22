$(document).ready(function () {
    $('.next3').click(function () {
        $('.book3').stop().animate({ marginLeft: -1110 }, 800);
        $('.next3').fadeOut(200);
        $('.prev3').fadeIn(200);
    });

    $('.prev3').click(function () {
        $('.book3').stop().animate({ marginLeft: 0 }, 800);
        $('.next3').fadeIn(200);
        $('.prev3').fadeOut(200);
    });
});