function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{F4UR:function(n,e,t){"use strict";t.r(e);var i,o,r=t("ofXK"),c=t("tyNb"),a=t("fXoL"),s=t("lGQG"),u=[{path:"",component:(i=function(){function n(e,t){_classCallCheck(this,n),this.authService=e,this.router=t}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"login",value:function(){this.authService.login(),this.router.navigate(["/security"])}}]),n}(),i.\u0275fac=function(n){return new(n||i)(a.Fb(s.a),a.Fb(c.c))},i.\u0275cmp=a.zb({type:i,selectors:[["app-login"]],decls:5,vars:0,consts:[["type","button",1,"btn","btn-primary",3,"click"]],template:function(n,e){1&n&&(a.Ib(0,"h1"),a.Wb(1,"Login page"),a.Hb(),a.Gb(2,"hr"),a.Ib(3,"button",0),a.Ob("click",(function(){return e.login()})),a.Wb(4," Login\n"),a.Hb())},styles:[""]}),i)}],l=((o=function n(){_classCallCheck(this,n)}).\u0275mod=a.Db({type:o}),o.\u0275inj=a.Cb({factory:function(n){return new(n||o)},imports:[[r.b,c.f.forChild(u)],c.f]}),o);t.d(e,"LoginModule",(function(){return b}));var f,b=((f=function n(){_classCallCheck(this,n)}).\u0275mod=a.Db({type:f}),f.\u0275inj=a.Cb({factory:function(n){return new(n||f)},imports:[[r.b,l]]}),f)}}]);