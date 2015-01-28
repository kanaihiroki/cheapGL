(function() {
  var UnifiedShaderWorker, load,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  importScripts("../bower_components/gl-matrix/dist/gl-matrix.js");

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlVuaWZpZWRTaGFkZXJXb3JrZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQSx5QkFBQTtJQUFBLGtGQUFBOztBQUFBLEVBQUEsYUFBQSxDQUFjLGlEQUFkLENBQUEsQ0FBQTs7QUFBQSxFQUNBLGFBQUEsQ0FBYyxrQkFBZCxDQURBLENBQUE7O0FBQUEsRUFFQSxhQUFBLENBQWMsWUFBZCxDQUZBLENBQUE7O0FBQUEsRUFLTTtBQUNXLElBQUEsNkJBQUEsR0FBQTtBQUNULGlEQUFBLENBQUE7QUFBQSxNQUFBLElBQUMsQ0FBQSxNQUFELEdBQVUsSUFBVixDQUFBO0FBQUEsTUFDQSxJQUFDLENBQUEsVUFBRCxHQUFjLElBRGQsQ0FBQTtBQUFBLE1BRUEsSUFBQyxDQUFBLFdBQUQsR0FBZSxJQUZmLENBQUE7QUFBQSxNQUdBLElBQUMsQ0FBQSxPQUFELEdBQVcsU0FBQSxHQUFBO0FBQU0sY0FBTSxpQkFBTixDQUFOO01BQUEsQ0FIWCxDQURTO0lBQUEsQ0FBYjs7QUFBQSxrQ0FNQSxRQUFBLEdBQVUsU0FBQyxFQUFELEdBQUE7QUFDTixVQUFBLFNBQUE7QUFBQSxNQUFBLEdBQUEsR0FBTSxFQUFFLENBQUMsSUFBVCxDQUFBO0FBQUEsTUFDQSxJQUFBLEdBQU8sSUFBRSxDQUFBLEdBQUcsQ0FBQyxNQUFKLENBRFQsQ0FBQTthQUVBLElBQUksQ0FBQyxJQUFMLENBQVUsSUFBVixFQUFnQixHQUFoQixFQUhNO0lBQUEsQ0FOVixDQUFBOztBQUFBLGtDQVdBLFNBQUEsR0FBVyxTQUFDLEdBQUQsR0FBQTtBQUNQLE1BQUEsSUFBQyxDQUFBLE1BQUQsR0FBVSxJQUFBLENBQUssR0FBRyxDQUFDLE1BQVQsQ0FBVixDQUFBO0FBQ0EsY0FBTyxHQUFHLENBQUMsVUFBWDtBQUFBLGFBQ1MsY0FEVDtpQkFDNkIsSUFBQyxDQUFBLE9BQUQsR0FBVyxJQUFDLENBQUEsY0FEekM7QUFBQSxhQUVTLGdCQUZUO2lCQUUrQixJQUFDLENBQUEsT0FBRCxHQUFXLElBQUMsQ0FBQSxnQkFGM0M7QUFBQTtpQkFHUyxzQkFBQSxHQUF5QixHQUFHLENBQUMsV0FIdEM7QUFBQSxPQUZPO0lBQUEsQ0FYWCxDQUFBOztBQUFBLGtDQWtCQSxXQUFBLEdBQWEsU0FBQyxHQUFELEdBQUE7QUFDVCxVQUFBLDBCQUFBO0FBQUE7QUFBQTtXQUFBLFdBQUE7MEJBQUE7QUFDSSxzQkFBQSxJQUFDLENBQUEsTUFBTyxDQUFBLEdBQUEsQ0FBUixHQUFlLE1BQWYsQ0FESjtBQUFBO3NCQURTO0lBQUEsQ0FsQmIsQ0FBQTs7QUFBQSxrQ0FzQkEsY0FBQSxHQUFnQixTQUFDLEdBQUQsR0FBQTthQUNaLElBQUksQ0FBQyxVQUFMLEdBQWtCLEdBQUcsQ0FBQyxZQURWO0lBQUEsQ0F0QmhCLENBQUE7O0FBQUEsa0NBeUJBLGFBQUEsR0FBZSxTQUFDLEdBQUQsR0FBQTtBQUNYLFVBQUEsbUNBQUE7QUFBQSxNQUFBLEtBQUEsR0FBUSxHQUFHLENBQUMsVUFBWixDQUFBO0FBQUEsTUFHQSxTQUFBOztBQUFZO2FBQVMsbUdBQVQsR0FBQTtBQUNSLFVBQUEsSUFBQSxHQUFPLEVBQVAsQ0FBQTtBQUNBLGVBQUEsWUFBQTs2QkFBQTtBQUNJLFlBQUEsSUFBSyxDQUFBLEdBQUEsQ0FBTCxHQUFZLEdBQUksQ0FBQSxDQUFBLENBQWhCLENBREo7QUFBQSxXQURBO0FBQUEsd0JBR0EsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsSUFBYixFQUhBLENBRFE7QUFBQTs7bUJBSFosQ0FBQTthQVNBLElBQUksQ0FBQyxXQUFMLENBQWlCLFNBQWpCLEVBVlc7SUFBQSxDQXpCZixDQUFBOztBQUFBLGtDQXFDQSxlQUFBLEdBQWlCLFNBQUMsR0FBRCxHQUFBO0FBQ2IsVUFBQSw4Q0FBQTtBQUFBLE1BQUEsS0FBQSxHQUFRLEdBQUcsQ0FBQyxVQUFaLENBQUE7QUFBQSxNQUNBLENBQUEsR0FBSSxLQUFLLENBQUMsV0FBVyxDQUFDLE1BRHRCLENBQUE7QUFBQSxNQUVBLElBQUE7O0FBQVE7YUFBQSxZQUFBLEdBQUE7QUFBQSx3QkFBQSxJQUFBLENBQUE7QUFBQTs7VUFGUixDQUFBO0FBQUEsTUFJQSxTQUFBOztBQUFZO2FBQVMsMEZBQVQsR0FBQTtBQUNSLFVBQUEsSUFBQSxHQUFPLEVBQVAsQ0FBQTtBQUNBLGVBQUEsMkNBQUE7MkJBQUE7QUFDSSxZQUFBLElBQUssQ0FBQSxHQUFBLENBQUwsR0FBWSxLQUFNLENBQUEsR0FBQSxDQUFLLENBQUEsQ0FBQSxDQUF2QixDQURKO0FBQUEsV0FEQTtBQUdBO0FBQUEsZUFBQSxZQUFBOytCQUFBO0FBQ0ksWUFBQSxJQUFLLENBQUEsR0FBQSxDQUFMLEdBQVksS0FBWixDQURKO0FBQUEsV0FIQTtBQUFBLHdCQUtBLEtBTEEsQ0FEUTtBQUFBOzttQkFKWixDQUFBO2FBWUEsSUFBSSxDQUFDLFdBQUwsQ0FBaUIsU0FBakIsRUFiYTtJQUFBLENBckNqQixDQUFBOztBQUFBLGtDQW9EQSxHQUFBLEdBQUssU0FBQSxHQUFBO2FBQ0QsSUFBSSxDQUFDLGdCQUFMLENBQXNCLFNBQXRCLEVBQWlDLElBQUMsQ0FBQSxRQUFsQyxFQUE0QyxLQUE1QyxFQURDO0lBQUEsQ0FwREwsQ0FBQTs7K0JBQUE7O01BTkosQ0FBQTs7QUFBQSxFQThEQSxJQUFBLEdBQU8sU0FBQyxNQUFELEdBQUE7QUFDSCxJQUFBLElBQUEsQ0FBSyxNQUFMLENBQUEsQ0FBQTtBQUNBLFdBQU8sSUFBSSxDQUFDLE1BQVosQ0FGRztFQUFBLENBOURQLENBQUE7O0FBQUEsRUFrRUksSUFBQSxtQkFBQSxDQUFBLENBQXFCLENBQUMsR0FBdEIsQ0FBQSxDQWxFSixDQUFBO0FBQUEiLCJmaWxlIjoiVW5pZmllZFNoYWRlcldvcmtlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydFNjcmlwdHMoXCIuLi9ib3dlcl9jb21wb25lbnRzL2dsLW1hdHJpeC9kaXN0L2dsLW1hdHJpeC5qc1wiKVxuaW1wb3J0U2NyaXB0cyhcImdsLW1hdHJpeC1leHQuanNcIilcbmltcG9ydFNjcmlwdHMoXCJ0ZXh0dXJlLmpzXCIpXG5cbiMgRnJhZ21lbnRTaGFkZXLjgajlhbHpgJrjgYvjgafjgY3jgos/KOePvuWun+OBruODj+ODvOODieOCpuOCp+OCouOBp+OBr+OBl+OBpuOBhOOCiylcbmNsYXNzIFVuaWZpZWRTaGFkZXJXb3JrZXJcbiAgICBjb25zdHJ1Y3RvcjogLT5cbiAgICAgICAgQHNoYWRlciA9IG51bGxcbiAgICAgICAgQHNoYWRlclR5cGUgPSBudWxsXG4gICAgICAgIEB0ZXh0dXJlVW5pdCA9IG51bGxcbiAgICAgICAgQHByb2Nlc3MgPSAoKSAtPiB0aHJvdyBcInNoYWRlciBpcyBlbXB0eVwiXG5cbiAgICBkaXNwYXRjaDogKGV2KSA9PlxuICAgICAgICBtc2cgPSBldi5kYXRhXG4gICAgICAgIG10aGQgPSBAW21zZy5tZXRob2RdXG4gICAgICAgIG10aGQuY2FsbCh0aGlzLCBtc2cpXG5cbiAgICBzZXRTaGFkZXI6IChtc2cpIC0+XG4gICAgICAgIEBzaGFkZXIgPSBsb2FkKG1zZy5zaGFkZXIpXG4gICAgICAgIHN3aXRjaCBtc2cuc2hhZGVyVHlwZVxuICAgICAgICAgICAgd2hlbiBcIlZlcnRleFNoYWRlclwiIHRoZW4gQHByb2Nlc3MgPSBAcHJvY2Vzc1ZlcnRleFxuICAgICAgICAgICAgd2hlbiBcIkZyYWdtZW50U2hhZGVyXCIgdGhlbiBAcHJvY2VzcyA9IEBwcm9jZXNzRnJhZ21lbnRcbiAgICAgICAgICAgIGVsc2UgXCJ1bmtub3duIHNoYWRlclR5cGU6IFwiICsgbXNnLnNoYWRlclR5cGVcblxuICAgIHNldFVuaWZvcm1zOiAobXNnKSAtPlxuICAgICAgICBmb3Iga2V5LCB2YWx1ZSBvZiBtc2cudW5pZm9ybXNcbiAgICAgICAgICAgIEBzaGFkZXJba2V5XSA9IHZhbHVlXG5cbiAgICBzZXRUZXh0dXJlVW5pdDogKG1zZykgLT5cbiAgICAgICAgc2VsZi5fX1RFWFRVUkVTID0gbXNnLnRleHR1cmVVbml0XG5cbiAgICBwcm9jZXNzVmVydGV4OiAobXNnKSAtPlxuICAgICAgICBhdHRycyA9IG1zZy5hdHRyaWJ1dGVzXG5cbiAgICAgICAgIyBUT0RPOiBjbGVhbnVwXG4gICAgICAgIHByb2Nlc3NlZCA9IGZvciBpIGluIFswLi5hdHRycy5zaXplLTFdXG4gICAgICAgICAgICBhcmdzID0ge31cbiAgICAgICAgICAgIGZvciBrZXksIHZhbCBvZiBhdHRyc1xuICAgICAgICAgICAgICAgIGFyZ3Nba2V5XSA9IHZhbFtpXVxuICAgICAgICAgICAgQHNoYWRlci5tYWluKGFyZ3MpXG5cbiAgICAgICAgc2VsZi5wb3N0TWVzc2FnZShwcm9jZXNzZWQpXG5cbiAgICBwcm9jZXNzRnJhZ21lbnQ6IChtc2cpIC0+XG4gICAgICAgIGF0dHJzID0gbXNnLmF0dHJpYnV0ZXNcbiAgICAgICAgbiA9IGF0dHJzLmdsX1Bvc2l0aW9uLmxlbmd0aFxuICAgICAgICBrZXlzID0gKGtleSBmb3Iga2V5IG9mIGF0dHJzKVxuXG4gICAgICAgIHByb2Nlc3NlZCA9IGZvciBpIGluIFswLi5uLTFdXG4gICAgICAgICAgICBhcmdzID0ge31cbiAgICAgICAgICAgIGZvciBrZXkgaW4ga2V5c1xuICAgICAgICAgICAgICAgIGFyZ3Nba2V5XSA9IGF0dHJzW2tleV1baV1cbiAgICAgICAgICAgIGZvciBrZXksIHZhbHVlIG9mIEBzaGFkZXIubWFpbihhcmdzKVxuICAgICAgICAgICAgICAgIGFyZ3Nba2V5XSA9IHZhbHVlXG4gICAgICAgICAgICBhcmdzXG5cbiAgICAgICAgc2VsZi5wb3N0TWVzc2FnZShwcm9jZXNzZWQpXG5cbiAgICBydW46IC0+XG4gICAgICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIEBkaXNwYXRjaCwgZmFsc2UpO1xuXG4jIGltcG9ydOOBr+S6iOe0hOiqnuOBruOCiOOBhuOBquaJseOBhOOBoOOBo+OBn+OBruOBp+OBk+OBruWQjeWJjeOBq1xubG9hZCA9IChzb3VyY2UpIC0+XG4gICAgZXZhbChzb3VyY2UpXG4gICAgcmV0dXJuIHRoaXMuc2hhZGVyXG5cbm5ldyBVbmlmaWVkU2hhZGVyV29ya2VyKCkucnVuKClcbiJdfQ==