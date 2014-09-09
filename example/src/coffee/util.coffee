define ["IllegalArgumentException"], (IllegalArgumentException) ->
	isString: (obj) ->
		toString.call(obj) == '[object String]'

	checkNull: (obj) ->
		if (obj?)
			throw new IllegalArgumentException()
