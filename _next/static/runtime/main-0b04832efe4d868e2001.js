(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/GRZ":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},0:function(e,t,r){r("oSxo"),e.exports=r("BMP1")},"1ccW":function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},BMP1:function(e,t,r){"use strict";var n=r("7KCV")(r("IKlv"));window.next=n,(0,n.default)().catch((function(e){console.error(e.message+"\n"+e.stack)}))},DqTX:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(){var e=null;return function(t){var r=e=Promise.resolve().then((function(){if(r===e){e=null;var n={};t.forEach((function(e){var t=n[e.type]||[];t.push(e),n[e.type]=t}));var a=n.title?n.title[0]:null,i="";if(a){var c=a.props.children;i="string"===typeof c?c:c.join("")}i!==document.title&&(document.title=i),["meta","base","link","style","script"].forEach((function(e){!function(e,t){var r=document.getElementsByTagName("head")[0],n=r.querySelector("meta[name=next-head-count]");0;for(var a=Number(n.content),i=[],c=0,s=n.previousElementSibling;c<a;c++,s=s.previousElementSibling)s.tagName.toLowerCase()===e&&i.push(s);var u=t.map(o).filter((function(e){for(var t=0,r=i.length;t<r;t++){if(i[t].isEqualNode(e))return i.splice(t,1),!1}return!0}));i.forEach((function(e){return e.parentNode.removeChild(e)})),u.forEach((function(e){return r.insertBefore(e,n)})),n.content=(a-i.length+u.length).toString()}(e,n[e]||[])}))}}))}};var n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"};function o(e){var t=e.type,r=e.props,o=document.createElement(t);for(var a in r)if(r.hasOwnProperty(a)&&"children"!==a&&"dangerouslySetInnerHTML"!==a&&void 0!==r[a]){var i=n[a]||a.toLowerCase();o.setAttribute(i,r[a])}var c=r.children,s=r.dangerouslySetInnerHTML;return s?o.innerHTML=s.__html||"":c&&(o.textContent="string"===typeof c?c:c.join("")),o}},IKlv:function(e,t,r){"use strict";var n=r("vJKn"),o=r("/GRZ"),a=r("i2R6"),i=r("48fX"),c=r("tCBg"),s=r("T0f4"),u=r("zoAU");function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var l=r("7KCV"),p=r("AroE");t.__esModule=!0,t.render=V,t.renderError=z,t.default=t.emitter=t.router=t.version=void 0;var d=p(r("1ccW")),v=(p(r("7KCV")),p(r("q1tI"))),h=p(r("i8i4")),m=p(r("DqTX")),g=r("nOHt"),y=p(r("dZ6Y")),w=r("g/15"),E=p(r("zmvN")),b=l(r("yLiY")),_=r("FYa8"),P=r("qOIg"),x=r("s4NR"),R=r("/jkW"),S=r("bGXG");"finally"in Promise.prototype||(Promise.prototype.finally=r("Z577"));var k=JSON.parse(document.getElementById("__NEXT_DATA__").textContent);window.__NEXT_DATA__=k;t.version="9.3.5";var C=k.props,T=k.err,j=k.page,A=k.query,I=k.buildId,L=k.assetPrefix,N=k.runtimeConfig,M=k.dynamicIds,O=k.isFallback,D=L||"";r.p=D+"/_next/",b.setConfig({serverRuntimeConfig:{},publicRuntimeConfig:N||{}});var U=(0,w.getURL)(),B=new E.default(I,D),q=function(e){var t=u(e,2),r=t[0],n=t[1];return B.registerPage(r,n)};window.__NEXT_P&&window.__NEXT_P.map(q),window.__NEXT_P=[],window.__NEXT_P.push=q;var W,G,H,X,F,Y,Z=(0,m.default)(),K=document.getElementById("__next");t.router=G;var $=function(e){i(n,e);var t,r=(t=n,function(){var e,r=s(t);if(f()){var n=s(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return c(this,e)});function n(){return o(this,n),r.apply(this,arguments)}return a(n,[{key:"componentDidCatch",value:function(e,t){this.props.fn(e,t)}},{key:"componentDidMount",value:function(){this.scrollToHash(),G.isSsr&&(O||k.nextExport&&((0,R.isDynamicRoute)(G.pathname)||location.search)||C.__N_SSG&&location.search)&&G.replace(G.pathname+"?"+(0,x.stringify)((0,d.default)({},G.query,{},(0,x.parse)(location.search.substr(1)))),U,{_h:1,shallow:!O})}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=location.hash;if(e=e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout((function(){return t.scrollIntoView()}),0)}}},{key:"render",value:function(){return this.props.children}}]),n}(v.default.Component),J=(0,y.default)();t.emitter=J;function V(e){return n.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.err){t.next=4;break}return t.next=3,n.awrap(z(e));case 3:return t.abrupt("return");case 4:return t.prev=4,t.next=7,n.awrap(ie(e));case 7:t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(4),t.next=13,n.awrap(z((0,d.default)({},e,{err:t.t0})));case 13:case"end":return t.stop()}}),null,null,[[4,9]],Promise)}function z(e){var t,r,o,a,i,c;return n.async((function(s){for(;;)switch(s.prev=s.next){case 0:t=e.App,r=e.err,s.next=3;break;case 3:return console.error(r),s.next=7,n.awrap(B.loadPage("/_error"));case 7:if(o=s.sent,H=o.page,a=ae(t),i={Component:H,AppTree:a,router:G,ctx:{err:r,pathname:j,query:A,asPath:U,AppTree:a}},!e.props){s.next=15;break}s.t0=e.props,s.next=18;break;case 15:return s.next=17,n.awrap((0,w.loadGetInitialProps)(t,i));case 17:s.t0=s.sent;case 18:return c=s.t0,s.next=21,n.awrap(ie((0,d.default)({},e,{err:r,Component:H,props:c})));case 21:case"end":return s.stop()}}),null,null,null,Promise)}t.default=function(e){var r,o,a,i,c;return n.async((function(s){for(;;)switch(s.prev=s.next){case 0:return(void 0===e?{}:e).webpackHMR,s.next=4,n.awrap(B.loadPageScript("/_app"));case 4:return r=s.sent,o=r.page,a=r.mod,F=o,a&&a.unstable_onPerformanceData&&(Y=function(e){var t=e.name,r=e.startTime,n=e.value,o=e.duration,i=e.entryType;a.unstable_onPerformanceData({name:t,startTime:r,value:n,duration:o,entryType:i})}),i=T,s.prev=10,s.next=14,n.awrap(B.loadPage(j));case 14:c=s.sent,X=c.page,s.next=20;break;case 20:s.next=25;break;case 22:s.prev=22,s.t0=s.catch(10),i=s.t0;case 25:if(!window.__NEXT_PRELOADREADY){s.next=28;break}return s.next=28,n.awrap(window.__NEXT_PRELOADREADY(M));case 28:return t.router=G=(0,g.createRouter)(j,A,U,{initialProps:C,pageLoader:B,App:F,Component:X,wrapApp:ae,err:i,isFallback:O,subscription:function(e,t){V({App:t,Component:e.Component,props:e.props,err:e.err})}}),V({App:F,Component:X,props:C,err:i}),s.abrupt("return",J);case 34:s.next=36;break;case 36:case"end":return s.stop()}}),null,null,[[10,22]],Promise)};var Q="function"===typeof h.default.hydrate;function ee(e,t){if(w.ST&&performance.mark("beforeRender"),Q?(h.default.hydrate(e,t,te),Q=!1):h.default.render(e,t,re),Y&&w.ST)try{(0,S.observeLayoutShift)(Y),(0,S.observeLargestContentfulPaint)(Y),(0,S.observePaint)(Y)}catch(r){window.addEventListener("load",(function(){performance.getEntriesByType("paint").forEach(Y)}))}}function te(){w.ST&&(performance.mark("afterHydrate"),performance.measure("Next.js-before-hydration","navigationStart","beforeRender"),performance.measure("Next.js-hydration","beforeRender","afterHydrate"),Y&&(performance.getEntriesByName("Next.js-hydration").forEach(Y),performance.getEntriesByName("beforeRender").forEach(Y)),ne())}function re(){if(w.ST){performance.mark("afterRender");var e=performance.getEntriesByName("routeChange","mark");e.length&&(performance.measure("Next.js-route-change-to-render",e[0].name,"beforeRender"),performance.measure("Next.js-render","beforeRender","afterRender"),Y&&(performance.getEntriesByName("Next.js-render").forEach(Y),performance.getEntriesByName("Next.js-route-change-to-render").forEach(Y)),ne(),["Next.js-route-change-to-render","Next.js-render"].forEach((function(e){return performance.clearMeasures(e)})))}}function ne(){["beforeRender","afterHydrate","afterRender","routeChange"].forEach((function(e){return performance.clearMarks(e)}))}function oe(e){var t=e.children;return v.default.createElement($,{fn:function(e){return z({App:F,err:e}).catch((function(e){return console.error("Error rendering page: ",e)}))}},v.default.createElement(P.RouterContext.Provider,{value:(0,g.makePublicRouterInstance)(G)},v.default.createElement(_.HeadManagerContext.Provider,{value:Z},t)))}var ae=function(e){return function(t){var r=(0,d.default)({},t,{Component:X,err:T,router:G});return v.default.createElement(oe,null,v.default.createElement(e,r))}};function ie(e){var t,r,o,a,i,c,s,u,f,l,p;return n.async((function(h){for(;;)switch(h.prev=h.next){case 0:if(t=e.App,r=e.Component,o=e.props,a=e.err,o||!r||r===H||W.Component!==H){h.next=8;break}return c=(i=G).pathname,s=i.query,u=i.asPath,f=ae(t),l={router:G,AppTree:f,Component:H,ctx:{err:a,pathname:c,query:s,asPath:u,AppTree:f}},h.next=7,n.awrap((0,w.loadGetInitialProps)(t,l));case 7:o=h.sent;case 8:r=r||W.Component,o=o||W.props,p=(0,d.default)({},o,{Component:r,err:a,router:G}),W=p,J.emit("before-reactdom-render",{Component:r,ErrorComponent:H,appProps:p}),ee(v.default.createElement(oe,null,v.default.createElement(t,p)),K),J.emit("after-reactdom-render",{Component:r,ErrorComponent:H,appProps:p});case 16:case"end":return h.stop()}}),null,null,null,Promise)}},Qetd:function(e,t,r){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},Z577:function(e,t){Promise.prototype.finally=function(e){if("function"!=typeof e)return this.then(e,e);var t=this.constructor||Promise;return this.then((function(r){return t.resolve(e()).then((function(){return r}))}),(function(r){return t.resolve(e()).then((function(){throw r}))}))}},bGXG:function(e,t,r){"use strict";function n(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e){return!(!self.PerformanceObserver||!PerformanceObserver.supportedEntryTypes)&&PerformanceObserver.supportedEntryTypes.includes(e)}t.__esModule=!0,t.observeLayoutShift=function(e){if(a("layout-shift")){var t=0,r=new PerformanceObserver((function(e){var r,o=n(e.getEntries());try{for(o.s();!(r=o.n()).done;){var a=r.value;a.hadRecentInput||(t+=a.value)}}catch(i){o.e(i)}finally{o.f()}}));r.observe({type:"layout-shift",buffered:!0}),document.addEventListener("visibilitychange",(function n(){"hidden"===document.visibilityState&&(r.takeRecords(),r.disconnect(),document.removeEventListener("visibilitychange",n,!0),e({name:"cumulative-layout-shift",value:t}))}),!0)}},t.observeLargestContentfulPaint=function(e){if(a("largest-contentful-paint")){var t;new PerformanceObserver((function(e){var r=e.getEntries(),n=r[r.length-1];t=n.renderTime||n.loadTime})).observe({type:"largest-contentful-paint",buffered:!0}),document.addEventListener("visibilitychange",(function r(){t&&"hidden"===document.visibilityState&&(document.removeEventListener("visibilitychange",r,!0),e({name:"largest-contentful-paint",value:t}))}),!0)}},t.observePaint=function(e){new PerformanceObserver((function(t){t.getEntries().forEach(e)})).observe({type:"paint",buffered:!0})}},i2R6:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},oSxo:function(e,t,r){"use strict";r.r(t);try{self["workbox:window:5.1.3"]&&_()}catch(l){}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}try{self["workbox:core:5.1.3"]&&_()}catch(l){}var o=function(){var e=this;this.promise=new Promise((function(t,r){e.resolve=t,e.reject=r}))};function a(e,t){var r=location.href;return new URL(e,r).href===new URL(t,r).href}var i=function(e,t){this.type=e,Object.assign(this,t)};function c(e,t,r){return r?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function s(){}var u=function(e){var t,r;function s(t,r){var n,s;return void 0===r&&(r={}),(n=e.call(this)||this).t={},n.i=0,n.o=new o,n.u=new o,n.s=new o,n.v=0,n.h=new Set,n.l=function(){var e=n.g,t=e.installing;n.i>0||!a(t.scriptURL,n.m)||performance.now()>n.v+6e4?(n.P=t,e.removeEventListener("updatefound",n.l)):(n.p=t,n.h.add(t),n.o.resolve(t)),++n.i,t.addEventListener("statechange",n.k)},n.k=function(e){var t=n.g,r=e.target,o=r.state,a=r===n.P,c=a?"external":"",s={sw:r,originalEvent:e};!a&&n.j&&(s.isUpdate=!0),n.dispatchEvent(new i(c+o,s)),"installed"===o?n.O=self.setTimeout((function(){"installed"===o&&t.waiting===r&&n.dispatchEvent(new i(c+"waiting",s))}),200):"activating"===o&&(clearTimeout(n.O),a||n.u.resolve(r))},n.R=function(e){var t=n.p;t===navigator.serviceWorker.controller&&(n.dispatchEvent(new i("controlling",{sw:t,originalEvent:e,isUpdate:n.j})),n.s.resolve(t))},n.S=(s=function(e){var t=e.data,r=e.source;return c(n.getSW(),(function(){n.h.has(r)&&n.dispatchEvent(new i("message",{data:t,sw:r,originalEvent:e}))}))},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return Promise.resolve(s.apply(this,e))}catch(e){return Promise.reject(e)}}),n.m=t,n.t=r,navigator.serviceWorker.addEventListener("message",n.S),n}r=e,(t=s).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var u,p,d=s.prototype;return d.register=function(e){var t=(void 0===e?{}:e).immediate,r=void 0!==t&&t;try{var n=this;return function(e,t){var r=e();return r&&r.then?r.then(t):t()}((function(){if(!r&&"complete"!==document.readyState)return f(new Promise((function(e){return window.addEventListener("load",e)})))}),(function(){return n.j=Boolean(navigator.serviceWorker.controller),n.U=n.B(),c(n.L(),(function(e){n.g=e,n.U&&(n.p=n.U,n.u.resolve(n.U),n.s.resolve(n.U),n.U.addEventListener("statechange",n.k,{once:!0}));var t=n.g.waiting;return t&&a(t.scriptURL,n.m)&&(n.p=t,Promise.resolve().then((function(){n.dispatchEvent(new i("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),n.p&&(n.o.resolve(n.p),n.h.add(n.p)),n.g.addEventListener("updatefound",n.l),navigator.serviceWorker.addEventListener("controllerchange",n.R,{once:!0}),n.g}))}))}catch(e){return Promise.reject(e)}},d.update=function(){try{return this.g?f(this.g.update()):void 0}catch(l){return Promise.reject(l)}},d.getSW=function(){try{return void 0!==this.p?this.p:this.o.promise}catch(l){return Promise.reject(l)}},d.messageSW=function(e){try{return c(this.getSW(),(function(t){return function(e,t){return new Promise((function(r){var n=new MessageChannel;n.port1.onmessage=function(e){r(e.data)},e.postMessage(t,[n.port2])}))}(t,e)}))}catch(l){return Promise.reject(l)}},d.B=function(){var e=navigator.serviceWorker.controller;return e&&a(e.scriptURL,this.m)?e:void 0},d.L=function(){try{var e=this;return function(e,t){try{var r=e()}catch(e){return t(e)}return r&&r.then?r.then(void 0,t):r}((function(){return c(navigator.serviceWorker.register(e.m,e.t),(function(t){return e.v=performance.now(),t}))}),(function(e){throw e}))}catch(e){return Promise.reject(e)}},u=s,(p=[{key:"active",get:function(){return this.u.promise}},{key:"controlling",get:function(){return this.s.promise}}])&&n(u.prototype,p),s}(function(){function e(){this.M=new Map}var t=e.prototype;return t.addEventListener=function(e,t){this._(e).add(t)},t.removeEventListener=function(e,t){this._(e).delete(t)},t.dispatchEvent=function(e){e.target=this;var t=this._(e.type),r=Array.isArray(t),n=0;for(t=r?t:t[Symbol.iterator]();;){var o;if(r){if(n>=t.length)break;o=t[n++]}else{if((n=t.next()).done)break;o=n.value}o(e)}},t._=function(e){return this.M.has(e)||this.M.set(e,new Set),this.M.get(e)},e}());function f(e,t){if(!t)return e&&e.then?e.then(s):Promise.resolve()}"undefined"!==typeof window&&"serviceWorker"in navigator&&(window.workbox=new u("/sw.js",{scope:"/"}),window.workbox.register())},yLiY:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return n},t.setConfig=function(e){n=e}},zmvN:function(e,t,r){"use strict";var n=r("/GRZ"),o=r("i2R6"),a=r("AroE");t.__esModule=!0,t.default=void 0;var i=r("QmWs"),c=a(r("dZ6Y")),s=r("/jkW"),u=r("gguc"),f=r("YTqd");function l(e,t){try{return document.createElement("link").relList.supports(e)}catch(r){}}var p=l("preload")&&!l("prefetch")?"preload":"prefetch";document.createElement("script");function d(e){if("/"!==e[0])throw new Error('Route name should start with a "/", got "'+e+'"');return"/"===(e=e.replace(/\/index$/,"/"))?e:e.replace(/\/$/,"")}function v(e,t,r){return new Promise((function(n,o,a){(a=document.createElement("link")).crossOrigin=void 0,a.href=e,a.rel=t,r&&(a.as=r),a.onload=n,a.onerror=o,document.head.appendChild(a)}))}var h=function(){function e(t,r){n(this,e),this.buildId=t,this.assetPrefix=r,this.pageCache={},this.pageRegisterEvents=(0,c.default)(),this.loadingRoutes={},this.promisedBuildManifest=new Promise((function(e){window.__BUILD_MANIFEST?e(window.__BUILD_MANIFEST):window.__BUILD_MANIFEST_CB=function(){e(window.__BUILD_MANIFEST)}})),this.promisedSsgManifest=new Promise((function(e){window.__SSG_MANIFEST?e(window.__SSG_MANIFEST):window.__SSG_MANIFEST_CB=function(){e(window.__SSG_MANIFEST)}}))}return o(e,[{key:"getDependencies",value:function(e){var t=this;return this.promisedBuildManifest.then((function(r){return r[e]&&r[e].map((function(e){return t.assetPrefix+"/_next/"+encodeURI(e)}))||[]}))}},{key:"getDataHref",value:function(e,t){var r,n=this,o=function(e){return n.assetPrefix+"/_next/data/"+n.buildId+("/"===e?"/index":e)+".json"},a=(0,i.parse)(e,!0),c=a.pathname,l=a.query,p=(0,i.parse)(t).pathname,v=d(c),h=(0,s.isDynamicRoute)(v);if(h){var m=(0,f.getRouteRegex)(v),g=m.groups,y=(0,u.getRouteMatcher)(m)(p)||l;r=v,Object.keys(g).every((function(e){var t=y[e],n=g[e].repeat;return n&&!Array.isArray(t)&&(t=[t]),e in y&&(r=r.replace("["+(n?"...":"")+e+"]",n?t.map(encodeURIComponent).join("/"):encodeURIComponent(t)))}))||(r="")}return h?r&&o(r):o(v)}},{key:"prefetchData",value:function(e,t){var r=this,n=d((0,i.parse)(e,!0).pathname);return this.promisedSsgManifest.then((function(o,a){return o.has(n)&&(a=r.getDataHref(e,t))&&!document.querySelector('link[rel="'+p+'"][href^="'+a+'"]')&&v(a,p,"fetch")}))}},{key:"loadPage",value:function(e){return this.loadPageScript(e)}},{key:"loadPageScript",value:function(e){var t=this;return e=d(e),new Promise((function(r,n){var o=t.pageCache[e];if(o){var a=o.error,i=o.page,c=o.mod;a?n(a):r({page:i,mod:c})}else t.pageRegisterEvents.on(e,(function o(a){var i=a.error,c=a.page,s=a.mod;t.pageRegisterEvents.off(e,o),delete t.loadingRoutes[e],i?n(i):r({page:c,mod:s})})),document.querySelector('script[data-next-page="'+e+'"]')||t.loadingRoutes[e]||(t.loadingRoutes[e]=!0,t.getDependencies(e).then((function(r){r.forEach((function(r){/\.js$/.test(r)&&!document.querySelector('script[src^="'+r+'"]')&&t.loadScript(r,e,!1),/\.css$/.test(r)&&!document.querySelector('link[rel=stylesheet][href^="'+r+'"]')&&v(r,"stylesheet").catch((function(){}))})),t.loadRoute(e)})))}))}},{key:"loadRoute",value:function(e){var t="/"===(e=d(e))?"/index.js":e+".js",r=this.assetPrefix+"/_next/static/"+encodeURIComponent(this.buildId)+"/pages"+encodeURI(t);this.loadScript(r,e,!0)}},{key:"loadScript",value:function(e,t,r){var n=this,o=document.createElement("script");o.crossOrigin=void 0,o.src=e,o.onerror=function(){var r=new Error("Error loading script "+e);r.code="PAGE_LOAD_ERROR",n.pageRegisterEvents.emit(t,{error:r})},document.body.appendChild(o)}},{key:"registerPage",value:function(e,t){var r=this;!function(){try{var n=t(),o={page:n.default||n,mod:n};r.pageCache[e]=o,r.pageRegisterEvents.emit(e,o)}catch(a){r.pageCache[e]={error:a},r.pageRegisterEvents.emit(e,{error:a})}}()}},{key:"prefetch",value:function(e,t){var r,n,o=this;if((r=navigator.connection)&&(r.saveData||/2g/.test(r.effectiveType)))return Promise.resolve();if(t)n=e;else{var a=("/"===(e=d(e))?"/index":e)+".js";0,n=this.assetPrefix+"/_next/static/"+encodeURIComponent(this.buildId)+"/pages"+encodeURI(a)}return Promise.all(document.querySelector('link[rel="'+p+'"][href^="'+n+'"], script[data-next-page="'+e+'"]')?[]:[v(n,p,n.match(/\.css$/)?"style":"script"),!t&&this.getDependencies(e).then((function(e){return Promise.all(e.map((function(e){return o.prefetch(e,!0)})))}))]).then((function(){}),(function(){}))}}]),e}();t.default=h}},[[0,0,1,2]]]);