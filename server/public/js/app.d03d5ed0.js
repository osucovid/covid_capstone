<<<<<<< HEAD:server/public/js/app.d03d5ed0.js
(function(e){function t(t){for(var r,a,u=t[0],c=t[1],s=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);h&&h(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function u(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{"chunk-22099d53":"0dbdd1fb","chunk-281cccfc":"fe1f3d71","chunk-38fc10e6":"403c5bc2",about:"06ef2fc1","chunk-2d0b3289":"8df94e0e"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-281cccfc":1,about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{"chunk-22099d53":"31d6cfe0","chunk-281cccfc":"56d31d57","chunk-38fc10e6":"31d6cfe0",about:"ab85be2b","chunk-2d0b3289":"31d6cfe0"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],h.parentNode.removeChild(h),n(i)},h.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var h=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0740":function(e,t,n){"use strict";n("c8b6")},"3e5b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.getSpinner?n("div",{staticClass:"page"},[n("b-spinner",{key:"primary",staticClass:"spinner",attrs:{variant:"primary"}})],1):e._e(),n("div",{attrs:{id:"nav"}},[n("Nav")],1),n("div",{staticClass:"button-block"},[n("br"),e.$auth.isAuthenticated?e._e():n("button",{staticClass:"btn btn-secondary btn-lg",attrs:{type:"button"},on:{click:e.login}},[e._v(" Sign in to see personalized risk assessment ")]),n("br"),e.$auth.isAuthenticated?n("h3",[e._v("Welcome, "+e._s(e.$auth.user.name)+"!")]):e._e(),n("br")]),n("router-view"),n("div",{attrs:{id:"footer"}},[n("Footer")],1)],1)},i=[],u=n("5530"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light",fixed:"top"}},[n("b-navbar-brand",[n("router-link",{attrs:{to:"/"}},[e._v("COVID-19 Risk Assessment Tool")])],1),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",[n("router-link",{attrs:{to:"/dashboard"}},[e._v("Dashboard")])],1),n("b-nav-item",[n("router-link",{attrs:{to:"/mydata"}},[e._v("My Data")])],1),n("b-nav-item",[n("router-link",{attrs:{to:"/newuserform"}},[e._v("New User Form (Linked Here for Development)")])],1),n("b-nav-item",[n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)],1),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-form",{on:{submit:function(t){return t.preventDefault(),e.search(t)}}},[n("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Only works from user settings page"},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}}),n("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[e._v("Search")])],1)],1),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[e._v(" User ")]},proxy:!0}])},[n("b-dropdown-item",{attrs:{href:"#"}},[e.$auth.loading?e._e():n("div",[e.$auth.isAuthenticated?e._e():n("a",{staticClass:"button is-dark",on:{click:e.login}},[n("strong",[e._v("Profile")])]),e.$auth.isAuthenticated?n("a",{staticClass:"button is-dark"},[n("strong",[n("router-link",{attrs:{to:"/profile"}},[e._v("Profile")])],1)]):e._e()])]),n("b-dropdown-item",{attrs:{href:"#"}},[n("router-link",{attrs:{to:"/settings"}},[e._v("Settings")])],1),n("b-dropdown-item",{attrs:{href:"#"}},[e.$auth.loading?e._e():n("div",[e.$auth.isAuthenticated?e._e():n("a",{staticClass:"button is-dark",on:{click:e.login}},[n("strong",[e._v("Sign in")])]),e.$auth.isAuthenticated?n("a",{staticClass:"button is-dark",on:{click:e.logout}},[n("strong",[e._v("Log out")])]):e._e()])])],1)],1)],1)],1)],1)},s=[],l={name:"Navbar",methods:{login:function(){this.$auth.loginWithRedirect()},logout:function(){this.$auth.logout({returnTo:window.location.origin})},search:function(){console.log(this.searchText),this.$store.dispatch("search",{text:this.searchText})}},data:function(){return{searchText:""}}},d=l,h=n("2877"),p=Object(h["a"])(d,c,s,!1,null,null,null),f=p.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light"}},[n("pre",[e._v("Created for CS467 at Oregon State University, Fall 2020")])])],1)},b=[],g={name:"Footer"},v=g,w=Object(h["a"])(v,m,b,!1,null,null,null),k=w.exports,y=n("2f62"),_={name:"app",components:{Nav:f,Footer:k},computed:Object(u["a"])({},Object(y["b"])(["getSpinner"])),methods:{login:function(){this.$auth.loginWithRedirect()}}},S=_,x=(n("5c0b"),Object(h["a"])(S,o,i,!1,null,null,null)),C=x.exports,P=(n("d3b7"),n("8c4f")),O=(n("caad"),n("ac1f"),n("2532"),n("841c"),n("96cf"),n("1da1")),R=n("15fd"),E=n("9767"),T=function(){return window.history.replaceState({},document.title,window.location.pathname)},j=function(){return r},U=function(e){var t=e.onRedirectCallback,n=void 0===t?T:t,o=e.redirectUri,i=void 0===o?window.location.origin:o,u=Object(R["a"])(e,["onRedirectCallback","redirectUri"]);return r||(r=new a["default"]({data:function(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{loginWithPopup:function(e){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.popupOpen=!0,n.prev=1,n.next=4,t.auth0Client.loginWithPopup(e);case 4:n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](1),console.error(n.t0);case 9:return n.prev=9,t.popupOpen=!1,n.finish(9);case 12:return n.next=14,t.auth0Client.getUser();case 14:t.user=n.sent,t.isAuthenticated=!0;case 16:case"end":return n.stop()}}),n,null,[[1,6,9,12]])})))()},handleRedirectCallback:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.auth0Client.handleRedirectCallback();case 4:return t.next=6,e.auth0Client.getUser();case 6:e.user=t.sent,e.isAuthenticated=!0,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),e.error=t.t0;case 13:return t.prev=13,e.loading=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,10,13,16]])})))()},loginWithRedirect:function(e){return this.auth0Client.loginWithRedirect(e)},getIdTokenClaims:function(e){return this.auth0Client.getIdTokenClaims(e)},getTokenSilently:function(e){return this.auth0Client.getTokenSilently(e)},getTokenWithPopup:function(e){return this.auth0Client.getTokenWithPopup(e)},logout:function(e){return this.auth0Client.logout(e)}},created:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(E["a"])({domain:u.domain,client_id:u.clientId,audience:u.audience,redirect_uri:i});case 2:if(e.auth0Client=t.sent,t.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){t.next=10;break}return t.next=7,e.auth0Client.handleRedirectCallback();case 7:r=t.sent,a=r.appState,n(a);case 10:t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](3),e.error=t.t0;case 15:return t.prev=15,t.next=18,e.auth0Client.isAuthenticated();case 18:return e.isAuthenticated=t.sent,t.next=21,e.auth0Client.getUser();case 21:return e.user=t.sent,e.loading=!1,t.finish(15);case 24:case"end":return t.stop()}}),t,null,[[3,12,15,24]])})))()}}),r)},A={install:function(e,t){e.prototype.$auth=U(t)}},$=function(e,t,n){var r=j(),a=function(){if(r.isAuthenticated)return n();r.loginWithRedirect({appState:{targetUrl:e.fullPath}})};if(!r.loading)return a();r.$watch("loading",(function(e){if(!1===e)return a()}))},D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Intro")],1)},I=[],N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"container"}},[e._m(0),r("div",{attrs:{id:"break"}}),r("div",{attrs:{id:"text"}},[r("h2",[e._v("It's easy to get your assessment!")]),r("div",{attrs:{id:"card-container"}},[r("div",{attrs:{id:"card"}},[r("img",{attrs:{src:n("96c9"),width:75}}),r("p",[e._v("Fill out questions about your medical history, social distancing efforts, and recent activity.")])]),r("div",{attrs:{id:"card"}},[r("img",{attrs:{src:n("9618"),width:75}}),r("p",[e._v("Get instantaneous results about how you compare to high-risk COVID patients.")])]),r("div",{attrs:{id:"card"}},[r("img",{attrs:{src:n("b866"),width:75}}),r("p",[e._v("Learn more about the pandemic and how to lower your risk, in consultation with your doctors.")])])])])])},W=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"text"}},[n("h1",[e._v("Curious about your risk for catching "),n("strong",[e._v("COVID-19")]),e._v("?")]),n("p",[e._v("With so much brand (and often conflicting) new information about the COVID-19 pandemic, people are overwhelmed with the amount of data and advice provided by the media.")]),n("p",[n("strong",[e._v("Fill out a few questions and our app will help you evaluate your risk for COVID-19 based on your past and present behavior.")]),e._v(" We will compare your activity with publicly available data and current recommendations from researchers and public health departments.")]),n("p",[n("a",{attrs:{href:"/todaysdata"}},[e._v("Begin by registering for account or filling out a daily assessment form")]),e._v("!")])])}],L=(n("0740"),{}),F=Object(h["a"])(L,N,W,!1,null,null,null),J=F.exports,M={name:"Home",components:{Intro:J}},V=M,H=Object(h["a"])(V,D,I,!1,null,null,null),q=H.exports;a["default"].use(P["a"]);var z=[{path:"/",name:"Home",component:q},{path:"/about",name:"About",component:function(){return Promise.all([n.e("chunk-38fc10e6"),n.e("chunk-22099d53"),n.e("about")]).then(n.bind(null,"f820"))}},{path:"/dashboard",name:"Dashboard",component:function(){return Promise.all([n.e("chunk-38fc10e6"),n.e("chunk-22099d53"),n.e("about")]).then(n.bind(null,"7277"))},beforeEnter:$},{path:"/mydata",name:"MyData",component:function(){return Promise.all([n.e("chunk-38fc10e6"),n.e("chunk-22099d53"),n.e("about")]).then(n.bind(null,"ebc1"))},beforeEnter:$},{path:"/riskgraph/:id",name:"RiskGraph",component:function(){return Promise.all([n.e("chunk-38fc10e6"),n.e("chunk-22099d53"),n.e("about")]).then(n.bind(null,"d5dd"))}},{path:"/newuserform/",name:"NewUserform",component:function(){return Promise.all([n.e("chunk-38fc10e6"),n.e("chunk-22099d53"),n.e("about")]).then(n.bind(null,"e877"))}},{path:"/settings",name:"Settings",component:function(){return Promise.all([n.e("chunk-38fc10e6"),n.e("chunk-2d0b3289")]).then(n.bind(null,"26d3"))}},{path:"/profile",name:"Profile",component:function(){return Promise.all([n.e("chunk-22099d53"),n.e("chunk-281cccfc")]).then(n.bind(null,"c66d"))}}],B=new P["a"]({mode:"history",base:"/",routes:z}),G=B;n("4de4"),n("fb6a"),n("b0c0");a["default"].use(y["a"]);var Y=new y["a"].Store({state:{users:[],displayUsers:[],rows:0,showSpinner:!1},mutations:{SET_USERS:function(e,t){e.users=t},SET_ROWS:function(e,t){e.rows=t},SET_DISPLAY_USERS:function(e,t){e.displayUsers=t},SET_SPINNER:function(e,t){e.showSpinner=t}},actions:{fetchData:function(e){return Object(O["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,n("SET_SPINNER",!0),t.abrupt("return",new Promise((function(e){setTimeout(Object(O["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("users.json");case 2:return r=t.sent,t.next=5,r.json();case 5:a=t.sent,e(a),n("SET_SPINNER",!1);case 8:case"end":return t.stop()}}),t)}))),1e3)})));case 3:case"end":return t.stop()}}),t)})))()},updatePagination:function(e,t){var n=e.commit,r=e.dispatch,a=t.myJson,o=t.currentPage,i=t.perPage;n("SET_USERS",a),n("SET_ROWS",a.length),r("paginate",{currentPage:o,perPage:i})},fetchUsers:function(e){return Object(O["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,t.next=3,n("fetchData");case 3:return r=t.sent,n("updatePagination",{myJson:r,currentPage:1,perPage:3}),t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})))()},paginate:function(e,t){return Object(O["a"])(regeneratorRuntime.mark((function n(){var r,a,o,i,u,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.commit,a=e.state,o=t.currentPage,i=t.perPage,u=(o-1)*i,c=a.users.slice(u,u+3),r("SET_DISPLAY_USERS",c);case 5:case"end":return n.stop()}}),n)})))()},search:function(e,t){return Object(O["a"])(regeneratorRuntime.mark((function n(){var r,a,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,a=t.text,n.next=4,r("fetchData");case 4:o=n.sent,i=o.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})),r("updatePagination",{myJson:i,currentPage:1,perPage:3});case 7:case"end":return n.stop()}}),n)})))()}},getters:{getUsers:function(e){return e.users},getRows:function(e){return e.rows},getDisplayUsers:function(e){return e.displayUsers},getSpinner:function(e){return e.showSpinner}},modules:{}}),K=n("5f5b"),X=n("b1e0"),Z=(n("f9e3"),n("2dd8"),n("1615"),n("3e5b"),n("2699")),Q=n("a40a"),ee=n("4e2b"),te=(n("6cc5"),n("e11e")),ne=n("8160");delete te["Icon"].Default.prototype._getIconUrl,te["Icon"].Default.mergeOptions({iconRetinaUrl:n("584d"),iconUrl:n("6397"),shadowUrl:n("e2b9")}),a["default"].component("l-map",Z["a"]),a["default"].component("l-tile-layer",Q["a"]),a["default"].component("l-marker",ee["a"]),a["default"].use(A,{domain:ne["b"],clientId:ne["a"],onRedirectCallback:function(e){G.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}}),a["default"].config.productionTip=!1,a["default"].use(K["a"]),a["default"].use(X["a"]),a["default"].use(y["a"]);var re=n("d644");a["default"].use(re.default),a["default"].prototype.$store=Y,new a["default"]({router:G,render:function(e){return e(C)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},8160:function(e){e.exports=JSON.parse('{"b":"dev-wnyt3r3w.us.auth0.com","a":"9sX1YJGHOEJ6JVsccNzDZSoWfyFSiPv4"}')},9618:function(e,t,n){e.exports=n.p+"img/bar-chart.55737dd8.svg"},"96c9":function(e,t,n){e.exports=n.p+"img/form-icon.6654c4f6.svg"},"9c0c":function(e,t,n){},b866:function(e,t,n){e.exports=n.p+"img/stethoscope.35cb77b1.svg"},c8b6:function(e,t,n){}});
//# sourceMappingURL=app.d03d5ed0.js.map
=======
(function(e){function t(t){for(var r,a,u=t[0],c=t[1],s=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);h&&h(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function u(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{"chunk-38fc10e6":"de7d3238","chunk-2d0b3289":"8df94e0e","chunk-627c3323":"21debcb8",about:"93e17156","chunk-281cccfc":"b7d14c91"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1,"chunk-281cccfc":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{"chunk-38fc10e6":"31d6cfe0","chunk-2d0b3289":"31d6cfe0","chunk-627c3323":"31d6cfe0",about:"d71b290c","chunk-281cccfc":"44e3f2f6"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],h.parentNode.removeChild(h),n(i)},h.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var h=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0740":function(e,t,n){"use strict";n("c8b6")},"3e5b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.getSpinner?n("div",{staticClass:"page"},[n("b-spinner",{key:"primary",staticClass:"spinner",attrs:{variant:"primary"}})],1):e._e(),n("div",{attrs:{id:"nav"}},[n("Nav")],1),n("div",{staticClass:"button-block"},[n("br"),e.$auth.isAuthenticated?e._e():n("button",{staticClass:"btn btn-secondary btn-lg",attrs:{type:"button"},on:{click:e.login}},[e._v(" Sign in to see personalized risk assessment ")]),n("br"),e.$auth.isAuthenticated?n("h3",[e._v("Welcome, "+e._s(e.$auth.user.name)+"!")]):e._e(),n("br")]),n("router-view"),n("div",{attrs:{id:"footer"}},[n("Footer")],1)],1)},i=[],u=n("5530"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light",fixed:"top"}},[n("b-navbar-brand",[n("router-link",{attrs:{to:"/"}},[e._v("COVID-19 Risk Assessment Tool")])],1),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",[n("router-link",{attrs:{to:"/dashboard"}},[e._v("Dashboard")])],1),n("b-nav-item",[n("router-link",{attrs:{to:"/mydata"}},[e._v("My Data")])],1),n("b-nav-item",[n("router-link",{attrs:{to:"/newuserform"}},[e._v("New User Form (Linked Here for Development)")])],1),n("b-nav-item",[n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)],1),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-form",{on:{submit:function(t){return t.preventDefault(),e.search(t)}}},[n("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Only works from user settings page"},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}}),n("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[e._v("Search")])],1)],1),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[e._v(" User ")]},proxy:!0}])},[n("b-dropdown-item",{attrs:{href:"#"}},[e.$auth.loading?e._e():n("div",[e.$auth.isAuthenticated?e._e():n("a",{staticClass:"button is-dark",on:{click:e.login}},[n("strong",[e._v("Profile")])]),e.$auth.isAuthenticated?n("a",{staticClass:"button is-dark"},[n("strong",[n("router-link",{attrs:{to:"/profile"}},[e._v("Profile")])],1)]):e._e()])]),n("b-dropdown-item",{attrs:{href:"#"}},[n("router-link",{attrs:{to:"/settings"}},[e._v("Settings")])],1),n("b-dropdown-item",{attrs:{href:"#"}},[e.$auth.loading?e._e():n("div",[e.$auth.isAuthenticated?e._e():n("a",{staticClass:"button is-dark",on:{click:e.login}},[n("strong",[e._v("Sign in")])]),e.$auth.isAuthenticated?n("a",{staticClass:"button is-dark",on:{click:e.logout}},[n("strong",[e._v("Log out")])]):e._e()])])],1)],1)],1)],1)],1)},s=[],l={name:"Navbar",methods:{login:function(){this.$auth.loginWithRedirect()},logout:function(){this.$auth.logout({returnTo:window.location.origin})},search:function(){console.log(this.searchText),this.$store.dispatch("search",{text:this.searchText})}},data:function(){return{searchText:""}}},d=l,h=n("2877"),p=Object(h["a"])(d,c,s,!1,null,null,null),f=p.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light"}},[n("pre",[e._v("Created for CS467 at Oregon State University, Fall 2020")])])],1)},b=[],g={name:"Footer"},v=g,w=Object(h["a"])(v,m,b,!1,null,null,null),k=w.exports,y=n("2f62"),_={name:"app",components:{Nav:f,Footer:k},computed:Object(u["a"])({},Object(y["b"])(["getSpinner"])),methods:{login:function(){this.$auth.loginWithRedirect()}}},S=_,x=(n("5c0b"),Object(h["a"])(S,o,i,!1,null,null,null)),C=x.exports,P=(n("d3b7"),n("8c4f")),O=(n("caad"),n("ac1f"),n("2532"),n("841c"),n("96cf"),n("1da1")),R=n("15fd"),E=n("9767"),T=function(){return window.history.replaceState({},document.title,window.location.pathname)},j=function(){return r},U=function(e){var t=e.onRedirectCallback,n=void 0===t?T:t,o=e.redirectUri,i=void 0===o?window.location.origin:o,u=Object(R["a"])(e,["onRedirectCallback","redirectUri"]);return r||(r=new a["default"]({data:function(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{loginWithPopup:function(e){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.popupOpen=!0,n.prev=1,n.next=4,t.auth0Client.loginWithPopup(e);case 4:n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](1),console.error(n.t0);case 9:return n.prev=9,t.popupOpen=!1,n.finish(9);case 12:return n.next=14,t.auth0Client.getUser();case 14:t.user=n.sent,t.isAuthenticated=!0;case 16:case"end":return n.stop()}}),n,null,[[1,6,9,12]])})))()},handleRedirectCallback:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.auth0Client.handleRedirectCallback();case 4:return t.next=6,e.auth0Client.getUser();case 6:e.user=t.sent,e.isAuthenticated=!0,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),e.error=t.t0;case 13:return t.prev=13,e.loading=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,10,13,16]])})))()},loginWithRedirect:function(e){return this.auth0Client.loginWithRedirect(e)},getIdTokenClaims:function(e){return this.auth0Client.getIdTokenClaims(e)},getTokenSilently:function(e){return this.auth0Client.getTokenSilently(e)},getTokenWithPopup:function(e){return this.auth0Client.getTokenWithPopup(e)},logout:function(e){return this.auth0Client.logout(e)}},created:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(E["a"])({domain:u.domain,client_id:u.clientId,audience:u.audience,redirect_uri:i});case 2:if(e.auth0Client=t.sent,t.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){t.next=10;break}return t.next=7,e.auth0Client.handleRedirectCallback();case 7:r=t.sent,a=r.appState,n(a);case 10:t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](3),e.error=t.t0;case 15:return t.prev=15,t.next=18,e.auth0Client.isAuthenticated();case 18:return e.isAuthenticated=t.sent,t.next=21,e.auth0Client.getUser();case 21:return e.user=t.sent,e.loading=!1,t.finish(15);case 24:case"end":return t.stop()}}),t,null,[[3,12,15,24]])})))()}}),r)},A={install:function(e,t){e.prototype.$auth=U(t)}},$=function(e,t,n){var r=j(),a=function(){if(r.isAuthenticated)return n();r.loginWithRedirect({appState:{targetUrl:e.fullPath}})};if(!r.loading)return a();r.$watch("loading",(function(e){if(!1===e)return a()}))},D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Intro")],1)},I=[],N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"container"}},[e._m(0),r("div",{attrs:{id:"break"}}),r("div",{attrs:{id:"text"}},[r("h2",[e._v("It's easy to get your assessment!")]),r("div",{attrs:{id:"card-container"}},[r("div",{attrs:{id:"card"}},[r("img",{attrs:{src:n("96c9"),width:75}}),r("p",[e._v("Fill out questions about your medical history, social distancing efforts, and recent activity.")])]),r("div",{attrs:{id:"card"}},[r("img",{attrs:{src:n("9618"),width:75}}),r("p",[e._v("Get instantaneous results about how you compare to high-risk COVID patients.")])]),r("div",{attrs:{id:"card"}},[r("img",{attrs:{src:n("b866"),width:75}}),r("p",[e._v("Learn more about the pandemic and how to lower your risk, in consultation with your doctors.")])])])])])},W=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"text"}},[n("h1",[e._v("Curious about your risk for catching "),n("strong",[e._v("COVID-19")]),e._v("?")]),n("p",[e._v("With so much brand (and often conflicting) new information about the COVID-19 pandemic, people are overwhelmed with the amount of data and advice provided by the media.")]),n("p",[n("strong",[e._v("Fill out a few questions and our app will help you evaluate your risk for COVID-19 based on your past and present behavior.")]),e._v(" We will compare your activity with publicly available data and current recommendations from researchers and public health departments.")]),n("p",[n("a",{attrs:{href:"/todaysdata"}},[e._v("Begin by registering for account or filling out a daily assessment form")]),e._v("!")])])}],L=(n("0740"),{}),F=Object(h["a"])(L,N,W,!1,null,null,null),J=F.exports,M={name:"Home",components:{Intro:J}},V=M,H=Object(h["a"])(V,D,I,!1,null,null,null),q=H.exports;a["default"].use(P["a"]);var z=[{path:"/",name:"Home",component:q},{path:"/about",name:"About",component:function(){return Promise.all([n.e("chunk-38fc10e6"),n.e("chunk-627c3323"),n.e("about")]).then(n.bind(null,"f820"))}},{path:"/dashboard",name:"Dashboard",component:function(){return Promise.all([n.e("chunk-38fc10e6"),n.e("chunk-627c3323"),n.e("about")]).then(n.bind(null,"7277"))},beforeEnter:$},{path:"/mydata",name:"MyData",component:function(){return Promise.all([n.e("chunk-38fc10e6"),n.e("chunk-627c3323"),n.e("about")]).then(n.bind(null,"ebc1"))},beforeEnter:$},{path:"/riskgraph/:id",name:"RiskGraph",component:function(){return Promise.all([n.e("chunk-38fc10e6"),n.e("chunk-627c3323"),n.e("about")]).then(n.bind(null,"d5dd"))}},{path:"/newuserform/",name:"NewUserform",component:function(){return Promise.all([n.e("chunk-38fc10e6"),n.e("chunk-627c3323"),n.e("about")]).then(n.bind(null,"e877"))}},{path:"/settings",name:"Settings",component:function(){return Promise.all([n.e("chunk-38fc10e6"),n.e("chunk-2d0b3289")]).then(n.bind(null,"26d3"))}},{path:"/profile",name:"Profile",component:function(){return Promise.all([n.e("chunk-627c3323"),n.e("chunk-281cccfc")]).then(n.bind(null,"c66d"))}}],B=new P["a"]({mode:"history",base:"/",routes:z}),G=B;n("4de4"),n("fb6a"),n("b0c0");a["default"].use(y["a"]);var Y=new y["a"].Store({state:{users:[],displayUsers:[],rows:0,showSpinner:!1},mutations:{SET_USERS:function(e,t){e.users=t},SET_ROWS:function(e,t){e.rows=t},SET_DISPLAY_USERS:function(e,t){e.displayUsers=t},SET_SPINNER:function(e,t){e.showSpinner=t}},actions:{fetchData:function(e){return Object(O["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,n("SET_SPINNER",!0),t.abrupt("return",new Promise((function(e){setTimeout(Object(O["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("users.json");case 2:return r=t.sent,t.next=5,r.json();case 5:a=t.sent,e(a),n("SET_SPINNER",!1);case 8:case"end":return t.stop()}}),t)}))),1e3)})));case 3:case"end":return t.stop()}}),t)})))()},updatePagination:function(e,t){var n=e.commit,r=e.dispatch,a=t.myJson,o=t.currentPage,i=t.perPage;n("SET_USERS",a),n("SET_ROWS",a.length),r("paginate",{currentPage:o,perPage:i})},fetchUsers:function(e){return Object(O["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,t.next=3,n("fetchData");case 3:return r=t.sent,n("updatePagination",{myJson:r,currentPage:1,perPage:3}),t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})))()},paginate:function(e,t){return Object(O["a"])(regeneratorRuntime.mark((function n(){var r,a,o,i,u,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.commit,a=e.state,o=t.currentPage,i=t.perPage,u=(o-1)*i,c=a.users.slice(u,u+3),r("SET_DISPLAY_USERS",c);case 5:case"end":return n.stop()}}),n)})))()},search:function(e,t){return Object(O["a"])(regeneratorRuntime.mark((function n(){var r,a,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,a=t.text,n.next=4,r("fetchData");case 4:o=n.sent,i=o.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})),r("updatePagination",{myJson:i,currentPage:1,perPage:3});case 7:case"end":return n.stop()}}),n)})))()}},getters:{getUsers:function(e){return e.users},getRows:function(e){return e.rows},getDisplayUsers:function(e){return e.displayUsers},getSpinner:function(e){return e.showSpinner}},modules:{}}),K=n("5f5b"),X=n("b1e0"),Z=(n("f9e3"),n("2dd8"),n("1615"),n("3e5b"),n("2699")),Q=n("a40a"),ee=n("4e2b"),te=(n("6cc5"),n("e11e")),ne=n("8160");delete te["Icon"].Default.prototype._getIconUrl,te["Icon"].Default.mergeOptions({iconRetinaUrl:n("584d"),iconUrl:n("6397"),shadowUrl:n("e2b9")}),a["default"].component("l-map",Z["a"]),a["default"].component("l-tile-layer",Q["a"]),a["default"].component("l-marker",ee["a"]),a["default"].use(A,{domain:ne["b"],clientId:ne["a"],onRedirectCallback:function(e){G.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}}),a["default"].config.productionTip=!1,a["default"].use(K["a"]),a["default"].use(X["a"]),a["default"].use(y["a"]);var re=n("d644");a["default"].use(re.default),a["default"].prototype.$store=Y,new a["default"]({router:G,render:function(e){return e(C)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},8160:function(e){e.exports=JSON.parse('{"b":"dev-wnyt3r3w.us.auth0.com","a":"9sX1YJGHOEJ6JVsccNzDZSoWfyFSiPv4"}')},9618:function(e,t,n){e.exports=n.p+"img/bar-chart.b250a40f.svg"},"96c9":function(e,t,n){e.exports=n.p+"img/form-icon.6654c4f6.svg"},"9c0c":function(e,t,n){},b866:function(e,t,n){e.exports=n.p+"img/stethoscope.35cb77b1.svg"},c8b6:function(e,t,n){}});
//# sourceMappingURL=app.03c29fa0.js.map
>>>>>>> parent of 8e50341... add credits and resources, add how-to guide, add and test social media sharing links, add fun facts:server/public/js/app.03c29fa0.js
