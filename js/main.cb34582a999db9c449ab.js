!function(t){function e(e){for(var i,a,c=e[0],l=e[1],u=e[2],f=0,h=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&h.push(r[a][0]),r[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);for(s&&s(e);h.length;)h.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={0:0},o=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var s=l;o.push([1,1]),n()}([,function(t,e,n){"use strict";n.r(e);n(2),n(4),n(6),n(8)},function(t,e,n){(function(t){function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var n=new(function(){function n(t,e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.input=document.getElementById(t),this.list=document.getElementById(e),this.url=i}var i,r,o;return i=n,(r=[{key:"createList",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t.getJSON(this.url).done((function(t){return e.filterList(t,n)})).fail((function(){console.log(new Error("Error path or date of the JSON file!"))}))}},{key:"filterList",value:function(t,e){var n=this,i=t.filter((function(t){var n=t.name.toLowerCase(),i=e.toLowerCase();return-1!==n.indexOf(i)}));this.list.innerHTML=i.map((function(t){return'<li class="input-list__item" id='.concat(t.id,">\n            ").concat(n.highlightMatch(t.name,e),"\n          </li>")})).join("")}},{key:"addListeners",value:function(t){var e=this;this.input.addEventListener("input",(function(){t.createList(e.input.value.trim())})),this.list.addEventListener("click",(function(t){"li"===t.target.nodeName.toLowerCase()&&(e.input.value=t.target.innerText)})),this.list.addEventListener("mouseover",(function(t){e.cleanActiveItem(e.list.getElementsByTagName("li"))})),document.body.addEventListener("keydown",(function(t){document.activeElement===e.input&&("ArrowUp"===t.code?e.changeActiveItem(-1):"ArrowDown"===t.code?e.changeActiveItem(1):"Enter"===t.code&&e.changeActiveItem(0))}))}},{key:"paintItem",value:function(t,e){[].forEach.call(e,(function(e,n){n===t&&e.classList.add("active")}))}},{key:"getActiveItem",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0,n=[].findIndex.call(e,(function(t,e){return t.classList.contains("active")}));return n=-1!==n?n+t:n}},{key:"cleanActiveItem",value:function(t){[].forEach.call(t,(function(t,e){t.classList.remove("active")}))}},{key:"changeActiveItem",value:function(t){var e=this.list.getElementsByTagName("li"),n=this.getActiveItem(t,e);switch(this.cleanActiveItem(e),t){case-1:-1===n?this.paintItem(--e.length,e):this.paintItem(n,e);break;case 1:-1===n||n===e.length?this.paintItem(0,e):this.paintItem(n,e);break;case 0:this.input.value=e[n].innerText,this.input.blur()}}},{key:"highlightMatch",value:function(t,e){if(!e)return t;var n=t.toLowerCase().indexOf(e.toLowerCase()),i=t.slice(0,n),r=t.slice(n,n+e.length),o=t.slice(n+e.length);return"".concat(i,"<b>").concat(r,"</b>").concat(o)}}])&&e(i.prototype,r),o&&e(i,o),n}())("datalist-input","datalist-ul","fonts.json");n.createList(),n.addListeners(n)}).call(this,n(3))},,,,,,function(t,e,n){var i=n(9);"string"==typeof i&&(i=[[t.i,i,""]]);var r={insert:"head",singleton:!1};n(0)(i,r);i.locals&&(t.exports=i.locals)},function(t,e,n){}]);