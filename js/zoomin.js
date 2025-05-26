$(document).ready(function () {
    $('.img_box').click(function () {
        $('.imgZoomIn').fadeIn();
    });

    $('.zoominCloseBtn').click(function () {
        $('.imgZoomIn').fadeOut();
    });
});