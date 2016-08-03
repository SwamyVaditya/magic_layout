
(function($){
	
	function getActiveDisplay(){
	
		var windowTop = $(window).scrollTop(),
		offsetTop,
		cacheElement;
		
		return $(".js-display").filter(function(index, element){
			
			cacheElement = $(element);
			offsetTop = cacheElement.offset().top;
			
			return windowTop >= offsetTop && windowTop < offsetTop + cacheElement.outerHeight();
			
		});
		
	}

	function initAnimationDisplay(displayActive){
	
		if(!displayActive.hasClass("js-ml-layout_active")){

			$(this).magicLayout({container: displayActive}).addClass("js-ml-layout_active");
	
		}
		
	}
		
	initAnimationDisplay(getActiveDisplay());
	
	$(document).on("scroll", function(){
	
		initAnimationDisplay(getActiveDisplay());
		
	});
	
})(window.jQuery);