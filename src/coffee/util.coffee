define [], () ->
	isString: (obj) ->
		toString.call(obj) == '[object String]'
