(function() {
  var UnifiedShaderWorker, load,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  importScripts("/bower_components/gl-matrix/dist/gl-matrix.js");

  importScripts("gl-matrix-ext.js");

  importScripts("texture.js");

  UnifiedShaderWorker = (function() {
    function UnifiedShaderWorker() {
      this.dispatch = __bind(this.dispatch, this);
      this.shader = null;
      this.shaderType = null;
      this.textureUnit = null;
      this.process = function() {
        throw "shader is empty";
      };
    }

    UnifiedShaderWorker.prototype.dispatch = function(ev) {
      var msg, mthd;
      msg = ev.data;
      mthd = this[msg.method];
      return mthd.call(this, msg);
    };

    UnifiedShaderWorker.prototype.setShader = function(msg) {
      this.shader = load(msg.shader);
      switch (msg.shaderType) {
        case "VertexShader":
          return this.process = this.processVertex;
        case "FragmentShader":
          return this.process = this.processFragment;
        default:
          return "unknown shaderType: " + msg.shaderType;
      }
    };

    UnifiedShaderWorker.prototype.setUniforms = function(msg) {
      var key, value, _ref, _results;
      _ref = msg.uniforms;
      _results = [];
      for (key in _ref) {
        value = _ref[key];
        _results.push(this.shader[key] = value);
      }
      return _results;
    };

    UnifiedShaderWorker.prototype.setTextureUnit = function(msg) {
      return self.__TEXTURES = msg.textureUnit;
    };

    UnifiedShaderWorker.prototype.processVertex = function(msg) {
      var args, attrs, i, key, processed, val;
      attrs = msg.attributes;
      processed = (function() {
        var _i, _ref, _results;
        _results = [];
        for (i = _i = 0, _ref = attrs.size - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
          args = {};
          for (key in attrs) {
            val = attrs[key];
            args[key] = val[i];
          }
          _results.push(this.shader.main(args));
        }
        return _results;
      }).call(this);
      return self.postMessage(processed);
    };

    UnifiedShaderWorker.prototype.processFragment = function(msg) {
      var args, attrs, i, key, keys, n, processed, value;
      attrs = msg.attributes;
      n = attrs.gl_Position.length;
      keys = (function() {
        var _results;
        _results = [];
        for (key in attrs) {
          _results.push(key);
        }
        return _results;
      })();
      processed = (function() {
        var _i, _j, _len, _ref, _ref1, _results;
        _results = [];
        for (i = _i = 0, _ref = n - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
          args = {};
          for (_j = 0, _len = keys.length; _j < _len; _j++) {
            key = keys[_j];
            args[key] = attrs[key][i];
          }
          _ref1 = this.shader.main(args);
          for (key in _ref1) {
            value = _ref1[key];
            args[key] = value;
          }
          _results.push(args);
        }
        return _results;
      }).call(this);
      return self.postMessage(processed);
    };

    UnifiedShaderWorker.prototype.run = function() {
      return self.addEventListener('message', this.dispatch, false);
    };

    return UnifiedShaderWorker;

  })();

  load = function(source) {
    eval(source);
    return this.shader;
  };

  new UnifiedShaderWorker().run();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlVuaWZpZWRTaGFkZXJXb3JrZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQSx5QkFBQTtJQUFBLGtGQUFBOztBQUFBLEVBQUEsYUFBQSxDQUFjLCtDQUFkLENBQUEsQ0FBQTs7QUFBQSxFQUNBLGFBQUEsQ0FBYyxrQkFBZCxDQURBLENBQUE7O0FBQUEsRUFFQSxhQUFBLENBQWMsWUFBZCxDQUZBLENBQUE7O0FBQUEsRUFLTTtBQUNXLElBQUEsNkJBQUEsR0FBQTtBQUNULGlEQUFBLENBQUE7QUFBQSxNQUFBLElBQUMsQ0FBQSxNQUFELEdBQVUsSUFBVixDQUFBO0FBQUEsTUFDQSxJQUFDLENBQUEsVUFBRCxHQUFjLElBRGQsQ0FBQTtBQUFBLE1BRUEsSUFBQyxDQUFBLFdBQUQsR0FBZSxJQUZmLENBQUE7QUFBQSxNQUdBLElBQUMsQ0FBQSxPQUFELEdBQVcsU0FBQSxHQUFBO0FBQU0sY0FBTSxpQkFBTixDQUFOO01BQUEsQ0FIWCxDQURTO0lBQUEsQ0FBYjs7QUFBQSxrQ0FNQSxRQUFBLEdBQVUsU0FBQyxFQUFELEdBQUE7QUFDTixVQUFBLFNBQUE7QUFBQSxNQUFBLEdBQUEsR0FBTSxFQUFFLENBQUMsSUFBVCxDQUFBO0FBQUEsTUFDQSxJQUFBLEdBQU8sSUFBRSxDQUFBLEdBQUcsQ0FBQyxNQUFKLENBRFQsQ0FBQTthQUVBLElBQUksQ0FBQyxJQUFMLENBQVUsSUFBVixFQUFnQixHQUFoQixFQUhNO0lBQUEsQ0FOVixDQUFBOztBQUFBLGtDQVdBLFNBQUEsR0FBVyxTQUFDLEdBQUQsR0FBQTtBQUNQLE1BQUEsSUFBQyxDQUFBLE1BQUQsR0FBVSxJQUFBLENBQUssR0FBRyxDQUFDLE1BQVQsQ0FBVixDQUFBO0FBQ0EsY0FBTyxHQUFHLENBQUMsVUFBWDtBQUFBLGFBQ1MsY0FEVDtpQkFDNkIsSUFBQyxDQUFBLE9BQUQsR0FBVyxJQUFDLENBQUEsY0FEekM7QUFBQSxhQUVTLGdCQUZUO2lCQUUrQixJQUFDLENBQUEsT0FBRCxHQUFXLElBQUMsQ0FBQSxnQkFGM0M7QUFBQTtpQkFHUyxzQkFBQSxHQUF5QixHQUFHLENBQUMsV0FIdEM7QUFBQSxPQUZPO0lBQUEsQ0FYWCxDQUFBOztBQUFBLGtDQWtCQSxXQUFBLEdBQWEsU0FBQyxHQUFELEdBQUE7QUFDVCxVQUFBLDBCQUFBO0FBQUE7QUFBQTtXQUFBLFdBQUE7MEJBQUE7QUFDSSxzQkFBQSxJQUFDLENBQUEsTUFBTyxDQUFBLEdBQUEsQ0FBUixHQUFlLE1BQWYsQ0FESjtBQUFBO3NCQURTO0lBQUEsQ0FsQmIsQ0FBQTs7QUFBQSxrQ0FzQkEsY0FBQSxHQUFnQixTQUFDLEdBQUQsR0FBQTthQUNaLElBQUksQ0FBQyxVQUFMLEdBQWtCLEdBQUcsQ0FBQyxZQURWO0lBQUEsQ0F0QmhCLENBQUE7O0FBQUEsa0NBeUJBLGFBQUEsR0FBZSxTQUFDLEdBQUQsR0FBQTtBQUNYLFVBQUEsbUNBQUE7QUFBQSxNQUFBLEtBQUEsR0FBUSxHQUFHLENBQUMsVUFBWixDQUFBO0FBQUEsTUFHQSxTQUFBOztBQUFZO2FBQVMsbUdBQVQsR0FBQTtBQUNSLFVBQUEsSUFBQSxHQUFPLEVBQVAsQ0FBQTtBQUNBLGVBQUEsWUFBQTs2QkFBQTtBQUNJLFlBQUEsSUFBSyxDQUFBLEdBQUEsQ0FBTCxHQUFZLEdBQUksQ0FBQSxDQUFBLENBQWhCLENBREo7QUFBQSxXQURBO0FBQUEsd0JBR0EsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsSUFBYixFQUhBLENBRFE7QUFBQTs7bUJBSFosQ0FBQTthQVNBLElBQUksQ0FBQyxXQUFMLENBQWlCLFNBQWpCLEVBVlc7SUFBQSxDQXpCZixDQUFBOztBQUFBLGtDQXFDQSxlQUFBLEdBQWlCLFNBQUMsR0FBRCxHQUFBO0FBQ2IsVUFBQSw4Q0FBQTtBQUFBLE1BQUEsS0FBQSxHQUFRLEdBQUcsQ0FBQyxVQUFaLENBQUE7QUFBQSxNQUNBLENBQUEsR0FBSSxLQUFLLENBQUMsV0FBVyxDQUFDLE1BRHRCLENBQUE7QUFBQSxNQUVBLElBQUE7O0FBQVE7YUFBQSxZQUFBLEdBQUE7QUFBQSx3QkFBQSxJQUFBLENBQUE7QUFBQTs7VUFGUixDQUFBO0FBQUEsTUFJQSxTQUFBOztBQUFZO2FBQVMsMEZBQVQsR0FBQTtBQUNSLFVBQUEsSUFBQSxHQUFPLEVBQVAsQ0FBQTtBQUNBLGVBQUEsMkNBQUE7MkJBQUE7QUFDSSxZQUFBLElBQUssQ0FBQSxHQUFBLENBQUwsR0FBWSxLQUFNLENBQUEsR0FBQSxDQUFLLENBQUEsQ0FBQSxDQUF2QixDQURKO0FBQUEsV0FEQTtBQUdBO0FBQUEsZUFBQSxZQUFBOytCQUFBO0FBQ0ksWUFBQSxJQUFLLENBQUEsR0FBQSxDQUFMLEdBQVksS0FBWixDQURKO0FBQUEsV0FIQTtBQUFBLHdCQUtBLEtBTEEsQ0FEUTtBQUFBOzttQkFKWixDQUFBO2FBWUEsSUFBSSxDQUFDLFdBQUwsQ0FBaUIsU0FBakIsRUFiYTtJQUFBLENBckNqQixDQUFBOztBQUFBLGtDQW9EQSxHQUFBLEdBQUssU0FBQSxHQUFBO2FBQ0QsSUFBSSxDQUFDLGdCQUFMLENBQXNCLFNBQXRCLEVBQWlDLElBQUMsQ0FBQSxRQUFsQyxFQUE0QyxLQUE1QyxFQURDO0lBQUEsQ0FwREwsQ0FBQTs7K0JBQUE7O01BTkosQ0FBQTs7QUFBQSxFQThEQSxJQUFBLEdBQU8sU0FBQyxNQUFELEdBQUE7QUFDSCxJQUFBLElBQUEsQ0FBSyxNQUFMLENBQUEsQ0FBQTtBQUNBLFdBQU8sSUFBSSxDQUFDLE1BQVosQ0FGRztFQUFBLENBOURQLENBQUE7O0FBQUEsRUFrRUksSUFBQSxtQkFBQSxDQUFBLENBQXFCLENBQUMsR0FBdEIsQ0FBQSxDQWxFSixDQUFBO0FBQUEiLCJmaWxlIjoiVW5pZmllZFNoYWRlcldvcmtlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydFNjcmlwdHMoXCIvYm93ZXJfY29tcG9uZW50cy9nbC1tYXRyaXgvZGlzdC9nbC1tYXRyaXguanNcIilcbmltcG9ydFNjcmlwdHMoXCJnbC1tYXRyaXgtZXh0LmpzXCIpXG5pbXBvcnRTY3JpcHRzKFwidGV4dHVyZS5qc1wiKVxuXG4jIEZyYWdtZW50U2hhZGVy44Go5YWx6YCa44GL44Gn44GN44KLPyjnj77lrp/jga7jg4/jg7zjg4njgqbjgqfjgqLjgafjga/jgZfjgabjgYTjgospXG5jbGFzcyBVbmlmaWVkU2hhZGVyV29ya2VyXG4gICAgY29uc3RydWN0b3I6IC0+XG4gICAgICAgIEBzaGFkZXIgPSBudWxsXG4gICAgICAgIEBzaGFkZXJUeXBlID0gbnVsbFxuICAgICAgICBAdGV4dHVyZVVuaXQgPSBudWxsXG4gICAgICAgIEBwcm9jZXNzID0gKCkgLT4gdGhyb3cgXCJzaGFkZXIgaXMgZW1wdHlcIlxuXG4gICAgZGlzcGF0Y2g6IChldikgPT5cbiAgICAgICAgbXNnID0gZXYuZGF0YVxuICAgICAgICBtdGhkID0gQFttc2cubWV0aG9kXVxuICAgICAgICBtdGhkLmNhbGwodGhpcywgbXNnKVxuXG4gICAgc2V0U2hhZGVyOiAobXNnKSAtPlxuICAgICAgICBAc2hhZGVyID0gbG9hZChtc2cuc2hhZGVyKVxuICAgICAgICBzd2l0Y2ggbXNnLnNoYWRlclR5cGVcbiAgICAgICAgICAgIHdoZW4gXCJWZXJ0ZXhTaGFkZXJcIiB0aGVuIEBwcm9jZXNzID0gQHByb2Nlc3NWZXJ0ZXhcbiAgICAgICAgICAgIHdoZW4gXCJGcmFnbWVudFNoYWRlclwiIHRoZW4gQHByb2Nlc3MgPSBAcHJvY2Vzc0ZyYWdtZW50XG4gICAgICAgICAgICBlbHNlIFwidW5rbm93biBzaGFkZXJUeXBlOiBcIiArIG1zZy5zaGFkZXJUeXBlXG5cbiAgICBzZXRVbmlmb3JtczogKG1zZykgLT5cbiAgICAgICAgZm9yIGtleSwgdmFsdWUgb2YgbXNnLnVuaWZvcm1zXG4gICAgICAgICAgICBAc2hhZGVyW2tleV0gPSB2YWx1ZVxuXG4gICAgc2V0VGV4dHVyZVVuaXQ6IChtc2cpIC0+XG4gICAgICAgIHNlbGYuX19URVhUVVJFUyA9IG1zZy50ZXh0dXJlVW5pdFxuXG4gICAgcHJvY2Vzc1ZlcnRleDogKG1zZykgLT5cbiAgICAgICAgYXR0cnMgPSBtc2cuYXR0cmlidXRlc1xuXG4gICAgICAgICMgVE9ETzogY2xlYW51cFxuICAgICAgICBwcm9jZXNzZWQgPSBmb3IgaSBpbiBbMC4uYXR0cnMuc2l6ZS0xXVxuICAgICAgICAgICAgYXJncyA9IHt9XG4gICAgICAgICAgICBmb3Iga2V5LCB2YWwgb2YgYXR0cnNcbiAgICAgICAgICAgICAgICBhcmdzW2tleV0gPSB2YWxbaV1cbiAgICAgICAgICAgIEBzaGFkZXIubWFpbihhcmdzKVxuXG4gICAgICAgIHNlbGYucG9zdE1lc3NhZ2UocHJvY2Vzc2VkKVxuXG4gICAgcHJvY2Vzc0ZyYWdtZW50OiAobXNnKSAtPlxuICAgICAgICBhdHRycyA9IG1zZy5hdHRyaWJ1dGVzXG4gICAgICAgIG4gPSBhdHRycy5nbF9Qb3NpdGlvbi5sZW5ndGhcbiAgICAgICAga2V5cyA9IChrZXkgZm9yIGtleSBvZiBhdHRycylcblxuICAgICAgICBwcm9jZXNzZWQgPSBmb3IgaSBpbiBbMC4ubi0xXVxuICAgICAgICAgICAgYXJncyA9IHt9XG4gICAgICAgICAgICBmb3Iga2V5IGluIGtleXNcbiAgICAgICAgICAgICAgICBhcmdzW2tleV0gPSBhdHRyc1trZXldW2ldXG4gICAgICAgICAgICBmb3Iga2V5LCB2YWx1ZSBvZiBAc2hhZGVyLm1haW4oYXJncylcbiAgICAgICAgICAgICAgICBhcmdzW2tleV0gPSB2YWx1ZVxuICAgICAgICAgICAgYXJnc1xuXG4gICAgICAgIHNlbGYucG9zdE1lc3NhZ2UocHJvY2Vzc2VkKVxuXG4gICAgcnVuOiAtPlxuICAgICAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBAZGlzcGF0Y2gsIGZhbHNlKTtcblxuIyBpbXBvcnTjga/kuojntIToqp7jga7jgojjgYbjgarmibHjgYTjgaDjgaPjgZ/jga7jgafjgZPjga7lkI3liY3jgatcbmxvYWQgPSAoc291cmNlKSAtPlxuICAgIGV2YWwoc291cmNlKVxuICAgIHJldHVybiB0aGlzLnNoYWRlclxuXG5uZXcgVW5pZmllZFNoYWRlcldvcmtlcigpLnJ1bigpXG4iXX0=