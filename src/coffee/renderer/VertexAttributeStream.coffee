# 頂点配列ストリームに対する操作の定義
# パイプラインの各段階により、アクセスできる部分が異なることに注意
define [], () ->
	class VertexAttributeStream
		constructor: (@attributes) ->
			@indexArray = []

		# 頂点属性配列をピックアップした配列を返す
		slice: (indexArray) ->
			ret = {
				size: indexArray.length
			}
			for key of @attributes
				ret[key] = (@attributes[key][i] for i in indexArray)
			return ret

