(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{9917:function(e,t,n){"use strict";var r=n(3848),o=n(3115);t.default=function(e){var t=e.src,n=e.sizes,o=e.unoptimized,l=void 0!==o&&o,u=e.priority,d=void 0!==u&&u,m=e.loading,h=e.lazyBoundary,v=void 0===h?"200px":h,y=e.className,b=e.quality,w=e.width,x=e.height,z=e.objectFit,j=e.objectPosition,E=e.onLoadingComplete,O=e.loader,L=void 0===O?k:O,I=e.placeholder,_=void 0===I?"empty":I,R=e.blurDataURL,M=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),C=n?"responsive":"intrinsic";"layout"in M&&(M.layout&&(C=M.layout),delete M.layout);var P="";if(function(e){return"object"===typeof e&&(g(e)||function(e){return void 0!==e.src}(e))}(t)){var D=g(t)?t.default:t;if(!D.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(D)));if(R=R||D.blurDataURL,P=D.src,(!C||"fill"!==C)&&(x=x||D.height,w=w||D.width,!D.height||!D.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(D)))}t="string"===typeof t?t:P;var q=S(w),N=S(x),U=S(b),W=!d&&("lazy"===m||"undefined"===typeof m);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,W=!1);p.has(t)&&(W=!1);0;var B,H,T,K=s.useIntersection({rootMargin:v,disabled:!W}),F=r(K,2),V=F[0],J=F[1],G=!W||J,Q={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:z,objectPosition:j},Z="blur"===_?{filter:"blur(20px)",backgroundSize:z||"cover",backgroundImage:'url("'.concat(R,'")'),backgroundPosition:j||"0% 0%"}:{};if("fill"===C)B={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0};else if("undefined"!==typeof q&&"undefined"!==typeof N){var $=N/q,X=isNaN($)?"100%":"".concat(100*$,"%");"responsive"===C?(B={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},H={display:"block",boxSizing:"border-box",paddingTop:X}):"intrinsic"===C?(B={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},H={boxSizing:"border-box",display:"block",maxWidth:"100%"},T='<svg width="'.concat(q,'" height="').concat(N,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===C&&(B={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:q,height:N})}else 0;var Y={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};G&&(Y=A({src:t,unoptimized:l,layout:C,width:q,quality:U,sizes:n,loader:L}));var ee=t;return i.default.createElement("div",{style:B},H?i.default.createElement("div",{style:H},T?i.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(c.toBase64(T))}):null):null,i.default.createElement("img",Object.assign({},M,Y,{decoding:"async","data-nimg":C,className:y,ref:function(e){V(e),function(e,t,n,r,o){if(!e)return;var i=function(){e.src.startsWith("data:")||("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===r&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),p.add(t),o){var n=e.naturalWidth,i=e.naturalHeight;o({naturalWidth:n,naturalHeight:i})}}))};e.complete?i():e.onload=i}(e,ee,0,_,E)},style:f({},Q,Z)})),i.default.createElement("noscript",null,i.default.createElement("img",Object.assign({},M,A({src:t,unoptimized:l,layout:C,width:q,quality:U,sizes:n,loader:L}),{decoding:"async","data-nimg":C,style:Q,className:y,loading:m||"lazy"}))),d?i.default.createElement(a.default,null,i.default.createElement("link",{key:"__nimg-"+Y.src+Y.srcSet+Y.sizes,rel:"preload",as:"image",href:Y.srcSet?void 0:Y.src,imagesrcset:Y.srcSet,imagesizes:Y.sizes})):null)};var i=d(n(7294)),a=d(n(639)),c=n(8997),l=n(5809),s=n(7426);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}var p=new Set;var m=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality,i=new URL("".concat(t).concat(z(n))),a=i.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),o&&a.set("q",o.toString());return i.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality,i=["f_auto","c_limit","w_"+r,"q_"+(o||"auto")].join(",")+"/";return"".concat(t).concat(i).concat(z(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(z(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function g(e){return void 0!==e.default}var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://synx.ai/",loader:"imgix"}||l.imageConfigDefault,v=h.deviceSizes,y=h.imageSizes,b=h.loader,w=h.path,x=(h.domains,[].concat(o(v),o(y)));function A(e){var t=e.src,n=e.unoptimized,r=e.layout,i=e.width,a=e.quality,c=e.sizes,l=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var s=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,i=/(^|\s)(1?\d?\d)vw/g,a=[];r=i.exec(n);r)a.push(parseInt(r[2]));if(a.length){var c=.01*Math.min.apply(Math,a);return{widths:x.filter((function(e){return e>=v[0]*c})),kind:"w"}}return{widths:x,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:v,kind:"w"}:{widths:o(new Set([e,2*e].map((function(e){return x.find((function(t){return t>=e}))||x[x.length-1]})))),kind:"x"}}(i,r,c),u=s.widths,d=s.kind,f=u.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:u.map((function(e,n){return"".concat(l({src:t,quality:a,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:l({src:t,quality:a,width:u[f]})}}function S(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function k(e){var t=m.get(b);if(t)return t(f({root:w},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(b))}function z(e){return"/"===e[0]?e.slice(1):e}v.sort((function(e,t){return e-t})),x.sort((function(e,t){return e-t}))},2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},a=n(1063),c=n(4651),l=n(7426);var s={};function u(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,o=c.useRouter(),d=i.default.useMemo((function(){var t=a.resolveHref(o,e.href,!0),n=r(t,2),i=n[0],c=n[1];return{href:i,as:e.as?a.resolveHref(o,e.as):c||i}}),[o,e.href,e.as]),f=d.href,p=d.as,m=e.children,g=e.replace,h=e.shallow,v=e.scroll,y=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var b=(t=i.default.Children.only(m))&&"object"===typeof t&&t.ref,w=l.useIntersection({rootMargin:"200px"}),x=r(w,2),A=x[0],S=x[1],k=i.default.useCallback((function(e){A(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,A]);i.default.useEffect((function(){var e=S&&n&&a.isLocalURL(f),t="undefined"!==typeof y?y:o&&o.locale,r=s[f+"%"+p+(t?"%"+t:"")];e&&!r&&u(o,f,p,{locale:t})}),[p,f,S,y,n,o]);var z={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](n,r,{shallow:i,locale:l,scroll:c}))}(e,o,f,p,g,h,v,y)},onMouseEnter:function(e){a.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,f,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var j="undefined"!==typeof y?y:o&&o.locale,E=o&&o.isLocaleDomain&&a.getDomainLocale(p,j,o&&o.locales,o&&o.domainLocales);z.href=E||a.addBasePath(a.addLocale(p,j,o&&o.defaultLocale))}return i.default.cloneElement(t,z)};t.default=d},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,l=o.useRef(),s=o.useState(!1),u=r(s,2),d=u[0],f=u[1],p=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||d||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return o.useEffect((function(){if(!a&&!d){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),[p,d]};var o=n(7294),i=n(3447),a="undefined"!==typeof IntersectionObserver;var c=new Map},8997:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60}},9008:function(e,t,n){e.exports=n(639)},5675:function(e,t,n){e.exports=n(9917)},1664:function(e,t,n){e.exports=n(2167)},6311:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return o}})}}]);