"use strict";(self["webpackChunkquiz"]=self["webpackChunkquiz"]||[]).push([[387],{7982:function(e,t,a){a.d(t,{z:function(){return u}});var n=a(3396),l=a(9281),o=a(8983);function u(){const e=(0,o.L)();return t=>{e.refreshToken?e.token?t():(0,n.YP)((()=>e.token),(e=>e?t():l.Z.push({name:"home"}))):l.Z.push({name:"home"})}}},2387:function(e,t,a){a.r(t),a.d(t,{default:function(){return K}});var n=a(3396),l=a(9242),o=a(4870),u=a(952);
/**
 * Vue 3 Carousel 0.1.40
 * (c) 2022
 * @license MIT
 */
const i={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0};function s(e,t){let a;return function(...n){a&&clearTimeout(a),a=setTimeout((()=>{e(...n),a=null}),t)}}function r(e,t){let a;return function(...n){const l=this;a||(e.apply(l,n),a=!0,setTimeout((()=>a=!1),t))}}function c(e){var t,a,n;return e?"CarouselSlide"===(null===(a=null===(t=e[0])||void 0===t?void 0:t.type)||void 0===a?void 0:a.name)?e:(null===(n=e[0])||void 0===n?void 0:n.children)||[]:[]}function d(e,t){if(e.wrapAround)return t-1;switch(e.snapAlign){case"start":return t-e.itemsToShow;case"end":return t-1;case"center":case"center-odd":return t-Math.ceil(e.itemsToShow/2);case"center-even":return t-Math.ceil(e.itemsToShow/2);default:return 0}}function v(e){if(e.wrapAround)return 0;switch(e.snapAlign){case"start":return 0;case"end":return e.itemsToShow-1;case"center":case"center-odd":return Math.floor((e.itemsToShow-1)/2);case"center-even":return Math.floor((e.itemsToShow-2)/2);default:return 0}}function p(e,t,a,n){return e.wrapAround?t:Math.min(Math.max(t,n),a)}function m({slidesBuffer:e,currentSlide:t,snapAlign:a,itemsToShow:n,wrapAround:l,slidesCount:o}){let u=e.indexOf(t);if(-1===u&&(u=e.indexOf(Math.ceil(t))),"center"===a||"center-odd"===a?u-=(n-1)/2:"center-even"===a?u-=(n-2)/2:"end"===a&&(u-=n-1),!l){const e=o-n,t=0;u=Math.max(Math.min(u,e),t)}return u}var h=(0,n.aZ)({name:"Carousel",props:{itemsToShow:{default:i.itemsToShow,type:Number},itemsToScroll:{default:i.itemsToScroll,type:Number},wrapAround:{default:i.wrapAround,type:Boolean},snapAlign:{default:i.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:i.transition,type:Number},breakpoints:{default:i.breakpoints,type:Object},autoplay:{default:i.autoplay,type:Number},pauseAutoplayOnHover:{default:i.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:i.mouseDrag,type:Boolean},touchDrag:{default:i.touchDrag,type:Boolean},dir:{default:i.dir,validator(e){return["rtl","ltr"].includes(e)}},settings:{default(){return{}},type:Object}},setup(e,{slots:t,emit:a,expose:l}){var u;const h=(0,o.iH)(null),f=(0,o.iH)([]),w=(0,o.iH)([]),g=(0,o.iH)(0),y=(0,o.iH)(1),b=(0,o.iH)(null),S=(0,o.iH)(null);let _=(0,o.iH)({}),x=Object.assign({},i);const A=(0,o.qj)(Object.assign({},x)),T=(0,o.iH)(null!==(u=A.modelValue)&&void 0!==u?u:0),H=(0,o.iH)(0),k=(0,o.iH)(0),q=(0,o.iH)(0),C=(0,o.iH)(0);function M(){const t=Object.assign(Object.assign({},e),e.settings);_=(0,o.iH)(Object.assign({},t.breakpoints)),x=Object.assign(Object.assign({},t),{settings:void 0,breakpoints:void 0}),j(x)}function z(){const e=Object.keys(_.value).map((e=>Number(e))).sort(((e,t)=>+t-+e));let t=Object.assign({},x);e.some((e=>{const a=window.matchMedia(`(min-width: ${e}px)`).matches;return!!a&&(t=Object.assign(Object.assign({},t),_.value[e]),!0)})),j(t)}function j(e){for(let t in e)A[t]=e[t]}(0,n.JJ)("config",A),(0,n.JJ)("slidesBuffer",w),(0,n.JJ)("slidesCount",y),(0,n.JJ)("currentSlide",T),(0,n.JJ)("maxSlide",q),(0,n.JJ)("minSlide",C);const O=s((()=>{_.value&&(z(),D()),L()}),16);function L(){if(!h.value)return;const e=h.value.getBoundingClientRect();g.value=e.width/A.itemsToShow}function D(){y.value=Math.max(f.value.length,1),y.value<=0||(k.value=Math.ceil((y.value-1)/2),q.value=d(A,y.value),C.value=v(A),T.value=p(A,T.value,q.value,C.value))}function B(){const e=[...Array(y.value).keys()],t=A.wrapAround&&A.itemsToShow+1<=y.value;if(t){const t=1!==A.itemsToShow?Math.round((y.value-A.itemsToShow)/2):0;let a=t-T.value;if("end"===A.snapAlign?a+=Math.floor(A.itemsToShow-1):"center"!==A.snapAlign&&"center-odd"!==A.snapAlign||a++,a<0)for(let n=a;n<0;n++)e.push(Number(e.shift()));else for(let n=0;n<a;n++)e.unshift(Number(e.pop()))}w.value=e}(0,n.bv)((()=>{_.value&&(z(),D()),(0,n.Y3)((()=>setTimeout(L,16))),A.autoplay&&A.autoplay>0&&X(),window.addEventListener("resize",O,{passive:!0})})),(0,n.Ah)((()=>{S.value&&clearTimeout(S.value),F(!1)}));let N=!1;const J={x:0,y:0},V={x:0,y:0},U=(0,o.qj)({x:0,y:0}),W=(0,o.iH)(!1),E=(0,o.iH)(!1),Y=()=>{E.value=!0},$=()=>{E.value=!1};function R(e){N="touchstart"===e.type,!N&&0!==e.button||G.value||(W.value=!0,J.x=N?e.touches[0].clientX:e.clientX,J.y=N?e.touches[0].clientY:e.clientY,document.addEventListener(N?"touchmove":"mousemove",Z,!0),document.addEventListener(N?"touchend":"mouseup",P,!0))}const Z=r((e=>{V.x=N?e.touches[0].clientX:e.clientX,V.y=N?e.touches[0].clientY:e.clientY;const t=V.x-J.x,a=V.y-J.y;U.y=a,U.x=t}),16);function P(){W.value=!1;const e="rtl"===A.dir?-1:1,t=.4*Math.sign(U.x),a=Math.round(U.x/g.value+t)*e;let n=p(A,T.value-a,q.value,C.value);if(a){const e=t=>{t.stopPropagation(),window.removeEventListener("click",e,!0)};window.addEventListener("click",e,!0)}I(n),U.x=0,U.y=0,document.removeEventListener(N?"touchmove":"mousemove",Z,!0),document.removeEventListener(N?"touchend":"mouseup",P,!0)}function X(){b.value=setInterval((()=>{A.pauseAutoplayOnHover&&E.value||K()}),A.autoplay)}function F(e=!0){b.value&&(clearInterval(b.value),e&&X())}const G=(0,o.iH)(!1);function I(e,t=!1){if(F(),T.value===e||G.value)return;const n=y.value-1;return e>n?I(e-y.value):e<0?I(e+y.value):(G.value=!0,H.value=T.value,T.value=e,t||a("update:modelValue",T.value),void(S.value=setTimeout((()=>{A.wrapAround&&B(),G.value=!1}),A.transition)))}function K(){let e=T.value+A.itemsToScroll;A.wrapAround||(e=Math.min(e,q.value)),I(e)}function Q(){let e=T.value-A.itemsToScroll;A.wrapAround||(e=Math.max(e,C.value)),I(e)}const ee={slideTo:I,next:K,prev:Q};(0,n.JJ)("nav",ee);const te=(0,n.Fl)((()=>m({slidesBuffer:w.value,itemsToShow:A.itemsToShow,snapAlign:A.snapAlign,wrapAround:Boolean(A.wrapAround),currentSlide:T.value,slidesCount:y.value})));(0,n.JJ)("slidesToScroll",te);const ae=(0,n.Fl)((()=>{const e="rtl"===A.dir?-1:1,t=te.value*g.value*e;return{transform:`translateX(${U.x-t}px)`,transition:`${G.value?A.transition:0}ms`}}));function ne(){M()}function le(){M(),z(),D(),B(),L()}function oe(){D(),B()}(0,n.YP)((()=>Object.values(e)),le),ne(),(0,n.m0)((()=>{const t=y.value!==f.value.length,a=void 0!==e.modelValue&&T.value!==e.modelValue;a&&I(Number(e.modelValue),!0),t&&oe()}));const ue={config:A,slidesBuffer:w,slidesCount:y,slideWidth:g,currentSlide:T,maxSlide:q,minSlide:C,middleSlide:k};l({updateBreakpointsConfigs:z,updateSlidesData:D,updateSlideWidth:L,updateSlidesBuffer:B,initCarousel:ne,restartCarousel:le,updateCarousel:oe,slideTo:I,next:K,prev:Q,nav:ee,data:ue});const ie=t.default||t.slides,se=t.addons,re=(0,o.qj)(ue);return()=>{const e=c(null===ie||void 0===ie?void 0:ie(re)),t=(null===se||void 0===se?void 0:se(re))||[];f.value=e,e.forEach(((e,t)=>e.props.index=t));const a=(0,n.h)("ol",{class:"carousel__track",style:ae.value,onMousedown:A.mouseDrag?R:null,onTouchstart:A.touchDrag?R:null},e),l=(0,n.h)("div",{class:"carousel__viewport"},a);return(0,n.h)("section",{ref:h,class:{carousel:!0,"carousel--rtl":"rtl"===A.dir},dir:A.dir,"aria-label":"Gallery",onMouseenter:Y,onMouseleave:$},[l,t])}}});const f={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},w=e=>{const t=e.name;if(!t||"string"!==typeof t)return;const a=f[t],l=(0,n.h)("path",{d:a}),o=e.title||t,u=(0,n.h)("title",null,t);return(0,n.h)("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img",ariaLabel:o},[u,l])};w.props={name:String,title:String};const g=(e,{slots:t,attrs:a})=>{const{next:l,prev:u}=t,s=(0,n.f3)("config",(0,o.qj)(Object.assign({},i))),r=(0,n.f3)("maxSlide",(0,o.iH)(1)),c=(0,n.f3)("minSlide",(0,o.iH)(1)),d=(0,n.f3)("currentSlide",(0,o.iH)(1)),v=(0,n.f3)("nav",{}),p="rtl"===s.dir,m=(0,n.h)("button",{type:"button",class:["carousel__prev",!s.wrapAround&&d.value<=c.value&&"carousel__prev--in-active",null===a||void 0===a?void 0:a.class],"aria-label":"Navigate to previous slide",onClick:v.prev},(null===u||void 0===u?void 0:u())||(0,n.h)(w,{name:p?"arrowRight":"arrowLeft"})),h=(0,n.h)("button",{type:"button",class:["carousel__next",!s.wrapAround&&d.value>=r.value&&"carousel__next--in-active",null===a||void 0===a?void 0:a.class],"aria-label":"Navigate to next slide",onClick:v.next},(null===l||void 0===l?void 0:l())||(0,n.h)(w,{name:p?"arrowLeft":"arrowRight"}));return[m,h]};var y=(0,n.aZ)({name:"CarouselSlide",props:{index:{type:Number,default:1}},setup(e,{slots:t}){const a=(0,n.f3)("config",(0,o.qj)(Object.assign({},i))),l=(0,n.f3)("slidesBuffer",(0,o.iH)([])),u=(0,n.f3)("currentSlide",(0,o.iH)(0)),s=(0,n.f3)("slidesToScroll",(0,o.iH)(0)),r=(0,o.iH)(e.index);function c(){r.value=l.value.indexOf(e.index)}a.wrapAround&&(c(),(0,n.YP)(l,c));const d=(0,n.Fl)((()=>{const e=a.itemsToShow,t=1/e*100+"%";return{width:t,order:r.value.toString()}})),v=()=>e.index===u.value,p=()=>{const t=Math.ceil(s.value),n=Math.floor(s.value+a.itemsToShow),o=l.value.slice(t,n);return o.includes(e.index)},m=()=>e.index===l.value[Math.ceil(s.value)-1],h=()=>e.index===l.value[Math.floor(s.value+a.itemsToShow)];return()=>{var e;return(0,n.h)("li",{style:d.value,class:{carousel__slide:!0,"carousel__slide--active":v(),"carousel__slide--visible":p(),"carousel__slide--prev":m(),"carousel__slide--next":h()}},null===(e=t.default)||void 0===e?void 0:e.call(t))}}});const b=()=>{const e=(0,n.f3)("maxSlide",(0,o.iH)(1)),t=(0,n.f3)("minSlide",(0,o.iH)(1)),a=(0,n.f3)("currentSlide",(0,o.iH)(1)),l=(0,n.f3)("nav",{});function u(e){l.slideTo(e)}const i=n=>{const l=a.value;return l===n||l>e.value&&n>=e.value||l<t.value&&n<=t.value},s=[];for(let o=t.value;o<e.value+1;o++){const e=(0,n.h)("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":i(o)},"aria-label":`Navigate to slide ${o+1}`,onClick:()=>u(o)}),t=(0,n.h)("li",{class:"carousel__pagination-item",key:o},e);s.push(t)}return(0,n.h)("ol",{class:"carousel__pagination"},s)};var S=a(6265),_=a.n(S),x=a(8983);const A={class:"custom-image-upload"},T={key:0,class:"image-holder-description"},H=(0,n._)("p",{class:"plus"},"+",-1),k=(0,n._)("p",{class:"help"},"Add an image here",-1),q=[H,k],C={key:1,id:"preview"},M=["src"];var z={props:{url:String},emits:["change"],setup(e,{emit:t}){const a=e,l=(0,x.L)(),u=(0,o.iH)(a.url);(0,n.YP)((()=>a.url),(e=>{u.value=e}));const i=async e=>{const a=e.target.files[0];let n=new FormData;n.append("image",a);const o=await _().post("https://quizer.drewdru.com/api/v1/uploads/",n,{headers:{"Content-Type":"multipart/form-data",authorization:`Bearer ${l.token}`}});u.value=`https://quizer.drewdru.com${o.data.data.url}`,t("change",u.value)};return(e,t)=>((0,n.wg)(),(0,n.iD)("label",A,[(0,n._)("input",{placeholder:"quiz image",type:"file",onChange:i},null,32),u.value?((0,n.wg)(),(0,n.iD)("div",C,[(0,n._)("img",{src:u.value},null,8,M)])):((0,n.wg)(),(0,n.iD)("div",T,q))]))}};const j=z;var O,L=j,D=a(678),B=a(7982);(function(e){e["ANSWER"]="answer",e["WRONG"]="wrong",e["RIGHT"]="right"})(O||(O={}));const N={class:"quiz-maker"},J=(0,n._)("h1",{class:"card-type"},"Preview Card",-1),V={class:"name-holder"},U={class:"carousel-wrapper"},W=(0,n._)("h1",{class:"card-type"},"Questions Cards",-1),E={class:"add-button-wrapper"},Y=(0,n._)("label",null,"Question",-1),$=["onUpdate:modelValue"],R=(0,n._)("label",null,"Answers",-1),Z={class:"answer-input-group"},P=["name","value","onUpdate:modelValue"],X=["onUpdate:modelValue"],F=["onClick"];var G=(0,n.aZ)({setup(e){const t=(0,x.L)(),a=(0,B.z)(),i=(0,D.yj)(),s=(0,o.iH)(null),r=(0,o.iH)({questions:[]});(0,n.bv)((()=>{i.params.id&&a(c)}));const c=async()=>{try{const e=await _().get(`https://quizer.drewdru.com/api/v1/quiz/${i.params.id}`);r.value=e.data.data}catch(e){console.log(e)}},d=()=>{r.value.questions.push({question:"",answers:[{text:"",class:O.ANSWER}],correctAnswer:0}),setTimeout((()=>{s.value.slideTo(r.value.questions.length-1)}),0)},v=async()=>{if(i.params.id)await p();else try{await _().post("https://quizer.drewdru.com/api/v1/quiz",r.value,{headers:{authorization:`Bearer ${t.token}`}})}catch(e){console.log(e)}},p=async()=>{try{await _().put(`https://quizer.drewdru.com/api/v1/quiz/${i.params.id}`,r.value,{headers:{authorization:`Bearer ${t.token}`}})}catch(e){console.log(e)}};return(e,t)=>((0,n.wg)(),(0,n.iD)("div",N,[J,(0,n.Wm)(u.Z,null,{default:(0,n.w5)((()=>[(0,n.Wm)(L,{url:r.value.image,onChange:t[0]||(t[0]=e=>r.value.image=e)},null,8,["url"]),(0,n._)("div",V,[(0,n.wy)((0,n._)("input",{class:"main-text",placeholder:"quiz name","onUpdate:modelValue":t[1]||(t[1]=e=>r.value.name=e)},null,512),[[l.nr,r.value.name]])]),(0,n.wy)((0,n._)("textarea",{placeholder:"Description...","onUpdate:modelValue":t[2]||(t[2]=e=>r.value.description=e)},null,512),[[l.nr,r.value.description]])])),_:1}),(0,n._)("div",U,[W,(0,n._)("div",E,[(0,n._)("button",{class:"quiz-button",onClick:t[3]||(t[3]=e=>d())},"Add question")]),((0,n.wg)(),(0,n.j4)((0,o.SU)(h),{"items-to-show":1,key:r.value.questions.length,ref_key:"questionsCarousel",ref:s},{addons:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(g)),(0,n.Wm)((0,o.SU)(b))])),default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.value.questions,((e,t)=>((0,n.wg)(),(0,n.j4)((0,o.SU)(y),{key:e},{default:(0,n.w5)((()=>[(0,n.Wm)(u.Z,null,{default:(0,n.w5)((()=>[(0,n.Wm)(L,{url:e.image,onChange:t=>e.image=t},null,8,["url","onChange"]),Y,(0,n.wy)((0,n._)("input",{class:"main-text","onUpdate:modelValue":t=>e.question=t},null,8,$),[[l.nr,e.question]]),R,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.answers,((a,o)=>((0,n.wg)(),(0,n.iD)("div",{key:o,class:"answers"},[(0,n._)("div",Z,[(0,n.wy)((0,n._)("input",{type:"radio",name:`question-${t}-correctAnswer`,value:o,"onUpdate:modelValue":t=>e.correctAnswer=t},null,8,P),[[l.G2,e.correctAnswer]]),(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":e=>a.text=e},null,8,X),[[l.nr,a.text]])])])))),128)),(0,n._)("button",{onClick:t=>e.answers?.push({text:"",class:(0,o.SU)(O).ANSWER}),class:"quiz-button",id:"add-answer-button"}," Add answer ",8,F)])),_:2},1024)])),_:2},1024)))),128))])),_:1}))]),(0,n._)("button",{id:"save-button",class:"quiz-button",onClick:v},"Save")]))}});const I=G;var K=I}}]);
//# sourceMappingURL=387.98caef5a.js.map