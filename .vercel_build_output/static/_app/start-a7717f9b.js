var tt=Object.defineProperty,nt=Object.defineProperties;var rt=Object.getOwnPropertyDescriptors;var _e=Object.getOwnPropertySymbols;var ze=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable;var Ce=(s,e,n)=>e in s?tt(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n,B=(s,e)=>{for(var n in e||(e={}))ze.call(e,n)&&Ce(s,n,e[n]);if(_e)for(var n of _e(e))qe.call(e,n)&&Ce(s,n,e[n]);return s},ce=(s,e)=>nt(s,rt(e));var Je=(s,e)=>{var n={};for(var o in s)ze.call(s,o)&&e.indexOf(o)<0&&(n[o]=s[o]);if(s!=null&&_e)for(var o of _e(s))e.indexOf(o)<0&&qe.call(s,o)&&(n[o]=s[o]);return n};import{s as Qe,n as ve,S as st,i as it,e as ot,c as at,a as ct,d as C,b as Ee,f as F,g as J,t as lt,h as ft,j as ut,k as _t,l as R,m as pt,o as M,p as L,q as W,r as A,u as dt,v as mt,w as ke,x as N,y as G,z as U,A as X,B as Z,C as j,D as H,E as Ke}from"./chunks/index-27e8d48c.js";import{s as ht,a as gt}from"./chunks/paths-396f020f.js";import{_ as w}from"./chunks/preload-helper-e4860ae8.js";import{i as wt}from"./chunks/singletons-d1fb5791.js";const re=[];function pe(s,e=ve){let n;const o=new Set;function c(t){if(Qe(s,t)&&(s=t,n)){const r=!re.length;for(const i of o)i[1](),re.push(i,s);if(r){for(let i=0;i<re.length;i+=2)re[i][0](re[i+1]);re.length=0}}}function a(t){c(t(s))}function l(t,r=ve){const i=[t,r];return o.add(i),o.size===1&&(n=e(c)||ve),t(s),()=>{o.delete(i),o.size===0&&(n(),n=null)}}return{set:c,update:a,subscribe:l}}function bt(s){let e,n,o;const c=[s[1]||{}];var a=s[0][0];function l(t){let r={};for(let i=0;i<c.length;i+=1)r=H(r,c[i]);return{props:r}}return a&&(e=new a(l())),{c(){e&&N(e.$$.fragment),n=R()},l(t){e&&G(e.$$.fragment,t),n=R()},m(t,r){e&&U(e,t,r),J(t,n,r),o=!0},p(t,r){const i=r&2?X(c,[Z(t[1]||{})]):{};if(a!==(a=t[0][0])){if(e){M();const f=e;L(f.$$.fragment,1,0,()=>{j(f,1)}),W()}a?(e=new a(l()),N(e.$$.fragment),A(e.$$.fragment,1),U(e,n.parentNode,n)):e=null}else a&&e.$set(i)},i(t){o||(e&&A(e.$$.fragment,t),o=!0)},o(t){e&&L(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&j(e,t)}}}function vt(s){let e,n,o;const c=[s[1]||{}];var a=s[0][0];function l(t){let r={$$slots:{default:[It]},$$scope:{ctx:t}};for(let i=0;i<c.length;i+=1)r=H(r,c[i]);return{props:r}}return a&&(e=new a(l(s))),{c(){e&&N(e.$$.fragment),n=R()},l(t){e&&G(e.$$.fragment,t),n=R()},m(t,r){e&&U(e,t,r),J(t,n,r),o=!0},p(t,r){const i=r&2?X(c,[Z(t[1]||{})]):{};if(r&2109&&(i.$$scope={dirty:r,ctx:t}),a!==(a=t[0][0])){if(e){M();const f=e;L(f.$$.fragment,1,0,()=>{j(f,1)}),W()}a?(e=new a(l(t)),N(e.$$.fragment),A(e.$$.fragment,1),U(e,n.parentNode,n)):e=null}else a&&e.$set(i)},i(t){o||(e&&A(e.$$.fragment,t),o=!0)},o(t){e&&L(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&j(e,t)}}}function Et(s){let e,n,o;const c=[s[2]||{}];var a=s[0][1];function l(t){let r={};for(let i=0;i<c.length;i+=1)r=H(r,c[i]);return{props:r}}return a&&(e=new a(l())),{c(){e&&N(e.$$.fragment),n=R()},l(t){e&&G(e.$$.fragment,t),n=R()},m(t,r){e&&U(e,t,r),J(t,n,r),o=!0},p(t,r){const i=r&4?X(c,[Z(t[2]||{})]):{};if(a!==(a=t[0][1])){if(e){M();const f=e;L(f.$$.fragment,1,0,()=>{j(f,1)}),W()}a?(e=new a(l()),N(e.$$.fragment),A(e.$$.fragment,1),U(e,n.parentNode,n)):e=null}else a&&e.$set(i)},i(t){o||(e&&A(e.$$.fragment,t),o=!0)},o(t){e&&L(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&j(e,t)}}}function $t(s){let e,n,o;const c=[s[2]||{}];var a=s[0][1];function l(t){let r={$$slots:{default:[Pt]},$$scope:{ctx:t}};for(let i=0;i<c.length;i+=1)r=H(r,c[i]);return{props:r}}return a&&(e=new a(l(s))),{c(){e&&N(e.$$.fragment),n=R()},l(t){e&&G(e.$$.fragment,t),n=R()},m(t,r){e&&U(e,t,r),J(t,n,r),o=!0},p(t,r){const i=r&4?X(c,[Z(t[2]||{})]):{};if(r&2105&&(i.$$scope={dirty:r,ctx:t}),a!==(a=t[0][1])){if(e){M();const f=e;L(f.$$.fragment,1,0,()=>{j(f,1)}),W()}a?(e=new a(l(t)),N(e.$$.fragment),A(e.$$.fragment,1),U(e,n.parentNode,n)):e=null}else a&&e.$set(i)},i(t){o||(e&&A(e.$$.fragment,t),o=!0)},o(t){e&&L(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&j(e,t)}}}function yt(s){let e,n,o;const c=[s[3]||{}];var a=s[0][2];function l(t){let r={};for(let i=0;i<c.length;i+=1)r=H(r,c[i]);return{props:r}}return a&&(e=new a(l())),{c(){e&&N(e.$$.fragment),n=R()},l(t){e&&G(e.$$.fragment,t),n=R()},m(t,r){e&&U(e,t,r),J(t,n,r),o=!0},p(t,r){const i=r&8?X(c,[Z(t[3]||{})]):{};if(a!==(a=t[0][2])){if(e){M();const f=e;L(f.$$.fragment,1,0,()=>{j(f,1)}),W()}a?(e=new a(l()),N(e.$$.fragment),A(e.$$.fragment,1),U(e,n.parentNode,n)):e=null}else a&&e.$set(i)},i(t){o||(e&&A(e.$$.fragment,t),o=!0)},o(t){e&&L(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&j(e,t)}}}function kt(s){let e,n,o;const c=[s[3]||{}];var a=s[0][2];function l(t){let r={$$slots:{default:[Ot]},$$scope:{ctx:t}};for(let i=0;i<c.length;i+=1)r=H(r,c[i]);return{props:r}}return a&&(e=new a(l(s))),{c(){e&&N(e.$$.fragment),n=R()},l(t){e&&G(e.$$.fragment,t),n=R()},m(t,r){e&&U(e,t,r),J(t,n,r),o=!0},p(t,r){const i=r&8?X(c,[Z(t[3]||{})]):{};if(r&2097&&(i.$$scope={dirty:r,ctx:t}),a!==(a=t[0][2])){if(e){M();const f=e;L(f.$$.fragment,1,0,()=>{j(f,1)}),W()}a?(e=new a(l(t)),N(e.$$.fragment),A(e.$$.fragment,1),U(e,n.parentNode,n)):e=null}else a&&e.$set(i)},i(t){o||(e&&A(e.$$.fragment,t),o=!0)},o(t){e&&L(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&j(e,t)}}}function Rt(s){let e,n,o;const c=[s[4]||{}];var a=s[0][3];function l(t){let r={};for(let i=0;i<c.length;i+=1)r=H(r,c[i]);return{props:r}}return a&&(e=new a(l())),{c(){e&&N(e.$$.fragment),n=R()},l(t){e&&G(e.$$.fragment,t),n=R()},m(t,r){e&&U(e,t,r),J(t,n,r),o=!0},p(t,r){const i=r&16?X(c,[Z(t[4]||{})]):{};if(a!==(a=t[0][3])){if(e){M();const f=e;L(f.$$.fragment,1,0,()=>{j(f,1)}),W()}a?(e=new a(l()),N(e.$$.fragment),A(e.$$.fragment,1),U(e,n.parentNode,n)):e=null}else a&&e.$set(i)},i(t){o||(e&&A(e.$$.fragment,t),o=!0)},o(t){e&&L(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&j(e,t)}}}function Lt(s){let e,n,o;const c=[s[4]||{}];var a=s[0][3];function l(t){let r={$$slots:{default:[At]},$$scope:{ctx:t}};for(let i=0;i<c.length;i+=1)r=H(r,c[i]);return{props:r}}return a&&(e=new a(l(s))),{c(){e&&N(e.$$.fragment),n=R()},l(t){e&&G(e.$$.fragment,t),n=R()},m(t,r){e&&U(e,t,r),J(t,n,r),o=!0},p(t,r){const i=r&16?X(c,[Z(t[4]||{})]):{};if(r&2081&&(i.$$scope={dirty:r,ctx:t}),a!==(a=t[0][3])){if(e){M();const f=e;L(f.$$.fragment,1,0,()=>{j(f,1)}),W()}a?(e=new a(l(t)),N(e.$$.fragment),A(e.$$.fragment,1),U(e,n.parentNode,n)):e=null}else a&&e.$set(i)},i(t){o||(e&&A(e.$$.fragment,t),o=!0)},o(t){e&&L(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&j(e,t)}}}function At(s){let e,n,o;const c=[s[5]||{}];var a=s[0][4];function l(t){let r={};for(let i=0;i<c.length;i+=1)r=H(r,c[i]);return{props:r}}return a&&(e=new a(l())),{c(){e&&N(e.$$.fragment),n=R()},l(t){e&&G(e.$$.fragment,t),n=R()},m(t,r){e&&U(e,t,r),J(t,n,r),o=!0},p(t,r){const i=r&32?X(c,[Z(t[5]||{})]):{};if(a!==(a=t[0][4])){if(e){M();const f=e;L(f.$$.fragment,1,0,()=>{j(f,1)}),W()}a?(e=new a(l()),N(e.$$.fragment),A(e.$$.fragment,1),U(e,n.parentNode,n)):e=null}else a&&e.$set(i)},i(t){o||(e&&A(e.$$.fragment,t),o=!0)},o(t){e&&L(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&j(e,t)}}}function Ot(s){let e,n,o,c;const a=[Lt,Rt],l=[];function t(r,i){return r[0][4]?0:1}return e=t(s),n=l[e]=a[e](s),{c(){n.c(),o=R()},l(r){n.l(r),o=R()},m(r,i){l[e].m(r,i),J(r,o,i),c=!0},p(r,i){let f=e;e=t(r),e===f?l[e].p(r,i):(M(),L(l[f],1,1,()=>{l[f]=null}),W(),n=l[e],n?n.p(r,i):(n=l[e]=a[e](r),n.c()),A(n,1),n.m(o.parentNode,o))},i(r){c||(A(n),c=!0)},o(r){L(n),c=!1},d(r){l[e].d(r),r&&C(o)}}}function Pt(s){let e,n,o,c;const a=[kt,yt],l=[];function t(r,i){return r[0][3]?0:1}return e=t(s),n=l[e]=a[e](s),{c(){n.c(),o=R()},l(r){n.l(r),o=R()},m(r,i){l[e].m(r,i),J(r,o,i),c=!0},p(r,i){let f=e;e=t(r),e===f?l[e].p(r,i):(M(),L(l[f],1,1,()=>{l[f]=null}),W(),n=l[e],n?n.p(r,i):(n=l[e]=a[e](r),n.c()),A(n,1),n.m(o.parentNode,o))},i(r){c||(A(n),c=!0)},o(r){L(n),c=!1},d(r){l[e].d(r),r&&C(o)}}}function It(s){let e,n,o,c;const a=[$t,Et],l=[];function t(r,i){return r[0][2]?0:1}return e=t(s),n=l[e]=a[e](s),{c(){n.c(),o=R()},l(r){n.l(r),o=R()},m(r,i){l[e].m(r,i),J(r,o,i),c=!0},p(r,i){let f=e;e=t(r),e===f?l[e].p(r,i):(M(),L(l[f],1,1,()=>{l[f]=null}),W(),n=l[e],n?n.p(r,i):(n=l[e]=a[e](r),n.c()),A(n,1),n.m(o.parentNode,o))},i(r){c||(A(n),c=!0)},o(r){L(n),c=!1},d(r){l[e].d(r),r&&C(o)}}}function Be(s){let e,n=s[7]&&Me(s);return{c(){e=ot("div"),n&&n.c(),this.h()},l(o){e=at(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var c=ct(e);n&&n.l(c),c.forEach(C),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),F(e,"position","absolute"),F(e,"left","0"),F(e,"top","0"),F(e,"clip","rect(0 0 0 0)"),F(e,"clip-path","inset(50%)"),F(e,"overflow","hidden"),F(e,"white-space","nowrap"),F(e,"width","1px"),F(e,"height","1px")},m(o,c){J(o,e,c),n&&n.m(e,null)},p(o,c){o[7]?n?n.p(o,c):(n=Me(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&C(e),n&&n.d()}}}function Me(s){let e;return{c(){e=lt(s[8])},l(n){e=ft(n,s[8])},m(n,o){J(n,e,o)},p(n,o){o&256&&ut(e,n[8])},d(n){n&&C(e)}}}function Tt(s){let e,n,o,c,a;const l=[vt,bt],t=[];function r(f,O){return f[0][1]?0:1}e=r(s),n=t[e]=l[e](s);let i=s[6]&&Be(s);return{c(){n.c(),o=_t(),i&&i.c(),c=R()},l(f){n.l(f),o=pt(f),i&&i.l(f),c=R()},m(f,O){t[e].m(f,O),J(f,o,O),i&&i.m(f,O),J(f,c,O),a=!0},p(f,[O]){let K=e;e=r(f),e===K?t[e].p(f,O):(M(),L(t[K],1,1,()=>{t[K]=null}),W(),n=t[e],n?n.p(f,O):(n=t[e]=l[e](f),n.c()),A(n,1),n.m(o.parentNode,o)),f[6]?i?i.p(f,O):(i=Be(f),i.c(),i.m(c.parentNode,c)):i&&(i.d(1),i=null)},i(f){a||(A(n),a=!0)},o(f){L(n),a=!1},d(f){t[e].d(f),f&&C(o),i&&i.d(f),f&&C(c)}}}function Dt(s,e,n){let{stores:o}=e,{page:c}=e,{components:a}=e,{props_0:l=null}=e,{props_1:t=null}=e,{props_2:r=null}=e,{props_3:i=null}=e,{props_4:f=null}=e;dt("__svelte__",o),mt(o.page.notify);let O=!1,K=!1,Q=null;return ke(()=>{const P=o.page.subscribe(()=>{O&&(n(7,K=!0),n(8,Q=document.title||"untitled page"))});return n(6,O=!0),P}),s.$$set=P=>{"stores"in P&&n(9,o=P.stores),"page"in P&&n(10,c=P.page),"components"in P&&n(0,a=P.components),"props_0"in P&&n(1,l=P.props_0),"props_1"in P&&n(2,t=P.props_1),"props_2"in P&&n(3,r=P.props_2),"props_3"in P&&n(4,i=P.props_3),"props_4"in P&&n(5,f=P.props_4)},s.$$.update=()=>{s.$$.dirty&1536&&o.page.set(c)},[a,l,t,r,i,f,O,K,Q,o,c]}class Vt extends st{constructor(e){super(),it(this,e,Dt,Tt,Qe,{stores:9,page:10,components:0,props_0:1,props_1:2,props_2:3,props_3:4,props_4:5})}}const St={},Le=[()=>w(()=>import("./pages/__layout.svelte-2e67c489.js"),["pages/__layout.svelte-2e67c489.js","assets/pages/__layout.svelte-40acadf5.css","chunks/index-27e8d48c.js","chunks/dbClient-f8d02c03.js","chunks/_commonjsHelpers-7d66b65f.js","chunks/stores-619a4aad.js","chunks/paths-396f020f.js"]),()=>w(()=>import("./error.svelte-2a312c12.js"),["error.svelte-2a312c12.js","chunks/index-27e8d48c.js"]),()=>w(()=>import("./pages/profile/__layout.svelte-1a839a0c.js"),["pages/profile/__layout.svelte-1a839a0c.js","assets/pages/profile/__layout.svelte-5d93a5a5.css","chunks/index-27e8d48c.js","chunks/stores-619a4aad.js","chunks/navigation-3f1ea447.js","chunks/singletons-d1fb5791.js","chunks/Modal-7232ca99.js","assets/Modal-186ac193.css","chunks/SaveProfilePrompt-80006133.js"]),()=>w(()=>import("./pages/profile/aboutme/__layout.svelte-2d887bd9.js"),["pages/profile/aboutme/__layout.svelte-2d887bd9.js","assets/pages/profile/aboutme/__layout.svelte-bb935598.css","chunks/index-27e8d48c.js","chunks/navigation-3f1ea447.js","chunks/singletons-d1fb5791.js","chunks/Modal-7232ca99.js","assets/Modal-186ac193.css","chunks/SaveProfilePrompt-80006133.js"]),()=>w(()=>import("./pages/profile/mycommunity/information/__layout.svelte-7d325615.js"),["pages/profile/mycommunity/information/__layout.svelte-7d325615.js","assets/pages/profile/aboutme/__layout.svelte-bb935598.css","chunks/index-27e8d48c.js","chunks/navigation-3f1ea447.js","chunks/singletons-d1fb5791.js","chunks/Modal-7232ca99.js","assets/Modal-186ac193.css","chunks/SaveProfilePrompt-80006133.js"]),()=>w(()=>import("./pages/profile/mycommunity/meetings/__layout.svelte-765408f8.js"),["pages/profile/mycommunity/meetings/__layout.svelte-765408f8.js","assets/pages/profile/aboutme/__layout.svelte-bb935598.css","chunks/index-27e8d48c.js","chunks/navigation-3f1ea447.js","chunks/singletons-d1fb5791.js","chunks/Modal-7232ca99.js","assets/Modal-186ac193.css","chunks/SaveProfilePrompt-80006133.js"]),()=>w(()=>import("./pages/profile/mycommunity/workshops/__layout.svelte-31c51381.js"),["pages/profile/mycommunity/workshops/__layout.svelte-31c51381.js","assets/pages/profile/aboutme/__layout.svelte-bb935598.css","chunks/index-27e8d48c.js","chunks/navigation-3f1ea447.js","chunks/singletons-d1fb5791.js","chunks/Modal-7232ca99.js","assets/Modal-186ac193.css","chunks/SaveProfilePrompt-80006133.js"]),()=>w(()=>import("./pages/profile/myplace/animals/__layout.svelte-de8d5dcc.js"),["pages/profile/myplace/animals/__layout.svelte-de8d5dcc.js","assets/pages/profile/aboutme/__layout.svelte-bb935598.css","chunks/index-27e8d48c.js","chunks/navigation-3f1ea447.js","chunks/singletons-d1fb5791.js","chunks/Modal-7232ca99.js","assets/Modal-186ac193.css","chunks/SaveProfilePrompt-80006133.js"]),()=>w(()=>import("./pages/profile/myplace/assets/__layout.svelte-1be75f65.js"),["pages/profile/myplace/assets/__layout.svelte-1be75f65.js","assets/pages/profile/aboutme/__layout.svelte-bb935598.css","chunks/index-27e8d48c.js","chunks/navigation-3f1ea447.js","chunks/singletons-d1fb5791.js","chunks/Modal-7232ca99.js","assets/Modal-186ac193.css","chunks/SaveProfilePrompt-80006133.js"]),()=>w(()=>import("./pages/profile/myplace/hazards/__layout.svelte-635e7670.js"),["pages/profile/myplace/hazards/__layout.svelte-635e7670.js","assets/pages/profile/aboutme/__layout.svelte-bb935598.css","chunks/index-27e8d48c.js","chunks/navigation-3f1ea447.js","chunks/singletons-d1fb5791.js","chunks/Modal-7232ca99.js","assets/Modal-186ac193.css","chunks/SaveProfilePrompt-80006133.js"]),()=>w(()=>import("./pages/profile/settings/__layout.svelte-e703479c.js"),["pages/profile/settings/__layout.svelte-e703479c.js","assets/pages/profile/settings/__layout.svelte-9f2a880f.css","chunks/index-27e8d48c.js","chunks/navigation-3f1ea447.js","chunks/singletons-d1fb5791.js","chunks/Modal-7232ca99.js","assets/Modal-186ac193.css","chunks/SaveProfilePrompt-80006133.js"]),()=>w(()=>import("./pages/about/index.svelte-eb8a2f3d.js"),["pages/about/index.svelte-eb8a2f3d.js","assets/pages/about/index.svelte-49341910.css","chunks/index-27e8d48c.js","chunks/preload-helper-e4860ae8.js"]),()=>w(()=>import("./pages/auth/checkyouremail.svelte-778a2517.js"),["pages/auth/checkyouremail.svelte-778a2517.js","assets/pages/auth/checkyouremail.svelte-9b79cbc1.css","chunks/index-27e8d48c.js"]),()=>w(()=>import("./pages/auth/redirect.svelte-0565bfd9.js"),["pages/auth/redirect.svelte-0565bfd9.js","assets/pages/auth/redirect.svelte-43c90b95.css","chunks/index-27e8d48c.js","chunks/stores-619a4aad.js"]),()=>w(()=>import("./pages/auth/requestresetpassword.svelte-910810da.js"),["pages/auth/requestresetpassword.svelte-910810da.js","assets/pages/auth/requestresetpassword.svelte-e97dda26.css","chunks/index-27e8d48c.js","chunks/dbClient-f8d02c03.js","chunks/_commonjsHelpers-7d66b65f.js"]),()=>w(()=>import("./pages/auth/signin.svelte-46555979.js"),["pages/auth/signin.svelte-46555979.js","assets/pages/auth/signin.svelte-9c1651a0.css","chunks/index-27e8d48c.js","chunks/stores-619a4aad.js","chunks/AddressChallenge-9100db77.js","assets/AddressChallenge-b65205e8.css","chunks/utils-b80a401c.js","chunks/Modal-7232ca99.js","assets/Modal-186ac193.css"]),()=>w(()=>import("./pages/auth/signout.svelte-2f54e889.js"),["pages/auth/signout.svelte-2f54e889.js","assets/pages/auth/signout.svelte-d8f03bb5.css","chunks/index-27e8d48c.js","chunks/dbClient-f8d02c03.js","chunks/_commonjsHelpers-7d66b65f.js","chunks/navigation-3f1ea447.js","chunks/singletons-d1fb5791.js","chunks/stores-619a4aad.js"]),()=>w(()=>import("./pages/auth/updateuser.svelte-eeb8dbf8.js"),["pages/auth/updateuser.svelte-eeb8dbf8.js","assets/pages/auth/updateuser.svelte-a67ad598.css","chunks/index-27e8d48c.js","chunks/dbClient-f8d02c03.js","chunks/_commonjsHelpers-7d66b65f.js"]),()=>w(()=>import("./pages/contact/index.svelte-9e664d5e.js"),["pages/contact/index.svelte-9e664d5e.js","assets/pages/contact/index.svelte-58d62e5b.css","chunks/index-27e8d48c.js"]),()=>w(()=>import("./pages/error/network.svelte-7a3d5a9f.js"),["pages/error/network.svelte-7a3d5a9f.js","chunks/index-27e8d48c.js"]),()=>w(()=>import("./pages/index.svelte-09920732.js"),["pages/index.svelte-09920732.js","assets/pages/index.svelte-5d00bf84.css","chunks/index-27e8d48c.js","chunks/Modal-7232ca99.js","assets/Modal-186ac193.css","chunks/AddressChallenge-9100db77.js","assets/AddressChallenge-b65205e8.css","chunks/stores-619a4aad.js","chunks/utils-b80a401c.js"]),()=>w(()=>import("./pages/policies/privacy.svelte-d89b21b7.js"),["pages/policies/privacy.svelte-d89b21b7.js","assets/pages/policies/privacy.svelte-4ed5363e.css","chunks/index-27e8d48c.js"]),()=>w(()=>import("./pages/policies/termsofservice.svelte-3702e374.js"),["pages/policies/termsofservice.svelte-3702e374.js","assets/pages/policies/termsofservice.svelte-02c7bfed.css","chunks/index-27e8d48c.js"]),()=>w(()=>import("./pages/profile/aboutme/index.svelte-3923c777.js"),["pages/profile/aboutme/index.svelte-3923c777.js","assets/pages/profile/aboutme/index.svelte-8408b850.css","chunks/index-27e8d48c.js","chunks/utils-b80a401c.js","chunks/profileOptions-03445d06.js"]),()=>w(()=>import("./pages/profile/index.svelte-b9b67ecd.js"),["pages/profile/index.svelte-b9b67ecd.js","assets/pages/profile/index.svelte-2967f023.css","chunks/index-27e8d48c.js"]),()=>w(()=>import("./pages/profile/map.svelte-0b13fb43.js"),["pages/profile/map.svelte-0b13fb43.js","chunks/index-27e8d48c.js"]),()=>w(()=>import("./pages/profile/mycommunity/index.svelte-b2838a00.js"),["pages/profile/mycommunity/index.svelte-b2838a00.js","assets/pages/profile/mycommunity/index.svelte-3787f7e1.css","chunks/index-27e8d48c.js","chunks/profileOptions-03445d06.js","chunks/TextAreaInput-0ce753bd.js","assets/TextAreaInput-1766c24c.css","chunks/navigation-3f1ea447.js","chunks/singletons-d1fb5791.js","chunks/Modal-7232ca99.js","assets/Modal-186ac193.css","chunks/SaveProfilePrompt-80006133.js"]),()=>w(()=>import("./pages/profile/mycommunity/information/index.svelte-48058f93.js"),["pages/profile/mycommunity/information/index.svelte-48058f93.js","assets/pages/profile/mycommunity/meetings/index.svelte-d79360e2.css","chunks/index-27e8d48c.js","chunks/profileOptions-03445d06.js","chunks/TextAreaInput-0ce753bd.js","assets/TextAreaInput-1766c24c.css"]),()=>w(()=>import("./pages/profile/mycommunity/meetings/index.svelte-61e64fb1.js"),["pages/profile/mycommunity/meetings/index.svelte-61e64fb1.js","assets/pages/profile/mycommunity/meetings/index.svelte-d79360e2.css","chunks/index-27e8d48c.js","chunks/profileOptions-03445d06.js","chunks/TextAreaInput-0ce753bd.js","assets/TextAreaInput-1766c24c.css"]),()=>w(()=>import("./pages/profile/mycommunity/workshops/index.svelte-052d795e.js"),["pages/profile/mycommunity/workshops/index.svelte-052d795e.js","assets/pages/profile/mycommunity/workshops/index.svelte-2c98e2b2.css","chunks/index-27e8d48c.js","chunks/profileOptions-03445d06.js","chunks/TextAreaInput-0ce753bd.js","assets/TextAreaInput-1766c24c.css"]),()=>w(()=>import("./pages/profile/myplace/animals/index.svelte-93d34380.js"),["pages/profile/myplace/animals/index.svelte-93d34380.js","assets/pages/profile/myplace/animals/index.svelte-1a00fb52.css","chunks/index-27e8d48c.js","chunks/profileOptions-03445d06.js","chunks/NumberInput-b447724c.js","assets/NumberInput-920921e1.css"]),()=>w(()=>import("./pages/profile/myplace/assets/index.svelte-115a5d23.js"),["pages/profile/myplace/assets/index.svelte-115a5d23.js","assets/pages/profile/myplace/assets/index.svelte-8b879906.css","chunks/index-27e8d48c.js","chunks/profileOptions-03445d06.js"]),()=>w(()=>import("./pages/profile/myplace/hazards/index.svelte-c82b06f9.js"),["pages/profile/myplace/hazards/index.svelte-c82b06f9.js","assets/pages/profile/myplace/hazards/index.svelte-76a28c79.css","chunks/index-27e8d48c.js","chunks/profileOptions-03445d06.js","chunks/TextAreaInput-0ce753bd.js","assets/TextAreaInput-1766c24c.css"]),()=>w(()=>import("./pages/profile/myplace/index.svelte-94a250b8.js"),["pages/profile/myplace/index.svelte-94a250b8.js","assets/pages/profile/myplace/index.svelte-b75ecb0c.css","chunks/index-27e8d48c.js","chunks/profileOptions-03445d06.js","chunks/NumberInput-b447724c.js","assets/NumberInput-920921e1.css","chunks/navigation-3f1ea447.js","chunks/singletons-d1fb5791.js","chunks/Modal-7232ca99.js","assets/Modal-186ac193.css","chunks/SaveProfilePrompt-80006133.js"]),()=>w(()=>import("./pages/profile/settings/index.svelte-e9a6e058.js"),["pages/profile/settings/index.svelte-e9a6e058.js","assets/pages/profile/settings/index.svelte-e8ee133f.css","chunks/index-27e8d48c.js"]),()=>w(()=>import("./pages/survey/index.svelte-f878f819.js"),["pages/survey/index.svelte-f878f819.js","assets/pages/survey/index.svelte-8a3a8c22.css","chunks/index-27e8d48c.js","chunks/utils-b80a401c.js","chunks/NumberInput-b447724c.js","assets/NumberInput-920921e1.css","chunks/TextAreaInput-0ce753bd.js","assets/TextAreaInput-1766c24c.css"]),()=>w(()=>import("./pages/survey/pagefuture.svelte-6bc923ea.js"),["pages/survey/pagefuture.svelte-6bc923ea.js","assets/pages/survey/pagefuture.svelte-0cf011a3.css","chunks/index-27e8d48c.js"]),()=>w(()=>import("./pages/work/index.svelte-9a49263c.js"),["pages/work/index.svelte-9a49263c.js","assets/pages/work/index.svelte-02e858fa.css","chunks/index-27e8d48c.js"]),()=>w(()=>import("./pages/work/index_.svelte-9b4ae81e.js"),["pages/work/index_.svelte-9b4ae81e.js","assets/pages/work/index_.svelte-0bb53fd9.css","chunks/index-27e8d48c.js"])],Nt={"":[[0,20],[1]],about:[[0,11],[1]],contact:[[0,18],[1]],profile:[[0,2,24],[1],1],survey:[[0,35],[1],1],work:[[0,37],[1]],"auth/checkyouremail":[[0,12],[1]],"auth/redirect":[[0,13],[1]],"auth/requestresetpassword":[[0,14],[1]],"auth/signin":[[0,15],[1]],"auth/signout":[[0,16],[1]],"auth/updateuser":[[0,17],[1]],"error/network":[[0,19],[1]],"policies/privacy":[[0,21],[1]],"policies/termsofservice":[[0,22],[1]],"profile/aboutme":[[0,2,3,23],[1],1],"profile/map":[[0,2,25],[1]],"profile/mycommunity":[[0,2,26],[1],1],"profile/myplace":[[0,2,33],[1],1],"profile/settings":[[0,2,10,34],[1],1],"survey/pagefuture":[[0,36],[1]],"work/index_":[[0,38],[1]],"profile/mycommunity/information":[[0,2,4,27],[1],1],"profile/mycommunity/meetings":[[0,2,5,28],[1],1],"profile/mycommunity/workshops":[[0,2,6,29],[1],1],"profile/myplace/animals":[[0,2,7,30],[1],1],"profile/myplace/assets":[[0,2,8,31],[1],1],"profile/myplace/hazards":[[0,2,9,32],[1],1]};function We(s){return s instanceof Error||s&&s.name&&s.message?s:new Error(JSON.stringify(s))}function Ye(s){if(s.fallthrough)throw new Error("fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching");if("maxage"in s)throw new Error("maxage should be replaced with cache: { maxage }");const e=s.status&&s.status>=400&&s.status<=599&&!s.redirect;if(s.error||e){const n=s.status;if(!s.error&&e)return{status:n||500,error:new Error};const o=typeof s.error=="string"?new Error(s.error):s.error;return o instanceof Error?!n||n<400||n>599?(console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500'),{status:500,error:o}):{status:n,error:o}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof o}"`)}}if(s.redirect){if(!s.status||Math.floor(s.status/100)!==3)return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if(typeof s.redirect!="string")return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}if(s.dependencies&&(!Array.isArray(s.dependencies)||s.dependencies.some(n=>typeof n!="string")))return{status:500,error:new Error('"dependencies" property returned from load() must be of type string[]')};if(s.context)throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');return s}function Ut(s,e){return s==="/"||e==="ignore"?s:e==="never"?s.endsWith("/")?s.slice(0,-1):s:e==="always"&&!s.endsWith("/")?s+"/":s}function jt(s){let e=5381,n=s.length;if(typeof s=="string")for(;n;)e=e*33^s.charCodeAt(--n);else for(;n;)e=e*33^s[--n];return(e>>>0).toString(36)}function xe(s){let e=s.baseURI;if(!e){const n=s.getElementsByTagName("base");e=n.length?n[0].href:s.URL}return e}function Re(){return{x:pageXOffset,y:pageYOffset}}function Fe(s){return s.composedPath().find(n=>n instanceof Node&&n.nodeName.toUpperCase()==="A")}function Ge(s){return s instanceof SVGAElement?new URL(s.href.baseVal,document.baseURI):new URL(s.href)}function Xe(s){const e=pe(s);let n=!0;function o(){n=!0,e.update(l=>l)}function c(l){n=!1,e.set(l)}function a(l){let t;return e.subscribe(r=>{(t===void 0||n&&r!==t)&&l(t=r)})}return{notify:o,set:c,subscribe:a}}function Ct(){const{set:s,subscribe:e}=pe(!1),n="1653179840178";let o;async function c(){clearTimeout(o);const l=await fetch(`${gt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(l.ok){const{version:t}=await l.json(),r=t!==n;return r&&(s(!0),clearTimeout(o)),r}else throw new Error(`Version check failed: ${l.status}`)}return{subscribe:e,check:c}}function zt(s,e){let o=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof s=="string"?s:s.url)}]`;e&&typeof e.body=="string"&&(o+=`[sveltekit\\:data-body="${jt(e.body)}"]`);const c=document.querySelector(o);if(c&&c.textContent){const a=JSON.parse(c.textContent),{body:l}=a,t=Je(a,["body"]);return Promise.resolve(new Response(l,t))}return fetch(s,e)}const qt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function Jt(s){const e=[],n=[];let o=!0;return{pattern:s===""?/^\/$/:new RegExp(`^${decodeURIComponent(s).split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/).map((a,l,t)=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return e.push(r[1]),n.push(r[2]),"(?:/(.*))?";const i=l===t.length-1;return a&&"/"+a.split(/\[(.+?)\]/).map((f,O)=>{if(O%2){const[,K,Q,P]=qt.exec(f);return e.push(Q),n.push(P),K?"(.*?)":"([^/]+?)"}return i&&f.includes(".")&&(o=!1),f.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${o?"/?":""}$`),names:e,types:n}}function Kt(s,e,n,o){const c={};for(let a=0;a<e.length;a+=1){const l=e[a],t=n[a],r=s[a+1]||"";if(t){const i=o[t];if(!i)throw new Error(`Missing "${t}" param matcher`);if(!i(r))return}c[l]=r}return c}function Bt(s,e,n){return Object.entries(e).map(([c,[a,l,t]])=>{const{pattern:r,names:i,types:f}=Jt(c);return{id:c,exec:O=>{const K=r.exec(O);if(K)return Kt(K,i,f,n)},a:a.map(O=>s[O]),b:l.map(O=>s[O]),has_shadow:!!t}})}const et="sveltekit:scroll",ee="sveltekit:index",$e=Bt(Le,Nt,St),Mt=Le[0](),Wt=Le[1](),Ze={};let le={};try{le=JSON.parse(sessionStorage[et])}catch{}function ye(s){le[s]=Re()}const He=window.fetch;function Yt({target:s,session:e,base:n,trailing_slash:o}){var Ue;const c=new Map,a=[],l={url:Xe({}),page:Xe({}),navigating:pe(null),session:pe(e),updated:Ct()},t={id:null,promise:null},r={before_navigate:[],after_navigate:[]};let i={branch:[],error:null,session_id:0,stuff:Ze,url:null},f=!1,O=!0,K=!1,Q=1,P=null,Ae,Oe,Pe=!1;l.session.subscribe(async u=>{Oe=u,Pe&&(Q+=1,ge(new URL(location.href),[],!0))}),Pe=!0;let ne=!0,Y=(Ue=history.state)==null?void 0:Ue[ee];Y||(Y=Date.now(),history.replaceState(ce(B({},history.state),{[ee]:Y}),"",location.href));const de=le[Y];de&&(history.scrollRestoration="manual",scrollTo(de.x,de.y));let me=!1,he,Ie;async function Te(u,{noscroll:p=!1,replaceState:b=!1,keepfocus:_=!1,state:d={}},v){const m=new URL(u,xe(document));if(ne)return be({url:m,scroll:p?Re():null,keepfocus:_,redirect_chain:v,details:{state:d,replaceState:b},accepted:()=>{},blocked:()=>{}});await oe(m)}async function De(u){const p=Ne(u);if(!p)throw new Error("Attempted to prefetch a URL that does not belong to this app");return t.promise=Se(p,!1),t.id=p.id,t.promise}async function ge(u,p,b,_){var g,$,T;const d=Ne(u),v=Ie={};let m=d&&await Se(d,b);if(!m&&u.origin===location.origin&&u.pathname===location.pathname&&(m=await ie({status:404,error:new Error(`Not found: ${u.pathname}`),url:u,routeId:null})),!m)return await oe(u),!1;if(Ie!==v)return!1;if(a.length=0,m.redirect)if(p.length>10||p.includes(u.pathname))m=await ie({status:500,error:new Error("Redirect loop"),url:u,routeId:null});else return ne?Te(new URL(m.redirect,u).href,{},[...p,u.pathname]):await oe(new URL(m.redirect,location.href)),!1;else(($=(g=m.props)==null?void 0:g.page)==null?void 0:$.status)>=400&&await l.updated.check()&&await oe(u);if(K=!0,_&&_.details){const{details:y}=_,k=y.replaceState?0:1;y.state[ee]=Y+=k,history[y.replaceState?"replaceState":"pushState"](y.state,"",u)}if(f?(i=m.state,Ae.$set(m.props)):Ve(m),_){const{scroll:y,keepfocus:k}=_;if(!k){const h=document.body,V=h.getAttribute("tabindex");(T=getSelection())==null||T.removeAllRanges(),h.tabIndex=-1,h.focus({preventScroll:!0}),V!==null?h.setAttribute("tabindex",V):h.removeAttribute("tabindex")}if(await Ke(),O){const h=u.hash&&document.getElementById(u.hash.slice(1));y?scrollTo(y.x,y.y):h?h.scrollIntoView():scrollTo(0,0)}}else await Ke();t.promise=null,t.id=null,O=!0,K=!1,m.props.page&&(he=m.props.page);const E=m.state.branch[m.state.branch.length-1];return ne=(E==null?void 0:E.module.router)!==!1,!0}function Ve(u){i=u.state;const p=document.querySelector("style[data-sveltekit]");if(p&&p.remove(),he=u.props.page,Ae=new Vt({target:s,props:ce(B({},u.props),{stores:l}),hydrate:!0}),f=!0,ne){const b={from:null,to:new URL(location.href)};r.after_navigate.forEach(_=>_(b))}}async function we({url:u,params:p,stuff:b,branch:_,status:d,error:v,routeId:m}){var h,V;const E=_.filter(Boolean),g=E.find(I=>{var z;return(z=I.loaded)==null?void 0:z.redirect}),$={redirect:(h=g==null?void 0:g.loaded)==null?void 0:h.redirect,state:{url:u,params:p,branch:_,error:v,stuff:b,session_id:Q},props:{components:E.map(I=>I.module.default)}};for(let I=0;I<E.length;I+=1){const z=E[I].loaded;$.props[`props_${I}`]=z?await z.props:null}if(!i.url||u.href!==i.url.href||i.error!==v||i.stuff!==b){$.props.page={error:v,params:p,routeId:m,status:d,stuff:b,url:u};const I=(z,D)=>{Object.defineProperty($.props.page,z,{get:()=>{throw new Error(`$page.${z} has been replaced by $page.url.${D}`)}})};I("origin","origin"),I("path","pathname"),I("query","searchParams")}const y=E[E.length-1],k=(V=y==null?void 0:y.loaded)==null?void 0:V.cache;if(k){const I=u.pathname+u.search;let z=!1;const D=()=>{c.get(I)===$&&c.delete(I),q(),clearTimeout(S)},S=setTimeout(D,k.maxage*1e3),q=l.session.subscribe(()=>{z&&D()});z=!0,c.set(I,$)}return $}async function se({status:u,error:p,module:b,url:_,params:d,stuff:v,props:m,routeId:E}){const g={module:b,uses:{params:new Set,url:!1,session:!1,stuff:!1,dependencies:new Set},loaded:null,stuff:v};function $(k){const{href:h}=new URL(k,_);g.uses.dependencies.add(h)}m&&g.uses.dependencies.add(_.href);const T={};for(const k in d)Object.defineProperty(T,k,{get(){return g.uses.params.add(k),d[k]},enumerable:!0});const y=Oe;if(b.load){const k={routeId:E,params:T,props:m||{},get url(){return g.uses.url=!0,new Proxy(_,{get:(V,I)=>{if(I==="hash")throw new Error("url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component.");return Reflect.get(V,I,V)}})},get session(){return g.uses.session=!0,y},get stuff(){return g.uses.stuff=!0,B({},v)},fetch(V,I){const z=typeof V=="string"?V:V.url;return $(z),f?He(V,I):zt(V,I)},status:u!=null?u:null,error:p!=null?p:null};let h;if(h=await b.load.call(null,k),!h)throw new Error("load function must return a value");g.loaded=Ye(h),g.loaded.stuff&&(g.stuff=g.loaded.stuff),g.loaded.dependencies&&g.loaded.dependencies.forEach($)}else m&&(g.loaded=Ye({props:m}));return g}async function Se({id:u,url:p,params:b,route:_},d){var V,I,z;if(t.id===u&&t.promise)return t.promise;if(!d){const D=c.get(u);if(D)return D}const{a:v,b:m,has_shadow:E}=_,g=i.url&&{url:u!==i.url.pathname+i.url.search,params:Object.keys(b).filter(D=>i.params[D]!==b[D]),session:Q!==i.session_id};let $=[],T=Ze,y=!1,k=200,h=null;v.forEach(D=>D().catch(()=>{}));e:for(let D=0;D<v.length;D+=1){let S;try{if(!v[D])continue;const q=await v[D](),x=i.branch[D];if(!x||q!==x.module||g.url&&x.uses.url||g.params.some(te=>x.uses.params.has(te))||g.session&&x.uses.session||Array.from(x.uses.dependencies).some(te=>a.some(ue=>ue(te)))||y&&x.uses.stuff){let te={};const ue=E&&D===v.length-1;if(ue){const ae=await He(`${p.pathname}${p.pathname.endsWith("/")?"":"/"}__data.json${p.search}`,{headers:{"x-sveltekit-load":"true"}});if(ae.ok){const je=ae.headers.get("x-sveltekit-location");if(je)return{redirect:je,props:{},state:i};te=ae.status===204?{}:await ae.json()}else k=ae.status,h=new Error("Failed to load data")}if(h||(S=await se({module:q,url:p,params:b,props:te,stuff:T,routeId:_.id})),S&&(ue&&(S.uses.url=!0),S.loaded)){if(S.loaded.error&&(k=S.loaded.status,h=S.loaded.error),S.loaded.redirect)return{redirect:S.loaded.redirect,props:{},state:i};S.loaded.stuff&&(y=!0)}}else S=x}catch(q){k=500,h=We(q)}if(h){for(;D--;)if(m[D]){let q,x,fe=D;for(;!(x=$[fe]);)fe-=1;try{if(q=await se({status:k,error:h,module:await m[D](),url:p,params:b,stuff:x.stuff,routeId:_.id}),(V=q==null?void 0:q.loaded)!=null&&V.error)continue;(I=q==null?void 0:q.loaded)!=null&&I.stuff&&(T=B(B({},T),q.loaded.stuff)),$=$.slice(0,fe+1).concat(q);break e}catch{continue}}return await ie({status:k,error:h,url:p,routeId:_.id})}else(z=S==null?void 0:S.loaded)!=null&&z.stuff&&(T=B(B({},T),S.loaded.stuff)),$.push(S)}return await we({url:p,params:b,stuff:T,branch:$,status:k,error:h,routeId:_.id})}async function ie({status:u,error:p,url:b,routeId:_}){var E,g;const d={},v=await se({module:await Mt,url:b,params:d,stuff:{},routeId:_}),m=await se({status:u,error:p,module:await Wt,url:b,params:d,stuff:v&&v.loaded&&v.loaded.stuff||{},routeId:_});return await we({url:b,params:d,stuff:B(B({},(E=v==null?void 0:v.loaded)==null?void 0:E.stuff),(g=m==null?void 0:m.loaded)==null?void 0:g.stuff),branch:[v,m],status:u,error:p,routeId:_})}function Ne(u){if(u.origin!==location.origin||!u.pathname.startsWith(n))return;const p=decodeURI(u.pathname.slice(n.length)||"/");for(const b of $e){const _=b.exec(p);if(_)return{id:u.pathname+u.search,route:b,params:_,url:u}}}async function be({url:u,scroll:p,keepfocus:b,redirect_chain:_,details:d,accepted:v,blocked:m}){const E=i.url;let g=!1;const $={from:E,to:u,cancel:()=>g=!0};if(r.before_navigate.forEach(h=>h($)),g){m();return}const T=Ut(u.pathname,o),y=new URL(u.origin+T+u.search+u.hash);if(ye(Y),v(),f&&l.navigating.set({from:i.url,to:y}),await ge(y,_,!1,{scroll:p,keepfocus:b,details:d})){const h={from:E,to:y};r.after_navigate.forEach(V=>V(h)),l.navigating.set(null)}}function oe(u){return location.href=u.href,new Promise(()=>{})}return{after_navigate:u=>{ke(()=>(r.after_navigate.push(u),()=>{const p=r.after_navigate.indexOf(u);r.after_navigate.splice(p,1)}))},before_navigate:u=>{ke(()=>(r.before_navigate.push(u),()=>{const p=r.before_navigate.indexOf(u);r.before_navigate.splice(p,1)}))},disable_scroll_handling:()=>{(K||!f)&&(O=!1)},goto:(u,p={})=>Te(u,p,[]),invalidate:u=>{if(typeof u=="function")a.push(u);else{const{href:p}=new URL(u,location.href);a.push(b=>b===p)}return P||(P=Promise.resolve().then(async()=>{await ge(new URL(location.href),[],!0),P=null})),P},prefetch:async u=>{const p=new URL(u,xe(document));await De(p)},prefetch_routes:async u=>{const b=(u?$e.filter(_=>u.some(d=>_.exec(d))):$e).map(_=>Promise.all(_.a.map(d=>d())));await Promise.all(b)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",_=>{let d=!1;const v={from:i.url,to:null,cancel:()=>d=!0};r.before_navigate.forEach(m=>m(v)),d?(_.preventDefault(),_.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ye(Y);try{sessionStorage[et]=JSON.stringify(le)}catch{}}});const u=_=>{const d=Fe(_);d&&d.href&&d.hasAttribute("sveltekit:prefetch")&&De(Ge(d))};let p;const b=_=>{clearTimeout(p),p=setTimeout(()=>{var d;(d=_.target)==null||d.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",u),addEventListener("mousemove",b),addEventListener("sveltekit:trigger_prefetch",u),addEventListener("click",_=>{if(!ne||_.button||_.which!==1||_.metaKey||_.ctrlKey||_.shiftKey||_.altKey||_.defaultPrevented)return;const d=Fe(_);if(!d||!d.href)return;const v=d instanceof SVGAElement,m=Ge(d);if(!v&&m.origin==="null")return;const E=(d.getAttribute("rel")||"").split(/\s+/);if(d.hasAttribute("download")||E.includes("external")||d.hasAttribute("sveltekit:reload")||(v?d.target.baseVal:d.target))return;const[g,$]=m.href.split("#");if($!==void 0&&g===location.href.split("#")[0]){me=!0,ye(Y),l.page.set(ce(B({},he),{url:m})),l.page.notify();return}be({url:m,scroll:d.hasAttribute("sveltekit:noscroll")?Re():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:m.href===location.href},accepted:()=>_.preventDefault(),blocked:()=>_.preventDefault()})}),addEventListener("popstate",_=>{if(_.state&&ne){if(_.state[ee]===Y)return;be({url:new URL(location.href),scroll:le[_.state[ee]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{Y=_.state[ee]},blocked:()=>{const d=Y-_.state[ee];history.go(d)}})}}),addEventListener("hashchange",()=>{me&&(me=!1,history.replaceState(ce(B({},history.state),{[ee]:++Y}),"",location.href))})},_hydrate:async({status:u,error:p,nodes:b,params:_,routeId:d})=>{const v=new URL(location.href),m=[];let E={},g,$;try{for(let T=0;T<b.length;T+=1){const y=T===b.length-1;let k;if(y){const V=document.querySelector('script[sveltekit\\:data-type="props"]');V&&(k=JSON.parse(V.textContent))}const h=await se({module:await b[T],url:v,params:_,stuff:E,status:y?u:void 0,error:y?p:void 0,props:k,routeId:d});if(k&&(h.uses.dependencies.add(v.href),h.uses.url=!0),m.push(h),h&&h.loaded)if(h.loaded.error){if(p)throw h.loaded.error;$={status:h.loaded.status,error:h.loaded.error,url:v,routeId:d}}else h.loaded.stuff&&(E=B(B({},E),h.loaded.stuff))}g=$?await ie($):await we({url:v,params:_,stuff:E,branch:m,status:u,error:p,routeId:d})}catch(T){if(p)throw T;g=await ie({status:500,error:We(T),url:v,routeId:d})}g.redirect&&await oe(new URL(g.redirect,location.href)),Ve(g)}}}async function Ht({paths:s,target:e,session:n,route:o,spa:c,trailing_slash:a,hydrate:l}){const t=Yt({target:e,session:n,base:s.base,trailing_slash:a});wt({client:t}),ht(s),l&&await t._hydrate(l),o&&(c&&t.goto(location.href,{replaceState:!0}),t._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Ht as start};
