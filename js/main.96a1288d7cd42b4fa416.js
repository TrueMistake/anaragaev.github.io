!function(e){function t(t){for(var o,s,r=t[0],l=t[1],c=t[2],u=0,m=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&m.push(a[s][0]),a[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(d&&d(t);m.length;)m.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var l=n[r];0!==a[l]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={0:0},i=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=l;i.push([13,1]),n()}({11:function(e,t,n){var o=n(12);"string"==typeof o&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};n(2)(o,a);o.locals&&(e.exports=o.locals)},12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(3);document.addEventListener("touchmove",(function(e){1!==(e=e.originalEvent||e).scale&&e.preventDefault()}),!1),window.IS_DEBUGGING=!0,window.validatePhone=function(e){return/^(\+7)?(\d{3}?)?[\d]{11}$/.test(e)},window.STATE={connect:"WhatsApp"},STATE=new Proxy(STATE,{set:function(e,t,n){if(e[t]=n,"phone"===t)for(var o=0;o<s.length;o++)s[o].unmaskedValue=n;return"callbackTime"===t&&a()(".callback-time-controller").val(n),"connect"===t&&a()('input[value="'.concat(n,'"]')).prop("checked",!0),IS_DEBUGGING&&setTimeout((function(){return console.log(e)}),100),!0}});var s=[],r={mask:"+{7} ({9}00) 000-00-00",lazy:!0,placeholderChar:"_"};window.checkForms=function(e){var t,n,o,i,s;switch(a()(e).closest("form").data("formType")){case"connectType":t=a()('form[data-form-type="connectType"] [type="submit"]'),n=a()('form[data-form-type="callbackTime"] [type="submit"]'),o=a()('form[data-form-type="setPhoto"] [type="submit"]'),i=validatePhone(STATE.phone),s=void 0!==STATE.connect,i&&s?(t.removeClass("btn_inactive"),n.removeClass("btn_inactive"),o.removeClass("btn_inactive")):(t.addClass("btn_inactive"),n.addClass("btn_inactive"),o.addClass("btn_inactive"));break;case"singlePhone":!function(){var e=a()('form[data-form-type="singlePhone"] [type="submit"]'),t=a()('form[data-form-type="callbackTime"] [type="submit"]'),n=a()('form[data-form-type="setPhoto"] [type="submit"]');validatePhone(STATE.phone)?(e.removeClass("btn_inactive"),t.removeClass("btn_inactive"),n.removeClass("btn_inactive")):(e.addClass("btn_inactive"),t.addClass("btn_inactive"),n.addClass("btn_inactive"))}();break;case"callbackTime":!function(){var e=a()('form[data-form-type="callbackTime"] [type="submit"]'),t=a()('form[data-form-type="connectType"] [type="submit"]'),n=a()('form[data-form-type="setPhoto"] [type="submit"]'),o=validatePhone(STATE.phone);STATE.callbackTime;o?(e.removeClass("btn_inactive"),t.removeClass("btn_inactive"),n.removeClass("btn_inactive")):(e.addClass("btn_inactive"),t.addClass("btn_inactive"),n.addClass("btn_inactive"))}();break;case"setPhoto":!function(){var e=a()('form[data-form-type="setPhoto"] [type="submit"]'),t=a()('form[data-form-type="callbackTime"] [type="submit"]');validatePhone(STATE.phone)?(e.removeClass("btn_inactive"),t.removeClass("btn_inactive")):(e.addClass("btn_inactive"),t.addClass("btn_inactive"))}()}},window.checkPhoneController=function(){var e=a()('[name="phone"]');validatePhone(STATE.phone)?a()(e).addClass("valid"):a()(e).removeClass("valid")},window.checkCallbackTimeController=function(){var e=a()('[name="time"]');STATE.callbackTime?a()(e).addClass("valid"):a()(e).removeClass("valid")},a()(document).ready((function(){a()(".callback-time-controller").on("input",(function(){STATE.callbackTime=a()(this).val(),checkForms(this),checkCallbackTimeController()})),a()('input[name="connect"]').on("input",(function(){STATE[a()(this).attr("name")]=a()(this).val(),checkForms(this)}));var e=document.getElementsByClassName("phone-controller");[].slice.call(e).forEach((function(e,t){s.push(Object(i.a)(e,r)),e.dataset.maskNum=t.toString()})),a()(".phone-controller").focus((function(){var e=a()(this).data("maskNum");s[e].updateOptions({lazy:!1})})).blur((function(){var e=a()(this).data("maskNum");s[e].updateOptions({lazy:!0}),validatePhone(STATE.phone)||(STATE.phone="",delete STATE.phone)})).on("input",(function(){var e=a()(this).data("maskNum");STATE.phone=s[e].unmaskedValue,checkForms(this),checkPhoneController(),a()(".error").removeClass("visible")}))})),a()(document).ready((function(){function e(){a()("#modalHeader").toggleClass("visible")}a()(".modal-header-toggle").toArray().forEach((function(t){return a()(t).click(e)}))})),a()(document).ready((function(){a()("#getHouseBtn").click((function(){var e=a()("#progressBar").offset().top-30;a()("body,html").animate({scrollTop:e},1e3)}))}));var l=n(4);n(5);a()(document).ready((function(){function e(e){var t=a()("#progressBar .progress-bar__step");a()(t).removeClass("active");for(var n=0;n<e;n++)a()(t[n]).addClass("active")}function t(e){return a()(e).closest(".active")}function n(e){return a()(e).removeClass("active"),1e3*parseFloat(a()(e).find(".question__title").css("transition-duration"))}function o(e,t){setTimeout((function(){a()(e).addClass("hidden")}),t)}function i(e,t){setTimeout((function(){var t,n;a()(e).removeClass("hidden"),"#loader"===e&&(t=0,n=setInterval((function(){t>99?window.clearInterval(n):(t++,a()("#progressVal").text(t+"%"))}),33),setTimeout(r,5e3))}),t)}function s(e,t){setTimeout((function(){var t,n;a()(e).addClass("active"),t=a()("#progressBar").offset().top,n=a()(window).width()<768?30:60,a()("body,html").animate({scrollTop:t-n},900)}),t)}function r(){var e=a()("#loader")[0];if(n(e),o(e,400),i("#getContact",400),s("#getContact",500),setTimeout((function(){var e=a()("#progressBar").offset().top,t=a()(window).width()<768?30:60;a()("body,html").animate({scrollTop:e-t},500)}),300),"Кошка"===STATE.animal[1])switch(STATE.count[1]){case"У меня один любимец":c("cat-single",13);break;case"У меня два котика":case"Три и более":c("cat-more",7)}else switch(STATE.size[1]){case"Маленькая собака":c("dog-small",12);break;case"Среднего размера":c("dog-medium",10);break;case"Большая собака":c("dog-large",9)}}function c(e,t){for(var n,o=document.getElementById("sliderHousesWrapper"),i=function(t){var i=document.createElement("div"),s=document.createElement("div"),r=document.createElement("div");i.classList.add("slider__slide"),i.classList.add("swiper-slide"),s.classList.add("slider__image-wrap"),r.classList.add("slider__image"),r.style.backgroundImage='url("/img/slider/'.concat(e,"/pic").concat(t,'.jpg"'),r.addEventListener("click",(function(){var n=t-1;a()("#"+e).find("a")[n].click()})),s.append(r),i.append(s),o.append(i),n&&setTimeout((function(){return SLIDER_RESULT.update()}),100)},s=1;s<=t;n=s++===t)i(s)}a()(".question-controller").toArray().forEach((function(r){a()(r).on("click",(function(r){r.preventDefault();var l,c,d,u,m,p=a()(this).find("input"),f=function(e){return{prop:a()(e).attr("name"),val:a()(e).val(),id:a()(e).data("nextQuestionId"),pos:a()(e).data("nextProgressPosition"),img:a()(e).data("nextBannerImg")}}(p),v=t(p),g=a()(v).find(".question__title").text();a()(p)[0].checked=!0,STATE[f.prop]=[g,f.val],function(e,t){if("#sleepingInBad"===e){var n=a()("#sleepingInBad [data-next-banner-img]");if("Кошка"===STATE.animal[1])n.data("nextBannerImg","renovation-question-cat.jpg");else switch(STATE.size[1]){case"Маленькая собака":n.data("nextBannerImg","renovation-question-small-dog.jpg");break;case"Среднего размера":n.data("nextBannerImg","renovation-question-medium-dog.jpg");break;case"Большая собака":n.data("nextBannerImg","renovation-question-large-dog.jpg")}}a()(e).find(".question__image").css("backgroundImage","url(/img/".concat(t,")"))}(f.id,f.img),l=p,c=f.id,d=f.pos-1,u=a()(c).find(".question__back")[0],m=a()(l).closest(".question").attr("id"),u&&(u.dataset.prevQuestionId=m,u.dataset.prevProgressPosition=d),setTimeout((function(){e(f.pos);var t=n(v);o(v,t),i(f.id,t),s(f.id,t+100)}),1e3)}))})),a()(".question__back").toArray().forEach((function(r){a()(r).on("click",(function(){var r=t(this),l=a()(this).data("prevProgressPosition"),c="#"+a()(this).data("prevQuestionId");a()(c).find("input").prop("checked",!1),a()("label.open-comment").removeClass("open-comment"),e(l);var d=n(r);o(r,d),i(c,d),s(c,d+100)}))})),a()("#dogQuestion3 .toggle").toArray().forEach((function(e){a()(e).on("click",(function(e){e.stopPropagation(),a()(this).closest(".question-controller").toggleClass("open-comment")}))})),a()("#apartmentRenovationStyle .zoom").on("click",(function(e){e.stopPropagation(),console.log(a()(e.target).next()[0].click())})),l.a.bind('[data-fancybox="gallery"]',{Thumbs:!1,Toolbar:!1,closeButton:"inside"});for(var d=["gallery-cat-single","gallery-cat-more","gallery-dog-small","gallery-dog-medium","gallery-dog-large"],u=0;u<d.length;u++)l.a.bind('[data-fancybox="'+d[u]+'"]',{Thumbs:!1,Toolbar:!1,closeButton:"inside"})})),a()(document).ready((function(){function e(){a()("#consultationModalDialog").addClass("invisible"),a()("#consultationModalThanks").addClass("invisible"),a()("body").removeClass("modal-open"),setTimeout((function(){a()("#consultationModal").removeClass("visible"),a()("#consultationModalDialog").removeClass("hidden"),a()("#consultationModalThanks").addClass("hidden")}),300)}a()(".consultation-show-btn").click((function(){a()("#modalHeader").removeClass("visible"),a()("#consultationModal").addClass("visible"),a()("body").addClass("modal-open"),setTimeout((function(){return a()("#consultationModalDialog").removeClass("invisible")}),300)})),a()(".consultation-modal__close").toArray().forEach((function(t){return a()(t).click(e)})),a()(".consultation-modal").click((function(t){a()(t.target).hasClass("consultation-modal")&&e()})),a()("#consultationModal form").submit((function(e){if(e.preventDefault(),!validatePhone(STATE.phone))return!1;var t=Object.assign({},STATE);t.from="Быстрая консультация",t.id="#fastConsultation",STATE.callbackTime||(t.callbackTime="Не указано"),IS_DEBUGGING&&console.log("Данные, отправляемые на сервер:",t);var n=a.a.ajax({method:"post",url:"https://u1430355.isp.regruhosting.ru/temp/send-post.php",data:{json:JSON.stringify(t)},dataType:"json"});n.done((function(e){IS_DEBUGGING&&console.log(e),e.error&&(a()("#consultationModalDialog").addClass("invisible"),setTimeout((function(){a()("#consultationModalDialog").addClass("hidden"),a()("#consultationModalThanks").removeClass("hidden"),setTimeout((function(){return a()("#consultationModalThanks").removeClass("invisible")}),100)}),300))})),n.fail((function(e,t){console.log("Request failed: "+e+" --- "+t)}))}))})),a()(document).ready((function(){a()(".get-contact__form").on("submit",(function(e){e.preventDefault();var t=validatePhone(STATE.phone),n=a()(e.target).find(".error");if(t){var o=Object.assign({},STATE);o.from="Форма захвата контактов",o.id="#getContact",IS_DEBUGGING&&console.log("Данные, отправляемые на сервер:",o);var i=a.a.ajax({method:"post",url:"https://u1430355.isp.regruhosting.ru/temp/send-post.php",data:{json:JSON.stringify(o)},dataType:"json"});i.done((function(e){IS_DEBUGGING&&console.log(e),e.error&&function(){a()("#results").removeClass("hidden").addClass("active"),a()("#getContact").addClass("collapsed");var e=a()("#progressBar").offset().top,t=a()(window).width()<768?30:60;a()("body,html").animate({scrollTop:e-t},900)}()})),i.fail((function(e,t){console.log("Request failed: "+e+" --- "+t)}))}else a()(n).addClass("visible")}))}));var c=n(1),d=n.n(c);n(7);d.a.use([c.Pagination]),a()(document).ready((function(){function e(e){a()(e).addClass("visible"),a()("body").addClass("modal-open")}a()("#goToSliderHouses").click((function(e){e.preventDefault();var t=a()("#slicerHouses").offset().top-20;a()("body,html").animate({scrollTop:t},1e3)})),window.SLIDER_PRODUCTION=new d.a("#sliderProduction .swiper",{slidesPerView:"auto",speed:500,preloadImages:!0,observer:!0,observeParents:!0,observeSlideChildren:!0,pagination:{el:"#sliderProductionPagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{centeredSlides:!0,initialSlide:1}}}),window.SLIDER_RESULT=new d.a("#sliderHouses .swiper",{slidesPerView:"auto",speed:500,preloadImages:!0,observer:!0,observeParents:!0,observeSlideChildren:!0,pagination:{el:"#sliderHousesPagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{centeredSlides:!0,initialSlide:1}}}),a()(window).resize((function(){SLIDER_PRODUCTION.update(),SLIDER_RESULT.update()})),a()("#present form").submit((function(t){t.preventDefault();var n=a()(t.target).find('[type="submit"]'),o=!a()(n).hasClass("btn_inactive");if(!validatePhone(STATE.phone)||!o)return!1;var i=Object.assign({},STATE);i.from="Изменить номер телефона",i.id="#changePhone",IS_DEBUGGING&&console.log("Данные, отправляемые на сервер:",i);var s=a.a.ajax({method:"post",url:"https://u1430355.isp.regruhosting.ru/temp/send-post.php",data:{json:JSON.stringify(i)},dataType:"json"});s.done((function(t){IS_DEBUGGING&&console.log(t),t.error&&(e("#thanksPresentModal"),a()(n).addClass("btn_inactive"))})),s.fail((function(e,t){console.log("Request failed: "+e+" --- "+t)}))})),a()("#checkPhone form").submit((function(t){if(t.preventDefault(),!validatePhone(STATE.phone))return!1;var n=Object.assign({},STATE);n.from="Проверьте номер телефона",n.id="#checkPhone",STATE.callbackTime||(n.callbackTime="Не указано"),IS_DEBUGGING&&console.log("Данные, отправляемые на сервер:",n);var o=a.a.ajax({method:"post",url:"https://u1430355.isp.regruhosting.ru/temp/send-post.php",data:{json:JSON.stringify(n)},dataType:"json"});o.done((function(t){IS_DEBUGGING&&console.log(t),t.error&&e("#thanksCheckPhoneModal")})),o.fail((function(e,t){console.log("Request failed: "+e+" --- "+t)}))})),a()("#setPhoto form").submit((function(t){t.preventDefault();var n=t.target;if(!validatePhone(STATE.phone))return!1;!function(e){var t=a()(e).closest("#setPhoto").find(".results__consultation__direction");a()(e).addClass("loading prefinish"),a()(t).addClass("offset")}(n);var o=Object.assign({},STATE);o.from="Отправьте фото комнаты и питомца",o.id="#sendPhoto";var i=document.getElementById("formSetPhoto"),s=new FormData(i);s.append("json",JSON.stringify(o)),IS_DEBUGGING&&console.log("Данные, отправляемые на сервер:",s);var r=a.a.ajax({method:"post",url:"https://u1430355.isp.regruhosting.ru/temp/send-post.php",contentType:!1,processData:!1,data:s,dataType:"json"});r.done((function(t){IS_DEBUGGING&&console.log(t),t.error&&(a()(n).removeClass("prefinish").addClass("loaded"),setTimeout((function(){return e("#thanksSendPhotos")}),2e3))})),r.fail((function(e,t){console.log("Request failed: "+e+" --- "+t)}))})),a()(".thanks-modal__close").on("click",(function(){a()(this).closest(".visible").removeClass("visible"),a()("body").removeClass("modal-open")})),a()(".thanks-modal").on("click",(function(){a()(this).hasClass("visible")&&(a()(this).removeClass("visible"),a()("body").removeClass("modal-open"))}));var t=1;a()("#addFile").click((function(){var e=document.createElement("label"),n=document.createElement("input"),o=document.createElement("span");n.classList.add("unvisible"),n.type="file",n.accept="image/png, image/jpg, image/jpeg, image/gif, video/avi, video/mp4, video/quicktime",n.name="file-"+t++,o.classList.add("delete-file"),e.append(n),e.append(o),e.click(),n.addEventListener("change",(function(t){var n=t.target.files[0],o=n.name.split("."),i=o[o.length-1],s=n.type.split("/")[0],r=URL.createObjectURL(n);"png"!==i&&"jpg"!==i&&"jpeg"!==i&&"gif"!==i&&"avi"!==i&&"mp4"!==i&&"mov"!==i||("image"===s?(e.style.backgroundImage="url(".concat(r,")"),e.style.backgroundSize="cover"):(e.style.backgroundImage="url(/img/icon-video.svg)",e.style.backgroundSize="50%"),a()("#filePreviews")[0].append(e),checkForms(e))})),o.addEventListener("click",(function(e){e.preventDefault(),checkForms(a()("#filePreviews")),setTimeout((function(){return a()(e.target).closest("label").remove()}),100)}))}))})),a()(document).ready((function(){}));n(9),n(11)}});