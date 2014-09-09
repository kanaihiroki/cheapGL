define ["util"], (util) ->
	class Setting
		constructor: (
			@canvasElement,
			@vert,
			@frag,
			@modelId,
			@shaderId,
			@ext,
			@rotate,
			@stride = 3,
			@vertices = []
		) ->
			util.checkNull for arg in arguments
			
