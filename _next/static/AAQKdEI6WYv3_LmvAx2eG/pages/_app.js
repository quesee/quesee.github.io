(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))}},1:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"5fIB":function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=r(n("Xuae")),i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=l;var s=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,c=s.length;u<c;u++){var l=s[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var f=o.props[l],p=r[l]||new Set;p.has(f)?a=!1:(p.add(f),r[l]=p)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var d=a.default();function v(e){var t=e.children;return o.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:c.isInAmpMode(e)},t)}))}))}v.rewind=d.rewind,t.default=v},B5Ud:function(e,t,n){"use strict";var r=n("/GRZ"),o=n("i2R6"),a=n("48fX"),i=n("tCBg"),u=n("T0f4"),c=n("vJKn");function l(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var f=n("AroE");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=h,t.default=void 0;var s=f(n("q1tI")),p=n("g/15");function d(e){var t,n,r;return c.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.Component,n=e.ctx,o.next=3,c.awrap((0,p.loadGetInitialProps)(t,n));case 3:return r=o.sent,o.abrupt("return",{pageProps:r});case 5:case"end":return o.stop()}}),null,null,null,Promise)}t.AppInitialProps=p.AppInitialProps;var v=function(e){a(c,e);var t,n=(t=c,function(){var e,n=u(t);if(l()){var r=u(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return i(this,e)});function c(){return r(this,c),n.apply(this,arguments)}return o(c,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=e.__N_SSG,a=e.__N_SSP;return s.default.createElement(n,Object.assign({},r,o||a?{}:{url:h(t)}))}}]),c}(s.default.Component);function h(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return r},get pathname(){return t},get asPath(){return n},back:function(){e.back()},push:function(t,n){return e.push(t,n)},pushTo:function(t,n){var r=n?t:"",o=n||t;return e.push(r,o)},replace:function(t,n){return e.replace(t,n)},replaceTo:function(t,n){var r=n?t:"",o=n||t;return e.replace(r,o)}}}t.default=v,v.origGetInitialProps=d,v.getInitialProps=d},Xuae:function(e,t,n){"use strict";var r=n("/GRZ"),o=n("qXWd"),a=n("i2R6"),i=n("48fX"),u=n("tCBg"),c=n("T0f4"),l=n("mPvQ");function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var s=n("q1tI"),p=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(l){i(v,l);var s,d=(s=v,function(){var e,t=c(s);if(f()){var n=c(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u(this,e)});function v(e){var a;return r(this,v),a=d.call(this,e),p&&(t.add(o(a)),n(o(a))),a}return a(v,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(v,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),v}(s.Component)}},cha2:function(e,t,n){"use strict";n.r(t);var r=n("wx14"),o=n("o0o1"),a=n.n(o),i=n("1OyB"),u=n("JX7q"),c=n("vuIU"),l=n("Ji7U"),f=n("md7G"),s=n("foSv"),p=n("rePB"),d=n("8Bbg"),v=n.n(d),h=n("q1tI"),b=n.n(h),m=n("8Kt/"),y=n.n(m),g=(n("17x9"),n("OKji")),O=n("aXM8"),w=n("hfi/");var j=function(e){var t=e.children,n=e.theme,o=Object(O.a)(),a=b.a.useMemo((function(){var e=null===o?n:function(e,t){return"function"===typeof t?t(e):Object(r.a)({},e,{},t)}(o,n);return null!=e&&(e[w.a]=null!==o),e}),[n,o]);return b.a.createElement(g.a.Provider,{value:a},t)},x=n("H2TA"),P={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},S=function(e){return Object(r.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};var _=Object(x.a)((function(e){return{"@global":{html:P,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(r.a)({margin:0},S(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,n=void 0===t?null:t;return e.classes,h.createElement(h.Fragment,null,n)})),k=n("viY9"),C=Object(k.a)({palette:{type:"dark"}}),A=n("riab");var E,I,M=n("2vnA"),R=(I=function(e,t,n,r,o){var a={};return Object.keys(r).forEach((function(e){a[e]=r[e]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),a),o&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(o):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}((E=function e(t){var n,r,o,a;Object(i.a)(this,e),n=this,r="test",a=this,(o=I)&&Object.defineProperty(n,r,{enumerable:o.enumerable,configurable:o.configurable,writable:o.writable,value:o.initializer?o.initializer.call(a):void 0})}).prototype,"test",[M.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"mobx works"}}),E),D=!1;Object(A.d)(D);var z=function e(t){Object(i.a)(this,e),Object(p.a)(this,"exampleStore",void 0),this.exampleStore=new R(t)},B=null;function T(e){return D?new z(e):(null===B&&(B=new z(e)),B)}var q=n("TyAF"),X=b.a.createElement;function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function H(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var K=function(e){Object(l.a)(o,e);var t,n=(t=o,function(){var e,n=Object(s.a)(t);if(H()){var r=Object(s.a)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Object(f.a)(this,e)});function o(e){var t;Object(i.a)(this,o),t=n.call(this,e),Object(p.a)(Object(u.a)(t),"mobxStore",void 0),Object(p.a)(Object(u.a)(t),"pageContext",void 0);return t.mobxStore=T({}),t}return Object(c.a)(o,null,[{key:"getInitialProps",value:function(e){var t,n;return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=T({}),e.ctx.mobxStore=t,r.next=4,a.a.awrap(v.a.getInitialProps(e));case 4:return n=r.sent,r.abrupt("return",G({},n,{initialMobxState:t}));case 6:case"end":return r.stop()}}),null,null,null,Promise)}}]),Object(c.a)(o,[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return X(b.a.Fragment,null,X(y.a,null,X("title",null,"Next.js TypeScript Example")),X(j,{theme:C},X(_,null),X(q.a,{store:this.mobxStore},X(t,Object(r.a)({pageContext:this.pageContext},n)))))}}]),o}(v.a);t.default=K},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.AmpStateContext=o.createContext({})},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("kG2m");e.exports=function(e){return r(e)||o(e)||a()}},o0o1:function(e,t,n){e.exports=n("ls82")},rlHP:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}}},[[1,0,1,3,4,2]]]);