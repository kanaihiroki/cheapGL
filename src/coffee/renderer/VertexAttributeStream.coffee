# 頂点配列ストリームに対する操作の定義
define([
	"prelude",
	"Constants",
	"IllegalArgumentException"
], (
	prelude,
	Constants,
	IllegalArgumentException
	) ->
	class VertexAttributeStream
		constructor: () ->
			@attributes = {}

		getPrimitiveArray: (mode, first, count) ->
			(@createPrimitive(indices) for indices in @generateIndices(mode, first, count))

		# 頂点属性配列のインデックスからプリミティブを作成する
		createPrimitive: (indexArray) ->
			ret = {
				size: indexArray.length
			}
			for key of @attributes
				ret[key] = (@attributes[key][i] for i in indexArray)
			return ret

		# プリミティブの種類に応じて、分割する三角形ポリゴンの頂点集合の配列を返す
		generateIndices: (mode, first, count)->
			end = first + count - 1
			switch mode
				when Constants.TRIANGLES
					[i*3, i*3+1, i*3+2] for i in [first..end/3]
				else
					throw new IllegalArgumentException("mode")

		attribute: (attributeName, array, stride) ->
			if array.length % stride isnt 0
				throw "array length is not product of stride"

			@attributes[attributeName] = prelude.unfold array, (xn) ->
				if !(prelude.empty xn)
					prelude.splitAt stride, xn
	)
