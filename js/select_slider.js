$(document).ready(function () {
    $('.next4').click(function () {
        $('#select .wrap').stop().animate({ marginLeft: -1110 }, 800);
        $('.next4').fadeOut(200);
        $('.prev4').fadeIn(200);
    });

    $('.prev4').click(function () {
        $('#select .wrap').stop().animate({ marginLeft: 0 }, 800);
        $('.next4').fadeIn(200);
        $('.prev4').fadeOut(200);
    });
});