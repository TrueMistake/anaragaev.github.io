!function(e){function t(t){for(var a,o,l=t[0],s=t[1],d=t[2],h=0,u=[];h<l.length;h++)o=l[h],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(c&&c(t);u.length;)u.shift()();return n.push.apply(n,d||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],a=!0,l=1;l<i.length;l++){var s=i[l];0!==r[s]&&(a=!1)}a&&(n.splice(t--,1),e=o(o.s=i[0]))}return e}var a={},r={0:0},n=[];function o(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=a,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(i,a,function(t){return e[t]}.bind(null,a));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var c=s;n.push([17,1]),i()}({10:function(e,t,i){!function e(t,i,a){function r(o,l){if(!i[o]){if(!t[o]){if(n)return n(o,!0);var s=new Error("Cannot find module '"+o+"'");throw s.code="MODULE_NOT_FOUND",s}var d=i[o]={exports:{}};t[o][0].call(d.exports,(function(e){var i=t[o][1][e];return r(i||e)}),d,d.exports,e,t,i,a)}return i[o].exports}for(var n=!1,o=0;o<a.length;o++)r(a[o]);return r}({1:[function(e,t,i){var a,r,n=[].slice,o={}.toString;function l(e,t){var i={}.hasOwnProperty;for(var a in t)i.call(t,a)&&(e[a]=t[a]);return e}a=e("./presets").presets,r=function(e){return"data:image/svg+xml;base64,"+btoa(e)},function(){var e,t,i;e={head:function(e){return'<?xml version="1.0" encoding="utf-8"?>\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="'+e+'">'},gradient:function(e,t){var i,a,o,l,s,d,c,h,u,f;for(null==e&&(e=45),null==t&&(t=1),i=n.call(arguments,2),a=[this.head("0 0 100 100")],o=4*i.length+1,e=e*Math.PI/180,l=Math.pow(Math.cos(e),2),s=Math.sqrt(l-Math.pow(l,2)),e>.25*Math.PI&&(s=Math.pow(Math.sin(e),2),l=Math.sqrt(s-Math.pow(s,2))),d=100*l,c=100*s,a.push('<defs><linearGradient id="gradient" x1="0" x2="'+l+'" y1="0" y2="'+s+'">'),h=0;h<o;++h)f=100*(u=h)/(o-1),a.push('<stop offset="'+f+'%" stop-color="'+i[u%i.length]+'"/>');return a.push('</linearGradient></defs>\n<rect x="0" y="0" width="400" height="400" fill="url(#gradient)">\n<animateTransform attributeName="transform" type="translate" from="-'+d+",-"+c+'"\nto="0,0" dur="'+t+'s" repeatCount="indefinite"/></rect></svg>'),r(a.join(""))},stripe:function(e,t,i){var a,n;return null==e&&(e="#b4b4b4"),null==t&&(t="#e6e6e6"),null==i&&(i=1),a=(a=[this.head("0 0 100 100")]).concat(['<rect fill="'+t+'" width="100" height="100"/>',"<g><g>",function(){var t,i=[];for(t=0;t<13;++t)n=t,i.push('<polygon fill="'+e+'" points="'+(20*n-90)+",100 "+(20*n-100)+",100 "+(20*n-60)+",0 "+(20*n-50)+',0 "/>');return i}().join(""),'</g><animateTransform attributeName="transform" type="translate" ','from="0,0" to="20,0" dur="'+i+'s" repeatCount="indefinite"/></g></svg>'].join("")),r(a)},bubble:function(e,t,i,a,n,o){var l,s,d,c,h,u;for(null==e&&(e="#39d"),null==t&&(t="#9cf"),null==i&&(i=15),null==a&&(a=1),null==n&&(n=6),null==o&&(o=1),l=[this.head("0 0 200 200"),'<rect x="0" y="0" width="200" height="200" fill="'+e+'"/>'],s=0;s<i;++s)d=-s/i*a,c=184*Math.random()+8,h=(.7*Math.random()+.3)*n,u=a*(1+.5*Math.random()),l.push(['<circle cx="'+c+'" cy="0" r="'+h+'" fill="none" stroke="'+t+'" stroke-width="'+o+'">','<animate attributeName="cy" values="190;-10" times="0;1" ','dur="'+u+'s" begin="'+d+'s" repeatCount="indefinite"/>',"</circle>",'<circle cx="'+c+'" cy="0" r="'+h+'" fill="none" stroke="'+t+'" stroke-width="'+o+'">','<animate attributeName="cy" values="390;190" times="0;1" ','dur="'+u+'s" begin="'+d+'s" repeatCount="indefinite"/>',"</circle>"].join(""));return r(l.join("")+"</svg>")}},t={queue:{},running:!1,main:function(e){var t,i,a,r,n,o,l=this;for(a in t=!1,i=[],r=this.queue)(o=(n=r[a])(e))||i.push(n),t=t||o;for(a in r=this.queue)n=r[a],i.indexOf(n)>=0&&delete this.queue[a];return t?requestAnimationFrame((function(e){return l.main(e)})):this.running=!1},add:function(e,t){var i=this;if(this.queue[e]||(this.queue[e]=t),!this.running)return this.running=!0,requestAnimationFrame((function(e){return i.main(e)}))}},window.ldBar=i=function(i,r){var n,s,d,c,h,u,f,p,v,m,g,w,b,x,k,y,C,_,S,P,M,q,A,B,E=this;if(null==r&&(r={}),n={xlink:"http://www.w3.org/1999/xlink"},(s="String"===o.call(i).slice(8,-1)?document.querySelector(i):i).ldBar)return s.ldBar;for(m in s.ldBar=this,~(d=s.getAttribute("class")||"").indexOf("ldBar")||s.setAttribute("class",d+" ldBar"),c="ldBar-"+Math.random().toString(16).substring(2),h={key:c,clip:c+"-clip",filter:c+"-filter",pattern:c+"-pattern",mask:c+"-mask",maskPath:c+"-mask-path"},u=function(e,t){var i,a;for(i in e=f(e),t)a=t[i],"attr"!==i&&e.appendChild(u(i,a||{}));return e.attrs(t.attr||{}),e},f=function(e){return document.createElementNS("http://www.w3.org/2000/svg",e)},(p=document.body.__proto__.__proto__.__proto__).text=function(e){return this.appendChild(document.createTextNode(e))},p.attrs=function(e){var t,i,a,r=[];for(t in e)i=e[t],(a=/([^:]+):([^:]+)/.exec(t))&&n[a[1]]?r.push(this.setAttributeNS(n[a[1]],t,i)):r.push(this.setAttribute(t,i));return r},p.styles=function(e){var t,i,a=[];for(t in e)i=e[t],a.push(this.style[t]=i);return a},p.append=function(e){return this.appendChild(document.createElementNS("http://www.w3.og/2000/svg",e))},p.attr=function(e,t){return null!=t?this.setAttribute(e,t):this.getAttribute(e)},(v={type:"stroke",img:"",path:"M10 10L90 10M90 8M90 12","fill-dir":"btt",fill:"#25b","fill-background":"#ddd","fill-background-extrude":3,"pattern-size":null,"stroke-dir":"normal",stroke:"#25b","stroke-width":"3","stroke-trail":"#ddd","stroke-trail-width":.5,duration:1,easing:"linear",value:0,"img-size":null,bbox:null,"set-dim":!0,"aspect-ratio":"xMidYMid","transition-in":!1,min:0,max:100,precision:0,padding:void 0}).preset=s.attr("data-preset")||r.preset,null!=v.preset&&l(v,a[v.preset]),v)(g=g=s.attr("data-"+m))&&(v[m]=g);return l(v,r),v.img&&(v.path=null),w="stroke"===v.type,b=function(t){var i;return(i=/data:ldbar\/res,([^()]+)\(([^)]+)\)/.exec(t))?e[i[1]].apply(e,i[2].split(",")):t},v.fill=b(v.fill),v.stroke=b(v.stroke),"false"===v["set-dim"]&&(v["set-dim"]=!1),x={attr:{"xmlns:xlink":"http://www.w3.org/1999/xlink",preserveAspectRatio:v["aspect-ratio"],width:"100%",height:"100%"},defs:{filter:{attr:{id:h.filter,x:-1,y:-1,width:3,height:3},feMorphology:{attr:{operator:+v["fill-background-extrude"]>=0?"dilate":"erode",radius:Math.abs(+v["fill-background-extrude"])}},feColorMatrix:{attr:{values:"0 0 0 0 1    0 0 0 0 1    0 0 0 0 1    0 0 0 1 0",result:"cm"}}},mask:{attr:{id:h.mask},image:{attr:{"xlink:href":v.img,filter:"url(#"+h.filter+")",x:0,y:0,width:100,height:100,preserveAspectRatio:v["aspect-ratio"]}}},g:{mask:{attr:{id:h.maskPath},path:{attr:{d:v.path||"",fill:"#fff",stroke:"#fff",filter:"url(#"+h.filter+")"}}}},clipPath:{attr:{id:h.clip},rect:{attr:{class:"mask",fill:"#000"}}},pattern:{attr:{id:h.pattern,patternUnits:"userSpaceOnUse",x:0,y:0,width:300,height:300},image:{attr:{x:0,y:0,width:300,height:300}}}}},k=u("svg",x),(y=document.createElement("div")).setAttribute("class","ldBar-label"),s.appendChild(k),s.appendChild(y),C=[0,0],_=0,this.fit=function(){var e,t,i,a;if((t=(e=v.bbox)?{x:(t=e.split(" ").map((function(e){return+e.trim()})))[0],y:t[1],width:t[2],height:t[3]}:C[1].getBBox())&&0!==t.width&&0!==t.height||(t={x:0,y:0,width:100,height:100}),i=1.5*Math.max.apply(null,["stroke-width","stroke-trail-width","fill-background-extrude"].map((function(e){return v[e]}))),null!=v.padding&&(i=+v.padding),k.attrs({viewBox:[t.x-i,t.y-i,t.width+2*i,t.height+2*i].join(" ")}),v["set-dim"]&&["width","height"].map((function(e){if(!s.style[e]||E.fit[e])return s.style[e]=t[e]+2*i+"px",E.fit[e]=!0})),a=C[0].querySelector("rect"))return a.attrs({x:t.x-i,y:t.y-i,width:t.width+2*i,height:t.height+2*i})},v.path?(C[0]=u("g",w?{path:{attr:{d:v.path,fill:"none",class:"baseline"}}}:{rect:{attr:{x:0,y:0,width:100,height:100,mask:"url(#"+h.maskPath+")",fill:v["fill-background"],class:"frame"}}}),k.appendChild(C[0]),C[1]=u("g",{path:{attr:{d:v.path,class:w?"mainline":"solid","clip-path":"fill"===v.type?"url(#"+h.clip+")":""}}}),k.appendChild(C[1]),S=C[0].querySelector(w?"path":"rect"),P=C[1].querySelector("path"),w&&P.attrs({fill:"none"}),M=k.querySelector("pattern image"),(q=new Image).addEventListener("load",(function(){var e,t;return e=(t=v["pattern-size"])?{width:+t,height:+t}:q.width&&q.height?{width:q.width,height:q.height}:{width:300,height:300},k.querySelector("pattern").attrs({width:e.width,height:e.height}),M.attrs({width:e.width,height:e.height})})),/.+\..+|^data:/.exec(w?v.stroke:v.fill)&&(q.src=w?v.stroke:v.fill,M.attrs({"xlink:href":q.src})),w&&(S.attrs({stroke:v["stroke-trail"],"stroke-width":v["stroke-trail-width"]}),P.attrs({"stroke-width":v["stroke-width"],stroke:/.+\..+|^data:/.exec(v.stroke)?"url(#"+h.pattern+")":v.stroke})),v.fill&&!w&&P.attrs({fill:/.+\..+|^data:/.exec(v.fill)?"url(#"+h.pattern+")":v.fill}),_=P.getTotalLength(),this.fit(),this.inited=!0):v.img&&(B=v["img-size"]?{width:+(A=v["img-size"].split(","))[0],height:+A[1]}:{width:100,height:100},C[0]=u("g",{rect:{attr:{x:0,y:0,width:100,height:100,mask:"url(#"+h.mask+")",fill:v["fill-background"]}}}),k.querySelector("mask image").attrs({width:B.width,height:B.height}),C[1]=u("g",{image:{attr:{width:B.width,height:B.height,x:0,y:0,preserveAspectRatio:v["aspect-ratio"],"clip-path":"fill"===v.type?"url(#"+h.clip+")":"","xlink:href":v.img,class:"solid"}}}),(q=new Image).addEventListener("load",(function(){var e,t,i;return t=v["img-size"]?{width:+(e=v["img-size"].split(","))[0],height:+e[1]}:q.width&&q.height?{width:q.width,height:q.height}:{width:100,height:100},k.querySelector("mask image").attrs({width:t.width,height:t.height}),C[1].querySelector("image").attrs({width:t.width,height:t.height}),E.fit(),i=E.value,E.value=void 0,E.set(i,!0),E.inited=!0})),q.src=v.img,k.appendChild(C[0]),k.appendChild(C[1])),k.attrs({width:"100%",height:"100%"}),this.transition={value:{src:0,des:0},time:{},ease:function(e,t,i,a){return(e/=.5*a)<1?.5*i*e*e+t:.5*-i*((e-=1)*(e-2)-1)+t},handler:function(e,t){var i,a,r,n,o,l,s,d,c,h,u,f,p;return null==t&&(t=!0),null==this.time.src&&(this.time.src=e),a=(i=[v.min,v.max,1/v.precision])[0],r=i[1],n=i[2],o=(i=[this.value.des-this.value.src,.001*(e-this.time.src),+v.duration||1])[0],l=i[1],s=i[2],d=t?this.ease(l,this.value.src,o,s):this.value.des,v.precision?d=Math.round(d*n)/n:t&&(d=Math.round(d)),d>=a||(d=a),d<=r||(d=r),y.textContent=d,c=100*(d-a)/(r-a),w?(h=P,u={"stroke-dasharray":"reverse"===v["stroke-dir"]?"0 "+_*(100-c)*.01+" "+_*c*.01+" 0":.01*c*_+" "+(.01*(100-c)*_+1)}):(f=C[1].getBBox(),u="btt"!==(p=v["fill-dir"])&&p?"ttb"===p?{y:f.y,height:f.height*c*.01,x:f.x,width:f.width}:"ltr"===p?{y:f.y,height:f.height,x:f.x,width:f.width*c*.01}:"rtl"===p?{y:f.y,height:f.height,x:f.x+f.width*(100-c)*.01,width:f.width*c*.01}:void 0:{y:f.y+f.height*(100-c)*.01,height:f.height*c*.01,x:f.x,width:f.width},h=k.querySelector("rect")),h.attrs(u),!(l>=s)||(delete this.time.src,!1)},start:function(e,i,a){var r,n=this;return(r=this.value).src=e,r.des=i,s.offsetWidth||s.offsetHeight||s.getClientRects().length,a&&(s.offsetWidth||s.offsetHeight||s.getClientRects().length)?t.add(h.key,(function(e){return n.handler(e)})):(this.time.src=0,void this.handler(1e3,!1))}},this.set=function(e,t){var i,a;return null==t&&(t=!0),i=this.value||0,null!=e?this.value=e:e=this.value,a=this.value,this.transition.start(i,a,t)},this.set(+v.value||0,v["transition-in"]),this},window.addEventListener("load",(function(){var e,t,a,r,n=[];for(e=0,a=(t=document.querySelectorAll(".ldBar")).length;e<a;++e)(r=t[e]).ldBar||n.push(r.ldBar=new i(r));return n}),!1)}(),t.exports=ldBar},{"./presets":2}],2:[function(e,t,i){(void 0!==i&&i||this).presets={rainbow:{type:"stroke",path:"M10 10L90 10",stroke:"data:ldbar/res,gradient(0,1,#a551df,#fd51ad,#ff7f82,#ffb874,#ffeb90)",bbox:"10 10 80 10"},energy:{type:"fill",path:"M15 5L85 5A5 5 0 0 1 85 15L15 15A5 5 0 0 1 15 5",stroke:"#f00",fill:"data:ldbar/res,gradient(45,2,#4e9,#8fb,#4e9)","fill-dir":"ltr","fill-background":"#444","fill-background-extrude":1,bbox:"10 5 80 10"},stripe:{type:"fill",path:"M15 5L85 5A5 5 0 0 1 85 15L15 15A5 5 0 0 1 15 5",stroke:"#f00",fill:"data:ldbar/res,stripe(#25b,#58e,1)","fill-dir":"ltr","fill-background":"#ddd","fill-background-extrude":1,bbox:"10 5 80 10"},text:{type:"fill",img:'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="70" height="20" viewBox="0 0 70 20"><text x="35" y="10" text-anchor="middle" dominant-baseline="central" font-family="arial">LOADING</text></svg>',"fill-background-extrude":1.3,"pattern-size":100,"fill-dir":"ltr","img-size":"70,20",bbox:"0 0 70 20"},line:{type:"stroke",path:"M10 10L90 10",stroke:"#25b","stroke-width":3,"stroke-trail":"#ddd","stroke-trail-width":1,bbox:"10 10 80 10"},fan:{type:"stroke",path:"M10 90A40 40 0 0 1 90 90","fill-dir":"btt",fill:"#25b","fill-background":"#ddd","fill-background-extrude":3,"stroke-dir":"normal",stroke:"#25b","stroke-width":"3","stroke-trail":"#ddd","stroke-trail-width":.5,bbox:"10 50 80 40"},circle:{type:"stroke",path:"M50 10A40 40 0 0 1 50 90A40 40 0 0 1 50 10","fill-dir":"btt",fill:"#25b","fill-background":"#ddd","fill-background-extrude":3,"stroke-dir":"normal",stroke:"#25b","stroke-width":"3","stroke-trail":"#ddd","stroke-trail-width":.5,bbox:"10 10 80 80"},bubble:{type:"fill",path:"M50 10A40 40 0 0 1 50 90A40 40 0 0 1 50 10","fill-dir":"btt",fill:"data:ldbar/res,bubble(#39d,#cef)","pattern-size":"150","fill-background":"#ddd","fill-background-extrude":2,"stroke-dir":"normal",stroke:"#25b","stroke-width":"3","stroke-trail":"#ddd","stroke-trail-width":.5,bbox:"10 10 80 80"}}},{}]},{},[1])},15:function(e,t,i){var a=i(7),r=i(16);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var n={insert:"head",singleton:!1};a(r,n);e.exports=r.locals||{}},16:function(e,t,i){},17:function(e,t,i){"use strict";i.r(t);var a=i(0),r=i.n(a),n=i(4),o=i(5),l=i(8),s=i(9);o.a.use([l.a,s.a]),r()(document).ready((function(){function e(e,t){var i=r()(t+" .slide-nums__current").width(),a=r()(t).find(".slide-nums__scrolled");r()(t+" .slide-nums__number").removeClass("active"),r()(t+" .slide-nums__number:eq("+e+")").addClass("active"),r()(a).css("transform","translateX(-"+i*e+"px)")}var t=new n.a("#bannerPictureSlider",{speed:1500,parallax:!0,effect:"fade",fadeEffect:{crossFade:!0}}),i=new n.a("#bannerContentSlider",{speed:1500,parallax:!0,navigation:{nextEl:"#btnSliderNext",prevEl:"#btnSliderPrev"},on:{activeIndexChange:function(t){e(t.activeIndex,"#sliderNums"),0!==t.activeIndex?r()("#sliderAnimation").removeClass("visible"):r()("#sliderAnimation").addClass("visible")}}});t.controller.control=i,i.controller.control=t,new n.a("#contentBanner",{speed:500,parallax:!0,navigation:{nextEl:"#btnBannerProjectsNext",prevEl:"#btnBannerProjectsPrev"},on:{activeIndexChange:function(t){e(t.activeIndex,"#bannerSliderNums")}}}),new n.a("#contentBannerSlider",{speed:700,parallax:!0,navigation:{nextEl:"#btnBannerProjectsNext",prevEl:"#btnBannerProjectsPrev"},autoplay:{delay:3e3,stopOnLastSlide:!0,disableOnInteraction:!1},on:{activeIndexChange:function(t){e(t.activeIndex,"#bannerSliderNums")}}}),new n.a("#offerSlider",{slidesPerView:"auto",speed:500,navigation:{nextEl:"#btnOfferSliderNext",prevEl:"#btnOfferSliderPrev"}}),new n.a("#projectsSlider",{slidesPerView:"auto",speed:500,navigation:{nextEl:"#btnProjectsNext",prevEl:"#btnProjectsPrev"}}),new n.a("#clientsList",{slidesPerView:"auto",speed:500,navigation:{nextEl:"#btnClientsSliderNext",prevEl:"#btnClientsSliderPrev"}}),new n.a("#feedbackList",{slidesPerView:"auto",speed:500,navigation:{nextEl:"#btnFeedbackNext",prevEl:"#btnFeedbackPrev"}}),new n.a("#typesSlider",{slidesPerView:"auto",speed:500,navigation:{nextEl:"#btnTypesSliderNext",prevEl:"#btnTypesSliderPrev"}}),new n.a("#typicalSolutionsSlider",{slidesPerView:"auto",speed:500,navigation:{nextEl:"#btnTypicalSolutionsNext",prevEl:"#btnTypicalSolutionsPrev"}});var a,o,l=window.matchMedia("(min-width: 1366px)");function s(){!0===l.matches?(void 0!==a&&a.destroy(!0,!0),void 0!==o&&o.destroy(!0,!0)):!1===l.matches&&(r()("#listSlider")[0]&&(a=new n.a("#listSlider",{slidesPerView:"auto",speed:500})),r()("#workSlider")[0]&&(o=new n.a("#workSlider",{slidesPerView:"auto",speed:500})))}l.addListener(s),s()})),r()(document).ready((function(){if(r()(".page-index")[0]){var e=cMob.width=500,t=cMob.height=700,i=cMob.getContext("2d"),a={side:6,distance:11,depthZ:100,depthY:70,particleRadius:1,fillColor:"rgba(171,120,255,alp)",strokeColor:"#A3A3A3",rotYVel:.009,focalLength:270,vanishPoint:{x:e/2,y:t/2-t/2}},n=0,o=0;!function r(){window.requestAnimationFrame(r),++o,n+=a.rotYVel;var l=Math.cos(n),s=Math.sin(n);i.fillStyle="#0B0D19",i.fillRect(0,0,e,t);for(var d=0;d<a.side;++d)for(var c=0;c<a.side;++c)for(var h=0;h<a.side;++h){var u=(d-a.side/2)*a.distance,f=(c-a.side/2)*a.distance,p=(h-a.side/2)*a.distance,v=Math.sin((o+u+p+f)/30)*a.side<d&&Math.sin((o+u+p+f)/30)*a.side>d-5,m=u;u=u*l-p*s,p=p*l+m*s,p+=a.depthZ,f+=a.depthY;var g=a.focalLength/p,w=a.vanishPoint.x+u*g,b=a.vanishPoint.y+f*g;if(i.beginPath(),v){i.arc(w,b,g*a.particleRadius*2,0,2*Math.PI);var x=i.createRadialGradient(w,b,0,w,b,g*a.particleRadius*2);x.addColorStop(0,a.fillColor.replace("alp",1)),x.addColorStop(1,a.fillColor.replace("alp",0)),i.fillStyle=x,i.fill()}else i.arc(w,b,g*a.particleRadius,0,2*Math.PI),i.lineWidth=g/20,i.strokeStyle=a.strokeColor,i.stroke()}}();var l=cTab.width=700,s=cTab.height=1e3,d=cTab.getContext("2d"),c={side:7,distance:14,depthZ:100,depthY:70,particleRadius:1,fillColor:"rgba(171,120,255,alp)",strokeColor:"#A3A3A3",rotYVel:.009,focalLength:270,vanishPoint:{x:l/2,y:s/2-s/2}},h=0,u=0;!function e(){window.requestAnimationFrame(e),++u,h+=c.rotYVel;var t=Math.cos(h),i=Math.sin(h);d.fillStyle="#0B0D19",d.fillRect(0,0,l,s);for(var a=0;a<c.side;++a)for(var r=0;r<c.side;++r)for(var n=0;n<c.side;++n){var o=(a-c.side/2)*c.distance,f=(r-c.side/2)*c.distance,p=(n-c.side/2)*c.distance,v=Math.sin((u+o+p+f)/30)*c.side<a&&Math.sin((u+o+p+f)/30)*c.side>a-5,m=o;o=o*t-p*i,p=p*t+m*i,p+=c.depthZ,f+=c.depthY;var g=c.focalLength/p,w=c.vanishPoint.x+o*g,b=c.vanishPoint.y+f*g;if(d.beginPath(),v){d.arc(w,b,g*c.particleRadius*2,0,2*Math.PI);var x=d.createRadialGradient(w,b,0,w,b,g*c.particleRadius*2);x.addColorStop(0,c.fillColor.replace("alp",1)),x.addColorStop(1,c.fillColor.replace("alp",0)),d.fillStyle=x,d.fill()}else d.arc(w,b,g*c.particleRadius,0,2*Math.PI),d.lineWidth=g/20,d.strokeStyle=c.strokeColor,d.stroke()}}();var f=cDesk.width=1e3,p=cDesk.height=1500,v=cDesk.getContext("2d"),m={side:8,distance:14,depthZ:100,depthY:70,particleRadius:1,fillColor:"rgba(171,120,255,alp)",strokeColor:"#A3A3A3",rotYVel:.009,focalLength:270,vanishPoint:{x:f/2,y:p/2-p/2}},g=0,w=0;!function e(){window.requestAnimationFrame(e),++w,g+=m.rotYVel;var t=Math.cos(g),i=Math.sin(g);v.fillStyle="#0B0D19",v.fillRect(0,0,f,p);for(var a=0;a<m.side;++a)for(var r=0;r<m.side;++r)for(var n=0;n<m.side;++n){var o=(a-m.side/2)*m.distance,l=(r-m.side/2)*m.distance,s=(n-m.side/2)*m.distance,d=Math.sin((w+o+s+l)/30)*m.side<a&&Math.sin((w+o+s+l)/30)*m.side>a-5,c=o;o=o*t-s*i,s=s*t+c*i,s+=m.depthZ,l+=m.depthY;var h=m.focalLength/s,u=m.vanishPoint.x+o*h,b=m.vanishPoint.y+l*h;if(v.beginPath(),d){v.arc(u,b,h*m.particleRadius*2,0,2*Math.PI);var x=v.createRadialGradient(u,b,0,u,b,h*m.particleRadius*2);x.addColorStop(0,m.fillColor.replace("alp",1)),x.addColorStop(1,m.fillColor.replace("alp",0)),v.fillStyle=x,v.fill()}else v.arc(u,b,h*m.particleRadius,0,2*Math.PI),v.lineWidth=h/20,v.strokeStyle=m.strokeColor,v.stroke()}}()}})),r()(document).ready((function(){function e(){window.isDesctop=window.innerWidth>1345}window.actionStopper=!0,window.validMail=function(e){return/.+@.+\..+/i.test(e)},window.validPhone=function(e){return/^(\+7)?(\d{3}?)?[\d]{11}$/.test(e)},window.validDate=function(e){return/^\d{2}\.\d{2}\.\d{4}$/.test(e)},e(),r()(window).resize((function(){e()}));var t=r()(".animation-element");if(t.length>0){var i=function(e){var t=r()(window).scrollTop(),i=r()(window).height()-100;r()(e).each((function(){r()(this).offset().top-i<t&&r()(this).removeClass("animation-element")}))};i(t),r()(window).scroll((function(){i(t)}))}window.modalOpen=function(e){var t,i=r()(e).data("target"),a=(t=parseInt(document.documentElement.clientWidth),parseInt(window.innerWidth)-t+"px");r()("body").addClass("modal-open").css("paddingRight",a),r()("header.header").css({paddingRight:"calc(5vw + "+a+")",transition:"none"}),r()(i).addClass("visible")},window.modalClose=function(e){r()(e).hasClass("modal")?r()(e).removeClass("visible"):r()(e).closest(".modal").removeClass("visible"),r()("body").removeClass("modal-open").css("paddingRight","0px"),r()("header.header").css({paddingRight:"5vw"})};var a=r()(".modal__close");a.length>0&&r()(a).each((function(){var e=this;r()(this).on("click",(function(){return modalClose(e)}))}));var n=r()(".modal");n.length>0&&r()(n).each((function(){r()(this).on("click",(function(e){r()(e.target).hasClass("modal")&&modalClose(this)}))}))}));i(10);r()(document).ready((function(){r()("header .dropdown").each((function(e,t){r()(t).hover((function(){isDesctop&&r()("#navLine").addClass("visible")}),(function(){isDesctop&&r()("#navLine").removeClass("visible")}))})),r()("#navToggler").on("click",(function(){r()("#header").toggleClass("nav-visible"),r()(".nav__item.dropdown").removeClass("drop-visible"),r()(".nav__item.dropdown > a").removeClass("drop-visible")})),r()(".nav__item.dropdown").on("click",(function(e){var t=e.target;isDesctop||r()(t).toggleClass("drop-visible")})),r()(".nav__item.dropdown a").on("click",(function(e){if(!isDesctop){e.preventDefault();var t=e.target;r()(t).parent().click()}})),r()(".nav__points-btn").on("click",(function(e){e.preventDefault()}))})),r()(document).ready((function(){var e=!0;r()(".faq__caption").on("click",(function(t){if(e){e=!1,setTimeout((function(){e=!0}),300);var i=r()(t.target).next();r()(t.target).closest(".faq__item").hasClass("visible")?function(e){r()(e).parent().removeClass("visible");var t=r()(e).outerHeight()>500?700:300;r()(e).css({"max-height":"0","overflow-y":"hidden"}),setTimeout((function(){r()(e).css({transition:"none"})}),t)}(i):function(e){r()(e).parent().addClass("visible"),r()(e).css("max-height","9999px");var t=r()(e).outerHeight(),i=t>500?"max-height .7s linear 0s, opacity .2s linear .5s":"max-height .3s linear 0s, opacity .2s linear .1s";r()(e).css("max-height","0"),setTimeout((function(){r()(e).css({"max-height":t+"px",transition:i})}),10),setTimeout((function(){r()(e).css({"overflow-y":"initial"})}),700)}(i)}})),r()(".faq__toggler").on("click",(function(e){r()(e.target).parent().click()})),r()(".faq__more").on("click",(function(){r()(".faq__more").hasClass("roll-up")?function(){for(var e=5;e<r()(".faq__item").length;e++)r()(".faq__item:eq("+e+")").removeClass("display show"),r()(".faq__item").removeClass("visible"),r()(".faq__description").attr("style",""),r()(".faq__more .text").text("Ещё вопросы"),r()(".faq__more").removeClass("roll-up");var t=r()(".section_faq").offset().top-150;r()("body, html").animate({scrollTop:t},500)}():function(){for(var e=function(e){var t=r()(".faq__item.display").last().next().addClass("display");setTimeout((function(){r()(t).addClass("show"),r()(".faq__item").last().hasClass("show")&&(r()(".faq__more .text").text("Скрыть вопросы"),r()(".faq__more").addClass("roll-up"))}),100*e)},t=0;t<5;t++)e(t)}()}))})),r()(document).ready((function(){r()("body").hasClass("page-index")&&(new ldBar(".ldBar").set(100,!0),r()("body").addClass("loading"),setTimeout((function(){r()(".loading-container").addClass("hide")}),1200),setTimeout((function(){r()("body").addClass("loaded").css("overflow-y","auto"),r()(".loading-container").css("left","-99999px")}),2e3),setTimeout((function(){r()("body").removeClass("loading loaded"),r()(".loading-container").remove()}),3500))}));var d=i(6);r()(document).ready((function(){var e,t=r()("#phone").closest("form"),i=r()("#phone").closest(".controller"),a=r()("#callbackForm .validator__cross");function n(){r()(i).hasClass("checked")||r()(i).addClass("checked"),r()(i).hasClass("invalid")||r()(i).addClass("invalid"),r()(a).hasClass("bounce-top")||(r()(a).addClass("bounce-top"),setTimeout((function(){r()(a).removeClass("bounce-top")}),1e3))}function o(){var e=r()("#phone").val();""!==e&&(validPhone(e.replace(/\s+|\+/g,""))||n())}var l=document.getElementById("phone");if(l){(e=Object(d.a)(l,{mask:"+{7} 000 000 00 00"})).on("accept",(function(){e.updateValue(),validPhone(e.unmaskedValue)?(r()(i).addClass("valid"),r()(i).removeClass("invalid"),r()(i).addClass("checked")):r()(i).hasClass("checked")&&(r()(i).addClass("invalid"),r()(i).removeClass("valid")),""===e.unmaskedValue&&r()(i).removeClass("checked")}))}r()("#phone").blur((function(){o()})),r()(window).scroll((function(){r()("#phone").is(":focus")&&o()})),r()("#callbackForm").on("submit",(function(a){a.preventDefault();var o=r()("#phone").val(),l=!0;""!==o&&validPhone(o.replace(/\s+|\+/g,""))||(l=!1,n()),l&&(r()(t)[0].reset(),r()(i).removeClass("valid input checked"),e.updateValue(),modalOpen(this))}))})),r()(document).ready((function(){var e,t=r()("#orderForm"),i=r()("#phone").closest(".controller"),a=r()("#orderForm .validator__cross");function n(){r()(i).hasClass("checked")||r()(i).addClass("checked"),r()(i).hasClass("invalid")||r()(i).addClass("invalid"),r()(a).hasClass("bounce-top")||(r()(a).addClass("bounce-top"),setTimeout((function(){r()(a).removeClass("bounce-top")}),1e3))}function o(){var e=r()("#phone").val();""!==e&&(validPhone(e.replace(/\s+|\+/g,""))||n())}var l=document.getElementById("phone");if(l){(e=Object(d.a)(l,{mask:"+{7} 000 000 00 00"})).on("accept",(function(){e.updateValue(),validPhone(e.unmaskedValue)?(r()(i).addClass("checked valid"),r()(i).removeClass("invalid")):r()(i).hasClass("checked")&&(r()(i).addClass("invalid"),r()(i).removeClass("valid")),""===e.unmaskedValue&&r()(i).removeClass("checked")}))}r()("#phone").blur((function(){o()})),r()(window).scroll((function(){r()("#phone").is(":focus")&&o()})),r()("#orderForm").on("submit",(function(a){a.preventDefault();var o=r()("#phone").val(),l=!0;if(""!==o&&validPhone(o.replace(/\s+|\+/g,""))||(l=!1,n()),l){r()("#name").val(),r()("#phone").val(),r()("#message").val();r()(t)[0].reset(),r()(i).removeClass("valid input checked"),e.updateValue(),modalOpen(this)}}))})),r()(document).ready((function(){r()(".feedback__pic").each((function(e,t){var i=r()(t).parent().children(".feedback__msg");r()(t).hover((function(){isDesctop&&r()(i).addClass("hover")}),(function(){isDesctop&&r()(i).removeClass("hover")}))}))})),r()(document).ready((function(){var e=r()(".work__num");if(e.length>0){var t=function(){r()(e).each((function(){var e=r()(window).scrollTop(),t=r()(window).height()/1;r()(this).offset().top-t<e&&(r()(this).hasClass("animation")||r()(this).addClass("animation"))}))};t(),r()(window).scroll((function(){t()}))}})),r()(document).ready((function(){var e=r()(".types__btn");r()(e).each((function(e,t){var i=r()(t).closest(".types__card");r()(t).on("click",(function(){r()(i).hasClass("open")?r()(i).removeClass("open"):(r()(".types__card").removeClass("open"),r()(i).addClass("open"))}))}))})),r()(document).ready((function(){}));i(11),i(13),i(15)}});