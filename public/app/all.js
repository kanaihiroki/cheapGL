
(function(n){var define=n.define;if(typeof define!=="function"){define=function(r){n.prelude=r}}var r={};define('prelude',[],function(){(function(){var n,t,e,u,i,l,f,o,c,a,s,h,g,p,v,j,b,m,d,M,y,O,S,x,k,w,q,I,W,z,A,P,L,N,B,E,T,C,D,F,G,H,J,K,Q,R,U,V,X,Y,Z,$,_,nr,rr,tr,er,ur,ir,lr,fr,or,cr,ar,sr,hr,gr,pr,vr,jr,br,mr,dr,Mr,yr,Or,Sr,xr,kr,wr,qr,Ir,Wr,zr,Ar,Pr,Lr,Nr,Br,Er,Tr,Cr,Dr,Fr,Gr,Hr,Jr,Kr,Qr,Rr,Ur,Vr,Xr,Yr,Zr,$r,_r,nt,rt,tt,et,ut,it,lt,ft,ot,ct,at,st,ht,gt,pt,vt,jt=[].indexOf||function(n){for(var r=0,t=this.length;r<t;r++){if(r in this&&this[r]===n)return r}return-1},bt=[].slice,mt={}.hasOwnProperty;ut={}.toString;n={};n.typeOf=function(n){return ut.call(n).slice(8,-1)};n.toMap=tt=function(n){return function(r){return n[r]}};n.each=k=function(n,r){var t,e,u,i;if(ut.call(n)==="[object Object]"){for(t in n){e=n[t];r(e)}}else{for(u=0,i=n.length;u<i;u++){e=n[u];r(e)}}return n};n.map=ir=function(n,r){var t,e,u,i,l;i=ut.call(n);if(i==="[object Object]"){e={};for(t in n){l=n[t];e[t]=r(l)}return e}else{u=function(){var t,e,u;u=[];for(t=0,e=n.length;t<e;t++){l=n[t];u.push(r(l))}return u}();if(i==="[object String]"){return u.join("")}else{return u}}};n.filter=P=function(n,r){var t,e,u,i;u=ut.call(n);if(u==="[object Object]"){e={};for(t in n){i=n[t];if(r(i)){e[t]=i}}return e}else{e=function(){var t,e,u;u=[];for(t=0,e=n.length;t<e;t++){i=n[t];if(r(i)){u.push(i)}}return u}();if(u==="[object String]"){return e.join("")}else{return e}}};n.reject=zr=function(n,r){var t,e,u,i;u=ut.call(n);if(u==="[object Object]"){e={};for(t in n){i=n[t];if(!r(i)){e[t]=i}}return e}else{e=function(){var t,e,u;u=[];for(t=0,e=n.length;t<e;t++){i=n[t];if(!r(i)){u.push(i)}}return u}();if(u==="[object String]"){return e.join("")}else{return e}}};n.partition=Mr=function(n,r){var t,e,u,i,l,f,o;i=ut.call(n);if(i==="[object Object]"){u={};t={};for(e in n){l=n[e];(r(l)?u:t)[e]=l}}else{u=[];t=[];for(f=0,o=n.length;f<o;f++){l=n[f];(r(l)?u:t).push(l)}if(i==="[object String]"){u=u.join("");t=t.join("")}}return[u,t]};n.find=L=function(n,r){var t,e,u,i;if(ut.call(n)==="[object Object]"){for(t in n){e=n[t];if(r(e)){return e}}}else{for(u=0,i=n.length;u<i;u++){e=n[u];if(r(e)){return e}}}return void 0};n.pluck=Sr=function(n,r){var t,e,u,i,l,f;if(ut.call(r)==="[object Object]"){e={};for(t in r){u=r[t];if(u[n]!=null){e[t]=u[n]}}return e}else{f=[];for(i=0,l=r.length;i<l;i++){u=r[i];if(u[n]!=null){f.push(u[n])}}return f}};n.head=Q=n.first=N=function(n){if(!n.length){return void 0}return n[0]};n.tail=Yr=function(n){if(!n.length){return void 0}return n.slice(1)};n.last=$=function(n){if(!n.length){return void 0}return n[n.length-1]};n.initial=U=function(n){if(!n.length){return void 0}return n.slice(0,-1)};n.empty=q=function(n){var r;if(ut.call(n)==="[object Object]"){for(r in n){return false}return true}return!n.length};n.values=at=function(n){var r,t,e;e=[];for(r in n){t=n[r];e.push(t)}return e};n.keys=Z=function(n){var r,t;t=[];for(r in n){t.push(r)}return t};n.len=nr=function(n){if(ut.call(n)==="[object Object]"){n=at(n)}return n.length};n.cons=d=function(n,r){if(ut.call(r)==="[object String]"){return n+r}else{return[n].concat(r)}};n.append=f=function(n,r){if(ut.call(r)==="[object String]"){return n+r}else{return n.concat(r)}};n.join=Y=function(n,r){if(ut.call(r)==="[object Object]"){r=at(r)}return r.join(n)};n.reverse=Lr=function(n){if(ut.call(n)==="[object String]"){return n.split("").reverse().join("")}else{return n.slice().reverse()}};n.fold=C=n.foldl=F=function(n,r,t){var e,u,i,l;if(ut.call(r)==="[object Object]"){for(e in r){u=r[e];n=t(n,u)}}else{for(i=0,l=r.length;i<l;i++){u=r[i];n=t(n,u)}}return n};n.fold1=D=n.foldl1=G=function(n,r){return C(n[0],n.slice(1),r)};n.foldr=H=function(n,r,t){return C(n,r.slice().reverse(),t)};n.foldr1=J=function(n,r){n=n.slice().reverse();return C(n[0],n.slice(1),r)};n.unfoldr=lt=n.unfold=it=function(n,r){var t,e;e=[];while((t=r(n))!=null){n=t[1];e.push(t[0])}return e};n.andList=i=function(n){var r,t,e;for(t=0,e=n.length;t<e;t++){r=n[t];if(!r){return false}}return true};n.orList=br=function(n){var r,t,e;for(t=0,e=n.length;t<e;t++){r=n[t];if(r){return true}}return false};n.any=l=function(n,r){var t,e,u;for(e=0,u=n.length;e<u;e++){t=n[e];if(r(t)){return true}}return false};n.all=u=function(n,r){var t,e,u;for(e=0,u=n.length;e<u;e++){t=n[e];if(!r(t)){return false}}return true};n.unique=ft=function(n){var r,t,e,u,i;t=[];if(ut.call(n)==="[object Object]"){for(r in n){e=n[r];if(jt.call(t,e)<0){t.push(e)}}}else{for(u=0,i=n.length;u<i;u++){e=n[u];if(jt.call(t,e)<0){t.push(e)}}}if(ut.call(n)==="[object String]"){return t.join("")}else{return t}};n.sort=Jr=function(n){return n.slice().sort(function(n,r){if(n>r){return 1}else if(n<r){return-1}else{return 0}})};n.sortWith=Qr=function(n,r){if(!n.length){return[]}return n.slice().sort(r)};n.sortBy=Kr=function(n,r){return Qr(n,v(r))};n.compare=v=function(n,r,t){if(arguments.length===3){if(t(n)>t(r)){return 1}else if(t(n)<t(r)){return-1}else{return 0}}else{return function(r,t){if(n(r)>n(t)){return 1}else if(n(r)<n(t)){return-1}else{return 0}}}};n.sum=Xr=function(n){var r,t,e,u,i;t=0;if(ut.call(n)==="[object Object]"){for(r in n){e=n[r];t+=e}}else{for(u=0,i=n.length;u<i;u++){e=n[u];t+=e}}return t};n.product=qr=function(n){var r,t,e,u,i;t=1;if(ut.call(n)==="[object Object]"){for(r in n){e=n[r];t*=e}}else{for(u=0,i=n.length;u<i;u++){e=n[u];t*=e}}return t};n.mean=or=n.average=s=function(n){return Xr(n)/nr(n)};n.median=cr=function(n){var r;if(n.length===0){return void 0}else{n=Jr(n);r=O(n.length,2);if(jr(n.length)){return n[r]}else{return(n[r-1]+n[r])/2}}};n.concat=b=function(n){var r,t,e,u;if(!n.length){return[]}for(t=0,e=n.length;t<e;t++){r=n[t];if(!(ut.call(r)==="[object String]")){return(u=[]).concat.apply(u,n)}}return n.join("")};n.concatMap=m=function(n,r){return b(ir(n,r))};n.listToObj=tr=function(n){var r,t,e,u;r={};for(e=0,u=n.length;e<u;e++){t=n[e];r[t[0]]=t[1]}return r};n.maximum=fr=function(n){return D(n,lr)};n.minimum=sr=function(n){return D(n,ar)};n.scan=Br=n.scanl=Tr=function(n,r,t){var e,u;$=n;if(ut.call(r)==="[object Object]"){return[n].concat(function(){var n;n=[];for(e in r){u=r[e];n.push($=t($,u))}return n}())}else{return[n].concat(function(){var n,e,i;i=[];for(n=0,e=r.length;n<e;n++){u=r[n];i.push($=t($,u))}return i}())}};n.scan1=Er=n.scanl1=Cr=function(n,r){return Br(n[0],n.slice(1),r)};n.scanr=Dr=function(n,r,t){r=r.slice().reverse();return Br(n,r,t).reverse()};n.scanr1=Fr=function(n,r){n=n.slice().reverse();return Br(n[0],n.slice(1),r).reverse()};n.replicate=Pr=function(n,r){var t,e;e=[];t=0;while(t++<n){e.push(r)}return e};n.take=Zr=function(n,r){if(n<=0){if(ut.call(r)==="[object String]"){return""}else{return[]}}else if(!r.length){return r}else{return r.slice(0,n)}};n.drop=S=function(n,r){if(n<=0||!r.length){return r}else{return r.slice(n)}};n.splitAt=Ur=function(n,r){return[Zr(n,r),S(n,r)]};n.takeWhile=$r=function(n,r){var t,e,u,i;if(!n.length){return n}t=[];for(u=0,i=n.length;u<i;u++){e=n[u];if(!r(e)){break}t.push(e)}if(ut.call(n)==="[object String]"){return t.join("")}else{return t}};n.dropWhile=x=function(n,r){var t,e,u,i;if(!n.length){return n}t=0;for(u=0,i=n.length;u<i;u++){e=n[u];if(!r(e)){break}++t}return n.slice(t)};n.span=Rr=function(n,r){return[$r(n,r),x(n,r)]};n.breakIt=h=function(n,r){return Rr(n,function(n){return!r(n)})};n.elem=w=function(n,r){if(r!=null){return jt.call(r,n)>=0}else{return function(r){return jt.call(r,n)>=0}}};n.notElem=vr=function(n,r){if(r!=null){return!(jt.call(r,n)>=0)}else{return function(r){return!(jt.call(r,n)>=0)}}};n.lookup=ur=function(n,r){return r!=null?r[n]:void 0};n.call=g=function(){var n,r,t,e;r=arguments[0],n=3<=arguments.length?bt.call(arguments,1,e=arguments.length-1):(e=1,[]),t=arguments[e++];return t!=null?typeof t[r]==="function"?t[r].apply(t,n):void 0:void 0};n.zip=ht=function(n,r){var t,e,u,i,l,f,o,c,a,s,h;u=[];s=[n,r];for(t=f=0,c=s.length;f<c;t=++f){l=s[t];for(e=o=0,a=l.length;o<a;e=++o){i=l[e];if(t===0){u.push([])}if((h=u[e])!=null){h.push(i)}}}return u};n.zipWith=vt=function(n,r,t){var e,u,i,l,f;if(!n.length||!r.length){return[]}else{l=ht(n,r);f=[];for(u=0,i=l.length;u<i;u++){e=l[u];f.push(t.apply(null,e))}return f}};n.zipAll=gt=function(){var n,r,t,e,u,i,l,f,o,c,a;i=1<=arguments.length?bt.call(arguments,0):[];t=[];for(n=l=0,o=i.length;l<o;n=++l){u=i[n];for(r=f=0,c=u.length;f<c;r=++f){e=u[r];if(n===0){t.push([])}if((a=t[r])!=null){a.push(e)}}}return t};n.zipAllWith=pt=function(){var n,r,t,e,u,i,l,f;t=2<=arguments.length?bt.call(arguments,0,e=arguments.length-1):(e=0,[]),n=arguments[e++];if(!t[0].length||!t[1].length){return[]}else{l=gt.apply(null,t);f=[];for(u=0,i=l.length;u<i;u++){r=l[u];f.push(n.apply(null,r))}return f}};n.compose=j=function(){var n;n=1<=arguments.length?bt.call(arguments,0):[];return function(){var r,t,e,u;r=arguments;for(e=0,u=n.length;e<u;e++){t=n[e];r=[t.apply(this,r)]}return r[0]}};n.curry=y=function(n){return function(){var r;r=arguments;return function(){var t;t=1<=arguments.length?bt.call(arguments,0):[];return n.apply(null,bt.call(r).concat(bt.call(t)))}}};n.partial=dr=function(){var n,r;n=arguments[0],r=2<=arguments.length?bt.call(arguments,1):[];return function(){var t;t=1<=arguments.length?bt.call(arguments,0):[];return n.apply(null,r.concat(t))}};n.id=R=function(n){return n};n.flip=E=function(n,r,t){if(arguments.length===3){return n(t,r)}else if(arguments.length===2){return function(t){return n(t,r)}}else{return function(r,t){return n(t,r)}}};n.fix=B=function(n){return function(r,t){return function(){return n(r(r)).apply(null,arguments)}}(function(r,t){return function(){return n(r(r)).apply(null,arguments)}})};n.lines=rr=function(n){if(!n.length){return[]}return n.split("\n")};n.unlines=ot=function(n){return n.join("\n")};n.words=st=function(n){if(!n.length){return[]}return n.split(/[ ]+/)};n.unwords=ct=function(n){return n.join(" ")};n.max=lr=function(n,r){if(n>r){return n}else{return r}};n.min=ar=function(n,r){if(n<r){return n}else{return r}};n.negate=pr=function(n){return-n};n.abs=t=Math.abs;n.signum=Gr=function(n){if(n<0){return-1}else if(n>0){return 1}else{return 0}};n.quot=Ir=function(n,r){return~~(n/r)};n.rem=Ar=function(n,r){return n%r};n.div=O=function(n,r){return Math.floor(n/r)};n.mod=gr=function(n,r){var t;if((t=n%r)<0&&r>0||t>0&&r<0){return t+r}else{return t}};n.recip=Wr=function(n){return 1/n};n.pi=Or=Math.PI;n.tau=nt=Or*2;n.phi=yr=1.618033988749895;n.exp=z=Math.exp;n.sqrt=Vr=Math.sqrt;n.ln=er=Math.log;n.pow=kr=Math.pow;n.sin=Hr=Math.sin;n.tan=_r=Math.tan;n.cos=M=Math.cos;n.asin=o=Math.asin;n.acos=e=Math.acos;n.atan=c=Math.atan;n.atan2=a=Math.atan2;n.truncate=et=function(n){return~~n};n.round=Nr=Math.round;n.ceil=p=Math.ceil;n.floor=T=Math.floor;n.isItNaN=X=function(n){return n!==n};n.even=W=function(n){return n%2===0};n.odd=jr=function(n){return n%2!==0};n.gcd=K=function(n,r){var t;n=Math.abs(n);r=Math.abs(r);while(r!==0){t=n%r;n=r;r=t}return n};n.lcm=_=function(n,r){return Math.abs(Math.floor(n/K(n,r)*r))};n.plus=xr=function(n,r){if(r!=null){return n+r}else{return function(r){return n+r}}};n.minus=hr=function(n,r){if(r!=null){return n-r}else{return function(r){return n-r}}};n.times=rt=function(n,r){if(r!=null){return n*r}else{return function(r){return n*r}}};n.over=mr=function(n,r){if(r!=null){return n/r}else{return function(r){return n/r}}};n.equals=I=function(n,r){if(r!=null){return n===r}else{return function(r){return n===r}}};n.extend=A=function(n,r,t){var e,u,i;if(t==null){t=[]}i=[];for(e in r){if(!mt.call(r,e))continue;u=r[e];if(!(jt.call(t,e)>=0)){i.push(n[e]=u)}}return i};n.prelude=wr=this;n.installPrelude=V=function(r,t){var e;if(!((e=r.prelude)!=null?e.isInstalled:void 0)){A(r,n,t);return r.prelude.isInstalled=true}};r.exports=n}).call(this);return r.exports})})(this);
(function() {
  define('Color',[], function() {
    var Color;
    return Color = (function() {
      function Color(r, g, b, a) {
        if (a == null) {
          a = 1.0;
        }
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
      }

      Color.prototype.toArray = function() {
        return [this.r, this.g, this.b, this.a];
      };

      Color.prototype.toString = function() {
        return "" + (this.toArray());
      };

      return Color;

    })();
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbG9yLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLEVBQUEsTUFBQSxDQUFPLEVBQVAsRUFBVyxTQUFBLEdBQUE7QUFDVCxRQUFBLEtBQUE7V0FBTTtBQUNTLE1BQUEsZUFBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEdBQUE7O1VBQVUsSUFBSTtTQUN6QjtBQUFBLFFBQUEsSUFBQyxDQUFBLENBQUQsR0FBSyxDQUFMLENBQUE7QUFBQSxRQUNBLElBQUMsQ0FBQSxDQUFELEdBQUssQ0FETCxDQUFBO0FBQUEsUUFFQSxJQUFDLENBQUEsQ0FBRCxHQUFLLENBRkwsQ0FBQTtBQUFBLFFBR0EsSUFBQyxDQUFBLENBQUQsR0FBSyxDQUhMLENBRFc7TUFBQSxDQUFiOztBQUFBLHNCQU1BLE9BQUEsR0FBUyxTQUFBLEdBQUE7ZUFDUCxDQUFDLElBQUMsQ0FBQSxDQUFGLEVBQUssSUFBQyxDQUFBLENBQU4sRUFBUyxJQUFDLENBQUEsQ0FBVixFQUFhLElBQUMsQ0FBQSxDQUFkLEVBRE87TUFBQSxDQU5ULENBQUE7O0FBQUEsc0JBU0EsUUFBQSxHQUFVLFNBQUEsR0FBQTtlQUNSLEVBQUEsR0FBRSxDQUFDLElBQUMsQ0FBQSxPQUFELENBQUEsQ0FBRCxFQURNO01BQUEsQ0FUVixDQUFBOzttQkFBQTs7U0FGTztFQUFBLENBQVgsQ0FBQSxDQUFBO0FBQUEiLCJmaWxlIjoiQ29sb3IuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJkZWZpbmUgW10sICgpIC0+XG4gIGNsYXNzIENvbG9yXG4gICAgY29uc3RydWN0b3I6IChyLCBnLCBiLCBhID0gMS4wKSAtPlxuICAgICAgQHIgPSByXG4gICAgICBAZyA9IGdcbiAgICAgIEBiID0gYlxuICAgICAgQGEgPSBhXG5cbiAgICB0b0FycmF5OiAoKSAtPlxuICAgICAgW0ByLCBAZywgQGIsIEBhXVxuXG4gICAgdG9TdHJpbmc6ICgpIC0+XG4gICAgICBcIiN7QHRvQXJyYXkoKX1cIiJdfQ==;
(function() {
  define('Constants',[], function() {
    return {
      ArrayBuffer: 1,
      TRIANGLES: 0,
      TEXTURE_2D: 0,
      GL_MAX_TEXTURE_UNITS: 8
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnN0YW50cy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxFQUFBLE1BQUEsQ0FBTyxFQUFQLEVBQVcsU0FBQSxHQUFBO1dBR1A7QUFBQSxNQUFBLFdBQUEsRUFBYSxDQUFiO0FBQUEsTUFHQSxTQUFBLEVBQVcsQ0FIWDtBQUFBLE1BTUEsVUFBQSxFQUFZLENBTlo7QUFBQSxNQVNBLG9CQUFBLEVBQXNCLENBVHRCO01BSE87RUFBQSxDQUFYLENBQUEsQ0FBQTtBQUFBIiwiZmlsZSI6IkNvbnN0YW50cy5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZSBbXSwgLT5cbiAgICAjIyDlrprmlbDlrprnvqlcbiAgICAjIOODkOODg+ODleOCoeWumue+qVxuICAgIEFycmF5QnVmZmVyOiAxXG5cbiAgICAjIHByaW1pdGl2ZSB0eXBlc1xuICAgIFRSSUFOR0xFUzogMFxuXG4gICAgIyDjg4bjgq/jgrnjg4Hjg6Pjgr/jgqTjg5flrqPoqIBcbiAgICBURVhUVVJFXzJEOiAwXG5cbiAgICAjIOS9v+eUqOWPr+iDveODhuOCr+OCueODgeODo+ODpuODi+ODg+ODiOaVsFxuICAgIEdMX01BWF9URVhUVVJFX1VOSVRTOiA4XG4iXX0=;
(function() {
  define('IllegalArgumentException',[], function() {
    var IllegalArgumentException;
    return IllegalArgumentException = (function() {
      function IllegalArgumentException(arg) {
        this.arg = arg;
      }

      IllegalArgumentException.prototype.toString = function() {
        return "IllegalArgumentException[arg=" + this.arg + "]";
      };

      return IllegalArgumentException;

    })();
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxFQUFBLE1BQUEsQ0FBTyxFQUFQLEVBQVcsU0FBQSxHQUFBO0FBQ1YsUUFBQSx3QkFBQTtXQUFNO0FBQ1EsTUFBQSxrQ0FBQyxHQUFELEdBQUE7QUFDWixRQUFBLElBQUMsQ0FBQSxHQUFELEdBQU8sR0FBUCxDQURZO01BQUEsQ0FBYjs7QUFBQSx5Q0FHQSxRQUFBLEdBQVUsU0FBQSxHQUFBO2VBQ1IsK0JBQUEsR0FBK0IsSUFBQyxDQUFBLEdBQWhDLEdBQW9DLElBRDVCO01BQUEsQ0FIVixDQUFBOztzQ0FBQTs7U0FGUztFQUFBLENBQVgsQ0FBQSxDQUFBO0FBQUEiLCJmaWxlIjoiSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lIFtdLCAoKSAtPlxuXHRjbGFzcyBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb25cblx0XHRjb25zdHJ1Y3RvcjogKGFyZykgLT5cblx0XHRcdEBhcmcgPSBhcmdcblxuXHRcdHRvU3RyaW5nOiAtPlxuXHRcdFx0XCJJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb25bYXJnPSN7QGFyZ31dXCJcbiJdfQ==;
(function() {
  define('renderer/VertexAttributeStream',["prelude", "Constants", "IllegalArgumentException"], function(prelude, Constants, IllegalArgumentException) {
    var VertexAttributeStream;
    return VertexAttributeStream = (function() {
      function VertexAttributeStream() {
        this.attributes = {};
      }

      VertexAttributeStream.prototype.getPrimitiveArray = function(mode, first, count) {
        var indices, _i, _len, _ref, _results;
        _ref = this.generateIndices(mode, first, count);
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          indices = _ref[_i];
          _results.push(this.createPrimitive(indices));
        }
        return _results;
      };

      VertexAttributeStream.prototype.createPrimitive = function(indexArray) {
        var i, key, ret;
        ret = {
          size: indexArray.length
        };
        for (key in this.attributes) {
          ret[key] = (function() {
            var _i, _len, _results;
            _results = [];
            for (_i = 0, _len = indexArray.length; _i < _len; _i++) {
              i = indexArray[_i];
              _results.push(this.attributes[key][i]);
            }
            return _results;
          }).call(this);
        }
        return ret;
      };

      VertexAttributeStream.prototype.generateIndices = function(mode, first, count) {
        var end, i, _i, _ref, _results;
        end = first + count - 1;
        switch (mode) {
          case Constants.TRIANGLES:
            _results = [];
            for (i = _i = first, _ref = end / 3; first <= _ref ? _i <= _ref : _i >= _ref; i = first <= _ref ? ++_i : --_i) {
              _results.push([i * 3, i * 3 + 1, i * 3 + 2]);
            }
            return _results;
            break;
          default:
            throw new IllegalArgumentException("mode");
        }
      };

      VertexAttributeStream.prototype.attribute = function(attributeName, array, stride) {
        if (array.length % stride !== 0) {
          throw "array length is not product of stride";
        }
        return this.attributes[attributeName] = prelude.unfold(array, function(xn) {
          if (!(prelude.empty(xn))) {
            return prelude.splitAt(stride, xn);
          }
        });
      };

      return VertexAttributeStream;

    })();
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVyL1ZlcnRleEF0dHJpYnV0ZVN0cmVhbS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQSxFQUFBLE1BQUEsQ0FBTyxDQUNOLFNBRE0sRUFFTixXQUZNLEVBR04sMEJBSE0sQ0FBUCxFQUlHLFNBQ0YsT0FERSxFQUVGLFNBRkUsRUFHRix3QkFIRSxHQUFBO0FBS0YsUUFBQSxxQkFBQTtXQUFNO0FBQ1EsTUFBQSwrQkFBQSxHQUFBO0FBQ1osUUFBQSxJQUFDLENBQUEsVUFBRCxHQUFjLEVBQWQsQ0FEWTtNQUFBLENBQWI7O0FBQUEsc0NBR0EsaUJBQUEsR0FBbUIsU0FBQyxJQUFELEVBQU8sS0FBUCxFQUFjLEtBQWQsR0FBQTtBQUNsQixZQUFBLGlDQUFBO0FBQUM7QUFBQTthQUFBLDJDQUFBOzZCQUFBO0FBQUEsd0JBQUEsSUFBQyxDQUFBLGVBQUQsQ0FBaUIsT0FBakIsRUFBQSxDQUFBO0FBQUE7d0JBRGlCO01BQUEsQ0FIbkIsQ0FBQTs7QUFBQSxzQ0FPQSxlQUFBLEdBQWlCLFNBQUMsVUFBRCxHQUFBO0FBQ2hCLFlBQUEsV0FBQTtBQUFBLFFBQUEsR0FBQSxHQUFNO0FBQUEsVUFDTCxJQUFBLEVBQU0sVUFBVSxDQUFDLE1BRFo7U0FBTixDQUFBO0FBR0EsYUFBQSxzQkFBQSxHQUFBO0FBQ0MsVUFBQSxHQUFJLENBQUEsR0FBQSxDQUFKOztBQUFZO2lCQUFBLGlEQUFBO2lDQUFBO0FBQUEsNEJBQUEsSUFBQyxDQUFBLFVBQVcsQ0FBQSxHQUFBLENBQUssQ0FBQSxDQUFBLEVBQWpCLENBQUE7QUFBQTs7dUJBQVosQ0FERDtBQUFBLFNBSEE7QUFLQSxlQUFPLEdBQVAsQ0FOZ0I7TUFBQSxDQVBqQixDQUFBOztBQUFBLHNDQWdCQSxlQUFBLEdBQWlCLFNBQUMsSUFBRCxFQUFPLEtBQVAsRUFBYyxLQUFkLEdBQUE7QUFDaEIsWUFBQSwwQkFBQTtBQUFBLFFBQUEsR0FBQSxHQUFNLEtBQUEsR0FBUSxLQUFSLEdBQWdCLENBQXRCLENBQUE7QUFDQSxnQkFBTyxJQUFQO0FBQUEsZUFDTSxTQUFTLENBQUMsU0FEaEI7QUFFRTtpQkFBNkIsd0dBQTdCLEdBQUE7QUFBQSw0QkFBQSxDQUFDLENBQUEsR0FBRSxDQUFILEVBQU0sQ0FBQSxHQUFFLENBQUYsR0FBSSxDQUFWLEVBQWEsQ0FBQSxHQUFFLENBQUYsR0FBSSxDQUFqQixFQUFBLENBQUE7QUFBQTs0QkFGRjtBQUNNO0FBRE47QUFJRSxrQkFBVSxJQUFBLHdCQUFBLENBQXlCLE1BQXpCLENBQVYsQ0FKRjtBQUFBLFNBRmdCO01BQUEsQ0FoQmpCLENBQUE7O0FBQUEsc0NBd0JBLFNBQUEsR0FBVyxTQUFDLGFBQUQsRUFBZ0IsS0FBaEIsRUFBdUIsTUFBdkIsR0FBQTtBQUNWLFFBQUEsSUFBRyxLQUFLLENBQUMsTUFBTixHQUFlLE1BQWYsS0FBMkIsQ0FBOUI7QUFDQyxnQkFBTSx1Q0FBTixDQUREO1NBQUE7ZUFHQSxJQUFDLENBQUEsVUFBVyxDQUFBLGFBQUEsQ0FBWixHQUE2QixPQUFPLENBQUMsTUFBUixDQUFlLEtBQWYsRUFBc0IsU0FBQyxFQUFELEdBQUE7QUFDbEQsVUFBQSxJQUFHLENBQUEsQ0FBRSxPQUFPLENBQUMsS0FBUixDQUFjLEVBQWQsQ0FBRCxDQUFKO21CQUNDLE9BQU8sQ0FBQyxPQUFSLENBQWdCLE1BQWhCLEVBQXdCLEVBQXhCLEVBREQ7V0FEa0Q7UUFBQSxDQUF0QixFQUpuQjtNQUFBLENBeEJYLENBQUE7O21DQUFBOztTQU5DO0VBQUEsQ0FKSCxDQUFBLENBQUE7QUFBQSIsImZpbGUiOiJyZW5kZXJlci9WZXJ0ZXhBdHRyaWJ1dGVTdHJlYW0uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyIjIOmggueCuemFjeWIl+OCueODiOODquODvOODoOOBq+WvvuOBmeOCi+aTjeS9nOOBruWumue+qVxuZGVmaW5lKFtcblx0XCJwcmVsdWRlXCIsXG5cdFwiQ29uc3RhbnRzXCIsXG5cdFwiSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uXCJcbl0sIChcblx0cHJlbHVkZSxcblx0Q29uc3RhbnRzLFxuXHRJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb25cblx0KSAtPlxuXHRjbGFzcyBWZXJ0ZXhBdHRyaWJ1dGVTdHJlYW1cblx0XHRjb25zdHJ1Y3RvcjogKCkgLT5cblx0XHRcdEBhdHRyaWJ1dGVzID0ge31cblxuXHRcdGdldFByaW1pdGl2ZUFycmF5OiAobW9kZSwgZmlyc3QsIGNvdW50KSAtPlxuXHRcdFx0KEBjcmVhdGVQcmltaXRpdmUoaW5kaWNlcykgZm9yIGluZGljZXMgaW4gQGdlbmVyYXRlSW5kaWNlcyhtb2RlLCBmaXJzdCwgY291bnQpKVxuXG5cdFx0IyDpoILngrnlsZ7mgKfphY3liJfjga7jgqTjg7Pjg4fjg4Pjgq/jgrnjgYvjgonjg5fjg6rjg5/jg4bjgqPjg5bjgpLkvZzmiJDjgZnjgotcblx0XHRjcmVhdGVQcmltaXRpdmU6IChpbmRleEFycmF5KSAtPlxuXHRcdFx0cmV0ID0ge1xuXHRcdFx0XHRzaXplOiBpbmRleEFycmF5Lmxlbmd0aFxuXHRcdFx0fVxuXHRcdFx0Zm9yIGtleSBvZiBAYXR0cmlidXRlc1xuXHRcdFx0XHRyZXRba2V5XSA9IChAYXR0cmlidXRlc1trZXldW2ldIGZvciBpIGluIGluZGV4QXJyYXkpXG5cdFx0XHRyZXR1cm4gcmV0XG5cblx0XHQjIOODl+ODquODn+ODhuOCo+ODluOBrueorumhnuOBq+W/nOOBmOOBpuOAgeWIhuWJsuOBmeOCi+S4ieinkuW9ouODneODquOCtOODs+OBrumggueCuembhuWQiOOBrumFjeWIl+OCkui/lOOBmVxuXHRcdGdlbmVyYXRlSW5kaWNlczogKG1vZGUsIGZpcnN0LCBjb3VudCktPlxuXHRcdFx0ZW5kID0gZmlyc3QgKyBjb3VudCAtIDFcblx0XHRcdHN3aXRjaCBtb2RlXG5cdFx0XHRcdHdoZW4gQ29uc3RhbnRzLlRSSUFOR0xFU1xuXHRcdFx0XHRcdFtpKjMsIGkqMysxLCBpKjMrMl0gZm9yIGkgaW4gW2ZpcnN0Li5lbmQvM11cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHRocm93IG5ldyBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb24oXCJtb2RlXCIpXG5cblx0XHRhdHRyaWJ1dGU6IChhdHRyaWJ1dGVOYW1lLCBhcnJheSwgc3RyaWRlKSAtPlxuXHRcdFx0aWYgYXJyYXkubGVuZ3RoICUgc3RyaWRlIGlzbnQgMFxuXHRcdFx0XHR0aHJvdyBcImFycmF5IGxlbmd0aCBpcyBub3QgcHJvZHVjdCBvZiBzdHJpZGVcIlxuXG5cdFx0XHRAYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSA9IHByZWx1ZGUudW5mb2xkIGFycmF5LCAoeG4pIC0+XG5cdFx0XHRcdGlmICEocHJlbHVkZS5lbXB0eSB4bilcblx0XHRcdFx0XHRwcmVsdWRlLnNwbGl0QXQgc3RyaWRlLCB4blxuXHQpXG4iXX0=;
(function() {
  define('Program',["prelude", "renderer/VertexAttributeStream"], function(prelude, VertexAttributeStream) {
    var Program;
    return Program = (function() {
      function Program(vertexShader, fragmentShader, attributeStream) {
        this.vertexShader = vertexShader;
        this.fragmentShader = fragmentShader;
        this.attributeStream = attributeStream != null ? attributeStream : new VertexAttributeStream();
        this.uniforms = {};
      }

      Program.prototype.bindBuffer = function(attributeName, buffer, stride) {
        return this.attributeStream.attribute(attributeName, buffer.data, stride);
      };

      Program.prototype.vertexAttributeStream = function() {
        return new VertexAttributeStream(this.attributes);
      };

      Program.prototype.uniform = function(uniformName, data) {
        return this.uniforms[uniformName] = data;
      };

      return Program;

    })();
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2dyYW0uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsRUFBQSxNQUFBLENBQU8sQ0FBQyxTQUFELEVBQVksZ0NBQVosQ0FBUCxFQUFzRCxTQUFDLE9BQUQsRUFBVSxxQkFBVixHQUFBO0FBQ3JELFFBQUEsT0FBQTtXQUFNO0FBQ1EsTUFBQSxpQkFBRSxZQUFGLEVBQWlCLGNBQWpCLEVBQWtDLGVBQWxDLEdBQUE7QUFDWixRQURhLElBQUMsQ0FBQSxlQUFBLFlBQ2QsQ0FBQTtBQUFBLFFBRDRCLElBQUMsQ0FBQSxpQkFBQSxjQUM3QixDQUFBO0FBQUEsUUFENkMsSUFBQyxDQUFBLDRDQUFBLGtCQUFzQixJQUFBLHFCQUFBLENBQUEsQ0FDcEUsQ0FBQTtBQUFBLFFBQUEsSUFBQyxDQUFBLFFBQUQsR0FBWSxFQUFaLENBRFk7TUFBQSxDQUFiOztBQUFBLHdCQUdBLFVBQUEsR0FBWSxTQUFDLGFBQUQsRUFBZ0IsTUFBaEIsRUFBd0IsTUFBeEIsR0FBQTtlQUNYLElBQUMsQ0FBQSxlQUFlLENBQUMsU0FBakIsQ0FBMkIsYUFBM0IsRUFBMEMsTUFBTSxDQUFDLElBQWpELEVBQXVELE1BQXZELEVBRFc7TUFBQSxDQUhaLENBQUE7O0FBQUEsd0JBTUEscUJBQUEsR0FBdUIsU0FBQSxHQUFBO2VBQ2xCLElBQUEscUJBQUEsQ0FBc0IsSUFBQyxDQUFBLFVBQXZCLEVBRGtCO01BQUEsQ0FOdkIsQ0FBQTs7QUFBQSx3QkFTQSxPQUFBLEdBQVMsU0FBQyxXQUFELEVBQWMsSUFBZCxHQUFBO2VBQ1IsSUFBQyxDQUFBLFFBQVMsQ0FBQSxXQUFBLENBQVYsR0FBeUIsS0FEakI7TUFBQSxDQVRULENBQUE7O3FCQUFBOztTQUZvRDtFQUFBLENBQXRELENBQUEsQ0FBQTtBQUFBIiwiZmlsZSI6IlByb2dyYW0uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJkZWZpbmUgW1wicHJlbHVkZVwiLCBcInJlbmRlcmVyL1ZlcnRleEF0dHJpYnV0ZVN0cmVhbVwiXSwgKHByZWx1ZGUsIFZlcnRleEF0dHJpYnV0ZVN0cmVhbSkgLT5cblx0Y2xhc3MgUHJvZ3JhbVxuXHRcdGNvbnN0cnVjdG9yOiAoQHZlcnRleFNoYWRlciwgQGZyYWdtZW50U2hhZGVyLCBAYXR0cmlidXRlU3RyZWFtID0gbmV3IFZlcnRleEF0dHJpYnV0ZVN0cmVhbSgpKSAtPlxuXHRcdFx0QHVuaWZvcm1zID0ge31cblxuXHRcdGJpbmRCdWZmZXI6IChhdHRyaWJ1dGVOYW1lLCBidWZmZXIsIHN0cmlkZSkgLT5cblx0XHRcdEBhdHRyaWJ1dGVTdHJlYW0uYXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGJ1ZmZlci5kYXRhLCBzdHJpZGUpXG5cblx0XHR2ZXJ0ZXhBdHRyaWJ1dGVTdHJlYW06ICgpIC0+XG5cdFx0XHRuZXcgVmVydGV4QXR0cmlidXRlU3RyZWFtKEBhdHRyaWJ1dGVzKVxuXG5cdFx0dW5pZm9ybTogKHVuaWZvcm1OYW1lLCBkYXRhKSAtPlxuXHRcdFx0QHVuaWZvcm1zW3VuaWZvcm1OYW1lXSA9IGRhdGFcbiJdfQ==;
(function() {
  define('Buffer',[], function() {
    var Buffer;
    return Buffer = (function() {
      function Buffer(id) {
        this.id = id;
        this.data = [];
      }

      return Buffer;

    })();
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1ZmZlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxFQUFBLE1BQUEsQ0FBTyxFQUFQLEVBQVcsU0FBQSxHQUFBO0FBQ1QsUUFBQSxNQUFBO1dBQU07QUFDUyxNQUFBLGdCQUFDLEVBQUQsR0FBQTtBQUNYLFFBQUEsSUFBQyxDQUFBLEVBQUQsR0FBTSxFQUFOLENBQUE7QUFBQSxRQUNBLElBQUMsQ0FBQSxJQUFELEdBQVEsRUFEUixDQURXO01BQUEsQ0FBYjs7b0JBQUE7O1NBRk87RUFBQSxDQUFYLENBQUEsQ0FBQTtBQUFBIiwiZmlsZSI6IkJ1ZmZlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZSBbXSwgKCkgLT5cbiAgY2xhc3MgQnVmZmVyXG4gICAgY29uc3RydWN0b3I6IChpZCkgLT5cbiAgICAgIEBpZCA9IGlkXG4gICAgICBAZGF0YSA9IFtdXG5cbiJdfQ==;
(function() {
  define('Texture',[], function() {
    var Texture;
    return Texture = (function() {
      function Texture() {
        this.data = null;
      }

      Texture.prototype.loadImage = function(_arg) {
        var canvas;
        this.width = _arg.width, this.height = _arg.height, canvas = _arg.canvas;
        return this.data = canvas.getImageData(0, 0, this.width, this.height).data;
      };

      return Texture;

    })();
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRleHR1cmUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsRUFBQSxNQUFBLENBQU8sRUFBUCxFQUFXLFNBQUEsR0FBQTtBQUNQLFFBQUEsT0FBQTtXQUFNO0FBQ1csTUFBQSxpQkFBQSxHQUFBO0FBQ1QsUUFBQSxJQUFDLENBQUEsSUFBRCxHQUFRLElBQVIsQ0FEUztNQUFBLENBQWI7O0FBQUEsd0JBR0EsU0FBQSxHQUFXLFNBQUMsSUFBRCxHQUFBO0FBQ1AsWUFBQSxNQUFBO0FBQUEsUUFEZ0IsSUFBQyxDQUFBLGFBQVIsT0FBdUIsSUFBQyxDQUFBLGNBQVQsUUFBeUIsY0FBUixNQUN6QyxDQUFBO2VBQUEsSUFBQyxDQUFBLElBQUQsR0FBUSxNQUFNLENBQUMsWUFBUCxDQUFvQixDQUFwQixFQUF1QixDQUF2QixFQUEwQixJQUFDLENBQUEsS0FBM0IsRUFBa0MsSUFBQyxDQUFBLE1BQW5DLENBQTBDLENBQUMsS0FENUM7TUFBQSxDQUhYLENBQUE7O3FCQUFBOztTQUZHO0VBQUEsQ0FBWCxDQUFBLENBQUE7QUFBQSIsImZpbGUiOiJUZXh0dXJlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lIFtdLCAtPlxuICAgIGNsYXNzIFRleHR1cmVcbiAgICAgICAgY29uc3RydWN0b3I6IC0+XG4gICAgICAgICAgICBAZGF0YSA9IG51bGxcblxuICAgICAgICBsb2FkSW1hZ2U6ICh7d2lkdGg6IEB3aWR0aCwgaGVpZ2h0OiBAaGVpZ2h0LCBjYW52YXM6IGNhbnZhc30pIC0+XG4gICAgICAgICAgICBAZGF0YSA9IGNhbnZhcy5nZXRJbWFnZURhdGEoMCwgMCwgQHdpZHRoLCBAaGVpZ2h0KS5kYXRhXG4iXX0=;
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define('renderer/ShaderUnitBase',[], function() {
    var ShaderUnitBase;
    return ShaderUnitBase = (function() {
      function ShaderUnitBase(worker) {
        this.onMessage = __bind(this.onMessage, this);
        this.worker = worker;
        this.onProcessedHandler = function() {
          throw "invalid state";
        };
      }

      ShaderUnitBase.prototype.onMessage = function(msg) {
        return this.onProcessedHandler(msg.data);
      };

      ShaderUnitBase.prototype.onProcessed = function(onProcessedHandler) {
        this.onProcessedHandler = onProcessedHandler;
      };

      ShaderUnitBase.prototype.loadShader = function(shader) {
        return this.send({
          method: "setShader",
          shaderType: this.shaderType(),
          shader: shader
        });
      };

      ShaderUnitBase.prototype.preProcess = function(renderer) {
        this.setUniform(renderer.program.uniforms);
        return this.setTextureUnit(renderer.textureUnit);
      };

      ShaderUnitBase.prototype.process = function() {
        throw "can not call abstract method";
      };

      ShaderUnitBase.prototype.setUniform = function(uniforms) {
        return this.send({
          method: "setUniforms",
          uniforms: uniforms
        });
      };

      ShaderUnitBase.prototype.setTextureUnit = function(textureUnit) {
        return this.send({
          method: "setTextureUnit",
          textureUnit: textureUnit
        });
      };

      ShaderUnitBase.prototype.send = function(msg) {
        return this.worker.postMessage(msg);
      };

      ShaderUnitBase.prototype.shaderType = function() {
        throw "can not call abstract method";
      };

      return ShaderUnitBase;

    })();
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVyL1NoYWRlclVuaXRCYXNlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQUEsa0ZBQUE7O0FBQUEsRUFBQSxNQUFBLENBQU8sRUFBUCxFQUFXLFNBQUEsR0FBQTtBQUNQLFFBQUEsY0FBQTtXQUFNO0FBQ1csTUFBQSx3QkFBQyxNQUFELEdBQUE7QUFDVCxxREFBQSxDQUFBO0FBQUEsUUFBQSxJQUFDLENBQUEsTUFBRCxHQUFVLE1BQVYsQ0FBQTtBQUFBLFFBQ0EsSUFBQyxDQUFBLGtCQUFELEdBQXNCLFNBQUEsR0FBQTtBQUNsQixnQkFBTSxlQUFOLENBRGtCO1FBQUEsQ0FEdEIsQ0FEUztNQUFBLENBQWI7O0FBQUEsK0JBS0EsU0FBQSxHQUFXLFNBQUMsR0FBRCxHQUFBO2VBQ1AsSUFBQyxDQUFBLGtCQUFELENBQW9CLEdBQUcsQ0FBQyxJQUF4QixFQURPO01BQUEsQ0FMWCxDQUFBOztBQUFBLCtCQVFBLFdBQUEsR0FBYSxTQUFFLGtCQUFGLEdBQUE7QUFBdUIsUUFBdEIsSUFBQyxDQUFBLHFCQUFBLGtCQUFxQixDQUF2QjtNQUFBLENBUmIsQ0FBQTs7QUFBQSwrQkFVQSxVQUFBLEdBQVksU0FBQyxNQUFELEdBQUE7ZUFDUixJQUFDLENBQUEsSUFBRCxDQUNJO0FBQUEsVUFBQSxNQUFBLEVBQVEsV0FBUjtBQUFBLFVBQ0EsVUFBQSxFQUFZLElBQUMsQ0FBQSxVQUFELENBQUEsQ0FEWjtBQUFBLFVBRUEsTUFBQSxFQUFRLE1BRlI7U0FESixFQURRO01BQUEsQ0FWWixDQUFBOztBQUFBLCtCQWlCQSxVQUFBLEdBQVksU0FBQyxRQUFELEdBQUE7QUFFUixRQUFBLElBQUMsQ0FBQSxVQUFELENBQVksUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUE3QixDQUFBLENBQUE7ZUFFQSxJQUFDLENBQUEsY0FBRCxDQUFnQixRQUFRLENBQUMsV0FBekIsRUFKUTtNQUFBLENBakJaLENBQUE7O0FBQUEsK0JBdUJBLE9BQUEsR0FBUyxTQUFBLEdBQUE7QUFDTCxjQUFNLDhCQUFOLENBREs7TUFBQSxDQXZCVCxDQUFBOztBQUFBLCtCQTBCQSxVQUFBLEdBQVksU0FBQyxRQUFELEdBQUE7ZUFDUixJQUFDLENBQUEsSUFBRCxDQUFNO0FBQUEsVUFDRixNQUFBLEVBQVEsYUFETjtBQUFBLFVBRUYsUUFBQSxFQUFVLFFBRlI7U0FBTixFQURRO01BQUEsQ0ExQlosQ0FBQTs7QUFBQSwrQkFnQ0EsY0FBQSxHQUFnQixTQUFDLFdBQUQsR0FBQTtlQUNaLElBQUMsQ0FBQSxJQUFELENBQU07QUFBQSxVQUNGLE1BQUEsRUFBUSxnQkFETjtBQUFBLFVBRUYsV0FBQSxFQUFhLFdBRlg7U0FBTixFQURZO01BQUEsQ0FoQ2hCLENBQUE7O0FBQUEsK0JBc0NBLElBQUEsR0FBTSxTQUFDLEdBQUQsR0FBQTtlQUNGLElBQUMsQ0FBQSxNQUFNLENBQUMsV0FBUixDQUFvQixHQUFwQixFQURFO01BQUEsQ0F0Q04sQ0FBQTs7QUFBQSwrQkF5Q0EsVUFBQSxHQUFZLFNBQUEsR0FBQTtBQUNSLGNBQU0sOEJBQU4sQ0FEUTtNQUFBLENBekNaLENBQUE7OzRCQUFBOztTQUZHO0VBQUEsQ0FBWCxDQUFBLENBQUE7QUFBQSIsImZpbGUiOiJyZW5kZXJlci9TaGFkZXJVbml0QmFzZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZSBbXSwgKCkgLT5cbiAgICBjbGFzcyBTaGFkZXJVbml0QmFzZVxuICAgICAgICBjb25zdHJ1Y3RvcjogKHdvcmtlcikgLT5cbiAgICAgICAgICAgIEB3b3JrZXIgPSB3b3JrZXJcbiAgICAgICAgICAgIEBvblByb2Nlc3NlZEhhbmRsZXIgPSAoKSAtPlxuICAgICAgICAgICAgICAgIHRocm93IFwiaW52YWxpZCBzdGF0ZVwiXG5cbiAgICAgICAgb25NZXNzYWdlOiAobXNnKSA9PlxuICAgICAgICAgICAgQG9uUHJvY2Vzc2VkSGFuZGxlcihtc2cuZGF0YSlcblxuICAgICAgICBvblByb2Nlc3NlZDogKEBvblByb2Nlc3NlZEhhbmRsZXIpIC0+XG5cbiAgICAgICAgbG9hZFNoYWRlcjogKHNoYWRlcikgLT5cbiAgICAgICAgICAgIEBzZW5kKFxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJzZXRTaGFkZXJcIlxuICAgICAgICAgICAgICAgIHNoYWRlclR5cGU6IEBzaGFkZXJUeXBlKClcbiAgICAgICAgICAgICAgICBzaGFkZXI6IHNoYWRlclxuICAgICAgICAgICAgKVxuXG4gICAgICAgIHByZVByb2Nlc3M6IChyZW5kZXJlcikgLT5cbiAgICAgICAgICAgICMgdW5pZm9ybe+/vc2kz6XJpe+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vdCk77+977+977+977+977+977+96qS177+977+977+977+977+96aS377+977+9XG4gICAgICAgICAgICBAc2V0VW5pZm9ybShyZW5kZXJlci5wcm9ncmFtLnVuaWZvcm1zKVxuICAgICAgICAgICAgIyDvv73Gpe+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vculw6XIpO+/ve+/ve+/ve+/ve+/vcW+77+986S5pOukt++/ve+/ve+/vcqk77+977+9z6Tvv71cbiAgICAgICAgICAgIEBzZXRUZXh0dXJlVW5pdChyZW5kZXJlci50ZXh0dXJlVW5pdClcblxuICAgICAgICBwcm9jZXNzOiAtPlxuICAgICAgICAgICAgdGhyb3cgXCJjYW4gbm90IGNhbGwgYWJzdHJhY3QgbWV0aG9kXCJcblxuICAgICAgICBzZXRVbmlmb3JtOiAodW5pZm9ybXMpIC0+XG4gICAgICAgICAgICBAc2VuZCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcInNldFVuaWZvcm1zXCJcbiAgICAgICAgICAgICAgICB1bmlmb3JtczogdW5pZm9ybXNcbiAgICAgICAgICAgIH1cblxuICAgICAgICBzZXRUZXh0dXJlVW5pdDogKHRleHR1cmVVbml0KSAtPlxuICAgICAgICAgICAgQHNlbmQge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJzZXRUZXh0dXJlVW5pdFwiXG4gICAgICAgICAgICAgICAgdGV4dHVyZVVuaXQ6IHRleHR1cmVVbml0XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgc2VuZDogKG1zZykgLT5cbiAgICAgICAgICAgIEB3b3JrZXIucG9zdE1lc3NhZ2UobXNnKVxuXG4gICAgICAgIHNoYWRlclR5cGU6ICgpIC0+XG4gICAgICAgICAgICB0aHJvdyBcImNhbiBub3QgY2FsbCBhYnN0cmFjdCBtZXRob2RcIlxuIl19;
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define('renderer/VertexShaderUnit',["renderer/ShaderUnitBase"], function(ShaderUnitBase) {
    var VertexShaderUnit;
    return VertexShaderUnit = (function(_super) {
      __extends(VertexShaderUnit, _super);

      function VertexShaderUnit(worker) {
        VertexShaderUnit.__super__.constructor.call(this, worker);
      }

      VertexShaderUnit.prototype.process = function(primitive) {
        return this.send({
          method: "process",
          attributes: primitive
        });
      };

      VertexShaderUnit.prototype.shaderType = function() {
        return "VertexShader";
      };

      return VertexShaderUnit;

    })(ShaderUnitBase);
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVyL1ZlcnRleFNoYWRlclVuaXQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQTttU0FBQTs7QUFBQSxFQUFBLE1BQUEsQ0FBTyxDQUFDLHlCQUFELENBQVAsRUFBb0MsU0FBQyxjQUFELEdBQUE7QUFDbkMsUUFBQSxnQkFBQTtXQUFNO0FBQ0wseUNBQUEsQ0FBQTs7QUFBYSxNQUFBLDBCQUFDLE1BQUQsR0FBQTtBQUNaLFFBQUEsa0RBQU0sTUFBTixDQUFBLENBRFk7TUFBQSxDQUFiOztBQUFBLGlDQUdBLE9BQUEsR0FBUyxTQUFDLFNBQUQsR0FBQTtlQUNSLElBQUMsQ0FBQSxJQUFELENBQ0M7QUFBQSxVQUFBLE1BQUEsRUFBUSxTQUFSO0FBQUEsVUFDQSxVQUFBLEVBQVksU0FEWjtTQURELEVBRFE7TUFBQSxDQUhULENBQUE7O0FBQUEsaUNBVUEsVUFBQSxHQUFZLFNBQUEsR0FBQTtlQUNYLGVBRFc7TUFBQSxDQVZaLENBQUE7OzhCQUFBOztPQUQ4QixnQkFESTtFQUFBLENBQXBDLENBQUEsQ0FBQTtBQUFBIiwiZmlsZSI6InJlbmRlcmVyL1ZlcnRleFNoYWRlclVuaXQuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJkZWZpbmUgW1wicmVuZGVyZXIvU2hhZGVyVW5pdEJhc2VcIl0sIChTaGFkZXJVbml0QmFzZSkgLT5cblx0Y2xhc3MgVmVydGV4U2hhZGVyVW5pdCBleHRlbmRzIFNoYWRlclVuaXRCYXNlXG5cdFx0Y29uc3RydWN0b3I6ICh3b3JrZXIpIC0+XG5cdFx0XHRzdXBlcih3b3JrZXIpXG5cblx0XHRwcm9jZXNzOiAocHJpbWl0aXZlKSAtPlxuXHRcdFx0QHNlbmQoXG5cdFx0XHRcdG1ldGhvZDogXCJwcm9jZXNzXCJcblx0XHRcdFx0YXR0cmlidXRlczogcHJpbWl0aXZlXG5cdFx0XHQpXG5cblx0XHQjIG92ZXJyaWRlXG5cdFx0c2hhZGVyVHlwZTogKCkgLT5cblx0XHRcdFwiVmVydGV4U2hhZGVyXCJcbiJdfQ==;
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define('renderer/FragmentShaderUnit',["renderer/ShaderUnitBase"], function(ShaderUnitBase) {
    var FragmentShaderUnit;
    return FragmentShaderUnit = (function(_super) {
      __extends(FragmentShaderUnit, _super);

      function FragmentShaderUnit(worker) {
        FragmentShaderUnit.__super__.constructor.call(this, worker);
      }

      FragmentShaderUnit.prototype.process = function(fragment) {
        return this.send({
          method: "process",
          attributes: fragment
        });
      };

      FragmentShaderUnit.prototype.shaderType = function() {
        return "FragmentShader";
      };

      return FragmentShaderUnit;

    })(ShaderUnitBase);
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVyL0ZyYWdtZW50U2hhZGVyVW5pdC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBO21TQUFBOztBQUFBLEVBQUEsTUFBQSxDQUFPLENBQUMseUJBQUQsQ0FBUCxFQUFvQyxTQUFDLGNBQUQsR0FBQTtBQUNuQyxRQUFBLGtCQUFBO1dBQU07QUFDTCwyQ0FBQSxDQUFBOztBQUFhLE1BQUEsNEJBQUMsTUFBRCxHQUFBO0FBQ1osUUFBQSxvREFBTSxNQUFOLENBQUEsQ0FEWTtNQUFBLENBQWI7O0FBQUEsbUNBR0EsT0FBQSxHQUFTLFNBQUMsUUFBRCxHQUFBO2VBQ1IsSUFBQyxDQUFBLElBQUQsQ0FDQztBQUFBLFVBQUEsTUFBQSxFQUFRLFNBQVI7QUFBQSxVQUNBLFVBQUEsRUFBWSxRQURaO1NBREQsRUFEUTtNQUFBLENBSFQsQ0FBQTs7QUFBQSxtQ0FVQSxVQUFBLEdBQVksU0FBQSxHQUFBO2VBQ1gsaUJBRFc7TUFBQSxDQVZaLENBQUE7O2dDQUFBOztPQURnQyxnQkFERTtFQUFBLENBQXBDLENBQUEsQ0FBQTtBQUFBIiwiZmlsZSI6InJlbmRlcmVyL0ZyYWdtZW50U2hhZGVyVW5pdC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZSBbXCJyZW5kZXJlci9TaGFkZXJVbml0QmFzZVwiXSwgKFNoYWRlclVuaXRCYXNlKSAtPlxuXHRjbGFzcyBGcmFnbWVudFNoYWRlclVuaXQgZXh0ZW5kcyBTaGFkZXJVbml0QmFzZVxuXHRcdGNvbnN0cnVjdG9yOiAod29ya2VyKSAtPlxuXHRcdFx0c3VwZXIod29ya2VyKVxuXG5cdFx0cHJvY2VzczogKGZyYWdtZW50KSAtPlxuXHRcdFx0QHNlbmQoXG5cdFx0XHRcdG1ldGhvZDogXCJwcm9jZXNzXCJcblx0XHRcdFx0YXR0cmlidXRlczogZnJhZ21lbnRcblx0XHRcdClcblxuXHRcdCMgb3ZlcnJpZGVcblx0XHRzaGFkZXJUeXBlOiAoKSAtPlxuXHRcdFx0XCJGcmFnbWVudFNoYWRlclwiXG4iXX0=;
(function() {
  define('renderer/FrameBuffer',[], function() {
    var FrameBuffer;
    return FrameBuffer = (function() {
      function FrameBuffer(canvas) {
        this.canvas = canvas;
        this.width = this.canvas.canvas.width;
        this.height = this.canvas.canvas.height;
        this.imageData = null;
        this.zbuffer = null;
      }

      FrameBuffer.prototype.write = function(fragments) {
        var fragment, _i, _len;
        if (this.imageData == null) {
          this.imageData = this.canvas.getImageData(0, 0, this.width, this.height);
        }
        if (this.zbuffer == null) {
          this.createZBuffer();
        }
        for (_i = 0, _len = fragments.length; _i < _len; _i++) {
          fragment = fragments[_i];
          this._transformCanvasCoord(fragment);
          this._putPixel(fragment);
        }
        return this.flush();
      };

      FrameBuffer.prototype.createZBuffer = function() {
        var buf, i, _i, _ref, _results;
        buf = new ArrayBuffer(this.width * this.height * 4);
        this.zbuffer = new Float32Array(buf);
        _results = [];
        for (i = _i = 0, _ref = this.zbuffer.length; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
          _results.push(this.zbuffer[i] = 256 + 256 << 4 + 256 << 8);
        }
        return _results;
      };

      FrameBuffer.prototype.clear = function(styleText) {
        this.canvas.fillStyle = styleText;
        this.canvas.fillRect(0, 0, this.width, this.height);
        this.zbuffer = null;
        return this.imageData = null;
      };

      FrameBuffer.prototype.flush = function() {
        return this.canvas.putImageData(this.imageData, 0, 0);
      };

      FrameBuffer.prototype._putPixel = function(fragment) {
        var a, byteOffset, data, i, offset, rgba, x, y, z, _i, _ref, _results;
        _ref = fragment.gl_Position, x = _ref[0], y = _ref[1], z = _ref[2];
        data = this.imageData.data;
        rgba = (function() {
          var _i, _len, _ref1, _results;
          _ref1 = fragment.gl_FragColor;
          _results = [];
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            a = _ref1[_i];
            _results.push(a * 255);
          }
          return _results;
        })();
        y = this.height - y;
        offset = y * this.width + x;
        byteOffset = offset * 4;
        if (this.zbuffer[offset] < z) {
          return;
        }
        this.zbuffer[offset] = z;
        _results = [];
        for (i = _i = 0; _i <= 3; i = ++_i) {
          _results.push(this.imageData.data[byteOffset + i] = rgba[i]);
        }
        return _results;
      };

      FrameBuffer.prototype._transformCanvasCoord = function(fragment) {
        var x, y, z, _ref;
        _ref = fragment.gl_Position, x = _ref[0], y = _ref[1], z = _ref[2];
        return fragment.gl_Position = [x + this.width / 2, y + this.height / 2, z];
      };

      return FrameBuffer;

    })();
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVyL0ZyYW1lQnVmZmVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLEVBQUEsTUFBQSxDQUFPLEVBQVAsRUFBVyxTQUFBLEdBQUE7QUFDVixRQUFBLFdBQUE7V0FBTTtBQUNRLE1BQUEscUJBQUUsTUFBRixHQUFBO0FBQ1osUUFEYSxJQUFDLENBQUEsU0FBQSxNQUNkLENBQUE7QUFBQSxRQUFBLElBQUMsQ0FBQSxLQUFELEdBQVMsSUFBQyxDQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBeEIsQ0FBQTtBQUFBLFFBQ0EsSUFBQyxDQUFBLE1BQUQsR0FBVSxJQUFDLENBQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUR6QixDQUFBO0FBQUEsUUFFQSxJQUFDLENBQUEsU0FBRCxHQUFhLElBRmIsQ0FBQTtBQUFBLFFBR0EsSUFBQyxDQUFBLE9BQUQsR0FBVyxJQUhYLENBRFk7TUFBQSxDQUFiOztBQUFBLDRCQU1BLEtBQUEsR0FBTyxTQUFDLFNBQUQsR0FBQTtBQUNOLFlBQUEsa0JBQUE7QUFBQSxRQUFBLElBQU8sc0JBQVA7QUFDQyxVQUFBLElBQUMsQ0FBQSxTQUFELEdBQWEsSUFBQyxDQUFBLE1BQU0sQ0FBQyxZQUFSLENBQXFCLENBQXJCLEVBQXVCLENBQXZCLEVBQTBCLElBQUMsQ0FBQSxLQUEzQixFQUFrQyxJQUFDLENBQUEsTUFBbkMsQ0FBYixDQUREO1NBQUE7QUFHQSxRQUFBLElBQU8sb0JBQVA7QUFDQyxVQUFBLElBQUMsQ0FBQSxhQUFELENBQUEsQ0FBQSxDQUREO1NBSEE7QUFNQSxhQUFBLGdEQUFBO21DQUFBO0FBQ0MsVUFBQSxJQUFDLENBQUEscUJBQUQsQ0FBdUIsUUFBdkIsQ0FBQSxDQUFBO0FBQUEsVUFDQSxJQUFDLENBQUEsU0FBRCxDQUFXLFFBQVgsQ0FEQSxDQUREO0FBQUEsU0FOQTtlQVVBLElBQUMsQ0FBQSxLQUFELENBQUEsRUFYTTtNQUFBLENBTlAsQ0FBQTs7QUFBQSw0QkFtQkEsYUFB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Iiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lKFtdLCAoKSAtPlxuXHRjbGFzcyBGcmFtZUJ1ZmZlclxuXHRcdGNvbnN0cnVjdG9yOiAoQGNhbnZhcykgLT5cblx0XHRcdEB3aWR0aCA9IEBjYW52YXMuY2FudmFzLndpZHRoXG5cdFx0XHRAaGVpZ2h0ID0gQGNhbnZhcy5jYW52YXMuaGVpZ2h0XG5cdFx0XHRAaW1hZ2VEYXRhID0gbnVsbFxuXHRcdFx0QHpidWZmZXIgPSBudWxsXG5cblx0XHR3cml0ZTogKGZyYWdtZW50cykgLT5cblx0XHRcdGlmIG5vdCBAaW1hZ2VEYXRhP1xuXHRcdFx0XHRAaW1hZ2VEYXRhID0gQGNhbnZhcy5nZXRJbWFnZURhdGEoMCwwLCBAd2lkdGgsIEBoZWlnaHQpXG5cblx0XHRcdGlmIG5vdCBAemJ1ZmZlcj9cblx0XHRcdFx0QGNyZWF0ZVpCdWZmZXIoKVxuXG5cdFx0XHRmb3IgZnJhZ21lbnQgaW4gZnJhZ21lbnRzXG5cdFx0XHRcdEBfdHJhbnNmb3JtQ2FudmFzQ29vcmQoZnJhZ21lbnQpXG5cdFx0XHRcdEBfcHV0UGl4ZWwoZnJhZ21lbnQpXG5cdFx0XG5cdFx0XHRAZmx1c2goKVxuXG5cdFx0Y3JlYXRlWkJ1ZmZlcjogKCkgLT5cblx0XHRcdCMgWuODkOODg+ODleOCoeOBruWItuW6puOBrzMyYml044Go44GZ44KLXG5cdFx0XHRidWYgPSBuZXcgQXJyYXlCdWZmZXIoQHdpZHRoICogQGhlaWdodCAqIDQpXG5cdFx0XHRAemJ1ZmZlciA9IG5ldyBGbG9hdDMyQXJyYXkoYnVmKVxuXHRcdFx0Zm9yIGkgaW4gWzAuLkB6YnVmZmVyLmxlbmd0aF1cblx0XHRcdFx0QHpidWZmZXJbaV0gPSAyNTYgKyAyNTYgPDwgNCArIDI1NiA8PCA4XG5cblx0XHRjbGVhcjogKHN0eWxlVGV4dCkgLT5cblx0XHRcdEBjYW52YXMuZmlsbFN0eWxlID0gc3R5bGVUZXh0XG5cdFx0XHRAY2FudmFzLmZpbGxSZWN0KDAsIDAsIEB3aWR0aCwgQGhlaWdodClcblx0XHRcdEB6YnVmZmVyID0gbnVsbFxuXHRcdFx0QGltYWdlRGF0YSA9IG51bGxcblxuXHRcdGZsdXNoOiAoKSAtPlxuXHRcdFx0QGNhbnZhcy5wdXRJbWFnZURhdGEoQGltYWdlRGF0YSwgMCwgMClcblxuXHRcdF9wdXRQaXhlbDogKGZyYWdtZW50KS0+XG5cdFx0XHRbeCx5LHpdID0gZnJhZ21lbnQuZ2xfUG9zaXRpb25cblx0XHRcdGRhdGEgPSBAaW1hZ2VEYXRhLmRhdGFcblx0XHRcdHJnYmEgPSAoYSoyNTUgZm9yIGEgaW4gZnJhZ21lbnQuZ2xfRnJhZ0NvbG9yKVxuXG5cdFx0XHR5ID0gQGhlaWdodCAtIHkgIyB56Lu444KS5Y+N6Lui44GZ44KLXG5cblx0XHRcdG9mZnNldCA9IHkgKiBAd2lkdGggKyB4XG5cdFx0XHRieXRlT2Zmc2V0ID0gb2Zmc2V0ICogNFxuXG5cdFx0XHQjIFrjg5Djg4Pjg5XjgqHjga7mm7jjgY3ovrzjgb/jgajjg4bjgrnjg4hcblx0XHRcdGlmIChAemJ1ZmZlcltvZmZzZXRdIDwgeilcblx0XHRcdFx0cmV0dXJuXG5cblx0XHRcdEB6YnVmZmVyW29mZnNldF0gPSB6XG5cblx0XHRcdGZvciBpIGluIFswLi4zXVxuXHRcdFx0XHRAaW1hZ2VEYXRhLmRhdGFbYnl0ZU9mZnNldCArIGldID0gcmdiYVtpXVxuXG5cdFx0IyDmnIDlvozjgavjgrnjgq/jg6rjg7zjg7PluqfmqJnjgpJDYW52YXPjga7luqfmqJnjgavlpInmj5vjgZnjgotcblx0XHRfdHJhbnNmb3JtQ2FudmFzQ29vcmQ6IChmcmFnbWVudCkgLT5cblx0XHRcdFt4LHksel0gPSBmcmFnbWVudC5nbF9Qb3NpdGlvblxuXHRcdFx0ZnJhZ21lbnQuZ2xfUG9zaXRpb24gPSBbeCArIEB3aWR0aCAvIDIsIHkgKyBAaGVpZ2h0IC8gMiwgel1cbilcbiJdfQ==;
(function() {
  var __slice = [].slice,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define('renderer/Triangle',["prelude"], function(prelude) {
    var Triangle, add4_, area, cross, max, max3, min, min3, perspectiveDivision, scale4, sub, viewportTransform;
    min = prelude.min;
    max = prelude.max;
    min3 = function(a, b, c) {
      return min(min(a, b), c);
    };
    max3 = function(a, b, c) {
      return max(max(a, b), c);
    };
    sub = function(a, b) {
      return vec3.sub(vec3.create(), a, b);
    };
    cross = function(a, b) {
      return vec3.cross(vec3.create(), a, b);
    };
    add4_ = function() {
      var args, i, ret, _i, _ref;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      ret = args[0];
      for (i = _i = 1, _ref = args.length - 1; 1 <= _ref ? _i <= _ref : _i >= _ref; i = 1 <= _ref ? ++_i : --_i) {
        vec4.add(ret, ret, args[i]);
      }
      return ret;
    };
    scale4 = function(a, b) {
      return vec4.scale(vec4.create(), a, b);
    };
    perspectiveDivision = function(_arg) {
      var a, b, c, d;
      a = _arg[0], b = _arg[1], c = _arg[2], d = _arg[3];
      return [a / d, b / d, c / d];
    };
    viewportTransform = function(_arg, width, height, near, far) {
      var x, y, z;
      x = _arg[0], y = _arg[1], z = _arg[2];
      near = 0.1;
      far = 100;
      return [Math.floor(x * width / 2), Math.floor(y * height / 2), Math.floor(z * (far - near) / 2 + (far + near) / 2)];
    };
    area = function(a, b, c) {
      var s;
      s = a[0] * b[1] + b[0] * c[1] + c[0] * a[1] - a[1] * b[0] - b[1] * c[0] - c[1] * a[0];
      return Math.abs(s / 2);
    };
    return Triangle = (function() {
      function Triangle(primitive, width, height) {
        var v, _ref;
        this.primitive = primitive;
        this.width = width;
        this.height = height;
        this.getLinearCompletion = __bind(this.getLinearCompletion, this);
        this.isPointInTriangle = __bind(this.isPointInTriangle, this);
        if (3 !== this.primitive.length) {
          throw new "attributeArray length error";
        }
        this.c = this.getClippingCoord();
        this.ndc = (function() {
          var _i, _len, _ref, _results;
          _ref = this.c;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            v = _ref[_i];
            _results.push(perspectiveDivision(v));
          }
          return _results;
        }).call(this);
        this.s = (function() {
          var _i, _len, _ref, _results;
          _ref = this.ndc;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            v = _ref[_i];
            _results.push(viewportTransform(v, this.width, this.height));
          }
          return _results;
        }).call(this);
        _ref = this.getBoundingRect(), this.minX = _ref[0], this.minY = _ref[1], this.maxX = _ref[2], this.maxY = _ref[3];
        this.e01 = sub(this.s[1], this.s[0]);
        this.e12 = sub(this.s[2], this.s[1]);
        this.e20 = sub(this.s[0], this.s[2]);
        this.S = area(this.s[0], this.s[1], this.s[2]);
      }

      Triangle.prototype.rasterize = function() {
        var fragment, fragmentCoords, fragments, name, ndc, ret, x, y, _i, _len;
        fragmentCoords = prelude.concat((function() {
          var _i, _ref, _ref1, _results;
          _results = [];
          for (x = _i = _ref = this.minX, _ref1 = this.maxX; _ref <= _ref1 ? _i <= _ref1 : _i >= _ref1; x = _ref <= _ref1 ? ++_i : --_i) {
            _results.push((function() {
              var _j, _ref2, _ref3, _results1;
              _results1 = [];
              for (y = _j = _ref2 = this.minY, _ref3 = this.maxY; _ref2 <= _ref3 ? _j <= _ref3 : _j >= _ref3; y = _ref2 <= _ref3 ? ++_j : --_j) {
                _results1.push([x, y, 0]);
              }
              return _results1;
            }).call(this));
          }
          return _results;
        }).call(this));
        fragments = prelude.map(prelude.filter(fragmentCoords, this.isPointInTriangle), this.getLinearCompletion);
        for (_i = 0, _len = fragments.length; _i < _len; _i++) {
          fragment = fragments[_i];
          ndc = perspectiveDivision(fragment.gl_Position);
          fragment.gl_Position = viewportTransform(ndc, this.width, this.height);
        }
        ret = {};
        for (name in this.primitive[0]) {
          ret[name] = prelude.map(fragments, function(f) {
            return f[name];
          });
        }
        return ret;
      };

      Triangle.prototype.isInsideViewFrustrum = function() {
        var ret;
        ret = prelude.any(this.c, function(c) {
          return -c[3] < c[0] && c[0] < c[3] && -c[3] < c[1] && c[1] < c[3] && -c[3] < c[2] && c[2] < c[3];
        });
        return ret;
      };

      Triangle.prototype.getClippingCoord = function() {
        var attr, _i, _len, _ref, _results;
        _ref = this.primitive;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          attr = _ref[_i];
          _results.push(attr.gl_Position);
        }
        return _results;
      };

      Triangle.prototype.getBoundingRect = function() {
        var maxX, maxY, minX, minY;
        minX = min3(this.s[0][0], this.s[1][0], this.s[2][0]);
        minY = min3(this.s[0][1], this.s[1][1], this.s[2][1]);
        maxX = max3(this.s[0][0], this.s[1][0], this.s[2][0]);
        maxY = max3(this.s[0][1], this.s[1][1], this.s[2][1]);
        minX = max(Math.floor(minX), -this.width / 2);
        minY = max(Math.floor(minY), -this.height / 2);
        maxX = min(Math.floor(maxX), this.width / 2);
        maxY = min(Math.floor(maxY), this.height / 2);
        return [minX, minY, maxX, maxY];
      };

      Triangle.prototype.isFront = function() {
        var a, b, c, _ref;
        _ref = this.c, a = _ref[0], b = _ref[1], c = _ref[2];
        return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]) < 0;
      };

      Triangle.prototype.isPointInTriangle = function(p) {
        var d, e0p, e1p, e2p;
        e0p = sub(p, this.s[0]);
        e1p = sub(p, this.s[1]);
        e2p = sub(p, this.s[2]);
        d = [cross(e0p, this.e01), cross(e1p, this.e12), cross(e2p, this.e20)];
        return d[0][2] >= 0 && d[1][2] >= 0 && d[2][2] >= 0;
      };

      Triangle.prototype.getLinearCompletion = function(p) {
        var a, attr, b, c, denom, f, name, ret, s, w;
        s = [area(p, this.s[1], this.s[2]), area(p, this.s[2], this.s[0]), area(p, this.s[0], this.s[1])];
        a = s[0] / this.S;
        b = s[1] / this.S;
        c = s[2] / this.S;
        ret = {};
        for (name in this.primitive[0]) {
          w = [a / this.primitive[0][name][3], b / this.primitive[1][name][3], c / this.primitive[2][name][3]];
          denom = w[0] + w[1] + w[2];
          attr = [this.primitive[0][name], this.primitive[1][name], this.primitive[2][name]];
          f = scale4(add4_(scale4(attr[0], w[0]), scale4(attr[1], w[1]), scale4(attr[2], w[2])), denom);
          ret[name] = f;
        }
        return ret;
      };

      return Triangle;

    })();
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVyL1RyaWFuZ2xlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQUE7c0ZBQUE7O0FBQUEsRUFBQSxNQUFBLENBQU8sQ0FDSCxTQURHLENBQVAsRUFFTyxTQUNILE9BREcsR0FBQTtBQUdILFFBQUEsdUdBQUE7QUFBQSxJQUFBLEdBQUEsR0FBTSxPQUFPLENBQUMsR0FBZCxDQUFBO0FBQUEsSUFDQSxHQUFBLEdBQU0sT0FBTyxDQUFDLEdBRGQsQ0FBQTtBQUFBLElBRUEsSUFBQSxHQUFPLFNBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEdBQUE7YUFBVyxHQUFBLENBQUksR0FBQSxDQUFJLENBQUosRUFBTSxDQUFOLENBQUosRUFBYSxDQUFiLEVBQVg7SUFBQSxDQUZQLENBQUE7QUFBQSxJQUdBLElBQUEsR0FBTyxTQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxHQUFBO2FBQVcsR0FBQSxDQUFJLEdBQUEsQ0FBSSxDQUFKLEVBQU0sQ0FBTixDQUFKLEVBQWEsQ0FBYixFQUFYO0lBQUEsQ0FIUCxDQUFBO0FBQUEsSUFJQSxHQUFBLEdBQU0sU0FBQyxDQUFELEVBQUcsQ0FBSCxHQUFBO2FBQVMsSUFBSSxDQUFDLEdBQUwsQ0FBUyxJQUFJLENBQUMsTUFBTCxDQUFBLENBQVQsRUFBd0IsQ0FBeEIsRUFBMkIsQ0FBM0IsRUFBVDtJQUFBLENBSk4sQ0FBQTtBQUFBLElBS0EsS0FBQSxHQUFRLFNBQUMsQ0FBRCxFQUFHLENBQUgsR0FBQTthQUFTLElBQUksQ0FBQyxLQUFMLENBQVcsSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFYLEVBQTBCLENBQTFCLEVBQTZCLENBQTdCLEVBQVQ7SUFBQSxDQUxSLENBQUE7QUFBQSxJQU1BLEtBQUEsR0FBUSxTQUFBLEdBQUE7QUFDSixVQUFBLHNCQUFBO0FBQUEsTUFESyw4REFDTCxDQUFBO0FBQUEsTUFBQSxHQUFBLEdBQU0sSUFBSyxDQUFBLENBQUEsQ0FBWCxDQUFBO0FB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QUFBLENBQUEsQ0FBRyxDQUFBLElBQUEsQ0FBTSxDQUFBLENBQUEsQ0FIdEIsQ0FBSixDQUFBO0FBQUEsVUFNQSxLQUFBLEdBQVEsQ0FBRSxDQUFBLENBQUEsQ0FBRixHQUFPLENBQUUsQ0FBQSxDQUFBLENBQVQsR0FBYyxDQUFFLENBQUEsQ0FBQSxDQU54QixDQUFBO0FBQUEsVUFRQSxJQUFBLEdBQU8sQ0FBQyxJQUFDLENBQUEsU0FBVSxDQUFBLENBQUEsQ0FBRyxDQUFBLElBQUEsQ0FBZixFQUFzQixJQUFDLENBQUEsU0FBVSxDQUFBLENBQUEsQ0FBRyxDQUFBLElBQUEsQ0FBcEMsRUFBMkMsSUFBQyxDQUFBLFNBQVUsQ0FBQSxDQUFBLENBQUcsQ0FBQSxJQUFBLENBQXpELENBUlAsQ0FBQTtBQUFBLFVBU0EsQ0FBQSxHQUFJLE1BQUEsQ0FBTyxLQUFBLENBQ1AsTUFBQSxDQUFPLElBQUssQ0FBQSxDQUFBLENBQVosRUFBZ0IsQ0FBRSxDQUFBLENBQUEsQ0FBbEIsQ0FETyxFQUVQLE1BQUEsQ0FBTyxJQUFLLENBQUEsQ0FBQSxDQUFaLEVBQWdCLENBQUUsQ0FBQSxDQUFBLENBQWxCLENBRk8sRUFHUCxNQUFBLENBQU8sSUFBSyxDQUFBLENBQUEsQ0FBWixFQUFnQixDQUFFLENBQUEsQ0FBQSxDQUFsQixDQUhPLENBQVAsRUFJRCxLQUpDLENBVEosQ0FBQTtBQUFBLFVBY0EsR0FBSSxDQUFBLElBQUEsQ0FBSixHQUFZLENBZFosQ0FGSjtBQUFBLFNBWEE7QUE0QkEsZUFBTyxHQUFQLENBN0JpQjtNQUFBLENBdEZyQixDQUFBOztzQkFBQTs7U0EzQ0Q7RUFBQSxDQUZQLENBQUEsQ0FBQTtBQUFBIiwiZmlsZSI6InJlbmRlcmVyL1RyaWFuZ2xlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lIFtcbiAgICBcInByZWx1ZGVcIlxuICAgIF0sIChcbiAgICBwcmVsdWRlXG4gICAgKSAtPlxuICAgIG1pbiA9IHByZWx1ZGUubWluXG4gICAgbWF4ID0gcHJlbHVkZS5tYXhcbiAgICBtaW4zID0gKGEsYixjKSAtPiBtaW4obWluKGEsYiksYylcbiAgICBtYXgzID0gKGEsYixjKSAtPiBtYXgobWF4KGEsYiksYylcbiAgICBzdWIgPSAoYSxiKSAtPiB2ZWMzLnN1Yih2ZWMzLmNyZWF0ZSgpLCBhLCBiKVxuICAgIGNyb3NzID0gKGEsYikgLT4gdmVjMy5jcm9zcyh2ZWMzLmNyZWF0ZSgpLCBhLCBiKVxuICAgIGFkZDRfID0gKGFyZ3MuLi4pIC0+XG4gICAgICAgIHJldCA9IGFyZ3NbMF1cbiAgICAgICAgZm9yIGkgaW4gWzEuLmFyZ3MubGVuZ3RoLTFdXG4gICAgICAgICAgICB2ZWM0LmFkZChyZXQsIHJldCwgYXJnc1tpXSlcbiAgICAgICAgcmV0dXJuIHJldFxuICAgIHNjYWxlNCA9IChhLGIpIC0+IHZlYzQuc2NhbGUodmVjNC5jcmVhdGUoKSwgYSwgYilcblxuICAgICMg6YCP6KaW6Zmk566XXG4gICAgIyDjgq/jg6rjg4Pjg5Tjg7PjgrDluqfmqJnjgYvjgonmraPopo/ljJbjg4fjg5DjgqTjgrnluqfmqJnjgpLoqIjnrpdcbiAgICAjIGh0dHA6Ly9vc2hpcm8uYnBlLmVzLm9zYWthLXUuYWMuanAvcGVvcGxlL3N0YWZmL2ltdXJhL2NvbXB1dGVyL09wZW5HTC9jb29yZGluYXRlcy9kaXNwX2NvbnRlbnRcbiAgICAjIGh0dHA6Ly9xcHAuYml0YnVja2V0Lm9yZy90cmFuc2xhdGlvbi9tYXhpbWl6aW5nX2RlcHRoX2J1ZmZlcl9yYW5nZV9hbmQvXG4gICAgcGVyc3BlY3RpdmVEaXZpc2lvbiA9IChbYSxiLGMsZF0pIC0+XG4gICAgICAgIFthL2QsIGIvZCwgYy9kXVxuXG4gICAgIyDjg5Pjg6Xjg7zjg53jg7zjg4jlpInmj5tcbiAgICAjIOato+imj+WMluODh+ODkOOCpOOCueW6p+aomeOBi+OCieOCueOCr+ODquODvOODs+W6p+aomeOCkuioiOeul1xuICAgIHZpZXdwb3J0VHJhbnNmb3JtID0gKFt4LHksel0sIHdpZHRoLCBoZWlnaHQsIG5lYXIsIGZhcikgLT5cbiAgICAgICAgIyBUT0RPXG4gICAgICAgIG5lYXIgPSAwLjFcbiAgICAgICAgZmFyID0gMTAwXG5cbiAgICAgICAgW1xuICAgICAgICAgICAgTWF0aC5mbG9vcih4KndpZHRoLzIpLFxuICAgICAgICAgICAgTWF0aC5mbG9vcih5KmhlaWdodC8yKSxcbiAgICAgICAgICAgIE1hdGguZmxvb3IoeiooZmFyIC0gbmVhcikvMiArIChmYXIgKyBuZWFyKS8yKVxuICAgICAgICBdXG5cbiAgICAjIOmggueCuWEsYixj44Gr5Zuy44G+44KM44Gf6Z2i56mN44KS6KiI566X44GZ44KL44CCXG4gICAgYXJlYSA9IChhLGIsYykgLT5cbiAgICAgICAgIyAgICAgYXJlYShbLTIsIDNdLCBbLTMsIC0xXSwgWzMsIC0yXSkgPT0gMTIuNeOBp+ato+OBl+OBhOOBk+OBqOOCkueiuuiqjVxuICAgICAgICBzID0gYVswXSpiWzFdICsgYlswXSpjWzFdICsgY1swXSphWzFdIC0gYVsxXSpiWzBdIC0gYlsxXSpjWzBdIC0gY1sxXSphWzBdXG4gICAgICAgIE1hdGguYWJzKHMvMilcblxuICAgIGNsYXNzIFRyaWFuZ2xlXG4gICAgICAgIGNvbnN0cnVjdG9yOiAoQHByaW1pdGl2ZSwgQHdpZHRoLCBAaGVpZ2h0KSAtPlxuICAgICAgICAgICAgaWYgMyAhPSBAcHJpbWl0aXZlLmxlbmd0aFxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBcImF0dHJpYnV0ZUFycmF5IGxlbmd0aCBlcnJvclwiXG5cbiAgICAgICAgICAgIEBjID0gQGdldENsaXBwaW5nQ29vcmQoKVxuICAgICAgICAgICAgQG5kYyA9IChwZXJzcGVjdGl2ZURpdmlzaW9uKHYpIGZvciB2IGluIEBjKVxuICAgICAgICAgICAgQHMgPSAodmlld3BvcnRUcmFuc2Zvcm0odiwgQHdpZHRoLCBAaGVpZ2h0KSBmb3IgdiBpbiBAbmRjKVxuXG4gICAgICAgICAgICAjIOS4ieinkuW9ouOBq+WkluaOpeOBmeOCi+mVt+aWueW9ouOBruW6p+aomVxuICAgICAgICAgICAgW0BtaW5YLCBAbWluWSwgQG1heFgsIEBtYXhZXSA9IEBnZXRCb3VuZGluZ1JlY3QoKVxuXG4gICAgICAgICAgICAjIOWQhOi+uuOCkuihqOOBmeODmeOCr+ODiOODq1xuICAgICAgICAgICAgQGUwMSA9IHN1YihAc1sxXSwgQHNbMF0pXG4gICAgICAgICAgICBAZTEyID0gc3ViKEBzWzJdLCBAc1sxXSlcbiAgICAgICAgICAgIEBlMjAgPSBzdWIoQHNbMF0sIEBzWzJdKVxuXG4gICAgICAgICAgICAjIOOBk+OBruS4ieinkuW9ouOBrumdouepjVxuICAgICAgICAgICAgQFMgPSBhcmVhKEBzWzBdLCBAc1sxXSwgQHNbMl0pXG5cbiAgICAgICAgcmFzdGVyaXplOiAtPlxuICAgICAgICAgICAgZnJhZ21lbnRDb29yZHMgPSBwcmVsdWRlLmNvbmNhdChcbiAgICAgICAgICAgICAgICAoW3gseSwwXSBmb3IgeSBpbiBbQG1pblkuLkBtYXhZXSBmb3IgeCBpbiBbQG1pblguLkBtYXhYXSkpXG5cbiAgICAgICAgICAgIGZyYWdtZW50cyA9IHByZWx1ZGUubWFwKFxuICAgICAgICAgICAgICAgICAgICBwcmVsdWRlLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50Q29vcmRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpc1BvaW50SW5UcmlhbmdsZSksXG4gICAgICAgICAgICAgICAgICAgIEBnZXRMaW5lYXJDb21wbGV0aW9uKVxuXG4gICAgICAgICAgICAjIOijnOWujOOBleOCjOOBn+OCr+ODquODg+ODl+W6p+aomeOCkuOCpuOCo+ODs+ODieOCpuW6p+aomeOBq+WkieaPm+OBmeOCi1xuICAgICAgICAgICAgZm9yIGZyYWdtZW50IGluIGZyYWdtZW50c1xuICAgICAgICAgICAgICAgIG5kYyA9IHBlcnNwZWN0aXZlRGl2aXNpb24oZnJhZ21lbnQuZ2xfUG9zaXRpb24pXG4gICAgICAgICAgICAgICAgZnJhZ21lbnQuZ2xfUG9zaXRpb24gPSB2aWV3cG9ydFRyYW5zZm9ybShuZGMsIEB3aWR0aCwgQGhlaWdodClcblxuICAgICAgICAgICAgcmV0ID0ge31cbiAgICAgICAgICAgIGZvciBuYW1lIG9mIEBwcmltaXRpdmVbMF1cbiAgICAgICAgICAgICAgICByZXRbbmFtZV0gPSBwcmVsdWRlLm1hcChmcmFnbWVudHMsIChmKSAtPiBmW25hbWVdKVxuICAgICAgICAgICAgcmV0dXJuIHJldFxuXG4gICAgICAgIGlzSW5zaWRlVmlld0ZydXN0cnVtOiAtPlxuICAgICAgICAgICAgcmV0ID0gcHJlbHVkZS5hbnkoQGMsIChjKSAtPlxuICAgICAgICAgICAgICAgIC1jWzNdIDwgY1swXSBhbmQgY1swXSA8IGNbM10gYW5kXG4gICAgICAgICAgICAgICAgLWNbM10gPCBjWzFdIGFuZCBjWzFdIDwgY1szXSBhbmRcbiAgICAgICAgICAgICAgICAtY1szXSA8IGNbMl0gYW5kIGNbMl0gPCBjWzNdXG4gICAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gcmV0XG5cbiAgICAgICAgZ2V0Q2xpcHBpbmdDb29yZDogKCkgLT5cbiAgICAgICAgICAgIGF0dHIuZ2xfUG9zaXRpb24gZm9yIGF0dHIgaW4gQHByaW1pdGl2ZVxuXG4gICAgICAgIGdldEJvdW5kaW5nUmVjdDogLT5cbiAgICAgICAgICAgICMgQ29tcHV0ZSB0cmlhbmdsZSBib3VuZGluZyBib3hcbiAgICAgICAgICAgIG1pblggPSBtaW4zKEBzWzBdWzBdLCBAc1sxXVswXSwgQHNbMl1bMF0pXG4gICAgICAgICAgICBtaW5ZID0gbWluMyhAc1swXVsxXSwgQHNbMV1bMV0sIEBzWzJdWzFdKVxuICAgICAgICAgICAgbWF4WCA9IG1heDMoQHNbMF1bMF0sIEBzWzFdWzBdLCBAc1syXVswXSlcbiAgICAgICAgICAgIG1heFkgPSBtYXgzKEBzWzBdWzFdLCBAc1sxXVsxXSwgQHNbMl1bMV0pXG5cbiAgICAgICAgICAgICMgQ2xpcCBhZ2FpbnN0IHNjcmVlbiBib3VuZHNcbiAgICAgICAgICAgIG1pblggPSBtYXgoTWF0aC5mbG9vcihtaW5YKSwgLUB3aWR0aC8yKVxuICAgICAgICAgICAgbWluWSA9IG1heChNYXRoLmZsb29yKG1pblkpLCAtQGhlaWdodC8yKVxuICAgICAgICAgICAgbWF4WCA9IG1pbihNYXRoLmZsb29yKG1heFgpLCBAd2lkdGgvMilcbiAgICAgICAgICAgIG1heFkgPSBtaW4oTWF0aC5mbG9vcihtYXhZKSwgQGhlaWdodC8yKVxuICAgICAgICAgICAgcmV0dXJuIFttaW5YLCBtaW5ZLCBtYXhYLCBtYXhZXVxuXG4gICAgICAgICMg5LiJ6KeS5b2iYSxiLGPjga7lkJHjgY3jgpLliKTlrprjgIJcbiAgICAgICAgIyBodHRwOi8veWFtYXR5dXUubmV0L2NvbXB1dGVyL3Byb2dyYW0vYWxnb3JpdGhtL3RyaWFuZ2xlX2Nyb3NzLnBkZlxuICAgICAgICAjIFRPRE86IOODkOOCsOOBjOOBguOCi+OBo+OBveOBhFxuICAgICAgICBpc0Zyb250OiAtPlxuICAgICAgICAgICAgW2EsYixjXSA9IEBjXG4gICAgICAgICAgICAoYlswXS1hWzBdKSooY1sxXS1hWzFdKSAtIChiWzFdLWFbMV0pKihjWzBdLWFbMF0pIDwgMFxuXG4gICAgICAgICMg5bqn5qiZ44GM5LiJ6KeS5b2i5YaF6YOo44Gr44GC44KL44GL5Yik5a6a44GZ44KLXG4gICAgICAgIGlzUG9pbnRJblRyaWFuZ2xlOiAocCkgPT5cbiAgICAgICAgICAgICMg54K544GM5LiJ6KeS5b2i44Gr5YyF5ZCr44GV44KM44Gm44GE44KL44GL44Gp44GG44GL44Gv5aSW56mN44KS5L2/44Gj44Gm5Yik5a6a44GZ44KL44CCXG4gICAgICAgICAgICAjIGh0dHA6Ly93d3cuc291c2FrdWJhLmNvbS9Qcm9ncmFtbWluZy9nc19oaXR0ZXN0X3BvaW50X3RyaWFuZ2xlLmh0bWxcbiAgICAgICAgICAgIGUwcCA9IHN1YihwLCBAc1swXSlcbiAgICAgICAgICAgIGUxcCA9IHN1YihwLCBAc1sxXSlcbiAgICAgICAgICAgIGUycCA9IHN1YihwLCBAc1syXSlcblxuICAgICAgICAgICAgZCA9IFtjcm9zcyhlMHAsIEBlMDEpLFxuICAgICAgICAgICAgICAgIGNyb3NzKGUxcCwgQGUxMiksXG4gICAgICAgICAgICAgICAgY3Jvc3MoZTJwLCBAZTIwKV1cbiAgICAgICAgICAgIHJldHVybiBkWzBdWzJdID49IDAgJiYgZFsxXVsyXSA+PSAwICYmIGRbMl1bMl0gPj0gMFxuXG4gICAgICAgICMg6aCC54K55bGe5oCn44Gu57ea5b2i6KOc5a6M44GV44KM44Gf5YCk44KS6KiI566X44GZ44KLXG4gICAgICAgICMgT3BlbkdM5LuV5qeY5pu444Gr6KiY6LyJ44Gu5byP44KS5a6f6KOFXG4gICAgICAgIGdldExpbmVhckNvbXBsZXRpb246IChwKSA9PlxuICAgICAgICAgICAgcyA9IFtcbiAgICAgICAgICAgICAgICBhcmVhKHAsQHNbMV0sQHNbMl0pLFxuICAgICAgICAgICAgICAgIGFyZWEocCxAc1syXSxAc1swXSksXG4gICAgICAgICAgICAgICAgYXJlYShwLEBzWzBdLEBzWzFdKSxcbiAgICAgICAgICAgIF1cblxuICAgICAgICAgICAgYSA9IHNbMF0vQFNcbiAgICAgICAgICAgIGIgPSBzWzFdL0BTXG4gICAgICAgICAgICBjID0gc1syXS9AU1xuXG4gICAgICAgICAgICByZXQgPSB7fVxuICAgICAgICAgICAgZm9yIG5hbWUgb2YgQHByaW1pdGl2ZVswXVxuICAgICAgICAgICAgICAgICMg6aCC54K55bGe5oCn44Gu57ea5b2i6KOc5a6M44Gr5L2/44GG6YeN44G/XG4gICAgICAgICAgICAgICAgdyA9IFtcbiAgICAgICAgICAgICAgICAgICAgYS9AcHJpbWl0aXZlWzBdW25hbWVdWzNdLFxuICAgICAgICAgICAgICAgICAgICBiL0BwcmltaXRpdmVbMV1bbmFtZV1bM10sXG4gICAgICAgICAgICAgICAgICAgIGMvQHByaW1pdGl2ZVsyXVtuYW1lXVszXVxuICAgICAgICAgICAgICAgIF1cblxuICAgICAgICAgICAgICAgIGRlbm9tID0gd1swXSArIHdbMV0gKyB3WzJdXG5cbiAgICAgICAgICAgICAgICBhdHRyID0gW0BwcmltaXRpdmVbMF1bbmFtZV0sIEBwcmltaXRpdmVbMV1bbmFtZV0sIEBwcmltaXRpdmVbMl1bbmFtZV1dXG4gICAgICAgICAgICAgICAgZiA9IHNjYWxlNChhZGQ0XyhcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU0KGF0dHJbMF0sIHdbMF0pLFxuICAgICAgICAgICAgICAgICAgICBzY2FsZTQoYXR0clsxXSwgd1sxXSksXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlNChhdHRyWzJdLCB3WzJdKVxuICAgICAgICAgICAgICAgICksIGRlbm9tKVxuICAgICAgICAgICAgICAgIHJldFtuYW1lXSA9IGZcbiAgICAgICAgICAgIHJldHVybiByZXRcbiJdfQ==;
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define('renderer/Rasterizer',["prelude", "renderer/Triangle"], function(prelude, Triangle) {
    var Rasterizer;
    return Rasterizer = (function() {
      function Rasterizer(width, height, fragmentShaderUnit) {
        this.width = width;
        this.height = height;
        this.fragmentShaderUnit = fragmentShaderUnit;
        this.rasterize = __bind(this.rasterize, this);
      }

      Rasterizer.prototype.rasterize = function(primitive) {
        var tri;
        tri = new Triangle(primitive, this.width, this.height);
        if (!tri.isInsideViewFrustrum()) {
          return;
        }
        return tri.rasterize();
      };

      return Rasterizer;

    })();
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVyL1Jhc3Rlcml6ZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQSxrRkFBQTs7QUFBQSxFQUFBLE1BQUEsQ0FBTyxDQUNOLFNBRE0sRUFFTixtQkFGTSxDQUFQLEVBR0csU0FDRixPQURFLEVBRUYsUUFGRSxHQUFBO0FBS0YsUUFBQSxVQUFBO1dBQU07QUFDUSxNQUFBLG9CQUFFLEtBQUYsRUFBVSxNQUFWLEVBQW1CLGtCQUFuQixHQUFBO0FBQXdDLFFBQXZDLElBQUMsQ0FBQSxRQUFBLEtBQXNDLENBQUE7QUFBQSxRQUEvQixJQUFDLENBQUEsU0FBQSxNQUE4QixDQUFBO0FBQUEsUUFBdEIsSUFBQyxDQUFBLHFCQUFBLGtCQUFxQixDQUFBO0FBQUEscURBQUEsQ0FBeEM7TUFBQSxDQUFiOztBQUFBLDJCQUVBLFNBQUEsR0FBVyxTQUFDLFNBQUQsR0FBQTtBQUNWLFlBQUEsR0FBQTtBQUFBLFFBQUEsR0FBQSxHQUFVLElBQUEsUUFBQSxDQUFTLFNBQVQsRUFBb0IsSUFBQyxDQUFBLEtBQXJCLEVBQTRCLElBQUMsQ0FBQSxNQUE3QixDQUFWLENBQUE7QUFLQSxRQUFBLElBQUcsQ0FBQSxHQUFJLENBQUMsb0JBQUosQ0FBQSxDQUFKO0FBQ0MsZ0JBQUEsQ0FERDtTQUxBO2VBUUEsR0FBRyxDQUFDLFNBQUosQ0FBQSxFQVRVO01BQUEsQ0FGWCxDQUFBOzt3QkFBQTs7U0FOQztFQUFBLENBSEgsQ0FBQSxDQUFBO0FBQUEiLCJmaWxlIjoicmVuZGVyZXIvUmFzdGVyaXplci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZShbXG5cdFwicHJlbHVkZVwiLFxuXHRcInJlbmRlcmVyL1RyaWFuZ2xlXCJcbl0sIChcblx0cHJlbHVkZSxcblx0VHJpYW5nbGVcblx0KSAtPlxuXG5cdGNsYXNzIFJhc3Rlcml6ZXJcblx0XHRjb25zdHJ1Y3RvcjogKEB3aWR0aCwgQGhlaWdodCwgQGZyYWdtZW50U2hhZGVyVW5pdCkgLT5cblxuXHRcdHJhc3Rlcml6ZTogKHByaW1pdGl2ZSkgPT5cblx0XHRcdHRyaSA9IG5ldyBUcmlhbmdsZShwcmltaXRpdmUsIEB3aWR0aCwgQGhlaWdodClcblxuXHRcdFx0IyBpZiAhdHJpLmlzRnJvbnQoKVxuXHRcdFx0IyBcdHJldHVyblxuXG5cdFx0XHRpZiAhdHJpLmlzSW5zaWRlVmlld0ZydXN0cnVtKClcblx0XHRcdFx0cmV0dXJuXG5cblx0XHRcdHRyaS5yYXN0ZXJpemUoKVxuKVxuIl19;
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define('Renderer',["renderer/VertexShaderUnit", "renderer/FragmentShaderUnit", "renderer/FrameBuffer", "renderer/Rasterizer", "Constants"], function(VertexShaderUnit, FragmentShaderUnit, FrameBuffer, Rasterizer, Constants) {
    var Renderer;
    return Renderer = (function() {
      Renderer.UNIFIED_SHADER_WORKER = "UnifiedShaderWorker.js";

      Renderer.create = function(canvasImpl, width, height) {
        var fragWorker, fragmentShaderUnit, frameBuffer, rasterizer, renderer, vertWorker, vertexShaderUnit;
        vertWorker = new Worker(this.UNIFIED_SHADER_WORKER);
        fragWorker = new Worker(this.UNIFIED_SHADER_WORKER);
        frameBuffer = new FrameBuffer(canvasImpl);
        fragmentShaderUnit = new FragmentShaderUnit(fragWorker);
        rasterizer = new Rasterizer(width, height, fragmentShaderUnit);
        vertexShaderUnit = new VertexShaderUnit(vertWorker);
        vertWorker.addEventListener("message", vertexShaderUnit.onMessage);
        fragWorker.addEventListener("message", fragmentShaderUnit.onMessage);
        renderer = new Renderer(vertexShaderUnit, fragmentShaderUnit, frameBuffer, rasterizer);
        vertexShaderUnit.onProcessed(renderer.onVertexProcessed);
        fragmentShaderUnit.onProcessed(renderer.onFragmentProcessed);
        return renderer;
      };

      function Renderer(vertexShaderUnit, fragmentShaderUnit, frameBuffer, rasterizer) {
        this.vertexShaderUnit = vertexShaderUnit;
        this.fragmentShaderUnit = fragmentShaderUnit;
        this.frameBuffer = frameBuffer;
        this.rasterizer = rasterizer;
        this.onFragmentProcessed = __bind(this.onFragmentProcessed, this);
        this.onVertexProcessed = __bind(this.onVertexProcessed, this);
        this.program = null;
        this.currentTextureUnit = 0;
        this.textureUnit = new Array(Constants.GL_MAX_TEXTURE_UNITS);
      }

      Renderer.prototype.loadProgram = function(program) {
        this.program = program;
        this.vertexShaderUnit.loadShader(this.program.vertexShader);
        return this.fragmentShaderUnit.loadShader(this.program.fragmentShader);
      };

      Renderer.prototype.clear = function(clearColor) {
        return this.frameBuffer.clear(clearColor);
      };

      Renderer.prototype.drawArrays = function(mode, first, count) {
        var end, primitive, _i, _len, _ref, _results;
        end = first + count - 1;
        this.vertexShaderUnit.preProcess(this);
        this.fragmentShaderUnit.preProcess(this);
        _ref = this.program.attributeStream.getPrimitiveArray(mode, first, count);
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          primitive = _ref[_i];
          _results.push(this.vertexShaderUnit.process(primitive));
        }
        return _results;
      };

      Renderer.prototype.onVertexProcessed = function(primitive) {
        var fragments, _ref;
        fragments = this.rasterizer.rasterize(primitive);
        if ((fragments != null ? (_ref = fragments.gl_Position) != null ? _ref.length : void 0 : void 0) > 0) {
          return this.fragmentShaderUnit.process(fragments);
        }
      };

      Renderer.prototype.onFragmentProcessed = function(fragments) {
        return this.frameBuffer.write(fragments);
      };

      return Renderer;

    })();
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,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LEtBQUEsR0FBTyxTQUFDLFVBQUQsR0FBQTtlQUNILElBQUMsQ0FBQSxXQUFXLENBQUMsS0FBYixDQUFtQixVQUFuQixFQURHO01BQUEsQ0EzQlAsQ0FBQTs7QUFBQSx5QkFpQ0EsVUFBQSxHQUFZLFNBQUMsSUFBRCxFQUFPLEtBQVAsRUFBYyxLQUFkLEdBQUE7QUFDUixZQUFBLHdDQUFBO0FBQUEsUUFBQSxHQUFBLEdBQU0sS0FBQSxHQUFRLEtBQVIsR0FBZ0IsQ0FBdEIsQ0FBQTtBQUFBLFFBR0EsSUFBQyxDQUFBLGdCQUFnQixDQUFDLFVBQWxCLENBQTZCLElBQTdCLENBSEEsQ0FBQTtBQUFBLFFBSUEsSUFBQyxDQUFBLGtCQUFrQixDQUFDLFVBQXBCLENBQStCLElBQS9CLENBSkEsQ0FBQTtBQVNBO0FBQUE7YUFBQSwyQ0FBQTsrQkFBQTtBQUNJLHdCQUFBLElBQUMsQ0FBQSxnQkFBZ0IsQ0FBQyxPQUFsQixDQUEwQixTQUExQixFQUFBLENBREo7QUFBQTt3QkFWUTtNQUFBLENBakNaLENBQUE7O0FBQUEseUJBOENBLGlCQUFBLEdBQW1CLFNBQUMsU0FBRCxHQUFBO0FBRVgsWUFBQSxlQUFBO0FBQUEsUUFBQSxTQUFBLEdBQVksSUFBQyxDQUFBLFVBQVUsQ0FBQyxTQUFaLENBQXNCLFNBQXRCLENBQVosQ0FBQTtBQUVBLFFBQUEsc0VBQXlCLENBQUUseUJBQXhCLEdBQWlDLENBQXBDO2lCQUNJLElBQUMsQ0FBQSxrQkFBa0IsQ0FBQyxPQUFwQixDQUE0QixTQUE1QixFQURKO1NBSlc7TUFBQSxDQTlDbkIsQ0FBQTs7QUFBQSx5QkFxREEsbUJBQUEsR0FBcUIsU0FBQyxTQUFELEdBQUE7ZUFDYixJQUFDLENBQUEsV0FBVyxDQUFDLEtBQWIsQ0FBbUIsU0FBbkIsRUFEYTtNQUFBLENBckRyQixDQUFBOztzQkFBQTs7U0FWTDtFQUFBLENBTkgsQ0FBQSxDQUFBO0FBQUEiLCJmaWxlIjoiUmVuZGVyZXIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyIjIFJlbmRlcmVyLmNvZmZlZSAtIOOCt+OCp+ODvOODgOODvOOBq+OCiOOCi+ODrOODs+ODgOODquODs+OCsOODkeOCpOODl+ODqeOCpOODs+OBruWun+ijhVxuZGVmaW5lKFtcbiAgICBcInJlbmRlcmVyL1ZlcnRleFNoYWRlclVuaXRcIixcbiAgICBcInJlbmRlcmVyL0ZyYWdtZW50U2hhZGVyVW5pdFwiLFxuICAgIFwicmVuZGVyZXIvRnJhbWVCdWZmZXJcIixcbiAgICBcInJlbmRlcmVyL1Jhc3Rlcml6ZXJcIixcbiAgICBcIkNvbnN0YW50c1wiXG5dLCAoXG4gICAgVmVydGV4U2hhZGVyVW5pdCxcbiAgICBGcmFnbWVudFNoYWRlclVuaXQsXG4gICAgRnJhbWVCdWZmZXIsXG4gICAgUmFzdGVyaXplcixcbiAgICBDb25zdGFudHNcbiAgICApIC0+XG5cbiAgICBjbGFzcyBSZW5kZXJlclxuICAgICAgICAjIFRPRE86IHJlcXVpcmUuanPjgavnj77lnKjjga7jg5HjgrnjgpLlvpfjgovmlrnms5Xjga/jgYLjgovjga7jgaDjgo3jgYbjgYs/XG4gICAgICAgIEBVTklGSUVEX1NIQURFUl9XT1JLRVIgPSBcIlVuaWZpZWRTaGFkZXJXb3JrZXIuanNcIlxuXG4gICAgICAgICMgZmFjdG9yeSBtZXRob2RcbiAgICAgICAgIyDjgZPjga7jg6Ljgrjjg6Xjg7zjg6vjga7jgqrjg5bjgrjjgqfjgq/jg4jjga7mjqXntprjgpLooYzjgYZcbiAgICAgICAgQGNyZWF0ZTogKGNhbnZhc0ltcGwsIHdpZHRoLCBoZWlnaHQpIC0+XG4gICAgICAgICAgICB2ZXJ0V29ya2VyID0gbmV3IFdvcmtlcihAVU5JRklFRF9TSEFERVJfV09SS0VSKVxuICAgICAgICAgICAgZnJhZ1dvcmtlciA9IG5ldyBXb3JrZXIoQFVOSUZJRURfU0hBREVSX1dPUktFUilcbiAgICAgICAgICAgIGZyYW1lQnVmZmVyID0gbmV3IEZyYW1lQnVmZmVyKGNhbnZhc0ltcGwpXG4gICAgICAgICAgICBmcmFnbWVudFNoYWRlclVuaXQgPSBuZXcgRnJhZ21lbnRTaGFkZXJVbml0KGZyYWdXb3JrZXIpXG4gICAgICAgICAgICByYXN0ZXJpemVyID0gbmV3IFJhc3Rlcml6ZXIod2lkdGgsIGhlaWdodCwgZnJhZ21lbnRTaGFkZXJVbml0KVxuICAgICAgICAgICAgdmVydGV4U2hhZGVyVW5pdCA9IG5ldyBWZXJ0ZXhTaGFkZXJVbml0KHZlcnRXb3JrZXIpXG4gICAgICAgICAgICB2ZXJ0V29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHZlcnRleFNoYWRlclVuaXQub25NZXNzYWdlKVxuICAgICAgICAgICAgZnJhZ1dvcmtlci5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBmcmFnbWVudFNoYWRlclVuaXQub25NZXNzYWdlKVxuICAgICAgICAgICAgcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIodmVydGV4U2hhZGVyVW5pdCwgZnJhZ21lbnRTaGFkZXJVbml0LCBmcmFtZUJ1ZmZlciwgcmFzdGVyaXplcilcbiAgICAgICAgICAgIHZlcnRleFNoYWRlclVuaXQub25Qcm9jZXNzZWQocmVuZGVyZXIub25WZXJ0ZXhQcm9jZXNzZWQpXG4gICAgICAgICAgICBmcmFnbWVudFNoYWRlclVuaXQub25Qcm9jZXNzZWQocmVuZGVyZXIub25GcmFnbWVudFByb2Nlc3NlZClcbiAgICAgICAgICAgIHJldHVybiByZW5kZXJlclxuXG4gICAgICAgIGNvbnN0cnVjdG9yOiAoQHZlcnRleFNoYWRlclVuaXQsIEBmcmFnbWVudFNoYWRlclVuaXQsIEBmcmFtZUJ1ZmZlciwgQHJhc3Rlcml6ZXIpIC0+XG4gICAgICAgICAgICBAcHJvZ3JhbSA9IG51bGxcbiAgICAgICAgICAgIEBjdXJyZW50VGV4dHVyZVVuaXQgPSAwXG4gICAgICAgICAgICBAdGV4dHVyZVVuaXQgPSBuZXcgQXJyYXkoQ29uc3RhbnRzLkdMX01BWF9URVhUVVJFX1VOSVRTKSAjIOOBqOOCiuOBguOBiOOBmuODhuOCr+OCueODgeODo+ODpuODi+ODg+ODiOaVsOOBrzhcblxuICAgICAgICBsb2FkUHJvZ3JhbTogKEBwcm9ncmFtKSAtPlxuICAgICAgICAgICAgQHZlcnRleFNoYWRlclVuaXQubG9hZFNoYWRlcihAcHJvZ3JhbS52ZXJ0ZXhTaGFkZXIpXG4gICAgICAgICAgICBAZnJhZ21lbnRTaGFkZXJVbml0LmxvYWRTaGFkZXIoQHByb2dyYW0uZnJhZ21lbnRTaGFkZXIpXG5cbiAgICAgICAgY2xlYXI6IChjbGVhckNvbG9yKSAtPlxuICAgICAgICAgICAgQGZyYW1lQnVmZmVyLmNsZWFyKGNsZWFyQ29sb3IpXG5cbiAgICAgICAgIyBPcGVuR0zmnKzmnaXjga7lh6bnkIbjgajpgZXjgaPjgaZcbiAgICAgICAgIyDphY3liJfjga7jgrPjg5Tjg7zjgpLnlJ/miJDjgZfjgabjgYTjgovjga7jgafjgZPjga7pg6jliIbjga7lh6bnkIbjga/ph43jgYTjga/jgZrjgIJcbiAgICAgICAgIyBUT0RPOiDlnovku5jjgY3phY3liJfjg5Pjg6Xjg7zjgpLkvb/jgaPjgabjgIHjgrPjg5Tjg7zjgZfjgarjgYTphY3liJfmk43kvZzjgpLkvb/jgYZcbiAgICAgICAgZHJhd0FycmF5czogKG1vZGUsIGZpcnN0LCBjb3VudCkgLT5cbiAgICAgICAgICAgIGVuZCA9IGZpcnN0ICsgY291bnQgLSAxXG5cbiAgICAgICAgICAgICMgcHJvY2Vzc+OBr+mdnuWQjOacn+OBquOBruOBp+OAgeOBhOOBo+OBn+OCk+a6luWCmeautemajuOBqOOBl+OBpuWRvOOBs+WHuuOBmVxuICAgICAgICAgICAgQHZlcnRleFNoYWRlclVuaXQucHJlUHJvY2VzcyhAKVxuICAgICAgICAgICAgQGZyYWdtZW50U2hhZGVyVW5pdC5wcmVQcm9jZXNzKEApXG5cbiAgICAgICAgICAgICMg6Z2e5ZCM5pyf5Yem55CG44KS5L2/44Gj44Gm44GE44KL6Zai5L+C44Gn44CB6aCC54K544GU44Go44Gr5YiG44GR44Gm5rih44GZ44KI44KK44KCXG4gICAgICAgICAgICAjIOODl+ODquODn+ODhuOCo+ODluOCkuS4uOOBlOOBqOmAgeOBo+OBn+aWueOBjOOCiOOBhFxuICAgICAgICAgICAgIyDpoILngrnjgrfjgqfjg7zjg4DjgpLpgJrjgZfjgZ/lvozjga7jg5fjg6rjg5/jg4bjgqPjg5bjga7lho3mp4vnr4njgYzjgoHjgpPjganjgY/jgZXjgZ3jgYbjgarjga7jgaZcbiAgICAgICAgICAgIGZvciBwcmltaXRpdmUgaW4gQHByb2dyYW0uYXR0cmlidXRlU3RyZWFtLmdldFByaW1pdGl2ZUFycmF5KG1vZGUsIGZpcnN0LCBjb3VudClcbiAgICAgICAgICAgICAgICBAdmVydGV4U2hhZGVyVW5pdC5wcm9jZXNzKHByaW1pdGl2ZSlcblxuICAgICAgICBvblZlcnRleFByb2Nlc3NlZDogKHByaW1pdGl2ZSkgPT5cbiAgICAgICAgICAgICAgICAjIGNvbnNvbGUubG9nKHByaW1pdGl2ZSlcbiAgICAgICAgICAgICAgICBmcmFnbWVudHMgPSBAcmFzdGVyaXplci5yYXN0ZXJpemUocHJpbWl0aXZlKVxuICAgICAgICAgICAgICAgICMgY29uc29sZS5sb2coZnJhZ21lbnRzKVxuICAgICAgICAgICAgICAgIGlmIGZyYWdtZW50cz8uZ2xfUG9zaXRpb24/Lmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgQGZyYWdtZW50U2hhZGVyVW5pdC5wcm9jZXNzKGZyYWdtZW50cylcblxuICAgICAgICBvbkZyYWdtZW50UHJvY2Vzc2VkOiAoZnJhZ21lbnRzKSA9PlxuICAgICAgICAgICAgICAgIEBmcmFtZUJ1ZmZlci53cml0ZShmcmFnbWVudHMpXG4gICAgKVxuIl19;
(function() {
  define('Context',["Color", "Program", "Buffer", "Texture", "Renderer", "IllegalArgumentException"], function(Color, Program, Buffer, Texture, Renderer, IllegalArgumentException) {
    var Context;
    return Context = (function() {
      Context.create = function(htmlCanvas) {
        var canvasImpl, height, width;
        canvasImpl = htmlCanvas.getContext("2d");
        width = htmlCanvas.width;
        height = htmlCanvas.height;
        return new Context(canvasImpl, Renderer.create(canvasImpl, width, height));
      };

      function Context(canvasContext, renderer) {
        this.canvasContext = canvasContext;
        this.renderer = renderer;
        this.canvas = this.canvasContext.canvas;
        this.clearColorStyle = "rgb(0, 0, 0, 1)";
        this.programs = [];
        this.buffers = [];
        this.currentBuffer = null;
        this.textures = [];
        this.currentTextureUnitIndex = 0;
      }

      Context.prototype.toString = function() {
        return "cheepGL Context[" + this.canvasContext + "]";
      };

      Context.prototype.clearColor = function(r, g, b, a) {
        return this.clearColorStyle = "rgb(" + r + ", " + g + ", " + b + ", " + a + ")";
      };

      Context.prototype.clear = function() {
        return this.renderer.clear(this.clearColorStyle);
      };

      Context.prototype.createProgram = function(vert, frag) {
        var programId;
        if (typeof vert !== "string") {
          throw new IllegalArgumentException("vert");
        }
        if (typeof frag !== "string") {
          throw new IllegalArgumentException("frag");
        }
        programId = this.programs.length;
        this.programs.push(new Program(vert, frag));
        return programId;
      };

      Context.prototype.useProgram = function(programId) {
        return this.renderer.loadProgram(this.programs[programId]);
      };

      Context.prototype.createBuffer = function() {
        var bufferId;
        bufferId = this.buffers.length;
        this.buffers.push(new Buffer(bufferId));
        return bufferId;
      };

      Context.prototype.bindBuffer = function(bufferType, bufferId) {
        return this.currentBuffer = this.buffers[bufferId];
      };

      Context.prototype.bufferData = function(bufferType, data) {
        return this.currentBuffer.data = data;
      };

      Context.prototype.activeTexture = function(index) {
        return this.currentTextureUnitIndex = index;
      };

      Context.prototype.createTexture = function() {
        var textureId;
        textureId = this.textures.length;
        this.textures.push(new Texture());
        return textureId;
      };

      Context.prototype.bindTexture = function(textureType, textureId) {
        var texture;
        texture = this.textures[textureId];
        return this._currentTexture(texture);
      };

      Context.prototype.texImage2D = function(mode, texture) {
        return this._currentTexture().loadImage(texture);
      };

      Context.prototype.vertexAttribPointer = function(programId, attributeName, stride) {
        var program;
        program = this.programs[programId];
        return program.bindBuffer(attributeName, this.currentBuffer, stride);
      };

      Context.prototype.uniform = function(programId, uniformName, data) {
        var program;
        program = this.programs[programId];
        return program.uniform(uniformName, data);
      };

      Context.prototype.drawArrays = function(mode, first, count) {
        return this.renderer.drawArrays(mode, first, count);
      };

      Context.prototype._currentTexture = function() {
        if (arguments.length > 0) {
          return this.renderer.textureUnit[this.currentTextureUnitIndex] = arguments[0];
        } else {
          return this.renderer.textureUnit[this.currentTextureUnitIndex];
        }
      };

      return Context;

    })();
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,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QkFDSSxJQUFDLENBQUEsUUFBUSxDQUFDLFdBQVksQ0FBQSxJQUFDLENBQUEsdUJBQUQsQ0FBdEIsR0FBa0QsU0FBVSxDQUFBLENBQUEsRUFEaEU7U0FBQSxNQUFBO2lCQUdJLElBQUMsQ0FBQSxRQUFRLENBQUMsV0FBWSxDQUFBLElBQUMsQ0FBQSx1QkFBRCxFQUgxQjtTQURhO01BQUEsQ0F0RmpCLENBQUE7O3FCQUFBOztTQVJEO0VBQUEsQ0FQUCxDQUFBLENBQUE7QUFBQSIsImZpbGUiOiJDb250ZXh0LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiIyBjaGVlcEdMIENvbnRleHQgQVBJIGltcGxlbWVudGF0aW9uXG5kZWZpbmUoW1xuICAgIFwiQ29sb3JcIixcbiAgICBcIlByb2dyYW1cIixcbiAgICBcIkJ1ZmZlclwiLFxuICAgIFwiVGV4dHVyZVwiLFxuICAgIFwiUmVuZGVyZXJcIixcbiAgICBcIklsbGVnYWxBcmd1bWVudEV4Y2VwdGlvblwiLFxuICAgIF0sIChcbiAgICBDb2xvcixcbiAgICBQcm9ncmFtLFxuICAgIEJ1ZmZlcixcbiAgICBUZXh0dXJlLFxuICAgIFJlbmRlcmVyLFxuICAgIElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbikgLT5cbiAgICBjbGFzcyBDb250ZXh0XG4gICAgICAgIEBjcmVhdGU6IChodG1sQ2FudmFzKSAtPlxuICAgICAgICAgICAgY2FudmFzSW1wbCA9IGh0bWxDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXG5cbiAgICAgICAgICAgIHdpZHRoID0gaHRtbENhbnZhcy53aWR0aFxuICAgICAgICAgICAgaGVpZ2h0ID0gaHRtbENhbnZhcy5oZWlnaHRcblxuICAgICAgICAgICAgbmV3IENvbnRleHQoY2FudmFzSW1wbCxcbiAgICAgICAgICAgICAgICBSZW5kZXJlci5jcmVhdGUoY2FudmFzSW1wbCwgd2lkdGgsIGhlaWdodCkpXG5cbiAgICAgICAgY29uc3RydWN0b3I6IChAY2FudmFzQ29udGV4dCwgQHJlbmRlcmVyKSAtPlxuICAgICAgICAgICAgQGNhbnZhcyA9IEBjYW52YXNDb250ZXh0LmNhbnZhc1xuICAgICAgICAgICAgQGNsZWFyQ29sb3JTdHlsZSA9IFwicmdiKDAsIDAsIDAsIDEpXCJcbiAgICAgICAgICAgIEBwcm9ncmFtcyA9IFtdXG5cbiAgICAgICAgICAgIEBidWZmZXJzID0gW11cbiAgICAgICAgICAgIEBjdXJyZW50QnVmZmVyID0gbnVsbFxuXG4gICAgICAgICAgICBAdGV4dHVyZXMgPSBbXSAjIOODhuOCr+OCueODgeODo+iHquS9k+OBr+ODhuOCr+OCueODgeODo+ODpuODi+ODg+ODiOOBruaVsOOCiOOCiuWkmuOBj+aMgeOBpuOCi+OCiOOBhuOBq+OBquOBo+OBpuOBhOOCi+OBqOOBhOOBhuOBk+OBqFxuICAgICAgICAgICAgQGN1cnJlbnRUZXh0dXJlVW5pdEluZGV4ID0gMFxuXG4gICAgICAgIHRvU3RyaW5nOiAoKSAtPlxuICAgICAgICAgICAgXCJjaGVlcEdMIENvbnRleHRbI3tAY2FudmFzQ29udGV4dH1dXCJcblxuICAgICAgICBjbGVhckNvbG9yOiAociwgZywgYiwgYSkgLT5cbiAgICAgICAgICAgIEBjbGVhckNvbG9yU3R5bGUgPSBcInJnYigje3J9LCAje2d9LCAje2J9LCAje2F9KVwiXG5cbiAgICAgICAgY2xlYXI6ICgpIC0+XG4gICAgICAgICAgICBAcmVuZGVyZXIuY2xlYXIoQGNsZWFyQ29sb3JTdHlsZSlcblxuICAgICAgICAjIHNoYWRlciBBUElcbiAgICAgICAgY3JlYXRlUHJvZ3JhbTogKHZlcnQsIGZyYWcpIC0+XG4gICAgICAgICAgICBpZiB0eXBlb2YgdmVydCBpc250IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uKFwidmVydFwiKVxuXG4gICAgICAgICAgICBpZiB0eXBlb2YgZnJhZyBpc250IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uKFwiZnJhZ1wiKVxuXG4gICAgICAgICAgICBwcm9ncmFtSWQgPSBAcHJvZ3JhbXMubGVuZ3RoXG4gICAgICAgICAgICBAcHJvZ3JhbXMucHVzaChuZXcgUHJvZ3JhbSh2ZXJ0LCBmcmFnKSlcbiAgICAgICAgICAgIHJldHVybiBwcm9ncmFtSWRcblxuICAgICAgICB1c2VQcm9ncmFtOiAocHJvZ3JhbUlkKSAtPlxuICAgICAgICAgICAgQHJlbmRlcmVyLmxvYWRQcm9ncmFtKEBwcm9ncmFtc1twcm9ncmFtSWRdKVxuXG4gICAgICAgICMgYnVmZmVyIEFQSVxuICAgICAgICBjcmVhdGVCdWZmZXI6ICgpIC0+XG4gICAgICAgICAgICBidWZmZXJJZCA9IEBidWZmZXJzLmxlbmd0aFxuICAgICAgICAgICAgQGJ1ZmZlcnMucHVzaChuZXcgQnVmZmVyKGJ1ZmZlcklkKSlcbiAgICAgICAgICAgIHJldHVybiBidWZmZXJJZFxuXG4gICAgICAgIGJpbmRCdWZmZXI6IChidWZmZXJUeXBlLCBidWZmZXJJZCkgLT5cbiAgICAgICAgICAgIEBjdXJyZW50QnVmZmVyID0gQGJ1ZmZlcnNbYnVmZmVySWRdXG5cbiAgICAgICAgYnVmZmVyRGF0YTogKGJ1ZmZlclR5cGUsIGRhdGEpIC0+XG4gICAgICAgICAgICAjIGJ1ZmZlclR5cGXjga/lv4XopoHjgarjgYTjgojjgYbjgavmgJ3jgYjjgotcbiAgICAgICAgICAgIEBjdXJyZW50QnVmZmVyLmRhdGEgPSBkYXRhXG5cbiAgICAgICAgIyB0ZXh0dXJlIEFQSVxuICAgICAgICBhY3RpdmVUZXh0dXJlOiAoaW5kZXgpIC0+XG4gICAgICAgICAgICBAY3VycmVudFRleHR1cmVVbml0SW5kZXggPSBpbmRleFxuXG4gICAgICAgIGNyZWF0ZVRleHR1cmU6IC0+XG4gICAgICAgICAgICB0ZXh0dXJlSWQgPSBAdGV4dHVyZXMubGVuZ3RoXG4gICAgICAgICAgICBAdGV4dHVyZXMucHVzaChuZXcgVGV4dHVyZSgpKVxuICAgICAgICAgICAgcmV0dXJuIHRleHR1cmVJZFxuXG4gICAgICAgIGJpbmRUZXh0dXJlOiAodGV4dHVyZVR5cGUsIHRleHR1cmVJZCkgLT5cbiAgICAgICAgICAgIHRleHR1cmUgPSBAdGV4dHVyZXNbdGV4dHVyZUlkXVxuICAgICAgICAgICAgQF9jdXJyZW50VGV4dHVyZSh0ZXh0dXJlKVxuXG4gICAgICAgIHRleEltYWdlMkQ6IChtb2RlLCB0ZXh0dXJlKSAtPlxuICAgICAgICAgICAgQF9jdXJyZW50VGV4dHVyZSgpLmxvYWRJbWFnZSh0ZXh0dXJlKVxuXG5cbiAgICAgICAgdmVydGV4QXR0cmliUG9pbnRlcjogKHByb2dyYW1JZCwgYXR0cmlidXRlTmFtZSwgc3RyaWRlKSAtPlxuICAgICAgICAgICAgcHJvZ3JhbSA9IEBwcm9ncmFtc1twcm9ncmFtSWRdXG4gICAgICAgICAgICBwcm9ncmFtLmJpbmRCdWZmZXIoYXR0cmlidXRlTmFtZSwgQGN1cnJlbnRCdWZmZXIsIHN0cmlkZSlcblxuICAgICAgICB1bmlmb3JtOiAocHJvZ3JhbUlkLCB1bmlmb3JtTmFtZSwgZGF0YSkgLT5cbiAgICAgICAgICAgIHByb2dyYW0gPSBAcHJvZ3JhbXNbcHJvZ3JhbUlkXVxuICAgICAgICAgICAgcHJvZ3JhbS51bmlmb3JtKHVuaWZvcm1OYW1lLCBkYXRhKVxuXG4gICAgICAgICMgcmVuZGVyaW5nXG4gICAgICAgIGRyYXdBcnJheXM6IChtb2RlLCBmaXJzdCwgY291bnQpIC0+XG4gICAgICAgICAgICBAcmVuZGVyZXIuZHJhd0FycmF5cyhtb2RlLCBmaXJzdCwgY291bnQpXG5cbiAgICAgICAgX2N1cnJlbnRUZXh0dXJlOiAtPlxuICAgICAgICAgICAgaWYgYXJndW1lbnRzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICBAcmVuZGVyZXIudGV4dHVyZVVuaXRbQGN1cnJlbnRUZXh0dXJlVW5pdEluZGV4XSA9IGFyZ3VtZW50c1swXVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIEByZW5kZXJlci50ZXh0dXJlVW5pdFtAY3VycmVudFRleHR1cmVVbml0SW5kZXhdXG4pXG4iXX0=;
(function() {
  define('gl',["require", "Context", "Constants"], function(require, Context, Constants) {
    var api, key, val;
    api = {
      getContext: function(element) {
        return Context.create(element);
      }
    };
    for (key in Constants) {
      val = Constants[key];
      api[key] = val;
    }
    return api;
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtBQUFBLEVBQUEsTUFBQSxDQUFPLENBQ04sU0FETSxFQUVOLFNBRk0sRUFHTixXQUhNLENBQVAsRUFJRyxTQUNGLE9BREUsRUFFRixPQUZFLEVBR0YsU0FIRSxHQUFBO0FBSUYsUUFBQSxhQUFBO0FBQUEsSUFBQSxHQUFBLEdBQU07QUFBQSxNQUNMLFVBQUEsRUFBYSxTQUFDLE9BQUQsR0FBQTtlQUNaLE9BQU8sQ0FBQyxNQUFSLENBQWUsT0FBZixFQURZO01BQUEsQ0FEUjtLQUFOLENBQUE7QUFLQSxTQUFBLGdCQUFBOzJCQUFBO0FBQ0MsTUFBQSxHQUFJLENBQUEsR0FBQSxDQUFKLEdBQVcsR0FBWCxDQUREO0FBQUEsS0FMQTtBQVFBLFdBQU8sR0FBUCxDQVpFO0VBQUEsQ0FKSCxDQUFBLENBQUE7QUFBQSIsImZpbGUiOiJnbC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIiMgY2hlZXBnbCBBUEkgaW1wbGVtZW50YXRpb25cbmRlZmluZShbXG5cdFwicmVxdWlyZVwiLFxuXHRcIkNvbnRleHRcIixcblx0XCJDb25zdGFudHNcIixcbl0sIChcblx0cmVxdWlyZSxcblx0Q29udGV4dCxcblx0Q29uc3RhbnRzKSAtPlxuXHRhcGkgPSB7XG5cdFx0Z2V0Q29udGV4dDogIChlbGVtZW50KSAtPlxuXHRcdFx0Q29udGV4dC5jcmVhdGUoZWxlbWVudClcblx0fVxuXG5cdGZvciBrZXksIHZhbCBvZiBDb25zdGFudHNcblx0XHRhcGlba2V5XSA9IHZhbFxuXG5cdHJldHVybiBhcGlcbilcbiJdfQ==;
(function() {
  define('util',["IllegalArgumentException"], function(IllegalArgumentException) {
    return {
      isString: function(obj) {
        return toString.call(obj) === '[object String]';
      },
      checkNull: function(obj) {
        if ((obj != null)) {
          throw new IllegalArgumentException();
        }
      }
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsRUFBQSxNQUFBLENBQU8sQ0FBQywwQkFBRCxDQUFQLEVBQXFDLFNBQUMsd0JBQUQsR0FBQTtXQUNwQztBQUFBLE1BQUEsUUFBQSxFQUFVLFNBQUMsR0FBRCxHQUFBO2VBQ1QsUUFBUSxDQUFDLElBQVQsQ0FBYyxHQUFkLENBQUEsS0FBc0Isa0JBRGI7TUFBQSxDQUFWO0FBQUEsTUFHQSxTQUFBLEVBQVcsU0FBQyxHQUFELEdBQUE7QUFDVixRQUFBLElBQUcsQ0FBQyxXQUFELENBQUg7QUFDQyxnQkFBVSxJQUFBLHdCQUFBLENBQUEsQ0FBVixDQUREO1NBRFU7TUFBQSxDQUhYO01BRG9DO0VBQUEsQ0FBckMsQ0FBQSxDQUFBO0FBQUEiLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZSBbXCJJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb25cIl0sIChJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb24pIC0+XG5cdGlzU3RyaW5nOiAob2JqKSAtPlxuXHRcdHRvU3RyaW5nLmNhbGwob2JqKSA9PSAnW29iamVjdCBTdHJpbmddJ1xuXG5cdGNoZWNrTnVsbDogKG9iaikgLT5cblx0XHRpZiAob2JqPylcblx0XHRcdHRocm93IG5ldyBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb24oKVxuIl19;
(function() {
  define('ThreeJSLoader',["prelude"], function(pl) {
    var ThreeJSLoader;
    return ThreeJSLoader = (function() {
      var LoadContext;

      LoadContext = (function() {
        function LoadContext(geometry, texture) {
          this.geometry = geometry;
          this.texture = texture;
        }

        LoadContext.prototype.createVertexArray = function() {
          var face, faceVertices, vs;
          vs = this.geometry.vertices;
          faceVertices = (function() {
            var _i, _len, _ref, _results;
            _ref = this.geometry.faces;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              face = _ref[_i];
              _results.push([vs[face.a], vs[face.b], vs[face.c]]);
            }
            return _results;
          }).call(this);
          return pl.concat(pl.map(pl.concat(faceVertices), function(v) {
            return [v.x, v.y, v.z];
          }));
        };

        LoadContext.prototype.createNormalArray = function() {
          var f, faceNormals;
          faceNormals = (function() {
            var _i, _len, _ref, _results;
            _ref = this.geometry.faces;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              f = _ref[_i];
              _results.push(f.vertexNormals);
            }
            return _results;
          }).call(this);
          return pl.concat(pl.map(pl.concat(faceNormals), function(v) {
            return [v.x, v.y, v.z];
          }));
        };

        LoadContext.prototype.createUVArray = function() {
          var faceUVs;
          faceUVs = this.geometry.faceVertexUvs[0];
          return pl.concat(pl.map(pl.concat(faceUVs), function(v) {
            return [v.x, v.y];
          }));
        };

        LoadContext.prototype.createTangentArray = function() {
          var A, B, C, UVs, a, face, i, j, k, pair, tangent, tangents, u, v, v0, v1, v2, vs, x, y, z;
          vs = this.geometry.vertices;
          tangents = (function() {
            var _i, _len, _ref, _ref1, _results;
            _ref = pl.zip(this.geometry.faces, this.geometry.faceVertexUvs[0]);
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              pair = _ref[_i];
              face = pair[0];
              UVs = pair[1];
              _ref1 = [vs[face.a], vs[face.b], vs[face.c]], v0 = _ref1[0], v1 = _ref1[1], v2 = _ref1[2];
              x = [v0.x, v1.x, v2.x];
              y = [v0.y, v1.y, v2.y];
              z = [v0.z, v1.z, v2.z];
              u = [UVs[0].x, UVs[1].x, UVs[2].x];
              v = [UVs[0].y, UVs[1].y, UVs[2].y];
              tangent = (function() {
                var _j, _ref2, _results1;
                _results1 = [];
                for (i = _j = 0; _j <= 2; i = ++_j) {
                  a = [x, y, z][i];
                  j = vec3.subtract(vec3.create(), [a[1], u[1], v[1]], [a[0], u[0], v[0]]);
                  k = vec3.subtract(vec3.create(), [a[2], u[2], v[2]], [a[1], u[1], v[1]]);
                  _ref2 = vec3.cross(vec3.create(), j, k), A = _ref2[0], B = _ref2[1], C = _ref2[2];
                  _results1.push(-C / A);
                }
                return _results1;
              })();
              _results.push([tangent, tangent, tangent]);
            }
            return _results;
          }).call(this);
          return pl.concat(pl.concat(tangents));
        };

        LoadContext.prototype.createTextureArray = function() {
          var canvas, ctx, img;
          img = this.texture.image;
          canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          return [
            {
              width: img.width,
              height: img.height,
              canvas: ctx
            }
          ];
        };

        return LoadContext;

      })();

      function ThreeJSLoader(setting, impl) {
        this.setting = setting;
        this.impl = impl != null ? impl : new THREE.JSONLoader();
      }

      ThreeJSLoader.prototype.load = function(callback) {
        return THREE.ImageUtils.loadTexture(this.setting.textureFIle, THREE.UVMapping, this._onLoad(callback));
      };

      ThreeJSLoader.prototype._onLoad = function(callback) {
        return (function(_this) {
          return function(texture) {
            var ctx, geometry;
            window.g = geometry = new THREE.SphereGeometry(1.5, 32, 32);
            ctx = new LoadContext(geometry, texture);
            return callback({
              vertices: ctx.createVertexArray(),
              normals: ctx.createNormalArray(),
              uvs: ctx.createUVArray(),
              tangents: ctx.createTangentArray(),
              textures: ctx.createTextureArray()
            });
          };
        })(this);
      };

      return ThreeJSLoader;

    })();
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRocmVlSlNMb2FkZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsRUFBQSxNQUFBLENBQU8sQ0FBQyxTQUFELENBQVAsRUFBb0IsU0FBQyxFQUFELEdBQUE7QUFDaEIsUUFBQSxhQUFBO1dBQU07QUFDRixVQUFBLFdBQUE7O0FBQUEsTUFBTTtBQUNXLFFBQUEscUJBQUUsUUFBRixFQUFhLE9BQWIsR0FBQTtBQUF1QixVQUF0QixJQUFDLENBQUEsV0FBQSxRQUFxQixDQUFBO0FBQUEsVUFBWCxJQUFDLENBQUEsVUFBQSxPQUFVLENBQXZCO1FBQUEsQ0FBYjs7QUFBQSw4QkFFQSxpQkFBQSxHQUFtQixTQUFBLEdBQUE7QUFDZixjQUFBLHNCQUFBO0FBQUEsVUFBQSxFQUFBLEdBQUssSUFBQyxDQUFBLFFBQVEsQ0FBQyxRQUFmLENBQUE7QUFBQSxVQUNBLFlBQUE7O0FBQWdCO0FBQUE7aUJBQUEsMkNBQUE7OEJBQUE7QUFBQSw0QkFBQSxDQUFDLEVBQUcsQ0FBQSxJQUFJLENBQUMsQ0FBTCxDQUFKLEVBQWEsRUFBRyxDQUFBLElBQUksQ0FBQyxDQUFMLENBQWhCLEVBQXlCLEVBQUcsQ0FBQSxJQUFJLENBQUMsQ0FBTCxDQUE1QixFQUFBLENBQUE7QUFBQTs7dUJBRGhCLENBQUE7aUJBR0EsRUFBRSxDQUFDLE1BQUgsQ0FBVSxFQUFFLENBQUMsR0FBSCxDQUFPLEVBQUUsQ0FBQyxNQUFILENBQVUsWUFBVixDQUFQLEVBQWdDLFNBQUMsQ0FBRCxHQUFBO21CQUN0QyxDQUFDLENBQUMsQ0FBQyxDQUFILEVBQU0sQ0FBQyxDQUFDLENBQVIsRUFBVyxDQUFDLENBQUMsQ0FBYixFQURzQztVQUFBLENBQWhDLENBQVYsRUFKZTtRQUFBLENBRm5CLENBQUE7O0FBQUEsOEJBU0EsaUJBQUEsR0FBbUIsU0FBQSxHQUFBO0FBQ2YsY0FBQSxjQUFBO0FBQUEsVUFBQSxXQUFBOztBQUFlO0FBQUE7aUJBQUEsMkNBQUE7MkJBQUE7QUFBQSw0QkFBQSxDQUFDLENBQUMsY0FBRixDQUFBO0FBQUE7O3VCQUFmLENBQUE7aUJBQ0EsRUFBRSxDQUFDLE1BQUgsQ0FBVSxFQUFFLENBQUMsR0FBSCxDQUFPLEVBQUUsQ0FBQyxNQUFILENBQVUsV0FBVixDQUFQLEVBQStCLFNBQUMsQ0FBRCxHQUFBO21CQUNyQyxDQUFDLENBQUMsQ0FBQyxDQUFILEVBQU0sQ0FBQyxDQUFDLENBQVIsRUFBVyxDQUFDLENBQUMsQ0FBYixFQURxQztVQUFBLENBQS9CLENBQVYsRUFGZTtRQUFBLENBVG5CLENBQUE7O0FBQUEsOEJBY0EsYUFBQSxHQUFlLFNBQUEsR0FBQTtBQUNYLGNBQUEsT0FBQTtBQUFBLFVBQUEsT0FBQSxHQUFVLElBQUMsQ0FBQSxRQUFRLENBQUMsYUFBYyxDQUFBLENBQUEsQ0FBbEMsQ0FBQTtpQkFDQSxFQUFFLENBQUMsTUFBSCxDQUFVLEVBQUUsQ0FBQyxHQUFILENBQU8sRUFBRSxDQUFDLE1BQUgsQ0FBVSxPQUFWLENBQVAsRUFBMkIsU0FBQyxDQUFELEdBQUE7bUJBQ2pDLENBQUMsQ0FBQyxDQUFDLENBQUgsRUFBTSxDQUFDLENBQUMsQ0FBUixFQURpQztVQUFBLENBQTNCLENBQVYsRUFGVztRQUFBLENBZGYsQ0FBQTs7QUFBQSw4QkFzQkEsa0JBQUEsR0FBb0IsU0FBQSxHQUFBO0FBQ2hCLGNBQUEsc0ZBQUE7QUFBQSxVQUFBLEVBQUEsR0FBSyxJQUFDLENBQUEsUUFBUSxDQUFDLFFBQWYsQ0FBQTtBQUFBLFVBQ0EsUUFBQTs7QUFBVztBQUFBO2lCQUFBLDJDQUFBOzhCQUFBO0FBQ1AsY0FBQSxJQUFBLEdBQU8sSUFBSyxDQUFBLENBQUEsQ0FBWixDQUFBO0FBQUEsY0FDQSxHQUFBLEdBQU0sSUFBSyxDQUFBLENBQUEsQ0FEWCxDQUFBO0FBQUEsY0FHQSxRQUFlLENBQUMsRUFBRyxDQUFBLElBQUksQ0FBQyxDQUFMLENBQUosRUFBYSxFQUFHLENBQUEsSUFBSSxDQUFDLENBQUwsQ0FBaEIsRUFBeUIsRUFBRyxDQUFBLElBQUksQ0FBQyxDQUFMLENBQTVCLENBQWYsRUFBQyxhQUFELEVBQUssYUFBTCxFQUFTLGFBSFQsQ0FBQTtBQUFBLGNBSUEsQ0FBQSxHQUFJLENBQUMsRUFBRSxDQUFDLENBQUosRUFBTyxFQUFFLENBQUMsQ0FBVixFQUFhLEVBQUUsQ0FBQyxDQUFoQixDQUpKLENBQUE7QUFBQSxjQUtBLENBQUEsR0FBSSxDQUFDLEVBQUUsQ0FBQyxDQUFKLEVBQU8sRUFBRSxDQUFDLENBQVYsRUFBYSxFQUFFLENBQUMsQ0FBaEIsQ0FMSixDQUFBO0FBQUEsY0FNQSxDQUFBLEdBQUksQ0FBQyxFQUFFLENBQUMsQ0FBSixFQUFPLEVBQUUsQ0FBQyxDQUFWLEVBQWEsRUFBRSxDQUFDLENBQWhCLENBTkosQ0FBQTtBQUFBLGNBT0EsQ0FBQSxHQUFJLENBQUMsR0FBSSxDQUFBLENBQUEsQ0FBRSxDQUFDLENBQVIsRUFBVyxHQUFJLENBQUEsQ0FBQSxDQUFFLENBQUMsQ0FBbEIsRUFBcUIsR0FBSSxDQUFBLENBQUEsQ0FBRSxDQUFDLENBQTVCLENBUEosQ0FBQTtBQUFBLGNBUUEsQ0FBQSxHQUFJLENBQUMsR0FBSSxDQUFBLENBQUEsQ0FBRSxDQUFDLENBQVIsRUFBVyxHQUFJLENBQUEsQ0FBQSxDQUFFLENBQUMsQ0FBbEIsRUFBcUIsR0FBSSxDQUFBLENBQUEsQ0FBRSxDQUFDLENBQTVCLENBUkosQ0FBQTtBQUFBLGNBV0EsT0FBQTs7QUFBVTtxQkFBUyw2QkFBVCxHQUFBO0FBQ04sa0JBQUEsQ0FBQSxHQUFJLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLENBQVEsQ0FBQSxDQUFBLENBQVosQ0FBQTtBQUFBLGtCQUNBLENBQUEsR0FBSSxJQUFJLENBQUMsUUFBTCxDQUFjLElBQUksQ0FBQyxNQUFMLENBQUEsQ0FBZCxFQUE2QixDQUFDLENBQUUsQ0FBQSxDQUFBLENBQUgsRUFBTyxDQUFFLENBQUEsQ0FBQSxDQUFULEVBQWEsQ0FBRSxDQUFBLENBQUEsQ0FBZixDQUE3QixFQUFpRCxDQUFDLENBQUUsQ0FBQSxDQUFBLENBQUgsRUFBTyxDQUFFLENBQUEsQ0FBQSxDQUFULEVBQWEsQ0FBRSxDQUFBLENBQUEsQ0FBZixDQUFqRCxDQURKLENBQUE7QUFBQSxrQkFFQSxDQUFBLEdBQUksSUFBSSxDQUFDLFFBQUwsQ0FBYyxJQUFJLENBQUMsTUFBTCxDQUFBLENBQWQsRUFBNkIsQ0FBQyxDQUFFLENBQUEsQ0FBQSxDQUFILEVBQU8sQ0FBRSxDQUFBLENBQUEsQ0FBVCxFQUFhLENBQUUsQ0FBQSxDQUFBLENBQWYsQ0FBN0IsRUFBaUQsQ0FBQyxDQUFFLENBQUEsQ0FBQSxDQUFILEVBQU8sQ0FBRSxDQUFBLENBQUEsQ0FBVCxFQUFhLENBQUUsQ0FBQSxDQUFBLENBQWYsQ0FBakQsQ0FGSixDQUFBO0FBQUEsa0JBR0EsUUFBVSxJQUFJLENBQUMsS0FBTCxDQUFXLElBQUksQ0FBQyxNQUFMLENBQUEsQ0FBWCxFQUEwQixDQUExQixFQUE2QixDQUE3QixDQUFWLEVBQUMsWUFBRCxFQUFHLFlBQUgsRUFBSyxZQUhMLENBQUE7QUFBQSxpQ0FJQSxDQUFBLENBQUEsR0FBRyxFQUpILENBRE07QUFBQTs7a0JBWFYsQ0FBQTtBQUFBLDRCQWlCQSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLE9BQW5CLEVBakJBLENBRE87QUFBQTs7dUJBRFgsQ0FBQTtpQkFvQkEsRUFBRSxDQUFDLE1BQUgsQ0FBVSxFQUFFLENBQUMsTUFBSCxDQUFVLFFBQVYsQ0FBVixFQXJCZ0I7UUFBQSxDQXRCcEIsQ0FBQTs7QUFBQSw4QkE4Q0Esa0JBQUEsR0FBb0IsU0FBQSxHQUFBO0FBRWhCLGNBQUEsZ0JBQUE7QUFBQSxVQUFBLEdBQUEsR0FBTSxJQUFDLENBQUEsT0FBTyxDQUFDLEtBQWYsQ0FBQTtBQUFBLFVBQ0EsTUFBQSxHQUFTLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCLENBRFQsQ0FBQTtBQUFBLFVBRUEsTUFBTSxDQUFDLEtBQVAsR0FBZSxHQUFHLENBQUMsS0FGbkIsQ0FBQTtBQUFBLFVBR0EsTUFBTSxDQUFDLE1BQVAsR0FBZ0IsR0FBRyxDQUFDLE1BSHBCLENBQUE7QUFBQSxVQUlBLEdBQUEsR0FBTSxNQUFNLENBQUMsVUFBUCxDQUFrQixJQUFsQixDQUpOLENBQUE7QUFBQSxVQUtBLEdBQUcsQ0FBQyxTQUFKLENBQWMsR0FBZCxFQUFtQixDQUFuQixFQUFzQixDQUF0QixDQUxBLENBQUE7aUJBTUE7WUFBQztBQUFBLGNBQUMsS0FBQSxFQUFPLEdBQUcsQ0FBQyxLQUFaO0FBQUEsY0FBbUIsTUFBQSxFQUFRLEdBQUcsQ0FBQyxNQUEvQjtBQUFBLGNBQXVDLE1BQUEsRUFBUSxHQUEvQzthQUFEO1lBUmdCO1FBQUEsQ0E5Q3BCLENBQUE7OzJCQUFBOztVQURKLENBQUE7O0FBeURhLE1BQUEsdUJBQUUsT0FBRixFQUFZLElBQVosR0FBQTtBQUE0QyxRQUEzQyxJQUFDLENBQUEsVUFBQSxPQUEwQyxDQUFBO0FBQUEsUUFBakMsSUFBQyxDQUFBLHNCQUFBLE9BQVcsSUFBQSxLQUFLLENBQUMsVUFBTixDQUFBLENBQXFCLENBQTVDO01BQUEsQ0F6RGI7O0FBQUEsOEJBMkRBLElBQUEsR0FBTSxTQUFDLFFBQUQsR0FBQTtlQUNGLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBakIsQ0FDSSxJQUFDLENBQUEsT0FBTyxDQUFDLFdBRGIsRUFFSSxLQUFLLENBQUMsU0FGVixFQUdJLElBQUMsQ0FBQSxPQUFELENBQVMsUUFBVCxDQUhKLEVBREU7TUFBQSxDQTNETixDQUFBOztBQUFBLDhCQW1FQSxPQUFBLEdBQVMsU0FBQyxRQUFELEdBQUE7ZUFDTCxDQUFBLFNBQUEsS0FBQSxHQUFBO2lCQUFBLFNBQUMsT0FBRCxHQUFBO0FBQ0ksZ0JBQUEsYUFBQTtBQUFBLFlBQUEsTUFBTSxDQUFDLENBQVAsR0FBVyxRQUFBLEdBQWUsSUFBQSxLQUFLLENBQUMsY0FBTixDQUFxQixHQUFyQixFQUEwQixFQUExQixFQUE4QixFQUE5QixDQUExQixDQUFBO0FBQUEsWUFDQSxHQUFBLEdBQVUsSUFBQSxXQUFBLENBQVksUUFBWixFQUFzQixPQUF0QixDQURWLENBQUE7bUJBR0EsUUFBQSxDQUFTO0FBQUEsY0FDTCxRQUFBLEVBQVUsR0FBRyxDQUFDLGlCQUFKLENBQUEsQ0FETDtBQUFBLGNBRUwsT0FBQSxFQUFTLEdBQUcsQ0FBQyxpQkFBSixDQUFBLENBRko7QUFBQSxjQUdMLEdBQUEsRUFBSyxHQUFHLENBQUMsYUFBSixDQUFBLENBSEE7QUFBQSxjQUlMLFFBQUEsRUFBVSxHQUFHLENBQUMsa0JBQUosQ0FBQSxDQUpMO0FBQUEsY0FLTCxRQUFBLEVBQVUsR0FBRyxDQUFDLGtCQUFKLENBQUEsQ0FMTDthQUFULEVBSko7VUFBQSxFQUFBO1FBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxFQURLO01BQUEsQ0FuRVQsQ0FBQTs7MkJBQUE7O1NBRlk7RUFBQSxDQUFwQixDQUFBLENBQUE7QUFBQSIsImZpbGUiOiJUaHJlZUpTTG9hZGVyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lIFtcInByZWx1ZGVcIl0sIChwbCkgLT5cbiAgICBjbGFzcyBUaHJlZUpTTG9hZGVyXG4gICAgICAgIGNsYXNzIExvYWRDb250ZXh0XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcjogKEBnZW9tZXRyeSwgQHRleHR1cmUpIC0+XG5cbiAgICAgICAgICAgIGNyZWF0ZVZlcnRleEFycmF5OiAtPlxuICAgICAgICAgICAgICAgIHZzID0gQGdlb21ldHJ5LnZlcnRpY2VzXG4gICAgICAgICAgICAgICAgZmFjZVZlcnRpY2VzID0gKFt2c1tmYWNlLmFdLCB2c1tmYWNlLmJdLCB2c1tmYWNlLmNdXSBmb3IgZmFjZSBpbiBAZ2VvbWV0cnkuZmFjZXMpXG5cbiAgICAgICAgICAgICAgICBwbC5jb25jYXQocGwubWFwKHBsLmNvbmNhdChmYWNlVmVydGljZXMpLCAodikgLT5cbiAgICAgICAgICAgICAgICAgICAgW3YueCwgdi55LCB2LnpdKSlcblxuICAgICAgICAgICAgY3JlYXRlTm9ybWFsQXJyYXk6IC0+XG4gICAgICAgICAgICAgICAgZmFjZU5vcm1hbHMgPSAoZi52ZXJ0ZXhOb3JtYWxzIGZvciBmIGluIEBnZW9tZXRyeS5mYWNlcylcbiAgICAgICAgICAgICAgICBwbC5jb25jYXQocGwubWFwKHBsLmNvbmNhdChmYWNlTm9ybWFscyksICh2KSAtPlxuICAgICAgICAgICAgICAgICAgICBbdi54LCB2LnksIHYuel0pKVxuXG4gICAgICAgICAgICBjcmVhdGVVVkFycmF5OiAtPlxuICAgICAgICAgICAgICAgIGZhY2VVVnMgPSBAZ2VvbWV0cnkuZmFjZVZlcnRleFV2c1swXVxuICAgICAgICAgICAgICAgIHBsLmNvbmNhdChwbC5tYXAocGwuY29uY2F0KGZhY2VVVnMpLCAodikgLT5cbiAgICAgICAgICAgICAgICAgICAgW3YueCwgdi55XSkpXG5cbiAgICAgICAgICAgICMg5o6l44OZ44Kv44OI44Or44Gu6KiI566XXG4gICAgICAgICAgICAjIOmdouWAkuOBquOBruOBp+mggueCueOBruaVsOOBqOW4s+Wwu+OCkuWQiOOCj+OBm+OCi+OBn+OCgeOBq+OAgeioiOeul+OBl+OBn+aOpeODmeOCr+ODiOODq+OCkjPlgIvjgb7jgajjgoHjgabkv53lrZjjgZfjgabjgYTjgotcbiAgICAgICAgICAgICMg5a6f6Zqb44Gu44OX44Ot44Kw44Op44Og44Gg44Go44Gp44GG44GX44Gm44GE44KL44Gu44Gg44KN44GG44GL44CCXG4gICAgICAgICAgICBjcmVhdGVUYW5nZW50QXJyYXk6IC0+XG4gICAgICAgICAgICAgICAgdnMgPSBAZ2VvbWV0cnkudmVydGljZXNcbiAgICAgICAgICAgICAgICB0YW5nZW50cyA9IGZvciBwYWlyIGluIHBsLnppcChAZ2VvbWV0cnkuZmFjZXMsIEBnZW9tZXRyeS5mYWNlVmVydGV4VXZzWzBdKVxuICAgICAgICAgICAgICAgICAgICBmYWNlID0gcGFpclswXVxuICAgICAgICAgICAgICAgICAgICBVVnMgPSBwYWlyWzFdXG4gICAgICAgICAgICAgICAgICAgICMgVGFuZ2VudCB2ZWN0b3Ljga5Y5oiQ5YiG44KS6KiI566XXG4gICAgICAgICAgICAgICAgICAgIFt2MCwgdjEsIHYyXSA9IFt2c1tmYWNlLmFdLCB2c1tmYWNlLmJdLCB2c1tmYWNlLmNdXVxuICAgICAgICAgICAgICAgICAgICB4ID0gW3YwLngsIHYxLngsIHYyLnhdXG4gICAgICAgICAgICAgICAgICAgIHkgPSBbdjAueSwgdjEueSwgdjIueV1cbiAgICAgICAgICAgICAgICAgICAgeiA9IFt2MC56LCB2MS56LCB2Mi56XVxuICAgICAgICAgICAgICAgICAgICB1ID0gW1VWc1swXS54LCBVVnNbMV0ueCwgVVZzWzJdLnhdXG4gICAgICAgICAgICAgICAgICAgIHYgPSBbVVZzWzBdLnksIFVWc1sxXS55LCBVVnNbMl0ueV1cblxuICAgICAgICAgICAgICAgICAgICAjIOaOpeODmeOCr+ODiOODq+OBruODreODvOOCq+ODq+W6p+aomeW9ouOBp+OBruWApOOBruioiOeul1xuICAgICAgICAgICAgICAgICAgICB0YW5nZW50ID0gZm9yIGkgaW4gWzAuLjJdXG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gW3gseSx6XVtpXVxuICAgICAgICAgICAgICAgICAgICAgICAgaiA9IHZlYzMuc3VidHJhY3QodmVjMy5jcmVhdGUoKSwgW2FbMV0sIHVbMV0sIHZbMV1dLCBbYVswXSwgdVswXSwgdlswXV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBrID0gdmVjMy5zdWJ0cmFjdCh2ZWMzLmNyZWF0ZSgpLCBbYVsyXSwgdVsyXSwgdlsyXV0sIFthWzFdLCB1WzFdLCB2WzFdXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFtBLEIsQ10gPSB2ZWMzLmNyb3NzKHZlYzMuY3JlYXRlKCksIGosIGspICMg6Z2i5rOV57eaXG4gICAgICAgICAgICAgICAgICAgICAgICAtQy9BXG4gICAgICAgICAgICAgICAgICAgIFt0YW5nZW50LCB0YW5nZW50LCB0YW5nZW50XVxuICAgICAgICAgICAgICAgIHBsLmNvbmNhdChwbC5jb25jYXQodGFuZ2VudHMpKVxuXG4gICAgICAgICAgICAjIOODhuOCr+OCueODgeODo+iqreOBv+i+vOOBv+OAgkNhbnZhcyDjgpLjg4bjgq/jgrnjg4Hjg6Pjg5Xjgqnjg7zjg57jg4Pjg4jjgajjgZfjgabkvb/nlKhcbiAgICAgICAgICAgIGNyZWF0ZVRleHR1cmVBcnJheTogLT5cbiAgICAgICAgICAgICAgICAjIFRPRE86IOikh+aVsOOBruODhuOCr+OCueODgeODo+iqreOBv+i+vOOBv+WvvuW/nFxuICAgICAgICAgICAgICAgIGltZyA9IEB0ZXh0dXJlLmltYWdlXG4gICAgICAgICAgICAgICAgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGltZy53aWR0aFxuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0XG4gICAgICAgICAgICAgICAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKVxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKVxuICAgICAgICAgICAgICAgIFt7d2lkdGg6IGltZy53aWR0aCwgaGVpZ2h0OiBpbWcuaGVpZ2h0LCBjYW52YXM6IGN0eH1dXG5cbiAgICAgICAgY29uc3RydWN0b3I6IChAc2V0dGluZywgQGltcGwgPSBuZXcgVEhSRUUuSlNPTkxvYWRlcigpKSAtPlxuXG4gICAgICAgIGxvYWQ6IChjYWxsYmFjaykgLT5cbiAgICAgICAgICAgIFRIUkVFLkltYWdlVXRpbHMubG9hZFRleHR1cmUoXG4gICAgICAgICAgICAgICAgQHNldHRpbmcudGV4dHVyZUZJbGUsXG4gICAgICAgICAgICAgICAgVEhSRUUuVVZNYXBwaW5nLFxuICAgICAgICAgICAgICAgIEBfb25Mb2FkKGNhbGxiYWNrKSlcbiAgICAgICAgICAgICMgQGltcGwubG9hZChwYXRoLCBAX29uTG9hZChjYWxsYmFjaykpXG4gICAgICAgICAgICAjIEBfb25Mb2FkKGNhbGxiYWNrKSgpXG5cbiAgICAgICAgX29uTG9hZDogKGNhbGxiYWNrKSAtPlxuICAgICAgICAgICAgKHRleHR1cmUpID0+XG4gICAgICAgICAgICAgICAgd2luZG93LmcgPSBnZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxLjUsIDMyLCAzMilcbiAgICAgICAgICAgICAgICBjdHggPSBuZXcgTG9hZENvbnRleHQoZ2VvbWV0cnksIHRleHR1cmUpXG5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2VzOiBjdHguY3JlYXRlVmVydGV4QXJyYXkoKVxuICAgICAgICAgICAgICAgICAgICBub3JtYWxzOiBjdHguY3JlYXRlTm9ybWFsQXJyYXkoKVxuICAgICAgICAgICAgICAgICAgICB1dnM6IGN0eC5jcmVhdGVVVkFycmF5KClcbiAgICAgICAgICAgICAgICAgICAgdGFuZ2VudHM6IGN0eC5jcmVhdGVUYW5nZW50QXJyYXkoKVxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlczogY3R4LmNyZWF0ZVRleHR1cmVBcnJheSgpXG4gICAgICAgICAgICAgICAgfSlcbiJdfQ==;
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define('App',["prelude", "gl", "util", "ThreeJSLoader"], function(prelude, gl, util, ThreeJSLoader) {
    var App;
    return App = (function() {
      App.main = function(setting) {
        var c, ctx;
        c = setting.canvasElement;
        ctx = gl.getContext(c);
        return new App(setting, ctx, new ThreeJSLoader(setting)).run();
      };

      function App(setting, ctx, loader) {
        this.setting = setting;
        this.ctx = ctx;
        this.loader = loader;
        this.render = __bind(this.render, this);
        this.run = __bind(this.run, this);
      }

      App.prototype.run = function() {
        return this.loader.load(this.render);
      };

      App.prototype.render = function(model) {
        var normalVbo, shaderId, textureId, tgtVbo, uvVbo, vertexVbo, vertices;
        window.m = model;
        vertices = model.vertices;
        this.ctx.clearColor(1.0, 1.0, 0.0, 1.0);
        this.ctx.clear();
        shaderId = this.ctx.createProgram(this.setting.vert, this.setting.frag);
        this.ctx.useProgram(shaderId);
        textureId = this.loadTexture(model.textures[0]);
        this.ctx.activeTexture(0);
        this.ctx.bindTexture(gl.TEXTURE_2D, textureId);
        this.ctx.uniform(shaderId, "mvpMatrix", this.computeMVPMatrix());
        this.ctx.uniform(shaderId, "modelViewMatrix", this.computeModelViewMatrix());
        this.ctx.uniform(shaderId, "color", vec4.fromValues(1.0, 1.0, 1.0, 1.0));
        this.ctx.uniform(shaderId, "Ka", vec3.fromValues(1.0, 1.0, 1.0));
        this.ctx.uniform(shaderId, "Kd", vec3.fromValues(1.0, 1.0, 1.0));
        this.ctx.uniform(shaderId, "Ks", vec3.fromValues(1.0, 1.0, 1.0));
        this.ctx.uniform(shaderId, "La", vec3.fromValues(0.1, 0.1, 0.1));
        this.ctx.uniform(shaderId, "Ld", vec3.fromValues(0.6, 0.6, 0.6));
        this.ctx.uniform(shaderId, "Ls", vec3.fromValues(0.3, 0.3, 0.3));
        this.ctx.uniform(shaderId, "shiness", 4.0);
        this.ctx.uniform(shaderId, "texture0", 0);
        this.ctx.uniform(shaderId, "lightPosition", vec4.fromValues.apply(vec4, [].concat(this.setting.lightPosition, [1.0])));
        vertexVbo = this.sendVertices(vertices);
        normalVbo = this.sendVertices(model.normals);
        uvVbo = this.sendVertices(model.uvs);
        tgtVbo = this.sendVertices(model.tangents);
        this.ctx.bindBuffer(gl.ARRAY_BUFFER, vertexVbo);
        this.ctx.vertexAttribPointer(shaderId, "position", this.setting.stride);
        this.ctx.bindBuffer(gl.ARRAY_BUFFER, normalVbo);
        this.ctx.vertexAttribPointer(shaderId, "normal", 3);
        this.ctx.bindBuffer(gl.ARRAY_BUFFER, uvVbo);
        this.ctx.vertexAttribPointer(shaderId, "uv", 2);
        this.ctx.bindBuffer(gl.ARRAY_BUFFER, tgtVbo);
        this.ctx.vertexAttribPointer(shaderId, "tangent", 3);
        return this.ctx.drawArrays(gl.TRIANGLES, 0, vertices.length / this.setting.stride);
      };

      App.prototype.computeMVPMatrix = function() {
        var modelView, projection;
        modelView = this.computeModelViewMatrix();
        projection = this.computeProjectionMatrix();
        return mat4.mul(mat4.create(), projection, modelView);
      };

      App.prototype.computeProjectionMatrix = function() {
        var far, height, near, width;
        width = this.setting.canvasElement.width;
        height = this.setting.canvasElement.height;
        near = this.setting.near;
        far = this.setting.far;
        return mat4.perspective(mat4.create(), Math.PI / 2.0, width / height, near, far);
      };

      App.prototype.computeModelViewMatrix = function() {
        return mat4.lookAt(mat4.create(), [0.0, 0.0, 3.0], [0.0, 0.0, 0.0], [0.0, 1.0, 0.0]);
      };

      App.prototype.sendVertices = function(data) {
        var vboId;
        vboId = this.ctx.createBuffer();
        this.ctx.bindBuffer(gl.ARRAY_BUFFER, vboId);
        this.ctx.bufferData(gl.ARRAY_BUFFER, data);
        return vboId;
      };

      App.prototype.loadTexture = function(image) {
        var textureId;
        textureId = this.ctx.createTexture();
        this.ctx.bindTexture(gl.TEXTURE_2D, textureId);
        this.ctx.texImage2D(gl.TEXTURE_2D, image);
        this.ctx.bindTexture(gl.TEXTURE_2D, null);
        return textureId;
      };

      return App;

    })();
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,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Q0FwQkEsQ0FBQTtBQUFBLFFBcUJBLElBQUMsQ0FBQSxHQUFHLENBQUMsT0FBTCxDQUFhLFFBQWIsRUFBdUIsSUFBdkIsRUFBNkIsSUFBSSxDQUFDLFVBQUwsQ0FBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsQ0FBN0IsQ0FyQkEsQ0FBQTtBQUFBLFFBc0JBLElBQUMsQ0FBQSxHQUFHLENBQUMsT0FBTCxDQUFhLFFBQWIsRUFBdUIsSUFBdkIsRUFBNkIsSUFBSSxDQUFDLFVBQUwsQ0FBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsQ0FBN0IsQ0F0QkEsQ0FBQTtBQUFBLFFBdUJBLElBQUMsQ0FBQSxHQUFHLENBQUMsT0FBTCxDQUFhLFFBQWIsRUFBdUIsSUFBdkIsRUFBNkIsSUFBSSxDQUFDLFVBQUwsQ0FBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsQ0FBN0IsQ0F2QkEsQ0FBQTtBQUFBLFFBd0JBLElBQUMsQ0FBQSxHQUFHLENBQUMsT0FBTCxDQUFhLFFBQWIsRUFBdUIsSUFBdkIsRUFBNkIsSUFBSSxDQUFDLFVBQUwsQ0FBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsQ0FBN0IsQ0F4QkEsQ0FBQTtBQUFBLFFBeUJBLElBQUMsQ0FBQSxHQUFHLENBQUMsT0FBTCxDQUFhLFFBQWIsRUFBdUIsSUFBdkIsRUFBNkIsSUFBSSxDQUFDLFVBQUwsQ0FBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsQ0FBN0IsQ0F6QkEsQ0FBQTtBQUFBLFFBMEJBLElBQUMsQ0FBQSxHQUFHLENBQUMsT0FBTCxDQUFhLFFBQWIsRUFBdUIsSUFBdkIsRUFBNkIsSUFBSSxDQUFDLFVBQUwsQ0FBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsQ0FBN0IsQ0ExQkEsQ0FBQTtBQUFBLFFBMkJBLElBQUMsQ0FBQSxHQUFHLENBQUMsT0FBTCxDQUFhLFFBQWIsRUFBdUIsU0FBdkIsRUFBa0MsR0FBbEMsQ0EzQkEsQ0FBQTtBQUFBLFFBNEJBLElBQUMs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QUFDLFVBQXBCLEVBQWdDLFNBQWhDLENBSEEsQ0FBQTtBQUFBLFFBTUEsSUFBQyxDQUFBLEdBQUcsQ0FBQyxVQUFMLENBQWdCLEVBQUUsQ0FBQyxVQUFuQixFQUErQixLQUEvQixDQU5BLENBQUE7QUFBQSxRQVlBLElBQUMsQ0FBQSxHQUFHLENBQUMsV0FBTCxDQUFpQixFQUFFLENBQUMsVUFBcEIsRUFBZ0MsSUFBaEMsQ0FaQSxDQUFBO0FBY0EsZUFBTyxTQUFQLENBZlM7TUFBQSxDQXBHYixDQUFBOztpQkFBQTs7U0FGMkM7RUFBQSxDQUFuRCxDQUFBLENBQUE7QUFBQSIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJkZWZpbmUgW1wicHJlbHVkZVwiLCBcImdsXCIsIFwidXRpbFwiLCBcIlRocmVlSlNMb2FkZXJcIl0sIChwcmVsdWRlLCBnbCwgdXRpbCwgVGhyZWVKU0xvYWRlcikgLT5cbiAgICBjbGFzcyBBcHBcbiAgICAgICAgQG1haW46IChzZXR0aW5nKSAtPlxuICAgICAgICAgICAgYyA9IHNldHRpbmcuY2FudmFzRWxlbWVudFxuICAgICAgICAgICAgY3R4ID0gZ2wuZ2V0Q29udGV4dChjKVxuICAgICAgICAgICAgbmV3IEFwcChzZXR0aW5nLCBjdHgsIG5ldyBUaHJlZUpTTG9hZGVyKHNldHRpbmcpKS5ydW4oKVxuXG4gICAgICAgIGNvbnN0cnVjdG9yOiAoQHNldHRpbmcsIEBjdHgsIEBsb2FkZXIpIC0+XG5cbiAgICAgICAgcnVuOiA9PlxuICAgICAgICAgICAgQGxvYWRlci5sb2FkKEByZW5kZXIpXG5cbiAgICAgICAgcmVuZGVyOiAobW9kZWwpID0+XG4gICAgICAgICAgICB3aW5kb3cubSA9IG1vZGVsXG4gICAgICAgICAgICB2ZXJ0aWNlcyA9IG1vZGVsLnZlcnRpY2VzXG5cbiAgICAgICAgICAgIEBjdHguY2xlYXJDb2xvcigxLjAsIDEuMCwgMC4wLCAxLjApXG4gICAgICAgICAgICAjIOODkOODg+ODleOCoeaMh+WumumdnuWvvuW/nFxuICAgICAgICAgICAgQGN0eC5jbGVhcigpXG5cbiAgICAgICAgICAgICMg44K344Kn44O844OA55m76YyyXG4gICAgICAgICAgICBzaGFkZXJJZCA9IEBjdHguY3JlYXRlUHJvZ3JhbShAc2V0dGluZy52ZXJ0LCBAc2V0dGluZy5mcmFnKVxuICAgICAgICAgICAgQGN0eC51c2VQcm9ncmFtKHNoYWRlcklkKVxuXG4gICAgICAgICAgICAjIOODhuOCr+OCueODgeODo+iqreOBv+i+vOOBv1xuICAgICAgICAgICAgdGV4dHVyZUlkID0gQGxvYWRUZXh0dXJlKG1vZGVsLnRleHR1cmVzWzBdKVxuICAgICAgICAgICAgQGN0eC5hY3RpdmVUZXh0dXJlKDApXG4gICAgICAgICAgICBAY3R4LmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmVJZClcblxuICAgICAgICAgICAgIyB1bmlmb3Jt55m76YyyXG4gICAgICAgICAgICAjIHVuaWZvcm3jga7lnovjga/ljLrliKXjgZfjgarjgYRcbiAgICAgICAgICAgIEBjdHgudW5pZm9ybShzaGFkZXJJZCwgXCJtdnBNYXRyaXhcIiwgQGNvbXB1dGVNVlBNYXRyaXgoKSlcbiAgICAgICAgICAgIEBjdHgudW5pZm9ybShzaGFkZXJJZCwgXCJtb2RlbFZpZXdNYXRyaXhcIiwgQGNvbXB1dGVNb2RlbFZpZXdNYXRyaXgoKSlcbiAgICAgICAgICAgIEBjdHgudW5pZm9ybShzaGFkZXJJZCwgXCJjb2xvclwiLCB2ZWM0LmZyb21WYWx1ZXMoMS4wLCAxLjAsIDEuMCwgMS4wKSlcbiAgICAgICAgICAgIEBjdHgudW5pZm9ybShzaGFkZXJJZCwgXCJLYVwiLCB2ZWMzLmZyb21WYWx1ZXMoMS4wLCAxLjAsIDEuMCkpXG4gICAgICAgICAgICBAY3R4LnVuaWZvcm0oc2hhZGVySWQsIFwiS2RcIiwgdmVjMy5mcm9tVmFsdWVzKDEuMCwgMS4wLCAxLjApKVxuICAgICAgICAgICAgQGN0eC51bmlmb3JtKHNoYWRlcklkLCBcIktzXCIsIHZlYzMuZnJvbVZhbHVlcygxLjAsIDEuMCwgMS4wKSlcbiAgICAgICAgICAgIEBjdHgudW5pZm9ybShzaGFkZXJJZCwgXCJMYVwiLCB2ZWMzLmZyb21WYWx1ZXMoMC4xLCAwLjEsIDAuMSkpXG4gICAgICAgICAgICBAY3R4LnVuaWZvcm0oc2hhZGVySWQsIFwiTGRcIiwgdmVjMy5mcm9tVmFsdWVzKDAuNiwgMC42LCAwLjYpKVxuICAgICAgICAgICAgQGN0eC51bmlmb3JtKHNoYWRlcklkLCBcIkxzXCIsIHZlYzMuZnJvbVZhbHVlcygwLjMsIDAuMywgMC4zKSlcbiAgICAgICAgICAgIEBjdHgudW5pZm9ybShzaGFkZXJJZCwgXCJzaGluZXNzXCIsIDQuMClcbiAgICAgICAgICAgIEBjdHgudW5pZm9ybShzaGFkZXJJZCwgXCJ0ZXh0dXJlMFwiLCAwKSAjIOODhuOCr+OCueODgeODo+ODpuODi+ODg+ODiDDjgpLoqK3lrppcbiAgICAgICAgICAgIEBjdHgudW5pZm9ybShzaGFkZXJJZCwgXCJsaWdodFBvc2l0aW9uXCIsIHZlYzQuZnJvbVZhbHVlcyhbXS5jb25jYXQoQHNldHRpbmcubGlnaHRQb3NpdGlvbiwgWzEuMF0pLi4uKSlcblxuICAgICAgICAgICAgIyDpoILngrnlsZ7mgKfjgpJWQk/jgavjgZnjgotcbiAgICAgICAgICAgICMgZ2V0QXR0cmliTG9jYXRpb24g44Gv5b+F6KaB44Gq44GXLnZlcnRleEF0dHJpYlBvaW50ZXLjgafnm7TmjqXmjIflrprjgZnjgotcbiAgICAgICAgICAgICMgYXR0TG9jYXRpb24gPSBAY3R4LmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlcklkLCAncG9zaXRpb24nKVxuICAgICAgICAgICAgIyB2ZXJ0ZXhWYm8gPSBAc2VuZFZlcnRpY2VzKEBzZXR0aW5nLnZlcnRpY2VzKVxuICAgICAgICAgICAgIyBjb2xvclZibyA9IEBzZW5kVmVydGljZXMoQHNldHRpbmcuY29sb3JzKVxuICAgICAgICAgICAgdmVydGV4VmJvID0gQHNlbmRWZXJ0aWNlcyh2ZXJ0aWNlcylcbiAgICAgICAgICAgICMgY29sb3JWYm8gPSBAc2VuZFZlcnRpY2VzKG1vZGVsLmNvbG9ycylcbiAgICAgICAgICAgIG5vcm1hbFZibyA9IEBzZW5kVmVydGljZXMobW9kZWwubm9ybWFscylcbiAgICAgICAgICAgIHV2VmJvID0gQHNlbmRWZXJ0aWNlcyhtb2RlbC51dnMpXG4gICAgICAgICAgICB0Z3RWYm8gPSBAc2VuZFZlcnRpY2VzKG1vZGVsLnRhbmdlbnRzKVxuXG4gICAgICAgICAgICAjIGF0dHJpYnV0ZeWxnuaAp+OBq1ZCT+OCkueZu+mMslxuICAgICAgICAgICAgQGN0eC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdmVydGV4VmJvKVxuICAgICAgICAgICAgIyBjdHguZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXR0TG9jYXRpb24pOyAjIGF0dHJpYnV0ZeWxnuaAp+OBr+W4uOOBq+acieWKueOBqOOBmeOCi1xuICAgICAgICAgICAgQGN0eC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHNoYWRlcklkLCBcInBvc2l0aW9uXCIsIEBzZXR0aW5nLnN0cmlkZSlcblxuICAgICAgICAgICAgIyBAY3R4LmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBjb2xvclZibylcbiAgICAgICAgICAgICMgQGN0eC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHNoYWRlcklkLCBcImNvbG9yXCIsIDQpXG5cbiAgICAgICAgICAgIEBjdHguYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIG5vcm1hbFZibylcbiAgICAgICAgICAgIEBjdHgudmVydGV4QXR0cmliUG9pbnRlcihzaGFkZXJJZCwgXCJub3JtYWxcIiwgMylcblxuICAgICAgICAgICAgQGN0eC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdXZWYm8pXG4gICAgICAgICAgICBAY3R4LnZlcnRleEF0dHJpYlBvaW50ZXIoc2hhZGVySWQsIFwidXZcIiwgMilcblxuICAgICAgICAgICAgQGN0eC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGd0VmJvKVxuICAgICAgICAgICAgQGN0eC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHNoYWRlcklkLCBcInRhbmdlbnRcIiwgMylcblxuICAgICAgICAgICAgIyDjg6zjg7Pjg4Djg6rjg7PjgrBcbiAgICAgICAgICAgICMgQGN0eC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFUywgMCwgQHNldHRpbmcudmVydGljZXMubGVuZ3RoIC8gQHNldHRpbmcuc3RyaWRlKVxuICAgICAgICAgICAgQGN0eC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFUywgMCwgdmVydGljZXMubGVuZ3RoIC8gQHNldHRpbmcuc3RyaWRlKVxuXG4gICAgICAgICAgICAjIGZsdXNo6Z2e5a++5b+cXG4gICAgICAgICAgICAjIEBjdHguZmx1c2goKVxuXG4gICAgICAgIGNvbXB1dGVNVlBNYXRyaXg6IC0+XG4gICAgICAgICAgICBtb2RlbFZpZXcgPSBAY29tcHV0ZU1vZGVsVmlld01hdHJpeCgpXG4gICAgICAgICAgICBwcm9qZWN0aW9uID0gQGNvbXB1dGVQcm9qZWN0aW9uTWF0cml4KClcbiAgICAgICAgICAgIG1hdDQubXVsKG1hdDQuY3JlYXRlKCksIHByb2plY3Rpb24sIG1vZGVsVmlldylcblxuICAgICAgICBjb21wdXRlUHJvamVjdGlvbk1hdHJpeDogLT5cbiAgICAgICAgICAgIHdpZHRoID0gQHNldHRpbmcuY2FudmFzRWxlbWVudC53aWR0aFxuICAgICAgICAgICAgaGVpZ2h0ID0gQHNldHRpbmcuY2FudmFzRWxlbWVudC5oZWlnaHRcbiAgICAgICAgICAgIG5lYXIgPSBAc2V0dGluZy5uZWFyXG4gICAgICAgICAgICBmYXIgPSBAc2V0dGluZy5mYXJcblxuICAgICAgICAgICAgbWF0NC5wZXJzcGVjdGl2ZShtYXQ0LmNyZWF0ZSgpLCBNYXRoLlBJIC8gMi4wLCB3aWR0aCAvIGhlaWdodCwgbmVhciwgZmFyKVxuXG4gICAgICAgIGNvbXB1dGVNb2RlbFZpZXdNYXRyaXg6IC0+XG4gICAgICAgICAgICAjIOOCgeOCk+OBqeOBj+OBleOBhOOBruOBp+ODouODh+ODq+WkieaPm+ihjOWIl+OBr+WNmOS9jeihjOWIl+OBqOOBl+OBpuecgeeVpSFcbiAgICAgICAgICAgIG1hdDQubG9va0F0KG1hdDQuY3JlYXRlKCksIFswLjAsIDAuMCwgMy4wXSwgWzAuMCwgMC4wLCAwLjBdLCBbMC4wLCAxLjAsIDAuMF0pXG5cbiAgICAgICAgc2VuZFZlcnRpY2VzOiAoZGF0YSkgLT5cbiAgICAgICAgICAgIHZib0lkID0gQGN0eC5jcmVhdGVCdWZmZXIoKVxuICAgICAgICAgICAgQGN0eC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdmJvSWQpO1xuICAgICAgICAgICAgQGN0eC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gdmJvSWRcblxuICAgICAgICBsb2FkVGV4dHVyZTogKGltYWdlKSAtPlxuICAgICAgICAgICAgdGV4dHVyZUlkID0gQGN0eC5jcmVhdGVUZXh0dXJlKClcblxuICAgICAgICAgICAgIyDjg4bjgq/jgrnjg4Hjg6PjgpLjg5DjgqTjg7Pjg4njgZnjgotcbiAgICAgICAgICAgIEBjdHguYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZUlkKTtcblxuICAgICAgICAgICAgIyDjg4bjgq/jgrnjg4Hjg6PjgbjjgqTjg6Hjg7zjgrjjgpLpgannlKhcbiAgICAgICAgICAgIEBjdHgudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCBpbWFnZSlcblxuICAgICAgICAgICAgIyAjIOODn+ODg+ODl+ODnuODg+ODl+OCkueUn+aIkFxuICAgICAgICAgICAgIyBnbC5nZW5lcmF0ZU1pcG1hcChnbC5URVhUVVJFXzJEKTtcblxuICAgICAgICAgICAgIyDjg4bjgq/jgrnjg4Hjg6Pjga7jg5DjgqTjg7Pjg4njgpLnhKHlirnljJZcbiAgICAgICAgICAgIEBjdHguYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0ZXh0dXJlSWRcbiJdfQ==;
(function() {
  define('Setting',["util"], function(util) {
    var Setting;
    return Setting = (function() {
      function Setting(canvasElement, vert, frag, modelPath, near, far, stride, vertices, colors, textureFIle, lightPosition) {
        var arg, _i, _len;
        this.canvasElement = canvasElement;
        this.vert = vert;
        this.frag = frag;
        this.modelPath = modelPath;
        this.near = near;
        this.far = far;
        this.stride = stride != null ? stride : 3;
        this.vertices = vertices != null ? vertices : [];
        this.colors = colors != null ? colors : [];
        this.textureFIle = textureFIle != null ? textureFIle : "";
        this.lightPosition = lightPosition != null ? lightPosition : [];
        for (_i = 0, _len = arguments.length; _i < _len; _i++) {
          arg = arguments[_i];
          util.checkNull;
        }
      }

      return Setting;

    })();
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNldHRpbmcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsRUFBQSxNQUFBLENBQU8sQ0FBQyxNQUFELENBQVAsRUFBaUIsU0FBQyxJQUFELEdBQUE7QUFDaEIsUUFBQSxPQUFBO1dBQU07QUFDUSxNQUFBLGlCQUNYLGFBRFcsRUFFWCxJQUZXLEVBR1gsSUFIVyxFQUlYLFNBSlcsRUFLWCxJQUxXLEVBTVgsR0FOVyxFQU9YLE1BUFcsRUFRWCxRQVJXLEVBU1gsTUFUVyxFQVVGLFdBVkUsRUFXRixhQVhFLEdBQUE7QUFhWixZQUFBLGFBQUE7QUFBQSxRQVpBLElBQUMsQ0FBQSxnQkFBQSxhQVlELENBQUE7QUFBQSxRQVhBLElBQUMsQ0FBQSxPQUFBLElBV0QsQ0FBQTtBQUFBLFFBVkEsSUFBQyxDQUFBLE9BQUEsSUFVRCxDQUFBO0FBQUEsUUFUQSxJQUFDLENBQUEsWUFBQSxTQVNELENBQUE7QUFBQSxRQVJBLElBQUMsQ0FBQSxPQUFBLElBUUQsQ0FBQTtBQUFBLFFBUEEsSUFBQyxDQUFBLE1BQUEsR0FPRCxDQUFBO0FBQUEsUUFOQSxJQUFDLENBQUEsMEJBQUEsU0FBUyxDQU1WLENBQUE7QUFBQSxRQUxBLElBQUMsQ0FBQSw4QkFBQSxXQUFXLEVBS1osQ0FBQTtBQUFBLFFBSkEsSUFBQyxDQUFBLDBCQUFBLFNBQVMsRUFJVixDQUFBO0FBQUEsUUFIUyxJQUFDLENBQUEsb0NBQUEsY0FBYyxFQUd4QixDQUFBO0FBQUEsUUFGUyxJQUFDLENBQUEsd0NBQUEsZ0JBQWdCLEVBRTFCLENBQUE7QUFBQSxhQUFBLGdEQUFBOzhCQUFBO0FBQUEsVUFBQSxJQUFJLENBQUMsU0FBTCxDQUFBO0FBQUEsU0FiWTtNQUFBLENBQWI7O3FCQUFBOztTQUZlO0VBQUEsQ0FBakIsQ0FBQSxDQUFBO0FBQUEiLCJmaWxlIjoiU2V0dGluZy5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZSBbXCJ1dGlsXCJdLCAodXRpbCkgLT5cblx0Y2xhc3MgU2V0dGluZ1xuXHRcdGNvbnN0cnVjdG9yOiAoXG5cdFx0XHRAY2FudmFzRWxlbWVudCxcblx0XHRcdEB2ZXJ0LFxuXHRcdFx0QGZyYWcsXG5cdFx0XHRAbW9kZWxQYXRoLFxuXHRcdFx0QG5lYXIsXG5cdFx0XHRAZmFyLFxuXHRcdFx0QHN0cmlkZSA9IDMsXG5cdFx0XHRAdmVydGljZXMgPSBbXSxcblx0XHRcdEBjb2xvcnMgPSBbXSxcbiAgICAgICAgICAgIEB0ZXh0dXJlRklsZSA9IFwiXCIsXG4gICAgICAgICAgICBAbGlnaHRQb3NpdGlvbiA9IFtdXG5cdFx0KSAtPlxuXHRcdFx0dXRpbC5jaGVja051bGwgZm9yIGFyZyBpbiBhcmd1bWVudHNcbiJdfQ==;
(function() {
  var onload;

  window.render = function() {
    return require(["App", "Setting"], function(App, Setting) {
      var c, colors, lightPosition, select, setting, stride, textureFile, vertices;
      select = function(query) {
        return document.querySelector(query);
      };
      c = select("#controlpanel");
      setting = new Setting(document.querySelector('#display'), c.vertSource, c.fragSource, c.modelPath, 0.1, 100, stride = 3, vertices = [0.0, 1.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 2.0, 0.0, -1.0, 2.0, 0.0], colors = [0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0], textureFile = c.image, lightPosition = c.lightPosition);
      return App.main(setting);
    });
  };

  onload = window.render;

  $(function() {
    return setTimeout(onload, 1000);
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQSxNQUFBOztBQUFBLEVBQUEsTUFBTSxDQUFDLE1BQVAsR0FBZ0IsU0FBQSxHQUFBO1dBQ1osT0FBQSxDQUFRLENBQUMsS0FBRCxFQUFRLFNBQVIsQ0FBUixFQUE0QixTQUFDLEdBQUQsRUFBTSxPQUFOLEdBQUE7QUFDeEIsVUFBQSx3RUFBQTtBQUFBLE1BQUEsTUFBQSxHQUFTLFNBQUMsS0FBRCxHQUFBO2VBQVcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsRUFBWDtNQUFBLENBQVQsQ0FBQTtBQUFBLE1BQ0EsQ0FBQSxHQUFJLE1BQUEsQ0FBTyxlQUFQLENBREosQ0FBQTtBQUFBLE1BR0EsT0FBQSxHQUFjLElBQUEsT0FBQSxDQUVWLFFBQVEsQ0FBQyxhQUFULENBQXVCLFVBQXZCLENBRlUsRUFJVixDQUFDLENBQUMsVUFKUSxFQUtWLENBQUMsQ0FBQyxVQUxRLEVBTVYsQ0FBQyxDQUFDLFNBTlEsRUFRVixHQVJVLEVBU1YsR0FUVSxFQVlWLE1BQUEsR0FBUyxDQVpDLEVBZVYsUUFBQSxHQUFXLENBQ1AsR0FETyxFQUNGLEdBREUsRUFDRyxHQURILEVBRVAsR0FGTyxFQUVGLEdBRkUsRUFFRyxHQUZILEVBR1AsQ0FBQSxHQUhPLEVBR0QsR0FIQyxFQUdJLEdBSEosRUFLUCxHQUxPLEVBS0YsR0FMRSxFQUtHLEdBTEgsRUFNUCxHQU5PLEVBTUYsR0FORSxFQU1HLEdBTkgsRUFPUCxDQUFBLEdBUE8sRUFPRCxHQVBDLEVBT0ksR0FQSixDQWZELEVBeUJWLE1BQUEsR0FBUyxDQUNMLEdBREssRUFDQSxHQURBLEVBQ0ssR0FETCxFQUNVLEdBRFYsRUFFTCxHQUZLLEVBRUEsR0FGQSxFQUVLLEdBRkwsRUFFVSxHQUZWLEVBR0wsR0FISyxFQUdBLEdBSEEsRUFHSyxHQUhMLEVBR1UsR0FIVixFQUtMLEdBTEssRUFLQSxHQUxBLEVBS0ssR0FMTCxFQUtVLEdBTFYsRUFNTCxHQU5LLEVBTUEsR0FOQSxFQU1LLEdBTkwsRUFNVSxHQU5WLEVBT0wsR0FQSyxFQU9BLEdBUEEsRUFPSyxHQVBMLEVBT1UsR0FQVixDQXpCQyxFQW1DVixXQUFBLEdBQWMsQ0FBQyxDQUFDLEtBbkNOLEVBb0NWLGFBQUEsR0FBZ0IsQ0FBQyxDQUFDLGFBcENSLENBSGQsQ0FBQTthQXlDQSxHQUFHLENBQUMsSUFBSixDQUFTLE9BQVQsRUExQ3dCO0lBQUEsQ0FBNUIsRUFEWTtFQUFBLENBQWhCLENBQUE7O0FBQUEsRUE4Q0EsTUFBQSxHQUFTLE1BQU0sQ0FBQyxNQTlDaEIsQ0FBQTs7QUFBQSxFQStDQSxDQUFBLENBQUUsU0FBQSxHQUFBO1dBQU0sVUFBQSxDQUFXLE1BQVgsRUFBbUIsSUFBbkIsRUFBTjtFQUFBLENBQUYsQ0EvQ0EsQ0FBQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cucmVuZGVyID0gLT5cbiAgICByZXF1aXJlIFtcIkFwcFwiLCBcIlNldHRpbmdcIl0sIChBcHAsIFNldHRpbmcpIC0+XG4gICAgICAgIHNlbGVjdCA9IChxdWVyeSkgLT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSlcbiAgICAgICAgYyA9IHNlbGVjdChcIiNjb250cm9scGFuZWxcIilcblxuICAgICAgICBzZXR0aW5nID0gbmV3IFNldHRpbmcoXG4gICAgICAgICAgICAjIENhbnZhc+imgee0oFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rpc3BsYXknKSxcblxuICAgICAgICAgICAgYy52ZXJ0U291cmNlLFxuICAgICAgICAgICAgYy5mcmFnU291cmNlLFxuICAgICAgICAgICAgYy5tb2RlbFBhdGgsXG5cbiAgICAgICAgICAgIDAuMSxcbiAgICAgICAgICAgIDEwMCxcblxuICAgICAgICAgICAgIyDpoILngrnlsZ7mgKfjga7opoHntKDmlbBcbiAgICAgICAgICAgIHN0cmlkZSA9IDMsXG5cbiAgICAgICAgICAgICMg44Oi44OH44Or44OH44O844K/XG4gICAgICAgICAgICB2ZXJ0aWNlcyA9IFtcbiAgICAgICAgICAgICAgICAwLjAsIDEuMCwgMC4wLFxuICAgICAgICAgICAgICAgIDEuMCwgMC4wLCAwLjAsXG4gICAgICAgICAgICAgICAgLTEuMCwgMC4wLCAwLjAsXG4gICAgICAgICAgICAgICAgIyDjgqvjg6rjg7PjgrDjgafmtojjgZnnlKhcbiAgICAgICAgICAgICAgICAwLjAsIDEuMCwgMC4wLFxuICAgICAgICAgICAgICAgIDEuMCwgMi4wLCAwLjAsXG4gICAgICAgICAgICAgICAgLTEuMCwgMi4wLCAwLjBcbiAgICAgICAgICAgIF0sXG5cbiAgICAgICAgICAgIGNvbG9ycyA9IFtcbiAgICAgICAgICAgICAgICAwLjAsIDEuMCwgMC4wLCAxLjAsXG4gICAgICAgICAgICAgICAgMS4wLCAwLjAsIDAuMCwgMS4wLFxuICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAxLjAsIDEuMCxcbiAgICAgICAgICAgICAgICAjIOOCq+ODquODs+OCsOOBp+a2iOOBmeeUqFxuICAgICAgICAgICAgICAgIDAuMCwgMS4wLCAwLjAsIDEuMCxcbiAgICAgICAgICAgICAgICAxLjAsIDAuMCwgMC4wLCAxLjAsXG4gICAgICAgICAgICAgICAgMC4wLCAwLjAsIDEuMCwgMS4wLFxuICAgICAgICAgICAgXSxcblxuICAgICAgICAgICAgdGV4dHVyZUZpbGUgPSBjLmltYWdlLFxuICAgICAgICAgICAgbGlnaHRQb3NpdGlvbiA9IGMubGlnaHRQb3NpdGlvblxuICAgICAgICApXG4gICAgICAgIEFwcC5tYWluKHNldHRpbmcpXG5cbiMgZm9yIGRlYnVnXG5vbmxvYWQgPSB3aW5kb3cucmVuZGVyXG4kKCgpIC0+IHNldFRpbWVvdXQob25sb2FkLCAxMDAwKSlcbiJdfQ==;
define("main", function(){});
