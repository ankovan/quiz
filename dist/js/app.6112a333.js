(function(){"use strict";var e={8983:function(e,t,a){a.d(t,{L:function(){return s}});var r=a(7139),n=a(6265),o=a.n(n);const s=(0,r.Q_)("user",{state:()=>({role:"user",gender:"other",isPremium:!1,email:"",username:"",createdAt:"",updatedAt:"",id:"",hasPassword:!0,token:"",refreshToken:window.localStorage.getItem("refreshToken")||"",avatar:""}),actions:{async signup(e,t,a){const r=await o().post("https://quizer.drewdru.com/api/v1/auth/signup",{email:e,password:t,username:a});this.avatar=r.data.data.user.avatar,this.role=r.data.data.user.role,this.gender=r.data.data.user.gender,this.isPremium=r.data.data.user.isPremium,this.email=r.data.data.user.email,this.username=r.data.data.user.username,this.createdAt=r.data.data.user.createdAt,this.updatedAt=r.data.data.user.updatedAt,this.id=r.data.data.user.id,this.hasPassword=r.data.data.user.hasPassword,this.token=r.data.data.token,this.refreshToken=r.data.data.refreshToken,window.localStorage.setItem("refreshToken",this.refreshToken||"")},async signin(e,t){const a=await o().post("https://quizer.drewdru.com/api/v1/auth/login",{email:e,password:t});this.avatar=a.data.data.user.avatar,this.role=a.data.data.user.role,this.gender=a.data.data.user.gender,this.isPremium=a.data.data.user.isPremium,this.email=a.data.data.user.email,this.username=a.data.data.user.username,this.createdAt=a.data.data.user.createdAt,this.updatedAt=a.data.data.user.updatedAt,this.id=a.data.data.user.id,this.hasPassword=a.data.data.user.hasPassword,this.token=a.data.data.token,this.refreshToken=a.data.data.refreshToken,window.localStorage.setItem("refreshToken",this.refreshToken||"")},async init(){const e=window.localStorage.getItem("refreshToken")||"";if(""!==e){const t=await o().post("https://quizer.drewdru.com/api/v1/auth/refresh-token",{refreshToken:e});this.avatar=t.data.data.user.avatar,this.role=t.data.data.user.role,this.gender=t.data.data.user.gender,this.isPremium=t.data.data.user.isPremium,this.email=t.data.data.user.email,this.username=t.data.data.user.username,this.createdAt=t.data.data.user.createdAt,this.updatedAt=t.data.data.user.updatedAt,this.id=t.data.data.user.id,this.hasPassword=t.data.data.user.hasPassword,this.token=t.data.data.token,this.refreshToken=t.data.data.refreshToken,window.localStorage.setItem("refreshToken",this.refreshToken||"")}},async logout(){window.localStorage.removeItem("refreshToken"),this.avatar="",this.role="user",this.gender="other",this.isPremium=!1,this.email="",this.username="",this.createdAt="",this.updatedAt="",this.id="",this.hasPassword=!0,this.token="",this.refreshToken=""}}})},2589:function(e,t,a){var r=a(9242),n=a(3396),o=a(4870),s=a(2268),i=a(678),u=a(8983);const l={class:"user-menu"},d={class:"sign-up-button"},c={class:"user-avatar"},m=["src"],h={key:1,alt:"cat",src:"/image/cat.jpg"},f={class:"menu-options"},v=(0,n._)("i",{class:"fa-solid fa-right-to-bracket icon"},null,-1),p=[v],g={class:"modal-content"},w={class:"tabs"},k={class:"tab-menu"},y={key:0,class:"tab"},b={class:"form-control"},_=(0,n._)("label",{for:"username"},"Username:",-1),q={class:"form-control"},C=(0,n._)("label",{for:"email"},"Email:",-1),z={class:"form-control"},P=(0,n._)("label",{for:"password"},"Password:",-1),T={class:"form-control"},A=(0,n._)("label",{for:"confirm-password"},"Confirm password:",-1),S={key:0,class:"alert"},D={key:1,class:"alert"},H={class:"form-button-wrapper"},O={key:1,class:"tab"},j={class:"form-control"},U=(0,n._)("label",{for:"email"},"Email:",-1),E={class:"form-control"},x=(0,n._)("label",{for:"password"},"Password:",-1),I={key:0,class:"alert"},L={class:"form-button-wrapper"};var M={setup(e){const t=(0,o.iH)(!1),a=(0,o.iH)("signup"),i=(0,o.iH)(""),v=(0,o.iH)(""),M=(0,o.iH)(""),N=(0,o.iH)(""),K=(0,u.L)(),B=(0,o.iH)(""),V=(0,o.iH)(null),W=async()=>{if(M.value===N.value){try{await K.signup(v.value,M.value,i.value)}catch(e){console.error(e),B.value=e.response.data.error}""!=K.email&&(t.value=!1)}else B.value="Password and comfirm password are not the same."},F=async()=>{try{await K.signin(v.value,M.value)}catch(e){console.error(e),B.value=e.response.data.error}""!=K.email&&(t.value=!1)},Y=async()=>{try{await K.logout()}catch(e){console.error(e)}},Z=()=>{t.value=!1,Q()},$=e=>{e.target.removeAttribute("open")},Q=()=>{v.value="",M.value="",N.value="",B.value=""},G=e=>{a.value=e,Q()};return(e,u)=>((0,n.wg)(),(0,n.iD)("div",l,[""!=(0,o.SU)(K).refreshToken?((0,n.wg)(),(0,n.iD)("details",{key:0,onMouseleave:$,ref_key:"menu",ref:V},[(0,n._)("summary",d,[(0,n._)("div",c,[(0,o.SU)(K).avatar?((0,n.wg)(),(0,n.iD)("img",{key:0,alt:"cat",src:(0,o.SU)(K).avatar},null,8,m)):((0,n.wg)(),(0,n.iD)("img",h))]),(0,n._)("div",null,(0,s.zw)((0,o.SU)(K).username),1)]),(0,n._)("div",f,[(0,n._)("div",{class:"options-item",onClick:u[0]||(u[0]=e=>Y())},"Log out"),(0,n._)("div",{class:"options-item",onClick:u[1]||(u[1]=t=>e.$router.push("/quizmaker"))}," Make a quiz "),(0,n._)("div",{class:"options-item",onClick:u[2]||(u[2]=t=>e.$router.push("/myquizes"))}," My quizes ")])],544)):((0,n.wg)(),(0,n.iD)("button",{key:1,onClick:u[3]||(u[3]=e=>t.value=!0),class:"sign-up-button"},p)),t.value?((0,n.wg)(),(0,n.iD)("div",{key:2,onClick:u[15]||(u[15]=(0,r.iM)((e=>t.value=!1),["self"])),class:"modal"},[(0,n._)("div",g,[(0,n._)("div",w,[(0,n._)("div",k,[(0,n._)("button",{class:(0,s.C_)([{active:"signup"==a.value},"tab-main"]),onClick:u[4]||(u[4]=e=>G("signup"))}," Sign up ",2),(0,n._)("button",{class:(0,s.C_)([{active:"signin"==a.value},"tab-main"]),onClick:u[5]||(u[5]=e=>G("signin"))}," Sign in ",2)]),"signup"===a.value?((0,n.wg)(),(0,n.iD)("div",y,[(0,n._)("div",b,[_,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":u[6]||(u[6]=e=>i.value=e),type:"text",id:"username",required:"",name:"username"},null,512),[[r.nr,i.value]])]),(0,n._)("div",q,[C,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":u[7]||(u[7]=e=>v.value=e),type:"text",id:"email",required:"",name:"email"},null,512),[[r.nr,v.value]])]),(0,n._)("div",z,[P,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":u[8]||(u[8]=e=>M.value=e),type:"password",id:"password",name:"password",minlength:"4",required:""},null,512),[[r.nr,M.value]])]),(0,n._)("div",T,[A,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":u[9]||(u[9]=e=>N.value=e),type:"password",id:"confirm-password",name:"confirm-password",minlength:"4",required:""},null,512),[[r.nr,N.value]])]),B.value?((0,n.wg)(),(0,n.iD)("div",S,(0,s.zw)(B.value),1)):(0,n.kq)("",!0),B.value?((0,n.wg)(),(0,n.iD)("div",D,[(0,n.Uk)((0,s.zw)(B.value.message)+" ",1),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(B.value.errors,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e})))),128))])):(0,n.kq)("",!0),(0,n._)("div",H,[(0,n._)("button",{onClick:u[10]||(u[10]=e=>W()),class:"form-button"},"OK"),(0,n._)("button",{onClick:u[11]||(u[11]=e=>Z()),class:"form-button wrong"}," Cancel ")])])):(0,n.kq)("",!0),"signin"===a.value?((0,n.wg)(),(0,n.iD)("div",O,[(0,n._)("div",j,[U,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":u[12]||(u[12]=e=>v.value=e),type:"text",id:"email",name:"email",required:""},null,512),[[r.nr,v.value]])]),(0,n._)("div",E,[x,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":u[13]||(u[13]=e=>M.value=e),type:"password",id:"password",name:"password",required:""},null,512),[[r.nr,M.value]])]),B.value?((0,n.wg)(),(0,n.iD)("div",I,[(0,n.Uk)((0,s.zw)(B.value.message)+" ",1),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(B.value.errors,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e})))),128))])):(0,n.kq)("",!0),(0,n._)("div",L,[(0,n._)("button",{onClick:F,class:"form-button"},"OK"),(0,n._)("button",{onClick:u[14]||(u[14]=e=>Z()),class:"form-button wrong"}," Cancel ")])])):(0,n.kq)("",!0)])])])):(0,n.kq)("",!0)]))}};const N=M;var K=N,B={setup(e){(0,n.wF)((async()=>{const e=(0,u.L)();try{await e.init()}catch(t){console.error(t)}}));const t=(0,n.Fl)((()=>{const e=(0,i.yj)();let t=e.path.split("/");t.shift();let a=t.reduce(((e,t,a)=>(t&&e.push({path:t,to:e[a-1]?"/"+e[a-1].path+"/"+t:"/"+t}),e)),[]);return[{path:"home",to:"/"},...a]}));return(e,a)=>{const r=(0,n.up)("router-link"),i=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("nav",null,[(0,n._)("div",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,o.SU)(t),(e=>((0,n.wg)(),(0,n.j4)(r,{key:e,to:e.to},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(e.path)+" / ",1)])),_:2},1032,["to"])))),128))]),(0,n.Wm)(K)]),(0,n.Wm)(i)],64)}}};const V=B;var W=V,F=a(9281),Y=a(8125),Z=a(7749),$=a(8321),Q=a(2274),G=a(6265),R=a.n(G),J=a(6423),X=a(7139);const ee=(0,X.WB)();Y.vI.add($.mRB,Q.NCV),Y.vz.watch();const te=(0,r.ri)(W).use(ee).use(F.Z);te.component("font-awesome-icon",Z.GN),te.use(J.Z,R()),te.mount("#app")},9281:function(e,t,a){a.d(t,{Z:function(){return b}});var r=a(678),n=a(3396),o=a(2268),s=a(4870),i=a(6265),u=a.n(i),l=a(8983),d=a(952);const c=(0,n._)("div",{class:"welcome"},[(0,n._)("h1",null,"Welcome to Quizer!"),(0,n._)("p",null,"Here you can take quizes and make your own.")],-1),m={class:"cards-container"},h=["src"],f={class:"card-name"},v={class:"description"};var p=(0,n.aZ)({setup(e){(0,l.L)();const t=(0,s.iH)([]),a=(0,s.iH)(0),r=((0,s.iH)(25),(0,s.iH)(1),(0,s.iH)(1));(0,n.bv)((()=>{i()}));const i=async()=>{try{const e=await u().get("https://quizer.drewdru.com/api/v1/quiz");t.value=e.data.data,a.value=e.data.total,r.value=e.data.pages}catch(e){console.log(e)}};return(e,a)=>{const r=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[c,(0,n._)("div",m,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.value,(e=>((0,n.wg)(),(0,n.j4)(r,{key:e._id,to:{name:"quiz",params:{id:e._id}}},{default:(0,n.w5)((()=>[(0,n.Wm)(d.Z,null,{image:(0,n.w5)((()=>[(0,n._)("img",{alt:"image",src:e.image},null,8,h)])),default:(0,n.w5)((()=>[(0,n._)("h2",f,(0,o.zw)(e.name),1),(0,n._)("p",v,(0,o.zw)(e.description),1)])),_:2},1024)])),_:2},1032,["to"])))),128))])],64)}}});const g=p;var w=g;const k=[{path:"/",name:"home",component:w},{path:"/:id",name:"quiz",component:()=>a.e(443).then(a.bind(a,4540))},{path:"/quizmaker",name:"quizmaker",component:()=>a.e(387).then(a.bind(a,2387))},{path:"/myquizes",name:"myquizes",component:()=>a.e(105).then(a.bind(a,3105))},{path:"/myquizes/:id",name:"editmyquiz",component:()=>a.e(387).then(a.bind(a,2387))}],y=(0,r.p7)({history:(0,r.PO)("/"),routes:k});var b=y},952:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(3396),n=a(2268),o=a(4870);const s={class:"image-holder"};var i={props:{hoverable:Boolean,link:String},setup(e){const t=e,{hoverable:a,link:i}=(0,o.BK)(t);return(e,t)=>((0,r.wg)(),(0,r.iD)("div",{class:(0,n.C_)(["card",(0,o.SU)(a)?"hoverable":""])},[(0,r._)("div",s,[(0,r.WI)(e.$slots,"image")]),(0,r.WI)(e.$slots,"default")],2))}};const u=i;var l=u}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r](o,o.exports,a),o.loaded=!0,o.exports}a.m=e,function(){a.amdO={}}(),function(){var e=[];a.O=function(t,r,n,o){if(!r){var s=1/0;for(d=0;d<e.length;d++){r=e[d][0],n=e[d][1],o=e[d][2];for(var i=!0,u=0;u<r.length;u++)(!1&o||s>=o)&&Object.keys(a.O).every((function(e){return a.O[e](r[u])}))?r.splice(u--,1):(i=!1,o<s&&(s=o));if(i){e.splice(d--,1);var l=n();void 0!==l&&(t=l)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,n,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,r){return a.f[r](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+(443===e?"about":e)+"."+{105:"68870de1",387:"98caef5a",443:"f4b31469"}[e]+".js"}}(),function(){a.miniCssF=function(e){return"css/"+(443===e?"about":e)+"."+{105:"16fdc5ca",387:"266e1b32",443:"39263314"}[e]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="quiz:";a.l=function(r,n,o,s){if(e[r])e[r].push(n);else{var i,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var c=l[d];if(c.getAttribute("src")==r||c.getAttribute("data-webpack")==t+o){i=c;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+o),i.src=r),e[r]=[n];var m=function(t,a){i.onerror=i.onload=null,clearTimeout(h);var n=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((function(e){return e(a)})),t)return t(a)},h=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e=function(e,t,a,r){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var o=function(o){if(n.onerror=n.onload=null,"load"===o.type)a();else{var s=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=s,u.request=i,n.parentNode.removeChild(n),r(u)}};return n.onerror=n.onload=o,n.href=t,document.head.appendChild(n),n},t=function(e,t){for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var n=a[r],o=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(o===e||o===t))return n}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){n=s[r],o=n.getAttribute("data-href");if(o===e||o===t)return n}},r=function(r){return new Promise((function(n,o){var s=a.miniCssF(r),i=a.p+s;if(t(s,i))return n();e(r,i,n,o)}))},n={143:0};a.f.miniCss=function(e,t){var a={105:1,387:1,443:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=r(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}(),function(){var e={143:0};a.f.j=function(t,r){var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise((function(a,r){n=e[t]=[a,r]}));r.push(n[2]=o);var s=a.p+a.u(t),i=new Error,u=function(r){if(a.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,n[1](i)}};a.l(s,u,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,s=r[0],i=r[1],u=r[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(u)var d=u(a)}for(t&&t(r);l<s.length;l++)o=s[l],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},r=self["webpackChunkquiz"]=self["webpackChunkquiz"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(2589)}));r=a.O(r)})();
//# sourceMappingURL=app.6112a333.js.map