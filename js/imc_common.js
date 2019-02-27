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
		});
		$(window).resize(function(){
			asideW = $(window).outerWidth();
			$aside.css('width',asideW);
		});
	};
	asideOpen();
	
	// quick 메뉴
	function quickOpen(){
		let $quickmenBbtn = $('.js-quickbtn');
		let $quickmenuDiv = $('.js-quickwrap');
		let $quickCloseBtn = $('.js-quickwrap').find('.js-quickclose');
	
		$quickmenuDiv.hide();
		$quickmenBbtn.click(function(e){
			if($quickmenuDiv.is(':hidden')){
				$quickmenuDiv.show();
			}
			return false;
		});
		$quickCloseBtn.click(function(e){
			if($quickmenuDiv.is(':visible')){
				$quickmenuDiv.hide();
			}
			return false;
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
				return false;
			}else{
				$(this).removeClass(activeClass);
				$shBox.hide();
				return false;
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

	//테이블 가로 스크롤 적용
	function scrollTable() {
		$('.tableWrapper').each(function () {
			if ($(this).get(0).scrollWidth > ($(this).get(0).clientWidth) + 1) {
				$(this).addClass('scrollable');
				if (($(this).outerWidth() + $(this).scrollLeft()) < $(this).get(0).scrollWidth) {
					$(this).addClass('scrollRight');
				} else {
					$(this).removeClass('scrollRight');
				}

				if ($(this).scrollLeft() != 0) {
					$(this).addClass('scrollLeft');
				} else {
					$(this).removeClass('scrollLeft');
				}
			} else {
				$(this).removeClass('scrollable')
				.removeClass('scrollLeft')
				.removeClass('scrollRight');
			}
		});
	}
	scrollTable();
	$('.tableWrapper').scroll(function () { scrollTable(); });
	$(window).bind('orientationchange resize', function (event) { scrollTable(); });


	//메인탭 적용
	function tabAction() {
		let $tab = $(".tablist-type1 a");
		$tab.on("click", function () {	
			event.preventDefault();
			var idt = $(this).attr("href");
			var lo = $(this).parents(".tab-wrap").attr("class");
			lo = lo.replace("tab-wrap ","");
			$lo=$("."+lo);
			$idt = $(idt);	
			$lo.find('[role=tabpanel]').hide();
			$idt.show();
			$lo.find("a").removeClass();
			$(this).addClass("active");	
			if (lo=='tab2') {
				var no = idt.replace("#recent", "");			
				$('.no' + no).addClass("ok");	
				var $slider = $('.no' + no).bxSlider({
					auto: true,
					pager: true,
					stopAutoOnClick: false,
					autoControls: true,
					useCSS: true,
					infiniteLoop: false,
					slideMargin: '15px',
					controls: false,
					autoControlsCombine: true,
					oneToOneTouch: true,
					touchEnabled: true
				});
			}		
		});		
	}
	tabAction();

	//에디터 이미지 조정
	function imgEditor(){
		let $img = $(".board-editor img");
		console.log("");
		
		if ($img.length>1) {
			for (let i = 0; i < $img.length; i++) {
				$img.eq(i).wrap('<div class="img-box"></div>');
				$img.eq(i).css("height","auto")

				console.log(i);			
			}
			
		}		
	}
	imgEditor();
	

	


}( jQuery ));




