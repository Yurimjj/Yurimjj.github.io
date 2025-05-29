$(function () {
    $('button').click(function () {
        $('aside').toggleClass('open');
        if ($('aside').hasClass('open')) {
            $('aside').stop().animate({ right: 0 }, 500, 'easeInQuad'); // 500:애니메이션속도 (0.5초)
            $('button').find('img').attr({ 'src': './img/dongbu_img/btn_close.png', 'alt': 'close' });
        } else {
            $('aside').stop().animate({ right: '-220px' }, 500, 'easeOutQuad');
            $('button').find('img').attr({ 'src': './img/dongbu_img/btn_open.png', 'alt': 'open' });
        }
    });
});