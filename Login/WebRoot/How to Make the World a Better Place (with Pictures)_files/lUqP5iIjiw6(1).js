<!DOCTYPE html>
<!-- saved from url=(0130)https://staticxx.facebook.com/connect/xd_arbiter/r/lUqP5iIjiw6.js?version=42#channel=fae0335b8&origin=http%3A%2F%2Fwww.wikihow.com -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>Facebook Cross-Domain Messaging helper</title></head><body><script>document.domain = 'facebook.com';__transform_includes = {};if(!Array.from)Array.from=function(a){if(a==null)throw new TypeError('Object is null or undefined');var b=arguments[1],c=arguments[2],d=this,e=Object(a),f=typeof Symbol==='function'?typeof Symbol==='function'?Symbol.iterator:'@@iterator':'@@iterator',g=typeof b==='function',h=typeof e[f]==='function',i=0,j,k;if(h){j=typeof d==='function'?new d():[];var l=e[f](),m;while(!(m=l.next()).done){k=m.value;if(g)k=b.call(c,k,i);j[i]=k;i+=1;}j.length=i;return j;}var n=e.length;if(isNaN(n)||n<0)n=0;j=typeof d==='function'?new d(n):new Array(n);while(i<n){k=e[i];if(g)k=b.call(c,k,i);j[i]=k;i+=1;}j.length=i;return j;};
if(!Array.isArray)Array.isArray=function(a){return Object.prototype.toString.call(a)=='[object Array]';};
self.__DEV__=self.__DEV__||0;
(function(a){function b(c,d){if(this==null)throw new TypeError('Array.prototype.findIndex called on null or undefined');if(typeof c!=='function')throw new TypeError('predicate must be a function');var e=Object(this),f=e.length>>>0;for(var g=0;g<f;g++)if(c.call(d,e[g],g,e))return g;return -1;}if(!Array.prototype.findIndex)Array.prototype.findIndex=b;if(!Array.prototype.find)Array.prototype.find=function(c,d){if(this==null)throw new TypeError('Array.prototype.find called on null or undefined');var e=b.call(this,c,d);return e===-1?a:this[e];};if(!Array.prototype.fill)Array.prototype.fill=function(c){if(this==null)throw new TypeError('Array.prototype.fill called on null or undefined');var d=Object(this),e=d.length>>>0,f=arguments[1],g=f>>0,h=g<0?Math.max(e+g,0):Math.min(g,e),i=arguments[2],j=i===a?e:i>>0,k=j<0?Math.max(e+j,0):Math.min(j,e);while(h<k){d[h]=c;h++;}return d;};})();
(function(){var a=Object.prototype.toString,b=Object("a"),c=b[0]!="a";function d(e){e=+e;if(e!==e){e=0;}else if(e!==0&&e!==1/0&&e!==-(1/0))e=(e>0||-1)*Math.floor(Math.abs(e));return e;}if(!Array.prototype.map)Array.prototype.map=function(e,f){if(typeof e!='function')throw new TypeError();var g,h=this.length,i=new Array(h);for(g=0;g<h;++g)if(g in this)i[g]=e.call(f,this[g],g,this);return i;};if(!Array.prototype.forEach)Array.prototype.forEach=function(e,f){this.map(e,f);};if(!Array.prototype.filter)Array.prototype.filter=function(e,f){if(typeof e!='function')throw new TypeError();var g,h,i=this.length,j=[];for(g=0;g<i;++g)if(g in this){h=this[g];if(e.call(f,h,g,this))j.push(h);}return j;};if(!Array.prototype.every)Array.prototype.every=function(e,f){if(typeof e!='function')throw new TypeError();var g=new Object(this),h=g.length;for(var i=0;i<h;i++)if(i in g)if(!e.call(f,g[i],i,g))return false;return true;};if(!Array.prototype.some)Array.prototype.some=function(e,f){if(typeof e!='function')throw new TypeError();var g=new Object(this),h=g.length;for(var i=0;i<h;i++)if(i in g)if(e.call(f,g[i],i,g))return true;return false;};if(!Array.prototype.indexOf)Array.prototype.indexOf=function(e,f){var g=this.length;f|=0;if(f<0)f+=g;for(;f<g;f++)if(f in this&&this[f]===e)return f;return -1;};if(!Array.prototype.lastIndexOf||[0,1].lastIndexOf(0,-3)!=-1)Array.prototype.lastIndexOf=function(e){var f=c&&a.call(this)=="[object String]"?this.split(""):Object(this),g=f.length>>>0;if(!g)return -1;var h=g-1;if(arguments.length>1)h=Math.min(h,d(arguments[1]));h=h>=0?h:g-Math.abs(h);for(;h>=0;h--)if(h in f&&e===f[h])return h;return -1;};if(!Array.prototype.reduce)Array.prototype.reduce=function(e){if(typeof e!=='function')throw new TypeError(e+' is not a function');var f=this.length>>>0,g,h,i=arguments.length===2;if(i)g=arguments[1];for(h=0;h<f;++h)if(this.hasOwnProperty(h))if(i===false){g=this[h];i=true;}else g=e(g,this[h],h,this);if(i===false)throw new TypeError('Reduce of empty array with no initial value');return g;};if(!Array.prototype.reduceRight)Array.prototype.reduceRight=function(e){if(typeof e!=='function')throw new TypeError(e+' is not a function');var f=this.length>>>0,g,h,i=arguments.length===2;if(i)g=arguments[1];for(h=f-1;h>-1;--h)if(this.hasOwnProperty(h))if(i===false){g=this[h];i=true;}else g=e(g,this[h],h,this);if(i===false)throw new TypeError('Reduce of empty array with no initial value');return g;};})();
if(typeof Number.isFinite!=='function')Number.isFinite=function(a){return typeof a==='number'&&isFinite(a);};if(typeof Number.isNaN!=='function')Number.isNaN=function(a){return typeof a==='number'&&isNaN(a);};if(typeof Number.EPSILON!=='number')Number.EPSILON=Math.pow(2,-52);if(typeof Number.MAX_SAFE_INTEGER!=='number')Number.MAX_SAFE_INTEGER=Math.pow(2,53)-1;if(typeof Number.MIN_SAFE_INTEGER!=='number')Number.MIN_SAFE_INTEGER=-1*Number.MAX_SAFE_INTEGER;if(typeof Number.isInteger!=='function')Number.isInteger=function(a){return Number.isFinite(a)&&Math.floor(a)===a;};if(typeof Number.isSafeInteger!=='function')Number.isSafeInteger=function(a){return Number.isFinite(a)&&a>=Number.MIN_SAFE_INTEGER&&a<=Number.MAX_SAFE_INTEGER&&Math.floor(a)===a;};
(function(){'use strict';var a=Array.prototype.indexOf;if(!Array.prototype.includes)Array.prototype.includes=function(e){'use strict';if(e!==undefined&&Array.isArray(this)&&!Number.isNaN(e))return a.apply(this,arguments)!==-1;var f=Object(this),g=f.length?b(f.length):0;if(g===0)return false;var h=arguments.length>1?c(arguments[1]):0,i=h<0?Math.max(g+h,0):h,j=Number.isNaN(e);while(i<g){var k=f[i];if(k===e||j&&Number.isNaN(k))return true;i++;}return false;};function b(e){return Math.min(Math.max(c(e),0),Number.MAX_SAFE_INTEGER);}function c(e){var f=Number(e);return Number.isFinite(f)&&f!==0?d(f)*Math.floor(Math.abs(f)):f;}function d(e){return e>=0?1:-1;}})();
if(!Date.now)Date.now=function(){return new Date().getTime();};
(function(){if(!Date.prototype.toISOString){var a=function b(c){if(c<10)return '0'+c;return c;};Date.prototype.toISOString=function(){if(!isFinite(this))throw new Error('Invalid time value');var b=this.getUTCFullYear();b=(b<0?'-':b>9999?'+':'')+('00000'+Math.abs(b)).slice(0<=b&&b<=9999?-4:-6);return b+'-'+a(this.getUTCMonth()+1)+'-'+a(this.getUTCDate())+'T'+a(this.getUTCHours())+':'+a(this.getUTCMinutes())+':'+a(this.getUTCSeconds())+'.'+(this.getUTCMilliseconds()/1000).toFixed(3).slice(2,5)+'Z';};}})();
if(!Function.prototype.bind)Function.prototype.bind=function(a){if(typeof this!='function')throw new TypeError('Bind must be called on a function');var b=this,c=Array.prototype.slice,d=c.call(arguments,1);function e(){var f=b.prototype&&this instanceof b;return b.apply(!f&&a||this,d.concat(c.call(arguments)));}e.prototype=b.prototype;e.displayName='bound:'+(b.displayName||b.name||'(?)');e.toString=function f(){return 'bound: '+b;};return e;};

