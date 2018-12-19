(function ( $ ) {
	// left 영역 
	$.fn.showLeft = function(options) {
		var settings = $.extend({
		}, options );
		
		let $aside = $(this);
		let $openBtn = $('.js-menu-open');
		let asideW = $(window).width();

		return this.each(function() {
			$aside.hide().css('width',asideW);
			
			$openBtn.click(function(){
				if($aside.is(':hidden')){
					$aside.stop().show().animate({'right': '0'});
					$('body').css('overflow','hidden');
				}else{
					$aside.stop().animate({'right': '100%'}).hide('100');
					$('body').css('overflow','auto');
				}
			})
		});
	};

	// lnb 메뉴
	$.fn.showLnb = function(options){
		var opt = $.extend({
			activeClass :'active'
		}, options );

		let $nav = $('.js-nav');
		let $navlist = $nav.children('li');
		let $menuFirst = $navlist.find('.btn-lnb');

		return this.each(function() {
			
			$menuFirst.click(function(){
				$(this).parent('li').addClass(opt.activeClass);
			});
		});
	};

}( jQuery ));

