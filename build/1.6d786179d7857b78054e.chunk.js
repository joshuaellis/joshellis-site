(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0b8eb3e35929778b339a":function(e,t,n){"use strict";n.r(t);var o=n("8af190b70a6bc55c6f1b"),r=n.n(o),i=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),a=n("a28fc3c963a1d4d1a2e5"),c=n("ab4cb61bcb2dc161defb"),f=n("d95b0cf107403b178365"),u=n("54f683fcda7806277002"),l="app/HomePage/DEFAULT_ACTION",p=Object(u.fromJS)({});var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;switch(arguments[1].type){case l:default:return e}},b=function(e){return e.get("homePage",p)},d=function(){return Object(a.a)(b,function(e){return e.toJS()})},y=n("deb1edf8e03fc2092ec7"),v=n("2a0335303f85c0f28de1"),h=n.n(v),m=n("e95a63b25fb92ed15721"),g=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var c in i)void 0===n[c]&&(n[c]=i[c]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var f=Array(a),u=0;u<a;u++)f[u]=arguments[u+3];n.children=f}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),w=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var _=Object(y.a)(m.NavLink).withConfig({displayName:"LargeNavigation__Link"})(["font-family:'Relevant',Helvetica,sans-serif;font-weight:400;font-size:3.2rem;text-decoration:none;letter-spacing:0.05rem;display:inline-block;"]),O=y.a.div.withConfig({displayName:"LargeNavigation__Wrapper"})(["position:relative;bottom:15%;text-align:center;"]),j=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),w(t,[{key:"render",value:function(){return this.props.portrait?g(O,{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"}},void 0,g(_,{style:{fontSize:"2.4rem"},to:"/about"},void 0,"About"),g("h2",{style:{opacity:.5,marginTop:"40px",marginBottom:"40px"}},void 0,"Experiments"),g(_,{style:{fontSize:"2.4rem"},to:"/work"},void 0,"Work")):g(O,{},void 0,g(_,{to:"/about"},void 0,"About"),g("h2",{style:{marginLeft:128,marginRight:128,display:"inline-block",opacity:.5}},void 0,"Experiments"),g(_,{to:"/work"},void 0,"Work"))}}]),t}(),k=n("f318ce6ba0668e624433"),P=n("76071651b6395d00ce72");n.d(t,"HomePage",function(){return E});var x=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var c in i)void 0===n[c]&&(n[c]=i[c]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var f=Array(a),u=0;u<a;u++)f[u]=arguments[u+3];n.children=f}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),S=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var C=y.a.div.withConfig({displayName:"HomePage__Wrapper"})(["height:calc(100vh - 200px);width:100%;display:flex;justify-content:center;align-items:center;"]),E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),S(t,[{key:"render",value:function(){return x("div",{},void 0,x(k.a,{}),x(C,{},void 0,x(h.a,{minDeviceWidth:697},void 0,x(j,{portrait:!1})),x(h.a,{maxDeviceWidth:696},void 0,x(j,{portrait:!0}))),x(P.a,{}))}}]),t}(),N=Object(a.b)({homepage:d()});var T=Object(i.connect)(N,function(e){return{dispatch:e}}),A=Object(f.a)({key:"homePage",reducer:s});t.default=Object(c.compose)(A,T)(E)}}]);