/*
 * jQuery JavaScript Library v1.7.2
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Wed Mar 21 12:46:34 2012 -0700
 */
(function(bm,S){var aD=bm.document,bD=bm.navigator,bv=bm.location;
var b=(function(){var bP=function(ca,cb){return new bP.fn.init(ca,cb,bN)
},b4=bm.jQuery,bR=bm.$,bN,b8=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,bW=/\S/,bS=/^\s+/,bO=/\s+$/,bK=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,bX=/^[\],:{}\s]*$/,b6=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,bZ=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,bT=/(?:^|:|,)(?:\s*\[)+/g,bI=/(webkit)[ \/]([\w.]+)/,b1=/(opera)(?:.*version)?[ \/]([\w.]+)/,b0=/(msie) ([\w.]+)/,b2=/(mozilla)(?:.*? rv:([\w.]+))?/,bL=/-([a-z]|[0-9])/ig,b9=/^-ms-/,b3=function(ca,cb){return(cb+"").toUpperCase()
},b7=bD.userAgent,b5,bM,bE,bV=Object.prototype.toString,bQ=Object.prototype.hasOwnProperty,bJ=Array.prototype.push,bU=Array.prototype.slice,bY=String.prototype.trim,bF=Array.prototype.indexOf,bH={};
bP.fn=bP.prototype={constructor:bP,init:function(ca,ce,cd){var cc,cf,cb,cg;
if(!ca){return this
}if(ca.nodeType){this.context=this[0]=ca;
this.length=1;
return this
}if(ca==="body"&&!ce&&aD.body){this.context=aD;
this[0]=aD.body;
this.selector=ca;
this.length=1;
return this
}if(typeof ca==="string"){if(ca.charAt(0)==="<"&&ca.charAt(ca.length-1)===">"&&ca.length>=3){cc=[null,ca,null]
}else{cc=b8.exec(ca)
}if(cc&&(cc[1]||!ce)){if(cc[1]){ce=ce instanceof bP?ce[0]:ce;
cg=(ce?ce.ownerDocument||ce:aD);
cb=bK.exec(ca);
if(cb){if(bP.isPlainObject(ce)){ca=[aD.createElement(cb[1])];
bP.fn.attr.call(ca,ce,true)
}else{ca=[cg.createElement(cb[1])]
}}else{cb=bP.buildFragment([cc[1]],[cg]);
ca=(cb.cacheable?bP.clone(cb.fragment):cb.fragment).childNodes
}return bP.merge(this,ca)
}else{cf=aD.getElementById(cc[2]);
if(cf&&cf.parentNode){if(cf.id!==cc[2]){return cd.find(ca)
}this.length=1;
this[0]=cf
}this.context=aD;
this.selector=ca;
return this
}}else{if(!ce||ce.jquery){return(ce||cd).find(ca)
}else{return this.constructor(ce).find(ca)
}}}else{if(bP.isFunction(ca)){return cd.ready(ca)
}}if(ca.selector!==S){this.selector=ca.selector;
this.context=ca.context
}return bP.makeArray(ca,this)
},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length
},toArray:function(){return bU.call(this,0)
},get:function(ca){return ca==null?this.toArray():(ca<0?this[this.length+ca]:this[ca])
},pushStack:function(cb,cd,ca){var cc=this.constructor();
if(bP.isArray(cb)){bJ.apply(cc,cb)
}else{bP.merge(cc,cb)
}cc.prevObject=this;
cc.context=this.context;
if(cd==="find"){cc.selector=this.selector+(this.selector?" ":"")+ca
}else{if(cd){cc.selector=this.selector+"."+cd+"("+ca+")"
}}return cc
},each:function(cb,ca){return bP.each(this,cb,ca)
},ready:function(ca){bP.bindReady();
bM.add(ca);
return this
},eq:function(ca){ca=+ca;
return ca===-1?this.slice(ca):this.slice(ca,ca+1)
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},slice:function(){return this.pushStack(bU.apply(this,arguments),"slice",bU.call(arguments).join(","))
},map:function(ca){return this.pushStack(bP.map(this,function(cc,cb){return ca.call(cc,cb,cc)
}))
},end:function(){return this.prevObject||this.constructor(null)
},push:bJ,sort:[].sort,splice:[].splice};
bP.fn.init.prototype=bP.fn;
bP.extend=bP.fn.extend=function(){var cj,cc,ca,cb,cg,ch,cf=arguments[0]||{},ce=1,cd=arguments.length,ci=false;
if(typeof cf==="boolean"){ci=cf;
cf=arguments[1]||{};
ce=2
}if(typeof cf!=="object"&&!bP.isFunction(cf)){cf={}
}if(cd===ce){cf=this;
--ce
}for(;
ce<cd;
ce++){if((cj=arguments[ce])!=null){for(cc in cj){ca=cf[cc];
cb=cj[cc];
if(cf===cb){continue
}if(ci&&cb&&(bP.isPlainObject(cb)||(cg=bP.isArray(cb)))){if(cg){cg=false;
ch=ca&&bP.isArray(ca)?ca:[]
}else{ch=ca&&bP.isPlainObject(ca)?ca:{}
}cf[cc]=bP.extend(ci,ch,cb)
}else{if(cb!==S){cf[cc]=cb
}}}}}return cf
};
bP.extend({noConflict:function(ca){if(bm.$===bP){bm.$=bR
}if(ca&&bm.jQuery===bP){bm.jQuery=b4
}return bP
},isReady:false,readyWait:1,holdReady:function(ca){if(ca){bP.readyWait++
}else{bP.ready(true)
}},ready:function(ca){if((ca===true&&!--bP.readyWait)||(ca!==true&&!bP.isReady)){if(!aD.body){return setTimeout(bP.ready,1)
}bP.isReady=true;
if(ca!==true&&--bP.readyWait>0){return
}bM.fireWith(aD,[bP]);
if(bP.fn.trigger){bP(aD).trigger("ready").off("ready")
}}},bindReady:function(){if(bM){return
}bM=bP.Callbacks("once memory");
if(aD.readyState==="complete"){return setTimeout(bP.ready,1)
}if(aD.addEventListener){aD.addEventListener("DOMContentLoaded",bE,false);
bm.addEventListener("load",bP.ready,false)
}else{if(aD.attachEvent){aD.attachEvent("onreadystatechange",bE);
bm.attachEvent("onload",bP.ready);
var ca=false;
try{ca=bm.frameElement==null
}catch(cb){}if(aD.documentElement.doScroll&&ca){bG()
}}}},isFunction:function(ca){return bP.type(ca)==="function"
},isArray:Array.isArray||function(ca){return bP.type(ca)==="array"
},isWindow:function(ca){return ca!=null&&ca==ca.window
},isNumeric:function(ca){return !isNaN(parseFloat(ca))&&isFinite(ca)
},type:function(ca){return ca==null?String(ca):bH[bV.call(ca)]||"object"
},isPlainObject:function(cc){if(!cc||bP.type(cc)!=="object"||cc.nodeType||bP.isWindow(cc)){return false
}try{if(cc.constructor&&!bQ.call(cc,"constructor")&&!bQ.call(cc.constructor.prototype,"isPrototypeOf")){return false
}}catch(cb){return false
}var ca;
for(ca in cc){}return ca===S||bQ.call(cc,ca)
},isEmptyObject:function(cb){for(var ca in cb){return false
}return true
},error:function(ca){throw new Error(ca)
},parseJSON:function(ca){if(typeof ca!=="string"||!ca){return null
}ca=bP.trim(ca);
if(bm.JSON&&bm.JSON.parse){return bm.JSON.parse(ca)
}if(bX.test(ca.replace(b6,"@").replace(bZ,"]").replace(bT,""))){return(new Function("return "+ca))()
}bP.error("Invalid JSON: "+ca)
},parseXML:function(cc){if(typeof cc!=="string"||!cc){return null
}var ca,cb;
try{if(bm.DOMParser){cb=new DOMParser();
ca=cb.parseFromString(cc,"text/xml")
}else{ca=new ActiveXObject("Microsoft.XMLDOM");
ca.async="false";
ca.loadXML(cc)
}}catch(cd){ca=S
}if(!ca||!ca.documentElement||ca.getElementsByTagName("parsererror").length){bP.error("Invalid XML: "+cc)
}return ca
},noop:function(){},globalEval:function(ca){if(ca&&bW.test(ca)){(bm.execScript||function(cb){bm["eval"].call(bm,cb)
})(ca)
}},camelCase:function(ca){return ca.replace(b9,"ms-").replace(bL,b3)
},nodeName:function(cb,ca){return cb.nodeName&&cb.nodeName.toUpperCase()===ca.toUpperCase()
},each:function(cd,cg,cc){var cb,ce=0,cf=cd.length,ca=cf===S||bP.isFunction(cd);
if(cc){if(ca){for(cb in cd){if(cg.apply(cd[cb],cc)===false){break
}}}else{for(;
ce<cf;
){if(cg.apply(cd[ce++],cc)===false){break
}}}}else{if(ca){for(cb in cd){if(cg.call(cd[cb],cb,cd[cb])===false){break
}}}else{for(;
ce<cf;
){if(cg.call(cd[ce],ce,cd[ce++])===false){break
}}}}return cd
},trim:bY?function(ca){return ca==null?"":bY.call(ca)
}:function(ca){return ca==null?"":ca.toString().replace(bS,"").replace(bO,"")
},makeArray:function(cd,cb){var ca=cb||[];
if(cd!=null){var cc=bP.type(cd);
if(cd.length==null||cc==="string"||cc==="function"||cc==="regexp"||bP.isWindow(cd)){bJ.call(ca,cd)
}else{bP.merge(ca,cd)
}}return ca
},inArray:function(cc,cd,cb){var ca;
if(cd){if(bF){return bF.call(cd,cc,cb)
}ca=cd.length;
cb=cb?cb<0?Math.max(0,ca+cb):cb:0;
for(;
cb<ca;
cb++){if(cb in cd&&cd[cb]===cc){return cb
}}}return -1
},merge:function(ce,cc){var cd=ce.length,cb=0;
if(typeof cc.length==="number"){for(var ca=cc.length;
cb<ca;
cb++){ce[cd++]=cc[cb]
}}else{while(cc[cb]!==S){ce[cd++]=cc[cb++]
}}ce.length=cd;
return ce
},grep:function(cb,cg,ca){var cc=[],cf;
ca=!!ca;
for(var cd=0,ce=cb.length;
cd<ce;
cd++){cf=!!cg(cb[cd],cd);
if(ca!==cf){cc.push(cb[cd])
}}return cc
},map:function(ca,ch,ci){var cf,cg,ce=[],cc=0,cb=ca.length,cd=ca instanceof bP||cb!==S&&typeof cb==="number"&&((cb>0&&ca[0]&&ca[cb-1])||cb===0||bP.isArray(ca));
if(cd){for(;
cc<cb;
cc++){cf=ch(ca[cc],cc,ci);
if(cf!=null){ce[ce.length]=cf
}}}else{for(cg in ca){cf=ch(ca[cg],cg,ci);
if(cf!=null){ce[ce.length]=cf
}}}return ce.concat.apply([],ce)
},guid:1,proxy:function(ce,cd){if(typeof cd==="string"){var cc=ce[cd];
cd=ce;
ce=cc
}if(!bP.isFunction(ce)){return S
}var ca=bU.call(arguments,2),cb=function(){return ce.apply(cd,ca.concat(bU.call(arguments)))
};
cb.guid=ce.guid=ce.guid||cb.guid||bP.guid++;
return cb
},access:function(ca,cg,cj,ch,ce,ck,ci){var cc,cf=cj==null,cd=0,cb=ca.length;
if(cj&&typeof cj==="object"){for(cd in cj){bP.access(ca,cg,cd,cj[cd],1,ck,ch)
}ce=1
}else{if(ch!==S){cc=ci===S&&bP.isFunction(ch);
if(cf){if(cc){cc=cg;
cg=function(cm,cl,cn){return cc.call(bP(cm),cn)
}
}else{cg.call(ca,ch);
cg=null
}}if(cg){for(;
cd<cb;
cd++){cg(ca[cd],cj,cc?ch.call(ca[cd],cd,cg(ca[cd],cj)):ch,ci)
}}ce=1
}}return ce?ca:cf?cg.call(ca):cb?cg(ca[0],cj):ck
},now:function(){return(new Date()).getTime()
},uaMatch:function(cb){cb=cb.toLowerCase();
var ca=bI.exec(cb)||b1.exec(cb)||b0.exec(cb)||cb.indexOf("compatible")<0&&b2.exec(cb)||[];
return{browser:ca[1]||"",version:ca[2]||"0"}
},sub:function(){function ca(cd,ce){return new ca.fn.init(cd,ce)
}bP.extend(true,ca,this);
ca.superclass=this;
ca.fn=ca.prototype=this();
ca.fn.constructor=ca;
ca.sub=this.sub;
ca.fn.init=function cc(cd,ce){if(ce&&ce instanceof bP&&!(ce instanceof ca)){ce=ca(ce)
}return bP.fn.init.call(this,cd,ce,cb)
};
ca.fn.init.prototype=ca.fn;
var cb=ca(aD);
return ca
},browser:{}});
bP.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(cb,ca){bH["[object "+ca+"]"]=ca.toLowerCase()
});
b5=bP.uaMatch(b7);
if(b5.browser){bP.browser[b5.browser]=true;
bP.browser.version=b5.version
}if(bP.browser.webkit){bP.browser.safari=true
}if(bW.test("\xA0")){bS=/^[\s\xA0]+/;
bO=/[\s\xA0]+$/
}bN=bP(aD);
if(aD.addEventListener){bE=function(){aD.removeEventListener("DOMContentLoaded",bE,false);
bP.ready()
}
}else{if(aD.attachEvent){bE=function(){if(aD.readyState==="complete"){aD.detachEvent("onreadystatechange",bE);
bP.ready()
}}
}}function bG(){if(bP.isReady){return
}try{aD.documentElement.doScroll("left")
}catch(ca){setTimeout(bG,1);
return
}bP.ready()
}return bP
})();
var bc={};
function af(bE){var bF=bc[bE]={},bG,bH;
bE=bE.split(/\s+/);
for(bG=0,bH=bE.length;
bG<bH;
bG++){bF[bE[bG]]=true
}return bF
}b.Callbacks=function(bH){bH=bH?(bc[bH]||af(bH)):{};
var bM=[],bN=[],bI,bE,bJ,bG,bK,bL,bP=function(bQ){var bR,bU,bT,bS,bV;
for(bR=0,bU=bQ.length;
bR<bU;
bR++){bT=bQ[bR];
bS=b.type(bT);
if(bS==="array"){bP(bT)
}else{if(bS==="function"){if(!bH.unique||!bO.has(bT)){bM.push(bT)
}}}}},bF=function(bR,bQ){bQ=bQ||[];
bI=!bH.memory||[bR,bQ];
bE=true;
bJ=true;
bL=bG||0;
bG=0;
bK=bM.length;
for(;
bM&&bL<bK;
bL++){if(bM[bL].apply(bR,bQ)===false&&bH.stopOnFalse){bI=true;
break
}}bJ=false;
if(bM){if(!bH.once){if(bN&&bN.length){bI=bN.shift();
bO.fireWith(bI[0],bI[1])
}}else{if(bI===true){bO.disable()
}else{bM=[]
}}}},bO={add:function(){if(bM){var bQ=bM.length;
bP(arguments);
if(bJ){bK=bM.length
}else{if(bI&&bI!==true){bG=bQ;
bF(bI[0],bI[1])
}}}return this
},remove:function(){if(bM){var bQ=arguments,bS=0,bT=bQ.length;
for(;
bS<bT;
bS++){for(var bR=0;
bR<bM.length;
bR++){if(bQ[bS]===bM[bR]){if(bJ){if(bR<=bK){bK--;
if(bR<=bL){bL--
}}}bM.splice(bR--,1);
if(bH.unique){break
}}}}}return this
},has:function(bR){if(bM){var bQ=0,bS=bM.length;
for(;
bQ<bS;
bQ++){if(bR===bM[bQ]){return true
}}}return false
},empty:function(){bM=[];
return this
},disable:function(){bM=bN=bI=S;
return this
},disabled:function(){return !bM
},lock:function(){bN=S;
if(!bI||bI===true){bO.disable()
}return this
},locked:function(){return !bN
},fireWith:function(bR,bQ){if(bN){if(bJ){if(!bH.once){bN.push([bR,bQ])
}}else{if(!(bH.once&&bI)){bF(bR,bQ)
}}}return this
},fire:function(){bO.fireWith(this,arguments);
return this
},fired:function(){return !!bE
}};
return bO
};
var aS=[].slice;
b.extend({Deferred:function(bI){var bH=b.Callbacks("once memory"),bG=b.Callbacks("once memory"),bF=b.Callbacks("memory"),bE="pending",bK={resolve:bH,reject:bG,notify:bF},bM={done:bH.add,fail:bG.add,progress:bF.add,state:function(){return bE
},isResolved:bH.fired,isRejected:bG.fired,then:function(bO,bN,bP){bL.done(bO).fail(bN).progress(bP);
return this
},always:function(){bL.done.apply(bL,arguments).fail.apply(bL,arguments);
return this
},pipe:function(bP,bO,bN){return b.Deferred(function(bQ){b.each({done:[bP,"resolve"],fail:[bO,"reject"],progress:[bN,"notify"]},function(bS,bV){var bR=bV[0],bU=bV[1],bT;
if(b.isFunction(bR)){bL[bS](function(){bT=bR.apply(this,arguments);
if(bT&&b.isFunction(bT.promise)){bT.promise().then(bQ.resolve,bQ.reject,bQ.notify)
}else{bQ[bU+"With"](this===bL?bQ:this,[bT])
}})
}else{bL[bS](bQ[bU])
}})
}).promise()
},promise:function(bO){if(bO==null){bO=bM
}else{for(var bN in bM){bO[bN]=bM[bN]
}}return bO
}},bL=bM.promise({}),bJ;
for(bJ in bK){bL[bJ]=bK[bJ].fire;
bL[bJ+"With"]=bK[bJ].fireWith
}bL.done(function(){bE="resolved"
},bG.disable,bF.lock).fail(function(){bE="rejected"
},bH.disable,bF.lock);
if(bI){bI.call(bL,bL)
}return bL
},when:function(bK){var bH=aS.call(arguments,0),bF=0,bE=bH.length,bL=new Array(bE),bG=bE,bI=bE,bM=bE<=1&&bK&&b.isFunction(bK.promise)?bK:b.Deferred(),bO=bM.promise();
function bN(bP){return function(bQ){bH[bP]=arguments.length>1?aS.call(arguments,0):bQ;
if(!(--bG)){bM.resolveWith(bM,bH)
}}
}function bJ(bP){return function(bQ){bL[bP]=arguments.length>1?aS.call(arguments,0):bQ;
bM.notifyWith(bO,bL)
}
}if(bE>1){for(;
bF<bE;
bF++){if(bH[bF]&&bH[bF].promise&&b.isFunction(bH[bF].promise)){bH[bF].promise().then(bN(bF),bM.reject,bJ(bF))
}else{--bG
}}if(!bG){bM.resolveWith(bM,bH)
}}else{if(bM!==bK){bM.resolveWith(bM,bE?[bK]:[])
}}return bO
}});
b.support=(function(){var bR,bQ,bN,bO,bG,bM,bL,bI,bS,bJ,bH,bF,bE=aD.createElement("div"),bP=aD.documentElement;
bE.setAttribute("className","t");
bE.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
bQ=bE.getElementsByTagName("*");
bN=bE.getElementsByTagName("a")[0];
if(!bQ||!bQ.length||!bN){return{}
}bO=aD.createElement("select");
bG=bO.appendChild(aD.createElement("option"));
bM=bE.getElementsByTagName("input")[0];
bR={leadingWhitespace:(bE.firstChild.nodeType===3),tbody:!bE.getElementsByTagName("tbody").length,htmlSerialize:!!bE.getElementsByTagName("link").length,style:/top/.test(bN.getAttribute("style")),hrefNormalized:(bN.getAttribute("href")==="/a"),opacity:/^0.55/.test(bN.style.opacity),cssFloat:!!bN.style.cssFloat,checkOn:(bM.value==="on"),optSelected:bG.selected,getSetAttribute:bE.className!=="t",enctype:!!aD.createElement("form").enctype,html5Clone:aD.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",submitBubbles:true,changeBubbles:true,focusinBubbles:false,deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,pixelMargin:true};
b.boxModel=bR.boxModel=(aD.compatMode==="CSS1Compat");
bM.checked=true;
bR.noCloneChecked=bM.cloneNode(true).checked;
bO.disabled=true;
bR.optDisabled=!bG.disabled;
try{delete bE.test
}catch(bK){bR.deleteExpando=false
}if(!bE.addEventListener&&bE.attachEvent&&bE.fireEvent){bE.attachEvent("onclick",function(){bR.noCloneEvent=false
});
bE.cloneNode(true).fireEvent("onclick")
}bM=aD.createElement("input");
bM.value="t";
bM.setAttribute("type","radio");
bR.radioValue=bM.value==="t";
bM.setAttribute("checked","checked");
bM.setAttribute("name","t");
bE.appendChild(bM);
bL=aD.createDocumentFragment();
bL.appendChild(bE.lastChild);
bR.checkClone=bL.cloneNode(true).cloneNode(true).lastChild.checked;
bR.appendChecked=bM.checked;
bL.removeChild(bM);
bL.appendChild(bE);
if(bE.attachEvent){for(bH in {submit:1,change:1,focusin:1}){bJ="on"+bH;
bF=(bJ in bE);
if(!bF){bE.setAttribute(bJ,"return;");
bF=(typeof bE[bJ]==="function")
}bR[bH+"Bubbles"]=bF
}}bL.removeChild(bE);
bL=bO=bG=bE=bM=null;
b(function(){var bW,b5,b6,b4,bY,bZ,b1,bV,bU,b0,bX,bT,b3,b2=aD.getElementsByTagName("body")[0];
if(!b2){return
}bV=1;
b3="padding:0;margin:0;border:";
bX="position:absolute;top:0;left:0;width:1px;height:1px;";
bT=b3+"0;visibility:hidden;";
bU="style='"+bX+b3+"5px solid #000;";
b0="<div "+bU+"display:block;'><div style='"+b3+"0;display:block;overflow:hidden;'></div></div><table "+bU+"' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
bW=aD.createElement("div");
bW.style.cssText=bT+"width:0;height:0;position:static;top:0;margin-top:"+bV+"px";
b2.insertBefore(bW,b2.firstChild);
bE=aD.createElement("div");
bW.appendChild(bE);
bE.innerHTML="<table><tr><td style='"+b3+"0;display:none'></td><td>t</td></tr></table>";
bI=bE.getElementsByTagName("td");
bF=(bI[0].offsetHeight===0);
bI[0].style.display="";
bI[1].style.display="none";
bR.reliableHiddenOffsets=bF&&(bI[0].offsetHeight===0);
if(bm.getComputedStyle){bE.innerHTML="";
b1=aD.createElement("div");
b1.style.width="0";
b1.style.marginRight="0";
bE.style.width="2px";
bE.appendChild(b1);
bR.reliableMarginRight=(parseInt((bm.getComputedStyle(b1,null)||{marginRight:0}).marginRight,10)||0)===0
}if(typeof bE.style.zoom!=="undefined"){bE.innerHTML="";
bE.style.width=bE.style.padding="1px";
bE.style.border=0;
bE.style.overflow="hidden";
bE.style.display="inline";
bE.style.zoom=1;
bR.inlineBlockNeedsLayout=(bE.offsetWidth===3);
bE.style.display="block";
bE.style.overflow="visible";
bE.innerHTML="<div style='width:5px;'></div>";
bR.shrinkWrapBlocks=(bE.offsetWidth!==3)
}bE.style.cssText=bX+bT;
bE.innerHTML=b0;
b5=bE.firstChild;
b6=b5.firstChild;
bY=b5.nextSibling.firstChild.firstChild;
bZ={doesNotAddBorder:(b6.offsetTop!==5),doesAddBorderForTableAndCells:(bY.offsetTop===5)};
b6.style.position="fixed";
b6.style.top="20px";
bZ.fixedPosition=(b6.offsetTop===20||b6.offsetTop===15);
b6.style.position=b6.style.top="";
b5.style.overflow="hidden";
b5.style.position="relative";
bZ.subtractsBorderForOverflowNotVisible=(b6.offsetTop===-5);
bZ.doesNotIncludeMarginInBodyOffset=(b2.offsetTop!==bV);
if(bm.getComputedStyle){bE.style.marginTop="1%";
bR.pixelMargin=(bm.getComputedStyle(bE,null)||{marginTop:0}).marginTop!=="1%"
}if(typeof bW.style.zoom!=="undefined"){bW.style.zoom=1
}b2.removeChild(bW);
b1=bE=bW=null;
b.extend(bR,bZ)
});
return bR
})();
var a1=/^(?:\{.*\}|\[.*\])$/,aI=/([A-Z])/g;
b.extend({cache:{},uuid:0,expando:"jQuery"+(b.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(bE){bE=bE.nodeType?b.cache[bE[b.expando]]:bE[b.expando];
return !!bE&&!Z(bE)
},data:function(bH,bF,bJ,bI){if(!b.acceptData(bH)){return
}var bQ,bK,bN,bO=b.expando,bM=typeof bF==="string",bP=bH.nodeType,bE=bP?b.cache:bH,bG=bP?bH[bO]:bH[bO]&&bO,bL=bF==="events";
if((!bG||!bE[bG]||(!bL&&!bI&&!bE[bG].data))&&bM&&bJ===S){return
}if(!bG){if(bP){bH[bO]=bG=++b.uuid
}else{bG=bO
}}if(!bE[bG]){bE[bG]={};
if(!bP){bE[bG].toJSON=b.noop
}}if(typeof bF==="object"||typeof bF==="function"){if(bI){bE[bG]=b.extend(bE[bG],bF)
}else{bE[bG].data=b.extend(bE[bG].data,bF)
}}bQ=bK=bE[bG];
if(!bI){if(!bK.data){bK.data={}
}bK=bK.data
}if(bJ!==S){bK[b.camelCase(bF)]=bJ
}if(bL&&!bK[bF]){return bQ.events
}if(bM){bN=bK[bF];
if(bN==null){bN=bK[b.camelCase(bF)]
}}else{bN=bK
}return bN
},removeData:function(bH,bF,bI){if(!b.acceptData(bH)){return
}var bL,bK,bJ,bM=b.expando,bN=bH.nodeType,bE=bN?b.cache:bH,bG=bN?bH[bM]:bM;
if(!bE[bG]){return
}if(bF){bL=bI?bE[bG]:bE[bG].data;
if(bL){if(!b.isArray(bF)){if(bF in bL){bF=[bF]
}else{bF=b.camelCase(bF);
if(bF in bL){bF=[bF]
}else{bF=bF.split(" ")
}}}for(bK=0,bJ=bF.length;
bK<bJ;
bK++){delete bL[bF[bK]]
}if(!(bI?Z:b.isEmptyObject)(bL)){return
}}}if(!bI){delete bE[bG].data;
if(!Z(bE[bG])){return
}}if(b.support.deleteExpando||!bE.setInterval){delete bE[bG]
}else{bE[bG]=null
}if(bN){if(b.support.deleteExpando){delete bH[bM]
}else{if(bH.removeAttribute){bH.removeAttribute(bM)
}else{bH[bM]=null
}}}},_data:function(bF,bE,bG){return b.data(bF,bE,bG,true)
},acceptData:function(bF){if(bF.nodeName){var bE=b.noData[bF.nodeName.toLowerCase()];
if(bE){return !(bE===true||bF.getAttribute("classid")!==bE)
}}return true
}});
b.fn.extend({data:function(bN,bM){var bI,bF,bL,bE,bH,bG=this[0],bK=0,bJ=null;
if(bN===S){if(this.length){bJ=b.data(bG);
if(bG.nodeType===1&&!b._data(bG,"parsedAttrs")){bL=bG.attributes;
for(bH=bL.length;
bK<bH;
bK++){bE=bL[bK].name;
if(bE.indexOf("data-")===0){bE=b.camelCase(bE.substring(5));
bf(bG,bE,bJ[bE])
}}b._data(bG,"parsedAttrs",true)
}}return bJ
}if(typeof bN==="object"){return this.each(function(){b.data(this,bN)
})
}bI=bN.split(".",2);
bI[1]=bI[1]?"."+bI[1]:"";
bF=bI[1]+"!";
return b.access(this,function(bO){if(bO===S){bJ=this.triggerHandler("getData"+bF,[bI[0]]);
if(bJ===S&&bG){bJ=b.data(bG,bN);
bJ=bf(bG,bN,bJ)
}return bJ===S&&bI[1]?this.data(bI[0]):bJ
}bI[1]=bO;
this.each(function(){var bP=b(this);
bP.triggerHandler("setData"+bF,bI);
b.data(this,bN,bO);
bP.triggerHandler("changeData"+bF,bI)
})
},null,bM,arguments.length>1,null,false)
},removeData:function(bE){return this.each(function(){b.removeData(this,bE)
})
}});
function bf(bG,bF,bH){if(bH===S&&bG.nodeType===1){var bE="data-"+bF.replace(aI,"-$1").toLowerCase();
bH=bG.getAttribute(bE);
if(typeof bH==="string"){try{bH=bH==="true"?true:bH==="false"?false:bH==="null"?null:b.isNumeric(bH)?+bH:a1.test(bH)?b.parseJSON(bH):bH
}catch(bI){}b.data(bG,bF,bH)
}else{bH=S
}}return bH
}function Z(bF){for(var bE in bF){if(bE==="data"&&b.isEmptyObject(bF[bE])){continue
}if(bE!=="toJSON"){return false
}}return true
}function bs(bI,bH,bK){var bG=bH+"defer",bF=bH+"queue",bE=bH+"mark",bJ=b._data(bI,bG);
if(bJ&&(bK==="queue"||!b._data(bI,bF))&&(bK==="mark"||!b._data(bI,bE))){setTimeout(function(){if(!b._data(bI,bF)&&!b._data(bI,bE)){b.removeData(bI,bG,true);
bJ.fire()
}},0)
}}b.extend({_mark:function(bF,bE){if(bF){bE=(bE||"fx")+"mark";
b._data(bF,bE,(b._data(bF,bE)||0)+1)
}},_unmark:function(bI,bH,bF){if(bI!==true){bF=bH;
bH=bI;
bI=false
}if(bH){bF=bF||"fx";
var bE=bF+"mark",bG=bI?0:((b._data(bH,bE)||1)-1);
if(bG){b._data(bH,bE,bG)
}else{b.removeData(bH,bE,true);
bs(bH,bF,"mark")
}}},queue:function(bF,bE,bH){var bG;
if(bF){bE=(bE||"fx")+"queue";
bG=b._data(bF,bE);
if(bH){if(!bG||b.isArray(bH)){bG=b._data(bF,bE,b.makeArray(bH))
}else{bG.push(bH)
}}return bG||[]
}},dequeue:function(bI,bH){bH=bH||"fx";
var bF=b.queue(bI,bH),bG=bF.shift(),bE={};
if(bG==="inprogress"){bG=bF.shift()
}if(bG){if(bH==="fx"){bF.unshift("inprogress")
}b._data(bI,bH+".run",bE);
bG.call(bI,function(){b.dequeue(bI,bH)
},bE)
}if(!bF.length){b.removeData(bI,bH+"queue "+bH+".run",true);
bs(bI,bH,"queue")
}}});
b.fn.extend({queue:function(bE,bF){var bG=2;
if(typeof bE!=="string"){bF=bE;
bE="fx";
bG--
}if(arguments.length<bG){return b.queue(this[0],bE)
}return bF===S?this:this.each(function(){var bH=b.queue(this,bE,bF);
if(bE==="fx"&&bH[0]!=="inprogress"){b.dequeue(this,bE)
}})
},dequeue:function(bE){return this.each(function(){b.dequeue(this,bE)
})
},delay:function(bF,bE){bF=b.fx?b.fx.speeds[bF]||bF:bF;
bE=bE||"fx";
return this.queue(bE,function(bH,bG){var bI=setTimeout(bH,bF);
bG.stop=function(){clearTimeout(bI)
}
})
},clearQueue:function(bE){return this.queue(bE||"fx",[])
},promise:function(bN,bG){if(typeof bN!=="string"){bG=bN;
bN=S
}bN=bN||"fx";
var bE=b.Deferred(),bF=this,bI=bF.length,bL=1,bJ=bN+"defer",bK=bN+"queue",bM=bN+"mark",bH;
function bO(){if(!(--bL)){bE.resolveWith(bF,[bF])
}}while(bI--){if((bH=b.data(bF[bI],bJ,S,true)||(b.data(bF[bI],bK,S,true)||b.data(bF[bI],bM,S,true))&&b.data(bF[bI],bJ,b.Callbacks("once memory"),true))){bL++;
bH.add(bO)
}}bO();
return bE.promise(bG)
}});
var aY=/[\n\t\r]/g,ao=/\s+/,a3=/\r/g,h=/^(?:button|input)$/i,J=/^(?:button|input|object|select|textarea)$/i,p=/^a(?:rea)?$/i,ax=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,L=b.support.getSetAttribute,bo,a7,aO;
b.fn.extend({attr:function(bE,bF){return b.access(this,b.attr,bE,bF,arguments.length>1)
},removeAttr:function(bE){return this.each(function(){b.removeAttr(this,bE)
})
},prop:function(bE,bF){return b.access(this,b.prop,bE,bF,arguments.length>1)
},removeProp:function(bE){bE=b.propFix[bE]||bE;
return this.each(function(){try{this[bE]=S;
delete this[bE]
}catch(bF){}})
},addClass:function(bI){var bK,bG,bF,bH,bJ,bL,bE;
if(b.isFunction(bI)){return this.each(function(bM){b(this).addClass(bI.call(this,bM,this.className))
})
}if(bI&&typeof bI==="string"){bK=bI.split(ao);
for(bG=0,bF=this.length;
bG<bF;
bG++){bH=this[bG];
if(bH.nodeType===1){if(!bH.className&&bK.length===1){bH.className=bI
}else{bJ=" "+bH.className+" ";
for(bL=0,bE=bK.length;
bL<bE;
bL++){if(!~bJ.indexOf(" "+bK[bL]+" ")){bJ+=bK[bL]+" "
}}bH.className=b.trim(bJ)
}}}}return this
},removeClass:function(bJ){var bK,bG,bF,bI,bH,bL,bE;
if(b.isFunction(bJ)){return this.each(function(bM){b(this).removeClass(bJ.call(this,bM,this.className))
})
}if((bJ&&typeof bJ==="string")||bJ===S){bK=(bJ||"").split(ao);
for(bG=0,bF=this.length;
bG<bF;
bG++){bI=this[bG];
if(bI.nodeType===1&&bI.className){if(bJ){bH=(" "+bI.className+" ").replace(aY," ");
for(bL=0,bE=bK.length;
bL<bE;
bL++){bH=bH.replace(" "+bK[bL]+" "," ")
}bI.className=b.trim(bH)
}else{bI.className=""
}}}}return this
},toggleClass:function(bH,bF){var bG=typeof bH,bE=typeof bF==="boolean";
if(b.isFunction(bH)){return this.each(function(bI){b(this).toggleClass(bH.call(this,bI,this.className,bF),bF)
})
}return this.each(function(){if(bG==="string"){var bK,bJ=0,bI=b(this),bL=bF,bM=bH.split(ao);
while((bK=bM[bJ++])){bL=bE?bL:!bI.hasClass(bK);
bI[bL?"addClass":"removeClass"](bK)
}}else{if(bG==="undefined"||bG==="boolean"){if(this.className){b._data(this,"__className__",this.className)
}this.className=this.className||bH===false?"":b._data(this,"__className__")||""
}}})
},hasClass:function(bE){var bH=" "+bE+" ",bG=0,bF=this.length;
for(;
bG<bF;
bG++){if(this[bG].nodeType===1&&(" "+this[bG].className+" ").replace(aY," ").indexOf(bH)>-1){return true
}}return false
},val:function(bH){var bE,bF,bI,bG=this[0];
if(!arguments.length){if(bG){bE=b.valHooks[bG.type]||b.valHooks[bG.nodeName.toLowerCase()];
if(bE&&"get" in bE&&(bF=bE.get(bG,"value"))!==S){return bF
}bF=bG.value;
return typeof bF==="string"?bF.replace(a3,""):bF==null?"":bF
}return
}bI=b.isFunction(bH);
return this.each(function(bK){var bJ=b(this),bL;
if(this.nodeType!==1){return
}if(bI){bL=bH.call(this,bK,bJ.val())
}else{bL=bH
}if(bL==null){bL=""
}else{if(typeof bL==="number"){bL+=""
}else{if(b.isArray(bL)){bL=b.map(bL,function(bM){return bM==null?"":bM+""
})
}}}bE=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()];
if(!bE||!("set" in bE)||bE.set(this,bL,"value")===S){this.value=bL
}})
}});
b.extend({valHooks:{option:{get:function(bE){var bF=bE.attributes.value;
return !bF||bF.specified?bE.value:bE.text
}},select:{get:function(bE){var bK,bF,bJ,bH,bI=bE.selectedIndex,bL=[],bM=bE.options,bG=bE.type==="select-one";
if(bI<0){return null
}bF=bG?bI:0;
bJ=bG?bI+1:bM.length;
for(;
bF<bJ;
bF++){bH=bM[bF];
if(bH.selected&&(b.support.optDisabled?!bH.disabled:bH.getAttribute("disabled")===null)&&(!bH.parentNode.disabled||!b.nodeName(bH.parentNode,"optgroup"))){bK=b(bH).val();
if(bG){return bK
}bL.push(bK)
}}if(bG&&!bL.length&&bM.length){return b(bM[bI]).val()
}return bL
},set:function(bF,bG){var bE=b.makeArray(bG);
b(bF).find("option").each(function(){this.selected=b.inArray(b(this).val(),bE)>=0
});
if(!bE.length){bF.selectedIndex=-1
}return bE
}}},attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(bK,bH,bL,bJ){var bG,bE,bI,bF=bK.nodeType;
if(!bK||bF===3||bF===8||bF===2){return
}if(bJ&&bH in b.attrFn){return b(bK)[bH](bL)
}if(typeof bK.getAttribute==="undefined"){return b.prop(bK,bH,bL)
}bI=bF!==1||!b.isXMLDoc(bK);
if(bI){bH=bH.toLowerCase();
bE=b.attrHooks[bH]||(ax.test(bH)?a7:bo)
}if(bL!==S){if(bL===null){b.removeAttr(bK,bH);
return
}else{if(bE&&"set" in bE&&bI&&(bG=bE.set(bK,bL,bH))!==S){return bG
}else{bK.setAttribute(bH,""+bL);
return bL
}}}else{if(bE&&"get" in bE&&bI&&(bG=bE.get(bK,bH))!==null){return bG
}else{bG=bK.getAttribute(bH);
return bG===null?S:bG
}}},removeAttr:function(bI,bK){var bJ,bL,bG,bE,bF,bH=0;
if(bK&&bI.nodeType===1){bL=bK.toLowerCase().split(ao);
bE=bL.length;
for(;
bH<bE;
bH++){bG=bL[bH];
if(bG){bJ=b.propFix[bG]||bG;
bF=ax.test(bG);
if(!bF){b.attr(bI,bG,"")
}bI.removeAttribute(L?bG:bJ);
if(bF&&bJ in bI){bI[bJ]=false
}}}}},attrHooks:{type:{set:function(bE,bF){if(h.test(bE.nodeName)&&bE.parentNode){b.error("type property can't be changed")
}else{if(!b.support.radioValue&&bF==="radio"&&b.nodeName(bE,"input")){var bG=bE.value;
bE.setAttribute("type",bF);
if(bG){bE.value=bG
}return bF
}}}},value:{get:function(bF,bE){if(bo&&b.nodeName(bF,"button")){return bo.get(bF,bE)
}return bE in bF?bF.value:null
},set:function(bF,bG,bE){if(bo&&b.nodeName(bF,"button")){return bo.set(bF,bG,bE)
}bF.value=bG
}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(bJ,bH,bK){var bG,bE,bI,bF=bJ.nodeType;
if(!bJ||bF===3||bF===8||bF===2){return
}bI=bF!==1||!b.isXMLDoc(bJ);
if(bI){bH=b.propFix[bH]||bH;
bE=b.propHooks[bH]
}if(bK!==S){if(bE&&"set" in bE&&(bG=bE.set(bJ,bK,bH))!==S){return bG
}else{return(bJ[bH]=bK)
}}else{if(bE&&"get" in bE&&(bG=bE.get(bJ,bH))!==null){return bG
}else{return bJ[bH]
}}},propHooks:{tabIndex:{get:function(bF){var bE=bF.getAttributeNode("tabindex");
return bE&&bE.specified?parseInt(bE.value,10):J.test(bF.nodeName)||p.test(bF.nodeName)&&bF.href?0:S
}}}});
b.attrHooks.tabindex=b.propHooks.tabIndex;
a7={get:function(bF,bE){var bH,bG=b.prop(bF,bE);
return bG===true||typeof bG!=="boolean"&&(bH=bF.getAttributeNode(bE))&&bH.nodeValue!==false?bE.toLowerCase():S
},set:function(bF,bH,bE){var bG;
if(bH===false){b.removeAttr(bF,bE)
}else{bG=b.propFix[bE]||bE;
if(bG in bF){bF[bG]=true
}bF.setAttribute(bE,bE.toLowerCase())
}return bE
}};
if(!L){aO={name:true,id:true,coords:true};
bo=b.valHooks.button={get:function(bG,bF){var bE;
bE=bG.getAttributeNode(bF);
return bE&&(aO[bF]?bE.nodeValue!=="":bE.specified)?bE.nodeValue:S
},set:function(bG,bH,bF){var bE=bG.getAttributeNode(bF);
if(!bE){bE=aD.createAttribute(bF);
bG.setAttributeNode(bE)
}return(bE.nodeValue=bH+"")
}};
b.attrHooks.tabindex.set=bo.set;
b.each(["width","height"],function(bF,bE){b.attrHooks[bE]=b.extend(b.attrHooks[bE],{set:function(bG,bH){if(bH===""){bG.setAttribute(bE,"auto");
return bH
}}})
});
b.attrHooks.contenteditable={get:bo.get,set:function(bF,bG,bE){if(bG===""){bG="false"
}bo.set(bF,bG,bE)
}}
}if(!b.support.hrefNormalized){b.each(["href","src","width","height"],function(bF,bE){b.attrHooks[bE]=b.extend(b.attrHooks[bE],{get:function(bH){var bG=bH.getAttribute(bE,2);
return bG===null?S:bG
}})
})
}if(!b.support.style){b.attrHooks.style={get:function(bE){return bE.style.cssText.toLowerCase()||S
},set:function(bE,bF){return(bE.style.cssText=""+bF)
}}
}if(!b.support.optSelected){b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(bF){var bE=bF.parentNode;
if(bE){bE.selectedIndex;
if(bE.parentNode){bE.parentNode.selectedIndex
}}return null
}})
}if(!b.support.enctype){b.propFix.enctype="encoding"
}if(!b.support.checkOn){b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(bE){return bE.getAttribute("value")===null?"on":bE.value
}}
})
}b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(bE,bF){if(b.isArray(bF)){return(bE.checked=b.inArray(b(bE).val(),bF)>=0)
}}})
});
var bn=/^(?:textarea|input|select)$/i,r=/^([^\.]*)?(?:\.(.+))?$/,Q=/(?:^|\s)hover(\.\S+)?\b/,aX=/^key/,bp=/^(?:mouse|contextmenu)|click/,ab=/^(?:focusinfocus|focusoutblur)$/,ac=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,ag=function(bE){var bF=ac.exec(bE);
if(bF){bF[1]=(bF[1]||"").toLowerCase();
bF[3]=bF[3]&&new RegExp("(?:^|\\s)"+bF[3]+"(?:\\s|$)")
}return bF
},n=function(bG,bE){var bF=bG.attributes||{};
return((!bE[1]||bG.nodeName.toLowerCase()===bE[1])&&(!bE[2]||(bF.id||{}).value===bE[2])&&(!bE[3]||bE[3].test((bF["class"]||{}).value)))
},bC=function(bE){return b.event.special.hover?bE:bE.replace(Q,"mouseenter$1 mouseleave$1")
};
b.event={add:function(bH,bM,bT,bK,bI){var bN,bL,bU,bS,bR,bP,bE,bQ,bF,bJ,bG,bO;
if(bH.nodeType===3||bH.nodeType===8||!bM||!bT||!(bN=b._data(bH))){return
}if(bT.handler){bF=bT;
bT=bF.handler;
bI=bF.selector
}if(!bT.guid){bT.guid=b.guid++
}bU=bN.events;
if(!bU){bN.events=bU={}
}bL=bN.handle;
if(!bL){bN.handle=bL=function(bV){return typeof b!=="undefined"&&(!bV||b.event.triggered!==bV.type)?b.event.dispatch.apply(bL.elem,arguments):S
};
bL.elem=bH
}bM=b.trim(bC(bM)).split(" ");
for(bS=0;
bS<bM.length;
bS++){bR=r.exec(bM[bS])||[];
bP=bR[1];
bE=(bR[2]||"").split(".").sort();
bO=b.event.special[bP]||{};
bP=(bI?bO.delegateType:bO.bindType)||bP;
bO=b.event.special[bP]||{};
bQ=b.extend({type:bP,origType:bR[1],data:bK,handler:bT,guid:bT.guid,selector:bI,quick:bI&&ag(bI),namespace:bE.join(".")},bF);
bG=bU[bP];
if(!bG){bG=bU[bP]=[];
bG.delegateCount=0;
if(!bO.setup||bO.setup.call(bH,bK,bE,bL)===false){if(bH.addEventListener){bH.addEventListener(bP,bL,false)
}else{if(bH.attachEvent){bH.attachEvent("on"+bP,bL)
}}}}if(bO.add){bO.add.call(bH,bQ);
if(!bQ.handler.guid){bQ.handler.guid=bT.guid
}}if(bI){bG.splice(bG.delegateCount++,0,bQ)
}else{bG.push(bQ)
}b.event.global[bP]=true
}bH=null
},global:{},remove:function(bT,bO,bF,bR,bL){var bS=b.hasData(bT)&&b._data(bT),bP,bH,bJ,bV,bM,bK,bQ,bG,bI,bU,bN,bE;
if(!bS||!(bG=bS.events)){return
}bO=b.trim(bC(bO||"")).split(" ");
for(bP=0;
bP<bO.length;
bP++){bH=r.exec(bO[bP])||[];
bJ=bV=bH[1];
bM=bH[2];
if(!bJ){for(bJ in bG){b.event.remove(bT,bJ+bO[bP],bF,bR,true)
}continue
}bI=b.event.special[bJ]||{};
bJ=(bR?bI.delegateType:bI.bindType)||bJ;
bN=bG[bJ]||[];
bK=bN.length;
bM=bM?new RegExp("(^|\\.)"+bM.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;
for(bQ=0;
bQ<bN.length;
bQ++){bE=bN[bQ];
if((bL||bV===bE.origType)&&(!bF||bF.guid===bE.guid)&&(!bM||bM.test(bE.namespace))&&(!bR||bR===bE.selector||bR==="**"&&bE.selector)){bN.splice(bQ--,1);
if(bE.selector){bN.delegateCount--
}if(bI.remove){bI.remove.call(bT,bE)
}}}if(bN.length===0&&bK!==bN.length){if(!bI.teardown||bI.teardown.call(bT,bM)===false){b.removeEvent(bT,bJ,bS.handle)
}delete bG[bJ]
}}if(b.isEmptyObject(bG)){bU=bS.handle;
if(bU){bU.elem=null
}b.removeData(bT,["events","handle"],true)
}},customEvent:{getData:true,setData:true,changeData:true},trigger:function(bF,bN,bK,bT){if(bK&&(bK.nodeType===3||bK.nodeType===8)){return
}var bQ=bF.type||bF,bH=[],bE,bG,bM,bR,bJ,bI,bP,bO,bL,bS;
if(ab.test(bQ+b.event.triggered)){return
}if(bQ.indexOf("!")>=0){bQ=bQ.slice(0,-1);
bG=true
}if(bQ.indexOf(".")>=0){bH=bQ.split(".");
bQ=bH.shift();
bH.sort()
}if((!bK||b.event.customEvent[bQ])&&!b.event.global[bQ]){return
}bF=typeof bF==="object"?bF[b.expando]?bF:new b.Event(bQ,bF):new b.Event(bQ);
bF.type=bQ;
bF.isTrigger=true;
bF.exclusive=bG;
bF.namespace=bH.join(".");
bF.namespace_re=bF.namespace?new RegExp("(^|\\.)"+bH.join("\\.(?:.*\\.)?")+"(\\.|$)"):null;
bI=bQ.indexOf(":")<0?"on"+bQ:"";
if(!bK){bE=b.cache;
for(bM in bE){if(bE[bM].events&&bE[bM].events[bQ]){b.event.trigger(bF,bN,bE[bM].handle.elem,true)
}}return
}bF.result=S;
if(!bF.target){bF.target=bK
}bN=bN!=null?b.makeArray(bN):[];
bN.unshift(bF);
bP=b.event.special[bQ]||{};
if(bP.trigger&&bP.trigger.apply(bK,bN)===false){return
}bL=[[bK,bP.bindType||bQ]];
if(!bT&&!bP.noBubble&&!b.isWindow(bK)){bS=bP.delegateType||bQ;
bR=ab.test(bS+bQ)?bK:bK.parentNode;
bJ=null;
for(;
bR;
bR=bR.parentNode){bL.push([bR,bS]);
bJ=bR
}if(bJ&&bJ===bK.ownerDocument){bL.push([bJ.defaultView||bJ.parentWindow||bm,bS])
}}for(bM=0;
bM<bL.length&&!bF.isPropagationStopped();
bM++){bR=bL[bM][0];
bF.type=bL[bM][1];
bO=(b._data(bR,"events")||{})[bF.type]&&b._data(bR,"handle");
if(bO){bO.apply(bR,bN)
}bO=bI&&bR[bI];
if(bO&&b.acceptData(bR)&&bO.apply(bR,bN)===false){bF.preventDefault()
}}bF.type=bQ;
if(!bT&&!bF.isDefaultPrevented()){if((!bP._default||bP._default.apply(bK.ownerDocument,bN)===false)&&!(bQ==="click"&&b.nodeName(bK,"a"))&&b.acceptData(bK)){if(bI&&bK[bQ]&&((bQ!=="focus"&&bQ!=="blur")||bF.target.offsetWidth!==0)&&!b.isWindow(bK)){bJ=bK[bI];
if(bJ){bK[bI]=null
}b.event.triggered=bQ;
bK[bQ]();
b.event.triggered=S;
if(bJ){bK[bI]=bJ
}}}}return bF.result
},dispatch:function(bR){bR=b.event.fix(bR||bm.event);
var bN=((b._data(this,"events")||{})[bR.type]||[]),bM=bN.delegateCount,bH=[].slice.call(arguments,0),bO=!bR.exclusive&&!bR.namespace,bJ=b.event.special[bR.type]||{},bF=[],bT,bQ,bI,bK,bU,bS,bL,bG,bE,bP,bV;
bH[0]=bR;
bR.delegateTarget=this;
if(bJ.preDispatch&&bJ.preDispatch.call(this,bR)===false){return
}if(bM&&!(bR.button&&bR.type==="click")){bK=b(this);
bK.context=this.ownerDocument||this;
for(bI=bR.target;
bI!=this;
bI=bI.parentNode||this){if(bI.disabled!==true){bS={};
bG=[];
bK[0]=bI;
for(bT=0;
bT<bM;
bT++){bE=bN[bT];
bP=bE.selector;
if(bS[bP]===S){bS[bP]=(bE.quick?n(bI,bE.quick):bK.is(bP))
}if(bS[bP]){bG.push(bE)
}}if(bG.length){bF.push({elem:bI,matches:bG})
}}}}if(bN.length>bM){bF.push({elem:this,matches:bN.slice(bM)})
}for(bT=0;
bT<bF.length&&!bR.isPropagationStopped();
bT++){bL=bF[bT];
bR.currentTarget=bL.elem;
for(bQ=0;
bQ<bL.matches.length&&!bR.isImmediatePropagationStopped();
bQ++){bE=bL.matches[bQ];
if(bO||(!bR.namespace&&!bE.namespace)||bR.namespace_re&&bR.namespace_re.test(bE.namespace)){bR.data=bE.data;
bR.handleObj=bE;
bU=((b.event.special[bE.origType]||{}).handle||bE.handler).apply(bL.elem,bH);
if(bU!==S){bR.result=bU;
if(bU===false){bR.preventDefault();
bR.stopPropagation()
}}}}}if(bJ.postDispatch){bJ.postDispatch.call(this,bR)
}return bR.result
},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(bF,bE){if(bF.which==null){bF.which=bE.charCode!=null?bE.charCode:bE.keyCode
}return bF
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(bH,bG){var bI,bJ,bE,bF=bG.button,bK=bG.fromElement;
if(bH.pageX==null&&bG.clientX!=null){bI=bH.target.ownerDocument||aD;
bJ=bI.documentElement;
bE=bI.body;
bH.pageX=bG.clientX+(bJ&&bJ.scrollLeft||bE&&bE.scrollLeft||0)-(bJ&&bJ.clientLeft||bE&&bE.clientLeft||0);
bH.pageY=bG.clientY+(bJ&&bJ.scrollTop||bE&&bE.scrollTop||0)-(bJ&&bJ.clientTop||bE&&bE.clientTop||0)
}if(!bH.relatedTarget&&bK){bH.relatedTarget=bK===bH.target?bG.toElement:bK
}if(!bH.which&&bF!==S){bH.which=(bF&1?1:(bF&2?3:(bF&4?2:0)))
}return bH
}},fix:function(bG){if(bG[b.expando]){return bG
}var bF,bJ,bE=bG,bH=b.event.fixHooks[bG.type]||{},bI=bH.props?this.props.concat(bH.props):this.props;
bG=b.Event(bE);
for(bF=bI.length;
bF;
){bJ=bI[--bF];
bG[bJ]=bE[bJ]
}if(!bG.target){bG.target=bE.srcElement||aD
}if(bG.target.nodeType===3){bG.target=bG.target.parentNode
}if(bG.metaKey===S){bG.metaKey=bG.ctrlKey
}return bH.filter?bH.filter(bG,bE):bG
},special:{ready:{setup:b.bindReady},load:{noBubble:true},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(bG,bF,bE){if(b.isWindow(this)){this.onbeforeunload=bE
}},teardown:function(bF,bE){if(this.onbeforeunload===bE){this.onbeforeunload=null
}}}},simulate:function(bF,bH,bG,bE){var bI=b.extend(new b.Event(),bG,{type:bF,isSimulated:true,originalEvent:{}});
if(bE){b.event.trigger(bI,null,bH)
}else{b.event.dispatch.call(bH,bI)
}if(bI.isDefaultPrevented()){bG.preventDefault()
}}};
b.event.handle=b.event.dispatch;
b.removeEvent=aD.removeEventListener?function(bF,bE,bG){if(bF.removeEventListener){bF.removeEventListener(bE,bG,false)
}}:function(bF,bE,bG){if(bF.detachEvent){bF.detachEvent("on"+bE,bG)
}};
b.Event=function(bF,bE){if(!(this instanceof b.Event)){return new b.Event(bF,bE)
}if(bF&&bF.type){this.originalEvent=bF;
this.type=bF.type;
this.isDefaultPrevented=(bF.defaultPrevented||bF.returnValue===false||bF.getPreventDefault&&bF.getPreventDefault())?l:bu
}else{this.type=bF
}if(bE){b.extend(this,bE)
}this.timeStamp=bF&&bF.timeStamp||b.now();
this[b.expando]=true
};
function bu(){return false
}function l(){return true
}b.Event.prototype={preventDefault:function(){this.isDefaultPrevented=l;
var bE=this.originalEvent;
if(!bE){return
}if(bE.preventDefault){bE.preventDefault()
}else{bE.returnValue=false
}},stopPropagation:function(){this.isPropagationStopped=l;
var bE=this.originalEvent;
if(!bE){return
}if(bE.stopPropagation){bE.stopPropagation()
}bE.cancelBubble=true
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=l;
this.stopPropagation()
},isDefaultPrevented:bu,isPropagationStopped:bu,isImmediatePropagationStopped:bu};
b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(bF,bE){b.event.special[bF]={delegateType:bE,bindType:bE,handle:function(bJ){var bL=this,bK=bJ.relatedTarget,bI=bJ.handleObj,bG=bI.selector,bH;
if(!bK||(bK!==bL&&!b.contains(bL,bK))){bJ.type=bI.origType;
bH=bI.handler.apply(this,arguments);
bJ.type=bE
}return bH
}}
});
if(!b.support.submitBubbles){b.event.special.submit={setup:function(){if(b.nodeName(this,"form")){return false
}b.event.add(this,"click._submit keypress._submit",function(bG){var bF=bG.target,bE=b.nodeName(bF,"input")||b.nodeName(bF,"button")?bF.form:S;
if(bE&&!bE._submit_attached){b.event.add(bE,"submit._submit",function(bH){bH._submit_bubble=true
});
bE._submit_attached=true
}})
},postDispatch:function(bE){if(bE._submit_bubble){delete bE._submit_bubble;
if(this.parentNode&&!bE.isTrigger){b.event.simulate("submit",this.parentNode,bE,true)
}}},teardown:function(){if(b.nodeName(this,"form")){return false
}b.event.remove(this,"._submit")
}}
}if(!b.support.changeBubbles){b.event.special.change={setup:function(){if(bn.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){b.event.add(this,"propertychange._change",function(bE){if(bE.originalEvent.propertyName==="checked"){this._just_changed=true
}});
b.event.add(this,"click._change",function(bE){if(this._just_changed&&!bE.isTrigger){this._just_changed=false;
b.event.simulate("change",this,bE,true)
}})
}return false
}b.event.add(this,"beforeactivate._change",function(bF){var bE=bF.target;
if(bn.test(bE.nodeName)&&!bE._change_attached){b.event.add(bE,"change._change",function(bG){if(this.parentNode&&!bG.isSimulated&&!bG.isTrigger){b.event.simulate("change",this.parentNode,bG,true)
}});
bE._change_attached=true
}})
},handle:function(bF){var bE=bF.target;
if(this!==bE||bF.isSimulated||bF.isTrigger||(bE.type!=="radio"&&bE.type!=="checkbox")){return bF.handleObj.handler.apply(this,arguments)
}},teardown:function(){b.event.remove(this,"._change");
return bn.test(this.nodeName)
}}
}if(!b.support.focusinBubbles){b.each({focus:"focusin",blur:"focusout"},function(bH,bE){var bF=0,bG=function(bI){b.event.simulate(bE,bI.target,b.event.fix(bI),true)
};
b.event.special[bE]={setup:function(){if(bF++===0){aD.addEventListener(bH,bG,true)
}},teardown:function(){if(--bF===0){aD.removeEventListener(bH,bG,true)
}}}
})
}b.fn.extend({on:function(bG,bE,bJ,bI,bF){var bK,bH;
if(typeof bG==="object"){if(typeof bE!=="string"){bJ=bJ||bE;
bE=S
}for(bH in bG){this.on(bH,bE,bJ,bG[bH],bF)
}return this
}if(bJ==null&&bI==null){bI=bE;
bJ=bE=S
}else{if(bI==null){if(typeof bE==="string"){bI=bJ;
bJ=S
}else{bI=bJ;
bJ=bE;
bE=S
}}}if(bI===false){bI=bu
}else{if(!bI){return this
}}if(bF===1){bK=bI;
bI=function(bL){b().off(bL);
return bK.apply(this,arguments)
};
bI.guid=bK.guid||(bK.guid=b.guid++)
}return this.each(function(){b.event.add(this,bG,bI,bJ,bE)
})
},one:function(bF,bE,bH,bG){return this.on(bF,bE,bH,bG,1)
},off:function(bG,bE,bI){if(bG&&bG.preventDefault&&bG.handleObj){var bF=bG.handleObj;
b(bG.delegateTarget).off(bF.namespace?bF.origType+"."+bF.namespace:bF.origType,bF.selector,bF.handler);
return this
}if(typeof bG==="object"){for(var bH in bG){this.off(bH,bE,bG[bH])
}return this
}if(bE===false||typeof bE==="function"){bI=bE;
bE=S
}if(bI===false){bI=bu
}return this.each(function(){b.event.remove(this,bG,bI,bE)
})
},bind:function(bE,bG,bF){return this.on(bE,null,bG,bF)
},unbind:function(bE,bF){return this.off(bE,null,bF)
},live:function(bE,bG,bF){b(this.context).on(bE,this.selector,bG,bF);
return this
},die:function(bE,bF){b(this.context).off(bE,this.selector||"**",bF);
return this
},delegate:function(bE,bF,bH,bG){return this.on(bF,bE,bH,bG)
},undelegate:function(bE,bF,bG){return arguments.length==1?this.off(bE,"**"):this.off(bF,bE,bG)
},trigger:function(bE,bF){return this.each(function(){b.event.trigger(bE,bF,this)
})
},triggerHandler:function(bE,bF){if(this[0]){return b.event.trigger(bE,bF,this[0],true)
}},toggle:function(bH){var bF=arguments,bE=bH.guid||b.guid++,bG=0,bI=function(bJ){var bK=(b._data(this,"lastToggle"+bH.guid)||0)%bG;
b._data(this,"lastToggle"+bH.guid,bK+1);
bJ.preventDefault();
return bF[bK].apply(this,arguments)||false
};
bI.guid=bE;
while(bG<bF.length){bF[bG++].guid=bE
}return this.click(bI)
},hover:function(bE,bF){return this.mouseenter(bE).mouseleave(bF||bE)
}});
b.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(bF,bE){b.fn[bE]=function(bH,bG){if(bG==null){bG=bH;
bH=null
}return arguments.length>0?this.on(bE,null,bH,bG):this.trigger(bE)
};
if(b.attrFn){b.attrFn[bE]=true
}if(aX.test(bE)){b.event.fixHooks[bE]=b.event.keyHooks
}if(bp.test(bE)){b.event.fixHooks[bE]=b.event.mouseHooks
}});
/*
 * Sizzle CSS Selector Engine
 *  Copyright 2011, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var bQ=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,bL="sizcache"+(Math.random()+"").replace(".",""),bR=0,bU=Object.prototype.toString,bK=false,bJ=true,bT=/\\/g,bX=/\r\n/g,bZ=/\W/;
[0,0].sort(function(){bJ=false;
return 0
});
var bH=function(b5,b0,b8,b9){b8=b8||[];
b0=b0||aD;
var cb=b0;
if(b0.nodeType!==1&&b0.nodeType!==9){return[]
}if(!b5||typeof b5!=="string"){return b8
}var b2,cd,cg,b1,cc,cf,ce,b7,b4=true,b3=bH.isXML(b0),b6=[],ca=b5;
do{bQ.exec("");
b2=bQ.exec(ca);
if(b2){ca=b2[3];
b6.push(b2[1]);
if(b2[2]){b1=b2[3];
break
}}}while(b2);
if(b6.length>1&&bM.exec(b5)){if(b6.length===2&&bN.relative[b6[0]]){cd=bV(b6[0]+b6[1],b0,b9)
}else{cd=bN.relative[b6[0]]?[b0]:bH(b6.shift(),b0);
while(b6.length){b5=b6.shift();
if(bN.relative[b5]){b5+=b6.shift()
}cd=bV(b5,cd,b9)
}}}else{if(!b9&&b6.length>1&&b0.nodeType===9&&!b3&&bN.match.ID.test(b6[0])&&!bN.match.ID.test(b6[b6.length-1])){cc=bH.find(b6.shift(),b0,b3);
b0=cc.expr?bH.filter(cc.expr,cc.set)[0]:cc.set[0]
}if(b0){cc=b9?{expr:b6.pop(),set:bO(b9)}:bH.find(b6.pop(),b6.length===1&&(b6[0]==="~"||b6[0]==="+")&&b0.parentNode?b0.parentNode:b0,b3);
cd=cc.expr?bH.filter(cc.expr,cc.set):cc.set;
if(b6.length>0){cg=bO(cd)
}else{b4=false
}while(b6.length){cf=b6.pop();
ce=cf;
if(!bN.relative[cf]){cf=""
}else{ce=b6.pop()
}if(ce==null){ce=b0
}bN.relative[cf](cg,ce,b3)
}}else{cg=b6=[]
}}if(!cg){cg=cd
}if(!cg){bH.error(cf||b5)
}if(bU.call(cg)==="[object Array]"){if(!b4){b8.push.apply(b8,cg)
}else{if(b0&&b0.nodeType===1){for(b7=0;
cg[b7]!=null;
b7++){if(cg[b7]&&(cg[b7]===true||cg[b7].nodeType===1&&bH.contains(b0,cg[b7]))){b8.push(cd[b7])
}}}else{for(b7=0;
cg[b7]!=null;
b7++){if(cg[b7]&&cg[b7].nodeType===1){b8.push(cd[b7])
}}}}}else{bO(cg,b8)
}if(b1){bH(b1,cb,b8,b9);
bH.uniqueSort(b8)
}return b8
};
bH.uniqueSort=function(b1){if(bS){bK=bJ;
b1.sort(bS);
if(bK){for(var b0=1;
b0<b1.length;
b0++){if(b1[b0]===b1[b0-1]){b1.splice(b0--,1)
}}}}return b1
};
bH.matches=function(b0,b1){return bH(b0,null,null,b1)
};
bH.matchesSelector=function(b0,b1){return bH(b1,null,null,[b0]).length>0
};
bH.find=function(b7,b0,b8){var b6,b2,b4,b3,b5,b1;
if(!b7){return[]
}for(b2=0,b4=bN.order.length;
b2<b4;
b2++){b5=bN.order[b2];
if((b3=bN.leftMatch[b5].exec(b7))){b1=b3[1];
b3.splice(1,1);
if(b1.substr(b1.length-1)!=="\\"){b3[1]=(b3[1]||"").replace(bT,"");
b6=bN.find[b5](b3,b0,b8);
if(b6!=null){b7=b7.replace(bN.match[b5],"");
break
}}}}if(!b6){b6=typeof b0.getElementsByTagName!=="undefined"?b0.getElementsByTagName("*"):[]
}return{set:b6,expr:b7}
};
bH.filter=function(cb,ca,ce,b4){var b6,b0,b9,cg,cd,b1,b3,b5,cc,b2=cb,cf=[],b8=ca,b7=ca&&ca[0]&&bH.isXML(ca[0]);
while(cb&&ca.length){for(b9 in bN.filter){if((b6=bN.leftMatch[b9].exec(cb))!=null&&b6[2]){b1=bN.filter[b9];
b3=b6[1];
b0=false;
b6.splice(1,1);
if(b3.substr(b3.length-1)==="\\"){continue
}if(b8===cf){cf=[]
}if(bN.preFilter[b9]){b6=bN.preFilter[b9](b6,b8,ce,cf,b4,b7);
if(!b6){b0=cg=true
}else{if(b6===true){continue
}}}if(b6){for(b5=0;
(cd=b8[b5])!=null;
b5++){if(cd){cg=b1(cd,b6,b5,b8);
cc=b4^cg;
if(ce&&cg!=null){if(cc){b0=true
}else{b8[b5]=false
}}else{if(cc){cf.push(cd);
b0=true
}}}}}if(cg!==S){if(!ce){b8=cf
}cb=cb.replace(bN.match[b9],"");
if(!b0){return[]
}break
}}}if(cb===b2){if(b0==null){bH.error(cb)
}else{break
}}b2=cb
}return b8
};
bH.error=function(b0){throw new Error("Syntax error, unrecognized expression: "+b0)
};
var bF=bH.getText=function(b4){var b2,b3,b0=b4.nodeType,b1="";
if(b0){if(b0===1||b0===9||b0===11){if(typeof b4.textContent==="string"){return b4.textContent
}else{if(typeof b4.innerText==="string"){return b4.innerText.replace(bX,"")
}else{for(b4=b4.firstChild;
b4;
b4=b4.nextSibling){b1+=bF(b4)
}}}}else{if(b0===3||b0===4){return b4.nodeValue
}}}else{for(b2=0;
(b3=b4[b2]);
b2++){if(b3.nodeType!==8){b1+=bF(b3)
}}}return b1
};
var bN=bH.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(b0){return b0.getAttribute("href")
},type:function(b0){return b0.getAttribute("type")
}},relative:{"+":function(b6,b1){var b3=typeof b1==="string",b5=b3&&!bZ.test(b1),b7=b3&&!b5;
if(b5){b1=b1.toLowerCase()
}for(var b2=0,b0=b6.length,b4;
b2<b0;
b2++){if((b4=b6[b2])){while((b4=b4.previousSibling)&&b4.nodeType!==1){}b6[b2]=b7||b4&&b4.nodeName.toLowerCase()===b1?b4||false:b4===b1
}}if(b7){bH.filter(b1,b6,true)
}},">":function(b6,b1){var b5,b4=typeof b1==="string",b2=0,b0=b6.length;
if(b4&&!bZ.test(b1)){b1=b1.toLowerCase();
for(;
b2<b0;
b2++){b5=b6[b2];
if(b5){var b3=b5.parentNode;
b6[b2]=b3.nodeName.toLowerCase()===b1?b3:false
}}}else{for(;
b2<b0;
b2++){b5=b6[b2];
if(b5){b6[b2]=b4?b5.parentNode:b5.parentNode===b1
}}if(b4){bH.filter(b1,b6,true)
}}},"":function(b3,b1,b5){var b4,b2=bR++,b0=bW;
if(typeof b1==="string"&&!bZ.test(b1)){b1=b1.toLowerCase();
b4=b1;
b0=bE
}b0("parentNode",b1,b2,b3,b4,b5)
},"~":function(b3,b1,b5){var b4,b2=bR++,b0=bW;
if(typeof b1==="string"&&!bZ.test(b1)){b1=b1.toLowerCase();
b4=b1;
b0=bE
}b0("previousSibling",b1,b2,b3,b4,b5)
}},find:{ID:function(b1,b2,b3){if(typeof b2.getElementById!=="undefined"&&!b3){var b0=b2.getElementById(b1[1]);
return b0&&b0.parentNode?[b0]:[]
}},NAME:function(b2,b5){if(typeof b5.getElementsByName!=="undefined"){var b1=[],b4=b5.getElementsByName(b2[1]);
for(var b3=0,b0=b4.length;
b3<b0;
b3++){if(b4[b3].getAttribute("name")===b2[1]){b1.push(b4[b3])
}}return b1.length===0?null:b1
}},TAG:function(b0,b1){if(typeof b1.getElementsByTagName!=="undefined"){return b1.getElementsByTagName(b0[1])
}}},preFilter:{CLASS:function(b3,b1,b2,b0,b6,b7){b3=" "+b3[1].replace(bT,"")+" ";
if(b7){return b3
}for(var b4=0,b5;
(b5=b1[b4])!=null;
b4++){if(b5){if(b6^(b5.className&&(" "+b5.className+" ").replace(/[\t\n\r]/g," ").indexOf(b3)>=0)){if(!b2){b0.push(b5)
}}else{if(b2){b1[b4]=false
}}}}return false
},ID:function(b0){return b0[1].replace(bT,"")
},TAG:function(b1,b0){return b1[1].replace(bT,"").toLowerCase()
},CHILD:function(b0){if(b0[1]==="nth"){if(!b0[2]){bH.error(b0[0])
}b0[2]=b0[2].replace(/^\+|\s*/g,"");
var b1=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(b0[2]==="even"&&"2n"||b0[2]==="odd"&&"2n+1"||!/\D/.test(b0[2])&&"0n+"+b0[2]||b0[2]);
b0[2]=(b1[1]+(b1[2]||1))-0;
b0[3]=b1[3]-0
}else{if(b0[2]){bH.error(b0[0])
}}b0[0]=bR++;
return b0
},ATTR:function(b4,b1,b2,b0,b5,b6){var b3=b4[1]=b4[1].replace(bT,"");
if(!b6&&bN.attrMap[b3]){b4[1]=bN.attrMap[b3]
}b4[4]=(b4[4]||b4[5]||"").replace(bT,"");
if(b4[2]==="~="){b4[4]=" "+b4[4]+" "
}return b4
},PSEUDO:function(b4,b1,b2,b0,b5){if(b4[1]==="not"){if((bQ.exec(b4[3])||"").length>1||/^\w/.test(b4[3])){b4[3]=bH(b4[3],null,null,b1)
}else{var b3=bH.filter(b4[3],b1,b2,true^b5);
if(!b2){b0.push.apply(b0,b3)
}return false
}}else{if(bN.match.POS.test(b4[0])||bN.match.CHILD.test(b4[0])){return true
}}return b4
},POS:function(b0){b0.unshift(true);
return b0
}},filters:{enabled:function(b0){return b0.disabled===false&&b0.type!=="hidden"
},disabled:function(b0){return b0.disabled===true
},checked:function(b0){return b0.checked===true
},selected:function(b0){if(b0.parentNode){b0.parentNode.selectedIndex
}return b0.selected===true
},parent:function(b0){return !!b0.firstChild
},empty:function(b0){return !b0.firstChild
},has:function(b2,b1,b0){return !!bH(b0[3],b2).length
},header:function(b0){return(/h\d/i).test(b0.nodeName)
},text:function(b2){var b0=b2.getAttribute("type"),b1=b2.type;
return b2.nodeName.toLowerCase()==="input"&&"text"===b1&&(b0===b1||b0===null)
},radio:function(b0){return b0.nodeName.toLowerCase()==="input"&&"radio"===b0.type
},checkbox:function(b0){return b0.nodeName.toLowerCase()==="input"&&"checkbox"===b0.type
},file:function(b0){return b0.nodeName.toLowerCase()==="input"&&"file"===b0.type
},password:function(b0){return b0.nodeName.toLowerCase()==="input"&&"password"===b0.type
},submit:function(b1){var b0=b1.nodeName.toLowerCase();
return(b0==="input"||b0==="button")&&"submit"===b1.type
},image:function(b0){return b0.nodeName.toLowerCase()==="input"&&"image"===b0.type
},reset:function(b1){var b0=b1.nodeName.toLowerCase();
return(b0==="input"||b0==="button")&&"reset"===b1.type
},button:function(b1){var b0=b1.nodeName.toLowerCase();
return b0==="input"&&"button"===b1.type||b0==="button"
},input:function(b0){return(/input|select|textarea|button/i).test(b0.nodeName)
},focus:function(b0){return b0===b0.ownerDocument.activeElement
}},setFilters:{first:function(b1,b0){return b0===0
},last:function(b2,b1,b0,b3){return b1===b3.length-1
},even:function(b1,b0){return b0%2===0
},odd:function(b1,b0){return b0%2===1
},lt:function(b2,b1,b0){return b1<b0[3]-0
},gt:function(b2,b1,b0){return b1>b0[3]-0
},nth:function(b2,b1,b0){return b0[3]-0===b1
},eq:function(b2,b1,b0){return b0[3]-0===b1
}},filter:{PSEUDO:function(b2,b7,b6,b8){var b0=b7[1],b1=bN.filters[b0];
if(b1){return b1(b2,b6,b7,b8)
}else{if(b0==="contains"){return(b2.textContent||b2.innerText||bF([b2])||"").indexOf(b7[3])>=0
}else{if(b0==="not"){var b3=b7[3];
for(var b5=0,b4=b3.length;
b5<b4;
b5++){if(b3[b5]===b2){return false
}}return true
}else{bH.error(b0)
}}}},CHILD:function(b2,b4){var b3,ca,b6,b9,b0,b5,b8,b7=b4[1],b1=b2;
switch(b7){case"only":case"first":while((b1=b1.previousSibling)){if(b1.nodeType===1){return false
}}if(b7==="first"){return true
}b1=b2;
case"last":while((b1=b1.nextSibling)){if(b1.nodeType===1){return false
}}return true;
case"nth":b3=b4[2];
ca=b4[3];
if(b3===1&&ca===0){return true
}b6=b4[0];
b9=b2.parentNode;
if(b9&&(b9[bL]!==b6||!b2.nodeIndex)){b5=0;
for(b1=b9.firstChild;
b1;
b1=b1.nextSibling){if(b1.nodeType===1){b1.nodeIndex=++b5
}}b9[bL]=b6
}b8=b2.nodeIndex-ca;
if(b3===0){return b8===0
}else{return(b8%b3===0&&b8/b3>=0)
}}},ID:function(b1,b0){return b1.nodeType===1&&b1.getAttribute("id")===b0
},TAG:function(b1,b0){return(b0==="*"&&b1.nodeType===1)||!!b1.nodeName&&b1.nodeName.toLowerCase()===b0
},CLASS:function(b1,b0){return(" "+(b1.className||b1.getAttribute("class"))+" ").indexOf(b0)>-1
},ATTR:function(b5,b3){var b2=b3[1],b0=bH.attr?bH.attr(b5,b2):bN.attrHandle[b2]?bN.attrHandle[b2](b5):b5[b2]!=null?b5[b2]:b5.getAttribute(b2),b6=b0+"",b4=b3[2],b1=b3[4];
return b0==null?b4==="!=":!b4&&bH.attr?b0!=null:b4==="="?b6===b1:b4==="*="?b6.indexOf(b1)>=0:b4==="~="?(" "+b6+" ").indexOf(b1)>=0:!b1?b6&&b0!==false:b4==="!="?b6!==b1:b4==="^="?b6.indexOf(b1)===0:b4==="$="?b6.substr(b6.length-b1.length)===b1:b4==="|="?b6===b1||b6.substr(0,b1.length+1)===b1+"-":false
},POS:function(b4,b1,b2,b5){var b0=b1[2],b3=bN.setFilters[b0];
if(b3){return b3(b4,b2,b1,b5)
}}}};
var bM=bN.match.POS,bG=function(b1,b0){return"\\"+(b0-0+1)
};
for(var bI in bN.match){bN.match[bI]=new RegExp(bN.match[bI].source+(/(?![^\[]*\])(?![^\(]*\))/.source));
bN.leftMatch[bI]=new RegExp(/(^(?:.|\r|\n)*?)/.source+bN.match[bI].source.replace(/\\(\d+)/g,bG))
}bN.match.globalPOS=bM;
var bO=function(b1,b0){b1=Array.prototype.slice.call(b1,0);
if(b0){b0.push.apply(b0,b1);
return b0
}return b1
};
try{Array.prototype.slice.call(aD.documentElement.childNodes,0)[0].nodeType
}catch(bY){bO=function(b4,b3){var b2=0,b1=b3||[];
if(bU.call(b4)==="[object Array]"){Array.prototype.push.apply(b1,b4)
}else{if(typeof b4.length==="number"){for(var b0=b4.length;
b2<b0;
b2++){b1.push(b4[b2])
}}else{for(;
b4[b2];
b2++){b1.push(b4[b2])
}}}return b1
}
}var bS,bP;
if(aD.documentElement.compareDocumentPosition){bS=function(b1,b0){if(b1===b0){bK=true;
return 0
}if(!b1.compareDocumentPosition||!b0.compareDocumentPosition){return b1.compareDocumentPosition?-1:1
}return b1.compareDocumentPosition(b0)&4?-1:1
}
}else{bS=function(b8,b7){if(b8===b7){bK=true;
return 0
}else{if(b8.sourceIndex&&b7.sourceIndex){return b8.sourceIndex-b7.sourceIndex
}}var b5,b1,b2=[],b0=[],b4=b8.parentNode,b6=b7.parentNode,b9=b4;
if(b4===b6){return bP(b8,b7)
}else{if(!b4){return -1
}else{if(!b6){return 1
}}}while(b9){b2.unshift(b9);
b9=b9.parentNode
}b9=b6;
while(b9){b0.unshift(b9);
b9=b9.parentNode
}b5=b2.length;
b1=b0.length;
for(var b3=0;
b3<b5&&b3<b1;
b3++){if(b2[b3]!==b0[b3]){return bP(b2[b3],b0[b3])
}}return b3===b5?bP(b8,b0[b3],-1):bP(b2[b3],b7,1)
};
bP=function(b1,b0,b2){if(b1===b0){return b2
}var b3=b1.nextSibling;
while(b3){if(b3===b0){return -1
}b3=b3.nextSibling
}return 1
}
}(function(){var b1=aD.createElement("div"),b2="script"+(new Date()).getTime(),b0=aD.documentElement;
b1.innerHTML="<a name='"+b2+"'/>";
b0.insertBefore(b1,b0.firstChild);
if(aD.getElementById(b2)){bN.find.ID=function(b4,b5,b6){if(typeof b5.getElementById!=="undefined"&&!b6){var b3=b5.getElementById(b4[1]);
return b3?b3.id===b4[1]||typeof b3.getAttributeNode!=="undefined"&&b3.getAttributeNode("id").nodeValue===b4[1]?[b3]:S:[]
}};
bN.filter.ID=function(b5,b3){var b4=typeof b5.getAttributeNode!=="undefined"&&b5.getAttributeNode("id");
return b5.nodeType===1&&b4&&b4.nodeValue===b3
}
}b0.removeChild(b1);
b0=b1=null
})();
(function(){var b0=aD.createElement("div");
b0.appendChild(aD.createComment(""));
if(b0.getElementsByTagName("*").length>0){bN.find.TAG=function(b1,b5){var b4=b5.getElementsByTagName(b1[1]);
if(b1[1]==="*"){var b3=[];
for(var b2=0;
b4[b2];
b2++){if(b4[b2].nodeType===1){b3.push(b4[b2])
}}b4=b3
}return b4
}
}b0.innerHTML="<a href='#'></a>";
if(b0.firstChild&&typeof b0.firstChild.getAttribute!=="undefined"&&b0.firstChild.getAttribute("href")!=="#"){bN.attrHandle.href=function(b1){return b1.getAttribute("href",2)
}
}b0=null
})();
if(aD.querySelectorAll){(function(){var b0=bH,b3=aD.createElement("div"),b2="__sizzle__";
b3.innerHTML="<p class='TEST'></p>";
if(b3.querySelectorAll&&b3.querySelectorAll(".TEST").length===0){return
}bH=function(ce,b5,b9,cd){b5=b5||aD;
if(!cd&&!bH.isXML(b5)){var cc=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(ce);
if(cc&&(b5.nodeType===1||b5.nodeType===9)){if(cc[1]){return bO(b5.getElementsByTagName(ce),b9)
}else{if(cc[2]&&bN.find.CLASS&&b5.getElementsByClassName){return bO(b5.getElementsByClassName(cc[2]),b9)
}}}if(b5.nodeType===9){if(ce==="body"&&b5.body){return bO([b5.body],b9)
}else{if(cc&&cc[3]){var b8=b5.getElementById(cc[3]);
if(b8&&b8.parentNode){if(b8.id===cc[3]){return bO([b8],b9)
}}else{return bO([],b9)
}}}try{return bO(b5.querySelectorAll(ce),b9)
}catch(ca){}}else{if(b5.nodeType===1&&b5.nodeName.toLowerCase()!=="object"){var b6=b5,b7=b5.getAttribute("id"),b4=b7||b2,cg=b5.parentNode,cf=/^\s*[+~]/.test(ce);
if(!b7){b5.setAttribute("id",b4)
}else{b4=b4.replace(/'/g,"\\$&")
}if(cf&&cg){b5=b5.parentNode
}try{if(!cf||cg){return bO(b5.querySelectorAll("[id='"+b4+"'] "+ce),b9)
}}catch(cb){}finally{if(!b7){b6.removeAttribute("id")
}}}}}return b0(ce,b5,b9,cd)
};
for(var b1 in b0){bH[b1]=b0[b1]
}b3=null
})()
}(function(){var b0=aD.documentElement,b2=b0.matchesSelector||b0.mozMatchesSelector||b0.webkitMatchesSelector||b0.msMatchesSelector;
if(b2){var b4=!b2.call(aD.createElement("div"),"div"),b1=false;
try{b2.call(aD.documentElement,"[test!='']:sizzle")
}catch(b3){b1=true
}bH.matchesSelector=function(b6,b8){b8=b8.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");
if(!bH.isXML(b6)){try{if(b1||!bN.match.PSEUDO.test(b8)&&!/!=/.test(b8)){var b5=b2.call(b6,b8);
if(b5||!b4||b6.document&&b6.document.nodeType!==11){return b5
}}}catch(b7){}}return bH(b8,null,null,[b6]).length>0
}
}})();
(function(){var b0=aD.createElement("div");
b0.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!b0.getElementsByClassName||b0.getElementsByClassName("e").length===0){return
}b0.lastChild.className="e";
if(b0.getElementsByClassName("e").length===1){return
}bN.order.splice(1,0,"CLASS");
bN.find.CLASS=function(b1,b2,b3){if(typeof b2.getElementsByClassName!=="undefined"&&!b3){return b2.getElementsByClassName(b1[1])
}};
b0=null
})();
function bE(b1,b6,b5,b9,b7,b8){for(var b3=0,b2=b9.length;
b3<b2;
b3++){var b0=b9[b3];
if(b0){var b4=false;
b0=b0[b1];
while(b0){if(b0[bL]===b5){b4=b9[b0.sizset];
break
}if(b0.nodeType===1&&!b8){b0[bL]=b5;
b0.sizset=b3
}if(b0.nodeName.toLowerCase()===b6){b4=b0;
break
}b0=b0[b1]
}b9[b3]=b4
}}}function bW(b1,b6,b5,b9,b7,b8){for(var b3=0,b2=b9.length;
b3<b2;
b3++){var b0=b9[b3];
if(b0){var b4=false;
b0=b0[b1];
while(b0){if(b0[bL]===b5){b4=b9[b0.sizset];
break
}if(b0.nodeType===1){if(!b8){b0[bL]=b5;
b0.sizset=b3
}if(typeof b6!=="string"){if(b0===b6){b4=true;
break
}}else{if(bH.filter(b6,[b0]).length>0){b4=b0;
break
}}}b0=b0[b1]
}b9[b3]=b4
}}}if(aD.documentElement.contains){bH.contains=function(b1,b0){return b1!==b0&&(b1.contains?b1.contains(b0):true)
}
}else{if(aD.documentElement.compareDocumentPosition){bH.contains=function(b1,b0){return !!(b1.compareDocumentPosition(b0)&16)
}
}else{bH.contains=function(){return false
}
}}bH.isXML=function(b0){var b1=(b0?b0.ownerDocument||b0:0).documentElement;
return b1?b1.nodeName!=="HTML":false
};
var bV=function(b2,b0,b6){var b5,b7=[],b4="",b8=b0.nodeType?[b0]:b0;
while((b5=bN.match.PSEUDO.exec(b2))){b4+=b5[0];
b2=b2.replace(bN.match.PSEUDO,"")
}b2=bN.relative[b2]?b2+"*":b2;
for(var b3=0,b1=b8.length;
b3<b1;
b3++){bH(b2,b8[b3],b7,b6)
}return bH.filter(b4,b7)
};
bH.attr=b.attr;
bH.selectors.attrMap={};
b.find=bH;
b.expr=bH.selectors;
b.expr[":"]=b.expr.filters;
b.unique=bH.uniqueSort;
b.text=bH.getText;
b.isXMLDoc=bH.isXML;
b.contains=bH.contains
})();
var aj=/Until$/,az=/^(?:parents|prevUntil|prevAll)/,bk=/,/,by=/^.[^:#\[\.,]*$/,W=Array.prototype.slice,O=b.expr.match.globalPOS,aG={children:true,contents:true,next:true,prev:true};
b.fn.extend({find:function(bE){var bG=this,bI,bF;
if(typeof bE!=="string"){return b(bE).filter(function(){for(bI=0,bF=bG.length;
bI<bF;
bI++){if(b.contains(bG[bI],this)){return true
}}})
}var bH=this.pushStack("","find",bE),bK,bL,bJ;
for(bI=0,bF=this.length;
bI<bF;
bI++){bK=bH.length;
b.find(bE,this[bI],bH);
if(bI>0){for(bL=bK;
bL<bH.length;
bL++){for(bJ=0;
bJ<bK;
bJ++){if(bH[bJ]===bH[bL]){bH.splice(bL--,1);
break
}}}}}return bH
},has:function(bF){var bE=b(bF);
return this.filter(function(){for(var bH=0,bG=bE.length;
bH<bG;
bH++){if(b.contains(this,bE[bH])){return true
}}})
},not:function(bE){return this.pushStack(aP(this,bE,false),"not",bE)
},filter:function(bE){return this.pushStack(aP(this,bE,true),"filter",bE)
},is:function(bE){return !!bE&&(typeof bE==="string"?O.test(bE)?b(bE,this.context).index(this[0])>=0:b.filter(bE,this).length>0:this.filter(bE).length>0)
},closest:function(bI,bH){var bF=[],bG,bE,bJ=this[0];
if(b.isArray(bI)){var bL=1;
while(bJ&&bJ.ownerDocument&&bJ!==bH){for(bG=0;
bG<bI.length;
bG++){if(b(bJ).is(bI[bG])){bF.push({selector:bI[bG],elem:bJ,level:bL})
}}bJ=bJ.parentNode;
bL++
}return bF
}var bK=O.test(bI)||typeof bI!=="string"?b(bI,bH||this.context):0;
for(bG=0,bE=this.length;
bG<bE;
bG++){bJ=this[bG];
while(bJ){if(bK?bK.index(bJ)>-1:b.find.matchesSelector(bJ,bI)){bF.push(bJ);
break
}else{bJ=bJ.parentNode;
if(!bJ||!bJ.ownerDocument||bJ===bH||bJ.nodeType===11){break
}}}}bF=bF.length>1?b.unique(bF):bF;
return this.pushStack(bF,"closest",bI)
},index:function(bE){if(!bE){return(this[0]&&this[0].parentNode)?this.prevAll().length:-1
}if(typeof bE==="string"){return b.inArray(this[0],b(bE))
}return b.inArray(bE.jquery?bE[0]:bE,this)
},add:function(bE,bF){var bH=typeof bE==="string"?b(bE,bF):b.makeArray(bE&&bE.nodeType?[bE]:bE),bG=b.merge(this.get(),bH);
return this.pushStack(I(bH[0])||I(bG[0])?bG:b.unique(bG))
},andSelf:function(){return this.add(this.prevObject)
}});
function I(bE){return !bE||!bE.parentNode||bE.parentNode.nodeType===11
}b.each({parent:function(bF){var bE=bF.parentNode;
return bE&&bE.nodeType!==11?bE:null
},parents:function(bE){return b.dir(bE,"parentNode")
},parentsUntil:function(bF,bE,bG){return b.dir(bF,"parentNode",bG)
},next:function(bE){return b.nth(bE,2,"nextSibling")
},prev:function(bE){return b.nth(bE,2,"previousSibling")
},nextAll:function(bE){return b.dir(bE,"nextSibling")
},prevAll:function(bE){return b.dir(bE,"previousSibling")
},nextUntil:function(bF,bE,bG){return b.dir(bF,"nextSibling",bG)
},prevUntil:function(bF,bE,bG){return b.dir(bF,"previousSibling",bG)
},siblings:function(bE){return b.sibling((bE.parentNode||{}).firstChild,bE)
},children:function(bE){return b.sibling(bE.firstChild)
},contents:function(bE){return b.nodeName(bE,"iframe")?bE.contentDocument||bE.contentWindow.document:b.makeArray(bE.childNodes)
}},function(bE,bF){b.fn[bE]=function(bI,bG){var bH=b.map(this,bF,bI);
if(!aj.test(bE)){bG=bI
}if(bG&&typeof bG==="string"){bH=b.filter(bG,bH)
}bH=this.length>1&&!aG[bE]?b.unique(bH):bH;
if((this.length>1||bk.test(bG))&&az.test(bE)){bH=bH.reverse()
}return this.pushStack(bH,bE,W.call(arguments).join(","))
}
});
b.extend({filter:function(bG,bE,bF){if(bF){bG=":not("+bG+")"
}return bE.length===1?b.find.matchesSelector(bE[0],bG)?[bE[0]]:[]:b.find.matches(bG,bE)
},dir:function(bG,bF,bI){var bE=[],bH=bG[bF];
while(bH&&bH.nodeType!==9&&(bI===S||bH.nodeType!==1||!b(bH).is(bI))){if(bH.nodeType===1){bE.push(bH)
}bH=bH[bF]
}return bE
},nth:function(bI,bE,bG,bH){bE=bE||1;
var bF=0;
for(;
bI;
bI=bI[bG]){if(bI.nodeType===1&&++bF===bE){break
}}return bI
},sibling:function(bG,bF){var bE=[];
for(;
bG;
bG=bG.nextSibling){if(bG.nodeType===1&&bG!==bF){bE.push(bG)
}}return bE
}});
function aP(bH,bG,bE){bG=bG||0;
if(b.isFunction(bG)){return b.grep(bH,function(bJ,bI){var bK=!!bG.call(bJ,bI,bJ);
return bK===bE
})
}else{if(bG.nodeType){return b.grep(bH,function(bJ,bI){return(bJ===bG)===bE
})
}else{if(typeof bG==="string"){var bF=b.grep(bH,function(bI){return bI.nodeType===1
});
if(by.test(bG)){return b.filter(bG,bF,!bE)
}else{bG=b.filter(bG,bF)
}}}}return b.grep(bH,function(bJ,bI){return(b.inArray(bJ,bG)>=0)===bE
})
}function a(bE){var bG=a0.split("|"),bF=bE.createDocumentFragment();
if(bF.createElement){while(bG.length){bF.createElement(bG.pop())
}}return bF
}var a0="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ap=/ jQuery\d+="(?:\d+|null)"/g,aA=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,f=/<([\w:]+)/,C=/<tbody/i,ae=/<|&#?\w+;/,am=/<(?:script|style)/i,V=/<(?:script|object|embed|option|style)/i,aq=new RegExp("<(?:"+a0+")[\\s/>]","i"),s=/checked\s*(?:[^=]|=\s*.checked.)/i,bw=/\/(java|ecma)script/i,aW=/^\s*<!(?:\[CDATA\[|\-\-)/,aF={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},ak=a(aD);
aF.optgroup=aF.option;
aF.tbody=aF.tfoot=aF.colgroup=aF.caption=aF.thead;
aF.th=aF.td;
if(!b.support.htmlSerialize){aF._default=[1,"div<div>","</div>"]
}b.fn.extend({text:function(bE){return b.access(this,function(bF){return bF===S?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||aD).createTextNode(bF))
},null,bE,arguments.length)
},wrapAll:function(bE){if(b.isFunction(bE)){return this.each(function(bG){b(this).wrapAll(bE.call(this,bG))
})
}if(this[0]){var bF=b(bE,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){bF.insertBefore(this[0])
}bF.map(function(){var bG=this;
while(bG.firstChild&&bG.firstChild.nodeType===1){bG=bG.firstChild
}return bG
}).append(this)
}return this
},wrapInner:function(bE){if(b.isFunction(bE)){return this.each(function(bF){b(this).wrapInner(bE.call(this,bF))
})
}return this.each(function(){var bF=b(this),bG=bF.contents();
if(bG.length){bG.wrapAll(bE)
}else{bF.append(bE)
}})
},wrap:function(bE){var bF=b.isFunction(bE);
return this.each(function(bG){b(this).wrapAll(bF?bE.call(this,bG):bE)
})
},unwrap:function(){return this.parent().each(function(){if(!b.nodeName(this,"body")){b(this).replaceWith(this.childNodes)
}}).end()
},append:function(){return this.domManip(arguments,true,function(bE){if(this.nodeType===1){this.appendChild(bE)
}})
},prepend:function(){return this.domManip(arguments,true,function(bE){if(this.nodeType===1){this.insertBefore(bE,this.firstChild)
}})
},before:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(bF){this.parentNode.insertBefore(bF,this)
})
}else{if(arguments.length){var bE=b.clean(arguments);
bE.push.apply(bE,this.toArray());
return this.pushStack(bE,"before",arguments)
}}},after:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(bF){this.parentNode.insertBefore(bF,this.nextSibling)
})
}else{if(arguments.length){var bE=this.pushStack(this,"after",arguments);
bE.push.apply(bE,b.clean(arguments));
return bE
}}},remove:function(bE,bH){for(var bF=0,bG;
(bG=this[bF])!=null;
bF++){if(!bE||b.filter(bE,[bG]).length){if(!bH&&bG.nodeType===1){b.cleanData(bG.getElementsByTagName("*"));
b.cleanData([bG])
}if(bG.parentNode){bG.parentNode.removeChild(bG)
}}}return this
},empty:function(){for(var bE=0,bF;
(bF=this[bE])!=null;
bE++){if(bF.nodeType===1){b.cleanData(bF.getElementsByTagName("*"))
}while(bF.firstChild){bF.removeChild(bF.firstChild)
}}return this
},clone:function(bF,bE){bF=bF==null?false:bF;
bE=bE==null?bF:bE;
return this.map(function(){return b.clone(this,bF,bE)
})
},html:function(bE){return b.access(this,function(bI){var bH=this[0]||{},bG=0,bF=this.length;
if(bI===S){return bH.nodeType===1?bH.innerHTML.replace(ap,""):null
}if(typeof bI==="string"&&!am.test(bI)&&(b.support.leadingWhitespace||!aA.test(bI))&&!aF[(f.exec(bI)||["",""])[1].toLowerCase()]){bI=bI.replace(Y,"<$1></$2>");
try{for(;
bG<bF;
bG++){bH=this[bG]||{};
if(bH.nodeType===1){b.cleanData(bH.getElementsByTagName("*"));
bH.innerHTML=bI
}}bH=0
}catch(bJ){}}if(bH){this.empty().append(bI)
}},null,bE,arguments.length)
},replaceWith:function(bE){if(this[0]&&this[0].parentNode){if(b.isFunction(bE)){return this.each(function(bH){var bG=b(this),bF=bG.html();
bG.replaceWith(bE.call(this,bH,bF))
})
}if(typeof bE!=="string"){bE=b(bE).detach()
}return this.each(function(){var bG=this.nextSibling,bF=this.parentNode;
b(this).remove();
if(bG){b(bG).before(bE)
}else{b(bF).append(bE)
}})
}else{return this.length?this.pushStack(b(b.isFunction(bE)?bE():bE),"replaceWith",bE):this
}},detach:function(bE){return this.remove(bE,true)
},domManip:function(bL,bP,bO){var bH,bI,bK,bN,bM=bL[0],bF=[];
if(!b.support.checkClone&&arguments.length===3&&typeof bM==="string"&&s.test(bM)){return this.each(function(){b(this).domManip(bL,bP,bO,true)
})
}if(b.isFunction(bM)){return this.each(function(bR){var bQ=b(this);
bL[0]=bM.call(this,bR,bP?bQ.html():S);
bQ.domManip(bL,bP,bO)
})
}if(this[0]){bN=bM&&bM.parentNode;
if(b.support.parentNode&&bN&&bN.nodeType===11&&bN.childNodes.length===this.length){bH={fragment:bN}
}else{bH=b.buildFragment(bL,this,bF)
}bK=bH.fragment;
if(bK.childNodes.length===1){bI=bK=bK.firstChild
}else{bI=bK.firstChild
}if(bI){bP=bP&&b.nodeName(bI,"tr");
for(var bG=0,bE=this.length,bJ=bE-1;
bG<bE;
bG++){bO.call(bP?bl(this[bG],bI):this[bG],bH.cacheable||(bE>1&&bG<bJ)?b.clone(bK,true,true):bK)
}}if(bF.length){b.each(bF,function(bQ,bR){if(bR.src){b.ajax({type:"GET",global:false,url:bR.src,async:false,dataType:"script"})
}else{b.globalEval((bR.text||bR.textContent||bR.innerHTML||"").replace(aW,"/*$0*/"))
}if(bR.parentNode){bR.parentNode.removeChild(bR)
}})
}}return this
}});
function bl(bE,bF){return b.nodeName(bE,"table")?(bE.getElementsByTagName("tbody")[0]||bE.appendChild(bE.ownerDocument.createElement("tbody"))):bE
}function z(bL,bF){if(bF.nodeType!==1||!b.hasData(bL)){return
}var bI,bH,bE,bK=b._data(bL),bJ=b._data(bF,bK),bG=bK.events;
if(bG){delete bJ.handle;
bJ.events={};
for(bI in bG){for(bH=0,bE=bG[bI].length;
bH<bE;
bH++){b.event.add(bF,bI,bG[bI][bH])
}}}if(bJ.data){bJ.data=b.extend({},bJ.data)
}}function ar(bF,bE){var bG;
if(bE.nodeType!==1){return
}if(bE.clearAttributes){bE.clearAttributes()
}if(bE.mergeAttributes){bE.mergeAttributes(bF)
}bG=bE.nodeName.toLowerCase();
if(bG==="object"){bE.outerHTML=bF.outerHTML
}else{if(bG==="input"&&(bF.type==="checkbox"||bF.type==="radio")){if(bF.checked){bE.defaultChecked=bE.checked=bF.checked
}if(bE.value!==bF.value){bE.value=bF.value
}}else{if(bG==="option"){bE.selected=bF.defaultSelected
}else{if(bG==="input"||bG==="textarea"){bE.defaultValue=bF.defaultValue
}else{if(bG==="script"&&bE.text!==bF.text){bE.text=bF.text
}}}}}bE.removeAttribute(b.expando);
bE.removeAttribute("_submit_attached");
bE.removeAttribute("_change_attached")
}b.buildFragment=function(bJ,bH,bF){var bI,bE,bG,bK,bL=bJ[0];
if(bH&&bH[0]){bK=bH[0].ownerDocument||bH[0]
}if(!bK.createDocumentFragment){bK=aD
}if(bJ.length===1&&typeof bL==="string"&&bL.length<512&&bK===aD&&bL.charAt(0)==="<"&&!V.test(bL)&&(b.support.checkClone||!s.test(bL))&&(b.support.html5Clone||!aq.test(bL))){bE=true;
bG=b.fragments[bL];
if(bG&&bG!==1){bI=bG
}}if(!bI){bI=bK.createDocumentFragment();
b.clean(bJ,bK,bI,bF)
}if(bE){b.fragments[bL]=bG?bI:1
}return{fragment:bI,cacheable:bE}
};
b.fragments={};
b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(bE,bF){b.fn[bE]=function(bG){var bJ=[],bM=b(bG),bL=this.length===1&&this[0].parentNode;
if(bL&&bL.nodeType===11&&bL.childNodes.length===1&&bM.length===1){bM[bF](this[0]);
return this
}else{for(var bK=0,bH=bM.length;
bK<bH;
bK++){var bI=(bK>0?this.clone(true):this).get();
b(bM[bK])[bF](bI);
bJ=bJ.concat(bI)
}return this.pushStack(bJ,bE,bM.selector)
}}
});
function bq(bE){if(typeof bE.getElementsByTagName!=="undefined"){return bE.getElementsByTagName("*")
}else{if(typeof bE.querySelectorAll!=="undefined"){return bE.querySelectorAll("*")
}else{return[]
}}}function aH(bE){if(bE.type==="checkbox"||bE.type==="radio"){bE.defaultChecked=bE.checked
}}function K(bE){var bF=(bE.nodeName||"").toLowerCase();
if(bF==="input"){aH(bE)
}else{if(bF!=="script"&&typeof bE.getElementsByTagName!=="undefined"){b.grep(bE.getElementsByTagName("input"),aH)
}}}function av(bE){var bF=aD.createElement("div");
ak.appendChild(bF);
bF.innerHTML=bE.outerHTML;
return bF.firstChild
}b.extend({clone:function(bI,bK,bG){var bE,bF,bH,bJ=b.support.html5Clone||b.isXMLDoc(bI)||!aq.test("<"+bI.nodeName+">")?bI.cloneNode(true):av(bI);
if((!b.support.noCloneEvent||!b.support.noCloneChecked)&&(bI.nodeType===1||bI.nodeType===11)&&!b.isXMLDoc(bI)){ar(bI,bJ);
bE=bq(bI);
bF=bq(bJ);
for(bH=0;
bE[bH];
++bH){if(bF[bH]){ar(bE[bH],bF[bH])
}}}if(bK){z(bI,bJ);
if(bG){bE=bq(bI);
bF=bq(bJ);
for(bH=0;
bE[bH];
++bH){z(bE[bH],bF[bH])
}}}bE=bF=null;
return bJ
},clean:function(bS,bG,bF,bH){var bK,bR,bN,bT=[];
bG=bG||aD;
if(typeof bG.createElement==="undefined"){bG=bG.ownerDocument||bG[0]&&bG[0].ownerDocument||aD
}for(var bO=0,bQ;
(bQ=bS[bO])!=null;
bO++){if(typeof bQ==="number"){bQ+=""
}if(!bQ){continue
}if(typeof bQ==="string"){if(!ae.test(bQ)){bQ=bG.createTextNode(bQ)
}else{bQ=bQ.replace(Y,"<$1></$2>");
var bX=(f.exec(bQ)||["",""])[1].toLowerCase(),bJ=aF[bX]||aF._default,bU=bJ[0],bL=bG.createElement("div"),bV=ak.childNodes,bW;
if(bG===aD){ak.appendChild(bL)
}else{a(bG).appendChild(bL)
}bL.innerHTML=bJ[1]+bQ+bJ[2];
while(bU--){bL=bL.lastChild
}if(!b.support.tbody){var bI=C.test(bQ),bE=bX==="table"&&!bI?bL.firstChild&&bL.firstChild.childNodes:bJ[1]==="<table>"&&!bI?bL.childNodes:[];
for(bN=bE.length-1;
bN>=0;
--bN){if(b.nodeName(bE[bN],"tbody")&&!bE[bN].childNodes.length){bE[bN].parentNode.removeChild(bE[bN])
}}}if(!b.support.leadingWhitespace&&aA.test(bQ)){bL.insertBefore(bG.createTextNode(aA.exec(bQ)[0]),bL.firstChild)
}bQ=bL.childNodes;
if(bL){bL.parentNode.removeChild(bL);
if(bV.length>0){bW=bV[bV.length-1];
if(bW&&bW.parentNode){bW.parentNode.removeChild(bW)
}}}}}var bP;
if(!b.support.appendChecked){if(bQ[0]&&typeof(bP=bQ.length)==="number"){for(bN=0;
bN<bP;
bN++){K(bQ[bN])
}}else{K(bQ)
}}if(bQ.nodeType){bT.push(bQ)
}else{bT=b.merge(bT,bQ)
}}if(bF){bK=function(bY){return !bY.type||bw.test(bY.type)
};
for(bO=0;
bT[bO];
bO++){bR=bT[bO];
if(bH&&b.nodeName(bR,"script")&&(!bR.type||bw.test(bR.type))){bH.push(bR.parentNode?bR.parentNode.removeChild(bR):bR)
}else{if(bR.nodeType===1){var bM=b.grep(bR.getElementsByTagName("script"),bK);
bT.splice.apply(bT,[bO+1,0].concat(bM))
}bF.appendChild(bR)
}}}return bT
},cleanData:function(bF){var bI,bG,bE=b.cache,bL=b.event.special,bK=b.support.deleteExpando;
for(var bJ=0,bH;
(bH=bF[bJ])!=null;
bJ++){if(bH.nodeName&&b.noData[bH.nodeName.toLowerCase()]){continue
}bG=bH[b.expando];
if(bG){bI=bE[bG];
if(bI&&bI.events){for(var bM in bI.events){if(bL[bM]){b.event.remove(bH,bM)
}else{b.removeEvent(bH,bM,bI.handle)
}}if(bI.handle){bI.handle.elem=null
}}if(bK){delete bH[b.expando]
}else{if(bH.removeAttribute){bH.removeAttribute(b.expando)
}}delete bE[bG]
}}}});
var au=/alpha\([^)]*\)/i,aC=/opacity=([^)]*)/,F=/([A-Z]|^ms)/g,bx=/^[\-+]?(?:\d*\.)?\d+$/i,a9=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,P=/^([\-+])=([\-+.\de]+)/,aM=/^margin/,bi={position:"absolute",visibility:"hidden",display:"block"},N=["Top","Right","Bottom","Left"],ah,aR,a6;
b.fn.css=function(bE,bF){return b.access(this,function(bH,bG,bI){return bI!==S?b.style(bH,bG,bI):b.css(bH,bG)
},bE,bF,arguments.length>1)
};
b.extend({cssHooks:{opacity:{get:function(bG,bF){if(bF){var bE=ah(bG,"opacity");
return bE===""?"1":bE
}else{return bG.style.opacity
}}}},cssNumber:{fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(bG,bF,bM,bH){if(!bG||bG.nodeType===3||bG.nodeType===8||!bG.style){return
}var bK,bL,bI=b.camelCase(bF),bE=bG.style,bN=b.cssHooks[bI];
bF=b.cssProps[bI]||bI;
if(bM!==S){bL=typeof bM;
if(bL==="string"&&(bK=P.exec(bM))){bM=(+(bK[1]+1)*+bK[2])+parseFloat(b.css(bG,bF));
bL="number"
}if(bM==null||bL==="number"&&isNaN(bM)){return
}if(bL==="number"&&!b.cssNumber[bI]){bM+="px"
}if(!bN||!("set" in bN)||(bM=bN.set(bG,bM))!==S){try{bE[bF]=bM
}catch(bJ){}}}else{if(bN&&"get" in bN&&(bK=bN.get(bG,false,bH))!==S){return bK
}return bE[bF]
}},css:function(bI,bH,bF){var bG,bE;
bH=b.camelCase(bH);
bE=b.cssHooks[bH];
bH=b.cssProps[bH]||bH;
if(bH==="cssFloat"){bH="float"
}if(bE&&"get" in bE&&(bG=bE.get(bI,true,bF))!==S){return bG
}else{if(ah){return ah(bI,bH)
}}},swap:function(bI,bH,bJ){var bE={},bG,bF;
for(bF in bH){bE[bF]=bI.style[bF];
bI.style[bF]=bH[bF]
}bG=bJ.call(bI);
for(bF in bH){bI.style[bF]=bE[bF]
}return bG
}});
b.curCSS=b.css;
if(aD.defaultView&&aD.defaultView.getComputedStyle){aR=function(bK,bG){var bF,bJ,bE,bI,bH=bK.style;
bG=bG.replace(F,"-$1").toLowerCase();
if((bJ=bK.ownerDocument.defaultView)&&(bE=bJ.getComputedStyle(bK,null))){bF=bE.getPropertyValue(bG);
if(bF===""&&!b.contains(bK.ownerDocument.documentElement,bK)){bF=b.style(bK,bG)
}}if(!b.support.pixelMargin&&bE&&aM.test(bG)&&a9.test(bF)){bI=bH.width;
bH.width=bF;
bF=bE.width;
bH.width=bI
}return bF
}
}if(aD.documentElement.currentStyle){a6=function(bJ,bG){var bK,bE,bI,bF=bJ.currentStyle&&bJ.currentStyle[bG],bH=bJ.style;
if(bF==null&&bH&&(bI=bH[bG])){bF=bI
}if(a9.test(bF)){bK=bH.left;
bE=bJ.runtimeStyle&&bJ.runtimeStyle.left;
if(bE){bJ.runtimeStyle.left=bJ.currentStyle.left
}bH.left=bG==="fontSize"?"1em":bF;
bF=bH.pixelLeft+"px";
bH.left=bK;
if(bE){bJ.runtimeStyle.left=bE
}}return bF===""?"auto":bF
}
}ah=aR||a6;
function an(bI,bG,bF){var bJ=bG==="width"?bI.offsetWidth:bI.offsetHeight,bH=bG==="width"?1:0,bE=4;
if(bJ>0){if(bF!=="border"){for(;
bH<bE;
bH+=2){if(!bF){bJ-=parseFloat(b.css(bI,"padding"+N[bH]))||0
}if(bF==="margin"){bJ+=parseFloat(b.css(bI,bF+N[bH]))||0
}else{bJ-=parseFloat(b.css(bI,"border"+N[bH]+"Width"))||0
}}}return bJ+"px"
}bJ=ah(bI,bG);
if(bJ<0||bJ==null){bJ=bI.style[bG]
}if(a9.test(bJ)){return bJ
}bJ=parseFloat(bJ)||0;
if(bF){for(;
bH<bE;
bH+=2){bJ+=parseFloat(b.css(bI,"padding"+N[bH]))||0;
if(bF!=="padding"){bJ+=parseFloat(b.css(bI,"border"+N[bH]+"Width"))||0
}if(bF==="margin"){bJ+=parseFloat(b.css(bI,bF+N[bH]))||0
}}}return bJ+"px"
}b.each(["height","width"],function(bF,bE){b.cssHooks[bE]={get:function(bI,bH,bG){if(bH){if(bI.offsetWidth!==0){return an(bI,bE,bG)
}else{return b.swap(bI,bi,function(){return an(bI,bE,bG)
})
}}},set:function(bG,bH){return bx.test(bH)?bH+"px":bH
}}
});
if(!b.support.opacity){b.cssHooks.opacity={get:function(bF,bE){return aC.test((bE&&bF.currentStyle?bF.currentStyle.filter:bF.style.filter)||"")?(parseFloat(RegExp.$1)/100)+"":bE?"1":""
},set:function(bI,bJ){var bH=bI.style,bF=bI.currentStyle,bE=b.isNumeric(bJ)?"alpha(opacity="+bJ*100+")":"",bG=bF&&bF.filter||bH.filter||"";
bH.zoom=1;
if(bJ>=1&&b.trim(bG.replace(au,""))===""){bH.removeAttribute("filter");
if(bF&&!bF.filter){return
}}bH.filter=au.test(bG)?bG.replace(au,bE):bG+" "+bE
}}
}b(function(){if(!b.support.reliableMarginRight){b.cssHooks.marginRight={get:function(bF,bE){return b.swap(bF,{display:"inline-block"},function(){if(bE){return ah(bF,"margin-right")
}else{return bF.style.marginRight
}})
}}
}});
if(b.expr&&b.expr.filters){b.expr.filters.hidden=function(bG){var bF=bG.offsetWidth,bE=bG.offsetHeight;
return(bF===0&&bE===0)||(!b.support.reliableHiddenOffsets&&((bG.style&&bG.style.display)||b.css(bG,"display"))==="none")
};
b.expr.filters.visible=function(bE){return !b.expr.filters.hidden(bE)
}
}b.each({margin:"",padding:"",border:"Width"},function(bE,bF){b.cssHooks[bE+bF]={expand:function(bI){var bH,bJ=typeof bI==="string"?bI.split(" "):[bI],bG={};
for(bH=0;
bH<4;
bH++){bG[bE+N[bH]+bF]=bJ[bH]||bJ[bH-2]||bJ[0]
}return bG
}}
});
var o=/%20/g,ay=/\[\]$/,bB=/\r?\n/g,bz=/#.*$/,aL=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,a8=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,aV=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,aZ=/^(?:GET|HEAD)$/,c=/^\/\//,T=/\?/,bg=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,u=/^(?:select|textarea)/i,k=/\s+/,bA=/([?&])_=[^&]*/,R=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,G=b.fn.load,ai={},w={},aN,x,a4=["*/"]+["*"];
try{aN=bv.href
}catch(aE){aN=aD.createElement("a");
aN.href="";
aN=aN.href
}x=R.exec(aN.toLowerCase())||[];
function g(bE){return function(bI,bK){if(typeof bI!=="string"){bK=bI;
bI="*"
}if(b.isFunction(bK)){var bH=bI.toLowerCase().split(k),bG=0,bJ=bH.length,bF,bL,bM;
for(;
bG<bJ;
bG++){bF=bH[bG];
bM=/^\+/.test(bF);
if(bM){bF=bF.substr(1)||"*"
}bL=bE[bF]=bE[bF]||[];
bL[bM?"unshift":"push"](bK)
}}}
}function a5(bF,bO,bJ,bN,bL,bH){bL=bL||bO.dataTypes[0];
bH=bH||{};
bH[bL]=true;
var bK=bF[bL],bG=0,bE=bK?bK.length:0,bI=(bF===ai),bM;
for(;
bG<bE&&(bI||!bM);
bG++){bM=bK[bG](bO,bJ,bN);
if(typeof bM==="string"){if(!bI||bH[bM]){bM=S
}else{bO.dataTypes.unshift(bM);
bM=a5(bF,bO,bJ,bN,bM,bH)
}}}if((bI||!bM)&&!bH["*"]){bM=a5(bF,bO,bJ,bN,"*",bH)
}return bM
}function aw(bG,bH){var bF,bE,bI=b.ajaxSettings.flatOptions||{};
for(bF in bH){if(bH[bF]!==S){(bI[bF]?bG:(bE||(bE={})))[bF]=bH[bF]
}}if(bE){b.extend(true,bG,bE)
}}b.fn.extend({load:function(bG,bJ,bK){if(typeof bG!=="string"&&G){return G.apply(this,arguments)
}else{if(!this.length){return this
}}var bI=bG.indexOf(" ");
if(bI>=0){var bE=bG.slice(bI,bG.length);
bG=bG.slice(0,bI)
}var bH="GET";
if(bJ){if(b.isFunction(bJ)){bK=bJ;
bJ=S
}else{if(typeof bJ==="object"){bJ=b.param(bJ,b.ajaxSettings.traditional);
bH="POST"
}}}var bF=this;
b.ajax({url:bG,type:bH,dataType:"html",data:bJ,complete:function(bM,bL,bN){bN=bM.responseText;
if(bM.isResolved()){bM.done(function(bO){bN=bO
});
bF.html(bE?b("<div>").append(bN.replace(bg,"")).find(bE):bN)
}if(bK){bF.each(bK,[bN,bL,bM])
}}});
return this
},serialize:function(){return b.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){return this.elements?b.makeArray(this.elements):this
}).filter(function(){return this.name&&!this.disabled&&(this.checked||u.test(this.nodeName)||a8.test(this.type))
}).map(function(bE,bF){var bG=b(this).val();
return bG==null?null:b.isArray(bG)?b.map(bG,function(bI,bH){return{name:bF.name,value:bI.replace(bB,"\r\n")}
}):{name:bF.name,value:bG.replace(bB,"\r\n")}
}).get()
}});
b.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(bE,bF){b.fn[bF]=function(bG){return this.on(bF,bG)
}
});
b.each(["get","post"],function(bE,bF){b[bF]=function(bG,bI,bJ,bH){if(b.isFunction(bI)){bH=bH||bJ;
bJ=bI;
bI=S
}return b.ajax({type:bF,url:bG,data:bI,success:bJ,dataType:bH})
}
});
b.extend({getScript:function(bE,bF){return b.get(bE,S,bF,"script")
},getJSON:function(bE,bF,bG){return b.get(bE,bF,bG,"json")
},ajaxSetup:function(bF,bE){if(bE){aw(bF,b.ajaxSettings)
}else{bE=bF;
bF=b.ajaxSettings
}aw(bF,bE);
return bF
},ajaxSettings:{url:aN,isLocal:aV.test(x[1]),global:true,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:true,async:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":a4},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":bm.String,"text html":true,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{context:true,url:true}},ajaxPrefilter:g(ai),ajaxTransport:g(w),ajax:function(bI,bG){if(typeof bI==="object"){bG=bI;
bI=S
}bG=bG||{};
var bM=b.ajaxSetup({},bG),b1=bM.context||bM,bP=b1!==bM&&(b1.nodeType||b1 instanceof b)?b(b1):b.event,b0=b.Deferred(),bW=b.Callbacks("once memory"),bK=bM.statusCode||{},bL,bQ={},bX={},bZ,bH,bU,bN,bR,bJ=0,bF,bT,bS={readyState:0,setRequestHeader:function(b3,b4){if(!bJ){var b2=b3.toLowerCase();
b3=bX[b2]=bX[b2]||b3;
bQ[b3]=b4
}return this
},getAllResponseHeaders:function(){return bJ===2?bZ:null
},getResponseHeader:function(b3){var b2;
if(bJ===2){if(!bH){bH={};
while((b2=aL.exec(bZ))){bH[b2[1].toLowerCase()]=b2[2]
}}b2=bH[b3.toLowerCase()]
}return b2===S?null:b2
},overrideMimeType:function(b2){if(!bJ){bM.mimeType=b2
}return this
},abort:function(b2){b2=b2||"abort";
if(bU){bU.abort(b2)
}bO(0,b2);
return this
}};
function bO(b8,b3,b9,b5){if(bJ===2){return
}bJ=2;
if(bN){clearTimeout(bN)
}bU=S;
bZ=b5||"";
bS.readyState=b8>0?4:0;
var b2,cd,cc,b6=b3,b7=b9?bt(bM,bS,b9):S,b4,cb;
if(b8>=200&&b8<300||b8===304){if(bM.ifModified){if((b4=bS.getResponseHeader("Last-Modified"))){b.lastModified[bL]=b4
}if((cb=bS.getResponseHeader("Etag"))){b.etag[bL]=cb
}}if(b8===304){b6="notmodified";
b2=true
}else{try{cd=M(bM,b7);
b6="success";
b2=true
}catch(ca){b6="parsererror";
cc=ca
}}}else{cc=b6;
if(!b6||b8){b6="error";
if(b8<0){b8=0
}}}bS.status=b8;
bS.statusText=""+(b3||b6);
if(b2){b0.resolveWith(b1,[cd,b6,bS])
}else{b0.rejectWith(b1,[bS,b6,cc])
}bS.statusCode(bK);
bK=S;
if(bF){bP.trigger("ajax"+(b2?"Success":"Error"),[bS,bM,b2?cd:cc])
}bW.fireWith(b1,[bS,b6]);
if(bF){bP.trigger("ajaxComplete",[bS,bM]);
if(!(--b.active)){b.event.trigger("ajaxStop")
}}}b0.promise(bS);
bS.success=bS.done;
bS.error=bS.fail;
bS.complete=bW.add;
bS.statusCode=function(b3){if(b3){var b2;
if(bJ<2){for(b2 in b3){bK[b2]=[bK[b2],b3[b2]]
}}else{b2=b3[bS.status];
bS.then(b2,b2)
}}return this
};
bM.url=((bI||bM.url)+"").replace(bz,"").replace(c,x[1]+"//");
bM.dataTypes=b.trim(bM.dataType||"*").toLowerCase().split(k);
if(bM.crossDomain==null){bR=R.exec(bM.url.toLowerCase());
bM.crossDomain=!!(bR&&(bR[1]!=x[1]||bR[2]!=x[2]||(bR[3]||(bR[1]==="http:"?80:443))!=(x[3]||(x[1]==="http:"?80:443))))
}if(bM.data&&bM.processData&&typeof bM.data!=="string"){bM.data=b.param(bM.data,bM.traditional)
}a5(ai,bM,bG,bS);
if(bJ===2){return false
}bF=bM.global;
bM.type=bM.type.toUpperCase();
bM.hasContent=!aZ.test(bM.type);
if(bF&&b.active++===0){b.event.trigger("ajaxStart")
}if(!bM.hasContent){if(bM.data){bM.url+=(T.test(bM.url)?"&":"?")+bM.data;
delete bM.data
}bL=bM.url;
if(bM.cache===false){var bE=b.now(),bY=bM.url.replace(bA,"$1_="+bE);
bM.url=bY+((bY===bM.url)?(T.test(bM.url)?"&":"?")+"_="+bE:"")
}}if(bM.data&&bM.hasContent&&bM.contentType!==false||bG.contentType){bS.setRequestHeader("Content-Type",bM.contentType)
}if(bM.ifModified){bL=bL||bM.url;
if(b.lastModified[bL]){bS.setRequestHeader("If-Modified-Since",b.lastModified[bL])
}if(b.etag[bL]){bS.setRequestHeader("If-None-Match",b.etag[bL])
}}bS.setRequestHeader("Accept",bM.dataTypes[0]&&bM.accepts[bM.dataTypes[0]]?bM.accepts[bM.dataTypes[0]]+(bM.dataTypes[0]!=="*"?", "+a4+"; q=0.01":""):bM.accepts["*"]);
for(bT in bM.headers){bS.setRequestHeader(bT,bM.headers[bT])
}if(bM.beforeSend&&(bM.beforeSend.call(b1,bS,bM)===false||bJ===2)){bS.abort();
return false
}for(bT in {success:1,error:1,complete:1}){bS[bT](bM[bT])
}bU=a5(w,bM,bG,bS);
if(!bU){bO(-1,"No Transport")
}else{bS.readyState=1;
if(bF){bP.trigger("ajaxSend",[bS,bM])
}if(bM.async&&bM.timeout>0){bN=setTimeout(function(){bS.abort("timeout")
},bM.timeout)
}try{bJ=1;
bU.send(bQ,bO)
}catch(bV){if(bJ<2){bO(-1,bV)
}else{throw bV
}}}return bS
},param:function(bE,bG){var bF=[],bI=function(bJ,bK){bK=b.isFunction(bK)?bK():bK;
bF[bF.length]=encodeURIComponent(bJ)+"="+encodeURIComponent(bK)
};
if(bG===S){bG=b.ajaxSettings.traditional
}if(b.isArray(bE)||(bE.jquery&&!b.isPlainObject(bE))){b.each(bE,function(){bI(this.name,this.value)
})
}else{for(var bH in bE){B(bH,bE[bH],bG,bI)
}}return bF.join("&").replace(o,"+")
}});
function B(bG,bI,bF,bH){if(b.isArray(bI)){b.each(bI,function(bK,bJ){if(bF||ay.test(bG)){bH(bG,bJ)
}else{B(bG+"["+(typeof bJ==="object"?bK:"")+"]",bJ,bF,bH)
}})
}else{if(!bF&&b.type(bI)==="object"){for(var bE in bI){B(bG+"["+bE+"]",bI[bE],bF,bH)
}}else{bH(bG,bI)
}}}b.extend({active:0,lastModified:{},etag:{}});
function bt(bN,bM,bJ){var bF=bN.contents,bL=bN.dataTypes,bG=bN.responseFields,bI,bK,bH,bE;
for(bK in bG){if(bK in bJ){bM[bG[bK]]=bJ[bK]
}}while(bL[0]==="*"){bL.shift();
if(bI===S){bI=bN.mimeType||bM.getResponseHeader("content-type")
}}if(bI){for(bK in bF){if(bF[bK]&&bF[bK].test(bI)){bL.unshift(bK);
break
}}}if(bL[0] in bJ){bH=bL[0]
}else{for(bK in bJ){if(!bL[0]||bN.converters[bK+" "+bL[0]]){bH=bK;
break
}if(!bE){bE=bK
}}bH=bH||bE
}if(bH){if(bH!==bL[0]){bL.unshift(bH)
}return bJ[bH]
}}function M(bR,bJ){if(bR.dataFilter){bJ=bR.dataFilter(bJ,bR.dataType)
}var bN=bR.dataTypes,bQ={},bK,bO,bG=bN.length,bL,bM=bN[0],bH,bI,bP,bF,bE;
for(bK=1;
bK<bG;
bK++){if(bK===1){for(bO in bR.converters){if(typeof bO==="string"){bQ[bO.toLowerCase()]=bR.converters[bO]
}}}bH=bM;
bM=bN[bK];
if(bM==="*"){bM=bH
}else{if(bH!=="*"&&bH!==bM){bI=bH+" "+bM;
bP=bQ[bI]||bQ["* "+bM];
if(!bP){bE=S;
for(bF in bQ){bL=bF.split(" ");
if(bL[0]===bH||bL[0]==="*"){bE=bQ[bL[1]+" "+bM];
if(bE){bF=bQ[bF];
if(bF===true){bP=bE
}else{if(bE===true){bP=bF
}}break
}}}}if(!(bP||bE)){b.error("No conversion from "+bI.replace(" "," to "))
}if(bP!==true){bJ=bP?bP(bJ):bE(bF(bJ))
}}}}return bJ
}var aK=b.now(),A=/(\=)\?(&|$)|\?\?/i;
b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return b.expando+"_"+(aK++)
}});
b.ajaxPrefilter("json jsonp",function(bN,bK,bM){var bH=(typeof bN.data==="string")&&/^application\/x\-www\-form\-urlencoded/.test(bN.contentType);
if(bN.dataTypes[0]==="jsonp"||bN.jsonp!==false&&(A.test(bN.url)||bH&&A.test(bN.data))){var bL,bG=bN.jsonpCallback=b.isFunction(bN.jsonpCallback)?bN.jsonpCallback():bN.jsonpCallback,bJ=bm[bG],bE=bN.url,bI=bN.data,bF="$1"+bG+"$2";
if(bN.jsonp!==false){bE=bE.replace(A,bF);
if(bN.url===bE){if(bH){bI=bI.replace(A,bF)
}if(bN.data===bI){bE+=(/\?/.test(bE)?"&":"?")+bN.jsonp+"="+bG
}}}bN.url=bE;
bN.data=bI;
bm[bG]=function(bO){bL=[bO]
};
bM.always(function(){bm[bG]=bJ;
if(bL&&b.isFunction(bJ)){bm[bG](bL[0])
}});
bN.converters["script json"]=function(){if(!bL){b.error(bG+" was not called")
}return bL[0]
};
bN.dataTypes[0]="json";
return"script"
}});
b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(bE){b.globalEval(bE);
return bE
}}});
b.ajaxPrefilter("script",function(bE){if(bE.cache===S){bE.cache=false
}if(bE.crossDomain){bE.type="GET";
bE.global=false
}});
b.ajaxTransport("script",function(bG){if(bG.crossDomain){var bE,bF=aD.head||aD.getElementsByTagName("head")[0]||aD.documentElement;
return{send:function(bH,bI){bE=aD.createElement("script");
bE.async="async";
if(bG.scriptCharset){bE.charset=bG.scriptCharset
}bE.src=bG.url;
bE.onload=bE.onreadystatechange=function(bK,bJ){if(bJ||!bE.readyState||/loaded|complete/.test(bE.readyState)){bE.onload=bE.onreadystatechange=null;
if(bF&&bE.parentNode){bF.removeChild(bE)
}bE=S;
if(!bJ){bI(200,"success")
}}};
bF.insertBefore(bE,bF.firstChild)
},abort:function(){if(bE){bE.onload(0,1)
}}}
}});
var H=bm.ActiveXObject?function(){for(var bE in U){U[bE](0,1)
}}:false,E=0,U;
function aU(){try{return new bm.XMLHttpRequest()
}catch(bE){}}function at(){try{return new bm.ActiveXObject("Microsoft.XMLHTTP")
}catch(bE){}}b.ajaxSettings.xhr=bm.ActiveXObject?function(){return !this.isLocal&&aU()||at()
}:aU;
(function(bE){b.extend(b.support,{ajax:!!bE,cors:!!bE&&("withCredentials" in bE)})
})(b.ajaxSettings.xhr());
if(b.support.ajax){b.ajaxTransport(function(bE){if(!bE.crossDomain||b.support.cors){var bF;
return{send:function(bL,bG){var bK=bE.xhr(),bJ,bI;
if(bE.username){bK.open(bE.type,bE.url,bE.async,bE.username,bE.password)
}else{bK.open(bE.type,bE.url,bE.async)
}if(bE.xhrFields){for(bI in bE.xhrFields){bK[bI]=bE.xhrFields[bI]
}}if(bE.mimeType&&bK.overrideMimeType){bK.overrideMimeType(bE.mimeType)
}if(!bE.crossDomain&&!bL["X-Requested-With"]){bL["X-Requested-With"]="XMLHttpRequest"
}try{for(bI in bL){bK.setRequestHeader(bI,bL[bI])
}}catch(bH){}bK.send((bE.hasContent&&bE.data)||null);
bF=function(bU,bO){var bP,bN,bM,bS,bR;
try{if(bF&&(bO||bK.readyState===4)){bF=S;
if(bJ){bK.onreadystatechange=b.noop;
if(H){delete U[bJ]
}}if(bO){if(bK.readyState!==4){bK.abort()
}}else{bP=bK.status;
bM=bK.getAllResponseHeaders();
bS={};
bR=bK.responseXML;
if(bR&&bR.documentElement){bS.xml=bR
}try{bS.text=bK.responseText
}catch(bU){}try{bN=bK.statusText
}catch(bT){bN=""
}if(!bP&&bE.isLocal&&!bE.crossDomain){bP=bS.text?200:404
}else{if(bP===1223){bP=204
}}}}}catch(bQ){if(!bO){bG(-1,bQ)
}}if(bS){bG(bP,bN,bS,bM)
}};
if(!bE.async||bK.readyState===4){bF()
}else{bJ=++E;
if(H){if(!U){U={};
b(bm).unload(H)
}U[bJ]=bF
}bK.onreadystatechange=bF
}},abort:function(){if(bF){bF(0,1)
}}}
}})
}var X={},bj,q,aJ=/^(?:toggle|show|hide)$/,a2=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,bd,aQ=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],be;
b.fn.extend({show:function(bH,bK,bJ){var bG,bI;
if(bH||bH===0){return this.animate(ba("show",3),bH,bK,bJ)
}else{for(var bF=0,bE=this.length;
bF<bE;
bF++){bG=this[bF];
if(bG.style){bI=bG.style.display;
if(!b._data(bG,"olddisplay")&&bI==="none"){bI=bG.style.display=""
}if((bI===""&&b.css(bG,"display")==="none")||!b.contains(bG.ownerDocument.documentElement,bG)){b._data(bG,"olddisplay",D(bG.nodeName))
}}}for(bF=0;
bF<bE;
bF++){bG=this[bF];
if(bG.style){bI=bG.style.display;
if(bI===""||bI==="none"){bG.style.display=b._data(bG,"olddisplay")||""
}}}return this
}},hide:function(bH,bK,bJ){if(bH||bH===0){return this.animate(ba("hide",3),bH,bK,bJ)
}else{var bG,bI,bF=0,bE=this.length;
for(;
bF<bE;
bF++){bG=this[bF];
if(bG.style){bI=b.css(bG,"display");
if(bI!=="none"&&!b._data(bG,"olddisplay")){b._data(bG,"olddisplay",bI)
}}}for(bF=0;
bF<bE;
bF++){if(this[bF].style){this[bF].style.display="none"
}}return this
}},_toggle:b.fn.toggle,toggle:function(bG,bF,bH){var bE=typeof bG==="boolean";
if(b.isFunction(bG)&&b.isFunction(bF)){this._toggle.apply(this,arguments)
}else{if(bG==null||bE){this.each(function(){var bI=bE?bG:b(this).is(":hidden");
b(this)[bI?"show":"hide"]()
})
}else{this.animate(ba("toggle",3),bG,bF,bH)
}}return this
},fadeTo:function(bE,bH,bG,bF){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:bH},bE,bG,bF)
},animate:function(bJ,bG,bI,bH){var bE=b.speed(bG,bI,bH);
if(b.isEmptyObject(bJ)){return this.each(bE.complete,[false])
}bJ=b.extend({},bJ);
function bF(){if(bE.queue===false){b._mark(this)
}var bO=b.extend({},bE),bV=this.nodeType===1,bT=bV&&b(this).is(":hidden"),bL,bQ,bN,bU,bX,bP,bS,bM,bR,bW,bK;
bO.animatedProperties={};
for(bN in bJ){bL=b.camelCase(bN);
if(bN!==bL){bJ[bL]=bJ[bN];
delete bJ[bN]
}if((bX=b.cssHooks[bL])&&"expand" in bX){bP=bX.expand(bJ[bL]);
delete bJ[bL];
for(bN in bP){if(!(bN in bJ)){bJ[bN]=bP[bN]
}}}}for(bL in bJ){bQ=bJ[bL];
if(b.isArray(bQ)){bO.animatedProperties[bL]=bQ[1];
bQ=bJ[bL]=bQ[0]
}else{bO.animatedProperties[bL]=bO.specialEasing&&bO.specialEasing[bL]||bO.easing||"swing"
}if(bQ==="hide"&&bT||bQ==="show"&&!bT){return bO.complete.call(this)
}if(bV&&(bL==="height"||bL==="width")){bO.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];
if(b.css(this,"display")==="inline"&&b.css(this,"float")==="none"){if(!b.support.inlineBlockNeedsLayout||D(this.nodeName)==="inline"){this.style.display="inline-block"
}else{this.style.zoom=1
}}}}if(bO.overflow!=null){this.style.overflow="hidden"
}for(bN in bJ){bU=new b.fx(this,bO,bN);
bQ=bJ[bN];
if(aJ.test(bQ)){bK=b._data(this,"toggle"+bN)||(bQ==="toggle"?bT?"show":"hide":0);
if(bK){b._data(this,"toggle"+bN,bK==="show"?"hide":"show");
bU[bK]()
}else{bU[bQ]()
}}else{bS=a2.exec(bQ);
bM=bU.cur();
if(bS){bR=parseFloat(bS[2]);
bW=bS[3]||(b.cssNumber[bN]?"":"px");
if(bW!=="px"){b.style(this,bN,(bR||1)+bW);
bM=((bR||1)/bU.cur())*bM;
b.style(this,bN,bM+bW)
}if(bS[1]){bR=((bS[1]==="-="?-1:1)*bR)+bM
}bU.custom(bM,bR,bW)
}else{bU.custom(bM,bQ,"")
}}}return true
}return bE.queue===false?this.each(bF):this.queue(bE.queue,bF)
},stop:function(bG,bF,bE){if(typeof bG!=="string"){bE=bF;
bF=bG;
bG=S
}if(bF&&bG!==false){this.queue(bG||"fx",[])
}return this.each(function(){var bH,bI=false,bK=b.timers,bJ=b._data(this);
if(!bE){b._unmark(true,this)
}function bL(bO,bP,bN){var bM=bP[bN];
b.removeData(bO,bN,true);
bM.stop(bE)
}if(bG==null){for(bH in bJ){if(bJ[bH]&&bJ[bH].stop&&bH.indexOf(".run")===bH.length-4){bL(this,bJ,bH)
}}}else{if(bJ[bH=bG+".run"]&&bJ[bH].stop){bL(this,bJ,bH)
}}for(bH=bK.length;
bH--;
){if(bK[bH].elem===this&&(bG==null||bK[bH].queue===bG)){if(bE){bK[bH](true)
}else{bK[bH].saveState()
}bI=true;
bK.splice(bH,1)
}}if(!(bE&&bI)){b.dequeue(this,bG)
}})
}});
function br(){setTimeout(aB,0);
return(be=b.now())
}function aB(){be=S
}function ba(bF,bE){var bG={};
b.each(aQ.concat.apply([],aQ.slice(0,bE)),function(){bG[this]=bF
});
return bG
}b.each({slideDown:ba("show",1),slideUp:ba("hide",1),slideToggle:ba("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(bE,bF){b.fn[bE]=function(bG,bI,bH){return this.animate(bF,bG,bI,bH)
}
});
b.extend({speed:function(bG,bH,bF){var bE=bG&&typeof bG==="object"?b.extend({},bG):{complete:bF||!bF&&bH||b.isFunction(bG)&&bG,duration:bG,easing:bF&&bH||bH&&!b.isFunction(bH)&&bH};
bE.duration=b.fx.off?0:typeof bE.duration==="number"?bE.duration:bE.duration in b.fx.speeds?b.fx.speeds[bE.duration]:b.fx.speeds._default;
if(bE.queue==null||bE.queue===true){bE.queue="fx"
}bE.old=bE.complete;
bE.complete=function(bI){if(b.isFunction(bE.old)){bE.old.call(this)
}if(bE.queue){b.dequeue(this,bE.queue)
}else{if(bI!==false){b._unmark(this)
}}};
return bE
},easing:{linear:function(bE){return bE
},swing:function(bE){return(-Math.cos(bE*Math.PI)/2)+0.5
}},timers:[],fx:function(bF,bE,bG){this.options=bE;
this.elem=bF;
this.prop=bG;
bE.orig=bE.orig||{}
}});
b.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)
}(b.fx.step[this.prop]||b.fx.step._default)(this)
},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]
}var bE,bF=b.css(this.elem,this.prop);
return isNaN(bE=parseFloat(bF))?!bF||bF==="auto"?0:bF:bE
},custom:function(bJ,bI,bH){var bE=this,bG=b.fx;
this.startTime=be||br();
this.end=bI;
this.now=this.start=bJ;
this.pos=this.state=0;
this.unit=bH||this.unit||(b.cssNumber[this.prop]?"":"px");
function bF(bK){return bE.step(bK)
}bF.queue=this.options.queue;
bF.elem=this.elem;
bF.saveState=function(){if(b._data(bE.elem,"fxshow"+bE.prop)===S){if(bE.options.hide){b._data(bE.elem,"fxshow"+bE.prop,bE.start)
}else{if(bE.options.show){b._data(bE.elem,"fxshow"+bE.prop,bE.end)
}}}};
if(bF()&&b.timers.push(bF)&&!bd){bd=setInterval(bG.tick,bG.interval)
}},show:function(){var bE=b._data(this.elem,"fxshow"+this.prop);
this.options.orig[this.prop]=bE||b.style(this.elem,this.prop);
this.options.show=true;
if(bE!==S){this.custom(this.cur(),bE)
}else{this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur())
}b(this.elem).show()
},hide:function(){this.options.orig[this.prop]=b._data(this.elem,"fxshow"+this.prop)||b.style(this.elem,this.prop);
this.options.hide=true;
this.custom(this.cur(),0)
},step:function(bI){var bK,bL,bF,bH=be||br(),bE=true,bJ=this.elem,bG=this.options;
if(bI||bH>=bG.duration+this.startTime){this.now=this.end;
this.pos=this.state=1;
this.update();
bG.animatedProperties[this.prop]=true;
for(bK in bG.animatedProperties){if(bG.animatedProperties[bK]!==true){bE=false
}}if(bE){if(bG.overflow!=null&&!b.support.shrinkWrapBlocks){b.each(["","X","Y"],function(bM,bN){bJ.style["overflow"+bN]=bG.overflow[bM]
})
}if(bG.hide){b(bJ).hide()
}if(bG.hide||bG.show){for(bK in bG.animatedProperties){b.style(bJ,bK,bG.orig[bK]);
b.removeData(bJ,"fxshow"+bK,true);
b.removeData(bJ,"toggle"+bK,true)
}}bF=bG.complete;
if(bF){bG.complete=false;
bF.call(bJ)
}}return false
}else{if(bG.duration==Infinity){this.now=bH
}else{bL=bH-this.startTime;
this.state=bL/bG.duration;
this.pos=b.easing[bG.animatedProperties[this.prop]](this.state,bL,0,1,bG.duration);
this.now=this.start+((this.end-this.start)*this.pos)
}this.update()
}return true
}};
b.extend(b.fx,{tick:function(){var bG,bF=b.timers,bE=0;
for(;
bE<bF.length;
bE++){bG=bF[bE];
if(!bG()&&bF[bE]===bG){bF.splice(bE--,1)
}}if(!bF.length){b.fx.stop()
}},interval:13,stop:function(){clearInterval(bd);
bd=null
},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(bE){b.style(bE.elem,"opacity",bE.now)
},_default:function(bE){if(bE.elem.style&&bE.elem.style[bE.prop]!=null){bE.elem.style[bE.prop]=bE.now+bE.unit
}else{bE.elem[bE.prop]=bE.now
}}}});
b.each(aQ.concat.apply([],aQ),function(bE,bF){if(bF.indexOf("margin")){b.fx.step[bF]=function(bG){b.style(bG.elem,bF,Math.max(0,bG.now)+bG.unit)
}
}});
if(b.expr&&b.expr.filters){b.expr.filters.animated=function(bE){return b.grep(b.timers,function(bF){return bE===bF.elem
}).length
}
}function D(bH){if(!X[bH]){var bE=aD.body,bF=b("<"+bH+">").appendTo(bE),bG=bF.css("display");
bF.remove();
if(bG==="none"||bG===""){if(!bj){bj=aD.createElement("iframe");
bj.frameBorder=bj.width=bj.height=0
}bE.appendChild(bj);
if(!q||!bj.createElement){q=(bj.contentWindow||bj.contentDocument).document;
q.write((b.support.boxModel?"<!doctype html>":"")+"<html><body>");
q.close()
}bF=q.createElement(bH);
q.body.appendChild(bF);
bG=b.css(bF,"display");
bE.removeChild(bj)
}X[bH]=bG
}return X[bH]
}var bh,ad=/^t(?:able|d|h)$/i,al=/^(?:body|html)$/i;
if("getBoundingClientRect" in aD.documentElement){bh=function(bH,bQ,bF,bK){try{bK=bH.getBoundingClientRect()
}catch(bO){}if(!bK||!b.contains(bF,bH)){return bK?{top:bK.top,left:bK.left}:{top:0,left:0}
}var bL=bQ.body,bM=aT(bQ),bJ=bF.clientTop||bL.clientTop||0,bN=bF.clientLeft||bL.clientLeft||0,bE=bM.pageYOffset||b.support.boxModel&&bF.scrollTop||bL.scrollTop,bI=bM.pageXOffset||b.support.boxModel&&bF.scrollLeft||bL.scrollLeft,bP=bK.top+bE-bJ,bG=bK.left+bI-bN;
return{top:bP,left:bG}
}
}else{bh=function(bJ,bO,bH){var bM,bG=bJ.offsetParent,bF=bJ,bK=bO.body,bL=bO.defaultView,bE=bL?bL.getComputedStyle(bJ,null):bJ.currentStyle,bN=bJ.offsetTop,bI=bJ.offsetLeft;
while((bJ=bJ.parentNode)&&bJ!==bK&&bJ!==bH){if(b.support.fixedPosition&&bE.position==="fixed"){break
}bM=bL?bL.getComputedStyle(bJ,null):bJ.currentStyle;
bN-=bJ.scrollTop;
bI-=bJ.scrollLeft;
if(bJ===bG){bN+=bJ.offsetTop;
bI+=bJ.offsetLeft;
if(b.support.doesNotAddBorder&&!(b.support.doesAddBorderForTableAndCells&&ad.test(bJ.nodeName))){bN+=parseFloat(bM.borderTopWidth)||0;
bI+=parseFloat(bM.borderLeftWidth)||0
}bF=bG;
bG=bJ.offsetParent
}if(b.support.subtractsBorderForOverflowNotVisible&&bM.overflow!=="visible"){bN+=parseFloat(bM.borderTopWidth)||0;
bI+=parseFloat(bM.borderLeftWidth)||0
}bE=bM
}if(bE.position==="relative"||bE.position==="static"){bN+=bK.offsetTop;
bI+=bK.offsetLeft
}if(b.support.fixedPosition&&bE.position==="fixed"){bN+=Math.max(bH.scrollTop,bK.scrollTop);
bI+=Math.max(bH.scrollLeft,bK.scrollLeft)
}return{top:bN,left:bI}
}
}b.fn.offset=function(bE){if(arguments.length){return bE===S?this:this.each(function(bH){b.offset.setOffset(this,bE,bH)
})
}var bF=this[0],bG=bF&&bF.ownerDocument;
if(!bG){return null
}if(bF===bG.body){return b.offset.bodyOffset(bF)
}return bh(bF,bG,bG.documentElement)
};
b.offset={bodyOffset:function(bE){var bG=bE.offsetTop,bF=bE.offsetLeft;
if(b.support.doesNotIncludeMarginInBodyOffset){bG+=parseFloat(b.css(bE,"marginTop"))||0;
bF+=parseFloat(b.css(bE,"marginLeft"))||0
}return{top:bG,left:bF}
},setOffset:function(bH,bQ,bK){var bL=b.css(bH,"position");
if(bL==="static"){bH.style.position="relative"
}var bJ=b(bH),bF=bJ.offset(),bE=b.css(bH,"top"),bO=b.css(bH,"left"),bP=(bL==="absolute"||bL==="fixed")&&b.inArray("auto",[bE,bO])>-1,bN={},bM={},bG,bI;
if(bP){bM=bJ.position();
bG=bM.top;
bI=bM.left
}else{bG=parseFloat(bE)||0;
bI=parseFloat(bO)||0
}if(b.isFunction(bQ)){bQ=bQ.call(bH,bK,bF)
}if(bQ.top!=null){bN.top=(bQ.top-bF.top)+bG
}if(bQ.left!=null){bN.left=(bQ.left-bF.left)+bI
}if("using" in bQ){bQ.using.call(bH,bN)
}else{bJ.css(bN)
}}};
b.fn.extend({position:function(){if(!this[0]){return null
}var bG=this[0],bF=this.offsetParent(),bH=this.offset(),bE=al.test(bF[0].nodeName)?{top:0,left:0}:bF.offset();
bH.top-=parseFloat(b.css(bG,"marginTop"))||0;
bH.left-=parseFloat(b.css(bG,"marginLeft"))||0;
bE.top+=parseFloat(b.css(bF[0],"borderTopWidth"))||0;
bE.left+=parseFloat(b.css(bF[0],"borderLeftWidth"))||0;
return{top:bH.top-bE.top,left:bH.left-bE.left}
},offsetParent:function(){return this.map(function(){var bE=this.offsetParent||aD.body;
while(bE&&(!al.test(bE.nodeName)&&b.css(bE,"position")==="static")){bE=bE.offsetParent
}return bE
})
}});
b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(bG,bF){var bE=/Y/.test(bF);
b.fn[bG]=function(bH){return b.access(this,function(bI,bL,bK){var bJ=aT(bI);
if(bK===S){return bJ?(bF in bJ)?bJ[bF]:b.support.boxModel&&bJ.document.documentElement[bL]||bJ.document.body[bL]:bI[bL]
}if(bJ){bJ.scrollTo(!bE?bK:b(bJ).scrollLeft(),bE?bK:b(bJ).scrollTop())
}else{bI[bL]=bK
}},bG,bH,arguments.length,null)
}
});
function aT(bE){return b.isWindow(bE)?bE:bE.nodeType===9?bE.defaultView||bE.parentWindow:false
}b.each({Height:"height",Width:"width"},function(bG,bH){var bF="client"+bG,bE="scroll"+bG,bI="offset"+bG;
b.fn["inner"+bG]=function(){var bJ=this[0];
return bJ?bJ.style?parseFloat(b.css(bJ,bH,"padding")):this[bH]():null
};
b.fn["outer"+bG]=function(bK){var bJ=this[0];
return bJ?bJ.style?parseFloat(b.css(bJ,bH,bK?"margin":"border")):this[bH]():null
};
b.fn[bH]=function(bJ){return b.access(this,function(bM,bL,bN){var bP,bO,bQ,bK;
if(b.isWindow(bM)){bP=bM.document;
bO=bP.documentElement[bF];
return b.support.boxModel&&bO||bP.body&&bP.body[bF]||bO
}if(bM.nodeType===9){bP=bM.documentElement;
if(bP[bF]>=bP[bE]){return bP[bF]
}return Math.max(bM.body[bE],bP[bE],bM.body[bI],bP[bI])
}if(bN===S){bQ=b.css(bM,bL);
bK=parseFloat(bQ);
return b.isNumeric(bK)?bK:bQ
}b(bM).css(bL,bN)
},bH,bJ,arguments.length,null)
}
});
bm.jQuery=bm.$=b;
if(typeof define==="function"&&define.amd&&define.amd.jQuery){define("jquery",[],function(){return b
})
}})(window);
/*
 * jQuery UI 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(a,f){a.ui=a.ui||{};
if(a.ui.version){return
}a.extend(a.ui,{version:"1.8.18",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});
a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(g,h){return typeof g==="number"?this.each(function(){var k=this;
setTimeout(function(){a(k).focus();
if(h){h.call(k)
}},g)
}):this._focus.apply(this,arguments)
},scrollParent:function(){var g;
if((a.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){g=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(a.curCSS(this,"position",1))&&(/(auto|scroll)/).test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))
}).eq(0)
}else{g=this.parents().filter(function(){return(/(auto|scroll)/).test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))
}).eq(0)
}return(/fixed/).test(this.css("position"))||!g.length?a(document):g
},zIndex:function(l){if(l!==f){return this.css("zIndex",l)
}if(this.length){var h=a(this[0]),g,k;
while(h.length&&h[0]!==document){g=h.css("position");
if(g==="absolute"||g==="relative"||g==="fixed"){k=parseInt(h.css("zIndex"),10);
if(!isNaN(k)&&k!==0){return k
}}h=h.parent()
}}return 0
},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(g){g.preventDefault()
})
},enableSelection:function(){return this.unbind(".ui-disableSelection")
}});
a.each(["Width","Height"],function(k,g){var h=g==="Width"?["Left","Right"]:["Top","Bottom"],l=g.toLowerCase(),o={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};
function n(r,q,p,s){a.each(h,function(){q-=parseFloat(a.curCSS(r,"padding"+this,true))||0;
if(p){q-=parseFloat(a.curCSS(r,"border"+this+"Width",true))||0
}if(s){q-=parseFloat(a.curCSS(r,"margin"+this,true))||0
}});
return q
}a.fn["inner"+g]=function(p){if(p===f){return o["inner"+g].call(this)
}return this.each(function(){a(this).css(l,n(this,p)+"px")
})
};
a.fn["outer"+g]=function(p,q){if(typeof p!=="number"){return o["outer"+g].call(this,p)
}return this.each(function(){a(this).css(l,n(this,p,true,q)+"px")
})
}
});
function c(k,g){var o=k.nodeName.toLowerCase();
if("area"===o){var n=k.parentNode,l=n.name,h;
if(!k.href||!l||n.nodeName.toLowerCase()!=="map"){return false
}h=a("img[usemap=#"+l+"]")[0];
return !!h&&b(h)
}return(/input|select|textarea|button|object/.test(o)?!k.disabled:"a"==o?k.href||g:g)&&b(k)
}function b(g){return !a(g).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)
}).length
}a.extend(a.expr[":"],{data:function(k,h,g){return !!a.data(k,g[3])
},focusable:function(g){return c(g,!isNaN(a.attr(g,"tabindex")))
},tabbable:function(k){var g=a.attr(k,"tabindex"),h=isNaN(g);
return(h||g>=0)&&c(k,!h)
}});
a(function(){var g=document.body,h=g.appendChild(h=document.createElement("div"));
h.offsetHeight;
a.extend(h.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});
a.support.minHeight=h.offsetHeight===100;
a.support.selectstart="onselectstart" in h;
g.removeChild(h).style.display="none"
});
a.extend(a.ui,{plugin:{add:function(h,k,n){var l=a.ui[h].prototype;
for(var g in n){l.plugins[g]=l.plugins[g]||[];
l.plugins[g].push([k,n[g]])
}},call:function(g,k,h){var n=g.plugins[k];
if(!n||!g.element[0].parentNode){return
}for(var l=0;
l<n.length;
l++){if(g.options[n[l][0]]){n[l][1].apply(g.element,h)
}}}},contains:function(h,g){return document.compareDocumentPosition?h.compareDocumentPosition(g)&16:h!==g&&h.contains(g)
},hasScroll:function(l,h){if(a(l).css("overflow")==="hidden"){return false
}var g=(h&&h==="left")?"scrollLeft":"scrollTop",k=false;
if(l[g]>0){return true
}l[g]=1;
k=(l[g]>0);
l[g]=0;
return k
},isOverAxis:function(h,g,k){return(h>g)&&(h<(g+k))
},isOver:function(o,h,n,l,g,k){return a.ui.isOverAxis(o,n,g)&&a.ui.isOverAxis(h,l,k)
}})
})(jQuery);
/*
 * jQuery UI Widget 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,f){if(b.cleanData){var c=b.cleanData;
b.cleanData=function(g){for(var h=0,k;
(k=g[h])!=null;
h++){try{b(k).triggerHandler("remove")
}catch(l){}}c(g)
}
}else{var a=b.fn.remove;
b.fn.remove=function(g,h){return this.each(function(){if(!h){if(!g||b.filter(g,[this]).length){b("*",this).add([this]).each(function(){try{b(this).triggerHandler("remove")
}catch(k){}})
}}return a.call(b(this),g,h)
})
}
}b.widget=function(h,l,g){var k=h.split(".")[0],o;
h=h.split(".")[1];
o=k+"-"+h;
if(!g){g=l;
l=b.Widget
}b.expr[":"][o]=function(p){return !!b.data(p,h)
};
b[k]=b[k]||{};
b[k][h]=function(p,q){if(arguments.length){this._createWidget(p,q)
}};
var n=new l();
n.options=b.extend(true,{},n.options);
b[k][h].prototype=b.extend(true,n,{namespace:k,widgetName:h,widgetEventPrefix:b[k][h].prototype.widgetEventPrefix||h,widgetBaseClass:o},g);
b.widget.bridge(h,b[k][h])
};
b.widget.bridge=function(h,g){b.fn[h]=function(n){var k=typeof n==="string",l=Array.prototype.slice.call(arguments,1),o=this;
n=!k&&l.length?b.extend.apply(null,[true,n].concat(l)):n;
if(k&&n.charAt(0)==="_"){return o
}if(k){this.each(function(){var p=b.data(this,h),q=p&&b.isFunction(p[n])?p[n].apply(p,l):p;
if(q!==p&&q!==f){o=q;
return false
}})
}else{this.each(function(){var p=b.data(this,h);
if(p){p.option(n||{})._init()
}else{b.data(this,h,new g(n,this))
}})
}return o
}
};
b.Widget=function(g,h){if(arguments.length){this._createWidget(g,h)
}};
b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(h,k){b.data(k,this.widgetName,this);
this.element=b(k);
this.options=b.extend(true,{},this.options,this._getCreateOptions(),h);
var g=this;
this.element.bind("remove."+this.widgetName,function(){g.destroy()
});
this._create();
this._trigger("create");
this._init()
},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]
},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);
this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")
},widget:function(){return this.element
},option:function(h,k){var g=h;
if(arguments.length===0){return b.extend({},this.options)
}if(typeof h==="string"){if(k===f){return this.options[h]
}g={};
g[h]=k
}this._setOptions(g);
return this
},_setOptions:function(h){var g=this;
b.each(h,function(k,l){g._setOption(k,l)
});
return this
},_setOption:function(g,h){this.options[g]=h;
if(g==="disabled"){this.widget()[h?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",h)
}return this
},enable:function(){return this._setOption("disabled",false)
},disable:function(){return this._setOption("disabled",true)
},_trigger:function(g,h,k){var o,n,l=this.options[g];
k=k||{};
h=b.Event(h);
h.type=(g===this.widgetEventPrefix?g:this.widgetEventPrefix+g).toLowerCase();
h.target=this.element[0];
n=h.originalEvent;
if(n){for(o in n){if(!(o in h)){h[o]=n[o]
}}}this.element.trigger(h,k);
return !(b.isFunction(l)&&l.call(this.element[0],h,k)===false||h.isDefaultPrevented())
}}
})(jQuery);
/*
 * jQuery UI Mouse 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(b,c){var a=false;
b(document).mouseup(function(f){a=false
});
b.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var f=this;
this.element.bind("mousedown."+this.widgetName,function(g){return f._mouseDown(g)
}).bind("click."+this.widgetName,function(g){if(true===b.data(g.target,f.widgetName+".preventClickEvent")){b.removeData(g.target,f.widgetName+".preventClickEvent");
g.stopImmediatePropagation();
return false
}});
this.started=false
},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)
},_mouseDown:function(h){if(a){return
}(this._mouseStarted&&this._mouseUp(h));
this._mouseDownEvent=h;
var g=this,k=(h.which==1),f=(typeof this.options.cancel=="string"&&h.target.nodeName?b(h.target).closest(this.options.cancel).length:false);
if(!k||f||!this._mouseCapture(h)){return true
}this.mouseDelayMet=!this.options.delay;
if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){g.mouseDelayMet=true
},this.options.delay)
}if(this._mouseDistanceMet(h)&&this._mouseDelayMet(h)){this._mouseStarted=(this._mouseStart(h)!==false);
if(!this._mouseStarted){h.preventDefault();
return true
}}if(true===b.data(h.target,this.widgetName+".preventClickEvent")){b.removeData(h.target,this.widgetName+".preventClickEvent")
}this._mouseMoveDelegate=function(l){return g._mouseMove(l)
};
this._mouseUpDelegate=function(l){return g._mouseUp(l)
};
b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);
h.preventDefault();
a=true;
return true
},_mouseMove:function(f){if(b.browser.msie&&!(document.documentMode>=9)&&!f.button){return this._mouseUp(f)
}if(this._mouseStarted){this._mouseDrag(f);
return f.preventDefault()
}if(this._mouseDistanceMet(f)&&this._mouseDelayMet(f)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,f)!==false);
(this._mouseStarted?this._mouseDrag(f):this._mouseUp(f))
}return !this._mouseStarted
},_mouseUp:function(f){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;
if(f.target==this._mouseDownEvent.target){b.data(f.target,this.widgetName+".preventClickEvent",true)
}this._mouseStop(f)
}return false
},_mouseDistanceMet:function(f){return(Math.max(Math.abs(this._mouseDownEvent.pageX-f.pageX),Math.abs(this._mouseDownEvent.pageY-f.pageY))>=this.options.distance)
},_mouseDelayMet:function(f){return this.mouseDelayMet
},_mouseStart:function(f){},_mouseDrag:function(f){},_mouseStop:function(f){},_mouseCapture:function(f){return true
}})
})(jQuery);
(function(a,b){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper=="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"
}(this.options.addClasses&&this.element.addClass("ui-draggable"));
(this.options.disabled&&this.element.addClass("ui-draggable-disabled"));
this._mouseInit()
},destroy:function(){if(!this.element.data("draggable")){return
}this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
this._mouseDestroy();
return this
},_mouseCapture:function(c){var f=this.options;
if(this.helper||f.disabled||a(c.target).is(".ui-resizable-handle")){return false
}this.handle=this._getHandle(c);
if(!this.handle){return false
}if(f.iframeFix){a(f.iframeFix===true?"iframe":f.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(a(this).offset()).appendTo("body")
})
}return true
},_mouseStart:function(c){var f=this.options;
this.helper=this._createHelper(c);
this._cacheHelperProportions();
if(a.ui.ddmanager){a.ui.ddmanager.current=this
}this._cacheMargins();
this.cssPosition=this.helper.css("position");
this.scrollParent=this.helper.scrollParent();
this.offset=this.positionAbs=this.element.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
a.extend(this.offset,{click:{left:c.pageX-this.offset.left,top:c.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(c);
this.originalPageX=c.pageX;
this.originalPageY=c.pageY;
(f.cursorAt&&this._adjustOffsetFromHelper(f.cursorAt));
if(f.containment){this._setContainment()
}if(this._trigger("start",c)===false){this._clear();
return false
}this._cacheHelperProportions();
if(a.ui.ddmanager&&!f.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,c)
}this.helper.addClass("ui-draggable-dragging");
this._mouseDrag(c,true);
if(a.ui.ddmanager){a.ui.ddmanager.dragStart(this,c)
}return true
},_mouseDrag:function(c,g){this.position=this._generatePosition(c);
this.positionAbs=this._convertPositionTo("absolute");
if(!g){var f=this._uiHash();
if(this._trigger("drag",c,f)===false){this._mouseUp({});
return false
}this.position=f.position
}if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"
}if(a.ui.ddmanager){a.ui.ddmanager.drag(this,c)
}return false
},_mouseStop:function(f){var g=false;
if(a.ui.ddmanager&&!this.options.dropBehaviour){g=a.ui.ddmanager.drop(this,f)
}if(this.dropped){g=this.dropped;
this.dropped=false
}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original"){return false
}if((this.options.revert=="invalid"&&!g)||(this.options.revert=="valid"&&g)||this.options.revert===true||(a.isFunction(this.options.revert)&&this.options.revert.call(this.element,g))){var c=this;
a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(c._trigger("stop",f)!==false){c._clear()
}})
}else{if(this._trigger("stop",f)!==false){this._clear()
}}return false
},_mouseUp:function(c){if(this.options.iframeFix===true){a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)
})
}if(a.ui.ddmanager){a.ui.ddmanager.dragStop(this,c)
}return a.ui.mouse.prototype._mouseUp.call(this,c)
},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})
}else{this._clear()
}return this
},_getHandle:function(c){var f=!this.options.handle||!a(this.options.handle,this.element).length?true:false;
a(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==c.target){f=true
}});
return f
},_createHelper:function(f){var g=this.options;
var c=a.isFunction(g.helper)?a(g.helper.apply(this.element[0],[f])):(g.helper=="clone"?this.element.clone().removeAttr("id"):this.element);
if(!c.parents("body").length){c.appendTo((g.appendTo=="parent"?this.element[0].parentNode:g.appendTo))
}if(c[0]!=this.element[0]&&!(/(fixed|absolute)/).test(c.css("position"))){c.css("position","absolute")
}return c
},_adjustOffsetFromHelper:function(c){if(typeof c=="string"){c=c.split(" ")
}if(a.isArray(c)){c={left:+c[0],top:+c[1]||0}
}if("left" in c){this.offset.click.left=c.left+this.margins.left
}if("right" in c){this.offset.click.left=this.helperProportions.width-c.right+this.margins.left
}if("top" in c){this.offset.click.top=c.top+this.margins.top
}if("bottom" in c){this.offset.click.top=this.helperProportions.height-c.bottom+this.margins.top
}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var c=this.offsetParent.offset();
if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){c.left+=this.scrollParent.scrollLeft();
c.top+=this.scrollParent.scrollTop()
}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)){c={top:0,left:0}
}return{top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var c=this.element.position();
return{top:c.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:c.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var k=this.options;
if(k.containment=="parent"){k.containment=this.helper[0].parentNode
}if(k.containment=="document"||k.containment=="window"){this.containment=[k.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,k.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(k.containment=="document"?0:a(window).scrollLeft())+a(k.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(k.containment=="document"?0:a(window).scrollTop())+(a(k.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
}if(!(/^(document|window|parent)$/).test(k.containment)&&k.containment.constructor!=Array){var l=a(k.containment);
var g=l[0];
if(!g){return
}var h=l.offset();
var f=(a(g).css("overflow")!="hidden");
this.containment=[(parseInt(a(g).css("borderLeftWidth"),10)||0)+(parseInt(a(g).css("paddingLeft"),10)||0),(parseInt(a(g).css("borderTopWidth"),10)||0)+(parseInt(a(g).css("paddingTop"),10)||0),(f?Math.max(g.scrollWidth,g.offsetWidth):g.offsetWidth)-(parseInt(a(g).css("borderLeftWidth"),10)||0)-(parseInt(a(g).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(f?Math.max(g.scrollHeight,g.offsetHeight):g.offsetHeight)-(parseInt(a(g).css("borderTopWidth"),10)||0)-(parseInt(a(g).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];
this.relative_container=l
}else{if(k.containment.constructor==Array){this.containment=k.containment
}}},_convertPositionTo:function(h,l){if(!l){l=this.position
}var f=h=="absolute"?1:-1;
var g=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,k=(/(html|body)/i).test(c[0].tagName);
return{top:(l.top+this.offset.relative.top*f+this.offset.parent.top*f-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(k?0:c.scrollTop()))*f)),left:(l.left+this.offset.relative.left*f+this.offset.parent.left*f-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():k?0:c.scrollLeft())*f))}
},_generatePosition:function(f){var g=this.options,r=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,n=(/(html|body)/i).test(r[0].tagName);
var l=f.pageX;
var k=f.pageY;
if(this.originalPosition){var c;
if(this.containment){if(this.relative_container){var q=this.relative_container.offset();
c=[this.containment[0]+q.left,this.containment[1]+q.top,this.containment[2]+q.left,this.containment[3]+q.top]
}else{c=this.containment
}if(f.pageX-this.offset.click.left<c[0]){l=c[0]+this.offset.click.left
}if(f.pageY-this.offset.click.top<c[1]){k=c[1]+this.offset.click.top
}if(f.pageX-this.offset.click.left>c[2]){l=c[2]+this.offset.click.left
}if(f.pageY-this.offset.click.top>c[3]){k=c[3]+this.offset.click.top
}}if(g.grid){var p=g.grid[1]?this.originalPageY+Math.round((k-this.originalPageY)/g.grid[1])*g.grid[1]:this.originalPageY;
k=c?(!(p-this.offset.click.top<c[1]||p-this.offset.click.top>c[3])?p:(!(p-this.offset.click.top<c[1])?p-g.grid[1]:p+g.grid[1])):p;
var h=g.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/g.grid[0])*g.grid[0]:this.originalPageX;
l=c?(!(h-this.offset.click.left<c[0]||h-this.offset.click.left>c[2])?h:(!(h-this.offset.click.left<c[0])?h-g.grid[0]:h+g.grid[0])):h
}}return{top:(k-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(n?0:r.scrollTop())))),left:(l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():n?0:r.scrollLeft())))}
},_clear:function(){this.helper.removeClass("ui-draggable-dragging");
if(this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()
}this.helper=null;
this.cancelHelperRemoval=false
},_trigger:function(c,f,g){g=g||this._uiHash();
a.ui.plugin.call(this,c,[f,g]);
if(c=="drag"){this.positionAbs=this._convertPositionTo("absolute")
}return a.Widget.prototype._trigger.call(this,c,f,g)
},plugins:{},_uiHash:function(c){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}});
a.extend(a.ui.draggable,{version:"1.8.18"});
a.ui.plugin.add("draggable","connectToSortable",{start:function(f,h){var g=a(this).data("draggable"),k=g.options,c=a.extend({},h,{item:g.element});
g.sortables=[];
a(k.connectToSortable).each(function(){var l=a.data(this,"sortable");
if(l&&!l.options.disabled){g.sortables.push({instance:l,shouldRevert:l.options.revert});
l.refreshPositions();
l._trigger("activate",f,c)
}})
},stop:function(f,h){var g=a(this).data("draggable"),c=a.extend({},h,{item:g.element});
a.each(g.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;
g.cancelHelperRemoval=true;
this.instance.cancelHelperRemoval=false;
if(this.shouldRevert){this.instance.options.revert=true
}this.instance._mouseStop(f);
this.instance.options.helper=this.instance.options._helper;
if(g.options.helper=="original"){this.instance.currentItem.css({top:"auto",left:"auto"})
}}else{this.instance.cancelHelperRemoval=false;
this.instance._trigger("deactivate",f,c)
}})
},drag:function(f,k){var h=a(this).data("draggable"),c=this;
var g=function(p){var w=this.offset.click.top,u=this.offset.click.left;
var l=this.positionAbs.top,r=this.positionAbs.left;
var q=p.height,s=p.width;
var x=p.top,n=p.left;
return a.ui.isOver(l+w,r+u,x,n,q,s)
};
a.each(h.sortables,function(l){this.instance.positionAbs=h.positionAbs;
this.instance.helperProportions=h.helperProportions;
this.instance.offset.click=h.offset.click;
if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;
this.instance.currentItem=a(c).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",true);
this.instance.options._helper=this.instance.options.helper;
this.instance.options.helper=function(){return k.helper[0]
};
f.target=this.instance.currentItem[0];
this.instance._mouseCapture(f,true);
this.instance._mouseStart(f,true,true);
this.instance.offset.click.top=h.offset.click.top;
this.instance.offset.click.left=h.offset.click.left;
this.instance.offset.parent.left-=h.offset.parent.left-this.instance.offset.parent.left;
this.instance.offset.parent.top-=h.offset.parent.top-this.instance.offset.parent.top;
h._trigger("toSortable",f);
h.dropped=this.instance.element;
h.currentItem=h.element;
this.instance.fromOutside=h
}if(this.instance.currentItem){this.instance._mouseDrag(f)
}}else{if(this.instance.isOver){this.instance.isOver=0;
this.instance.cancelHelperRemoval=true;
this.instance.options.revert=false;
this.instance._trigger("out",f,this.instance._uiHash(this.instance));
this.instance._mouseStop(f,true);
this.instance.options.helper=this.instance.options._helper;
this.instance.currentItem.remove();
if(this.instance.placeholder){this.instance.placeholder.remove()
}h._trigger("fromSortable",f);
h.dropped=false
}}})
}});
a.ui.plugin.add("draggable","cursor",{start:function(f,g){var c=a("body"),h=a(this).data("draggable").options;
if(c.css("cursor")){h._cursor=c.css("cursor")
}c.css("cursor",h.cursor)
},stop:function(c,f){var g=a(this).data("draggable").options;
if(g._cursor){a("body").css("cursor",g._cursor)
}}});
a.ui.plugin.add("draggable","opacity",{start:function(f,g){var c=a(g.helper),h=a(this).data("draggable").options;
if(c.css("opacity")){h._opacity=c.css("opacity")
}c.css("opacity",h.opacity)
},stop:function(c,f){var g=a(this).data("draggable").options;
if(g._opacity){a(f.helper).css("opacity",g._opacity)
}}});
a.ui.plugin.add("draggable","scroll",{start:function(f,g){var c=a(this).data("draggable");
if(c.scrollParent[0]!=document&&c.scrollParent[0].tagName!="HTML"){c.overflowOffset=c.scrollParent.offset()
}},drag:function(g,h){var f=a(this).data("draggable"),k=f.options,c=false;
if(f.scrollParent[0]!=document&&f.scrollParent[0].tagName!="HTML"){if(!k.axis||k.axis!="x"){if((f.overflowOffset.top+f.scrollParent[0].offsetHeight)-g.pageY<k.scrollSensitivity){f.scrollParent[0].scrollTop=c=f.scrollParent[0].scrollTop+k.scrollSpeed
}else{if(g.pageY-f.overflowOffset.top<k.scrollSensitivity){f.scrollParent[0].scrollTop=c=f.scrollParent[0].scrollTop-k.scrollSpeed
}}}if(!k.axis||k.axis!="y"){if((f.overflowOffset.left+f.scrollParent[0].offsetWidth)-g.pageX<k.scrollSensitivity){f.scrollParent[0].scrollLeft=c=f.scrollParent[0].scrollLeft+k.scrollSpeed
}else{if(g.pageX-f.overflowOffset.left<k.scrollSensitivity){f.scrollParent[0].scrollLeft=c=f.scrollParent[0].scrollLeft-k.scrollSpeed
}}}}else{if(!k.axis||k.axis!="x"){if(g.pageY-a(document).scrollTop()<k.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()-k.scrollSpeed)
}else{if(a(window).height()-(g.pageY-a(document).scrollTop())<k.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()+k.scrollSpeed)
}}}if(!k.axis||k.axis!="y"){if(g.pageX-a(document).scrollLeft()<k.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()-k.scrollSpeed)
}else{if(a(window).width()-(g.pageX-a(document).scrollLeft())<k.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()+k.scrollSpeed)
}}}}if(c!==false&&a.ui.ddmanager&&!k.dropBehaviour){a.ui.ddmanager.prepareOffsets(f,g)
}}});
a.ui.plugin.add("draggable","snap",{start:function(f,g){var c=a(this).data("draggable"),h=c.options;
c.snapElements=[];
a(h.snap.constructor!=String?(h.snap.items||":data(draggable)"):h.snap).each(function(){var l=a(this);
var k=l.offset();
if(this!=c.element[0]){c.snapElements.push({item:this,width:l.outerWidth(),height:l.outerHeight(),top:k.top,left:k.left})
}})
},drag:function(z,u){var h=a(this).data("draggable"),w=h.options;
var D=w.snapTolerance;
var C=u.offset.left,B=C+h.helperProportions.width,g=u.offset.top,f=g+h.helperProportions.height;
for(var A=h.snapElements.length-1;
A>=0;
A--){var x=h.snapElements[A].left,s=x+h.snapElements[A].width,q=h.snapElements[A].top,F=q+h.snapElements[A].height;
if(!((x-D<C&&C<s+D&&q-D<g&&g<F+D)||(x-D<C&&C<s+D&&q-D<f&&f<F+D)||(x-D<B&&B<s+D&&q-D<g&&g<F+D)||(x-D<B&&B<s+D&&q-D<f&&f<F+D))){if(h.snapElements[A].snapping){(h.options.snap.release&&h.options.snap.release.call(h.element,z,a.extend(h._uiHash(),{snapItem:h.snapElements[A].item})))
}h.snapElements[A].snapping=false;
continue
}if(w.snapMode!="inner"){var c=Math.abs(q-f)<=D;
var E=Math.abs(F-g)<=D;
var n=Math.abs(x-B)<=D;
var p=Math.abs(s-C)<=D;
if(c){u.position.top=h._convertPositionTo("relative",{top:q-h.helperProportions.height,left:0}).top-h.margins.top
}if(E){u.position.top=h._convertPositionTo("relative",{top:F,left:0}).top-h.margins.top
}if(n){u.position.left=h._convertPositionTo("relative",{top:0,left:x-h.helperProportions.width}).left-h.margins.left
}if(p){u.position.left=h._convertPositionTo("relative",{top:0,left:s}).left-h.margins.left
}}var k=(c||E||n||p);
if(w.snapMode!="outer"){var c=Math.abs(q-g)<=D;
var E=Math.abs(F-f)<=D;
var n=Math.abs(x-C)<=D;
var p=Math.abs(s-B)<=D;
if(c){u.position.top=h._convertPositionTo("relative",{top:q,left:0}).top-h.margins.top
}if(E){u.position.top=h._convertPositionTo("relative",{top:F-h.helperProportions.height,left:0}).top-h.margins.top
}if(n){u.position.left=h._convertPositionTo("relative",{top:0,left:x}).left-h.margins.left
}if(p){u.position.left=h._convertPositionTo("relative",{top:0,left:s-h.helperProportions.width}).left-h.margins.left
}}if(!h.snapElements[A].snapping&&(c||E||n||p||k)){(h.options.snap.snap&&h.options.snap.snap.call(h.element,z,a.extend(h._uiHash(),{snapItem:h.snapElements[A].item})))
}h.snapElements[A].snapping=(c||E||n||p||k)
}}});
a.ui.plugin.add("draggable","stack",{start:function(f,g){var k=a(this).data("draggable").options;
var h=a.makeArray(a(k.stack)).sort(function(n,l){return(parseInt(a(n).css("zIndex"),10)||0)-(parseInt(a(l).css("zIndex"),10)||0)
});
if(!h.length){return
}var c=parseInt(h[0].style.zIndex)||0;
a(h).each(function(l){this.style.zIndex=c+l
});
this[0].style.zIndex=c+h.length
}});
a.ui.plugin.add("draggable","zIndex",{start:function(f,g){var c=a(g.helper),h=a(this).data("draggable").options;
if(c.css("zIndex")){h._zIndex=c.css("zIndex")
}c.css("zIndex",h.zIndex)
},stop:function(c,f){var g=a(this).data("draggable").options;
if(g._zIndex){a(f.helper).css("zIndex",g._zIndex)
}}})
})(jQuery);
(function(a,b){a.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var f=this.options,c=f.accept;
this.isover=0;
this.isout=1;
this.accept=a.isFunction(c)?c:function(g){return g.is(c)
};
this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};
a.ui.ddmanager.droppables[f.scope]=a.ui.ddmanager.droppables[f.scope]||[];
a.ui.ddmanager.droppables[f.scope].push(this);
(f.addClasses&&this.element.addClass("ui-droppable"))
},destroy:function(){var c=a.ui.ddmanager.droppables[this.options.scope];
for(var f=0;
f<c.length;
f++){if(c[f]==this){c.splice(f,1)
}}this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");
return this
},_setOption:function(c,f){if(c=="accept"){this.accept=a.isFunction(f)?f:function(g){return g.is(f)
}
}a.Widget.prototype._setOption.apply(this,arguments)
},_activate:function(f){var c=a.ui.ddmanager.current;
if(this.options.activeClass){this.element.addClass(this.options.activeClass)
}(c&&this._trigger("activate",f,this.ui(c)))
},_deactivate:function(f){var c=a.ui.ddmanager.current;
if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}(c&&this._trigger("deactivate",f,this.ui(c)))
},_over:function(f){var c=a.ui.ddmanager.current;
if(!c||(c.currentItem||c.element)[0]==this.element[0]){return
}if(this.accept.call(this.element[0],(c.currentItem||c.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)
}this._trigger("over",f,this.ui(c))
}},_out:function(f){var c=a.ui.ddmanager.current;
if(!c||(c.currentItem||c.element)[0]==this.element[0]){return
}if(this.accept.call(this.element[0],(c.currentItem||c.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}this._trigger("out",f,this.ui(c))
}},_drop:function(f,g){var c=g||a.ui.ddmanager.current;
if(!c||(c.currentItem||c.element)[0]==this.element[0]){return false
}var h=false;
this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var k=a.data(this,"droppable");
if(k.options.greedy&&!k.options.disabled&&k.options.scope==c.options.scope&&k.accept.call(k.element[0],(c.currentItem||c.element))&&a.ui.intersect(c,a.extend(k,{offset:k.element.offset()}),k.options.tolerance)){h=true;
return false
}});
if(h){return false
}if(this.accept.call(this.element[0],(c.currentItem||c.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}this._trigger("drop",f,this.ui(c));
return this.element
}return false
},ui:function(f){return{draggable:(f.currentItem||f.element),helper:f.helper,position:f.position,offset:f.positionAbs}
}});
a.extend(a.ui.droppable,{version:"1.8.18"});
a.ui.intersect=function(z,p,w){if(!p.offset){return false
}var g=(z.positionAbs||z.position.absolute).left,f=g+z.helperProportions.width,u=(z.positionAbs||z.position.absolute).top,s=u+z.helperProportions.height;
var k=p.offset.left,c=k+p.proportions.width,x=p.offset.top,q=x+p.proportions.height;
switch(w){case"fit":return(k<=g&&f<=c&&x<=u&&s<=q);
break;
case"intersect":return(k<g+(z.helperProportions.width/2)&&f-(z.helperProportions.width/2)<c&&x<u+(z.helperProportions.height/2)&&s-(z.helperProportions.height/2)<q);
break;
case"pointer":var n=((z.positionAbs||z.position.absolute).left+(z.clickOffset||z.offset.click).left),o=((z.positionAbs||z.position.absolute).top+(z.clickOffset||z.offset.click).top),h=a.ui.isOver(o,n,x,k,p.proportions.height,p.proportions.width);
return h;
break;
case"touch":return((u>=x&&u<=q)||(s>=x&&s<=q)||(u<x&&s>q))&&((g>=k&&g<=c)||(f>=k&&f<=c)||(g<k&&f>c));
break;
default:return false;
break
}};
a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(h,l){var c=a.ui.ddmanager.droppables[h.options.scope]||[];
var k=l?l.type:null;
var n=(h.currentItem||h.element).find(":data(droppable)").andSelf();
droppablesLoop:for(var g=0;
g<c.length;
g++){if(c[g].options.disabled||(h&&!c[g].accept.call(c[g].element[0],(h.currentItem||h.element)))){continue
}for(var f=0;
f<n.length;
f++){if(n[f]==c[g].element[0]){c[g].proportions.height=0;
continue droppablesLoop
}}c[g].visible=c[g].element.css("display")!="none";
if(!c[g].visible){continue
}if(k=="mousedown"){c[g]._activate.call(c[g],l)
}c[g].offset=c[g].element.offset();
c[g].proportions={width:c[g].element[0].offsetWidth,height:c[g].element[0].offsetHeight}
}},drop:function(c,f){var g=false;
a.each(a.ui.ddmanager.droppables[c.options.scope]||[],function(){if(!this.options){return
}if(!this.options.disabled&&this.visible&&a.ui.intersect(c,this,this.options.tolerance)){g=this._drop.call(this,f)||g
}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(c.currentItem||c.element))){this.isout=1;
this.isover=0;
this._deactivate.call(this,f)
}});
return g
},dragStart:function(c,f){c.element.parents(":not(body,html)").bind("scroll.droppable",function(){if(!c.options.refreshPositions){a.ui.ddmanager.prepareOffsets(c,f)
}})
},drag:function(c,f){if(c.options.refreshPositions){a.ui.ddmanager.prepareOffsets(c,f)
}a.each(a.ui.ddmanager.droppables[c.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return
}var h=a.ui.intersect(c,this,this.options.tolerance);
var l=!h&&this.isover==1?"isout":(h&&this.isover==0?"isover":null);
if(!l){return
}var k;
if(this.options.greedy){var g=this.element.parents(":data(droppable):eq(0)");
if(g.length){k=a.data(g[0],"droppable");
k.greedyChild=(l=="isover"?1:0)
}}if(k&&l=="isover"){k.isover=0;
k.isout=1;
k._out.call(k,f)
}this[l]=1;
this[l=="isout"?"isover":"isout"]=0;
this[l=="isover"?"_over":"_out"].call(this,f);
if(k&&l=="isout"){k.isout=0;
k.isover=1;
k._over.call(k,f)
}})
},dragStop:function(c,f){c.element.parents(":not(body,html)").unbind("scroll.droppable");
if(!c.options.refreshPositions){a.ui.ddmanager.prepareOffsets(c,f)
}}}
})(jQuery);
(function(c,f){c.widget("ui.resizable",c.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1000},_create:function(){var h=this,q=this.options;
this.element.addClass("ui-resizable");
c.extend(this,{_aspectRatio:!!(q.aspectRatio),aspectRatio:q.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:q.helper||q.ghost||q.animate?q.helper||"ui-resizable-helper":null});
if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){this.element.wrap(c('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));
this.element=this.element.parent().data("resizable",this.element.data("resizable"));
this.elementIsWrapper=true;
this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});
this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});
this.originalResizeStyle=this.originalElement.css("resize");
this.originalElement.css("resize","none");
this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));
this.originalElement.css({margin:this.originalElement.css("margin")});
this._proportionallyResize()
}this.handles=q.handles||(!c(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});
if(this.handles.constructor==String){if(this.handles=="all"){this.handles="n,e,s,w,se,sw,ne,nw"
}var r=this.handles.split(",");
this.handles={};
for(var k=0;
k<r.length;
k++){var p=c.trim(r[k]),g="ui-resizable-"+p;
var l=c('<div class="ui-resizable-handle '+g+'"></div>');
if(/sw|se|ne|nw/.test(p)){l.css({zIndex:++q.zIndex})
}if("se"==p){l.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
}this.handles[p]=".ui-resizable-"+p;
this.element.append(l)
}}this._renderAxis=function(w){w=w||this.element;
for(var o in this.handles){if(this.handles[o].constructor==String){this.handles[o]=c(this.handles[o],this.element).show()
}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var s=c(this.handles[o],this.element),u=0;
u=/sw|ne|nw|se|n|s/.test(o)?s.outerHeight():s.outerWidth();
var n=["padding",/ne|nw|n/.test(o)?"Top":/se|sw|s/.test(o)?"Bottom":/^e$/.test(o)?"Right":"Left"].join("");
w.css(n,u);
this._proportionallyResize()
}if(!c(this.handles[o]).length){continue
}}};
this._renderAxis(this.element);
this._handles=c(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!h.resizing){if(this.className){var n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
}h.axis=n&&n[1]?n[1]:"se"
}});
if(q.autoHide){this._handles.hide();
c(this.element).addClass("ui-resizable-autohide").hover(function(){if(q.disabled){return
}c(this).removeClass("ui-resizable-autohide");
h._handles.show()
},function(){if(q.disabled){return
}if(!h.resizing){c(this).addClass("ui-resizable-autohide");
h._handles.hide()
}})
}this._mouseInit()
},destroy:function(){this._mouseDestroy();
var g=function(k){c(k).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
};
if(this.elementIsWrapper){g(this.element);
var h=this.element;
h.after(this.originalElement.css({position:h.css("position"),width:h.outerWidth(),height:h.outerHeight(),top:h.css("top"),left:h.css("left")})).remove()
}this.originalElement.css("resize",this.originalResizeStyle);
g(this.originalElement);
return this
},_mouseCapture:function(h){var k=false;
for(var g in this.handles){if(c(this.handles[g])[0]==h.target){k=true
}}return !this.options.disabled&&k
},_mouseStart:function(k){var p=this.options,h=this.element.position(),g=this.element;
this.resizing=true;
this.documentScroll={top:c(document).scrollTop(),left:c(document).scrollLeft()};
if(g.is(".ui-draggable")||(/absolute/).test(g.css("position"))){g.css({position:"absolute",top:h.top,left:h.left})
}this._renderProxy();
var q=b(this.helper.css("left")),l=b(this.helper.css("top"));
if(p.containment){q+=c(p.containment).scrollLeft()||0;
l+=c(p.containment).scrollTop()||0
}this.offset=this.helper.offset();
this.position={left:q,top:l};
this.size=this._helper?{width:g.outerWidth(),height:g.outerHeight()}:{width:g.width(),height:g.height()};
this.originalSize=this._helper?{width:g.outerWidth(),height:g.outerHeight()}:{width:g.width(),height:g.height()};
this.originalPosition={left:q,top:l};
this.sizeDiff={width:g.outerWidth()-g.width(),height:g.outerHeight()-g.height()};
this.originalMousePosition={left:k.pageX,top:k.pageY};
this.aspectRatio=(typeof p.aspectRatio=="number")?p.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);
var n=c(".ui-resizable-"+this.axis).css("cursor");
c("body").css("cursor",n=="auto"?this.axis+"-resize":n);
g.addClass("ui-resizable-resizing");
this._propagate("start",k);
return true
},_mouseDrag:function(g){var l=this.helper,k=this.options,s={},x=this,p=this.originalMousePosition,u=this.axis;
var z=(g.pageX-p.left)||0,w=(g.pageY-p.top)||0;
var n=this._change[u];
if(!n){return false
}var r=n.apply(this,[g,z,w]),q=c.browser.msie&&c.browser.version<7,h=this.sizeDiff;
this._updateVirtualBoundaries(g.shiftKey);
if(this._aspectRatio||g.shiftKey){r=this._updateRatio(r,g)
}r=this._respectSize(r,g);
this._propagate("resize",g);
l.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});
if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()
}this._updateCache(r);
this._trigger("resize",g,this.ui());
return false
},_mouseStop:function(l){this.resizing=false;
var n=this.options,u=this;
if(this._helper){var k=this._proportionallyResizeElements,g=k.length&&(/textarea/i).test(k[0].nodeName),h=g&&c.ui.hasScroll(k[0],"left")?0:u.sizeDiff.height,q=g?0:u.sizeDiff.width;
var w={width:(u.helper.width()-q),height:(u.helper.height()-h)},p=(parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left))||null,r=(parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top))||null;
if(!n.animate){this.element.css(c.extend(w,{top:r,left:p}))
}u.helper.height(u.size.height);
u.helper.width(u.size.width);
if(this._helper&&!n.animate){this._proportionallyResize()
}}c("body").css("cursor","auto");
this.element.removeClass("ui-resizable-resizing");
this._propagate("stop",l);
if(this._helper){this.helper.remove()
}return false
},_updateVirtualBoundaries:function(k){var p=this.options,n,l,h,q,g;
g={minWidth:a(p.minWidth)?p.minWidth:0,maxWidth:a(p.maxWidth)?p.maxWidth:Infinity,minHeight:a(p.minHeight)?p.minHeight:0,maxHeight:a(p.maxHeight)?p.maxHeight:Infinity};
if(this._aspectRatio||k){n=g.minHeight*this.aspectRatio;
h=g.minWidth/this.aspectRatio;
l=g.maxHeight*this.aspectRatio;
q=g.maxWidth/this.aspectRatio;
if(n>g.minWidth){g.minWidth=n
}if(h>g.minHeight){g.minHeight=h
}if(l<g.maxWidth){g.maxWidth=l
}if(q<g.maxHeight){g.maxHeight=q
}}this._vBoundaries=g
},_updateCache:function(g){var h=this.options;
this.offset=this.helper.offset();
if(a(g.left)){this.position.left=g.left
}if(a(g.top)){this.position.top=g.top
}if(a(g.height)){this.size.height=g.height
}if(a(g.width)){this.size.width=g.width
}},_updateRatio:function(l,k){var n=this.options,p=this.position,h=this.size,g=this.axis;
if(a(l.height)){l.width=(l.height*this.aspectRatio)
}else{if(a(l.width)){l.height=(l.width/this.aspectRatio)
}}if(g=="sw"){l.left=p.left+(h.width-l.width);
l.top=null
}if(g=="nw"){l.top=p.top+(h.height-l.height);
l.left=p.left+(h.width-l.width)
}return l
},_respectSize:function(r,k){var p=this.helper,n=this._vBoundaries,z=this._aspectRatio||k.shiftKey,x=this.axis,B=a(r.width)&&n.maxWidth&&(n.maxWidth<r.width),s=a(r.height)&&n.maxHeight&&(n.maxHeight<r.height),l=a(r.width)&&n.minWidth&&(n.minWidth>r.width),A=a(r.height)&&n.minHeight&&(n.minHeight>r.height);
if(l){r.width=n.minWidth
}if(A){r.height=n.minHeight
}if(B){r.width=n.maxWidth
}if(s){r.height=n.maxHeight
}var h=this.originalPosition.left+this.originalSize.width,w=this.position.top+this.size.height;
var q=/sw|nw|w/.test(x),g=/nw|ne|n/.test(x);
if(l&&q){r.left=h-n.minWidth
}if(B&&q){r.left=h-n.maxWidth
}if(A&&g){r.top=w-n.minHeight
}if(s&&g){r.top=w-n.maxHeight
}var u=!r.width&&!r.height;
if(u&&!r.left&&r.top){r.top=null
}else{if(u&&!r.top&&r.left){r.left=null
}}return r
},_proportionallyResize:function(){var q=this.options;
if(!this._proportionallyResizeElements.length){return
}var k=this.helper||this.element;
for(var h=0;
h<this._proportionallyResizeElements.length;
h++){var l=this._proportionallyResizeElements[h];
if(!this.borderDif){var g=[l.css("borderTopWidth"),l.css("borderRightWidth"),l.css("borderBottomWidth"),l.css("borderLeftWidth")],n=[l.css("paddingTop"),l.css("paddingRight"),l.css("paddingBottom"),l.css("paddingLeft")];
this.borderDif=c.map(g,function(o,r){var p=parseInt(o,10)||0,s=parseInt(n[r],10)||0;
return p+s
})
}if(c.browser.msie&&!(!(c(k).is(":hidden")||c(k).parents(":hidden").length))){continue
}l.css({height:(k.height()-this.borderDif[0]-this.borderDif[2])||0,width:(k.width()-this.borderDif[1]-this.borderDif[3])||0})
}},_renderProxy:function(){var h=this.element,n=this.options;
this.elementOffset=h.offset();
if(this._helper){this.helper=this.helper||c('<div style="overflow:hidden;"></div>');
var g=c.browser.msie&&c.browser.version<7,k=(g?1:0),l=(g?2:-1);
this.helper.addClass(this._helper).css({width:this.element.outerWidth()+l,height:this.element.outerHeight()+l,position:"absolute",left:this.elementOffset.left-k+"px",top:this.elementOffset.top-k+"px",zIndex:++n.zIndex});
this.helper.appendTo("body").disableSelection()
}else{this.helper=this.element
}},_change:{e:function(k,h,g){return{width:this.originalSize.width+h}
},w:function(l,h,g){var p=this.options,k=this.originalSize,n=this.originalPosition;
return{left:n.left+h,width:k.width-h}
},n:function(l,h,g){var p=this.options,k=this.originalSize,n=this.originalPosition;
return{top:n.top+g,height:k.height-g}
},s:function(k,h,g){return{height:this.originalSize.height+g}
},se:function(k,h,g){return c.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[k,h,g]))
},sw:function(k,h,g){return c.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[k,h,g]))
},ne:function(k,h,g){return c.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[k,h,g]))
},nw:function(k,h,g){return c.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[k,h,g]))
}},_propagate:function(h,g){c.ui.plugin.call(this,h,[g,this.ui()]);
(h!="resize"&&this._trigger(h,g,this.ui()))
},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}
}});
c.extend(c.ui.resizable,{version:"1.8.18"});
c.ui.plugin.add("resizable","alsoResize",{start:function(h,k){var g=c(this).data("resizable"),n=g.options;
var l=function(o){c(o).each(function(){var p=c(this);
p.data("resizable-alsoresize",{width:parseInt(p.width(),10),height:parseInt(p.height(),10),left:parseInt(p.css("left"),10),top:parseInt(p.css("top"),10)})
})
};
if(typeof(n.alsoResize)=="object"&&!n.alsoResize.parentNode){if(n.alsoResize.length){n.alsoResize=n.alsoResize[0];
l(n.alsoResize)
}else{c.each(n.alsoResize,function(o){l(o)
})
}}else{l(n.alsoResize)
}},resize:function(k,n){var h=c(this).data("resizable"),p=h.options,l=h.originalSize,r=h.originalPosition;
var q={height:(h.size.height-l.height)||0,width:(h.size.width-l.width)||0,top:(h.position.top-r.top)||0,left:(h.position.left-r.left)||0},g=function(o,s){c(o).each(function(){var x=c(this),z=c(this).data("resizable-alsoresize"),w={},u=s&&s.length?s:x.parents(n.originalElement[0]).length?["width","height"]:["width","height","top","left"];
c.each(u,function(A,C){var B=(z[C]||0)+(q[C]||0);
if(B&&B>=0){w[C]=B||null
}});
x.css(w)
})
};
if(typeof(p.alsoResize)=="object"&&!p.alsoResize.nodeType){c.each(p.alsoResize,function(o,s){g(o,s)
})
}else{g(p.alsoResize)
}},stop:function(g,h){c(this).removeData("resizable-alsoresize")
}});
c.ui.plugin.add("resizable","animate",{stop:function(n,u){var w=c(this).data("resizable"),p=w.options;
var l=w._proportionallyResizeElements,g=l.length&&(/textarea/i).test(l[0].nodeName),h=g&&c.ui.hasScroll(l[0],"left")?0:w.sizeDiff.height,r=g?0:w.sizeDiff.width;
var k={width:(w.size.width-r),height:(w.size.height-h)},q=(parseInt(w.element.css("left"),10)+(w.position.left-w.originalPosition.left))||null,s=(parseInt(w.element.css("top"),10)+(w.position.top-w.originalPosition.top))||null;
w.element.animate(c.extend(k,s&&q?{top:s,left:q}:{}),{duration:p.animateDuration,easing:p.animateEasing,step:function(){var o={width:parseInt(w.element.css("width"),10),height:parseInt(w.element.css("height"),10),top:parseInt(w.element.css("top"),10),left:parseInt(w.element.css("left"),10)};
if(l&&l.length){c(l[0]).css({width:o.width,height:o.height})
}w._updateCache(o);
w._propagate("resize",n)
}})
}});
c.ui.plugin.add("resizable","containment",{start:function(h,z){var B=c(this).data("resizable"),q=B.options,s=B.element;
var k=q.containment,r=(k instanceof c)?k.get(0):(/parent/.test(k))?s.parent().get(0):k;
if(!r){return
}B.containerElement=c(r);
if(/document/.test(k)||k==document){B.containerOffset={left:0,top:0};
B.containerPosition={left:0,top:0};
B.parentData={element:c(document),left:0,top:0,width:c(document).width(),height:c(document).height()||document.body.parentNode.scrollHeight}
}else{var w=c(r),n=[];
c(["Top","Right","Left","Bottom"]).each(function(p,o){n[p]=b(w.css("padding"+o))
});
B.containerOffset=w.offset();
B.containerPosition=w.position();
B.containerSize={height:(w.innerHeight()-n[3]),width:(w.innerWidth()-n[1])};
var x=B.containerOffset,g=B.containerSize.height,u=B.containerSize.width,l=(c.ui.hasScroll(r,"left")?r.scrollWidth:u),A=(c.ui.hasScroll(r)?r.scrollHeight:g);
B.parentData={element:r,left:x.left,top:x.top,width:l,height:A}
}},resize:function(k,x){var B=c(this).data("resizable"),n=B.options,h=B.containerSize,w=B.containerOffset,s=B.size,u=B.position,z=B._aspectRatio||k.shiftKey,g={top:0,left:0},l=B.containerElement;
if(l[0]!=document&&(/static/).test(l.css("position"))){g=w
}if(u.left<(B._helper?w.left:0)){B.size.width=B.size.width+(B._helper?(B.position.left-w.left):(B.position.left-g.left));
if(z){B.size.height=B.size.width/n.aspectRatio
}B.position.left=n.helper?w.left:0
}if(u.top<(B._helper?w.top:0)){B.size.height=B.size.height+(B._helper?(B.position.top-w.top):B.position.top);
if(z){B.size.width=B.size.height*n.aspectRatio
}B.position.top=B._helper?w.top:0
}B.offset.left=B.parentData.left+B.position.left;
B.offset.top=B.parentData.top+B.position.top;
var r=Math.abs((B._helper?B.offset.left-g.left:(B.offset.left-g.left))+B.sizeDiff.width),A=Math.abs((B._helper?B.offset.top-g.top:(B.offset.top-w.top))+B.sizeDiff.height);
var q=B.containerElement.get(0)==B.element.parent().get(0),p=/relative|absolute/.test(B.containerElement.css("position"));
if(q&&p){r-=B.parentData.left
}if(r+B.size.width>=B.parentData.width){B.size.width=B.parentData.width-r;
if(z){B.size.height=B.size.width/B.aspectRatio
}}if(A+B.size.height>=B.parentData.height){B.size.height=B.parentData.height-A;
if(z){B.size.width=B.size.height*B.aspectRatio
}}},stop:function(k,u){var z=c(this).data("resizable"),l=z.options,r=z.position,s=z.containerOffset,g=z.containerPosition,n=z.containerElement;
var p=c(z.helper),A=p.offset(),x=p.outerWidth()-z.sizeDiff.width,q=p.outerHeight()-z.sizeDiff.height;
if(z._helper&&!l.animate&&(/relative/).test(n.css("position"))){c(this).css({left:A.left-g.left-s.left,width:x,height:q})
}if(z._helper&&!l.animate&&(/static/).test(n.css("position"))){c(this).css({left:A.left-g.left-s.left,width:x,height:q})
}}});
c.ui.plugin.add("resizable","ghost",{start:function(k,l){var g=c(this).data("resizable"),n=g.options,h=g.size;
g.ghost=g.originalElement.clone();
g.ghost.css({opacity:0.25,display:"block",position:"relative",height:h.height,width:h.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof n.ghost=="string"?n.ghost:"");
g.ghost.appendTo(g.helper)
},resize:function(h,k){var g=c(this).data("resizable"),l=g.options;
if(g.ghost){g.ghost.css({position:"relative",height:g.size.height,width:g.size.width})
}},stop:function(h,k){var g=c(this).data("resizable"),l=g.options;
if(g.ghost&&g.helper){g.helper.get(0).removeChild(g.ghost.get(0))
}}});
c.ui.plugin.add("resizable","grid",{resize:function(g,s){var w=c(this).data("resizable"),l=w.options,q=w.size,n=w.originalSize,p=w.originalPosition,u=w.axis,r=l._aspectRatio||g.shiftKey;
l.grid=typeof l.grid=="number"?[l.grid,l.grid]:l.grid;
var k=Math.round((q.width-n.width)/(l.grid[0]||1))*(l.grid[0]||1),h=Math.round((q.height-n.height)/(l.grid[1]||1))*(l.grid[1]||1);
if(/^(se|s|e)$/.test(u)){w.size.width=n.width+k;
w.size.height=n.height+h
}else{if(/^(ne)$/.test(u)){w.size.width=n.width+k;
w.size.height=n.height+h;
w.position.top=p.top-h
}else{if(/^(sw)$/.test(u)){w.size.width=n.width+k;
w.size.height=n.height+h;
w.position.left=p.left-k
}else{w.size.width=n.width+k;
w.size.height=n.height+h;
w.position.top=p.top-h;
w.position.left=p.left-k
}}}}});
var b=function(g){return parseInt(g,10)||0
};
var a=function(g){return !isNaN(parseInt(g,10))
}
})(jQuery);
(function(a,b){a.widget("ui.selectable",a.ui.mouse,{options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var c=this;
this.element.addClass("ui-selectable");
this.dragged=false;
var f;
this.refresh=function(){f=a(c.options.filter,c.element[0]);
f.addClass("ui-selectee");
f.each(function(){var g=a(this);
var h=g.offset();
a.data(this,"selectable-item",{element:this,$element:g,left:h.left,top:h.top,right:h.left+g.outerWidth(),bottom:h.top+g.outerHeight(),startselected:false,selected:g.hasClass("ui-selected"),selecting:g.hasClass("ui-selecting"),unselecting:g.hasClass("ui-unselecting")})
})
};
this.refresh();
this.selectees=f.addClass("ui-selectee");
this._mouseInit();
this.helper=a("<div class='ui-selectable-helper'></div>")
},destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");
this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");
this._mouseDestroy();
return this
},_mouseStart:function(g){var c=this;
this.opos=[g.pageX,g.pageY];
if(this.options.disabled){return
}var f=this.options;
this.selectees=a(f.filter,this.element[0]);
this._trigger("start",g);
a(f.appendTo).append(this.helper);
this.helper.css({left:g.clientX,top:g.clientY,width:0,height:0});
if(f.autoRefresh){this.refresh()
}this.selectees.filter(".ui-selected").each(function(){var h=a.data(this,"selectable-item");
h.startselected=true;
if(!g.metaKey&&!g.ctrlKey){h.$element.removeClass("ui-selected");
h.selected=false;
h.$element.addClass("ui-unselecting");
h.unselecting=true;
c._trigger("unselecting",g,{unselecting:h.element})
}});
a(g.target).parents().andSelf().each(function(){var k=a.data(this,"selectable-item");
if(k){var h=(!g.metaKey&&!g.ctrlKey)||!k.$element.hasClass("ui-selected");
k.$element.removeClass(h?"ui-unselecting":"ui-selected").addClass(h?"ui-selecting":"ui-unselecting");
k.unselecting=!h;
k.selecting=h;
k.selected=h;
if(h){c._trigger("selecting",g,{selecting:k.element})
}else{c._trigger("unselecting",g,{unselecting:k.element})
}return false
}})
},_mouseDrag:function(o){var f=this;
this.dragged=true;
if(this.options.disabled){return
}var h=this.options;
var g=this.opos[0],n=this.opos[1],c=o.pageX,l=o.pageY;
if(g>c){var k=c;
c=g;
g=k
}if(n>l){var k=l;
l=n;
n=k
}this.helper.css({left:g,top:n,width:c-g,height:l-n});
this.selectees.each(function(){var p=a.data(this,"selectable-item");
if(!p||p.element==f.element[0]){return
}var q=false;
if(h.tolerance=="touch"){q=(!(p.left>c||p.right<g||p.top>l||p.bottom<n))
}else{if(h.tolerance=="fit"){q=(p.left>g&&p.right<c&&p.top>n&&p.bottom<l)
}}if(q){if(p.selected){p.$element.removeClass("ui-selected");
p.selected=false
}if(p.unselecting){p.$element.removeClass("ui-unselecting");
p.unselecting=false
}if(!p.selecting){p.$element.addClass("ui-selecting");
p.selecting=true;
f._trigger("selecting",o,{selecting:p.element})
}}else{if(p.selecting){if((o.metaKey||o.ctrlKey)&&p.startselected){p.$element.removeClass("ui-selecting");
p.selecting=false;
p.$element.addClass("ui-selected");
p.selected=true
}else{p.$element.removeClass("ui-selecting");
p.selecting=false;
if(p.startselected){p.$element.addClass("ui-unselecting");
p.unselecting=true
}f._trigger("unselecting",o,{unselecting:p.element})
}}if(p.selected){if(!o.metaKey&&!o.ctrlKey&&!p.startselected){p.$element.removeClass("ui-selected");
p.selected=false;
p.$element.addClass("ui-unselecting");
p.unselecting=true;
f._trigger("unselecting",o,{unselecting:p.element})
}}}});
return false
},_mouseStop:function(g){var c=this;
this.dragged=false;
var f=this.options;
a(".ui-unselecting",this.element[0]).each(function(){var h=a.data(this,"selectable-item");
h.$element.removeClass("ui-unselecting");
h.unselecting=false;
h.startselected=false;
c._trigger("unselected",g,{unselected:h.element})
});
a(".ui-selecting",this.element[0]).each(function(){var h=a.data(this,"selectable-item");
h.$element.removeClass("ui-selecting").addClass("ui-selected");
h.selecting=false;
h.selected=true;
h.startselected=true;
c._trigger("selected",g,{selected:h.element})
});
this._trigger("stop",g);
this.helper.remove();
return false
}});
a.extend(a.ui.selectable,{version:"1.8.18"})
})(jQuery);
(function(a,b){a.widget("ui.sortable",a.ui.mouse,{widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000},_create:function(){var c=this.options;
this.containerCache={};
this.element.addClass("ui-sortable");
this.refresh();
this.floating=this.items.length?c.axis==="x"||(/left|right/).test(this.items[0].item.css("float"))||(/inline|table-cell/).test(this.items[0].item.css("display")):false;
this.offset=this.element.offset();
this._mouseInit();
this.ready=true
},destroy:function(){a.Widget.prototype.destroy.call(this);
this.element.removeClass("ui-sortable ui-sortable-disabled");
this._mouseDestroy();
for(var c=this.items.length-1;
c>=0;
c--){this.items[c].item.removeData(this.widgetName+"-item")
}return this
},_setOption:function(c,f){if(c==="disabled"){this.options[c]=f;
this.widget()[f?"addClass":"removeClass"]("ui-sortable-disabled")
}else{a.Widget.prototype._setOption.apply(this,arguments)
}},_mouseCapture:function(k,l){var h=this;
if(this.reverting){return false
}if(this.options.disabled||this.options.type=="static"){return false
}this._refreshItems(k);
var g=null,f=this,c=a(k.target).parents().each(function(){if(a.data(this,h.widgetName+"-item")==f){g=a(this);
return false
}});
if(a.data(k.target,h.widgetName+"-item")==f){g=a(k.target)
}if(!g){return false
}if(this.options.handle&&!l){var n=false;
a(this.options.handle,g).find("*").andSelf().each(function(){if(this==k.target){n=true
}});
if(!n){return false
}}this.currentItem=g;
this._removeCurrentsFromItems();
return true
},_mouseStart:function(h,k,c){var l=this.options,f=this;
this.currentContainer=this;
this.refreshPositions();
this.helper=this._createHelper(h);
this._cacheHelperProportions();
this._cacheMargins();
this.scrollParent=this.helper.scrollParent();
this.offset=this.currentItem.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
this.helper.css("position","absolute");
this.cssPosition=this.helper.css("position");
a.extend(this.offset,{click:{left:h.pageX-this.offset.left,top:h.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this._generatePosition(h);
this.originalPageX=h.pageX;
this.originalPageY=h.pageY;
(l.cursorAt&&this._adjustOffsetFromHelper(l.cursorAt));
this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
if(this.helper[0]!=this.currentItem[0]){this.currentItem.hide()
}this._createPlaceholder();
if(l.containment){this._setContainment()
}if(l.cursor){if(a("body").css("cursor")){this._storedCursor=a("body").css("cursor")
}a("body").css("cursor",l.cursor)
}if(l.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")
}this.helper.css("opacity",l.opacity)
}if(l.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")
}this.helper.css("zIndex",l.zIndex)
}if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){this.overflowOffset=this.scrollParent.offset()
}this._trigger("start",h,this._uiHash());
if(!this._preserveHelperProportions){this._cacheHelperProportions()
}if(!c){for(var g=this.containers.length-1;
g>=0;
g--){this.containers[g]._trigger("activate",h,f._uiHash(this))
}}if(a.ui.ddmanager){a.ui.ddmanager.current=this
}if(a.ui.ddmanager&&!l.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,h)
}this.dragging=true;
this.helper.addClass("ui-sortable-helper");
this._mouseDrag(h);
return true
},_mouseDrag:function(k){this.position=this._generatePosition(k);
this.positionAbs=this._convertPositionTo("absolute");
if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs
}if(this.options.scroll){var l=this.options,c=false;
if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-k.pageY<l.scrollSensitivity){this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop+l.scrollSpeed
}else{if(k.pageY-this.overflowOffset.top<l.scrollSensitivity){this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop-l.scrollSpeed
}}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-k.pageX<l.scrollSensitivity){this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft+l.scrollSpeed
}else{if(k.pageX-this.overflowOffset.left<l.scrollSensitivity){this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft-l.scrollSpeed
}}}else{if(k.pageY-a(document).scrollTop()<l.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()-l.scrollSpeed)
}else{if(a(window).height()-(k.pageY-a(document).scrollTop())<l.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()+l.scrollSpeed)
}}if(k.pageX-a(document).scrollLeft()<l.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()-l.scrollSpeed)
}else{if(a(window).width()-(k.pageX-a(document).scrollLeft())<l.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()+l.scrollSpeed)
}}}if(c!==false&&a.ui.ddmanager&&!l.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,k)
}}this.positionAbs=this._convertPositionTo("absolute");
if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"
}for(var g=this.items.length-1;
g>=0;
g--){var h=this.items[g],f=h.item[0],n=this._intersectsWithPointer(h);
if(!n){continue
}if(f!=this.currentItem[0]&&this.placeholder[n==1?"next":"prev"]()[0]!=f&&!a.ui.contains(this.placeholder[0],f)&&(this.options.type=="semi-dynamic"?!a.ui.contains(this.element[0],f):true)){this.direction=n==1?"down":"up";
if(this.options.tolerance=="pointer"||this._intersectsWithSides(h)){this._rearrange(k,h)
}else{break
}this._trigger("change",k,this._uiHash());
break
}}this._contactContainers(k);
if(a.ui.ddmanager){a.ui.ddmanager.drag(this,k)
}this._trigger("sort",k,this._uiHash());
this.lastPositionAbs=this.positionAbs;
return false
},_mouseStop:function(f,g){if(!f){return
}if(a.ui.ddmanager&&!this.options.dropBehaviour){a.ui.ddmanager.drop(this,f)
}if(this.options.revert){var c=this;
var h=c.placeholder.offset();
c.reverting=true;
a(this.helper).animate({left:h.left-this.offset.parent.left-c.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:h.top-this.offset.parent.top-c.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){c._clear(f)
})
}else{this._clear(f,g)
}return false
},cancel:function(){var c=this;
if(this.dragging){this._mouseUp({target:null});
if(this.options.helper=="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}for(var f=this.containers.length-1;
f>=0;
f--){this.containers[f]._trigger("deactivate",null,c._uiHash(this));
if(this.containers[f].containerCache.over){this.containers[f]._trigger("out",null,c._uiHash(this));
this.containers[f].containerCache.over=0
}}}if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])
}if(this.options.helper!="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()
}a.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});
if(this.domPosition.prev){a(this.domPosition.prev).after(this.currentItem)
}else{a(this.domPosition.parent).prepend(this.currentItem)
}}return this
},serialize:function(g){var c=this._getItemsAsjQuery(g&&g.connected);
var f=[];
g=g||{};
a(c).each(function(){var h=(a(g.item||this).attr(g.attribute||"id")||"").match(g.expression||(/(.+)[-=_](.+)/));
if(h){f.push((g.key||h[1]+"[]")+"="+(g.key&&g.expression?h[1]:h[2]))
}});
if(!f.length&&g.key){f.push(g.key+"=")
}return f.join("&")
},toArray:function(g){var c=this._getItemsAsjQuery(g&&g.connected);
var f=[];
g=g||{};
c.each(function(){f.push(a(g.item||this).attr(g.attribute||"id")||"")
});
return f
},_intersectsWith:function(s){var g=this.positionAbs.left,f=g+this.helperProportions.width,q=this.positionAbs.top,p=q+this.helperProportions.height;
var h=s.left,c=h+s.width,u=s.top,o=u+s.height;
var w=this.offset.click.top,n=this.offset.click.left;
var k=(q+w)>u&&(q+w)<o&&(g+n)>h&&(g+n)<c;
if(this.options.tolerance=="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>s[this.floating?"width":"height"])){return k
}else{return(h<g+(this.helperProportions.width/2)&&f-(this.helperProportions.width/2)<c&&u<q+(this.helperProportions.height/2)&&p-(this.helperProportions.height/2)<o)
}},_intersectsWithPointer:function(g){var h=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,g.top,g.height),f=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,g.left,g.width),l=h&&f,c=this._getDragVerticalDirection(),k=this._getDragHorizontalDirection();
if(!l){return false
}return this.floating?(((k&&k=="right")||c=="down")?2:1):(c&&(c=="down"?2:1))
},_intersectsWithSides:function(h){var f=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,h.top+(h.height/2),h.height),g=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,h.left+(h.width/2),h.width),c=this._getDragVerticalDirection(),k=this._getDragHorizontalDirection();
if(this.floating&&k){return((k=="right"&&g)||(k=="left"&&!g))
}else{return c&&((c=="down"&&f)||(c=="up"&&!f))
}},_getDragVerticalDirection:function(){var c=this.positionAbs.top-this.lastPositionAbs.top;
return c!=0&&(c>0?"down":"up")
},_getDragHorizontalDirection:function(){var c=this.positionAbs.left-this.lastPositionAbs.left;
return c!=0&&(c>0?"right":"left")
},refresh:function(c){this._refreshItems(c);
this.refreshPositions();
return this
},_connectWith:function(){var c=this.options;
return c.connectWith.constructor==String?[c.connectWith]:c.connectWith
},_getItemsAsjQuery:function(c){var p=this;
var l=[];
var h=[];
var n=this._connectWith();
if(n&&c){for(var g=n.length-1;
g>=0;
g--){var o=a(n[g]);
for(var f=o.length-1;
f>=0;
f--){var k=a.data(o[f],this.widgetName);
if(k&&k!=this&&!k.options.disabled){h.push([a.isFunction(k.options.items)?k.options.items.call(k.element):a(k.options.items,k.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),k])
}}}}h.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);
for(var g=h.length-1;
g>=0;
g--){h[g][0].each(function(){l.push(this)
})
}return a(l)
},_removeCurrentsFromItems:function(){var g=this.currentItem.find(":data("+this.widgetName+"-item)");
for(var f=0;
f<this.items.length;
f++){for(var c=0;
c<g.length;
c++){if(g[c]==this.items[f].item[0]){this.items.splice(f,1)
}}}},_refreshItems:function(c){this.items=[];
this.containers=[this];
var n=this.items;
var u=this;
var k=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],c,{item:this.currentItem}):a(this.options.items,this.element),this]];
var p=this._connectWith();
if(p&&this.ready){for(var h=p.length-1;
h>=0;
h--){var q=a(p[h]);
for(var g=q.length-1;
g>=0;
g--){var l=a.data(q[g],this.widgetName);
if(l&&l!=this&&!l.options.disabled){k.push([a.isFunction(l.options.items)?l.options.items.call(l.element[0],c,{item:this.currentItem}):a(l.options.items,l.element),l]);
this.containers.push(l)
}}}}for(var h=k.length-1;
h>=0;
h--){var o=k[h][1];
var f=k[h][0];
for(var g=0,r=f.length;
g<r;
g++){var s=a(f[g]);
s.data(this.widgetName+"-item",o);
n.push({item:s,instance:o,width:0,height:0,left:0,top:0})
}}},refreshPositions:function(c){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()
}for(var g=this.items.length-1;
g>=0;
g--){var h=this.items[g];
if(h.instance!=this.currentContainer&&this.currentContainer&&h.item[0]!=this.currentItem[0]){continue
}var f=this.options.toleranceElement?a(this.options.toleranceElement,h.item):h.item;
if(!c){h.width=f.outerWidth();
h.height=f.outerHeight()
}var k=f.offset();
h.left=k.left;
h.top=k.top
}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)
}else{for(var g=this.containers.length-1;
g>=0;
g--){var k=this.containers[g].element.offset();
this.containers[g].containerCache.left=k.left;
this.containers[g].containerCache.top=k.top;
this.containers[g].containerCache.width=this.containers[g].element.outerWidth();
this.containers[g].containerCache.height=this.containers[g].element.outerHeight()
}}return this
},_createPlaceholder:function(g){var c=g||this,h=c.options;
if(!h.placeholder||h.placeholder.constructor==String){var f=h.placeholder;
h.placeholder={element:function(){var k=a(document.createElement(c.currentItem[0].nodeName)).addClass(f||c.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
if(!f){k.style.visibility="hidden"
}return k
},update:function(k,l){if(f&&!h.forcePlaceholderSize){return
}if(!l.height()){l.height(c.currentItem.innerHeight()-parseInt(c.currentItem.css("paddingTop")||0,10)-parseInt(c.currentItem.css("paddingBottom")||0,10))
}if(!l.width()){l.width(c.currentItem.innerWidth()-parseInt(c.currentItem.css("paddingLeft")||0,10)-parseInt(c.currentItem.css("paddingRight")||0,10))
}}}
}c.placeholder=a(h.placeholder.element.call(c.element,c.currentItem));
c.currentItem.after(c.placeholder);
h.placeholder.update(c,c.placeholder)
},_contactContainers:function(c){var g=null,o=null;
for(var k=this.containers.length-1;
k>=0;
k--){if(a.ui.contains(this.currentItem[0],this.containers[k].element[0])){continue
}if(this._intersectsWith(this.containers[k].containerCache)){if(g&&a.ui.contains(this.containers[k].element[0],g.element[0])){continue
}g=this.containers[k];
o=k
}else{if(this.containers[k].containerCache.over){this.containers[k]._trigger("out",c,this._uiHash(this));
this.containers[k].containerCache.over=0
}}}if(!g){return
}if(this.containers.length===1){this.containers[o]._trigger("over",c,this._uiHash(this));
this.containers[o].containerCache.over=1
}else{if(this.currentContainer!=this.containers[o]){var n=10000;
var l=null;
var f=this.positionAbs[this.containers[o].floating?"left":"top"];
for(var h=this.items.length-1;
h>=0;
h--){if(!a.ui.contains(this.containers[o].element[0],this.items[h].item[0])){continue
}var p=this.items[h][this.containers[o].floating?"left":"top"];
if(Math.abs(p-f)<n){n=Math.abs(p-f);
l=this.items[h]
}}if(!l&&!this.options.dropOnEmpty){return
}this.currentContainer=this.containers[o];
l?this._rearrange(c,l,null,true):this._rearrange(c,null,this.containers[o].element,true);
this._trigger("change",c,this._uiHash());
this.containers[o]._trigger("change",c,this._uiHash(this));
this.options.placeholder.update(this.currentContainer,this.placeholder);
this.containers[o]._trigger("over",c,this._uiHash(this));
this.containers[o].containerCache.over=1
}}},_createHelper:function(f){var g=this.options;
var c=a.isFunction(g.helper)?a(g.helper.apply(this.element[0],[f,this.currentItem])):(g.helper=="clone"?this.currentItem.clone():this.currentItem);
if(!c.parents("body").length){a(g.appendTo!="parent"?g.appendTo:this.currentItem[0].parentNode)[0].appendChild(c[0])
}if(c[0]==this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}
}if(c[0].style.width==""||g.forceHelperSize){c.width(this.currentItem.width())
}if(c[0].style.height==""||g.forceHelperSize){c.height(this.currentItem.height())
}return c
},_adjustOffsetFromHelper:function(c){if(typeof c=="string"){c=c.split(" ")
}if(a.isArray(c)){c={left:+c[0],top:+c[1]||0}
}if("left" in c){this.offset.click.left=c.left+this.margins.left
}if("right" in c){this.offset.click.left=this.helperProportions.width-c.right+this.margins.left
}if("top" in c){this.offset.click.top=c.top+this.margins.top
}if("bottom" in c){this.offset.click.top=this.helperProportions.height-c.bottom+this.margins.top
}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var c=this.offsetParent.offset();
if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){c.left+=this.scrollParent.scrollLeft();
c.top+=this.scrollParent.scrollTop()
}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)){c={top:0,left:0}
}return{top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var c=this.currentItem.position();
return{top:c.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:c.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var h=this.options;
if(h.containment=="parent"){h.containment=this.helper[0].parentNode
}if(h.containment=="document"||h.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(h.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(h.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
}if(!(/^(document|window|parent)$/).test(h.containment)){var f=a(h.containment)[0];
var g=a(h.containment).offset();
var c=(a(f).css("overflow")!="hidden");
this.containment=[g.left+(parseInt(a(f).css("borderLeftWidth"),10)||0)+(parseInt(a(f).css("paddingLeft"),10)||0)-this.margins.left,g.top+(parseInt(a(f).css("borderTopWidth"),10)||0)+(parseInt(a(f).css("paddingTop"),10)||0)-this.margins.top,g.left+(c?Math.max(f.scrollWidth,f.offsetWidth):f.offsetWidth)-(parseInt(a(f).css("borderLeftWidth"),10)||0)-(parseInt(a(f).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,g.top+(c?Math.max(f.scrollHeight,f.offsetHeight):f.offsetHeight)-(parseInt(a(f).css("borderTopWidth"),10)||0)-(parseInt(a(f).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]
}},_convertPositionTo:function(h,l){if(!l){l=this.position
}var f=h=="absolute"?1:-1;
var g=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,k=(/(html|body)/i).test(c[0].tagName);
return{top:(l.top+this.offset.relative.top*f+this.offset.parent.top*f-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(k?0:c.scrollTop()))*f)),left:(l.left+this.offset.relative.left*f+this.offset.parent.left*f-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():k?0:c.scrollLeft())*f))}
},_generatePosition:function(h){var n=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,p=(/(html|body)/i).test(c[0].tagName);
if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()
}var g=h.pageX;
var f=h.pageY;
if(this.originalPosition){if(this.containment){if(h.pageX-this.offset.click.left<this.containment[0]){g=this.containment[0]+this.offset.click.left
}if(h.pageY-this.offset.click.top<this.containment[1]){f=this.containment[1]+this.offset.click.top
}if(h.pageX-this.offset.click.left>this.containment[2]){g=this.containment[2]+this.offset.click.left
}if(h.pageY-this.offset.click.top>this.containment[3]){f=this.containment[3]+this.offset.click.top
}}if(n.grid){var l=this.originalPageY+Math.round((f-this.originalPageY)/n.grid[1])*n.grid[1];
f=this.containment?(!(l-this.offset.click.top<this.containment[1]||l-this.offset.click.top>this.containment[3])?l:(!(l-this.offset.click.top<this.containment[1])?l-n.grid[1]:l+n.grid[1])):l;
var k=this.originalPageX+Math.round((g-this.originalPageX)/n.grid[0])*n.grid[0];
g=this.containment?(!(k-this.offset.click.left<this.containment[0]||k-this.offset.click.left>this.containment[2])?k:(!(k-this.offset.click.left<this.containment[0])?k-n.grid[0]:k+n.grid[0])):k
}}return{top:(f-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(p?0:c.scrollTop())))),left:(g-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():p?0:c.scrollLeft())))}
},_rearrange:function(l,k,f,h){f?f[0].appendChild(this.placeholder[0]):k.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction=="down"?k.item[0]:k.item[0].nextSibling));
this.counter=this.counter?++this.counter:1;
var g=this,c=this.counter;
window.setTimeout(function(){if(c==g.counter){g.refreshPositions(!h)
}},0)
},_clear:function(g,h){this.reverting=false;
var k=[],c=this;
if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)
}this._noFinalSort=null;
if(this.helper[0]==this.currentItem[0]){for(var f in this._storedCSS){if(this._storedCSS[f]=="auto"||this._storedCSS[f]=="static"){this._storedCSS[f]=""
}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}if(this.fromOutside&&!h){k.push(function(l){this._trigger("receive",l,this._uiHash(this.fromOutside))
})
}if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!h){k.push(function(l){this._trigger("update",l,this._uiHash())
})
}if(!a.ui.contains(this.element[0],this.currentItem[0])){if(!h){k.push(function(l){this._trigger("remove",l,this._uiHash())
})
}for(var f=this.containers.length-1;
f>=0;
f--){if(a.ui.contains(this.containers[f].element[0],this.currentItem[0])&&!h){k.push((function(l){return function(n){l._trigger("receive",n,this._uiHash(this))
}
}).call(this,this.containers[f]));
k.push((function(l){return function(n){l._trigger("update",n,this._uiHash(this))
}
}).call(this,this.containers[f]))
}}}for(var f=this.containers.length-1;
f>=0;
f--){if(!h){k.push((function(l){return function(n){l._trigger("deactivate",n,this._uiHash(this))
}
}).call(this,this.containers[f]))
}if(this.containers[f].containerCache.over){k.push((function(l){return function(n){l._trigger("out",n,this._uiHash(this))
}
}).call(this,this.containers[f]));
this.containers[f].containerCache.over=0
}}if(this._storedCursor){a("body").css("cursor",this._storedCursor)
}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)
}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex)
}this.dragging=false;
if(this.cancelHelperRemoval){if(!h){this._trigger("beforeStop",g,this._uiHash());
for(var f=0;
f<k.length;
f++){k[f].call(this,g)
}this._trigger("stop",g,this._uiHash())
}return false
}if(!h){this._trigger("beforeStop",g,this._uiHash())
}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
if(this.helper[0]!=this.currentItem[0]){this.helper.remove()
}this.helper=null;
if(!h){for(var f=0;
f<k.length;
f++){k[f].call(this,g)
}this._trigger("stop",g,this._uiHash())
}this.fromOutside=false;
return true
},_trigger:function(){if(a.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()
}},_uiHash:function(f){var c=f||this;
return{helper:c.helper,placeholder:c.placeholder||a([]),position:c.position,originalPosition:c.originalPosition,offset:c.positionAbs,item:c.currentItem,sender:f?f.element:null}
}});
a.extend(a.ui.sortable,{version:"1.8.18"})
})(jQuery);
jQuery.effects||(function(l,g){l.effects={};
l.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],function(s,r){l.fx.step[r]=function(u){if(!u.colorInit){u.start=q(u.elem,r);
u.end=o(u.end);
u.colorInit=true
}u.elem.style[r]="rgb("+Math.max(Math.min(parseInt((u.pos*(u.end[0]-u.start[0]))+u.start[0],10),255),0)+","+Math.max(Math.min(parseInt((u.pos*(u.end[1]-u.start[1]))+u.start[1],10),255),0)+","+Math.max(Math.min(parseInt((u.pos*(u.end[2]-u.start[2]))+u.start[2],10),255),0)+")"
}
});
function o(s){var r;
if(s&&s.constructor==Array&&s.length==3){return s
}if(r=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(s)){return[parseInt(r[1],10),parseInt(r[2],10),parseInt(r[3],10)]
}if(r=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(s)){return[parseFloat(r[1])*2.55,parseFloat(r[2])*2.55,parseFloat(r[3])*2.55]
}if(r=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(s)){return[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16)]
}if(r=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(s)){return[parseInt(r[1]+r[1],16),parseInt(r[2]+r[2],16),parseInt(r[3]+r[3],16)]
}if(r=/rgba\(0, 0, 0, 0\)/.exec(s)){return a.transparent
}return a[l.trim(s).toLowerCase()]
}function q(u,r){var s;
do{s=l.curCSS(u,r);
if(s!=""&&s!="transparent"||l.nodeName(u,"body")){break
}r="backgroundColor"
}while(u=u.parentNode);
return o(s)
}var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]};
var h=["add","remove","toggle"],c={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
function k(){var w=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,x={},s,u;
if(w&&w.length&&w[0]&&w[w[0]]){var r=w.length;
while(r--){s=w[r];
if(typeof w[s]=="string"){u=s.replace(/\-(\w)/g,function(z,A){return A.toUpperCase()
});
x[u]=w[s]
}}}else{for(s in w){if(typeof w[s]==="string"){x[s]=w[s]
}}}return x
}function b(s){var r,u;
for(r in s){u=s[r];
if(u==null||l.isFunction(u)||r in c||(/scrollbar/).test(r)||(!(/color/i).test(r)&&isNaN(parseFloat(u)))){delete s[r]
}}return s
}function n(r,u){var w={_:0},s;
for(s in u){if(r[s]!=u[s]){w[s]=u[s]
}}return w
}l.effects.animateClass=function(r,s,w,u){if(l.isFunction(w)){u=w;
w=null
}return this.queue(function(){var B=l(this),x=B.attr("style")||" ",C=b(k.call(this)),A,z=B.attr("class");
l.each(h,function(D,E){if(r[E]){B[E+"Class"](r[E])
}});
A=b(k.call(this));
B.attr("class",z);
B.animate(n(C,A),{queue:false,duration:s,easing:w,complete:function(){l.each(h,function(D,E){if(r[E]){B[E+"Class"](r[E])
}});
if(typeof B.attr("style")=="object"){B.attr("style").cssText="";
B.attr("style").cssText=x
}else{B.attr("style",x)
}if(u){u.apply(this,arguments)
}l.dequeue(this)
}})
})
};
l.fn.extend({_addClass:l.fn.addClass,addClass:function(s,r,w,u){return r?l.effects.animateClass.apply(this,[{add:s},r,w,u]):this._addClass(s)
},_removeClass:l.fn.removeClass,removeClass:function(s,r,w,u){return r?l.effects.animateClass.apply(this,[{remove:s},r,w,u]):this._removeClass(s)
},_toggleClass:l.fn.toggleClass,toggleClass:function(u,s,r,x,w){if(typeof s=="boolean"||s===g){if(!r){return this._toggleClass(u,s)
}else{return l.effects.animateClass.apply(this,[(s?{add:u}:{remove:u}),r,x,w])
}}else{return l.effects.animateClass.apply(this,[{toggle:u},s,r,x])
}},switchClass:function(r,u,s,x,w){return l.effects.animateClass.apply(this,[{add:u,remove:r},s,x,w])
}});
l.extend(l.effects,{version:"1.8.18",save:function(s,u){for(var r=0;
r<u.length;
r++){if(u[r]!==null){s.data("ec.storage."+u[r],s[0].style[u[r]])
}}},restore:function(s,u){for(var r=0;
r<u.length;
r++){if(u[r]!==null){s.css(u[r],s.data("ec.storage."+u[r]))
}}},setMode:function(r,s){if(s=="toggle"){s=r.is(":hidden")?"show":"hide"
}return s
},getBaseline:function(s,u){var w,r;
switch(s[0]){case"top":w=0;
break;
case"middle":w=0.5;
break;
case"bottom":w=1;
break;
default:w=s[0]/u.height
}switch(s[1]){case"left":r=0;
break;
case"center":r=0.5;
break;
case"right":r=1;
break;
default:r=s[1]/u.width
}return{x:r,y:w}
},createWrapper:function(r){if(r.parent().is(".ui-effects-wrapper")){return r.parent()
}var s={width:r.outerWidth(true),height:r.outerHeight(true),"float":r.css("float")},w=l("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),u=document.activeElement;
r.wrap(w);
if(r[0]===u||l.contains(r[0],u)){l(u).focus()
}w=r.parent();
if(r.css("position")=="static"){w.css({position:"relative"});
r.css({position:"relative"})
}else{l.extend(s,{position:r.css("position"),zIndex:r.css("z-index")});
l.each(["top","left","bottom","right"],function(x,z){s[z]=r.css(z);
if(isNaN(parseInt(s[z],10))){s[z]="auto"
}});
r.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})
}return w.css(s).show()
},removeWrapper:function(r){var s,u=document.activeElement;
if(r.parent().is(".ui-effects-wrapper")){s=r.parent().replaceWith(r);
if(r[0]===u||l.contains(r[0],u)){l(u).focus()
}return s
}return r
},setTransition:function(s,w,r,u){u=u||{};
l.each(w,function(A,z){unit=s.cssUnit(z);
if(unit[0]>0){u[z]=unit[0]*r+unit[1]
}});
return u
}});
function f(s,r,u,w){if(typeof s=="object"){w=r;
u=null;
r=s;
s=r.effect
}if(l.isFunction(r)){w=r;
u=null;
r={}
}if(typeof r=="number"||l.fx.speeds[r]){w=u;
u=r;
r={}
}if(l.isFunction(u)){w=u;
u=null
}r=r||{};
u=u||r.duration;
u=l.fx.off?0:typeof u=="number"?u:u in l.fx.speeds?l.fx.speeds[u]:l.fx.speeds._default;
w=w||r.complete;
return[s,r,u,w]
}function p(r){if(!r||typeof r==="number"||l.fx.speeds[r]){return true
}if(typeof r==="string"&&!l.effects[r]){return true
}return false
}l.fn.extend({effect:function(w,u,z,B){var s=f.apply(this,arguments),x={options:s[1],duration:s[2],callback:s[3]},A=x.options.mode,r=l.effects[w];
if(l.fx.off||!r){if(A){return this[A](x.duration,x.callback)
}else{return this.each(function(){if(x.callback){x.callback.call(this)
}})
}}return r.call(this,x)
},_show:l.fn.show,show:function(s){if(p(s)){return this._show.apply(this,arguments)
}else{var r=f.apply(this,arguments);
r[1].mode="show";
return this.effect.apply(this,r)
}},_hide:l.fn.hide,hide:function(s){if(p(s)){return this._hide.apply(this,arguments)
}else{var r=f.apply(this,arguments);
r[1].mode="hide";
return this.effect.apply(this,r)
}},__toggle:l.fn.toggle,toggle:function(s){if(p(s)||typeof s==="boolean"||l.isFunction(s)){return this.__toggle.apply(this,arguments)
}else{var r=f.apply(this,arguments);
r[1].mode="toggle";
return this.effect.apply(this,r)
}},cssUnit:function(r){var s=this.css(r),u=[];
l.each(["em","px","%","pt"],function(w,x){if(s.indexOf(x)>0){u=[parseFloat(s),x]
}});
return u
}});
l.easing.jswing=l.easing.swing;
l.extend(l.easing,{def:"easeOutQuad",swing:function(s,u,r,z,w){return l.easing[l.easing.def](s,u,r,z,w)
},easeInQuad:function(s,u,r,z,w){return z*(u/=w)*u+r
},easeOutQuad:function(s,u,r,z,w){return -z*(u/=w)*(u-2)+r
},easeInOutQuad:function(s,u,r,z,w){if((u/=w/2)<1){return z/2*u*u+r
}return -z/2*((--u)*(u-2)-1)+r
},easeInCubic:function(s,u,r,z,w){return z*(u/=w)*u*u+r
},easeOutCubic:function(s,u,r,z,w){return z*((u=u/w-1)*u*u+1)+r
},easeInOutCubic:function(s,u,r,z,w){if((u/=w/2)<1){return z/2*u*u*u+r
}return z/2*((u-=2)*u*u+2)+r
},easeInQuart:function(s,u,r,z,w){return z*(u/=w)*u*u*u+r
},easeOutQuart:function(s,u,r,z,w){return -z*((u=u/w-1)*u*u*u-1)+r
},easeInOutQuart:function(s,u,r,z,w){if((u/=w/2)<1){return z/2*u*u*u*u+r
}return -z/2*((u-=2)*u*u*u-2)+r
},easeInQuint:function(s,u,r,z,w){return z*(u/=w)*u*u*u*u+r
},easeOutQuint:function(s,u,r,z,w){return z*((u=u/w-1)*u*u*u*u+1)+r
},easeInOutQuint:function(s,u,r,z,w){if((u/=w/2)<1){return z/2*u*u*u*u*u+r
}return z/2*((u-=2)*u*u*u*u+2)+r
},easeInSine:function(s,u,r,z,w){return -z*Math.cos(u/w*(Math.PI/2))+z+r
},easeOutSine:function(s,u,r,z,w){return z*Math.sin(u/w*(Math.PI/2))+r
},easeInOutSine:function(s,u,r,z,w){return -z/2*(Math.cos(Math.PI*u/w)-1)+r
},easeInExpo:function(s,u,r,z,w){return(u==0)?r:z*Math.pow(2,10*(u/w-1))+r
},easeOutExpo:function(s,u,r,z,w){return(u==w)?r+z:z*(-Math.pow(2,-10*u/w)+1)+r
},easeInOutExpo:function(s,u,r,z,w){if(u==0){return r
}if(u==w){return r+z
}if((u/=w/2)<1){return z/2*Math.pow(2,10*(u-1))+r
}return z/2*(-Math.pow(2,-10*--u)+2)+r
},easeInCirc:function(s,u,r,z,w){return -z*(Math.sqrt(1-(u/=w)*u)-1)+r
},easeOutCirc:function(s,u,r,z,w){return z*Math.sqrt(1-(u=u/w-1)*u)+r
},easeInOutCirc:function(s,u,r,z,w){if((u/=w/2)<1){return -z/2*(Math.sqrt(1-u*u)-1)+r
}return z/2*(Math.sqrt(1-(u-=2)*u)+1)+r
},easeInElastic:function(u,z,r,D,C){var A=1.70158;
var B=0;
var w=D;
if(z==0){return r
}if((z/=C)==1){return r+D
}if(!B){B=C*0.3
}if(w<Math.abs(D)){w=D;
var A=B/4
}else{var A=B/(2*Math.PI)*Math.asin(D/w)
}return -(w*Math.pow(2,10*(z-=1))*Math.sin((z*C-A)*(2*Math.PI)/B))+r
},easeOutElastic:function(u,z,r,D,C){var A=1.70158;
var B=0;
var w=D;
if(z==0){return r
}if((z/=C)==1){return r+D
}if(!B){B=C*0.3
}if(w<Math.abs(D)){w=D;
var A=B/4
}else{var A=B/(2*Math.PI)*Math.asin(D/w)
}return w*Math.pow(2,-10*z)*Math.sin((z*C-A)*(2*Math.PI)/B)+D+r
},easeInOutElastic:function(u,z,r,D,C){var A=1.70158;
var B=0;
var w=D;
if(z==0){return r
}if((z/=C/2)==2){return r+D
}if(!B){B=C*(0.3*1.5)
}if(w<Math.abs(D)){w=D;
var A=B/4
}else{var A=B/(2*Math.PI)*Math.asin(D/w)
}if(z<1){return -0.5*(w*Math.pow(2,10*(z-=1))*Math.sin((z*C-A)*(2*Math.PI)/B))+r
}return w*Math.pow(2,-10*(z-=1))*Math.sin((z*C-A)*(2*Math.PI)/B)*0.5+D+r
},easeInBack:function(u,w,r,B,A,z){if(z==g){z=1.70158
}return B*(w/=A)*w*((z+1)*w-z)+r
},easeOutBack:function(u,w,r,B,A,z){if(z==g){z=1.70158
}return B*((w=w/A-1)*w*((z+1)*w+z)+1)+r
},easeInOutBack:function(u,w,r,B,A,z){if(z==g){z=1.70158
}if((w/=A/2)<1){return B/2*(w*w*(((z*=(1.525))+1)*w-z))+r
}return B/2*((w-=2)*w*(((z*=(1.525))+1)*w+z)+2)+r
},easeInBounce:function(s,u,r,z,w){return z-l.easing.easeOutBounce(s,w-u,0,z,w)+r
},easeOutBounce:function(s,u,r,z,w){if((u/=w)<(1/2.75)){return z*(7.5625*u*u)+r
}else{if(u<(2/2.75)){return z*(7.5625*(u-=(1.5/2.75))*u+0.75)+r
}else{if(u<(2.5/2.75)){return z*(7.5625*(u-=(2.25/2.75))*u+0.9375)+r
}else{return z*(7.5625*(u-=(2.625/2.75))*u+0.984375)+r
}}}},easeInOutBounce:function(s,u,r,z,w){if(u<w/2){return l.easing.easeInBounce(s,u*2,0,z,w)*0.5+r
}return l.easing.easeOutBounce(s,u*2-w,0,z,w)*0.5+z*0.5+r
}})
})(jQuery);
(function(a,b){a.effects.blind=function(c){return this.queue(function(){var g=a(this),f=["position","top","bottom","left","right"];
var n=a.effects.setMode(g,c.options.mode||"hide");
var l=c.options.direction||"vertical";
a.effects.save(g,f);
g.show();
var p=a.effects.createWrapper(g).css({overflow:"hidden"});
var h=(l=="vertical")?"height":"width";
var o=(l=="vertical")?p.height():p.width();
if(n=="show"){p.css(h,0)
}var k={};
k[h]=n=="show"?o:0;
p.animate(k,c.duration,c.options.easing,function(){if(n=="hide"){g.hide()
}a.effects.restore(g,f);
a.effects.removeWrapper(g);
if(c.callback){c.callback.apply(g[0],arguments)
}g.dequeue()
})
})
}
})(jQuery);
(function(a,b){a.effects.bounce=function(c){return this.queue(function(){var h=a(this),q=["position","top","bottom","left","right"];
var p=a.effects.setMode(h,c.options.mode||"effect");
var s=c.options.direction||"up";
var f=c.options.distance||20;
var g=c.options.times||5;
var l=c.duration||250;
if(/show|hide/.test(p)){q.push("opacity")
}a.effects.save(h,q);
h.show();
a.effects.createWrapper(h);
var k=(s=="up"||s=="down")?"top":"left";
var w=(s=="up"||s=="left")?"pos":"neg";
var f=c.options.distance||(k=="top"?h.outerHeight({margin:true})/3:h.outerWidth({margin:true})/3);
if(p=="show"){h.css("opacity",0).css(k,w=="pos"?-f:f)
}if(p=="hide"){f=f/(g*2)
}if(p!="hide"){g--
}if(p=="show"){var n={opacity:1};
n[k]=(w=="pos"?"+=":"-=")+f;
h.animate(n,l/2,c.options.easing);
f=f/2;
g--
}for(var o=0;
o<g;
o++){var u={},r={};
u[k]=(w=="pos"?"-=":"+=")+f;
r[k]=(w=="pos"?"+=":"-=")+f;
h.animate(u,l/2,c.options.easing).animate(r,l/2,c.options.easing);
f=(p=="hide")?f*2:f/2
}if(p=="hide"){var n={opacity:0};
n[k]=(w=="pos"?"-=":"+=")+f;
h.animate(n,l/2,c.options.easing,function(){h.hide();
a.effects.restore(h,q);
a.effects.removeWrapper(h);
if(c.callback){c.callback.apply(this,arguments)
}})
}else{var u={},r={};
u[k]=(w=="pos"?"-=":"+=")+f;
r[k]=(w=="pos"?"+=":"-=")+f;
h.animate(u,l/2,c.options.easing).animate(r,l/2,c.options.easing,function(){a.effects.restore(h,q);
a.effects.removeWrapper(h);
if(c.callback){c.callback.apply(this,arguments)
}})
}h.queue("fx",function(){h.dequeue()
});
h.dequeue()
})
}
})(jQuery);
(function(a,b){a.effects.clip=function(c){return this.queue(function(){var k=a(this),p=["position","top","bottom","left","right","height","width"];
var o=a.effects.setMode(k,c.options.mode||"hide");
var q=c.options.direction||"vertical";
a.effects.save(k,p);
k.show();
var f=a.effects.createWrapper(k).css({overflow:"hidden"});
var h=k[0].tagName=="IMG"?f:k;
var l={size:(q=="vertical")?"height":"width",position:(q=="vertical")?"top":"left"};
var g=(q=="vertical")?h.height():h.width();
if(o=="show"){h.css(l.size,0);
h.css(l.position,g/2)
}var n={};
n[l.size]=o=="show"?g:0;
n[l.position]=o=="show"?0:g/2;
h.animate(n,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){if(o=="hide"){k.hide()
}a.effects.restore(k,p);
a.effects.removeWrapper(k);
if(c.callback){c.callback.apply(k[0],arguments)
}k.dequeue()
}})
})
}
})(jQuery);
(function(a,b){a.effects.drop=function(c){return this.queue(function(){var h=a(this),g=["position","top","bottom","left","right","opacity"];
var o=a.effects.setMode(h,c.options.mode||"hide");
var n=c.options.direction||"left";
a.effects.save(h,g);
h.show();
a.effects.createWrapper(h);
var k=(n=="up"||n=="down")?"top":"left";
var f=(n=="up"||n=="left")?"pos":"neg";
var p=c.options.distance||(k=="top"?h.outerHeight({margin:true})/2:h.outerWidth({margin:true})/2);
if(o=="show"){h.css("opacity",0).css(k,f=="pos"?-p:p)
}var l={opacity:o=="show"?1:0};
l[k]=(o=="show"?(f=="pos"?"+=":"-="):(f=="pos"?"-=":"+="))+p;
h.animate(l,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){if(o=="hide"){h.hide()
}a.effects.restore(h,g);
a.effects.removeWrapper(h);
if(c.callback){c.callback.apply(this,arguments)
}h.dequeue()
}})
})
}
})(jQuery);
(function(a,b){a.effects.explode=function(c){return this.queue(function(){var o=c.options.pieces?Math.round(Math.sqrt(c.options.pieces)):3;
var h=c.options.pieces?Math.round(Math.sqrt(c.options.pieces)):3;
c.options.mode=c.options.mode=="toggle"?(a(this).is(":visible")?"hide":"show"):c.options.mode;
var n=a(this).show().css("visibility","hidden");
var p=n.offset();
p.top-=parseInt(n.css("marginTop"),10)||0;
p.left-=parseInt(n.css("marginLeft"),10)||0;
var l=n.outerWidth(true);
var f=n.outerHeight(true);
for(var k=0;
k<o;
k++){for(var g=0;
g<h;
g++){n.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-g*(l/h),top:-k*(f/o)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:l/h,height:f/o,left:p.left+g*(l/h)+(c.options.mode=="show"?(g-Math.floor(h/2))*(l/h):0),top:p.top+k*(f/o)+(c.options.mode=="show"?(k-Math.floor(o/2))*(f/o):0),opacity:c.options.mode=="show"?0:1}).animate({left:p.left+g*(l/h)+(c.options.mode=="show"?0:(g-Math.floor(h/2))*(l/h)),top:p.top+k*(f/o)+(c.options.mode=="show"?0:(k-Math.floor(o/2))*(f/o)),opacity:c.options.mode=="show"?1:0},c.duration||500)
}}setTimeout(function(){c.options.mode=="show"?n.css({visibility:"visible"}):n.css({visibility:"visible"}).hide();
if(c.callback){c.callback.apply(n[0])
}n.dequeue();
a("div.ui-effects-explode").remove()
},c.duration||500)
})
}
})(jQuery);
(function(a,b){a.effects.fade=function(c){return this.queue(function(){var f=a(this),g=a.effects.setMode(f,c.options.mode||"hide");
f.animate({opacity:g},{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){(c.callback&&c.callback.apply(this,arguments));
f.dequeue()
}})
})
}
})(jQuery);
(function(a,b){a.effects.fold=function(c){return this.queue(function(){var h=a(this),q=["position","top","bottom","left","right"];
var n=a.effects.setMode(h,c.options.mode||"hide");
var w=c.options.size||15;
var u=!(!c.options.horizFirst);
var l=c.duration?c.duration/2:a.fx.speeds._default/2;
a.effects.save(h,q);
h.show();
var g=a.effects.createWrapper(h).css({overflow:"hidden"});
var o=((n=="show")!=u);
var k=o?["width","height"]:["height","width"];
var f=o?[g.width(),g.height()]:[g.height(),g.width()];
var p=/([0-9]+)%/.exec(w);
if(p){w=parseInt(p[1],10)/100*f[n=="hide"?0:1]
}if(n=="show"){g.css(u?{height:0,width:w}:{height:w,width:0})
}var s={},r={};
s[k[0]]=n=="show"?f[0]:w;
r[k[1]]=n=="show"?f[1]:0;
g.animate(s,l,c.options.easing).animate(r,l,c.options.easing,function(){if(n=="hide"){h.hide()
}a.effects.restore(h,q);
a.effects.removeWrapper(h);
if(c.callback){c.callback.apply(h[0],arguments)
}h.dequeue()
})
})
}
})(jQuery);
(function(a,b){a.effects.highlight=function(c){return this.queue(function(){var g=a(this),f=["backgroundImage","backgroundColor","opacity"],k=a.effects.setMode(g,c.options.mode||"show"),h={backgroundColor:g.css("backgroundColor")};
if(k=="hide"){h.opacity=0
}a.effects.save(g,f);
g.show().css({backgroundImage:"none",backgroundColor:c.options.color||"#ffff99"}).animate(h,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){(k=="hide"&&g.hide());
a.effects.restore(g,f);
(k=="show"&&!a.support.opacity&&this.style.removeAttribute("filter"));
(c.callback&&c.callback.apply(this,arguments));
g.dequeue()
}})
})
}
})(jQuery);
(function(a,b){a.effects.pulsate=function(c){return this.queue(function(){var g=a(this),h=a.effects.setMode(g,c.options.mode||"show");
times=((c.options.times||5)*2)-1;
duration=c.duration?c.duration/2:a.fx.speeds._default/2,isVisible=g.is(":visible"),animateTo=0;
if(!isVisible){g.css("opacity",0).show();
animateTo=1
}if((h=="hide"&&isVisible)||(h=="show"&&!isVisible)){times--
}for(var f=0;
f<times;
f++){g.animate({opacity:animateTo},duration,c.options.easing);
animateTo=(animateTo+1)%2
}g.animate({opacity:animateTo},duration,c.options.easing,function(){if(animateTo==0){g.hide()
}(c.callback&&c.callback.apply(this,arguments))
});
g.queue("fx",function(){g.dequeue()
}).dequeue()
})
}
})(jQuery);
(function(a,b){a.effects.puff=function(c){return this.queue(function(){var k=a(this),l=a.effects.setMode(k,c.options.mode||"hide"),h=parseInt(c.options.percent,10)||150,g=h/100,f={height:k.height(),width:k.width()};
a.extend(c.options,{fade:true,mode:l,percent:l=="hide"?h:100,from:l=="hide"?f:{height:f.height*g,width:f.width*g}});
k.effect("scale",c.options,c.duration,c.callback);
k.dequeue()
})
};
a.effects.scale=function(c){return this.queue(function(){var l=a(this);
var g=a.extend(true,{},c.options);
var p=a.effects.setMode(l,c.options.mode||"effect");
var n=parseInt(c.options.percent,10)||(parseInt(c.options.percent,10)==0?0:(p=="hide"?0:100));
var o=c.options.direction||"both";
var f=c.options.origin;
if(p!="effect"){g.origin=f||["middle","center"];
g.restore=true
}var k={height:l.height(),width:l.width()};
l.from=c.options.from||(p=="show"?{height:0,width:0}:k);
var h={y:o!="horizontal"?(n/100):1,x:o!="vertical"?(n/100):1};
l.to={height:k.height*h.y,width:k.width*h.x};
if(c.options.fade){if(p=="show"){l.from.opacity=0;
l.to.opacity=1
}if(p=="hide"){l.from.opacity=1;
l.to.opacity=0
}}g.from=l.from;
g.to=l.to;
g.mode=p;
l.effect("size",g,c.duration,c.callback);
l.dequeue()
})
};
a.effects.size=function(c){return this.queue(function(){var f=a(this),u=["position","top","bottom","left","right","width","height","overflow","opacity"];
var s=["position","top","bottom","left","right","overflow","opacity"];
var p=["width","height","overflow"];
var x=["fontSize"];
var q=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"];
var k=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"];
var l=a.effects.setMode(f,c.options.mode||"effect");
var o=c.options.restore||false;
var h=c.options.scale||"both";
var w=c.options.origin;
var g={height:f.height(),width:f.width()};
f.from=c.options.from||g;
f.to=c.options.to||g;
if(w){var n=a.effects.getBaseline(w,g);
f.from.top=(g.height-f.from.height)*n.y;
f.from.left=(g.width-f.from.width)*n.x;
f.to.top=(g.height-f.to.height)*n.y;
f.to.left=(g.width-f.to.width)*n.x
}var r={from:{y:f.from.height/g.height,x:f.from.width/g.width},to:{y:f.to.height/g.height,x:f.to.width/g.width}};
if(h=="box"||h=="both"){if(r.from.y!=r.to.y){u=u.concat(q);
f.from=a.effects.setTransition(f,q,r.from.y,f.from);
f.to=a.effects.setTransition(f,q,r.to.y,f.to)
}if(r.from.x!=r.to.x){u=u.concat(k);
f.from=a.effects.setTransition(f,k,r.from.x,f.from);
f.to=a.effects.setTransition(f,k,r.to.x,f.to)
}}if(h=="content"||h=="both"){if(r.from.y!=r.to.y){u=u.concat(x);
f.from=a.effects.setTransition(f,x,r.from.y,f.from);
f.to=a.effects.setTransition(f,x,r.to.y,f.to)
}}a.effects.save(f,o?u:s);
f.show();
a.effects.createWrapper(f);
f.css("overflow","hidden").css(f.from);
if(h=="content"||h=="both"){q=q.concat(["marginTop","marginBottom"]).concat(x);
k=k.concat(["marginLeft","marginRight"]);
p=u.concat(q).concat(k);
f.find("*[width]").each(function(){child=a(this);
if(o){a.effects.save(child,p)
}var z={height:child.height(),width:child.width()};
child.from={height:z.height*r.from.y,width:z.width*r.from.x};
child.to={height:z.height*r.to.y,width:z.width*r.to.x};
if(r.from.y!=r.to.y){child.from=a.effects.setTransition(child,q,r.from.y,child.from);
child.to=a.effects.setTransition(child,q,r.to.y,child.to)
}if(r.from.x!=r.to.x){child.from=a.effects.setTransition(child,k,r.from.x,child.from);
child.to=a.effects.setTransition(child,k,r.to.x,child.to)
}child.css(child.from);
child.animate(child.to,c.duration,c.options.easing,function(){if(o){a.effects.restore(child,p)
}})
})
}f.animate(f.to,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){if(f.to.opacity===0){f.css("opacity",f.from.opacity)
}if(l=="hide"){f.hide()
}a.effects.restore(f,o?u:s);
a.effects.removeWrapper(f);
if(c.callback){c.callback.apply(this,arguments)
}f.dequeue()
}})
})
}
})(jQuery);
(function(a,b){a.effects.shake=function(c){return this.queue(function(){var h=a(this),q=["position","top","bottom","left","right"];
var p=a.effects.setMode(h,c.options.mode||"effect");
var s=c.options.direction||"left";
var f=c.options.distance||20;
var g=c.options.times||3;
var l=c.duration||c.options.duration||140;
a.effects.save(h,q);
h.show();
a.effects.createWrapper(h);
var k=(s=="up"||s=="down")?"top":"left";
var w=(s=="up"||s=="left")?"pos":"neg";
var n={},u={},r={};
n[k]=(w=="pos"?"-=":"+=")+f;
u[k]=(w=="pos"?"+=":"-=")+f*2;
r[k]=(w=="pos"?"-=":"+=")+f*2;
h.animate(n,l,c.options.easing);
for(var o=1;
o<g;
o++){h.animate(u,l,c.options.easing).animate(r,l,c.options.easing)
}h.animate(u,l,c.options.easing).animate(n,l/2,c.options.easing,function(){a.effects.restore(h,q);
a.effects.removeWrapper(h);
if(c.callback){c.callback.apply(this,arguments)
}});
h.queue("fx",function(){h.dequeue()
});
h.dequeue()
})
}
})(jQuery);
(function(a,b){a.effects.slide=function(c){return this.queue(function(){var h=a(this),g=["position","top","bottom","left","right"];
var o=a.effects.setMode(h,c.options.mode||"show");
var n=c.options.direction||"left";
a.effects.save(h,g);
h.show();
a.effects.createWrapper(h).css({overflow:"hidden"});
var k=(n=="up"||n=="down")?"top":"left";
var f=(n=="up"||n=="left")?"pos":"neg";
var p=c.options.distance||(k=="top"?h.outerHeight({margin:true}):h.outerWidth({margin:true}));
if(o=="show"){h.css(k,f=="pos"?(isNaN(p)?"-"+p:-p):p)
}var l={};
l[k]=(o=="show"?(f=="pos"?"+=":"-="):(f=="pos"?"-=":"+="))+p;
h.animate(l,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){if(o=="hide"){h.hide()
}a.effects.restore(h,g);
a.effects.removeWrapper(h);
if(c.callback){c.callback.apply(this,arguments)
}h.dequeue()
}})
})
}
})(jQuery);
(function(a,b){a.effects.transfer=function(c){return this.queue(function(){var k=a(this),n=a(c.options.to),h=n.offset(),l={top:h.top,left:h.left,height:n.innerHeight(),width:n.innerWidth()},g=k.offset(),f=a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(c.options.className).css({top:g.top,left:g.left,height:k.innerHeight(),width:k.innerWidth(),position:"absolute"}).animate(l,c.duration,c.options.easing,function(){f.remove();
(c.callback&&c.callback.apply(k[0],arguments));
k.dequeue()
})
})
}
})(jQuery);
(function(a,b){a.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()
}},_create:function(){var c=this,f=c.options;
c.running=0;
c.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");
c.headers=c.element.find(f.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){if(f.disabled){return
}a(this).addClass("ui-state-hover")
}).bind("mouseleave.accordion",function(){if(f.disabled){return
}a(this).removeClass("ui-state-hover")
}).bind("focus.accordion",function(){if(f.disabled){return
}a(this).addClass("ui-state-focus")
}).bind("blur.accordion",function(){if(f.disabled){return
}a(this).removeClass("ui-state-focus")
});
c.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
if(f.navigation){var g=c.element.find("a").filter(f.navigationFilter).eq(0);
if(g.length){var h=g.closest(".ui-accordion-header");
if(h.length){c.active=h
}else{c.active=g.closest(".ui-accordion-content").prev()
}}}c.active=c._findActive(c.active||f.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");
c.active.next().addClass("ui-accordion-content-active");
c._createIcons();
c.resize();
c.element.attr("role","tablist");
c.headers.attr("role","tab").bind("keydown.accordion",function(k){return c._keydown(k)
}).next().attr("role","tabpanel");
c.headers.not(c.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide();
if(!c.active.length){c.headers.eq(0).attr("tabIndex",0)
}else{c.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0})
}if(!a.browser.safari){c.headers.find("a").attr("tabIndex",-1)
}if(f.event){c.headers.bind(f.event.split(" ").join(".accordion ")+".accordion",function(k){c._clickHandler.call(c,k,this);
k.preventDefault()
})
}},_createIcons:function(){var c=this.options;
if(c.icons){a("<span></span>").addClass("ui-icon "+c.icons.header).prependTo(this.headers);
this.active.children(".ui-icon").toggleClass(c.icons.header).toggleClass(c.icons.headerSelected);
this.element.addClass("ui-accordion-icons")
}},_destroyIcons:function(){this.headers.children(".ui-icon").remove();
this.element.removeClass("ui-accordion-icons")
},destroy:function(){var c=this.options;
this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");
this.headers.find("a").removeAttr("tabIndex");
this._destroyIcons();
var f=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
if(c.autoHeight||c.fillHeight){f.css("height","")
}return a.Widget.prototype.destroy.call(this)
},_setOption:function(c,f){a.Widget.prototype._setOption.apply(this,arguments);
if(c=="active"){this.activate(f)
}if(c=="icons"){this._destroyIcons();
if(f){this._createIcons()
}}if(c=="disabled"){this.headers.add(this.headers.next())[f?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")
}},_keydown:function(h){if(this.options.disabled||h.altKey||h.ctrlKey){return
}var k=a.ui.keyCode,g=this.headers.length,c=this.headers.index(h.target),f=false;
switch(h.keyCode){case k.RIGHT:case k.DOWN:f=this.headers[(c+1)%g];
break;
case k.LEFT:case k.UP:f=this.headers[(c-1+g)%g];
break;
case k.SPACE:case k.ENTER:this._clickHandler({target:h.target},h.target);
h.preventDefault()
}if(f){a(h.target).attr("tabIndex",-1);
a(f).attr("tabIndex",0);
f.focus();
return false
}return true
},resize:function(){var c=this.options,g;
if(c.fillSpace){if(a.browser.msie){var f=this.element.parent().css("overflow");
this.element.parent().css("overflow","hidden")
}g=this.element.parent().height();
if(a.browser.msie){this.element.parent().css("overflow",f)
}this.headers.each(function(){g-=a(this).outerHeight(true)
});
this.headers.next().each(function(){a(this).height(Math.max(0,g-a(this).innerHeight()+a(this).height()))
}).css("overflow","auto")
}else{if(c.autoHeight){g=0;
this.headers.next().each(function(){g=Math.max(g,a(this).height("").height())
}).height(g)
}}return this
},activate:function(c){this.options.active=c;
var f=this._findActive(c)[0];
this._clickHandler({target:f},f);
return this
},_findActive:function(c){return c?typeof c==="number"?this.headers.filter(":eq("+c+")"):this.headers.not(this.headers.not(c)):c===false?a([]):this.headers.filter(":eq(0)")
},_clickHandler:function(c,k){var q=this.options;
if(q.disabled){return
}if(!c.target){if(!q.collapsible){return
}this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(q.icons.headerSelected).addClass(q.icons.header);
this.active.next().addClass("ui-accordion-content-active");
var n=this.active.next(),h={options:q,newHeader:a([]),oldHeader:q.active,newContent:a([]),oldContent:n},f=(this.active=a([]));
this._toggle(f,n,h);
return
}var l=a(c.currentTarget||k),o=l[0]===this.active[0];
q.active=q.collapsible&&o?false:this.headers.index(l);
if(this.running||(!q.collapsible&&o)){return
}var g=this.active,f=l.next(),n=this.active.next(),h={options:q,newHeader:o&&q.collapsible?a([]):l,oldHeader:this.active,newContent:o&&q.collapsible?a([]):f,oldContent:n},p=this.headers.index(this.active[0])>this.headers.index(l[0]);
this.active=o?a([]):l;
this._toggle(f,n,h,o,p);
g.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(q.icons.headerSelected).addClass(q.icons.header);
if(!o){l.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(q.icons.header).addClass(q.icons.headerSelected);
l.next().addClass("ui-accordion-content-active")
}return
},_toggle:function(c,n,k,o,p){var r=this,s=r.options;
r.toShow=c;
r.toHide=n;
r.data=k;
var f=function(){if(!r){return
}return r._completed.apply(r,arguments)
};
r._trigger("changestart",null,r.data);
r.running=n.size()===0?c.size():n.size();
if(s.animated){var h={};
if(s.collapsible&&o){h={toShow:a([]),toHide:n,complete:f,down:p,autoHeight:s.autoHeight||s.fillSpace}
}else{h={toShow:c,toHide:n,complete:f,down:p,autoHeight:s.autoHeight||s.fillSpace}
}if(!s.proxied){s.proxied=s.animated
}if(!s.proxiedDuration){s.proxiedDuration=s.duration
}s.animated=a.isFunction(s.proxied)?s.proxied(h):s.proxied;
s.duration=a.isFunction(s.proxiedDuration)?s.proxiedDuration(h):s.proxiedDuration;
var q=a.ui.accordion.animations,g=s.duration,l=s.animated;
if(l&&!q[l]&&!a.easing[l]){l="slide"
}if(!q[l]){q[l]=function(u){this.slide(u,{easing:l,duration:g||700})
}
}q[l](h)
}else{if(s.collapsible&&o){c.toggle()
}else{n.hide();
c.show()
}f(true)
}n.prev().attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).blur();
c.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()
},_completed:function(c){this.running=c?0:--this.running;
if(this.running){return
}if(this.options.clearStyle){this.toShow.add(this.toHide).css({height:"",overflow:""})
}this.toHide.removeClass("ui-accordion-content-active");
if(this.toHide.length){this.toHide.parent()[0].className=this.toHide.parent()[0].className
}this._trigger("change",null,this.data)
}});
a.extend(a.ui.accordion,{version:"1.8.18",animations:{slide:function(p,n){p=a.extend({easing:"swing",duration:300},p,n);
if(!p.toHide.size()){p.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},p);
return
}if(!p.toShow.size()){p.toHide.animate({height:"hide",paddingTop:"hide",paddingBottom:"hide"},p);
return
}var f=p.toShow.css("overflow"),l=0,g={},k={},h=["height","paddingTop","paddingBottom"],c;
var o=p.toShow;
c=o[0].style.width;
o.width(o.parent().width()-parseFloat(o.css("paddingLeft"))-parseFloat(o.css("paddingRight"))-(parseFloat(o.css("borderLeftWidth"))||0)-(parseFloat(o.css("borderRightWidth"))||0));
a.each(h,function(q,s){k[s]="hide";
var r=(""+a.css(p.toShow[0],s)).match(/^([\d+-.]+)(.*)$/);
g[s]={value:r[1],unit:r[2]||"px"}
});
p.toShow.css({height:0,overflow:"hidden"}).show();
p.toHide.filter(":hidden").each(p.complete).end().filter(":visible").animate(k,{step:function(q,r){if(r.prop=="height"){l=(r.end-r.start===0)?0:(r.now-r.start)/(r.end-r.start)
}p.toShow[0].style[r.prop]=(l*g[r.prop].value)+g[r.prop].unit
},duration:p.duration,easing:p.easing,complete:function(){if(!p.autoHeight){p.toShow.css("height","")
}p.toShow.css({width:c,overflow:f});
p.complete()
}})
},bounceslide:function(c){this.slide(c,{easing:c.down?"easeOutBounce":"swing",duration:c.down?1000:200})
}}})
})(jQuery);
(function(a,b){var c=0;
a.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var f=this,h=this.element[0].ownerDocument,g;
this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(k){if(f.options.disabled||f.element.propAttr("readOnly")){return
}g=false;
var l=a.ui.keyCode;
switch(k.keyCode){case l.PAGE_UP:f._move("previousPage",k);
break;
case l.PAGE_DOWN:f._move("nextPage",k);
break;
case l.UP:f._move("previous",k);
k.preventDefault();
break;
case l.DOWN:f._move("next",k);
k.preventDefault();
break;
case l.ENTER:case l.NUMPAD_ENTER:if(f.menu.active){g=true;
k.preventDefault()
}case l.TAB:if(!f.menu.active){return
}f.menu.select(k);
break;
case l.ESCAPE:f.element.val(f.term);
f.close(k);
break;
default:clearTimeout(f.searching);
f.searching=setTimeout(function(){if(f.term!=f.element.val()){f.selectedItem=null;
f.search(null,k)
}},f.options.delay);
break
}}).bind("keypress.autocomplete",function(k){if(g){g=false;
k.preventDefault()
}}).bind("focus.autocomplete",function(){if(f.options.disabled){return
}f.selectedItem=null;
f.previous=f.element.val()
}).bind("blur.autocomplete",function(k){if(f.options.disabled){return
}clearTimeout(f.searching);
f.closing=setTimeout(function(){f.close(k);
f._change(k)
},150)
});
this._initSource();
this.response=function(){return f._response.apply(f,arguments)
};
this.menu=a("<ul></ul>").addClass("ui-autocomplete").appendTo(a(this.options.appendTo||"body",h)[0]).mousedown(function(k){var l=f.menu.element[0];
if(!a(k.target).closest(".ui-menu-item").length){setTimeout(function(){a(document).one("mousedown",function(n){if(n.target!==f.element[0]&&n.target!==l&&!a.ui.contains(l,n.target)){f.close()
}})
},1)
}setTimeout(function(){clearTimeout(f.closing)
},13)
}).menu({focus:function(l,n){var k=n.item.data("item.autocomplete");
if(false!==f._trigger("focus",l,{item:k})){if(/^key/.test(l.originalEvent.type)){f.element.val(k.value)
}}},selected:function(n,o){var l=o.item.data("item.autocomplete"),k=f.previous;
if(f.element[0]!==h.activeElement){f.element.focus();
f.previous=k;
setTimeout(function(){f.previous=k;
f.selectedItem=l
},1)
}if(false!==f._trigger("select",n,{item:l})){f.element.val(l.value)
}f.term=f.element.val();
f.close(n);
f.selectedItem=l
},blur:function(k,l){if(f.menu.element.is(":visible")&&(f.element.val()!==f.term)){f.element.val(f.term)
}}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");
if(a.fn.bgiframe){this.menu.element.bgiframe()
}f.beforeunloadHandler=function(){f.element.removeAttr("autocomplete")
};
a(window).bind("beforeunload",f.beforeunloadHandler)
},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");
this.menu.element.remove();
a(window).unbind("beforeunload",this.beforeunloadHandler);
a.Widget.prototype.destroy.call(this)
},_setOption:function(f,g){a.Widget.prototype._setOption.apply(this,arguments);
if(f==="source"){this._initSource()
}if(f==="appendTo"){this.menu.element.appendTo(a(g||"body",this.element[0].ownerDocument)[0])
}if(f==="disabled"&&g&&this.xhr){this.xhr.abort()
}},_initSource:function(){var f=this,h,g;
if(a.isArray(this.options.source)){h=this.options.source;
this.source=function(l,k){k(a.ui.autocomplete.filter(h,l.term))
}
}else{if(typeof this.options.source==="string"){g=this.options.source;
this.source=function(l,k){if(f.xhr){f.xhr.abort()
}f.xhr=a.ajax({url:g,data:l,dataType:"json",context:{autocompleteRequest:++c},success:function(o,n){if(this.autocompleteRequest===c){k(o)
}},error:function(){if(this.autocompleteRequest===c){k([])
}}})
}
}else{this.source=this.options.source
}}},search:function(g,f){g=g!=null?g:this.element.val();
this.term=this.element.val();
if(g.length<this.options.minLength){return this.close(f)
}clearTimeout(this.closing);
if(this._trigger("search",f)===false){return
}return this._search(g)
},_search:function(f){this.pending++;
this.element.addClass("ui-autocomplete-loading");
this.source({term:f},this.response)
},_response:function(f){if(!this.options.disabled&&f&&f.length){f=this._normalize(f);
this._suggest(f);
this._trigger("open")
}else{this.close()
}this.pending--;
if(!this.pending){this.element.removeClass("ui-autocomplete-loading")
}},close:function(f){clearTimeout(this.closing);
if(this.menu.element.is(":visible")){this.menu.element.hide();
this.menu.deactivate();
this._trigger("close",f)
}},_change:function(f){if(this.previous!==this.element.val()){this._trigger("change",f,{item:this.selectedItem})
}},_normalize:function(f){if(f.length&&f[0].label&&f[0].value){return f
}return a.map(f,function(g){if(typeof g==="string"){return{label:g,value:g}
}return a.extend({label:g.label||g.value,value:g.value||g.label},g)
})
},_suggest:function(f){var g=this.menu.element.empty().zIndex(this.element.zIndex()+1);
this._renderMenu(g,f);
this.menu.deactivate();
this.menu.refresh();
g.show();
this._resizeMenu();
g.position(a.extend({of:this.element},this.options.position));
if(this.options.autoFocus){this.menu.next(new a.Event("mouseover"))
}},_resizeMenu:function(){var f=this.menu.element;
f.outerWidth(Math.max(f.width("").outerWidth()+1,this.element.outerWidth()))
},_renderMenu:function(h,g){var f=this;
a.each(g,function(k,l){f._renderItem(h,l)
})
},_renderItem:function(f,g){return a("<li></li>").data("item.autocomplete",g).append(a("<a></a>").text(g.label)).appendTo(f)
},_move:function(g,f){if(!this.menu.element.is(":visible")){this.search(null,f);
return
}if(this.menu.first()&&/^previous/.test(g)||this.menu.last()&&/^next/.test(g)){this.element.val(this.term);
this.menu.deactivate();
return
}this.menu[g](f)
},widget:function(){return this.menu.element
}});
a.extend(a.ui.autocomplete,{escapeRegex:function(f){return f.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")
},filter:function(h,f){var g=new RegExp(a.ui.autocomplete.escapeRegex(f),"i");
return a.grep(h,function(k){return g.test(k.label||k.value||k)
})
}})
}(jQuery));
(function(a){a.widget("ui.menu",{_create:function(){var b=this;
this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(c){if(!a(c.target).closest(".ui-menu-item a").length){return
}c.preventDefault();
b.select(c)
});
this.refresh()
},refresh:function(){var c=this;
var b=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");
b.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(f){c.activate(f,a(this).parent())
}).mouseleave(function(){c.deactivate()
})
},activate:function(g,f){this.deactivate();
if(this.hasScroll()){var h=f.offset().top-this.element.offset().top,b=this.element.scrollTop(),c=this.element.height();
if(h<0){this.element.scrollTop(b+h)
}else{if(h>=c){this.element.scrollTop(b+h-c+f.height())
}}}this.active=f.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();
this._trigger("focus",g,{item:f})
},deactivate:function(){if(!this.active){return
}this.active.children("a").removeClass("ui-state-hover").removeAttr("id");
this._trigger("blur");
this.active=null
},next:function(b){this.move("next",".ui-menu-item:first",b)
},previous:function(b){this.move("prev",".ui-menu-item:last",b)
},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length
},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length
},move:function(g,f,c){if(!this.active){this.activate(c,this.element.children(f));
return
}var b=this.active[g+"All"](".ui-menu-item").eq(0);
if(b.length){this.activate(c,b)
}else{this.activate(c,this.element.children(f))
}},nextPage:function(f){if(this.hasScroll()){if(!this.active||this.last()){this.activate(f,this.element.children(".ui-menu-item:first"));
return
}var g=this.active.offset().top,c=this.element.height(),b=this.element.children(".ui-menu-item").filter(function(){var h=a(this).offset().top-g-c+a(this).height();
return h<10&&h>-10
});
if(!b.length){b=this.element.children(".ui-menu-item:last")
}this.activate(f,b)
}else{this.activate(f,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))
}},previousPage:function(c){if(this.hasScroll()){if(!this.active||this.first()){this.activate(c,this.element.children(".ui-menu-item:last"));
return
}var f=this.active.offset().top,b=this.element.height();
result=this.element.children(".ui-menu-item").filter(function(){var g=a(this).offset().top-f+b-a(this).height();
return g<10&&g>-10
});
if(!result.length){result=this.element.children(".ui-menu-item:first")
}this.activate(c,result)
}else{this.activate(c,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))
}},hasScroll:function(){return this.element.height()<this.element[a.fn.prop?"prop":"attr"]("scrollHeight")
},select:function(b){this._trigger("selected",b,{item:this.active})
}})
}(jQuery));
(function(h,b){var p,g,a,l,n="ui-button ui-widget ui-state-default ui-corner-all",c="ui-state-hover ui-state-active ",k="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",o=function(){var q=h(this).find(":ui-button");
setTimeout(function(){q.button("refresh")
},1)
},f=function(r){var q=r.name,s=r.form,u=h([]);
if(q){if(s){u=h(s).find("[name='"+q+"']")
}else{u=h("[name='"+q+"']",r.ownerDocument).filter(function(){return !this.form
})
}}return u
};
h.widget("ui.button",{options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",o);
if(typeof this.options.disabled!=="boolean"){this.options.disabled=!!this.element.propAttr("disabled")
}else{this.element.propAttr("disabled",this.options.disabled)
}this._determineButtonType();
this.hasTitle=!!this.buttonElement.attr("title");
var q=this,s=this.options,u=this.type==="checkbox"||this.type==="radio",w="ui-state-hover"+(!u?" ui-state-active":""),r="ui-state-focus";
if(s.label===null){s.label=this.buttonElement.html()
}this.buttonElement.addClass(n).attr("role","button").bind("mouseenter.button",function(){if(s.disabled){return
}h(this).addClass("ui-state-hover");
if(this===p){h(this).addClass("ui-state-active")
}}).bind("mouseleave.button",function(){if(s.disabled){return
}h(this).removeClass(w)
}).bind("click.button",function(x){if(s.disabled){x.preventDefault();
x.stopImmediatePropagation()
}});
this.element.bind("focus.button",function(){q.buttonElement.addClass(r)
}).bind("blur.button",function(){q.buttonElement.removeClass(r)
});
if(u){this.element.bind("change.button",function(){if(l){return
}q.refresh()
});
this.buttonElement.bind("mousedown.button",function(x){if(s.disabled){return
}l=false;
g=x.pageX;
a=x.pageY
}).bind("mouseup.button",function(x){if(s.disabled){return
}if(g!==x.pageX||a!==x.pageY){l=true
}})
}if(this.type==="checkbox"){this.buttonElement.bind("click.button",function(){if(s.disabled||l){return false
}h(this).toggleClass("ui-state-active");
q.buttonElement.attr("aria-pressed",q.element[0].checked)
})
}else{if(this.type==="radio"){this.buttonElement.bind("click.button",function(){if(s.disabled||l){return false
}h(this).addClass("ui-state-active");
q.buttonElement.attr("aria-pressed","true");
var x=q.element[0];
f(x).not(x).map(function(){return h(this).button("widget")[0]
}).removeClass("ui-state-active").attr("aria-pressed","false")
})
}else{this.buttonElement.bind("mousedown.button",function(){if(s.disabled){return false
}h(this).addClass("ui-state-active");
p=this;
h(document).one("mouseup",function(){p=null
})
}).bind("mouseup.button",function(){if(s.disabled){return false
}h(this).removeClass("ui-state-active")
}).bind("keydown.button",function(x){if(s.disabled){return false
}if(x.keyCode==h.ui.keyCode.SPACE||x.keyCode==h.ui.keyCode.ENTER){h(this).addClass("ui-state-active")
}}).bind("keyup.button",function(){h(this).removeClass("ui-state-active")
});
if(this.buttonElement.is("a")){this.buttonElement.keyup(function(x){if(x.keyCode===h.ui.keyCode.SPACE){h(this).click()
}})
}}}this._setOption("disabled",s.disabled);
this._resetButton()
},_determineButtonType:function(){if(this.element.is(":checkbox")){this.type="checkbox"
}else{if(this.element.is(":radio")){this.type="radio"
}else{if(this.element.is("input")){this.type="input"
}else{this.type="button"
}}}if(this.type==="checkbox"||this.type==="radio"){var q=this.element.parents().filter(":last"),s="label[for='"+this.element.attr("id")+"']";
this.buttonElement=q.find(s);
if(!this.buttonElement.length){q=q.length?q.siblings():this.element.siblings();
this.buttonElement=q.filter(s);
if(!this.buttonElement.length){this.buttonElement=q.find(s)
}}this.element.addClass("ui-helper-hidden-accessible");
var r=this.element.is(":checked");
if(r){this.buttonElement.addClass("ui-state-active")
}this.buttonElement.attr("aria-pressed",r)
}else{this.buttonElement=this.element
}},widget:function(){return this.buttonElement
},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");
this.buttonElement.removeClass(n+" "+c+" "+k).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
if(!this.hasTitle){this.buttonElement.removeAttr("title")
}h.Widget.prototype.destroy.call(this)
},_setOption:function(q,r){h.Widget.prototype._setOption.apply(this,arguments);
if(q==="disabled"){if(r){this.element.propAttr("disabled",true)
}else{this.element.propAttr("disabled",false)
}return
}this._resetButton()
},refresh:function(){var q=this.element.is(":disabled");
if(q!==this.options.disabled){this._setOption("disabled",q)
}if(this.type==="radio"){f(this.element[0]).each(function(){if(h(this).is(":checked")){h(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true")
}else{h(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")
}})
}else{if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true")
}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")
}}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label)
}return
}var w=this.buttonElement.removeClass(k),s=h("<span></span>",this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(w.empty()).text(),r=this.options.icons,q=r.primary&&r.secondary,u=[];
if(r.primary||r.secondary){if(this.options.text){u.push("ui-button-text-icon"+(q?"s":(r.primary?"-primary":"-secondary")))
}if(r.primary){w.prepend("<span class='ui-button-icon-primary ui-icon "+r.primary+"'></span>")
}if(r.secondary){w.append("<span class='ui-button-icon-secondary ui-icon "+r.secondary+"'></span>")
}if(!this.options.text){u.push(q?"ui-button-icons-only":"ui-button-icon-only");
if(!this.hasTitle){w.attr("title",s)
}}}else{u.push("ui-button-text-only")
}w.addClass(u.join(" "))
}});
h.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")
},_init:function(){this.refresh()
},_setOption:function(q,r){if(q==="disabled"){this.buttons.button("option",q,r)
}h.Widget.prototype._setOption.apply(this,arguments)
},refresh:function(){var q=this.element.css("direction")==="rtl";
this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return h(this).button("widget")[0]
}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(q?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(q?"ui-corner-left":"ui-corner-right").end().end()
},destroy:function(){this.element.removeClass("ui-buttonset");
this.buttons.map(function(){return h(this).button("widget")[0]
}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
h.Widget.prototype.destroy.call(this)
}})
}(jQuery));
(function($,undefined){$.extend($.ui,{datepicker:{version:"1.8.18"}});
var PROP_NAME="datepicker";
var dpuuid=new Date().getTime();
var instActive;
function Datepicker(){this.debug=false;
this._curInst=null;
this._keyEvent=false;
this._disabledInputs=[];
this._datepickerShowing=false;
this._inDialog=false;
this._mainDivId="ui-datepicker-div";
this._inlineClass="ui-datepicker-inline";
this._appendClass="ui-datepicker-append";
this._triggerClass="ui-datepicker-trigger";
this._dialogClass="ui-datepicker-dialog";
this._disableClass="ui-datepicker-disabled";
this._unselectableClass="ui-datepicker-unselectable";
this._currentClass="ui-datepicker-current-day";
this._dayOverClass="ui-datepicker-days-cell-over";
this.regional=[];
this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};
$.extend(this._defaults,this.regional[""]);
this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
}$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){if(this.debug){console.log.apply("",arguments)
}},_widgetDatepicker:function(){return this.dpDiv
},setDefaults:function(settings){extendRemove(this._defaults,settings||{});
return this
},_attachDatepicker:function(target,settings){var inlineSettings=null;
for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);
if(attrValue){inlineSettings=inlineSettings||{};
try{inlineSettings[attrName]=eval(attrValue)
}catch(err){inlineSettings[attrName]=attrValue
}}}var nodeName=target.nodeName.toLowerCase();
var inline=(nodeName=="div"||nodeName=="span");
if(!target.id){this.uuid+=1;
target.id="dp"+this.uuid
}var inst=this._newInst($(target),inline);
inst.settings=$.extend({},settings||{},inlineSettings||{});
if(nodeName=="input"){this._connectDatepicker(target,inst)
}else{if(inline){this._inlineDatepicker(target,inst)
}}},_newInst:function(target,inline){var id=target[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");
return{id:id,input:target,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:inline,dpDiv:(!inline?this.dpDiv:bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')))}
},_connectDatepicker:function(target,inst){var input=$(target);
inst.append=$([]);
inst.trigger=$([]);
if(input.hasClass(this.markerClassName)){return
}this._attachments(input,inst);
input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value
}).bind("getData.datepicker",function(event,key){return this._get(inst,key)
});
this._autoSize(inst);
$.data(target,PROP_NAME,inst);
if(inst.settings.disabled){this._disableDatepicker(target)
}},_attachments:function(input,inst){var appendText=this._get(inst,"appendText");
var isRTL=this._get(inst,"isRTL");
if(inst.append){inst.append.remove()
}if(appendText){inst.append=$('<span class="'+this._appendClass+'">'+appendText+"</span>");
input[isRTL?"before":"after"](inst.append)
}input.unbind("focus",this._showDatepicker);
if(inst.trigger){inst.trigger.remove()
}var showOn=this._get(inst,"showOn");
if(showOn=="focus"||showOn=="both"){input.focus(this._showDatepicker)
}if(showOn=="button"||showOn=="both"){var buttonText=this._get(inst,"buttonText");
var buttonImage=this._get(inst,"buttonImage");
inst.trigger=$(this._get(inst,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:buttonImage,alt:buttonText,title:buttonText}):$('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage==""?buttonText:$("<img/>").attr({src:buttonImage,alt:buttonText,title:buttonText})));
input[isRTL?"before":"after"](inst.trigger);
inst.trigger.click(function(){if($.datepicker._datepickerShowing&&$.datepicker._lastInput==input[0]){$.datepicker._hideDatepicker()
}else{if($.datepicker._datepickerShowing&&$.datepicker._lastInput!=input[0]){$.datepicker._hideDatepicker();
$.datepicker._showDatepicker(input[0])
}else{$.datepicker._showDatepicker(input[0])
}}return false
})
}},_autoSize:function(inst){if(this._get(inst,"autoSize")&&!inst.inline){var date=new Date(2009,12-1,20);
var dateFormat=this._get(inst,"dateFormat");
if(dateFormat.match(/[DM]/)){var findMax=function(names){var max=0;
var maxI=0;
for(var i=0;
i<names.length;
i++){if(names[i].length>max){max=names[i].length;
maxI=i
}}return maxI
};
date.setMonth(findMax(this._get(inst,(dateFormat.match(/MM/)?"monthNames":"monthNamesShort"))));
date.setDate(findMax(this._get(inst,(dateFormat.match(/DD/)?"dayNames":"dayNamesShort")))+20-date.getDay())
}inst.input.attr("size",this._formatDate(inst,date).length)
}},_inlineDatepicker:function(target,inst){var divSpan=$(target);
if(divSpan.hasClass(this.markerClassName)){return
}divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value
}).bind("getData.datepicker",function(event,key){return this._get(inst,key)
});
$.data(target,PROP_NAME,inst);
this._setDate(inst,this._getDefaultDate(inst),true);
this._updateDatepicker(inst);
this._updateAlternate(inst);
if(inst.settings.disabled){this._disableDatepicker(target)
}inst.dpDiv.css("display","block")
},_dialogDatepicker:function(input,date,onSelect,settings,pos){var inst=this._dialogInst;
if(!inst){this.uuid+=1;
var id="dp"+this.uuid;
this._dialogInput=$('<input type="text" id="'+id+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');
this._dialogInput.keydown(this._doKeyDown);
$("body").append(this._dialogInput);
inst=this._dialogInst=this._newInst(this._dialogInput,false);
inst.settings={};
$.data(this._dialogInput[0],PROP_NAME,inst)
}extendRemove(inst.settings,settings||{});
date=(date&&date.constructor==Date?this._formatDate(inst,date):date);
this._dialogInput.val(date);
this._pos=(pos?(pos.length?pos:[pos.pageX,pos.pageY]):null);
if(!this._pos){var browserWidth=document.documentElement.clientWidth;
var browserHeight=document.documentElement.clientHeight;
var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;
var scrollY=document.documentElement.scrollTop||document.body.scrollTop;
this._pos=[(browserWidth/2)-100+scrollX,(browserHeight/2)-150+scrollY]
}this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");
inst.settings.onSelect=onSelect;
this._inDialog=true;
this.dpDiv.addClass(this._dialogClass);
this._showDatepicker(this._dialogInput[0]);
if($.blockUI){$.blockUI(this.dpDiv)
}$.data(this._dialogInput[0],PROP_NAME,inst);
return this
},_destroyDatepicker:function(target){var $target=$(target);
var inst=$.data(target,PROP_NAME);
if(!$target.hasClass(this.markerClassName)){return
}var nodeName=target.nodeName.toLowerCase();
$.removeData(target,PROP_NAME);
if(nodeName=="input"){inst.append.remove();
inst.trigger.remove();
$target.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)
}else{if(nodeName=="div"||nodeName=="span"){$target.removeClass(this.markerClassName).empty()
}}},_enableDatepicker:function(target){var $target=$(target);
var inst=$.data(target,PROP_NAME);
if(!$target.hasClass(this.markerClassName)){return
}var nodeName=target.nodeName.toLowerCase();
if(nodeName=="input"){target.disabled=false;
inst.trigger.filter("button").each(function(){this.disabled=false
}).end().filter("img").css({opacity:"1.0",cursor:""})
}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);
inline.children().removeClass("ui-state-disabled");
inline.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")
}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)
})
},_disableDatepicker:function(target){var $target=$(target);
var inst=$.data(target,PROP_NAME);
if(!$target.hasClass(this.markerClassName)){return
}var nodeName=target.nodeName.toLowerCase();
if(nodeName=="input"){target.disabled=true;
inst.trigger.filter("button").each(function(){this.disabled=true
}).end().filter("img").css({opacity:"0.5",cursor:"default"})
}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);
inline.children().addClass("ui-state-disabled");
inline.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")
}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)
});
this._disabledInputs[this._disabledInputs.length]=target
},_isDisabledDatepicker:function(target){if(!target){return false
}for(var i=0;
i<this._disabledInputs.length;
i++){if(this._disabledInputs[i]==target){return true
}}return false
},_getInst:function(target){try{return $.data(target,PROP_NAME)
}catch(err){throw"Missing instance data for this datepicker"
}},_optionDatepicker:function(target,name,value){var inst=this._getInst(target);
if(arguments.length==2&&typeof name=="string"){return(name=="defaults"?$.extend({},$.datepicker._defaults):(inst?(name=="all"?$.extend({},inst.settings):this._get(inst,name)):null))
}var settings=name||{};
if(typeof name=="string"){settings={};
settings[name]=value
}if(inst){if(this._curInst==inst){this._hideDatepicker()
}var date=this._getDateDatepicker(target,true);
var minDate=this._getMinMaxDate(inst,"min");
var maxDate=this._getMinMaxDate(inst,"max");
extendRemove(inst.settings,settings);
if(minDate!==null&&settings.dateFormat!==undefined&&settings.minDate===undefined){inst.settings.minDate=this._formatDate(inst,minDate)
}if(maxDate!==null&&settings.dateFormat!==undefined&&settings.maxDate===undefined){inst.settings.maxDate=this._formatDate(inst,maxDate)
}this._attachments($(target),inst);
this._autoSize(inst);
this._setDate(inst,date);
this._updateAlternate(inst);
this._updateDatepicker(inst)
}},_changeDatepicker:function(target,name,value){this._optionDatepicker(target,name,value)
},_refreshDatepicker:function(target){var inst=this._getInst(target);
if(inst){this._updateDatepicker(inst)
}},_setDateDatepicker:function(target,date){var inst=this._getInst(target);
if(inst){this._setDate(inst,date);
this._updateDatepicker(inst);
this._updateAlternate(inst)
}},_getDateDatepicker:function(target,noDefault){var inst=this._getInst(target);
if(inst&&!inst.inline){this._setDateFromField(inst,noDefault)
}return(inst?this._getDate(inst):null)
},_doKeyDown:function(event){var inst=$.datepicker._getInst(event.target);
var handled=true;
var isRTL=inst.dpDiv.is(".ui-datepicker-rtl");
inst._keyEvent=true;
if($.datepicker._datepickerShowing){switch(event.keyCode){case 9:$.datepicker._hideDatepicker();
handled=false;
break;
case 13:var sel=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",inst.dpDiv);
if(sel[0]){$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0])
}var onSelect=$.datepicker._get(inst,"onSelect");
if(onSelect){var dateStr=$.datepicker._formatDate(inst);
onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])
}else{$.datepicker._hideDatepicker()
}return false;
break;
case 27:$.datepicker._hideDatepicker();
break;
case 33:$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M");
break;
case 34:$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M");
break;
case 35:if(event.ctrlKey||event.metaKey){$.datepicker._clearDate(event.target)
}handled=event.ctrlKey||event.metaKey;
break;
case 36:if(event.ctrlKey||event.metaKey){$.datepicker._gotoToday(event.target)
}handled=event.ctrlKey||event.metaKey;
break;
case 37:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?+1:-1),"D")
}handled=event.ctrlKey||event.metaKey;
if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M")
}break;
case 38:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,-7,"D")
}handled=event.ctrlKey||event.metaKey;
break;
case 39:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?-1:+1),"D")
}handled=event.ctrlKey||event.metaKey;
if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M")
}break;
case 40:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,+7,"D")
}handled=event.ctrlKey||event.metaKey;
break;
default:handled=false
}}else{if(event.keyCode==36&&event.ctrlKey){$.datepicker._showDatepicker(this)
}else{handled=false
}}if(handled){event.preventDefault();
event.stopPropagation()
}},_doKeyPress:function(event){var inst=$.datepicker._getInst(event.target);
if($.datepicker._get(inst,"constrainInput")){var chars=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat"));
var chr=String.fromCharCode(event.charCode==undefined?event.keyCode:event.charCode);
return event.ctrlKey||event.metaKey||(chr<" "||!chars||chars.indexOf(chr)>-1)
}},_doKeyUp:function(event){var inst=$.datepicker._getInst(event.target);
if(inst.input.val()!=inst.lastVal){try{var date=$.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),(inst.input?inst.input.val():null),$.datepicker._getFormatConfig(inst));
if(date){$.datepicker._setDateFromField(inst);
$.datepicker._updateAlternate(inst);
$.datepicker._updateDatepicker(inst)
}}catch(event){$.datepicker.log(event)
}}return true
},_showDatepicker:function(input){input=input.target||input;
if(input.nodeName.toLowerCase()!="input"){input=$("input",input.parentNode)[0]
}if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput==input){return
}var inst=$.datepicker._getInst(input);
if($.datepicker._curInst&&$.datepicker._curInst!=inst){$.datepicker._curInst.dpDiv.stop(true,true);
if(inst&&$.datepicker._datepickerShowing){$.datepicker._hideDatepicker($.datepicker._curInst.input[0])
}}var beforeShow=$.datepicker._get(inst,"beforeShow");
var beforeShowSettings=beforeShow?beforeShow.apply(input,[input,inst]):{};
if(beforeShowSettings===false){return
}extendRemove(inst.settings,beforeShowSettings);
inst.lastVal=null;
$.datepicker._lastInput=input;
$.datepicker._setDateFromField(inst);
if($.datepicker._inDialog){input.value=""
}if(!$.datepicker._pos){$.datepicker._pos=$.datepicker._findPos(input);
$.datepicker._pos[1]+=input.offsetHeight
}var isFixed=false;
$(input).parents().each(function(){isFixed|=$(this).css("position")=="fixed";
return !isFixed
});
if(isFixed&&$.browser.opera){$.datepicker._pos[0]-=document.documentElement.scrollLeft;
$.datepicker._pos[1]-=document.documentElement.scrollTop
}var offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};
$.datepicker._pos=null;
inst.dpDiv.empty();
inst.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});
$.datepicker._updateDatepicker(inst);
offset=$.datepicker._checkOffset(inst,offset,isFixed);
inst.dpDiv.css({position:($.datepicker._inDialog&&$.blockUI?"static":(isFixed?"fixed":"absolute")),display:"none",left:offset.left+"px",top:offset.top+"px"});
if(!inst.inline){var showAnim=$.datepicker._get(inst,"showAnim");
var duration=$.datepicker._get(inst,"duration");
var postProcess=function(){var cover=inst.dpDiv.find("iframe.ui-datepicker-cover");
if(!!cover.length){var borders=$.datepicker._getBorders(inst.dpDiv);
cover.css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()})
}};
inst.dpDiv.zIndex($(input).zIndex()+1);
$.datepicker._datepickerShowing=true;
if($.effects&&$.effects[showAnim]){inst.dpDiv.show(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)
}else{inst.dpDiv[showAnim||"show"]((showAnim?duration:null),postProcess)
}if(!showAnim||!duration){postProcess()
}if(inst.input.is(":visible")&&!inst.input.is(":disabled")){inst.input.focus()
}$.datepicker._curInst=inst
}},_updateDatepicker:function(inst){var self=this;
self.maxRows=4;
var borders=$.datepicker._getBorders(inst.dpDiv);
instActive=inst;
inst.dpDiv.empty().append(this._generateHTML(inst));
var cover=inst.dpDiv.find("iframe.ui-datepicker-cover");
if(!!cover.length){cover.css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()})
}inst.dpDiv.find("."+this._dayOverClass+" a").mouseover();
var numMonths=this._getNumberOfMonths(inst);
var cols=numMonths[1];
var width=17;
inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
if(cols>1){inst.dpDiv.addClass("ui-datepicker-multi-"+cols).css("width",(width*cols)+"em")
}inst.dpDiv[(numMonths[0]!=1||numMonths[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");
inst.dpDiv[(this._get(inst,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");
if(inst==$.datepicker._curInst&&$.datepicker._datepickerShowing&&inst.input&&inst.input.is(":visible")&&!inst.input.is(":disabled")&&inst.input[0]!=document.activeElement){inst.input.focus()
}if(inst.yearshtml){var origyearshtml=inst.yearshtml;
setTimeout(function(){if(origyearshtml===inst.yearshtml&&inst.yearshtml){inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml)
}origyearshtml=inst.yearshtml=null
},0)
}},_getBorders:function(elem){var convert=function(value){return{thin:1,medium:2,thick:3}[value]||value
};
return[parseFloat(convert(elem.css("border-left-width"))),parseFloat(convert(elem.css("border-top-width")))]
},_checkOffset:function(inst,offset,isFixed){var dpWidth=inst.dpDiv.outerWidth();
var dpHeight=inst.dpDiv.outerHeight();
var inputWidth=inst.input?inst.input.outerWidth():0;
var inputHeight=inst.input?inst.input.outerHeight():0;
var viewWidth=document.documentElement.clientWidth+$(document).scrollLeft();
var viewHeight=document.documentElement.clientHeight+$(document).scrollTop();
offset.left-=(this._get(inst,"isRTL")?(dpWidth-inputWidth):0);
offset.left-=(isFixed&&offset.left==inst.input.offset().left)?$(document).scrollLeft():0;
offset.top-=(isFixed&&offset.top==(inst.input.offset().top+inputHeight))?$(document).scrollTop():0;
offset.left-=Math.min(offset.left,(offset.left+dpWidth>viewWidth&&viewWidth>dpWidth)?Math.abs(offset.left+dpWidth-viewWidth):0);
offset.top-=Math.min(offset.top,(offset.top+dpHeight>viewHeight&&viewHeight>dpHeight)?Math.abs(dpHeight+inputHeight):0);
return offset
},_findPos:function(obj){var inst=this._getInst(obj);
var isRTL=this._get(inst,"isRTL");
while(obj&&(obj.type=="hidden"||obj.nodeType!=1||$.expr.filters.hidden(obj))){obj=obj[isRTL?"previousSibling":"nextSibling"]
}var position=$(obj).offset();
return[position.left,position.top]
},_hideDatepicker:function(input){var inst=this._curInst;
if(!inst||(input&&inst!=$.data(input,PROP_NAME))){return
}if(this._datepickerShowing){var showAnim=this._get(inst,"showAnim");
var duration=this._get(inst,"duration");
var self=this;
var postProcess=function(){$.datepicker._tidyDialog(inst);
self._curInst=null
};
if($.effects&&$.effects[showAnim]){inst.dpDiv.hide(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)
}else{inst.dpDiv[(showAnim=="slideDown"?"slideUp":(showAnim=="fadeIn"?"fadeOut":"hide"))]((showAnim?duration:null),postProcess)
}if(!showAnim){postProcess()
}this._datepickerShowing=false;
var onClose=this._get(inst,"onClose");
if(onClose){onClose.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():""),inst])
}this._lastInput=null;
if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});
if($.blockUI){$.unblockUI();
$("body").append(this.dpDiv)
}}this._inDialog=false
}},_tidyDialog:function(inst){inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
},_checkExternalClick:function(event){if(!$.datepicker._curInst){return
}var $target=$(event.target),inst=$.datepicker._getInst($target[0]);
if((($target[0].id!=$.datepicker._mainDivId&&$target.parents("#"+$.datepicker._mainDivId).length==0&&!$target.hasClass($.datepicker.markerClassName)&&!$target.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)))||($target.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=inst)){$.datepicker._hideDatepicker()
}},_adjustDate:function(id,offset,period){var target=$(id);
var inst=this._getInst(target[0]);
if(this._isDisabledDatepicker(target[0])){return
}this._adjustInstDate(inst,offset+(period=="M"?this._get(inst,"showCurrentAtPos"):0),period);
this._updateDatepicker(inst)
},_gotoToday:function(id){var target=$(id);
var inst=this._getInst(target[0]);
if(this._get(inst,"gotoCurrent")&&inst.currentDay){inst.selectedDay=inst.currentDay;
inst.drawMonth=inst.selectedMonth=inst.currentMonth;
inst.drawYear=inst.selectedYear=inst.currentYear
}else{var date=new Date();
inst.selectedDay=date.getDate();
inst.drawMonth=inst.selectedMonth=date.getMonth();
inst.drawYear=inst.selectedYear=date.getFullYear()
}this._notifyChange(inst);
this._adjustDate(target)
},_selectMonthYear:function(id,select,period){var target=$(id);
var inst=this._getInst(target[0]);
inst["selected"+(period=="M"?"Month":"Year")]=inst["draw"+(period=="M"?"Month":"Year")]=parseInt(select.options[select.selectedIndex].value,10);
this._notifyChange(inst);
this._adjustDate(target)
},_selectDay:function(id,month,year,td){var target=$(id);
if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){return
}var inst=this._getInst(target[0]);
inst.selectedDay=inst.currentDay=$("a",td).html();
inst.selectedMonth=inst.currentMonth=month;
inst.selectedYear=inst.currentYear=year;
this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear))
},_clearDate:function(id){var target=$(id);
var inst=this._getInst(target[0]);
this._selectDate(target,"")
},_selectDate:function(id,dateStr){var target=$(id);
var inst=this._getInst(target[0]);
dateStr=(dateStr!=null?dateStr:this._formatDate(inst));
if(inst.input){inst.input.val(dateStr)
}this._updateAlternate(inst);
var onSelect=this._get(inst,"onSelect");
if(onSelect){onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])
}else{if(inst.input){inst.input.trigger("change")
}}if(inst.inline){this._updateDatepicker(inst)
}else{this._hideDatepicker();
this._lastInput=inst.input[0];
if(typeof(inst.input[0])!="object"){inst.input.focus()
}this._lastInput=null
}},_updateAlternate:function(inst){var altField=this._get(inst,"altField");
if(altField){var altFormat=this._get(inst,"altFormat")||this._get(inst,"dateFormat");
var date=this._getDate(inst);
var dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));
$(altField).each(function(){$(this).val(dateStr)
})
}},noWeekends:function(date){var day=date.getDay();
return[(day>0&&day<6),""]
},iso8601Week:function(date){var checkDate=new Date(date.getTime());
checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7));
var time=checkDate.getTime();
checkDate.setMonth(0);
checkDate.setDate(1);
return Math.floor(Math.round((time-checkDate)/86400000)/7)+1
},parseDate:function(format,value,settings){if(format==null||value==null){throw"Invalid arguments"
}value=(typeof value=="object"?value.toString():value+"");
if(value==""){return null
}var shortYearCutoff=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff;
shortYearCutoff=(typeof shortYearCutoff!="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));
var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;
var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;
var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;
var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;
var year=-1;
var month=-1;
var day=-1;
var doy=-1;
var literal=false;
var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);
if(matches){iFormat++
}return matches
};
var getNumber=function(match){var isDoubled=lookAhead(match);
var size=(match=="@"?14:(match=="!"?20:(match=="y"&&isDoubled?4:(match=="o"?3:2))));
var digits=new RegExp("^\\d{1,"+size+"}");
var num=value.substring(iValue).match(digits);
if(!num){throw"Missing number at position "+iValue
}iValue+=num[0].length;
return parseInt(num[0],10)
};
var getName=function(match,shortNames,longNames){var names=$.map(lookAhead(match)?longNames:shortNames,function(v,k){return[[k,v]]
}).sort(function(a,b){return -(a[1].length-b[1].length)
});
var index=-1;
$.each(names,function(i,pair){var name=pair[1];
if(value.substr(iValue,name.length).toLowerCase()==name.toLowerCase()){index=pair[0];
iValue+=name.length;
return false
}});
if(index!=-1){return index+1
}else{throw"Unknown name at position "+iValue
}};
var checkLiteral=function(){if(value.charAt(iValue)!=format.charAt(iFormat)){throw"Unexpected literal at position "+iValue
}iValue++
};
var iValue=0;
for(var iFormat=0;
iFormat<format.length;
iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false
}else{checkLiteral()
}}else{switch(format.charAt(iFormat)){case"d":day=getNumber("d");
break;
case"D":getName("D",dayNamesShort,dayNames);
break;
case"o":doy=getNumber("o");
break;
case"m":month=getNumber("m");
break;
case"M":month=getName("M",monthNamesShort,monthNames);
break;
case"y":year=getNumber("y");
break;
case"@":var date=new Date(getNumber("@"));
year=date.getFullYear();
month=date.getMonth()+1;
day=date.getDate();
break;
case"!":var date=new Date((getNumber("!")-this._ticksTo1970)/10000);
year=date.getFullYear();
month=date.getMonth()+1;
day=date.getDate();
break;
case"'":if(lookAhead("'")){checkLiteral()
}else{literal=true
}break;
default:checkLiteral()
}}}if(iValue<value.length){throw"Extra/unparsed characters found in date: "+value.substring(iValue)
}if(year==-1){year=new Date().getFullYear()
}else{if(year<100){year+=new Date().getFullYear()-new Date().getFullYear()%100+(year<=shortYearCutoff?0:-100)
}}if(doy>-1){month=1;
day=doy;
do{var dim=this._getDaysInMonth(year,month-1);
if(day<=dim){break
}month++;
day-=dim
}while(true)
}var date=this._daylightSavingAdjust(new Date(year,month-1,day));
if(date.getFullYear()!=year||date.getMonth()+1!=month||date.getDate()!=day){throw"Invalid date"
}return date
},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(format,date,settings){if(!date){return""
}var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;
var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;
var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;
var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;
var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);
if(matches){iFormat++
}return matches
};
var formatNumber=function(match,value,len){var num=""+value;
if(lookAhead(match)){while(num.length<len){num="0"+num
}}return num
};
var formatName=function(match,value,shortNames,longNames){return(lookAhead(match)?longNames[value]:shortNames[value])
};
var output="";
var literal=false;
if(date){for(var iFormat=0;
iFormat<format.length;
iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false
}else{output+=format.charAt(iFormat)
}}else{switch(format.charAt(iFormat)){case"d":output+=formatNumber("d",date.getDate(),2);
break;
case"D":output+=formatName("D",date.getDay(),dayNamesShort,dayNames);
break;
case"o":output+=formatNumber("o",Math.round((new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime()-new Date(date.getFullYear(),0,0).getTime())/86400000),3);
break;
case"m":output+=formatNumber("m",date.getMonth()+1,2);
break;
case"M":output+=formatName("M",date.getMonth(),monthNamesShort,monthNames);
break;
case"y":output+=(lookAhead("y")?date.getFullYear():(date.getYear()%100<10?"0":"")+date.getYear()%100);
break;
case"@":output+=date.getTime();
break;
case"!":output+=date.getTime()*10000+this._ticksTo1970;
break;
case"'":if(lookAhead("'")){output+="'"
}else{literal=true
}break;
default:output+=format.charAt(iFormat)
}}}}return output
},_possibleChars:function(format){var chars="";
var literal=false;
var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);
if(matches){iFormat++
}return matches
};
for(var iFormat=0;
iFormat<format.length;
iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false
}else{chars+=format.charAt(iFormat)
}}else{switch(format.charAt(iFormat)){case"d":case"m":case"y":case"@":chars+="0123456789";
break;
case"D":case"M":return null;
case"'":if(lookAhead("'")){chars+="'"
}else{literal=true
}break;
default:chars+=format.charAt(iFormat)
}}}return chars
},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name]
},_setDateFromField:function(inst,noDefault){if(inst.input.val()==inst.lastVal){return
}var dateFormat=this._get(inst,"dateFormat");
var dates=inst.lastVal=inst.input?inst.input.val():null;
var date,defaultDate;
date=defaultDate=this._getDefaultDate(inst);
var settings=this._getFormatConfig(inst);
try{date=this.parseDate(dateFormat,dates,settings)||defaultDate
}catch(event){this.log(event);
dates=(noDefault?"":dates)
}inst.selectedDay=date.getDate();
inst.drawMonth=inst.selectedMonth=date.getMonth();
inst.drawYear=inst.selectedYear=date.getFullYear();
inst.currentDay=(dates?date.getDate():0);
inst.currentMonth=(dates?date.getMonth():0);
inst.currentYear=(dates?date.getFullYear():0);
this._adjustInstDate(inst)
},_getDefaultDate:function(inst){return this._restrictMinMax(inst,this._determineDate(inst,this._get(inst,"defaultDate"),new Date()))
},_determineDate:function(inst,date,defaultDate){var offsetNumeric=function(offset){var date=new Date();
date.setDate(date.getDate()+offset);
return date
};
var offsetString=function(offset){try{return $.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),offset,$.datepicker._getFormatConfig(inst))
}catch(e){}var date=(offset.toLowerCase().match(/^c/)?$.datepicker._getDate(inst):null)||new Date();
var year=date.getFullYear();
var month=date.getMonth();
var day=date.getDate();
var pattern=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;
var matches=pattern.exec(offset);
while(matches){switch(matches[2]||"d"){case"d":case"D":day+=parseInt(matches[1],10);
break;
case"w":case"W":day+=parseInt(matches[1],10)*7;
break;
case"m":case"M":month+=parseInt(matches[1],10);
day=Math.min(day,$.datepicker._getDaysInMonth(year,month));
break;
case"y":case"Y":year+=parseInt(matches[1],10);
day=Math.min(day,$.datepicker._getDaysInMonth(year,month));
break
}matches=pattern.exec(offset)
}return new Date(year,month,day)
};
var newDate=(date==null||date===""?defaultDate:(typeof date=="string"?offsetString(date):(typeof date=="number"?(isNaN(date)?defaultDate:offsetNumeric(date)):new Date(date.getTime()))));
newDate=(newDate&&newDate.toString()=="Invalid Date"?defaultDate:newDate);
if(newDate){newDate.setHours(0);
newDate.setMinutes(0);
newDate.setSeconds(0);
newDate.setMilliseconds(0)
}return this._daylightSavingAdjust(newDate)
},_daylightSavingAdjust:function(date){if(!date){return null
}date.setHours(date.getHours()>12?date.getHours()+2:0);
return date
},_setDate:function(inst,date,noChange){var clear=!date;
var origMonth=inst.selectedMonth;
var origYear=inst.selectedYear;
var newDate=this._restrictMinMax(inst,this._determineDate(inst,date,new Date()));
inst.selectedDay=inst.currentDay=newDate.getDate();
inst.drawMonth=inst.selectedMonth=inst.currentMonth=newDate.getMonth();
inst.drawYear=inst.selectedYear=inst.currentYear=newDate.getFullYear();
if((origMonth!=inst.selectedMonth||origYear!=inst.selectedYear)&&!noChange){this._notifyChange(inst)
}this._adjustInstDate(inst);
if(inst.input){inst.input.val(clear?"":this._formatDate(inst))
}},_getDate:function(inst){var startDate=(!inst.currentYear||(inst.input&&inst.input.val()=="")?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));
return startDate
},_generateHTML:function(inst){var today=new Date();
today=this._daylightSavingAdjust(new Date(today.getFullYear(),today.getMonth(),today.getDate()));
var isRTL=this._get(inst,"isRTL");
var showButtonPanel=this._get(inst,"showButtonPanel");
var hideIfNoPrevNext=this._get(inst,"hideIfNoPrevNext");
var navigationAsDateFormat=this._get(inst,"navigationAsDateFormat");
var numMonths=this._getNumberOfMonths(inst);
var showCurrentAtPos=this._get(inst,"showCurrentAtPos");
var stepMonths=this._get(inst,"stepMonths");
var isMultiMonth=(numMonths[0]!=1||numMonths[1]!=1);
var currentDate=this._daylightSavingAdjust((!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));
var minDate=this._getMinMaxDate(inst,"min");
var maxDate=this._getMinMaxDate(inst,"max");
var drawMonth=inst.drawMonth-showCurrentAtPos;
var drawYear=inst.drawYear;
if(drawMonth<0){drawMonth+=12;
drawYear--
}if(maxDate){var maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-(numMonths[0]*numMonths[1])+1,maxDate.getDate()));
maxDraw=(minDate&&maxDraw<minDate?minDate:maxDraw);
while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){drawMonth--;
if(drawMonth<0){drawMonth=11;
drawYear--
}}}inst.drawMonth=drawMonth;
inst.drawYear=drawYear;
var prevText=this._get(inst,"prevText");
prevText=(!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst)));
var prev=(this._canAdjustMonth(inst,-1,drawYear,drawMonth)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._adjustDate('#"+inst.id+"', -"+stepMonths+", 'M');\" title=\""+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>"));
var nextText=this._get(inst,"nextText");
nextText=(!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst)));
var next=(this._canAdjustMonth(inst,+1,drawYear,drawMonth)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._adjustDate('#"+inst.id+"', +"+stepMonths+", 'M');\" title=\""+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>"));
var currentText=this._get(inst,"currentText");
var gotoDate=(this._get(inst,"gotoCurrent")&&inst.currentDay?currentDate:today);
currentText=(!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)));
var controls=(!inst.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+dpuuid+'.datepicker._hideDatepicker();">'+this._get(inst,"closeText")+"</button>":"");
var buttonPanel=(showButtonPanel)?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(isRTL?controls:"")+(this._isInRange(inst,gotoDate)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._gotoToday('#"+inst.id+"');\">"+currentText+"</button>":"")+(isRTL?"":controls)+"</div>":"";
var firstDay=parseInt(this._get(inst,"firstDay"),10);
firstDay=(isNaN(firstDay)?0:firstDay);
var showWeek=this._get(inst,"showWeek");
var dayNames=this._get(inst,"dayNames");
var dayNamesShort=this._get(inst,"dayNamesShort");
var dayNamesMin=this._get(inst,"dayNamesMin");
var monthNames=this._get(inst,"monthNames");
var monthNamesShort=this._get(inst,"monthNamesShort");
var beforeShowDay=this._get(inst,"beforeShowDay");
var showOtherMonths=this._get(inst,"showOtherMonths");
var selectOtherMonths=this._get(inst,"selectOtherMonths");
var calculateWeek=this._get(inst,"calculateWeek")||this.iso8601Week;
var defaultDate=this._getDefaultDate(inst);
var html="";
for(var row=0;
row<numMonths[0];
row++){var group="";
this.maxRows=4;
for(var col=0;
col<numMonths[1];
col++){var selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));
var cornerClass=" ui-corner-all";
var calender="";
if(isMultiMonth){calender+='<div class="ui-datepicker-group';
if(numMonths[1]>1){switch(col){case 0:calender+=" ui-datepicker-group-first";
cornerClass=" ui-corner-"+(isRTL?"right":"left");
break;
case numMonths[1]-1:calender+=" ui-datepicker-group-last";
cornerClass=" ui-corner-"+(isRTL?"left":"right");
break;
default:calender+=" ui-datepicker-group-middle";
cornerClass="";
break
}}calender+='">'
}calender+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+cornerClass+'">'+(/all|left/.test(cornerClass)&&row==0?(isRTL?next:prev):"")+(/all|right/.test(cornerClass)&&row==0?(isRTL?prev:next):"")+this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,row>0||col>0,monthNames,monthNamesShort)+'</div><table class="ui-datepicker-calendar"><thead><tr>';
var thead=(showWeek?'<th class="ui-datepicker-week-col">'+this._get(inst,"weekHeader")+"</th>":"");
for(var dow=0;
dow<7;
dow++){var day=(dow+firstDay)%7;
thead+="<th"+((dow+firstDay+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+dayNames[day]+'">'+dayNamesMin[day]+"</span></th>"
}calender+=thead+"</tr></thead><tbody>";
var daysInMonth=this._getDaysInMonth(drawYear,drawMonth);
if(drawYear==inst.selectedYear&&drawMonth==inst.selectedMonth){inst.selectedDay=Math.min(inst.selectedDay,daysInMonth)
}var leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;
var curRows=Math.ceil((leadDays+daysInMonth)/7);
var numRows=(isMultiMonth?this.maxRows>curRows?this.maxRows:curRows:curRows);
this.maxRows=numRows;
var printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));
for(var dRow=0;
dRow<numRows;
dRow++){calender+="<tr>";
var tbody=(!showWeek?"":'<td class="ui-datepicker-week-col">'+this._get(inst,"calculateWeek")(printDate)+"</td>");
for(var dow=0;
dow<7;
dow++){var daySettings=(beforeShowDay?beforeShowDay.apply((inst.input?inst.input[0]:null),[printDate]):[true,""]);
var otherMonth=(printDate.getMonth()!=drawMonth);
var unselectable=(otherMonth&&!selectOtherMonths)||!daySettings[0]||(minDate&&printDate<minDate)||(maxDate&&printDate>maxDate);
tbody+='<td class="'+((dow+firstDay+6)%7>=5?" ui-datepicker-week-end":"")+(otherMonth?" ui-datepicker-other-month":"")+((printDate.getTime()==selectedDate.getTime()&&drawMonth==inst.selectedMonth&&inst._keyEvent)||(defaultDate.getTime()==printDate.getTime()&&defaultDate.getTime()==selectedDate.getTime())?" "+this._dayOverClass:"")+(unselectable?" "+this._unselectableClass+" ui-state-disabled":"")+(otherMonth&&!showOtherMonths?"":" "+daySettings[1]+(printDate.getTime()==currentDate.getTime()?" "+this._currentClass:"")+(printDate.getTime()==today.getTime()?" ui-datepicker-today":""))+'"'+((!otherMonth||showOtherMonths)&&daySettings[2]?' title="'+daySettings[2]+'"':"")+(unselectable?"":' onclick="DP_jQuery_'+dpuuid+".datepicker._selectDay('#"+inst.id+"',"+printDate.getMonth()+","+printDate.getFullYear()+', this);return false;"')+">"+(otherMonth&&!showOtherMonths?"&#xa0;":(unselectable?'<span class="ui-state-default">'+printDate.getDate()+"</span>":'<a class="ui-state-default'+(printDate.getTime()==today.getTime()?" ui-state-highlight":"")+(printDate.getTime()==currentDate.getTime()?" ui-state-active":"")+(otherMonth?" ui-priority-secondary":"")+'" href="#">'+printDate.getDate()+"</a>"))+"</td>";
printDate.setDate(printDate.getDate()+1);
printDate=this._daylightSavingAdjust(printDate)
}calender+=tbody+"</tr>"
}drawMonth++;
if(drawMonth>11){drawMonth=0;
drawYear++
}calender+="</tbody></table>"+(isMultiMonth?"</div>"+((numMonths[0]>0&&col==numMonths[1]-1)?'<div class="ui-datepicker-row-break"></div>':""):"");
group+=calender
}html+=group
}html+=buttonPanel+($.browser.msie&&parseInt($.browser.version,10)<7&&!inst.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");
inst._keyEvent=false;
return html
},_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,secondary,monthNames,monthNamesShort){var changeMonth=this._get(inst,"changeMonth");
var changeYear=this._get(inst,"changeYear");
var showMonthAfterYear=this._get(inst,"showMonthAfterYear");
var html='<div class="ui-datepicker-title">';
var monthHtml="";
if(secondary||!changeMonth){monthHtml+='<span class="ui-datepicker-month">'+monthNames[drawMonth]+"</span>"
}else{var inMinYear=(minDate&&minDate.getFullYear()==drawYear);
var inMaxYear=(maxDate&&maxDate.getFullYear()==drawYear);
monthHtml+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+dpuuid+".datepicker._selectMonthYear('#"+inst.id+"', this, 'M');\" >";
for(var month=0;
month<12;
month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth())){monthHtml+='<option value="'+month+'"'+(month==drawMonth?' selected="selected"':"")+">"+monthNamesShort[month]+"</option>"
}}monthHtml+="</select>"
}if(!showMonthAfterYear){html+=monthHtml+(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")
}if(!inst.yearshtml){inst.yearshtml="";
if(secondary||!changeYear){html+='<span class="ui-datepicker-year">'+drawYear+"</span>"
}else{var years=this._get(inst,"yearRange").split(":");
var thisYear=new Date().getFullYear();
var determineYear=function(value){var year=(value.match(/c[+-].*/)?drawYear+parseInt(value.substring(1),10):(value.match(/[+-].*/)?thisYear+parseInt(value,10):parseInt(value,10)));
return(isNaN(year)?thisYear:year)
};
var year=determineYear(years[0]);
var endYear=Math.max(year,determineYear(years[1]||""));
year=(minDate?Math.max(year,minDate.getFullYear()):year);
endYear=(maxDate?Math.min(endYear,maxDate.getFullYear()):endYear);
inst.yearshtml+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+dpuuid+".datepicker._selectMonthYear('#"+inst.id+"', this, 'Y');\" >";
for(;
year<=endYear;
year++){inst.yearshtml+='<option value="'+year+'"'+(year==drawYear?' selected="selected"':"")+">"+year+"</option>"
}inst.yearshtml+="</select>";
html+=inst.yearshtml;
inst.yearshtml=null
}}html+=this._get(inst,"yearSuffix");
if(showMonthAfterYear){html+=(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")+monthHtml
}html+="</div>";
return html
},_adjustInstDate:function(inst,offset,period){var year=inst.drawYear+(period=="Y"?offset:0);
var month=inst.drawMonth+(period=="M"?offset:0);
var day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+(period=="D"?offset:0);
var date=this._restrictMinMax(inst,this._daylightSavingAdjust(new Date(year,month,day)));
inst.selectedDay=date.getDate();
inst.drawMonth=inst.selectedMonth=date.getMonth();
inst.drawYear=inst.selectedYear=date.getFullYear();
if(period=="M"||period=="Y"){this._notifyChange(inst)
}},_restrictMinMax:function(inst,date){var minDate=this._getMinMaxDate(inst,"min");
var maxDate=this._getMinMaxDate(inst,"max");
var newDate=(minDate&&date<minDate?minDate:date);
newDate=(maxDate&&newDate>maxDate?maxDate:newDate);
return newDate
},_notifyChange:function(inst){var onChange=this._get(inst,"onChangeMonthYear");
if(onChange){onChange.apply((inst.input?inst.input[0]:null),[inst.selectedYear,inst.selectedMonth+1,inst])
}},_getNumberOfMonths:function(inst){var numMonths=this._get(inst,"numberOfMonths");
return(numMonths==null?[1,1]:(typeof numMonths=="number"?[1,numMonths]:numMonths))
},_getMinMaxDate:function(inst,minMax){return this._determineDate(inst,this._get(inst,minMax+"Date"),null)
},_getDaysInMonth:function(year,month){return 32-this._daylightSavingAdjust(new Date(year,month,32)).getDate()
},_getFirstDayOfMonth:function(year,month){return new Date(year,month,1).getDay()
},_canAdjustMonth:function(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst);
var date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[0]*numMonths[1]),1));
if(offset<0){date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()))
}return this._isInRange(inst,date)
},_isInRange:function(inst,date){var minDate=this._getMinMaxDate(inst,"min");
var maxDate=this._getMinMaxDate(inst,"max");
return((!minDate||date.getTime()>=minDate.getTime())&&(!maxDate||date.getTime()<=maxDate.getTime()))
},_getFormatConfig:function(inst){var shortYearCutoff=this._get(inst,"shortYearCutoff");
shortYearCutoff=(typeof shortYearCutoff!="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));
return{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,"dayNamesShort"),dayNames:this._get(inst,"dayNames"),monthNamesShort:this._get(inst,"monthNamesShort"),monthNames:this._get(inst,"monthNames")}
},_formatDate:function(inst,day,month,year){if(!day){inst.currentDay=inst.selectedDay;
inst.currentMonth=inst.selectedMonth;
inst.currentYear=inst.selectedYear
}var date=(day?(typeof day=="object"?day:this._daylightSavingAdjust(new Date(year,month,day))):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));
return this.formatDate(this._get(inst,"dateFormat"),date,this._getFormatConfig(inst))
}});
function bindHover(dpDiv){var selector="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
return dpDiv.bind("mouseout",function(event){var elem=$(event.target).closest(selector);
if(!elem.length){return
}elem.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")
}).bind("mouseover",function(event){var elem=$(event.target).closest(selector);
if($.datepicker._isDisabledDatepicker(instActive.inline?dpDiv.parent()[0]:instActive.input[0])||!elem.length){return
}elem.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
elem.addClass("ui-state-hover");
if(elem.hasClass("ui-datepicker-prev")){elem.addClass("ui-datepicker-prev-hover")
}if(elem.hasClass("ui-datepicker-next")){elem.addClass("ui-datepicker-next-hover")
}})
}function extendRemove(target,props){$.extend(target,props);
for(var name in props){if(props[name]==null||props[name]==undefined){target[name]=props[name]
}}return target
}function isArray(a){return(a&&(($.browser.safari&&typeof a=="object"&&a.length)||(a.constructor&&a.constructor.toString().match(/\Array\(\)/))))
}$.fn.datepicker=function(options){if(!this.length){return this
}if(!$.datepicker.initialized){$(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv);
$.datepicker.initialized=true
}var otherArgs=Array.prototype.slice.call(arguments,1);
if(typeof options=="string"&&(options=="isDisabled"||options=="getDate"||options=="widget")){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))
}if(options=="option"&&arguments.length==2&&typeof arguments[1]=="string"){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))
}return this.each(function(){typeof options=="string"?$.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this].concat(otherArgs)):$.datepicker._attachDatepicker(this,options)
})
};
$.datepicker=new Datepicker();
$.datepicker.initialized=false;
$.datepicker.uuid=new Date().getTime();
$.datepicker.version="1.8.18";
window["DP_jQuery_"+dpuuid]=$
})(jQuery);
(function(g,h){var c="ui-dialog ui-widget ui-widget-content ui-corner-all ",b={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},f={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true},a=g.attrFn||{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true,click:true};
g.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",collision:"fit",using:function(l){var k=g(this).css(l).offset().top;
if(k<0){g(this).css("top",l.top-k)
}}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1000},_create:function(){this.originalTitle=this.element.attr("title");
if(typeof this.originalTitle!=="string"){this.originalTitle=""
}this.options.title=this.options.title||this.originalTitle;
var u=this,w=u.options,r=w.title||"&#160;",l=g.ui.dialog.getTitleId(u.element),s=(u.uiDialog=g("<div></div>")).appendTo(document.body).hide().addClass(c+w.dialogClass).css({zIndex:w.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(x){if(w.closeOnEscape&&!x.isDefaultPrevented()&&x.keyCode&&x.keyCode===g.ui.keyCode.ESCAPE){u.close(x);
x.preventDefault()
}}).attr({role:"dialog","aria-labelledby":l}).mousedown(function(x){u.moveToTop(false,x)
}),o=u.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(s),n=(u.uiDialogTitlebar=g("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(s),q=g('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){q.addClass("ui-state-hover")
},function(){q.removeClass("ui-state-hover")
}).focus(function(){q.addClass("ui-state-focus")
}).blur(function(){q.removeClass("ui-state-focus")
}).click(function(x){u.close(x);
return false
}).appendTo(n),p=(u.uiDialogTitlebarCloseText=g("<span></span>")).addClass("ui-icon ui-icon-closethick").text(w.closeText).appendTo(q),k=g("<span></span>").addClass("ui-dialog-title").attr("id",l).html(r).prependTo(n);
if(g.isFunction(w.beforeclose)&&!g.isFunction(w.beforeClose)){w.beforeClose=w.beforeclose
}n.find("*").add(n).disableSelection();
if(w.draggable&&g.fn.draggable){u._makeDraggable()
}if(w.resizable&&g.fn.resizable){u._makeResizable()
}u._createButtons(w.buttons);
u._isOpen=false;
if(g.fn.bgiframe){s.bgiframe()
}},_init:function(){if(this.options.autoOpen){this.open()
}},destroy:function(){var k=this;
if(k.overlay){k.overlay.destroy()
}k.uiDialog.hide();
k.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
k.uiDialog.remove();
if(k.originalTitle){k.element.attr("title",k.originalTitle)
}return k
},widget:function(){return this.uiDialog
},close:function(o){var k=this,n,l;
if(false===k._trigger("beforeClose",o)){return
}if(k.overlay){k.overlay.destroy()
}k.uiDialog.unbind("keypress.ui-dialog");
k._isOpen=false;
if(k.options.hide){k.uiDialog.hide(k.options.hide,function(){k._trigger("close",o)
})
}else{k.uiDialog.hide();
k._trigger("close",o)
}g.ui.dialog.overlay.resize();
if(k.options.modal){n=0;
g(".ui-dialog").each(function(){if(this!==k.uiDialog[0]){l=g(this).css("z-index");
if(!isNaN(l)){n=Math.max(n,l)
}}});
g.ui.dialog.maxZ=n
}return k
},isOpen:function(){return this._isOpen
},moveToTop:function(p,o){var k=this,n=k.options,l;
if((n.modal&&!p)||(!n.stack&&!n.modal)){return k._trigger("focus",o)
}if(n.zIndex>g.ui.dialog.maxZ){g.ui.dialog.maxZ=n.zIndex
}if(k.overlay){g.ui.dialog.maxZ+=1;
k.overlay.$el.css("z-index",g.ui.dialog.overlay.maxZ=g.ui.dialog.maxZ)
}l={scrollTop:k.element.scrollTop(),scrollLeft:k.element.scrollLeft()};
g.ui.dialog.maxZ+=1;
k.uiDialog.css("z-index",g.ui.dialog.maxZ);
k.element.attr(l);
k._trigger("focus",o);
return k
},open:function(){if(this._isOpen){return
}var l=this,n=l.options,k=l.uiDialog;
l.overlay=n.modal?new g.ui.dialog.overlay(l):null;
l._size();
l._position(n.position);
k.show(n.show);
l.moveToTop(true);
if(n.modal){k.bind("keydown.ui-dialog",function(q){if(q.keyCode!==g.ui.keyCode.TAB){return
}var p=g(":tabbable",this),r=p.filter(":first"),o=p.filter(":last");
if(q.target===o[0]&&!q.shiftKey){r.focus(1);
return false
}else{if(q.target===r[0]&&q.shiftKey){o.focus(1);
return false
}}})
}g(l.element.find(":tabbable").get().concat(k.find(".ui-dialog-buttonpane :tabbable").get().concat(k.get()))).eq(0).focus();
l._isOpen=true;
l._trigger("open");
return l
},_createButtons:function(o){var n=this,k=false,l=g("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),p=g("<div></div>").addClass("ui-dialog-buttonset").appendTo(l);
n.uiDialog.find(".ui-dialog-buttonpane").remove();
if(typeof o==="object"&&o!==null){g.each(o,function(){return !(k=true)
})
}if(k){g.each(o,function(q,s){s=g.isFunction(s)?{click:s,text:q}:s;
var r=g('<button type="button"></button>').click(function(){s.click.apply(n.element[0],arguments)
}).appendTo(p);
g.each(s,function(u,w){if(u==="click"){return
}if(u in a){r[u](w)
}else{r.attr(u,w)
}});
if(g.fn.button){r.button()
}});
l.appendTo(n.uiDialog)
}},_makeDraggable:function(){var k=this,o=k.options,p=g(document),n;
function l(q){return{position:q.position,offset:q.offset}
}k.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(q,r){n=o.height==="auto"?"auto":g(this).height();
g(this).height(g(this).height()).addClass("ui-dialog-dragging");
k._trigger("dragStart",q,l(r))
},drag:function(q,r){k._trigger("drag",q,l(r))
},stop:function(q,r){o.position=[r.position.left-p.scrollLeft(),r.position.top-p.scrollTop()];
g(this).removeClass("ui-dialog-dragging").height(n);
k._trigger("dragStop",q,l(r));
g.ui.dialog.overlay.resize()
}})
},_makeResizable:function(q){q=(q===h?this.options.resizable:q);
var l=this,p=l.options,k=l.uiDialog.css("position"),o=(typeof q==="string"?q:"n,e,s,w,se,sw,ne,nw");
function n(r){return{originalPosition:r.originalPosition,originalSize:r.originalSize,position:r.position,size:r.size}
}l.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:l.element,maxWidth:p.maxWidth,maxHeight:p.maxHeight,minWidth:p.minWidth,minHeight:l._minHeight(),handles:o,start:function(r,s){g(this).addClass("ui-dialog-resizing");
l._trigger("resizeStart",r,n(s))
},resize:function(r,s){l._trigger("resize",r,n(s))
},stop:function(r,s){g(this).removeClass("ui-dialog-resizing");
p.height=g(this).height();
p.width=g(this).width();
l._trigger("resizeStop",r,n(s));
g.ui.dialog.overlay.resize()
}}).css("position",k).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
},_minHeight:function(){var k=this.options;
if(k.height==="auto"){return k.minHeight
}else{return Math.min(k.minHeight,k.height)
}},_position:function(l){var n=[],o=[0,0],k;
if(l){if(typeof l==="string"||(typeof l==="object"&&"0" in l)){n=l.split?l.split(" "):[l[0],l[1]];
if(n.length===1){n[1]=n[0]
}g.each(["left","top"],function(q,p){if(+n[q]===n[q]){o[q]=n[q];
n[q]=p
}});
l={my:n.join(" "),at:n.join(" "),offset:o.join(" ")}
}l=g.extend({},g.ui.dialog.prototype.options.position,l)
}else{l=g.ui.dialog.prototype.options.position
}k=this.uiDialog.is(":visible");
if(!k){this.uiDialog.show()
}this.uiDialog.css({top:0,left:0}).position(g.extend({of:window},l));
if(!k){this.uiDialog.hide()
}},_setOptions:function(o){var l=this,k={},n=false;
g.each(o,function(p,q){l._setOption(p,q);
if(p in b){n=true
}if(p in f){k[p]=q
}});
if(n){this._size()
}if(this.uiDialog.is(":data(resizable)")){this.uiDialog.resizable("option",k)
}},_setOption:function(o,p){var l=this,k=l.uiDialog;
switch(o){case"beforeclose":o="beforeClose";
break;
case"buttons":l._createButtons(p);
break;
case"closeText":l.uiDialogTitlebarCloseText.text(""+p);
break;
case"dialogClass":k.removeClass(l.options.dialogClass).addClass(c+p);
break;
case"disabled":if(p){k.addClass("ui-dialog-disabled")
}else{k.removeClass("ui-dialog-disabled")
}break;
case"draggable":var n=k.is(":data(draggable)");
if(n&&!p){k.draggable("destroy")
}if(!n&&p){l._makeDraggable()
}break;
case"position":l._position(p);
break;
case"resizable":var q=k.is(":data(resizable)");
if(q&&!p){k.resizable("destroy")
}if(q&&typeof p==="string"){k.resizable("option","handles",p)
}if(!q&&p!==false){l._makeResizable(p)
}break;
case"title":g(".ui-dialog-title",l.uiDialogTitlebar).html(""+(p||"&#160;"));
break
}g.Widget.prototype._setOption.apply(l,arguments)
},_size:function(){var p=this.options,l,o,k=this.uiDialog.is(":visible");
this.element.show().css({width:"auto",minHeight:0,height:0});
if(p.minWidth>p.width){p.width=p.minWidth
}l=this.uiDialog.css({height:"auto",width:p.width}).height();
o=Math.max(0,p.minHeight-l);
if(p.height==="auto"){if(g.support.minHeight){this.element.css({minHeight:o,height:"auto"})
}else{this.uiDialog.show();
var n=this.element.css("height","auto").height();
if(!k){this.uiDialog.hide()
}this.element.height(Math.max(n,o))
}}else{this.element.height(Math.max(p.height-l,0))
}if(this.uiDialog.is(":data(resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())
}}});
g.extend(g.ui.dialog,{version:"1.8.18",uuid:0,maxZ:0,getTitleId:function(k){var l=k.attr("id");
if(!l){this.uuid+=1;
l=this.uuid
}return"ui-dialog-title-"+l
},overlay:function(k){this.$el=g.ui.dialog.overlay.create(k)
}});
g.extend(g.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:g.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(k){return k+".dialog-overlay"
}).join(" "),create:function(l){if(this.instances.length===0){setTimeout(function(){if(g.ui.dialog.overlay.instances.length){g(document).bind(g.ui.dialog.overlay.events,function(n){if(g(n.target).zIndex()<g.ui.dialog.overlay.maxZ){return false
}})
}},1);
g(document).bind("keydown.dialog-overlay",function(n){if(l.options.closeOnEscape&&!n.isDefaultPrevented()&&n.keyCode&&n.keyCode===g.ui.keyCode.ESCAPE){l.close(n);
n.preventDefault()
}});
g(window).bind("resize.dialog-overlay",g.ui.dialog.overlay.resize)
}var k=(this.oldInstances.pop()||g("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),height:this.height()});
if(g.fn.bgiframe){k.bgiframe()
}this.instances.push(k);
return k
},destroy:function(k){var l=g.inArray(k,this.instances);
if(l!=-1){this.oldInstances.push(this.instances.splice(l,1)[0])
}if(this.instances.length===0){g([document,window]).unbind(".dialog-overlay")
}k.remove();
var n=0;
g.each(this.instances,function(){n=Math.max(n,this.css("z-index"))
});
this.maxZ=n
},height:function(){var l,k;
if(g.browser.msie&&g.browser.version<7){l=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
k=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);
if(l<k){return g(window).height()+"px"
}else{return l+"px"
}}else{return g(document).height()+"px"
}},width:function(){var k,l;
if(g.browser.msie){k=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);
l=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);
if(k<l){return g(window).width()+"px"
}else{return k+"px"
}}else{return g(document).width()+"px"
}},resize:function(){var k=g([]);
g.each(g.ui.dialog.overlay.instances,function(){k=k.add(this)
});
k.css({width:0,height:0}).css({width:g.ui.dialog.overlay.width(),height:g.ui.dialog.overlay.height()})
}});
g.extend(g.ui.dialog.overlay.prototype,{destroy:function(){g.ui.dialog.overlay.destroy(this.$el)
}})
}(jQuery));
(function(k,l){k.ui=k.ui||{};
var f=/left|center|right/,g=/top|center|bottom/,a="center",h={},b=k.fn.position,c=k.fn.offset;
k.fn.position=function(o){if(!o||!o.of){return b.apply(this,arguments)
}o=k.extend({},o);
var s=k(o.of),r=s[0],w=(o.collision||"flip").split(" "),u=o.offset?o.offset.split(" "):[0,0],q,n,p;
if(r.nodeType===9){q=s.width();
n=s.height();
p={top:0,left:0}
}else{if(r.setTimeout){q=s.width();
n=s.height();
p={top:s.scrollTop(),left:s.scrollLeft()}
}else{if(r.preventDefault){o.at="left top";
q=n=0;
p={top:o.of.pageY,left:o.of.pageX}
}else{q=s.outerWidth();
n=s.outerHeight();
p=s.offset()
}}}k.each(["my","at"],function(){var x=(o[this]||"").split(" ");
if(x.length===1){x=f.test(x[0])?x.concat([a]):g.test(x[0])?[a].concat(x):[a,a]
}x[0]=f.test(x[0])?x[0]:a;
x[1]=g.test(x[1])?x[1]:a;
o[this]=x
});
if(w.length===1){w[1]=w[0]
}u[0]=parseInt(u[0],10)||0;
if(u.length===1){u[1]=u[0]
}u[1]=parseInt(u[1],10)||0;
if(o.at[0]==="right"){p.left+=q
}else{if(o.at[0]===a){p.left+=q/2
}}if(o.at[1]==="bottom"){p.top+=n
}else{if(o.at[1]===a){p.top+=n/2
}}p.left+=u[0];
p.top+=u[1];
return this.each(function(){var B=k(this),D=B.outerWidth(),A=B.outerHeight(),C=parseInt(k.curCSS(this,"marginLeft",true))||0,z=parseInt(k.curCSS(this,"marginTop",true))||0,F=D+C+(parseInt(k.curCSS(this,"marginRight",true))||0),G=A+z+(parseInt(k.curCSS(this,"marginBottom",true))||0),E=k.extend({},p),x;
if(o.my[0]==="right"){E.left-=D
}else{if(o.my[0]===a){E.left-=D/2
}}if(o.my[1]==="bottom"){E.top-=A
}else{if(o.my[1]===a){E.top-=A/2
}}if(!h.fractions){E.left=Math.round(E.left);
E.top=Math.round(E.top)
}x={left:E.left-C,top:E.top-z};
k.each(["left","top"],function(I,H){if(k.ui.position[w[I]]){k.ui.position[w[I]][H](E,{targetWidth:q,targetHeight:n,elemWidth:D,elemHeight:A,collisionPosition:x,collisionWidth:F,collisionHeight:G,offset:u,my:o.my,at:o.at})
}});
if(k.fn.bgiframe){B.bgiframe()
}B.offset(k.extend(E,{using:o.using}))
})
};
k.ui.position={fit:{left:function(n,o){var q=k(window),p=o.collisionPosition.left+o.collisionWidth-q.width()-q.scrollLeft();
n.left=p>0?n.left-p:Math.max(n.left-o.collisionPosition.left,n.left)
},top:function(n,o){var q=k(window),p=o.collisionPosition.top+o.collisionHeight-q.height()-q.scrollTop();
n.top=p>0?n.top-p:Math.max(n.top-o.collisionPosition.top,n.top)
}},flip:{left:function(o,q){if(q.at[0]===a){return
}var s=k(window),r=q.collisionPosition.left+q.collisionWidth-s.width()-s.scrollLeft(),n=q.my[0]==="left"?-q.elemWidth:q.my[0]==="right"?q.elemWidth:0,p=q.at[0]==="left"?q.targetWidth:-q.targetWidth,u=-2*q.offset[0];
o.left+=q.collisionPosition.left<0?n+p+u:r>0?n+p+u:0
},top:function(o,q){if(q.at[1]===a){return
}var s=k(window),r=q.collisionPosition.top+q.collisionHeight-s.height()-s.scrollTop(),n=q.my[1]==="top"?-q.elemHeight:q.my[1]==="bottom"?q.elemHeight:0,p=q.at[1]==="top"?q.targetHeight:-q.targetHeight,u=-2*q.offset[1];
o.top+=q.collisionPosition.top<0?n+p+u:r>0?n+p+u:0
}}};
if(!k.offset.setOffset){k.offset.setOffset=function(r,o){if(/static/.test(k.curCSS(r,"position"))){r.style.position="relative"
}var q=k(r),u=q.offset(),n=parseInt(k.curCSS(r,"top",true),10)||0,s=parseInt(k.curCSS(r,"left",true),10)||0,p={top:(o.top-u.top)+n,left:(o.left-u.left)+s};
if("using" in o){o.using.call(r,p)
}else{q.css(p)
}};
k.fn.offset=function(n){var o=this[0];
if(!o||!o.ownerDocument){return null
}if(n){return this.each(function(){k.offset.setOffset(this,n)
})
}return c.call(this)
}
}(function(){var n=document.getElementsByTagName("body")[0],w=document.createElement("div"),r,u,o,s,q;
r=document.createElement(n?"div":"body");
o={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};
if(n){k.extend(o,{position:"absolute",left:"-1000px",top:"-1000px"})
}for(var p in o){r.style[p]=o[p]
}r.appendChild(w);
u=n||document.documentElement;
u.insertBefore(r,u.firstChild);
w.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;";
s=k(w).offset(function(x,z){return z
}).offset();
r.innerHTML="";
u.removeChild(r);
q=s.top+s.left+(n?2000:0);
h.fractions=q>21&&q<22
})()
}(jQuery));
(function(a,b){a.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});
this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
this.oldValue=this._value();
this._refreshValue()
},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove();
a.Widget.prototype.destroy.apply(this,arguments)
},value:function(c){if(c===b){return this._value()
}this._setOption("value",c);
return this
},_setOption:function(c,f){if(c==="value"){this.options.value=f;
this._refreshValue();
if(this._value()===this.options.max){this._trigger("complete")
}}a.Widget.prototype._setOption.apply(this,arguments)
},_value:function(){var c=this.options.value;
if(typeof c!=="number"){c=0
}return Math.min(this.options.max,Math.max(this.min,c))
},_percentage:function(){return 100*this._value()/this.options.max
},_refreshValue:function(){var f=this.value();
var c=this._percentage();
if(this.oldValue!==f){this.oldValue=f;
this._trigger("change")
}this.valueDiv.toggle(f>this.min).toggleClass("ui-corner-right",f===this.options.max).width(c.toFixed(0)+"%");
this.element.attr("aria-valuenow",f)
}});
a.extend(a.ui.progressbar,{version:"1.8.18"})
})(jQuery);
(function(b,c){var a=5;
b.widget("ui.slider",b.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var g=this,p=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),l="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",f=(p.values&&p.values.length)||1,k=[];
this._keySliding=false;
this._mouseSliding=false;
this._animateOff=true;
this._handleIndex=null;
this._detectOrientation();
this._mouseInit();
this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"+(p.disabled?" ui-slider-disabled ui-disabled":""));
this.range=b([]);
if(p.range){if(p.range===true){if(!p.values){p.values=[this._valueMin(),this._valueMin()]
}if(p.values.length&&p.values.length!==2){p.values=[p.values[0],p.values[0]]
}}this.range=b("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+((p.range==="min"||p.range==="max")?" ui-slider-range-"+p.range:""))
}for(var h=n.length;
h<f;
h+=1){k.push(l)
}this.handles=n.add(b(k.join("")).appendTo(g.element));
this.handle=this.handles.eq(0);
this.handles.add(this.range).filter("a").click(function(o){o.preventDefault()
}).hover(function(){if(!p.disabled){b(this).addClass("ui-state-hover")
}},function(){b(this).removeClass("ui-state-hover")
}).focus(function(){if(!p.disabled){b(".ui-slider .ui-state-focus").removeClass("ui-state-focus");
b(this).addClass("ui-state-focus")
}else{b(this).blur()
}}).blur(function(){b(this).removeClass("ui-state-focus")
});
this.handles.each(function(o){b(this).data("index.ui-slider-handle",o)
});
this.handles.keydown(function(u){var q=b(this).data("index.ui-slider-handle"),w,r,o,s;
if(g.options.disabled){return
}switch(u.keyCode){case b.ui.keyCode.HOME:case b.ui.keyCode.END:case b.ui.keyCode.PAGE_UP:case b.ui.keyCode.PAGE_DOWN:case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:u.preventDefault();
if(!g._keySliding){g._keySliding=true;
b(this).addClass("ui-state-active");
w=g._start(u,q);
if(w===false){return
}}break
}s=g.options.step;
if(g.options.values&&g.options.values.length){r=o=g.values(q)
}else{r=o=g.value()
}switch(u.keyCode){case b.ui.keyCode.HOME:o=g._valueMin();
break;
case b.ui.keyCode.END:o=g._valueMax();
break;
case b.ui.keyCode.PAGE_UP:o=g._trimAlignValue(r+((g._valueMax()-g._valueMin())/a));
break;
case b.ui.keyCode.PAGE_DOWN:o=g._trimAlignValue(r-((g._valueMax()-g._valueMin())/a));
break;
case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:if(r===g._valueMax()){return
}o=g._trimAlignValue(r+s);
break;
case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:if(r===g._valueMin()){return
}o=g._trimAlignValue(r-s);
break
}g._slide(u,q,o)
}).keyup(function(q){var o=b(this).data("index.ui-slider-handle");
if(g._keySliding){g._keySliding=false;
g._stop(q,o);
g._change(q,o);
b(this).removeClass("ui-state-active")
}});
this._refreshValue();
this._animateOff=false
},destroy:function(){this.handles.remove();
this.range.remove();
this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");
this._mouseDestroy();
return this
},_mouseCapture:function(h){var k=this.options,p,r,g,l,u,q,s,n,f;
if(k.disabled){return false
}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};
this.elementOffset=this.element.offset();
p={x:h.pageX,y:h.pageY};
r=this._normValueFromMouse(p);
g=this._valueMax()-this._valueMin()+1;
u=this;
this.handles.each(function(o){var w=Math.abs(r-u.values(o));
if(g>w){g=w;
l=b(this);
q=o
}});
if(k.range===true&&this.values(1)===k.min){q+=1;
l=b(this.handles[q])
}s=this._start(h,q);
if(s===false){return false
}this._mouseSliding=true;
u._handleIndex=q;
l.addClass("ui-state-active").focus();
n=l.offset();
f=!b(h.target).parents().andSelf().is(".ui-slider-handle");
this._clickOffset=f?{left:0,top:0}:{left:h.pageX-n.left-(l.width()/2),top:h.pageY-n.top-(l.height()/2)-(parseInt(l.css("borderTopWidth"),10)||0)-(parseInt(l.css("borderBottomWidth"),10)||0)+(parseInt(l.css("marginTop"),10)||0)};
if(!this.handles.hasClass("ui-state-hover")){this._slide(h,q,r)
}this._animateOff=true;
return true
},_mouseStart:function(f){return true
},_mouseDrag:function(h){var f={x:h.pageX,y:h.pageY},g=this._normValueFromMouse(f);
this._slide(h,this._handleIndex,g);
return false
},_mouseStop:function(f){this.handles.removeClass("ui-state-active");
this._mouseSliding=false;
this._stop(f,this._handleIndex);
this._change(f,this._handleIndex);
this._handleIndex=null;
this._clickOffset=null;
this._animateOff=false;
return false
},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal"
},_normValueFromMouse:function(g){var f,l,k,h,n;
if(this.orientation==="horizontal"){f=this.elementSize.width;
l=g.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)
}else{f=this.elementSize.height;
l=g.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)
}k=(l/f);
if(k>1){k=1
}if(k<0){k=0
}if(this.orientation==="vertical"){k=1-k
}h=this._valueMax()-this._valueMin();
n=this._valueMin()+k*h;
return this._trimAlignValue(n)
},_start:function(h,g){var f={handle:this.handles[g],value:this.value()};
if(this.options.values&&this.options.values.length){f.value=this.values(g);
f.values=this.values()
}return this._trigger("start",h,f)
},_slide:function(l,k,h){var f,g,n;
if(this.options.values&&this.options.values.length){f=this.values(k?0:1);
if((this.options.values.length===2&&this.options.range===true)&&((k===0&&h>f)||(k===1&&h<f))){h=f
}if(h!==this.values(k)){g=this.values();
g[k]=h;
n=this._trigger("slide",l,{handle:this.handles[k],value:h,values:g});
f=this.values(k?0:1);
if(n!==false){this.values(k,h,true)
}}}else{if(h!==this.value()){n=this._trigger("slide",l,{handle:this.handles[k],value:h});
if(n!==false){this.value(h)
}}}},_stop:function(h,g){var f={handle:this.handles[g],value:this.value()};
if(this.options.values&&this.options.values.length){f.value=this.values(g);
f.values=this.values()
}this._trigger("stop",h,f)
},_change:function(h,g){if(!this._keySliding&&!this._mouseSliding){var f={handle:this.handles[g],value:this.value()};
if(this.options.values&&this.options.values.length){f.value=this.values(g);
f.values=this.values()
}this._trigger("change",h,f)
}},value:function(f){if(arguments.length){this.options.value=this._trimAlignValue(f);
this._refreshValue();
this._change(null,0);
return
}return this._value()
},values:function(g,l){var k,f,h;
if(arguments.length>1){this.options.values[g]=this._trimAlignValue(l);
this._refreshValue();
this._change(null,g);
return
}if(arguments.length){if(b.isArray(arguments[0])){k=this.options.values;
f=arguments[0];
for(h=0;
h<k.length;
h+=1){k[h]=this._trimAlignValue(f[h]);
this._change(null,h)
}this._refreshValue()
}else{if(this.options.values&&this.options.values.length){return this._values(g)
}else{return this.value()
}}}else{return this._values()
}},_setOption:function(g,h){var f,k=0;
if(b.isArray(this.options.values)){k=this.options.values.length
}b.Widget.prototype._setOption.apply(this,arguments);
switch(g){case"disabled":if(h){this.handles.filter(".ui-state-focus").blur();
this.handles.removeClass("ui-state-hover");
this.handles.propAttr("disabled",true);
this.element.addClass("ui-disabled")
}else{this.handles.propAttr("disabled",false);
this.element.removeClass("ui-disabled")
}break;
case"orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);
this._refreshValue();
break;
case"value":this._animateOff=true;
this._refreshValue();
this._change(null,0);
this._animateOff=false;
break;
case"values":this._animateOff=true;
this._refreshValue();
for(f=0;
f<k;
f+=1){this._change(null,f)
}this._animateOff=false;
break
}},_value:function(){var f=this.options.value;
f=this._trimAlignValue(f);
return f
},_values:function(f){var k,h,g;
if(arguments.length){k=this.options.values[f];
k=this._trimAlignValue(k);
return k
}else{h=this.options.values.slice();
for(g=0;
g<h.length;
g+=1){h[g]=this._trimAlignValue(h[g])
}return h
}},_trimAlignValue:function(k){if(k<=this._valueMin()){return this._valueMin()
}if(k>=this._valueMax()){return this._valueMax()
}var f=(this.options.step>0)?this.options.step:1,h=(k-this._valueMin())%f,g=k-h;
if(Math.abs(h)*2>=f){g+=(h>0)?f:(-f)
}return parseFloat(g.toFixed(5))
},_valueMin:function(){return this.options.min
},_valueMax:function(){return this.options.max
},_refreshValue:function(){var k=this.options.range,h=this.options,s=this,g=(!this._animateOff)?h.animate:false,l,f={},n,q,p,r;
if(this.options.values&&this.options.values.length){this.handles.each(function(u,o){l=(s.values(u)-s._valueMin())/(s._valueMax()-s._valueMin())*100;
f[s.orientation==="horizontal"?"left":"bottom"]=l+"%";
b(this).stop(1,1)[g?"animate":"css"](f,h.animate);
if(s.options.range===true){if(s.orientation==="horizontal"){if(u===0){s.range.stop(1,1)[g?"animate":"css"]({left:l+"%"},h.animate)
}if(u===1){s.range[g?"animate":"css"]({width:(l-n)+"%"},{queue:false,duration:h.animate})
}}else{if(u===0){s.range.stop(1,1)[g?"animate":"css"]({bottom:(l)+"%"},h.animate)
}if(u===1){s.range[g?"animate":"css"]({height:(l-n)+"%"},{queue:false,duration:h.animate})
}}}n=l
})
}else{q=this.value();
p=this._valueMin();
r=this._valueMax();
l=(r!==p)?(q-p)/(r-p)*100:0;
f[s.orientation==="horizontal"?"left":"bottom"]=l+"%";
this.handle.stop(1,1)[g?"animate":"css"](f,h.animate);
if(k==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[g?"animate":"css"]({width:l+"%"},h.animate)
}if(k==="max"&&this.orientation==="horizontal"){this.range[g?"animate":"css"]({width:(100-l)+"%"},{queue:false,duration:h.animate})
}if(k==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[g?"animate":"css"]({height:l+"%"},h.animate)
}if(k==="max"&&this.orientation==="vertical"){this.range[g?"animate":"css"]({height:(100-l)+"%"},{queue:false,duration:h.animate})
}}}});
b.extend(b.ui.slider,{version:"1.8.18"})
}(jQuery));
(function(f,h){var c=0,b=0;
function g(){return ++c
}function a(){return ++b
}f.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(true)
},_setOption:function(k,l){if(k=="selected"){if(this.options.collapsible&&l==this.options.selected){return
}this.select(l)
}else{this.options[k]=l;
this._tabify()
}},_tabId:function(k){return k.title&&k.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+g()
},_sanitizeSelector:function(k){return k.replace(/:/g,"\\:")
},_cookie:function(){var k=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+a());
return f.cookie.apply(null,[k].concat(f.makeArray(arguments)))
},_ui:function(l,k){return{tab:l,panel:k,index:this.anchors.index(l)}
},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var k=f(this);
k.html(k.data("label.tabs")).removeData("label.tabs")
})
},_tabify:function(A){var B=this,n=this.options,l=/^#.+/;
this.list=this.element.find("ol,ul").eq(0);
this.lis=f(" > li:has(a[href])",this.list);
this.anchors=this.lis.map(function(){return f("a",this)[0]
});
this.panels=f([]);
this.anchors.each(function(D,o){var C=f(o).attr("href");
var E=C.split("#")[0],F;
if(E&&(E===location.toString().split("#")[0]||(F=f("base")[0])&&E===F.href)){C=o.hash;
o.href=C
}if(l.test(C)){B.panels=B.panels.add(B.element.find(B._sanitizeSelector(C)))
}else{if(C&&C!=="#"){f.data(o,"href.tabs",C);
f.data(o,"load.tabs",C.replace(/#.*$/,""));
var H=B._tabId(o);
o.href="#"+H;
var G=B.element.find("#"+H);
if(!G.length){G=f(n.panelTemplate).attr("id",H).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(B.panels[D-1]||B.list);
G.data("destroy.tabs",true)
}B.panels=B.panels.add(G)
}else{n.disabled.push(D)
}}});
if(A){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
this.lis.addClass("ui-state-default ui-corner-top");
this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");
if(n.selected===h){if(location.hash){this.anchors.each(function(C,o){if(o.hash==location.hash){n.selected=C;
return false
}})
}if(typeof n.selected!=="number"&&n.cookie){n.selected=parseInt(B._cookie(),10)
}if(typeof n.selected!=="number"&&this.lis.filter(".ui-tabs-selected").length){n.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))
}n.selected=n.selected||(this.lis.length?0:-1)
}else{if(n.selected===null){n.selected=-1
}}n.selected=((n.selected>=0&&this.anchors[n.selected])||n.selected<0)?n.selected:0;
n.disabled=f.unique(n.disabled.concat(f.map(this.lis.filter(".ui-state-disabled"),function(C,o){return B.lis.index(C)
}))).sort();
if(f.inArray(n.selected,n.disabled)!=-1){n.disabled.splice(f.inArray(n.selected,n.disabled),1)
}this.panels.addClass("ui-tabs-hide");
this.lis.removeClass("ui-tabs-selected ui-state-active");
if(n.selected>=0&&this.anchors.length){B.element.find(B._sanitizeSelector(B.anchors[n.selected].hash)).removeClass("ui-tabs-hide");
this.lis.eq(n.selected).addClass("ui-tabs-selected ui-state-active");
B.element.queue("tabs",function(){B._trigger("show",null,B._ui(B.anchors[n.selected],B.element.find(B._sanitizeSelector(B.anchors[n.selected].hash))[0]))
});
this.load(n.selected)
}f(window).bind("unload",function(){B.lis.add(B.anchors).unbind(".tabs");
B.lis=B.anchors=B.panels=null
})
}else{n.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))
}this.element[n.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");
if(n.cookie){this._cookie(n.selected,n.cookie)
}for(var r=0,z;
(z=this.lis[r]);
r++){f(z)[f.inArray(r,n.disabled)!=-1&&!f(z).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled")
}if(n.cache===false){this.anchors.removeData("cache.tabs")
}this.lis.add(this.anchors).unbind(".tabs");
if(n.event!=="mouseover"){var q=function(C,o){if(o.is(":not(.ui-state-disabled)")){o.addClass("ui-state-"+C)
}};
var u=function(C,o){o.removeClass("ui-state-"+C)
};
this.lis.bind("mouseover.tabs",function(){q("hover",f(this))
});
this.lis.bind("mouseout.tabs",function(){u("hover",f(this))
});
this.anchors.bind("focus.tabs",function(){q("focus",f(this).closest("li"))
});
this.anchors.bind("blur.tabs",function(){u("focus",f(this).closest("li"))
})
}var k,s;
if(n.fx){if(f.isArray(n.fx)){k=n.fx[0];
s=n.fx[1]
}else{k=s=n.fx
}}function p(o,C){o.css("display","");
if(!f.support.opacity&&C.opacity){o[0].style.removeAttribute("filter")
}}var w=s?function(o,C){f(o).closest("li").addClass("ui-tabs-selected ui-state-active");
C.hide().removeClass("ui-tabs-hide").animate(s,s.duration||"normal",function(){p(C,s);
B._trigger("show",null,B._ui(o,C[0]))
})
}:function(o,C){f(o).closest("li").addClass("ui-tabs-selected ui-state-active");
C.removeClass("ui-tabs-hide");
B._trigger("show",null,B._ui(o,C[0]))
};
var x=k?function(C,o){o.animate(k,k.duration||"normal",function(){B.lis.removeClass("ui-tabs-selected ui-state-active");
o.addClass("ui-tabs-hide");
p(o,k);
B.element.dequeue("tabs")
})
}:function(C,o,D){B.lis.removeClass("ui-tabs-selected ui-state-active");
o.addClass("ui-tabs-hide");
B.element.dequeue("tabs")
};
this.anchors.bind(n.event+".tabs",function(){var C=this,E=f(C).closest("li"),o=B.panels.filter(":not(.ui-tabs-hide)"),D=B.element.find(B._sanitizeSelector(C.hash));
if((E.hasClass("ui-tabs-selected")&&!n.collapsible)||E.hasClass("ui-state-disabled")||E.hasClass("ui-state-processing")||B.panels.filter(":animated").length||B._trigger("select",null,B._ui(this,D[0]))===false){this.blur();
return false
}n.selected=B.anchors.index(this);
B.abort();
if(n.collapsible){if(E.hasClass("ui-tabs-selected")){n.selected=-1;
if(n.cookie){B._cookie(n.selected,n.cookie)
}B.element.queue("tabs",function(){x(C,o)
}).dequeue("tabs");
this.blur();
return false
}else{if(!o.length){if(n.cookie){B._cookie(n.selected,n.cookie)
}B.element.queue("tabs",function(){w(C,D)
});
B.load(B.anchors.index(this));
this.blur();
return false
}}}if(n.cookie){B._cookie(n.selected,n.cookie)
}if(D.length){if(o.length){B.element.queue("tabs",function(){x(C,o)
})
}B.element.queue("tabs",function(){w(C,D)
});
B.load(B.anchors.index(this))
}else{throw"jQuery UI Tabs: Mismatching fragment identifier."
}if(f.browser.msie){this.blur()
}});
this.anchors.bind("click.tabs",function(){return false
})
},_getIndex:function(k){if(typeof k=="string"){k=this.anchors.index(this.anchors.filter("[href$="+k+"]"))
}return k
},destroy:function(){var k=this.options;
this.abort();
this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");
this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
this.anchors.each(function(){var l=f.data(this,"href.tabs");
if(l){this.href=l
}var n=f(this).unbind(".tabs");
f.each(["href","load","cache"],function(o,p){n.removeData(p+".tabs")
})
});
this.lis.unbind(".tabs").add(this.panels).each(function(){if(f.data(this,"destroy.tabs")){f(this).remove()
}else{f(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "))
}});
if(k.cookie){this._cookie(null,k.cookie)
}return this
},add:function(p,n,l){if(l===h){l=this.anchors.length
}var k=this,r=this.options,u=f(r.tabTemplate.replace(/#\{href\}/g,p).replace(/#\{label\}/g,n)),s=!p.indexOf("#")?p.replace("#",""):this._tabId(f("a",u)[0]);
u.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);
var q=k.element.find("#"+s);
if(!q.length){q=f(r.panelTemplate).attr("id",s).data("destroy.tabs",true)
}q.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");
if(l>=this.lis.length){u.appendTo(this.list);
q.appendTo(this.list[0].parentNode)
}else{u.insertBefore(this.lis[l]);
q.insertBefore(this.panels[l])
}r.disabled=f.map(r.disabled,function(w,o){return w>=l?++w:w
});
this._tabify();
if(this.anchors.length==1){r.selected=0;
u.addClass("ui-tabs-selected ui-state-active");
q.removeClass("ui-tabs-hide");
this.element.queue("tabs",function(){k._trigger("show",null,k._ui(k.anchors[0],k.panels[0]))
});
this.load(0)
}this._trigger("add",null,this._ui(this.anchors[l],this.panels[l]));
return this
},remove:function(k){k=this._getIndex(k);
var n=this.options,p=this.lis.eq(k).remove(),l=this.panels.eq(k).remove();
if(p.hasClass("ui-tabs-selected")&&this.anchors.length>1){this.select(k+(k+1<this.anchors.length?1:-1))
}n.disabled=f.map(f.grep(n.disabled,function(q,o){return q!=k
}),function(q,o){return q>=k?--q:q
});
this._tabify();
this._trigger("remove",null,this._ui(p.find("a")[0],l[0]));
return this
},enable:function(k){k=this._getIndex(k);
var l=this.options;
if(f.inArray(k,l.disabled)==-1){return
}this.lis.eq(k).removeClass("ui-state-disabled");
l.disabled=f.grep(l.disabled,function(p,o){return p!=k
});
this._trigger("enable",null,this._ui(this.anchors[k],this.panels[k]));
return this
},disable:function(l){l=this._getIndex(l);
var k=this,n=this.options;
if(l!=n.selected){this.lis.eq(l).addClass("ui-state-disabled");
n.disabled.push(l);
n.disabled.sort();
this._trigger("disable",null,this._ui(this.anchors[l],this.panels[l]))
}return this
},select:function(k){k=this._getIndex(k);
if(k==-1){if(this.options.collapsible&&this.options.selected!=-1){k=this.options.selected
}else{return this
}}this.anchors.eq(k).trigger(this.options.event+".tabs");
return this
},load:function(p){p=this._getIndex(p);
var l=this,r=this.options,k=this.anchors.eq(p)[0],n=f.data(k,"load.tabs");
this.abort();
if(!n||this.element.queue("tabs").length!==0&&f.data(k,"cache.tabs")){this.element.dequeue("tabs");
return
}this.lis.eq(p).addClass("ui-state-processing");
if(r.spinner){var q=f("span",k);
q.data("label.tabs",q.html()).html(r.spinner)
}this.xhr=f.ajax(f.extend({},r.ajaxOptions,{url:n,success:function(u,o){l.element.find(l._sanitizeSelector(k.hash)).html(u);
l._cleanup();
if(r.cache){f.data(k,"cache.tabs",true)
}l._trigger("load",null,l._ui(l.anchors[p],l.panels[p]));
try{r.ajaxOptions.success(u,o)
}catch(w){}},error:function(w,o,u){l._cleanup();
l._trigger("load",null,l._ui(l.anchors[p],l.panels[p]));
try{r.ajaxOptions.error(w,o,p,k)
}catch(u){}}}));
l.element.dequeue("tabs");
return this
},abort:function(){this.element.queue([]);
this.panels.stop(false,true);
this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));
if(this.xhr){this.xhr.abort();
delete this.xhr
}this._cleanup();
return this
},url:function(l,k){this.anchors.eq(l).removeData("cache.tabs").data("load.tabs",k);
return this
},length:function(){return this.anchors.length
}});
f.extend(f.ui.tabs,{version:"1.8.18"});
f.extend(f.ui.tabs.prototype,{rotation:null,rotate:function(n,q){var k=this,r=this.options;
var l=k._rotate||(k._rotate=function(o){clearTimeout(k.rotation);
k.rotation=setTimeout(function(){var s=r.selected;
k.select(++s<k.anchors.length?s:0)
},n);
if(o){o.stopPropagation()
}});
var p=k._unrotate||(k._unrotate=!q?function(o){if(o.clientX){k.rotate(null)
}}:function(o){t=r.selected;
l()
});
if(n){this.element.bind("tabsshow",l);
this.anchors.bind(r.event+".tabs",p);
l()
}else{clearTimeout(k.rotation);
this.element.unbind("tabsshow",l);
this.anchors.unbind(r.event+".tabs",p);
delete this._rotate;
delete this._unrotate
}return this
}})
})(jQuery);
(function(a){a.extend(a.fn,{delayedObserver:function(f,c,b){return this.each(function(){var g=a(this);
var h=b||{};
g.data("oldval",g.val()).data("delay",c||0.5).data("condition",h.condition||function(){return(a(this).data("oldval")==a(this).val())
}).data("callback",f)[(h.event||"keyup")](function(){if(g.data("condition").apply(g)){return
}else{if(g.data("timer")){clearTimeout(g.data("timer"))
}g.data("timer",setTimeout(function(){g.data("callback").apply(g)
},g.data("delay")*1000));
g.data("oldval",g.val())
}})
})
}})
})(jQuery);
(function(a){a.fn.hoverIntent=function(p,o){var q={sensitivity:7,interval:100,timeout:0};
q=a.extend(q,o?{over:p,out:o}:p);
var s,r,l,h;
var k=function(f){s=f.pageX;
r=f.pageY
};
var c=function(g,f){f.hoverIntent_t=clearTimeout(f.hoverIntent_t);
if((Math.abs(l-s)+Math.abs(h-r))<q.sensitivity){a(f).unbind("mousemove",k);
f.hoverIntent_s=1;
return q.over.apply(f,[g])
}else{l=s;
h=r;
f.hoverIntent_t=setTimeout(function(){c(g,f)
},q.interval)
}};
var n=function(g,f){f.hoverIntent_t=clearTimeout(f.hoverIntent_t);
f.hoverIntent_s=0;
return q.out.apply(f,[g])
};
var b=function(u){var g=jQuery.extend({},u);
var f=this;
if(f.hoverIntent_t){f.hoverIntent_t=clearTimeout(f.hoverIntent_t)
}if(u.type=="mouseenter"){l=g.pageX;
h=g.pageY;
a(f).bind("mousemove",k);
if(f.hoverIntent_s!=1){f.hoverIntent_t=setTimeout(function(){c(g,f)
},q.interval)
}}else{a(f).unbind("mousemove",k);
if(f.hoverIntent_s==1){f.hoverIntent_t=setTimeout(function(){n(g,f)
},q.timeout)
}}};
return this.bind("mouseenter",b).bind("mouseleave",b)
}
})(jQuery);
(function(a){a.extend(a.event,{keyCodes:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}})
})(jQuery);
(function(window,undefined){var S={version:"3.0.3"};
var ua=navigator.userAgent.toLowerCase();
if(ua.indexOf("windows")>-1||ua.indexOf("win32")>-1){S.isWindows=true
}else{if(ua.indexOf("macintosh")>-1||ua.indexOf("mac os x")>-1){S.isMac=true
}else{if(ua.indexOf("linux")>-1){S.isLinux=true
}}}S.isIE=ua.indexOf("msie")>-1;
S.isIE6=ua.indexOf("msie 6")>-1;
S.isIE7=ua.indexOf("msie 7")>-1;
S.isGecko=ua.indexOf("gecko")>-1&&ua.indexOf("safari")==-1;
S.isWebKit=ua.indexOf("applewebkit/")>-1;
var inlineId=/#(.+)$/,galleryName=/^(light|shadow)box\[(.*?)\]/i,inlineParam=/\s*([a-z_]*?)\s*=\s*(.+)\s*/,fileExtension=/[0-9a-z]+$/i,scriptPath=/(.+\/)shadowbox\.js/i;
var open=false,initialized=false,lastOptions={},slideDelay=0,slideStart,slideTimer;
S.current=-1;
S.dimensions=null;
S.ease=function(state){return 1+Math.pow(state-1,3)
};
S.errorInfo={fla:{name:"Flash",url:"http://www.adobe.com/products/flashplayer/"},qt:{name:"QuickTime",url:"http://www.apple.com/quicktime/download/"},wmp:{name:"Windows Media Player",url:"http://www.microsoft.com/windows/windowsmedia/"},f4m:{name:"Flip4Mac",url:"http://www.flip4mac.com/wmv_download.htm"}};
S.gallery=[];
S.onReady=noop;
S.path=null;
S.player=null;
S.playerId="sb-player";
S.options={animate:true,animateFade:true,autoplayMovies:true,continuous:false,enableKeys:true,flashParams:{bgcolor:"#000000",allowfullscreen:true},flashVars:{},flashVersion:"9.0.115",handleOversize:"resize",handleUnsupported:"link",onChange:noop,onClose:noop,onFinish:noop,onOpen:noop,showMovieControls:true,skipSetup:false,slideshowDelay:0,viewportPadding:20};
S.getCurrent=function(){return S.current>-1?S.gallery[S.current]:null
};
S.hasNext=function(){return S.gallery.length>1&&(S.current!=S.gallery.length-1||S.options.continuous)
};
S.isOpen=function(){return open
};
S.isPaused=function(){return slideTimer=="pause"
};
S.applyOptions=function(options){lastOptions=apply({},S.options);
apply(S.options,options)
};
S.revertOptions=function(){apply(S.options,lastOptions)
};
S.init=function(options,callback){if(initialized){return
}initialized=true;
if(S.skin.options){apply(S.options,S.skin.options)
}if(options){apply(S.options,options)
}if(!S.path){var path,scripts=document.getElementsByTagName("script");
for(var i=0,len=scripts.length;
i<len;
++i){path=scriptPath.exec(scripts[i].src);
if(path){S.path=path[1];
break
}}}if(callback){S.onReady=callback
}bindLoad()
};
S.open=function(obj){if(open){return
}var gc=S.makeGallery(obj);
S.gallery=gc[0];
S.current=gc[1];
obj=S.getCurrent();
if(obj==null){return
}S.applyOptions(obj.options||{});
filterGallery();
if(S.gallery.length){obj=S.getCurrent();
if(S.options.onOpen(obj)===false){return
}open=true;
S.skin.onOpen(obj,load)
}};
S.close=function(){if(!open){return
}open=false;
if(S.player){S.player.remove();
S.player=null
}if(typeof slideTimer=="number"){clearTimeout(slideTimer);
slideTimer=null
}slideDelay=0;
listenKeys(false);
S.options.onClose(S.getCurrent());
S.skin.onClose();
S.revertOptions()
};
S.play=function(){if(!S.hasNext()){return
}if(!slideDelay){slideDelay=S.options.slideshowDelay*1000
}if(slideDelay){slideStart=now();
slideTimer=setTimeout(function(){slideDelay=slideStart=0;
S.next()
},slideDelay);
if(S.skin.onPlay){S.skin.onPlay()
}}};
S.pause=function(){if(typeof slideTimer!="number"){return
}slideDelay=Math.max(0,slideDelay-(now()-slideStart));
if(slideDelay){clearTimeout(slideTimer);
slideTimer="pause";
if(S.skin.onPause){S.skin.onPause()
}}};
S.change=function(index){if(!(index in S.gallery)){if(S.options.continuous){index=(index<0?S.gallery.length+index:0);
if(!(index in S.gallery)){return
}}else{return
}}S.current=index;
if(typeof slideTimer=="number"){clearTimeout(slideTimer);
slideTimer=null;
slideDelay=slideStart=0
}S.options.onChange(S.getCurrent());
load(true)
};
S.next=function(){S.change(S.current+1)
};
S.previous=function(){S.change(S.current-1)
};
S.setDimensions=function(height,width,maxHeight,maxWidth,topBottom,leftRight,padding,preserveAspect){var originalHeight=height,originalWidth=width;
var extraHeight=2*padding+topBottom;
if(height+extraHeight>maxHeight){height=maxHeight-extraHeight
}var extraWidth=2*padding+leftRight;
if(width+extraWidth>maxWidth){width=maxWidth-extraWidth
}var changeHeight=(originalHeight-height)/originalHeight,changeWidth=(originalWidth-width)/originalWidth,oversized=(changeHeight>0||changeWidth>0);
if(preserveAspect&&oversized){if(changeHeight>changeWidth){width=Math.round((originalWidth/originalHeight)*height)
}else{if(changeWidth>changeHeight){height=Math.round((originalHeight/originalWidth)*width)
}}}S.dimensions={height:height+topBottom,width:width+leftRight,innerHeight:height,innerWidth:width,top:Math.floor((maxHeight-(height+extraHeight))/2+padding),left:Math.floor((maxWidth-(width+extraWidth))/2+padding),oversized:oversized};
return S.dimensions
};
S.makeGallery=function(obj){var gallery=[],current=-1;
if(typeof obj=="string"){obj=[obj]
}if(typeof obj.length=="number"){each(obj,function(i,o){if(o.content){gallery[i]=o
}else{gallery[i]={content:o}
}});
current=0
}else{if(obj.tagName){var cacheObj=S.getCache(obj);
obj=cacheObj?cacheObj:S.makeObject(obj)
}if(obj.gallery){gallery=[];
var o;
for(var key in S.cache){o=S.cache[key];
if(o.gallery&&o.gallery==obj.gallery){if(current==-1&&o.content==obj.content){current=gallery.length
}gallery.push(o)
}}if(current==-1){gallery.unshift(obj);
current=0
}}else{gallery=[obj];
current=0
}}each(gallery,function(i,o){gallery[i]=apply({},o)
});
return[gallery,current]
};
S.makeObject=function(link,options){var obj={content:link.href,title:link.getAttribute("title")||"",link:link};
if(options){options=apply({},options);
each(["player","title","height","width","gallery"],function(i,o){if(typeof options[o]!="undefined"){obj[o]=options[o];
delete options[o]
}});
obj.options=options
}else{obj.options={}
}if(!obj.player){obj.player=S.getPlayer(obj.content)
}var rel=link.getAttribute("rel");
if(rel){var match=rel.match(galleryName);
if(match){obj.gallery=escape(match[2])
}each(rel.split(";"),function(i,p){match=p.match(inlineParam);
if(match){obj[match[1]]=match[2]
}})
}return obj
};
S.getPlayer=function(content){if(content.indexOf("#")>-1&&content.indexOf(document.location.href)==0){return"inline"
}var q=content.indexOf("?");
if(q>-1){content=content.substring(0,q)
}var ext,m=content.match(fileExtension);
if(m){ext=m[0].toLowerCase()
}if(ext){if(S.img&&S.img.ext.indexOf(ext)>-1){return"img"
}if(S.swf&&S.swf.ext.indexOf(ext)>-1){return"swf"
}if(S.flv&&S.flv.ext.indexOf(ext)>-1){return"flv"
}if(S.qt&&S.qt.ext.indexOf(ext)>-1){if(S.wmp&&S.wmp.ext.indexOf(ext)>-1){return"qtwmp"
}else{return"qt"
}}if(S.wmp&&S.wmp.ext.indexOf(ext)>-1){return"wmp"
}}return"iframe"
};
function filterGallery(){var err=S.errorInfo,plugins=S.plugins,obj,remove,needed,m,format,replace,inlineEl,flashVersion;
for(var i=0;
i<S.gallery.length;
++i){obj=S.gallery[i];
remove=false;
needed=null;
switch(obj.player){case"flv":case"swf":if(!plugins.fla){needed="fla"
}break;
case"qt":if(!plugins.qt){needed="qt"
}break;
case"wmp":if(S.isMac){if(plugins.qt&&plugins.f4m){obj.player="qt"
}else{needed="qtf4m"
}}else{if(!plugins.wmp){needed="wmp"
}}break;
case"qtwmp":if(plugins.qt){obj.player="qt"
}else{if(plugins.wmp){obj.player="wmp"
}else{needed="qtwmp"
}}break
}if(needed){if(S.options.handleUnsupported=="link"){switch(needed){case"qtf4m":format="shared";
replace=[err.qt.url,err.qt.name,err.f4m.url,err.f4m.name];
break;
case"qtwmp":format="either";
replace=[err.qt.url,err.qt.name,err.wmp.url,err.wmp.name];
break;
default:format="single";
replace=[err[needed].url,err[needed].name]
}obj.player="html";
obj.content='<div class="sb-message">'+sprintf(S.lang.errors[format],replace)+"</div>"
}else{remove=true
}}else{if(obj.player=="inline"){m=inlineId.exec(obj.content);
if(m){inlineEl=get(m[1]);
if(inlineEl){obj.content=inlineEl.innerHTML
}else{remove=true
}}else{remove=true
}}else{if(obj.player=="swf"||obj.player=="flv"){flashVersion=(obj.options&&obj.options.flashVersion)||S.options.flashVersion;
if(S.flash&&!S.flash.hasFlashPlayerVersion(flashVersion)){obj.width=310;
obj.height=177
}}}}if(remove){S.gallery.splice(i,1);
if(i<S.current){--S.current
}else{if(i==S.current){S.current=i>0?i-1:i
}}--i
}}}function listenKeys(on){if(!S.options.enableKeys){return
}(on?addEvent:removeEvent)(document,"keydown",handleKey)
}function handleKey(e){if(e.metaKey||e.shiftKey||e.altKey||e.ctrlKey){return
}var code=keyCode(e),handler;
switch(code){case 81:case 88:case 27:handler=S.close;
break;
case 37:handler=S.previous;
break;
case 39:handler=S.next;
break;
case 32:handler=typeof slideTimer=="number"?S.pause:S.play;
break
}if(handler){preventDefault(e);
handler()
}}function load(changing){listenKeys(false);
var obj=S.getCurrent();
var player=(obj.player=="inline"?"html":obj.player);
if(typeof S[player]!="function"){throw"unknown player "+player
}if(changing){S.player.remove();
S.revertOptions();
S.applyOptions(obj.options||{})
}S.player=new S[player](obj,S.playerId);
if(S.gallery.length>1){var next=S.gallery[S.current+1]||S.gallery[0];
if(next.player=="img"){var a=new Image();
a.src=next.content
}var prev=S.gallery[S.current-1]||S.gallery[S.gallery.length-1];
if(prev.player=="img"){var b=new Image();
b.src=prev.content
}}S.skin.onLoad(changing,waitReady)
}function waitReady(){if(!open){return
}if(typeof S.player.ready!="undefined"){var timer=setInterval(function(){if(open){if(S.player.ready){clearInterval(timer);
timer=null;
S.skin.onReady(show)
}}else{clearInterval(timer);
timer=null
}},10)
}else{S.skin.onReady(show)
}}function show(){if(!open){return
}S.player.append(S.skin.body,S.dimensions);
S.skin.onShow(finish)
}function finish(){if(!open){return
}if(S.player.onLoad){S.player.onLoad()
}S.options.onFinish(S.getCurrent());
if(!S.isPaused()){S.play()
}listenKeys(true)
}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(obj,from){var len=this.length>>>0;
from=from||0;
if(from<0){from+=len
}for(;
from<len;
++from){if(from in this&&this[from]===obj){return from
}}return -1
}
}function now(){return(new Date).getTime()
}function apply(original,extension){for(var property in extension){original[property]=extension[property]
}return original
}function each(obj,callback){var i=0,len=obj.length;
for(var value=obj[0];
i<len&&callback.call(value,i,value)!==false;
value=obj[++i]){}}function sprintf(str,replace){return str.replace(/\{(\w+?)\}/g,function(match,i){return replace[i]
})
}function noop(){}function get(id){return document.getElementById(id)
}function remove(el){el.parentNode.removeChild(el)
}var supportsOpacity=true,supportsFixed=true;
function checkSupport(){var body=document.body,div=document.createElement("div");
supportsOpacity=typeof div.style.opacity==="string";
div.style.position="fixed";
div.style.margin=0;
div.style.top="20px";
body.appendChild(div,body.firstChild);
supportsFixed=div.offsetTop==20;
body.removeChild(div)
}S.getStyle=(function(){var opacity=/opacity=([^)]*)/,getComputedStyle=document.defaultView&&document.defaultView.getComputedStyle;
return function(el,style){var ret;
if(!supportsOpacity&&style=="opacity"&&el.currentStyle){ret=opacity.test(el.currentStyle.filter||"")?(parseFloat(RegExp.$1)/100)+"":"";
return ret===""?"1":ret
}if(getComputedStyle){var computedStyle=getComputedStyle(el,null);
if(computedStyle){ret=computedStyle[style]
}if(style=="opacity"&&ret==""){ret="1"
}}else{ret=el.currentStyle[style]
}return ret
}
})();
S.appendHTML=function(el,html){if(el.insertAdjacentHTML){el.insertAdjacentHTML("BeforeEnd",html)
}else{if(el.lastChild){var range=el.ownerDocument.createRange();
range.setStartAfter(el.lastChild);
var frag=range.createContextualFragment(html);
el.appendChild(frag)
}else{el.innerHTML=html
}}};
S.getWindowSize=function(dimension){if(document.compatMode==="CSS1Compat"){return document.documentElement["client"+dimension]
}return document.body["client"+dimension]
};
S.setOpacity=function(el,opacity){var style=el.style;
if(supportsOpacity){style.opacity=(opacity==1?"":opacity)
}else{style.zoom=1;
if(opacity==1){if(typeof style.filter=="string"&&(/alpha/i).test(style.filter)){style.filter=style.filter.replace(/\s*[\w\.]*alpha\([^\)]*\);?/gi,"")
}}else{style.filter=(style.filter||"").replace(/\s*[\w\.]*alpha\([^\)]*\)/gi,"")+" alpha(opacity="+(opacity*100)+")"
}}};
S.clearOpacity=function(el){S.setOpacity(el,1)
};
function getTarget(e){return e.target
}function getPageXY(e){return[e.pageX,e.pageY]
}function preventDefault(e){e.preventDefault()
}function keyCode(e){return e.keyCode
}function addEvent(el,type,handler){jQuery(el).bind(type,handler)
}function removeEvent(el,type,handler){jQuery(el).unbind(type,handler)
}jQuery.fn.shadowbox=function(options){return this.each(function(){var el=jQuery(this);
var opts=jQuery.extend({},options||{},jQuery.metadata?el.metadata():jQuery.meta?el.data():{});
var cls=this.className||"";
opts.width=parseInt((cls.match(/w:(\d+)/)||[])[1])||opts.width;
opts.height=parseInt((cls.match(/h:(\d+)/)||[])[1])||opts.height;
Shadowbox.setup(el,opts)
})
};
var loaded=false,DOMContentLoaded;
if(document.addEventListener){DOMContentLoaded=function(){document.removeEventListener("DOMContentLoaded",DOMContentLoaded,false);
S.load()
}
}else{if(document.attachEvent){DOMContentLoaded=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",DOMContentLoaded);
S.load()
}}
}}function doScrollCheck(){if(loaded){return
}try{document.documentElement.doScroll("left")
}catch(e){setTimeout(doScrollCheck,1);
return
}S.load()
}function bindLoad(){if(document.readyState==="complete"){return S.load()
}if(document.addEventListener){document.addEventListener("DOMContentLoaded",DOMContentLoaded,false);
window.addEventListener("load",S.load,false)
}else{if(document.attachEvent){document.attachEvent("onreadystatechange",DOMContentLoaded);
window.attachEvent("onload",S.load);
var topLevel=false;
try{topLevel=window.frameElement===null
}catch(e){}if(document.documentElement.doScroll&&topLevel){doScrollCheck()
}}}}S.load=function(){if(loaded){return
}if(!document.body){return setTimeout(S.load,13)
}loaded=true;
checkSupport();
S.onReady();
if(!S.options.skipSetup){S.setup()
}S.skin.init()
};
S.plugins={};
if(navigator.plugins&&navigator.plugins.length){var names=[];
each(navigator.plugins,function(i,p){names.push(p.name)
});
names=names.join(",");
var f4m=names.indexOf("Flip4Mac")>-1;
S.plugins={fla:names.indexOf("Shockwave Flash")>-1,qt:names.indexOf("QuickTime")>-1,wmp:!f4m&&names.indexOf("Windows Media")>-1,f4m:f4m}
}else{var detectPlugin=function(name){var axo;
try{axo=new ActiveXObject(name)
}catch(e){}return !!axo
};
S.plugins={fla:detectPlugin("ShockwaveFlash.ShockwaveFlash"),qt:detectPlugin("QuickTime.QuickTime"),wmp:detectPlugin("wmplayer.ocx"),f4m:false}
}var relAttr=/^(light|shadow)box/i,expando="shadowboxCacheKey",cacheKey=1;
S.cache={};
S.select=function(selector){var links=[];
if(!selector){var rel;
each(document.getElementsByTagName("a"),function(i,el){rel=el.getAttribute("rel");
if(rel&&relAttr.test(rel)){links.push(el)
}})
}else{var length=selector.length;
if(length){if(typeof selector=="string"){if(S.find){links=S.find(selector)
}}else{if(length==2&&typeof selector[0]=="string"&&selector[1].nodeType){if(S.find){links=S.find(selector[0],selector[1])
}}else{for(var i=0;
i<length;
++i){links[i]=selector[i]
}}}}else{links.push(selector)
}}return links
};
S.setup=function(selector,options){each(S.select(selector),function(i,link){S.addCache(link,options)
})
};
S.teardown=function(selector){each(S.select(selector),function(i,link){S.removeCache(link)
})
};
S.addCache=function(link,options){var key=link[expando];
if(key==undefined){key=cacheKey++;
link[expando]=key;
addEvent(link,"click",handleClick)
}S.cache[key]=S.makeObject(link,options)
};
S.removeCache=function(link){removeEvent(link,"click",handleClick);
delete S.cache[link[expando]];
link[expando]=null
};
S.getCache=function(link){var key=link[expando];
return(key in S.cache&&S.cache[key])
};
S.clearCache=function(){for(var key in S.cache){S.removeCache(S.cache[key].link)
}S.cache={}
};
function handleClick(e){S.open(this);
if(S.gallery.length){preventDefault(e)
}}S.find=(function(){var chunker=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,done=0,toString=Object.prototype.toString,hasDuplicate=false,baseHasDuplicate=true;
[0,0].sort(function(){baseHasDuplicate=false;
return 0
});
var Sizzle=function(selector,context,results,seed){results=results||[];
var origContext=context=context||document;
if(context.nodeType!==1&&context.nodeType!==9){return[]
}if(!selector||typeof selector!=="string"){return results
}var parts=[],m,set,checkSet,extra,prune=true,contextXML=isXML(context),soFar=selector;
while((chunker.exec(""),m=chunker.exec(soFar))!==null){soFar=m[3];
parts.push(m[1]);
if(m[2]){extra=m[3];
break
}}if(parts.length>1&&origPOS.exec(selector)){if(parts.length===2&&Expr.relative[parts[0]]){set=posProcess(parts[0]+parts[1],context)
}else{set=Expr.relative[parts[0]]?[context]:Sizzle(parts.shift(),context);
while(parts.length){selector=parts.shift();
if(Expr.relative[selector]){selector+=parts.shift()
}set=posProcess(selector,set)
}}}else{if(!seed&&parts.length>1&&context.nodeType===9&&!contextXML&&Expr.match.ID.test(parts[0])&&!Expr.match.ID.test(parts[parts.length-1])){var ret=Sizzle.find(parts.shift(),context,contextXML);
context=ret.expr?Sizzle.filter(ret.expr,ret.set)[0]:ret.set[0]
}if(context){var ret=seed?{expr:parts.pop(),set:makeArray(seed)}:Sizzle.find(parts.pop(),parts.length===1&&(parts[0]==="~"||parts[0]==="+")&&context.parentNode?context.parentNode:context,contextXML);
set=ret.expr?Sizzle.filter(ret.expr,ret.set):ret.set;
if(parts.length>0){checkSet=makeArray(set)
}else{prune=false
}while(parts.length){var cur=parts.pop(),pop=cur;
if(!Expr.relative[cur]){cur=""
}else{pop=parts.pop()
}if(pop==null){pop=context
}Expr.relative[cur](checkSet,pop,contextXML)
}}else{checkSet=parts=[]
}}if(!checkSet){checkSet=set
}if(!checkSet){throw"Syntax error, unrecognized expression: "+(cur||selector)
}if(toString.call(checkSet)==="[object Array]"){if(!prune){results.push.apply(results,checkSet)
}else{if(context&&context.nodeType===1){for(var i=0;
checkSet[i]!=null;
i++){if(checkSet[i]&&(checkSet[i]===true||checkSet[i].nodeType===1&&contains(context,checkSet[i]))){results.push(set[i])
}}}else{for(var i=0;
checkSet[i]!=null;
i++){if(checkSet[i]&&checkSet[i].nodeType===1){results.push(set[i])
}}}}}else{makeArray(checkSet,results)
}if(extra){Sizzle(extra,origContext,results,seed);
Sizzle.uniqueSort(results)
}return results
};
Sizzle.uniqueSort=function(results){if(sortOrder){hasDuplicate=baseHasDuplicate;
results.sort(sortOrder);
if(hasDuplicate){for(var i=1;
i<results.length;
i++){if(results[i]===results[i-1]){results.splice(i--,1)
}}}}return results
};
Sizzle.matches=function(expr,set){return Sizzle(expr,null,null,set)
};
Sizzle.find=function(expr,context,isXML){var set,match;
if(!expr){return[]
}for(var i=0,l=Expr.order.length;
i<l;
i++){var type=Expr.order[i],match;
if((match=Expr.leftMatch[type].exec(expr))){var left=match[1];
match.splice(1,1);
if(left.substr(left.length-1)!=="\\"){match[1]=(match[1]||"").replace(/\\/g,"");
set=Expr.find[type](match,context,isXML);
if(set!=null){expr=expr.replace(Expr.match[type],"");
break
}}}}if(!set){set=context.getElementsByTagName("*")
}return{set:set,expr:expr}
};
Sizzle.filter=function(expr,set,inplace,not){var old=expr,result=[],curLoop=set,match,anyFound,isXMLFilter=set&&set[0]&&isXML(set[0]);
while(expr&&set.length){for(var type in Expr.filter){if((match=Expr.match[type].exec(expr))!=null){var filter=Expr.filter[type],found,item;
anyFound=false;
if(curLoop===result){result=[]
}if(Expr.preFilter[type]){match=Expr.preFilter[type](match,curLoop,inplace,result,not,isXMLFilter);
if(!match){anyFound=found=true
}else{if(match===true){continue
}}}if(match){for(var i=0;
(item=curLoop[i])!=null;
i++){if(item){found=filter(item,match,i,curLoop);
var pass=not^!!found;
if(inplace&&found!=null){if(pass){anyFound=true
}else{curLoop[i]=false
}}else{if(pass){result.push(item);
anyFound=true
}}}}}if(found!==undefined){if(!inplace){curLoop=result
}expr=expr.replace(Expr.match[type],"");
if(!anyFound){return[]
}break
}}}if(expr===old){if(anyFound==null){throw"Syntax error, unrecognized expression: "+expr
}else{break
}}old=expr
}return curLoop
};
var Expr=Sizzle.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(elem){return elem.getAttribute("href")
}},relative:{"+":function(checkSet,part){var isPartStr=typeof part==="string",isTag=isPartStr&&!/\W/.test(part),isPartStrNotTag=isPartStr&&!isTag;
if(isTag){part=part.toLowerCase()
}for(var i=0,l=checkSet.length,elem;
i<l;
i++){if((elem=checkSet[i])){while((elem=elem.previousSibling)&&elem.nodeType!==1){}checkSet[i]=isPartStrNotTag||elem&&elem.nodeName.toLowerCase()===part?elem||false:elem===part
}}if(isPartStrNotTag){Sizzle.filter(part,checkSet,true)
}},">":function(checkSet,part){var isPartStr=typeof part==="string";
if(isPartStr&&!/\W/.test(part)){part=part.toLowerCase();
for(var i=0,l=checkSet.length;
i<l;
i++){var elem=checkSet[i];
if(elem){var parent=elem.parentNode;
checkSet[i]=parent.nodeName.toLowerCase()===part?parent:false
}}}else{for(var i=0,l=checkSet.length;
i<l;
i++){var elem=checkSet[i];
if(elem){checkSet[i]=isPartStr?elem.parentNode:elem.parentNode===part
}}if(isPartStr){Sizzle.filter(part,checkSet,true)
}}},"":function(checkSet,part,isXML){var doneName=done++,checkFn=dirCheck;
if(typeof part==="string"&&!/\W/.test(part)){var nodeCheck=part=part.toLowerCase();
checkFn=dirNodeCheck
}checkFn("parentNode",part,doneName,checkSet,nodeCheck,isXML)
},"~":function(checkSet,part,isXML){var doneName=done++,checkFn=dirCheck;
if(typeof part==="string"&&!/\W/.test(part)){var nodeCheck=part=part.toLowerCase();
checkFn=dirNodeCheck
}checkFn("previousSibling",part,doneName,checkSet,nodeCheck,isXML)
}},find:{ID:function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);
return m?[m]:[]
}},NAME:function(match,context){if(typeof context.getElementsByName!=="undefined"){var ret=[],results=context.getElementsByName(match[1]);
for(var i=0,l=results.length;
i<l;
i++){if(results[i].getAttribute("name")===match[1]){ret.push(results[i])
}}return ret.length===0?null:ret
}},TAG:function(match,context){return context.getElementsByTagName(match[1])
}},preFilter:{CLASS:function(match,curLoop,inplace,result,not,isXML){match=" "+match[1].replace(/\\/g,"")+" ";
if(isXML){return match
}for(var i=0,elem;
(elem=curLoop[i])!=null;
i++){if(elem){if(not^(elem.className&&(" "+elem.className+" ").replace(/[\t\n]/g," ").indexOf(match)>=0)){if(!inplace){result.push(elem)
}}else{if(inplace){curLoop[i]=false
}}}}return false
},ID:function(match){return match[1].replace(/\\/g,"")
},TAG:function(match,curLoop){return match[1].toLowerCase()
},CHILD:function(match){if(match[1]==="nth"){var test=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(match[2]==="even"&&"2n"||match[2]==="odd"&&"2n+1"||!/\D/.test(match[2])&&"0n+"+match[2]||match[2]);
match[2]=(test[1]+(test[2]||1))-0;
match[3]=test[3]-0
}match[0]=done++;
return match
},ATTR:function(match,curLoop,inplace,result,not,isXML){var name=match[1].replace(/\\/g,"");
if(!isXML&&Expr.attrMap[name]){match[1]=Expr.attrMap[name]
}if(match[2]==="~="){match[4]=" "+match[4]+" "
}return match
},PSEUDO:function(match,curLoop,inplace,result,not){if(match[1]==="not"){if((chunker.exec(match[3])||"").length>1||/^\w/.test(match[3])){match[3]=Sizzle(match[3],null,null,curLoop)
}else{var ret=Sizzle.filter(match[3],curLoop,inplace,true^not);
if(!inplace){result.push.apply(result,ret)
}return false
}}else{if(Expr.match.POS.test(match[0])||Expr.match.CHILD.test(match[0])){return true
}}return match
},POS:function(match){match.unshift(true);
return match
}},filters:{enabled:function(elem){return elem.disabled===false&&elem.type!=="hidden"
},disabled:function(elem){return elem.disabled===true
},checked:function(elem){return elem.checked===true
},selected:function(elem){elem.parentNode.selectedIndex;
return elem.selected===true
},parent:function(elem){return !!elem.firstChild
},empty:function(elem){return !elem.firstChild
},has:function(elem,i,match){return !!Sizzle(match[3],elem).length
},header:function(elem){return/h\d/i.test(elem.nodeName)
},text:function(elem){return"text"===elem.type
},radio:function(elem){return"radio"===elem.type
},checkbox:function(elem){return"checkbox"===elem.type
},file:function(elem){return"file"===elem.type
},password:function(elem){return"password"===elem.type
},submit:function(elem){return"submit"===elem.type
},image:function(elem){return"image"===elem.type
},reset:function(elem){return"reset"===elem.type
},button:function(elem){return"button"===elem.type||elem.nodeName.toLowerCase()==="button"
},input:function(elem){return/input|select|textarea|button/i.test(elem.nodeName)
}},setFilters:{first:function(elem,i){return i===0
},last:function(elem,i,match,array){return i===array.length-1
},even:function(elem,i){return i%2===0
},odd:function(elem,i){return i%2===1
},lt:function(elem,i,match){return i<match[3]-0
},gt:function(elem,i,match){return i>match[3]-0
},nth:function(elem,i,match){return match[3]-0===i
},eq:function(elem,i,match){return match[3]-0===i
}},filter:{PSEUDO:function(elem,match,i,array){var name=match[1],filter=Expr.filters[name];
if(filter){return filter(elem,i,match,array)
}else{if(name==="contains"){return(elem.textContent||elem.innerText||getText([elem])||"").indexOf(match[3])>=0
}else{if(name==="not"){var not=match[3];
for(var i=0,l=not.length;
i<l;
i++){if(not[i]===elem){return false
}}return true
}else{throw"Syntax error, unrecognized expression: "+name
}}}},CHILD:function(elem,match){var type=match[1],node=elem;
switch(type){case"only":case"first":while((node=node.previousSibling)){if(node.nodeType===1){return false
}}if(type==="first"){return true
}node=elem;
case"last":while((node=node.nextSibling)){if(node.nodeType===1){return false
}}return true;
case"nth":var first=match[2],last=match[3];
if(first===1&&last===0){return true
}var doneName=match[0],parent=elem.parentNode;
if(parent&&(parent.sizcache!==doneName||!elem.nodeIndex)){var count=0;
for(node=parent.firstChild;
node;
node=node.nextSibling){if(node.nodeType===1){node.nodeIndex=++count
}}parent.sizcache=doneName
}var diff=elem.nodeIndex-last;
if(first===0){return diff===0
}else{return(diff%first===0&&diff/first>=0)
}}},ID:function(elem,match){return elem.nodeType===1&&elem.getAttribute("id")===match
},TAG:function(elem,match){return(match==="*"&&elem.nodeType===1)||elem.nodeName.toLowerCase()===match
},CLASS:function(elem,match){return(" "+(elem.className||elem.getAttribute("class"))+" ").indexOf(match)>-1
},ATTR:function(elem,match){var name=match[1],result=Expr.attrHandle[name]?Expr.attrHandle[name](elem):elem[name]!=null?elem[name]:elem.getAttribute(name),value=result+"",type=match[2],check=match[4];
return result==null?type==="!=":type==="="?value===check:type==="*="?value.indexOf(check)>=0:type==="~="?(" "+value+" ").indexOf(check)>=0:!check?value&&result!==false:type==="!="?value!==check:type==="^="?value.indexOf(check)===0:type==="$="?value.substr(value.length-check.length)===check:type==="|="?value===check||value.substr(0,check.length+1)===check+"-":false
},POS:function(elem,match,i,array){var name=match[2],filter=Expr.setFilters[name];
if(filter){return filter(elem,i,match,array)
}}}};
var origPOS=Expr.match.POS;
for(var type in Expr.match){Expr.match[type]=new RegExp(Expr.match[type].source+/(?![^\[]*\])(?![^\(]*\))/.source);
Expr.leftMatch[type]=new RegExp(/(^(?:.|\r|\n)*?)/.source+Expr.match[type].source)
}var makeArray=function(array,results){array=Array.prototype.slice.call(array,0);
if(results){results.push.apply(results,array);
return results
}return array
};
try{Array.prototype.slice.call(document.documentElement.childNodes,0)
}catch(e){makeArray=function(array,results){var ret=results||[];
if(toString.call(array)==="[object Array]"){Array.prototype.push.apply(ret,array)
}else{if(typeof array.length==="number"){for(var i=0,l=array.length;
i<l;
i++){ret.push(array[i])
}}else{for(var i=0;
array[i];
i++){ret.push(array[i])
}}}return ret
}
}var sortOrder;
if(document.documentElement.compareDocumentPosition){sortOrder=function(a,b){if(!a.compareDocumentPosition||!b.compareDocumentPosition){if(a==b){hasDuplicate=true
}return a.compareDocumentPosition?-1:1
}var ret=a.compareDocumentPosition(b)&4?-1:a===b?0:1;
if(ret===0){hasDuplicate=true
}return ret
}
}else{if("sourceIndex" in document.documentElement){sortOrder=function(a,b){if(!a.sourceIndex||!b.sourceIndex){if(a==b){hasDuplicate=true
}return a.sourceIndex?-1:1
}var ret=a.sourceIndex-b.sourceIndex;
if(ret===0){hasDuplicate=true
}return ret
}
}else{if(document.createRange){sortOrder=function(a,b){if(!a.ownerDocument||!b.ownerDocument){if(a==b){hasDuplicate=true
}return a.ownerDocument?-1:1
}var aRange=a.ownerDocument.createRange(),bRange=b.ownerDocument.createRange();
aRange.setStart(a,0);
aRange.setEnd(a,0);
bRange.setStart(b,0);
bRange.setEnd(b,0);
var ret=aRange.compareBoundaryPoints(Range.START_TO_END,bRange);
if(ret===0){hasDuplicate=true
}return ret
}
}}}function getText(elems){var ret="",elem;
for(var i=0;
elems[i];
i++){elem=elems[i];
if(elem.nodeType===3||elem.nodeType===4){ret+=elem.nodeValue
}else{if(elem.nodeType!==8){ret+=getText(elem.childNodes)
}}}return ret
}(function(){var form=document.createElement("div"),id="script"+(new Date).getTime();
form.innerHTML="<a name='"+id+"'/>";
var root=document.documentElement;
root.insertBefore(form,root.firstChild);
if(document.getElementById(id)){Expr.find.ID=function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);
return m?m.id===match[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===match[1]?[m]:undefined:[]
}};
Expr.filter.ID=function(elem,match){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");
return elem.nodeType===1&&node&&node.nodeValue===match
}
}root.removeChild(form);
root=form=null
})();
(function(){var div=document.createElement("div");
div.appendChild(document.createComment(""));
if(div.getElementsByTagName("*").length>0){Expr.find.TAG=function(match,context){var results=context.getElementsByTagName(match[1]);
if(match[1]==="*"){var tmp=[];
for(var i=0;
results[i];
i++){if(results[i].nodeType===1){tmp.push(results[i])
}}results=tmp
}return results
}
}div.innerHTML="<a href='#'></a>";
if(div.firstChild&&typeof div.firstChild.getAttribute!=="undefined"&&div.firstChild.getAttribute("href")!=="#"){Expr.attrHandle.href=function(elem){return elem.getAttribute("href",2)
}
}div=null
})();
if(document.querySelectorAll){(function(){var oldSizzle=Sizzle,div=document.createElement("div");
div.innerHTML="<p class='TEST'></p>";
if(div.querySelectorAll&&div.querySelectorAll(".TEST").length===0){return
}Sizzle=function(query,context,extra,seed){context=context||document;
if(!seed&&context.nodeType===9&&!isXML(context)){try{return makeArray(context.querySelectorAll(query),extra)
}catch(e){}}return oldSizzle(query,context,extra,seed)
};
for(var prop in oldSizzle){Sizzle[prop]=oldSizzle[prop]
}div=null
})()
}(function(){var div=document.createElement("div");
div.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!div.getElementsByClassName||div.getElementsByClassName("e").length===0){return
}div.lastChild.className="e";
if(div.getElementsByClassName("e").length===1){return
}Expr.order.splice(1,0,"CLASS");
Expr.find.CLASS=function(match,context,isXML){if(typeof context.getElementsByClassName!=="undefined"&&!isXML){return context.getElementsByClassName(match[1])
}};
div=null
})();
function dirNodeCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){for(var i=0,l=checkSet.length;
i<l;
i++){var elem=checkSet[i];
if(elem){elem=elem[dir];
var match=false;
while(elem){if(elem.sizcache===doneName){match=checkSet[elem.sizset];
break
}if(elem.nodeType===1&&!isXML){elem.sizcache=doneName;
elem.sizset=i
}if(elem.nodeName.toLowerCase()===cur){match=elem;
break
}elem=elem[dir]
}checkSet[i]=match
}}}function dirCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){for(var i=0,l=checkSet.length;
i<l;
i++){var elem=checkSet[i];
if(elem){elem=elem[dir];
var match=false;
while(elem){if(elem.sizcache===doneName){match=checkSet[elem.sizset];
break
}if(elem.nodeType===1){if(!isXML){elem.sizcache=doneName;
elem.sizset=i
}if(typeof cur!=="string"){if(elem===cur){match=true;
break
}}else{if(Sizzle.filter(cur,[elem]).length>0){match=elem;
break
}}}elem=elem[dir]
}checkSet[i]=match
}}}var contains=document.compareDocumentPosition?function(a,b){return a.compareDocumentPosition(b)&16
}:function(a,b){return a!==b&&(a.contains?a.contains(b):true)
};
var isXML=function(elem){var documentElement=(elem?elem.ownerDocument||elem:0).documentElement;
return documentElement?documentElement.nodeName!=="HTML":false
};
var posProcess=function(selector,context){var tmpSet=[],later="",match,root=context.nodeType?[context]:context;
while((match=Expr.match.PSEUDO.exec(selector))){later+=match[0];
selector=selector.replace(Expr.match.PSEUDO,"")
}selector=Expr.relative[selector]?selector+"*":selector;
for(var i=0,l=root.length;
i<l;
i++){Sizzle(selector,root[i],tmpSet)
}return Sizzle.filter(later,tmpSet)
};
return Sizzle
})();
S.flash=(function(){var swfobject=function(){var UNDEF="undefined",OBJECT="object",SHOCKWAVE_FLASH="Shockwave Flash",SHOCKWAVE_FLASH_AX="ShockwaveFlash.ShockwaveFlash",FLASH_MIME_TYPE="application/x-shockwave-flash",EXPRESS_INSTALL_ID="SWFObjectExprInst",win=window,doc=document,nav=navigator,domLoadFnArr=[],regObjArr=[],objIdArr=[],listenersArr=[],script,timer=null,storedAltContent=null,storedAltContentId=null,isDomLoaded=false,isExpressInstallActive=false;
var ua=function(){var w3cdom=typeof doc.getElementById!=UNDEF&&typeof doc.getElementsByTagName!=UNDEF&&typeof doc.createElement!=UNDEF,playerVersion=[0,0,0],d=null;
if(typeof nav.plugins!=UNDEF&&typeof nav.plugins[SHOCKWAVE_FLASH]==OBJECT){d=nav.plugins[SHOCKWAVE_FLASH].description;
if(d&&!(typeof nav.mimeTypes!=UNDEF&&nav.mimeTypes[FLASH_MIME_TYPE]&&!nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)){d=d.replace(/^.*\s+(\S+\s+\S+$)/,"$1");
playerVersion[0]=parseInt(d.replace(/^(.*)\..*$/,"$1"),10);
playerVersion[1]=parseInt(d.replace(/^.*\.(.*)\s.*$/,"$1"),10);
playerVersion[2]=/r/.test(d)?parseInt(d.replace(/^.*r(.*)$/,"$1"),10):0
}}else{if(typeof win.ActiveXObject!=UNDEF){var a=null,fp6Crash=false;
try{a=new ActiveXObject(SHOCKWAVE_FLASH_AX+".7")
}catch(e){try{a=new ActiveXObject(SHOCKWAVE_FLASH_AX+".6");
playerVersion=[6,0,21];
a.AllowScriptAccess="always"
}catch(e){if(playerVersion[0]==6){fp6Crash=true
}}if(!fp6Crash){try{a=new ActiveXObject(SHOCKWAVE_FLASH_AX)
}catch(e){}}}if(!fp6Crash&&a){try{d=a.GetVariable("$version");
if(d){d=d.split(" ")[1].split(",");
playerVersion=[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10)]
}}catch(e){}}}}var u=nav.userAgent.toLowerCase(),p=nav.platform.toLowerCase(),webkit=/webkit/.test(u)?parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,ie=false,windows=p?/win/.test(p):/win/.test(u),mac=p?/mac/.test(p):/mac/.test(u);
/*@cc_on
			ie = true;
			@if (@_win32)
				windows = true;
			@elif (@_mac)
				mac = true;
			@end
		@*/
return{w3cdom:w3cdom,pv:playerVersion,webkit:webkit,ie:ie,win:windows,mac:mac}
}();
var onDomLoad=function(){if(!ua.w3cdom){return
}addDomLoadEvent(main);
if(ua.ie&&ua.win){try{doc.write("<script id=__ie_ondomload defer=true src=//:><\/script>");
script=getElementById("__ie_ondomload");
if(script){addListener(script,"onreadystatechange",checkReadyState)
}}catch(e){}}if(ua.webkit&&typeof doc.readyState!=UNDEF){timer=setInterval(function(){if(/loaded|complete/.test(doc.readyState)){callDomLoadFunctions()
}},10)
}if(typeof doc.addEventListener!=UNDEF){doc.addEventListener("DOMContentLoaded",callDomLoadFunctions,null)
}addLoadEvent(callDomLoadFunctions)
}();
function checkReadyState(){if(script.readyState=="complete"){script.parentNode.removeChild(script);
callDomLoadFunctions()
}}function callDomLoadFunctions(){if(isDomLoaded){return
}if(ua.ie&&ua.win){var s=createElement("span");
try{var t=doc.getElementsByTagName("body")[0].appendChild(s);
t.parentNode.removeChild(t)
}catch(e){return
}}isDomLoaded=true;
if(timer){clearInterval(timer);
timer=null
}var dl=domLoadFnArr.length;
for(var i=0;
i<dl;
i++){domLoadFnArr[i]()
}}function addDomLoadEvent(fn){if(isDomLoaded){fn()
}else{domLoadFnArr[domLoadFnArr.length]=fn
}}function addLoadEvent(fn){if(typeof win.addEventListener!=UNDEF){win.addEventListener("load",fn,false)
}else{if(typeof doc.addEventListener!=UNDEF){doc.addEventListener("load",fn,false)
}else{if(typeof win.attachEvent!=UNDEF){addListener(win,"onload",fn)
}else{if(typeof win.onload=="function"){var fnOld=win.onload;
win.onload=function(){fnOld();
fn()
}
}else{win.onload=fn
}}}}}function main(){var rl=regObjArr.length;
for(var i=0;
i<rl;
i++){var id=regObjArr[i].id;
if(ua.pv[0]>0){var obj=getElementById(id);
if(obj){regObjArr[i].width=obj.getAttribute("width")?obj.getAttribute("width"):"0";
regObjArr[i].height=obj.getAttribute("height")?obj.getAttribute("height"):"0";
if(hasPlayerVersion(regObjArr[i].swfVersion)){if(ua.webkit&&ua.webkit<312){fixParams(obj)
}setVisibility(id,true)
}else{if(regObjArr[i].expressInstall&&!isExpressInstallActive&&hasPlayerVersion("6.0.65")&&(ua.win||ua.mac)){showExpressInstall(regObjArr[i])
}else{displayAltContent(obj)
}}}}else{setVisibility(id,true)
}}}function fixParams(obj){var nestedObj=obj.getElementsByTagName(OBJECT)[0];
if(nestedObj){var e=createElement("embed"),a=nestedObj.attributes;
if(a){var al=a.length;
for(var i=0;
i<al;
i++){if(a[i].nodeName=="DATA"){e.setAttribute("src",a[i].nodeValue)
}else{e.setAttribute(a[i].nodeName,a[i].nodeValue)
}}}var c=nestedObj.childNodes;
if(c){var cl=c.length;
for(var j=0;
j<cl;
j++){if(c[j].nodeType==1&&c[j].nodeName=="PARAM"){e.setAttribute(c[j].getAttribute("name"),c[j].getAttribute("value"))
}}}obj.parentNode.replaceChild(e,obj)
}}function showExpressInstall(regObj){isExpressInstallActive=true;
var obj=getElementById(regObj.id);
if(obj){if(regObj.altContentId){var ac=getElementById(regObj.altContentId);
if(ac){storedAltContent=ac;
storedAltContentId=regObj.altContentId
}}else{storedAltContent=abstractAltContent(obj)
}if(!(/%$/.test(regObj.width))&&parseInt(regObj.width,10)<310){regObj.width="310"
}if(!(/%$/.test(regObj.height))&&parseInt(regObj.height,10)<137){regObj.height="137"
}doc.title=doc.title.slice(0,47)+" - Flash Player Installation";
var pt=ua.ie&&ua.win?"ActiveX":"PlugIn",dt=doc.title,fv="MMredirectURL="+win.location+"&MMplayerType="+pt+"&MMdoctitle="+dt,replaceId=regObj.id;
if(ua.ie&&ua.win&&obj.readyState!=4){var newObj=createElement("div");
replaceId+="SWFObjectNew";
newObj.setAttribute("id",replaceId);
obj.parentNode.insertBefore(newObj,obj);
obj.style.display="none";
var fn=function(){obj.parentNode.removeChild(obj)
};
addListener(win,"onload",fn)
}createSWF({data:regObj.expressInstall,id:EXPRESS_INSTALL_ID,width:regObj.width,height:regObj.height},{flashvars:fv},replaceId)
}}function displayAltContent(obj){if(ua.ie&&ua.win&&obj.readyState!=4){var el=createElement("div");
obj.parentNode.insertBefore(el,obj);
el.parentNode.replaceChild(abstractAltContent(obj),el);
obj.style.display="none";
var fn=function(){obj.parentNode.removeChild(obj)
};
addListener(win,"onload",fn)
}else{obj.parentNode.replaceChild(abstractAltContent(obj),obj)
}}function abstractAltContent(obj){var ac=createElement("div");
if(ua.win&&ua.ie){ac.innerHTML=obj.innerHTML
}else{var nestedObj=obj.getElementsByTagName(OBJECT)[0];
if(nestedObj){var c=nestedObj.childNodes;
if(c){var cl=c.length;
for(var i=0;
i<cl;
i++){if(!(c[i].nodeType==1&&c[i].nodeName=="PARAM")&&!(c[i].nodeType==8)){ac.appendChild(c[i].cloneNode(true))
}}}}}return ac
}function createSWF(attObj,parObj,id){var r,el=getElementById(id);
if(el){if(typeof attObj.id==UNDEF){attObj.id=id
}if(ua.ie&&ua.win){var att="";
for(var i in attObj){if(attObj[i]!=Object.prototype[i]){if(i.toLowerCase()=="data"){parObj.movie=attObj[i]
}else{if(i.toLowerCase()=="styleclass"){att+=' class="'+attObj[i]+'"'
}else{if(i.toLowerCase()!="classid"){att+=" "+i+'="'+attObj[i]+'"'
}}}}}var par="";
for(var j in parObj){if(parObj[j]!=Object.prototype[j]){par+='<param name="'+j+'" value="'+parObj[j]+'" />'
}}el.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+att+">"+par+"</object>";
objIdArr[objIdArr.length]=attObj.id;
r=getElementById(attObj.id)
}else{if(ua.webkit&&ua.webkit<312){var e=createElement("embed");
e.setAttribute("type",FLASH_MIME_TYPE);
for(var k in attObj){if(attObj[k]!=Object.prototype[k]){if(k.toLowerCase()=="data"){e.setAttribute("src",attObj[k])
}else{if(k.toLowerCase()=="styleclass"){e.setAttribute("class",attObj[k])
}else{if(k.toLowerCase()!="classid"){e.setAttribute(k,attObj[k])
}}}}}for(var l in parObj){if(parObj[l]!=Object.prototype[l]){if(l.toLowerCase()!="movie"){e.setAttribute(l,parObj[l])
}}}el.parentNode.replaceChild(e,el);
r=e
}else{var o=createElement(OBJECT);
o.setAttribute("type",FLASH_MIME_TYPE);
for(var m in attObj){if(attObj[m]!=Object.prototype[m]){if(m.toLowerCase()=="styleclass"){o.setAttribute("class",attObj[m])
}else{if(m.toLowerCase()!="classid"){o.setAttribute(m,attObj[m])
}}}}for(var n in parObj){if(parObj[n]!=Object.prototype[n]&&n.toLowerCase()!="movie"){createObjParam(o,n,parObj[n])
}}el.parentNode.replaceChild(o,el);
r=o
}}}return r
}function createObjParam(el,pName,pValue){var p=createElement("param");
p.setAttribute("name",pName);
p.setAttribute("value",pValue);
el.appendChild(p)
}function removeSWF(id){var obj=getElementById(id);
if(obj&&(obj.nodeName=="OBJECT"||obj.nodeName=="EMBED")){if(ua.ie&&ua.win){if(obj.readyState==4){removeObjectInIE(id)
}else{win.attachEvent("onload",function(){removeObjectInIE(id)
})
}}else{obj.parentNode.removeChild(obj)
}}}function removeObjectInIE(id){var obj=getElementById(id);
if(obj){for(var i in obj){if(typeof obj[i]=="function"){obj[i]=null
}}obj.parentNode.removeChild(obj)
}}function getElementById(id){var el=null;
try{el=doc.getElementById(id)
}catch(e){}return el
}function createElement(el){return doc.createElement(el)
}function addListener(target,eventType,fn){target.attachEvent(eventType,fn);
listenersArr[listenersArr.length]=[target,eventType,fn]
}function hasPlayerVersion(rv){var pv=ua.pv,v=rv.split(".");
v[0]=parseInt(v[0],10);
v[1]=parseInt(v[1],10)||0;
v[2]=parseInt(v[2],10)||0;
return(pv[0]>v[0]||(pv[0]==v[0]&&pv[1]>v[1])||(pv[0]==v[0]&&pv[1]==v[1]&&pv[2]>=v[2]))?true:false
}function createCSS(sel,decl){if(ua.ie&&ua.mac){return
}var h=doc.getElementsByTagName("head")[0],s=createElement("style");
s.setAttribute("type","text/css");
s.setAttribute("media","screen");
if(!(ua.ie&&ua.win)&&typeof doc.createTextNode!=UNDEF){s.appendChild(doc.createTextNode(sel+" {"+decl+"}"))
}h.appendChild(s);
if(ua.ie&&ua.win&&typeof doc.styleSheets!=UNDEF&&doc.styleSheets.length>0){var ls=doc.styleSheets[doc.styleSheets.length-1];
if(typeof ls.addRule==OBJECT){ls.addRule(sel,decl)
}}}function setVisibility(id,isVisible){var v=isVisible?"visible":"hidden";
if(isDomLoaded&&getElementById(id)){getElementById(id).style.visibility=v
}else{createCSS("#"+id,"visibility:"+v)
}}function urlEncodeIfNecessary(s){var regex=/[\\\"<>\.;]/;
var hasBadChars=regex.exec(s)!=null;
return hasBadChars?encodeURIComponent(s):s
}var cleanup=function(){if(ua.ie&&ua.win){window.attachEvent("onunload",function(){var ll=listenersArr.length;
for(var i=0;
i<ll;
i++){listenersArr[i][0].detachEvent(listenersArr[i][1],listenersArr[i][2])
}var il=objIdArr.length;
for(var j=0;
j<il;
j++){removeSWF(objIdArr[j])
}for(var k in ua){ua[k]=null
}ua=null;
for(var l in swfobject){swfobject[l]=null
}swfobject=null
})
}}();
return{registerObject:function(objectIdStr,swfVersionStr,xiSwfUrlStr){if(!ua.w3cdom||!objectIdStr||!swfVersionStr){return
}var regObj={};
regObj.id=objectIdStr;
regObj.swfVersion=swfVersionStr;
regObj.expressInstall=xiSwfUrlStr?xiSwfUrlStr:false;
regObjArr[regObjArr.length]=regObj;
setVisibility(objectIdStr,false)
},getObjectById:function(objectIdStr){var r=null;
if(ua.w3cdom){var o=getElementById(objectIdStr);
if(o){var n=o.getElementsByTagName(OBJECT)[0];
if(!n||(n&&typeof o.SetVariable!=UNDEF)){r=o
}else{if(typeof n.SetVariable!=UNDEF){r=n
}}}}return r
},embedSWF:function(swfUrlStr,replaceElemIdStr,widthStr,heightStr,swfVersionStr,xiSwfUrlStr,flashvarsObj,parObj,attObj){if(!ua.w3cdom||!swfUrlStr||!replaceElemIdStr||!widthStr||!heightStr||!swfVersionStr){return
}widthStr+="";
heightStr+="";
if(hasPlayerVersion(swfVersionStr)){setVisibility(replaceElemIdStr,false);
var att={};
if(attObj&&typeof attObj===OBJECT){for(var i in attObj){if(attObj[i]!=Object.prototype[i]){att[i]=attObj[i]
}}}att.data=swfUrlStr;
att.width=widthStr;
att.height=heightStr;
var par={};
if(parObj&&typeof parObj===OBJECT){for(var j in parObj){if(parObj[j]!=Object.prototype[j]){par[j]=parObj[j]
}}}if(flashvarsObj&&typeof flashvarsObj===OBJECT){for(var k in flashvarsObj){if(flashvarsObj[k]!=Object.prototype[k]){if(typeof par.flashvars!=UNDEF){par.flashvars+="&"+k+"="+flashvarsObj[k]
}else{par.flashvars=k+"="+flashvarsObj[k]
}}}}addDomLoadEvent(function(){createSWF(att,par,replaceElemIdStr);
if(att.id==replaceElemIdStr){setVisibility(replaceElemIdStr,true)
}})
}else{if(xiSwfUrlStr&&!isExpressInstallActive&&hasPlayerVersion("6.0.65")&&(ua.win||ua.mac)){isExpressInstallActive=true;
setVisibility(replaceElemIdStr,false);
addDomLoadEvent(function(){var regObj={};
regObj.id=regObj.altContentId=replaceElemIdStr;
regObj.width=widthStr;
regObj.height=heightStr;
regObj.expressInstall=xiSwfUrlStr;
showExpressInstall(regObj)
})
}}},getFlashPlayerVersion:function(){return{major:ua.pv[0],minor:ua.pv[1],release:ua.pv[2]}
},hasFlashPlayerVersion:hasPlayerVersion,createSWF:function(attObj,parObj,replaceElemIdStr){if(ua.w3cdom){return createSWF(attObj,parObj,replaceElemIdStr)
}else{return undefined
}},removeSWF:function(objElemIdStr){if(ua.w3cdom){removeSWF(objElemIdStr)
}},createCSS:function(sel,decl){if(ua.w3cdom){createCSS(sel,decl)
}},addDomLoadEvent:addDomLoadEvent,addLoadEvent:addLoadEvent,getQueryParamValue:function(param){var q=doc.location.search||doc.location.hash;
if(param==null){return urlEncodeIfNecessary(q)
}if(q){var pairs=q.substring(1).split("&");
for(var i=0;
i<pairs.length;
i++){if(pairs[i].substring(0,pairs[i].indexOf("="))==param){return urlEncodeIfNecessary(pairs[i].substring((pairs[i].indexOf("=")+1)))
}}}return""
},expressInstallCallback:function(){if(isExpressInstallActive&&storedAltContent){var obj=getElementById(EXPRESS_INSTALL_ID);
if(obj){obj.parentNode.replaceChild(storedAltContent,obj);
if(storedAltContentId){setVisibility(storedAltContentId,true);
if(ua.ie&&ua.win){storedAltContent.style.display="block"
}}storedAltContent=null;
storedAltContentId=null;
isExpressInstallActive=false
}}}}
}();
return swfobject
})();
S.lang={code:"en",of:"of",loading:"loading",cancel:"Cancel",next:"Next",previous:"Previous",play:"Play",pause:"Pause",close:"Close",errors:{single:'You must install the <a href="{0}">{1}</a> browser plugin to view this content.',shared:'You must install both the <a href="{0}">{1}</a> and <a href="{2}">{3}</a> browser plugins to view this content.',either:'You must install either the <a href="{0}">{1}</a> or the <a href="{2}">{3}</a> browser plugin to view this content.'}};
var pre,proxyId="sb-drag-proxy",dragData,dragProxy,dragTarget;
function resetDrag(){dragData={x:0,y:0,startX:null,startY:null}
}function updateProxy(){var dims=S.dimensions;
apply(dragProxy.style,{height:dims.innerHeight+"px",width:dims.innerWidth+"px"})
}function enableDrag(){resetDrag();
var style=["position:absolute","cursor:"+(S.isGecko?"-moz-grab":"move"),"background-color:"+(S.isIE?"#fff;filter:alpha(opacity=0)":"transparent")].join(";");
S.appendHTML(S.skin.body,'<div id="'+proxyId+'" style="'+style+'"></div>');
dragProxy=get(proxyId);
updateProxy();
addEvent(dragProxy,"mousedown",startDrag)
}function disableDrag(){if(dragProxy){removeEvent(dragProxy,"mousedown",startDrag);
remove(dragProxy);
dragProxy=null
}dragTarget=null
}function startDrag(e){preventDefault(e);
var xy=getPageXY(e);
dragData.startX=xy[0];
dragData.startY=xy[1];
dragTarget=get(S.player.id);
addEvent(document,"mousemove",positionDrag);
addEvent(document,"mouseup",endDrag);
if(S.isGecko){dragProxy.style.cursor="-moz-grabbing"
}}function positionDrag(e){var player=S.player,dims=S.dimensions,xy=getPageXY(e);
var moveX=xy[0]-dragData.startX;
dragData.startX+=moveX;
dragData.x=Math.max(Math.min(0,dragData.x+moveX),dims.innerWidth-player.width);
var moveY=xy[1]-dragData.startY;
dragData.startY+=moveY;
dragData.y=Math.max(Math.min(0,dragData.y+moveY),dims.innerHeight-player.height);
apply(dragTarget.style,{left:dragData.x+"px",top:dragData.y+"px"})
}function endDrag(){removeEvent(document,"mousemove",positionDrag);
removeEvent(document,"mouseup",endDrag);
if(S.isGecko){dragProxy.style.cursor="-moz-grab"
}}S.img=function(obj,id){this.obj=obj;
this.id=id;
this.ready=false;
var self=this;
pre=new Image();
pre.onload=function(){self.height=obj.height?parseInt(obj.height,10):pre.height;
self.width=obj.width?parseInt(obj.width,10):pre.width;
self.ready=true;
pre.onload=null;
pre=null
};
pre.src=obj.content
};
S.img.ext=["bmp","gif","jpg","jpeg","png"];
S.img.prototype={append:function(body,dims){var img=document.createElement("img");
img.id=this.id;
img.src=this.obj.content;
img.style.position="absolute";
var height,width;
if(dims.oversized&&S.options.handleOversize=="resize"){height=dims.innerHeight;
width=dims.innerWidth
}else{height=this.height;
width=this.width
}img.setAttribute("height",height);
img.setAttribute("width",width);
body.appendChild(img)
},remove:function(){var el=get(this.id);
if(el){remove(el)
}disableDrag();
if(pre){pre.onload=null;
pre=null
}},onLoad:function(){var dims=S.dimensions;
if(dims.oversized&&S.options.handleOversize=="drag"){enableDrag()
}},onWindowResize:function(){var dims=S.dimensions;
switch(S.options.handleOversize){case"resize":var el=get(this.id);
el.height=dims.innerHeight;
el.width=dims.innerWidth;
break;
case"drag":if(dragTarget){var top=parseInt(S.getStyle(dragTarget,"top")),left=parseInt(S.getStyle(dragTarget,"left"));
if(top+this.height<dims.innerHeight){dragTarget.style.top=dims.innerHeight-this.height+"px"
}if(left+this.width<dims.innerWidth){dragTarget.style.left=dims.innerWidth-this.width+"px"
}updateProxy()
}break
}}};
S.iframe=function(obj,id){this.obj=obj;
this.id=id;
var overlay=get("sb-overlay");
this.height=obj.height?parseInt(obj.height,10):overlay.offsetHeight;
this.width=obj.width?parseInt(obj.width,10):overlay.offsetWidth
};
S.iframe.prototype={append:function(body,dims){var html='<iframe id="'+this.id+'" name="'+this.id+'" height="100%" width="100%" frameborder="0" marginwidth="0" marginheight="0" style="visibility:hidden" onload="this.style.visibility=\'visible\'" scrolling="auto"';
if(S.isIE){html+=' allowtransparency="true"';
if(S.isIE6){html+=" src=\"javascript:false;document.write('');\""
}}html+="></iframe>";
body.innerHTML=html
},remove:function(){var el=get(this.id);
if(el){remove(el);
if(S.isGecko){delete window.frames[this.id]
}}},onLoad:function(){var win=S.isIE?get(this.id).contentWindow:window.frames[this.id];
win.location.href=this.obj.content
}};
S.html=function(obj,id){this.obj=obj;
this.id=id;
this.height=obj.height?parseInt(obj.height,10):300;
this.width=obj.width?parseInt(obj.width,10):500
};
S.html.prototype={append:function(body,dims){var div=document.createElement("div");
div.id=this.id;
div.className="html";
div.innerHTML=this.obj.content;
body.appendChild(div)
},remove:function(){var el=get(this.id);
if(el){remove(el)
}}};
S.swf=function(obj,id){this.obj=obj;
this.id=id;
this.height=obj.height?parseInt(obj.height,10):300;
this.width=obj.width?parseInt(obj.width,10):300
};
S.swf.ext=["swf"];
S.swf.prototype={append:function(body,dims){var tmp=document.createElement("div");
tmp.id=this.id;
body.appendChild(tmp);
var height=dims.innerHeight,width=dims.innerWidth,swf=this.obj.content,version=S.options.flashVersion,express=S.path+"expressInstall.swf",flashvars=S.options.flashVars,params=S.options.flashParams;
S.flash.embedSWF(swf,this.id,width,height,version,express,flashvars,params)
},remove:function(){S.flash.expressInstallCallback();
S.flash.removeSWF(this.id)
},onWindowResize:function(){var dims=S.dimensions,el=get(this.id);
el.height=dims.innerHeight;
el.width=dims.innerWidth
}};
var jwControllerHeight=20;
S.flv=function(obj,id){this.obj=obj;
this.id=id;
this.height=obj.height?parseInt(obj.height,10):300;
if(S.options.showMovieControls){this.height+=jwControllerHeight
}this.width=obj.width?parseInt(obj.width,10):300
};
S.flv.ext=["flv","m4v"];
S.flv.prototype={append:function(body,dims){var tmp=document.createElement("div");
tmp.id=this.id;
body.appendChild(tmp);
var height=dims.innerHeight,width=dims.innerWidth,swf=S.path+"player.swf",version=S.options.flashVersion,express=S.path+"expressInstall.swf",flashvars=apply({file:this.obj.content,height:height,width:width,autostart:(S.options.autoplayMovies?"true":"false"),controlbar:(S.options.showMovieControls?"bottom":"none"),backcolor:"0x000000",frontcolor:"0xCCCCCC",lightcolor:"0x557722"},S.options.flashVars),params=S.options.flashParams;
S.flash.embedSWF(swf,this.id,width,height,version,express,flashvars,params)
},remove:function(){S.flash.expressInstallCallback();
S.flash.removeSWF(this.id)
},onWindowResize:function(){var dims=S.dimensions,el=get(this.id);
el.height=dims.innerHeight;
el.width=dims.innerWidth
}};
var qtControllerHeight=16;
S.qt=function(obj,id){this.obj=obj;
this.id=id;
this.height=obj.height?parseInt(obj.height,10):300;
if(S.options.showMovieControls){this.height+=qtControllerHeight
}this.width=obj.width?parseInt(obj.width,10):300
};
S.qt.ext=["dv","mov","moov","movie","mp4","avi","mpg","mpeg"];
S.qt.prototype={append:function(body,dims){var opt=S.options,autoplay=String(opt.autoplayMovies),controls=String(opt.showMovieControls);
var html="<object",movie={id:this.id,name:this.id,height:this.height,width:this.width,kioskmode:"true"};
if(S.isIE){movie.classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B";
movie.codebase="http://www.apple.com/qtactivex/qtplugin.cab#version=6,0,2,0"
}else{movie.type="video/quicktime";
movie.data=this.obj.content
}for(var m in movie){html+=" "+m+'="'+movie[m]+'"'
}html+=">";
var params={src:this.obj.content,scale:"aspect",controller:controls,autoplay:autoplay};
for(var p in params){html+='<param name="'+p+'" value="'+params[p]+'">'
}html+="</object>";
body.innerHTML=html
},remove:function(){try{document[this.id].Stop()
}catch(e){}var el=get(this.id);
if(el){remove(el)
}}};
var wmpControllerHeight=(S.isIE?70:45);
S.wmp=function(obj,id){this.obj=obj;
this.id=id;
this.height=obj.height?parseInt(obj.height,10):300;
if(S.options.showMovieControls){this.height+=wmpControllerHeight
}this.width=obj.width?parseInt(obj.width,10):300
};
S.wmp.ext=["asf","avi","mpg","mpeg","wm","wmv"];
S.wmp.prototype={append:function(body,dims){var opt=S.options,autoplay=opt.autoplayMovies?1:0;
var movie='<object id="'+this.id+'" name="'+this.id+'" height="'+this.height+'" width="'+this.width+'"',params={autostart:opt.autoplayMovies?1:0};
if(S.isIE){movie+=' classid="clsid:6BF52A52-394A-11d3-B153-00C04F79FAA6"';
params.url=this.obj.content;
params.uimode=opt.showMovieControls?"full":"none"
}else{movie+=' type="video/x-ms-wmv"';
movie+=' data="'+this.obj.content+'"';
params.showcontrols=opt.showMovieControls?1:0
}movie+=">";
for(var p in params){movie+='<param name="'+p+'" value="'+params[p]+'">'
}movie+="</object>";
body.innerHTML=movie
},remove:function(){if(S.isIE){try{window[this.id].controls.stop();
window[this.id].URL="movie"+now()+".wmv";
window[this.id]=function(){}
}catch(e){}}var el=get(this.id);
if(el){setTimeout(function(){remove(el)
},10)
}}};
var overlayOn=false,visibilityCache=[],pngIds=["sb-nav-close","sb-nav-next","sb-nav-play","sb-nav-pause","sb-nav-previous"],container,overlay,wrapper,doWindowResize=true;
function animate(el,property,to,duration,callback){var isOpacity=(property=="opacity"),anim=isOpacity?S.setOpacity:function(el,value){el.style[property]=""+value+"px"
};
if(duration==0||(!isOpacity&&!S.options.animate)||(isOpacity&&!S.options.animateFade)){anim(el,to);
if(callback){callback()
}return
}var from=parseFloat(S.getStyle(el,property))||0;
var delta=to-from;
if(delta==0){if(callback){callback()
}return
}duration*=1000;
var begin=now(),ease=S.ease,end=begin+duration,time;
var interval=setInterval(function(){time=now();
if(time>=end){clearInterval(interval);
interval=null;
anim(el,to);
if(callback){callback()
}}else{anim(el,from+ease((time-begin)/duration)*delta)
}},10)
}function setSize(){container.style.height=S.getWindowSize("Height")+"px";
container.style.width=S.getWindowSize("Width")+"px"
}function setPosition(){container.style.top=document.documentElement.scrollTop+"px";
container.style.left=document.documentElement.scrollLeft+"px"
}function toggleTroubleElements(on){if(on){each(visibilityCache,function(i,el){el[0].style.visibility=el[1]||""
})
}else{visibilityCache=[];
each(S.options.troubleElements,function(i,tag){each(document.getElementsByTagName(tag),function(j,el){visibilityCache.push([el,el.style.visibility]);
el.style.visibility="hidden"
})
})
}}function toggleNav(id,on){var el=get("sb-nav-"+id);
if(el){el.style.display=on?"":"none"
}}function toggleLoading(on,callback){var loading=get("sb-loading"),playerName=S.getCurrent().player,anim=(playerName=="img"||playerName=="html");
if(on){S.setOpacity(loading,0);
loading.style.display="block";
var wrapped=function(){S.clearOpacity(loading);
if(callback){callback()
}};
if(anim){animate(loading,"opacity",1,S.options.fadeDuration,wrapped)
}else{wrapped()
}}else{var wrapped=function(){loading.style.display="none";
S.clearOpacity(loading);
if(callback){callback()
}};
if(anim){animate(loading,"opacity",0,S.options.fadeDuration,wrapped)
}else{wrapped()
}}}function buildBars(callback){var obj=S.getCurrent();
get("sb-title-inner").innerHTML=obj.title||"";
var close,next,play,pause,previous;
if(S.options.displayNav){close=true;
var len=S.gallery.length;
if(len>1){if(S.options.continuous){next=previous=true
}else{next=(len-1)>S.current;
previous=S.current>0
}}if(S.options.slideshowDelay>0&&S.hasNext()){pause=!S.isPaused();
play=!pause
}}else{close=next=play=pause=previous=false
}toggleNav("close",close);
toggleNav("next",next);
toggleNav("play",play);
toggleNav("pause",pause);
toggleNav("previous",previous);
var counter="";
if(S.options.displayCounter&&S.gallery.length>1){var len=S.gallery.length;
if(S.options.counterType=="skip"){var i=0,end=len,limit=parseInt(S.options.counterLimit)||0;
if(limit<len&&limit>2){var h=Math.floor(limit/2);
i=S.current-h;
if(i<0){i+=len
}end=S.current+(limit-h);
if(end>len){end-=len
}}while(i!=end){if(i==len){i=0
}counter+='<a onclick="Shadowbox.change('+i+');"';
if(i==S.current){counter+=' class="sb-counter-current"'
}counter+=">"+(++i)+"</a>"
}}else{counter=[S.current+1,S.lang.of,len].join(" ")
}}get("sb-counter").innerHTML=counter;
callback()
}function showBars(callback){var titleInner=get("sb-title-inner"),infoInner=get("sb-info-inner"),duration=0.35;
titleInner.style.visibility=infoInner.style.visibility="";
if(titleInner.innerHTML!=""){animate(titleInner,"marginTop",0,duration)
}animate(infoInner,"marginTop",0,duration,callback)
}function hideBars(anim,callback){var title=get("sb-title"),info=get("sb-info"),titleHeight=title.offsetHeight,infoHeight=info.offsetHeight,titleInner=get("sb-title-inner"),infoInner=get("sb-info-inner"),duration=(anim?0.35:0);
animate(titleInner,"marginTop",titleHeight,duration);
animate(infoInner,"marginTop",infoHeight*-1,duration,function(){titleInner.style.visibility=infoInner.style.visibility="hidden";
callback()
})
}function adjustHeight(height,top,anim,callback){var wrapperInner=get("sb-wrapper-inner"),duration=(anim?S.options.resizeDuration:0);
animate(wrapper,"top",top,duration);
animate(wrapperInner,"height",height,duration,callback)
}function adjustWidth(width,left,anim,callback){var duration=(anim?S.options.resizeDuration:0);
animate(wrapper,"left",left,duration);
animate(wrapper,"width",width,duration,callback)
}function setDimensions(height,width){var bodyInner=get("sb-body-inner"),height=parseInt(height),width=parseInt(width),topBottom=wrapper.offsetHeight-bodyInner.offsetHeight,leftRight=wrapper.offsetWidth-bodyInner.offsetWidth,maxHeight=overlay.offsetHeight,maxWidth=overlay.offsetWidth,padding=parseInt(S.options.viewportPadding)||20,preserveAspect=(S.player&&S.options.handleOversize!="drag");
return S.setDimensions(height,width,maxHeight,maxWidth,topBottom,leftRight,padding,preserveAspect)
}var K={};
K.markup='<div id="sb-container"><div id="sb-overlay"></div><div id="sb-wrapper"><div id="sb-title"><div id="sb-title-inner"></div></div><div id="sb-wrapper-inner"><div id="sb-body"><div id="sb-body-inner"></div><div id="sb-loading"><div id="sb-loading-inner"><span>{loading}</span></div></div></div></div><div id="sb-info"><div id="sb-info-inner"><div id="sb-counter"></div><div id="sb-nav"><a id="sb-nav-close" title="{close}" onclick="Shadowbox.close()"></a><a id="sb-nav-next" title="{next}" onclick="Shadowbox.next()"></a><a id="sb-nav-play" title="{play}" onclick="Shadowbox.play()"></a><a id="sb-nav-pause" title="{pause}" onclick="Shadowbox.pause()"></a><a id="sb-nav-previous" title="{previous}" onclick="Shadowbox.previous()"></a></div></div></div></div></div>';
K.options={animSequence:"sync",counterLimit:10,counterType:"default",displayCounter:true,displayNav:true,fadeDuration:0.35,initialHeight:160,initialWidth:320,modal:false,overlayColor:"#000",overlayOpacity:0.5,resizeDuration:0.35,showOverlay:true,troubleElements:["select","object","embed","canvas"]};
K.init=function(){S.appendHTML(document.body,sprintf(K.markup,S.lang));
K.body=get("sb-body-inner");
container=get("sb-container");
overlay=get("sb-overlay");
wrapper=get("sb-wrapper");
if(!supportsFixed){container.style.position="absolute"
}if(!supportsOpacity){var el,m,re=/url\("(.*\.png)"\)/;
each(pngIds,function(i,id){el=get(id);
if(el){m=S.getStyle(el,"backgroundImage").match(re);
if(m){el.style.backgroundImage="none";
el.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,src="+m[1]+",sizingMethod=scale);"
}}})
}var timer;
addEvent(window,"resize",function(){if(timer){clearTimeout(timer);
timer=null
}if(open){timer=setTimeout(K.onWindowResize,10)
}})
};
K.onOpen=function(obj,callback){doWindowResize=false;
container.style.display="block";
setSize();
var dims=setDimensions(S.options.initialHeight,S.options.initialWidth);
adjustHeight(dims.innerHeight,dims.top);
adjustWidth(dims.width,dims.left);
if(S.options.showOverlay){overlay.style.backgroundColor=S.options.overlayColor;
S.setOpacity(overlay,0);
if(!S.options.modal){addEvent(overlay,"click",S.close)
}overlayOn=true
}if(!supportsFixed){setPosition();
addEvent(window,"scroll",setPosition)
}toggleTroubleElements();
container.style.visibility="visible";
if(overlayOn){animate(overlay,"opacity",S.options.overlayOpacity,S.options.fadeDuration,callback)
}else{callback()
}};
K.onLoad=function(changing,callback){toggleLoading(true);
while(K.body.firstChild){remove(K.body.firstChild)
}hideBars(changing,function(){if(!open){return
}if(!changing){wrapper.style.visibility="visible"
}buildBars(callback)
})
};
K.onReady=function(callback){if(!open){return
}var player=S.player,dims=setDimensions(player.height,player.width);
var wrapped=function(){showBars(callback)
};
switch(S.options.animSequence){case"hw":adjustHeight(dims.innerHeight,dims.top,true,function(){adjustWidth(dims.width,dims.left,true,wrapped)
});
break;
case"wh":adjustWidth(dims.width,dims.left,true,function(){adjustHeight(dims.innerHeight,dims.top,true,wrapped)
});
break;
default:adjustWidth(dims.width,dims.left,true);
adjustHeight(dims.innerHeight,dims.top,true,wrapped)
}};
K.onShow=function(callback){toggleLoading(false,callback);
doWindowResize=true
};
K.onClose=function(){if(!supportsFixed){removeEvent(window,"scroll",setPosition)
}removeEvent(overlay,"click",S.close);
wrapper.style.visibility="hidden";
var callback=function(){container.style.visibility="hidden";
container.style.display="none";
toggleTroubleElements(true)
};
if(overlayOn){animate(overlay,"opacity",0,S.options.fadeDuration,callback)
}else{callback()
}};
K.onPlay=function(){toggleNav("play",false);
toggleNav("pause",true)
};
K.onPause=function(){toggleNav("pause",false);
toggleNav("play",true)
};
K.onWindowResize=function(){if(!doWindowResize){return
}setSize();
var player=S.player,dims=setDimensions(player.height,player.width);
adjustWidth(dims.width,dims.left);
adjustHeight(dims.innerHeight,dims.top);
if(player.onWindowResize){player.onWindowResize()
}};
S.skin=K;
window.Shadowbox=S
})(window);
if(window.$===window.jQuery){try{delete window.$
}catch(e){window["$"]=undefined
}}(function(a){window.SitebuilderInfo=a.extend({},window.SitebuilderInfo,{url:null,lastContentUpdated:null});
window.is_ie=!!(window.attachEvent&&!window.opera);
if(!Array.prototype.push){Array.prototype.push=function(b){this[this.length]=b
}
}if(!String.prototype.startsWith){String.prototype.startsWith=function(b){return this.lastIndexOf(b,0)===0
}
}if(!String.prototype.endsWith){String.prototype.endsWith=function(b){var c=this.length-b.length;
return c>=0&&this.indexOf(b,c)===c
}
}window.redirectToGo=function(b,c){var f="http://go.warwick.ac.uk/"+b;
f=f+"?goSearchReferer="+encodeURIComponent(window.location);
if(c){f=f+"&goSearchQuery="+c
}window.location=f
};
window.WRollback=function(c,b,f){this.element=c;
this.over=b;
this.out=f;
this.element.onmouseover=b;
this.element.onmouseout=f
};
WRollback.prototype.disable=function(){this.element.onmouseover=null;
this.element.onmouseout=null
};
WRollback.prototype.enable=function(){this.element.onmouseover=this.over;
this.element.onmouseout=this.out
};
window.WTogglePopup=function(b,g,c,f){this.$button=a("#"+b);
this.$div=a("#"+g);
this.duration=0.2;
this.closeOnDocumentClick=c||false;
this.callback=f||function(){};
this.$button.click(a.proxy(this.toggle,this))
};
WTogglePopup.prototype.toggle=function(c){if(c){c.preventDefault()
}var b;
if(this.closeOnDocumentClick){b=a.proxy(function(){if(this.$div.is(":visible")){a(document).click(a.proxy(this.hideIfVisible,this));
this.callback(true)
}else{a(document).unbind("click",a.proxy(this.hideIfVisible,this));
this.callback(false)
}},this)
}else{b=a.proxy(function(){if(this.$div.is(":visible")){this.callback(true)
}else{this.callback(false)
}},this)
}this.$div.toggle(this.duration,b);
return false
};
WTogglePopup.prototype.hideIfVisible=function(b){if(this.$div.is(":visible")){this.toggle(b)
}return true
};
window.WCookie=function(c,f,b,g){this.name=c;
this.expires="";
this.path="/";
this.value="";
if(f){this.value=f;
if(b){this.hours=b;
this.expires="; expires="+WCookie._getGMTStringForHoursAhead(b)
}else{this.expires=""
}if(g){this.path=g
}else{this.path="/"
}this.save()
}else{this.value=this.load()
}};
WCookie._getGMTStringForHoursAhead=function(b){var c=new Date();
c.setTime(c.getTime()+(b*60*60*1000));
return c.toGMTString()
};
WCookie.prototype.load=function(){var g=this.name+"=";
var b=document.cookie.split(";");
for(var f=0;
f<b.length;
f++){var h=b[f];
while(h.charAt(0)==" "){h=h.substring(1,h.length)
}if(h.indexOf(g)==0){return h.substring(g.length,h.length)
}}return null
};
WCookie.prototype.save=function(){document.cookie=this.name+"="+this.value+this.expires+"; path="+this.path
};
WCookie.prototype.erase=function(){this.value="";
this.hours=-1;
this.expires="; expires="+WCookie._getGMTStringForHoursAhead(this.hours);
this.save()
};
if(typeof(StringBuilder)=="undefined"){window.StringBuilder=function(b){this.strings=new Array("");
this.append(b)
};
StringBuilder.prototype.append=function(b){if(b){this.strings.push(b)
}};
StringBuilder.prototype.clear=function(){this.strings.length=1
};
StringBuilder.prototype.toString=function(){return this.strings.join("")
}
}String.prototype.postEncode=function(){var b=new StringBuilder();
var g=this.length;
for(var f=0;
f<g;
f++){var h=this.charCodeAt(f).toString();
if(h>127){b.append("%26%23");
b.append(h);
b.append("%3B")
}else{b.append(encodeURIComponent(this.substr(f,1)))
}}return b.toString()
};
String.prototype.characterEscape=function(){var b=new StringBuilder();
var g=this.length;
for(var f=0;
f<g;
f++){var h=this.charCodeAt(f).toString();
if(h>127){b.append("&#");
b.append(h);
b.append(";")
}else{b.append(this.substr(f,1))
}}return b.toString()
};
String.prototype.trim=function(){return this.replace(/^\s\s*/,"").replace(/\s\s*$/,"")
};
window.WForm={postEncode:function(b){return a(b).serializeArray().map(function(c,f){return f==null?null:jQuery.isArray(f)?jQuery.map(f,function(h,g){return{name:h.name,value:WForm.Element.postEncode(h.value)}
}):{name:f.name,value:WForm.Element.postEncode(f.value)}
}).join("&")
},Element:{postEncode:function(b){var c=a(b).val();
return c==null?null:jQuery.isArray(c)?jQuery.map(c,function(g,f){return{name:b.name,value:WForm.Element.postEncode(g)}
}):{name:b.name,value:WForm.Element.postEncode(c)}
}}};
window.addEvent=function(f,c,b){a(f).bind(c,b)
};
window.cancelDefaultEvents=function(b){if(b.preventDefault){b.preventDefault()
}b.returnValue=false
};
window.sbrToAbsoluteUrl=function(c){var f=c;
if(f.indexOf(":")<0){var g=""+window.location.href;
var b=document.getElementsByTagName("base");
if(b.length>0){g=b[0].href
}if(f.startsWith("//")){f=g.substring(0,g.indexOf(":")+1)+f
}else{if(f.indexOf("/")===0){f=f.substring(1);
g=g.substring(0,g.indexOf("/",7))
}if(g.charAt(g.length-1)!="/"){g+="/"
}f=g+f
}}return f
};
if(!window.Url){window.Url={}
}window.Url.unparam=function(h,k){if(typeof(h)=="undefined"||h==null){return{}
}var b=h.trim().match(/([^?#]*)(#.*)?$/);
if(!b){return{}
}var n={};
var g=b[1].split(k||"&");
for(var f=0;
f<g.length;
f++){var l=g[f].split("=",2);
var c=decodeURIComponent(l[0]);
var h=l.length==2?decodeURIComponent(l[1]):null;
n[c]=h
}return n
};
if(typeof window.Event=="undefined"){window.Event={}
}Event.onDOMReady=a.proxy(a(document).ready,a(document))
})(jQuery);
jQuery.fn.reverse=[].reverse;
Shadowbox.initialized=false;
var closeBoxSrc=(function(){var a=document.getElementsByTagName("script");
for(var c=a.length-1;
c>=0;
c--){var f=a[c].getAttribute("defer");
var b=(f!=undefined&&f.length>0);
if(!b){return a[c].src.replace(/[^/]+\/[^/]+$/,"")+"images/mediaplayers/closebox.png"
}}return""
}());
var shadowboxOptions={overlayOpacity:0.7,overlayColor:"#fff",viewportPadding:40,counterType:"skip",onOpen:function(){(function(a){if(a("#sb-wrapper > :first-child").attr("id")=="sb-title"){a("#sb-info-inner").append(a("#sb-counter"));
a("#sb-info").after(a("#sb-title"));
a("#sb-nav-close").remove();
a("#sb-nav a").reverse().each(function(){$a=a(this);
$a.parent().append($a)
});
a("#sb-nav-next").html("&raquo;");
a("#sb-nav-previous").html("&laquo;");
if(a("#sb-wrapper .close-button").length==0){a("#sb-wrapper").prepend(a('<img class="close-button" src="'+closeBoxSrc+'" />').click(function(){Shadowbox.close()
}))
}}})(jQuery)
}};
var initShadowbox=function(){if(jQuery("body").data("initShadowbox")||jQuery("#main-content a[rel^=lightbox]").length>0){jQuery("body").removeData("initShadowbox");
if(Shadowbox.initialized){Shadowbox.clearCache();
Shadowbox.setup(false,shadowboxOptions)
}else{Shadowbox.initialized=true;
Shadowbox.init(shadowboxOptions)
}}};
Event.onDOMReady(initShadowbox);
var initLightbox=initShadowbox;
var NavigableList=function(a){this.options={linkElement:null,listElement:null,inputElement:null,queryURL:null,jsonCallback:null,containerElement:null,selectFunction:null,enabledFunction:null,urlRewriterFunction:null,transition:"none",transitionSpeed:"fast"};
jQuery.extend(this.options,a);
this.isStaticList=(this.options.queryURL)?false:true;
jQuery(document).keydown(jQuery.proxy(this.handleKeyPress,this));
this.close(true);
if(this.isStaticList){this.closeTimer=null;
this.registerMouseListeners()
}else{var b=this;
this.options.inputElement.blur(function(){setTimeout(function(){b.close()
},500)
}).delayedObserver(function(){if(b.options.inputElement.val().length>0&&(!b.options.enabledFunction||b.options.enabledFunction())){var c=b.options.queryURL+b.options.inputElement.val();
if(b.options.urlRewriterFunction){c=b.options.urlRewriterFunction(c)
}if(b.options.jsonCallback){jQuery.ajax({url:c,dataType:(c.indexOf("callback=?")!=-1)?"jsonp":"json",crossDomain:(c.indexOf("callback=?")!=-1),success:function(f){jQuery.proxy(b.options.jsonCallback,b)(f);
if(b.options.containerElement.find("li").length>0){b.options.listElement=b.options.containerElement.find("ul");
b.registerMouseListeners();
b.open()
}else{b.close()
}}})
}else{jQuery.get(c,function(f){b.options.containerElement.empty().append(f);
if(b.options.containerElement.find("li").length>0){b.options.listElement=b.options.containerElement.find("ul");
b.registerMouseListeners();
b.open()
}else{b.close()
}})
}}else{b.close()
}},0.1)
}};
NavigableList.prototype.isVisible=function(){return this.options.containerElement.is(":visible")
};
NavigableList.prototype.handleKeyPress=function(a){if(this.isVisible()){switch(a.which){case jQuery.event.keyCodes.ENTER:return this.select(a);
break;
case jQuery.event.keyCodes.ESCAPE:a.preventDefault();
this.close();
break;
case jQuery.event.keyCodes.UP:a.preventDefault();
this.moveUp();
return false;
break;
case jQuery.event.keyCodes.DOWN:a.preventDefault();
this.moveDown();
return false;
break
}}};
NavigableList.prototype.select=function(a){if(!this.options.listElement){return
}if(this.isVisible()&&this.options.selectFunction&&this.options.listElement.find("li.hover").length>0){a.preventDefault();
return this.options.selectFunction(this.options.listElement.find("li.hover"))
}return true
};
NavigableList.prototype.moveUp=function(){if(!this.options.listElement){return
}if(this.options.listElement.find("li.hover").prevAll("li:not(.disabled,.separator)").length==0){this.options.listElement.find("li.hover").removeClass("hover");
this.options.listElement.find("li:last").addClass("hover")
}else{var a=this.options.listElement.find("li.hover");
a.prevAll("li:not(.disabled,.separator):first").addClass("hover");
a.removeClass("hover")
}};
NavigableList.prototype.moveDown=function(){if(!this.options.listElement){return
}if(this.options.listElement.find("li.hover").nextAll("li:not(.disabled,.separator)").length==0){this.options.listElement.find("li.hover").removeClass("hover");
this.options.listElement.find("li:first").addClass("hover")
}else{var a=this.options.listElement.find("li.hover");
a.nextAll("li:not(.disabled,.separator):first").addClass("hover");
a.removeClass("hover")
}};
NavigableList.prototype.open=function(){switch(this.options.transition){case"fade":this.options.containerElement.fadeIn(this.options.transitionSpeed).addClass("visible");
break;
case"slide":this.options.containerElement.slideDown(this.options.transitionSpeed).addClass("visible");
break;
case"none":default:this.options.containerElement.show().addClass("visible")
}};
NavigableList.prototype.close=function(a){if(a){this.options.containerElement.hide().removeClass("visible");
return
}switch(this.options.transition){case"fade":this.options.containerElement.fadeOut(this.options.transitionSpeed).removeClass("visible");
break;
case"slide":this.options.containerElement.slideUp(this.options.transitionSpeed).removeClass("visible");
break;
case"none":default:this.options.containerElement.hide().removeClass("visible")
}};
NavigableList.prototype.registerMouseListeners=function(){if(!this.options.listElement){return
}this.options.listElement.find("li:not(.disabled,.separator)").mouseover(jQuery.proxy(function(a){this.options.listElement.find("li.hover").removeClass("hover");
jQuery(a.currentTarget).addClass("hover")
},this)).mousedown(jQuery.proxy(function(a){this.select(a)
},this));
if(this.options.linkElement){jQuery.each([this.options.linkElement,this.options.listElement],jQuery.proxy(function(b,a){a.mouseenter(jQuery.proxy(function(){clearTimeout(this.closeTimer);
this.closeTimer=null;
this.open()
},this)).mouseleave(jQuery.proxy(function(){if(!this.closeTimer){this.closeTimer=setTimeout(jQuery.proxy(function(){this.close()
},this),500)
}},this))
},this))
}};
NavigableList.prototype.unregisterMouseListeners=function(){if(!this.options.listElement){return
}this.options.listElement.find("li:not(.disabled,.separator)").unbind("mouseover").unbind("mousedown");
if(this.options.linkElement){jQuery.each([this.options.linkElement,this.options.listElement],jQuery.proxy(function(b,a){a.unbind("mouseenter").unbind("mouseleave")
},this))
}};
(function(a){window.CtrlAltShortcuts={};
a(function(){a(document).keydown(function(g){var b=String.fromCharCode(g.which);
var f=g.altKey;
var c=g.ctrlKey;
if(c&&f&&CtrlAltShortcuts[b]){g.preventDefault();
CtrlAltShortcuts[b](g)
}})
})
})(jQuery);
if(typeof FlashObject=="undefined"){FlashObject=function(f,k,a,c,b,g){this.swf=f;
this.id=k;
this.width=a;
this.height=c;
this.version=7;
this.align=g;
this.redirect="";
this.sq=document.location.search.split("?")[1]||"";
this.altTxt="Please <a href='http://www.macromedia.com/go/getflashplayer'>upgrade your Flash Player</a>.";
this.bypassTxt="<p>Already have Flash Player? <a href='?detectflash=false&"+this.sq+"'>Click here if you have Flash Player "+this.version+" installed</a>.</p>";
this.params=new Object();
this.variables=new Object();
this.addParam("quality","high");
this.doDetect="";
this.detectedVersion;
this.embedType=b||"flash";
this.addParam("AutoStart","true");
this.addParam("WindowLess","false");
this.addParam("VideoBorderWidth","0");
this.addParam("VideoBorderColor","ffffff");
this.addParam("ShowControls","true")
};
FlashObject.prototype.addParam=function(a,b){this.params[a]=b
};
FlashObject.prototype.getParams=function(){return this.params
};
FlashObject.prototype.getParam=function(a){return this.params[a]
};
FlashObject.prototype.addVariable=function(a,b){this.variables[a]=b
};
FlashObject.prototype.getVariable=function(a){return this.variables[a]
};
FlashObject.prototype.getVariables=function(){return this.variables
};
FlashObject.prototype.getParamTags=function(){var a="";
for(var b in this.getParams()){a+='<param name="'+b+'" value="'+this.getParam(b)+'" />'
}if(a==""){a=null
}return a
};
FlashObject.prototype.getHTML=function(){if(this.embedType=="slideShow"){imageDir=this.getParam("imageDir");
url="http://www2.warwick.ac.uk/sitebuilder2/render/tocImages.xml?sbrPage="+imageDir+"&showGallery=off&rn="+new Date().getTime();
this.addVariable("xmlPath",unescape(url))
}var a="";
if(window.ActiveXObject&&navigator.userAgent.indexOf("Mac")==-1){if(this.embedType=="flash"||this.embedType=="slideShow"){a+='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="'+this.width+'" height="'+this.height+'" id="'+this.id+'">';
a+='<param name="allowScriptAccess" value="sameDomain" />';
a+='<param name="movie" value="'+this.swf+'" />';
a+='<param name="quality" value="high" />';
if(this.getParamTags()!=null){a+=this.getParamTags()
}if(this.getVariablePairs()!=null){a+='<param name="flashVars" value="'+this.getVariablePairs()+'" />'
}a+="</object>"
}else{if(this.embedType=="mediaplayer"){a=this.getMplayerCode()
}else{a+="<p>embed type "+this.embedType+" not recognised!</p>"
}}}else{if(this.embedType=="flash"||this.embedType=="slideShow"){a+='<embed allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" src="'+this.swf+'" width="'+this.width+'" height="'+this.height+'" id="'+this.id+'" name="'+this.id+'"';
for(var b in this.getParams()){a+=" "+b+'="'+this.getParam(b)+'"'
}if(this.getVariablePairs()!=null){a+=' flashVars="'+this.getVariablePairs()+'"'
}a+="></embed>"
}else{if(this.embedType=="mediaplayer"){a=this.getMplayerCode()
}else{a+="<p>embed type "+this.embedType+" not recognised!</p>"
}}}if(this.align){a='<div align="'+this.align+'">'+a+"</div>"
}else{a="<div>"+a+"</div>"
}return a
};
FlashObject.prototype.getMplayerCode=function(){var a='<object id="'+this.id+'" ';
a+='width="'+this.width+'" ';
a+='height="'+this.height+'" ';
a+='vspace="0" standby="Loading Microsoft&amp;#65533;Windows&amp;#65533; Media Player components..." ';
a+='codebase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701" ';
a+='classid="CLSID:22D6F312-B0F6-11D0-94AB-0080C74C7E95" ';
a+='type="application/x-oleobject" ';
a+='hspace="0"> ';
a+='<param name="Filename" value="'+this.swf+'" /> ';
for(var b in this.getParams()){a+='<param name="'+b+'" value="'+this.getParam(b)+' ">'
}a+='<embed name="'+this.id+'" ';
a+='type="application/x-mplayer2" ';
a+='pluginspage="http://www.microsoft.com/Windows/Downloads/Contents/Products/MediaPlayer/" ';
a+="width="+this.width+" ";
a+="height="+this.height+" ";
a+='hspace="0" vspace="0" ';
a+='filename="'+this.swf+'" ';
for(var b in this.getParams()){value=this.getParam(b);
if(value=="true"||value=="false"){a+=b+"="+(value=="true"?"1":"0")+" "
}else{a+=b+"="+value+" "
}}a+="</embed></object>";
return a
};
FlashObject.prototype.getVariablePairs=function(){var b=new Array();
for(var a in this.getVariables()){b.push(a+"="+escape(this.getVariable(a)))
}if(b.length>0){return b.join("&")
}else{return null
}};
FlashObject.prototype.write=function(a){if(detectFlash(this.version)||this.doDetect=="false"){if(a){document.getElementById(a).innerHTML=this.getHTML()
}else{document.write(this.getHTML())
}}else{if(this.redirect!=""){document.location.replace(this.redirect)
}else{if(getFlashVersion()==0){var b=getQueryParamValueFromString(this.swf,"theFile");
this.altTxt="<p><a href='"+b+"'>"+getFilenameFromUrl(b)+"</a></p>"
}if(a){document.getElementById(a).innerHTML=this.altTxt
}else{document.write(this.altTxt+""+this.bypassTxt+"<p><a href='"+b+"'>"+getFilenameFromUrl(b)+"</a></p>")
}}}}
}function getFlashVersion(){var a=FlashVersionDetector.getMajorVersionInteger();
return(a<0)?0:a
}function detectFlash(a){if(getFlashVersion()>=a){return true
}else{return false
}}function getQueryParamValue(b){var a=document.location.search;
return(getQueryParamValueFromString(a,b))
}function getQueryParamValueFromString(a,f){var c=a;
var g=c.indexOf(f);
var b=(c.indexOf("&",g)!=-1)?c.indexOf("&",g):c.length;
if(c.length>1&&g!=-1){return c.substring(c.indexOf("=",g)+1,b)
}else{return""
}}function getFilenameFromUrl(b){var a=b.substring(b.lastIndexOf("/")+1);
return a
}if(Array.prototype.push==null){Array.prototype.push=function(a){this[this.length]=a;
return this.length
}
}if(String.prototype.toAbsoluteUrl==null){String.prototype.toAbsoluteUrl=function(){var b=this;
if(b.indexOf(":")<0){var c=""+window.location.href;
var a=document.getElementsByTagName("base");
if(a.length>0){c=a[0].href
}if(b.startsWith("//")){b=c.substring(0,c.indexOf(":")+1)+b
}else{if(b.indexOf("/")===0){b=b.substring(1);
c=c.substring(0,c.indexOf("/",7))
}if(c.charAt(c.length-1)!="/"){c+="/"
}b=c+b
}}return b
}
}if(typeof FlashVersionDetector=="undefined"){var isIE=(navigator.appVersion.indexOf("MSIE")!=-1)?true:false;
var isWin=(navigator.appVersion.toLowerCase().indexOf("win")!=-1)?true:false;
var isOpera=(navigator.userAgent.indexOf("Opera")!=-1)?true:false;
var FlashVersionDetector={getActiveXControlVersion:function(){var a;
var b;
var c;
try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
a=b.GetVariable("$version")
}catch(c){}if(!a){try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
a="WIN 6,0,21,0";
b.AllowScriptAccess="always";
a=b.GetVariable("$version")
}catch(c){}}if(!a){try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
a=b.GetVariable("$version")
}catch(c){}}if(!a){try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
a="WIN 3,0,18,0"
}catch(c){}}if(!a){try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
a="WIN 2,0,0,11"
}catch(c){a=-1
}}return a
},getVersion:function(){var k=-1;
if(navigator.plugins!=null&&navigator.plugins.length>0){if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]){var h=navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"";
var a=navigator.plugins["Shockwave Flash"+h].description;
var g=a.split(" ");
var c=g[2].split(".");
var l=c[0];
var b=c[1];
var f=g[3];
if(f==""){f=g[4]
}if(f[0]=="d"){f=f.substring(1)
}else{if(f[0]=="r"){f=f.substring(1);
if(f.indexOf("d")>0){f=f.substring(0,f.indexOf("d"))
}}}var k=l+"."+b+"."+f
}}else{if(navigator.userAgent.toLowerCase().indexOf("webtv/2.6")!=-1){k=4
}else{if(navigator.userAgent.toLowerCase().indexOf("webtv/2.5")!=-1){k=3
}else{if(navigator.userAgent.toLowerCase().indexOf("webtv")!=-1){k=2
}else{if(isIE&&isWin&&!isOpera){k=FlashVersionDetector.getActiveXControlVersion()
}}}}}return k
},isClientHasVersionString:function(a){versionArray=a.replace(/,/g,".").split(".");
if(versionArray.length==3){return FlashVersionDetector.isClientHasVersion(versionArray[0],versionArray[1],versionArray[2])
}else{if(versionArray.length==4){return FlashVersionDetector.isClientHasVersion(versionArray[0],versionArray[1],versionArray[3])
}else{return false
}}},isClientHasVersion:function(h,f,c){versionStr=FlashVersionDetector.getVersion();
if(versionStr==-1){return false
}else{if(versionStr!=0){if(isIE&&isWin&&!isOpera){tempArray=versionStr.split(" ");
tempString=tempArray[1];
versionArray=tempString.split(",")
}else{versionArray=versionStr.split(".")
}var g=versionArray[0];
var a=versionArray[1];
var b=versionArray[2];
if(g>parseFloat(h)){return true
}else{if(g==parseFloat(h)){if(a>parseFloat(f)){return true
}else{if(a==parseFloat(f)){if(b>=parseFloat(c)){return true
}}}}}return false
}}},getMajorVersionInteger:function(){versionStr=FlashVersionDetector.getVersion();
if(versionStr==-1){return -1
}else{if(versionStr!=0){if(isIE&&isWin&&!isOpera){tempArray=versionStr.split(" ");
tempString=tempArray[1];
versionArray=tempString.split(",")
}else{versionArray=versionStr.split(".")
}return parseInt(versionArray[0],10)
}}}}
}(function(){if(!
/*@cc_on!@*/
0){return
}var e="abbr,article,aside,audio,bb,canvas,datagrid,datalist,details,dialog,eventsource,figure,footer,header,hgroup,mark,menu,meter,nav,output,progress,section,time,video".split(",");
for(var i=0;
i<e.length;
i++){document.createElement(e[i])
}})();
(function(a){window.ButtonPlayer=function(c,b){this.$container=a("#"+b);
this.basename=c.getBasename();
this.$container.attr("title",this.basename+" | Click to play");
this.$container.addClass("buttonPlayer");
this.$playButton=a('<div class="play button"><div class="glyph"></div></div>');
this.$container.append(this.$playButton);
this.$pauseButton=a('<div class="pause button"><div class="glyph"></div></div>');
this.$container.append(this.$pauseButton);
this.$progressContainer=a('<div class="progressContainer" />');
this.$container.append(this.$progressContainer);
this.$progressLoading=a('<div class="progressLoading" />');
this.$progress=a('<div class="progress" />');
this.$progressLoading.append(this.$progress);
this.$progressContainer.append(this.$progressLoading);
this.$stopButton=a('<div class="stop button"><div class="glyph"></div></div>');
this.$container.append(this.$stopButton);
this.$pauseButton.hide();
this.audio=c;
this.duration=null;
this.executor=null;
this.$playButton.click(a.proxy(function(){this.$playButton.hide();
this.$pauseButton.show();
this.audio.play();
if(this.executor==null){this.executor=setTimeout(a.proxy(function(){var g=this.audio.a;
var f=0;
if(g.buffered.length>0){f=parseInt(((g.buffered.end(0)/g.duration)*100))
}this.$progressLoading.css({width:f+"%"})
},this),400);
this.$pauseButton.click(a.proxy(function(){this.$pauseButton.hide();
this.$playButton.show();
this.audio.pause()
},this));
this.$stopButton.click(a.proxy(function(){this.$pauseButton.hide();
this.$playButton.show();
this.audio.stop();
clearTimeout(this.executor)
},this));
this.audio.observeEnd(a.proxy(function(){this.$pauseButton.hide();
this.$playButton.show();
this.$progress.css({width:"0%"});
clearTimeout(this.executor)
},this));
this.audio.observeDurationchange(a.proxy(function(h){this.duration=h;
if(h!=NaN&&h!=Infinity){var f=parseInt(h);
var g="";
jQuery.each(new Array("s","m","h"),function(l,k){v=f%60;
g=""+v+k+" "+g;
f=(f-v)/60;
if(f<=0){return false
}});
this.$container.attr("title",this.basename+" | Duration: "+g)
}},this));
this.audio.observeTimeupdate(a.proxy(function(g){if(this.duration!=null){var f=(g*100)/this.duration;
this.$progress.css({width:f+"%"})
}},this))
}},this))
};
window.LongPlayer=function(f,c){var g=jQuery;
this.$container=g("#"+c);
this.$container.addClass("longPlayer");
this.added=false;
var b=g('<div class="clicktoplay"><div class="playicon"></div></div>');
this.$container.append(b);
b.click(g.proxy(function(h){b.hide();
if(!this.added){f.addSelf(this.$container)
}f.a.controls=true;
f.play()
},this))
};
window.NativeAudio=function(b){this.delayedSrc=b
};
NativeAudio.prototype.lazyInit=function(){if(!this.a){this.a=document.createElement("audio");
if(this.delayedSrc){this.a.src=this.delayedSrc;
this.delayedSrc=null
}}};
NativeAudio.prototype.play=function(){this.lazyInit();
this.a.play()
};
NativeAudio.prototype.getBasename=function(){var c=this.delayedSrc||this.a.src;
var b=c.lastIndexOf("/");
if(b>-1&&b<c.length){c=c.substring(b+1)
}return c
};
NativeAudio.prototype.pause=function(){this.lazyInit();
this.a.pause()
};
NativeAudio.prototype.stop=function(){this.a.pause();
this.a.currentTime=0
};
NativeAudio.prototype.seek=function(b){this.lazyInit();
this.a.currentTime=b
};
NativeAudio.prototype.observeTimeupdate=function(b){a(this.a).bind("timeupdate",a.proxy(function(){b(this.a.currentTime)
},this))
};
NativeAudio.prototype.observeDurationchange=function(b){a(this.a).bind("durationchange",a.proxy(function(){b(this.a.duration)
},this))
};
NativeAudio.prototype.observeEnd=function(b){a(this.a).bind("ended",b);
a(this.a).bind("timeupdate",a.proxy(function(){if(this.a.currentTime==this.a.duration){b()
}},this))
};
NativeAudio.prototype.addSelf=function(b){this.lazyInit();
b.append(this.a)
};
NativeAudio.canPlayType=function(c){var b=document.createElement("audio");
var f=navigator.userAgent;
var g=f.match(/Windows.+Safari/)&&!f.match(/Chrome/);
return !!(!g&&b.canPlayType&&b.canPlayType(c).replace(/no/,""))
};
NativeAudio.canPlayMp3=function(){return NativeAudio.canPlayType("audio/mpeg;")
}
})(jQuery);
if(typeof SortableTables=="undefined"){var SortableTables={DATE_RE:/^(\d\d?)[\/\.-](\d\d?)[\/\.-]((\d\d)?\d\d)$/,FILESIZE_RE:/^\(?([\d\.]+)\s([KM]B)\)?$/,tables:{},init:function(){if(!document.getElementsByTagName){return
}tbls=document.getElementsByTagName("table");
for(ti=0;
ti<tbls.length;
ti++){thisTbl=tbls[ti];
if((" "+thisTbl.className+" ").indexOf("sitebuilder_sortable")!=-1){if(!thisTbl.id){var a="sortableTable_"+Math.floor(Math.random()*100000);
thisTbl.id=a
}SortableTables.tables[thisTbl.id]=new SortableTable(thisTbl)
}}},registerCallback:function(a,b){SortableTables.tables[a.id].callback=b
}};
var SortableTable=function(k){this.table=k;
if(k.rows&&k.rows.length>0){var o=k.rows[0]
}if(!o){return
}var l=jQuery.proxy(function(f,p){return jQuery.proxy(function(){this.resort(f,p);
return false
},this)
},this);
for(var h=0;
h<o.cells.length;
h++){var c=o.cells[h];
if((" "+c.className+" ").indexOf("sortable")!=-1){var b=this._getInnerText(c);
var n=(c.title)?c.title:b;
c.title="Click to sort by "+n.toLowerCase();
var g=document.createElement("a");
g.href="";
g.className="sortheader";
g.onclick=l(g,h);
g.innerHTML=b+'<span class="sortarrow">&nbsp;&nbsp;&nbsp;</span>';
c.innerHTML="";
c.appendChild(g)
}}this.callback()
};
SortableTable.prototype.poundRegex=new RegExp("(\u00A3|&pound;)","g");
SortableTable.prototype.resort=function(k,n){var r;
for(var w=0;
w<k.childNodes.length;
w++){if(k.childNodes[w].tagName&&k.childNodes[w].tagName.toLowerCase()=="span"){r=k.childNodes[w]
}}var a=this._getInnerText(r);
var c=k.parentNode;
var f=n||c.cellIndex;
var u=this.table;
if(u.rows.length<=1){return
}var l=this._getInnerText(u.rows[1].cells[f]);
var q=this._sort_caseInsensitive;
if(l.match(/^[\d\.]+$/)){q=this._sort_numeric
}else{if(l.match(this.poundRegex)){q=this._sort_pounds
}}possdate=l.match(SortableTables.DATE_RE);
if(possdate){first=parseInt(possdate[1]);
second=parseInt(possdate[2]);
if(first>12){q=this._sort_ddmm
}else{if(second>12){q=this._sort_mmdd
}else{q=this._sort_ddmm
}}}if((" "+u.rows[0].cells[f].className+" ").indexOf("sortable_filesize")!=-1){q=this._sort_filesize
}this.sortColumn=f;
var g=new Array();
var h=new Array();
for(i=0;
i<u.rows[0].length;
i++){g[i]=u.rows[0][i]
}for(j=1;
j<u.rows.length;
j++){h[j-1]=u.rows[j]
}h.sort(jQuery.proxy(q,this));
var p;
if(r.getAttribute("sortdir")=="down"){p="&nbsp;&nbsp;&uarr;";
h.reverse();
r.setAttribute("sortdir","up");
k.className="sortheader sortup"
}else{p="&nbsp;&nbsp;&darr;";
r.setAttribute("sortdir","down");
k.className="sortheader sortdown"
}for(i=0;
i<h.length;
i++){if(!h[i].className||(h[i].className&&(h[i].className.indexOf("sortbottom")==-1))){u.tBodies[0].appendChild(h[i])
}}for(i=0;
i<h.length;
i++){if(h[i].className&&(h[i].className.indexOf("sortbottom")!=-1)){u.tBodies[0].appendChild(h[i])
}}var o=document.getElementsByTagName("span");
for(var w=0;
w<o.length;
w++){if(o[w].className=="sortarrow"){if(this._getParent(o[w],"table")==this._getParent(k,"table")){o[w].innerHTML="&nbsp;&nbsp;&nbsp;"
}}}var s=this._getParent(k,"tr");
var b=s.getElementsByTagName("a");
for(var w=0;
w<b.length;
w++){if(b[w]!=k){b[w].className="sortheader"
}}r.innerHTML=p;
this.callback()
};
SortableTable.prototype._sort_caseInsensitive=function(f,c){aa=this._getInnerText(f.cells[this.sortColumn]).toLowerCase();
bb=this._getInnerText(c.cells[this.sortColumn]).toLowerCase();
if(String.prototype.trim){aa=aa.trim();
bb=bb.trim()
}if(aa==bb){return 0
}if(aa<bb){return -1
}return 1
};
SortableTable.prototype._sort_default=function(f,c){aa=this._getInnerText(f.cells[this.sortColumn]);
bb=this._getInnerText(c.cells[this.sortColumn]);
if(aa==bb){return 0
}if(aa<bb){return -1
}return 1
};
SortableTable.prototype._sort_numeric=function(f,c){return this._doNumericSort(this._getInnerText(f.cells[this.sortColumn]),this._getInnerText(c.cells[this.sortColumn]))
};
SortableTable.prototype._sort_pounds=function(f,c){return this._doNumericSort(this._getInnerText(f.cells[this.sortColumn]).replace(this.poundRegex,"").replace(",",""),this._getInnerText(c.cells[this.sortColumn]).replace(this.poundRegex,"").replace(",",""))
};
SortableTable.prototype._sort_ddmm=function(f,c){aa=this._getInnerText(f.cells[this.sortColumn]);
bb=this._getInnerText(c.cells[this.sortColumn]);
mtch=aa.match(SortableTables.DATE_RE);
if(mtch==null){return -1
}y=mtch[3];
m=mtch[2];
d=mtch[1];
if(m.length==1){m="0"+m
}if(d.length==1){d="0"+d
}dt1=y+m+d;
mtch=bb.match(SortableTables.DATE_RE);
if(mtch==null){return -1
}y=mtch[3];
m=mtch[2];
d=mtch[1];
if(m.length==1){m="0"+m
}if(d.length==1){d="0"+d
}dt2=y+m+d;
if(dt1==dt2){return 0
}if(dt1<dt2){return -1
}return 1
};
SortableTable.prototype._sort_mmdd=function(f,c){aa=this._getInnerText(f.cells[this.sortColumn]);
bb=this._getInnerText(c.cells[this.sortColumn]);
mtch=aa.match(SortableTables.DATE_RE);
if(mtch==null){return -1
}y=mtch[3];
d=mtch[2];
m=mtch[1];
if(m.length==1){m="0"+m
}if(d.length==1){d="0"+d
}dt1=y+m+d;
mtch=bb.match(SortableTables.DATE_RE);
if(mtch==null){return -1
}y=mtch[3];
d=mtch[2];
m=mtch[1];
if(m.length==1){m="0"+m
}if(d.length==1){d="0"+d
}dt2=y+m+d;
if(dt1==dt2){return 0
}if(dt1<dt2){return -1
}return 1
};
SortableTable.prototype._sort_filesize=function(f,c){aa=this._getInnerText(f.cells[this.sortColumn]);
bb=this._getInnerText(c.cells[this.sortColumn]);
a_bytes=0;
b_bytes=0;
mtch=aa.match(SortableTables.FILESIZE_RE);
if(mtch){num=mtch[1];
units=mtch[2];
if(units=="MB"){a_bytes=num*1024*1024
}else{a_bytes=num*1024
}}mtch=bb.match(SortableTables.FILESIZE_RE);
if(mtch){num=mtch[1];
units=mtch[2];
if(units=="MB"){b_bytes=num*1024*1024
}else{b_bytes=num*1024
}}return this._doNumericSort(a_bytes,b_bytes)
};
SortableTable.prototype._doNumericSort=function(f,c){aa=parseFloat(f);
if(isNaN(aa)){aa=0
}bb=parseFloat(c);
if(isNaN(bb)){bb=0
}return aa-bb
};
SortableTable.prototype._getInnerText=function(f){if(typeof f=="string"){return f.trim()
}if(typeof f=="undefined"){return""
}if(f.innerText){return f.innerText.trim()
}var g="";
var c=f.childNodes;
var a=c.length;
for(var b=0;
b<a;
b++){switch(c[b].nodeType){case 1:g+=this._getInnerText(c[b]);
break;
case 3:g+=c[b].nodeValue;
break
}}return g.trim()
};
SortableTable.prototype._getParent=function(b,a){if(b==null){return null
}else{if(b.nodeType==1&&b.tagName.toLowerCase()==a.toLowerCase()){return b
}else{return this._getParent(b.parentNode,a)
}}};
SortableTable.prototype._zebraStripe=function(){var b=this.table;
rows=b.getElementsByTagName("tr");
var c=true;
for(var a=0;
a<rows.length;
a++){cells=rows[a].getElementsByTagName("td");
if(cells.length==0){continue
}rows[a].className=c?"odd":"even";
c=!c
}};
SortableTable.prototype.callback=function(){this._zebraStripe()
};
Event.onDOMReady(SortableTables.init)
}SitebuilderHeaderSlideshow={beforeTransition:function(b,a){},afterTransition:function(a,b){}};
jQuery(document).ready(function(g){var f=function(p){var q=g.grep(p.get(0).className.split(" "),function(r){return r.match(/slide_\d+/)
});
if(q.length==0){return null
}else{return q[0]
}};
if(g("#header .slide").length>1&&(!g.browser.msie||parseInt(g.browser.version)>=7)){var k=g("#header").data("transition")||"slideshow";
var a=g("#header .slide");
var k=g("#header").data("transition")||"slide";
var h=g('<div class="slideshow-button slideshow-button-left" unselectable="on"><a href="#prev" title="View the previous slide" unselectable="on"></a></div>"');
var o=g('<div class="slideshow-button slideshow-button-right" unselectable="on"><a href="#next" title="View the next slide" unselectable="on"></a></div>"');
var c=g("#header .slide.active");
g("#header").addClass(f(c));
o.click(function(p){var w=g("#header .slide.active");
if(w.is(":animated")){p.stopPropagation();
p.preventDefault();
return false
}var s=w.next(".slide");
if(s.length==0){s=g("#header .slide").first()
}SitebuilderHeaderSlideshow.beforeTransition(w,s);
var r=g("#header").width();
if(k=="crossfade"){s.stop().hide().css({left:"0px"}).fadeTo(400,1,function(){g(this).addClass("active");
g("#header").removeClass(f(g("#header")));
g("#header").addClass(f(g(this)));
SitebuilderHeaderSlideshow.afterTransition(w,s)
});
w.stop().css({left:"0px"}).fadeTo(400,0,function(){g(this).removeClass("active")
})
}else{s.stop().css({left:r+"px"});
w.stop().css({left:"0px"});
g([w[0],s[0]]).animate({left:"-="+r},{duration:400,easing:"swing",complete:function(){w.removeClass("active").css({left:r+"px"});
s.addClass("active").css({left:"0px"});
g("#header").removeClass(f(g("#header")));
g("#header").addClass(f(g(this)));
SitebuilderHeaderSlideshow.afterTransition(w,s)
}})
}var u=s.find(".strapline");
if(u.length>0){var q=u.html();
if(q!=g("#strapline").html()){g("#strapline").fadeTo(200,0,function(){g(this).html(q).fadeTo(200,1)
})
}}p.stopPropagation();
p.preventDefault();
return false
});
h.click(function(p){var u=g("#header .slide.active");
if(u.is(":animated")){p.stopPropagation();
p.preventDefault();
return false
}var s=u.prev(".slide");
if(s.length==0){s=g("#header .slide").last()
}SitebuilderHeaderSlideshow.beforeTransition(u,s);
var r=g("#header").width();
if(k=="crossfade"){s.stop().hide().css({left:"0px"}).fadeTo(400,1,function(){g(this).addClass("active");
g("#header").removeClass(f(g("#header")));
g("#header").addClass(f(g(this)));
SitebuilderHeaderSlideshow.afterTransition(u,s)
});
u.stop().css({left:"0px"}).fadeTo(400,0,function(){g(this).removeClass("active")
})
}else{s.stop().css({left:"-"+r+"px"});
u.stop().css({left:"0px"});
g([u[0],s[0]]).animate({left:"+="+r},{duration:400,easing:"swing",complete:function(){u.removeClass("active").css({left:"-"+r+"x"});
s.addClass("active").css({left:"0px"});
g("#header").removeClass(f(g("#header")));
g("#header").addClass(f(g(this)));
SitebuilderHeaderSlideshow.afterTransition(u,s)
}})
}if(s.find(".strapline").length>0){var q=s.find(".strapline").html();
g("#strapline").fadeTo(200,0,function(){g(this).html(q).fadeTo(200,1)
})
}p.stopPropagation();
p.preventDefault();
return false
});
g("#header").prepend(h);
g("#header").append(o);
var b=g("#header").data("delay");
if(b){g("#header").mouseenter(function(){g(this).data("hover",true)
}).mouseleave(function(){g(this).data("hover",false)
});
var l=function(){if(!g("#header").data("hover")){o.click()
}};
var n;
n=window.setInterval(l,b*1000);
g(document.body).on("smallscreen",function(q,p){if(p){window.clearInterval(n)
}else{n=window.setInterval(l,b*1000)
}})
}}});
(function(h){var n=false;
var g=false;
jQuery.exist=function(){var p=true;
jQuery.each(arguments,function(){if(!this.length){p=false;
return false
}});
return p
};
window.SitebuilderInfo={url:null,lastContentUpdated:null,searchHasFocus:false,setupHeight:function(){var w=jQuery("#footer");
var q=jQuery("#navigation-and-content");
if(!q.length){return
}var s=parseInt(q.css("margin-top"))||0;
var p;
if(w.length){p=function(){var x=w.offset().top+w.outerHeight(true)+1;
return q.outerHeight(true)+(jQuery(window).height()-x)-s
}
}else{p=function(){return jQuery(window).height()-(q.offset().top+1)-s
}
}var r=p();
if(jQuery("#navigation.vertical").length&&r<jQuery("#navigation.vertical").outerHeight(true)){r=jQuery("#navigation.vertical").outerHeight(true)
}q.css({"min-height":r+"px"});
if(w.length){footerHeight=w.offset().top+w.outerHeight(true)+1;
var u=jQuery(window).height()-footerHeight;
if(u>0){q.css({"min-height":(r+u)+"px"})
}}},setupWarwickLinks:function(){var p=h("#warwick-logo-container.on-hover");
if(p.length>0){var q=p.find("#warwick-site-links");
q.hide();
var r=function(s,u){if(u){p.unbind("mouseover").unbind("mouseout")
}else{p.mouseover(function(){q.stop().fadeTo("fast",1)
});
p.mouseout(function(){q.stop().fadeTo("fast",0)
})
}};
h(document.body).bind("smallscreen",r);
r(null,h(document.body).hasClass("is-smallscreen"))
}h("#masthead.transparent").mouseover(function(){h(this).removeClass("transparent")
}).mouseout(function(){h(this).addClass("transparent")
})
}};
var k=720;
var b=960;
var c=h(window).width();
var l=new WCookie("ForceTablet");
var f=h("html").hasClass("force-tablet-in-edit");
var a=f||(l.value&&l.value=="yes");
var o=function(){return navigator.userAgent.match(/Android/i)
};
if(c>b){h("#meta-viewport").attr("content","width=device-width");
h("#meta-mobile-optimized").attr("content",b)
}else{if(c>=k||(c<k&&a)){h("#meta-viewport").attr("content","width="+b);
h("#meta-mobile-optimized").attr("content",b)
}else{if((c<k)&&o()){h("#meta-viewport").attr("content","width=device-width, initial-scale=1")
}}}h(function(r){var q=r(document.body),s=r(window);
var p=function(){var u=s.width();
var w=u<k&&!a;
if(w&&!n){q.addClass("is-smallscreen");
q.trigger("smallscreen",true)
}else{if(!w&&n){q.removeClass("is-smallscreen");
q.trigger("smallscreen",false)
}}n=w;
var x=u<=b&&(u>=k||a);
if(x&&!g){q.addClass("is-tablet");
if(a){q.addClass("force-tablet")
}q.trigger("tablet",true)
}else{if(!x&&g){q.removeClass("is-tablet");
if(a){q.removeClass("force-tablet")
}q.trigger("tablet",false)
}}g=x
};
s.resize(p);
p()
});
h(function(){var q=function(s,u){if(u&&h("#footer .mobile-switcher-link").length==0){var r=h('<div class="mobile-switcher-link"></div>');
h("#footer > .content").prepend(r);
r.append("View website in: ");
r.append(h('<a href="#force-tablet" />').html("Standard").click(function(w){l.value="yes";
l.expires="; expires=31 December 2034 23:54:30";
l.save();
w.stopPropagation();
w.preventDefault();
window.location.reload();
return false
}));
r.append(" | <strong>Mobile</strong>")
}};
var p=function(u,r){if(r&&h(document.body).hasClass("force-tablet")&&h("#footer .mobile-switcher-link").length==0){var s=h('<div class="mobile-switcher-link"></div>');
h("#footer > .content").prepend(s);
s.append("View website in: <strong>Standard</strong> | ");
s.append(h('<a href="#unforce-tablet" />').html("Mobile").click(function(w){l.value="";
l.expires="; expires=31 December 2034 23:54:30";
l.save();
w.stopPropagation();
w.preventDefault();
window.location.reload();
return false
}))
}};
h(document.body).bind("smallscreen",q);
h(document.body).bind("tablet",p);
if(h(document.body).hasClass("is-smallscreen")){q(null,true)
}if(h(document.body).hasClass("is-tablet")){p(null,true)
}});
h(function(){SitebuilderInfo.setupWarwickLinks();
SitebuilderInfo.setupHeight();
if(!h.browser.msie||parseInt(h.browser.version)>=9){h(window).bind("resize orientationchange",SitebuilderInfo.setupHeight)
}if(h.browser.msie&&parseInt(h.browser.version)<=6){h.fx.off=true
}});
h(function(){h("#main-content img").load(function(){if(h(this).closest("a").length>0){return
}if(this.naturalWidth&&this.clientWidth&&this.naturalWidth>(this.clientWidth*1.33)){h(this).wrap(h("<a />").attr({href:this.src,rel:"lightbox"}));
initLightbox()
}})
});
h(window).load(function(){h("table").each(function(){var r=h(this);
if(Math.floor(r.width())>r.parent().width()){r.wrap(h('<div><div class="sb-wide-table-wrapper"></div></div>'))
}});
if(h("body.is-smallscreen").length===0&&h("div.sb-wide-table-wrapper").length>0){var p=function(r){r.stopPropagation();
r.preventDefault();
if(!Shadowbox.initialized){Shadowbox.initialized=true;
Shadowbox.init(shadowboxOptions)
}var s=h(this).closest("div").find("div.sb-wide-table-wrapper");
Shadowbox.open({link:this,content:'<div class="sb-wide-table-wrapper" style="background: white;">'+s.html()+"</div>",player:"html",width:h(window).width(),height:h(window).height()})
};
var q=function(){return h("<span/>").addClass("sb-table-wrapper-popout").append("(").append(h("<a/>").attr("href","#").html("Pop-out table").on("click",p)).append(")")
};
h("div.sb-wide-table-wrapper > table").each(function(){var r=h(this);
if(r.is(":visible")&&!r.hasClass("sb-no-wrapper-table-popout")&&Math.floor(r.width())>r.parent().width()){r.parent().parent("div").prepend(q()).append(q())
}})
}})
})(jQuery);
jQuery(function(g){var h=g("#container");
var b=g("#edit-link");
if(b.length>0){var a=new NavigableList({linkElement:b,listElement:g("#edit-tool-menu"),containerElement:g("#edit-tool-container"),selectFunction:function(k){if(k.children("a.disabled").length==0){window.location=k.find("a").attr("href")
}else{return false
}},transition:"fade"});
var f=function(k,l){if(l){a.unregisterMouseListeners()
}else{a.registerMouseListeners()
}};
g(document.body).bind("smallscreen",f);
if(g(document.body).hasClass("is-smallscreen")){f(null,true)
}g(window).load(function(){var k=h.width()-(b.offset().left-h.offset().left)-b.width();
g("#edit-tool-container").css({right:k})
})
}if(g("#utility-bar").length>0){var c=function(l,n){if(n){if(g("#header").parent().attr("id")==="container"){g("#container").before(g("#header"))
}if(g("#alternate-utility").length==0){var k=g("<ul />");
g("#utility-bar li:not(.spacer)").each(function(p,o){k.append(g(o).clone())
});
g("#container").before(g("<div />").attr("id","alternate-utility").addClass("slide-in-menu").addClass("from-right").append(k));
g("#masthead").prepend(g("<a />").attr("href","#alternate-utility").addClass("icon-container").addClass("pull-right").append(g("<i />").addClass("sprite-search")).on("click",function(o){if(g("#alternate-utility").hasClass("opened")){g("#alternate-utility").removeClass("opened");
g("html").removeClass("slide-right");
setTimeout(function(){g("#alternate-utility").hide();
g("#container, #header").css("width","")
},500)
}else{g("#container, #header").css("width",g(window).width());
g("#alternate-utility").show().addClass("opened");
g("html").addClass("slide-right")
}o.preventDefault();
o.stopPropagation()
}));
g("#container, #header").on("touchstart mousedown",function(o){if(g("#alternate-utility").hasClass("opened")){g("#alternate-utility").removeClass("opened");
g("html").removeClass("slide-right");
setTimeout(function(){g("#alternate-utility").hide();
g("#container, #header").css("width","")
},500);
o.preventDefault();
o.stopPropagation()
}})
}}else{g("#alternate-utility").hide().removeClass("opened");
g("#container, #header").css("width","");
g("html").removeClass("slide-right");
if(g("#header").parent().attr("id")!=="container"){g("#container").prepend(g("#header"))
}}};
g(document.body).on("smallscreen",c);
if(g(document.body).hasClass("is-smallscreen")){c(null,true)
}}});
(function(a){window.id6nav=window.id6nav||{};
id6nav.isIE6or7=/msie|MSIE 6/.test(navigator.userAgent)||/msie|MSIE 7/.test(navigator.userAgent);
id6nav.isiOS=(navigator.userAgent.match(/iP(hone|od|ad)/i)!=null);
id6nav.isAndroid=(navigator.userAgent.match(/Android/i)!=null);
id6nav.repositionNavigation=function(){};
id6nav.states={UNDEFINED:"undefined",NORMAL:"normal",FIXED:"fixed",FIXEDBOTTOM:"fixed-bottom",SMALLSCREEN:"smallscreen"};
id6nav.layouts={UNDEFINED:"undefined",VERTICAL:"vertical",HORIZONTAL:"horizontal"};
id6nav.state=id6nav.states.UNDEFINED;
id6nav.layout=id6nav.layouts.UNDEFINED;
id6nav.$element=a();
id6nav.hasLayout=function(){return id6nav.layout!=id6nav.layouts.UNDEFINED
};
id6nav.changeState=function(b){if(id6nav.state!=b){for(var c in id6nav.states){if(id6nav.states.hasOwnProperty(c)&&id6nav.states[c]===b){id6nav.state=b;
id6nav.$element.trigger("fixed",id6nav.state);
return true
}}}else{return false
}};
id6nav.fixHorizontalNavLinkHeight=function(){var b=0;
var f=0;
a("#navigation.horizontal ul#primary-navigation > li:visible").each(function(){b=Math.max(a(this).height(),b);
f+=a(this).width()
});
a("#navigation.horizontal ul#primary-navigation > li:visible").height(b);
var c=Math.ceil(f/a("#navigation.horizontal").width())
};
id6nav.repositionChildList=function(l){if(l.length==0){return
}l.width("auto").removeClass("column-nav").find("li").width("auto").css({"float":"none"});
var o=l.closest("li");
var p=o.position();
var q=p.top+o.height();
l.css({top:q});
var f=l.height();
var u=a("#container").height();
var k=a("#header").height();
var h=(a("body").scrollTop()>k)?0:k-a("body").scrollTop();
if(a(window).height()<u){u=a(window).height()
}if(f+q+h>u){var n=l.width();
var s=u-h-q;
var g=Math.ceil(f/s);
l.width(n*g).addClass("column-nav").find("li").width(n).css({"float":"left"})
}var c=o.position().left;
var b=l.width();
var r=a("#container").width();
if((c+b)>r){c=r-(b+2)
}l.css({left:c})
}
})(jQuery);
jQuery(function(o){id6nav.hoverClass=function(w,x){w.hover(function(){o(this).addClass(x)
},function(){o(this).removeClass(x)
})
};
id6nav.$element=o("#navigation");
if(id6nav.$element.is(".vertical")){id6nav.layout=id6nav.layouts.VERTICAL;
id6nav.navigationOffset=id6nav.$element.offset().top;
id6nav.navigationHeight=id6nav.$element.outerHeight(true);
id6nav.repositionNavigation=function(){var x=o(window).scrollTop();
var w=o("#navigation-wrapper").height()+id6nav.navigationOffset;
var z=o(window).height();
if(!o(document.body).hasClass("is-smallscreen")){if(x<=id6nav.navigationOffset||z<id6nav.navigationHeight){if(id6nav.changeState(id6nav.states.NORMAL)){id6nav.$element.removeClass("fixed").removeClass("fixed-bottom")
}}else{if(x>id6nav.navigationOffset&&(x+id6nav.navigationHeight)<w){if(id6nav.changeState(id6nav.states.FIXED)){id6nav.$element.removeClass("fixed-bottom").addClass("fixed")
}}else{if((x+id6nav.navigationHeight)>w){if(id6nav.changeState(id6nav.states.FIXEDBOTTOM)){id6nav.$element.removeClass("fixed").addClass("fixed-bottom")
}}}}}};
o("#navigation.vertical .description.l1 span[data-href]").closest(".description").click(function(x){if(o(x.target).closest("span[data-href]").length>0){var w=o(x.target).closest("span[data-href]").data("href");
if(x.shiftKey||x.ctrlKey||x.which==2){window.open(w)
}else{window.location=w
}x.preventDefault();
x.stopPropagation();
return false
}});
o("#navigation.vertical div.rendered-link-content").each(function(w,x){if(x.scrollWidth&&x.offsetWidth&&x.scrollWidth>x.offsetWidth){x.title=o(x).text()
}})
}else{if(id6nav.$element.is(".horizontal")){var s=o("#navigation.horizontal #secondary-navigation > li:not(.breadcrumb)");
if(s.length>0){var a=s.map(function(w,x){return o(x).position().left
});
var h=a.filter(function(w,x){return w!=0&&x===0
}).length>0;
if(h){var b=o('<div class="link-content arrow"><div class="title rendered-link-content"><div class="arrow" title="Show more"></div></div><div class="separator rendered-link-content"></div></div>');
var r=o('<li class="show-more-link rendered-link" />').append(b);
o("#navigation.horizontal #secondary-navigation").prepend(r);
r.find(".arrow .arrow").css("border-top-color",r.find(".arrow .arrow").css("color"));
var c=function(A){var B=/rgba*\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\s*\)/;
var z=/^#([0-9A-Fa-f]{1})([0-9A-Fa-f]{1})([0-9A-Fa-f]{1})$|^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/;
var D=function(K,J,H,I){if(F/255>0.5){return"rgb("+Math.max(K-50,0)+","+Math.max(J-50,0)+","+Math.max(H-50,0)+")"
}else{return"rgb("+Math.min(K+50,255)+","+Math.min(J+50,255)+","+Math.min(H+50,255)+")"
}};
var G=A.match(B),x=A.match(z);
if(G){var w=parseInt(G[1],10),C=parseInt(G[2],10),E=parseInt(G[3],10);
var F=(Math.max(w,C,E)+Math.min(w,C,E))/2;
return D(w,C,E,F)
}else{if(x){if(x[1]&&x[1].length>0){var w=parseInt(x[1],16),C=parseInt(x[2],16),E=parseInt(x[3],16)
}else{var w=parseInt(x[4],16),C=parseInt(x[5],16),E=parseInt(x[6],16)
}var F=(Math.max(w,C,E)+Math.min(w,C,E))/2;
return D(w,C,E,F)
}else{return A
}}};
r.css("border-color",c(o("#secondary-navigation-wrapper").css("background-color")));
var f=r[0];
while(f.previousSibling&&f.previousSibling.nodeType===3){f.previousSibling.parentNode.removeChild(f.previousSibling)
}var n=false,l=s.filter(function(w,x){if(w!=0&&o(x).position().left===0){n=true
}return n
});
var q=o('<ul class="children-list" />').hide();
l.appendTo(q);
id6nav.hoverClass(l,"hover");
q.find(".rendered-link-content").removeClass("rendered-link-content");
q.appendTo(b);
b.hoverIntent({timeout:400,over:function(x){try{x.stopPropagation()
}catch(w){}q.fadeIn("fast");
id6nav.repositionChildList(q)
},out:function(){q.fadeOut("fast")
}}).on("touchstart",function(x){try{x.stopPropagation()
}catch(w){}q.fadeIn("fast");
id6nav.repositionChildList(q)
});
o(document.body).on("touchstart",function(){q.fadeOut("fast")
})
}}o("#navigation.horizontal ul#primary-navigation > li > .link-content > a").closest("li").click(function(z){var x=o(z.target);
if(x.closest("span[data-href]").length>0){var w=o(z.target).closest("span[data-href]").data("href");
if(z.shiftKey||z.ctrlKey||z.which==2){window.open(w)
}else{window.location=w
}z.preventDefault();
z.stopPropagation();
return false
}if(x.closest("a").length>0){return true
}if(x.closest("li").is(".current-page")){z.preventDefault();
z.stopPropagation();
return false
}if(o(this).has(".link-content .title a")){var w=o(this).find(".link-content a").attr("href");
if(z.shiftKey||z.ctrlKey||z.which==2){window.open(w)
}else{window.location=w
}z.preventDefault();
z.stopPropagation();
return false
}});
id6nav.layout=id6nav.layouts.HORIZONTAL;
id6nav.navigationOffset=id6nav.$element.offset().top;
id6nav.navigationHeight=id6nav.$element.outerHeight(true);
id6nav.repositionNavigation=function(){var x=o(window).scrollTop();
var w=o("#navigation-wrapper").height()+id6nav.navigationOffset;
var z=o(window).height();
if(!o(document.body).hasClass("is-smallscreen")){if(x>id6nav.navigationOffset){if(id6nav.changeState(id6nav.states.FIXED)){id6nav.$element.removeClass("fixed-bottom").addClass("fixed");
if(o("#header-chrome-spacer").length==0){o("#navigation-wrapper").after('<div id="header-chrome-spacer" style="display:block; height:'+id6nav.navigationHeight+'px"></div>')
}}}else{if(x<=id6nav.navigationOffset){if(id6nav.changeState(id6nav.states.NORMAL)){id6nav.$element.removeClass("fixed");
o("#header-chrome-spacer").remove()
}}}}};
if("onhashchange" in window){o(window).on("hashchange",function(){if(location.hash.length){var x=location.hash.substr(1);
var w=o("#"+x).add("a[name='"+x+"']");
if(w.length){var z=w.first().offset().top-id6nav.navigationHeight;
o(window).scrollTop(z)
}}});
setTimeout(function(){o(window).trigger("hashchange")
},200)
}}}if(!id6nav.isiOS&&!id6nav.isAndroid&&!id6nav.isIE6or7){o(window).on("scroll resize",id6nav.repositionNavigation);
if(!o(document.body).hasClass("is-smallscreen")){id6nav.fixHorizontalNavLinkHeight()
}}var u=function(w,x){if(x){id6nav.changeState(id6nav.states.SMALLSCREEN)
}else{if(!id6nav.isiOS&&!id6nav.isAndroid&&!id6nav.isIE6or7&&id6nav.$element.length>0){id6nav.navigationOffset=id6nav.$element.offset().top;
id6nav.navigationHeight=id6nav.$element.outerHeight(true);
id6nav.repositionNavigation();
if(id6nav.layout==id6nav.layouts.VERTICAL){id6nav.fixHorizontalNavLinkHeight()
}}}o("#header-chrome-spacer").toggle(!x)
};
o(document.body).on("smallscreen",u);
if(o(document.body).hasClass("is-smallscreen")){u(null,true)
}if(id6nav.hasLayout()){if(!o(document.body).hasClass("site-root")){var k;
if(id6nav.layout==id6nav.layouts.VERTICAL){k=function(z){var A=o("#navigation li.current-page");
while(A.length>0){var w=o("<li />");
z.prepend(w);
if(A.hasClass("current-page")){w.addClass("current")
}var x=A.find("> a[data-page-url]").data("page-url");
var B=A.find("div.title").html().trim();
if(x){w.append(o("<a />").attr("href",x).html(B))
}else{w.html(B)
}w.prepend("&raquo; ");
A=A.parents("li.selected-section,li.breadcrumb")
}}
}else{k=function(z){var A=o("#secondary-navigation li.current-page");
while(A.length>0){var w=o("<li />");
z.prepend(w);
if(A.hasClass("current-page")){w.addClass("current")
}var x=A.find("a[data-page-url]").data("page-url");
var B=A.find("div.title").html().trim();
if(x){w.append(o("<a />").attr("href",x).html(B))
}else{w.html(B)
}w.find(".breadcrumb-icon").remove();
w.prepend("&raquo; ");
A=A.prev("li.breadcrumb")
}A=o("#navigation li.selected-section");
if(A.length>0){var w=o("<li />");
z.prepend(w);
if(A.hasClass("current-page")){w.addClass("current")
}var x=A.find("a[data-page-url]").data("page-url");
var B=A.find("div.title").html().trim();
if(x){w.append(o("<a />").attr("href",x).html(B))
}else{w.html(B)
}w.prepend("&raquo; ")
}}
}var g=function(A,C){if(C){if(o(".alternate-breadcrumbs").length==0){var x=o("<ol />");
k(x);
var D=o("#current-site-header").find("a").attr("href");
var B="Home";
var z=o('#search-container .index-section li[data-index-section="website"][data-url-prefix]').data("index-title");
if(z){B=z
}else{var w=o("#current-site-header").find("a,span").text();
if(w){B=w
}}x.prepend(o('<li class="home" />').append(o("<a />").attr("href",D).text(B)));
o("#content-wrapper").prepend(o('<div class="alternate-breadcrumbs top"><hr /></div>').prepend(x.clone()))
}}};
o(document.body).on("smallscreen",g);
if(o(document.body).hasClass("is-smallscreen")){g(null,true)
}}var p=function(C,D){if(D){if(o("#header").parent().attr("id")==="container"){o("#container").before(o("#header"))
}var B=function(){return o("<a />").attr("href","#").addClass("open-submenu").on("click",function(F){o(this).parent().toggleClass("opened");
F.preventDefault();
F.stopPropagation();
return false
})
};
var x;
x=function(K,H,G,J){var I=J[H];
if(!I){console.error("Couldn't find "+H+" in the hierarchy");
return
}else{if(!I.children){return
}}var F;
if(K.children(".submenu").length){F=K.children(".submenu")
}else{F=o("<ul />").addClass("submenu");
K.prepend(B()).append(F)
}o.each(I.children,function(L,N){var M=o("<li />");
M.append(o("<a />").attr("href",N.url).html(N.title));
x(M,N.url,G,J);
F.append(M)
})
};
var A=function(G,F){if(window.id6nav.hierarchy&&window.id6nav.hierarchyLookup){x(G,F,window.id6nav.hierarchy,window.id6nav.hierarchyLookup)
}else{o("#navigation").on("hierarchy:loaded",function(J,H,I){x(G,F,H,I)
})
}};
if(o("#alternate-navigation").length==0){var z=o("<ul />");
var E=o("<li />").addClass("site-root").append(o("#current-site-header a,#current-site-header > span").clone().removeAttr("accesskey").removeAttr("title"));
if(o(document.body).hasClass("site-root")){E.addClass("selected")
}z.append(E);
if(id6nav.layout==id6nav.layouts.VERTICAL){var w;
w=function(I,F){var J=o(F);
var K=o("<li />");
var H;
if(J.find("> a[data-page-url]").length){H=J.find("> a[data-page-url]").data("page-url")
}if(J.find("> a[data-page-url]").length){K.append(o("<a />").attr("href",H).html(J.find(".rendered-link-content").first().html()))
}else{K.append(o("<span />").html(J.find(".rendered-link-content").first().html()))
}if(J.hasClass("current-page")){K.addClass("selected")
}if(J.hasClass("has-children")){var G=o("<ul />").addClass("submenu");
K.addClass("opened").prepend(B()).append(G);
J.find("ul").first().find("> li").each(function(M,L){w(G,L)
})
}else{if(H){A(K,H)
}}I.append(K)
};
o("#navigation.vertical li.l1").each(function(G,F){w(z,F)
})
}else{o("#primary-navigation > li").each(function(I,F){var J=o(F);
var K=o("<li />");
var H;
if(J.find("[data-page-url]").length){H=J.find("[data-page-url]").data("page-url")
}if(J.find("[data-page-url]").length){K.append(o("<a />").attr("href",J.find("[data-page-url]").data("page-url")).html(J.find(".rendered-link-content").first().html()))
}else{K.append(o("<span />").html(J.find(".rendered-link-content").first().html()))
}if(J.hasClass("current-page")){K.addClass("selected")
}if(J.hasClass("selected-section")&&o("#secondary-navigation").length){var G;
o("#secondary-navigation > li.breadcrumb").each(function(P,L){G=o("<ul />").addClass("submenu");
K.addClass("opened").prepend(B()).append(G);
var M=o("<li />");
J=o(L);
var N=J.find(".title.rendered-link-content");
if(N.find("> span:not(.breadcrumb-icon)").length>0){N=N.find("> span:not(.breadcrumb-icon)")
}else{N=N.clone();
N.find(".breadcrumb-icon").remove()
}if(J.hasClass("current-page")){M.addClass("selected")
}var Q=N.html().trim();
var O=J.find("[data-page-url]").data("page-url");
if(O){M.append(o("<a />").attr("href",O).html(Q));
A(M,O)
}else{M.append(o("<span />").html(Q))
}G.append(M)
});
G=o("<ul />").addClass("submenu");
if(K.find(".submenu").length){K.find(".submenu").last().find("li").first().addClass("opened").prepend(B()).append(G)
}else{K.addClass("opened").prepend(B()).append(G)
}o("#secondary-navigation > li:not(.breadcrumb):not(.show-more-link), #secondary-navigation .show-more-link .children-list > li").each(function(O,L){J=o(L);
var M=o("<li />");
if(J.hasClass("current-page")){M.addClass("selected")
}var P=J.find(".title").html().trim();
var N=J.find("[data-page-url]").data("page-url");
if(N){M.append(o("<a />").attr("href",N).html(P));
A(M,N)
}else{M.append(o("<span />").html(P))
}G.append(M)
})
}else{if(H){A(K,H)
}}z.append(K)
})
}o("#container").before(o("<div />").attr("id","alternate-navigation").addClass("slide-in-menu").addClass("from-left").append(z));
o("#masthead").prepend(o("<a />").attr("href","#alternate-navigation").addClass("icon-container").addClass("pull-left").append(o("<i />").addClass("sprite-menu")).on("click",function(F){if(o("#alternate-navigation").hasClass("opened")){o("#alternate-navigation").removeClass("opened");
o("html").removeClass("slide-left");
setTimeout(function(){o("#alternate-navigation").hide();
o("#container, #header").css("width","")
},500)
}else{o("#container, #header").css("width",o(window).width());
o("#alternate-navigation").show().addClass("opened");
o("html").addClass("slide-left")
}F.preventDefault();
F.stopPropagation()
}));
o("#container").on("touchstart mousedown",function(F){if(o("#alternate-navigation").hasClass("opened")){o("#alternate-navigation").removeClass("opened");
o("html").removeClass("slide-left");
setTimeout(function(){o("#alternate-navigation").hide();
o("#container, #header").css("width","")
},500);
F.preventDefault();
F.stopPropagation()
}})
}}else{o("#alternate-navigation").hide().removeClass("opened");
o("#container, #header").css("width","");
o("html").removeClass("slide-left");
if(o("#header").parent().attr("id")!=="container"){o("#container").prepend(o("#header"))
}}};
o(document.body).on("smallscreen",p);
if(o(document.body).hasClass("is-smallscreen")){p(null,true)
}}});
(function(a){var b=function(c,f){c.hover(function(){a(this).addClass(f)
},function(){a(this).removeClass(f)
})
};
window.SitebuilderInfo.setupSearch=function(){a("#search-container").mouseover(function(){a("#search-container #search-button").addClass("hover")
}).mouseout(function(){if(!SitebuilderInfo.searchHasFocus){a("#search-container #search-button").removeClass("hover")
}});
a("#search-box").focus(function(x){SitebuilderInfo.searchHasFocus=true
}).blur(function(x){SitebuilderInfo.searchHasFocus=false;
a("#search-container").mouseout()
});
var c=a("#search-container ul:nth(0)");
var o=a("#search-index-menu");
c.find("li").not(".more-link").appendTo(o).click(function(){s(a(this));
g();
a("#search-box").focus()
});
b(o.find("li"),"hover");
if(!a.browser.msie||parseInt(a.browser.version)>=8){var r,l=false;
var g=function(){o.fadeOut("fast")
};
c.hover(function(x){if(r){clearTimeout(r)
}o.fadeIn("fast")
},function(x){if(r){clearTimeout(r)
}r=setTimeout(g,200)
}).bind("touchstart",function(x){l=true;
if(o.is(":visible")){return true
}else{x.preventDefault();
o.fadeIn("fast");
return false
}}).find(".more-link").bind("touchstart",function(x){l=true;
if(o.is(":visible")){return true
}else{x.preventDefault();
o.fadeIn("fast");
return false
}});
a(document.body).bind("touchstart",function(x){if(a(x.target).closest("#search-container ul").length==0){o.fadeOut("fast")
}})
}function h(){var x=a("#main-content .bootstrapped").first();
if(x.length==0){x=a("#main-content").addClass("bootstrapped")
}var z=a("<div>",{"class":"modal search-results"}).data("backdrop",false).append(a("<div>",{"class":"modal-header"}).append(a("<button>",{type:"button","class":"close","data-dismiss":"modal"}).html("&#215;")).append(a("<h3>",{"class":"title"}))).append(a("<div>",{"class":"modal-body"})).modal().modal("hide");
z.appendTo(x);
return z
}var w;
var k=1;
function q(B){a("#search-suggestions").hide();
if(!w){w=h()
}var A=w.find(".modal-body");
var C=B.title;
w.find(".title").html(C);
A.html("");
A.append(u(B));
var z=B.startIndex>1;
var x=(B.results.length>0)&&((B.startIndex+B.results.length)<=B.totalHits);
A.find(".previous").toggle(z);
A.find(".next").toggle(x);
A.find(".navseparator").toggle(z&&x);
w.modal("show")
}function n(x,z){return x.replace(/{{(.+?)}}/g,function(B,A){return z[A]
})
}function u(B){var A='<div class="searchResults"><div class="resultsCount">{{resultsCount}}</div><ol class="searchResultsList" start="{{startIndex}}">{{resultsHtml}}</ol><div class="searchNavigation"><a href="#" class="previous">Previous {{pageSize}}</a><span class="navseparator"> | </span><a href="#" class="next">Next {{pageSize}}</a></div></div>';
var x=a.map(B.results,f).join("");
var z=B.totalHits+" results.";
if(B.totalHits==0){z="No results."
}else{if(B.totalHits==1){z="One result."
}}return n(A,{startIndex:B.startIndex,pageSize:B.itemsPerPage,resultsCount:z,totalHits:B.totalHits,resultsHtml:x})
}function f(x){x.lastModifiedString=moment(x.lastModified).format("D MMMM, YYYY");
var z='<li class="searchResult"><div><p class="docLink"><a href="{{link}}">{{title}}</a><span class="date">{{lastModifiedString}}</span></p>';
"</div></li>";
return n(z,x)
}function p(A){var x=function(B){var C=A.serialize()+"&pagenumber="+B;
return jQuery.post(A.data("json-action"),C,{dataType:"json"}).then(function(F,D,E){k=B;
q(F)
},function(F,D,E){})
};
var z=x(1);
z.then(function(){w.off(".searchbox");
w.on("click.searchbox","a.next",function(B){B.preventDefault();
x(k+1);
return false
});
w.on("click.searchbox","a.previous",function(B){B.preventDefault();
if(k>0){x(k-1)
}return false
})
})
}function s(F){var x,B,D;
B=a("#search-box");
c.find("> li").not(".more-link").remove();
var A='<a title="View more search options" href="//search.warwick.ac.uk/website" rel="nofollow">'+F.data("index-title")+"</a>";
var E=F.data("displaymode")=="pane";
F.clone().empty().prependTo(c).addClass("active").append(A);
x=B.parent("form");
x.off(".searchbox");
if(E){var C="/ajax/lvsch/query.json?indexSection="+F.data("index-section");
var z="/ajax/lvsch/micro.html?indexSection="+F.data("index-section");
x.attr("action",z);
x.data("json-action",C);
x.on("submit.searchbox",function(G){G.preventDefault();
p(x);
return false
})
}else{x.attr("action","//search.warwick.ac.uk/"+F.data("index-section"))
}x.find("input[name=source]").remove();
x.find("input[name=fileFormat]").remove();
if(F.data("source")){x.prepend(a('<input type="hidden" name="source">').val(F.data("source")))
}if(F.data("index-file-format")){a.each(F.data("index-file-format").split(";"),function(G,H){x.prepend(a('<input type="hidden" name="fileFormat">').val(H))
})
}x.find("input[name=urlPrefix]").remove();
if(F.data("url-prefix")){x.prepend(a('<input type="hidden" name="urlPrefix">').val(F.data("url-prefix")))
}x.find("input[name=dateRange]").remove();
if(F.data("date-range")){x.prepend(a('<input type="hidden" name="dateRange">').val(F.data("date-range")))
}D=F.text();
if(D.length>28){D=D.substring(0,28)+"\u2026"
}B.attr("placeholder",D)
}s(o.find("li.active"));
o.find("li.active").removeClass("active")
}
})(jQuery);
jQuery(function(f){window.SitebuilderInfo.setupSearch();
var c=f(document.body),g=f("#utility-container"),a=f("#search-container");
if(a.length>0){var b=function(l,o){if(o){if(f("#alternate-utility, #alternate-navigation").length){var n=f("#alternate-utility, #alternate-navigation").first();
if(!n.find("#alternate-search").length){var k=a.find("> form").clone(false,false).empty().append(a.find('input[type="hidden"]').clone()).append(f("#search-box").clone(false,false).attr({id:"mobile-search-box",type:"search"})).on("submit",function(p){f("#container").trigger("touchstart");
f("#search-box").val(f("#mobile-search-box").val());
a.find("> form").trigger("submit");
return false
});
var h=f("<div />").attr("id","alternate-search").addClass("search").append(k);
n.prepend(h)
}}else{if(f("#alternate-search").length==0){if(c.is(".site-root")){f("#content-wrapper").prepend(f('<div id="alternate-search"><hr /></div>'))
}else{f("#content-wrapper").append(f('<div id="alternate-search"><hr /></div>'))
}}if(c.is(".site-root")){f("#alternate-search").prepend(a)
}else{f("#alternate-search").append(a)
}}}else{g.append(a)
}};
c.on("smallscreen",b);
b(null,c.hasClass("is-smallscreen"))
}});
jQuery(function(a){new NavigableList({inputElement:a("#search-box"),queryURL:"//sitebuilder.warwick.ac.uk/sitebuilder2/api/go/redirects.json?maxResults=6&prefix=",containerElement:a("#search-suggestions"),jsonCallback:function(f){this.options.containerElement.empty();
var b=a("<ul />");
var c=true;
a.each(f,function(h,k){var g=a("<li />");
if(c){g.addClass("odd")
}else{g.addClass("even")
}c=!c;
g.append(a('<span class="redirectpath" />').html(k.path));
g.append(a('<span class="redirectdescription" />').append(a('<span class="informal" />').html(k.description)));
b.append(g)
});
this.options.containerElement.append(b)
},selectFunction:function(b){window.location="http://go.warwick.ac.uk/"+a(b).find(".redirectpath").html()+"?goSearchReferer="+encodeURIComponent(window.location)+"&goSearchQuery="+a("#search-box").val();
a("#search-container").submit(function(c){c.preventDefault();
return false
});
return false
},enabledFunction:function(){var b=a("#search-box").closest("form").find("li.active");
return !b.data("go-disabled")
},urlRewriterFunction:function(b){var c=a("#search-box").closest("form").find("li.active");
if(c.data("go-type")){b+="&type="+c.data("go-type")
}if(c.data("go-prefix")){b+="&urlPrefix="+c.data("go-prefix")
}return b+"&callback=?"
}})
});