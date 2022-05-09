import{d as oe,r as Ne,c as Qe,o as b,a as y,b as d,e as q,w as A,f as j,u as S,F as I,g as V,n as J,h as $,t as g,i as Ye,v as Ge,j as ye,k as ge,l as M}from"./main.1ba287ea.js";var ue={exports:{}},Te=function(e,r){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return e.apply(r,n)}},Ze=Te,le=Object.prototype.toString,de=function(t){return function(e){var r=le.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())}}(Object.create(null));function P(t){return t=t.toLowerCase(),function(r){return de(r)===t}}function ce(t){return Array.isArray(t)}function X(t){return typeof t=="undefined"}function et(t){return t!==null&&!X(t)&&t.constructor!==null&&!X(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}var De=P("ArrayBuffer");function tt(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&De(t.buffer),e}function rt(t){return typeof t=="string"}function nt(t){return typeof t=="number"}function Be(t){return t!==null&&typeof t=="object"}function z(t){if(de(t)!=="object")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}var st=P("Date"),it=P("File"),at=P("Blob"),ot=P("FileList");function fe(t){return le.call(t)==="[object Function]"}function ut(t){return Be(t)&&fe(t.pipe)}function lt(t){var e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||le.call(t)===e||fe(t.toString)&&t.toString()===e)}var dt=P("URLSearchParams");function ct(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function ft(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function he(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),ce(t))for(var r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(null,t[n],n,t)}function ie(){var t={};function e(n,i){z(t[i])&&z(n)?t[i]=ie(t[i],n):z(n)?t[i]=ie({},n):ce(n)?t[i]=n.slice():t[i]=n}for(var r=0,s=arguments.length;r<s;r++)he(arguments[r],e);return t}function ht(t,e,r){return he(e,function(n,i){r&&typeof n=="function"?t[i]=Ze(n,r):t[i]=n}),t}function mt(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}function pt(t,e,r,s){t.prototype=Object.create(e.prototype,s),t.prototype.constructor=t,r&&Object.assign(t.prototype,r)}function vt(t,e,r){var s,n,i,a={};e=e||{};do{for(s=Object.getOwnPropertyNames(t),n=s.length;n-- >0;)i=s[n],a[i]||(e[i]=t[i],a[i]=!0);t=Object.getPrototypeOf(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype);return e}function bt(t,e,r){t=String(t),(r===void 0||r>t.length)&&(r=t.length),r-=e.length;var s=t.indexOf(e,r);return s!==-1&&s===r}function yt(t){if(!t)return null;var e=t.length;if(X(e))return null;for(var r=new Array(e);e-- >0;)r[e]=t[e];return r}var gt=function(t){return function(e){return t&&e instanceof t}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),m={isArray:ce,isArrayBuffer:De,isBuffer:et,isFormData:lt,isArrayBufferView:tt,isString:rt,isNumber:nt,isObject:Be,isPlainObject:z,isUndefined:X,isDate:st,isFile:it,isBlob:at,isFunction:fe,isStream:ut,isURLSearchParams:dt,isStandardBrowserEnv:ft,forEach:he,merge:ie,extend:ht,trim:ct,stripBOM:mt,inherits:pt,toFlatObject:vt,kindOf:de,kindOfTest:P,endsWith:bt,toArray:yt,isTypedArray:gt,isFileList:ot},T=m;function xe(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Ue=function(e,r,s){if(!r)return e;var n;if(s)n=s(r);else if(T.isURLSearchParams(r))n=r.toString();else{var i=[];T.forEach(r,function(l,f){l===null||typeof l=="undefined"||(T.isArray(l)?f=f+"[]":l=[l],T.forEach(l,function(c){T.isDate(c)?c=c.toISOString():T.isObject(c)&&(c=JSON.stringify(c)),i.push(xe(f)+"="+xe(c))}))}),n=i.join("&")}if(n){var a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},xt=m;function K(){this.handlers=[]}K.prototype.use=function(e,r,s){return this.handlers.push({fulfilled:e,rejected:r,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1};K.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};K.prototype.forEach=function(e){xt.forEach(this.handlers,function(s){s!==null&&e(s)})};var wt=K,Et=m,_t=function(e,r){Et.forEach(e,function(n,i){i!==r&&i.toUpperCase()===r.toUpperCase()&&(e[r]=n,delete e[i])})},ke=m;function B(t,e,r,s,n){Error.call(this),this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),s&&(this.request=s),n&&(this.response=n)}ke.inherits(B,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Le=B.prototype,Fe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(t){Fe[t]={value:t}});Object.defineProperties(B,Fe);Object.defineProperty(Le,"isAxiosError",{value:!0});B.from=function(t,e,r,s,n,i){var a=Object.create(Le);return ke.toFlatObject(t,a,function(l){return l!==Error.prototype}),B.call(a,t.message,e,r,s,n),a.name=t.name,i&&Object.assign(a,i),a};var L=B,Ie={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},_=m;function Rt(t,e){e=e||new FormData;var r=[];function s(i){return i===null?"":_.isDate(i)?i.toISOString():_.isArrayBuffer(i)||_.isTypedArray(i)?typeof Blob=="function"?new Blob([i]):Buffer.from(i):i}function n(i,a){if(_.isPlainObject(i)||_.isArray(i)){if(r.indexOf(i)!==-1)throw Error("Circular reference detected in "+a);r.push(i),_.forEach(i,function(l,f){if(!_.isUndefined(l)){var o=a?a+"."+f:f,c;if(l&&!a&&typeof l=="object"){if(_.endsWith(f,"{}"))l=JSON.stringify(l);else if(_.endsWith(f,"[]")&&(c=_.toArray(l))){c.forEach(function(v){!_.isUndefined(v)&&e.append(o,s(v))});return}}n(l,o)}}),r.pop()}else e.append(a,s(i))}return n(t),e}var je=Rt,te=L,$t=function(e,r,s){var n=s.config.validateStatus;!s.status||!n||n(s.status)?e(s):r(new te("Request failed with status code "+s.status,[te.ERR_BAD_REQUEST,te.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s))},H=m,Ot=H.isStandardBrowserEnv()?function(){return{write:function(r,s,n,i,a,u){var l=[];l.push(r+"="+encodeURIComponent(s)),H.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),H.isString(i)&&l.push("path="+i),H.isString(a)&&l.push("domain="+a),u===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(r){var s=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Ct=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},At=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e},St=Ct,Pt=At,qe=function(e,r){return e&&!St(r)?Pt(e,r):r},re=m,Nt=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Tt=function(e){var r={},s,n,i;return e&&re.forEach(e.split(`
`),function(u){if(i=u.indexOf(":"),s=re.trim(u.substr(0,i)).toLowerCase(),n=re.trim(u.substr(i+1)),s){if(r[s]&&Nt.indexOf(s)>=0)return;s==="set-cookie"?r[s]=(r[s]?r[s]:[]).concat([n]):r[s]=r[s]?r[s]+", "+n:n}}),r},we=m,Dt=we.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),s;function n(i){var a=i;return e&&(r.setAttribute("href",a),a=r.href),r.setAttribute("href",a),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return s=n(window.location.href),function(a){var u=we.isString(a)?n(a):a;return u.protocol===s.protocol&&u.host===s.host}}():function(){return function(){return!0}}(),ae=L,Bt=m;function Me(t){ae.call(this,t==null?"canceled":t,ae.ERR_CANCELED),this.name="CanceledError"}Bt.inherits(Me,ae,{__CANCEL__:!0});var Q=Me,Ut=function(e){var r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return r&&r[1]||""},F=m,kt=$t,Lt=Ot,Ft=Ue,It=qe,jt=Tt,qt=Dt,Mt=Ie,R=L,Ht=Q,Vt=Ut,Ee=function(e){return new Promise(function(s,n){var i=e.data,a=e.headers,u=e.responseType,l;function f(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}F.isFormData(i)&&F.isStandardBrowserEnv()&&delete a["Content-Type"];var o=new XMLHttpRequest;if(e.auth){var c=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.Authorization="Basic "+btoa(c+":"+v)}var p=It(e.baseURL,e.url);o.open(e.method.toUpperCase(),Ft(p,e.params,e.paramsSerializer),!0),o.timeout=e.timeout;function ve(){if(!!o){var E="getAllResponseHeaders"in o?jt(o.getAllResponseHeaders()):null,N=!u||u==="text"||u==="json"?o.responseText:o.response,C={data:N,status:o.status,statusText:o.statusText,headers:E,config:e,request:o};kt(function(ee){s(ee),f()},function(ee){n(ee),f()},C),o=null}}if("onloadend"in o?o.onloadend=ve:o.onreadystatechange=function(){!o||o.readyState!==4||o.status===0&&!(o.responseURL&&o.responseURL.indexOf("file:")===0)||setTimeout(ve)},o.onabort=function(){!o||(n(new R("Request aborted",R.ECONNABORTED,e,o)),o=null)},o.onerror=function(){n(new R("Network Error",R.ERR_NETWORK,e,o,o)),o=null},o.ontimeout=function(){var N=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",C=e.transitional||Mt;e.timeoutErrorMessage&&(N=e.timeoutErrorMessage),n(new R(N,C.clarifyTimeoutError?R.ETIMEDOUT:R.ECONNABORTED,e,o)),o=null},F.isStandardBrowserEnv()){var be=(e.withCredentials||qt(p))&&e.xsrfCookieName?Lt.read(e.xsrfCookieName):void 0;be&&(a[e.xsrfHeaderName]=be)}"setRequestHeader"in o&&F.forEach(a,function(N,C){typeof i=="undefined"&&C.toLowerCase()==="content-type"?delete a[C]:o.setRequestHeader(C,N)}),F.isUndefined(e.withCredentials)||(o.withCredentials=!!e.withCredentials),u&&u!=="json"&&(o.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&o.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&o.upload&&o.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(E){!o||(n(!E||E&&E.type?new Ht:E),o.abort(),o=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),i||(i=null);var Z=Vt(p);if(Z&&["http","https","file"].indexOf(Z)===-1){n(new R("Unsupported protocol "+Z+":",R.ERR_BAD_REQUEST,e));return}o.send(i)})},Jt=null,h=m,_e=_t,Re=L,zt=Ie,Wt=je,Xt={"Content-Type":"application/x-www-form-urlencoded"};function $e(t,e){!h.isUndefined(t)&&h.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function Kt(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=Ee),t}function Qt(t,e,r){if(h.isString(t))try{return(e||JSON.parse)(t),h.trim(t)}catch(s){if(s.name!=="SyntaxError")throw s}return(r||JSON.stringify)(t)}var Y={transitional:zt,adapter:Kt(),transformRequest:[function(e,r){if(_e(r,"Accept"),_e(r,"Content-Type"),h.isFormData(e)||h.isArrayBuffer(e)||h.isBuffer(e)||h.isStream(e)||h.isFile(e)||h.isBlob(e))return e;if(h.isArrayBufferView(e))return e.buffer;if(h.isURLSearchParams(e))return $e(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var s=h.isObject(e),n=r&&r["Content-Type"],i;if((i=h.isFileList(e))||s&&n==="multipart/form-data"){var a=this.env&&this.env.FormData;return Wt(i?{"files[]":e}:e,a&&new a)}else if(s||n==="application/json")return $e(r,"application/json"),Qt(e);return e}],transformResponse:[function(e){var r=this.transitional||Y.transitional,s=r&&r.silentJSONParsing,n=r&&r.forcedJSONParsing,i=!s&&this.responseType==="json";if(i||n&&h.isString(e)&&e.length)try{return JSON.parse(e)}catch(a){if(i)throw a.name==="SyntaxError"?Re.from(a,Re.ERR_BAD_RESPONSE,this,null,this.response):a}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Jt},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};h.forEach(["delete","get","head"],function(e){Y.headers[e]={}});h.forEach(["post","put","patch"],function(e){Y.headers[e]=h.merge(Xt)});var me=Y,Yt=m,Gt=me,Zt=function(e,r,s){var n=this||Gt;return Yt.forEach(s,function(a){e=a.call(n,e,r)}),e},He=function(e){return!!(e&&e.__CANCEL__)},Oe=m,ne=Zt,er=He,tr=me,rr=Q;function se(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new rr}var nr=function(e){se(e),e.headers=e.headers||{},e.data=ne.call(e,e.data,e.headers,e.transformRequest),e.headers=Oe.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Oe.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var r=e.adapter||tr.adapter;return r(e).then(function(n){return se(e),n.data=ne.call(e,n.data,n.headers,e.transformResponse),n},function(n){return er(n)||(se(e),n&&n.response&&(n.response.data=ne.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},w=m,Ve=function(e,r){r=r||{};var s={};function n(o,c){return w.isPlainObject(o)&&w.isPlainObject(c)?w.merge(o,c):w.isPlainObject(c)?w.merge({},c):w.isArray(c)?c.slice():c}function i(o){if(w.isUndefined(r[o])){if(!w.isUndefined(e[o]))return n(void 0,e[o])}else return n(e[o],r[o])}function a(o){if(!w.isUndefined(r[o]))return n(void 0,r[o])}function u(o){if(w.isUndefined(r[o])){if(!w.isUndefined(e[o]))return n(void 0,e[o])}else return n(void 0,r[o])}function l(o){if(o in r)return n(e[o],r[o]);if(o in e)return n(void 0,e[o])}var f={url:a,method:a,data:a,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:l};return w.forEach(Object.keys(e).concat(Object.keys(r)),function(c){var v=f[c]||i,p=v(c);w.isUndefined(p)&&v!==l||(s[c]=p)}),s},Je={version:"0.27.2"},sr=Je.version,O=L,pe={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){pe[t]=function(s){return typeof s===t||"a"+(e<1?"n ":" ")+t}});var Ce={};pe.transitional=function(e,r,s){function n(i,a){return"[Axios v"+sr+"] Transitional option '"+i+"'"+a+(s?". "+s:"")}return function(i,a,u){if(e===!1)throw new O(n(a," has been removed"+(r?" in "+r:"")),O.ERR_DEPRECATED);return r&&!Ce[a]&&(Ce[a]=!0,console.warn(n(a," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(i,a,u):!0}};function ir(t,e,r){if(typeof t!="object")throw new O("options must be an object",O.ERR_BAD_OPTION_VALUE);for(var s=Object.keys(t),n=s.length;n-- >0;){var i=s[n],a=e[i];if(a){var u=t[i],l=u===void 0||a(u,i,t);if(l!==!0)throw new O("option "+i+" must be "+l,O.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new O("Unknown option "+i,O.ERR_BAD_OPTION)}}var ar={assertOptions:ir,validators:pe},ze=m,or=Ue,Ae=wt,Se=nr,G=Ve,ur=qe,We=ar,D=We.validators;function U(t){this.defaults=t,this.interceptors={request:new Ae,response:new Ae}}U.prototype.request=function(e,r){typeof e=="string"?(r=r||{},r.url=e):r=e||{},r=G(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var s=r.transitional;s!==void 0&&We.assertOptions(s,{silentJSONParsing:D.transitional(D.boolean),forcedJSONParsing:D.transitional(D.boolean),clarifyTimeoutError:D.transitional(D.boolean)},!1);var n=[],i=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(r)===!1||(i=i&&p.synchronous,n.unshift(p.fulfilled,p.rejected))});var a=[];this.interceptors.response.forEach(function(p){a.push(p.fulfilled,p.rejected)});var u;if(!i){var l=[Se,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(a),u=Promise.resolve(r);l.length;)u=u.then(l.shift(),l.shift());return u}for(var f=r;n.length;){var o=n.shift(),c=n.shift();try{f=o(f)}catch(v){c(v);break}}try{u=Se(f)}catch(v){return Promise.reject(v)}for(;a.length;)u=u.then(a.shift(),a.shift());return u};U.prototype.getUri=function(e){e=G(this.defaults,e);var r=ur(e.baseURL,e.url);return or(r,e.params,e.paramsSerializer)};ze.forEach(["delete","get","head","options"],function(e){U.prototype[e]=function(r,s){return this.request(G(s||{},{method:e,url:r,data:(s||{}).data}))}});ze.forEach(["post","put","patch"],function(e){function r(s){return function(i,a,u){return this.request(G(u||{},{method:e,headers:s?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}U.prototype[e]=r(),U.prototype[e+"Form"]=r(!0)});var lr=U,dr=Q;function k(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var r=this;this.promise.then(function(s){if(!!r._listeners){var n,i=r._listeners.length;for(n=0;n<i;n++)r._listeners[n](s);r._listeners=null}}),this.promise.then=function(s){var n,i=new Promise(function(a){r.subscribe(a),n=a}).then(s);return i.cancel=function(){r.unsubscribe(n)},i},t(function(n){r.reason||(r.reason=new dr(n),e(r.reason))})}k.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};k.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};k.prototype.unsubscribe=function(e){if(!!this._listeners){var r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}};k.source=function(){var e,r=new k(function(n){e=n});return{token:r,cancel:e}};var cr=k,fr=function(e){return function(s){return e.apply(null,s)}},hr=m,mr=function(e){return hr.isObject(e)&&e.isAxiosError===!0},Pe=m,pr=Te,W=lr,vr=Ve,br=me;function Xe(t){var e=new W(t),r=pr(W.prototype.request,e);return Pe.extend(r,W.prototype,e),Pe.extend(r,e),r.create=function(n){return Xe(vr(t,n))},r}var x=Xe(br);x.Axios=W;x.CanceledError=Q;x.CancelToken=cr;x.isCancel=He;x.VERSION=Je.version;x.toFormData=je;x.AxiosError=L;x.Cancel=x.CanceledError;x.all=function(e){return Promise.all(e)};x.spread=fr;x.isAxiosError=mr;ue.exports=x;ue.exports.default=x;var yr=ue.exports;const gr={class:"px-4 sm:px-6 lg:px-8"},xr={class:"sm:flex sm:items-center"},wr={class:"sm:flex-auto"},Er={class:"text-xl font-semibold text-gray-900"},_r={class:"mt-2 text-sm text-gray-700"},Rr=d("div",{class:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none"},[d("button",{type:"button",class:"inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"}," Add user ")],-1),$r={class:"mt-8 flex flex-col"},Or={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},Cr={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},Ar={class:"relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"},Sr={key:0,class:"absolute top-0 left-12 flex h-12 items-center space-x-3 bg-gray-50 sm:left-16"},Pr={class:"min-w-full table-fixed divide-y divide-gray-300"},Nr={class:"bg-gray-50"},Tr={scope:"col",class:"relative w-12 px-6 sm:w-16 sm:px-8"},Dr=["checked","indeterminate"],Br={class:"divide-y divide-gray-200 bg-white"},Ur={class:"relative w-12 px-6 sm:w-16 sm:px-8"},kr={key:0,class:"absolute inset-y-0 left-0 w-0.5 bg-indigo-600"},Lr=["value"],Fr=oe({props:{columns:null,rows:null,checkIdx:{default:"email"}},emits:["@selectedItems"],setup(t){const e=Ne([]),r=Qe(()=>e.value.length>0&&e.value.length<t.rows.length),s=n=>{e.value=n.target.checked?t.rows.map(i=>i[t.checkIdx]):[]};return(n,i)=>(b(),y("div",gr,[d("div",xr,[d("div",wr,[d("h1",Er,[q(n.$slots,"title")]),d("p",_r,[q(n.$slots,"description")])]),Rr]),d("div",$r,[d("div",Or,[d("div",Cr,[d("div",Ar,[e.value.length>0?(b(),y("div",Sr,[d("button",{type:"button",class:"inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30",onClick:i[0]||(i[0]=A(a=>n.$emit("@selectedItems",e.value),["prevent"]))}," Bulk edit "),d("button",{type:"button",class:"inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30",onClick:i[1]||(i[1]=A(a=>n.$emit("@selectedItems",e.value),["prevent"]))}," Delete all ")])):j("",!0),d("table",Pr,[d("thead",Nr,[d("tr",null,[d("th",Tr,[d("input",{type:"checkbox",class:"absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6",checked:S(r)||e.value.length===t.rows.length,indeterminate:S(r),onChange:s},null,40,Dr)]),(b(!0),y(I,null,V(t.columns,(a,u,l)=>(b(),y("th",{key:u,scope:"col",class:J(["px-3 py-3.5 text-left text-sm font-semibold text-gray-900",{"relative py-3.5 pl-3 pr-4 sm:pr-6":u==="actions"},{"min-w-[12rem]":l===0}])},[q(n.$slots,`header-${u}`,{column:a},()=>[$(g(a),1)])],2))),128))])]),d("tbody",Br,[(b(!0),y(I,null,V(t.rows,a=>(b(),y("tr",{key:a[t.checkIdx],class:J([e.value.includes(a[t.checkIdx])&&"bg-gray-50"])},[d("td",Ur,[e.value.includes(a[t.checkIdx])?(b(),y("div",kr)):j("",!0),Ye(d("input",{"onUpdate:modelValue":i[2]||(i[2]=u=>e.value=u),type:"checkbox",class:"absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6",value:a[t.checkIdx]},null,8,Lr),[[Ge,e.value]])]),(b(!0),y(I,null,V(t.columns,(u,l,f)=>(b(),y("td",{key:l,class:J(["whitespace-nowrap py-4 text-sm",f===0&&e.value.includes(a[t.checkIdx])?"text-indigo-600":f===0?"text-gray-900":"text-gray-500",{"pr-3 font-medium":f===0},l==="actions"?"pl-3 pr-4 text-right font-medium sm:pr-6":"px-3",,])},[q(n.$slots,`cell-${l}`,{row:a},()=>[$(g(a[l]),1)])],2))),128))],2))),128))])])])])])])]))}}),Ir={key:0,class:"flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"},jr={class:"flex flex-1 justify-between sm:hidden"},qr=["disabled","onClick"],Mr=["disabled","onClick"],Hr={class:"hidden sm:flex sm:flex-1 sm:items-center sm:justify-between"},Vr={class:"text-sm text-gray-700"},Jr=$(" Showing "+g(" ")+" "),zr={class:"font-medium"},Wr=$(" "+g(" ")+" to "+g(" ")+" "),Xr={class:"font-medium"},Kr=$(" "+g(" ")+" of "+g(" ")+" "),Qr={class:"font-medium"},Yr=$(" "+g(" ")+" results "),Gr={class:"relative z-0 inline-flex -space-x-px rounded-md shadow-sm","aria-label":"Pagination"},Zr=["disabled","onClick"],en=d("span",{class:"sr-only"},"Previous",-1),tn=d("svg",{class:"h-5 w-5","x-description":"Heroicon name: solid/chevron-left",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1),rn=[en,tn],nn=["aria-current","disabled","onClick"],sn=["disabled","onClick"],an=d("span",{class:"sr-only"},"Next",-1),on=d("svg",{class:"h-5 w-5","x-description":"Heroicon name: solid/chevron-right",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1),un=[an,on],ln=oe({props:{meta:null},emits:["@currentPage"],setup(t,{emit:e}){const r=t,s=ye(()=>r.meta.current_page),n=l=>{e("@currentPage",l)},i=()=>{n(s.value+1)},a=()=>{n(s.value-1)},u=ye(()=>{var l,f,o;return r.meta&&(((l=r.meta)==null?void 0:l.current_page)!=1||((f=r.meta)==null?void 0:f.current_page)<((o=r.meta)==null?void 0:o.last_page))});return(l,f)=>S(u)?(b(),y("div",Ir,[d("div",jr,[d("button",{type:"button",class:"relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-400 disabled:hover:bg-white",disabled:S(s)===1,onClick:A(a,["prevent"])}," Previous ",8,qr),d("button",{type:"button",class:"relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-400 disabled:hover:bg-white",disabled:S(s)===t.meta.last_page,onClick:A(i,["prevent"])}," Next ",8,Mr)]),d("div",Hr,[d("div",null,[d("p",Vr,[Jr,d("span",zr,g(t.meta.from),1),Wr,d("span",Xr,g(t.meta.to),1),Kr,d("span",Qr,g(t.meta.total),1),Yr])]),d("div",null,[d("nav",Gr,[d("button",{type:"button",class:"relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-400 disabled:hover:bg-white",disabled:S(s)===1,onClick:A(a,["prevent"])},rn,8,Zr),(b(!0),y(I,null,V(t.meta.links,(o,c)=>(b(),y(I,{key:c},[/^[0-9]+|^\.{3}$/.test(o.label)?(b(),y("button",{key:0,type:"button",class:J(["relative inline-flex items-center border px-4 py-2 text-sm font-medium",t.meta.current_page==o.label?"z-10 cursor-default border-indigo-500 bg-indigo-50 text-indigo-700":"border-gray-300 bg-white text-gray-500 hover:bg-gray-50"]),"aria-current":t.meta.current_page==o.label?"page":void 0,disabled:o.label==="...",onClick:A(v=>l.$emit("@currentPage",o.label),["prevent"])},g(o.label),11,nn)):j("",!0)],64))),128)),d("button",{type:"button",class:"relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-400 disabled:hover:bg-white",disabled:S(s)===t.meta.last_page,onClick:A(i,["prevent"])},un,8,sn)])])])])):j("",!0)}}),dn={key:0,class:"mt-10"},cn=$("Users"),fn=$("A list of all the users in your account including their name, title, email and role."),hn={class:"sr-only"},mn={type:"button",class:"font-medium text-indigo-600 hover:text-indigo-900"},pn=$(" Edit "),vn={class:"sr-only"},yn=oe({setup(t){const e=Ne(),r=async(i=1)=>{const a=await yr.get("/api/users",{params:{page:i}});e.value=a.data};r();const s={name:"Name",email:"Email",email_verified_at:"Email verified at",actions:"Edit"},n=i=>{console.log(i)};return(i,a)=>e.value?(b(),y("div",dn,[ge(Fr,{columns:s,rows:e.value.data,"on@selectedItems":n},{title:M(()=>[cn]),description:M(()=>[fn]),"header-actions":M(({col:u})=>[d("span",hn,g(u),1)]),"cell-actions":M(({row:u})=>[d("button",mn,[pn,d("span",vn,", "+g(u.name),1)])]),_:1},8,["rows"]),ge(ln,{meta:e.value.meta,"on@currentPage":r},null,8,["meta"])])):j("",!0)}});export{yn as default};
