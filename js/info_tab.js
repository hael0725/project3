// 작품 정보 탭 :::::
$(document).ready(function () {
    $('.wrap1 .btn:nth-of-type(1)').click(function () {
        $('.wrap1 button').removeClass('active');
        $(this).addClass('active');
        $('.text_box1').fadeIn();
        $('.text_box2').hide();
        $('.text_box3').hide();

        $('.btn2').css('border-bottom', '1px solid #cccccc;');
        $('.btn3').css('border-bottom', '1px solid #cccccc;');
    });

    $('.wrap1 .btn:nth-of-type(2)').click(function () {
        $('.wrap1 button').removeClass('active');
        $(this).addClass('active');
        $('.text_box2').fadeIn();
        $('.text_box1').hide();
        $('.text_box3').hide();
 
        $('.btn1').css('border-bottom', '1px solid #cccccc;');
        $('.btn3').css('border-bottom', '1px solid #cccccc;');
    });
    $('.wrap1 .btn:nth-of-type(3)').click(function () {
        $('.wrap1 button').removeClass('active');
        $(this).addClass('active');
        $('.text_box3').fadeIn();
        $('.text_box1').hide();
        $('.text_box2').hide();

        $('.btn2').css('border-bottom', '1px solid #cccccc;');
        $('.btn1').css('border-bottom', '1px solid #cccccc;');
    });
});

// 작가 정보 텝 :::::::::
$(document).ready(function () {
    $('.wrap2 .btn:nth-of-type(1)').click(function () {
        $('.wrap2 button').removeClass('active');
        $(this).addClass('active');
        $('.text_box2-1').fadeIn();
        $('.text_box2-2').hide();

        $('.btn2').css('border-bottom', '1px solid #cccccc;');
        $('.btn3').css('border-bottom', '1px solid #cccccc;');
    });

    $('.wrap2 .btn:nth-of-type(2)').click(function () {
        $('.wrap2 button').removeClass('active');
        $(this).addClass('active');
        $('.text_box2-2').fadeIn();
        $('.text_box2-1').hide();

        $('.btn1').css('border-bottom', '1px solid #cccccc;');
        $('.btn3').css('border-bottom', '1px solid #cccccc;');
    });


    // 더보기 탭
    $('.text_box button').click(function () {

        if ($(this).parent().hasClass('text_box3') || $(this).parent().hasClass('text_box2-2')) {
            console.log($(this).parent().height())

            if ($(this).parent().height() == 280) { 
                $(this).parent().height("auto");
                $(this).parent().removeClass("gradient");      
                $(this).html('접기 <i class="fa-solid fa-chevron-up">');

            } else {
                $(this).parent().height(280);
                $(this).parent().addClass("gradient");
                $(this).html('더보기 <i class="fa-solid fa-chevron-down">');
            }
        }
    });

});