define [], () ->
	class Setting
		constructor: (
			@vertPath,
			@fragPath,
			@vertDisplay,
			@fragDisplay,
			@canvasElement,
			@stride = 3,
			@vertices = []
		) ->
