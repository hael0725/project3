// 작품 정보 탭 :::::
$(document).ready(function () {
    $('.wrap1 button:nth-of-type(1)').click(function () {
        $('.wrap1 button').removeClass('active');
        $(this).addClass('active');
        $('.text_box1').fadeIn();
        $('.text_box2').hide();
        $('.text_box3').hide();
    });

    $('.wrap1 button:nth-of-type(2)').click(function () {
        $('.wrap1 button').removeClass('active');
        $(this).addClass('active');
        $('.text_box2').fadeIn();
        $('.text_box1').hide();
        $('.text_box3').hide();
    });
    $('.wrap1 button:nth-of-type(3)').click(function () {
        $('.wrap1 button').removeClass('active');
        $(this).addClass('active');
        $('.text_box3').fadeIn();
        $('.text_box1').hide();
        $('.text_box2').hide();
    });
});

// 작가 정보 텝 :::::::::
$(document).ready(function () {
    $('.wrap2 button:nth-of-type(1)').click(function () {
        $('.wrap2 button').removeClass('active');
        $(this).addClass('active');
        $('.text_box2-1').fadeIn();
        $('.text_box2-2').hide();
    });

    $('.wrap2 button:nth-of-type(2)').click(function () {
        $('.wrap2 button').removeClass('active');
        $(this).addClass('active');
        $('.text_box2-2').fadeIn();
        $('.text_box2-1').hide();
    });
});