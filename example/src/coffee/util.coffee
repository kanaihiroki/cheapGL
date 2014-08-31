define [], () ->
	isString: (obj) ->
		toString.call(obj) == '[object String]'

	# 同期的に取得する
	get: (url) ->
		$.ajaxSetup({async: false})
		try
			$.get(url).responseText
		finally
			$.ajaxSetup({async: true})
