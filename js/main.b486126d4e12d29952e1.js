!function(t){function e(e){for(var r,o,s=e[0],l=e[1],d=e[2],h=0,u=[];h<s.length;h++)o=s[h],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(c&&c(e);u.length;)u.shift()();return a.push.apply(a,d||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],r=!0,s=1;s<i.length;s++){var l=i[s];0!==n[l]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=i[0]))}return t}var r={},n={0:0},a=[];function o(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=r,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(i,r,function(e){return t[e]}.bind(null,r));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var c=l;a.push([15,1]),i()}([,,,,,,,function(t,e,i){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function t(e,i,r){function n(o,s){if(!i[o]){if(!e[o]){if(a)return a(o,!0);var l=new Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}var d=i[o]={exports:{}};e[o][0].call(d.exports,(function(t){return n(e[o][1][t]||t)}),d,d.exports,t,e,i,r)}return i[o].exports}for(var a=!1,o=0;o<r.length;o++)n(r[o]);return n}({1:[function(t,e,i){e.exports=function(){"use strict";var e=t("reflect.ownkeys"),i=Function.bind.call(Function.call,Array.prototype.reduce),r=Function.bind.call(Function.call,Object.prototype.propertyIsEnumerable),n=Function.bind.call(Function.call,Array.prototype.concat);return Object.values||(Object.values=function(t){return i(e(t),(function(e,i){return n(e,"string"==typeof i&&r(t,i)?[t[i]]:[])}),[])}),Object.entries||(Object.entries=function(t){return i(e(t),(function(e,i){return n(e,"string"==typeof i&&r(t,i)?[[i,t[i]]]:[])}),[])}),Object}()},{"reflect.ownkeys":2}],2:[function(t,e,i){"object"===("undefined"==typeof Reflect?"undefined":r(Reflect))&&"function"==typeof Reflect.ownKeys?e.exports=Reflect.ownKeys:"function"==typeof Object.getOwnPropertySymbols?e.exports=function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:e.exports=Object.getOwnPropertyNames},{}]},{},[1]),Number.isNaN=Number.isNaN||function(t){return"number"==typeof t&&t!=t}},function(t,e,i){!function t(e,i,r){function n(o,s){if(!i[o]){if(!e[o]){if(a)return a(o,!0);var l=new Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}var d=i[o]={exports:{}};e[o][0].call(d.exports,(function(t){var i=e[o][1][t];return n(i||t)}),d,d.exports,t,e,i,r)}return i[o].exports}for(var a=!1,o=0;o<r.length;o++)n(r[o]);return n}({1:[function(t,e,i){var r,n,a=[].slice,o={}.toString;function s(t,e){var i={}.hasOwnProperty;for(var r in e)i.call(e,r)&&(t[r]=e[r]);return t}r=t("./presets").presets,n=function(t){return"data:image/svg+xml;base64,"+btoa(t)},function(){var t,e,i;t={head:function(t){return'<?xml version="1.0" encoding="utf-8"?>\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="'+t+'">'},gradient:function(t,e){var i,r,o,s,l,d,c,h,u,f;for(null==t&&(t=45),null==e&&(e=1),i=a.call(arguments,2),r=[this.head("0 0 100 100")],o=4*i.length+1,t=t*Math.PI/180,s=Math.pow(Math.cos(t),2),l=Math.sqrt(s-Math.pow(s,2)),t>.25*Math.PI&&(l=Math.pow(Math.sin(t),2),s=Math.sqrt(l-Math.pow(l,2))),d=100*s,c=100*l,r.push('<defs><linearGradient id="gradient" x1="0" x2="'+s+'" y1="0" y2="'+l+'">'),h=0;h<o;++h)f=100*(u=h)/(o-1),r.push('<stop offset="'+f+'%" stop-color="'+i[u%i.length]+'"/>');return r.push('</linearGradient></defs>\n<rect x="0" y="0" width="400" height="400" fill="url(#gradient)">\n<animateTransform attributeName="transform" type="translate" from="-'+d+",-"+c+'"\nto="0,0" dur="'+e+'s" repeatCount="indefinite"/></rect></svg>'),n(r.join(""))},stripe:function(t,e,i){var r,a;return null==t&&(t="#b4b4b4"),null==e&&(e="#e6e6e6"),null==i&&(i=1),r=(r=[this.head("0 0 100 100")]).concat(['<rect fill="'+e+'" width="100" height="100"/>',"<g><g>",function(){var e,i=[];for(e=0;e<13;++e)a=e,i.push('<polygon fill="'+t+'" points="'+(20*a-90)+",100 "+(20*a-100)+",100 "+(20*a-60)+",0 "+(20*a-50)+',0 "/>');return i}().join(""),'</g><animateTransform attributeName="transform" type="translate" ','from="0,0" to="20,0" dur="'+i+'s" repeatCount="indefinite"/></g></svg>'].join("")),n(r)},bubble:function(t,e,i,r,a,o){var s,l,d,c,h,u;for(null==t&&(t="#39d"),null==e&&(e="#9cf"),null==i&&(i=15),null==r&&(r=1),null==a&&(a=6),null==o&&(o=1),s=[this.head("0 0 200 200"),'<rect x="0" y="0" width="200" height="200" fill="'+t+'"/>'],l=0;l<i;++l)d=-l/i*r,c=184*Math.random()+8,h=(.7*Math.random()+.3)*a,u=r*(1+.5*Math.random()),s.push(['<circle cx="'+c+'" cy="0" r="'+h+'" fill="none" stroke="'+e+'" stroke-width="'+o+'">','<animate attributeName="cy" values="190;-10" times="0;1" ','dur="'+u+'s" begin="'+d+'s" repeatCount="indefinite"/>',"</circle>",'<circle cx="'+c+'" cy="0" r="'+h+'" fill="none" stroke="'+e+'" stroke-width="'+o+'">','<animate attributeName="cy" values="390;190" times="0;1" ','dur="'+u+'s" begin="'+d+'s" repeatCount="indefinite"/>',"</circle>"].join(""));return n(s.join("")+"</svg>")}},e={queue:{},running:!1,main:function(t){var e,i,r,n,a,o,s=this;for(r in e=!1,i=[],n=this.queue)(o=(a=n[r])(t))||i.push(a),e=e||o;for(r in n=this.queue)a=n[r],i.indexOf(a)>=0&&delete this.queue[r];return e?requestAnimationFrame((function(t){return s.main(t)})):this.running=!1},add:function(t,e){var i=this;if(this.queue[t]||(this.queue[t]=e),!this.running)return this.running=!0,requestAnimationFrame((function(t){return i.main(t)}))}},window.ldBar=i=function(i,n){var a,l,d,c,h,u,f,p,g,v,m,w,b,y,x,k,C,_,M,P,S,B,q,A,O=this;if(null==n&&(n={}),a={xlink:"http://www.w3.org/1999/xlink"},(l="String"===o.call(i).slice(8,-1)?document.querySelector(i):i).ldBar)return l.ldBar;for(v in l.ldBar=this,~(d=l.getAttribute("class")||"").indexOf("ldBar")||l.setAttribute("class",d+" ldBar"),c="ldBar-"+Math.random().toString(16).substring(2),h={key:c,clip:c+"-clip",filter:c+"-filter",pattern:c+"-pattern",mask:c+"-mask",maskPath:c+"-mask-path"},u=function(t,e){var i,r;for(i in t=f(t),e)r=e[i],"attr"!==i&&t.appendChild(u(i,r||{}));return t.attrs(e.attr||{}),t},f=function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)},(p=document.body.__proto__.__proto__.__proto__).text=function(t){return this.appendChild(document.createTextNode(t))},p.attrs=function(t){var e,i,r,n=[];for(e in t)i=t[e],(r=/([^:]+):([^:]+)/.exec(e))&&a[r[1]]?n.push(this.setAttributeNS(a[r[1]],e,i)):n.push(this.setAttribute(e,i));return n},p.styles=function(t){var e,i,r=[];for(e in t)i=t[e],r.push(this.style[e]=i);return r},p.append=function(t){return this.appendChild(document.createElementNS("http://www.w3.og/2000/svg",t))},p.attr=function(t,e){return null!=e?this.setAttribute(t,e):this.getAttribute(t)},(g={type:"stroke",img:"",path:"M10 10L90 10M90 8M90 12","fill-dir":"btt",fill:"#25b","fill-background":"#ddd","fill-background-extrude":3,"pattern-size":null,"stroke-dir":"normal",stroke:"#25b","stroke-width":"3","stroke-trail":"#ddd","stroke-trail-width":.5,duration:1,easing:"linear",value:0,"img-size":null,bbox:null,"set-dim":!0,"aspect-ratio":"xMidYMid","transition-in":!1,min:0,max:100,precision:0,padding:void 0}).preset=l.attr("data-preset")||n.preset,null!=g.preset&&s(g,r[g.preset]),g)(m=m=l.attr("data-"+v))&&(g[v]=m);return s(g,n),g.img&&(g.path=null),w="stroke"===g.type,b=function(e){var i;return(i=/data:ldbar\/res,([^()]+)\(([^)]+)\)/.exec(e))?t[i[1]].apply(t,i[2].split(",")):e},g.fill=b(g.fill),g.stroke=b(g.stroke),"false"===g["set-dim"]&&(g["set-dim"]=!1),y={attr:{"xmlns:xlink":"http://www.w3.org/1999/xlink",preserveAspectRatio:g["aspect-ratio"],width:"100%",height:"100%"},defs:{filter:{attr:{id:h.filter,x:-1,y:-1,width:3,height:3},feMorphology:{attr:{operator:+g["fill-background-extrude"]>=0?"dilate":"erode",radius:Math.abs(+g["fill-background-extrude"])}},feColorMatrix:{attr:{values:"0 0 0 0 1    0 0 0 0 1    0 0 0 0 1    0 0 0 1 0",result:"cm"}}},mask:{attr:{id:h.mask},image:{attr:{"xlink:href":g.img,filter:"url(#"+h.filter+")",x:0,y:0,width:100,height:100,preserveAspectRatio:g["aspect-ratio"]}}},g:{mask:{attr:{id:h.maskPath},path:{attr:{d:g.path||"",fill:"#fff",stroke:"#fff",filter:"url(#"+h.filter+")"}}}},clipPath:{attr:{id:h.clip},rect:{attr:{class:"mask",fill:"#000"}}},pattern:{attr:{id:h.pattern,patternUnits:"userSpaceOnUse",x:0,y:0,width:300,height:300},image:{attr:{x:0,y:0,width:300,height:300}}}}},x=u("svg",y),(k=document.createElement("div")).setAttribute("class","ldBar-label"),l.appendChild(x),l.appendChild(k),C=[0,0],_=0,this.fit=function(){var t,e,i,r;if((e=(t=g.bbox)?{x:(e=t.split(" ").map((function(t){return+t.trim()})))[0],y:e[1],width:e[2],height:e[3]}:C[1].getBBox())&&0!==e.width&&0!==e.height||(e={x:0,y:0,width:100,height:100}),i=1.5*Math.max.apply(null,["stroke-width","stroke-trail-width","fill-background-extrude"].map((function(t){return g[t]}))),null!=g.padding&&(i=+g.padding),x.attrs({viewBox:[e.x-i,e.y-i,e.width+2*i,e.height+2*i].join(" ")}),g["set-dim"]&&["width","height"].map((function(t){if(!l.style[t]||O.fit[t])return l.style[t]=e[t]+2*i+"px",O.fit[t]=!0})),r=C[0].querySelector("rect"))return r.attrs({x:e.x-i,y:e.y-i,width:e.width+2*i,height:e.height+2*i})},g.path?(C[0]=u("g",w?{path:{attr:{d:g.path,fill:"none",class:"baseline"}}}:{rect:{attr:{x:0,y:0,width:100,height:100,mask:"url(#"+h.maskPath+")",fill:g["fill-background"],class:"frame"}}}),x.appendChild(C[0]),C[1]=u("g",{path:{attr:{d:g.path,class:w?"mainline":"solid","clip-path":"fill"===g.type?"url(#"+h.clip+")":""}}}),x.appendChild(C[1]),M=C[0].querySelector(w?"path":"rect"),P=C[1].querySelector("path"),w&&P.attrs({fill:"none"}),S=x.querySelector("pattern image"),(B=new Image).addEventListener("load",(function(){var t,e;return t=(e=g["pattern-size"])?{width:+e,height:+e}:B.width&&B.height?{width:B.width,height:B.height}:{width:300,height:300},x.querySelector("pattern").attrs({width:t.width,height:t.height}),S.attrs({width:t.width,height:t.height})})),/.+\..+|^data:/.exec(w?g.stroke:g.fill)&&(B.src=w?g.stroke:g.fill,S.attrs({"xlink:href":B.src})),w&&(M.attrs({stroke:g["stroke-trail"],"stroke-width":g["stroke-trail-width"]}),P.attrs({"stroke-width":g["stroke-width"],stroke:/.+\..+|^data:/.exec(g.stroke)?"url(#"+h.pattern+")":g.stroke})),g.fill&&!w&&P.attrs({fill:/.+\..+|^data:/.exec(g.fill)?"url(#"+h.pattern+")":g.fill}),_=P.getTotalLength(),this.fit(),this.inited=!0):g.img&&(A=g["img-size"]?{width:+(q=g["img-size"].split(","))[0],height:+q[1]}:{width:100,height:100},C[0]=u("g",{rect:{attr:{x:0,y:0,width:100,height:100,mask:"url(#"+h.mask+")",fill:g["fill-background"]}}}),x.querySelector("mask image").attrs({width:A.width,height:A.height}),C[1]=u("g",{image:{attr:{width:A.width,height:A.height,x:0,y:0,preserveAspectRatio:g["aspect-ratio"],"clip-path":"fill"===g.type?"url(#"+h.clip+")":"","xlink:href":g.img,class:"solid"}}}),(B=new Image).addEventListener("load",(function(){var t,e,i;return e=g["img-size"]?{width:+(t=g["img-size"].split(","))[0],height:+t[1]}:B.width&&B.height?{width:B.width,height:B.height}:{width:100,height:100},x.querySelector("mask image").attrs({width:e.width,height:e.height}),C[1].querySelector("image").attrs({width:e.width,height:e.height}),O.fit(),i=O.value,O.value=void 0,O.set(i,!0),O.inited=!0})),B.src=g.img,x.appendChild(C[0]),x.appendChild(C[1])),x.attrs({width:"100%",height:"100%"}),this.transition={value:{src:0,des:0},time:{},ease:function(t,e,i,r){return(t/=.5*r)<1?.5*i*t*t+e:.5*-i*((t-=1)*(t-2)-1)+e},handler:function(t,e){var i,r,n,a,o,s,l,d,c,h,u,f,p;return null==e&&(e=!0),null==this.time.src&&(this.time.src=t),r=(i=[g.min,g.max,1/g.precision])[0],n=i[1],a=i[2],o=(i=[this.value.des-this.value.src,.001*(t-this.time.src),+g.duration||1])[0],s=i[1],l=i[2],d=e?this.ease(s,this.value.src,o,l):this.value.des,g.precision?d=Math.round(d*a)/a:e&&(d=Math.round(d)),d>=r||(d=r),d<=n||(d=n),k.textContent=d,c=100*(d-r)/(n-r),w?(h=P,u={"stroke-dasharray":"reverse"===g["stroke-dir"]?"0 "+_*(100-c)*.01+" "+_*c*.01+" 0":.01*c*_+" "+(.01*(100-c)*_+1)}):(f=C[1].getBBox(),u="btt"!==(p=g["fill-dir"])&&p?"ttb"===p?{y:f.y,height:f.height*c*.01,x:f.x,width:f.width}:"ltr"===p?{y:f.y,height:f.height,x:f.x,width:f.width*c*.01}:"rtl"===p?{y:f.y,height:f.height,x:f.x+f.width*(100-c)*.01,width:f.width*c*.01}:void 0:{y:f.y+f.height*(100-c)*.01,height:f.height*c*.01,x:f.x,width:f.width},h=x.querySelector("rect")),h.attrs(u),!(s>=l)||(delete this.time.src,!1)},start:function(t,i,r){var n,a=this;return(n=this.value).src=t,n.des=i,l.offsetWidth||l.offsetHeight||l.getClientRects().length,r&&(l.offsetWidth||l.offsetHeight||l.getClientRects().length)?e.add(h.key,(function(t){return a.handler(t)})):(this.time.src=0,void this.handler(1e3,!1))}},this.set=function(t,e){var i,r;return null==e&&(e=!0),i=this.value||0,null!=t?this.value=t:t=this.value,r=this.value,this.transition.start(i,r,e)},this.set(+g.value||0,g["transition-in"]),this},window.addEventListener("load",(function(){var t,e,r,n,a=[];for(t=0,r=(e=document.querySelectorAll(".ldBar")).length;t<r;++t)(n=e[t]).ldBar||a.push(n.ldBar=new i(n));return a}),!1)}(),e.exports=ldBar},{"./presets":2}],2:[function(t,e,i){(void 0!==i&&i||this).presets={rainbow:{type:"stroke",path:"M10 10L90 10",stroke:"data:ldbar/res,gradient(0,1,#a551df,#fd51ad,#ff7f82,#ffb874,#ffeb90)",bbox:"10 10 80 10"},energy:{type:"fill",path:"M15 5L85 5A5 5 0 0 1 85 15L15 15A5 5 0 0 1 15 5",stroke:"#f00",fill:"data:ldbar/res,gradient(45,2,#4e9,#8fb,#4e9)","fill-dir":"ltr","fill-background":"#444","fill-background-extrude":1,bbox:"10 5 80 10"},stripe:{type:"fill",path:"M15 5L85 5A5 5 0 0 1 85 15L15 15A5 5 0 0 1 15 5",stroke:"#f00",fill:"data:ldbar/res,stripe(#25b,#58e,1)","fill-dir":"ltr","fill-background":"#ddd","fill-background-extrude":1,bbox:"10 5 80 10"},text:{type:"fill",img:'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="70" height="20" viewBox="0 0 70 20"><text x="35" y="10" text-anchor="middle" dominant-baseline="central" font-family="arial">LOADING</text></svg>',"fill-background-extrude":1.3,"pattern-size":100,"fill-dir":"ltr","img-size":"70,20",bbox:"0 0 70 20"},line:{type:"stroke",path:"M10 10L90 10",stroke:"#25b","stroke-width":3,"stroke-trail":"#ddd","stroke-trail-width":1,bbox:"10 10 80 10"},fan:{type:"stroke",path:"M10 90A40 40 0 0 1 90 90","fill-dir":"btt",fill:"#25b","fill-background":"#ddd","fill-background-extrude":3,"stroke-dir":"normal",stroke:"#25b","stroke-width":"3","stroke-trail":"#ddd","stroke-trail-width":.5,bbox:"10 50 80 40"},circle:{type:"stroke",path:"M50 10A40 40 0 0 1 50 90A40 40 0 0 1 50 10","fill-dir":"btt",fill:"#25b","fill-background":"#ddd","fill-background-extrude":3,"stroke-dir":"normal",stroke:"#25b","stroke-width":"3","stroke-trail":"#ddd","stroke-trail-width":.5,bbox:"10 10 80 80"},bubble:{type:"fill",path:"M50 10A40 40 0 0 1 50 90A40 40 0 0 1 50 10","fill-dir":"btt",fill:"data:ldbar/res,bubble(#39d,#cef)","pattern-size":"150","fill-background":"#ddd","fill-background-extrude":2,"stroke-dir":"normal",stroke:"#25b","stroke-width":"3","stroke-trail":"#ddd","stroke-trail-width":.5,bbox:"10 10 80 80"}}},{}]},{},[1])},,,,,function(t,e,i){var r=i(4),n=i(14);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var a={insert:"head",singleton:!1};r(n,a);t.exports=n.locals||{}},function(t,e,i){},function(t,e,i){"use strict";i.r(e);i(7);var r=i(0),n=i.n(r),a=i(18),o=i(16),s=i(17);a.a.use([o.a,s.a]),new a.a(".slider-banner",{navigation:{nextEl:"#btnSliderNext",prevEl:"#btnSliderPrev"},speed:500,parallax:!0,on:{activeIndexChange:function(t){var e,i,r;e=t.activeIndex,i=n()("#sliderNums").height(),r=n()("#sliderNums").find(".slide-nums__scrolled"),n()("#sliderNums .slide-nums__number").removeClass("active"),n()("#sliderNums .slide-nums__number:eq("+e+")").addClass("active"),n()(r).css("top","-"+i*e+"px"),function(t){0!==t?n()("#sliderAnimation").removeClass("visible"):n()("#sliderAnimation").addClass("visible")}(t.activeIndex)}}}),new a.a(".offer__list",{slidesPerView:"auto",speed:500,navigation:{nextEl:"#btnOfferSliderNext",prevEl:"#btnOfferSliderPrev"},spaceBetween:16,breakpoints:{768:{spaceBetween:48},1440:{spaceBetween:68},1920:{spaceBetween:96}}}),new a.a("#projectsList",{slidesPerView:"auto",speed:500,navigation:{nextEl:"#btnProjectsNext",prevEl:"#btnProjectsPrev"},breakpoints:{1024:{spaceBetween:16},1140:{spaceBetween:34},1920:{spaceBetween:0}},on:{reachEnd:function(){for(var t=n()("#projectsList .swiper-slide-active").nextAll(".projects__item"),e=0;e<=t.length;e++)n()(t[e]).addClass("visible")},fromEdge:function(){n()(".projects__item").removeClass("visible")}}}),new a.a("#clientsList",{slidesPerView:"auto",speed:500,spaceBetween:16,navigation:{nextEl:"#btnClientsSliderNext",prevEl:"#btnClientsSliderPrev"},breakpoints:{768:{spaceBetween:24},1024:{spaceBetween:48},1140:{spaceBetween:68},1920:{spaceBetween:96}}}),new a.a("#feedbackList",{slidesPerView:"auto",speed:500,spaceBetween:16,navigation:{nextEl:"#btnFeedbackNext",prevEl:"#btnFeedbackPrev"},breakpoints:{768:{spaceBetween:48},1140:{spaceBetween:68},1920:{spaceBetween:134}},on:{reachEnd:function(){for(var t=n()("#feedbackList .swiper-slide-active").nextAll(".feedback__item"),e=0;e<=t.length;e++)n()(t[e]).addClass("visible")},fromEdge:function(){n()(".feedback__item").removeClass("visible")}}});var l,d,c=window.matchMedia("(min-width: 1920px)");function h(){!0===c.matches?(void 0!==l&&l.destroy(!0,!0),void 0!==d&&d.destroy(!0,!0)):!1===c.matches&&(l=new a.a("#partnersChooseSlider",{slidesPerView:"auto",speed:500,spaceBetween:24,breakpoints:{768:{autoHeight:!1},1024:{autoHeight:!1,spaceBetween:48},1140:{autoHeight:!1,spaceBetween:68}}}),d=new a.a("#workOrder",{autoHeight:!0,slidesPerView:"auto",speed:500,spaceBetween:24,breakpoints:{768:{autoHeight:!1},1024:{autoHeight:!1,spaceBetween:48},1140:{autoHeight:!1,spaceBetween:68}}}))}c.addListener(h),h(),n()(document).ready((function(){if(n()(".page-index")[0]){var t=cMob.width=320,e=cMob.height=500,i=cMob.getContext("2d"),r={side:7,distance:10,depthZ:100,depthY:70,particleRadius:1,fillColor:"rgba(171,120,255,alp)",strokeColor:"#A3A3A3",rotYVel:.009,focalLength:270,vanishPoint:{x:t/2,y:e/2-e/1.65}},a=0,o=0;!function n(){window.requestAnimationFrame(n),++o,a+=r.rotYVel;var s=Math.cos(a),l=Math.sin(a);i.fillStyle="#0B0D19",i.fillRect(0,0,t,e);for(var d=0;d<r.side;++d)for(var c=0;c<r.side;++c)for(var h=0;h<r.side;++h){var u=(d-r.side/2)*r.distance,f=(c-r.side/2)*r.distance,p=(h-r.side/2)*r.distance,g=Math.sin((o+u+p+f)/30)*r.side<d&&Math.sin((o+u+p+f)/30)*r.side>d-5,v=u;u=u*s-p*l,p=p*s+v*l,p+=r.depthZ,f+=r.depthY;var m=r.focalLength/p,w=r.vanishPoint.x+u*m,b=r.vanishPoint.y+f*m;if(i.beginPath(),g){i.arc(w,b,m*r.particleRadius*2,0,2*Math.PI);var y=i.createRadialGradient(w,b,0,w,b,m*r.particleRadius*2);y.addColorStop(0,r.fillColor.replace("alp",1)),y.addColorStop(1,r.fillColor.replace("alp",0)),i.fillStyle=y,i.fill()}else i.arc(w,b,m*r.particleRadius,0,2*Math.PI),i.lineWidth=m/20,i.strokeStyle=r.strokeColor,i.stroke()}}();var s=cTab.width=700,l=cTab.height=1200,d=cTab.getContext("2d"),c={side:9,distance:11,depthZ:100,depthY:70,particleRadius:1,fillColor:"rgba(171,120,255,alp)",strokeColor:"#A3A3A3",rotYVel:.009,focalLength:270,vanishPoint:{x:s/2,y:l/2-l/1.9}},h=0,u=0;!function t(){window.requestAnimationFrame(t),++u,h+=c.rotYVel;var e=Math.cos(h),i=Math.sin(h);d.fillStyle="#0B0D19",d.fillRect(0,0,s,l);for(var r=0;r<c.side;++r)for(var n=0;n<c.side;++n)for(var a=0;a<c.side;++a){var o=(r-c.side/2)*c.distance,f=(n-c.side/2)*c.distance,p=(a-c.side/2)*c.distance,g=Math.sin((u+o+p+f)/30)*c.side<r&&Math.sin((u+o+p+f)/30)*c.side>r-5,v=o;o=o*e-p*i,p=p*e+v*i,p+=c.depthZ,f+=c.depthY;var m=c.focalLength/p,w=c.vanishPoint.x+o*m,b=c.vanishPoint.y+f*m;if(d.beginPath(),g){d.arc(w,b,m*c.particleRadius*2,0,2*Math.PI);var y=d.createRadialGradient(w,b,0,w,b,m*c.particleRadius*2);y.addColorStop(0,c.fillColor.replace("alp",1)),y.addColorStop(1,c.fillColor.replace("alp",0)),d.fillStyle=y,d.fill()}else d.arc(w,b,m*c.particleRadius,0,2*Math.PI),d.lineWidth=m/20,d.strokeStyle=c.strokeColor,d.stroke()}}();var f=cDesk.width=1100,p=cDesk.height=1700,g=cDesk.getContext("2d"),v={side:8,distance:14,depthZ:100,depthY:70,particleRadius:1,fillColor:"rgba(171,120,255,alp)",strokeColor:"#A3A3A3",rotYVel:.009,focalLength:270,vanishPoint:{x:f/2,y:p/2-p/2.1}},m=0,w=0;!function t(){window.requestAnimationFrame(t),++w,m+=v.rotYVel;var e=Math.cos(m),i=Math.sin(m);g.fillStyle="#0B0D19",g.fillRect(0,0,f,p);for(var r=0;r<v.side;++r)for(var n=0;n<v.side;++n)for(var a=0;a<v.side;++a){var o=(r-v.side/2)*v.distance,s=(n-v.side/2)*v.distance,l=(a-v.side/2)*v.distance,d=Math.sin((w+o+l+s)/30)*v.side<r&&Math.sin((w+o+l+s)/30)*v.side>r-5,c=o;o=o*e-l*i,l=l*e+c*i,l+=v.depthZ,s+=v.depthY;var h=v.focalLength/l,u=v.vanishPoint.x+o*h,b=v.vanishPoint.y+s*h;if(g.beginPath(),d){g.arc(u,b,h*v.particleRadius*2,0,2*Math.PI);var y=g.createRadialGradient(u,b,0,u,b,h*v.particleRadius*2);y.addColorStop(0,v.fillColor.replace("alp",1)),y.addColorStop(1,v.fillColor.replace("alp",0)),g.fillStyle=y,g.fill()}else g.arc(u,b,h*v.particleRadius,0,2*Math.PI),g.lineWidth=h/20,g.strokeStyle=v.strokeColor,g.stroke()}}()}})),n()(document).ready((function(){function t(){window.isDesctop=window.innerWidth>1919}function e(){isDesctop?n()("#footerPhone").prependTo("#footerSocials"):n()("#footerPhone").prependTo("#footer")}window.actionStopper=!0,window.validMail=function(t){return/.+@.+\..+/i.test(t)},window.validPhone=function(t){return/^(\+7)?(\d{3}?)?[\d]{11}$/.test(t)},window.validDate=function(t){return/^\d{2}\.\d{2}\.\d{4}$/.test(t)},t(),n()("header .dropdown").each((function(t,e){n()(e).hover((function(){isDesctop&&(n()("#navLine").addClass("visible"),n()("#header").addClass("is-background"))}),(function(){isDesctop&&(n()("#navLine").removeClass("visible"),n()("#header").removeClass("is-background"))}))})),n()("#navToggler").on("click",(function(){n()("#header").toggleClass("nav-visible"),n()(".nav__item.dropdown").removeClass("drop-visible")})),n()(".nav__item.dropdown").on("click",(function(t){var e=t.target;isDesctop||n()(e).toggleClass("drop-visible")})),n()(".nav__item.dropdown a").on("click",(function(t){if(!isDesctop){t.preventDefault();var e=t.target;n()(e).parent().click()}})),e(),n()(window).resize((function(){t(),e()}))})),n()(document).ready((function(){var t=!0;function e(t){n()(t).parent().addClass("visible"),n()(t).css("max-height","9999px");var e=n()(t).outerHeight(),i=e>500?"max-height .7s linear 0s, opacity .2s linear .5s":"max-height .3s linear 0s, opacity .2s linear .1s";n()(t).css("max-height","0"),setTimeout((function(){n()(t).css({"max-height":e+"px",transition:i})}),10),setTimeout((function(){n()(t).css({"overflow-y":"initial"})}),700)}function i(t){n()(t).parent().removeClass("visible");var e=n()(t).outerHeight()>500?700:300;n()(t).css({"max-height":"0","overflow-y":"hidden"}),setTimeout((function(){n()(t).css({transition:"none"})}),e)}n()(".faq__caption").on("click",(function(r){if(t){t=!1,setTimeout((function(){t=!0}),300);var a=n()(r.target).next();n()(r.target).closest(".faq__item").hasClass("visible")?i(a):e(a)}})),n()(".faq__toggler").on("click",(function(r){if(r.stopPropagation(),t){t=!1,setTimeout((function(){t=!0}),300);var a=n()(r.target).closest(".faq__caption").next();n()(r.target).closest(".faq__item").hasClass("visible")?i(a):e(a)}})),n()(".faq__more").on("click",(function(){n()(".faq__more").hasClass("roll-up")?function(){for(var t=5;t<n()(".faq__item").length;t++)n()(".faq__item:eq("+t+")").removeClass("display show"),n()(".faq__item").removeClass("visible"),n()(".faq__description").attr("style",""),n()(".faq__more span").text("Ещё вопросы"),n()(".faq__more").removeClass("roll-up");var e=n()(".section_faq").offset().top-150;n()("body, html").animate({scrollTop:e},500)}():function(){for(var t=function(t){var e=n()(".faq__item.display").last().next().addClass("display");setTimeout((function(){n()(e).addClass("show"),n()(".faq__item").last().hasClass("show")&&(n()(".faq__more span").text("Скрыть вопросы"),n()(".faq__more").addClass("roll-up"))}),100*t)},e=0;e<5;e++)t(e)}()}))}));i(8);n()(document).ready((function(){if(n()("body").hasClass("page-index")){var t=function(t){var e=n()(window).scrollTop(),i=n()(window).height()/1.2;n()(t).each((function(){n()(this).offset().top-i<e&&n()(this).removeClass("animation-element")}))};new ldBar(".ldBar").set(100,!0),n()("body").addClass("loading"),setTimeout((function(){n()(".loading-container").addClass("hide")}),1200),setTimeout((function(){n()("body").addClass("loaded").css("overflow-y","auto"),n()(".loading-container").css("left","-99999px")}),2e3),setTimeout((function(){n()("body").removeClass("loading loaded"),n()(".loading-container").remove()}),3500);var e=n()(".animation-element");t(e),n()(window).scroll((function(){t(e)}))}}));var u=i(5);n()(document).ready((function(){n()("#callbackForm").on("submit",(function(t){t.preventDefault()}));var t=document.getElementById("callbackPhone");if(t){var e=Object(u.a)(t,{mask:"+{7} 000 000 00 00"});e.on("accept",(function(){var t=n()("#callbackPhone").closest(".controller");validPhone(e.unmaskedValue)?(n()(t).addClass("valid"),n()(t).removeClass("invalid")):(n()(t).addClass("invalid"),n()(t).removeClass("valid"))}))}}));i(9),i(11),i(13)}]);