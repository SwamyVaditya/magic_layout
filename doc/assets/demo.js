
(function($){
	
	$(".js-start-demo").on("click", function(){
		
		$(this).magicLayout({
			
			container: $(this).next()
			
		});
		
	});
	
	$(".js-effect-start").on("click", function(){
		
		$(this).attr("disabled", true).siblings(".js-effect-reset").attr("disabled", false).magicLayout({
			
			container: $(this).parent()
			
		});
		
	});	
	
	$(".js-effect-reset").on("click", function(){
		
		$(this).attr("disabled", true)
			   .magicLayout("destroy", $(this).parent())
			   .siblings(".js-effect-start")
			   .attr("disabled", false);
				
	});
	
})(window.jQuery);