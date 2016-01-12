/*!
 * University of Warwick ID7
 */


/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

    return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
    return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});
/* ========================================================================
 * Bootstrap: transition.js v3.3.5
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.5
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.5'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.5
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.5'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) e.preventDefault()
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.5
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.5'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.5
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.5'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.5
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.5'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.5
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.5'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$element.parent()) // PATCH MM 31/07/15 ID-93 https://bugs.elab.warwick.ac.uk/browse/ID-93?focusedCommentId=109114&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-109114
        //.appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.5
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.5'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element
        .removeAttr('aria-describedby')
        .trigger('hidden.bs.' + that.type)
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.5
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.5'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.5
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.5'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.5
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.5'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.5
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.5'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

/*!
 * typeahead.js 0.11.1
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2015 Twitter, Inc. and other contributors; Licensed MIT
 */

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define("typeahead.js", [ "jquery" ], function(a0) {
            return factory(a0);
        });
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"));
    } else {
        factory(jQuery);
    }
})(this, function($) {
    var _ = function() {
        "use strict";
        return {
            isMsie: function() {
                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
            },
            isBlankString: function(str) {
                return !str || /^\s*$/.test(str);
            },
            escapeRegExChars: function(str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            },
            isString: function(obj) {
                return typeof obj === "string";
            },
            isNumber: function(obj) {
                return typeof obj === "number";
            },
            isArray: $.isArray,
            isFunction: $.isFunction,
            isObject: $.isPlainObject,
            isUndefined: function(obj) {
                return typeof obj === "undefined";
            },
            isElement: function(obj) {
                return !!(obj && obj.nodeType === 1);
            },
            isJQuery: function(obj) {
                return obj instanceof $;
            },
            toStr: function toStr(s) {
                return _.isUndefined(s) || s === null ? "" : s + "";
            },
            bind: $.proxy,
            each: function(collection, cb) {
                $.each(collection, reverseArgs);
                function reverseArgs(index, value) {
                    return cb(value, index);
                }
            },
            map: $.map,
            filter: $.grep,
            every: function(obj, test) {
                var result = true;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (!(result = test.call(null, val, key, obj))) {
                        return false;
                    }
                });
                return !!result;
            },
            some: function(obj, test) {
                var result = false;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (result = test.call(null, val, key, obj)) {
                        return false;
                    }
                });
                return !!result;
            },
            mixin: $.extend,
            identity: function(x) {
                return x;
            },
            clone: function(obj) {
                return $.extend(true, {}, obj);
            },
            getIdGenerator: function() {
                var counter = 0;
                return function() {
                    return counter++;
                };
            },
            templatify: function templatify(obj) {
                return $.isFunction(obj) ? obj : template;
                function template() {
                    return String(obj);
                }
            },
            defer: function(fn) {
                setTimeout(fn, 0);
            },
            debounce: function(func, wait, immediate) {
                var timeout, result;
                return function() {
                    var context = this, args = arguments, later, callNow;
                    later = function() {
                        timeout = null;
                        if (!immediate) {
                            result = func.apply(context, args);
                        }
                    };
                    callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) {
                        result = func.apply(context, args);
                    }
                    return result;
                };
            },
            throttle: function(func, wait) {
                var context, args, timeout, result, previous, later;
                previous = 0;
                later = function() {
                    previous = new Date();
                    timeout = null;
                    result = func.apply(context, args);
                };
                return function() {
                    var now = new Date(), remaining = wait - (now - previous);
                    context = this;
                    args = arguments;
                    if (remaining <= 0) {
                        clearTimeout(timeout);
                        timeout = null;
                        previous = now;
                        result = func.apply(context, args);
                    } else if (!timeout) {
                        timeout = setTimeout(later, remaining);
                    }
                    return result;
                };
            },
            stringify: function(val) {
                return _.isString(val) ? val : JSON.stringify(val);
            },
            noop: function() {}
        };
    }();
    var WWW = function() {
        "use strict";
        var defaultClassNames = {
            wrapper: "twitter-typeahead",
            input: "tt-input",
            hint: "tt-hint",
            menu: "tt-menu",
            dataset: "tt-dataset",
            suggestion: "tt-suggestion",
            selectable: "tt-selectable",
            empty: "tt-empty",
            open: "tt-open",
            cursor: "tt-cursor",
            highlight: "tt-highlight"
        };
        return build;
        function build(o) {
            var www, classes;
            classes = _.mixin({}, defaultClassNames, o);
            www = {
                css: buildCss(),
                classes: classes,
                html: buildHtml(classes),
                selectors: buildSelectors(classes)
            };
            return {
                css: www.css,
                html: www.html,
                classes: www.classes,
                selectors: www.selectors,
                mixin: function(o) {
                    _.mixin(o, www);
                }
            };
        }
        function buildHtml(c) {
            return {
                wrapper: '<span class="' + c.wrapper + '"></span>',
                menu: '<div class="' + c.menu + '"></div>'
            };
        }
        function buildSelectors(classes) {
            var selectors = {};
            _.each(classes, function(v, k) {
                selectors[k] = "." + v;
            });
            return selectors;
        }
        function buildCss() {
            var css = {
                wrapper: {
                    position: "relative",
                    display: "inline-block"
                },
                hint: {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    borderColor: "transparent",
                    boxShadow: "none",
                    opacity: "1"
                },
                input: {
                    position: "relative",
                    verticalAlign: "top",
                    backgroundColor: "transparent"
                },
                inputWithNoHint: {
                    position: "relative",
                    verticalAlign: "top"
                },
                menu: {
                    position: "absolute",
                    top: "100%",
                    left: "0",
                    zIndex: "100",
                    display: "none"
                },
                ltr: {
                    left: "0",
                    right: "auto"
                },
                rtl: {
                    left: "auto",
                    right: " 0"
                }
            };
            if (_.isMsie()) {
                _.mixin(css.input, {
                    backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
                });
            }
            return css;
        }
    }();
    var EventBus = function() {
        "use strict";
        var namespace, deprecationMap;
        namespace = "typeahead:";
        deprecationMap = {
            render: "rendered",
            cursorchange: "cursorchanged",
            select: "selected",
            autocomplete: "autocompleted"
        };
        function EventBus(o) {
            if (!o || !o.el) {
                $.error("EventBus initialized without el");
            }
            this.$el = $(o.el);
        }
        _.mixin(EventBus.prototype, {
            _trigger: function(type, args) {
                var $e;
                $e = $.Event(namespace + type);
                (args = args || []).unshift($e);
                this.$el.trigger.apply(this.$el, args);
                return $e;
            },
            before: function(type) {
                var args, $e;
                args = [].slice.call(arguments, 1);
                $e = this._trigger("before" + type, args);
                return $e.isDefaultPrevented();
            },
            trigger: function(type) {
                var deprecatedType;
                this._trigger(type, [].slice.call(arguments, 1));
                if (deprecatedType = deprecationMap[type]) {
                    this._trigger(deprecatedType, [].slice.call(arguments, 1));
                }
            }
        });
        return EventBus;
    }();
    var EventEmitter = function() {
        "use strict";
        var splitter = /\s+/, nextTick = getNextTick();
        return {
            onSync: onSync,
            onAsync: onAsync,
            off: off,
            trigger: trigger
        };
        function on(method, types, cb, context) {
            var type;
            if (!cb) {
                return this;
            }
            types = types.split(splitter);
            cb = context ? bindContext(cb, context) : cb;
            this._callbacks = this._callbacks || {};
            while (type = types.shift()) {
                this._callbacks[type] = this._callbacks[type] || {
                        sync: [],
                        async: []
                    };
                this._callbacks[type][method].push(cb);
            }
            return this;
        }
        function onAsync(types, cb, context) {
            return on.call(this, "async", types, cb, context);
        }
        function onSync(types, cb, context) {
            return on.call(this, "sync", types, cb, context);
        }
        function off(types) {
            var type;
            if (!this._callbacks) {
                return this;
            }
            types = types.split(splitter);
            while (type = types.shift()) {
                delete this._callbacks[type];
            }
            return this;
        }
        function trigger(types) {
            var type, callbacks, args, syncFlush, asyncFlush;
            if (!this._callbacks) {
                return this;
            }
            types = types.split(splitter);
            args = [].slice.call(arguments, 1);
            while ((type = types.shift()) && (callbacks = this._callbacks[type])) {
                syncFlush = getFlush(callbacks.sync, this, [ type ].concat(args));
                asyncFlush = getFlush(callbacks.async, this, [ type ].concat(args));
                syncFlush() && nextTick(asyncFlush);
            }
            return this;
        }
        function getFlush(callbacks, context, args) {
            return flush;
            function flush() {
                var cancelled;
                for (var i = 0, len = callbacks.length; !cancelled && i < len; i += 1) {
                    cancelled = callbacks[i].apply(context, args) === false;
                }
                return !cancelled;
            }
        }
        function getNextTick() {
            var nextTickFn;
            if (window.setImmediate) {
                nextTickFn = function nextTickSetImmediate(fn) {
                    setImmediate(function() {
                        fn();
                    });
                };
            } else {
                nextTickFn = function nextTickSetTimeout(fn) {
                    setTimeout(function() {
                        fn();
                    }, 0);
                };
            }
            return nextTickFn;
        }
        function bindContext(fn, context) {
            return fn.bind ? fn.bind(context) : function() {
                fn.apply(context, [].slice.call(arguments, 0));
            };
        }
    }();
    var highlight = function(doc) {
        "use strict";
        var defaults = {
            node: null,
            pattern: null,
            tagName: "strong",
            className: null,
            wordsOnly: false,
            caseSensitive: false
        };
        return function hightlight(o) {
            var regex;
            o = _.mixin({}, defaults, o);
            if (!o.node || !o.pattern) {
                return;
            }
            o.pattern = _.isArray(o.pattern) ? o.pattern : [ o.pattern ];
            regex = getRegex(o.pattern, o.caseSensitive, o.wordsOnly);
            traverse(o.node, hightlightTextNode);
            function hightlightTextNode(textNode) {
                var match, patternNode, wrapperNode;
                if (match = regex.exec(textNode.data)) {
                    wrapperNode = doc.createElement(o.tagName);
                    o.className && (wrapperNode.className = o.className);
                    patternNode = textNode.splitText(match.index);
                    patternNode.splitText(match[0].length);
                    wrapperNode.appendChild(patternNode.cloneNode(true));
                    textNode.parentNode.replaceChild(wrapperNode, patternNode);
                }
                return !!match;
            }
            function traverse(el, hightlightTextNode) {
                var childNode, TEXT_NODE_TYPE = 3;
                for (var i = 0; i < el.childNodes.length; i++) {
                    childNode = el.childNodes[i];
                    if (childNode.nodeType === TEXT_NODE_TYPE) {
                        i += hightlightTextNode(childNode) ? 1 : 0;
                    } else {
                        traverse(childNode, hightlightTextNode);
                    }
                }
            }
        };
        function getRegex(patterns, caseSensitive, wordsOnly) {
            var escapedPatterns = [], regexStr;
            for (var i = 0, len = patterns.length; i < len; i++) {
                escapedPatterns.push(_.escapeRegExChars(patterns[i]));
            }
            regexStr = wordsOnly ? "\\b(" + escapedPatterns.join("|") + ")\\b" : "(" + escapedPatterns.join("|") + ")";
            return caseSensitive ? new RegExp(regexStr) : new RegExp(regexStr, "i");
        }
    }(window.document);
    var Input = function() {
        "use strict";
        var specialKeyCodeMap;
        specialKeyCodeMap = {
            9: "tab",
            27: "esc",
            37: "left",
            39: "right",
            13: "enter",
            38: "up",
            40: "down"
        };
        function Input(o, www) {
            o = o || {};
            if (!o.input) {
                $.error("input is missing");
            }
            www.mixin(this);
            this.$hint = $(o.hint);
            this.$input = $(o.input);
            this.query = this.$input.val();
            this.queryWhenFocused = this.hasFocus() ? this.query : null;
            this.$overflowHelper = buildOverflowHelper(this.$input);
            this._checkLanguageDirection();
            if (this.$hint.length === 0) {
                this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = _.noop;
            }
        }
        Input.normalizeQuery = function(str) {
            return _.toStr(str).replace(/^\s*/g, "").replace(/\s{2,}/g, " ");
        };
        _.mixin(Input.prototype, EventEmitter, {
            _onBlur: function onBlur() {
                this.resetInputValue();
                this.trigger("blurred");
            },
            _onFocus: function onFocus() {
                this.queryWhenFocused = this.query;
                this.trigger("focused");
            },
            _onKeydown: function onKeydown($e) {
                var keyName = specialKeyCodeMap[$e.which || $e.keyCode];
                this._managePreventDefault(keyName, $e);
                if (keyName && this._shouldTrigger(keyName, $e)) {
                    this.trigger(keyName + "Keyed", $e);
                }
            },
            _onInput: function onInput() {
                this._setQuery(this.getInputValue());
                this.clearHintIfInvalid();
                this._checkLanguageDirection();
            },
            _managePreventDefault: function managePreventDefault(keyName, $e) {
                var preventDefault;
                switch (keyName) {
                    case "up":
                    case "down":
                        preventDefault = !withModifier($e);
                        break;

                    default:
                        preventDefault = false;
                }
                preventDefault && $e.preventDefault();
            },
            _shouldTrigger: function shouldTrigger(keyName, $e) {
                var trigger;
                switch (keyName) {
                    case "tab":
                        trigger = !withModifier($e);
                        break;

                    default:
                        trigger = true;
                }
                return trigger;
            },
            _checkLanguageDirection: function checkLanguageDirection() {
                var dir = (this.$input.css("direction") || "ltr").toLowerCase();
                if (this.dir !== dir) {
                    this.dir = dir;
                    this.$hint.attr("dir", dir);
                    this.trigger("langDirChanged", dir);
                }
            },
            _setQuery: function setQuery(val, silent) {
                var areEquivalent, hasDifferentWhitespace;
                areEquivalent = areQueriesEquivalent(val, this.query);
                hasDifferentWhitespace = areEquivalent ? this.query.length !== val.length : false;
                this.query = val;
                if (!silent && !areEquivalent) {
                    this.trigger("queryChanged", this.query);
                } else if (!silent && hasDifferentWhitespace) {
                    this.trigger("whitespaceChanged", this.query);
                }
            },
            bind: function() {
                var that = this, onBlur, onFocus, onKeydown, onInput;
                onBlur = _.bind(this._onBlur, this);
                onFocus = _.bind(this._onFocus, this);
                onKeydown = _.bind(this._onKeydown, this);
                onInput = _.bind(this._onInput, this);
                this.$input.on("blur.tt", onBlur).on("focus.tt", onFocus).on("keydown.tt", onKeydown);
                if (!_.isMsie() || _.isMsie() > 9) {
                    this.$input.on("input.tt", onInput);
                } else {
                    this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function($e) {
                        if (specialKeyCodeMap[$e.which || $e.keyCode]) {
                            return;
                        }
                        _.defer(_.bind(that._onInput, that, $e));
                    });
                }
                return this;
            },
            focus: function focus() {
                this.$input.focus();
            },
            blur: function blur() {
                this.$input.blur();
            },
            getLangDir: function getLangDir() {
                return this.dir;
            },
            getQuery: function getQuery() {
                return this.query || "";
            },
            setQuery: function setQuery(val, silent) {
                this.setInputValue(val);
                this._setQuery(val, silent);
            },
            hasQueryChangedSinceLastFocus: function hasQueryChangedSinceLastFocus() {
                return this.query !== this.queryWhenFocused;
            },
            getInputValue: function getInputValue() {
                return this.$input.val();
            },
            setInputValue: function setInputValue(value) {
                this.$input.val(value);
                this.clearHintIfInvalid();
                this._checkLanguageDirection();
            },
            resetInputValue: function resetInputValue() {
                this.setInputValue(this.query);
            },
            getHint: function getHint() {
                return this.$hint.val();
            },
            setHint: function setHint(value) {
                this.$hint.val(value);
            },
            clearHint: function clearHint() {
                this.setHint("");
            },
            clearHintIfInvalid: function clearHintIfInvalid() {
                var val, hint, valIsPrefixOfHint, isValid;
                val = this.getInputValue();
                hint = this.getHint();
                valIsPrefixOfHint = val !== hint && hint.indexOf(val) === 0;
                isValid = val !== "" && valIsPrefixOfHint && !this.hasOverflow();
                !isValid && this.clearHint();
            },
            hasFocus: function hasFocus() {
                return this.$input.is(":focus");
            },
            hasOverflow: function hasOverflow() {
                var constraint = this.$input.width() - 2;
                this.$overflowHelper.text(this.getInputValue());
                return this.$overflowHelper.width() >= constraint;
            },
            isCursorAtEnd: function() {
                var valueLength, selectionStart, range;
                valueLength = this.$input.val().length;
                selectionStart = this.$input[0].selectionStart;
                if (_.isNumber(selectionStart)) {
                    return selectionStart === valueLength;
                } else if (document.selection) {
                    range = document.selection.createRange();
                    range.moveStart("character", -valueLength);
                    return valueLength === range.text.length;
                }
                return true;
            },
            destroy: function destroy() {
                this.$hint.off(".tt");
                this.$input.off(".tt");
                this.$overflowHelper.remove();
                this.$hint = this.$input = this.$overflowHelper = $("<div>");
            }
        });
        return Input;
        function buildOverflowHelper($input) {
            return $('<pre aria-hidden="true"></pre>').css({
                position: "absolute",
                visibility: "hidden",
                whiteSpace: "pre",
                fontFamily: $input.css("font-family"),
                fontSize: $input.css("font-size"),
                fontStyle: $input.css("font-style"),
                fontVariant: $input.css("font-variant"),
                fontWeight: $input.css("font-weight"),
                wordSpacing: $input.css("word-spacing"),
                letterSpacing: $input.css("letter-spacing"),
                textIndent: $input.css("text-indent"),
                textRendering: $input.css("text-rendering"),
                textTransform: $input.css("text-transform")
            }).insertAfter($input);
        }
        function areQueriesEquivalent(a, b) {
            return Input.normalizeQuery(a) === Input.normalizeQuery(b);
        }
        function withModifier($e) {
            return $e.altKey || $e.ctrlKey || $e.metaKey || $e.shiftKey;
        }
    }();
    var Dataset = function() {
        "use strict";
        var keys, nameGenerator;
        keys = {
            val: "tt-selectable-display",
            obj: "tt-selectable-object"
        };
        nameGenerator = _.getIdGenerator();
        function Dataset(o, www) {
            o = o || {};
            o.templates = o.templates || {};
            o.templates.notFound = o.templates.notFound || o.templates.empty;
            if (!o.source) {
                $.error("missing source");
            }
            if (!o.node) {
                $.error("missing node");
            }
            if (o.name && !isValidName(o.name)) {
                $.error("invalid dataset name: " + o.name);
            }
            www.mixin(this);
            this.highlight = !!o.highlight;
            this.name = o.name || nameGenerator();
            this.limit = o.limit || 5;
            this.displayFn = getDisplayFn(o.display || o.displayKey);
            this.templates = getTemplates(o.templates, this.displayFn);
            this.source = o.source.__ttAdapter ? o.source.__ttAdapter() : o.source;
            this.async = _.isUndefined(o.async) ? this.source.length > 2 : !!o.async;
            this._resetLastSuggestion();
            this.$el = $(o.node).addClass(this.classes.dataset).addClass(this.classes.dataset + "-" + this.name);
        }
        Dataset.extractData = function extractData(el) {
            var $el = $(el);
            if ($el.data(keys.obj)) {
                return {
                    val: $el.data(keys.val) || "",
                    obj: $el.data(keys.obj) || null
                };
            }
            return null;
        };
        _.mixin(Dataset.prototype, EventEmitter, {
            _overwrite: function overwrite(query, suggestions) {
                suggestions = suggestions || [];
                if (suggestions.length) {
                    this._renderSuggestions(query, suggestions);
                } else if (this.async && this.templates.pending) {
                    this._renderPending(query);
                } else if (!this.async && this.templates.notFound) {
                    this._renderNotFound(query);
                } else {
                    this._empty();
                }
                this.trigger("rendered", this.name, suggestions, false);
            },
            _append: function append(query, suggestions) {
                suggestions = suggestions || [];
                if (suggestions.length && this.$lastSuggestion.length) {
                    this._appendSuggestions(query, suggestions);
                } else if (suggestions.length) {
                    this._renderSuggestions(query, suggestions);
                } else if (!this.$lastSuggestion.length && this.templates.notFound) {
                    this._renderNotFound(query);
                }
                this.trigger("rendered", this.name, suggestions, true);
            },
            _renderSuggestions: function renderSuggestions(query, suggestions) {
                var $fragment;
                $fragment = this._getSuggestionsFragment(query, suggestions);
                this.$lastSuggestion = $fragment.children().last();
                this.$el.html($fragment).prepend(this._getHeader(query, suggestions)).append(this._getFooter(query, suggestions));
            },
            _appendSuggestions: function appendSuggestions(query, suggestions) {
                var $fragment, $lastSuggestion;
                $fragment = this._getSuggestionsFragment(query, suggestions);
                $lastSuggestion = $fragment.children().last();
                this.$lastSuggestion.after($fragment);
                this.$lastSuggestion = $lastSuggestion;
            },
            _renderPending: function renderPending(query) {
                var template = this.templates.pending;
                this._resetLastSuggestion();
                template && this.$el.html(template({
                    query: query,
                    dataset: this.name
                }));
            },
            _renderNotFound: function renderNotFound(query) {
                var template = this.templates.notFound;
                this._resetLastSuggestion();
                template && this.$el.html(template({
                    query: query,
                    dataset: this.name
                }));
            },
            _empty: function empty() {
                this.$el.empty();
                this._resetLastSuggestion();
            },
            _getSuggestionsFragment: function getSuggestionsFragment(query, suggestions) {
                var that = this, fragment;
                fragment = document.createDocumentFragment();
                _.each(suggestions, function getSuggestionNode(suggestion) {
                    var $el, context;
                    context = that._injectQuery(query, suggestion);
                    $el = $(that.templates.suggestion(context)).data(keys.obj, suggestion).data(keys.val, that.displayFn(suggestion)).addClass(that.classes.suggestion + " " + that.classes.selectable);
                    fragment.appendChild($el[0]);
                });
                this.highlight && highlight({
                    className: this.classes.highlight,
                    node: fragment,
                    pattern: query
                });
                return $(fragment);
            },
            _getFooter: function getFooter(query, suggestions) {
                return this.templates.footer ? this.templates.footer({
                    query: query,
                    suggestions: suggestions,
                    dataset: this.name
                }) : null;
            },
            _getHeader: function getHeader(query, suggestions) {
                return this.templates.header ? this.templates.header({
                    query: query,
                    suggestions: suggestions,
                    dataset: this.name
                }) : null;
            },
            _resetLastSuggestion: function resetLastSuggestion() {
                this.$lastSuggestion = $();
            },
            _injectQuery: function injectQuery(query, obj) {
                return _.isObject(obj) ? _.mixin({
                    _query: query
                }, obj) : obj;
            },
            update: function update(query) {
                var that = this, canceled = false, syncCalled = false, rendered = 0;
                this.cancel();
                this.cancel = function cancel() {
                    canceled = true;
                    that.cancel = $.noop;
                    that.async && that.trigger("asyncCanceled", query);
                };
                this.source(query, sync, async);
                !syncCalled && sync([]);
                function sync(suggestions) {
                    if (syncCalled) {
                        return;
                    }
                    syncCalled = true;
                    suggestions = (suggestions || []).slice(0, that.limit);
                    rendered = suggestions.length;
                    that._overwrite(query, suggestions);
                    if (rendered < that.limit && that.async) {
                        that.trigger("asyncRequested", query);
                    }
                }
                function async(suggestions) {
                    suggestions = suggestions || [];
                    if (!canceled && rendered < that.limit) {
                        that.cancel = $.noop;
                        rendered += suggestions.length;
                        that._append(query, suggestions.slice(0, that.limit - rendered));
                        that.async && that.trigger("asyncReceived", query);
                    }
                }
            },
            cancel: $.noop,
            clear: function clear() {
                this._empty();
                this.cancel();
                this.trigger("cleared");
            },
            isEmpty: function isEmpty() {
                return this.$el.is(":empty");
            },
            destroy: function destroy() {
                this.$el = $("<div>");
            }
        });
        return Dataset;
        function getDisplayFn(display) {
            display = display || _.stringify;
            return _.isFunction(display) ? display : displayFn;
            function displayFn(obj) {
                return obj[display];
            }
        }
        function getTemplates(templates, displayFn) {
            return {
                notFound: templates.notFound && _.templatify(templates.notFound),
                pending: templates.pending && _.templatify(templates.pending),
                header: templates.header && _.templatify(templates.header),
                footer: templates.footer && _.templatify(templates.footer),
                suggestion: templates.suggestion || suggestionTemplate
            };
            function suggestionTemplate(context) {
                return $("<div>").text(displayFn(context));
            }
        }
        function isValidName(str) {
            return /^[_a-zA-Z0-9-]+$/.test(str);
        }
    }();
    var Menu = function() {
        "use strict";
        function Menu(o, www) {
            var that = this;
            o = o || {};
            if (!o.node) {
                $.error("node is required");
            }
            www.mixin(this);
            this.$node = $(o.node);
            this.query = null;
            this.datasets = _.map(o.datasets, initializeDataset);
            function initializeDataset(oDataset) {
                var node = that.$node.find(oDataset.node).first();
                oDataset.node = node.length ? node : $("<div>").appendTo(that.$node);
                return new Dataset(oDataset, www);
            }
        }
        _.mixin(Menu.prototype, EventEmitter, {
            _onSelectableClick: function onSelectableClick($e) {
                this.trigger("selectableClicked", $($e.currentTarget));
            },
            _onRendered: function onRendered(type, dataset, suggestions, async) {
                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());
                this.trigger("datasetRendered", dataset, suggestions, async);
            },
            _onCleared: function onCleared() {
                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());
                this.trigger("datasetCleared");
            },
            _propagate: function propagate() {
                this.trigger.apply(this, arguments);
            },
            _allDatasetsEmpty: function allDatasetsEmpty() {
                return _.every(this.datasets, isDatasetEmpty);
                function isDatasetEmpty(dataset) {
                    return dataset.isEmpty();
                }
            },
            _getSelectables: function getSelectables() {
                return this.$node.find(this.selectors.selectable);
            },
            _removeCursor: function _removeCursor() {
                var $selectable = this.getActiveSelectable();
                $selectable && $selectable.removeClass(this.classes.cursor);
            },
            _ensureVisible: function ensureVisible($el) {
                var elTop, elBottom, nodeScrollTop, nodeHeight;
                elTop = $el.position().top;
                elBottom = elTop + $el.outerHeight(true);
                nodeScrollTop = this.$node.scrollTop();
                nodeHeight = this.$node.height() + parseInt(this.$node.css("paddingTop"), 10) + parseInt(this.$node.css("paddingBottom"), 10);
                if (elTop < 0) {
                    this.$node.scrollTop(nodeScrollTop + elTop);
                } else if (nodeHeight < elBottom) {
                    this.$node.scrollTop(nodeScrollTop + (elBottom - nodeHeight));
                }
            },
            bind: function() {
                var that = this, onSelectableClick;
                onSelectableClick = _.bind(this._onSelectableClick, this);
                this.$node.on("click.tt", this.selectors.selectable, onSelectableClick);
                _.each(this.datasets, function(dataset) {
                    dataset.onSync("asyncRequested", that._propagate, that).onSync("asyncCanceled", that._propagate, that).onSync("asyncReceived", that._propagate, that).onSync("rendered", that._onRendered, that).onSync("cleared", that._onCleared, that);
                });
                return this;
            },
            isOpen: function isOpen() {
                return this.$node.hasClass(this.classes.open);
            },
            open: function open() {
                this.$node.addClass(this.classes.open);
            },
            close: function close() {
                this.$node.removeClass(this.classes.open);
                this._removeCursor();
            },
            setLanguageDirection: function setLanguageDirection(dir) {
                this.$node.attr("dir", dir);
            },
            selectableRelativeToCursor: function selectableRelativeToCursor(delta) {
                var $selectables, $oldCursor, oldIndex, newIndex;
                $oldCursor = this.getActiveSelectable();
                $selectables = this._getSelectables();
                oldIndex = $oldCursor ? $selectables.index($oldCursor) : -1;
                newIndex = oldIndex + delta;
                newIndex = (newIndex + 1) % ($selectables.length + 1) - 1;
                newIndex = newIndex < -1 ? $selectables.length - 1 : newIndex;
                return newIndex === -1 ? null : $selectables.eq(newIndex);
            },
            setCursor: function setCursor($selectable) {
                this._removeCursor();
                if ($selectable = $selectable && $selectable.first()) {
                    $selectable.addClass(this.classes.cursor);
                    this._ensureVisible($selectable);
                }
            },
            getSelectableData: function getSelectableData($el) {
                return $el && $el.length ? Dataset.extractData($el) : null;
            },
            getActiveSelectable: function getActiveSelectable() {
                var $selectable = this._getSelectables().filter(this.selectors.cursor).first();
                return $selectable.length ? $selectable : null;
            },
            getTopSelectable: function getTopSelectable() {
                var $selectable = this._getSelectables().first();
                return $selectable.length ? $selectable : null;
            },
            update: function update(query) {
                var isValidUpdate = query !== this.query;
                if (isValidUpdate) {
                    this.query = query;
                    _.each(this.datasets, updateDataset);
                }
                return isValidUpdate;
                function updateDataset(dataset) {
                    dataset.update(query);
                }
            },
            empty: function empty() {
                _.each(this.datasets, clearDataset);
                this.query = null;
                this.$node.addClass(this.classes.empty);
                function clearDataset(dataset) {
                    dataset.clear();
                }
            },
            destroy: function destroy() {
                this.$node.off(".tt");
                this.$node = $("<div>");
                _.each(this.datasets, destroyDataset);
                function destroyDataset(dataset) {
                    dataset.destroy();
                }
            }
        });
        return Menu;
    }();
    var DefaultMenu = function() {
        "use strict";
        var s = Menu.prototype;
        function DefaultMenu() {
            Menu.apply(this, [].slice.call(arguments, 0));
        }
        _.mixin(DefaultMenu.prototype, Menu.prototype, {
            open: function open() {
                !this._allDatasetsEmpty() && this._show();
                return s.open.apply(this, [].slice.call(arguments, 0));
            },
            close: function close() {
                this._hide();
                return s.close.apply(this, [].slice.call(arguments, 0));
            },
            _onRendered: function onRendered() {
                if (this._allDatasetsEmpty()) {
                    this._hide();
                } else {
                    this.isOpen() && this._show();
                }
                return s._onRendered.apply(this, [].slice.call(arguments, 0));
            },
            _onCleared: function onCleared() {
                if (this._allDatasetsEmpty()) {
                    this._hide();
                } else {
                    this.isOpen() && this._show();
                }
                return s._onCleared.apply(this, [].slice.call(arguments, 0));
            },
            setLanguageDirection: function setLanguageDirection(dir) {
                this.$node.css(dir === "ltr" ? this.css.ltr : this.css.rtl);
                return s.setLanguageDirection.apply(this, [].slice.call(arguments, 0));
            },
            _hide: function hide() {
                this.$node.hide();
            },
            _show: function show() {
                this.$node.css("display", "block");
            }
        });
        return DefaultMenu;
    }();
    var Typeahead = function() {
        "use strict";
        function Typeahead(o, www) {
            var onFocused, onBlurred, onEnterKeyed, onTabKeyed, onEscKeyed, onUpKeyed, onDownKeyed, onLeftKeyed, onRightKeyed, onQueryChanged, onWhitespaceChanged;
            o = o || {};
            if (!o.input) {
                $.error("missing input");
            }
            if (!o.menu) {
                $.error("missing menu");
            }
            if (!o.eventBus) {
                $.error("missing event bus");
            }
            www.mixin(this);
            this.eventBus = o.eventBus;
            this.minLength = _.isNumber(o.minLength) ? o.minLength : 1;
            this.input = o.input;
            this.menu = o.menu;
            this.enabled = true;
            this.active = false;
            this.input.hasFocus() && this.activate();
            this.dir = this.input.getLangDir();
            this._hacks();
            this.menu.bind().onSync("selectableClicked", this._onSelectableClicked, this).onSync("asyncRequested", this._onAsyncRequested, this).onSync("asyncCanceled", this._onAsyncCanceled, this).onSync("asyncReceived", this._onAsyncReceived, this).onSync("datasetRendered", this._onDatasetRendered, this).onSync("datasetCleared", this._onDatasetCleared, this);
            onFocused = c(this, "activate", "open", "_onFocused");
            onBlurred = c(this, "deactivate", "_onBlurred");
            onEnterKeyed = c(this, "isActive", "isOpen", "_onEnterKeyed");
            onTabKeyed = c(this, "isActive", "isOpen", "_onTabKeyed");
            onEscKeyed = c(this, "isActive", "_onEscKeyed");
            onUpKeyed = c(this, "isActive", "open", "_onUpKeyed");
            onDownKeyed = c(this, "isActive", "open", "_onDownKeyed");
            onLeftKeyed = c(this, "isActive", "isOpen", "_onLeftKeyed");
            onRightKeyed = c(this, "isActive", "isOpen", "_onRightKeyed");
            onQueryChanged = c(this, "_openIfActive", "_onQueryChanged");
            onWhitespaceChanged = c(this, "_openIfActive", "_onWhitespaceChanged");
            this.input.bind().onSync("focused", onFocused, this).onSync("blurred", onBlurred, this).onSync("enterKeyed", onEnterKeyed, this).onSync("tabKeyed", onTabKeyed, this).onSync("escKeyed", onEscKeyed, this).onSync("upKeyed", onUpKeyed, this).onSync("downKeyed", onDownKeyed, this).onSync("leftKeyed", onLeftKeyed, this).onSync("rightKeyed", onRightKeyed, this).onSync("queryChanged", onQueryChanged, this).onSync("whitespaceChanged", onWhitespaceChanged, this).onSync("langDirChanged", this._onLangDirChanged, this);
        }
        _.mixin(Typeahead.prototype, {
            _hacks: function hacks() {
                var $input, $menu;
                $input = this.input.$input || $("<div>");
                $menu = this.menu.$node || $("<div>");
                $input.on("blur.tt", function($e) {
                    var active, isActive, hasActive;
                    active = document.activeElement;
                    isActive = $menu.is(active);
                    hasActive = $menu.has(active).length > 0;
                    if (_.isMsie() && (isActive || hasActive)) {
                        $e.preventDefault();
                        $e.stopImmediatePropagation();
                        _.defer(function() {
                            $input.focus();
                        });
                    }
                });
                $menu.on("mousedown.tt", function($e) {
                    $e.preventDefault();
                });
            },
            _onSelectableClicked: function onSelectableClicked(type, $el) {
                this.select($el);
            },
            _onDatasetCleared: function onDatasetCleared() {
                this._updateHint();
            },
            _onDatasetRendered: function onDatasetRendered(type, dataset, suggestions, async) {
                this._updateHint();
                this.eventBus.trigger("render", suggestions, async, dataset);
            },
            _onAsyncRequested: function onAsyncRequested(type, dataset, query) {
                this.eventBus.trigger("asyncrequest", query, dataset);
            },
            _onAsyncCanceled: function onAsyncCanceled(type, dataset, query) {
                this.eventBus.trigger("asynccancel", query, dataset);
            },
            _onAsyncReceived: function onAsyncReceived(type, dataset, query) {
                this.eventBus.trigger("asyncreceive", query, dataset);
            },
            _onFocused: function onFocused() {
                this._minLengthMet() && this.menu.update(this.input.getQuery());
            },
            _onBlurred: function onBlurred() {
                if (this.input.hasQueryChangedSinceLastFocus()) {
                    this.eventBus.trigger("change", this.input.getQuery());
                }
            },
            _onEnterKeyed: function onEnterKeyed(type, $e) {
                var $selectable;
                if ($selectable = this.menu.getActiveSelectable()) {
                    this.select($selectable) && $e.preventDefault();
                }
            },
            _onTabKeyed: function onTabKeyed(type, $e) {
                var $selectable;
                if ($selectable = this.menu.getActiveSelectable()) {
                    this.select($selectable) && $e.preventDefault();
                } else if ($selectable = this.menu.getTopSelectable()) {
                    this.autocomplete($selectable) && $e.preventDefault();
                }
            },
            _onEscKeyed: function onEscKeyed() {
                this.close();
            },
            _onUpKeyed: function onUpKeyed() {
                this.moveCursor(-1);
            },
            _onDownKeyed: function onDownKeyed() {
                this.moveCursor(+1);
            },
            _onLeftKeyed: function onLeftKeyed() {
                if (this.dir === "rtl" && this.input.isCursorAtEnd()) {
                    this.autocomplete(this.menu.getTopSelectable());
                }
            },
            _onRightKeyed: function onRightKeyed() {
                if (this.dir === "ltr" && this.input.isCursorAtEnd()) {
                    this.autocomplete(this.menu.getTopSelectable());
                }
            },
            _onQueryChanged: function onQueryChanged(e, query) {
                this._minLengthMet(query) ? this.menu.update(query) : this.menu.empty();
            },
            _onWhitespaceChanged: function onWhitespaceChanged() {
                this._updateHint();
            },
            _onLangDirChanged: function onLangDirChanged(e, dir) {
                if (this.dir !== dir) {
                    this.dir = dir;
                    this.menu.setLanguageDirection(dir);
                }
            },
            _openIfActive: function openIfActive() {
                this.isActive() && this.open();
            },
            _minLengthMet: function minLengthMet(query) {
                query = _.isString(query) ? query : this.input.getQuery() || "";
                return query.length >= this.minLength;
            },
            _updateHint: function updateHint() {
                var $selectable, data, val, query, escapedQuery, frontMatchRegEx, match;
                $selectable = this.menu.getTopSelectable();
                data = this.menu.getSelectableData($selectable);
                val = this.input.getInputValue();
                if (data && !_.isBlankString(val) && !this.input.hasOverflow()) {
                    query = Input.normalizeQuery(val);
                    escapedQuery = _.escapeRegExChars(query);
                    frontMatchRegEx = new RegExp("^(?:" + escapedQuery + ")(.+$)", "i");
                    match = frontMatchRegEx.exec(data.val);
                    match && this.input.setHint(val + match[1]);
                } else {
                    this.input.clearHint();
                }
            },
            isEnabled: function isEnabled() {
                return this.enabled;
            },
            enable: function enable() {
                this.enabled = true;
            },
            disable: function disable() {
                this.enabled = false;
            },
            isActive: function isActive() {
                return this.active;
            },
            activate: function activate() {
                if (this.isActive()) {
                    return true;
                } else if (!this.isEnabled() || this.eventBus.before("active")) {
                    return false;
                } else {
                    this.active = true;
                    this.eventBus.trigger("active");
                    return true;
                }
            },
            deactivate: function deactivate() {
                if (!this.isActive()) {
                    return true;
                } else if (this.eventBus.before("idle")) {
                    return false;
                } else {
                    this.active = false;
                    this.close();
                    this.eventBus.trigger("idle");
                    return true;
                }
            },
            isOpen: function isOpen() {
                return this.menu.isOpen();
            },
            open: function open() {
                if (!this.isOpen() && !this.eventBus.before("open")) {
                    this.menu.open();
                    this._updateHint();
                    this.eventBus.trigger("open");
                }
                return this.isOpen();
            },
            close: function close() {
                if (this.isOpen() && !this.eventBus.before("close")) {
                    this.menu.close();
                    this.input.clearHint();
                    this.input.resetInputValue();
                    this.eventBus.trigger("close");
                }
                return !this.isOpen();
            },
            setVal: function setVal(val) {
                this.input.setQuery(_.toStr(val));
            },
            getVal: function getVal() {
                return this.input.getQuery();
            },
            select: function select($selectable) {
                var data = this.menu.getSelectableData($selectable);
                if (data && !this.eventBus.before("select", data.obj)) {
                    this.input.setQuery(data.val, true);
                    this.eventBus.trigger("select", data.obj);
                    this.close();
                    return true;
                }
                return false;
            },
            autocomplete: function autocomplete($selectable) {
                var query, data, isValid;
                query = this.input.getQuery();
                data = this.menu.getSelectableData($selectable);
                isValid = data && query !== data.val;
                if (isValid && !this.eventBus.before("autocomplete", data.obj)) {
                    this.input.setQuery(data.val);
                    this.eventBus.trigger("autocomplete", data.obj);
                    return true;
                }
                return false;
            },
            moveCursor: function moveCursor(delta) {
                var query, $candidate, data, payload, cancelMove;
                query = this.input.getQuery();
                $candidate = this.menu.selectableRelativeToCursor(delta);
                data = this.menu.getSelectableData($candidate);
                payload = data ? data.obj : null;
                cancelMove = this._minLengthMet() && this.menu.update(query);
                if (!cancelMove && !this.eventBus.before("cursorchange", payload)) {
                    this.menu.setCursor($candidate);
                    if (data) {
                        this.input.setInputValue(data.val);
                    } else {
                        this.input.resetInputValue();
                        this._updateHint();
                    }
                    this.eventBus.trigger("cursorchange", payload);
                    return true;
                }
                return false;
            },
            destroy: function destroy() {
                this.input.destroy();
                this.menu.destroy();
            }
        });
        return Typeahead;
        function c(ctx) {
            var methods = [].slice.call(arguments, 1);
            return function() {
                var args = [].slice.call(arguments);
                _.each(methods, function(method) {
                    return ctx[method].apply(ctx, args);
                });
            };
        }
    }();
    (function() {
        "use strict";
        var old, keys, methods;
        old = $.fn.typeahead;
        keys = {
            www: "tt-www",
            attrs: "tt-attrs",
            typeahead: "tt-typeahead"
        };
        methods = {
            initialize: function initialize(o, datasets) {
                var www;
                datasets = _.isArray(datasets) ? datasets : [].slice.call(arguments, 1);
                o = o || {};
                www = WWW(o.classNames);
                return this.each(attach);
                function attach() {
                    var $input, $wrapper, $hint, $menu, defaultHint, defaultMenu, eventBus, input, menu, typeahead, MenuConstructor;
                    _.each(datasets, function(d) {
                        d.highlight = !!o.highlight;
                    });
                    $input = $(this);
                    $wrapper = $(www.html.wrapper);
                    $hint = $elOrNull(o.hint);
                    $menu = $elOrNull(o.menu);
                    defaultHint = o.hint !== false && !$hint;
                    defaultMenu = o.menu !== false && !$menu;
                    defaultHint && ($hint = buildHintFromInput($input, www));
                    defaultMenu && ($menu = $(www.html.menu).css(www.css.menu));
                    $hint && $hint.val("");
                    $input = prepInput($input, www);
                    if (defaultHint || defaultMenu) {
                        $wrapper.css(www.css.wrapper);
                        $input.css(defaultHint ? www.css.input : www.css.inputWithNoHint);
                        $input.wrap($wrapper).parent().prepend(defaultHint ? $hint : null).append(defaultMenu ? $menu : null);
                    }
                    MenuConstructor = defaultMenu ? DefaultMenu : Menu;
                    eventBus = new EventBus({
                        el: $input
                    });
                    input = new Input({
                        hint: $hint,
                        input: $input
                    }, www);
                    menu = new MenuConstructor({
                        node: $menu,
                        datasets: datasets
                    }, www);
                    typeahead = new Typeahead({
                        input: input,
                        menu: menu,
                        eventBus: eventBus,
                        minLength: o.minLength
                    }, www);
                    $input.data(keys.www, www);
                    $input.data(keys.typeahead, typeahead);
                }
            },
            isEnabled: function isEnabled() {
                var enabled;
                ttEach(this.first(), function(t) {
                    enabled = t.isEnabled();
                });
                return enabled;
            },
            enable: function enable() {
                ttEach(this, function(t) {
                    t.enable();
                });
                return this;
            },
            disable: function disable() {
                ttEach(this, function(t) {
                    t.disable();
                });
                return this;
            },
            isActive: function isActive() {
                var active;
                ttEach(this.first(), function(t) {
                    active = t.isActive();
                });
                return active;
            },
            activate: function activate() {
                ttEach(this, function(t) {
                    t.activate();
                });
                return this;
            },
            deactivate: function deactivate() {
                ttEach(this, function(t) {
                    t.deactivate();
                });
                return this;
            },
            isOpen: function isOpen() {
                var open;
                ttEach(this.first(), function(t) {
                    open = t.isOpen();
                });
                return open;
            },
            open: function open() {
                ttEach(this, function(t) {
                    t.open();
                });
                return this;
            },
            close: function close() {
                ttEach(this, function(t) {
                    t.close();
                });
                return this;
            },
            select: function select(el) {
                var success = false, $el = $(el);
                ttEach(this.first(), function(t) {
                    success = t.select($el);
                });
                return success;
            },
            autocomplete: function autocomplete(el) {
                var success = false, $el = $(el);
                ttEach(this.first(), function(t) {
                    success = t.autocomplete($el);
                });
                return success;
            },
            moveCursor: function moveCursoe(delta) {
                var success = false;
                ttEach(this.first(), function(t) {
                    success = t.moveCursor(delta);
                });
                return success;
            },
            val: function val(newVal) {
                var query;
                if (!arguments.length) {
                    ttEach(this.first(), function(t) {
                        query = t.getVal();
                    });
                    return query;
                } else {
                    ttEach(this, function(t) {
                        t.setVal(newVal);
                    });
                    return this;
                }
            },
            destroy: function destroy() {
                ttEach(this, function(typeahead, $input) {
                    revert($input);
                    typeahead.destroy();
                });
                return this;
            }
        };
        $.fn.typeahead = function(method) {
            if (methods[method]) {
                return methods[method].apply(this, [].slice.call(arguments, 1));
            } else {
                return methods.initialize.apply(this, arguments);
            }
        };
        $.fn.typeahead.noConflict = function noConflict() {
            $.fn.typeahead = old;
            return this;
        };
        function ttEach($els, fn) {
            $els.each(function() {
                var $input = $(this), typeahead;
                (typeahead = $input.data(keys.typeahead)) && fn(typeahead, $input);
            });
        }
        function buildHintFromInput($input, www) {
            return $input.clone().addClass(www.classes.hint).removeData().css(www.css.hint).css(getBackgroundStyles($input)).prop("readonly", true).removeAttr("id name placeholder required").attr({
                autocomplete: "off",
                spellcheck: "false",
                tabindex: -1
            });
        }
        function prepInput($input, www) {
            $input.data(keys.attrs, {
                dir: $input.attr("dir"),
                autocomplete: $input.attr("autocomplete"),
                spellcheck: $input.attr("spellcheck"),
                style: $input.attr("style")
            });
            $input.addClass(www.classes.input).attr({
                autocomplete: "off",
                spellcheck: false
            });
            try {
                !$input.attr("dir") && $input.attr("dir", "auto");
            } catch (e) {}
            return $input;
        }
        function getBackgroundStyles($el) {
            return {
                backgroundAttachment: $el.css("background-attachment"),
                backgroundClip: $el.css("background-clip"),
                backgroundColor: $el.css("background-color"),
                backgroundImage: $el.css("background-image"),
                backgroundOrigin: $el.css("background-origin"),
                backgroundPosition: $el.css("background-position"),
                backgroundRepeat: $el.css("background-repeat"),
                backgroundSize: $el.css("background-size")
            };
        }
        function revert($input) {
            var www, $wrapper;
            www = $input.data(keys.www);
            $wrapper = $input.parent().filter(www.selectors.wrapper);
            _.each($input.data(keys.attrs), function(val, key) {
                _.isUndefined(val) ? $input.removeAttr(key) : $input.attr(key, val);
            });
            $input.removeData(keys.typeahead).removeData(keys.www).removeData(keys.attr).removeClass(www.classes.input);
            if ($wrapper.length) {
                $input.detach().insertAfter($wrapper);
                $wrapper.remove();
            }
        }
        function $elOrNull(obj) {
            var isValid, $el;
            isValid = _.isJQuery(obj) || _.isElement(obj);
            $el = isValid ? $(obj).first() : [];
            return $el.length ? $el : null;
        }
    })();
});
/**
 * @license
 * lodash 3.10.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern -o ./lodash.js`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
;(function() {

    /** Used as a safe reference for `undefined` in pre-ES5 environments. */
    var undefined;

    /** Used as the semantic version number. */
    var VERSION = '3.10.0';

    /** Used to compose bitmasks for wrapper metadata. */
    var BIND_FLAG = 1,
        BIND_KEY_FLAG = 2,
        CURRY_BOUND_FLAG = 4,
        CURRY_FLAG = 8,
        CURRY_RIGHT_FLAG = 16,
        PARTIAL_FLAG = 32,
        PARTIAL_RIGHT_FLAG = 64,
        ARY_FLAG = 128,
        REARG_FLAG = 256;

    /** Used as default options for `_.trunc`. */
    var DEFAULT_TRUNC_LENGTH = 30,
        DEFAULT_TRUNC_OMISSION = '...';

    /** Used to detect when a function becomes hot. */
    var HOT_COUNT = 150,
        HOT_SPAN = 16;

    /** Used as the size to enable large array optimizations. */
    var LARGE_ARRAY_SIZE = 200;

    /** Used to indicate the type of lazy iteratees. */
    var LAZY_FILTER_FLAG = 1,
        LAZY_MAP_FLAG = 2;

    /** Used as the `TypeError` message for "Functions" methods. */
    var FUNC_ERROR_TEXT = 'Expected a function';

    /** Used as the internal argument placeholder. */
    var PLACEHOLDER = '__lodash_placeholder__';

    /** `Object#toString` result references. */
    var argsTag = '[object Arguments]',
        arrayTag = '[object Array]',
        boolTag = '[object Boolean]',
        dateTag = '[object Date]',
        errorTag = '[object Error]',
        funcTag = '[object Function]',
        mapTag = '[object Map]',
        numberTag = '[object Number]',
        objectTag = '[object Object]',
        regexpTag = '[object RegExp]',
        setTag = '[object Set]',
        stringTag = '[object String]',
        weakMapTag = '[object WeakMap]';

    var arrayBufferTag = '[object ArrayBuffer]',
        float32Tag = '[object Float32Array]',
        float64Tag = '[object Float64Array]',
        int8Tag = '[object Int8Array]',
        int16Tag = '[object Int16Array]',
        int32Tag = '[object Int32Array]',
        uint8Tag = '[object Uint8Array]',
        uint8ClampedTag = '[object Uint8ClampedArray]',
        uint16Tag = '[object Uint16Array]',
        uint32Tag = '[object Uint32Array]';

    /** Used to match empty string literals in compiled template source. */
    var reEmptyStringLeading = /\b__p \+= '';/g,
        reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
        reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

    /** Used to match HTML entities and HTML characters. */
    var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g,
        reUnescapedHtml = /[&<>"'`]/g,
        reHasEscapedHtml = RegExp(reEscapedHtml.source),
        reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

    /** Used to match template delimiters. */
    var reEscape = /<%-([\s\S]+?)%>/g,
        reEvaluate = /<%([\s\S]+?)%>/g,
        reInterpolate = /<%=([\s\S]+?)%>/g;

    /** Used to match property names within property paths. */
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
        reIsPlainProp = /^\w*$/,
        rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;

    /**
     * Used to match `RegExp` [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns)
     * and those outlined by [`EscapeRegExpPattern`](http://ecma-international.org/ecma-262/6.0/#sec-escaperegexppattern).
     */
    var reRegExpChars = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
        reHasRegExpChars = RegExp(reRegExpChars.source);

    /** Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks). */
    var reComboMark = /[\u0300-\u036f\ufe20-\ufe23]/g;

    /** Used to match backslashes in property paths. */
    var reEscapeChar = /\\(\\)?/g;

    /** Used to match [ES template delimiters](http://ecma-international.org/ecma-262/6.0/#sec-template-literal-lexical-components). */
    var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

    /** Used to match `RegExp` flags from their coerced string values. */
    var reFlags = /\w*$/;

    /** Used to detect hexadecimal string values. */
    var reHasHexPrefix = /^0[xX]/;

    /** Used to detect host constructors (Safari > 5). */
    var reIsHostCtor = /^\[object .+?Constructor\]$/;

    /** Used to detect unsigned integer values. */
    var reIsUint = /^\d+$/;

    /** Used to match latin-1 supplementary letters (excluding mathematical operators). */
    var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;

    /** Used to ensure capturing order of template delimiters. */
    var reNoMatch = /($^)/;

    /** Used to match unescaped characters in compiled string literals. */
    var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

    /** Used to match words to create compound words. */
    var reWords = (function() {
        var upper = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
            lower = '[a-z\\xdf-\\xf6\\xf8-\\xff]+';

        return RegExp(upper + '+(?=' + upper + lower + ')|' + upper + '?' + lower + '|' + upper + '+|[0-9]+', 'g');
    }());

    /** Used to assign default `context` object properties. */
    var contextProps = [
        'Array', 'ArrayBuffer', 'Date', 'Error', 'Float32Array', 'Float64Array',
        'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Math', 'Number',
        'Object', 'RegExp', 'Set', 'String', '_', 'clearTimeout', 'isFinite',
        'parseFloat', 'parseInt', 'setTimeout', 'TypeError', 'Uint8Array',
        'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap'
    ];

    /** Used to make template sourceURLs easier to identify. */
    var templateCounter = -1;

    /** Used to identify `toStringTag` values of typed arrays. */
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
        typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
            typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
                typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
                    typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
        typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
            typedArrayTags[dateTag] = typedArrayTags[errorTag] =
                typedArrayTags[funcTag] = typedArrayTags[mapTag] =
                    typedArrayTags[numberTag] = typedArrayTags[objectTag] =
                        typedArrayTags[regexpTag] = typedArrayTags[setTag] =
                            typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

    /** Used to identify `toStringTag` values supported by `_.clone`. */
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] =
        cloneableTags[arrayBufferTag] = cloneableTags[boolTag] =
            cloneableTags[dateTag] = cloneableTags[float32Tag] =
                cloneableTags[float64Tag] = cloneableTags[int8Tag] =
                    cloneableTags[int16Tag] = cloneableTags[int32Tag] =
                        cloneableTags[numberTag] = cloneableTags[objectTag] =
                            cloneableTags[regexpTag] = cloneableTags[stringTag] =
                                cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
                                    cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] =
        cloneableTags[mapTag] = cloneableTags[setTag] =
            cloneableTags[weakMapTag] = false;

    /** Used to map latin-1 supplementary letters to basic latin letters. */
    var deburredLetters = {
        '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
        '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
        '\xc7': 'C',  '\xe7': 'c',
        '\xd0': 'D',  '\xf0': 'd',
        '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
        '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
        '\xcC': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
        '\xeC': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
        '\xd1': 'N',  '\xf1': 'n',
        '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
        '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
        '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
        '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
        '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
        '\xc6': 'Ae', '\xe6': 'ae',
        '\xde': 'Th', '\xfe': 'th',
        '\xdf': 'ss'
    };

    /** Used to map characters to HTML entities. */
    var htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '`': '&#96;'
    };

    /** Used to map HTML entities to characters. */
    var htmlUnescapes = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
        '&#96;': '`'
    };

    /** Used to determine if values are of the language type `Object`. */
    var objectTypes = {
        'function': true,
        'object': true
    };

    /** Used to escape characters for inclusion in compiled regexes. */
    var regexpEscapes = {
        '0': 'x30', '1': 'x31', '2': 'x32', '3': 'x33', '4': 'x34',
        '5': 'x35', '6': 'x36', '7': 'x37', '8': 'x38', '9': 'x39',
        'A': 'x41', 'B': 'x42', 'C': 'x43', 'D': 'x44', 'E': 'x45', 'F': 'x46',
        'a': 'x61', 'b': 'x62', 'c': 'x63', 'd': 'x64', 'e': 'x65', 'f': 'x66',
        'n': 'x6e', 'r': 'x72', 't': 'x74', 'u': 'x75', 'v': 'x76', 'x': 'x78'
    };

    /** Used to escape characters for inclusion in compiled string literals. */
    var stringEscapes = {
        '\\': '\\',
        "'": "'",
        '\n': 'n',
        '\r': 'r',
        '\u2028': 'u2028',
        '\u2029': 'u2029'
    };

    /** Detect free variable `exports`. */
    var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

    /** Detect free variable `module`. */
    var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

    /** Detect free variable `global` from Node.js. */
    var freeGlobal = freeExports && freeModule && typeof global == 'object' && global && global.Object && global;

    /** Detect free variable `self`. */
    var freeSelf = objectTypes[typeof self] && self && self.Object && self;

    /** Detect free variable `window`. */
    var freeWindow = objectTypes[typeof window] && window && window.Object && window;

    /** Detect the popular CommonJS extension `module.exports`. */
    var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;

    /**
     * Used as a reference to the global object.
     *
     * The `this` value is used if it's the global object to avoid Greasemonkey's
     * restricted `window` object, otherwise the `window` object is used.
     */
    var root = freeGlobal || ((freeWindow !== (this && this.window)) && freeWindow) || freeSelf || this;

    /*--------------------------------------------------------------------------*/

    /**
     * The base implementation of `compareAscending` which compares values and
     * sorts them in ascending order without guaranteeing a stable sort.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */
    function baseCompareAscending(value, other) {
        if (value !== other) {
            var valIsNull = value === null,
                valIsUndef = value === undefined,
                valIsReflexive = value === value;

            var othIsNull = other === null,
                othIsUndef = other === undefined,
                othIsReflexive = other === other;

            if ((value > other && !othIsNull) || !valIsReflexive ||
                (valIsNull && !othIsUndef && othIsReflexive) ||
                (valIsUndef && othIsReflexive)) {
                return 1;
            }
            if ((value < other && !valIsNull) || !othIsReflexive ||
                (othIsNull && !valIsUndef && valIsReflexive) ||
                (othIsUndef && valIsReflexive)) {
                return -1;
            }
        }
        return 0;
    }

    /**
     * The base implementation of `_.findIndex` and `_.findLastIndex` without
     * support for callback shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to search.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function baseFindIndex(array, predicate, fromRight) {
        var length = array.length,
            index = fromRight ? length : -1;

        while ((fromRight ? index-- : ++index < length)) {
            if (predicate(array[index], index, array)) {
                return index;
            }
        }
        return -1;
    }

    /**
     * The base implementation of `_.indexOf` without support for binary searches.
     *
     * @private
     * @param {Array} array The array to search.
     * @param {*} value The value to search for.
     * @param {number} fromIndex The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function baseIndexOf(array, value, fromIndex) {
        if (value !== value) {
            return indexOfNaN(array, fromIndex);
        }
        var index = fromIndex - 1,
            length = array.length;

        while (++index < length) {
            if (array[index] === value) {
                return index;
            }
        }
        return -1;
    }

    /**
     * The base implementation of `_.isFunction` without support for environments
     * with incorrect `typeof` results.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     */
    function baseIsFunction(value) {
        // Avoid a Chakra JIT bug in compatibility modes of IE 11.
        // See https://github.com/jashkenas/underscore/issues/1621 for more details.
        return typeof value == 'function' || false;
    }

    /**
     * Converts `value` to a string if it's not one. An empty string is returned
     * for `null` or `undefined` values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
        return value == null ? '' : (value + '');
    }

    /**
     * Used by `_.trim` and `_.trimLeft` to get the index of the first character
     * of `string` that is not found in `chars`.
     *
     * @private
     * @param {string} string The string to inspect.
     * @param {string} chars The characters to find.
     * @returns {number} Returns the index of the first character not found in `chars`.
     */
    function charsLeftIndex(string, chars) {
        var index = -1,
            length = string.length;

        while (++index < length && chars.indexOf(string.charAt(index)) > -1) {}
        return index;
    }

    /**
     * Used by `_.trim` and `_.trimRight` to get the index of the last character
     * of `string` that is not found in `chars`.
     *
     * @private
     * @param {string} string The string to inspect.
     * @param {string} chars The characters to find.
     * @returns {number} Returns the index of the last character not found in `chars`.
     */
    function charsRightIndex(string, chars) {
        var index = string.length;

        while (index-- && chars.indexOf(string.charAt(index)) > -1) {}
        return index;
    }

    /**
     * Used by `_.sortBy` to compare transformed elements of a collection and stable
     * sort them in ascending order.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareAscending(object, other) {
        return baseCompareAscending(object.criteria, other.criteria) || (object.index - other.index);
    }

    /**
     * Used by `_.sortByOrder` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all valuess are sorted in ascending order. Otherwise,
     * a value is sorted in ascending order if its corresponding order is "asc", and
     * descending if "desc".
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareMultiple(object, other, orders) {
        var index = -1,
            objCriteria = object.criteria,
            othCriteria = other.criteria,
            length = objCriteria.length,
            ordersLength = orders.length;

        while (++index < length) {
            var result = baseCompareAscending(objCriteria[index], othCriteria[index]);
            if (result) {
                if (index >= ordersLength) {
                    return result;
                }
                var order = orders[index];
                return result * ((order === 'asc' || order === true) ? 1 : -1);
            }
        }
        // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
        // that causes it, under certain circumstances, to provide the same value for
        // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
        // for more details.
        //
        // This also ensures a stable sort in V8 and other engines.
        // See https://code.google.com/p/v8/issues/detail?id=90 for more details.
        return object.index - other.index;
    }

    /**
     * Used by `_.deburr` to convert latin-1 supplementary letters to basic latin letters.
     *
     * @private
     * @param {string} letter The matched letter to deburr.
     * @returns {string} Returns the deburred letter.
     */
    function deburrLetter(letter) {
        return deburredLetters[letter];
    }

    /**
     * Used by `_.escape` to convert characters to HTML entities.
     *
     * @private
     * @param {string} chr The matched character to escape.
     * @returns {string} Returns the escaped character.
     */
    function escapeHtmlChar(chr) {
        return htmlEscapes[chr];
    }

    /**
     * Used by `_.escapeRegExp` to escape characters for inclusion in compiled regexes.
     *
     * @private
     * @param {string} chr The matched character to escape.
     * @param {string} leadingChar The capture group for a leading character.
     * @param {string} whitespaceChar The capture group for a whitespace character.
     * @returns {string} Returns the escaped character.
     */
    function escapeRegExpChar(chr, leadingChar, whitespaceChar) {
        if (leadingChar) {
            chr = regexpEscapes[chr];
        } else if (whitespaceChar) {
            chr = stringEscapes[chr];
        }
        return '\\' + chr;
    }

    /**
     * Used by `_.template` to escape characters for inclusion in compiled string literals.
     *
     * @private
     * @param {string} chr The matched character to escape.
     * @returns {string} Returns the escaped character.
     */
    function escapeStringChar(chr) {
        return '\\' + stringEscapes[chr];
    }

    /**
     * Gets the index at which the first occurrence of `NaN` is found in `array`.
     *
     * @private
     * @param {Array} array The array to search.
     * @param {number} fromIndex The index to search from.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {number} Returns the index of the matched `NaN`, else `-1`.
     */
    function indexOfNaN(array, fromIndex, fromRight) {
        var length = array.length,
            index = fromIndex + (fromRight ? 0 : -1);

        while ((fromRight ? index-- : ++index < length)) {
            var other = array[index];
            if (other !== other) {
                return index;
            }
        }
        return -1;
    }

    /**
     * Checks if `value` is object-like.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     */
    function isObjectLike(value) {
        return !!value && typeof value == 'object';
    }

    /**
     * Used by `trimmedLeftIndex` and `trimmedRightIndex` to determine if a
     * character code is whitespace.
     *
     * @private
     * @param {number} charCode The character code to inspect.
     * @returns {boolean} Returns `true` if `charCode` is whitespace, else `false`.
     */
    function isSpace(charCode) {
        return ((charCode <= 160 && (charCode >= 9 && charCode <= 13) || charCode == 32 || charCode == 160) || charCode == 5760 || charCode == 6158 ||
        (charCode >= 8192 && (charCode <= 8202 || charCode == 8232 || charCode == 8233 || charCode == 8239 || charCode == 8287 || charCode == 12288 || charCode == 65279)));
    }

    /**
     * Replaces all `placeholder` elements in `array` with an internal placeholder
     * and returns an array of their indexes.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {*} placeholder The placeholder to replace.
     * @returns {Array} Returns the new array of placeholder indexes.
     */
    function replaceHolders(array, placeholder) {
        var index = -1,
            length = array.length,
            resIndex = -1,
            result = [];

        while (++index < length) {
            if (array[index] === placeholder) {
                array[index] = PLACEHOLDER;
                result[++resIndex] = index;
            }
        }
        return result;
    }

    /**
     * An implementation of `_.uniq` optimized for sorted arrays without support
     * for callback shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The function invoked per iteration.
     * @returns {Array} Returns the new duplicate-value-free array.
     */
    function sortedUniq(array, iteratee) {
        var seen,
            index = -1,
            length = array.length,
            resIndex = -1,
            result = [];

        while (++index < length) {
            var value = array[index],
                computed = iteratee ? iteratee(value, index, array) : value;

            if (!index || seen !== computed) {
                seen = computed;
                result[++resIndex] = value;
            }
        }
        return result;
    }

    /**
     * Used by `_.trim` and `_.trimLeft` to get the index of the first non-whitespace
     * character of `string`.
     *
     * @private
     * @param {string} string The string to inspect.
     * @returns {number} Returns the index of the first non-whitespace character.
     */
    function trimmedLeftIndex(string) {
        var index = -1,
            length = string.length;

        while (++index < length && isSpace(string.charCodeAt(index))) {}
        return index;
    }

    /**
     * Used by `_.trim` and `_.trimRight` to get the index of the last non-whitespace
     * character of `string`.
     *
     * @private
     * @param {string} string The string to inspect.
     * @returns {number} Returns the index of the last non-whitespace character.
     */
    function trimmedRightIndex(string) {
        var index = string.length;

        while (index-- && isSpace(string.charCodeAt(index))) {}
        return index;
    }

    /**
     * Used by `_.unescape` to convert HTML entities to characters.
     *
     * @private
     * @param {string} chr The matched character to unescape.
     * @returns {string} Returns the unescaped character.
     */
    function unescapeHtmlChar(chr) {
        return htmlUnescapes[chr];
    }

    /*--------------------------------------------------------------------------*/

    /**
     * Create a new pristine `lodash` function using the given `context` object.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {Object} [context=root] The context object.
     * @returns {Function} Returns a new `lodash` function.
     * @example
     *
     * _.mixin({ 'foo': _.constant('foo') });
     *
     * var lodash = _.runInContext();
     * lodash.mixin({ 'bar': lodash.constant('bar') });
     *
     * _.isFunction(_.foo);
     * // => true
     * _.isFunction(_.bar);
     * // => false
     *
     * lodash.isFunction(lodash.foo);
     * // => false
     * lodash.isFunction(lodash.bar);
     * // => true
     *
     * // using `context` to mock `Date#getTime` use in `_.now`
     * var mock = _.runInContext({
   *   'Date': function() {
   *     return { 'getTime': getTimeMock };
   *   }
   * });
     *
     * // or creating a suped-up `defer` in Node.js
     * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
     */
    function runInContext(context) {
        // Avoid issues with some ES3 environments that attempt to use values, named
        // after built-in constructors like `Object`, for the creation of literals.
        // ES5 clears this up by stating that literals must use built-in constructors.
        // See https://es5.github.io/#x11.1.5 for more details.
        context = context ? _.defaults(root.Object(), context, _.pick(root, contextProps)) : root;

        /** Native constructor references. */
        var Array = context.Array,
            Date = context.Date,
            Error = context.Error,
            Function = context.Function,
            Math = context.Math,
            Number = context.Number,
            Object = context.Object,
            RegExp = context.RegExp,
            String = context.String,
            TypeError = context.TypeError;

        /** Used for native method references. */
        var arrayProto = Array.prototype,
            objectProto = Object.prototype,
            stringProto = String.prototype;

        /** Used to resolve the decompiled source of functions. */
        var fnToString = Function.prototype.toString;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /** Used to generate unique IDs. */
        var idCounter = 0;

        /**
         * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
         * of values.
         */
        var objToString = objectProto.toString;

        /** Used to restore the original `_` reference in `_.noConflict`. */
        var oldDash = root._;

        /** Used to detect if a method is native. */
        var reIsNative = RegExp('^' +
            fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
        );

        /** Native method references. */
        var ArrayBuffer = context.ArrayBuffer,
            clearTimeout = context.clearTimeout,
            parseFloat = context.parseFloat,
            pow = Math.pow,
            propertyIsEnumerable = objectProto.propertyIsEnumerable,
            Set = getNative(context, 'Set'),
            setTimeout = context.setTimeout,
            splice = arrayProto.splice,
            Uint8Array = context.Uint8Array,
            WeakMap = getNative(context, 'WeakMap');

        /* Native method references for those with the same name as other `lodash` methods. */
        var nativeCeil = Math.ceil,
            nativeCreate = getNative(Object, 'create'),
            nativeFloor = Math.floor,
            nativeIsArray = getNative(Array, 'isArray'),
            nativeIsFinite = context.isFinite,
            nativeKeys = getNative(Object, 'keys'),
            nativeMax = Math.max,
            nativeMin = Math.min,
            nativeNow = getNative(Date, 'now'),
            nativeParseInt = context.parseInt,
            nativeRandom = Math.random;

        /** Used as references for `-Infinity` and `Infinity`. */
        var NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY,
            POSITIVE_INFINITY = Number.POSITIVE_INFINITY;

        /** Used as references for the maximum length and index of an array. */
        var MAX_ARRAY_LENGTH = 4294967295,
            MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
            HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

        /**
         * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
         * of an array-like value.
         */
        var MAX_SAFE_INTEGER = 9007199254740991;

        /** Used to store function metadata. */
        var metaMap = WeakMap && new WeakMap;

        /** Used to lookup unminified function names. */
        var realNames = {};

        /*------------------------------------------------------------------------*/

        /**
         * Creates a `lodash` object which wraps `value` to enable implicit chaining.
         * Methods that operate on and return arrays, collections, and functions can
         * be chained together. Methods that retrieve a single value or may return a
         * primitive value will automatically end the chain returning the unwrapped
         * value. Explicit chaining may be enabled using `_.chain`. The execution of
         * chained methods is lazy, that is, execution is deferred until `_#value`
         * is implicitly or explicitly called.
         *
         * Lazy evaluation allows several methods to support shortcut fusion. Shortcut
         * fusion is an optimization strategy which merge iteratee calls; this can help
         * to avoid the creation of intermediate data structures and greatly reduce the
         * number of iteratee executions.
         *
         * Chaining is supported in custom builds as long as the `_#value` method is
         * directly or indirectly included in the build.
         *
         * In addition to lodash methods, wrappers have `Array` and `String` methods.
         *
         * The wrapper `Array` methods are:
         * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`,
         * `splice`, and `unshift`
         *
         * The wrapper `String` methods are:
         * `replace` and `split`
         *
         * The wrapper methods that support shortcut fusion are:
         * `compact`, `drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `filter`,
         * `first`, `initial`, `last`, `map`, `pluck`, `reject`, `rest`, `reverse`,
         * `slice`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `toArray`,
         * and `where`
         *
         * The chainable wrapper methods are:
         * `after`, `ary`, `assign`, `at`, `before`, `bind`, `bindAll`, `bindKey`,
         * `callback`, `chain`, `chunk`, `commit`, `compact`, `concat`, `constant`,
         * `countBy`, `create`, `curry`, `debounce`, `defaults`, `defaultsDeep`,
         * `defer`, `delay`, `difference`, `drop`, `dropRight`, `dropRightWhile`,
         * `dropWhile`, `fill`, `filter`, `flatten`, `flattenDeep`, `flow`, `flowRight`,
         * `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`,
         * `functions`, `groupBy`, `indexBy`, `initial`, `intersection`, `invert`,
         * `invoke`, `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`,
         * `matchesProperty`, `memoize`, `merge`, `method`, `methodOf`, `mixin`,
         * `modArgs`, `negate`, `omit`, `once`, `pairs`, `partial`, `partialRight`,
         * `partition`, `pick`, `plant`, `pluck`, `property`, `propertyOf`, `pull`,
         * `pullAt`, `push`, `range`, `rearg`, `reject`, `remove`, `rest`, `restParam`,
         * `reverse`, `set`, `shuffle`, `slice`, `sort`, `sortBy`, `sortByAll`,
         * `sortByOrder`, `splice`, `spread`, `take`, `takeRight`, `takeRightWhile`,
         * `takeWhile`, `tap`, `throttle`, `thru`, `times`, `toArray`, `toPlainObject`,
         * `transform`, `union`, `uniq`, `unshift`, `unzip`, `unzipWith`, `values`,
         * `valuesIn`, `where`, `without`, `wrap`, `xor`, `zip`, `zipObject`, `zipWith`
         *
         * The wrapper methods that are **not** chainable by default are:
         * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clone`, `cloneDeep`,
         * `deburr`, `endsWith`, `escape`, `escapeRegExp`, `every`, `find`, `findIndex`,
         * `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `findWhere`, `first`,
         * `floor`, `get`, `gt`, `gte`, `has`, `identity`, `includes`, `indexOf`,
         * `inRange`, `isArguments`, `isArray`, `isBoolean`, `isDate`, `isElement`,
         * `isEmpty`, `isEqual`, `isError`, `isFinite` `isFunction`, `isMatch`,
         * `isNative`, `isNaN`, `isNull`, `isNumber`, `isObject`, `isPlainObject`,
         * `isRegExp`, `isString`, `isUndefined`, `isTypedArray`, `join`, `kebabCase`,
         * `last`, `lastIndexOf`, `lt`, `lte`, `max`, `min`, `noConflict`, `noop`,
         * `now`, `pad`, `padLeft`, `padRight`, `parseInt`, `pop`, `random`, `reduce`,
         * `reduceRight`, `repeat`, `result`, `round`, `runInContext`, `shift`, `size`,
         * `snakeCase`, `some`, `sortedIndex`, `sortedLastIndex`, `startCase`,
         * `startsWith`, `sum`, `template`, `trim`, `trimLeft`, `trimRight`, `trunc`,
         * `unescape`, `uniqueId`, `value`, and `words`
         *
         * The wrapper method `sample` will return a wrapped value when `n` is provided,
         * otherwise an unwrapped value is returned.
         *
         * @name _
         * @constructor
         * @category Chain
         * @param {*} value The value to wrap in a `lodash` instance.
         * @returns {Object} Returns the new `lodash` wrapper instance.
         * @example
         *
         * var wrapped = _([1, 2, 3]);
         *
         * // returns an unwrapped value
         * wrapped.reduce(function(total, n) {
     *   return total + n;
     * });
         * // => 6
         *
         * // returns a wrapped value
         * var squares = wrapped.map(function(n) {
     *   return n * n;
     * });
         *
         * _.isArray(squares);
         * // => false
         *
         * _.isArray(squares.value());
         * // => true
         */
        function lodash(value) {
            if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
                if (value instanceof LodashWrapper) {
                    return value;
                }
                if (hasOwnProperty.call(value, '__chain__') && hasOwnProperty.call(value, '__wrapped__')) {
                    return wrapperClone(value);
                }
            }
            return new LodashWrapper(value);
        }

        /**
         * The function whose prototype all chaining wrappers inherit from.
         *
         * @private
         */
        function baseLodash() {
            // No operation performed.
        }

        /**
         * The base constructor for creating `lodash` wrapper objects.
         *
         * @private
         * @param {*} value The value to wrap.
         * @param {boolean} [chainAll] Enable chaining for all wrapper methods.
         * @param {Array} [actions=[]] Actions to peform to resolve the unwrapped value.
         */
        function LodashWrapper(value, chainAll, actions) {
            this.__wrapped__ = value;
            this.__actions__ = actions || [];
            this.__chain__ = !!chainAll;
        }

        /**
         * An object environment feature flags.
         *
         * @static
         * @memberOf _
         * @type Object
         */
        var support = lodash.support = {};

        /**
         * By default, the template delimiters used by lodash are like those in
         * embedded Ruby (ERB). Change the following template settings to use
         * alternative delimiters.
         *
         * @static
         * @memberOf _
         * @type Object
         */
        lodash.templateSettings = {

            /**
             * Used to detect `data` property values to be HTML-escaped.
             *
             * @memberOf _.templateSettings
             * @type RegExp
             */
            'escape': reEscape,

            /**
             * Used to detect code to be evaluated.
             *
             * @memberOf _.templateSettings
             * @type RegExp
             */
            'evaluate': reEvaluate,

            /**
             * Used to detect `data` property values to inject.
             *
             * @memberOf _.templateSettings
             * @type RegExp
             */
            'interpolate': reInterpolate,

            /**
             * Used to reference the data object in the template text.
             *
             * @memberOf _.templateSettings
             * @type string
             */
            'variable': '',

            /**
             * Used to import variables into the compiled template.
             *
             * @memberOf _.templateSettings
             * @type Object
             */
            'imports': {

                /**
                 * A reference to the `lodash` function.
                 *
                 * @memberOf _.templateSettings.imports
                 * @type Function
                 */
                '_': lodash
            }
        };

        /*------------------------------------------------------------------------*/

        /**
         * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
         *
         * @private
         * @param {*} value The value to wrap.
         */
        function LazyWrapper(value) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__dir__ = 1;
            this.__filtered__ = false;
            this.__iteratees__ = [];
            this.__takeCount__ = POSITIVE_INFINITY;
            this.__views__ = [];
        }

        /**
         * Creates a clone of the lazy wrapper object.
         *
         * @private
         * @name clone
         * @memberOf LazyWrapper
         * @returns {Object} Returns the cloned `LazyWrapper` object.
         */
        function lazyClone() {
            var result = new LazyWrapper(this.__wrapped__);
            result.__actions__ = arrayCopy(this.__actions__);
            result.__dir__ = this.__dir__;
            result.__filtered__ = this.__filtered__;
            result.__iteratees__ = arrayCopy(this.__iteratees__);
            result.__takeCount__ = this.__takeCount__;
            result.__views__ = arrayCopy(this.__views__);
            return result;
        }

        /**
         * Reverses the direction of lazy iteration.
         *
         * @private
         * @name reverse
         * @memberOf LazyWrapper
         * @returns {Object} Returns the new reversed `LazyWrapper` object.
         */
        function lazyReverse() {
            if (this.__filtered__) {
                var result = new LazyWrapper(this);
                result.__dir__ = -1;
                result.__filtered__ = true;
            } else {
                result = this.clone();
                result.__dir__ *= -1;
            }
            return result;
        }

        /**
         * Extracts the unwrapped value from its lazy wrapper.
         *
         * @private
         * @name value
         * @memberOf LazyWrapper
         * @returns {*} Returns the unwrapped value.
         */
        function lazyValue() {
            var array = this.__wrapped__.value(),
                dir = this.__dir__,
                isArr = isArray(array),
                isRight = dir < 0,
                arrLength = isArr ? array.length : 0,
                view = getView(0, arrLength, this.__views__),
                start = view.start,
                end = view.end,
                length = end - start,
                index = isRight ? end : (start - 1),
                iteratees = this.__iteratees__,
                iterLength = iteratees.length,
                resIndex = 0,
                takeCount = nativeMin(length, this.__takeCount__);

            if (!isArr || arrLength < LARGE_ARRAY_SIZE || (arrLength == length && takeCount == length)) {
                return baseWrapperValue((isRight && isArr) ? array.reverse() : array, this.__actions__);
            }
            var result = [];

            outer:
                while (length-- && resIndex < takeCount) {
                    index += dir;

                    var iterIndex = -1,
                        value = array[index];

                    while (++iterIndex < iterLength) {
                        var data = iteratees[iterIndex],
                            iteratee = data.iteratee,
                            type = data.type,
                            computed = iteratee(value);

                        if (type == LAZY_MAP_FLAG) {
                            value = computed;
                        } else if (!computed) {
                            if (type == LAZY_FILTER_FLAG) {
                                continue outer;
                            } else {
                                break outer;
                            }
                        }
                    }
                    result[resIndex++] = value;
                }
            return result;
        }

        /*------------------------------------------------------------------------*/

        /**
         * Creates a cache object to store key/value pairs.
         *
         * @private
         * @static
         * @name Cache
         * @memberOf _.memoize
         */
        function MapCache() {
            this.__data__ = {};
        }

        /**
         * Removes `key` and its value from the cache.
         *
         * @private
         * @name delete
         * @memberOf _.memoize.Cache
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed successfully, else `false`.
         */
        function mapDelete(key) {
            return this.has(key) && delete this.__data__[key];
        }

        /**
         * Gets the cached value for `key`.
         *
         * @private
         * @name get
         * @memberOf _.memoize.Cache
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the cached value.
         */
        function mapGet(key) {
            return key == '__proto__' ? undefined : this.__data__[key];
        }

        /**
         * Checks if a cached value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf _.memoize.Cache
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function mapHas(key) {
            return key != '__proto__' && hasOwnProperty.call(this.__data__, key);
        }

        /**
         * Sets `value` to `key` of the cache.
         *
         * @private
         * @name set
         * @memberOf _.memoize.Cache
         * @param {string} key The key of the value to cache.
         * @param {*} value The value to cache.
         * @returns {Object} Returns the cache object.
         */
        function mapSet(key, value) {
            if (key != '__proto__') {
                this.__data__[key] = value;
            }
            return this;
        }

        /*------------------------------------------------------------------------*/

        /**
         *
         * Creates a cache object to store unique values.
         *
         * @private
         * @param {Array} [values] The values to cache.
         */
        function SetCache(values) {
            var length = values ? values.length : 0;

            this.data = { 'hash': nativeCreate(null), 'set': new Set };
            while (length--) {
                this.push(values[length]);
            }
        }

        /**
         * Checks if `value` is in `cache` mimicking the return signature of
         * `_.indexOf` by returning `0` if the value is found, else `-1`.
         *
         * @private
         * @param {Object} cache The cache to search.
         * @param {*} value The value to search for.
         * @returns {number} Returns `0` if `value` is found, else `-1`.
         */
        function cacheIndexOf(cache, value) {
            var data = cache.data,
                result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];

            return result ? 0 : -1;
        }

        /**
         * Adds `value` to the cache.
         *
         * @private
         * @name push
         * @memberOf SetCache
         * @param {*} value The value to cache.
         */
        function cachePush(value) {
            var data = this.data;
            if (typeof value == 'string' || isObject(value)) {
                data.set.add(value);
            } else {
                data.hash[value] = true;
            }
        }

        /*------------------------------------------------------------------------*/

        /**
         * Creates a new array joining `array` with `other`.
         *
         * @private
         * @param {Array} array The array to join.
         * @param {Array} other The other array to join.
         * @returns {Array} Returns the new concatenated array.
         */
        function arrayConcat(array, other) {
            var index = -1,
                length = array.length,
                othIndex = -1,
                othLength = other.length,
                result = Array(length + othLength);

            while (++index < length) {
                result[index] = array[index];
            }
            while (++othIndex < othLength) {
                result[index++] = other[othIndex];
            }
            return result;
        }

        /**
         * Copies the values of `source` to `array`.
         *
         * @private
         * @param {Array} source The array to copy values from.
         * @param {Array} [array=[]] The array to copy values to.
         * @returns {Array} Returns `array`.
         */
        function arrayCopy(source, array) {
            var index = -1,
                length = source.length;

            array || (array = Array(length));
            while (++index < length) {
                array[index] = source[index];
            }
            return array;
        }

        /**
         * A specialized version of `_.forEach` for arrays without support for callback
         * shorthands and `this` binding.
         *
         * @private
         * @param {Array} array The array to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Array} Returns `array`.
         */
        function arrayEach(array, iteratee) {
            var index = -1,
                length = array.length;

            while (++index < length) {
                if (iteratee(array[index], index, array) === false) {
                    break;
                }
            }
            return array;
        }

        /**
         * A specialized version of `_.forEachRight` for arrays without support for
         * callback shorthands and `this` binding.
         *
         * @private
         * @param {Array} array The array to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Array} Returns `array`.
         */
        function arrayEachRight(array, iteratee) {
            var length = array.length;

            while (length--) {
                if (iteratee(array[length], length, array) === false) {
                    break;
                }
            }
            return array;
        }

        /**
         * A specialized version of `_.every` for arrays without support for callback
         * shorthands and `this` binding.
         *
         * @private
         * @param {Array} array The array to iterate over.
         * @param {Function} predicate The function invoked per iteration.
         * @returns {boolean} Returns `true` if all elements pass the predicate check,
         *  else `false`.
         */
        function arrayEvery(array, predicate) {
            var index = -1,
                length = array.length;

            while (++index < length) {
                if (!predicate(array[index], index, array)) {
                    return false;
                }
            }
            return true;
        }

        /**
         * A specialized version of `baseExtremum` for arrays which invokes `iteratee`
         * with one argument: (value).
         *
         * @private
         * @param {Array} array The array to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @param {Function} comparator The function used to compare values.
         * @param {*} exValue The initial extremum value.
         * @returns {*} Returns the extremum value.
         */
        function arrayExtremum(array, iteratee, comparator, exValue) {
            var index = -1,
                length = array.length,
                computed = exValue,
                result = computed;

            while (++index < length) {
                var value = array[index],
                    current = +iteratee(value);

                if (comparator(current, computed)) {
                    computed = current;
                    result = value;
                }
            }
            return result;
        }

        /**
         * A specialized version of `_.filter` for arrays without support for callback
         * shorthands and `this` binding.
         *
         * @private
         * @param {Array} array The array to iterate over.
         * @param {Function} predicate The function invoked per iteration.
         * @returns {Array} Returns the new filtered array.
         */
        function arrayFilter(array, predicate) {
            var index = -1,
                length = array.length,
                resIndex = -1,
                result = [];

            while (++index < length) {
                var value = array[index];
                if (predicate(value, index, array)) {
                    result[++resIndex] = value;
                }
            }
            return result;
        }

        /**
         * A specialized version of `_.map` for arrays without support for callback
         * shorthands and `this` binding.
         *
         * @private
         * @param {Array} array The array to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Array} Returns the new mapped array.
         */
        function arrayMap(array, iteratee) {
            var index = -1,
                length = array.length,
                result = Array(length);

            while (++index < length) {
                result[index] = iteratee(array[index], index, array);
            }
            return result;
        }

        /**
         * Appends the elements of `values` to `array`.
         *
         * @private
         * @param {Array} array The array to modify.
         * @param {Array} values The values to append.
         * @returns {Array} Returns `array`.
         */
        function arrayPush(array, values) {
            var index = -1,
                length = values.length,
                offset = array.length;

            while (++index < length) {
                array[offset + index] = values[index];
            }
            return array;
        }

        /**
         * A specialized version of `_.reduce` for arrays without support for callback
         * shorthands and `this` binding.
         *
         * @private
         * @param {Array} array The array to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @param {*} [accumulator] The initial value.
         * @param {boolean} [initFromArray] Specify using the first element of `array`
         *  as the initial value.
         * @returns {*} Returns the accumulated value.
         */
        function arrayReduce(array, iteratee, accumulator, initFromArray) {
            var index = -1,
                length = array.length;

            if (initFromArray && length) {
                accumulator = array[++index];
            }
            while (++index < length) {
                accumulator = iteratee(accumulator, array[index], index, array);
            }
            return accumulator;
        }

        /**
         * A specialized version of `_.reduceRight` for arrays without support for
         * callback shorthands and `this` binding.
         *
         * @private
         * @param {Array} array The array to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @param {*} [accumulator] The initial value.
         * @param {boolean} [initFromArray] Specify using the last element of `array`
         *  as the initial value.
         * @returns {*} Returns the accumulated value.
         */
        function arrayReduceRight(array, iteratee, accumulator, initFromArray) {
            var length = array.length;
            if (initFromArray && length) {
                accumulator = array[--length];
            }
            while (length--) {
                accumulator = iteratee(accumulator, array[length], length, array);
            }
            return accumulator;
        }

        /**
         * A specialized version of `_.some` for arrays without support for callback
         * shorthands and `this` binding.
         *
         * @private
         * @param {Array} array The array to iterate over.
         * @param {Function} predicate The function invoked per iteration.
         * @returns {boolean} Returns `true` if any element passes the predicate check,
         *  else `false`.
         */
        function arraySome(array, predicate) {
            var index = -1,
                length = array.length;

            while (++index < length) {
                if (predicate(array[index], index, array)) {
                    return true;
                }
            }
            return false;
        }

        /**
         * A specialized version of `_.sum` for arrays without support for callback
         * shorthands and `this` binding..
         *
         * @private
         * @param {Array} array The array to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {number} Returns the sum.
         */
        function arraySum(array, iteratee) {
            var length = array.length,
                result = 0;

            while (length--) {
                result += +iteratee(array[length]) || 0;
            }
            return result;
        }

        /**
         * Used by `_.defaults` to customize its `_.assign` use.
         *
         * @private
         * @param {*} objectValue The destination object property value.
         * @param {*} sourceValue The source object property value.
         * @returns {*} Returns the value to assign to the destination object.
         */
        function assignDefaults(objectValue, sourceValue) {
            return objectValue === undefined ? sourceValue : objectValue;
        }

        /**
         * Used by `_.template` to customize its `_.assign` use.
         *
         * **Note:** This function is like `assignDefaults` except that it ignores
         * inherited property values when checking if a property is `undefined`.
         *
         * @private
         * @param {*} objectValue The destination object property value.
         * @param {*} sourceValue The source object property value.
         * @param {string} key The key associated with the object and source values.
         * @param {Object} object The destination object.
         * @returns {*} Returns the value to assign to the destination object.
         */
        function assignOwnDefaults(objectValue, sourceValue, key, object) {
            return (objectValue === undefined || !hasOwnProperty.call(object, key))
                ? sourceValue
                : objectValue;
        }

        /**
         * A specialized version of `_.assign` for customizing assigned values without
         * support for argument juggling, multiple sources, and `this` binding `customizer`
         * functions.
         *
         * @private
         * @param {Object} object The destination object.
         * @param {Object} source The source object.
         * @param {Function} customizer The function to customize assigned values.
         * @returns {Object} Returns `object`.
         */
        function assignWith(object, source, customizer) {
            var index = -1,
                props = keys(source),
                length = props.length;

            while (++index < length) {
                var key = props[index],
                    value = object[key],
                    result = customizer(value, source[key], key, object, source);

                if ((result === result ? (result !== value) : (value === value)) ||
                    (value === undefined && !(key in object))) {
                    object[key] = result;
                }
            }
            return object;
        }

        /**
         * The base implementation of `_.assign` without support for argument juggling,
         * multiple sources, and `customizer` functions.
         *
         * @private
         * @param {Object} object The destination object.
         * @param {Object} source The source object.
         * @returns {Object} Returns `object`.
         */
        function baseAssign(object, source) {
            return source == null
                ? object
                : baseCopy(source, keys(source), object);
        }

        /**
         * The base implementation of `_.at` without support for string collections
         * and individual key arguments.
         *
         * @private
         * @param {Array|Object} collection The collection to iterate over.
         * @param {number[]|string[]} props The property names or indexes of elements to pick.
         * @returns {Array} Returns the new array of picked elements.
         */
        function baseAt(collection, props) {
            var index = -1,
                isNil = collection == null,
                isArr = !isNil && isArrayLike(collection),
                length = isArr ? collection.length : 0,
                propsLength = props.length,
                result = Array(propsLength);

            while(++index < propsLength) {
                var key = props[index];
                if (isArr) {
                    result[index] = isIndex(key, length) ? collection[key] : undefined;
                } else {
                    result[index] = isNil ? undefined : collection[key];
                }
            }
            return result;
        }

        /**
         * Copies properties of `source` to `object`.
         *
         * @private
         * @param {Object} source The object to copy properties from.
         * @param {Array} props The property names to copy.
         * @param {Object} [object={}] The object to copy properties to.
         * @returns {Object} Returns `object`.
         */
        function baseCopy(source, props, object) {
            object || (object = {});

            var index = -1,
                length = props.length;

            while (++index < length) {
                var key = props[index];
                object[key] = source[key];
            }
            return object;
        }

        /**
         * The base implementation of `_.callback` which supports specifying the
         * number of arguments to provide to `func`.
         *
         * @private
         * @param {*} [func=_.identity] The value to convert to a callback.
         * @param {*} [thisArg] The `this` binding of `func`.
         * @param {number} [argCount] The number of arguments to provide to `func`.
         * @returns {Function} Returns the callback.
         */
        function baseCallback(func, thisArg, argCount) {
            var type = typeof func;
            if (type == 'function') {
                return thisArg === undefined
                    ? func
                    : bindCallback(func, thisArg, argCount);
            }
            if (func == null) {
                return identity;
            }
            if (type == 'object') {
                return baseMatches(func);
            }
            return thisArg === undefined
                ? property(func)
                : baseMatchesProperty(func, thisArg);
        }

        /**
         * The base implementation of `_.clone` without support for argument juggling
         * and `this` binding `customizer` functions.
         *
         * @private
         * @param {*} value The value to clone.
         * @param {boolean} [isDeep] Specify a deep clone.
         * @param {Function} [customizer] The function to customize cloning values.
         * @param {string} [key] The key of `value`.
         * @param {Object} [object] The object `value` belongs to.
         * @param {Array} [stackA=[]] Tracks traversed source objects.
         * @param {Array} [stackB=[]] Associates clones with source counterparts.
         * @returns {*} Returns the cloned value.
         */
        function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
            var result;
            if (customizer) {
                result = object ? customizer(value, key, object) : customizer(value);
            }
            if (result !== undefined) {
                return result;
            }
            if (!isObject(value)) {
                return value;
            }
            var isArr = isArray(value);
            if (isArr) {
                result = initCloneArray(value);
                if (!isDeep) {
                    return arrayCopy(value, result);
                }
            } else {
                var tag = objToString.call(value),
                    isFunc = tag == funcTag;

                if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
                    result = initCloneObject(isFunc ? {} : value);
                    if (!isDeep) {
                        return baseAssign(result, value);
                    }
                } else {
                    return cloneableTags[tag]
                        ? initCloneByTag(value, tag, isDeep)
                        : (object ? value : {});
                }
            }
            // Check for circular references and return its corresponding clone.
            stackA || (stackA = []);
            stackB || (stackB = []);

            var length = stackA.length;
            while (length--) {
                if (stackA[length] == value) {
                    return stackB[length];
                }
            }
            // Add the source value to the stack of traversed objects and associate it with its clone.
            stackA.push(value);
            stackB.push(result);

            // Recursively populate clone (susceptible to call stack limits).
            (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
                result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
            });
            return result;
        }

        /**
         * The base implementation of `_.create` without support for assigning
         * properties to the created object.
         *
         * @private
         * @param {Object} prototype The object to inherit from.
         * @returns {Object} Returns the new object.
         */
        var baseCreate = (function() {
            function object() {}
            return function(prototype) {
                if (isObject(prototype)) {
                    object.prototype = prototype;
                    var result = new object;
                    object.prototype = undefined;
                }
                return result || {};
            };
        }());

        /**
         * The base implementation of `_.delay` and `_.defer` which accepts an index
         * of where to slice the arguments to provide to `func`.
         *
         * @private
         * @param {Function} func The function to delay.
         * @param {number} wait The number of milliseconds to delay invocation.
         * @param {Object} args The arguments provide to `func`.
         * @returns {number} Returns the timer id.
         */
        function baseDelay(func, wait, args) {
            if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            return setTimeout(function() { func.apply(undefined, args); }, wait);
        }

        /**
         * The base implementation of `_.difference` which accepts a single array
         * of values to exclude.
         *
         * @private
         * @param {Array} array The array to inspect.
         * @param {Array} values The values to exclude.
         * @returns {Array} Returns the new array of filtered values.
         */
        function baseDifference(array, values) {
            var length = array ? array.length : 0,
                result = [];

            if (!length) {
                return result;
            }
            var index = -1,
                indexOf = getIndexOf(),
                isCommon = indexOf == baseIndexOf,
                cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
                valuesLength = values.length;

            if (cache) {
                indexOf = cacheIndexOf;
                isCommon = false;
                values = cache;
            }
            outer:
                while (++index < length) {
                    var value = array[index];

                    if (isCommon && value === value) {
                        var valuesIndex = valuesLength;
                        while (valuesIndex--) {
                            if (values[valuesIndex] === value) {
                                continue outer;
                            }
                        }
                        result.push(value);
                    }
                    else if (indexOf(values, value, 0) < 0) {
                        result.push(value);
                    }
                }
            return result;
        }

        /**
         * The base implementation of `_.forEach` without support for callback
         * shorthands and `this` binding.
         *
         * @private
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Array|Object|string} Returns `collection`.
         */
        var baseEach = createBaseEach(baseForOwn);

        /**
         * The base implementation of `_.forEachRight` without support for callback
         * shorthands and `this` binding.
         *
         * @private
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Array|Object|string} Returns `collection`.
         */
        var baseEachRight = createBaseEach(baseForOwnRight, true);

        /**
         * The base implementation of `_.every` without support for callback
         * shorthands and `this` binding.
         *
         * @private
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function} predicate The function invoked per iteration.
         * @returns {boolean} Returns `true` if all elements pass the predicate check,
         *  else `false`
         */
        function baseEvery(collection, predicate) {
            var result = true;
            baseEach(collection, function(value, index, collection) {
                result = !!predicate(value, index, collection);
                return result;
            });
            return result;
        }

        /**
         * Gets the extremum value of `collection` invoking `iteratee` for each value
         * in `collection` to generate the criterion by which the value is ranked.
         * The `iteratee` is invoked with three arguments: (value, index|key, collection).
         *
         * @private
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @param {Function} comparator The function used to compare values.
         * @param {*} exValue The initial extremum value.
         * @returns {*} Returns the extremum value.
         */
        function baseExtremum(collection, iteratee, comparator, exValue) {
            var computed = exValue,
                result = computed;

            baseEach(collection, function(value, index, collection) {
                var current = +iteratee(value, index, collection);
                if (comparator(current, computed) || (current === exValue && current === result)) {
                    computed = current;
                    result = value;
                }
            });
            return result;
        }

        /**
         * The base implementation of `_.fill` without an iteratee call guard.
         *
         * @private
         * @param {Array} array The array to fill.
         * @param {*} value The value to fill `array` with.
         * @param {number} [start=0] The start position.
         * @param {number} [end=array.length] The end position.
         * @returns {Array} Returns `array`.
         */
        function baseFill(array, value, start, end) {
            var length = array.length;

            start = start == null ? 0 : (+start || 0);
            if (start < 0) {
                start = -start > length ? 0 : (length + start);
            }
            end = (end === undefined || end > length) ? length : (+end || 0);
            if (end < 0) {
                end += length;
            }
            length = start > end ? 0 : (end >>> 0);
            start >>>= 0;

            while (start < length) {
                array[start++] = value;
            }
            return array;
        }

        /**
         * The base implementation of `_.filter` without support for callback
         * shorthands and `this` binding.
         *
         * @private
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function} predicate The function invoked per iteration.
         * @returns {Array} Returns the new filtered array.
         */
        function baseFilter(collection, predicate) {
            var result = [];
            baseEach(collection, function(value, index, collection) {
                if (predicate(value, index, collection)) {
                    result.push(value);
                }
            });
            return result;
        }

        /**
         * The base implementation of `_.find`, `_.findLast`, `_.findKey`, and `_.findLastKey`,
         * without support for callback shorthands and `this` binding, which iterates
         * over `collection` using the provided `eachFunc`.
         *
         * @private
         * @param {Array|Object|string} collection The collection to search.
         * @param {Function} predicate The function invoked per iteration.
         * @param {Function} eachFunc The function to iterate over `collection`.
         * @param {boolean} [retKey] Specify returning the key of the found element
         *  instead of the element itself.
         * @returns {*} Returns the found element or its key, else `undefined`.
         */
        function baseFind(collection, predicate, eachFunc, retKey) {
            var result;
            eachFunc(collection, function(value, key, collection) {
                if (predicate(value, key, collection)) {
                    result = retKey ? key : value;
                    return false;
                }
            });
            return result;
        }

        /**
         * The base implementation of `_.flatten` with added support for restricting
         * flattening and specifying the start index.
         *
         * @private
         * @param {Array} array The array to flatten.
         * @param {boolean} [isDeep] Specify a deep flatten.
         * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
         * @param {Array} [result=[]] The initial result value.
         * @returns {Array} Returns the new flattened array.
         */
        function baseFlatten(array, isDeep, isStrict, result) {
            result || (result = []);

            var index = -1,
                length = array.length;

            while (++index < length) {
                var value = array[index];
                if (isObjectLike(value) && isArrayLike(value) &&
                    (isStrict || isArray(value) || isArguments(value))) {
                    if (isDeep) {
                        // Recursively flatten arrays (susceptible to call stack limits).
                        baseFlatten(value, isDeep, isStrict, result);
                    } else {
                        arrayPush(result, value);
                    }
                } else if (!isStrict) {
                    result[result.length] = value;
                }
            }
            return result;
        }

        /**
         * The base implementation of `baseForIn` and `baseForOwn` which iterates
         * over `object` properties returned by `keysFunc` invoking `iteratee` for
         * each property. Iteratee functions may exit iteration early by explicitly
         * returning `false`.
         *
         * @private
         * @param {Object} object The object to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @param {Function} keysFunc The function to get the keys of `object`.
         * @returns {Object} Returns `object`.
         */
        var baseFor = createBaseFor();

        /**
         * This function is like `baseFor` except that it iterates over properties
         * in the opposite order.
         *
         * @private
         * @param {Object} object The object to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @param {Function} keysFunc The function to get the keys of `object`.
         * @returns {Object} Returns `object`.
         */
        var baseForRight = createBaseFor(true);

        /**
         * The base implementation of `_.forIn` without support for callback
         * shorthands and `this` binding.
         *
         * @private
         * @param {Object} object The object to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Object} Returns `object`.
         */
        function baseForIn(object, iteratee) {
            return baseFor(object, iteratee, keysIn);
        }

        /**
         * The base implementation of `_.forOwn` without support for callback
         * shorthands and `this` binding.
         *
         * @private
         * @param {Object} object The object to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Object} Returns `object`.
         */
        function baseForOwn(object, iteratee) {
            return baseFor(object, iteratee, keys);
        }

        /**
         * The base implementation of `_.forOwnRight` without support for callback
         * shorthands and `this` binding.
         *
         * @private
         * @param {Object} object The object to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Object} Returns `object`.
         */
        function baseForOwnRight(object, iteratee) {
            return baseForRight(object, iteratee, keys);
        }

        /**
         * The base implementation of `_.functions` which creates an array of
         * `object` function property names filtered from those provided.
         *
         * @private
         * @param {Object} object The object to inspect.
         * @param {Array} props The property names to filter.
         * @returns {Array} Returns the new array of filtered property names.
         */
        function baseFunctions(object, props) {
            var index = -1,
                length = props.length,
                resIndex = -1,
                result = [];

            while (++index < length) {
                var key = props[index];
                if (isFunction(object[key])) {
                    result[++resIndex] = key;
                }
            }
            return result;
        }

        /**
         * The base implementation of `get` without support for string paths
         * and default values.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {Array} path The path of the property to get.
         * @param {string} [pathKey] The key representation of path.
         * @returns {*} Returns the resolved value.
         */
        function baseGet(object, path, pathKey) {
            if (object == null) {
                return;
            }
            if (pathKey !== undefined && pathKey in toObject(object)) {
                path = [pathKey];
            }
            var index = 0,
                length = path.length;

            while (object != null && index < length) {
                object = object[path[index++]];
            }
            return (index && index == length) ? object : undefined;
        }

        /**
         * The base implementation of `_.isEqual` without support for `this` binding
         * `customizer` functions.
         *
         * @private
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @param {Function} [customizer] The function to customize comparing values.
         * @param {boolean} [isLoose] Specify performing partial comparisons.
         * @param {Array} [stackA] Tracks traversed `value` objects.
         * @param {Array} [stackB] Tracks traversed `other` objects.
         * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
         */
        function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
            if (value === other) {
                return true;
            }
            if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
                return value !== value && other !== other;
            }
            return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
        }

        /**
         * A specialized version of `baseIsEqual` for arrays and objects which performs
         * deep comparisons and tracks traversed objects enabling objects with circular
         * references to be compared.
         *
         * @private
         * @param {Object} object The object to compare.
         * @param {Object} other The other object to compare.
         * @param {Function} equalFunc The function to determine equivalents of values.
         * @param {Function} [customizer] The function to customize comparing objects.
         * @param {boolean} [isLoose] Specify performing partial comparisons.
         * @param {Array} [stackA=[]] Tracks traversed `value` objects.
         * @param {Array} [stackB=[]] Tracks traversed `other` objects.
         * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
         */
        function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
            var objIsArr = isArray(object),
                othIsArr = isArray(other),
                objTag = arrayTag,
                othTag = arrayTag;

            if (!objIsArr) {
                objTag = objToString.call(object);
                if (objTag == argsTag) {
                    objTag = objectTag;
                } else if (objTag != objectTag) {
                    objIsArr = isTypedArray(object);
                }
            }
            if (!othIsArr) {
                othTag = objToString.call(other);
                if (othTag == argsTag) {
                    othTag = objectTag;
                } else if (othTag != objectTag) {
                    othIsArr = isTypedArray(other);
                }
            }
            var objIsObj = objTag == objectTag,
                othIsObj = othTag == objectTag,
                isSameTag = objTag == othTag;

            if (isSameTag && !(objIsArr || objIsObj)) {
                return equalByTag(object, other, objTag);
            }
            if (!isLoose) {
                var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
                    othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

                if (objIsWrapped || othIsWrapped) {
                    return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
                }
            }
            if (!isSameTag) {
                return false;
            }
            // Assume cyclic values are equal.
            // For more information on detecting circular references see https://es5.github.io/#JO.
            stackA || (stackA = []);
            stackB || (stackB = []);

            var length = stackA.length;
            while (length--) {
                if (stackA[length] == object) {
                    return stackB[length] == other;
                }
            }
            // Add `object` and `other` to the stack of traversed objects.
            stackA.push(object);
            stackB.push(other);

            var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);

            stackA.pop();
            stackB.pop();

            return result;
        }

        /**
         * The base implementation of `_.isMatch` without support for callback
         * shorthands and `this` binding.
         *
         * @private
         * @param {Object} object The object to inspect.
         * @param {Array} matchData The propery names, values, and compare flags to match.
         * @param {Function} [customizer] The function to customize comparing objects.
         * @returns {boolean} Returns `true` if `object` is a match, else `false`.
         */
        function baseIsMatch(object, matchData, customizer) {
            var index = matchData.length,
                length = index,
                noCustomizer = !customizer;

            if (object == null) {
                return !length;
            }
            object = toObject(object);
            while (index--) {
                var data = matchData[index];
                if ((noCustomizer && data[2])
                        ? data[1] !== object[data[0]]
                        : !(data[0] in object)
                ) {
                    return false;
                }
            }
            while (++index < length) {
                data = matchData[index];
                var key = data[0],
                    objValue = object[key],
                    srcValue = data[1];

                if (noCustomizer && data[2]) {
                    if (objValue === undefined && !(key in object)) {
                        return false;
                    }
                } else {
                    var result = customizer ? customizer(objValue, srcValue, key) : undefined;
                    if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
                        return false;
                    }
                }
            }
            return true;
        }

        /**
         * The base implementation of `_.map` without support for callback shorthands
         * and `this` binding.
         *
         * @private
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Array} Returns the new mapped array.
         */
        function baseMap(collection, iteratee) {
            var index = -1,
                result = isArrayLike(collection) ? Array(collection.length) : [];

            baseEach(collection, function(value, key, collection) {
                result[++index] = iteratee(value, key, collection);
            });
            return result;
        }

        /**
         * The base implementation of `_.matches` which does not clone `source`.
         *
         * @private
         * @param {Object} source The object of property values to match.
         * @returns {Function} Returns the new function.
         */
        function baseMatches(source) {
            var matchData = getMatchData(source);
            if (matchData.length == 1 && matchData[0][2]) {
                var key = matchData[0][0],
                    value = matchData[0][1];

                return function(object) {
                    if (object == null) {
                        return false;
                    }
                    return object[key] === value && (value !== undefined || (key in toObject(object)));
                };
            }
            return function(object) {
                return baseIsMatch(object, matchData);
            };
        }

        /**
         * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
         *
         * @private
         * @param {string} path The path of the property to get.
         * @param {*} srcValue The value to compare.
         * @returns {Function} Returns the new function.
         */
        function baseMatchesProperty(path, srcValue) {
            var isArr = isArray(path),
                isCommon = isKey(path) && isStrictComparable(srcValue),
                pathKey = (path + '');

            path = toPath(path);
            return function(object) {
                if (object == null) {
                    return false;
                }
                var key = pathKey;
                object = toObject(object);
                if ((isArr || !isCommon) && !(key in object)) {
                    object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
                    if (object == null) {
                        return false;
                    }
                    key = last(path);
                    object = toObject(object);
                }
                return object[key] === srcValue
                    ? (srcValue !== undefined || (key in object))
                    : baseIsEqual(srcValue, object[key], undefined, true);
            };
        }

        /**
         * The base implementation of `_.merge` without support for argument juggling,
         * multiple sources, and `this` binding `customizer` functions.
         *
         * @private
         * @param {Object} object The destination object.
         * @param {Object} source The source object.
         * @param {Function} [customizer] The function to customize merged values.
         * @param {Array} [stackA=[]] Tracks traversed source objects.
         * @param {Array} [stackB=[]] Associates values with source counterparts.
         * @returns {Object} Returns `object`.
         */
        function baseMerge(object, source, customizer, stackA, stackB) {
            if (!isObject(object)) {
                return object;
            }
            var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),
                props = isSrcArr ? undefined : keys(source);

            arrayEach(props || source, function(srcValue, key) {
                if (props) {
                    key = srcValue;
                    srcValue = source[key];
                }
                if (isObjectLike(srcValue)) {
                    stackA || (stackA = []);
                    stackB || (stackB = []);
                    baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
                }
                else {
                    var value = object[key],
                        result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
                        isCommon = result === undefined;

                    if (isCommon) {
                        result = srcValue;
                    }
                    if ((result !== undefined || (isSrcArr && !(key in object))) &&
                        (isCommon || (result === result ? (result !== value) : (value === value)))) {
                        object[key] = result;
                    }
                }
            });
            return object;
        }

        /**
         * A specialized version of `baseMerge` for arrays and objects which performs
         * deep merges and tracks traversed objects enabling objects with circular
         * references to be merged.
         *
         * @private
         * @param {Object} object The destination object.
         * @param {Object} source The source object.
         * @param {string} key The key of the value to merge.
         * @param {Function} mergeFunc The function to merge values.
         * @param {Function} [customizer] The function to customize merged values.
         * @param {Array} [stackA=[]] Tracks traversed source objects.
         * @param {Array} [stackB=[]] Associates values with source counterparts.
         * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
         */
        function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
            var length = stackA.length,
                srcValue = source[key];

            while (length--) {
                if (stackA[length] == srcValue) {
                    object[key] = stackB[length];
                    return;
                }
            }
            var value = object[key],
                result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
                isCommon = result === undefined;

            if (isCommon) {
                result = srcValue;
                if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
                    result = isArray(value)
                        ? value
                        : (isArrayLike(value) ? arrayCopy(value) : []);
                }
                else if (isPlainObject(srcValue) || isArguments(srcValue)) {
                    result = isArguments(value)
                        ? toPlainObject(value)
                        : (isPlainObject(value) ? value : {});
                }
                else {
                    isCommon = false;
                }
            }
            // Add the source value to the stack of traversed objects and associate
            // it with its merged value.
            stackA.push(srcValue);
            stackB.push(result);

            if (isCommon) {
                // Recursively merge objects and arrays (susceptible to call stack limits).
                object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
            } else if (result === result ? (result !== value) : (value === value)) {
                object[key] = result;
            }
        }

        /**
         * The base implementation of `_.property` without support for deep paths.
         *
         * @private
         * @param {string} key The key of the property to get.
         * @returns {Function} Returns the new function.
         */
        function baseProperty(key) {
            return function(object) {
                return object == null ? undefined : object[key];
            };
        }

        /**
         * A specialized version of `baseProperty` which supports deep paths.
         *
         * @private
         * @param {Array|string} path The path of the property to get.
         * @returns {Function} Returns the new function.
         */
        function basePropertyDeep(path) {
            var pathKey = (path + '');
            path = toPath(path);
            return function(object) {
                return baseGet(object, path, pathKey);
            };
        }

        /**
         * The base implementation of `_.pullAt` without support for individual
         * index arguments and capturing the removed elements.
         *
         * @private
         * @param {Array} array The array to modify.
         * @param {number[]} indexes The indexes of elements to remove.
         * @returns {Array} Returns `array`.
         */
        function basePullAt(array, indexes) {
            var length = array ? indexes.length : 0;
            while (length--) {
                var index = indexes[length];
                if (index != previous && isIndex(index)) {
                    var previous = index;
                    splice.call(array, index, 1);
                }
            }
            return array;
        }

        /**
         * The base implementation of `_.random` without support for argument juggling
         * and returning floating-point numbers.
         *
         * @private
         * @param {number} min The minimum possible value.
         * @param {number} max The maximum possible value.
         * @returns {number} Returns the random number.
         */
        function baseRandom(min, max) {
            return min + nativeFloor(nativeRandom() * (max - min + 1));
        }

        /**
         * The base implementation of `_.reduce` and `_.reduceRight` without support
         * for callback shorthands and `this` binding, which iterates over `collection`
         * using the provided `eachFunc`.
         *
         * @private
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @param {*} accumulator The initial value.
         * @param {boolean} initFromCollection Specify using the first or last element
         *  of `collection` as the initial value.
         * @param {Function} eachFunc The function to iterate over `collection`.
         * @returns {*} Returns the accumulated value.
         */
        function baseReduce(collection, iteratee, accumulator, initFromCollection, eachFunc) {
            eachFunc(collection, function(value, index, collection) {
                accumulator = initFromCollection
                    ? (initFromCollection = false, value)
                    : iteratee(accumulator, value, index, collection);
            });
            return accumulator;
        }

        /**
         * The base implementation of `setData` without support for hot loop detection.
         *
         * @private
         * @param {Function} func The function to associate metadata with.
         * @param {*} data The metadata.
         * @returns {Function} Returns `func`.
         */
        var baseSetData = !metaMap ? identity : function(func, data) {
            metaMap.set(func, data);
            return func;
        };

        /**
         * The base implementation of `_.slice` without an iteratee call guard.
         *
         * @private
         * @param {Array} array The array to slice.
         * @param {number} [start=0] The start position.
         * @param {number} [end=array.length] The end position.
         * @returns {Array} Returns the slice of `array`.
         */
        function baseSlice(array, start, end) {
            var index = -1,
                length = array.length;

            start = start == null ? 0 : (+start || 0);
            if (start < 0) {
                start = -start > length ? 0 : (length + start);
            }
            end = (end === undefined || end > length) ? length : (+end || 0);
            if (end < 0) {
                end += length;
            }
            length = start > end ? 0 : ((end - start) >>> 0);
            start >>>= 0;

            var result = Array(length);
            while (++index < length) {
                result[index] = array[index + start];
            }
            return result;
        }

        /**
         * The base implementation of `_.some` without support for callback shorthands
         * and `this` binding.
         *
         * @private
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function} predicate The function invoked per iteration.
         * @returns {boolean} Returns `true` if any element passes the predicate check,
         *  else `false`.
         */
        function baseSome(collection, predicate) {
            var result;

            baseEach(collection, function(value, index, collection) {
                result = predicate(value, index, collection);
                return !result;
            });
            return !!result;
        }

        /**
         * The base implementation of `_.sortBy` which uses `comparer` to define
         * the sort order of `array` and replaces criteria objects with their
         * corresponding values.
         *
         * @private
         * @param {Array} array The array to sort.
         * @param {Function} comparer The function to define sort order.
         * @returns {Array} Returns `array`.
         */
        function baseSortBy(array, comparer) {
            var length = array.length;

            array.sort(comparer);
            while (length--) {
                array[length] = array[length].value;
            }
            return array;
        }

        /**
         * The base implementation of `_.sortByOrder` without param guards.
         *
         * @private
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
         * @param {boolean[]} orders The sort orders of `iteratees`.
         * @returns {Array} Returns the new sorted array.
         */
        function baseSortByOrder(collection, iteratees, orders) {
            var callback = getCallback(),
                index = -1;

            iteratees = arrayMap(iteratees, function(iteratee) { return callback(iteratee); });

            var result = baseMap(collection, function(value) {
                var criteria = arrayMap(iteratees, function(iteratee) { return iteratee(value); });
                return { 'criteria': criteria, 'index': ++index, 'value': value };
            });

            return baseSortBy(result, function(object, other) {
                return compareMultiple(object, other, orders);
            });
        }

        /**
         * The base implementation of `_.sum` without support for callback shorthands
         * and `this` binding.
         *
         * @private
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {number} Returns the sum.
         */
        function baseSum(collection, iteratee) {
            var result = 0;
            baseEach(collection, function(value, index, collection) {
                result += +iteratee(value, index, collection) || 0;
            });
            return result;
        }

        /**
         * The base implementation of `_.uniq` without support for callback shorthands
         * and `this` binding.
         *
         * @private
         * @param {Array} array The array to inspect.
         * @param {Function} [iteratee] The function invoked per iteration.
         * @returns {Array} Returns the new duplicate-value-free array.
         */
        function baseUniq(array, iteratee) {
            var index = -1,
                indexOf = getIndexOf(),
                length = array.length,
                isCommon = indexOf == baseIndexOf,
                isLarge = isCommon && length >= LARGE_ARRAY_SIZE,
                seen = isLarge ? createCache() : null,
                result = [];

            if (seen) {
                indexOf = cacheIndexOf;
                isCommon = false;
            } else {
                isLarge = false;
                seen = iteratee ? [] : result;
            }
            outer:
                while (++index < length) {
                    var value = array[index],
                        computed = iteratee ? iteratee(value, index, array) : value;

                    if (isCommon && value === value) {
                        var seenIndex = seen.length;
                        while (seenIndex--) {
                            if (seen[seenIndex] === computed) {
                                continue outer;
                            }
                        }
                        if (iteratee) {
                            seen.push(computed);
                        }
                        result.push(value);
                    }
                    else if (indexOf(seen, computed, 0) < 0) {
                        if (iteratee || isLarge) {
                            seen.push(computed);
                        }
                        result.push(value);
                    }
                }
            return result;
        }

        /**
         * The base implementation of `_.values` and `_.valuesIn` which creates an
         * array of `object` property values corresponding to the property names
         * of `props`.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {Array} props The property names to get values for.
         * @returns {Object} Returns the array of property values.
         */
        function baseValues(object, props) {
            var index = -1,
                length = props.length,
                result = Array(length);

            while (++index < length) {
                result[index] = object[props[index]];
            }
            return result;
        }

        /**
         * The base implementation of `_.dropRightWhile`, `_.dropWhile`, `_.takeRightWhile`,
         * and `_.takeWhile` without support for callback shorthands and `this` binding.
         *
         * @private
         * @param {Array} array The array to query.
         * @param {Function} predicate The function invoked per iteration.
         * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
         * @param {boolean} [fromRight] Specify iterating from right to left.
         * @returns {Array} Returns the slice of `array`.
         */
        function baseWhile(array, predicate, isDrop, fromRight) {
            var length = array.length,
                index = fromRight ? length : -1;

            while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}
            return isDrop
                ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
                : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
        }

        /**
         * The base implementation of `wrapperValue` which returns the result of
         * performing a sequence of actions on the unwrapped `value`, where each
         * successive action is supplied the return value of the previous.
         *
         * @private
         * @param {*} value The unwrapped value.
         * @param {Array} actions Actions to peform to resolve the unwrapped value.
         * @returns {*} Returns the resolved value.
         */
        function baseWrapperValue(value, actions) {
            var result = value;
            if (result instanceof LazyWrapper) {
                result = result.value();
            }
            var index = -1,
                length = actions.length;

            while (++index < length) {
                var action = actions[index];
                result = action.func.apply(action.thisArg, arrayPush([result], action.args));
            }
            return result;
        }

        /**
         * Performs a binary search of `array` to determine the index at which `value`
         * should be inserted into `array` in order to maintain its sort order.
         *
         * @private
         * @param {Array} array The sorted array to inspect.
         * @param {*} value The value to evaluate.
         * @param {boolean} [retHighest] Specify returning the highest qualified index.
         * @returns {number} Returns the index at which `value` should be inserted
         *  into `array`.
         */
        function binaryIndex(array, value, retHighest) {
            var low = 0,
                high = array ? array.length : low;

            if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
                while (low < high) {
                    var mid = (low + high) >>> 1,
                        computed = array[mid];

                    if ((retHighest ? (computed <= value) : (computed < value)) && computed !== null) {
                        low = mid + 1;
                    } else {
                        high = mid;
                    }
                }
                return high;
            }
            return binaryIndexBy(array, value, identity, retHighest);
        }

        /**
         * This function is like `binaryIndex` except that it invokes `iteratee` for
         * `value` and each element of `array` to compute their sort ranking. The
         * iteratee is invoked with one argument; (value).
         *
         * @private
         * @param {Array} array The sorted array to inspect.
         * @param {*} value The value to evaluate.
         * @param {Function} iteratee The function invoked per iteration.
         * @param {boolean} [retHighest] Specify returning the highest qualified index.
         * @returns {number} Returns the index at which `value` should be inserted
         *  into `array`.
         */
        function binaryIndexBy(array, value, iteratee, retHighest) {
            value = iteratee(value);

            var low = 0,
                high = array ? array.length : 0,
                valIsNaN = value !== value,
                valIsNull = value === null,
                valIsUndef = value === undefined;

            while (low < high) {
                var mid = nativeFloor((low + high) / 2),
                    computed = iteratee(array[mid]),
                    isDef = computed !== undefined,
                    isReflexive = computed === computed;

                if (valIsNaN) {
                    var setLow = isReflexive || retHighest;
                } else if (valIsNull) {
                    setLow = isReflexive && isDef && (retHighest || computed != null);
                } else if (valIsUndef) {
                    setLow = isReflexive && (retHighest || isDef);
                } else if (computed == null) {
                    setLow = false;
                } else {
                    setLow = retHighest ? (computed <= value) : (computed < value);
                }
                if (setLow) {
                    low = mid + 1;
                } else {
                    high = mid;
                }
            }
            return nativeMin(high, MAX_ARRAY_INDEX);
        }

        /**
         * A specialized version of `baseCallback` which only supports `this` binding
         * and specifying the number of arguments to provide to `func`.
         *
         * @private
         * @param {Function} func The function to bind.
         * @param {*} thisArg The `this` binding of `func`.
         * @param {number} [argCount] The number of arguments to provide to `func`.
         * @returns {Function} Returns the callback.
         */
        function bindCallback(func, thisArg, argCount) {
            if (typeof func != 'function') {
                return identity;
            }
            if (thisArg === undefined) {
                return func;
            }
            switch (argCount) {
                case 1: return function(value) {
                    return func.call(thisArg, value);
                };
                case 3: return function(value, index, collection) {
                    return func.call(thisArg, value, index, collection);
                };
                case 4: return function(accumulator, value, index, collection) {
                    return func.call(thisArg, accumulator, value, index, collection);
                };
                case 5: return function(value, other, key, object, source) {
                    return func.call(thisArg, value, other, key, object, source);
                };
            }
            return function() {
                return func.apply(thisArg, arguments);
            };
        }

        /**
         * Creates a clone of the given array buffer.
         *
         * @private
         * @param {ArrayBuffer} buffer The array buffer to clone.
         * @returns {ArrayBuffer} Returns the cloned array buffer.
         */
        function bufferClone(buffer) {
            var result = new ArrayBuffer(buffer.byteLength),
                view = new Uint8Array(result);

            view.set(new Uint8Array(buffer));
            return result;
        }

        /**
         * Creates an array that is the composition of partially applied arguments,
         * placeholders, and provided arguments into a single array of arguments.
         *
         * @private
         * @param {Array|Object} args The provided arguments.
         * @param {Array} partials The arguments to prepend to those provided.
         * @param {Array} holders The `partials` placeholder indexes.
         * @returns {Array} Returns the new array of composed arguments.
         */
        function composeArgs(args, partials, holders) {
            var holdersLength = holders.length,
                argsIndex = -1,
                argsLength = nativeMax(args.length - holdersLength, 0),
                leftIndex = -1,
                leftLength = partials.length,
                result = Array(leftLength + argsLength);

            while (++leftIndex < leftLength) {
                result[leftIndex] = partials[leftIndex];
            }
            while (++argsIndex < holdersLength) {
                result[holders[argsIndex]] = args[argsIndex];
            }
            while (argsLength--) {
                result[leftIndex++] = args[argsIndex++];
            }
            return result;
        }

        /**
         * This function is like `composeArgs` except that the arguments composition
         * is tailored for `_.partialRight`.
         *
         * @private
         * @param {Array|Object} args The provided arguments.
         * @param {Array} partials The arguments to append to those provided.
         * @param {Array} holders The `partials` placeholder indexes.
         * @returns {Array} Returns the new array of composed arguments.
         */
        function composeArgsRight(args, partials, holders) {
            var holdersIndex = -1,
                holdersLength = holders.length,
                argsIndex = -1,
                argsLength = nativeMax(args.length - holdersLength, 0),
                rightIndex = -1,
                rightLength = partials.length,
                result = Array(argsLength + rightLength);

            while (++argsIndex < argsLength) {
                result[argsIndex] = args[argsIndex];
            }
            var offset = argsIndex;
            while (++rightIndex < rightLength) {
                result[offset + rightIndex] = partials[rightIndex];
            }
            while (++holdersIndex < holdersLength) {
                result[offset + holders[holdersIndex]] = args[argsIndex++];
            }
            return result;
        }

        /**
         * Creates a `_.countBy`, `_.groupBy`, `_.indexBy`, or `_.partition` function.
         *
         * @private
         * @param {Function} setter The function to set keys and values of the accumulator object.
         * @param {Function} [initializer] The function to initialize the accumulator object.
         * @returns {Function} Returns the new aggregator function.
         */
        function createAggregator(setter, initializer) {
            return function(collection, iteratee, thisArg) {
                var result = initializer ? initializer() : {};
                iteratee = getCallback(iteratee, thisArg, 3);

                if (isArray(collection)) {
                    var index = -1,
                        length = collection.length;

                    while (++index < length) {
                        var value = collection[index];
                        setter(result, value, iteratee(value, index, collection), collection);
                    }
                } else {
                    baseEach(collection, function(value, key, collection) {
                        setter(result, value, iteratee(value, key, collection), collection);
                    });
                }
                return result;
            };
        }

        /**
         * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
         *
         * @private
         * @param {Function} assigner The function to assign values.
         * @returns {Function} Returns the new assigner function.
         */
        function createAssigner(assigner) {
            return restParam(function(object, sources) {
                var index = -1,
                    length = object == null ? 0 : sources.length,
                    customizer = length > 2 ? sources[length - 2] : undefined,
                    guard = length > 2 ? sources[2] : undefined,
                    thisArg = length > 1 ? sources[length - 1] : undefined;

                if (typeof customizer == 'function') {
                    customizer = bindCallback(customizer, thisArg, 5);
                    length -= 2;
                } else {
                    customizer = typeof thisArg == 'function' ? thisArg : undefined;
                    length -= (customizer ? 1 : 0);
                }
                if (guard && isIterateeCall(sources[0], sources[1], guard)) {
                    customizer = length < 3 ? undefined : customizer;
                    length = 1;
                }
                while (++index < length) {
                    var source = sources[index];
                    if (source) {
                        assigner(object, source, customizer);
                    }
                }
                return object;
            });
        }

        /**
         * Creates a `baseEach` or `baseEachRight` function.
         *
         * @private
         * @param {Function} eachFunc The function to iterate over a collection.
         * @param {boolean} [fromRight] Specify iterating from right to left.
         * @returns {Function} Returns the new base function.
         */
        function createBaseEach(eachFunc, fromRight) {
            return function(collection, iteratee) {
                var length = collection ? getLength(collection) : 0;
                if (!isLength(length)) {
                    return eachFunc(collection, iteratee);
                }
                var index = fromRight ? length : -1,
                    iterable = toObject(collection);

                while ((fromRight ? index-- : ++index < length)) {
                    if (iteratee(iterable[index], index, iterable) === false) {
                        break;
                    }
                }
                return collection;
            };
        }

        /**
         * Creates a base function for `_.forIn` or `_.forInRight`.
         *
         * @private
         * @param {boolean} [fromRight] Specify iterating from right to left.
         * @returns {Function} Returns the new base function.
         */
        function createBaseFor(fromRight) {
            return function(object, iteratee, keysFunc) {
                var iterable = toObject(object),
                    props = keysFunc(object),
                    length = props.length,
                    index = fromRight ? length : -1;

                while ((fromRight ? index-- : ++index < length)) {
                    var key = props[index];
                    if (iteratee(iterable[key], key, iterable) === false) {
                        break;
                    }
                }
                return object;
            };
        }

        /**
         * Creates a function that wraps `func` and invokes it with the `this`
         * binding of `thisArg`.
         *
         * @private
         * @param {Function} func The function to bind.
         * @param {*} [thisArg] The `this` binding of `func`.
         * @returns {Function} Returns the new bound function.
         */
        function createBindWrapper(func, thisArg) {
            var Ctor = createCtorWrapper(func);

            function wrapper() {
                var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
                return fn.apply(thisArg, arguments);
            }
            return wrapper;
        }

        /**
         * Creates a `Set` cache object to optimize linear searches of large arrays.
         *
         * @private
         * @param {Array} [values] The values to cache.
         * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
         */
        function createCache(values) {
            return (nativeCreate && Set) ? new SetCache(values) : null;
        }

        /**
         * Creates a function that produces compound words out of the words in a
         * given string.
         *
         * @private
         * @param {Function} callback The function to combine each word.
         * @returns {Function} Returns the new compounder function.
         */
        function createCompounder(callback) {
            return function(string) {
                var index = -1,
                    array = words(deburr(string)),
                    length = array.length,
                    result = '';

                while (++index < length) {
                    result = callback(result, array[index], index);
                }
                return result;
            };
        }

        /**
         * Creates a function that produces an instance of `Ctor` regardless of
         * whether it was invoked as part of a `new` expression or by `call` or `apply`.
         *
         * @private
         * @param {Function} Ctor The constructor to wrap.
         * @returns {Function} Returns the new wrapped function.
         */
        function createCtorWrapper(Ctor) {
            return function() {
                // Use a `switch` statement to work with class constructors.
                // See http://ecma-international.org/ecma-262/6.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
                // for more details.
                var args = arguments;
                switch (args.length) {
                    case 0: return new Ctor;
                    case 1: return new Ctor(args[0]);
                    case 2: return new Ctor(args[0], args[1]);
                    case 3: return new Ctor(args[0], args[1], args[2]);
                    case 4: return new Ctor(args[0], args[1], args[2], args[3]);
                    case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
                    case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
                    case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
                }
                var thisBinding = baseCreate(Ctor.prototype),
                    result = Ctor.apply(thisBinding, args);

                // Mimic the constructor's `return` behavior.
                // See https://es5.github.io/#x13.2.2 for more details.
                return isObject(result) ? result : thisBinding;
            };
        }

        /**
         * Creates a `_.curry` or `_.curryRight` function.
         *
         * @private
         * @param {boolean} flag The curry bit flag.
         * @returns {Function} Returns the new curry function.
         */
        function createCurry(flag) {
            function curryFunc(func, arity, guard) {
                if (guard && isIterateeCall(func, arity, guard)) {
                    arity = undefined;
                }
                var result = createWrapper(func, flag, undefined, undefined, undefined, undefined, undefined, arity);
                result.placeholder = curryFunc.placeholder;
                return result;
            }
            return curryFunc;
        }

        /**
         * Creates a `_.defaults` or `_.defaultsDeep` function.
         *
         * @private
         * @param {Function} assigner The function to assign values.
         * @param {Function} customizer The function to customize assigned values.
         * @returns {Function} Returns the new defaults function.
         */
        function createDefaults(assigner, customizer) {
            return restParam(function(args) {
                var object = args[0];
                if (object == null) {
                    return object;
                }
                args.push(customizer);
                return assigner.apply(undefined, args);
            });
        }

        /**
         * Creates a `_.max` or `_.min` function.
         *
         * @private
         * @param {Function} comparator The function used to compare values.
         * @param {*} exValue The initial extremum value.
         * @returns {Function} Returns the new extremum function.
         */
        function createExtremum(comparator, exValue) {
            return function(collection, iteratee, thisArg) {
                if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
                    iteratee = undefined;
                }
                iteratee = getCallback(iteratee, thisArg, 3);
                if (iteratee.length == 1) {
                    collection = isArray(collection) ? collection : toIterable(collection);
                    var result = arrayExtremum(collection, iteratee, comparator, exValue);
                    if (!(collection.length && result === exValue)) {
                        return result;
                    }
                }
                return baseExtremum(collection, iteratee, comparator, exValue);
            };
        }

        /**
         * Creates a `_.find` or `_.findLast` function.
         *
         * @private
         * @param {Function} eachFunc The function to iterate over a collection.
         * @param {boolean} [fromRight] Specify iterating from right to left.
         * @returns {Function} Returns the new find function.
         */
        function createFind(eachFunc, fromRight) {
            return function(collection, predicate, thisArg) {
                predicate = getCallback(predicate, thisArg, 3);
                if (isArray(collection)) {
                    var index = baseFindIndex(collection, predicate, fromRight);
                    return index > -1 ? collection[index] : undefined;
                }
                return baseFind(collection, predicate, eachFunc);
            };
        }

        /**
         * Creates a `_.findIndex` or `_.findLastIndex` function.
         *
         * @private
         * @param {boolean} [fromRight] Specify iterating from right to left.
         * @returns {Function} Returns the new find function.
         */
        function createFindIndex(fromRight) {
            return function(array, predicate, thisArg) {
                if (!(array && array.length)) {
                    return -1;
                }
                predicate = getCallback(predicate, thisArg, 3);
                return baseFindIndex(array, predicate, fromRight);
            };
        }

        /**
         * Creates a `_.findKey` or `_.findLastKey` function.
         *
         * @private
         * @param {Function} objectFunc The function to iterate over an object.
         * @returns {Function} Returns the new find function.
         */
        function createFindKey(objectFunc) {
            return function(object, predicate, thisArg) {
                predicate = getCallback(predicate, thisArg, 3);
                return baseFind(object, predicate, objectFunc, true);
            };
        }

        /**
         * Creates a `_.flow` or `_.flowRight` function.
         *
         * @private
         * @param {boolean} [fromRight] Specify iterating from right to left.
         * @returns {Function} Returns the new flow function.
         */
        function createFlow(fromRight) {
            return function() {
                var wrapper,
                    length = arguments.length,
                    index = fromRight ? length : -1,
                    leftIndex = 0,
                    funcs = Array(length);

                while ((fromRight ? index-- : ++index < length)) {
                    var func = funcs[leftIndex++] = arguments[index];
                    if (typeof func != 'function') {
                        throw new TypeError(FUNC_ERROR_TEXT);
                    }
                    if (!wrapper && LodashWrapper.prototype.thru && getFuncName(func) == 'wrapper') {
                        wrapper = new LodashWrapper([], true);
                    }
                }
                index = wrapper ? -1 : length;
                while (++index < length) {
                    func = funcs[index];

                    var funcName = getFuncName(func),
                        data = funcName == 'wrapper' ? getData(func) : undefined;

                    if (data && isLaziable(data[0]) && data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) && !data[4].length && data[9] == 1) {
                        wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
                    } else {
                        wrapper = (func.length == 1 && isLaziable(func)) ? wrapper[funcName]() : wrapper.thru(func);
                    }
                }
                return function() {
                    var args = arguments,
                        value = args[0];

                    if (wrapper && args.length == 1 && isArray(value) && value.length >= LARGE_ARRAY_SIZE) {
                        return wrapper.plant(value).value();
                    }
                    var index = 0,
                        result = length ? funcs[index].apply(this, args) : value;

                    while (++index < length) {
                        result = funcs[index].call(this, result);
                    }
                    return result;
                };
            };
        }

        /**
         * Creates a function for `_.forEach` or `_.forEachRight`.
         *
         * @private
         * @param {Function} arrayFunc The function to iterate over an array.
         * @param {Function} eachFunc The function to iterate over a collection.
         * @returns {Function} Returns the new each function.
         */
        function createForEach(arrayFunc, eachFunc) {
            return function(collection, iteratee, thisArg) {
                return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
                    ? arrayFunc(collection, iteratee)
                    : eachFunc(collection, bindCallback(iteratee, thisArg, 3));
            };
        }

        /**
         * Creates a function for `_.forIn` or `_.forInRight`.
         *
         * @private
         * @param {Function} objectFunc The function to iterate over an object.
         * @returns {Function} Returns the new each function.
         */
        function createForIn(objectFunc) {
            return function(object, iteratee, thisArg) {
                if (typeof iteratee != 'function' || thisArg !== undefined) {
                    iteratee = bindCallback(iteratee, thisArg, 3);
                }
                return objectFunc(object, iteratee, keysIn);
            };
        }

        /**
         * Creates a function for `_.forOwn` or `_.forOwnRight`.
         *
         * @private
         * @param {Function} objectFunc The function to iterate over an object.
         * @returns {Function} Returns the new each function.
         */
        function createForOwn(objectFunc) {
            return function(object, iteratee, thisArg) {
                if (typeof iteratee != 'function' || thisArg !== undefined) {
                    iteratee = bindCallback(iteratee, thisArg, 3);
                }
                return objectFunc(object, iteratee);
            };
        }

        /**
         * Creates a function for `_.mapKeys` or `_.mapValues`.
         *
         * @private
         * @param {boolean} [isMapKeys] Specify mapping keys instead of values.
         * @returns {Function} Returns the new map function.
         */
        function createObjectMapper(isMapKeys) {
            return function(object, iteratee, thisArg) {
                var result = {};
                iteratee = getCallback(iteratee, thisArg, 3);

                baseForOwn(object, function(value, key, object) {
                    var mapped = iteratee(value, key, object);
                    key = isMapKeys ? mapped : key;
                    value = isMapKeys ? value : mapped;
                    result[key] = value;
                });
                return result;
            };
        }

        /**
         * Creates a function for `_.padLeft` or `_.padRight`.
         *
         * @private
         * @param {boolean} [fromRight] Specify padding from the right.
         * @returns {Function} Returns the new pad function.
         */
        function createPadDir(fromRight) {
            return function(string, length, chars) {
                string = baseToString(string);
                return (fromRight ? string : '') + createPadding(string, length, chars) + (fromRight ? '' : string);
            };
        }

        /**
         * Creates a `_.partial` or `_.partialRight` function.
         *
         * @private
         * @param {boolean} flag The partial bit flag.
         * @returns {Function} Returns the new partial function.
         */
        function createPartial(flag) {
            var partialFunc = restParam(function(func, partials) {
                var holders = replaceHolders(partials, partialFunc.placeholder);
                return createWrapper(func, flag, undefined, partials, holders);
            });
            return partialFunc;
        }

        /**
         * Creates a function for `_.reduce` or `_.reduceRight`.
         *
         * @private
         * @param {Function} arrayFunc The function to iterate over an array.
         * @param {Function} eachFunc The function to iterate over a collection.
         * @returns {Function} Returns the new each function.
         */
        function createReduce(arrayFunc, eachFunc) {
            return function(collection, iteratee, accumulator, thisArg) {
                var initFromArray = arguments.length < 3;
                return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
                    ? arrayFunc(collection, iteratee, accumulator, initFromArray)
                    : baseReduce(collection, getCallback(iteratee, thisArg, 4), accumulator, initFromArray, eachFunc);
            };
        }

        /**
         * Creates a function that wraps `func` and invokes it with optional `this`
         * binding of, partial application, and currying.
         *
         * @private
         * @param {Function|string} func The function or method name to reference.
         * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
         * @param {*} [thisArg] The `this` binding of `func`.
         * @param {Array} [partials] The arguments to prepend to those provided to the new function.
         * @param {Array} [holders] The `partials` placeholder indexes.
         * @param {Array} [partialsRight] The arguments to append to those provided to the new function.
         * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
         * @param {Array} [argPos] The argument positions of the new function.
         * @param {number} [ary] The arity cap of `func`.
         * @param {number} [arity] The arity of `func`.
         * @returns {Function} Returns the new wrapped function.
         */
        function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
            var isAry = bitmask & ARY_FLAG,
                isBind = bitmask & BIND_FLAG,
                isBindKey = bitmask & BIND_KEY_FLAG,
                isCurry = bitmask & CURRY_FLAG,
                isCurryBound = bitmask & CURRY_BOUND_FLAG,
                isCurryRight = bitmask & CURRY_RIGHT_FLAG,
                Ctor = isBindKey ? undefined : createCtorWrapper(func);

            function wrapper() {
                // Avoid `arguments` object use disqualifying optimizations by
                // converting it to an array before providing it to other functions.
                var length = arguments.length,
                    index = length,
                    args = Array(length);

                while (index--) {
                    args[index] = arguments[index];
                }
                if (partials) {
                    args = composeArgs(args, partials, holders);
                }
                if (partialsRight) {
                    args = composeArgsRight(args, partialsRight, holdersRight);
                }
                if (isCurry || isCurryRight) {
                    var placeholder = wrapper.placeholder,
                        argsHolders = replaceHolders(args, placeholder);

                    length -= argsHolders.length;
                    if (length < arity) {
                        var newArgPos = argPos ? arrayCopy(argPos) : undefined,
                            newArity = nativeMax(arity - length, 0),
                            newsHolders = isCurry ? argsHolders : undefined,
                            newHoldersRight = isCurry ? undefined : argsHolders,
                            newPartials = isCurry ? args : undefined,
                            newPartialsRight = isCurry ? undefined : args;

                        bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
                        bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);

                        if (!isCurryBound) {
                            bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
                        }
                        var newData = [func, bitmask, thisArg, newPartials, newsHolders, newPartialsRight, newHoldersRight, newArgPos, ary, newArity],
                            result = createHybridWrapper.apply(undefined, newData);

                        if (isLaziable(func)) {
                            setData(result, newData);
                        }
                        result.placeholder = placeholder;
                        return result;
                    }
                }
                var thisBinding = isBind ? thisArg : this,
                    fn = isBindKey ? thisBinding[func] : func;

                if (argPos) {
                    args = reorder(args, argPos);
                }
                if (isAry && ary < args.length) {
                    args.length = ary;
                }
                if (this && this !== root && this instanceof wrapper) {
                    fn = Ctor || createCtorWrapper(func);
                }
                return fn.apply(thisBinding, args);
            }
            return wrapper;
        }

        /**
         * Creates the padding required for `string` based on the given `length`.
         * The `chars` string is truncated if the number of characters exceeds `length`.
         *
         * @private
         * @param {string} string The string to create padding for.
         * @param {number} [length=0] The padding length.
         * @param {string} [chars=' '] The string used as padding.
         * @returns {string} Returns the pad for `string`.
         */
        function createPadding(string, length, chars) {
            var strLength = string.length;
            length = +length;

            if (strLength >= length || !nativeIsFinite(length)) {
                return '';
            }
            var padLength = length - strLength;
            chars = chars == null ? ' ' : (chars + '');
            return repeat(chars, nativeCeil(padLength / chars.length)).slice(0, padLength);
        }

        /**
         * Creates a function that wraps `func` and invokes it with the optional `this`
         * binding of `thisArg` and the `partials` prepended to those provided to
         * the wrapper.
         *
         * @private
         * @param {Function} func The function to partially apply arguments to.
         * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
         * @param {*} thisArg The `this` binding of `func`.
         * @param {Array} partials The arguments to prepend to those provided to the new function.
         * @returns {Function} Returns the new bound function.
         */
        function createPartialWrapper(func, bitmask, thisArg, partials) {
            var isBind = bitmask & BIND_FLAG,
                Ctor = createCtorWrapper(func);

            function wrapper() {
                // Avoid `arguments` object use disqualifying optimizations by
                // converting it to an array before providing it `func`.
                var argsIndex = -1,
                    argsLength = arguments.length,
                    leftIndex = -1,
                    leftLength = partials.length,
                    args = Array(leftLength + argsLength);

                while (++leftIndex < leftLength) {
                    args[leftIndex] = partials[leftIndex];
                }
                while (argsLength--) {
                    args[leftIndex++] = arguments[++argsIndex];
                }
                var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
                return fn.apply(isBind ? thisArg : this, args);
            }
            return wrapper;
        }

        /**
         * Creates a `_.ceil`, `_.floor`, or `_.round` function.
         *
         * @private
         * @param {string} methodName The name of the `Math` method to use when rounding.
         * @returns {Function} Returns the new round function.
         */
        function createRound(methodName) {
            var func = Math[methodName];
            return function(number, precision) {
                precision = precision === undefined ? 0 : (+precision || 0);
                if (precision) {
                    precision = pow(10, precision);
                    return func(number * precision) / precision;
                }
                return func(number);
            };
        }

        /**
         * Creates a `_.sortedIndex` or `_.sortedLastIndex` function.
         *
         * @private
         * @param {boolean} [retHighest] Specify returning the highest qualified index.
         * @returns {Function} Returns the new index function.
         */
        function createSortedIndex(retHighest) {
            return function(array, value, iteratee, thisArg) {
                var callback = getCallback(iteratee);
                return (iteratee == null && callback === baseCallback)
                    ? binaryIndex(array, value, retHighest)
                    : binaryIndexBy(array, value, callback(iteratee, thisArg, 1), retHighest);
            };
        }

        /**
         * Creates a function that either curries or invokes `func` with optional
         * `this` binding and partially applied arguments.
         *
         * @private
         * @param {Function|string} func The function or method name to reference.
         * @param {number} bitmask The bitmask of flags.
         *  The bitmask may be composed of the following flags:
         *     1 - `_.bind`
         *     2 - `_.bindKey`
         *     4 - `_.curry` or `_.curryRight` of a bound function
         *     8 - `_.curry`
         *    16 - `_.curryRight`
         *    32 - `_.partial`
         *    64 - `_.partialRight`
         *   128 - `_.rearg`
         *   256 - `_.ary`
         * @param {*} [thisArg] The `this` binding of `func`.
         * @param {Array} [partials] The arguments to be partially applied.
         * @param {Array} [holders] The `partials` placeholder indexes.
         * @param {Array} [argPos] The argument positions of the new function.
         * @param {number} [ary] The arity cap of `func`.
         * @param {number} [arity] The arity of `func`.
         * @returns {Function} Returns the new wrapped function.
         */
        function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
            var isBindKey = bitmask & BIND_KEY_FLAG;
            if (!isBindKey && typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            var length = partials ? partials.length : 0;
            if (!length) {
                bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
                partials = holders = undefined;
            }
            length -= (holders ? holders.length : 0);
            if (bitmask & PARTIAL_RIGHT_FLAG) {
                var partialsRight = partials,
                    holdersRight = holders;

                partials = holders = undefined;
            }
            var data = isBindKey ? undefined : getData(func),
                newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];

            if (data) {
                mergeData(newData, data);
                bitmask = newData[1];
                arity = newData[9];
            }
            newData[9] = arity == null
                ? (isBindKey ? 0 : func.length)
                : (nativeMax(arity - length, 0) || 0);

            if (bitmask == BIND_FLAG) {
                var result = createBindWrapper(newData[0], newData[2]);
            } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !newData[4].length) {
                result = createPartialWrapper.apply(undefined, newData);
            } else {
                result = createHybridWrapper.apply(undefined, newData);
            }
            var setter = data ? baseSetData : setData;
            return setter(result, newData);
        }

        /**
         * A specialized version of `baseIsEqualDeep` for arrays with support for
         * partial deep comparisons.
         *
         * @private
         * @param {Array} array The array to compare.
         * @param {Array} other The other array to compare.
         * @param {Function} equalFunc The function to determine equivalents of values.
         * @param {Function} [customizer] The function to customize comparing arrays.
         * @param {boolean} [isLoose] Specify performing partial comparisons.
         * @param {Array} [stackA] Tracks traversed `value` objects.
         * @param {Array} [stackB] Tracks traversed `other` objects.
         * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
         */
        function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
            var index = -1,
                arrLength = array.length,
                othLength = other.length;

            if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
                return false;
            }
            // Ignore non-index properties.
            while (++index < arrLength) {
                var arrValue = array[index],
                    othValue = other[index],
                    result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;

                if (result !== undefined) {
                    if (result) {
                        continue;
                    }
                    return false;
                }
                // Recursively compare arrays (susceptible to call stack limits).
                if (isLoose) {
                    if (!arraySome(other, function(othValue) {
                            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
                        })) {
                        return false;
                    }
                } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
                    return false;
                }
            }
            return true;
        }

        /**
         * A specialized version of `baseIsEqualDeep` for comparing objects of
         * the same `toStringTag`.
         *
         * **Note:** This function only supports comparing values with tags of
         * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
         *
         * @private
         * @param {Object} object The object to compare.
         * @param {Object} other The other object to compare.
         * @param {string} tag The `toStringTag` of the objects to compare.
         * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
         */
        function equalByTag(object, other, tag) {
            switch (tag) {
                case boolTag:
                case dateTag:
                    // Coerce dates and booleans to numbers, dates to milliseconds and booleans
                    // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
                    return +object == +other;

                case errorTag:
                    return object.name == other.name && object.message == other.message;

                case numberTag:
                    // Treat `NaN` vs. `NaN` as equal.
                    return (object != +object)
                        ? other != +other
                        : object == +other;

                case regexpTag:
                case stringTag:
                    // Coerce regexes to strings and treat strings primitives and string
                    // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
                    return object == (other + '');
            }
            return false;
        }

        /**
         * A specialized version of `baseIsEqualDeep` for objects with support for
         * partial deep comparisons.
         *
         * @private
         * @param {Object} object The object to compare.
         * @param {Object} other The other object to compare.
         * @param {Function} equalFunc The function to determine equivalents of values.
         * @param {Function} [customizer] The function to customize comparing values.
         * @param {boolean} [isLoose] Specify performing partial comparisons.
         * @param {Array} [stackA] Tracks traversed `value` objects.
         * @param {Array} [stackB] Tracks traversed `other` objects.
         * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
         */
        function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
            var objProps = keys(object),
                objLength = objProps.length,
                othProps = keys(other),
                othLength = othProps.length;

            if (objLength != othLength && !isLoose) {
                return false;
            }
            var index = objLength;
            while (index--) {
                var key = objProps[index];
                if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
                    return false;
                }
            }
            var skipCtor = isLoose;
            while (++index < objLength) {
                key = objProps[index];
                var objValue = object[key],
                    othValue = other[key],
                    result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;

                // Recursively compare objects (susceptible to call stack limits).
                if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
                    return false;
                }
                skipCtor || (skipCtor = key == 'constructor');
            }
            if (!skipCtor) {
                var objCtor = object.constructor,
                    othCtor = other.constructor;

                // Non `Object` object instances with different constructors are not equal.
                if (objCtor != othCtor &&
                    ('constructor' in object && 'constructor' in other) &&
                    !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
                    typeof othCtor == 'function' && othCtor instanceof othCtor)) {
                    return false;
                }
            }
            return true;
        }

        /**
         * Gets the appropriate "callback" function. If the `_.callback` method is
         * customized this function returns the custom method, otherwise it returns
         * the `baseCallback` function. If arguments are provided the chosen function
         * is invoked with them and its result is returned.
         *
         * @private
         * @returns {Function} Returns the chosen function or its result.
         */
        function getCallback(func, thisArg, argCount) {
            var result = lodash.callback || callback;
            result = result === callback ? baseCallback : result;
            return argCount ? result(func, thisArg, argCount) : result;
        }

        /**
         * Gets metadata for `func`.
         *
         * @private
         * @param {Function} func The function to query.
         * @returns {*} Returns the metadata for `func`.
         */
        var getData = !metaMap ? noop : function(func) {
            return metaMap.get(func);
        };

        /**
         * Gets the name of `func`.
         *
         * @private
         * @param {Function} func The function to query.
         * @returns {string} Returns the function name.
         */
        function getFuncName(func) {
            var result = func.name,
                array = realNames[result],
                length = array ? array.length : 0;

            while (length--) {
                var data = array[length],
                    otherFunc = data.func;
                if (otherFunc == null || otherFunc == func) {
                    return data.name;
                }
            }
            return result;
        }

        /**
         * Gets the appropriate "indexOf" function. If the `_.indexOf` method is
         * customized this function returns the custom method, otherwise it returns
         * the `baseIndexOf` function. If arguments are provided the chosen function
         * is invoked with them and its result is returned.
         *
         * @private
         * @returns {Function|number} Returns the chosen function or its result.
         */
        function getIndexOf(collection, target, fromIndex) {
            var result = lodash.indexOf || indexOf;
            result = result === indexOf ? baseIndexOf : result;
            return collection ? result(collection, target, fromIndex) : result;
        }

        /**
         * Gets the "length" property value of `object`.
         *
         * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
         * that affects Safari on at least iOS 8.1-8.3 ARM64.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {*} Returns the "length" value.
         */
        var getLength = baseProperty('length');

        /**
         * Gets the propery names, values, and compare flags of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the match data of `object`.
         */
        function getMatchData(object) {
            var result = pairs(object),
                length = result.length;

            while (length--) {
                result[length][2] = isStrictComparable(result[length][1]);
            }
            return result;
        }

        /**
         * Gets the native function at `key` of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {string} key The key of the method to get.
         * @returns {*} Returns the function if it's native, else `undefined`.
         */
        function getNative(object, key) {
            var value = object == null ? undefined : object[key];
            return isNative(value) ? value : undefined;
        }

        /**
         * Gets the view, applying any `transforms` to the `start` and `end` positions.
         *
         * @private
         * @param {number} start The start of the view.
         * @param {number} end The end of the view.
         * @param {Array} transforms The transformations to apply to the view.
         * @returns {Object} Returns an object containing the `start` and `end`
         *  positions of the view.
         */
        function getView(start, end, transforms) {
            var index = -1,
                length = transforms.length;

            while (++index < length) {
                var data = transforms[index],
                    size = data.size;

                switch (data.type) {
                    case 'drop':      start += size; break;
                    case 'dropRight': end -= size; break;
                    case 'take':      end = nativeMin(end, start + size); break;
                    case 'takeRight': start = nativeMax(start, end - size); break;
                }
            }
            return { 'start': start, 'end': end };
        }

        /**
         * Initializes an array clone.
         *
         * @private
         * @param {Array} array The array to clone.
         * @returns {Array} Returns the initialized clone.
         */
        function initCloneArray(array) {
            var length = array.length,
                result = new array.constructor(length);

            // Add array properties assigned by `RegExp#exec`.
            if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
                result.index = array.index;
                result.input = array.input;
            }
            return result;
        }

        /**
         * Initializes an object clone.
         *
         * @private
         * @param {Object} object The object to clone.
         * @returns {Object} Returns the initialized clone.
         */
        function initCloneObject(object) {
            var Ctor = object.constructor;
            if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
                Ctor = Object;
            }
            return new Ctor;
        }

        /**
         * Initializes an object clone based on its `toStringTag`.
         *
         * **Note:** This function only supports cloning values with tags of
         * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
         *
         * @private
         * @param {Object} object The object to clone.
         * @param {string} tag The `toStringTag` of the object to clone.
         * @param {boolean} [isDeep] Specify a deep clone.
         * @returns {Object} Returns the initialized clone.
         */
        function initCloneByTag(object, tag, isDeep) {
            var Ctor = object.constructor;
            switch (tag) {
                case arrayBufferTag:
                    return bufferClone(object);

                case boolTag:
                case dateTag:
                    return new Ctor(+object);

                case float32Tag: case float64Tag:
                case int8Tag: case int16Tag: case int32Tag:
                case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
                var buffer = object.buffer;
                return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);

                case numberTag:
                case stringTag:
                    return new Ctor(object);

                case regexpTag:
                    var result = new Ctor(object.source, reFlags.exec(object));
                    result.lastIndex = object.lastIndex;
            }
            return result;
        }

        /**
         * Invokes the method at `path` on `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {Array|string} path The path of the method to invoke.
         * @param {Array} args The arguments to invoke the method with.
         * @returns {*} Returns the result of the invoked method.
         */
        function invokePath(object, path, args) {
            if (object != null && !isKey(path, object)) {
                path = toPath(path);
                object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
                path = last(path);
            }
            var func = object == null ? object : object[path];
            return func == null ? undefined : func.apply(object, args);
        }

        /**
         * Checks if `value` is array-like.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
         */
        function isArrayLike(value) {
            return value != null && isLength(getLength(value));
        }

        /**
         * Checks if `value` is a valid array-like index.
         *
         * @private
         * @param {*} value The value to check.
         * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
         * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
         */
        function isIndex(value, length) {
            value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
            length = length == null ? MAX_SAFE_INTEGER : length;
            return value > -1 && value % 1 == 0 && value < length;
        }

        /**
         * Checks if the provided arguments are from an iteratee call.
         *
         * @private
         * @param {*} value The potential iteratee value argument.
         * @param {*} index The potential iteratee index or key argument.
         * @param {*} object The potential iteratee object argument.
         * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
         */
        function isIterateeCall(value, index, object) {
            if (!isObject(object)) {
                return false;
            }
            var type = typeof index;
            if (type == 'number'
                    ? (isArrayLike(object) && isIndex(index, object.length))
                    : (type == 'string' && index in object)) {
                var other = object[index];
                return value === value ? (value === other) : (other !== other);
            }
            return false;
        }

        /**
         * Checks if `value` is a property name and not a property path.
         *
         * @private
         * @param {*} value The value to check.
         * @param {Object} [object] The object to query keys on.
         * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
         */
        function isKey(value, object) {
            var type = typeof value;
            if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
                return true;
            }
            if (isArray(value)) {
                return false;
            }
            var result = !reIsDeepProp.test(value);
            return result || (object != null && value in toObject(object));
        }

        /**
         * Checks if `func` has a lazy counterpart.
         *
         * @private
         * @param {Function} func The function to check.
         * @returns {boolean} Returns `true` if `func` has a lazy counterpart, else `false`.
         */
        function isLaziable(func) {
            var funcName = getFuncName(func);
            if (!(funcName in LazyWrapper.prototype)) {
                return false;
            }
            var other = lodash[funcName];
            if (func === other) {
                return true;
            }
            var data = getData(other);
            return !!data && func === data[0];
        }

        /**
         * Checks if `value` is a valid array-like length.
         *
         * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
         */
        function isLength(value) {
            return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }

        /**
         * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` if suitable for strict
         *  equality comparisons, else `false`.
         */
        function isStrictComparable(value) {
            return value === value && !isObject(value);
        }

        /**
         * Merges the function metadata of `source` into `data`.
         *
         * Merging metadata reduces the number of wrappers required to invoke a function.
         * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
         * may be applied regardless of execution order. Methods like `_.ary` and `_.rearg`
         * augment function arguments, making the order in which they are executed important,
         * preventing the merging of metadata. However, we make an exception for a safe
         * common case where curried functions have `_.ary` and or `_.rearg` applied.
         *
         * @private
         * @param {Array} data The destination metadata.
         * @param {Array} source The source metadata.
         * @returns {Array} Returns `data`.
         */
        function mergeData(data, source) {
            var bitmask = data[1],
                srcBitmask = source[1],
                newBitmask = bitmask | srcBitmask,
                isCommon = newBitmask < ARY_FLAG;

            var isCombo =
                (srcBitmask == ARY_FLAG && bitmask == CURRY_FLAG) ||
                (srcBitmask == ARY_FLAG && bitmask == REARG_FLAG && data[7].length <= source[8]) ||
                (srcBitmask == (ARY_FLAG | REARG_FLAG) && bitmask == CURRY_FLAG);

            // Exit early if metadata can't be merged.
            if (!(isCommon || isCombo)) {
                return data;
            }
            // Use source `thisArg` if available.
            if (srcBitmask & BIND_FLAG) {
                data[2] = source[2];
                // Set when currying a bound function.
                newBitmask |= (bitmask & BIND_FLAG) ? 0 : CURRY_BOUND_FLAG;
            }
            // Compose partial arguments.
            var value = source[3];
            if (value) {
                var partials = data[3];
                data[3] = partials ? composeArgs(partials, value, source[4]) : arrayCopy(value);
                data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : arrayCopy(source[4]);
            }
            // Compose partial right arguments.
            value = source[5];
            if (value) {
                partials = data[5];
                data[5] = partials ? composeArgsRight(partials, value, source[6]) : arrayCopy(value);
                data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : arrayCopy(source[6]);
            }
            // Use source `argPos` if available.
            value = source[7];
            if (value) {
                data[7] = arrayCopy(value);
            }
            // Use source `ary` if it's smaller.
            if (srcBitmask & ARY_FLAG) {
                data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
            }
            // Use source `arity` if one is not provided.
            if (data[9] == null) {
                data[9] = source[9];
            }
            // Use source `func` and merge bitmasks.
            data[0] = source[0];
            data[1] = newBitmask;

            return data;
        }

        /**
         * Used by `_.defaultsDeep` to customize its `_.merge` use.
         *
         * @private
         * @param {*} objectValue The destination object property value.
         * @param {*} sourceValue The source object property value.
         * @returns {*} Returns the value to assign to the destination object.
         */
        function mergeDefaults(objectValue, sourceValue) {
            return objectValue === undefined ? sourceValue : merge(objectValue, sourceValue, mergeDefaults);
        }

        /**
         * A specialized version of `_.pick` which picks `object` properties specified
         * by `props`.
         *
         * @private
         * @param {Object} object The source object.
         * @param {string[]} props The property names to pick.
         * @returns {Object} Returns the new object.
         */
        function pickByArray(object, props) {
            object = toObject(object);

            var index = -1,
                length = props.length,
                result = {};

            while (++index < length) {
                var key = props[index];
                if (key in object) {
                    result[key] = object[key];
                }
            }
            return result;
        }

        /**
         * A specialized version of `_.pick` which picks `object` properties `predicate`
         * returns truthy for.
         *
         * @private
         * @param {Object} object The source object.
         * @param {Function} predicate The function invoked per iteration.
         * @returns {Object} Returns the new object.
         */
        function pickByCallback(object, predicate) {
            var result = {};
            baseForIn(object, function(value, key, object) {
                if (predicate(value, key, object)) {
                    result[key] = value;
                }
            });
            return result;
        }

        /**
         * Reorder `array` according to the specified indexes where the element at
         * the first index is assigned as the first element, the element at
         * the second index is assigned as the second element, and so on.
         *
         * @private
         * @param {Array} array The array to reorder.
         * @param {Array} indexes The arranged array indexes.
         * @returns {Array} Returns `array`.
         */
        function reorder(array, indexes) {
            var arrLength = array.length,
                length = nativeMin(indexes.length, arrLength),
                oldArray = arrayCopy(array);

            while (length--) {
                var index = indexes[length];
                array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
            }
            return array;
        }

        /**
         * Sets metadata for `func`.
         *
         * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
         * period of time, it will trip its breaker and transition to an identity function
         * to avoid garbage collection pauses in V8. See [V8 issue 2070](https://code.google.com/p/v8/issues/detail?id=2070)
         * for more details.
         *
         * @private
         * @param {Function} func The function to associate metadata with.
         * @param {*} data The metadata.
         * @returns {Function} Returns `func`.
         */
        var setData = (function() {
            var count = 0,
                lastCalled = 0;

            return function(key, value) {
                var stamp = now(),
                    remaining = HOT_SPAN - (stamp - lastCalled);

                lastCalled = stamp;
                if (remaining > 0) {
                    if (++count >= HOT_COUNT) {
                        return key;
                    }
                } else {
                    count = 0;
                }
                return baseSetData(key, value);
            };
        }());

        /**
         * A fallback implementation of `Object.keys` which creates an array of the
         * own enumerable property names of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names.
         */
        function shimKeys(object) {
            var props = keysIn(object),
                propsLength = props.length,
                length = propsLength && object.length;

            var allowIndexes = !!length && isLength(length) &&
                (isArray(object) || isArguments(object));

            var index = -1,
                result = [];

            while (++index < propsLength) {
                var key = props[index];
                if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
                    result.push(key);
                }
            }
            return result;
        }

        /**
         * Converts `value` to an array-like object if it's not one.
         *
         * @private
         * @param {*} value The value to process.
         * @returns {Array|Object} Returns the array-like object.
         */
        function toIterable(value) {
            if (value == null) {
                return [];
            }
            if (!isArrayLike(value)) {
                return values(value);
            }
            return isObject(value) ? value : Object(value);
        }

        /**
         * Converts `value` to an object if it's not one.
         *
         * @private
         * @param {*} value The value to process.
         * @returns {Object} Returns the object.
         */
        function toObject(value) {
            return isObject(value) ? value : Object(value);
        }

        /**
         * Converts `value` to property path array if it's not one.
         *
         * @private
         * @param {*} value The value to process.
         * @returns {Array} Returns the property path array.
         */
        function toPath(value) {
            if (isArray(value)) {
                return value;
            }
            var result = [];
            baseToString(value).replace(rePropName, function(match, number, quote, string) {
                result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
            });
            return result;
        }

        /**
         * Creates a clone of `wrapper`.
         *
         * @private
         * @param {Object} wrapper The wrapper to clone.
         * @returns {Object} Returns the cloned wrapper.
         */
        function wrapperClone(wrapper) {
            return wrapper instanceof LazyWrapper
                ? wrapper.clone()
                : new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__, arrayCopy(wrapper.__actions__));
        }

        /*------------------------------------------------------------------------*/

        /**
         * Creates an array of elements split into groups the length of `size`.
         * If `collection` can't be split evenly, the final chunk will be the remaining
         * elements.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to process.
         * @param {number} [size=1] The length of each chunk.
         * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
         * @returns {Array} Returns the new array containing chunks.
         * @example
         *
         * _.chunk(['a', 'b', 'c', 'd'], 2);
         * // => [['a', 'b'], ['c', 'd']]
         *
         * _.chunk(['a', 'b', 'c', 'd'], 3);
         * // => [['a', 'b', 'c'], ['d']]
         */
        function chunk(array, size, guard) {
            if (guard ? isIterateeCall(array, size, guard) : size == null) {
                size = 1;
            } else {
                size = nativeMax(nativeFloor(size) || 1, 1);
            }
            var index = 0,
                length = array ? array.length : 0,
                resIndex = -1,
                result = Array(nativeCeil(length / size));

            while (index < length) {
                result[++resIndex] = baseSlice(array, index, (index += size));
            }
            return result;
        }

        /**
         * Creates an array with all falsey values removed. The values `false`, `null`,
         * `0`, `""`, `undefined`, and `NaN` are falsey.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to compact.
         * @returns {Array} Returns the new array of filtered values.
         * @example
         *
         * _.compact([0, 1, false, 2, '', 3]);
         * // => [1, 2, 3]
         */
        function compact(array) {
            var index = -1,
                length = array ? array.length : 0,
                resIndex = -1,
                result = [];

            while (++index < length) {
                var value = array[index];
                if (value) {
                    result[++resIndex] = value;
                }
            }
            return result;
        }

        /**
         * Creates an array of unique `array` values not included in the other
         * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to inspect.
         * @param {...Array} [values] The arrays of values to exclude.
         * @returns {Array} Returns the new array of filtered values.
         * @example
         *
         * _.difference([1, 2, 3], [4, 2]);
         * // => [1, 3]
         */
        var difference = restParam(function(array, values) {
            return (isObjectLike(array) && isArrayLike(array))
                ? baseDifference(array, baseFlatten(values, false, true))
                : [];
        });

        /**
         * Creates a slice of `array` with `n` elements dropped from the beginning.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to query.
         * @param {number} [n=1] The number of elements to drop.
         * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
         * @returns {Array} Returns the slice of `array`.
         * @example
         *
         * _.drop([1, 2, 3]);
         * // => [2, 3]
         *
         * _.drop([1, 2, 3], 2);
         * // => [3]
         *
         * _.drop([1, 2, 3], 5);
         * // => []
         *
         * _.drop([1, 2, 3], 0);
         * // => [1, 2, 3]
         */
        function drop(array, n, guard) {
            var length = array ? array.length : 0;
            if (!length) {
                return [];
            }
            if (guard ? isIterateeCall(array, n, guard) : n == null) {
                n = 1;
            }
            return baseSlice(array, n < 0 ? 0 : n);
        }

        /**
         * Creates a slice of `array` with `n` elements dropped from the end.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to query.
         * @param {number} [n=1] The number of elements to drop.
         * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
         * @returns {Array} Returns the slice of `array`.
         * @example
         *
         * _.dropRight([1, 2, 3]);
         * // => [1, 2]
         *
         * _.dropRight([1, 2, 3], 2);
         * // => [1]
         *
         * _.dropRight([1, 2, 3], 5);
         * // => []
         *
         * _.dropRight([1, 2, 3], 0);
         * // => [1, 2, 3]
         */
        function dropRight(array, n, guard) {
            var length = array ? array.length : 0;
            if (!length) {
                return [];
            }
            if (guard ? isIterateeCall(array, n, guard) : n == null) {
                n = 1;
            }
            n = length - (+n || 0);
            return baseSlice(array, 0, n < 0 ? 0 : n);
        }

        /**
         * Creates a slice of `array` excluding elements dropped from the end.
         * Elements are dropped until `predicate` returns falsey. The predicate is
         * bound to `thisArg` and invoked with three arguments: (value, index, array).
         *
         * If a property name is provided for `predicate` the created `_.property`
         * style callback returns the property value of the given element.
         *
         * If a value is also provided for `thisArg` the created `_.matchesProperty`
         * style callback returns `true` for elements that have a matching property
         * value, else `false`.
         *
         * If an object is provided for `predicate` the created `_.matches` style
         * callback returns `true` for elements that match the properties of the given
         * object, else `false`.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to query.
         * @param {Function|Object|string} [predicate=_.identity] The function invoked
         *  per iteration.
         * @param {*} [thisArg] The `this` binding of `predicate`.
         * @returns {Array} Returns the slice of `array`.
         * @example
         *
         * _.dropRightWhile([1, 2, 3], function(n) {
     *   return n > 1;
     * });
         * // => [1]
         *
         * var users = [
         *   { 'user': 'barney',  'active': true },
         *   { 'user': 'fred',    'active': false },
         *   { 'user': 'pebbles', 'active': false }
         * ];
         *
         * // using the `_.matches` callback shorthand
         * _.pluck(_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
         * // => ['barney', 'fred']
         *
         * // using the `_.matchesProperty` callback shorthand
         * _.pluck(_.dropRightWhile(users, 'active', false), 'user');
         * // => ['barney']
         *
         * // using the `_.property` callback shorthand
         * _.pluck(_.dropRightWhile(users, 'active'), 'user');
         * // => ['barney', 'fred', 'pebbles']
         */
        function dropRightWhile(array, predicate, thisArg) {
            return (array && array.length)
                ? baseWhile(array, getCallback(predicate, thisArg, 3), true, true)
                : [];
        }

        /**
         * Creates a slice of `array` excluding elements dropped from the beginning.
         * Elements are dropped until `predicate` returns falsey. The predicate is
         * bound to `thisArg` and invoked with three arguments: (value, index, array).
         *
         * If a property name is provided for `predicate` the created `_.property`
         * style callback returns the property value of the given element.
         *
         * If a value is also provided for `thisArg` the created `_.matchesProperty`
         * style callback returns `true` for elements that have a matching property
         * value, else `false`.
         *
         * If an object is provided for `predicate` the created `_.matches` style
         * callback returns `true` for elements that have the properties of the given
         * object, else `false`.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to query.
         * @param {Function|Object|string} [predicate=_.identity] The function invoked
         *  per iteration.
         * @param {*} [thisArg] The `this` binding of `predicate`.
         * @returns {Array} Returns the slice of `array`.
         * @example
         *
         * _.dropWhile([1, 2, 3], function(n) {
     *   return n < 3;
     * });
         * // => [3]
         *
         * var users = [
         *   { 'user': 'barney',  'active': false },
         *   { 'user': 'fred',    'active': false },
         *   { 'user': 'pebbles', 'active': true }
         * ];
         *
         * // using the `_.matches` callback shorthand
         * _.pluck(_.dropWhile(users, { 'user': 'barney', 'active': false }), 'user');
         * // => ['fred', 'pebbles']
         *
         * // using the `_.matchesProperty` callback shorthand
         * _.pluck(_.dropWhile(users, 'active', false), 'user');
         * // => ['pebbles']
         *
         * // using the `_.property` callback shorthand
         * _.pluck(_.dropWhile(users, 'active'), 'user');
         * // => ['barney', 'fred', 'pebbles']
         */
        function dropWhile(array, predicate, thisArg) {
            return (array && array.length)
                ? baseWhile(array, getCallback(predicate, thisArg, 3), true)
                : [];
        }

        /**
         * Fills elements of `array` with `value` from `start` up to, but not
         * including, `end`.
         *
         * **Note:** This method mutates `array`.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to fill.
         * @param {*} value The value to fill `array` with.
         * @param {number} [start=0] The start position.
         * @param {number} [end=array.length] The end position.
         * @returns {Array} Returns `array`.
         * @example
         *
         * var array = [1, 2, 3];
         *
         * _.fill(array, 'a');
         * console.log(array);
         * // => ['a', 'a', 'a']
         *
         * _.fill(Array(3), 2);
         * // => [2, 2, 2]
         *
         * _.fill([4, 6, 8], '*', 1, 2);
         * // => [4, '*', 8]
         */
        function fill(array, value, start, end) {
            var length = array ? array.length : 0;
            if (!length) {
                return [];
            }
            if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
                start = 0;
                end = length;
            }
            return baseFill(array, value, start, end);
        }

        /**
         * This method is like `_.find` except that it returns the index of the first
         * element `predicate` returns truthy for instead of the element itself.
         *
         * If a property name is provided for `predicate` the created `_.property`
         * style callback returns the property value of the given element.
         *
         * If a value is also provided for `thisArg` the created `_.matchesProperty`
         * style callback returns `true` for elements that have a matching property
         * value, else `false`.
         *
         * If an object is provided for `predicate` the created `_.matches` style
         * callback returns `true` for elements that have the properties of the given
         * object, else `false`.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to search.
         * @param {Function|Object|string} [predicate=_.identity] The function invoked
         *  per iteration.
         * @param {*} [thisArg] The `this` binding of `predicate`.
         * @returns {number} Returns the index of the found element, else `-1`.
         * @example
         *
         * var users = [
         *   { 'user': 'barney',  'active': false },
         *   { 'user': 'fred',    'active': false },
         *   { 'user': 'pebbles', 'active': true }
         * ];
         *
         * _.findIndex(users, function(chr) {
     *   return chr.user == 'barney';
     * });
         * // => 0
         *
         * // using the `_.matches` callback shorthand
         * _.findIndex(users, { 'user': 'fred', 'active': false });
         * // => 1
         *
         * // using the `_.matchesProperty` callback shorthand
         * _.findIndex(users, 'active', false);
         * // => 0
         *
         * // using the `_.property` callback shorthand
         * _.findIndex(users, 'active');
         * // => 2
         */
        var findIndex = createFindIndex();

        /**
         * This method is like `_.findIndex` except that it iterates over elements
         * of `collection` from right to left.
         *
         * If a property name is provided for `predicate` the created `_.property`
         * style callback returns the property value of the given element.
         *
         * If a value is also provided for `thisArg` the created `_.matchesProperty`
         * style callback returns `true` for elements that have a matching property
         * value, else `false`.
         *
         * If an object is provided for `predicate` the created `_.matches` style
         * callback returns `true` for elements that have the properties of the given
         * object, else `false`.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to search.
         * @param {Function|Object|string} [predicate=_.identity] The function invoked
         *  per iteration.
         * @param {*} [thisArg] The `this` binding of `predicate`.
         * @returns {number} Returns the index of the found element, else `-1`.
         * @example
         *
         * var users = [
         *   { 'user': 'barney',  'active': true },
         *   { 'user': 'fred',    'active': false },
         *   { 'user': 'pebbles', 'active': false }
         * ];
         *
         * _.findLastIndex(users, function(chr) {
     *   return chr.user == 'pebbles';
     * });
         * // => 2
         *
         * // using the `_.matches` callback shorthand
         * _.findLastIndex(users, { 'user': 'barney', 'active': true });
         * // => 0
         *
         * // using the `_.matchesProperty` callback shorthand
         * _.findLastIndex(users, 'active', false);
         * // => 2
         *
         * // using the `_.property` callback shorthand
         * _.findLastIndex(users, 'active');
         * // => 0
         */
        var findLastIndex = createFindIndex(true);

        /**
         * Gets the first element of `array`.
         *
         * @static
         * @memberOf _
         * @alias head
         * @category Array
         * @param {Array} array The array to query.
         * @returns {*} Returns the first element of `array`.
         * @example
         *
         * _.first([1, 2, 3]);
         * // => 1
         *
         * _.first([]);
         * // => undefined
         */
        function first(array) {
            return array ? array[0] : undefined;
        }

        /**
         * Flattens a nested array. If `isDeep` is `true` the array is recursively
         * flattened, otherwise it is only flattened a single level.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to flatten.
         * @param {boolean} [isDeep] Specify a deep flatten.
         * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
         * @returns {Array} Returns the new flattened array.
         * @example
         *
         * _.flatten([1, [2, 3, [4]]]);
         * // => [1, 2, 3, [4]]
         *
         * // using `isDeep`
         * _.flatten([1, [2, 3, [4]]], true);
         * // => [1, 2, 3, 4]
         */
        function flatten(array, isDeep, guard) {
            var length = array ? array.length : 0;
            if (guard && isIterateeCall(array, isDeep, guard)) {
                isDeep = false;
            }
            return length ? baseFlatten(array, isDeep) : [];
        }

        /**
         * Recursively flattens a nested array.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to recursively flatten.
         * @returns {Array} Returns the new flattened array.
         * @example
         *
         * _.flattenDeep([1, [2, 3, [4]]]);
         * // => [1, 2, 3, 4]
         */
        function flattenDeep(array) {
            var length = array ? array.length : 0;
            return length ? baseFlatten(array, true) : [];
        }

        /**
         * Gets the index at which the first occurrence of `value` is found in `array`
         * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons. If `fromIndex` is negative, it is used as the offset
         * from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
         * performs a faster binary search.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to search.
         * @param {*} value The value to search for.
         * @param {boolean|number} [fromIndex=0] The index to search from or `true`
         *  to perform a binary search on a sorted array.
         * @returns {number} Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.indexOf([1, 2, 1, 2], 2);
         * // => 1
         *
         * // using `fromIndex`
         * _.indexOf([1, 2, 1, 2], 2, 2);
         * // => 3
         *
         * // performing a binary search
         * _.indexOf([1, 1, 2, 2], 2, true);
         * // => 2
         */
        function indexOf(array, value, fromIndex) {
            var length = array ? array.length : 0;
            if (!length) {
                return -1;
            }
            if (typeof fromIndex == 'number') {
                fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : fromIndex;
            } else if (fromIndex) {
                var index = binaryIndex(array, value);
                if (index < length &&
                    (value === value ? (value === array[index]) : (array[index] !== array[index]))) {
                    return index;
                }
                return -1;
            }
            return baseIndexOf(array, value, fromIndex || 0);
        }

        /**
         * Gets all but the last element of `array`.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to query.
         * @returns {Array} Returns the slice of `array`.
         * @example
         *
         * _.initial([1, 2, 3]);
         * // => [1, 2]
         */
        function initial(array) {
            return dropRight(array, 1);
        }

        /**
         * Creates an array of unique values that are included in all of the provided
         * arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {...Array} [arrays] The arrays to inspect.
         * @returns {Array} Returns the new array of shared values.
         * @example
         * _.intersection([1, 2], [4, 2], [2, 1]);
         * // => [2]
         */
        var intersection = restParam(function(arrays) {
            var othLength = arrays.length,
                othIndex = othLength,
                caches = Array(length),
                indexOf = getIndexOf(),
                isCommon = indexOf == baseIndexOf,
                result = [];

            while (othIndex--) {
                var value = arrays[othIndex] = isArrayLike(value = arrays[othIndex]) ? value : [];
                caches[othIndex] = (isCommon && value.length >= 120) ? createCache(othIndex && value) : null;
            }
            var array = arrays[0],
                index = -1,
                length = array ? array.length : 0,
                seen = caches[0];

            outer:
                while (++index < length) {
                    value = array[index];
                    if ((seen ? cacheIndexOf(seen, value) : indexOf(result, value, 0)) < 0) {
                        var othIndex = othLength;
                        while (--othIndex) {
                            var cache = caches[othIndex];
                            if ((cache ? cacheIndexOf(cache, value) : indexOf(arrays[othIndex], value, 0)) < 0) {
                                continue outer;
                            }
                        }
                        if (seen) {
                            seen.push(value);
                        }
                        result.push(value);
                    }
                }
            return result;
        });

        /**
         * Gets the last element of `array`.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to query.
         * @returns {*} Returns the last element of `array`.
         * @example
         *
         * _.last([1, 2, 3]);
         * // => 3
         */
        function last(array) {
            var length = array ? array.length : 0;
            return length ? array[length - 1] : undefined;
        }

        /**
         * This method is like `_.indexOf` except that it iterates over elements of
         * `array` from right to left.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to search.
         * @param {*} value The value to search for.
         * @param {boolean|number} [fromIndex=array.length-1] The index to search from
         *  or `true` to perform a binary search on a sorted array.
         * @returns {number} Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.lastIndexOf([1, 2, 1, 2], 2);
         * // => 3
         *
         * // using `fromIndex`
         * _.lastIndexOf([1, 2, 1, 2], 2, 2);
         * // => 1
         *
         * // performing a binary search
         * _.lastIndexOf([1, 1, 2, 2], 2, true);
         * // => 3
         */
        function lastIndexOf(array, value, fromIndex) {
            var length = array ? array.length : 0;
            if (!length) {
                return -1;
            }
            var index = length;
            if (typeof fromIndex == 'number') {
                index = (fromIndex < 0 ? nativeMax(length + fromIndex, 0) : nativeMin(fromIndex || 0, length - 1)) + 1;
            } else if (fromIndex) {
                index = binaryIndex(array, value, true) - 1;
                var other = array[index];
                if (value === value ? (value === other) : (other !== other)) {
                    return index;
                }
                return -1;
            }
            if (value !== value) {
                return indexOfNaN(array, index, true);
            }
            while (index--) {
                if (array[index] === value) {
                    return index;
                }
            }
            return -1;
        }

        /**
         * Removes all provided values from `array` using
         * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons.
         *
         * **Note:** Unlike `_.without`, this method mutates `array`.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to modify.
         * @param {...*} [values] The values to remove.
         * @returns {Array} Returns `array`.
         * @example
         *
         * var array = [1, 2, 3, 1, 2, 3];
         *
         * _.pull(array, 2, 3);
         * console.log(array);
         * // => [1, 1]
         */
        function pull() {
            var args = arguments,
                array = args[0];

            if (!(array && array.length)) {
                return array;
            }
            var index = 0,
                indexOf = getIndexOf(),
                length = args.length;

            while (++index < length) {
                var fromIndex = 0,
                    value = args[index];

                while ((fromIndex = indexOf(array, value, fromIndex)) > -1) {
                    splice.call(array, fromIndex, 1);
                }
            }
            return array;
        }

        /**
         * Removes elements from `array` corresponding to the given indexes and returns
         * an array of the removed elements. Indexes may be specified as an array of
         * indexes or as individual arguments.
         *
         * **Note:** Unlike `_.at`, this method mutates `array`.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to modify.
         * @param {...(number|number[])} [indexes] The indexes of elements to remove,
         *  specified as individual indexes or arrays of indexes.
         * @returns {Array} Returns the new array of removed elements.
         * @example
         *
         * var array = [5, 10, 15, 20];
         * var evens = _.pullAt(array, 1, 3);
         *
         * console.log(array);
         * // => [5, 15]
         *
         * console.log(evens);
         * // => [10, 20]
         */
        var pullAt = restParam(function(array, indexes) {
            indexes = baseFlatten(indexes);

            var result = baseAt(array, indexes);
            basePullAt(array, indexes.sort(baseCompareAscending));
            return result;
        });

        /**
         * Removes all elements from `array` that `predicate` returns truthy for
         * and returns an array of the removed elements. The predicate is bound to
         * `thisArg` and invoked with three arguments: (value, index, array).
         *
         * If a property name is provided for `predicate` the created `_.property`
         * style callback returns the property value of the given element.
         *
         * If a value is also provided for `thisArg` the created `_.matchesProperty`
         * style callback returns `true` for elements that have a matching property
         * value, else `false`.
         *
         * If an object is provided for `predicate` the created `_.matches` style
         * callback returns `true` for elements that have the properties of the given
         * object, else `false`.
         *
         * **Note:** Unlike `_.filter`, this method mutates `array`.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to modify.
         * @param {Function|Object|string} [predicate=_.identity] The function invoked
         *  per iteration.
         * @param {*} [thisArg] The `this` binding of `predicate`.
         * @returns {Array} Returns the new array of removed elements.
         * @example
         *
         * var array = [1, 2, 3, 4];
         * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
         *
         * console.log(array);
         * // => [1, 3]
         *
         * console.log(evens);
         * // => [2, 4]
         */
        function remove(array, predicate, thisArg) {
            var result = [];
            if (!(array && array.length)) {
                return result;
            }
            var index = -1,
                indexes = [],
                length = array.length;

            predicate = getCallback(predicate, thisArg, 3);
            while (++index < length) {
                var value = array[index];
                if (predicate(value, index, array)) {
                    result.push(value);
                    indexes.push(index);
                }
            }
            basePullAt(array, indexes);
            return result;
        }

        /**
         * Gets all but the first element of `array`.
         *
         * @static
         * @memberOf _
         * @alias tail
         * @category Array
         * @param {Array} array The array to query.
         * @returns {Array} Returns the slice of `array`.
         * @example
         *
         * _.rest([1, 2, 3]);
         * // => [2, 3]
         */
        function rest(array) {
            return drop(array, 1);
        }

        /**
         * Creates a slice of `array` from `start` up to, but not including, `end`.
         *
         * **Note:** This method is used instead of `Array#slice` to support node
         * lists in IE < 9 and to ensure dense arrays are returned.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to slice.
         * @param {number} [start=0] The start position.
         * @param {number} [end=array.length] The end position.
         * @returns {Array} Returns the slice of `array`.
         */
        function slice(array, start, end) {
            var length = array ? array.length : 0;
            if (!length) {
                return [];
            }
            if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
                start = 0;
                end = length;
            }
            return baseSlice(array, start, end);
        }

        /**
         * Uses a binary search to determine the lowest index at which `value` should
         * be inserted into `array` in order to maintain its sort order. If an iteratee
         * function is provided it is invoked for `value` and each element of `array`
         * to compute their sort ranking. The iteratee is bound to `thisArg` and
         * invoked with one argument; (value).
         *
         * If a property name is provided for `iteratee` the created `_.property`
         * style callback returns the property value of the given element.
         *
         * If a value is also provided for `thisArg` the created `_.matchesProperty`
         * style callback returns `true` for elements that have a matching property
         * value, else `false`.
         *
         * If an object is provided for `iteratee` the created `_.matches` style
         * callback returns `true` for elements that have the properties of the given
         * object, else `false`.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The sorted array to inspect.
         * @param {*} value The value to evaluate.
         * @param {Function|Object|string} [iteratee=_.identity] The function invoked
         *  per iteration.
         * @param {*} [thisArg] The `this` binding of `iteratee`.
         * @returns {number} Returns the index at which `value` should be inserted
         *  into `array`.
         * @example
         *
         * _.sortedIndex([30, 50], 40);
         * // => 1
         *
         * _.sortedIndex([4, 4, 5, 5], 5);
         * // => 2
         *
         * var dict = { 'data': { 'thirty': 30, 'forty': 40, 'fifty': 50 } };
         *
         * // using an iteratee function
         * _.sortedIndex(['thirty', 'fifty'], 'forty', function(word) {
     *   return this.data[word];
     * }, dict);
         * // => 1
         *
         * // using the `_.property` callback shorthand
         * _.sortedIndex([{ 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
         * // => 1
         */
        var sortedIndex = createSortedIndex();

        /**
         * This method is like `_.sortedIndex` except that it returns the highest
         * index at which `value` should be inserted into `array` in order to
         * maintain its sort order.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The sorted array to inspect.
         * @param {*} value The value to evaluate.
         * @param {Function|Object|string} [iteratee=_.identity] The function invoked
         *  per iteration.
         * @param {*} [thisArg] The `this` binding of `iteratee`.
         * @returns {number} Returns the index at which `value` should be inserted
         *  into `array`.
         * @example
         *
         * _.sortedLastIndex([4, 4, 5, 5], 5);
         * // => 4
         */
        var sortedLastIndex = createSortedIndex(true);

        /**
         * Creates a slice of `array` with `n` elements taken from the beginning.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to query.
         * @param {number} [n=1] The number of elements to take.
         * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
         * @returns {Array} Returns the slice of `array`.
         * @example
         *
         * _.take([1, 2, 3]);
         * // => [1]
         *
         * _.take([1, 2, 3], 2);
         * // => [1, 2]
         *
         * _.take([1, 2, 3], 5);
         * // => [1, 2, 3]
         *
         * _.take([1, 2, 3], 0);
         * // => []
         */
        function take(array, n, guard) {
            var length = array ? array.length : 0;
            if (!length) {
                return [];
            }
            if (guard ? isIterateeCall(array, n, guard) : n == null) {
                n = 1;
            }
            return baseSlice(array, 0, n < 0 ? 0 : n);
        }

        /**
         * Creates a slice of `array` with `n` elements taken from the end.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to query.
         * @param {number} [n=1] The number of elements to take.
         * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
         * @returns {Array} Returns the slice of `array`.
         * @example
         *
         * _.takeRight([1, 2, 3]);
         * // => [3]
         *
         * _.takeRight([1, 2, 3], 2);
         * // => [2, 3]
         *
         * _.takeRight([1, 2, 3], 5);
         * // => [1, 2, 3]
         *
         * _.takeRight([1, 2, 3], 0);
         * // => []
         */
        function takeRight(array, n, guard) {
            var length = array ? array.length : 0;
            if (!length) {
                return [];
            }
            if (guard ? isIterateeCall(array, n, guard) : n == null) {
                n = 1;
            }
            n = length - (+n || 0);
            return baseSlice(array, n < 0 ? 0 : n);
        }

        /**
         * Creates a slice of `array` with elements taken from the end. Elements are
         * taken until `predicate` returns falsey. The predicate is bound to `thisArg`
         * and invoked with three arguments: (value, index, array).
         *
         * If a property name is provided for `predicate` the created `_.property`
         * style callback returns the property value of the given element.
         *
         * If a value is also provided for `thisArg` the created `_.matchesProperty`
         * style callback returns `true` for elements that have a matching property
         * value, else `false`.
         *
         * If an object is provided for `predicate` the created `_.matches` style
         * callback returns `true` for elements that have the properties of the given
         * object, else `false`.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to query.
         * @param {Function|Object|string} [predicate=_.identity] The function invoked
         *  per iteration.
         * @param {*} [thisArg] The `this` binding of `predicate`.
         * @returns {Array} Returns the slice of `array`.
         * @example
         *
         * _.takeRightWhile([1, 2, 3], function(n) {
     *   return n > 1;
     * });
         * // => [2, 3]
         *
         * var users = [
         *   { 'user': 'barney',  'active': true },
         *   { 'user': 'fred',    'active': false },
         *   { 'user': 'pebbles', 'active': false }
         * ];
         *
         * // using the `_.matches` callback shorthand
         * _.pluck(_.takeRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
         * // => ['pebbles']
         *
         * // using the `_.matchesProperty` callback shorthand
         * _.pluck(_.takeRightWhile(users, 'active', false), 'user');
         * // => ['fred', 'pebbles']
         *
         * // using the `_.property` callback shorthand
         * _.pluck(_.takeRightWhile(users, 'active'), 'user');
         * // => []
         */
        function takeRightWhile(array, predicate, thisArg) {
            return (array && array.length)
                ? baseWhile(array, getCallback(predicate, thisArg, 3), false, true)
                : [];
        }

        /**
         * Creates a slice of `array` with elements taken from the beginning. Elements
         * are taken until `predicate` returns falsey. The predicate is bound to
         * `thisArg` and invoked with three arguments: (value, index, array).
         *
         * If a property name is provided for `predicate` the created `_.property`
         * style callback returns the property value of the given element.
         *
         * If a value is also provided for `thisArg` the created `_.matchesProperty`
         * style callback returns `true` for elements that have a matching property
         * value, else `false`.
         *
         * If an object is provided for `predicate` the created `_.matches` style
         * callback returns `true` for elements that have the properties of the given
         * object, else `false`.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to query.
         * @param {Function|Object|string} [predicate=_.identity] The function invoked
         *  per iteration.
         * @param {*} [thisArg] The `this` binding of `predicate`.
         * @returns {Array} Returns the slice of `array`.
         * @example
         *
         * _.takeWhile([1, 2, 3], function(n) {
     *   return n < 3;
     * });
         * // => [1, 2]
         *
         * var users = [
         *   { 'user': 'barney',  'active': false },
         *   { 'user': 'fred',    'active': false},
         *   { 'user': 'pebbles', 'active': true }
         * ];
         *
         * // using the `_.matches` callback shorthand
         * _.pluck(_.takeWhile(users, { 'user': 'barney', 'active': false }), 'user');
         * // => ['barney']
         *
         * // using the `_.matchesProperty` callback shorthand
         * _.pluck(_.takeWhile(users, 'active', false), 'user');
         * // => ['barney', 'fred']
         *
         * // using the `_.property` callback shorthand
         * _.pluck(_.takeWhile(users, 'active'), 'user');
         * // => []
         */
        function takeWhile(array, predicate, thisArg) {
            return (array && array.length)
                ? baseWhile(array, getCallback(predicate, thisArg, 3))
                : [];
        }

        /**
         * Creates an array of unique values, in order, from all of the provided arrays
         * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {...Array} [arrays] The arrays to inspect.
         * @returns {Array} Returns the new array of combined values.
         * @example
         *
         * _.union([1, 2], [4, 2], [2, 1]);
         * // => [1, 2, 4]
         */
        var union = restParam(function(arrays) {
            return baseUniq(baseFlatten(arrays, false, true));
        });

        /**
         * Creates a duplicate-free version of an array, using
         * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons, in which only the first occurence of each element
         * is kept. Providing `true` for `isSorted` performs a faster search algorithm
         * for sorted arrays. If an iteratee function is provided it is invoked for
         * each element in the array to generate the criterion by which uniqueness
         * is computed. The `iteratee` is bound to `thisArg` and invoked with three
         * arguments: (value, index, array).
         *
         * If a property name is provided for `iteratee` the created `_.property`
         * style callback returns the property value of the given element.
         *
         * If a value is also provided for `thisArg` the created `_.matchesProperty`
         * style callback returns `true` for elements that have a matching property
         * value, else `false`.
         *
         * If an object is provided for `iteratee` the created `_.matches` style
         * callback returns `true` for elements that have the properties of the given
         * object, else `false`.
         *
         * @static
         * @memberOf _
         * @alias unique
         * @category Array
         * @param {Array} array The array to inspect.
         * @param {boolean} [isSorted] Specify the array is sorted.
         * @param {Function|Object|string} [iteratee] The function invoked per iteration.
         * @param {*} [thisArg] The `this` binding of `iteratee`.
         * @returns {Array} Returns the new duplicate-value-free array.
         * @example
         *
         * _.uniq([2, 1, 2]);
         * // => [2, 1]
         *
         * // using `isSorted`
         * _.uniq([1, 1, 2], true);
         * // => [1, 2]
         *
         * // using an iteratee function
         * _.uniq([1, 2.5, 1.5, 2], function(n) {
     *   return this.floor(n);
     * }, Math);
         * // => [1, 2.5]
         *
         * // using the `_.property` callback shorthand
         * _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 1 }, { 'x': 2 }]
         */
        function uniq(array, isSorted, iteratee, thisArg) {
            var length = array ? array.length : 0;
            if (!length) {
                return [];
            }
            if (isSorted != null && typeof isSorted != 'boolean') {
                thisArg = iteratee;
                iteratee = isIterateeCall(array, isSorted, thisArg) ? undefined : isSorted;
                isSorted = false;
            }
            var callback = getCallback();
            if (!(iteratee == null && callback === baseCallback)) {
                iteratee = callback(iteratee, thisArg, 3);
            }
            return (isSorted && getIndexOf() == baseIndexOf)
                ? sortedUniq(array, iteratee)
                : baseUniq(array, iteratee);
        }

        /**
         * This method is like `_.zip` except that it accepts an array of grouped
         * elements and creates an array regrouping the elements to their pre-zip
         * configuration.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array of grouped elements to process.
         * @returns {Array} Returns the new array of regrouped elements.
         * @example
         *
         * var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]);
         * // => [['fred', 30, true], ['barney', 40, false]]
         *
         * _.unzip(zipped);
         * // => [['fred', 'barney'], [30, 40], [true, false]]
         */
        function unzip(array) {
            if (!(array && array.length)) {
                return [];
            }
            var index = -1,
                length = 0;

            array = arrayFilter(array, function(group) {
                if (isArrayLike(group)) {
                    length = nativeMax(group.length, length);
                    return true;
                }
            });
            var result = Array(length);
            while (++index < length) {
                result[index] = arrayMap(array, baseProperty(index));
            }
            return result;
        }

        /**
         * This method is like `_.unzip` except that it accepts an iteratee to specify
         * how regrouped values should be combined. The `iteratee` is bound to `thisArg`
         * and invoked with four arguments: (accumulator, value, index, group).
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array of grouped elements to process.
         * @param {Function} [iteratee] The function to combine regrouped values.
         * @param {*} [thisArg] The `this` binding of `iteratee`.
         * @returns {Array} Returns the new array of regrouped elements.
         * @example
         *
         * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
         * // => [[1, 10, 100], [2, 20, 200]]
         *
         * _.unzipWith(zipped, _.add);
         * // => [3, 30, 300]
         */
        function unzipWith(array, iteratee, thisArg) {
            var length = array ? array.length : 0;
            if (!length) {
                return [];
            }
            var result = unzip(array);
            if (iteratee == null) {
                return result;
            }
            iteratee = bindCallback(iteratee, thisArg, 4);
            return arrayMap(result, function(group) {
                return arrayReduce(group, iteratee, undefined, true);
            });
        }

        /**
         * Creates an array excluding all provided values using
         * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to filter.
         * @param {...*} [values] The values to exclude.
         * @returns {Array} Returns the new array of filtered values.
         * @example
         *
         * _.without([1, 2, 1, 3], 1, 2);
         * // => [3]
         */
        var without = restParam(function(array, values) {
            return isArrayLike(array)
                ? baseDifference(array, values)
                : [];
        });

        /**
         * Creates an array of unique values that is the [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
         * of the provided arrays.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {...Array} [arrays] The arrays to inspect.
         * @returns {Array} Returns the new array of values.
         * @example
         *
         * _.xor([1, 2], [4, 2]);
         * // => [1, 4]
         */
        function xor() {
            var index = -1,
                length = arguments.length;

            while (++index < length) {
                var array = arguments[index];
                if (isArrayLike(array)) {
                    var result = result
                        ? arrayPush(baseDifference(result, array), baseDifference(array, result))
                        : array;
                }
            }
            return result ? baseUniq(result) : [];
        }

        /**
         * Creates an array of grouped elements, the first of which contains the first
         * elements of the given arrays, the second of which contains the second elements
         * of the given arrays, and so on.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {...Array} [arrays] The arrays to process.
         * @returns {Array} Returns the new array of grouped elements.
         * @example
         *
         * _.zip(['fred', 'barney'], [30, 40], [true, false]);
         * // => [['fred', 30, true], ['barney', 40, false]]
         */
        var zip = restParam(unzip);

        /**
         * The inverse of `_.pairs`; this method returns an object composed from arrays
         * of property names and values. Provide either a single two dimensional array,
         * e.g. `[[key1, value1], [key2, value2]]` or two arrays, one of property names
         * and one of corresponding values.
         *
         * @static
         * @memberOf _
         * @alias object
         * @category Array
         * @param {Array} props The property names.
         * @param {Array} [values=[]] The property values.
         * @returns {Object} Returns the new object.
         * @example
         *
         * _.zipObject([['fred', 30], ['barney', 40]]);
         * // => { 'fred': 30, 'barney': 40 }
         *
         * _.zipObject(['fred', 'barney'], [30, 40]);
         * // => { 'fred': 30, 'barney': 40 }
         */
        function zipObject(props, values) {
            var index = -1,
                length = props ? props.length : 0,
                result = {};

            if (length && !values && !isArray(props[0])) {
                values = [];
            }
            while (++index < length) {
                var key = props[index];
                if (values) {
                    result[key] = values[index];
                } else if (key) {
                    result[key[0]] = key[1];
                }
            }
            return result;
        }

        /**
         * This method is like `_.zip` except that it accepts an iteratee to specify
         * how grouped values should be combined. The `iteratee` is bound to `thisArg`
         * and invoked with four arguments: (accumulator, value, index, group).
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {...Array} [arrays] The arrays to process.
         * @param {Function} [iteratee] The function to combine grouped values.
         * @param {*} [thisArg] The `this` binding of `iteratee`.
         * @returns {Array} Returns the new array of grouped elements.
         * @example
         *
         * _.zipWith([1, 2], [10, 20], [100, 200], _.add);
         * // => [111, 222]
         */
        var zipWith = restParam(function(arrays) {
            var length = arrays.length,
                iteratee = length > 2 ? arrays[length - 2] : undefined,
                thisArg = length > 1 ? arrays[length - 1] : undefined;

            if (length > 2 && typeof iteratee == 'function') {
                length -= 2;
            } else {
                iteratee = (length > 1 && typeof thisArg == 'function') ? (--length, thisArg) : undefined;
                thisArg = undefined;
            }
            arrays.length = length;
            return unzipWith(arrays, iteratee, thisArg);
        });

        /*------------------------------------------------------------------------*/

        /**
         * Creates a `lodash` object that wraps `value` with explicit method
         * chaining enabled.
         *
         * @static
         * @memberOf _
         * @category Chain
         * @param {*} value The value to wrap.
         * @returns {Object} Returns the new `lodash` wrapper instance.
         * @example
         *
         * var users = [
         *   { 'user': 'barney',  'age': 36 },
         *   { 'user': 'fred',    'age': 40 },
         *   { 'user': 'pebbles', 'age': 1 }
         * ];
         *
         * var youngest = _.chain(users)
         *   .sortBy('age')
         *   .map(function(chr) {
     *     return chr.user + ' is ' + chr.age;
     *   })
         *   .first()
         *   .value();
         * // => 'pebbles is 1'
         */
        function chain(value) {
            var result = lodash(value);
            result.__chain__ = true;
            return result;
        }

        /**
         * This method invokes `interceptor` and returns `value`. The interceptor is
         * bound to `thisArg` and invoked with one argument; (value). The purpose of
         * this method is to "tap into" a method chain in order to perform operations
         * on intermediate results within the chain.
         *
         * @static
         * @memberOf _
         * @category Chain
         * @param {*} value The value to provide to `interceptor`.
         * @param {Function} interceptor The function to invoke.
         * @param {*} [thisArg] The `this` binding of `interceptor`.
         * @returns {*} Returns `value`.
         * @example
         *
         * _([1, 2, 3])
         *  .tap(function(array) {
     *    array.pop();
     *  })
         *  .reverse()
         *  .value();
         * // => [2, 1]
         */
        function tap(value, interceptor, thisArg) {
            interceptor.call(thisArg, value);
            return value;
        }

        /**
         * This method is like `_.tap` except that it returns the result of `interceptor`.
         *
         * @static
         * @memberOf _
         * @category Chain
         * @param {*} value The value to provide to `interceptor`.
         * @param {Function} interceptor The function to invoke.
         * @param {*} [thisArg] The `this` binding of `interceptor`.
         * @returns {*} Returns the result of `interceptor`.
         * @example
         *
         * _('  abc  ')
         *  .chain()
         *  .trim()
         *  .thru(function(value) {
     *    return [value];
     *  })
         *  .value();
         * // => ['abc']
         */
        function thru(value, interceptor, thisArg) {
            return interceptor.call(thisArg, value);
        }

        /**
         * Enables explicit method chaining on the wrapper object.
         *
         * @name chain
         * @memberOf _
         * @category Chain
         * @returns {Object} Returns the new `lodash` wrapper instance.
         * @example
         *
         * var users = [
         *   { 'user': 'barney', 'age': 36 },
         *   { 'user': 'fred',   'age': 40 }
         * ];
         *
         * // without explicit chaining
         * _(users).first();
         * // => { 'user': 'barney', 'age': 36 }
         *
         * // with explicit chaining
         * _(users).chain()
         *   .first()
         *   .pick('user')
         *   .value();
         * // => { 'user': 'barney' }
         */
        function wrapperChain() {
            return chain(this);
        }

        /**
         * Executes the chained sequence and returns the wrapped result.
         *
         * @name commit
         * @memberOf _
         * @category Chain
         * @returns {Object} Returns the new `lodash` wrapper instance.
         * @example
         *
         * var array = [1, 2];
         * var wrapped = _(array).push(3);
         *
         * console.log(array);
         * // => [1, 2]
         *
         * wrapped = wrapped.commit();
         * console.log(array);
         * // => [1, 2, 3]
         *
         * wrapped.last();
         * // => 3
         *
         * console.log(array);
         * // => [1, 2, 3]
         */
        function wrapperCommit() {
            return new LodashWrapper(this.value(), this.__chain__);
        }

        /**
         * Creates a new array joining a wrapped array with any additional arrays
         * and/or values.
         *
         * @name concat
         * @memberOf _
         * @category Chain
         * @param {...*} [values] The values to concatenate.
         * @returns {Array} Returns the new concatenated array.
         * @example
         *
         * var array = [1];
         * var wrapped = _(array).concat(2, [3], [[4]]);
         *
         * console.log(wrapped.value());
         * // => [1, 2, 3, [4]]
         *
         * console.log(array);
         * // => [1]
         */
        var wrapperConcat = restParam(function(values) {
            values = baseFlatten(values);
            return this.thru(function(array) {
                return arrayConcat(isArray(array) ? array : [toObject(array)], values);
            });
        });

        /**
         * Creates a clone of the chained sequence planting `value` as the wrapped value.
         *
         * @name plant
         * @memberOf _
         * @category Chain
         * @returns {Object} Returns the new `lodash` wrapper instance.
         * @example
         *
         * var array = [1, 2];
         * var wrapped = _(array).map(function(value) {
     *   return Math.pow(value, 2);
     * });
         *
         * var other = [3, 4];
         * var otherWrapped = wrapped.plant(other);
         *
         * otherWrapped.value();
         * // => [9, 16]
         *
         * wrapped.value();
         * // => [1, 4]
         */
        function wrapperPlant(value) {
            var result,
                parent = this;

            while (parent instanceof baseLodash) {
                var clone = wrapperClone(parent);
                if (result) {
                    previous.__wrapped__ = clone;
                } else {
                    result = clone;
                }
                var previous = clone;
                parent = parent.__wrapped__;
            }
            previous.__wrapped__ = value;
            return result;
        }

        /**
         * Reverses the wrapped array so the first element becomes the last, the
         * second element becomes the second to last, and so on.
         *
         * **Note:** This method mutates the wrapped array.
         *
         * @name reverse
         * @memberOf _
         * @category Chain
         * @returns {Object} Returns the new reversed `lodash` wrapper instance.
         * @example
         *
         * var array = [1, 2, 3];
         *
         * _(array).reverse().value()
         * // => [3, 2, 1]
         *
         * console.log(array);
         * // => [3, 2, 1]
         */
        function wrapperReverse() {
            var value = this.__wrapped__;

            var interceptor = function(value) {
                return (wrapped && wrapped.__dir__ < 0) ? value : value.reverse();
            };
            if (value instanceof LazyWrapper) {
                var wrapped = value;
                if (this.__actions__.length) {
                    wrapped = new LazyWrapper(this);
                }
                wrapped = wrapped.reverse();
                wrapped.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
                return new LodashWrapper(wrapped, this.__chain__);
            }
            return this.thru(interceptor);
        }

        /**
         * Produces the result of coercing the unwrapped value to a string.
         *
         * @name toString
         * @memberOf _
         * @category Chain
         * @returns {string} Returns the coerced string value.
         * @example
         *
         * _([1, 2, 3]).toString();
         * // => '1,2,3'
         */
        function wrapperToString() {
            return (this.value() + '');
        }

        /**
         * Executes the chained sequence to extract the unwrapped value.
         *
         * @name value
         * @memberOf _
         * @alias run, toJSON, valueOf
         * @category Chain
         * @returns {*} Returns the resolved unwrapped value.
         * @example
         *
         * _([1, 2, 3]).value();
         * // => [1, 2, 3]
         */
        function wrapperValue() {
            return baseWrapperValue(this.__wrapped__, this.__actions__);
        }

        /*------------------------------------------------------------------------*/

        /**
         * Creates an array of elements corresponding to the given keys, or indexes,
         * of `collection`. Keys may be specified as individual arguments or as arrays
         * of keys.
         *
         * @static
         * @memberOf _
         * @category Collection
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {...(number|number[]|string|string[])} [props] The property names
         *  or indexes of elements to pick, specified individually or in arrays.
         * @returns {Array} Returns the new array of picked elements.
         * @example
         *
         * _.at(['a', 'b', 'c'], [0, 2]);
         * // => ['a', 'c']
         *
         * _.at(['barney', 'fred', 'pebbles'], 0, 2);
         * // => ['barney', 'pebbles']
         */
        var at = restParam(function(collection, props) {
            return baseAt(collection, baseFlatten(props));
        });

        /**
         * Creates an object composed of keys generated from the results of running
         * each element of `collection` through `iteratee`. The corresponding value
         * of each key is the number of times the key was returned by `iteratee`.
         * The `iteratee` is bound to `thisArg` and invoked with three arguments:
         * (value, index|key, collection).
         *
         * If a property name is provided for `iteratee` the created `_.property`
         * style callback returns the property value of the given element.
         *
         * If a value is also provided for `thisArg` the created `_.matchesProperty`
         * style callback returns `true` for elements that have a matching property
         * value, else `false`.
         *
         * If an object is provided for `iteratee` the created `_.matches` style
         * callback returns `true` for elements that have the properties of the given
         * object, else `false`.
         *
         * @static
         * @memberOf _
         * @category Collection
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function|Object|string} [iteratee=_.identity] The function invoked
         *  per iteration.
         * @param {*} [thisArg] The `this` binding of `iteratee`.
         * @returns {Object} Returns the composed aggregate object.
         * @example
         *
         * _.countBy([4.3, 6.1, 6.4], function(n) {
     *   return Math.floor(n);
     * });
         * // => { '4': 1, '6': 2 }
         *
         * _.countBy([4.3, 6.1, 6.4], function(n) {
     *   return this.floor(n);
     * }, Math);
         * // => { '4': 1, '6': 2 }
         *
         * _.countBy(['one', 'two', 'three'], 'length');
         * // => { '3': 2, '5': 1 }
         */
        var countBy = createAggregator(function(result, value, key) {
            hasOwnProperty.call(result, key) ? ++result[key] : (result[key] = 1);
        });

        /**
         * Checks if `predicate` returns truthy for **all** elements of `collection`.
         * The predicate is bound to `thisArg` and invoked with three arguments:
         * (value, index|key, collection).
         *
         * If a property name is provided for `predicate` the created `_.property`
         * style callback returns the property value of the given element.
         *
         * If a value is also provided for `thisArg` the created `_.matchesProperty`
         * style callback returns `true` for elements that have a matching property
         * value, else `false`.
         *
         * If an object is provided for `predicate` the created `_.matches` style
         * callback returns `true` for elements that have the properties of the given
         * object, else `false`.
         *
         * @static
         * @memberOf _
         * @alias all
         * @category Collection
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function|Object|string} [predicate=_.identity] The function invoked
         *  per iteration.
         * @param {*} [thisArg] The `this` binding of `predicate`.
         * @returns {boolean} Returns `true` if all elements pass the predicate check,
         *  else `false`.
         * @example
         *
         * _.every([true, 1, null, 'yes'], Boolean);
         * // => false
         *
         * var users = [
         *   { 'user': 'barney', 'active': false },
         *   { 'user': 'fred',   'active': false }
         * ];
         *
         * // using the `_.matches` callback shorthand
         * _.every(users, { 'user': 'barney', 'active': false });
         * // => false
         *
         * // using the `_.matchesProperty` callback shorthand
         * _.every(users, 'active', false);
         * // => true
         *
         * // using the `_.property` callback shorthand
         * _.every(users, 'active');
         * // => false
         */
        function every(collection, predicate, thisArg) {
            var func = isArray(collection) ? arrayEvery : baseEvery;
            if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
                predicate = undefined;
            }
            if (typeof predicate != 'function' || thisArg !== undefined) {
                predicate = getCallback(predicate, thisArg, 3);
            }
            return func(collection, predicate);
        }

        /**
         * Iterates over elements of `collection`, returning an array of all elements
         * `predicate` returns truthy for. The predicate is bound to `thisArg` and
         * invoked with three arguments: (value, index|key, collection).
         *
         * If a property name is provided for `predicate` the created `_.property`
         * style callback returns the property value of the given element.
         *
         * If a value is also provided for `thisArg` the created `_.matchesProperty`
         * style callback returns `true` for elements that have a matching property
         * value, else `false`.
         *
         * If an object is provided for `predicate` the created `_.matches` style
         * callback returns `true` for elements that have the properties of the given
         * object, else `false`.
         *
         * @static
         * @memberOf _
         * @alias select
         * @category Collection
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function|Object|string} [predicate=_.identity] The function invoked
         *  per iteration.
         * @param {*} [thisArg] The `this` binding of `predicate`.
         * @returns {Array} Returns the new filtered array.
         * @example
         *
         * _.filter([4, 5, 6], function(n) {
     *   return n % 2 == 0;
     * });
         * // => [4, 6]
         *
         * var users = [
         *   { 'user': 'barney', 'age': 36, 'active': true },
         *   { 'user': 'fred',   'age': 40, 'active': false }
         * ];
         *
         * // using the `_.matches` callback shorthand
         * _.pluck(_.filter(users, { 'age': 36, 'active': true }), 'user');
         * // => ['barney']
         *
         * // using the `_.matchesProperty` callback shorthand
         * _.pluck(_.filter(users, 'active', false), 'user');
         * // => ['fred']
         *
         * // using the `_.property` callback shorthand
         * _.pluck(_.filter(users, 'active'), 'user');
         * // => ['barney']
         */
        function filter(collection, predicate, thisArg) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            predicate = getCallback(predicate, thisArg, 3);
            return func(collection, predicate);
        }

        /**
         * Iterates over elements of `collection`, returning the first element
         * `predicate` returns truthy for. The predicate is bound to `thisArg` and
         * invoked with three arguments: (value, index|key, collection).
         *
         * If a property name is provided for `predicate` the created `_.property`
         * style callback returns the property value of the given element.
         *
         * If a value is also provided for `thisArg` the created `_.matchesProperty`
         * style callback returns `true` for elements that have a matching property
         * value, else `false`.
         *
         * If an object is provided for `predicate` the created `_.matches` style
         * callback returns `true` for elements that have the properties of the given
         * object, else `false`.
         *
         * @static
         * @memberOf _
         * @alias detect
         * @category Collection
         * @param {Array|Object|string} collection The collection to search.
         * @param {Function|Object|string} [predicate=_.identity] The function invoked
         *  per iteration.
         * @param {*} [thisArg] The `this` binding of `predicate`.
         * @returns {*} Returns the matched element, else `undefined`.
         * @example
         *
         * var users = [
         *   { 'user': 'barney',  'age': 36, 'active': true },
         *   { 'user': 'fred',    'age': 40, 'active': false },
         *   { 'user': 'pebbles', 'age': 1,  'active': true }
         * ];
         *
         * _.result(_.find(users, function(chr) {
     *   return chr.age < 40;
     * }), 'user');
         * // => 'barney'
         *
         * // using the `_.matches` callback shorthand
         * _.result(_.find(users, { 'age': 1, 'active': true }), 'user');
         * // => 'pebbles'
         *
         * // using the `_.matchesProperty` callback shorthand
         * _.result(_.find(users, 'active', false), 'user');
         * // => 'fred'
         *
         * // using the `_.property` callback shorthand
         * _.result(_.find(users, 'active'), 'user');
         * // => 'barney'
         */
        var find = createFind(baseEach);

        /**
         * This method is like `_.find` except that it iterates over elements of
         * `collection` from right to left.
         *
         * @static
         * @memberOf _
         * @category Collection
         * @param {Array|Object|string} collection The collection to search.
         * @param {Function|Object|string} [predicate=_.identity] The function invoked
         *  per iteration.
         * @param {*} [thisArg] The `this` binding of `predicate`.
         * @returns {*} Returns the matched element, else `undefined`.
         * @example
         *
         * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
         * // => 3
         */
        var findLast = createFind(baseEachRight, true);

        /**
         * Performs a deep comparison between each element in `collection` and the
         * source object, returning the first element that has equivalent property
         * values.
         *
         * **Note:** This method supports comparing arrays, booleans, `Date` objects,
         * numbers, `Object` objects, regexes, and strings. Objects are compared by
         * their own, not inherited, enumerable properties. For comparing a single
         * own or inherited property value see `_.matchesProperty`.
         *
         * @static
         * @memberOf _
         * @category Collection
         * @param {Array|Object|string} collection The collection to search.
         * @param {Object} source The object of property values to match.
         * @returns {*} Returns the matched element, else `undefined`.
         * @example
         *
         * var users = [
         *   { 'user': 'barney', 'age': 36, 'active': true },
         *   { 'user': 'fred',   'age': 40, 'active': false }
         * ];
         *
         * _.result(_.findWhere(users, { 'age': 36, 'active': true }), 'user');
         * // => 'barney'
         *
         * _.result(_.findWhere(users, { 'age': 40, 'active': false }), 'user');
         * // => 'fred'
         */
        function findWhere(collection, source) {
            return find(collection, baseMatches(source));
        }

        /**
         * Iterates over elements of `collection` invoking `iteratee` for each element.
         * The `iteratee` is bound to `thisArg` and invoked with three arguments:
         * (value, index|key, collection). Iteratee functions may exit iteration early
         * by explicitly returning `false`.
         *
         * **Note:** As with other "Collections" methods, objects with a "length" property
         * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
         * may be used for object iteration.
         *
         * @static
         * @memberOf _
         * @alias each
         * @category Collection
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @param {*} [thisArg] The `this` binding of `iteratee`.
         * @returns {Array|Object|string} Returns `collection`.
         * @example
         *
         * _([1, 2]).forEach(function(n) {
     *   console.log(n);
     * }).value();
         * // => logs each value from left to right and returns the array
         *
         * _.forEach({ 'a': 1, 'b': 2 }, function(n, key) {
     *   console.log(n, key);
     * });
         * // => logs each value-key pair and returns the object (iteration order is not guaranteed)
         */
        var forEach = createForEach(arrayEach, baseEach);

        /**
         * This method is like `_.forEach` except that it iterates over elements of
         * `collection` from right to left.
         *
         * @static
         * @memberOf _
         * @alias eachRight
         * @category Collection
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @param {*} [thisArg] The `this` binding of `iteratee`.
         * @returns {Array|Object|string} Returns `collection`.
         * @example
         *
         * _([1, 2]).forEachRight(function(n) {
     *   console.log(n);
     * }).value();
         * // => logs each value from right to left and returns the array
         */
        var forEachRight = createForEach(arrayEachRight, baseEachRight);

        /**
         * Creates an object composed of keys generated from the results of running
         * each element of `collection` through `iteratee`. The corresponding value
         * of each key is an array of the elements responsible for generating the key.
         * The `iteratee` is bound to `thisArg` and invoked with three arguments:
         * (value, index|key, collection).
         *
         * If a property name is provided for `iteratee` the created `_.property`
         * style callback returns the property value of the given element.
         *
         * If a value is also provided for `thisArg` the created `_.matchesProperty`
         * style callback returns `true` for elements that have a matching property
         * value, else `false`.
         *
         * If an object is provided for `iteratee` the created `_.matches` style
         * callback returns `true` for elements that have the properties of the given
         * object, else `false`.
         *
         * @static
         * @memberOf _
         * @category Collection
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function|Object|string} [iteratee=_.identity] The function invoked
         *  per iteration.
         * @param {*} [thisArg] The `this` binding of `iteratee`.
         * @returns {Object} Returns the composed aggregate object.
         * @example
         *
         * _.groupBy([4.2, 6.1, 6.4], function(n) {
     *   return Math.floor(n);
     * });
         * // => { '4': [4.2], '6': [6.1, 6.4] }
         *
         * _.groupBy([4.2, 6.1, 6.4], function(n) {
     *   return this.floor(n);
     * }, Math);
         * // => { '4': [4.2], '6': [6.1, 6.4] }
         *
         * // using the `_.property` callback shorthand
         * _.groupBy(['one', 'two', 'three'], 'length');
         * // => { '3': ['one', 'two'], '5': ['three'] }
         */
        var groupBy = createAggregator(function(result, value, key) {
            if (hasOwnProperty.call(result, key)) {
                result[key].push(value);
            } else {
                result[key] = [value];
            }
        });

        /**
         * Checks if `value` is in `collection` using
         * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons. If `fromIndex` is negative, it is used as the offset
         * from the end of `collection`.
         *
         * @static
         * @memberOf _
         * @alias contains, include
         * @category Collection
         * @param {Array|Object|string} collection The collection to search.
         * @param {*} target The value to search for.
         * @param {number} [fromIndex=0] The index to search from.
         * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
         * @returns {boolean} Returns `true` if a matching element is found, else `false`.
         * @example
         *
         * _.includes([1, 2, 3], 1);
         * // => true
         *
         * _.includes([1, 2, 3], 1, 2);
         * // => false
         *
         * _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
         * // => true
         *
         * _.includes('pebbles', 'eb');
         * // => true
         */
        function includes(collection, target, fromIndex, guard) {
            var length = collection ? getLength(collection) : 0;
            if (!isLength(length)) {
                collection = values(collection);
                length = collection.length;
            }
            if (typeof fromIndex != 'number' || (guard && isIterateeCall(target, fromIndex, guard))) {
                fromIndex = 0;
            } else {
                fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
            }
            return (typeof collection == 'string' || !isArray(collection) && isString(collection))
                ? (fromIndex <= length && collection.indexOf(target, fromIndex) > -1)
                : (!!length && getIndexOf(collection, target, fromIndex) > -1);
        }

        /**
         * Creates an object composed of keys generated from the results of running
         * each element of `collection` through `iteratee`. The corresponding value
         * of each key is the last element responsible for generating the key. The
         * iteratee function is bound to `thisArg` and invoked with three arguments:
         * (value, index|key, collection).
         *
         * If a property name is provided for `iteratee` the created `_.property`
         * style callback returns the property value of the given element.
         *
         * If a value is also provided for `thisArg` the created `_.matchesProperty`
         * style callback returns `true` for elements that have a matching property
         * value, else `false`.
         *
         * If an object is provided for `iteratee` the created `_.matches` style
         * callback returns `true` for elements that have the properties of the given
         * object, else `false`.
         *
         * @static
         * @memberOf _
         * @category Collection
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function|Object|string} [iteratee=_.identity] The function invoked
         *  per iteration.
         * @param {*} [thisArg] The `this` binding of `iteratee`.
         * @returns {Object} Returns the composed aggregate object.
         * @example
         *
         * var keyData = [
         *   { 'dir': 'left', 'code': 97 },
         *   { 'dir': 'right', 'code': 100 }
         * ];
         *
         * _.indexBy(keyData, 'dir');
         * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
         *
         * _.indexBy(keyData, function(object) {
     *   return String.fromCharCode(object.code);
     * });
         * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
         *
         * _.indexBy(keyData, function(object) {
     *   return this.fromCharCode(object.code);
     * }, String);
         * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
         */
        var indexBy = createAggregator(function(result, value, key) {
            result[key] = value;
        });

        /**
         * Invokes the method at `path` of each element in `collection`, returning
         * an array of the results of each invoked method. Any additional arguments
         * are provided to each invoked method. If `methodName` is a function it is
         * invoked for, and `this` bound to, each element in `collection`.
         *
         * @static
         * @memberOf _
         * @category Collection
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Array|Function|string} path The path of the method to invoke or
         *  the function invoked per iteration.
         * @param {...*} [args] The arguments to invoke the method with.
         * @returns {Array} Returns the array of results.
         * @example
         *
         * _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
         * // => [[1, 5, 7], [1, 2, 3]]
         *
         * _.invoke([123, 456], String.prototype.split, '');
         * // => [['1', '2', '3'], ['4', '5', '6']]
         */
        var invoke = restParam(function(collection, path, args) {
            var index = -1,
                isFunc = typeof path == 'function',
                isProp = isKey(path),
                result = isArrayLike(collection) ? Array(collection.length) : [];

            baseEach(collection, function(value) {
                var func = isFunc ? path : ((isProp && value != null) ? value[path] : undefined);
                result[++index] = func ? func.apply(value, args) : invokePath(value, path, args);
            });
            return result;
        });

        /**
         * Creates an array of values by running each element in `collection` through
         * `iteratee`. The `iteratee` is bound to `thisArg` and invoked with three
         * arguments: (value, index|key, collection).
         *
         * If a property name is provided for `iteratee` the created `_.property`
         * style callback returns the property value of the given element.
         *
         * If a value is also provided for `thisArg` the created `_.matchesProperty`
         * style callback returns `true` for elements that have a matching property
         * value, else `false`.
         *
         * If an object is provided for `iteratee` the created `_.matches` style
         * callback returns `true` for elements that have the properties of the given
         * object, else `false`.
         *
         * Many lodash methods are guarded to work as iteratees for methods like
         * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
         *
         * The guarded methods are:
         * `ary`, `callback`, `chunk`, `clone`, `create`, `curry`, `curryRight`,
         * `drop`, `dropRight`, `every`, `fill`, `flatten`, `invert`, `max`, `min`,
         * `parseInt`, `slice`, `sortBy`, `take`, `takeRight`, `template`, `trim`,
         * `trimLeft`, `trimRight`, `trunc`, `random`, `range`, `sample`, `some`,
         * `sum`, `uniq`, and `words`
         *
         * @static
         * @memberOf _
         * @alias collect
         * @category Collection
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function|Object|string} [iteratee=_.identity] The function invoked
         *  per iteration.
         * @param {*} [thisArg] The `this` binding of `iteratee`.
         * @returns {Array} Returns the new mapped array.
         * @example
         *
         * function timesThree(n) {
     *   return n * 3;
     * }
         *
         * _.map([1, 2], timesThree);
         * // => [3, 6]
         *
         * _.map({ 'a': 1, 'b': 2 }, timesThree);
         * // => [3, 6] (iteration order is not guaranteed)
         *
         * var users = [
         *   { 'user': 'barney' },
         *   { 'user': 'fred' }
         * ];
         *
         * // using the `_.property` callback shorthand
         * _.map(users, 'user');
         * // => ['barney', 'fred']
         */
        function map(collection, iteratee, thisArg) {
            var func = isArray(collection) ? arrayMap : baseMap;
            iteratee = getCallback(iteratee, thisArg, 3);
            return func(collection, iteratee);
        }

        /**
         * Creates an array of elements split into two groups, the first of which
         * contains elements `predicate` returns truthy for, while the second of which
         * contains elements `predicate` returns falsey for. The predicate is bound
         * to `thisArg` and invoked with three arguments: (value, index|key, collection).
         *
         * If a property name is provided for `predicate` the created `_.property`
         * style callback returns the property value of the given element.
         *
         * If a value is also provided for `thisArg` the created `_.matchesProperty`
         * style callback returns `true` for elements that have a matching property
         * value, else `false`.
         *
         * If an object is provided for `predicate` the created `_.matches` style
         * callback returns `true` for elements that have the properties of the given
         * object, else `false`.
         *
         * @static
         * @memberOf _
         * @category Collection
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function|Object|string} [predicate=_.identity] The function invoked
         *  per iteration.
         * @param {*} [thisArg] The `this` binding of `predicate`.
         * @returns {Array} Returns the array of grouped elements.
         * @example
         *
         * _.partition([1, 2, 3], function(n) {
     *   return n % 2;
     * });
         * // => [[1, 3], [2]]
         *
         * _.partition([1.2, 2.3, 3.4], function(n) {
     *   return this.floor(n) % 2;
     * }, Math);
         * // => [[1.2, 3.4], [2.3]]
         *
         * var users = [
         *   { 'user': 'barney',  'age': 36, 'active': false },
         *   { 'user': 'fred',    'age': 40, 'active': true },
         *   { 'user': 'pebbles', 'age': 1,  'active': false }
         * ];
         *
         * var mapper = function(array) {
     *   return _.pluck(array, 'user');
     * };
         *
         * // using the `_.matches` callback shorthand
         * _.map(_.partition(users, { 'age': 1, 'active': false }), mapper);
         * // => [['pebbles'], ['barney', 'fred']]
         *
         * // using the `_.matchesProperty` callback shorthand
         * _.map(_.partition(users, 'active', false), mapper);
         * // => [['barney', 'pebbles'], ['fred']]
         *
         * // using the `_.property` callback shorthand
         * _.map(_.partition(users, 'active'), mapper);
         * // => [['fred'], ['barney', 'pebbles']]
         */
        var partition = createAggregator(function(result, value, key) {
            result[key ? 0 : 1].push(value);
        }, function() { return [[], []]; });

        /**
         * Gets the property value of `path` from all elements in `collection`.
         *
         * @static
         * @memberOf _
         * @category Collection
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Array|string} path The path of the property to pluck.
         * @returns {Array} Returns the property values.
         * @example
         *
         * var users = [
         *   { 'user': 'barney', 'age': 36 },
         *   { 'user': 'fred',   'age': 40 }
         * ];
         *
         * _.pluck(users, 'user');
         * // => ['barney', 'fred']
         *
         * var userIndex = _.indexBy(users, 'user');
         * _.pluck(userIndex, 'age');
         * // => [36, 40] (iteration order is not guaranteed)
         */
        function pluck(collection, path) {
            return map(collection, property(path));
        }

        /**
         * Reduces `collection` to a value which is the accumulated result of running
         * each element in `collection` through `iteratee`, where each successive
         * invocation is supplied the return value of the previous. If `accumulator`
         * is not provided the first element of `collection` is used as the initial
         * value. The `iteratee` is bound to `thisArg` and invoked with four arguments:
         * (accumulator, value, index|key, collection).
         *
         * Many lodash methods are guarded to work as iteratees for methods like
         * `_.reduce`, `_.reduceRight`, and `_.transform`.
         *
         * The guarded methods are:
         * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `sortByAll`,
         * and `sortByOrder`
         *
         * @static
         * @memberOf _
         * @alias foldl, inject
         * @category Collection
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @param {*} [accumulator] The initial value.
         * @param {*} [thisArg] The `this` binding of `iteratee`.
         * @returns {*} Returns the accumulated value.
         * @example
         *
         * _.reduce([1, 2], function(total, n) {
     *   return total + n;
     * });
         * // => 3
         *
         * _.reduce({ 'a': 1, 'b': 2 }, function(result, n, key) {
     *   result[key] = n * 3;
     *   return result;
     * }, {});
         * // => { 'a': 3, 'b': 6 } (iteration order is not guaranteed)
         */
        var reduce = createReduce(arrayReduce, baseEach);

        /**
         * This method is like `_.reduce` except that it iterates over elements of
         * `collection` from right to left.
         *
         * @static
         * @memberOf _
         * @alias foldr
         * @category Collection
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @param {*} [accumulator] The initial value.
         * @param {*} [thisArg] The `this` binding of `iteratee`.
         * @returns {*} Returns the accumulated value.
         * @example
         *
         * var array = [[0, 1], [2, 3], [4, 5]];
         *
         * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
         * // => [4, 5, 2, 3, 0, 1]
         */
        var reduceRight = createReduce(arrayReduceRight, baseEachRight);

        /**
         * The opposite of `_.filter`; this method returns the elements of `collection`
         * that `predicate` does **not** return truthy for.
         *
         * @static
         * @memberOf _
         * @category Collection
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function|Object|string} [predicate=_.identity] The function invoked
         *  per iteration.
         * @param {*} [thisArg] The `this` binding of `predicate`.
         * @returns {Array} Returns the new filtered array.
         * @example
         *
         * _.reject([1, 2, 3, 4], function(n) {
     *   return n % 2 == 0;
     * });
         * // => [1, 3]
         *
         * var users = [
         *   { 'user': 'barney', 'age': 36, 'active': false },
         *   { 'user': 'fred',   'age': 40, 'active': true }
         * ];
         *
         * // using the `_.matches` callback shorthand
         * _.pluck(_.reject(users, { 'age': 40, 'active': true }), 'user');
         * // => ['barney']
         *
         * // using the `_.matchesProperty` callback shorthand
         * _.pluck(_.reject(users, 'active', false), 'user');
         * // => ['fred']
         *
         * // using the `_.property` callback shorthand
         * _.pluck(_.reject(users, 'active'), 'user');
         * // => ['barney']
         */
        function reject(collection, predicate, thisArg) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            predicate = getCallback(predicate, thisArg, 3);
            return func(collection, function(value, index, collection) {
                return !predicate(value, index, collection);
            });
        }

        /**
         * Gets a random element or `n` random elements from a collection.
         *
         * @static
         * @memberOf _
         * @category Collection
         * @param {Array|Object|string} collection The collection to sample.
         * @param {number} [n] The number of elements to sample.
         * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
         * @returns {*} Returns the random sample(s).
         * @example
         *
         * _.sample([1, 2, 3, 4]);
         * // => 2
         *
         * _.sample([1, 2, 3, 4], 2);
         * // => [3, 1]
         */
        function sample(collection, n, guard) {
            if (guard ? isIterateeCall(collection, n, guard) : n == null) {
                collection = toIterable(collection);
                var length = collection.length;
                return length > 0 ? collection[baseRandom(0, length - 1)] : undefined;
            }
            var index = -1,
                result = toArray(collection),
                length = result.length,
                lastIndex = length - 1;

            n = nativeMin(n < 0 ? 0 : (+n || 0), length);
            while (++index < n) {
                var rand = baseRandom(index, lastIndex),
                    value = result[rand];

                result[rand] = result[index];
                result[index] = value;
            }
            result.length = n;
            return result;
        }

        /**
         * Creates an array of shuffled values, using a version of the
         * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
         *
         * @static
         * @memberOf _
         * @category Collection
         * @param {Array|Object|string} collection The collection to shuffle.
         * @returns {Array} Returns the new shuffled array.
         * @example
         *
         * _.shuffle([1, 2, 3, 4]);
         * // => [4, 1, 3, 2]
         */
        function shuffle(collection) {
            return sample(collection, POSITIVE_INFINITY);
        }

        /**
         * Gets the size of `collection` by returning its length for array-like
         * values or the number of own enumerable properties for objects.
         *
         * @static
         * @memberOf _
         * @category Collection
         * @param {Array|Object|string} collection The collection to inspect.
         * @returns {number} Returns the size of `collection`.
         * @example
         *
         * _.size([1, 2, 3]);
         * // => 3
         *
         * _.size({ 'a': 1, 'b': 2 });
         * // => 2
         *
         * _.size('pebbles');
         * // => 7
         */
        function size(collection) {
            var length = collection ? getLength(collection) : 0;
            return isLength(length) ? length : keys(collection).length;
        }

        /**
         * Checks if `predicate` returns truthy for **any** element of `collection`.
         * The function returns as soon as it finds a passing value and does not iterate
         * over the entire collection. The predicate is bound to `thisArg` and invoked
         * with three arguments: (value, index|key, collection).
         *
         * If a property name is provided for `predicate` the created `_.property`
         * style callback returns the property value of the given element.
         *
         * If a value is also provided for `thisArg` the created `_.matchesProperty`
         * style callback returns `true` for elements that have a matching property
         * value, else `false`.
         *
         * If an object is provided for `predicate` the created `_.matches` style
         * callback returns `true` for elements that have the properties of the given
         * object, else `false`.
         *
         * @static
         * @memberOf _
         * @alias any
         * @category Collection
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function|Object|string} [predicate=_.identity] The function invoked
         *  per iteration.
         * @param {*} [thisArg] The `this` binding of `predicate`.
         * @returns {boolean} Returns `true` if any element passes the predicate check,
         *  else `false`.
         * @example
         *
         * _.some([null, 0, 'yes', false], Boolean);
         * // => true
         *
         * var users = [
         *   { 'user': 'barney', 'active': true },
         *   { 'user': 'fred',   'active': false }
         * ];
         *
         * // using the `_.matches` callback shorthand
         * _.some(users, { 'user': 'barney', 'active': false });
         * // => false
         *
         * // using the `_.matchesProperty` callback shorthand
         * _.some(users, 'active', false);
         * // => true
         *
         * // using the `_.property` callback shorthand
         * _.some(users, 'active');
         * // => true
         */
        function some(collection, predicate, thisArg) {
            var func = isArray(collection) ? arraySome : baseSome;
            if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
                predicate = undefined;
            }
            if (typeof predicate != 'function' || thisArg !== undefined) {
                predicate = getCallback(predicate, thisArg, 3);
            }
            return func(collection, predicate);
        }

        /**
         * Creates an array of elements, sorted in ascending order by the results of
         * running each element in a collection through `iteratee`. This method performs
         * a stable sort, that is, it preserves the original sort order of equal elements.
         * The `iteratee` is bound to `thisArg` and invoked with three arguments:
         * (value, index|key, collection).
         *
         * If a property name is provided for `iteratee` the created `_.property`
         * style callback returns the property value of the given element.
         *
         * If a value is also provided for `thisArg` the created `_.matchesProperty`
         * style callback returns `true` for elements that have a matching property
         * value, else `false`.
         *
         * If an object is provided for `iteratee` the created `_.matches` style
         * callback returns `true` for elements that have the properties of the given
         * object, else `false`.
         *
         * @static
         * @memberOf _
         * @category Collection
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function|Object|string} [iteratee=_.identity] The function invoked
         *  per iteration.
         * @param {*} [thisArg] The `this` binding of `iteratee`.
         * @returns {Array} Returns the new sorted array.
         * @example
         *
         * _.sortBy([1, 2, 3], function(n) {
     *   return Math.sin(n);
     * });
         * // => [3, 1, 2]
         *
         * _.sortBy([1, 2, 3], function(n) {
     *   return this.sin(n);
     * }, Math);
         * // => [3, 1, 2]
         *
         * var users = [
         *   { 'user': 'fred' },
         *   { 'user': 'pebbles' },
         *   { 'user': 'barney' }
         * ];
         *
         * // using the `_.property` callback shorthand
         * _.pluck(_.sortBy(users, 'user'), 'user');
         * // => ['barney', 'fred', 'pebbles']
         */
        function sortBy(collection, iteratee, thisArg) {
            if (collection == null) {
                return [];
            }
            if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
                iteratee = undefined;
            }
            var index = -1;
            iteratee = getCallback(iteratee, thisArg, 3);

            var result = baseMap(collection, function(value, key, collection) {
                return { 'criteria': iteratee(value, key, collection), 'index': ++index, 'value': value };
            });
            return baseSortBy(result, compareAscending);
        }

        /**
         * This method is like `_.sortBy` except that it can sort by multiple iteratees
         * or property names.
         *
         * If a property name is provided for an iteratee the created `_.property`
         * style callback returns the property value of the given element.
         *
         * If an object is provided for an iteratee the created `_.matches` style
         * callback returns `true` for elements that have the properties of the given
         * object, else `false`.
         *
         * @static
         * @memberOf _
         * @category Collection
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {...(Function|Function[]|Object|Object[]|string|string[])} iteratees
         *  The iteratees to sort by, specified as individual values or arrays of values.
         * @returns {Array} Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 36 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 34 }
         * ];
         *
         * _.map(_.sortByAll(users, ['user', 'age']), _.values);
         * // => [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]
         *
         * _.map(_.sortByAll(users, 'user', function(chr) {
     *   return Math.floor(chr.age / 10);
     * }), _.values);
         * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        var sortByAll = restParam(function(collection, iteratees) {
            if (collection == null) {
                return [];
            }
            var guard = iteratees[2];
            if (guard && isIterateeCall(iteratees[0], iteratees[1], guard)) {
                iteratees.length = 1;
            }
            return baseSortByOrder(collection, baseFlatten(iteratees), []);
        });

        /**
         * This method is like `_.sortByAll` except that it allows specifying the
         * sort orders of the iteratees to sort by. If `orders` is unspecified, all
         * values are sorted in ascending order. Otherwise, a value is sorted in
         * ascending order if its corresponding order is "asc", and descending if "desc".
         *
         * If a property name is provided for an iteratee the created `_.property`
         * style callback returns the property value of the given element.
         *
         * If an object is provided for an iteratee the created `_.matches` style
         * callback returns `true` for elements that have the properties of the given
         * object, else `false`.
         *
         * @static
         * @memberOf _
         * @category Collection
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
         * @param {boolean[]} [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
         * @returns {Array} Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.map(_.sortByOrder(users, ['user', 'age'], ['asc', 'desc']), _.values);
         * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        function sortByOrder(collection, iteratees, orders, guard) {
            if (collection == null) {
                return [];
            }
            if (guard && isIterateeCall(iteratees, orders, guard)) {
                orders = undefined;
            }
            if (!isArray(iteratees)) {
                iteratees = iteratees == null ? [] : [iteratees];
            }
            if (!isArray(orders)) {
                orders = orders == null ? [] : [orders];
            }
            return baseSortByOrder(collection, iteratees, orders);
        }

        /**
         * Performs a deep comparison between each element in `collection` and the
         * source object, returning an array of all elements that have equivalent
         * property values.
         *
         * **Note:** This method supports comparing arrays, booleans, `Date` objects,
         * numbers, `Object` objects, regexes, and strings. Objects are compared by
         * their own, not inherited, enumerable properties. For comparing a single
         * own or inherited property value see `_.matchesProperty`.
         *
         * @static
         * @memberOf _
         * @category Collection
         * @param {Array|Object|string} collection The collection to search.
         * @param {Object} source The object of property values to match.
         * @returns {Array} Returns the new filtered array.
         * @example
         *
         * var users = [
         *   { 'user': 'barney', 'age': 36, 'active': false, 'pets': ['hoppy'] },
         *   { 'user': 'fred',   'age': 40, 'active': true, 'pets': ['baby puss', 'dino'] }
         * ];
         *
         * _.pluck(_.where(users, { 'age': 36, 'active': false }), 'user');
         * // => ['barney']
         *
         * _.pluck(_.where(users, { 'pets': ['dino'] }), 'user');
         * // => ['fred']
         */
        function where(collection, source) {
            return filter(collection, baseMatches(source));
        }

        /*------------------------------------------------------------------------*/

        /**
         * Gets the number of milliseconds that have elapsed since the Unix epoch
         * (1 January 1970 00:00:00 UTC).
         *
         * @static
         * @memberOf _
         * @category Date
         * @example
         *
         * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
         * // => logs the number of milliseconds it took for the deferred function to be invoked
         */
        var now = nativeNow || function() {
                return new Date().getTime();
            };

        /*------------------------------------------------------------------------*/

        /**
         * The opposite of `_.before`; this method creates a function that invokes
         * `func` once it is called `n` or more times.
         *
         * @static
         * @memberOf _
         * @category Function
         * @param {number} n The number of calls before `func` is invoked.
         * @param {Function} func The function to restrict.
         * @returns {Function} Returns the new restricted function.
         * @example
         *
         * var saves = ['profile', 'settings'];
         *
         * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
         *
         * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
         * // => logs 'done saving!' after the two async saves have completed
         */
        function after(n, func) {
            if (typeof func != 'function') {
                if (typeof n == 'function') {
                    var temp = n;
                    n = func;
                    func = temp;
                } else {
                    throw new TypeError(FUNC_ERROR_TEXT);
                }
            }
            n = nativeIsFinite(n = +n) ? n : 0;
            return function() {
                if (--n < 1) {
                    return func.apply(this, arguments);
                }
            };
        }

        /**
         * Creates a function that accepts up to `n` arguments ignoring any
         * additional arguments.
         *
         * @static
         * @memberOf _
         * @category Function
         * @param {Function} func The function to cap arguments for.
         * @param {number} [n=func.length] The arity cap.
         * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
         * @returns {Function} Returns the new function.
         * @example
         *
         * _.map(['6', '8', '10'], _.ary(parseInt, 1));
         * // => [6, 8, 10]
         */
        function ary(func, n, guard) {
            if (guard && isIterateeCall(func, n, guard)) {
                n = undefined;
            }
            n = (func && n == null) ? func.length : nativeMax(+n || 0, 0);
            return createWrapper(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
        }

        /**
         * Creates a function that invokes `func`, with the `this` binding and arguments
         * of the created function, while it is called less than `n` times. Subsequent
         * calls to the created function return the result of the last `func` invocation.
         *
         * @static
         * @memberOf _
         * @category Function
         * @param {number} n The number of calls at which `func` is no longer invoked.
         * @param {Function} func The function to restrict.
         * @returns {Function} Returns the new restricted function.
         * @example
         *
         * jQuery('#add').on('click', _.before(5, addContactToList));
         * // => allows adding up to 4 contacts to the list
         */
        function before(n, func) {
            var result;
            if (typeof func != 'function') {
                if (typeof n == 'function') {
                    var temp = n;
                    n = func;
                    func = temp;
                } else {
                    throw new TypeError(FUNC_ERROR_TEXT);
                }
            }
            return function() {
                if (--n > 0) {
                    result = func.apply(this, arguments);
                }
                if (n <= 1) {
                    func = undefined;
                }
                return result;
            };
        }

        /**
         * Creates a function that invokes `func` with the `this` binding of `thisArg`
         * and prepends any additional `_.bind` arguments to those provided to the
         * bound function.
         *
         * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
         * may be used as a placeholder for partially applied arguments.
         *
         * **Note:** Unlike native `Function#bind` this method does not set the "length"
         * property of bound functions.
         *
         * @static
         * @memberOf _
         * @category Function
         * @param {Function} func The function to bind.
         * @param {*} thisArg The `this` binding of `func`.
         * @param {...*} [partials] The arguments to be partially applied.
         * @returns {Function} Returns the new bound function.
         * @example
         *
         * var greet = function(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * };
         *
         * var object = { 'user': 'fred' };
         *
         * var bound = _.bind(greet, object, 'hi');
         * bound('!');
         * // => 'hi fred!'
         *
         * // using placeholders
         * var bound = _.bind(greet, object, _, '!');
         * bound('hi');
         * // => 'hi fred!'
         */
        var bind = restParam(function(func, thisArg, partials) {
            var bitmask = BIND_FLAG;
            if (partials.length) {
                var holders = replaceHolders(partials, bind.placeholder);
                bitmask |= PARTIAL_FLAG;
            }
            return createWrapper(func, bitmask, thisArg, partials, holders);
        });

        /**
         * Binds methods of an object to the object itself, overwriting the existing
         * method. Method names may be specified as individual arguments or as arrays
         * of method names. If no method names are provided all enumerable function
         * properties, own and inherited, of `object` are bound.
         *
         * **Note:** This method does not set the "length" property of bound functions.
         *
         * @static
         * @memberOf _
         * @category Function
         * @param {Object} object The object to bind and assign the bound methods to.
         * @param {...(string|string[])} [methodNames] The object method names to bind,
         *  specified as individual method names or arrays of method names.
         * @returns {Object} Returns `object`.
         * @example
         *
         * var view = {
     *   'label': 'docs',
     *   'onClick': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
         *
         * _.bindAll(view);
         * jQuery('#docs').on('click', view.onClick);
         * // => logs 'clicked docs' when the element is clicked
         */
        var bindAll = restParam(function(object, methodNames) {
            methodNames = methodNames.length ? baseFlatten(methodNames) : functions(object);

            var index = -1,
                length = methodNames.length;

            while (++index < length) {
                var key = methodNames[index];
                object[key] = createWrapper(object[key], BIND_FLAG, object);
            }
            return object;
        });

        /**
         * Creates a function that invokes the method at `object[key]` and prepends
         * any additional `_.bindKey` arguments to those provided to the bound function.
         *
         * This method differs from `_.bind` by allowing bound functions to reference
         * methods that may be redefined or don't yet exist.
         * See [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
         * for more details.
         *
         * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
         * builds, may be used as a placeholder for partially applied arguments.
         *
         * @static
         * @memberOf _
         * @category Function
         * @param {Object} object The object the method belongs to.
         * @param {string} key The key of the method.
         * @param {...*} [partials] The arguments to be partially applied.
         * @returns {Function} Returns the new bound function.
         * @example
         *
         * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
         *
         * var bound = _.bindKey(object, 'greet', 'hi');
         * bound('!');
         * // => 'hi fred!'
         *
         * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
         *
         * bound('!');
         * // => 'hiya fred!'
         *
         * // using placeholders
         * var bound = _.bindKey(object, 'greet', _, '!');
         * bound('hi');
         * // => 'hiya fred!'
         */
        var bindKey = restParam(function(object, key, partials) {
            var bitmask = BIND_FLAG | BIND_KEY_FLAG;
            if (partials.length) {
                var holders = replaceHolders(partials, bindKey.placeholder);
                bitmask |= PARTIAL_FLAG;
            }
            return createWrapper(key, bitmask, object, partials, holders);
        });

        /**
         * Creates a function that accepts one or more arguments of `func` that when
         * called either invokes `func` returning its result, if all `func` arguments
         * have been provided, or returns a function that accepts one or more of the
         * remaining `func` arguments, and so on. The arity of `func` may be specified
         * if `func.length` is not sufficient.
         *
         * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
         * may be used as a placeholder for provided arguments.
         *
         * **Note:** This method does not set the "length" property of curried functions.
         *
         * @static
         * @memberOf _
         * @category Function
         * @param {Function} func The function to curry.
         * @param {number} [arity=func.length] The arity of `func`.
         * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
         * @returns {Function} Returns the new curried function.
         * @example
         *
         * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
         *
         * var curried = _.curry(abc);
         *
         * curried(1)(2)(3);
         * // => [1, 2, 3]
         *
         * curried(1, 2)(3);
         * // => [1, 2, 3]
         *
         * curried(1, 2, 3);
         * // => [1, 2, 3]
         *
         * // using placeholders
         * curried(1)(_, 3)(2);
         * // => [1, 2, 3]
         */
        var curry = createCurry(CURRY_FLAG);

        /**
         * This method is like `_.curry` except that arguments are applied to `func`
         * in the manner of `_.partialRight` instead of `_.partial`.
         *
         * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
         * builds, may be used as a placeholder for provided arguments.
         *
         * **Note:** This method does not set the "length" property of curried functions.
         *
         * @static
         * @memberOf _
         * @category Function
         * @param {Function} func The function to curry.
         * @param {number} [arity=func.length] The arity of `func`.
         * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
         * @returns {Function} Returns the new curried function.
         * @example
         *
         * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
         *
         * var curried = _.curryRight(abc);
         *
         * curried(3)(2)(1);
         * // => [1, 2, 3]
         *
         * curried(2, 3)(1);
         * // => [1, 2, 3]
         *
         * curried(1, 2, 3);
         * // => [1, 2, 3]
         *
         * // using placeholders
         * curried(3)(1, _)(2);
         * // => [1, 2, 3]
         */
        var curryRight = createCurry(CURRY_RIGHT_FLAG);

        /**
         * Creates a debounced function that delays invoking `func` until after `wait`
         * milliseconds have elapsed since the last time the debounced function was
         * invoked. The debounced function comes with a `cancel` method to cancel
         * delayed invocations. Provide an options object to indicate that `func`
         * should be invoked on the leading and/or trailing edge of the `wait` timeout.
         * Subsequent calls to the debounced function return the result of the last
         * `func` invocation.
         *
         * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
         * on the trailing edge of the timeout only if the the debounced function is
         * invoked more than once during the `wait` timeout.
         *
         * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
         * for details over the differences between `_.debounce` and `_.throttle`.
         *
         * @static
         * @memberOf _
         * @category Function
         * @param {Function} func The function to debounce.
         * @param {number} [wait=0] The number of milliseconds to delay.
         * @param {Object} [options] The options object.
         * @param {boolean} [options.leading=false] Specify invoking on the leading
         *  edge of the timeout.
         * @param {number} [options.maxWait] The maximum time `func` is allowed to be
         *  delayed before it is invoked.
         * @param {boolean} [options.trailing=true] Specify invoking on the trailing
         *  edge of the timeout.
         * @returns {Function} Returns the new debounced function.
         * @example
         *
         * // avoid costly calculations while the window size is in flux
         * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
         *
         * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
         * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
         *
         * // ensure `batchLog` is invoked once after 1 second of debounced calls
         * var source = new EventSource('/stream');
         * jQuery(source).on('message', _.debounce(batchLog, 250, {
     *   'maxWait': 1000
     * }));
         *
         * // cancel a debounced call
         * var todoChanges = _.debounce(batchLog, 1000);
         * Object.observe(models.todo, todoChanges);
         *
         * Object.observe(models, function(changes) {
     *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
     *     todoChanges.cancel();
     *   }
     * }, ['delete']);
         *
         * // ...at some point `models.todo` is changed
         * models.todo.completed = true;
         *
         * // ...before 1 second has passed `models.todo` is deleted
         * // which cancels the debounced `todoChanges` call
         * delete models.todo;
         */
        function debounce(func, wait, options) {
            var args,
                maxTimeoutId,
                result,
                stamp,
                thisArg,
                timeoutId,
                trailingCall,
                lastCalled = 0,
                maxWait = false,
                trailing = true;

            if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            wait = wait < 0 ? 0 : (+wait || 0);
            if (options === true) {
                var leading = true;
                trailing = false;
            } else if (isObject(options)) {
                leading = !!options.leading;
                maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
                trailing = 'trailing' in options ? !!options.trailing : trailing;
            }

            function cancel() {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
                if (maxTimeoutId) {
                    clearTimeout(maxTimeoutId);
                }
                lastCalled = 0;
                maxTimeoutId = timeoutId = trailingCall = undefined;
            }

            function complete(isCalled, id) {
                if (id) {
                    clearTimeout(id);
                }
                maxTimeoutId = timeoutId = trailingCall = undefined;
                if (isCalled) {
                    lastCalled = now();
                    result = func.apply(thisArg, args);
                    if (!timeoutId && !maxTimeoutId) {
                        args = thisArg = undefined;
                    }
                }
            }

            function delayed() {
                var remaining = wait - (now() - stamp);
                if (remaining <= 0 || remaining > wait) {
                    complete(trailingCall, maxTimeoutId);
                } else {
                    timeoutId = setTimeout(delayed, remaining);
                }
            }

            function maxDelayed() {
                complete(trailing, timeoutId);
            }

            function debounced() {
                args = arguments;
                stamp = now();
                thisArg = this;
                trailingCall = trailing && (timeoutId || !leading);

                if (maxWait === false) {
                    var leadingCall = leading && !timeoutId;
                } else {
                    if (!maxTimeoutId && !leading) {
                        lastCalled = stamp;
                    }
                    var remaining = maxWait - (stamp - lastCalled),
                        isCalled = remaining <= 0 || remaining > maxWait;

                    if (isCalled) {
                        if (maxTimeoutId) {
                            maxTimeoutId = clearTimeout(maxTimeoutId);
                        }
                        lastCalled = stamp;
                        result = func.apply(thisArg, args);
                    }
                    else if (!maxTimeoutId) {
                        maxTimeoutId = setTimeout(maxDelayed, remaining);
                    }
                }
                if (isCalled && timeoutId) {
                    timeoutId = clearTimeout(timeoutId);
                }
                else if (!timeoutId && wait !== maxWait) {
                    timeoutId = setTimeout(delayed, wait);
                }
                if (leadingCall) {
                    isCalled = true;
                    result = func.apply(thisArg, args);
                }
                if (isCalled && !timeoutId && !maxTimeoutId) {
                    args = thisArg = undefined;
                }
                return result;
            }
            debounced.cancel = cancel;
            return debounced;
        }

        /**
         * Defers invoking the `func` until the current call stack has cleared. Any
         * additional arguments are provided to `func` when it is invoked.
         *
         * @static
         * @memberOf _
         * @category Function
         * @param {Function} func The function to defer.
         * @param {...*} [args] The arguments to invoke the function with.
         * @returns {number} Returns the timer id.
         * @example
         *
         * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
         * // logs 'deferred' after one or more milliseconds
         */
        var defer = restParam(function(func, args) {
            return baseDelay(func, 1, args);
        });

        /**
         * Invokes `func` after `wait` milliseconds. Any additional arguments are
         * provided to `func` when it is invoked.
         *
         * @static
         * @memberOf _
         * @category Function
         * @param {Function} func The function to delay.
         * @param {number} wait The number of milliseconds to delay invocation.
         * @param {...*} [args] The arguments to invoke the function with.
         * @returns {number} Returns the timer id.
         * @example
         *
         * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
         * // => logs 'later' after one second
         */
        var delay = restParam(function(func, wait, args) {
            return baseDelay(func, wait, args);
        });

        /**
         * Creates a function that returns the result of invoking the provided
         * functions with the `this` binding of the created function, where each
         * successive invocation is supplied the return value of the previous.
         *
         * @static
         * @memberOf _
         * @category Function
         * @param {...Function} [funcs] Functions to invoke.
         * @returns {Function} Returns the new function.
         * @example
         *
         * function square(n) {
     *   return n * n;
     * }
         *
         * var addSquare = _.flow(_.add, square);
         * addSquare(1, 2);
         * // => 9
         */
        var flow = createFlow();

        /**
         * This method is like `_.flow` except that it creates a function that
         * invokes the provided functions from right to left.
         *
         * @static
         * @memberOf _
         * @alias backflow, compose
         * @category Function
         * @param {...Function} [funcs] Functions to invoke.
         * @returns {Function} Returns the new function.
         * @example
         *
         * function square(n) {
     *   return n * n;
     * }
         *
         * var addSquare = _.flowRight(square, _.add);
         * addSquare(1, 2);
         * // => 9
         */
        var flowRight = createFlow(true);

        /**
         * Creates a function that memoizes the result of `func`. If `resolver` is
         * provided it determines the cache key for storing the result based on the
         * arguments provided to the memoized function. By default, the first argument
         * provided to the memoized function is coerced to a string and used as the
         * cache key. The `func` is invoked with the `this` binding of the memoized
         * function.
         *
         * **Note:** The cache is exposed as the `cache` property on the memoized
         * function. Its creation may be customized by replacing the `_.memoize.Cache`
         * constructor with one whose instances implement the [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
         * method interface of `get`, `has`, and `set`.
         *
         * @static
         * @memberOf _
         * @category Function
         * @param {Function} func The function to have its output memoized.
         * @param {Function} [resolver] The function to resolve the cache key.
         * @returns {Function} Returns the new memoizing function.
         * @example
         *
         * var upperCase = _.memoize(function(string) {
     *   return string.toUpperCase();
     * });
         *
         * upperCase('fred');
         * // => 'FRED'
         *
         * // modifying the result cache
         * upperCase.cache.set('fred', 'BARNEY');
         * upperCase('fred');
         * // => 'BARNEY'
         *
         * // replacing `_.memoize.Cache`
         * var object = { 'user': 'fred' };
         * var other = { 'user': 'barney' };
         * var identity = _.memoize(_.identity);
         *
         * identity(object);
         * // => { 'user': 'fred' }
         * identity(other);
         * // => { 'user': 'fred' }
         *
         * _.memoize.Cache = WeakMap;
         * var identity = _.memoize(_.identity);
         *
         * identity(object);
         * // => { 'user': 'fred' }
         * identity(other);
         * // => { 'user': 'barney' }
         */
        function memoize(func, resolver) {
            if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            var memoized = function() {
                var args = arguments,
                    key = resolver ? resolver.apply(this, args) : args[0],
                    cache = memoized.cache;

                if (cache.has(key)) {
                    return cache.get(key);
                }
                var result = func.apply(this, args);
                memoized.cache = cache.set(key, result);
                return result;
            };
            memoized.cache = new memoize.Cache;
            return memoized;
        }

        /**
         * Creates a function that runs each argument through a corresponding
         * transform function.
         *
         * @static
         * @memberOf _
         * @category Function
         * @param {Function} func The function to wrap.
         * @param {...(Function|Function[])} [transforms] The functions to transform
         * arguments, specified as individual functions or arrays of functions.
         * @returns {Function} Returns the new function.
         * @example
         *
         * function doubled(n) {
     *   return n * 2;
     * }
         *
         * function square(n) {
     *   return n * n;
     * }
         *
         * var modded = _.modArgs(function(x, y) {
     *   return [x, y];
     * }, square, doubled);
         *
         * modded(1, 2);
         * // => [1, 4]
         *
         * modded(5, 10);
         * // => [25, 20]
         */
        var modArgs = restParam(function(func, transforms) {
            transforms = baseFlatten(transforms);
            if (typeof func != 'function' || !arrayEvery(transforms, baseIsFunction)) {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            var length = transforms.length;
            return restParam(function(args) {
                var index = nativeMin(args.length, length);
                while (index--) {
                    args[index] = transforms[index](args[index]);
                }
                return func.apply(this, args);
            });
        });

        /**
         * Creates a function that negates the result of the predicate `func`. The
         * `func` predicate is invoked with the `this` binding and arguments of the
         * created function.
         *
         * @static
         * @memberOf _
         * @category Function
         * @param {Function} predicate The predicate to negate.
         * @returns {Function} Returns the new function.
         * @example
         *
         * function isEven(n) {
     *   return n % 2 == 0;
     * }
         *
         * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
         * // => [1, 3, 5]
         */
        function negate(predicate) {
            if (typeof predicate != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            return function() {
                return !predicate.apply(this, arguments);
            };
        }

        /**
         * Creates a function that is restricted to invoking `func` once. Repeat calls
         * to the function return the value of the first call. The `func` is invoked
         * with the `this` binding and arguments of the created function.
         *
         * @static
         * @memberOf _
         * @category Function
         * @param {Function} func The function to restrict.
         * @returns {Function} Returns the new restricted function.
         * @example
         *
         * var initialize = _.once(createApplication);
         * initialize();
         * initialize();
         * // `initialize` invokes `createApplication` once
         */
        function once(func) {
            return before(2, func);
        }

        /**
         * Creates a function that invokes `func` with `partial` arguments prepended
         * to those provided to the new function. This method is like `_.bind` except
         * it does **not** alter the `this` binding.
         *
         * The `_.partial.placeholder` value, which defaults to `_` in monolithic
         * builds, may be used as a placeholder for partially applied arguments.
         *
         * **Note:** This method does not set the "length" property of partially
         * applied functions.
         *
         * @static
         * @memberOf _
         * @category Function
         * @param {Function} func The function to partially apply arguments to.
         * @param {...*} [partials] The arguments to be partially applied.
         * @returns {Function} Returns the new partially applied function.
         * @example
         *
         * var greet = function(greeting, name) {
     *   return greeting + ' ' + name;
     * };
         *
         * var sayHelloTo = _.partial(greet, 'hello');
         * sayHelloTo('fred');
         * // => 'hello fred'
         *
         * // using placeholders
         * var greetFred = _.partial(greet, _, 'fred');
         * greetFred('hi');
         * // => 'hi fred'
         */
        var partial = createPartial(PARTIAL_FLAG);

        /**
         * This method is like `_.partial` except that partially applied arguments
         * are appended to those provided to the new function.
         *
         * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
         * builds, may be used as a placeholder for partially applied arguments.
         *
         * **Note:** This method does not set the "length" property of partially
         * applied functions.
         *
         * @static
         * @memberOf _
         * @category Function
         * @param {Function} func The function to partially apply arguments to.
         * @param {...*} [partials] The arguments to be partially applied.
         * @returns {Function} Returns the new partially applied function.
         * @example
         *
         * var greet = function(greeting, name) {
     *   return greeting + ' ' + name;
     * };
         *
         * var greetFred = _.partialRight(greet, 'fred');
         * greetFred('hi');
         * // => 'hi fred'
         *
         * // using placeholders
         * var sayHelloTo = _.partialRight(greet, 'hello', _);
         * sayHelloTo('fred');
         * // => 'hello fred'
         */
        var partialRight = createPartial(PARTIAL_RIGHT_FLAG);

        /**
         * Creates a function that invokes `func` with arguments arranged according
         * to the specified indexes where the argument value at the first index is
         * provided as the first argument, the argument value at the second index is
         * provided as the second argument, and so on.
         *
         * @static
         * @memberOf _
         * @category Function
         * @param {Function} func The function to rearrange arguments for.
         * @param {...(number|number[])} indexes The arranged argument indexes,
         *  specified as individual indexes or arrays of indexes.
         * @returns {Function} Returns the new function.
         * @example
         *
         * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, 2, 0, 1);
         *
         * rearged('b', 'c', 'a')
         * // => ['a', 'b', 'c']
         *
         * var map = _.rearg(_.map, [1, 0]);
         * map(function(n) {
     *   return n * 3;
     * }, [1, 2, 3]);
         * // => [3, 6, 9]
         */
        var rearg = restParam(function(func, indexes) {
            return createWrapper(func, REARG_FLAG, undefined, undefined, undefined, baseFlatten(indexes));
        });

        /**
         * Creates a function that invokes `func` with the `this` binding of the
         * created function and arguments from `start` and beyond provided as an array.
         *
         * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
         *
         * @static
         * @memberOf _
         * @category Function
         * @param {Function} func The function to apply a rest parameter to.
         * @param {number} [start=func.length-1] The start position of the rest parameter.
         * @returns {Function} Returns the new function.
         * @example
         *
         * var say = _.restParam(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
         *
         * say('hello', 'fred', 'barney', 'pebbles');
         * // => 'hello fred, barney, & pebbles'
         */
        function restParam(func, start) {
            if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
            return function() {
                var args = arguments,
                    index = -1,
                    length = nativeMax(args.length - start, 0),
                    rest = Array(length);

                while (++index < length) {
                    rest[index] = args[start + index];
                }
                switch (start) {
                    case 0: return func.call(this, rest);
                    case 1: return func.call(this, args[0], rest);
                    case 2: return func.call(this, args[0], args[1], rest);
                }
                var otherArgs = Array(start + 1);
                index = -1;
                while (++index < start) {
                    otherArgs[index] = args[index];
                }
                otherArgs[start] = rest;
                return func.apply(this, otherArgs);
            };
        }

        /**
         * Creates a function that invokes `func` with the `this` binding of the created
         * function and an array of arguments much like [`Function#apply`](https://es5.github.io/#x15.3.4.3).
         *
         * **Note:** This method is based on the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator).
         *
         * @static
         * @memberOf _
         * @category Function
         * @param {Function} func The function to spread arguments over.
         * @returns {Function} Returns the new function.
         * @example
         *
         * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
         *
         * say(['fred', 'hello']);
         * // => 'fred says hello'
         *
         * // with a Promise
         * var numbers = Promise.all([
         *   Promise.resolve(40),
         *   Promise.resolve(36)
         * ]);
         *
         * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
         * // => a Promise of 76
         */
        function spread(func) {
            if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            return function(array) {
                return func.apply(this, array);
            };
        }

        /**
         * Creates a throttled function that only invokes `func` at most once per
         * every `wait` milliseconds. The throttled function comes with a `cancel`
         * method to cancel delayed invocations. Provide an options object to indicate
         * that `func` should be invoked on the leading and/or trailing edge of the
         * `wait` timeout. Subsequent calls to the throttled function return the
         * result of the last `func` call.
         *
         * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
         * on the trailing edge of the timeout only if the the throttled function is
         * invoked more than once during the `wait` timeout.
         *
         * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
         * for details over the differences between `_.throttle` and `_.debounce`.
         *
         * @static
         * @memberOf _
         * @category Function
         * @param {Function} func The function to throttle.
         * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
         * @param {Object} [options] The options object.
         * @param {boolean} [options.leading=true] Specify invoking on the leading
         *  edge of the timeout.
         * @param {boolean} [options.trailing=true] Specify invoking on the trailing
         *  edge of the timeout.
         * @returns {Function} Returns the new throttled function.
         * @example
         *
         * // avoid excessively updating the position while scrolling
         * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
         *
         * // invoke `renewToken` when the click event is fired, but not more than once every 5 minutes
         * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
     *   'trailing': false
     * }));
         *
         * // cancel a trailing throttled call
         * jQuery(window).on('popstate', throttled.cancel);
         */
        function throttle(func, wait, options) {
            var leading = true,
                trailing = true;

            if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            if (options === false) {
                leading = false;
            } else if (isObject(options)) {
                leading = 'leading' in options ? !!options.leading : leading;
                trailing = 'trailing' in options ? !!options.trailing : trailing;
            }
            return debounce(func, wait, { 'leading': leading, 'maxWait': +wait, 'trailing': trailing });
        }

        /**
         * Creates a function that provides `value` to the wrapper function as its
         * first argument. Any additional arguments provided to the function are
         * appended to those provided to the wrapper function. The wrapper is invoked
         * with the `this` binding of the created function.
         *
         * @static
         * @memberOf _
         * @category Function
         * @param {*} value The value to wrap.
         * @param {Function} wrapper The wrapper function.
         * @returns {Function} Returns the new function.
         * @example
         *
         * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
         *
         * p('fred, barney, & pebbles');
         * // => '<p>fred, barney, &amp; pebbles</p>'
         */
        function wrap(value, wrapper) {
            wrapper = wrapper == null ? identity : wrapper;
            return createWrapper(wrapper, PARTIAL_FLAG, undefined, [value], []);
        }

        /*------------------------------------------------------------------------*/

        /**
         * Creates a clone of `value`. If `isDeep` is `true` nested objects are cloned,
         * otherwise they are assigned by reference. If `customizer` is provided it is
         * invoked to produce the cloned values. If `customizer` returns `undefined`
         * cloning is handled by the method instead. The `customizer` is bound to
         * `thisArg` and invoked with two argument; (value [, index|key, object]).
         *
         * **Note:** This method is loosely based on the
         * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
         * The enumerable properties of `arguments` objects and objects created by
         * constructors other than `Object` are cloned to plain `Object` objects. An
         * empty object is returned for uncloneable values such as functions, DOM nodes,
         * Maps, Sets, and WeakMaps.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to clone.
         * @param {boolean} [isDeep] Specify a deep clone.
         * @param {Function} [customizer] The function to customize cloning values.
         * @param {*} [thisArg] The `this` binding of `customizer`.
         * @returns {*} Returns the cloned value.
         * @example
         *
         * var users = [
         *   { 'user': 'barney' },
         *   { 'user': 'fred' }
         * ];
         *
         * var shallow = _.clone(users);
         * shallow[0] === users[0];
         * // => true
         *
         * var deep = _.clone(users, true);
         * deep[0] === users[0];
         * // => false
         *
         * // using a customizer callback
         * var el = _.clone(document.body, function(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * });
         *
         * el === document.body
         * // => false
         * el.nodeName
         * // => BODY
         * el.childNodes.length;
         * // => 0
         */
        function clone(value, isDeep, customizer, thisArg) {
            if (isDeep && typeof isDeep != 'boolean' && isIterateeCall(value, isDeep, customizer)) {
                isDeep = false;
            }
            else if (typeof isDeep == 'function') {
                thisArg = customizer;
                customizer = isDeep;
                isDeep = false;
            }
            return typeof customizer == 'function'
                ? baseClone(value, isDeep, bindCallback(customizer, thisArg, 1))
                : baseClone(value, isDeep);
        }

        /**
         * Creates a deep clone of `value`. If `customizer` is provided it is invoked
         * to produce the cloned values. If `customizer` returns `undefined` cloning
         * is handled by the method instead. The `customizer` is bound to `thisArg`
         * and invoked with two argument; (value [, index|key, object]).
         *
         * **Note:** This method is loosely based on the
         * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
         * The enumerable properties of `arguments` objects and objects created by
         * constructors other than `Object` are cloned to plain `Object` objects. An
         * empty object is returned for uncloneable values such as functions, DOM nodes,
         * Maps, Sets, and WeakMaps.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to deep clone.
         * @param {Function} [customizer] The function to customize cloning values.
         * @param {*} [thisArg] The `this` binding of `customizer`.
         * @returns {*} Returns the deep cloned value.
         * @example
         *
         * var users = [
         *   { 'user': 'barney' },
         *   { 'user': 'fred' }
         * ];
         *
         * var deep = _.cloneDeep(users);
         * deep[0] === users[0];
         * // => false
         *
         * // using a customizer callback
         * var el = _.cloneDeep(document.body, function(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * });
         *
         * el === document.body
         * // => false
         * el.nodeName
         * // => BODY
         * el.childNodes.length;
         * // => 20
         */
        function cloneDeep(value, customizer, thisArg) {
            return typeof customizer == 'function'
                ? baseClone(value, true, bindCallback(customizer, thisArg, 1))
                : baseClone(value, true);
        }

        /**
         * Checks if `value` is greater than `other`.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @returns {boolean} Returns `true` if `value` is greater than `other`, else `false`.
         * @example
         *
         * _.gt(3, 1);
         * // => true
         *
         * _.gt(3, 3);
         * // => false
         *
         * _.gt(1, 3);
         * // => false
         */
        function gt(value, other) {
            return value > other;
        }

        /**
         * Checks if `value` is greater than or equal to `other`.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @returns {boolean} Returns `true` if `value` is greater than or equal to `other`, else `false`.
         * @example
         *
         * _.gte(3, 1);
         * // => true
         *
         * _.gte(3, 3);
         * // => true
         *
         * _.gte(1, 3);
         * // => false
         */
        function gte(value, other) {
            return value >= other;
        }

        /**
         * Checks if `value` is classified as an `arguments` object.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
         * @example
         *
         * _.isArguments(function() { return arguments; }());
         * // => true
         *
         * _.isArguments([1, 2, 3]);
         * // => false
         */
        function isArguments(value) {
            return isObjectLike(value) && isArrayLike(value) &&
                hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
        }

        /**
         * Checks if `value` is classified as an `Array` object.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
         * @example
         *
         * _.isArray([1, 2, 3]);
         * // => true
         *
         * _.isArray(function() { return arguments; }());
         * // => false
         */
        var isArray = nativeIsArray || function(value) {
                return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
            };

        /**
         * Checks if `value` is classified as a boolean primitive or object.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
         * @example
         *
         * _.isBoolean(false);
         * // => true
         *
         * _.isBoolean(null);
         * // => false
         */
        function isBoolean(value) {
            return value === true || value === false || (isObjectLike(value) && objToString.call(value) == boolTag);
        }

        /**
         * Checks if `value` is classified as a `Date` object.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
         * @example
         *
         * _.isDate(new Date);
         * // => true
         *
         * _.isDate('Mon April 23 2012');
         * // => false
         */
        function isDate(value) {
            return isObjectLike(value) && objToString.call(value) == dateTag;
        }

        /**
         * Checks if `value` is a DOM element.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
         * @example
         *
         * _.isElement(document.body);
         * // => true
         *
         * _.isElement('<body>');
         * // => false
         */
        function isElement(value) {
            return !!value && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
        }

        /**
         * Checks if `value` is empty. A value is considered empty unless it is an
         * `arguments` object, array, string, or jQuery-like collection with a length
         * greater than `0` or an object with own enumerable properties.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {Array|Object|string} value The value to inspect.
         * @returns {boolean} Returns `true` if `value` is empty, else `false`.
         * @example
         *
         * _.isEmpty(null);
         * // => true
         *
         * _.isEmpty(true);
         * // => true
         *
         * _.isEmpty(1);
         * // => true
         *
         * _.isEmpty([1, 2, 3]);
         * // => false
         *
         * _.isEmpty({ 'a': 1 });
         * // => false
         */
        function isEmpty(value) {
            if (value == null) {
                return true;
            }
            if (isArrayLike(value) && (isArray(value) || isString(value) || isArguments(value) ||
                (isObjectLike(value) && isFunction(value.splice)))) {
                return !value.length;
            }
            return !keys(value).length;
        }

        /**
         * Performs a deep comparison between two values to determine if they are
         * equivalent. If `customizer` is provided it is invoked to compare values.
         * If `customizer` returns `undefined` comparisons are handled by the method
         * instead. The `customizer` is bound to `thisArg` and invoked with three
         * arguments: (value, other [, index|key]).
         *
         * **Note:** This method supports comparing arrays, booleans, `Date` objects,
         * numbers, `Object` objects, regexes, and strings. Objects are compared by
         * their own, not inherited, enumerable properties. Functions and DOM nodes
         * are **not** supported. Provide a customizer function to extend support
         * for comparing other values.
         *
         * @static
         * @memberOf _
         * @alias eq
         * @category Lang
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @param {Function} [customizer] The function to customize value comparisons.
         * @param {*} [thisArg] The `this` binding of `customizer`.
         * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * var object = { 'user': 'fred' };
         * var other = { 'user': 'fred' };
         *
         * object == other;
         * // => false
         *
         * _.isEqual(object, other);
         * // => true
         *
         * // using a customizer callback
         * var array = ['hello', 'goodbye'];
         * var other = ['hi', 'goodbye'];
         *
         * _.isEqual(array, other, function(value, other) {
     *   if (_.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/)) {
     *     return true;
     *   }
     * });
         * // => true
         */
        function isEqual(value, other, customizer, thisArg) {
            customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
            var result = customizer ? customizer(value, other) : undefined;
            return  result === undefined ? baseIsEqual(value, other, customizer) : !!result;
        }

        /**
         * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
         * `SyntaxError`, `TypeError`, or `URIError` object.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
         * @example
         *
         * _.isError(new Error);
         * // => true
         *
         * _.isError(Error);
         * // => false
         */
        function isError(value) {
            return isObjectLike(value) && typeof value.message == 'string' && objToString.call(value) == errorTag;
        }

        /**
         * Checks if `value` is a finite primitive number.
         *
         * **Note:** This method is based on [`Number.isFinite`](http://ecma-international.org/ecma-262/6.0/#sec-number.isfinite).
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
         * @example
         *
         * _.isFinite(10);
         * // => true
         *
         * _.isFinite('10');
         * // => false
         *
         * _.isFinite(true);
         * // => false
         *
         * _.isFinite(Object(10));
         * // => false
         *
         * _.isFinite(Infinity);
         * // => false
         */
        function isFinite(value) {
            return typeof value == 'number' && nativeIsFinite(value);
        }

        /**
         * Checks if `value` is classified as a `Function` object.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
         * @example
         *
         * _.isFunction(_);
         * // => true
         *
         * _.isFunction(/abc/);
         * // => false
         */
        function isFunction(value) {
            // The use of `Object#toString` avoids issues with the `typeof` operator
            // in older versions of Chrome and Safari which return 'function' for regexes
            // and Safari 8 equivalents which return 'object' for typed array constructors.
            return isObject(value) && objToString.call(value) == funcTag;
        }

        /**
         * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
         * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an object, else `false`.
         * @example
         *
         * _.isObject({});
         * // => true
         *
         * _.isObject([1, 2, 3]);
         * // => true
         *
         * _.isObject(1);
         * // => false
         */
        function isObject(value) {
            // Avoid a V8 JIT bug in Chrome 19-20.
            // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
            var type = typeof value;
            return !!value && (type == 'object' || type == 'function');
        }

        /**
         * Performs a deep comparison between `object` and `source` to determine if
         * `object` contains equivalent property values. If `customizer` is provided
         * it is invoked to compare values. If `customizer` returns `undefined`
         * comparisons are handled by the method instead. The `customizer` is bound
         * to `thisArg` and invoked with three arguments: (value, other, index|key).
         *
         * **Note:** This method supports comparing properties of arrays, booleans,
         * `Date` objects, numbers, `Object` objects, regexes, and strings. Functions
         * and DOM nodes are **not** supported. Provide a customizer function to extend
         * support for comparing other values.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {Object} object The object to inspect.
         * @param {Object} source The object of property values to match.
         * @param {Function} [customizer] The function to customize value comparisons.
         * @param {*} [thisArg] The `this` binding of `customizer`.
         * @returns {boolean} Returns `true` if `object` is a match, else `false`.
         * @example
         *
         * var object = { 'user': 'fred', 'age': 40 };
         *
         * _.isMatch(object, { 'age': 40 });
         * // => true
         *
         * _.isMatch(object, { 'age': 36 });
         * // => false
         *
         * // using a customizer callback
         * var object = { 'greeting': 'hello' };
         * var source = { 'greeting': 'hi' };
         *
         * _.isMatch(object, source, function(value, other) {
     *   return _.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/) || undefined;
     * });
         * // => true
         */
        function isMatch(object, source, customizer, thisArg) {
            customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
            return baseIsMatch(object, getMatchData(source), customizer);
        }

        /**
         * Checks if `value` is `NaN`.
         *
         * **Note:** This method is not the same as [`isNaN`](https://es5.github.io/#x15.1.2.4)
         * which returns `true` for `undefined` and other non-numeric values.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
         * @example
         *
         * _.isNaN(NaN);
         * // => true
         *
         * _.isNaN(new Number(NaN));
         * // => true
         *
         * isNaN(undefined);
         * // => true
         *
         * _.isNaN(undefined);
         * // => false
         */
        function isNaN(value) {
            // An `NaN` primitive is the only value that is not equal to itself.
            // Perform the `toStringTag` check first to avoid errors with some host objects in IE.
            return isNumber(value) && value != +value;
        }

        /**
         * Checks if `value` is a native function.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
         * @example
         *
         * _.isNative(Array.prototype.push);
         * // => true
         *
         * _.isNative(_);
         * // => false
         */
        function isNative(value) {
            if (value == null) {
                return false;
            }
            if (isFunction(value)) {
                return reIsNative.test(fnToString.call(value));
            }
            return isObjectLike(value) && reIsHostCtor.test(value);
        }

        /**
         * Checks if `value` is `null`.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
         * @example
         *
         * _.isNull(null);
         * // => true
         *
         * _.isNull(void 0);
         * // => false
         */
        function isNull(value) {
            return value === null;
        }

        /**
         * Checks if `value` is classified as a `Number` primitive or object.
         *
         * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
         * as numbers, use the `_.isFinite` method.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
         * @example
         *
         * _.isNumber(8.4);
         * // => true
         *
         * _.isNumber(NaN);
         * // => true
         *
         * _.isNumber('8.4');
         * // => false
         */
        function isNumber(value) {
            return typeof value == 'number' || (isObjectLike(value) && objToString.call(value) == numberTag);
        }

        /**
         * Checks if `value` is a plain object, that is, an object created by the
         * `Object` constructor or one with a `[[Prototype]]` of `null`.
         *
         * **Note:** This method assumes objects created by the `Object` constructor
         * have no inherited enumerable properties.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
         * @example
         *
         * function Foo() {
     *   this.a = 1;
     * }
         *
         * _.isPlainObject(new Foo);
         * // => false
         *
         * _.isPlainObject([1, 2, 3]);
         * // => false
         *
         * _.isPlainObject({ 'x': 0, 'y': 0 });
         * // => true
         *
         * _.isPlainObject(Object.create(null));
         * // => true
         */
        function isPlainObject(value) {
            var Ctor;

            // Exit early for non `Object` objects.
            if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
                (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
                return false;
            }
            // IE < 9 iterates inherited properties before own properties. If the first
            // iterated property is an object's own property then there are no inherited
            // enumerable properties.
            var result;
            // In most environments an object's own properties are iterated before
            // its inherited properties. If the last iterated property is an object's
            // own property then there are no inherited enumerable properties.
            baseForIn(value, function(subValue, key) {
                result = key;
            });
            return result === undefined || hasOwnProperty.call(value, result);
        }

        /**
         * Checks if `value` is classified as a `RegExp` object.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
         * @example
         *
         * _.isRegExp(/abc/);
         * // => true
         *
         * _.isRegExp('/abc/');
         * // => false
         */
        function isRegExp(value) {
            return isObject(value) && objToString.call(value) == regexpTag;
        }

        /**
         * Checks if `value` is classified as a `String` primitive or object.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
         * @example
         *
         * _.isString('abc');
         * // => true
         *
         * _.isString(1);
         * // => false
         */
        function isString(value) {
            return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
        }

        /**
         * Checks if `value` is classified as a typed array.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
         * @example
         *
         * _.isTypedArray(new Uint8Array);
         * // => true
         *
         * _.isTypedArray([]);
         * // => false
         */
        function isTypedArray(value) {
            return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
        }

        /**
         * Checks if `value` is `undefined`.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
         * @example
         *
         * _.isUndefined(void 0);
         * // => true
         *
         * _.isUndefined(null);
         * // => false
         */
        function isUndefined(value) {
            return value === undefined;
        }

        /**
         * Checks if `value` is less than `other`.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @returns {boolean} Returns `true` if `value` is less than `other`, else `false`.
         * @example
         *
         * _.lt(1, 3);
         * // => true
         *
         * _.lt(3, 3);
         * // => false
         *
         * _.lt(3, 1);
         * // => false
         */
        function lt(value, other) {
            return value < other;
        }

        /**
         * Checks if `value` is less than or equal to `other`.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @returns {boolean} Returns `true` if `value` is less than or equal to `other`, else `false`.
         * @example
         *
         * _.lte(1, 3);
         * // => true
         *
         * _.lte(3, 3);
         * // => true
         *
         * _.lte(3, 1);
         * // => false
         */
        function lte(value, other) {
            return value <= other;
        }

        /**
         * Converts `value` to an array.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to convert.
         * @returns {Array} Returns the converted array.
         * @example
         *
         * (function() {
     *   return _.toArray(arguments).slice(1);
     * }(1, 2, 3));
         * // => [2, 3]
         */
        function toArray(value) {
            var length = value ? getLength(value) : 0;
            if (!isLength(length)) {
                return values(value);
            }
            if (!length) {
                return [];
            }
            return arrayCopy(value);
        }

        /**
         * Converts `value` to a plain object flattening inherited enumerable
         * properties of `value` to own properties of the plain object.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to convert.
         * @returns {Object} Returns the converted plain object.
         * @example
         *
         * function Foo() {
     *   this.b = 2;
     * }
         *
         * Foo.prototype.c = 3;
         *
         * _.assign({ 'a': 1 }, new Foo);
         * // => { 'a': 1, 'b': 2 }
         *
         * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
         * // => { 'a': 1, 'b': 2, 'c': 3 }
         */
        function toPlainObject(value) {
            return baseCopy(value, keysIn(value));
        }

        /*------------------------------------------------------------------------*/

        /**
         * Recursively merges own enumerable properties of the source object(s), that
         * don't resolve to `undefined` into the destination object. Subsequent sources
         * overwrite property assignments of previous sources. If `customizer` is
         * provided it is invoked to produce the merged values of the destination and
         * source properties. If `customizer` returns `undefined` merging is handled
         * by the method instead. The `customizer` is bound to `thisArg` and invoked
         * with five arguments: (objectValue, sourceValue, key, object, source).
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The destination object.
         * @param {...Object} [sources] The source objects.
         * @param {Function} [customizer] The function to customize assigned values.
         * @param {*} [thisArg] The `this` binding of `customizer`.
         * @returns {Object} Returns `object`.
         * @example
         *
         * var users = {
     *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
     * };
         *
         * var ages = {
     *   'data': [{ 'age': 36 }, { 'age': 40 }]
     * };
         *
         * _.merge(users, ages);
         * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
         *
         * // using a customizer callback
         * var object = {
     *   'fruits': ['apple'],
     *   'vegetables': ['beet']
     * };
         *
         * var other = {
     *   'fruits': ['banana'],
     *   'vegetables': ['carrot']
     * };
         *
         * _.merge(object, other, function(a, b) {
     *   if (_.isArray(a)) {
     *     return a.concat(b);
     *   }
     * });
         * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
         */
        var merge = createAssigner(baseMerge);

        /**
         * Assigns own enumerable properties of source object(s) to the destination
         * object. Subsequent sources overwrite property assignments of previous sources.
         * If `customizer` is provided it is invoked to produce the assigned values.
         * The `customizer` is bound to `thisArg` and invoked with five arguments:
         * (objectValue, sourceValue, key, object, source).
         *
         * **Note:** This method mutates `object` and is based on
         * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
         *
         * @static
         * @memberOf _
         * @alias extend
         * @category Object
         * @param {Object} object The destination object.
         * @param {...Object} [sources] The source objects.
         * @param {Function} [customizer] The function to customize assigned values.
         * @param {*} [thisArg] The `this` binding of `customizer`.
         * @returns {Object} Returns `object`.
         * @example
         *
         * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
         * // => { 'user': 'fred', 'age': 40 }
         *
         * // using a customizer callback
         * var defaults = _.partialRight(_.assign, function(value, other) {
     *   return _.isUndefined(value) ? other : value;
     * });
         *
         * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
         * // => { 'user': 'barney', 'age': 36 }
         */
        var assign = createAssigner(function(object, source, customizer) {
            return customizer
                ? assignWith(object, source, customizer)
                : baseAssign(object, source);
        });

        /**
         * Creates an object that inherits from the given `prototype` object. If a
         * `properties` object is provided its own enumerable properties are assigned
         * to the created object.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} prototype The object to inherit from.
         * @param {Object} [properties] The properties to assign to the object.
         * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
         * @returns {Object} Returns the new object.
         * @example
         *
         * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
         *
         * function Circle() {
     *   Shape.call(this);
     * }
         *
         * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
         *
         * var circle = new Circle;
         * circle instanceof Circle;
         * // => true
         *
         * circle instanceof Shape;
         * // => true
         */
        function create(prototype, properties, guard) {
            var result = baseCreate(prototype);
            if (guard && isIterateeCall(prototype, properties, guard)) {
                properties = undefined;
            }
            return properties ? baseAssign(result, properties) : result;
        }

        /**
         * Assigns own enumerable properties of source object(s) to the destination
         * object for all destination properties that resolve to `undefined`. Once a
         * property is set, additional values of the same property are ignored.
         *
         * **Note:** This method mutates `object`.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The destination object.
         * @param {...Object} [sources] The source objects.
         * @returns {Object} Returns `object`.
         * @example
         *
         * _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
         * // => { 'user': 'barney', 'age': 36 }
         */
        var defaults = createDefaults(assign, assignDefaults);

        /**
         * This method is like `_.defaults` except that it recursively assigns
         * default properties.
         *
         * **Note:** This method mutates `object`.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The destination object.
         * @param {...Object} [sources] The source objects.
         * @returns {Object} Returns `object`.
         * @example
         *
         * _.defaultsDeep({ 'user': { 'name': 'barney' } }, { 'user': { 'name': 'fred', 'age': 36 } });
         * // => { 'user': { 'name': 'barney', 'age': 36 } }
         *
         */
        var defaultsDeep = createDefaults(merge, mergeDefaults);

        /**
         * This method is like `_.find` except that it returns the key of the first
         * element `predicate` returns truthy for instead of the element itself.
         *
         * If a property name is provided for `predicate` the created `_.property`
         * style callback returns the property value of the given element.
         *
         * If a value is also provided for `thisArg` the created `_.matchesProperty`
         * style callback returns `true` for elements that have a matching property
         * value, else `false`.
         *
         * If an object is provided for `predicate` the created `_.matches` style
         * callback returns `true` for elements that have the properties of the given
         * object, else `false`.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The object to search.
         * @param {Function|Object|string} [predicate=_.identity] The function invoked
         *  per iteration.
         * @param {*} [thisArg] The `this` binding of `predicate`.
         * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
         * @example
         *
         * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
         *
         * _.findKey(users, function(chr) {
     *   return chr.age < 40;
     * });
         * // => 'barney' (iteration order is not guaranteed)
         *
         * // using the `_.matches` callback shorthand
         * _.findKey(users, { 'age': 1, 'active': true });
         * // => 'pebbles'
         *
         * // using the `_.matchesProperty` callback shorthand
         * _.findKey(users, 'active', false);
         * // => 'fred'
         *
         * // using the `_.property` callback shorthand
         * _.findKey(users, 'active');
         * // => 'barney'
         */
        var findKey = createFindKey(baseForOwn);

        /**
         * This method is like `_.findKey` except that it iterates over elements of
         * a collection in the opposite order.
         *
         * If a property name is provided for `predicate` the created `_.property`
         * style callback returns the property value of the given element.
         *
         * If a value is also provided for `thisArg` the created `_.matchesProperty`
         * style callback returns `true` for elements that have a matching property
         * value, else `false`.
         *
         * If an object is provided for `predicate` the created `_.matches` style
         * callback returns `true` for elements that have the properties of the given
         * object, else `false`.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The object to search.
         * @param {Function|Object|string} [predicate=_.identity] The function invoked
         *  per iteration.
         * @param {*} [thisArg] The `this` binding of `predicate`.
         * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
         * @example
         *
         * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
         *
         * _.findLastKey(users, function(chr) {
     *   return chr.age < 40;
     * });
         * // => returns `pebbles` assuming `_.findKey` returns `barney`
         *
         * // using the `_.matches` callback shorthand
         * _.findLastKey(users, { 'age': 36, 'active': true });
         * // => 'barney'
         *
         * // using the `_.matchesProperty` callback shorthand
         * _.findLastKey(users, 'active', false);
         * // => 'fred'
         *
         * // using the `_.property` callback shorthand
         * _.findLastKey(users, 'active');
         * // => 'pebbles'
         */
        var findLastKey = createFindKey(baseForOwnRight);

        /**
         * Iterates over own and inherited enumerable properties of an object invoking
         * `iteratee` for each property. The `iteratee` is bound to `thisArg` and invoked
         * with three arguments: (value, key, object). Iteratee functions may exit
         * iteration early by explicitly returning `false`.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The object to iterate over.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @param {*} [thisArg] The `this` binding of `iteratee`.
         * @returns {Object} Returns `object`.
         * @example
         *
         * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
         *
         * Foo.prototype.c = 3;
         *
         * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
         * // => logs 'a', 'b', and 'c' (iteration order is not guaranteed)
         */
        var forIn = createForIn(baseFor);

        /**
         * This method is like `_.forIn` except that it iterates over properties of
         * `object` in the opposite order.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The object to iterate over.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @param {*} [thisArg] The `this` binding of `iteratee`.
         * @returns {Object} Returns `object`.
         * @example
         *
         * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
         *
         * Foo.prototype.c = 3;
         *
         * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
         * // => logs 'c', 'b', and 'a' assuming `_.forIn ` logs 'a', 'b', and 'c'
         */
        var forInRight = createForIn(baseForRight);

        /**
         * Iterates over own enumerable properties of an object invoking `iteratee`
         * for each property. The `iteratee` is bound to `thisArg` and invoked with
         * three arguments: (value, key, object). Iteratee functions may exit iteration
         * early by explicitly returning `false`.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The object to iterate over.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @param {*} [thisArg] The `this` binding of `iteratee`.
         * @returns {Object} Returns `object`.
         * @example
         *
         * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
         *
         * Foo.prototype.c = 3;
         *
         * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
         * // => logs 'a' and 'b' (iteration order is not guaranteed)
         */
        var forOwn = createForOwn(baseForOwn);

        /**
         * This method is like `_.forOwn` except that it iterates over properties of
         * `object` in the opposite order.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The object to iterate over.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @param {*} [thisArg] The `this` binding of `iteratee`.
         * @returns {Object} Returns `object`.
         * @example
         *
         * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
         *
         * Foo.prototype.c = 3;
         *
         * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
         * // => logs 'b' and 'a' assuming `_.forOwn` logs 'a' and 'b'
         */
        var forOwnRight = createForOwn(baseForOwnRight);

        /**
         * Creates an array of function property names from all enumerable properties,
         * own and inherited, of `object`.
         *
         * @static
         * @memberOf _
         * @alias methods
         * @category Object
         * @param {Object} object The object to inspect.
         * @returns {Array} Returns the new array of property names.
         * @example
         *
         * _.functions(_);
         * // => ['after', 'ary', 'assign', ...]
         */
        function functions(object) {
            return baseFunctions(object, keysIn(object));
        }

        /**
         * Gets the property value at `path` of `object`. If the resolved value is
         * `undefined` the `defaultValue` is used in its place.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The object to query.
         * @param {Array|string} path The path of the property to get.
         * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
         * @returns {*} Returns the resolved value.
         * @example
         *
         * var object = { 'a': [{ 'b': { 'c': 3 } }] };
         *
         * _.get(object, 'a[0].b.c');
         * // => 3
         *
         * _.get(object, ['a', '0', 'b', 'c']);
         * // => 3
         *
         * _.get(object, 'a.b.c', 'default');
         * // => 'default'
         */
        function get(object, path, defaultValue) {
            var result = object == null ? undefined : baseGet(object, toPath(path), path + '');
            return result === undefined ? defaultValue : result;
        }

        /**
         * Checks if `path` is a direct property.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The object to query.
         * @param {Array|string} path The path to check.
         * @returns {boolean} Returns `true` if `path` is a direct property, else `false`.
         * @example
         *
         * var object = { 'a': { 'b': { 'c': 3 } } };
         *
         * _.has(object, 'a');
         * // => true
         *
         * _.has(object, 'a.b.c');
         * // => true
         *
         * _.has(object, ['a', 'b', 'c']);
         * // => true
         */
        function has(object, path) {
            if (object == null) {
                return false;
            }
            var result = hasOwnProperty.call(object, path);
            if (!result && !isKey(path)) {
                path = toPath(path);
                object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
                if (object == null) {
                    return false;
                }
                path = last(path);
                result = hasOwnProperty.call(object, path);
            }
            return result || (isLength(object.length) && isIndex(path, object.length) &&
                (isArray(object) || isArguments(object)));
        }

        /**
         * Creates an object composed of the inverted keys and values of `object`.
         * If `object` contains duplicate values, subsequent values overwrite property
         * assignments of previous values unless `multiValue` is `true`.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The object to invert.
         * @param {boolean} [multiValue] Allow multiple values per key.
         * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
         * @returns {Object} Returns the new inverted object.
         * @example
         *
         * var object = { 'a': 1, 'b': 2, 'c': 1 };
         *
         * _.invert(object);
         * // => { '1': 'c', '2': 'b' }
         *
         * // with `multiValue`
         * _.invert(object, true);
         * // => { '1': ['a', 'c'], '2': ['b'] }
         */
        function invert(object, multiValue, guard) {
            if (guard && isIterateeCall(object, multiValue, guard)) {
                multiValue = undefined;
            }
            var index = -1,
                props = keys(object),
                length = props.length,
                result = {};

            while (++index < length) {
                var key = props[index],
                    value = object[key];

                if (multiValue) {
                    if (hasOwnProperty.call(result, value)) {
                        result[value].push(key);
                    } else {
                        result[value] = [key];
                    }
                }
                else {
                    result[value] = key;
                }
            }
            return result;
        }

        /**
         * Creates an array of the own enumerable property names of `object`.
         *
         * **Note:** Non-object values are coerced to objects. See the
         * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
         * for more details.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names.
         * @example
         *
         * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
         *
         * Foo.prototype.c = 3;
         *
         * _.keys(new Foo);
         * // => ['a', 'b'] (iteration order is not guaranteed)
         *
         * _.keys('hi');
         * // => ['0', '1']
         */
        var keys = !nativeKeys ? shimKeys : function(object) {
            var Ctor = object == null ? undefined : object.constructor;
            if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
                (typeof object != 'function' && isArrayLike(object))) {
                return shimKeys(object);
            }
            return isObject(object) ? nativeKeys(object) : [];
        };

        /**
         * Creates an array of the own and inherited enumerable property names of `object`.
         *
         * **Note:** Non-object values are coerced to objects.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names.
         * @example
         *
         * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
         *
         * Foo.prototype.c = 3;
         *
         * _.keysIn(new Foo);
         * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
         */
        function keysIn(object) {
            if (object == null) {
                return [];
            }
            if (!isObject(object)) {
                object = Object(object);
            }
            var length = object.length;
            length = (length && isLength(length) &&
                (isArray(object) || isArguments(object)) && length) || 0;

            var Ctor = object.constructor,
                index = -1,
                isProto = typeof Ctor == 'function' && Ctor.prototype === object,
                result = Array(length),
                skipIndexes = length > 0;

            while (++index < length) {
                result[index] = (index + '');
            }
            for (var key in object) {
                if (!(skipIndexes && isIndex(key, length)) &&
                    !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
                    result.push(key);
                }
            }
            return result;
        }

        /**
         * The opposite of `_.mapValues`; this method creates an object with the
         * same values as `object` and keys generated by running each own enumerable
         * property of `object` through `iteratee`.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The object to iterate over.
         * @param {Function|Object|string} [iteratee=_.identity] The function invoked
         *  per iteration.
         * @param {*} [thisArg] The `this` binding of `iteratee`.
         * @returns {Object} Returns the new mapped object.
         * @example
         *
         * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
         * // => { 'a1': 1, 'b2': 2 }
         */
        var mapKeys = createObjectMapper(true);

        /**
         * Creates an object with the same keys as `object` and values generated by
         * running each own enumerable property of `object` through `iteratee`. The
         * iteratee function is bound to `thisArg` and invoked with three arguments:
         * (value, key, object).
         *
         * If a property name is provided for `iteratee` the created `_.property`
         * style callback returns the property value of the given element.
         *
         * If a value is also provided for `thisArg` the created `_.matchesProperty`
         * style callback returns `true` for elements that have a matching property
         * value, else `false`.
         *
         * If an object is provided for `iteratee` the created `_.matches` style
         * callback returns `true` for elements that have the properties of the given
         * object, else `false`.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The object to iterate over.
         * @param {Function|Object|string} [iteratee=_.identity] The function invoked
         *  per iteration.
         * @param {*} [thisArg] The `this` binding of `iteratee`.
         * @returns {Object} Returns the new mapped object.
         * @example
         *
         * _.mapValues({ 'a': 1, 'b': 2 }, function(n) {
     *   return n * 3;
     * });
         * // => { 'a': 3, 'b': 6 }
         *
         * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
         *
         * // using the `_.property` callback shorthand
         * _.mapValues(users, 'age');
         * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
         */
        var mapValues = createObjectMapper();

        /**
         * The opposite of `_.pick`; this method creates an object composed of the
         * own and inherited enumerable properties of `object` that are not omitted.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The source object.
         * @param {Function|...(string|string[])} [predicate] The function invoked per
         *  iteration or property names to omit, specified as individual property
         *  names or arrays of property names.
         * @param {*} [thisArg] The `this` binding of `predicate`.
         * @returns {Object} Returns the new object.
         * @example
         *
         * var object = { 'user': 'fred', 'age': 40 };
         *
         * _.omit(object, 'age');
         * // => { 'user': 'fred' }
         *
         * _.omit(object, _.isNumber);
         * // => { 'user': 'fred' }
         */
        var omit = restParam(function(object, props) {
            if (object == null) {
                return {};
            }
            if (typeof props[0] != 'function') {
                var props = arrayMap(baseFlatten(props), String);
                return pickByArray(object, baseDifference(keysIn(object), props));
            }
            var predicate = bindCallback(props[0], props[1], 3);
            return pickByCallback(object, function(value, key, object) {
                return !predicate(value, key, object);
            });
        });

        /**
         * Creates a two dimensional array of the key-value pairs for `object`,
         * e.g. `[[key1, value1], [key2, value2]]`.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The object to query.
         * @returns {Array} Returns the new array of key-value pairs.
         * @example
         *
         * _.pairs({ 'barney': 36, 'fred': 40 });
         * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
         */
        function pairs(object) {
            object = toObject(object);

            var index = -1,
                props = keys(object),
                length = props.length,
                result = Array(length);

            while (++index < length) {
                var key = props[index];
                result[index] = [key, object[key]];
            }
            return result;
        }

        /**
         * Creates an object composed of the picked `object` properties. Property
         * names may be specified as individual arguments or as arrays of property
         * names. If `predicate` is provided it is invoked for each property of `object`
         * picking the properties `predicate` returns truthy for. The predicate is
         * bound to `thisArg` and invoked with three arguments: (value, key, object).
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The source object.
         * @param {Function|...(string|string[])} [predicate] The function invoked per
         *  iteration or property names to pick, specified as individual property
         *  names or arrays of property names.
         * @param {*} [thisArg] The `this` binding of `predicate`.
         * @returns {Object} Returns the new object.
         * @example
         *
         * var object = { 'user': 'fred', 'age': 40 };
         *
         * _.pick(object, 'user');
         * // => { 'user': 'fred' }
         *
         * _.pick(object, _.isString);
         * // => { 'user': 'fred' }
         */
        var pick = restParam(function(object, props) {
            if (object == null) {
                return {};
            }
            return typeof props[0] == 'function'
                ? pickByCallback(object, bindCallback(props[0], props[1], 3))
                : pickByArray(object, baseFlatten(props));
        });

        /**
         * This method is like `_.get` except that if the resolved value is a function
         * it is invoked with the `this` binding of its parent object and its result
         * is returned.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The object to query.
         * @param {Array|string} path The path of the property to resolve.
         * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
         * @returns {*} Returns the resolved value.
         * @example
         *
         * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
         *
         * _.result(object, 'a[0].b.c1');
         * // => 3
         *
         * _.result(object, 'a[0].b.c2');
         * // => 4
         *
         * _.result(object, 'a.b.c', 'default');
         * // => 'default'
         *
         * _.result(object, 'a.b.c', _.constant('default'));
         * // => 'default'
         */
        function result(object, path, defaultValue) {
            var result = object == null ? undefined : object[path];
            if (result === undefined) {
                if (object != null && !isKey(path, object)) {
                    path = toPath(path);
                    object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
                    result = object == null ? undefined : object[last(path)];
                }
                result = result === undefined ? defaultValue : result;
            }
            return isFunction(result) ? result.call(object) : result;
        }

        /**
         * Sets the property value of `path` on `object`. If a portion of `path`
         * does not exist it is created.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The object to augment.
         * @param {Array|string} path The path of the property to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns `object`.
         * @example
         *
         * var object = { 'a': [{ 'b': { 'c': 3 } }] };
         *
         * _.set(object, 'a[0].b.c', 4);
         * console.log(object.a[0].b.c);
         * // => 4
         *
         * _.set(object, 'x[0].y.z', 5);
         * console.log(object.x[0].y.z);
         * // => 5
         */
        function set(object, path, value) {
            if (object == null) {
                return object;
            }
            var pathKey = (path + '');
            path = (object[pathKey] != null || isKey(path, object)) ? [pathKey] : toPath(path);

            var index = -1,
                length = path.length,
                lastIndex = length - 1,
                nested = object;

            while (nested != null && ++index < length) {
                var key = path[index];
                if (isObject(nested)) {
                    if (index == lastIndex) {
                        nested[key] = value;
                    } else if (nested[key] == null) {
                        nested[key] = isIndex(path[index + 1]) ? [] : {};
                    }
                }
                nested = nested[key];
            }
            return object;
        }

        /**
         * An alternative to `_.reduce`; this method transforms `object` to a new
         * `accumulator` object which is the result of running each of its own enumerable
         * properties through `iteratee`, with each invocation potentially mutating
         * the `accumulator` object. The `iteratee` is bound to `thisArg` and invoked
         * with four arguments: (accumulator, value, key, object). Iteratee functions
         * may exit iteration early by explicitly returning `false`.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Array|Object} object The object to iterate over.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @param {*} [accumulator] The custom accumulator value.
         * @param {*} [thisArg] The `this` binding of `iteratee`.
         * @returns {*} Returns the accumulated value.
         * @example
         *
         * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * });
         * // => [4, 9]
         *
         * _.transform({ 'a': 1, 'b': 2 }, function(result, n, key) {
     *   result[key] = n * 3;
     * });
         * // => { 'a': 3, 'b': 6 }
         */
        function transform(object, iteratee, accumulator, thisArg) {
            var isArr = isArray(object) || isTypedArray(object);
            iteratee = getCallback(iteratee, thisArg, 4);

            if (accumulator == null) {
                if (isArr || isObject(object)) {
                    var Ctor = object.constructor;
                    if (isArr) {
                        accumulator = isArray(object) ? new Ctor : [];
                    } else {
                        accumulator = baseCreate(isFunction(Ctor) ? Ctor.prototype : undefined);
                    }
                } else {
                    accumulator = {};
                }
            }
            (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
                return iteratee(accumulator, value, index, object);
            });
            return accumulator;
        }

        /**
         * Creates an array of the own enumerable property values of `object`.
         *
         * **Note:** Non-object values are coerced to objects.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property values.
         * @example
         *
         * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
         *
         * Foo.prototype.c = 3;
         *
         * _.values(new Foo);
         * // => [1, 2] (iteration order is not guaranteed)
         *
         * _.values('hi');
         * // => ['h', 'i']
         */
        function values(object) {
            return baseValues(object, keys(object));
        }

        /**
         * Creates an array of the own and inherited enumerable property values
         * of `object`.
         *
         * **Note:** Non-object values are coerced to objects.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property values.
         * @example
         *
         * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
         *
         * Foo.prototype.c = 3;
         *
         * _.valuesIn(new Foo);
         * // => [1, 2, 3] (iteration order is not guaranteed)
         */
        function valuesIn(object) {
            return baseValues(object, keysIn(object));
        }

        /*------------------------------------------------------------------------*/

        /**
         * Checks if `n` is between `start` and up to but not including, `end`. If
         * `end` is not specified it is set to `start` with `start` then set to `0`.
         *
         * @static
         * @memberOf _
         * @category Number
         * @param {number} n The number to check.
         * @param {number} [start=0] The start of the range.
         * @param {number} end The end of the range.
         * @returns {boolean} Returns `true` if `n` is in the range, else `false`.
         * @example
         *
         * _.inRange(3, 2, 4);
         * // => true
         *
         * _.inRange(4, 8);
         * // => true
         *
         * _.inRange(4, 2);
         * // => false
         *
         * _.inRange(2, 2);
         * // => false
         *
         * _.inRange(1.2, 2);
         * // => true
         *
         * _.inRange(5.2, 4);
         * // => false
         */
        function inRange(value, start, end) {
            start = +start || 0;
            if (end === undefined) {
                end = start;
                start = 0;
            } else {
                end = +end || 0;
            }
            return value >= nativeMin(start, end) && value < nativeMax(start, end);
        }

        /**
         * Produces a random number between `min` and `max` (inclusive). If only one
         * argument is provided a number between `0` and the given number is returned.
         * If `floating` is `true`, or either `min` or `max` are floats, a floating-point
         * number is returned instead of an integer.
         *
         * @static
         * @memberOf _
         * @category Number
         * @param {number} [min=0] The minimum possible value.
         * @param {number} [max=1] The maximum possible value.
         * @param {boolean} [floating] Specify returning a floating-point number.
         * @returns {number} Returns the random number.
         * @example
         *
         * _.random(0, 5);
         * // => an integer between 0 and 5
         *
         * _.random(5);
         * // => also an integer between 0 and 5
         *
         * _.random(5, true);
         * // => a floating-point number between 0 and 5
         *
         * _.random(1.2, 5.2);
         * // => a floating-point number between 1.2 and 5.2
         */
        function random(min, max, floating) {
            if (floating && isIterateeCall(min, max, floating)) {
                max = floating = undefined;
            }
            var noMin = min == null,
                noMax = max == null;

            if (floating == null) {
                if (noMax && typeof min == 'boolean') {
                    floating = min;
                    min = 1;
                }
                else if (typeof max == 'boolean') {
                    floating = max;
                    noMax = true;
                }
            }
            if (noMin && noMax) {
                max = 1;
                noMax = false;
            }
            min = +min || 0;
            if (noMax) {
                max = min;
                min = 0;
            } else {
                max = +max || 0;
            }
            if (floating || min % 1 || max % 1) {
                var rand = nativeRandom();
                return nativeMin(min + (rand * (max - min + parseFloat('1e-' + ((rand + '').length - 1)))), max);
            }
            return baseRandom(min, max);
        }

        /*------------------------------------------------------------------------*/

        /**
         * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
         *
         * @static
         * @memberOf _
         * @category String
         * @param {string} [string=''] The string to convert.
         * @returns {string} Returns the camel cased string.
         * @example
         *
         * _.camelCase('Foo Bar');
         * // => 'fooBar'
         *
         * _.camelCase('--foo-bar');
         * // => 'fooBar'
         *
         * _.camelCase('__foo_bar__');
         * // => 'fooBar'
         */
        var camelCase = createCompounder(function(result, word, index) {
            word = word.toLowerCase();
            return result + (index ? (word.charAt(0).toUpperCase() + word.slice(1)) : word);
        });

        /**
         * Capitalizes the first character of `string`.
         *
         * @static
         * @memberOf _
         * @category String
         * @param {string} [string=''] The string to capitalize.
         * @returns {string} Returns the capitalized string.
         * @example
         *
         * _.capitalize('fred');
         * // => 'Fred'
         */
        function capitalize(string) {
            string = baseToString(string);
            return string && (string.charAt(0).toUpperCase() + string.slice(1));
        }

        /**
         * Deburrs `string` by converting [latin-1 supplementary letters](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
         * to basic latin letters and removing [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
         *
         * @static
         * @memberOf _
         * @category String
         * @param {string} [string=''] The string to deburr.
         * @returns {string} Returns the deburred string.
         * @example
         *
         * _.deburr('déjà vu');
         * // => 'deja vu'
         */
        function deburr(string) {
            string = baseToString(string);
            return string && string.replace(reLatin1, deburrLetter).replace(reComboMark, '');
        }

        /**
         * Checks if `string` ends with the given target string.
         *
         * @static
         * @memberOf _
         * @category String
         * @param {string} [string=''] The string to search.
         * @param {string} [target] The string to search for.
         * @param {number} [position=string.length] The position to search from.
         * @returns {boolean} Returns `true` if `string` ends with `target`, else `false`.
         * @example
         *
         * _.endsWith('abc', 'c');
         * // => true
         *
         * _.endsWith('abc', 'b');
         * // => false
         *
         * _.endsWith('abc', 'b', 2);
         * // => true
         */
        function endsWith(string, target, position) {
            string = baseToString(string);
            target = (target + '');

            var length = string.length;
            position = position === undefined
                ? length
                : nativeMin(position < 0 ? 0 : (+position || 0), length);

            position -= target.length;
            return position >= 0 && string.indexOf(target, position) == position;
        }

        /**
         * Converts the characters "&", "<", ">", '"', "'", and "\`", in `string` to
         * their corresponding HTML entities.
         *
         * **Note:** No other characters are escaped. To escape additional characters
         * use a third-party library like [_he_](https://mths.be/he).
         *
         * Though the ">" character is escaped for symmetry, characters like
         * ">" and "/" don't need escaping in HTML and have no special meaning
         * unless they're part of a tag or unquoted attribute value.
         * See [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
         * (under "semi-related fun fact") for more details.
         *
         * Backticks are escaped because in Internet Explorer < 9, they can break out
         * of attribute values or HTML comments. See [#59](https://html5sec.org/#59),
         * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
         * [#133](https://html5sec.org/#133) of the [HTML5 Security Cheatsheet](https://html5sec.org/)
         * for more details.
         *
         * When working with HTML you should always [quote attribute values](http://wonko.com/post/html-escaping)
         * to reduce XSS vectors.
         *
         * @static
         * @memberOf _
         * @category String
         * @param {string} [string=''] The string to escape.
         * @returns {string} Returns the escaped string.
         * @example
         *
         * _.escape('fred, barney, & pebbles');
         * // => 'fred, barney, &amp; pebbles'
         */
        function escape(string) {
            // Reset `lastIndex` because in IE < 9 `String#replace` does not.
            string = baseToString(string);
            return (string && reHasUnescapedHtml.test(string))
                ? string.replace(reUnescapedHtml, escapeHtmlChar)
                : string;
        }

        /**
         * Escapes the `RegExp` special characters "\", "/", "^", "$", ".", "|", "?",
         * "*", "+", "(", ")", "[", "]", "{" and "}" in `string`.
         *
         * @static
         * @memberOf _
         * @category String
         * @param {string} [string=''] The string to escape.
         * @returns {string} Returns the escaped string.
         * @example
         *
         * _.escapeRegExp('[lodash](https://lodash.com/)');
         * // => '\[lodash\]\(https:\/\/lodash\.com\/\)'
         */
        function escapeRegExp(string) {
            string = baseToString(string);
            return (string && reHasRegExpChars.test(string))
                ? string.replace(reRegExpChars, escapeRegExpChar)
                : (string || '(?:)');
        }

        /**
         * Converts `string` to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
         *
         * @static
         * @memberOf _
         * @category String
         * @param {string} [string=''] The string to convert.
         * @returns {string} Returns the kebab cased string.
         * @example
         *
         * _.kebabCase('Foo Bar');
         * // => 'foo-bar'
         *
         * _.kebabCase('fooBar');
         * // => 'foo-bar'
         *
         * _.kebabCase('__foo_bar__');
         * // => 'foo-bar'
         */
        var kebabCase = createCompounder(function(result, word, index) {
            return result + (index ? '-' : '') + word.toLowerCase();
        });

        /**
         * Pads `string` on the left and right sides if it's shorter than `length`.
         * Padding characters are truncated if they can't be evenly divided by `length`.
         *
         * @static
         * @memberOf _
         * @category String
         * @param {string} [string=''] The string to pad.
         * @param {number} [length=0] The padding length.
         * @param {string} [chars=' '] The string used as padding.
         * @returns {string} Returns the padded string.
         * @example
         *
         * _.pad('abc', 8);
         * // => '  abc   '
         *
         * _.pad('abc', 8, '_-');
         * // => '_-abc_-_'
         *
         * _.pad('abc', 3);
         * // => 'abc'
         */
        function pad(string, length, chars) {
            string = baseToString(string);
            length = +length;

            var strLength = string.length;
            if (strLength >= length || !nativeIsFinite(length)) {
                return string;
            }
            var mid = (length - strLength) / 2,
                leftLength = nativeFloor(mid),
                rightLength = nativeCeil(mid);

            chars = createPadding('', rightLength, chars);
            return chars.slice(0, leftLength) + string + chars;
        }

        /**
         * Pads `string` on the left side if it's shorter than `length`. Padding
         * characters are truncated if they exceed `length`.
         *
         * @static
         * @memberOf _
         * @category String
         * @param {string} [string=''] The string to pad.
         * @param {number} [length=0] The padding length.
         * @param {string} [chars=' '] The string used as padding.
         * @returns {string} Returns the padded string.
         * @example
         *
         * _.padLeft('abc', 6);
         * // => '   abc'
         *
         * _.padLeft('abc', 6, '_-');
         * // => '_-_abc'
         *
         * _.padLeft('abc', 3);
         * // => 'abc'
         */
        var padLeft = createPadDir();

        /**
         * Pads `string` on the right side if it's shorter than `length`. Padding
         * characters are truncated if they exceed `length`.
         *
         * @static
         * @memberOf _
         * @category String
         * @param {string} [string=''] The string to pad.
         * @param {number} [length=0] The padding length.
         * @param {string} [chars=' '] The string used as padding.
         * @returns {string} Returns the padded string.
         * @example
         *
         * _.padRight('abc', 6);
         * // => 'abc   '
         *
         * _.padRight('abc', 6, '_-');
         * // => 'abc_-_'
         *
         * _.padRight('abc', 3);
         * // => 'abc'
         */
        var padRight = createPadDir(true);

        /**
         * Converts `string` to an integer of the specified radix. If `radix` is
         * `undefined` or `0`, a `radix` of `10` is used unless `value` is a hexadecimal,
         * in which case a `radix` of `16` is used.
         *
         * **Note:** This method aligns with the [ES5 implementation](https://es5.github.io/#E)
         * of `parseInt`.
         *
         * @static
         * @memberOf _
         * @category String
         * @param {string} string The string to convert.
         * @param {number} [radix] The radix to interpret `value` by.
         * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
         * @returns {number} Returns the converted integer.
         * @example
         *
         * _.parseInt('08');
         * // => 8
         *
         * _.map(['6', '08', '10'], _.parseInt);
         * // => [6, 8, 10]
         */
        function parseInt(string, radix, guard) {
            // Firefox < 21 and Opera < 15 follow ES3 for `parseInt`.
            // Chrome fails to trim leading <BOM> whitespace characters.
            // See https://code.google.com/p/v8/issues/detail?id=3109 for more details.
            if (guard ? isIterateeCall(string, radix, guard) : radix == null) {
                radix = 0;
            } else if (radix) {
                radix = +radix;
            }
            string = trim(string);
            return nativeParseInt(string, radix || (reHasHexPrefix.test(string) ? 16 : 10));
        }

        /**
         * Repeats the given string `n` times.
         *
         * @static
         * @memberOf _
         * @category String
         * @param {string} [string=''] The string to repeat.
         * @param {number} [n=0] The number of times to repeat the string.
         * @returns {string} Returns the repeated string.
         * @example
         *
         * _.repeat('*', 3);
         * // => '***'
         *
         * _.repeat('abc', 2);
         * // => 'abcabc'
         *
         * _.repeat('abc', 0);
         * // => ''
         */
        function repeat(string, n) {
            var result = '';
            string = baseToString(string);
            n = +n;
            if (n < 1 || !string || !nativeIsFinite(n)) {
                return result;
            }
            // Leverage the exponentiation by squaring algorithm for a faster repeat.
            // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
            do {
                if (n % 2) {
                    result += string;
                }
                n = nativeFloor(n / 2);
                string += string;
            } while (n);

            return result;
        }

        /**
         * Converts `string` to [snake case](https://en.wikipedia.org/wiki/Snake_case).
         *
         * @static
         * @memberOf _
         * @category String
         * @param {string} [string=''] The string to convert.
         * @returns {string} Returns the snake cased string.
         * @example
         *
         * _.snakeCase('Foo Bar');
         * // => 'foo_bar'
         *
         * _.snakeCase('fooBar');
         * // => 'foo_bar'
         *
         * _.snakeCase('--foo-bar');
         * // => 'foo_bar'
         */
        var snakeCase = createCompounder(function(result, word, index) {
            return result + (index ? '_' : '') + word.toLowerCase();
        });

        /**
         * Converts `string` to [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
         *
         * @static
         * @memberOf _
         * @category String
         * @param {string} [string=''] The string to convert.
         * @returns {string} Returns the start cased string.
         * @example
         *
         * _.startCase('--foo-bar');
         * // => 'Foo Bar'
         *
         * _.startCase('fooBar');
         * // => 'Foo Bar'
         *
         * _.startCase('__foo_bar__');
         * // => 'Foo Bar'
         */
        var startCase = createCompounder(function(result, word, index) {
            return result + (index ? ' ' : '') + (word.charAt(0).toUpperCase() + word.slice(1));
        });

        /**
         * Checks if `string` starts with the given target string.
         *
         * @static
         * @memberOf _
         * @category String
         * @param {string} [string=''] The string to search.
         * @param {string} [target] The string to search for.
         * @param {number} [position=0] The position to search from.
         * @returns {boolean} Returns `true` if `string` starts with `target`, else `false`.
         * @example
         *
         * _.startsWith('abc', 'a');
         * // => true
         *
         * _.startsWith('abc', 'b');
         * // => false
         *
         * _.startsWith('abc', 'b', 1);
         * // => true
         */
        function startsWith(string, target, position) {
            string = baseToString(string);
            position = position == null
                ? 0
                : nativeMin(position < 0 ? 0 : (+position || 0), string.length);

            return string.lastIndexOf(target, position) == position;
        }

        /**
         * Creates a compiled template function that can interpolate data properties
         * in "interpolate" delimiters, HTML-escape interpolated data properties in
         * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
         * properties may be accessed as free variables in the template. If a setting
         * object is provided it takes precedence over `_.templateSettings` values.
         *
         * **Note:** In the development build `_.template` utilizes
         * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
         * for easier debugging.
         *
         * For more information on precompiling templates see
         * [lodash's custom builds documentation](https://lodash.com/custom-builds).
         *
         * For more information on Chrome extension sandboxes see
         * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
         *
         * @static
         * @memberOf _
         * @category String
         * @param {string} [string=''] The template string.
         * @param {Object} [options] The options object.
         * @param {RegExp} [options.escape] The HTML "escape" delimiter.
         * @param {RegExp} [options.evaluate] The "evaluate" delimiter.
         * @param {Object} [options.imports] An object to import into the template as free variables.
         * @param {RegExp} [options.interpolate] The "interpolate" delimiter.
         * @param {string} [options.sourceURL] The sourceURL of the template's compiled source.
         * @param {string} [options.variable] The data object variable name.
         * @param- {Object} [otherOptions] Enables the legacy `options` param signature.
         * @returns {Function} Returns the compiled template function.
         * @example
         *
         * // using the "interpolate" delimiter to create a compiled template
         * var compiled = _.template('hello <%= user %>!');
         * compiled({ 'user': 'fred' });
         * // => 'hello fred!'
         *
         * // using the HTML "escape" delimiter to escape data property values
         * var compiled = _.template('<b><%- value %></b>');
         * compiled({ 'value': '<script>' });
         * // => '<b>&lt;script&gt;</b>'
         *
         * // using the "evaluate" delimiter to execute JavaScript and generate HTML
         * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
         * compiled({ 'users': ['fred', 'barney'] });
         * // => '<li>fred</li><li>barney</li>'
         *
         * // using the internal `print` function in "evaluate" delimiters
         * var compiled = _.template('<% print("hello " + user); %>!');
         * compiled({ 'user': 'barney' });
         * // => 'hello barney!'
         *
         * // using the ES delimiter as an alternative to the default "interpolate" delimiter
         * var compiled = _.template('hello ${ user }!');
         * compiled({ 'user': 'pebbles' });
         * // => 'hello pebbles!'
         *
         * // using custom template delimiters
         * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
         * var compiled = _.template('hello {{ user }}!');
         * compiled({ 'user': 'mustache' });
         * // => 'hello mustache!'
         *
         * // using backslashes to treat delimiters as plain text
         * var compiled = _.template('<%= "\\<%- value %\\>" %>');
         * compiled({ 'value': 'ignored' });
         * // => '<%- value %>'
         *
         * // using the `imports` option to import `jQuery` as `jq`
         * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
         * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
         * compiled({ 'users': ['fred', 'barney'] });
         * // => '<li>fred</li><li>barney</li>'
         *
         * // using the `sourceURL` option to specify a custom sourceURL for the template
         * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
         * compiled(data);
         * // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
         *
         * // using the `variable` option to ensure a with-statement isn't used in the compiled template
         * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
         * compiled.source;
         * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
         *
         * // using the `source` property to inline compiled templates for meaningful
         * // line numbers in error messages and a stack trace
         * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
         *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
         * ');
         */
        function template(string, options, otherOptions) {
            // Based on John Resig's `tmpl` implementation (http://ejohn.org/blog/javascript-micro-templating/)
            // and Laura Doktorova's doT.js (https://github.com/olado/doT).
            var settings = lodash.templateSettings;

            if (otherOptions && isIterateeCall(string, options, otherOptions)) {
                options = otherOptions = undefined;
            }
            string = baseToString(string);
            options = assignWith(baseAssign({}, otherOptions || options), settings, assignOwnDefaults);

            var imports = assignWith(baseAssign({}, options.imports), settings.imports, assignOwnDefaults),
                importsKeys = keys(imports),
                importsValues = baseValues(imports, importsKeys);

            var isEscaping,
                isEvaluating,
                index = 0,
                interpolate = options.interpolate || reNoMatch,
                source = "__p += '";

            // Compile the regexp to match each delimiter.
            var reDelimiters = RegExp(
                (options.escape || reNoMatch).source + '|' +
                interpolate.source + '|' +
                (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
                (options.evaluate || reNoMatch).source + '|$'
                , 'g');

            // Use a sourceURL for easier debugging.
            var sourceURL = '//# sourceURL=' +
                ('sourceURL' in options
                        ? options.sourceURL
                        : ('lodash.templateSources[' + (++templateCounter) + ']')
                ) + '\n';

            string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
                interpolateValue || (interpolateValue = esTemplateValue);

                // Escape characters that can't be included in string literals.
                source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

                // Replace delimiters with snippets.
                if (escapeValue) {
                    isEscaping = true;
                    source += "' +\n__e(" + escapeValue + ") +\n'";
                }
                if (evaluateValue) {
                    isEvaluating = true;
                    source += "';\n" + evaluateValue + ";\n__p += '";
                }
                if (interpolateValue) {
                    source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
                }
                index = offset + match.length;

                // The JS engine embedded in Adobe products requires returning the `match`
                // string in order to produce the correct `offset` value.
                return match;
            });

            source += "';\n";

            // If `variable` is not specified wrap a with-statement around the generated
            // code to add the data object to the top of the scope chain.
            var variable = options.variable;
            if (!variable) {
                source = 'with (obj) {\n' + source + '\n}\n';
            }
            // Cleanup code by stripping empty strings.
            source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
                .replace(reEmptyStringMiddle, '$1')
                .replace(reEmptyStringTrailing, '$1;');

            // Frame code as the function body.
            source = 'function(' + (variable || 'obj') + ') {\n' +
                (variable
                        ? ''
                        : 'obj || (obj = {});\n'
                ) +
                "var __t, __p = ''" +
                (isEscaping
                        ? ', __e = _.escape'
                        : ''
                ) +
                (isEvaluating
                        ? ', __j = Array.prototype.join;\n' +
                    "function print() { __p += __j.call(arguments, '') }\n"
                        : ';\n'
                ) +
                source +
                'return __p\n}';

            var result = attempt(function() {
                return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
            });

            // Provide the compiled function's source by its `toString` method or
            // the `source` property as a convenience for inlining compiled templates.
            result.source = source;
            if (isError(result)) {
                throw result;
            }
            return result;
        }

        /**
         * Removes leading and trailing whitespace or specified characters from `string`.
         *
         * @static
         * @memberOf _
         * @category String
         * @param {string} [string=''] The string to trim.
         * @param {string} [chars=whitespace] The characters to trim.
         * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
         * @returns {string} Returns the trimmed string.
         * @example
         *
         * _.trim('  abc  ');
         * // => 'abc'
         *
         * _.trim('-_-abc-_-', '_-');
         * // => 'abc'
         *
         * _.map(['  foo  ', '  bar  '], _.trim);
         * // => ['foo', 'bar']
         */
        function trim(string, chars, guard) {
            var value = string;
            string = baseToString(string);
            if (!string) {
                return string;
            }
            if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
                return string.slice(trimmedLeftIndex(string), trimmedRightIndex(string) + 1);
            }
            chars = (chars + '');
            return string.slice(charsLeftIndex(string, chars), charsRightIndex(string, chars) + 1);
        }

        /**
         * Removes leading whitespace or specified characters from `string`.
         *
         * @static
         * @memberOf _
         * @category String
         * @param {string} [string=''] The string to trim.
         * @param {string} [chars=whitespace] The characters to trim.
         * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
         * @returns {string} Returns the trimmed string.
         * @example
         *
         * _.trimLeft('  abc  ');
         * // => 'abc  '
         *
         * _.trimLeft('-_-abc-_-', '_-');
         * // => 'abc-_-'
         */
        function trimLeft(string, chars, guard) {
            var value = string;
            string = baseToString(string);
            if (!string) {
                return string;
            }
            if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
                return string.slice(trimmedLeftIndex(string));
            }
            return string.slice(charsLeftIndex(string, (chars + '')));
        }

        /**
         * Removes trailing whitespace or specified characters from `string`.
         *
         * @static
         * @memberOf _
         * @category String
         * @param {string} [string=''] The string to trim.
         * @param {string} [chars=whitespace] The characters to trim.
         * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
         * @returns {string} Returns the trimmed string.
         * @example
         *
         * _.trimRight('  abc  ');
         * // => '  abc'
         *
         * _.trimRight('-_-abc-_-', '_-');
         * // => '-_-abc'
         */
        function trimRight(string, chars, guard) {
            var value = string;
            string = baseToString(string);
            if (!string) {
                return string;
            }
            if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
                return string.slice(0, trimmedRightIndex(string) + 1);
            }
            return string.slice(0, charsRightIndex(string, (chars + '')) + 1);
        }

        /**
         * Truncates `string` if it's longer than the given maximum string length.
         * The last characters of the truncated string are replaced with the omission
         * string which defaults to "...".
         *
         * @static
         * @memberOf _
         * @category String
         * @param {string} [string=''] The string to truncate.
         * @param {Object|number} [options] The options object or maximum string length.
         * @param {number} [options.length=30] The maximum string length.
         * @param {string} [options.omission='...'] The string to indicate text is omitted.
         * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
         * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
         * @returns {string} Returns the truncated string.
         * @example
         *
         * _.trunc('hi-diddly-ho there, neighborino');
         * // => 'hi-diddly-ho there, neighbo...'
         *
         * _.trunc('hi-diddly-ho there, neighborino', 24);
         * // => 'hi-diddly-ho there, n...'
         *
         * _.trunc('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
         * // => 'hi-diddly-ho there,...'
         *
         * _.trunc('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
         * // => 'hi-diddly-ho there...'
         *
         * _.trunc('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
         * // => 'hi-diddly-ho there, neig [...]'
         */
        function trunc(string, options, guard) {
            if (guard && isIterateeCall(string, options, guard)) {
                options = undefined;
            }
            var length = DEFAULT_TRUNC_LENGTH,
                omission = DEFAULT_TRUNC_OMISSION;

            if (options != null) {
                if (isObject(options)) {
                    var separator = 'separator' in options ? options.separator : separator;
                    length = 'length' in options ? (+options.length || 0) : length;
                    omission = 'omission' in options ? baseToString(options.omission) : omission;
                } else {
                    length = +options || 0;
                }
            }
            string = baseToString(string);
            if (length >= string.length) {
                return string;
            }
            var end = length - omission.length;
            if (end < 1) {
                return omission;
            }
            var result = string.slice(0, end);
            if (separator == null) {
                return result + omission;
            }
            if (isRegExp(separator)) {
                if (string.slice(end).search(separator)) {
                    var match,
                        newEnd,
                        substring = string.slice(0, end);

                    if (!separator.global) {
                        separator = RegExp(separator.source, (reFlags.exec(separator) || '') + 'g');
                    }
                    separator.lastIndex = 0;
                    while ((match = separator.exec(substring))) {
                        newEnd = match.index;
                    }
                    result = result.slice(0, newEnd == null ? end : newEnd);
                }
            } else if (string.indexOf(separator, end) != end) {
                var index = result.lastIndexOf(separator);
                if (index > -1) {
                    result = result.slice(0, index);
                }
            }
            return result + omission;
        }

        /**
         * The inverse of `_.escape`; this method converts the HTML entities
         * `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;` in `string` to their
         * corresponding characters.
         *
         * **Note:** No other HTML entities are unescaped. To unescape additional HTML
         * entities use a third-party library like [_he_](https://mths.be/he).
         *
         * @static
         * @memberOf _
         * @category String
         * @param {string} [string=''] The string to unescape.
         * @returns {string} Returns the unescaped string.
         * @example
         *
         * _.unescape('fred, barney, &amp; pebbles');
         * // => 'fred, barney, & pebbles'
         */
        function unescape(string) {
            string = baseToString(string);
            return (string && reHasEscapedHtml.test(string))
                ? string.replace(reEscapedHtml, unescapeHtmlChar)
                : string;
        }

        /**
         * Splits `string` into an array of its words.
         *
         * @static
         * @memberOf _
         * @category String
         * @param {string} [string=''] The string to inspect.
         * @param {RegExp|string} [pattern] The pattern to match words.
         * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
         * @returns {Array} Returns the words of `string`.
         * @example
         *
         * _.words('fred, barney, & pebbles');
         * // => ['fred', 'barney', 'pebbles']
         *
         * _.words('fred, barney, & pebbles', /[^, ]+/g);
         * // => ['fred', 'barney', '&', 'pebbles']
         */
        function words(string, pattern, guard) {
            if (guard && isIterateeCall(string, pattern, guard)) {
                pattern = undefined;
            }
            string = baseToString(string);
            return string.match(pattern || reWords) || [];
        }

        /*------------------------------------------------------------------------*/

        /**
         * Attempts to invoke `func`, returning either the result or the caught error
         * object. Any additional arguments are provided to `func` when it is invoked.
         *
         * @static
         * @memberOf _
         * @category Utility
         * @param {Function} func The function to attempt.
         * @returns {*} Returns the `func` result or error object.
         * @example
         *
         * // avoid throwing errors for invalid selectors
         * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
         *
         * if (_.isError(elements)) {
     *   elements = [];
     * }
         */
        var attempt = restParam(function(func, args) {
            try {
                return func.apply(undefined, args);
            } catch(e) {
                return isError(e) ? e : new Error(e);
            }
        });

        /**
         * Creates a function that invokes `func` with the `this` binding of `thisArg`
         * and arguments of the created function. If `func` is a property name the
         * created callback returns the property value for a given element. If `func`
         * is an object the created callback returns `true` for elements that contain
         * the equivalent object properties, otherwise it returns `false`.
         *
         * @static
         * @memberOf _
         * @alias iteratee
         * @category Utility
         * @param {*} [func=_.identity] The value to convert to a callback.
         * @param {*} [thisArg] The `this` binding of `func`.
         * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
         * @returns {Function} Returns the callback.
         * @example
         *
         * var users = [
         *   { 'user': 'barney', 'age': 36 },
         *   { 'user': 'fred',   'age': 40 }
         * ];
         *
         * // wrap to create custom callback shorthands
         * _.callback = _.wrap(_.callback, function(callback, func, thisArg) {
     *   var match = /^(.+?)__([gl]t)(.+)$/.exec(func);
     *   if (!match) {
     *     return callback(func, thisArg);
     *   }
     *   return function(object) {
     *     return match[2] == 'gt'
     *       ? object[match[1]] > match[3]
     *       : object[match[1]] < match[3];
     *   };
     * });
         *
         * _.filter(users, 'age__gt36');
         * // => [{ 'user': 'fred', 'age': 40 }]
         */
        function callback(func, thisArg, guard) {
            if (guard && isIterateeCall(func, thisArg, guard)) {
                thisArg = undefined;
            }
            return isObjectLike(func)
                ? matches(func)
                : baseCallback(func, thisArg);
        }

        /**
         * Creates a function that returns `value`.
         *
         * @static
         * @memberOf _
         * @category Utility
         * @param {*} value The value to return from the new function.
         * @returns {Function} Returns the new function.
         * @example
         *
         * var object = { 'user': 'fred' };
         * var getter = _.constant(object);
         *
         * getter() === object;
         * // => true
         */
        function constant(value) {
            return function() {
                return value;
            };
        }

        /**
         * This method returns the first argument provided to it.
         *
         * @static
         * @memberOf _
         * @category Utility
         * @param {*} value Any value.
         * @returns {*} Returns `value`.
         * @example
         *
         * var object = { 'user': 'fred' };
         *
         * _.identity(object) === object;
         * // => true
         */
        function identity(value) {
            return value;
        }

        /**
         * Creates a function that performs a deep comparison between a given object
         * and `source`, returning `true` if the given object has equivalent property
         * values, else `false`.
         *
         * **Note:** This method supports comparing arrays, booleans, `Date` objects,
         * numbers, `Object` objects, regexes, and strings. Objects are compared by
         * their own, not inherited, enumerable properties. For comparing a single
         * own or inherited property value see `_.matchesProperty`.
         *
         * @static
         * @memberOf _
         * @category Utility
         * @param {Object} source The object of property values to match.
         * @returns {Function} Returns the new function.
         * @example
         *
         * var users = [
         *   { 'user': 'barney', 'age': 36, 'active': true },
         *   { 'user': 'fred',   'age': 40, 'active': false }
         * ];
         *
         * _.filter(users, _.matches({ 'age': 40, 'active': false }));
         * // => [{ 'user': 'fred', 'age': 40, 'active': false }]
         */
        function matches(source) {
            return baseMatches(baseClone(source, true));
        }

        /**
         * Creates a function that compares the property value of `path` on a given
         * object to `value`.
         *
         * **Note:** This method supports comparing arrays, booleans, `Date` objects,
         * numbers, `Object` objects, regexes, and strings. Objects are compared by
         * their own, not inherited, enumerable properties.
         *
         * @static
         * @memberOf _
         * @category Utility
         * @param {Array|string} path The path of the property to get.
         * @param {*} srcValue The value to match.
         * @returns {Function} Returns the new function.
         * @example
         *
         * var users = [
         *   { 'user': 'barney' },
         *   { 'user': 'fred' }
         * ];
         *
         * _.find(users, _.matchesProperty('user', 'fred'));
         * // => { 'user': 'fred' }
         */
        function matchesProperty(path, srcValue) {
            return baseMatchesProperty(path, baseClone(srcValue, true));
        }

        /**
         * Creates a function that invokes the method at `path` on a given object.
         * Any additional arguments are provided to the invoked method.
         *
         * @static
         * @memberOf _
         * @category Utility
         * @param {Array|string} path The path of the method to invoke.
         * @param {...*} [args] The arguments to invoke the method with.
         * @returns {Function} Returns the new function.
         * @example
         *
         * var objects = [
         *   { 'a': { 'b': { 'c': _.constant(2) } } },
         *   { 'a': { 'b': { 'c': _.constant(1) } } }
         * ];
         *
         * _.map(objects, _.method('a.b.c'));
         * // => [2, 1]
         *
         * _.invoke(_.sortBy(objects, _.method(['a', 'b', 'c'])), 'a.b.c');
         * // => [1, 2]
         */
        var method = restParam(function(path, args) {
            return function(object) {
                return invokePath(object, path, args);
            };
        });

        /**
         * The opposite of `_.method`; this method creates a function that invokes
         * the method at a given path on `object`. Any additional arguments are
         * provided to the invoked method.
         *
         * @static
         * @memberOf _
         * @category Utility
         * @param {Object} object The object to query.
         * @param {...*} [args] The arguments to invoke the method with.
         * @returns {Function} Returns the new function.
         * @example
         *
         * var array = _.times(3, _.constant),
         *     object = { 'a': array, 'b': array, 'c': array };
         *
         * _.map(['a[2]', 'c[0]'], _.methodOf(object));
         * // => [2, 0]
         *
         * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
         * // => [2, 0]
         */
        var methodOf = restParam(function(object, args) {
            return function(path) {
                return invokePath(object, path, args);
            };
        });

        /**
         * Adds all own enumerable function properties of a source object to the
         * destination object. If `object` is a function then methods are added to
         * its prototype as well.
         *
         * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
         * avoid conflicts caused by modifying the original.
         *
         * @static
         * @memberOf _
         * @category Utility
         * @param {Function|Object} [object=lodash] The destination object.
         * @param {Object} source The object of functions to add.
         * @param {Object} [options] The options object.
         * @param {boolean} [options.chain=true] Specify whether the functions added
         *  are chainable.
         * @returns {Function|Object} Returns `object`.
         * @example
         *
         * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
         *
         * _.mixin({ 'vowels': vowels });
         * _.vowels('fred');
         * // => ['e']
         *
         * _('fred').vowels().value();
         * // => ['e']
         *
         * _.mixin({ 'vowels': vowels }, { 'chain': false });
         * _('fred').vowels();
         * // => ['e']
         */
        function mixin(object, source, options) {
            if (options == null) {
                var isObj = isObject(source),
                    props = isObj ? keys(source) : undefined,
                    methodNames = (props && props.length) ? baseFunctions(source, props) : undefined;

                if (!(methodNames ? methodNames.length : isObj)) {
                    methodNames = false;
                    options = source;
                    source = object;
                    object = this;
                }
            }
            if (!methodNames) {
                methodNames = baseFunctions(source, keys(source));
            }
            var chain = true,
                index = -1,
                isFunc = isFunction(object),
                length = methodNames.length;

            if (options === false) {
                chain = false;
            } else if (isObject(options) && 'chain' in options) {
                chain = options.chain;
            }
            while (++index < length) {
                var methodName = methodNames[index],
                    func = source[methodName];

                object[methodName] = func;
                if (isFunc) {
                    object.prototype[methodName] = (function(func) {
                        return function() {
                            var chainAll = this.__chain__;
                            if (chain || chainAll) {
                                var result = object(this.__wrapped__),
                                    actions = result.__actions__ = arrayCopy(this.__actions__);

                                actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
                                result.__chain__ = chainAll;
                                return result;
                            }
                            return func.apply(object, arrayPush([this.value()], arguments));
                        };
                    }(func));
                }
            }
            return object;
        }

        /**
         * Reverts the `_` variable to its previous value and returns a reference to
         * the `lodash` function.
         *
         * @static
         * @memberOf _
         * @category Utility
         * @returns {Function} Returns the `lodash` function.
         * @example
         *
         * var lodash = _.noConflict();
         */
        function noConflict() {
            root._ = oldDash;
            return this;
        }

        /**
         * A no-operation function that returns `undefined` regardless of the
         * arguments it receives.
         *
         * @static
         * @memberOf _
         * @category Utility
         * @example
         *
         * var object = { 'user': 'fred' };
         *
         * _.noop(object) === undefined;
         * // => true
         */
        function noop() {
            // No operation performed.
        }

        /**
         * Creates a function that returns the property value at `path` on a
         * given object.
         *
         * @static
         * @memberOf _
         * @category Utility
         * @param {Array|string} path The path of the property to get.
         * @returns {Function} Returns the new function.
         * @example
         *
         * var objects = [
         *   { 'a': { 'b': { 'c': 2 } } },
         *   { 'a': { 'b': { 'c': 1 } } }
         * ];
         *
         * _.map(objects, _.property('a.b.c'));
         * // => [2, 1]
         *
         * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
         * // => [1, 2]
         */
        function property(path) {
            return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
        }

        /**
         * The opposite of `_.property`; this method creates a function that returns
         * the property value at a given path on `object`.
         *
         * @static
         * @memberOf _
         * @category Utility
         * @param {Object} object The object to query.
         * @returns {Function} Returns the new function.
         * @example
         *
         * var array = [0, 1, 2],
         *     object = { 'a': array, 'b': array, 'c': array };
         *
         * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
         * // => [2, 0]
         *
         * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
         * // => [2, 0]
         */
        function propertyOf(object) {
            return function(path) {
                return baseGet(object, toPath(path), path + '');
            };
        }

        /**
         * Creates an array of numbers (positive and/or negative) progressing from
         * `start` up to, but not including, `end`. If `end` is not specified it is
         * set to `start` with `start` then set to `0`. If `end` is less than `start`
         * a zero-length range is created unless a negative `step` is specified.
         *
         * @static
         * @memberOf _
         * @category Utility
         * @param {number} [start=0] The start of the range.
         * @param {number} end The end of the range.
         * @param {number} [step=1] The value to increment or decrement by.
         * @returns {Array} Returns the new array of numbers.
         * @example
         *
         * _.range(4);
         * // => [0, 1, 2, 3]
         *
         * _.range(1, 5);
         * // => [1, 2, 3, 4]
         *
         * _.range(0, 20, 5);
         * // => [0, 5, 10, 15]
         *
         * _.range(0, -4, -1);
         * // => [0, -1, -2, -3]
         *
         * _.range(1, 4, 0);
         * // => [1, 1, 1]
         *
         * _.range(0);
         * // => []
         */
        function range(start, end, step) {
            if (step && isIterateeCall(start, end, step)) {
                end = step = undefined;
            }
            start = +start || 0;
            step = step == null ? 1 : (+step || 0);

            if (end == null) {
                end = start;
                start = 0;
            } else {
                end = +end || 0;
            }
            // Use `Array(length)` so engines like Chakra and V8 avoid slower modes.
            // See https://youtu.be/XAqIpGU8ZZk#t=17m25s for more details.
            var index = -1,
                length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
                result = Array(length);

            while (++index < length) {
                result[index] = start;
                start += step;
            }
            return result;
        }

        /**
         * Invokes the iteratee function `n` times, returning an array of the results
         * of each invocation. The `iteratee` is bound to `thisArg` and invoked with
         * one argument; (index).
         *
         * @static
         * @memberOf _
         * @category Utility
         * @param {number} n The number of times to invoke `iteratee`.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @param {*} [thisArg] The `this` binding of `iteratee`.
         * @returns {Array} Returns the array of results.
         * @example
         *
         * var diceRolls = _.times(3, _.partial(_.random, 1, 6, false));
         * // => [3, 6, 4]
         *
         * _.times(3, function(n) {
     *   mage.castSpell(n);
     * });
         * // => invokes `mage.castSpell(n)` three times with `n` of `0`, `1`, and `2`
         *
         * _.times(3, function(n) {
     *   this.cast(n);
     * }, mage);
         * // => also invokes `mage.castSpell(n)` three times
         */
        function times(n, iteratee, thisArg) {
            n = nativeFloor(n);

            // Exit early to avoid a JSC JIT bug in Safari 8
            // where `Array(0)` is treated as `Array(1)`.
            if (n < 1 || !nativeIsFinite(n)) {
                return [];
            }
            var index = -1,
                result = Array(nativeMin(n, MAX_ARRAY_LENGTH));

            iteratee = bindCallback(iteratee, thisArg, 1);
            while (++index < n) {
                if (index < MAX_ARRAY_LENGTH) {
                    result[index] = iteratee(index);
                } else {
                    iteratee(index);
                }
            }
            return result;
        }

        /**
         * Generates a unique ID. If `prefix` is provided the ID is appended to it.
         *
         * @static
         * @memberOf _
         * @category Utility
         * @param {string} [prefix] The value to prefix the ID with.
         * @returns {string} Returns the unique ID.
         * @example
         *
         * _.uniqueId('contact_');
         * // => 'contact_104'
         *
         * _.uniqueId();
         * // => '105'
         */
        function uniqueId(prefix) {
            var id = ++idCounter;
            return baseToString(prefix) + id;
        }

        /*------------------------------------------------------------------------*/

        /**
         * Adds two numbers.
         *
         * @static
         * @memberOf _
         * @category Math
         * @param {number} augend The first number to add.
         * @param {number} addend The second number to add.
         * @returns {number} Returns the sum.
         * @example
         *
         * _.add(6, 4);
         * // => 10
         */
        function add(augend, addend) {
            return (+augend || 0) + (+addend || 0);
        }

        /**
         * Calculates `n` rounded up to `precision`.
         *
         * @static
         * @memberOf _
         * @category Math
         * @param {number} n The number to round up.
         * @param {number} [precision=0] The precision to round up to.
         * @returns {number} Returns the rounded up number.
         * @example
         *
         * _.ceil(4.006);
         * // => 5
         *
         * _.ceil(6.004, 2);
         * // => 6.01
         *
         * _.ceil(6040, -2);
         * // => 6100
         */
        var ceil = createRound('ceil');

        /**
         * Calculates `n` rounded down to `precision`.
         *
         * @static
         * @memberOf _
         * @category Math
         * @param {number} n The number to round down.
         * @param {number} [precision=0] The precision to round down to.
         * @returns {number} Returns the rounded down number.
         * @example
         *
         * _.floor(4.006);
         * // => 4
         *
         * _.floor(0.046, 2);
         * // => 0.04
         *
         * _.floor(4060, -2);
         * // => 4000
         */
        var floor = createRound('floor');

        /**
         * Gets the maximum value of `collection`. If `collection` is empty or falsey
         * `-Infinity` is returned. If an iteratee function is provided it is invoked
         * for each value in `collection` to generate the criterion by which the value
         * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
         * arguments: (value, index, collection).
         *
         * If a property name is provided for `iteratee` the created `_.property`
         * style callback returns the property value of the given element.
         *
         * If a value is also provided for `thisArg` the created `_.matchesProperty`
         * style callback returns `true` for elements that have a matching property
         * value, else `false`.
         *
         * If an object is provided for `iteratee` the created `_.matches` style
         * callback returns `true` for elements that have the properties of the given
         * object, else `false`.
         *
         * @static
         * @memberOf _
         * @category Math
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function|Object|string} [iteratee] The function invoked per iteration.
         * @param {*} [thisArg] The `this` binding of `iteratee`.
         * @returns {*} Returns the maximum value.
         * @example
         *
         * _.max([4, 2, 8, 6]);
         * // => 8
         *
         * _.max([]);
         * // => -Infinity
         *
         * var users = [
         *   { 'user': 'barney', 'age': 36 },
         *   { 'user': 'fred',   'age': 40 }
         * ];
         *
         * _.max(users, function(chr) {
     *   return chr.age;
     * });
         * // => { 'user': 'fred', 'age': 40 }
         *
         * // using the `_.property` callback shorthand
         * _.max(users, 'age');
         * // => { 'user': 'fred', 'age': 40 }
         */
        var max = createExtremum(gt, NEGATIVE_INFINITY);

        /**
         * Gets the minimum value of `collection`. If `collection` is empty or falsey
         * `Infinity` is returned. If an iteratee function is provided it is invoked
         * for each value in `collection` to generate the criterion by which the value
         * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
         * arguments: (value, index, collection).
         *
         * If a property name is provided for `iteratee` the created `_.property`
         * style callback returns the property value of the given element.
         *
         * If a value is also provided for `thisArg` the created `_.matchesProperty`
         * style callback returns `true` for elements that have a matching property
         * value, else `false`.
         *
         * If an object is provided for `iteratee` the created `_.matches` style
         * callback returns `true` for elements that have the properties of the given
         * object, else `false`.
         *
         * @static
         * @memberOf _
         * @category Math
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function|Object|string} [iteratee] The function invoked per iteration.
         * @param {*} [thisArg] The `this` binding of `iteratee`.
         * @returns {*} Returns the minimum value.
         * @example
         *
         * _.min([4, 2, 8, 6]);
         * // => 2
         *
         * _.min([]);
         * // => Infinity
         *
         * var users = [
         *   { 'user': 'barney', 'age': 36 },
         *   { 'user': 'fred',   'age': 40 }
         * ];
         *
         * _.min(users, function(chr) {
     *   return chr.age;
     * });
         * // => { 'user': 'barney', 'age': 36 }
         *
         * // using the `_.property` callback shorthand
         * _.min(users, 'age');
         * // => { 'user': 'barney', 'age': 36 }
         */
        var min = createExtremum(lt, POSITIVE_INFINITY);

        /**
         * Calculates `n` rounded to `precision`.
         *
         * @static
         * @memberOf _
         * @category Math
         * @param {number} n The number to round.
         * @param {number} [precision=0] The precision to round to.
         * @returns {number} Returns the rounded number.
         * @example
         *
         * _.round(4.006);
         * // => 4
         *
         * _.round(4.006, 2);
         * // => 4.01
         *
         * _.round(4060, -2);
         * // => 4100
         */
        var round = createRound('round');

        /**
         * Gets the sum of the values in `collection`.
         *
         * @static
         * @memberOf _
         * @category Math
         * @param {Array|Object|string} collection The collection to iterate over.
         * @param {Function|Object|string} [iteratee] The function invoked per iteration.
         * @param {*} [thisArg] The `this` binding of `iteratee`.
         * @returns {number} Returns the sum.
         * @example
         *
         * _.sum([4, 6]);
         * // => 10
         *
         * _.sum({ 'a': 4, 'b': 6 });
         * // => 10
         *
         * var objects = [
         *   { 'n': 4 },
         *   { 'n': 6 }
         * ];
         *
         * _.sum(objects, function(object) {
     *   return object.n;
     * });
         * // => 10
         *
         * // using the `_.property` callback shorthand
         * _.sum(objects, 'n');
         * // => 10
         */
        function sum(collection, iteratee, thisArg) {
            if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
                iteratee = undefined;
            }
            iteratee = getCallback(iteratee, thisArg, 3);
            return iteratee.length == 1
                ? arraySum(isArray(collection) ? collection : toIterable(collection), iteratee)
                : baseSum(collection, iteratee);
        }

        /*------------------------------------------------------------------------*/

        // Ensure wrappers are instances of `baseLodash`.
        lodash.prototype = baseLodash.prototype;

        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;

        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;

        // Add functions to the `Map` cache.
        MapCache.prototype['delete'] = mapDelete;
        MapCache.prototype.get = mapGet;
        MapCache.prototype.has = mapHas;
        MapCache.prototype.set = mapSet;

        // Add functions to the `Set` cache.
        SetCache.prototype.push = cachePush;

        // Assign cache to `_.memoize`.
        memoize.Cache = MapCache;

        // Add functions that return wrapped values when chaining.
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.callback = callback;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.functions = functions;
        lodash.groupBy = groupBy;
        lodash.indexBy = indexBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.invert = invert;
        lodash.invoke = invoke;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.modArgs = modArgs;
        lodash.negate = negate;
        lodash.omit = omit;
        lodash.once = once;
        lodash.pairs = pairs;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pluck = pluck;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.restParam = restParam;
        lodash.set = set;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortByAll = sortByAll;
        lodash.sortByOrder = sortByOrder;
        lodash.spread = spread;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.times = times;
        lodash.toArray = toArray;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.union = union;
        lodash.uniq = uniq;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.where = where;
        lodash.without = without;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipWith = zipWith;

        // Add aliases.
        lodash.backflow = flowRight;
        lodash.collect = map;
        lodash.compose = flowRight;
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.extend = assign;
        lodash.iteratee = callback;
        lodash.methods = functions;
        lodash.object = zipObject;
        lodash.select = filter;
        lodash.tail = rest;
        lodash.unique = uniq;

        // Add functions to `lodash.prototype`.
        mixin(lodash, lodash);

        /*------------------------------------------------------------------------*/

        // Add functions that return unwrapped values when chaining.
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.deburr = deburr;
        lodash.endsWith = endsWith;
        lodash.escape = escape;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.findWhere = findWhere;
        lodash.first = first;
        lodash.floor = floor;
        lodash.get = get;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isBoolean = isBoolean;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual;
        lodash.isError = isError;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction;
        lodash.isMatch = isMatch;
        lodash.isNaN = isNaN;
        lodash.isNative = isNative;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isString = isString;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max;
        lodash.min = min;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padLeft = padLeft;
        lodash.padRight = padRight;
        lodash.parseInt = parseInt;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext;
        lodash.size = size;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.sum = sum;
        lodash.template = template;
        lodash.trim = trim;
        lodash.trimLeft = trimLeft;
        lodash.trimRight = trimRight;
        lodash.trunc = trunc;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId;
        lodash.words = words;

        // Add aliases.
        lodash.all = every;
        lodash.any = some;
        lodash.contains = includes;
        lodash.eq = isEqual;
        lodash.detect = find;
        lodash.foldl = reduce;
        lodash.foldr = reduceRight;
        lodash.head = first;
        lodash.include = includes;
        lodash.inject = reduce;

        mixin(lodash, (function() {
            var source = {};
            baseForOwn(lodash, function(func, methodName) {
                if (!lodash.prototype[methodName]) {
                    source[methodName] = func;
                }
            });
            return source;
        }()), false);

        /*------------------------------------------------------------------------*/

        // Add functions capable of returning wrapped and unwrapped values when chaining.
        lodash.sample = sample;

        lodash.prototype.sample = function(n) {
            if (!this.__chain__ && n == null) {
                return sample(this.value());
            }
            return this.thru(function(value) {
                return sample(value, n);
            });
        };

        /*------------------------------------------------------------------------*/

        /**
         * The semantic version number.
         *
         * @static
         * @memberOf _
         * @type string
         */
        lodash.VERSION = VERSION;

        // Assign default placeholders.
        arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
            lodash[methodName].placeholder = lodash;
        });

        // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
        arrayEach(['drop', 'take'], function(methodName, index) {
            LazyWrapper.prototype[methodName] = function(n) {
                var filtered = this.__filtered__;
                if (filtered && !index) {
                    return new LazyWrapper(this);
                }
                n = n == null ? 1 : nativeMax(nativeFloor(n) || 0, 0);

                var result = this.clone();
                if (filtered) {
                    result.__takeCount__ = nativeMin(result.__takeCount__, n);
                } else {
                    result.__views__.push({ 'size': n, 'type': methodName + (result.__dir__ < 0 ? 'Right' : '') });
                }
                return result;
            };

            LazyWrapper.prototype[methodName + 'Right'] = function(n) {
                return this.reverse()[methodName](n).reverse();
            };
        });

        // Add `LazyWrapper` methods that accept an `iteratee` value.
        arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
            var type = index + 1,
                isFilter = type != LAZY_MAP_FLAG;

            LazyWrapper.prototype[methodName] = function(iteratee, thisArg) {
                var result = this.clone();
                result.__iteratees__.push({ 'iteratee': getCallback(iteratee, thisArg, 1), 'type': type });
                result.__filtered__ = result.__filtered__ || isFilter;
                return result;
            };
        });

        // Add `LazyWrapper` methods for `_.first` and `_.last`.
        arrayEach(['first', 'last'], function(methodName, index) {
            var takeName = 'take' + (index ? 'Right' : '');

            LazyWrapper.prototype[methodName] = function() {
                return this[takeName](1).value()[0];
            };
        });

        // Add `LazyWrapper` methods for `_.initial` and `_.rest`.
        arrayEach(['initial', 'rest'], function(methodName, index) {
            var dropName = 'drop' + (index ? '' : 'Right');

            LazyWrapper.prototype[methodName] = function() {
                return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
            };
        });

        // Add `LazyWrapper` methods for `_.pluck` and `_.where`.
        arrayEach(['pluck', 'where'], function(methodName, index) {
            var operationName = index ? 'filter' : 'map',
                createCallback = index ? baseMatches : property;

            LazyWrapper.prototype[methodName] = function(value) {
                return this[operationName](createCallback(value));
            };
        });

        LazyWrapper.prototype.compact = function() {
            return this.filter(identity);
        };

        LazyWrapper.prototype.reject = function(predicate, thisArg) {
            predicate = getCallback(predicate, thisArg, 1);
            return this.filter(function(value) {
                return !predicate(value);
            });
        };

        LazyWrapper.prototype.slice = function(start, end) {
            start = start == null ? 0 : (+start || 0);

            var result = this;
            if (result.__filtered__ && (start > 0 || end < 0)) {
                return new LazyWrapper(result);
            }
            if (start < 0) {
                result = result.takeRight(-start);
            } else if (start) {
                result = result.drop(start);
            }
            if (end !== undefined) {
                end = (+end || 0);
                result = end < 0 ? result.dropRight(-end) : result.take(end - start);
            }
            return result;
        };

        LazyWrapper.prototype.takeRightWhile = function(predicate, thisArg) {
            return this.reverse().takeWhile(predicate, thisArg).reverse();
        };

        LazyWrapper.prototype.toArray = function() {
            return this.take(POSITIVE_INFINITY);
        };

        // Add `LazyWrapper` methods to `lodash.prototype`.
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
            var checkIteratee = /^(?:filter|map|reject)|While$/.test(methodName),
                retUnwrapped = /^(?:first|last)$/.test(methodName),
                lodashFunc = lodash[retUnwrapped ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName];

            if (!lodashFunc) {
                return;
            }
            lodash.prototype[methodName] = function() {
                var args = retUnwrapped ? [1] : arguments,
                    chainAll = this.__chain__,
                    value = this.__wrapped__,
                    isHybrid = !!this.__actions__.length,
                    isLazy = value instanceof LazyWrapper,
                    iteratee = args[0],
                    useLazy = isLazy || isArray(value);

                if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
                    // Avoid lazy use if the iteratee has a "length" value other than `1`.
                    isLazy = useLazy = false;
                }
                var interceptor = function(value) {
                    return (retUnwrapped && chainAll)
                        ? lodashFunc(value, 1)[0]
                        : lodashFunc.apply(undefined, arrayPush([value], args));
                };

                var action = { 'func': thru, 'args': [interceptor], 'thisArg': undefined },
                    onlyLazy = isLazy && !isHybrid;

                if (retUnwrapped && !chainAll) {
                    if (onlyLazy) {
                        value = value.clone();
                        value.__actions__.push(action);
                        return func.call(value);
                    }
                    return lodashFunc.call(undefined, this.value())[0];
                }
                if (!retUnwrapped && useLazy) {
                    value = onlyLazy ? value : new LazyWrapper(this);
                    var result = func.apply(value, args);
                    result.__actions__.push(action);
                    return new LodashWrapper(result, chainAll);
                }
                return this.thru(interceptor);
            };
        });

        // Add `Array` and `String` methods to `lodash.prototype`.
        arrayEach(['join', 'pop', 'push', 'replace', 'shift', 'sort', 'splice', 'split', 'unshift'], function(methodName) {
            var func = (/^(?:replace|split)$/.test(methodName) ? stringProto : arrayProto)[methodName],
                chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
                retUnwrapped = /^(?:join|pop|replace|shift)$/.test(methodName);

            lodash.prototype[methodName] = function() {
                var args = arguments;
                if (retUnwrapped && !this.__chain__) {
                    return func.apply(this.value(), args);
                }
                return this[chainName](function(value) {
                    return func.apply(value, args);
                });
            };
        });

        // Map minified function names to their real names.
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
            var lodashFunc = lodash[methodName];
            if (lodashFunc) {
                var key = lodashFunc.name,
                    names = realNames[key] || (realNames[key] = []);

                names.push({ 'name': methodName, 'func': lodashFunc });
            }
        });

        realNames[createHybridWrapper(undefined, BIND_KEY_FLAG).name] = [{ 'name': 'wrapper', 'func': undefined }];

        // Add functions to the lazy wrapper.
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;

        // Add chaining functions to the `lodash` wrapper.
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.concat = wrapperConcat;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toString = wrapperToString;
        lodash.prototype.run = lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

        // Add function aliases to the `lodash` wrapper.
        lodash.prototype.collect = lodash.prototype.map;
        lodash.prototype.head = lodash.prototype.first;
        lodash.prototype.select = lodash.prototype.filter;
        lodash.prototype.tail = lodash.prototype.rest;

        return lodash;
    }

    /*--------------------------------------------------------------------------*/

    // Export lodash.
    var _ = runInContext();

    // Some AMD build optimizers like r.js check for condition patterns like the following:
    if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
        // Expose lodash to the global object when an AMD loader is present to avoid
        // errors in cases where lodash is loaded by a script tag and not intended
        // as an AMD module. See http://requirejs.org/docs/errors.html#mismatch for
        // more details.
        root._ = _;

        // Define as an anonymous module so, through path mapping, it can be
        // referenced as the "underscore" module.
        define(function() {
            return _;
        });
    }
    // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
    else if (freeExports && freeModule) {
        // Export for Node.js or RingoJS.
        if (moduleExports) {
            (freeModule.exports = _)._ = _;
        }
        // Export for Rhino with CommonJS support.
        else {
            freeExports._ = _;
        }
    }
    else {
        // Export for a browser or Rhino.
        root._ = _;
    }
}.call(this));
/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in
 * the current UA and makes the results available to you in two ways:
 * as properties on a global Modernizr object, and as classes on the
 * <html> element. This information allows you to progressively enhance
 * your pages with a granular level of control over the experience.
 *
 * Modernizr has an optional (not included) conditional resource loader
 * called Modernizr.load(), based on Yepnope.js (yepnopejs.com).
 * To get a build that includes Modernizr.load(), as well as choosing
 * which tests to include, go to www.modernizr.com/download/
 *
 * Authors        Faruk Ates, Paul Irish, Alex Sexton
 * Contributors   Ryan Seddon, Ben Alman
 */

window.Modernizr = (function( window, document, undefined ) {

    var version = '2.8.3',

    Modernizr = {},

    /*>>cssclasses*/
    // option for enabling the HTML classes to be added
    enableClasses = true,
    /*>>cssclasses*/

    docElement = document.documentElement,

    /**
     * Create our "modernizr" element that we do most feature tests on.
     */
    mod = 'modernizr',
    modElem = document.createElement(mod),
    mStyle = modElem.style,

    /**
     * Create the input element for various Web Forms feature tests.
     */
    inputElem /*>>inputelem*/ = document.createElement('input') /*>>inputelem*/ ,

    /*>>smile*/
    smile = ':)',
    /*>>smile*/

    toString = {}.toString,

    // TODO :: make the prefixes more granular
    /*>>prefixes*/
    // List of property values to set for css tests. See ticket #21
    prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),
    /*>>prefixes*/

    /*>>domprefixes*/
    // Following spec is to expose vendor-specific style properties as:
    //   elem.style.WebkitBorderRadius
    // and the following would be incorrect:
    //   elem.style.webkitBorderRadius

    // Webkit ghosts their properties in lowercase but Opera & Moz do not.
    // Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
    //   erik.eae.net/archives/2008/03/10/21.48.10/

    // More here: github.com/Modernizr/Modernizr/issues/issue/21
    omPrefixes = 'Webkit Moz O ms',

    cssomPrefixes = omPrefixes.split(' '),

    domPrefixes = omPrefixes.toLowerCase().split(' '),
    /*>>domprefixes*/

    /*>>ns*/
    ns = {'svg': 'http://www.w3.org/2000/svg'},
    /*>>ns*/

    tests = {},
    inputs = {},
    attrs = {},

    classes = [],

    slice = classes.slice,

    featureName, // used in testing loop


    /*>>teststyles*/
    // Inject element with style element and some CSS rules
    injectElementWithStyles = function( rule, callback, nodes, testnames ) {

      var style, ret, node, docOverflow,
          div = document.createElement('div'),
          // After page load injecting a fake body doesn't work so check if body exists
          body = document.body,
          // IE6 and 7 won't return offsetWidth or offsetHeight unless it's in the body element, so we fake it.
          fakeBody = body || document.createElement('body');

      if ( parseInt(nodes, 10) ) {
          // In order not to give false positives we create a node for each test
          // This also allows the method to scale for unspecified uses
          while ( nodes-- ) {
              node = document.createElement('div');
              node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
              div.appendChild(node);
          }
      }

      // <style> elements in IE6-9 are considered 'NoScope' elements and therefore will be removed
      // when injected with innerHTML. To get around this you need to prepend the 'NoScope' element
      // with a 'scoped' element, in our case the soft-hyphen entity as it won't mess with our measurements.
      // msdn.microsoft.com/en-us/library/ms533897%28VS.85%29.aspx
      // Documents served as xml will throw if using &shy; so use xml friendly encoded version. See issue #277
      style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
      div.id = mod;
      // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
      // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
      (body ? div : fakeBody).innerHTML += style;
      fakeBody.appendChild(div);
      if ( !body ) {
          //avoid crashing IE8, if background image is used
          fakeBody.style.background = '';
          //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
          fakeBody.style.overflow = 'hidden';
          docOverflow = docElement.style.overflow;
          docElement.style.overflow = 'hidden';
          docElement.appendChild(fakeBody);
      }

      ret = callback(div, rule);
      // If this is done after page load we don't want to remove the body so check if body exists
      if ( !body ) {
          fakeBody.parentNode.removeChild(fakeBody);
          docElement.style.overflow = docOverflow;
      } else {
          div.parentNode.removeChild(div);
      }

      return !!ret;

    },
    /*>>teststyles*/

    /*>>mq*/
    // adapted from matchMedia polyfill
    // by Scott Jehl and Paul Irish
    // gist.github.com/786768
    testMediaQuery = function( mq ) {

      var matchMedia = window.matchMedia || window.msMatchMedia;
      if ( matchMedia ) {
        return matchMedia(mq) && matchMedia(mq).matches || false;
      }

      var bool;

      injectElementWithStyles('@media ' + mq + ' { #' + mod + ' { position: absolute; } }', function( node ) {
        bool = (window.getComputedStyle ?
                  getComputedStyle(node, null) :
                  node.currentStyle)['position'] == 'absolute';
      });

      return bool;

     },
     /*>>mq*/


    /*>>hasevent*/
    //
    // isEventSupported determines if a given element supports the given event
    // kangax.github.com/iseventsupported/
    //
    // The following results are known incorrects:
    //   Modernizr.hasEvent("webkitTransitionEnd", elem) // false negative
    //   Modernizr.hasEvent("textInput") // in Webkit. github.com/Modernizr/Modernizr/issues/333
    //   ...
    isEventSupported = (function() {

      var TAGNAMES = {
        'select': 'input', 'change': 'input',
        'submit': 'form', 'reset': 'form',
        'error': 'img', 'load': 'img', 'abort': 'img'
      };

      function isEventSupported( eventName, element ) {

        element = element || document.createElement(TAGNAMES[eventName] || 'div');
        eventName = 'on' + eventName;

        // When using `setAttribute`, IE skips "unload", WebKit skips "unload" and "resize", whereas `in` "catches" those
        var isSupported = eventName in element;

        if ( !isSupported ) {
          // If it has no `setAttribute` (i.e. doesn't implement Node interface), try generic element
          if ( !element.setAttribute ) {
            element = document.createElement('div');
          }
          if ( element.setAttribute && element.removeAttribute ) {
            element.setAttribute(eventName, '');
            isSupported = is(element[eventName], 'function');

            // If property was created, "remove it" (by setting value to `undefined`)
            if ( !is(element[eventName], 'undefined') ) {
              element[eventName] = undefined;
            }
            element.removeAttribute(eventName);
          }
        }

        element = null;
        return isSupported;
      }
      return isEventSupported;
    })(),
    /*>>hasevent*/

    // TODO :: Add flag for hasownprop ? didn't last time

    // hasOwnProperty shim by kangax needed for Safari 2.0 support
    _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
      hasOwnProp = function (object, property) {
        return _hasOwnProperty.call(object, property);
      };
    }
    else {
      hasOwnProp = function (object, property) { /* yes, this can give false positives/negatives, but most of the time we don't care about those */
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
      };
    }

    // Adapted from ES5-shim https://github.com/kriskowal/es5-shim/blob/master/es5-shim.js
    // es5.github.com/#x15.3.4.5

    if (!Function.prototype.bind) {
      Function.prototype.bind = function bind(that) {

        var target = this;

        if (typeof target != "function") {
            throw new TypeError();
        }

        var args = slice.call(arguments, 1),
            bound = function () {

            if (this instanceof bound) {

              var F = function(){};
              F.prototype = target.prototype;
              var self = new F();

              var result = target.apply(
                  self,
                  args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return self;

            } else {

              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              );

            }

        };

        return bound;
      };
    }

    /**
     * setCss applies given styles to the Modernizr DOM node.
     */
    function setCss( str ) {
        mStyle.cssText = str;
    }

    /**
     * setCssAll extrapolates all vendor-specific css strings.
     */
    function setCssAll( str1, str2 ) {
        return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
    }

    /**
     * is returns a boolean for if typeof obj is exactly type.
     */
    function is( obj, type ) {
        return typeof obj === type;
    }

    /**
     * contains returns a boolean for if substr is found within str.
     */
    function contains( str, substr ) {
        return !!~('' + str).indexOf(substr);
    }

    /*>>testprop*/

    // testProps is a generic CSS / DOM property test.

    // In testing support for a given CSS property, it's legit to test:
    //    `elem.style[styleName] !== undefined`
    // If the property is supported it will return an empty string,
    // if unsupported it will return undefined.

    // We'll take advantage of this quick test and skip setting a style
    // on our modernizr element, but instead just testing undefined vs
    // empty string.

    // Because the testing of the CSS property names (with "-", as
    // opposed to the camelCase DOM properties) is non-portable and
    // non-standard but works in WebKit and IE (but not Gecko or Opera),
    // we explicitly reject properties with dashes so that authors
    // developing in WebKit or IE first don't end up with
    // browser-specific content by accident.

    function testProps( props, prefixed ) {
        for ( var i in props ) {
            var prop = props[i];
            if ( !contains(prop, "-") && mStyle[prop] !== undefined ) {
                return prefixed == 'pfx' ? prop : true;
            }
        }
        return false;
    }
    /*>>testprop*/

    // TODO :: add testDOMProps
    /**
     * testDOMProps is a generic DOM property test; if a browser supports
     *   a certain property, it won't return undefined for it.
     */
    function testDOMProps( props, obj, elem ) {
        for ( var i in props ) {
            var item = obj[props[i]];
            if ( item !== undefined) {

                // return the property name as a string
                if (elem === false) return props[i];

                // let's bind a function
                if (is(item, 'function')){
                  // default to autobind unless override
                  return item.bind(elem || obj);
                }

                // return the unbound function or obj or value
                return item;
            }
        }
        return false;
    }

    /*>>testallprops*/
    /**
     * testPropsAll tests a list of DOM properties we want to check against.
     *   We specify literally ALL possible (known and/or likely) properties on
     *   the element including the non-vendor prefixed one, for forward-
     *   compatibility.
     */
    function testPropsAll( prop, prefixed, elem ) {

        var ucProp  = prop.charAt(0).toUpperCase() + prop.slice(1),
            props   = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

        // did they call .prefixed('boxSizing') or are we just testing a prop?
        if(is(prefixed, "string") || is(prefixed, "undefined")) {
          return testProps(props, prefixed);

        // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
        } else {
          props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
          return testDOMProps(props, prefixed, elem);
        }
    }
    /*>>testallprops*/


    /**
     * Tests
     * -----
     */

    // The *new* flexbox
    // dev.w3.org/csswg/css3-flexbox

    tests['flexbox'] = function() {
      return testPropsAll('flexWrap');
    };

    // The *old* flexbox
    // www.w3.org/TR/2009/WD-css3-flexbox-20090723/

    tests['flexboxlegacy'] = function() {
        return testPropsAll('boxDirection');
    };

    // On the S60 and BB Storm, getContext exists, but always returns undefined
    // so we actually have to call getContext() to verify
    // github.com/Modernizr/Modernizr/issues/issue/97/

    tests['canvas'] = function() {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    };

    tests['canvastext'] = function() {
        return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function'));
    };

    // webk.it/70117 is tracking a legit WebGL feature detect proposal

    // We do a soft detect which may false positive in order to avoid
    // an expensive context creation: bugzil.la/732441

    tests['webgl'] = function() {
        return !!window.WebGLRenderingContext;
    };

    /*
     * The Modernizr.touch test only indicates if the browser supports
     *    touch events, which does not necessarily reflect a touchscreen
     *    device, as evidenced by tablets running Windows 7 or, alas,
     *    the Palm Pre / WebOS (touch) phones.
     *
     * Additionally, Chrome (desktop) used to lie about its support on this,
     *    but that has since been rectified: crbug.com/36415
     *
     * We also test for Firefox 4 Multitouch Support.
     *
     * For more info, see: modernizr.github.com/Modernizr/touch.html
     */

    tests['touch'] = function() {
        var bool;

        if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
          bool = true;
        } else {
          injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''), function( node ) {
            bool = node.offsetTop === 9;
          });
        }

        return bool;
    };


    // geolocation is often considered a trivial feature detect...
    // Turns out, it's quite tricky to get right:
    //
    // Using !!navigator.geolocation does two things we don't want. It:
    //   1. Leaks memory in IE9: github.com/Modernizr/Modernizr/issues/513
    //   2. Disables page caching in WebKit: webk.it/43956
    //
    // Meanwhile, in Firefox < 8, an about:config setting could expose
    // a false positive that would throw an exception: bugzil.la/688158

    tests['geolocation'] = function() {
        return 'geolocation' in navigator;
    };


    tests['postmessage'] = function() {
      return !!window.postMessage;
    };


    // Chrome incognito mode used to throw an exception when using openDatabase
    // It doesn't anymore.
    tests['websqldatabase'] = function() {
      return !!window.openDatabase;
    };

    // Vendors had inconsistent prefixing with the experimental Indexed DB:
    // - Webkit's implementation is accessible through webkitIndexedDB
    // - Firefox shipped moz_indexedDB before FF4b9, but since then has been mozIndexedDB
    // For speed, we don't test the legacy (and beta-only) indexedDB
    tests['indexedDB'] = function() {
      return !!testPropsAll("indexedDB", window);
    };

    // documentMode logic from YUI to filter out IE8 Compat Mode
    //   which false positives.
    tests['hashchange'] = function() {
      return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7);
    };

    // Per 1.6:
    // This used to be Modernizr.historymanagement but the longer
    // name has been deprecated in favor of a shorter and property-matching one.
    // The old API is still available in 1.6, but as of 2.0 will throw a warning,
    // and in the first release thereafter disappear entirely.
    tests['history'] = function() {
      return !!(window.history && history.pushState);
    };

    tests['draganddrop'] = function() {
        var div = document.createElement('div');
        return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
    };

    // FF3.6 was EOL'ed on 4/24/12, but the ESR version of FF10
    // will be supported until FF19 (2/12/13), at which time, ESR becomes FF17.
    // FF10 still uses prefixes, so check for it until then.
    // for more ESR info, see: mozilla.org/en-US/firefox/organizations/faq/
    tests['websockets'] = function() {
        return 'WebSocket' in window || 'MozWebSocket' in window;
    };


    // css-tricks.com/rgba-browser-support/
    tests['rgba'] = function() {
        // Set an rgba() color and check the returned value

        setCss('background-color:rgba(150,255,150,.5)');

        return contains(mStyle.backgroundColor, 'rgba');
    };

    tests['hsla'] = function() {
        // Same as rgba(), in fact, browsers re-map hsla() to rgba() internally,
        //   except IE9 who retains it as hsla

        setCss('background-color:hsla(120,40%,100%,.5)');

        return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla');
    };

    tests['multiplebgs'] = function() {
        // Setting multiple images AND a color on the background shorthand property
        //  and then querying the style.background property value for the number of
        //  occurrences of "url(" is a reliable method for detecting ACTUAL support for this!

        setCss('background:url(https://),url(https://),red url(https://)');

        // If the UA supports multiple backgrounds, there should be three occurrences
        //   of the string "url(" in the return value for elemStyle.background

        return (/(url\s*\(.*?){3}/).test(mStyle.background);
    };



    // this will false positive in Opera Mini
    //   github.com/Modernizr/Modernizr/issues/396

    tests['backgroundsize'] = function() {
        return testPropsAll('backgroundSize');
    };

    tests['borderimage'] = function() {
        return testPropsAll('borderImage');
    };


    // Super comprehensive table about all the unique implementations of
    // border-radius: muddledramblings.com/table-of-css3-border-radius-compliance

    tests['borderradius'] = function() {
        return testPropsAll('borderRadius');
    };

    // WebOS unfortunately false positives on this test.
    tests['boxshadow'] = function() {
        return testPropsAll('boxShadow');
    };

    // FF3.0 will false positive on this test
    tests['textshadow'] = function() {
        return document.createElement('div').style.textShadow === '';
    };


    tests['opacity'] = function() {
        // Browsers that actually have CSS Opacity implemented have done so
        //  according to spec, which means their return values are within the
        //  range of [0.0,1.0] - including the leading zero.

        setCssAll('opacity:.55');

        // The non-literal . in this regex is intentional:
        //   German Chrome returns this value as 0,55
        // github.com/Modernizr/Modernizr/issues/#issue/59/comment/516632
        return (/^0.55$/).test(mStyle.opacity);
    };


    // Note, Android < 4 will pass this test, but can only animate
    //   a single property at a time
    //   goo.gl/v3V4Gp
    tests['cssanimations'] = function() {
        return testPropsAll('animationName');
    };


    tests['csscolumns'] = function() {
        return testPropsAll('columnCount');
    };


    tests['cssgradients'] = function() {
        /**
         * For CSS Gradients syntax, please see:
         * webkit.org/blog/175/introducing-css-gradients/
         * developer.mozilla.org/en/CSS/-moz-linear-gradient
         * developer.mozilla.org/en/CSS/-moz-radial-gradient
         * dev.w3.org/csswg/css3-images/#gradients-
         */

        var str1 = 'background-image:',
            str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
            str3 = 'linear-gradient(left top,#9f9, white);';

        setCss(
             // legacy webkit syntax (FIXME: remove when syntax not in use anymore)
              (str1 + '-webkit- '.split(' ').join(str2 + str1) +
             // standard syntax             // trailing 'background-image:'
              prefixes.join(str3 + str1)).slice(0, -str1.length)
        );

        return contains(mStyle.backgroundImage, 'gradient');
    };


    tests['cssreflections'] = function() {
        return testPropsAll('boxReflect');
    };


    tests['csstransforms'] = function() {
        return !!testPropsAll('transform');
    };


    tests['csstransforms3d'] = function() {

        var ret = !!testPropsAll('perspective');

        // Webkit's 3D transforms are passed off to the browser's own graphics renderer.
        //   It works fine in Safari on Leopard and Snow Leopard, but not in Chrome in
        //   some conditions. As a result, Webkit typically recognizes the syntax but
        //   will sometimes throw a false positive, thus we must do a more thorough check:
        if ( ret && 'webkitPerspective' in docElement.style ) {

          // Webkit allows this media query to succeed only if the feature is enabled.
          // `@media (transform-3d),(-webkit-transform-3d){ ... }`
          injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function( node, rule ) {
            ret = node.offsetLeft === 9 && node.offsetHeight === 3;
          });
        }
        return ret;
    };


    tests['csstransitions'] = function() {
        return testPropsAll('transition');
    };


    /*>>fontface*/
    // @font-face detection routine by Diego Perini
    // javascript.nwbox.com/CSSSupport/

    // false positives:
    //   WebOS github.com/Modernizr/Modernizr/issues/342
    //   WP7   github.com/Modernizr/Modernizr/issues/538
    tests['fontface'] = function() {
        var bool;

        injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function( node, rule ) {
          var style = document.getElementById('smodernizr'),
              sheet = style.sheet || style.styleSheet,
              cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';

          bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
        });

        return bool;
    };
    /*>>fontface*/

    // CSS generated content detection
    tests['generatedcontent'] = function() {
        var bool;

        injectElementWithStyles(['#',mod,'{font:0/0 a}#',mod,':after{content:"',smile,'";visibility:hidden;font:3px/1 a}'].join(''), function( node ) {
          bool = node.offsetHeight >= 3;
        });

        return bool;
    };



    // These tests evaluate support of the video/audio elements, as well as
    // testing what types of content they support.
    //
    // We're using the Boolean constructor here, so that we can extend the value
    // e.g.  Modernizr.video     // true
    //       Modernizr.video.ogg // 'probably'
    //
    // Codec values from : github.com/NielsLeenheer/html5test/blob/9106a8/index.html#L845
    //                     thx to NielsLeenheer and zcorpan

    // Note: in some older browsers, "no" was a return value instead of empty string.
    //   It was live in FF3.5.0 and 3.5.1, but fixed in 3.5.2
    //   It was also live in Safari 4.0.0 - 4.0.4, but fixed in 4.0.5

    tests['video'] = function() {
        var elem = document.createElement('video'),
            bool = false;

        // IE9 Running on Windows Server SKU can cause an exception to be thrown, bug #224
        try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('video/ogg; codecs="theora"')      .replace(/^no$/,'');

                // Without QuickTime, this value will be `undefined`. github.com/Modernizr/Modernizr/issues/546
                bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"') .replace(/^no$/,'');

                bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,'');
            }

        } catch(e) { }

        return bool;
    };

    tests['audio'] = function() {
        var elem = document.createElement('audio'),
            bool = false;

        try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');
                bool.mp3  = elem.canPlayType('audio/mpeg;')               .replace(/^no$/,'');

                // Mimetypes accepted:
                //   developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
                //   bit.ly/iphoneoscodecs
                bool.wav  = elem.canPlayType('audio/wav; codecs="1"')     .replace(/^no$/,'');
                bool.m4a  = ( elem.canPlayType('audio/x-m4a;')            ||
                              elem.canPlayType('audio/aac;'))             .replace(/^no$/,'');
            }
        } catch(e) { }

        return bool;
    };


    // In FF4, if disabled, window.localStorage should === null.

    // Normally, we could not test that directly and need to do a
    //   `('localStorage' in window) && ` test first because otherwise Firefox will
    //   throw bugzil.la/365772 if cookies are disabled

    // Also in iOS5 Private Browsing mode, attempting to use localStorage.setItem
    // will throw the exception:
    //   QUOTA_EXCEEDED_ERRROR DOM Exception 22.
    // Peculiarly, getItem and removeItem calls do not throw.

    // Because we are forced to try/catch this, we'll go aggressive.

    // Just FWIW: IE8 Compat mode supports these features completely:
    //   www.quirksmode.org/dom/html5.html
    // But IE8 doesn't support either with local files

    tests['localstorage'] = function() {
        try {
            localStorage.setItem(mod, mod);
            localStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };

    tests['sessionstorage'] = function() {
        try {
            sessionStorage.setItem(mod, mod);
            sessionStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };


    tests['webworkers'] = function() {
        return !!window.Worker;
    };


    tests['applicationcache'] = function() {
        return !!window.applicationCache;
    };


    // Thanks to Erik Dahlstrom
    tests['svg'] = function() {
        return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
    };

    // specifically for SVG inline in HTML, not within XHTML
    // test page: paulirish.com/demo/inline-svg
    tests['inlinesvg'] = function() {
      var div = document.createElement('div');
      div.innerHTML = '<svg/>';
      return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
    };

    // SVG SMIL animation
    tests['smil'] = function() {
        return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')));
    };

    // This test is only for clip paths in SVG proper, not clip paths on HTML content
    // demo: srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg

    // However read the comments to dig into applying SVG clippaths to HTML content here:
    //   github.com/Modernizr/Modernizr/issues/213#issuecomment-1149491
    tests['svgclippaths'] = function() {
        return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
    };

    /*>>webforms*/
    // input features and input types go directly onto the ret object, bypassing the tests loop.
    // Hold this guy to execute in a moment.
    function webforms() {
        /*>>input*/
        // Run through HTML5's new input attributes to see if the UA understands any.
        // We're using f which is the <input> element created early on
        // Mike Taylr has created a comprehensive resource for testing these attributes
        //   when applied to all input types:
        //   miketaylr.com/code/input-type-attr.html
        // spec: www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary

        // Only input placeholder is tested while textarea's placeholder is not.
        // Currently Safari 4 and Opera 11 have support only for the input placeholder
        // Both tests are available in feature-detects/forms-placeholder.js
        Modernizr['input'] = (function( props ) {
            for ( var i = 0, len = props.length; i < len; i++ ) {
                attrs[ props[i] ] = !!(props[i] in inputElem);
            }
            if (attrs.list){
              // safari false positive's on datalist: webk.it/74252
              // see also github.com/Modernizr/Modernizr/issues/146
              attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
            }
            return attrs;
        })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
        /*>>input*/

        /*>>inputtypes*/
        // Run through HTML5's new input types to see if the UA understands any.
        //   This is put behind the tests runloop because it doesn't return a
        //   true/false like all the other tests; instead, it returns an object
        //   containing each input type with its corresponding true/false value

        // Big thanks to @miketaylr for the html5 forms expertise. miketaylr.com/
        Modernizr['inputtypes'] = (function(props) {

            for ( var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++ ) {

                inputElem.setAttribute('type', inputElemType = props[i]);
                bool = inputElem.type !== 'text';

                // We first check to see if the type we give it sticks..
                // If the type does, we feed it a textual value, which shouldn't be valid.
                // If the value doesn't stick, we know there's input sanitization which infers a custom UI
                if ( bool ) {

                    inputElem.value         = smile;
                    inputElem.style.cssText = 'position:absolute;visibility:hidden;';

                    if ( /^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined ) {

                      docElement.appendChild(inputElem);
                      defaultView = document.defaultView;

                      // Safari 2-4 allows the smiley as a value, despite making a slider
                      bool =  defaultView.getComputedStyle &&
                              defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&
                              // Mobile android web browser has false positive, so must
                              // check the height to see if the widget is actually there.
                              (inputElem.offsetHeight !== 0);

                      docElement.removeChild(inputElem);

                    } else if ( /^(search|tel)$/.test(inputElemType) ){
                      // Spec doesn't define any special parsing or detectable UI
                      //   behaviors so we pass these through as true

                      // Interestingly, opera fails the earlier test, so it doesn't
                      //  even make it here.

                    } else if ( /^(url|email)$/.test(inputElemType) ) {
                      // Real url and email support comes with prebaked validation.
                      bool = inputElem.checkValidity && inputElem.checkValidity() === false;

                    } else {
                      // If the upgraded input compontent rejects the :) text, we got a winner
                      bool = inputElem.value != smile;
                    }
                }

                inputs[ props[i] ] = !!bool;
            }
            return inputs;
        })('search tel url email datetime date month week time datetime-local number range color'.split(' '));
        /*>>inputtypes*/
    }
    /*>>webforms*/


    // End of test definitions
    // -----------------------



    // Run through all tests and detect their support in the current UA.
    // todo: hypothetically we could be doing an array of tests and use a basic loop here.
    for ( var feature in tests ) {
        if ( hasOwnProp(tests, feature) ) {
            // run the test, throw the return value into the Modernizr,
            //   then based on that boolean, define an appropriate className
            //   and push it into an array of classes we'll join later.
            featureName  = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }

    /*>>webforms*/
    // input tests need to run.
    Modernizr.input || webforms();
    /*>>webforms*/


    /**
     * addTest allows the user to define their own feature tests
     * the result will be added onto the Modernizr object,
     * as well as an appropriate className set on the html element
     *
     * @param feature - String naming the feature
     * @param test - Function returning true if feature is supported, false if not
     */
     Modernizr.addTest = function ( feature, test ) {
       if ( typeof feature == 'object' ) {
         for ( var key in feature ) {
           if ( hasOwnProp( feature, key ) ) {
             Modernizr.addTest( key, feature[ key ] );
           }
         }
       } else {

         feature = feature.toLowerCase();

         if ( Modernizr[feature] !== undefined ) {
           // we're going to quit if you're trying to overwrite an existing test
           // if we were to allow it, we'd do this:
           //   var re = new RegExp("\\b(no-)?" + feature + "\\b");
           //   docElement.className = docElement.className.replace( re, '' );
           // but, no rly, stuff 'em.
           return Modernizr;
         }

         test = typeof test == 'function' ? test() : test;

         if (typeof enableClasses !== "undefined" && enableClasses) {
           docElement.className += ' ' + (test ? '' : 'no-') + feature;
         }
         Modernizr[feature] = test;

       }

       return Modernizr; // allow chaining.
     };


    // Reset modElem.cssText to nothing to reduce memory footprint.
    setCss('');
    modElem = inputElem = null;

    /*>>shiv*/
    /**
     * @preserve HTML5 Shiv prev3.7.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
     */
    ;(function(window, document) {
        /*jshint evil:true */
        /** version */
        var version = '3.7.0';

        /** Preset options */
        var options = window.html5 || {};

        /** Used to skip problem elements */
        var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

        /** Not all elements can be cloned in IE **/
        var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

        /** Detect whether the browser supports default html5 styles */
        var supportsHtml5Styles;

        /** Name of the expando, to work with multiple documents or to re-shiv one document */
        var expando = '_html5shiv';

        /** The id for the the documents expando */
        var expanID = 0;

        /** Cached data for each document */
        var expandoData = {};

        /** Detect whether the browser supports unknown elements */
        var supportsUnknownElements;

        (function() {
          try {
            var a = document.createElement('a');
            a.innerHTML = '<xyz></xyz>';
            //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
            supportsHtml5Styles = ('hidden' in a);

            supportsUnknownElements = a.childNodes.length == 1 || (function() {
              // assign a false positive if unable to shiv
              (document.createElement)('a');
              var frag = document.createDocumentFragment();
              return (
                typeof frag.cloneNode == 'undefined' ||
                typeof frag.createDocumentFragment == 'undefined' ||
                typeof frag.createElement == 'undefined'
              );
            }());
          } catch(e) {
            // assign a false positive if detection fails => unable to shiv
            supportsHtml5Styles = true;
            supportsUnknownElements = true;
          }

        }());

        /*--------------------------------------------------------------------------*/

        /**
         * Creates a style sheet with the given CSS text and adds it to the document.
         * @private
         * @param {Document} ownerDocument The document.
         * @param {String} cssText The CSS text.
         * @returns {StyleSheet} The style element.
         */
        function addStyleSheet(ownerDocument, cssText) {
          var p = ownerDocument.createElement('p'),
          parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

          p.innerHTML = 'x<style>' + cssText + '</style>';
          return parent.insertBefore(p.lastChild, parent.firstChild);
        }

        /**
         * Returns the value of `html5.elements` as an array.
         * @private
         * @returns {Array} An array of shived element node names.
         */
        function getElements() {
          var elements = html5.elements;
          return typeof elements == 'string' ? elements.split(' ') : elements;
        }

        /**
         * Returns the data associated to the given document
         * @private
         * @param {Document} ownerDocument The document.
         * @returns {Object} An object of data.
         */
        function getExpandoData(ownerDocument) {
          var data = expandoData[ownerDocument[expando]];
          if (!data) {
            data = {};
            expanID++;
            ownerDocument[expando] = expanID;
            expandoData[expanID] = data;
          }
          return data;
        }

        /**
         * returns a shived element for the given nodeName and document
         * @memberOf html5
         * @param {String} nodeName name of the element
         * @param {Document} ownerDocument The context document.
         * @returns {Object} The shived element.
         */
        function createElement(nodeName, ownerDocument, data){
          if (!ownerDocument) {
            ownerDocument = document;
          }
          if(supportsUnknownElements){
            return ownerDocument.createElement(nodeName);
          }
          if (!data) {
            data = getExpandoData(ownerDocument);
          }
          var node;

          if (data.cache[nodeName]) {
            node = data.cache[nodeName].cloneNode();
          } else if (saveClones.test(nodeName)) {
            node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
          } else {
            node = data.createElem(nodeName);
          }

          // Avoid adding some elements to fragments in IE < 9 because
          // * Attributes like `name` or `type` cannot be set/changed once an element
          //   is inserted into a document/fragment
          // * Link elements with `src` attributes that are inaccessible, as with
          //   a 403 response, will cause the tab/window to crash
          // * Script elements appended to fragments will execute when their `src`
          //   or `text` property is set
          return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
        }

        /**
         * returns a shived DocumentFragment for the given document
         * @memberOf html5
         * @param {Document} ownerDocument The context document.
         * @returns {Object} The shived DocumentFragment.
         */
        function createDocumentFragment(ownerDocument, data){
          if (!ownerDocument) {
            ownerDocument = document;
          }
          if(supportsUnknownElements){
            return ownerDocument.createDocumentFragment();
          }
          data = data || getExpandoData(ownerDocument);
          var clone = data.frag.cloneNode(),
          i = 0,
          elems = getElements(),
          l = elems.length;
          for(;i<l;i++){
            clone.createElement(elems[i]);
          }
          return clone;
        }

        /**
         * Shivs the `createElement` and `createDocumentFragment` methods of the document.
         * @private
         * @param {Document|DocumentFragment} ownerDocument The document.
         * @param {Object} data of the document.
         */
        function shivMethods(ownerDocument, data) {
          if (!data.cache) {
            data.cache = {};
            data.createElem = ownerDocument.createElement;
            data.createFrag = ownerDocument.createDocumentFragment;
            data.frag = data.createFrag();
          }


          ownerDocument.createElement = function(nodeName) {
            //abort shiv
            if (!html5.shivMethods) {
              return data.createElem(nodeName);
            }
            return createElement(nodeName, ownerDocument, data);
          };

          ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
                                                          'var n=f.cloneNode(),c=n.createElement;' +
                                                          'h.shivMethods&&(' +
                                                          // unroll the `createElement` calls
                                                          getElements().join().replace(/[\w\-]+/g, function(nodeName) {
            data.createElem(nodeName);
            data.frag.createElement(nodeName);
            return 'c("' + nodeName + '")';
          }) +
            ');return n}'
                                                         )(html5, data.frag);
        }

        /*--------------------------------------------------------------------------*/

        /**
         * Shivs the given document.
         * @memberOf html5
         * @param {Document} ownerDocument The document to shiv.
         * @returns {Document} The shived document.
         */
        function shivDocument(ownerDocument) {
          if (!ownerDocument) {
            ownerDocument = document;
          }
          var data = getExpandoData(ownerDocument);

          if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
            data.hasCSS = !!addStyleSheet(ownerDocument,
                                          // corrects block display not defined in IE6/7/8/9
                                          'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
                                            // adds styling not present in IE6/7/8/9
                                            'mark{background:#FF0;color:#000}' +
                                            // hides non-rendered elements
                                            'template{display:none}'
                                         );
          }
          if (!supportsUnknownElements) {
            shivMethods(ownerDocument, data);
          }
          return ownerDocument;
        }

        /*--------------------------------------------------------------------------*/

        /**
         * The `html5` object is exposed so that more elements can be shived and
         * existing shiving can be detected on iframes.
         * @type Object
         * @example
         *
         * // options can be changed before the script is included
         * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
         */
        var html5 = {

          /**
           * An array or space separated string of node names of the elements to shiv.
           * @memberOf html5
           * @type Array|String
           */
          'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',

          /**
           * current version of html5shiv
           */
          'version': version,

          /**
           * A flag to indicate that the HTML5 style sheet should be inserted.
           * @memberOf html5
           * @type Boolean
           */
          'shivCSS': (options.shivCSS !== false),

          /**
           * Is equal to true if a browser supports creating unknown/HTML5 elements
           * @memberOf html5
           * @type boolean
           */
          'supportsUnknownElements': supportsUnknownElements,

          /**
           * A flag to indicate that the document's `createElement` and `createDocumentFragment`
           * methods should be overwritten.
           * @memberOf html5
           * @type Boolean
           */
          'shivMethods': (options.shivMethods !== false),

          /**
           * A string to describe the type of `html5` object ("default" or "default print").
           * @memberOf html5
           * @type String
           */
          'type': 'default',

          // shivs the document according to the specified `html5` object options
          'shivDocument': shivDocument,

          //creates a shived element
          createElement: createElement,

          //creates a shived documentFragment
          createDocumentFragment: createDocumentFragment
        };

        /*--------------------------------------------------------------------------*/

        // expose html5
        window.html5 = html5;

        // shiv the document
        shivDocument(document);

    }(this, document));
    /*>>shiv*/

    // Assign private properties to the return object with prefix
    Modernizr._version      = version;

    // expose these for the plugin API. Look in the source for how to join() them against your input
    /*>>prefixes*/
    Modernizr._prefixes     = prefixes;
    /*>>prefixes*/
    /*>>domprefixes*/
    Modernizr._domPrefixes  = domPrefixes;
    Modernizr._cssomPrefixes  = cssomPrefixes;
    /*>>domprefixes*/

    /*>>mq*/
    // Modernizr.mq tests a given media query, live against the current state of the window
    // A few important notes:
    //   * If a browser does not support media queries at all (eg. oldIE) the mq() will always return false
    //   * A max-width or orientation query will be evaluated against the current state, which may change later.
    //   * You must specify values. Eg. If you are testing support for the min-width media query use:
    //       Modernizr.mq('(min-width:0)')
    // usage:
    // Modernizr.mq('only screen and (max-width:768)')
    Modernizr.mq            = testMediaQuery;
    /*>>mq*/

    /*>>hasevent*/
    // Modernizr.hasEvent() detects support for a given event, with an optional element to test on
    // Modernizr.hasEvent('gesturestart', elem)
    Modernizr.hasEvent      = isEventSupported;
    /*>>hasevent*/

    /*>>testprop*/
    // Modernizr.testProp() investigates whether a given style property is recognized
    // Note that the property names must be provided in the camelCase variant.
    // Modernizr.testProp('pointerEvents')
    Modernizr.testProp      = function(prop){
        return testProps([prop]);
    };
    /*>>testprop*/

    /*>>testallprops*/
    // Modernizr.testAllProps() investigates whether a given style property,
    //   or any of its vendor-prefixed variants, is recognized
    // Note that the property names must be provided in the camelCase variant.
    // Modernizr.testAllProps('boxSizing')
    Modernizr.testAllProps  = testPropsAll;
    /*>>testallprops*/


    /*>>teststyles*/
    // Modernizr.testStyles() allows you to add custom styles to the document and test an element afterwards
    // Modernizr.testStyles('#modernizr { position:absolute }', function(elem, rule){ ... })
    Modernizr.testStyles    = injectElementWithStyles;
    /*>>teststyles*/


    /*>>prefixed*/
    // Modernizr.prefixed() returns the prefixed or nonprefixed property name variant of your input
    // Modernizr.prefixed('boxSizing') // 'MozBoxSizing'

    // Properties must be passed as dom-style camelcase, rather than `box-sizing` hypentated style.
    // Return values will also be the camelCase variant, if you need to translate that to hypenated style use:
    //
    //     str.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');

    // If you're trying to ascertain which transition end event to bind to, you might do something like...
    //
    //     var transEndEventNames = {
    //       'WebkitTransition' : 'webkitTransitionEnd',
    //       'MozTransition'    : 'transitionend',
    //       'OTransition'      : 'oTransitionEnd',
    //       'msTransition'     : 'MSTransitionEnd',
    //       'transition'       : 'transitionend'
    //     },
    //     transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];

    Modernizr.prefixed      = function(prop, obj, elem){
      if(!obj) {
        return testPropsAll(prop, 'pfx');
      } else {
        // Testing DOM property e.g. Modernizr.prefixed('requestAnimationFrame', window) // 'mozRequestAnimationFrame'
        return testPropsAll(prop, obj, elem);
      }
    };
    /*>>prefixed*/


    /*>>cssclasses*/
    // Remove "no-js" class from <html> element, if it exists:
    docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

                            // Add the new classes to the <html> element.
                            (enableClasses ? ' js ' + classes.join(' ') : '');
    /*>>cssclasses*/

    return Modernizr;

})(this, this.document);

/*
 * @name DoubleScroll
 * @desc displays scroll bar on top and on the bottom of the div
 * @requires jQuery
 *
 * @author Pawel Suwala - http://suwala.eu/
 * @author Antoine Vianey - http://www.astek.fr/
 * @version 0.4 (18-06-2014)
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * 
 * Usage:
 * https://github.com/avianey/jqDoubleScroll
 */
(function ( $ ) {
    $.fn.doubleScroll = function(userOptions) {
        // Default options
        var options = {
            contentElement: undefined, // Widest element, if not specified first child element will be used
            scrollCss: {
                'overflow-x': 'auto',
                'overflow-y': 'hidden'
            },
            contentCss: {
                'overflow-x': 'auto',
                'overflow-y': 'hidden'
            },
            onlyIfScroll: true, // top scrollbar is not shown if the bottom one is not present
            resetOnWindowResize: false, // recompute the top ScrollBar requirements when the window is resized
            timeToWaitForResize: 30 // wait for the last update event (usefull when browser fire resize event constantly during ressing)
        };
        $.extend(true, options, userOptions);
        // do not modify
        // internal stuff
        $.extend(options, {
            topScrollBarMarkup: '<div class="doubleScroll-scroll-wrapper" style="height: 20px;"><div class="doubleScroll-scroll" style="height: 20px;"></div></div>',
            topScrollBarWrapperSelector: '.doubleScroll-scroll-wrapper',
            topScrollBarInnerSelector: '.doubleScroll-scroll'
        });

        var _showScrollBar = function($self, options) {

            if (options.onlyIfScroll && $self.get(0).scrollWidth <= $self.width()) {
                // content doesn't scroll
                // remove any existing occurrence...
                $self.prev(options.topScrollBarWrapperSelector).remove();
                return;
            }

            // add div that will act as an upper scroll only if not already added to the DOM
            var $topScrollBar = $self.prev(options.topScrollBarWrapperSelector);
            if ($topScrollBar.length == 0) {

                // creating the scrollbar
                // added before in the DOM
                $topScrollBar = $(options.topScrollBarMarkup);
                $self.before($topScrollBar);

                // apply the css
                $topScrollBar.css(options.scrollCss);
                $self.css(options.contentCss);

                // bind upper scroll to bottom scroll
                $topScrollBar.bind('scroll.doubleScroll', function() {
                    $self.scrollLeft($topScrollBar.scrollLeft());
                });

                // bind bottom scroll to upper scroll
                var selfScrollHandler = function() {
                    $topScrollBar.scrollLeft($self.scrollLeft());
                };
                $self.bind('scroll.doubleScroll', selfScrollHandler);
            }

            // find the content element (should be the widest one)
            var $contentElement;
            if (options.contentElement !== undefined && $self.find(options.contentElement).length !== 0) {
                $contentElement = $self.find(options.contentElement);
            } else {
                $contentElement = $self.find('>:first-child');
            }

            // set the width of the wrappers
            $(options.topScrollBarInnerSelector, $topScrollBar).width($contentElement.outerWidth());
            $topScrollBar.width($self.width());
            $topScrollBar.scrollLeft($self.scrollLeft());

        };

        return this.each(function() {
            var $self = $(this);
            _showScrollBar($self, options);

            // bind the resize handler
            // do it once
            if (options.resetOnWindowResize) {
                var id;
                var handler = function(e) {
                    _showScrollBar($self, options);
                };
                $(window).bind('resize.doubleScroll', function() {
                    // adding/removing/replacing the scrollbar might resize the window
                    // so the resizing flag will avoid the infinite loop here...
                    clearTimeout(id);
                    id = setTimeout(handler, options.timeToWaitForResize);
                });
            }
        });
    };
}( jQuery ));
/*!
 * headroom.js v0.7.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

!function(a,b){"use strict";function c(a){this.callback=a,this.ticking=!1}function d(b){return b&&"undefined"!=typeof a&&(b===a||b.nodeType)}function e(a){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var b,c,f=a||{};for(c=1;c<arguments.length;c++){var g=arguments[c]||{};for(b in g)f[b]="object"!=typeof f[b]||d(f[b])?f[b]||g[b]:e(f[b],g[b])}return f}function f(a){return a===Object(a)?a:{down:a,up:a}}function g(a,b){b=e(b,g.options),this.lastKnownScrollY=0,this.elem=a,this.debouncer=new c(this.update.bind(this)),this.tolerance=f(b.tolerance),this.classes=b.classes,this.offset=b.offset,this.scroller=b.scroller,this.initialised=!1,this.onPin=b.onPin,this.onUnpin=b.onUnpin,this.onTop=b.onTop,this.onNotTop=b.onNotTop}var h={bind:!!function(){}.bind,classList:"classList"in b.documentElement,rAF:!!(a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame)};a.requestAnimationFrame=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame,c.prototype={constructor:c,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},g.prototype={constructor:g,init:function(){return g.cutsTheMustard?(this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this):void 0},destroy:function(){var a=this.classes;this.initialised=!1,this.elem.classList.remove(a.unpinned,a.pinned,a.top,a.initial),this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var a=this.elem.classList,b=this.classes;(a.contains(b.pinned)||!a.contains(b.unpinned))&&(a.add(b.unpinned),a.remove(b.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var a=this.elem.classList,b=this.classes;a.contains(b.unpinned)&&(a.remove(b.unpinned),a.add(b.pinned),this.onPin&&this.onPin.call(this))},top:function(){var a=this.elem.classList,b=this.classes;a.contains(b.top)||(a.add(b.top),a.remove(b.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notTop)||(a.add(b.notTop),a.remove(b.top),this.onNotTop&&this.onNotTop.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(b.documentElement||b.body.parentNode||b.body).scrollTop},getViewportHeight:function(){return a.innerHeight||b.documentElement.clientHeight||b.body.clientHeight},getDocumentHeight:function(){var a=b.body,c=b.documentElement;return Math.max(a.scrollHeight,c.scrollHeight,a.offsetHeight,c.offsetHeight,a.clientHeight,c.clientHeight)},getElementHeight:function(a){return Math.max(a.scrollHeight,a.offsetHeight,a.clientHeight)},getScrollerHeight:function(){return this.scroller===a||this.scroller===b.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(a){var b=0>a,c=a+this.getViewportHeight()>this.getScrollerHeight();return b||c},toleranceExceeded:function(a,b){return Math.abs(a-this.lastKnownScrollY)>=this.tolerance[b]},shouldUnpin:function(a,b){var c=a>this.lastKnownScrollY,d=a>=this.offset;return c&&d&&b},shouldPin:function(a,b){var c=a<this.lastKnownScrollY,d=a<=this.offset;return c&&b||d},update:function(){var a=this.getScrollY(),b=a>this.lastKnownScrollY?"down":"up",c=this.toleranceExceeded(a,b);this.isOutOfBounds(a)||(a<=this.offset?this.top():this.notTop(),this.shouldUnpin(a,c)?this.unpin():this.shouldPin(a,c)&&this.pin(),this.lastKnownScrollY=a)}},g.options={tolerance:{up:0,down:0},offset:0,scroller:a,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",initial:"headroom"}},g.cutsTheMustard="undefined"!=typeof h&&h.rAF&&h.bind&&h.classList,a.Headroom=g}(window,document);
/*!
 * headroom.js v0.7.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

!function(a){a&&(a.fn.headroom=function(b){return this.each(function(){var c=a(this),d=c.data("headroom"),e="object"==typeof b&&b;e=a.extend(!0,{},Headroom.options,e),d||(d=new Headroom(this,e),d.init(),c.data("headroom",d)),"string"==typeof b&&d[b]()})},a("[data-headroom]").each(function(){var b=a(this);b.headroom(b.data())}))}(window.Zepto||window.jQuery);
/*global _:false, Modernizr:false */

(function ($) {
  'use strict';
  var Config = {
    Defaults: {
      screenSizes: [
        {
          name: 'lg', test: function () {
          return Modernizr.mq('only all and (min-width: 1200px)');
        }, container: 1170
        },
        {
          name: 'md', test: function () {
          return Modernizr.mq('only all and (min-width: 992px)');
        }, container: 970
        },
        {
          name: 'sm', test: function () {
          return Modernizr.mq('only all and (min-width: 768px)');
        }, container: 750
        },
        {
          name: 'xs', test: function () {
          return true;
        }
        }
      ],
      eventName: 'id7:reflow'
    }
  };

  var ReflowEvent = (function () {
    function ReflowEvent(o) {
      o = $.extend({}, Config.Defaults, o);
      this.options = o;

      this.onScreenResize(); // First time run on init
      this.wireEventHandlers();
    }

    $.extend(ReflowEvent.prototype, {
      _screenConfig: function screenConfig() {
        return _.find(this.options.screenSizes, function (screenConfig) {
          return screenConfig.test();
        });
      },

      onScreenResize: function onResize(e, force) {
        // Which stop-point are we on?
        var screenConfig = this._screenConfig();

        // Early exit if the width is the same. xs is variable width so can't be clever :(
        if (!force && screenConfig.name !== 'xs' && screenConfig.name === this.lastScreenConfig) return;

        this.options.container.trigger(this.options.eventName, [screenConfig]);

        this.lastScreenConfig = screenConfig.name;
      },

      reflow: function reflow() {
        this.onScreenResize({}, true);
      },

      wireEventHandlers: function wireEventHandlers() {
        $(window).on('resize.id7.reflow.onScreenResize', $.proxy(this.onScreenResize, this));

        // ID-30 on load (i.e. after fonts have loaded) run this, forcing a resize
        if (document.readyState == 'complete') {
          this.reflow();
        } else {
          $(window).on('load', $.proxy(this.reflow, this));
        }
      }
    });

    return ReflowEvent;
  })();

  $.fn.reflow = function (option) {
    function attach(i, element) {
      var $el = $(element);
      var data = $el.data('id7.reflow');
      var options = $.extend({}, $el.data(), { container: $el }, typeof option == 'object' && option);

      if (!data) $el.data('id7.reflow', (data = new ReflowEvent(options)));

      if (option === 'reflow' || option === 'force' || option === true) data.reflow();
    }

    return this.each(attach);
  };

  $(function () {
    $(window).reflow();
  });
})(jQuery);

/*global _:false, console:false, JSON:false */

(function ($) {
  'use strict';

  var Config = {
    Templates: {
      Popover: _.template([
        '<div class="account-info">',
        '<iframe src="<%- iframelink %>" scrolling="no" frameborder="0" allowtransparency="true" seamless></iframe>',
        '</div>',
        '<div class="actions">',
        '<div class="btn-group btn-group-justified">',
        '<div class="btn-group sign-out">',
        '<a href="<%- logoutlink %>" class="btn btn-default">Sign out</a>',
        '</div>',
        '</div>',
        '</div>'
      ].join('')),
      Action: _.template([
        '<div class="btn-group">',
        '<a href="<%- href %>" title="<%= tooltip %>" class="btn btn-default <%= classes %>"><%= title %></a>',
        '</div>'
      ].join(''))
    },
    Defaults: {
      container: false,
      iframelink: 'https://websignon.warwick.ac.uk/origin/account/popover',
      template: [
        '<div class="popover account-information">',
        '<div class="arrow"></div>',
        '<div class="popover-inner">',
        '<div class="popover-content"><p></p></div>',
        '</div>',
        '</div>'
      ].join('')
    },
    MessagePrefix: 'message.id7.account-popover.'
  };

  /**
   * Display a popover with account information
   */
  var AccountPopover = (function () {
    function AccountPopover(o) {
      o = $.extend({}, Config.Defaults, o);
      this.$trigger = o.trigger;
      this.options = o;

      if (typeof this.options.logoutlink === 'undefined') {
        this.options.logoutlink = this.$trigger.attr('href');
      }

      this.wireEventHandlers();
    }

    $.extend(AccountPopover.prototype, {
      wireEventHandlers: function wireEventHandlers() {
        var $trigger = this.$trigger;

        $trigger
          .on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
          })
          .popover({
            container: this.options.container,
            content: Config.Templates.Popover(this.options),
            template: this.options.template,
            html: true,
            placement: 'bottom',
            title: 'Account information',
            trigger: 'click'
          })
          .html(this.options.name + '<span class="caret"></span>');

        // Click away to dismiss
        $('html').on('click.popoverDismiss', function (e) {
          // if clicking anywhere other than the popover itself
          if ($(e.target).closest('.popover').length === 0 && $(e.target).closest('.use-popover').length === 0) {
            $trigger.popover('hide');
          }
        });
      },
      onMessage: function onMessage(messageType, data) {
        var $popover = this.$trigger.next('.popover');

        switch (messageType) {
          case 'addAction':
            _.defaults(data, { classes: '', tooltip: '' });

            $popover.find('.actions > .btn-group').prepend(Config.Templates.Action(data));
            $popover.find('.actions > .btn-group > .btn-group').first().find('[title]:not([title=""])').tooltip({
              placement: 'bottom'
            });
            break;
          case 'resizeIframe':
            $popover.find('.account-info iframe').height(data.height);
            break;
          case 'signedOut':
            var loginlink = this.options.loginlink;
            $popover.find('.actions > .btn-group > .sign-out').replaceWith(Config.Templates.Action({ href: loginlink, classes: 'sign-in', title: 'Sign in', tooltip: '' }));
            break;
          default:
            console.error('Unexpected message type: ' + messageType);
        }
      }
    });

    return AccountPopover;
  })();

  $.fn.accountPopover = function (o) {
    o = o || {};

    function attach(i, element) {
      var $trigger = $(element);
      var accountPopover = new AccountPopover($.extend({}, $trigger.data(), o, {
        trigger: $trigger
      }));

      $trigger.data('id7.account-popover', accountPopover);
    }

    return this.each(attach);
  };

  $(function () {
    $('[data-toggle="id7:account-popover"]').accountPopover();

    // Listen to relevant messages and send them through
    $(window).on('message', function (e) {
      var origin = e.originalEvent.origin;

      try {
        var data = JSON.parse(e.originalEvent.data);
        if (data.type && data.type.indexOf(Config.MessagePrefix) === 0) {
          var messageType = data.type.substring(Config.MessagePrefix.length);

          // Send the message out to each instance
          $('[data-toggle="id7:account-popover"]').each(function () {
            var $trigger = $(this);
            var accountPopover = $trigger.data('id7.account-popover');

            if (accountPopover.options.iframelink.indexOf(origin) !== 0) {
              console.error('Ignored message of type ' + messageType + ' because origin ' + origin + ' didn\'t match iframe link ' + accountPopover.options.iframelink);
            } else {
              accountPopover.onMessage(messageType, data);
            }
          });
        }
      } catch (error) {}
    })
  });

})(jQuery);

/*global _:false, Modernizr:false */

(function ($) {
  'use strict';
  var Config = {
    ScreenSizes: [
      {
        name: 'lg', test: function () {
        return Modernizr.mq('only all and (min-width: 1200px)');
      }, container: 1170
      },
      {
        name: 'md', test: function () {
        return Modernizr.mq('only all and (min-width: 992px)');
      }, container: 970
      },
      {
        name: 'sm', test: function () {
        return Modernizr.mq('only all and (min-width: 768px)');
      }, container: 750
      },
      {
        name: 'xs', test: function () {
        return true;
      }
      }
    ],
    Templates: {
      moreContainer: [
        '<ul class="nav navbar-nav navbar-right">',
        '<li class="dropdown">',
        '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-caret-down"></i></a>',
        '<ul class="dropdown-menu" role="menu"></ul>',
        '</li>',
        '</ul>'
      ].join(''),
      marker: '<div class="id7-navigation-marker"></div>'
    },
    Defaults: {
      fixedHeader: true,
      fixedNav: true,
      fitToWidth: false,
      collapseSmallscreen: false,
      trimLinkTitles: {
        maxLength: 60,
        append: '&hellip;'
      }
    }
  };

  var Navigation = (function () {
    function Navigation(o) {
      o = $.extend({}, Config.Defaults, o);
      this.$container = o.container;

      // Allow trimLinkTitles: true, replace with config options
      if (o.trimLinkTitles && typeof o.trimLinkTitles !== 'object') {
        o.trimLinkTitles = $.extend({}, Config.Defaults.trimLinkTitles);
      }

      this.options = o;

      if (this.options.fixedHeader) this.markHeaderFixedPosition();
      if (this.options.fixedNav) this.markFixedPosition();

      if (o.trimLinkTitles) this.trimLinkTitles();

      this.wireEventHandlers();
    }

    $.extend(Navigation.prototype, {
      trimLinkTitles: function trimLinkTitles() {
        var options = this.options.trimLinkTitles;

        this.$container.find('.nav a').filter(function () {
          return $.trim($(this).text()).length > options.maxLength;
        }).each(function () {
          var $link = $(this);
          var linkTitle = $.trim($link.text());

          // Split on spaces to avoid breaking in the middle of a word
          var words = linkTitle.split(/\s+/g);
          var newLinkTitle = [];

          $.each(words, function (i, word) {
            var currentLinkTitle = newLinkTitle.join(' ');
            if ((currentLinkTitle + ' ' + word).length > options.maxLength) {
              return false; // break
            }

            newLinkTitle.push(word);
          });

          $link.attr('title', linkTitle).text(newLinkTitle.join(' ')).append(options.append);
        });
      },

      affixHeader: function affixHeader() {
        var $h1 = $('.id7-header-text h1');
        if ($h1.length) {
          // Set height in stone
          this.markHeaderFixedPosition();

          var offsetTop = $('.id7-header-text').offset().top;
          var headroomOffset = offsetTop;

          if ($('.id7-main-content-area').length > 0) {
            headroomOffset = $('.id7-main-content-area').offset().top;
          }

          $h1.affix({
            offset: {
              top: offsetTop
            }
          }).headroom({
            offset: headroomOffset
          });
        }
      },

      affixNav: function affixNav() {
        var $nav = this.$container;

        var $h1 = $('.id7-header-text h1');
        var offsetTop;
        if ($h1.length) {
          offsetTop = $h1.offset().top;
        } else {
          offsetTop = $nav.offset().top;
        }

        var headroomOffset = offsetTop;

        if ($('.id7-main-content-area').length > 0) {
          headroomOffset = $('.id7-main-content-area').offset().top;
        }

        $nav.affix({
          offset: {
            top: offsetTop
          }
        }).headroom({
          offset: headroomOffset
        });
      },

      fitToWidth: function fitToWidth(screenConfig) {
        var options = this.options;

        this.$container.find('.navbar:not(.navbar-secondary)').each(function () {
          var $navbar = $(this);
          var $nav = $navbar.find('> .nav').first();
          var $moreContainer = $navbar.find('> .navbar-right');

          // Move existing collapsed links back into the nav
          $moreContainer.find('> .dropdown > .dropdown-menu > li').each(function () {
            var $li = $(this);
            $nav.append($li);
          });

          // Insert a more container if one doesn't exist
          if ($moreContainer.length === 0) {
            $moreContainer = $(Config.Templates.moreContainer);
            $navbar.append($moreContainer);
          }

          $moreContainer.addClass('hidden');

          if (!options.collapseSmallscreen || screenConfig.name != 'xs') {
            var isWrapped = function () {
              return _.some(_.union($nav.find('> li').get(), $moreContainer.get()), function (el) {
                return $(el).is(':visible') && $(el).position().top > 0;
              });
            };

            if (isWrapped()) {
              $moreContainer.removeClass('hidden');

              do {
                // Remove the last element and prepend it to the more container
                $moreContainer.find('> .dropdown > .dropdown-menu').prepend($nav.find('> li:not(.nav-breadcrumb)').last().css('height', ''));
              } while (isWrapped() & $nav.find('> li:not(.nav-breadcrumb)').length > 0);

              // enable highlighting of menu icon if it contains an active link
              var $moreMenu = $moreContainer.find('> .dropdown');
              $moreMenu.toggleClass('active', $moreMenu.find('li.active').length > 0);
            }
          }
        });
      },

      updateWrappedState: function updateWrappedState() {
        this.$container.find('.navbar').each(function () {
          var $navbar = $(this);
          var wasWrapped = $navbar.hasClass('navbar-wrapped');

          var $item = $navbar.find('> .nav > li:last');
          var isWrapped = $item.length && $item.position().top > 0;

          if (isWrapped != wasWrapped) {
            $navbar.addClass('important-no-transition');
            $navbar.toggleClass('navbar-wrapped', isWrapped);

            _.defer(function () {
              $navbar.removeClass('important-no-transition');
            });
          }
        });
      },

      updateDropdownBehaviour: function updateDropdownBehaviour(screenConfig) {
        this.$container.find('.navbar').each(function () {
          var $navbar = $(this);

          if (screenConfig.name == 'xs') {
            // Require a click (tap) to open dropdowns
            $navbar.find('.dropdown-toggle')
              .attr('data-toggle', 'dropdown')
              .attr('role', 'button')
              .attr('aria-expanded', false);
          } else {
            // Allow hovering to open dropdowns
            $navbar.find('.dropdown-toggle')
              .removeAttr('data-toggle')
              .removeAttr('role')
              .removeAttr('aria-expanded')
              .parent().removeClass('open');
          }
        });
      },

      // Return the total height of affixed elements (whether affixed or not)
      getAffixedHeight: function getAffixedHeight() {
        var height = 0;
        if (this.options.fixedHeader) height += $('.id7-header-text h1').outerHeight();
        if (this.options.fixedNav) height += this.$container.outerHeight();
        return height;
      },

      // Called when a page is loaded with a hash, or a hash changes (e.g. an inline
      // bookmark is clicked). Scrolls up by the height of the affixed area.
      hashChanged: function hashChanged() {
        var scrollY = this.getAffixedHeight();
        setTimeout(function () {
          window.scrollBy(0, -scrollY);
        }, 1);
      },

      markHeaderFixedPosition: function markHeaderFixedPosition() {
        $('.id7-header-text').css('height', '');

        var $h1 = $('.id7-header-text h1');
        var isAlreadyAffixed = $h1.hasClass('affix');

        if (isAlreadyAffixed) $h1.removeClass('affix');

        $('.id7-header-text').height($('.id7-header-text').height());

        if (isAlreadyAffixed) $h1.addClass('affix');
      },

      markFixedPosition: function markFixedPosition() {
        var $marker = this.$container.next('.id7-navigation-marker');

        if ($marker.length === 0) {
          $marker = $(Config.Templates.marker);
          this.$container.after($marker);
        }

        $marker.height(this.$container.height());
      },

      wireEventHandlers: function wireEventHandlers() {
        if (document.readyState == 'complete') {
          if (this.options.fixedNav) this.affixNav();
          if (this.options.fixedHeader) this.affixHeader();
          this.updateWrappedState();
        } else {
          $(window).on('load', $.proxy(function () {
            if (this.options.fixedNav) this.affixNav();
            if (this.options.fixedHeader) this.affixHeader();
            this.updateWrappedState();
          }, this));
        }

        $(window).on('id7:reflow', $.proxy(function (e, screenConfig) {
          if (this.options.fitToWidth) this.fitToWidth(screenConfig);
          if (this.options.fixedHeader) this.markHeaderFixedPosition();
          if (this.options.fixedNav) this.markFixedPosition();
          this.updateWrappedState();
          this.updateDropdownBehaviour(screenConfig);
        }, this));

        this.$container.on('click', '.nav > li', function (e) {
          var $targetLink = $(e.target).closest('a');
          if ($targetLink.length > 0) {
            return; // Let the default handler take it
          }

          $targetLink = $(this).find('a').first();
          if ($targetLink.length > 0) {
            e.stopPropagation();
            e.preventDefault();

            $targetLink[0].click();

            return false;
          }
        });

        // Handle in-page bookmarks.
        if (location.hash) this.hashChanged();
        $(window).on('hashchange', $.proxy(this.hashChanged, this));
      }
    });

    return Navigation;
  })();

  $.fn.id7Navigation = function (o) {
    o = o || {};

    function attach(i, element) {
      var $container = $(element);
      var nav = new Navigation($.extend({}, $container.data(), o, {
        container: $container
      }));

      $container.data('id7.navigation', nav);
    }

    return this.each(attach);
  };

  $(function () {
    $('.id7-navigation').id7Navigation();
  });
})(jQuery);

/*global _:false, Modernizr:false */

(function ($) {
  'use strict';

  /**
   * Use Twitter typeahead to provide Go.Warwick suggestions on an <input>
   *
   * @see https://twitter.github.io/typeahead.js/
   */
  var SearchSuggest = (function () {
    function SearchSuggest(o) {
      o = o || {};
      var $input = o.input;
      $input.typeahead({
        minLength: o.minLength,
        hint: o.hint
      }, {
        name: o.name,
        source: o.source,
        display: o.display,
        templates: o.templates,
        async: true,
        limit: 1000
      }).on('keydown', function ($e) {
        var keyCode = $e.which || $e.keyCode;
        switch (keyCode) {
          case 38: // up
          case 40: // down
            // Only if no modifier
            if (!($e.altKey || $e.ctrlKey || $e.metaKey || $e.shiftKey)) {
              $e.stopPropagation();
            }
        }
      });
    }

    return SearchSuggest;
  })();

  $.fn.searchSuggest = function (o) {
    o = o || {};

    function attach(i, element) {
      var $input = $(element);
      var searchSuggest = new SearchSuggest($.extend({}, $input.data(), o, {
        input: $input
      }));

      $input.data('id7.search-suggest', searchSuggest);
    }

    return this.each(attach);
  };

  $(function () {
    $('input[data-suggest="go"]').each(function (i, el) {
      // ID-156 find the icon next to it
      $(el).next('.fa').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        $(el).closest('form').submit();
      });

      // ID-89 On xs, set the min length to 3, not 2, and only show 3 results
      var minLength = 3;
      var maxResults = 3;

      if (Modernizr.mq('only all and (min-width: 768px)')) {
        minLength = 2;
        maxResults = 6;
      }

      $(el).searchSuggest({
        name: 'go',
        source: function (query, sync, async) {
          $.getJSON('//sitebuilder.warwick.ac.uk/sitebuilder2/api/go/redirects.json?maxResults=' + maxResults + '&prefix=' + encodeURIComponent(query) + '&callback=?', async);
        },
        display: 'path',
        minLength: minLength,
        hint: false,
        templates: {
          suggestion: _.template([
              '<div>',
              '<p class="go-path"><%= path %></p>',
              '<p class="go-description"><% if (typeof description !== "undefined") { print(description); } %></p>',
              '</div>'
            ].join(''))
        }
      });

      var tt = $(el).data('ttTypeahead');
      tt.input.onSync('queryChanged', function (evtName, query) {
        $(el).data('original-query', query);
      });

      $(el).on('typeahead:select', function (evt, redirect) {
        window.location =
          'http://go.warwick.ac.uk/' + redirect.path +
          '?goSearchReferer=' + encodeURIComponent(window.location) +
          '&goSearchQuery=' + encodeURIComponent($(this).data('original-query'));
      });

      // ID-145
      if ($(el).width() < 88) {
        $(el).attr('placeholder', 'Search');
      }
    });
  });

})(jQuery);

/*global Modernizr:false */

(function ($) {
  'use strict';

  var Config = {
    Templates: {
      PopoutLink: [
        '<span class="id7-table-wrapper-popout">',
        '(',
        '<a href="#" data-toggle="id7:popout-table">',
        'Pop-out table',
        '</a>',
        ')',
        '</span>'
      ].join(''),
      Modal: [
        '<div class="id7-wide-table-popout-modal modal fade" tabindex="-1" role="dialog" aria-hidden="true">',
          '<div class="modal-dialog">',
            '<div class="modal-content">',
              '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                  '<span aria-hidden="true">&times;</span>' +
                '</button>' +
                '<span class="modal-title">&nbsp;</span>' +
              '</div>' +
              '<div class="modal-body">' +
              '</div>',
            '</div>',
          '</div>',
        '</div>'
      ].join('')
    },
    Defaults: {
      container: 'id7-wide-table-wrapper-container',
      wrapper: 'table-responsive', // Set to false to disable
      popout: function () {
        return Modernizr.mq('only all and (min-width: 768px)');
      },
      doublescroll: true
    }
  };

  /**
   * Wrap wide tables in a class to allow them to be scrolled without breaking
   * the container, and optionally add in a popout link.
   */
  var WideTables = (function () {
    function WideTables(o) {
      o = $.extend({}, Config.Defaults, o);

      var self = this;

      function handleTable(i, el) {
        var $table = $(el);

        // Allow the table's data attributes to override options
        var options = $.extend({}, o, $table.data());

        // Allow wrapper: true to use the default
        if (options.wrapper && typeof options.wrapper !== 'string') {
          options.wrapper = Config.Defaults.wrapper;
        }

        if (options.container && typeof options.container !== 'string') {
          options.container = Config.Defaults.container;
        }

        if (options.wrapper) {
          self.wrap($table, options.wrapper, options.container);

          var $wrapper = $table.parent();
          var $container = $wrapper.parent();

          var popout = options.popout;
          var doublescroll = options.doublescroll;

          if (typeof options.popout == 'function') popout = options.popout();
          if (typeof options.doublescroll == 'function') popout = options.doublescroll();

          if (popout) self.popout($table, $wrapper, $container);
          if (doublescroll) self.doubleScroll($table, $wrapper);
        }
      }

      self.findWideTables(o.container).each(handleTable);
    }

    $.extend(WideTables.prototype, {
      findWideTables: function findWideTables($container) {
        return $container.find('table').filter(function () {
          var $table = $(this);
          return !$table.data('id7.wide-tables.wrapped') && Math.floor($table.width()) > $table.parent().width();
        });
      },
      wrap: function wrap($table, wrapperClass, containerClass) {
        $table.wrap($('<div />').addClass(containerClass).append($('<div />').addClass(wrapperClass))).data('id7.wide-tables.wrapped', true);

        return $table.parent();
      },
      popout: function popout($table, $wrapper, $container) {
        // sb-no-wrapper-table-popout is legacy
        if ($table.is(':visible') && !$table.hasClass('sb-no-wrapper-table-popout')) {
          $container.prepend(Config.Templates.PopoutLink).append(Config.Templates.PopoutLink);

          var $modal = $($.parseHTML(Config.Templates.Modal)).appendTo(document.body);

          $container.on('click', '[data-toggle="id7:popout-table"]', function (e) {
            e.stopPropagation();
            e.preventDefault();

            $modal.find('.modal-body').html($wrapper.html());
            $modal.modal().modal('show');

            return false;
          });
        }

        return $table; // Nothing to do, for now
      },
      doubleScroll: function doubleScroll($table, $wrapper) {
        $wrapper.doubleScroll();
        return $table;
      }
    });

    return WideTables;
  })();

  $.fn.wideTables = function (o) {
    o = o || {};

    function attach(i, element) {
      var $container = $(element);
      var wideTables = new WideTables($.extend({}, $container.data(), o, {
        container: $container
      }));

      $container.data('id7.wide-tables', wideTables);
    }

    return this.each(attach);
  };

  // SBTWO-5105 check tables after load, in case contents cause resize
  $(window).on('load id7:ready', function () {
    $('.id7-main-content').wideTables();
  });

  $(function () {
    $(window).trigger('id7:ready');
  });
})(jQuery);

/*global Modernizr:false */

(function () {
  'use strict';
  // querySelector
  Modernizr.addTest('not-selector', function () {
    var doc = window.document;
    if (!('querySelectorAll' in doc)) {
      return false;
    }

    try {
      doc.querySelectorAll(':not(html)');
      return true;
    } catch (e) {
      return false;
    }
  });
})();

/*global Modernizr:false */

// ID-199
//
// :'(

(function () {
  'use strict';

  Modernizr.addTest('safari', function () {
    var ua = window.navigator.userAgent;

    return ua.indexOf('Safari/') >= 0 && ua.indexOf('Chrome/') == -1;
  });
})();


/*global Modernizr:false */

(function () {
  'use strict';
  // querySelector
  Modernizr.addTest('style-update', function () {
    var doc = window.document;
    if (!('createElement' in doc && 'createTextNode' in doc)) {
      return false;
    }

    try {
      var el = doc.createElement('style');
      el.setAttribute('type', 'text/css');

      var contents = doc.createTextNode('modernizr { property: slime; }');
      el.appendChild(contents);

      return true;
    } catch (e) {
      return false;
    }
  });
})();

/*global Modernizr:false */

(function () {
  'use strict';
  // Should fail in Safari: http://stackoverflow.com/questions/9739955/feature-detecting-support-for-svg-filters.
  Modernizr.addTest('svgfilters', function () {
    var result = false;

    try {
      result = 'SVGFEColorMatrixElement' in window &&
                SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE == 2;
    } catch (e) {}

    return result;
  });
})();

/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see http://creativecommons.org/licenses/by/3.0/.
 */

// See the Getting Started docs for more information:
// http://getbootstrap.com/getting-started/#support-ie10-width

(function () {
  'use strict';
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style');
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    );
    document.querySelector('head').appendChild(msViewportStyle);
  }
})();
