(function ( $ ) {
	function asideOpen(){
		// left 영역 
		let $aside = $('.js-aside');
		let $openBtn = $('.js-menu-open');
		let asideW = $(window).outerWidth();

		$aside.hide().css('width',asideW);
		$openBtn.click(function(){
			if($aside.is(':hidden')){
				$aside.stop().show().animate({'right': '0'});
				$('body').addClass('scrollOff').on('scroll touchmove', function(e){
					e.preventDefault();
				});

			}else{
				$aside.stop().animate({'right': '100%'}).hide('100');
				$('body').removeClass('scrollOff').off('scroll touchmove');
			}
		})
	};
	asideOpen();

	// quick 메뉴
	function quickOpen(){
		let $quickmenBbtn = $('.js-quickbtn');
		let $quickmenuDiv = $('.js-quickwrap');
		let $quickCloseBtn = $('.js-quickwrap').find('.js-quickclose');
	
		$quickmenuDiv.hide();
		$quickmenBbtn.click(function(){
			if($quickmenuDiv.is(':hidden')){
				$quickmenuDiv.show();
			}
		});
		$quickCloseBtn.click(function(){
			if($quickmenuDiv.is(':visible')){
				$quickmenuDiv.hide();
			}
		})
	}
	quickOpen();
	

	// 상단으로 가기
	function scrollTop(){
		let $scrolltopBtn = $('.js-scrolltop');

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$scrolltopBtn.fadeIn();
			} else {
				$scrolltopBtn.fadeOut();
			}
		});
		$scrolltopBtn.click(function() {
			$('html, body').animate({
				scrollTop : 0
			}, 400);
			return false;
		});
	}
	scrollTop();

	// next-div open
	function showhideBox(){
		let $shBtn = $('.js-showhide-btn');
		let $shBox = $('.js-showhide-box');
		let activeClass = 'active';

		$shBox.hide();

		$shBtn.click(function() {
			if($shBox.is(':hidden')){
				$(this).addClass(activeClass);
				$shBox.show();
			}else{
				$(this).removeClass(activeClass);
				$shBox.hide();
			}
		});
	}
	showhideBox();


	// lnb 메뉴
	$.fn.showLnb = function(options){
		var opt = $.extend({
			activeClass :'active'
		}, options );

		let $nav = $('.js-nav');
		let $navlist = $nav.find('li');
		let $menuFirst = $navlist.find('.btn-lnb');
		let $menuSecond = $navlist.find('.lnb-2depth>li>a.has-sub');

		$menuFirst.click(function(){
			var $selLi = $(this).parent('li');
			
			if($selLi.hasClass(opt.activeClass)){
				$selLi.removeClass(opt.activeClass);
			}else{
				$selLi.addClass(opt.activeClass);
			}
			return false;
		});
		$menuSecond.click(function(){
			var $selLi = $(this).parent('li');

			if($selLi.hasClass(opt.activeClass)){
				$selLi.removeClass(opt.activeClass);
			}else{
				$selLi.addClass(opt.activeClass);
			}
			return false;

		})

	};


}( jQuery ));

