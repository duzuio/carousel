/**
 * Created by boss on 16/5/18.
 */
$(function () {
	var idx = 0;
	var imgIdx = 0;
	$('.promo ul').append($('.promo ul li').eq(0).clone(true));

	// 点击右边按钮,让点跳到下一个,图片向左走一张
	function rightClick() {
		idx++;
		if (idx > 4) {
			idx = 0
		}
		$('.promo ol li').eq(idx).addClass('current').siblings().removeClass('current');

		imgIdx++;
		if (imgIdx > 5) {
			imgIdx = 1;
			$('.promo ul').css('left', '0px');
		}
		var move = imgIdx * -520;
		$('.promo ul').animate({left: '' + move + 'px'}, 500);
	}

	$('.right').click(function () {
		rightClick();
	});

	// 点击左边按钮,让点跳到上一个,图片向右走一张
	$('.left').click(function () {
		idx--;
		if (idx < 0) {
			idx = 4
		}
		$('.promo ol li').eq(idx).addClass('current').siblings().removeClass('current');

		imgIdx--;
		if (imgIdx < 0) {
			imgIdx = 4;
			$('.promo ul').css('left', '-2600px');
		}
		var move = imgIdx * -520;
		$('.promo ul').animate({left: '' + move + 'px'}, 500);
	});

	// 点击圆点,跳转到圆点所在的图片
	$('.promo ol li').click(function () {
		$(this).addClass('current').siblings().removeClass('current');
		var move = $(this).index() * -520;
		$('.promo ul').animate({left: '' + move + 'px'}, 500);
		idx = $(this).index();
		imgIdx = $(this).index();
	});

	//	添加定时器
	timer = setInterval(rightClick, 2000);

	// 鼠标指向图片时停止播放,移开时继续
	$('.promo').hover(function () {
		clearInterval(timer);
		$('.promo a').show();
	},function () {
		timer = setInterval(rightClick, 2000);
		$('.promo a').hide();
	})

	$('.promo a').hover(function () {
		$(this).css('background','rgba(0, 0, 0, 0.6)')
	},function () {
		$(this).css('background','rgba(0, 0, 0, 0.3)')
	})

});