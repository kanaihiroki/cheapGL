define ["prelude"], (prelude) ->
	class Program
		constructor: (vert, frag) ->
			@vertexShader = vert
			@fragmentShader = frag
			@attributes = {}

		attribute: (attributeName, buffer, stride) ->
			data = buffer.data
			if data.length % stride isnt 0
				throw "array length is not multiple of stride"
		
			@attributes[attributeName] = prelude.unfold data, (xn) ->
				if !(prelude.empty xn)
					prelude.splitAt 3, xn

