!function(e){function t(t){for(var a,l,s=t[0],o=t[1],d=t[2],h=0,u=[];h<s.length;h++)l=s[h],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&u.push(n[l][0]),n[l]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);for(c&&c(t);u.length;)u.shift()();return r.push.apply(r,d||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],a=!0,s=1;s<i.length;s++){var o=i[s];0!==n[o]&&(a=!1)}a&&(r.splice(t--,1),e=l(l.s=i[0]))}return e}var a={},n={0:0},r=[];function l(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=e,l.c=a,l.d=function(e,t,i){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(i,a,function(t){return e[t]}.bind(null,a));return i},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var c=o;r.push([17,1]),i()}({10:function(e,t,i){!function e(t,i,a){function n(l,s){if(!i[l]){if(!t[l]){if(r)return r(l,!0);var o=new Error("Cannot find module '"+l+"'");throw o.code="MODULE_NOT_FOUND",o}var d=i[l]={exports:{}};t[l][0].call(d.exports,(function(e){var i=t[l][1][e];return n(i||e)}),d,d.exports,e,t,i,a)}return i[l].exports}for(var r=!1,l=0;l<a.length;l++)n(a[l]);return n}({1:[function(e,t,i){var a,n,r=[].slice,l={}.toString;function s(e,t){var i={}.hasOwnProperty;for(var a in t)i.call(t,a)&&(e[a]=t[a]);return e}a=e("./presets").presets,n=function(e){return"data:image/svg+xml;base64,"+btoa(e)},function(){var e,t,i;e={head:function(e){return'<?xml version="1.0" encoding="utf-8"?>\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="'+e+'">'},gradient:function(e,t){var i,a,l,s,o,d,c,h,u,f;for(null==e&&(e=45),null==t&&(t=1),i=r.call(arguments,2),a=[this.head("0 0 100 100")],l=4*i.length+1,e=e*Math.PI/180,s=Math.pow(Math.cos(e),2),o=Math.sqrt(s-Math.pow(s,2)),e>.25*Math.PI&&(o=Math.pow(Math.sin(e),2),s=Math.sqrt(o-Math.pow(o,2))),d=100*s,c=100*o,a.push('<defs><linearGradient id="gradient" x1="0" x2="'+s+'" y1="0" y2="'+o+'">'),h=0;h<l;++h)f=100*(u=h)/(l-1),a.push('<stop offset="'+f+'%" stop-color="'+i[u%i.length]+'"/>');return a.push('</linearGradient></defs>\n<rect x="0" y="0" width="400" height="400" fill="url(#gradient)">\n<animateTransform attributeName="transform" type="translate" from="-'+d+",-"+c+'"\nto="0,0" dur="'+t+'s" repeatCount="indefinite"/></rect></svg>'),n(a.join(""))},stripe:function(e,t,i){var a,r;return null==e&&(e="#b4b4b4"),null==t&&(t="#e6e6e6"),null==i&&(i=1),a=(a=[this.head("0 0 100 100")]).concat(['<rect fill="'+t+'" width="100" height="100"/>',"<g><g>",function(){var t,i=[];for(t=0;t<13;++t)r=t,i.push('<polygon fill="'+e+'" points="'+(20*r-90)+",100 "+(20*r-100)+",100 "+(20*r-60)+",0 "+(20*r-50)+',0 "/>');return i}().join(""),'</g><animateTransform attributeName="transform" type="translate" ','from="0,0" to="20,0" dur="'+i+'s" repeatCount="indefinite"/></g></svg>'].join("")),n(a)},bubble:function(e,t,i,a,r,l){var s,o,d,c,h,u;for(null==e&&(e="#39d"),null==t&&(t="#9cf"),null==i&&(i=15),null==a&&(a=1),null==r&&(r=6),null==l&&(l=1),s=[this.head("0 0 200 200"),'<rect x="0" y="0" width="200" height="200" fill="'+e+'"/>'],o=0;o<i;++o)d=-o/i*a,c=184*Math.random()+8,h=(.7*Math.random()+.3)*r,u=a*(1+.5*Math.random()),s.push(['<circle cx="'+c+'" cy="0" r="'+h+'" fill="none" stroke="'+t+'" stroke-width="'+l+'">','<animate attributeName="cy" values="190;-10" times="0;1" ','dur="'+u+'s" begin="'+d+'s" repeatCount="indefinite"/>',"</circle>",'<circle cx="'+c+'" cy="0" r="'+h+'" fill="none" stroke="'+t+'" stroke-width="'+l+'">','<animate attributeName="cy" values="390;190" times="0;1" ','dur="'+u+'s" begin="'+d+'s" repeatCount="indefinite"/>',"</circle>"].join(""));return n(s.join("")+"</svg>")}},t={queue:{},running:!1,main:function(e){var t,i,a,n,r,l,s=this;for(a in t=!1,i=[],n=this.queue)(l=(r=n[a])(e))||i.push(r),t=t||l;for(a in n=this.queue)r=n[a],i.indexOf(r)>=0&&delete this.queue[a];return t?requestAnimationFrame((function(e){return s.main(e)})):this.running=!1},add:function(e,t){var i=this;if(this.queue[e]||(this.queue[e]=t),!this.running)return this.running=!0,requestAnimationFrame((function(e){return i.main(e)}))}},window.ldBar=i=function(i,n){var r,o,d,c,h,u,f,p,v,g,m,b,w,y,x,k,C,_,S,P,M,T,q,R,A=this;if(null==n&&(n={}),r={xlink:"http://www.w3.org/1999/xlink"},(o="String"===l.call(i).slice(8,-1)?document.querySelector(i):i).ldBar)return o.ldBar;for(g in o.ldBar=this,~(d=o.getAttribute("class")||"").indexOf("ldBar")||o.setAttribute("class",d+" ldBar"),c="ldBar-"+Math.random().toString(16).substring(2),h={key:c,clip:c+"-clip",filter:c+"-filter",pattern:c+"-pattern",mask:c+"-mask",maskPath:c+"-mask-path"},u=function(e,t){var i,a;for(i in e=f(e),t)a=t[i],"attr"!==i&&e.appendChild(u(i,a||{}));return e.attrs(t.attr||{}),e},f=function(e){return document.createElementNS("http://www.w3.org/2000/svg",e)},(p=document.body.__proto__.__proto__.__proto__).text=function(e){return this.appendChild(document.createTextNode(e))},p.attrs=function(e){var t,i,a,n=[];for(t in e)i=e[t],(a=/([^:]+):([^:]+)/.exec(t))&&r[a[1]]?n.push(this.setAttributeNS(r[a[1]],t,i)):n.push(this.setAttribute(t,i));return n},p.styles=function(e){var t,i,a=[];for(t in e)i=e[t],a.push(this.style[t]=i);return a},p.append=function(e){return this.appendChild(document.createElementNS("http://www.w3.og/2000/svg",e))},p.attr=function(e,t){return null!=t?this.setAttribute(e,t):this.getAttribute(e)},(v={type:"stroke",img:"",path:"M10 10L90 10M90 8M90 12","fill-dir":"btt",fill:"#25b","fill-background":"#ddd","fill-background-extrude":3,"pattern-size":null,"stroke-dir":"normal",stroke:"#25b","stroke-width":"3","stroke-trail":"#ddd","stroke-trail-width":.5,duration:1,easing:"linear",value:0,"img-size":null,bbox:null,"set-dim":!0,"aspect-ratio":"xMidYMid","transition-in":!1,min:0,max:100,precision:0,padding:void 0}).preset=o.attr("data-preset")||n.preset,null!=v.preset&&s(v,a[v.preset]),v)(m=m=o.attr("data-"+g))&&(v[g]=m);return s(v,n),v.img&&(v.path=null),b="stroke"===v.type,w=function(t){var i;return(i=/data:ldbar\/res,([^()]+)\(([^)]+)\)/.exec(t))?e[i[1]].apply(e,i[2].split(",")):t},v.fill=w(v.fill),v.stroke=w(v.stroke),"false"===v["set-dim"]&&(v["set-dim"]=!1),y={attr:{"xmlns:xlink":"http://www.w3.org/1999/xlink",preserveAspectRatio:v["aspect-ratio"],width:"100%",height:"100%"},defs:{filter:{attr:{id:h.filter,x:-1,y:-1,width:3,height:3},feMorphology:{attr:{operator:+v["fill-background-extrude"]>=0?"dilate":"erode",radius:Math.abs(+v["fill-background-extrude"])}},feColorMatrix:{attr:{values:"0 0 0 0 1    0 0 0 0 1    0 0 0 0 1    0 0 0 1 0",result:"cm"}}},mask:{attr:{id:h.mask},image:{attr:{"xlink:href":v.img,filter:"url(#"+h.filter+")",x:0,y:0,width:100,height:100,preserveAspectRatio:v["aspect-ratio"]}}},g:{mask:{attr:{id:h.maskPath},path:{attr:{d:v.path||"",fill:"#fff",stroke:"#fff",filter:"url(#"+h.filter+")"}}}},clipPath:{attr:{id:h.clip},rect:{attr:{class:"mask",fill:"#000"}}},pattern:{attr:{id:h.pattern,patternUnits:"userSpaceOnUse",x:0,y:0,width:300,height:300},image:{attr:{x:0,y:0,width:300,height:300}}}}},x=u("svg",y),(k=document.createElement("div")).setAttribute("class","ldBar-label"),o.appendChild(x),o.appendChild(k),C=[0,0],_=0,this.fit=function(){var e,t,i,a;if((t=(e=v.bbox)?{x:(t=e.split(" ").map((function(e){return+e.trim()})))[0],y:t[1],width:t[2],height:t[3]}:C[1].getBBox())&&0!==t.width&&0!==t.height||(t={x:0,y:0,width:100,height:100}),i=1.5*Math.max.apply(null,["stroke-width","stroke-trail-width","fill-background-extrude"].map((function(e){return v[e]}))),null!=v.padding&&(i=+v.padding),x.attrs({viewBox:[t.x-i,t.y-i,t.width+2*i,t.height+2*i].join(" ")}),v["set-dim"]&&["width","height"].map((function(e){if(!o.style[e]||A.fit[e])return o.style[e]=t[e]+2*i+"px",A.fit[e]=!0})),a=C[0].querySelector("rect"))return a.attrs({x:t.x-i,y:t.y-i,width:t.width+2*i,height:t.height+2*i})},v.path?(C[0]=u("g",b?{path:{attr:{d:v.path,fill:"none",class:"baseline"}}}:{rect:{attr:{x:0,y:0,width:100,height:100,mask:"url(#"+h.maskPath+")",fill:v["fill-background"],class:"frame"}}}),x.appendChild(C[0]),C[1]=u("g",{path:{attr:{d:v.path,class:b?"mainline":"solid","clip-path":"fill"===v.type?"url(#"+h.clip+")":""}}}),x.appendChild(C[1]),S=C[0].querySelector(b?"path":"rect"),P=C[1].querySelector("path"),b&&P.attrs({fill:"none"}),M=x.querySelector("pattern image"),(T=new Image).addEventListener("load",(function(){var e,t;return e=(t=v["pattern-size"])?{width:+t,height:+t}:T.width&&T.height?{width:T.width,height:T.height}:{width:300,height:300},x.querySelector("pattern").attrs({width:e.width,height:e.height}),M.attrs({width:e.width,height:e.height})})),/.+\..+|^data:/.exec(b?v.stroke:v.fill)&&(T.src=b?v.stroke:v.fill,M.attrs({"xlink:href":T.src})),b&&(S.attrs({stroke:v["stroke-trail"],"stroke-width":v["stroke-trail-width"]}),P.attrs({"stroke-width":v["stroke-width"],stroke:/.+\..+|^data:/.exec(v.stroke)?"url(#"+h.pattern+")":v.stroke})),v.fill&&!b&&P.attrs({fill:/.+\..+|^data:/.exec(v.fill)?"url(#"+h.pattern+")":v.fill}),_=P.getTotalLength(),this.fit(),this.inited=!0):v.img&&(R=v["img-size"]?{width:+(q=v["img-size"].split(","))[0],height:+q[1]}:{width:100,height:100},C[0]=u("g",{rect:{attr:{x:0,y:0,width:100,height:100,mask:"url(#"+h.mask+")",fill:v["fill-background"]}}}),x.querySelector("mask image").attrs({width:R.width,height:R.height}),C[1]=u("g",{image:{attr:{width:R.width,height:R.height,x:0,y:0,preserveAspectRatio:v["aspect-ratio"],"clip-path":"fill"===v.type?"url(#"+h.clip+")":"","xlink:href":v.img,class:"solid"}}}),(T=new Image).addEventListener("load",(function(){var e,t,i;return t=v["img-size"]?{width:+(e=v["img-size"].split(","))[0],height:+e[1]}:T.width&&T.height?{width:T.width,height:T.height}:{width:100,height:100},x.querySelector("mask image").attrs({width:t.width,height:t.height}),C[1].querySelector("image").attrs({width:t.width,height:t.height}),A.fit(),i=A.value,A.value=void 0,A.set(i,!0),A.inited=!0})),T.src=v.img,x.appendChild(C[0]),x.appendChild(C[1])),x.attrs({width:"100%",height:"100%"}),this.transition={value:{src:0,des:0},time:{},ease:function(e,t,i,a){return(e/=.5*a)<1?.5*i*e*e+t:.5*-i*((e-=1)*(e-2)-1)+t},handler:function(e,t){var i,a,n,r,l,s,o,d,c,h,u,f,p;return null==t&&(t=!0),null==this.time.src&&(this.time.src=e),a=(i=[v.min,v.max,1/v.precision])[0],n=i[1],r=i[2],l=(i=[this.value.des-this.value.src,.001*(e-this.time.src),+v.duration||1])[0],s=i[1],o=i[2],d=t?this.ease(s,this.value.src,l,o):this.value.des,v.precision?d=Math.round(d*r)/r:t&&(d=Math.round(d)),d>=a||(d=a),d<=n||(d=n),k.textContent=d,c=100*(d-a)/(n-a),b?(h=P,u={"stroke-dasharray":"reverse"===v["stroke-dir"]?"0 "+_*(100-c)*.01+" "+_*c*.01+" 0":.01*c*_+" "+(.01*(100-c)*_+1)}):(f=C[1].getBBox(),u="btt"!==(p=v["fill-dir"])&&p?"ttb"===p?{y:f.y,height:f.height*c*.01,x:f.x,width:f.width}:"ltr"===p?{y:f.y,height:f.height,x:f.x,width:f.width*c*.01}:"rtl"===p?{y:f.y,height:f.height,x:f.x+f.width*(100-c)*.01,width:f.width*c*.01}:void 0:{y:f.y+f.height*(100-c)*.01,height:f.height*c*.01,x:f.x,width:f.width},h=x.querySelector("rect")),h.attrs(u),!(s>=o)||(delete this.time.src,!1)},start:function(e,i,a){var n,r=this;return(n=this.value).src=e,n.des=i,o.offsetWidth||o.offsetHeight||o.getClientRects().length,a&&(o.offsetWidth||o.offsetHeight||o.getClientRects().length)?t.add(h.key,(function(e){return r.handler(e)})):(this.time.src=0,void this.handler(1e3,!1))}},this.set=function(e,t){var i,a;return null==t&&(t=!0),i=this.value||0,null!=e?this.value=e:e=this.value,a=this.value,this.transition.start(i,a,t)},this.set(+v.value||0,v["transition-in"]),this},window.addEventListener("load",(function(){var e,t,a,n,r=[];for(e=0,a=(t=document.querySelectorAll(".ldBar")).length;e<a;++e)(n=t[e]).ldBar||r.push(n.ldBar=new i(n));return r}),!1)}(),t.exports=ldBar},{"./presets":2}],2:[function(e,t,i){(void 0!==i&&i||this).presets={rainbow:{type:"stroke",path:"M10 10L90 10",stroke:"data:ldbar/res,gradient(0,1,#a551df,#fd51ad,#ff7f82,#ffb874,#ffeb90)",bbox:"10 10 80 10"},energy:{type:"fill",path:"M15 5L85 5A5 5 0 0 1 85 15L15 15A5 5 0 0 1 15 5",stroke:"#f00",fill:"data:ldbar/res,gradient(45,2,#4e9,#8fb,#4e9)","fill-dir":"ltr","fill-background":"#444","fill-background-extrude":1,bbox:"10 5 80 10"},stripe:{type:"fill",path:"M15 5L85 5A5 5 0 0 1 85 15L15 15A5 5 0 0 1 15 5",stroke:"#f00",fill:"data:ldbar/res,stripe(#25b,#58e,1)","fill-dir":"ltr","fill-background":"#ddd","fill-background-extrude":1,bbox:"10 5 80 10"},text:{type:"fill",img:'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="70" height="20" viewBox="0 0 70 20"><text x="35" y="10" text-anchor="middle" dominant-baseline="central" font-family="arial">LOADING</text></svg>',"fill-background-extrude":1.3,"pattern-size":100,"fill-dir":"ltr","img-size":"70,20",bbox:"0 0 70 20"},line:{type:"stroke",path:"M10 10L90 10",stroke:"#25b","stroke-width":3,"stroke-trail":"#ddd","stroke-trail-width":1,bbox:"10 10 80 10"},fan:{type:"stroke",path:"M10 90A40 40 0 0 1 90 90","fill-dir":"btt",fill:"#25b","fill-background":"#ddd","fill-background-extrude":3,"stroke-dir":"normal",stroke:"#25b","stroke-width":"3","stroke-trail":"#ddd","stroke-trail-width":.5,bbox:"10 50 80 40"},circle:{type:"stroke",path:"M50 10A40 40 0 0 1 50 90A40 40 0 0 1 50 10","fill-dir":"btt",fill:"#25b","fill-background":"#ddd","fill-background-extrude":3,"stroke-dir":"normal",stroke:"#25b","stroke-width":"3","stroke-trail":"#ddd","stroke-trail-width":.5,bbox:"10 10 80 80"},bubble:{type:"fill",path:"M50 10A40 40 0 0 1 50 90A40 40 0 0 1 50 10","fill-dir":"btt",fill:"data:ldbar/res,bubble(#39d,#cef)","pattern-size":"150","fill-background":"#ddd","fill-background-extrude":2,"stroke-dir":"normal",stroke:"#25b","stroke-width":"3","stroke-trail":"#ddd","stroke-trail-width":.5,bbox:"10 10 80 80"}}},{}]},{},[1])},15:function(e,t,i){var a=i(7),n=i(16);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var r={insert:"head",singleton:!1};a(n,r);e.exports=n.locals||{}},16:function(e,t,i){},17:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),r=i(4),l=i(5),s=i(8),o=i(9);l.a.use([s.a,o.a]),n()(document).ready((function(){function e(e,t){var i=n()(t+" .slide-nums__current").width(),a=n()(t).find(".slide-nums__scrolled");n()(t+" .slide-nums__number").removeClass("active"),n()(t+" .slide-nums__number:eq("+e+")").addClass("active"),n()(a).css("transform","translateX(-"+i*e+"px)")}var t=new r.a("#bannerPictureSlider",{speed:1500,parallax:!0,effect:"fade",fadeEffect:{crossFade:!0}}),i=new r.a("#bannerContentSlider",{speed:1500,parallax:!0,navigation:{nextEl:"#btnSliderNext",prevEl:"#btnSliderPrev"},on:{activeIndexChange:function(t){e(t.activeIndex,"#sliderNums"),0!==t.activeIndex?n()("#sliderAnimation").removeClass("visible"):n()("#sliderAnimation").addClass("visible")}}});t.controller.control=i,i.controller.control=t,new r.a("#contentBanner",{speed:500,parallax:!0,navigation:{nextEl:"#btnBannerProjectsNext",prevEl:"#btnBannerProjectsPrev"},on:{activeIndexChange:function(t){e(t.activeIndex,"#bannerSliderNums")}}}),new r.a("#contentBannerSlider",{speed:700,parallax:!0,navigation:{nextEl:"#btnBannerProjectsNext",prevEl:"#btnBannerProjectsPrev"},on:{activeIndexChange:function(t){e(t.activeIndex,"#bannerSliderNums")}}}),new r.a("#offerSlider",{slidesPerView:"auto",speed:500,navigation:{nextEl:"#btnOfferSliderNext",prevEl:"#btnOfferSliderPrev"}}),new r.a("#projectsSlider",{slidesPerView:"auto",speed:500,navigation:{nextEl:"#btnProjectsNext",prevEl:"#btnProjectsPrev"}}),new r.a("#clientsList",{slidesPerView:"auto",speed:500,navigation:{nextEl:"#btnClientsSliderNext",prevEl:"#btnClientsSliderPrev"}}),new r.a("#feedbackList",{slidesPerView:"auto",speed:500,navigation:{nextEl:"#btnFeedbackNext",prevEl:"#btnFeedbackPrev"}}),new r.a("#typesSlider",{slidesPerView:"auto",speed:500,navigation:{nextEl:"#btnTypesSliderNext",prevEl:"#btnTypesSliderPrev"}}),window.rcSlider=new r.a("#readyCabinsSlider",{slidesPerView:"auto",speed:500,navigation:{nextEl:"#btnRcNext",prevEl:"#btnRcPrev"}}),window.tsSlider=new r.a("#typicalSolutionsSlider",{slidesPerView:"auto",speed:500,navigation:{nextEl:"#btnTSNext",prevEl:"#btnTsPrev"}});var a,l,s=window.matchMedia("(min-width: 1366px)");function o(){!0===s.matches?(void 0!==a&&a.destroy(!0,!0),void 0!==l&&l.destroy(!0,!0)):!1===s.matches&&(n()("#listSlider")[0]&&(a=new r.a("#listSlider",{slidesPerView:"auto",speed:500})),n()("#workSlider")[0]&&(l=new r.a("#workSlider",{slidesPerView:"auto",speed:500})))}s.addListener(o),o()})),n()(document).ready((function(){if(n()(".page-index")[0]){var e=cMob.width=500,t=cMob.height=700,i=cMob.getContext("2d"),a={side:6,distance:11,depthZ:100,depthY:70,particleRadius:1,fillColor:"rgba(171,120,255,alp)",strokeColor:"#A3A3A3",rotYVel:.009,focalLength:270,vanishPoint:{x:e/2,y:t/2-t/2}},r=0,l=0;!function n(){window.requestAnimationFrame(n),++l,r+=a.rotYVel;var s=Math.cos(r),o=Math.sin(r);i.fillStyle="#0B0D19",i.fillRect(0,0,e,t);for(var d=0;d<a.side;++d)for(var c=0;c<a.side;++c)for(var h=0;h<a.side;++h){var u=(d-a.side/2)*a.distance,f=(c-a.side/2)*a.distance,p=(h-a.side/2)*a.distance,v=Math.sin((l+u+p+f)/30)*a.side<d&&Math.sin((l+u+p+f)/30)*a.side>d-5,g=u;u=u*s-p*o,p=p*s+g*o,p+=a.depthZ,f+=a.depthY;var m=a.focalLength/p,b=a.vanishPoint.x+u*m,w=a.vanishPoint.y+f*m;if(i.beginPath(),v){i.arc(b,w,m*a.particleRadius*2,0,2*Math.PI);var y=i.createRadialGradient(b,w,0,b,w,m*a.particleRadius*2);y.addColorStop(0,a.fillColor.replace("alp",1)),y.addColorStop(1,a.fillColor.replace("alp",0)),i.fillStyle=y,i.fill()}else i.arc(b,w,m*a.particleRadius,0,2*Math.PI),i.lineWidth=m/20,i.strokeStyle=a.strokeColor,i.stroke()}}();var s=cTab.width=700,o=cTab.height=1e3,d=cTab.getContext("2d"),c={side:7,distance:14,depthZ:100,depthY:70,particleRadius:1,fillColor:"rgba(171,120,255,alp)",strokeColor:"#A3A3A3",rotYVel:.009,focalLength:270,vanishPoint:{x:s/2,y:o/2-o/2}},h=0,u=0;!function e(){window.requestAnimationFrame(e),++u,h+=c.rotYVel;var t=Math.cos(h),i=Math.sin(h);d.fillStyle="#0B0D19",d.fillRect(0,0,s,o);for(var a=0;a<c.side;++a)for(var n=0;n<c.side;++n)for(var r=0;r<c.side;++r){var l=(a-c.side/2)*c.distance,f=(n-c.side/2)*c.distance,p=(r-c.side/2)*c.distance,v=Math.sin((u+l+p+f)/30)*c.side<a&&Math.sin((u+l+p+f)/30)*c.side>a-5,g=l;l=l*t-p*i,p=p*t+g*i,p+=c.depthZ,f+=c.depthY;var m=c.focalLength/p,b=c.vanishPoint.x+l*m,w=c.vanishPoint.y+f*m;if(d.beginPath(),v){d.arc(b,w,m*c.particleRadius*2,0,2*Math.PI);var y=d.createRadialGradient(b,w,0,b,w,m*c.particleRadius*2);y.addColorStop(0,c.fillColor.replace("alp",1)),y.addColorStop(1,c.fillColor.replace("alp",0)),d.fillStyle=y,d.fill()}else d.arc(b,w,m*c.particleRadius,0,2*Math.PI),d.lineWidth=m/20,d.strokeStyle=c.strokeColor,d.stroke()}}();var f=cDesk.width=1e3,p=cDesk.height=1500,v=cDesk.getContext("2d"),g={side:8,distance:14,depthZ:100,depthY:70,particleRadius:1,fillColor:"rgba(171,120,255,alp)",strokeColor:"#A3A3A3",rotYVel:.009,focalLength:270,vanishPoint:{x:f/2,y:p/2-p/2}},m=0,b=0;!function e(){window.requestAnimationFrame(e),++b,m+=g.rotYVel;var t=Math.cos(m),i=Math.sin(m);v.fillStyle="#0B0D19",v.fillRect(0,0,f,p);for(var a=0;a<g.side;++a)for(var n=0;n<g.side;++n)for(var r=0;r<g.side;++r){var l=(a-g.side/2)*g.distance,s=(n-g.side/2)*g.distance,o=(r-g.side/2)*g.distance,d=Math.sin((b+l+o+s)/30)*g.side<a&&Math.sin((b+l+o+s)/30)*g.side>a-5,c=l;l=l*t-o*i,o=o*t+c*i,o+=g.depthZ,s+=g.depthY;var h=g.focalLength/o,u=g.vanishPoint.x+l*h,w=g.vanishPoint.y+s*h;if(v.beginPath(),d){v.arc(u,w,h*g.particleRadius*2,0,2*Math.PI);var y=v.createRadialGradient(u,w,0,u,w,h*g.particleRadius*2);y.addColorStop(0,g.fillColor.replace("alp",1)),y.addColorStop(1,g.fillColor.replace("alp",0)),v.fillStyle=y,v.fill()}else v.arc(u,w,h*g.particleRadius,0,2*Math.PI),v.lineWidth=h/20,v.strokeStyle=g.strokeColor,v.stroke()}}()}})),n()(document).ready((function(){function e(){window.isDesctop=window.innerWidth>1365}window.actionStopper=!0,window.validMail=function(e){return/.+@.+\..+/i.test(e)},window.validPhone=function(e){return/^(\+7)?(\d{3}?)?[\d]{11}$/.test(e)},window.validDate=function(e){return/^\d{2}\.\d{2}\.\d{4}$/.test(e)},window.getScrollWidth=function(){var e=parseInt(document.documentElement.clientWidth);return parseInt(window.innerWidth)-e},e(),n()(window).resize((function(){e()}));var t=n()(".animation-element");if(t.length>0){var i=function(e){var t=n()(window).scrollTop(),i=n()(window).height()-100;n()(e).each((function(){n()(this).offset().top-i<t&&n()(this).removeClass("animation-element")}))};i(t),n()(window).scroll((function(){i(t)}))}window.modalOpen=function(e){var t=n()(e).data("target"),i=getScrollWidth()+"px";n()("body").addClass("modal-open").css("paddingRight",i),n()("header.header").css({paddingRight:"calc(5vw + "+i+")",transition:"none"}),n()(t).addClass("visible")},window.modalClose=function(e){n()(e).hasClass("modal")?n()(e).removeClass("visible"):n()(e).closest(".modal").removeClass("visible"),n()("body").removeClass("modal-open").css("paddingRight","0px"),n()("header.header").css({paddingRight:"5vw"})};var a=n()(".modal__close");a.length>0&&n()(a).each((function(){var e=this;n()(this).on("click",(function(){return modalClose(e)}))}));var r=n()(".modal");r.length>0&&n()(r).each((function(){n()(this).on("click",(function(e){n()(e.target).hasClass("modal")&&modalClose(this)}))}));var l=n()(".label-controll__caption");if(l.length>0)for(var s=0;s<l.length;s++)n()(l[s]).on("click",(function(){n()(this).toggleClass("visible")}));var o=n()(".dot");if(o.length>0)for(var d=0;d<o.length;d++)n()(o[d]).on("click",(function(){var e=n()(this).index(),t=n()(this).closest(".gallery").find(".image"),i=n()(this).closest(".gallery").find(".dot");n()(i).removeClass("active"),n()(this).addClass("active"),n()(t).removeClass("active"),n()(t[e]).addClass("active")}));var c=n()(".slider-gallery-controller");if(c.length>0)for(var h=0;h<c.length;h++)n()(c[h]).on("click",(function(){var e,t=n()(this).data("direction"),i=n()(this).closest(".gallery").find(".dot.active").index(),a=n()(this).closest(".gallery").find(".dot"),r=n()(this).closest(".gallery").find(".image");n()(a).removeClass("active"),n()(r).removeClass("active"),"prev"===t&&(e=0===i?a.length-1:i-1),"next"===t&&(e=i+1===a.length?0:i+1),n()(a).eq(e).addClass("active"),n()(r).eq(e).addClass("active")}))}));i(10);n()(document).ready((function(){n()("header .dropdown").each((function(e,t){n()(t).hover((function(){isDesctop&&n()("#navLine").addClass("visible")}),(function(){isDesctop&&n()("#navLine").removeClass("visible")}))})),n()("#navToggler").on("click",(function(){n()("#header").toggleClass("nav-visible"),n()(".nav__item.dropdown").removeClass("drop-visible"),n()(".nav__item.dropdown > a").removeClass("drop-visible")})),n()(".nav__item.dropdown").on("click",(function(e){var t=e.target;isDesctop||n()(t).toggleClass("drop-visible")})),n()(".nav__item.dropdown a").on("click",(function(e){if(!isDesctop){e.preventDefault();var t=e.target;n()(t).parent().click()}})),n()(".nav__points-btn").on("click",(function(e){e.preventDefault()}))})),n()(document).ready((function(){var e=n()(".custom-select");if(e.length>0)for(var t=0;t<e.length;t++)n()(e[t]).on("click",(function(e){var t=n()(this).hasClass("open");0===n()(e.target).closest(".custom-select__container").length&&(n()(".custom-select").removeClass("open"),t?n()(this).removeClass("open"):n()(this).addClass("open"))}));n()(document).on("click",(function(e){0===n()(e.target).closest(".custom-select").length&&n()(".custom-select").removeClass("open")}));var i=n()(".custom-select__item");if(i.length>0)for(var a=0;a<i.length;a++)n()(i[a]).on("click",(function(){var e=n()(this).closest(".custom-select").children(".selected"),t=n()(this).closest(".custom-select__list").children(".custom-select__item");n()(t).removeClass("active"),n()(".custom-select").removeClass("open"),""===n()(this).data("filterValue")?n()(e).html("&nbsp;"):(n()(e).text(n()(this).text()),n()(this).addClass("active"))}));e.length>0&&setTimeout((function(){for(var t=0;t<e.length;t++){var i=n()(e[t]).find(".custom-select__item"),a=0;if(i.length>0)for(var r=0;r<i.length;r++)""!==n()(i[r]).data("filterValue")&&(a=n()(i[r]).width()>a?n()(i[r]).width():a);n()(e[t]).children(".selected").css("minWidth",a+"px")}}),500)})),n()(document).ready((function(){var e=n()(".radio-group label");function t(e){var t=n()(e).parent().children(".marker"),i=n()(e).innerWidth(),a=n()(e).position().left;n()(t).css({width:i,left:a+"px",opacity:"1"})}function i(){var e=n()("input[type='radio']:checked + label");if(e.length>0)for(var i=0;i<e.length;i++)t(e[i])}if(setTimeout(i,300),n()(window).resize((function(){i()})),e.length>0)for(var a=0;a<e.length;a++)n()(e[a]).on("click",(function(){t(this)}))})),n()(document).ready((function(){var e=!0;n()(".faq__caption").on("click",(function(t){if(e){e=!1,setTimeout((function(){e=!0}),300);var i=n()(t.target).next();n()(t.target).closest(".faq__item").hasClass("visible")?function(e){n()(e).parent().removeClass("visible");var t=n()(e).outerHeight()>500?700:300;n()(e).css({"max-height":"0","overflow-y":"hidden"}),setTimeout((function(){n()(e).css({transition:"none"})}),t)}(i):function(e){n()(e).parent().addClass("visible"),n()(e).css("max-height","9999px");var t=n()(e).outerHeight(),i=t>500?"max-height .7s linear 0s, opacity .2s linear .5s":"max-height .3s linear 0s, opacity .2s linear .1s";n()(e).css("max-height","0"),setTimeout((function(){n()(e).css({"max-height":t+"px",transition:i})}),10),setTimeout((function(){n()(e).css({"overflow-y":"initial"})}),700)}(i)}})),n()(".faq__toggler").on("click",(function(e){n()(e.target).parent().click()})),n()(".faq__more").on("click",(function(){n()(".faq__more").hasClass("roll-up")?function(){for(var e=5;e<n()(".faq__item").length;e++)n()(".faq__item:eq("+e+")").removeClass("display show"),n()(".faq__item").removeClass("visible"),n()(".faq__description").attr("style",""),n()(".faq__more .text").text("Ещё вопросы"),n()(".faq__more").removeClass("roll-up");var t=n()(".section_faq").offset().top-150;n()("body, html").animate({scrollTop:t},500)}():function(){for(var e=function(e){var t=n()(".faq__item.display").last().next().addClass("display");setTimeout((function(){n()(t).addClass("show"),n()(".faq__item").last().hasClass("show")&&(n()(".faq__more .text").text("Скрыть вопросы"),n()(".faq__more").addClass("roll-up"))}),100*e)},t=0;t<5;t++)e(t)}()}))})),n()(document).ready((function(){n()("body").hasClass("page-index")&&(new ldBar(".ldBar").set(100,!0),n()("body").addClass("loading"),setTimeout((function(){n()(".loading-container").addClass("hide")}),1200),setTimeout((function(){n()("body").addClass("loaded").css("overflow-y","auto"),n()(".loading-container").css("left","-99999px")}),2e3),setTimeout((function(){n()("body").removeClass("loading loaded"),n()(".loading-container").remove()}),3500))}));var d=i(6);n()(document).ready((function(){var e,t=n()("#phone").closest("form"),i=n()("#phone").closest(".controller"),a=n()("#callbackForm .validator__cross");function r(){n()(i).hasClass("checked")||n()(i).addClass("checked"),n()(i).hasClass("invalid")||n()(i).addClass("invalid"),n()(a).hasClass("bounce-top")||(n()(a).addClass("bounce-top"),setTimeout((function(){n()(a).removeClass("bounce-top")}),1e3))}function l(){var e=n()("#phone").val();""!==e&&(validPhone(e.replace(/\s+|\+/g,""))||r())}var s=document.getElementById("phone");if(s){(e=Object(d.a)(s,{mask:"+{7} 000 000 00 00"})).on("accept",(function(){e.updateValue(),validPhone(e.unmaskedValue)?(n()(i).addClass("valid"),n()(i).removeClass("invalid"),n()(i).addClass("checked")):n()(i).hasClass("checked")&&(n()(i).addClass("invalid"),n()(i).removeClass("valid")),""===e.unmaskedValue&&n()(i).removeClass("checked")}))}n()("#phone").blur((function(){l()})),n()(window).scroll((function(){n()("#phone").is(":focus")&&l()})),n()("#callbackForm").on("submit",(function(a){a.preventDefault();var l=n()("#phone").val(),s=!0;""!==l&&validPhone(l.replace(/\s+|\+/g,""))||(s=!1,r()),s&&(n()(t)[0].reset(),n()(i).removeClass("valid input checked"),e.updateValue(),modalOpen(this))}))})),n()(document).ready((function(){var e,t=n()("#orderForm"),i=n()("#phone").closest(".controller"),a=n()("#orderForm .validator__cross");function r(){n()(i).hasClass("checked")||n()(i).addClass("checked"),n()(i).hasClass("invalid")||n()(i).addClass("invalid"),n()(a).hasClass("bounce-top")||(n()(a).addClass("bounce-top"),setTimeout((function(){n()(a).removeClass("bounce-top")}),1e3))}function l(){var e=n()("#phone").val();""!==e&&(validPhone(e.replace(/\s+|\+/g,""))||r())}var s=document.getElementById("phone");if(s){(e=Object(d.a)(s,{mask:"+{7} 000 000 00 00"})).on("accept",(function(){e.updateValue(),validPhone(e.unmaskedValue)?(n()(i).addClass("checked valid"),n()(i).removeClass("invalid")):n()(i).hasClass("checked")&&(n()(i).addClass("invalid"),n()(i).removeClass("valid")),""===e.unmaskedValue&&n()(i).removeClass("checked")}))}n()("#phone").blur((function(){l()})),n()(window).scroll((function(){n()("#phone").is(":focus")&&l()})),n()("#orderForm").on("submit",(function(a){a.preventDefault();var l=n()("#phone").val(),s=!0;if(""!==l&&validPhone(l.replace(/\s+|\+/g,""))||(s=!1,r()),s){n()("#name").val(),n()("#phone").val(),n()("#message").val();n()(t)[0].reset(),n()(i).removeClass("valid input checked"),e.updateValue(),modalOpen(this)}}))})),n()(document).ready((function(){n()(".feedback__pic").each((function(e,t){var i=n()(t).parent().children(".feedback__msg");n()(t).hover((function(){isDesctop&&n()(i).addClass("hover")}),(function(){isDesctop&&n()(i).removeClass("hover")}))}))})),n()(document).ready((function(){var e=n()(".work__num");if(e.length>0){var t=function(){n()(e).each((function(){var e=n()(window).scrollTop(),t=n()(window).height()/1;n()(this).offset().top-t<e&&(n()(this).hasClass("animation")||n()(this).addClass("animation"))}))};t(),n()(window).scroll((function(){t()}))}})),n()(document).ready((function(){var e=n()(".types__btn");n()(e).each((function(e,t){var i=n()(t).closest(".types__card");n()(t).on("click",(function(){n()(i).hasClass("open")?n()(i).removeClass("open"):(n()(".types__card").removeClass("open"),n()(i).addClass("open"))}))}))})),n()(document).ready((function(){var e=n()(".typical-solutions__slide"),t=n()(".typical-solutions .filter-controller"),i={executionType:"",pixelStep:"",width:"",solutionType:""};function a(t,a){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(r)for(var l in i)i[l]="";else i[t]=a.toString();for(var s=0;s<e.length;s++){var o=n()(e[s]).data("filterProps"),d=!1;for(var c in i)if(""!==i[c]&&i[c]!==o[c]){d=!0;break}d?n()(e[s]).addClass("hidden"):n()(e[s]).removeClass("hidden"),tsSlider.update()}var h=n()('.typical-solutions__slide:not(".hidden")');0===h.length?(n()("#notFilterTsResults").addClass("visible"),n()("#btnTsPrev").addClass("hidden"),n()("#btnTSNext").addClass("hidden")):(n()("#notFilterTsResults").removeClass("visible"),n()("#btnTsPrev").removeClass("hidden"),n()("#btnTSNext").removeClass("hidden"))}if(t.length>0)for(var r=0;r<t.length;r++)n()(t[r]).on("click",(function(e){a(n()(this).data("filterProperty"),n()(this).data("filterValue"))}));n()("#resetTsFilter").on("click",(function(){a(void 0,void 0,!0),function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];if(t.length>0)for(var a=0;a<t.length;a++){var r=n()(t[a]).data("controllerType");switch(r){case"radio-group":n()(t[a]).children(".marker").removeAttr("style");var l=n()(t[a]).children("input");if(l.length>0)for(var s=0;s<l.length;s++)n()(l[s])[0].checked=!1;break;case"custom-select":n()(t[a]).children(".selected").html("&nbsp;"),n()(t[a]).find(".active").removeClass("active")}}}(n()("#executionType"),n()("#pixelStep"),n()("#width"),n()("#solutionType"))}))})),n()(document).ready((function(){var e=n()(".ready-cabins__slide"),t=n()(".ready-cabins .filter-controller"),i={executionType:"",pixelStep:"",width:""};function a(t,a){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(r)for(var l in i)i[l]="";else i[t]=a.toString();for(var s=0;s<e.length;s++){var o=n()(e[s]).data("filterProps"),d=!1;for(var c in i)if(""!==i[c]&&i[c]!==o[c]){d=!0;break}d?n()(e[s]).addClass("hidden"):n()(e[s]).removeClass("hidden"),rcSlider.update()}var h=n()('.ready-cabins__slide:not(".hidden")');0===h.length?(n()("#notRcFilterResults").addClass("visible"),n()("#btnRcPrev").addClass("hidden"),n()("#btnRcNext").addClass("hidden")):(n()("#notRcFilterResults").removeClass("visible"),n()("#btnRcPrev").removeClass("hidden"),n()("#btnRcNext").removeClass("hidden"))}if(t.length>0)for(var r=0;r<t.length;r++)n()(t[r]).on("click",(function(e){a(n()(this).data("filterProperty"),n()(this).data("filterValue"))}));n()("#resetRcFilter").on("click",(function(){a(void 0,void 0,!0),function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];if(t.length>0)for(var a=0;a<t.length;a++){var r=n()(t[a]).data("controllerType");switch(r){case"radio-group":n()(t[a]).children(".marker").removeAttr("style");var l=n()(t[a]).children("input");if(l.length>0)for(var s=0;s<l.length;s++)n()(l[s])[0].checked=!1;break;case"custom-select":n()(t[a]).children(".selected").html("&nbsp;"),n()(t[a]).find(".active").removeClass("active")}}}(n()("#executionType"),n()("#pixelStep"),n()("#width"))}))})),n()(document).ready((function(){var e=document.getElementById("cursor"),t=document.getElementsByClassName("custom-cursor"),i=function(t){e.style.top=t.pageY+"px",e.style.left=t.pageX+"px",e.classList.add("visible")};[].forEach.call(t,(function(t){t.addEventListener("mousemove",i),t.addEventListener("mouseout",(function(){e.classList.remove("visible")}))}))})),n()(document).ready((function(){var e=n()(".gallery-picture"),t=n()("#galleryPicModal"),i=n()("#galleryBtnClose"),a=getScrollWidth()+"px";function r(){n()(t).removeClass("visible"),isDesctop&&(n()("body").removeClass("modal-open").css("paddingRight","0px"),n()("header.header").css({paddingRight:"5vw"}))}function l(e){var i=document.getElementById("galleryPic");i.src=e,i.onload=function(){isDesctop&&(n()("body").addClass("modal-open").css("paddingRight",a),n()("header.header").css({paddingRight:"calc(5vw + "+a+")",transition:"none"})),n()(t).addClass("visible")}}if(e.length>0)for(var s=0;s<e.length;s++)n()(e[s]).on("click",(function(){l(n()(this).data("galleryImgSource"))}));n()(i).on("click",r),n()(t).on("click",(function(e){n()(e.target).hasClass("gallery-modal")&&r()}))})),n()(document).ready((function(){var e=n()(".help-button"),t=n()(".help-modal__close"),i=n()(".label-controll__help > svg"),a=n()(".label-controll"),r=n()(".help-modal");function l(){if(!isDesctop){n()("body").addClass("modal-open"),n()(".typical-solutions .filter").css("zIndex","initial");for(var t=0;t<e.length;t++)n()(e[t]).css("zIndex","initial");for(var i=0;i<a.length;i++)n()(a[i]).css("zIndex","initial")}}function s(){if(!isDesctop){n()("body").removeClass("modal-open"),n()(".typical-solutions .filter").css("zIndex","2");for(var t=0;t<e.length;t++)n()(e[t]).css("zIndex","4");for(var i=0;i<a.length;i++)n()(a[i]).css("zIndex","")}}if(i.length>0)for(var o=0;o<i.length;o++)n()(i[o]).on("click",(function(e){var t=n()(this).closest(".label-controll__help").data("helpModalId"),i=n()("#"+t),a=n()(i).hasClass("visible");if(n()(".help-modal").removeClass("visible"),!a){if(isDesctop){var r=n()(i).width(),s=n()(i).closest(".label-controll__help").offset().left;r>n()(window).width()-s-24&&n()(i).css("left","-"+r+"px")}n()(i).addClass("visible")}l()}));if(t.length>0)for(var d=0;d<t.length;d++)n()(t[d]).on("click",(function(e){e.stopPropagation();var t=n()(this).closest(".help-modal");n()(t).removeClass("visible"),s()}));if(r.length>0)for(var c=0;c<r.length;c++)n()(r[c]).on("click",(function(e){n()(e.target).hasClass("visible")&&(n()(this).removeClass("visible"),s())}))}));i(11),i(13),i(15)}});