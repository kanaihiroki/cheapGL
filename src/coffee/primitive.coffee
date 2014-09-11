define ["Constants", "IllegalArgumentException"], (Constants, IllegalArgumentException) ->
	# プリミティブの種類に応じて、分割する三角形ポリゴンの頂点集合の配列を返す
	packVertexIndices: (mode, first, count)->
		end = first + count - 1
		switch mode
			when Constants.TRIANGLES
				[i*3, i*3+1, i*3+2] for i in [first..end/3]
			else
				throw new IllegalArgumentException("mode")
