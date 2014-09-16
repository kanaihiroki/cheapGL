define ["util"], (util) ->
	class Setting
		constructor: (
			@canvasElement,
			@vert,
			@frag,
			@modelPath,
			@ext,
			@rotate,
			@near,
			@far,
			@stride = 3,
			@vertices = [],
			@colors = []
		) ->
			util.checkNull for arg in arguments
			
