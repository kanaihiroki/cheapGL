define [], () ->
	class IllegalArgumentException
		constructor: (arg) ->
			@arg = arg

		toString: ->
			"IllegalArgumentException[arg=#{@arg}]"
