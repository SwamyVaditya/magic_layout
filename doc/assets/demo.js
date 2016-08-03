
(function($){
	
	$(".js-start-demo").on("click", function(){
		
		$(this).magicLayout({
			
			container: $(this).next()
			
		});
		
	});
	
	$(".js-effect-start").on("click", function(){
		
		$(this).magicLayout({
			
			container: $(this).parent()
			
		});
		
	});	
	
	$(".js-effect-reset").on("click", function(){
		
		var demoBox = $(this).siblings(".js-ml-layer");
		
		demoBox.removeClass(demoBox.attr("data-show-effect")).removeAttr("style");
		
	});
	
})(window.jQuery);