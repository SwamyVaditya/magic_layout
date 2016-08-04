
/*
 *author: Developed by Stas Melnikov. http://stas-melnikov.ru
 */

(function($){ 

	var methods = {
		
		init: function(options){

			var showEffect,
			duration,
			showDelay,
			magicLayers;
			
			if(typeof(options) === "undefined"){
				
				$.error("You need to set options");
				return false;
				
			}
			
			magicLayers = options.container.find(".js-ml-layer");
		
			if(magicLayers.length > 0){
		
				$(this).each(function(){

					magicLayers.map(function(){
						
						showEffect = $(this).attr("data-show-effect");
						duration = $(this).attr("data-duration");
						showDelay = $(this).attr("data-show-delay");
						
						$(this)
						.addClass("js-ml-layer_animated " + showEffect)
						.css({"animation-delay" : showDelay + "ms",  "animation-duration" : duration + "ms"});

					});
					
				});
			
			}else{
				
				$.error("You need to set the class of js-ml-layer");
				
			}
			
			return options.container;
			
		},
		
		destroy: function(magicLayoutActive){
			
			if(typeof(magicLayoutActive) === "undefined"){
				
				$.error("You need to transfer active parent element for js-ml-layer");
				return false;
				
			}			
				
			magicLayoutActive.find(".js-ml-layer").map(function(){

				$(this).removeClass("js-ml-layer_animated " + $(this).attr("data-show-effect")).removeAttr("style");
				
			});
			
			return this;
			
		}
		
	};

	$.fn.magicLayout = function(method){

		if(methods[method]){
			
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
			
		}else if(typeof method === "object" || ! method){
			
			return methods.init.apply(this, arguments);
			
		}else{
			
			$.error("This" +  method + " is not defined");
			
		}
		
	};
	
})(window.jQuery);