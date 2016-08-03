
//@prepros-prepend ../../../magicLayout/jquery.magicLayout.js
//@prepros-prepend ../../dev/js/main.js 

(function(){
	
	var scripts = [

		{
			src : "../../metrika.js",
			async: true,
		}
		
	];

	window.addEventListener('load', initLoadScripts);

	function initLoadScripts(){
	
		var script;
		
		for(var i = 0, scriptsLen = scripts.length; i < scriptsLen; i++){
		
			script = document.createElement("script");
			script.src = scripts[i].src;
			script.async = scripts[i].async;
			document.body.appendChild(script);
			
		}
		
	}

})();
	