(function(){var a={},b=function i(j,k){if(!j&&!k)return null;var l={};if(typeof j!=='undefined')l.type=j;if(typeof k!=='undefined')l.signature=k;return l;},c=function i(j,k){return b(j&&/^[A-Z]/.test(j)?j:undefined,k&&(k.params&&k.params.length||k.returns)?'function('+(k.params?k.params.map(function(l){return (/\?/.test(l)?'?'+l.replace('?',''):l);}).join(','):'')+')'+(k.returns?':'+k.returns:''):undefined);},d=function i(j,k,l){return j;},e=function i(j,k,l){if('sourcemeta' in __transform_includes)j.__SMmeta=k;if('typechecks' in __transform_includes){var m=c(k?k.name:undefined,l);if(m)__w(j,m);}return j;},f=function i(j,k,l){return l.apply(j,k);},g=function i(j,k,l,m){if(m&&m.params)__t.apply(j,m.params);var n=l.apply(j,k);if(m&&m.returns)__t([n,m.returns]);return n;},h=function i(j,k,l,m,n){if(n){if(!n.callId)n.callId=n.module+':'+(n.line||0)+':'+(n.column||0);var o=n.callId;a[o]=(a[o]||0)+1;}return l.apply(j,k);};if(typeof __transform_includes==='undefined'){__annotator=d;__bodyWrapper=f;}else{__annotator=e;if('codeusage' in __transform_includes){__annotator=d;__bodyWrapper=h;__bodyWrapper.getCodeUsage=function(){return a;};__bodyWrapper.clearCodeUsage=function(){a={};};}else if('typechecks' in __transform_includes){__bodyWrapper=g;}else __bodyWrapper=f;}})();
if(typeof window!=='undefined'&&window.JSON&&JSON.stringify(['\u2028\u2029'])==='["\u2028\u2029"]')JSON.stringify=function(a){var b=/\u2028/g,c=/\u2029/g;return function d(e,f,g){var h=a.call(this,e,f,g);if(h){if(-1<h.indexOf('\u2028'))h=h.replace(b,'\\u2028');if(-1<h.indexOf('\u2029'))h=h.replace(c,'\\u2029');}return h;};}(JSON.stringify);
if(typeof JSON==='object'&&typeof JSON.parse==='function')try{JSON.parse(null);}catch(e){JSON.originalParse=JSON.parse;JSON.parse=function(a){return a===null?null:JSON.originalParse(a);};}
if(typeof Math.log2!=='function')Math.log2=function(a){return Math.log(a)/Math.LN2;};if(typeof Math.log10!=='function')Math.log10=function(a){return Math.log(a)/Math.LN10;};if(typeof Math.trunc!=='function')Math.trunc=function(a){return a<0?Math.ceil(a):Math.floor(a);};
(function(){var a=!{toString:true}.propertyIsEnumerable('toString');if(!a)return;var b=['toString','toLocaleString','valueOf','hasOwnProperty','isPrototypeOf','constructor'];Object.keys=function(c){var d=typeof c;if(d!='object'&&d!='function'||c===null)throw new TypeError('Object.keys called on non-object');var e=Object.prototype.hasOwnProperty,f=[];for(var g in c)if(e.call(c,g))f.push(g);for(var h=0;h<b.length;h++){var i=b[h];if(e.call(c,i))f.push(i);}return f;};Object.assign=function(c,d){if(c==null)throw new TypeError('Object.assign target cannot be null or undefined');var e=Object(c),f=Object.prototype.hasOwnProperty;for(var g=1;g<arguments.length;g++){var h=arguments[g];if(h==null)continue;var i=Object(h);for(var j in i)if(f.call(i,j))e[j]=i[j];for(var k=0;k<b.length;k++){var l=b[k];if(f.call(i,l))e[l]=i[l];}}return e;};})();
if(!Object.create)Object.create=function(a){var b=typeof a;if(b!='object'&&b!='function')throw new TypeError('Object prototype may only be a Object or null');var c=function d(){if(a===null){this.__proto__=a;delete this.__proto__;}};c.prototype=a;return new c();};if(!Object.keys)Object.keys=function a(b){var c=typeof b;if(c!='object'&&c!='function'||b===null)throw new TypeError('Object.keys called on non-object');var d=Object.prototype.hasOwnProperty,e=[];for(var f in b)if(d.call(b,f))e.push(f);return e;};if(!Object.freeze)Object.freeze=function(a){return a;};if(!Object.isFrozen)Object.isFrozen=function(){return false;};if(!Object.seal)Object.seal=function(a){return a;};(function(){try{Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value');}catch(a){Object.getOwnPropertyDescriptor=function(b){return function c(d,e){try{return b(d,e);}catch(f){return {enumerable:d.propertyIsEnumerable(e),configurable:true,get:d.__lookupGetter__(e),set:d.__lookupSetter__(e)};}};}(Object.getOwnPropertyDescriptor);}})();
(function(){if(Object.assign)return;var a=Object.prototype.hasOwnProperty,b;if(Object.keys&&Object.keys.name!=='object_keys_polyfill'){b=function c(d,e){var f=Object.keys(e);for(var g=0;g<f.length;g++)d[f[g]]=e[f[g]];};}else b=function c(d,e){for(var f in e)if(a.call(e,f))d[f]=e[f];};Object.assign=function(c,d){if(c==null)throw new TypeError('Object.assign target cannot be null or undefined');var e=Object(c);for(var f=1;f<arguments.length;f++){var g=arguments[f];if(g!=null)b(e,Object(g));}return e;};})();
(function(){var a=Object.prototype.hasOwnProperty;if(typeof Object.entries!=='function')Object.entries=function(b){if(b==null)throw new TypeError('Object.entries called on non-object');var c=[];for(var d in b)if(a.call(b,d))c.push([d,b[d]]);return c;};if(typeof Object.values!=='function')Object.values=function(b){if(b==null)throw new TypeError('Object.values called on non-object');var c=[];for(var d in b)if(a.call(b,d))c.push(b[d]);return c;};})();
(function(){if(!Object.is)Object.is=function(a,b){if(a===b){return a!==0||1/a===1/b;}else return a!==a&&b!==b;};})();
if({}.hasOwnProperty('__proto__'))Object.prototype.hasOwnProperty=function(a){return function b(c){return c!='__proto__'&&a.call(this,c);};}(Object.prototype.hasOwnProperty);
(function(a){a.__m=function(b,c){b.__SMmeta=c;return b;};})(this);
if(typeof String.fromCodePoint!=='function')String.fromCodePoint=function(){'use strict';var a=[];for(var b=arguments.length,c=Array(b),d=0;d<b;d++)c[d]=arguments[d];for(var e=0;e<c.length;e++){var f=Number(c[e]);if(!isFinite(f)||Math.floor(f)!=f||f<0||1114111<f)throw RangeError('Invalid code point '+f);if(f<65536){a.push(String.fromCharCode(f));}else{f-=65536;a.push(String.fromCharCode((f>>10)+55296),String.fromCharCode(f%1024+56320));}}return a.join('');};
if(!String.prototype.startsWith)String.prototype.startsWith=function(a){"use strict";if(this==null)throw TypeError();var b=String(this),c=arguments.length>1?Number(arguments[1])||0:0,d=Math.min(Math.max(c,0),b.length);return b.indexOf(String(a),c)==d;};if(!String.prototype.endsWith)String.prototype.endsWith=function(a){"use strict";if(this==null)throw TypeError();var b=String(this),c=b.length,d=String(a),e=arguments.length>1?Number(arguments[1])||0:c,f=Math.min(Math.max(e,0),c),g=f-d.length;if(g<0)return false;return b.lastIndexOf(d,g)==g;};if(!String.prototype.includes)String.prototype.includes=function(a){"use strict";if(this==null)throw TypeError();var b=String(this),c=arguments.length>1?Number(arguments[1])||0:0;return b.indexOf(String(a),c)!=-1;};if(!String.prototype.contains)String.prototype.contains=String.prototype.includes;if(!String.prototype.repeat)String.prototype.repeat=function(a){"use strict";if(this==null)throw TypeError();var b=String(this);a=Number(a)||0;if(a<0||a===Infinity)throw RangeError();if(a===1)return b;var c='';while(a){if(a&1)c+=b;if(a>>=1)b+=b;}return c;};if(!String.prototype.codePointAt)String.prototype.codePointAt=function(a){'use strict';if(this==null)throw TypeError('Invalid context: '+this);var b=String(this),c=b.length;a=Number(a)||0;if(a<0||c<=a)return undefined;var d=b.charCodeAt(a);if(55296<=d&&d<=56319&&c>a+1){var e=b.charCodeAt(a+1);if(56320<=e&&e<=57343)return (d-55296)*1024+e-56320+65536;}return d;};
if(!String.prototype.trimLeft)String.prototype.trimLeft=function(){return this.replace(/^\s+/,'');};if(!String.prototype.trimRight)String.prototype.trimRight=function(){return this.replace(/\s+$/,'');};
if(!String.prototype.trim)String.prototype.trim=function(){if(this==null)throw new TypeError('String.prototype.trim called on null or undefined');return String.prototype.replace.call(this,/^\s+|\s+$/g,'');};
(function(){var a,b=String.prototype.split,c=/()??/.exec("")[1]===a;String.prototype.split=function(d,e){var f=this;if(Object.prototype.toString.call(d)!=="[object RegExp]")return b.call(f,d,e);var g=[],h=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.extended?"x":"")+(d.sticky?"y":""),i=0,d=new RegExp(d.source,h+"g"),j,k,l,m;f+="";if(!c)j=new RegExp("^"+d.source+"$(?!\\s)",h);e=e===a?-1>>>0:e>>>0;while(k=d.exec(f)){l=k.index+k[0].length;if(l>i){g.push(f.slice(i,k.index));if(!c&&k.length>1)k[0].replace(j,function(){for(var n=1;n<arguments.length-2;n++)if(arguments[n]===a)k[n]=a;});if(k.length>1&&k.index<f.length)Array.prototype.push.apply(g,k.slice(1));m=k[0].length;i=l;if(g.length>=e)break;}if(d.lastIndex===k.index)d.lastIndex++;}if(i===f.length){if(m||!d.test(""))g.push("");}else g.push(f.slice(i));return g.length>e?g.slice(0,e):g;};})();
__t=function(a){return a[0];};__w=function(a){return a;};
(function(a){var b=a.babelHelpers={},c=Object.prototype.hasOwnProperty;b.inherits=function(d,e){Object.assign(d,e);d.prototype=Object.create(e&&e.prototype);d.prototype.constructor=d;d.__superConstructor__=e;return e;};b._extends=Object.assign;b['extends']=b._extends;b.objectWithoutProperties=function(d,e){var f={};for(var g in d){if(!c.call(d,g)||e.indexOf(g)>=0)continue;f[g]=d[g];}return f;};b.taggedTemplateLiteralLoose=function(d,e){d.raw=e;return d;};b.bind=Function.prototype.bind;})(typeof global==='undefined'?self:global);
if(typeof console=='undefined')(function(){function a(){}console={log:a,info:a,warn:a,debug:a,dir:a,error:a};})();
var require,__d;(function(a){var b={},c={},d=['global','require','requireDynamic','requireLazy','module','exports'];require=function(e,f){if(c.hasOwnProperty(e))return c[e];if(!b.hasOwnProperty(e)){if(f)return null;throw new Error('Module '+e+' has not been defined');}var g=b[e],h=g.deps,i=g.factory.length,j,k=[];for(var l=0;l<i;l++){switch(h[l]){case 'module':j=g;break;case 'exports':j=g.exports;break;case 'global':j=a;break;case 'require':j=require;break;case 'requireDynamic':j=null;break;case 'requireLazy':j=null;break;default:j=require.call(null,h[l]);}k.push(j);}g.factory.apply(a,k);c[e]=g.exports;return g.exports;};require.__markCompiled=function(){};__d=function(e,f,g,h){if(typeof g=='function'){b[e]={factory:g,deps:d.concat(f),exports:{}};if(h===3)require.call(null,e);}else c[e]=g;};})(this);
__d("sprintf",[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){for(var j=arguments.length,k=Array(j>1?j-1:0),l=1;l<j;l++)k[l-1]=arguments[l];var m=0;return i.replace(/%s/g,function(n){return k[m++];});}f.exports=h;}),null);
__d('Log',['sprintf'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={DEBUG:3,INFO:2,WARNING:1,ERROR:0};function j(l,m){var n=Array.prototype.slice.call(arguments,2),o=h.apply(null,n),p=window.console;if(p&&k.level>=m)p[l in p?l:'log'](o);}var k={level:-1,Level:i,debug:j.bind(null,'debug',i.DEBUG),info:j.bind(null,'info',i.INFO),warn:j.bind(null,'warn',i.WARNING),error:j.bind(null,'error',i.ERROR)};f.exports=k;}),null);
__d('QueryString',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(l){var m=[];Object.keys(l).sort().forEach(function(n){var o=l[n];if(typeof o==='undefined')return;if(o===null){m.push(n);return;}m.push(encodeURIComponent(n)+'='+encodeURIComponent(o));});return m.join('&');}function i(l,m){var n={};if(l==='')return n;var o=l.split('&');for(var p=0;p<o.length;p++){var q=o[p].split('=',2),r=decodeURIComponent(q[0]);if(m&&n.hasOwnProperty(r))throw new URIError('Duplicate key: '+r);n[r]=q.length===2?decodeURIComponent(q[1]):null;}return n;}function j(l,m){return l+(l.indexOf('?')!==-1?'&':'?')+(typeof m==='string'?m:k.encode(m));}var k={encode:h,decode:i,appendToUrl:j};f.exports=k;}),null);
__d('eprintf',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=function i(j){var k=Array.prototype.slice.call(arguments).map(function(n){return String(n);}),l=j.split('%s').length-1;if(l!==k.length-1)return i('eprintf args number mismatch: %s',JSON.stringify(k));var m=1;return j.replace(/%s/g,function(n){return String(k[m++]);});};f.exports=h;}),null);
__d('ex',['eprintf'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=function j(){for(var k=arguments.length,l=Array(k),m=0;m<k;m++)l[m]=arguments[m];l=l.map(function(n){return String(n);});if(l[0].split('%s').length!==l.length)return j('ex args number mismatch: %s',JSON.stringify(l));return j._prefix+JSON.stringify(l)+j._suffix;};i._prefix='<![EX[';i._suffix=']]>';f.exports=i;}),null);
__d('invariant',['ex','sprintf'],(function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=h;function k(l,m){if(!l){var n=void 0;if(m===undefined){n=new Error('Minified exception occurred; use the non-minified dev environment '+'for the full error message and additional helpful warnings.');}else{for(var o=arguments.length,p=Array(o>2?o-2:0),q=2;q<o;q++)p[q-2]=arguments[q];n=new Error(j.apply(undefined,[m].concat(p)));n.name='Invariant Violation';n.messageWithParams=[m].concat(p);}n.framesToPop=1;throw n;}}f.exports=k;}),null);
__d('wrapFunction',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i=function j(k,l,m){var n=l||'default';return function(){var o=n in h?h[n](k,m):k;return o.apply(this,arguments);};};i.setWrapper=function(j){var k=arguments.length<=1||arguments[1]===undefined?'default':arguments[1];h[k]=j;};f.exports=i;}),null);
__d('DOMEventListener',['invariant','wrapFunction'],(function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=void 0,k=void 0;if(window.addEventListener){j=function m(n,o,p){p.wrapper=i(p,'entry','DOMEventListener.add '+o);n.addEventListener(o,p.wrapper,false);};k=function m(n,o,p){n.removeEventListener(o,p.wrapper,false);};}else if(window.attachEvent){j=function m(n,o,p){p.wrapper=i(p,'entry','DOMEventListener.add '+o);!n.attachEvent?h(0):void 0;n.attachEvent('on'+o,p.wrapper);};k=function m(n,o,p){!n.detachEvent?h(0):void 0;n.detachEvent('on'+o,p.wrapper);};}else k=j=function m(){};var l={add:function m(n,o,p){j(n,o,p);return {remove:function q(){k(n,o,p);}};},remove:k};f.exports=l;}),null);
__d("DOMWrapper",[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h,i,j={setRoot:function k(l){h=l;},getRoot:function k(){return h||document.body;},setWindow:function k(l){i=l;},getWindow:function k(){return i||self;}};f.exports=j;}),null);
__d('UserAgent_DEPRECATED',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=false,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;function x(){if(h)return;h=true;var z=navigator.userAgent,aa=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(z),ba=/(Mac OS X)|(Windows)|(Linux)/.exec(z);t=/\b(iPhone|iP[ao]d)/.exec(z);u=/\b(iP[ao]d)/.exec(z);r=/Android/i.exec(z);v=/FBAN\/\w+;/i.exec(z);w=/Mobile/i.exec(z);s=!!/Win64/.exec(z);if(aa){i=aa[1]?parseFloat(aa[1]):aa[5]?parseFloat(aa[5]):NaN;if(i&&document&&document.documentMode)i=document.documentMode;var ca=/(?:Trident\/(\d+.\d+))/.exec(z);n=ca?parseFloat(ca[1])+4:i;j=aa[2]?parseFloat(aa[2]):NaN;k=aa[3]?parseFloat(aa[3]):NaN;l=aa[4]?parseFloat(aa[4]):NaN;if(l){aa=/(?:Chrome\/(\d+\.\d+))/.exec(z);m=aa&&aa[1]?parseFloat(aa[1]):NaN;}else m=NaN;}else i=j=k=m=l=NaN;if(ba){if(ba[1]){var da=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(z);o=da?parseFloat(da[1].replace('_','.')):true;}else o=false;p=!!ba[2];q=!!ba[3];}else o=p=q=false;}var y={ie:function z(){return x()||i;},ieCompatibilityMode:function z(){return x()||n>i;},ie64:function z(){return y.ie()&&s;},firefox:function z(){return x()||j;},opera:function z(){return x()||k;},webkit:function z(){return x()||l;},safari:function z(){return y.webkit();},chrome:function z(){return x()||m;},windows:function z(){return x()||p;},osx:function z(){return x()||o;},linux:function z(){return x()||q;},iphone:function z(){return x()||t;},mobile:function z(){return x()||t||u||r||w;},nativeApp:function z(){return x()||v;},android:function z(){return x()||r;},ipad:function z(){return x()||u;}};f.exports=y;}),null);
__d('guid',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){return 'f'+(Math.random()*(1<<30)).toString(16).replace('.','');}f.exports=h;}),null);
__d('htmlSpecialChars',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=/&/g,i=/</g,j=/>/g,k=/"/g,l=/'/g;function m(n){if(typeof n=='undefined'||n===null||!n.toString)return '';if(n===false){return '0';}else if(n===true)return '1';return n.toString().replace(h,'&amp;').replace(k,'&quot;').replace(l,'&#039;').replace(i,'&lt;').replace(j,'&gt;');}f.exports=m;}),null);
__d('Flash',['DOMEventListener','DOMWrapper','QueryString','UserAgent_DEPRECATED','guid','htmlSpecialChars'],(function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n={},o,p=i.getWindow().document;function q(v){var w=p.getElementById(v);if(w)w.parentNode.removeChild(w);delete n[v];}function r(){for(var v in n)if(n.hasOwnProperty(v))q(v);}function s(v){return v.replace(/\d+/g,function(w){return '000'.substring(w.length)+w;});}function t(v){if(!o){if(k.ie()>=9)h.add(window,'unload',r);o=true;}n[v]=v;}var u={embed:function v(w,x,y,z){var aa=l();w=m(w).replace(/&amp;/g,'&');y=babelHelpers['extends']({allowscriptaccess:'always',flashvars:z,movie:w},y);if(typeof y.flashvars=='object')y.flashvars=j.encode(y.flashvars);var ba=[];for(var ca in y)if(y.hasOwnProperty(ca)&&y[ca])ba.push('<param name="'+m(ca)+'" value="'+m(y[ca])+'">');var da=x.appendChild(p.createElement('span')),ea='<object '+(k.ie()?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ':'type="application/x-shockwave-flash"')+'data="'+w+'" '+(y.height?'height="'+y.height+'" ':'')+(y.width?'width="'+y.width+'" ':'')+'id="'+aa+'">'+ba.join('')+'</object>';da.innerHTML=ea;var fa=da.firstChild;t(aa);return fa;},remove:q,getVersion:function v(){var w='Shockwave Flash',x='application/x-shockwave-flash',y='ShockwaveFlash.ShockwaveFlash',z;if(navigator.plugins&&typeof navigator.plugins[w]=='object'){var aa=navigator.plugins[w].description;if(aa&&navigator.mimeTypes&&navigator.mimeTypes[x]&&navigator.mimeTypes[x].enabledPlugin)z=aa.match(/\d+/g);}if(!z)try{z=new ActiveXObject(y).GetVariable('$version').match(/(\d+),(\d+),(\d+),(\d+)/);z=Array.prototype.slice.call(z,1);}catch(ba){}return z;},getVersionString:function v(){var w=u.getVersion();return w?w.join('.'):'';},checkMinVersion:function v(w){var x=u.getVersion();if(!x)return false;return s(x.join('.'))>=s(w);},isAvailable:function v(){return !!u.getVersion();}};f.exports=u;}),null);
__d('dotAccess',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k){var l=j.split('.');do{var m=l.shift();i=i[m]||k&&(i[m]={});}while(l.length&&i);return i;}f.exports=h;}),null);
__d('GlobalCallback',['DOMWrapper','dotAccess','guid','wrapFunction'],(function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l,m,n={setPrefix:function o(p){l=i(h.getWindow(),p,true);m=p;},create:function o(p,q){if(!l)this.setPrefix('__globalCallbacks');var r=j();l[r]=k(p,'entry',q||'GlobalCallback');return m+'.'+r;},remove:function o(p){var q=p.substring(m.length+1);delete l[q];}};f.exports=n;}),null);
__d("emptyFunction",[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j){return function(){return j;};}var i=function j(){};i.thatReturns=h;i.thatReturnsFalse=h(false);i.thatReturnsTrue=h(true);i.thatReturnsNull=h(null);i.thatReturnsThis=function(){return this;};i.thatReturnsArgument=function(j){return j;};f.exports=i;}),null);
__d('XDM',['DOMEventListener','DOMWrapper','emptyFunction','Flash','GlobalCallback','guid','Log','UserAgent_DEPRECATED','wrapFunction'],(function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q={},r={transports:[]},s=i.getWindow();function t(w){var x={},y=w.length,z=r.transports;while(y--)x[w[y]]=1;y=z.length;while(y--){var aa=z[y],ba=q[aa];if(!x[aa]&&ba.isAvailable())return aa;}}var u={register:function w(x,y){n.debug('Registering %s as XDM provider',x);r.transports.push(x);q[x]=y;},create:function w(x){if(!x.whenReady&&!x.onMessage){n.error('An instance without whenReady or onMessage makes no sense');throw new Error('An instance without whenReady or '+'onMessage makes no sense');}if(!x.channel){n.warn('Missing channel name, selecting at random');x.channel=m();}if(!x.whenReady)x.whenReady=j;if(!x.onMessage)x.onMessage=j;var y=x.transport||t(x.blacklist||[]),z=q[y];if(z&&z.isAvailable()){n.debug('%s is available',y);z.init(x);return y;}}};u.register('flash',function(){var w=false,x,y=false,z=15000,aa;return {isAvailable:function ba(){return k.checkMinVersion('8.0.24');},init:function ba(ca){n.debug('init flash: '+ca.channel);var da={send:function ga(ha,ia,ja,ka){n.debug('sending to: %s (%s)',ia,ka);x.postMessage(ha,ia,ka);}};if(w){ca.whenReady(da);return;}var ea=ca.root.appendChild(s.document.createElement('div')),fa=l.create(function(){l.remove(fa);clearTimeout(aa);n.info('xdm.swf called the callback');var ga=l.create(function(ha,ia){ha=decodeURIComponent(ha);ia=decodeURIComponent(ia);n.debug('received message %s from %s',ha,ia);ca.onMessage(ha,ia);},'xdm.swf:onMessage');x.init(ca.channel,ga);ca.whenReady(da);},'xdm.swf:load');x=k.embed(ca.flashUrl,ea,null,{protocol:location.protocol.replace(':',''),host:location.host,callback:fa,log:y});aa=setTimeout(function(){n.warn('The Flash component did not load within %s ms - '+'verify that the container is not set to hidden or invisible '+'using CSS as this will cause some browsers to not load '+'the components',z);},z);w=true;}};}());var v=/\.facebook\.com(\/|$)/;u.register('postmessage',function(){var w=false;return {isAvailable:function x(){return !!s.postMessage;},init:function x(y){n.debug('init postMessage: '+y.channel);var z='_FB_'+y.channel,aa={send:function ba(ca,da,ea,fa){if(s===ea){n.error('Invalid windowref, equal to window (self)');throw new Error();}n.debug('sending to: %s (%s)',da,fa);var ba=function ga(){ea.postMessage('_FB_'+fa+ca,da);};if(o.ie()==8||o.ieCompatibilityMode()){setTimeout(ba,0);}else ba();}};if(w){y.whenReady(aa);return;}h.add(s,'message',p(function(event){var ba=event.data,ca=event.origin||'native';if(!/^(https?:\/\/|native$)/.test(ca)){n.debug('Received message from invalid origin type: %s',ca);return;}if(ca!=='native'&&!(v.test(location.hostname)||v.test(event.origin)))return;if(typeof ba!='string'){n.warn('Received message of type %s from %s, expected a string',typeof ba,ca);return;}n.debug('received message %s from %s',ba,ca);if(ba.substring(0,z.length)==z)ba=ba.substring(z.length);y.onMessage(ba,ca);},'entry','onMessage'));y.whenReady(aa);w=true;}};}());f.exports=u;}),null);
__d('resolveWindow',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){var j=window,k=i.split('.');try{for(var m=0;m<k.length;m++){var n=k[m],o=/^frames\[['"]?([a-zA-Z0-9\-_]+)['"]?\]$/.exec(n);if(o){j=j.frames[o[1]];}else if(n==='opener'||n==='parent'||n==='top'){j=j[n];}else return null;}}catch(l){return null;}return j;}f.exports=h;}),null);
__d('initXdArbiter',['QueryString','resolveWindow','Log','XDM','XDMConfig'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();(function(){var h=c('QueryString'),i=c('resolveWindow'),j=c('Log'),k=c('XDM'),l=c('XDMConfig');function m(aa){return aa?aa.replace(/["'<>\(\)\\@]/g,''):aa;}function n(){if(!window.chrome||!location.ancestorOrigins)return false;return !/\.facebook\.com$/.test(location.ancestorOrigins[1]);}function o(aa,ba){if(n())return '';if(window!=parent&&window.parent!=window.parent.parent)try{return parent.parent.XdArbiter.register(window,aa,ba);}catch(ca){j.error('Could not register with XdArbiter in parent.parent');}return '';}function p(aa,ba,ca){if(!aa&&n()){j.error('Can not use parent.parent to reach facebook.com');return;}var da=aa?i(aa):parent.parent;try{da.XdArbiter.handleMessage(ba,ca,window);}catch(ea){j.error('Could not reach facebook.com using %s',aa);}}function q(aa,ba){var ca=50,da=function fa(){if(!--ca)clearInterval(ea);try{aa();clearInterval(ea);}catch(ga){}},ea=setInterval(da,50);da();}function r(){var aa=/^https?:\/\/[^\/]*/.exec(u.origin)[0];q(function(){var ba=i(u.relation).frames['fb_xdm_frame_'+v];if(typeof ba.location.search==='undefined')throw new Error('Proxy not ready');if(location.search===ba.location.search){ba.proxyMessage(t,aa);}else j.error('Version mismatch: %s, %s',location.search,ba.location.search);},50);}function s(){var aa=/^(.*)\/(.*)$/.exec(u.origin)[1];if(window.__fbNative&&window.__fbNative.postMessage){window.__fbNative.postMessage(t,aa);}else{var ba=function ca(da){window.removeEventListener('fbNativeReady',ca);window.__fbNative.postMessage(t,aa);};window.addEventListener('fbNativeReady',ba);}}var t=/#(.*)|$/.exec(location.href)[1];if(window==top)location.hash='';if(!t){j.error('xd_arbiter.php loaded without a valid hash, referrer: %s',document.referrer);return;}var u=h.decode(t,true),v=location.protocol.replace(':','');if(window.name.substring(0,6)==='blank_'){parent.frames[u.forIframe].require('Arbiter').inform('blankIframeAck',window);return;}if(u.relation){if(window==top&&/FBAN\/\w+;/i.test(navigator.userAgent)){j.info('Native proxy');s();}else{j.info('Legacy proxy to %s',u.relation);r();}return;}if(v!=/https?/.exec(window.name)[0]){j.info('Redirection to %s detected, aborting',v);return;}var w=m(u.transport),x=m(u.channel),y=m(u.origin),z=m(u.xd_name);if(!/^https?/.test(y)){j.error('Invalid origin presented, aborting.');return;}k.create({root:document.body,transport:w,channel:x+'_'+v,flashUrl:l.Flash.path,onMessage:function aa(ba,ca){if(y!==ca){j.info('Received message from unknown origin %s, expected %s.',ca,y);return;}if(!/^FB_RPC:/.test(ba))ba=h.decode(ba);p(ba.relation,ba,y);},whenReady:function aa(ba){window.proxyMessage=function(fa,ga){if(ga===y){ba.send(fa,y,parent,x);}else j.error('Failed proxying to %s, expected %s',ga,y);};var ca=null,da={xd_action:'proxy_ready',logged_in:/\bc_user=/.test(document.cookie),data:ca},ea=o(z,y);if(ea)da.registered=ea;ba.send(h.encode(da),y,parent,x);}});})();}),null);__d("XDMConfig",[],{"Flash":{"path":"https:\/\/connect.facebook.net\/rsrc.php\/v2\/yW\/r\/yOZN1vHw3Z_.swf"}}); require('initXdArbiter'); </script><b id="warning" style="display: none; color:red"> SECURITY WARNING: Please treat the URL above as you would your password and do not share it with anyone. See the <a href="http://l.facebook.com/l.php?u=http%3A%2F%2Fon.fb.me%2F1mXNHhm&h=RAQEZFnrh&s=1" target="_blank" rel="nofollow" onmouseover="LinkshimAsyncLink.swap(this, &quot;http:\/\/on.fb.me\/1mXNHhm&quot;);" onclick="LinkshimAsyncLink.swap(this, &quot;http:\/\/l.facebook.com\/l.php?u=http\u00253A\u00252F\u00252Fon.fb.me\u00252F1mXNHhm&amp;h=RAQEZFnrh&amp;s=1&quot;);">Facebook Help Center</a> for more information. </b><script>if (window == top) {  setTimeout(function() {    document.getElementById("warning").style.display = 'block';  }, 2000);}</script></body></html>