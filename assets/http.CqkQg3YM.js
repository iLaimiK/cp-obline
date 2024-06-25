import{B as e,q as t,af as r,ag as n,ah as o,ai as a,aj as i,E as s,a9 as c}from"./index-SNMhby7L.js";const u=e("user",(()=>{const e=t(""),r=t(""),n=t("/pages/index/index"),o=t("switchTab");return{token:e,refreshToken:r,userId:t(""),redirectURL:n,openType:o}}),{persist:{paths:["token","refreshToken","userId","redirectURL","openType"]}});var l=Object.prototype.toString;function f(e){return"[object Array]"===l.call(e)}function d(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),f(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function h(){let e={};function t(t,r){"object"==typeof e[r]&&"object"==typeof t?e[r]=h(e[r],t):e[r]="object"==typeof t?h({},t):t}for(let r=0,n=arguments.length;r<n;r++)d(arguments[r],t);return e}function p(e){return void 0===e}function m(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function g(e,t,r){if(!t)return e;var n,o;if(r)n=r(t);else if(o=t,"undefined"!=typeof URLSearchParams&&o instanceof URLSearchParams)n=t.toString();else{var a=[];d(t,(function(e,t){null!=e&&(f(e)?t+="[]":e=[e],d(e,(function(e){!function(e){return"[object Date]"===l.call(e)}(e)?function(e){return null!==e&&"object"==typeof e}(e)&&(e=JSON.stringify(e)):e=e.toISOString(),a.push(m(t)+"="+m(e))})))})),n=a.join("&")}if(n){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e}const y=(e,t)=>{let r={};return e.forEach((e=>{p(t[e])||(r[e]=t[e])})),r},O=e=>(e=>new Promise(((t,a)=>{let i=g((s=e.baseURL,c=e.url,s&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(c)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(s,c):c),e.params,e.paramsSerializer);var s,c;const u={url:i,header:e.header,complete:r=>{e.fullPath=i,r.config=e,r.rawData=r.data;try{let t=!1;const n=typeof e.forcedJSONParsing;"boolean"===n?t=e.forcedJSONParsing:"object"===n&&(t=(e.forcedJSONParsing.include||[]).includes(e.method)),t&&"string"==typeof r.data&&(r.data=JSON.parse(r.data))}catch(n){}!function(e,t,r){const n=r.config.validateStatus,o=r.statusCode;!o||n&&!n(o)?t(r):e(r)}(t,a,r)}};let l;if("UPLOAD"===e.method){delete u.header["content-type"],delete u.header["Content-Type"];let t={filePath:e.filePath,name:e.name};const n=["files","file","timeout","formData"];l=r({...u,...t,...y(n,e)})}else if("DOWNLOAD"===e.method){const t=["timeout"];l=n({...u,...y(t,e)})}else{const t=["data","method","timeout","dataType","responseType","withCredentials"];l=o({...u,...y(t,e)})}e.getTask&&e.getTask(l,e)})))(e);function b(){this.handlers=[]}b.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},b.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},b.prototype.forEach=function(e){this.handlers.forEach((t=>{null!==t&&e(t)}))};const j=(e,t,r)=>{let n={};return e.forEach((e=>{p(r[e])?p(t[e])||(n[e]=t[e]):n[e]=r[e]})),n},w={baseURL:"",header:{},method:"GET",dataType:"json",paramsSerializer:null,responseType:"text",custom:{},timeout:6e4,withCredentials:!1,validateStatus:function(e){return e>=200&&e<300},forcedJSONParsing:!0};var T=function(){function e(e,t){return null!=t&&e instanceof t}var t,r,n;try{t=Map}catch(s){t=function(){}}try{r=Set}catch(s){r=function(){}}try{n=Promise}catch(s){n=function(){}}function o(a,s,c,u,l){"object"==typeof s&&(c=s.depth,u=s.prototype,l=s.includeNonEnumerable,s=s.circular);var f=[],d=[],h="undefined"!=typeof Buffer;return void 0===s&&(s=!0),void 0===c&&(c=1/0),function a(c,p){if(null===c)return null;if(0===p)return c;var m,g;if("object"!=typeof c)return c;if(e(c,t))m=new t;else if(e(c,r))m=new r;else if(e(c,n))m=new n((function(e,t){c.then((function(t){e(a(t,p-1))}),(function(e){t(a(e,p-1))}))}));else if(o.__isArray(c))m=[];else if(o.__isRegExp(c))m=new RegExp(c.source,i(c)),c.lastIndex&&(m.lastIndex=c.lastIndex);else if(o.__isDate(c))m=new Date(c.getTime());else{if(h&&Buffer.isBuffer(c))return Buffer.from?m=Buffer.from(c):(m=new Buffer(c.length),c.copy(m)),m;e(c,Error)?m=Object.create(c):void 0===u?(g=Object.getPrototypeOf(c),m=Object.create(g)):(m=Object.create(u),g=u)}if(s){var y=f.indexOf(c);if(-1!=y)return d[y];f.push(c),d.push(m)}for(var O in e(c,t)&&c.forEach((function(e,t){var r=a(t,p-1),n=a(e,p-1);m.set(r,n)})),e(c,r)&&c.forEach((function(e){var t=a(e,p-1);m.add(t)})),c){Object.getOwnPropertyDescriptor(c,O)&&(m[O]=a(c[O],p-1));try{if("undefined"===Object.getOwnPropertyDescriptor(c,O).set)continue;m[O]=a(c[O],p-1)}catch(v){if(v instanceof TypeError)continue;if(v instanceof ReferenceError)continue}}if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(c);for(O=0;O<b.length;O++){var j=b[O];(!(T=Object.getOwnPropertyDescriptor(c,j))||T.enumerable||l)&&(m[j]=a(c[j],p-1),Object.defineProperty(m,j,T))}}if(l){var w=Object.getOwnPropertyNames(c);for(O=0;O<w.length;O++){var T,P=w[O];(T=Object.getOwnPropertyDescriptor(c,P))&&T.enumerable||(m[P]=a(c[P],p-1),Object.defineProperty(m,P,T))}}return m}(a,c)}function a(e){return Object.prototype.toString.call(e)}function i(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),t}return o.clonePrototype=function(e){if(null===e)return null;var t=function(){};return t.prototype=e,new t},o.__objToStr=a,o.__isDate=function(e){return"object"==typeof e&&"[object Date]"===a(e)},o.__isArray=function(e){return"object"==typeof e&&"[object Array]"===a(e)},o.__isRegExp=function(e){return"object"==typeof e&&"[object RegExp]"===a(e)},o.__getRegExpFlags=i,o}();const P=new class{constructor(e={}){var t;t=e,"[object Object]"!==Object.prototype.toString.call(t)&&(e={},console.warn("设置全局参数必须接收一个Object")),this.config=T({...w,...e}),this.interceptors={request:new b,response:new b}}setConfig(e){this.config=e(this.config)}middleware(e){e=((e,t={})=>{const r=t.method||e.method||"GET";let n={baseURL:t.baseURL||e.baseURL||"",method:r,url:t.url||"",params:t.params||{},custom:{...e.custom||{},...t.custom||{}},header:h(e.header||{},t.header||{})};if(n={...n,...j(["getTask","validateStatus","paramsSerializer","forcedJSONParsing"],e,t)},"DOWNLOAD"===r){const r=["timeout"];n={...n,...j(r,e,t)}}else if("UPLOAD"===r)delete n.header["content-type"],delete n.header["Content-Type"],["files","file","filePath","name","timeout","formData"].forEach((e=>{p(t[e])||(n[e]=t[e])})),p(n.timeout)&&!p(e.timeout)&&(n.timeout=e.timeout);else{const r=["data","timeout","dataType","responseType","withCredentials"];n={...n,...j(r,e,t)}}return n})(this.config,e);let t=[O,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r}request(e={}){return this.middleware(e)}get(e,t={}){return this.middleware({url:e,method:"GET",...t})}post(e,t,r={}){return this.middleware({url:e,data:t,method:"POST",...r})}put(e,t,r={}){return this.middleware({url:e,data:t,method:"PUT",...r})}delete(e,t,r={}){return this.middleware({url:e,data:t,method:"DELETE",...r})}connect(e,t,r={}){return this.middleware({url:e,data:t,method:"CONNECT",...r})}head(e,t,r={}){return this.middleware({url:e,data:t,method:"HEAD",...r})}options(e,t,r={}){return this.middleware({url:e,data:t,method:"OPTIONS",...r})}trace(e,t,r={}){return this.middleware({url:e,data:t,method:"TRACE",...r})}upload(e,t={}){return t.url=e,t.method="UPLOAD",this.middleware(t)}download(e,t={}){return t.url=e,t.method="DOWNLOAD",this.middleware(t)}get version(){return"3.1.0"}}({baseURL:"https://consult-api.itheima.net",custom:{showLoading:!0}}),v=["/code","/login","/login/password"];P.interceptors.request.use((e=>{e.custom.showLoading&&a({title:"正在加载...",mask:!0});const t=u(),r={};return t.token&&!v.includes(e.url)&&(r.Authorization=`Bearer ${t.token}`),e.header={...r,...e.header},e})),P.interceptors.response.use((async e=>(i(),e.data)),(async e=>{i();const t=u();if(401===e.statusCode){if(e.config.header.Authorization!==`Bearer ${t.refreshToken}`&&e.config.url.includes("/refreshToken")){const r=await P.request({url:"/login/refreshToken",method:"POST",header:{Authorization:`Bearer ${t.refreshToken}`},data:{grantType:"refreshToken",refreshToken:t.refreshToken}});return 1e4!==r.code?(S(),uni.utils.toast("更新登录状态失败，请重新登录")):(t.token=r.data.token,t.refreshToken=r.data.refreshToken,e.config.header.Authorization=`Bearer ${r.data.token}`,P.request(e.config))}uni.utils.toast("登录状态已过期，请重新登录"),S()}return Promise.reject(e)}));const E=["pages/index/index","pages/wiki/index","pages/notify/index","pages/my/index"],S=()=>{const e=s(),t=e[e.length-1],r=t.$page.fullPath,n=E.includes(t.route)?"switchTab":"redirectTo",o=u();o.redirectURL=r,o.openType=n,c({url:"/pages/login/index"})};export{P as h,u};
