import{S as B,i as C,s as I,w as O,x as P,y as q,q as _,o as $,B as A,F as R,e as k,k as T,t as G,c as w,a as y,m as E,h as H,d as S,b as c,g as U,N as g,R as F,p as V,G as j,H as z,I as D,T as J,n as K}from"../../../chunks/index-2a980a40.js";import{b as L}from"../../../chunks/navigation-7ffe60d0.js";import{M as Q}from"../../../chunks/Modal-a92e6365.js";import{S as W}from"../../../chunks/SaveProfilePrompt-903d0a9b.js";import"../../../chunks/singletons-cdeec3fd.js";function N(l){let t,s;return t=new Q({props:{$$slots:{default:[X]},$$scope:{ctx:l}}}),t.$on("exit",l[3]),{c(){O(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,o){q(t,e,o),s=!0},p(e,o){const i={};o&64&&(i.$$scope={dirty:o,ctx:e}),t.$set(i)},i(e){s||(_(t.$$.fragment,e),s=!0)},o(e){$(t.$$.fragment,e),s=!1},d(e){A(t,e)}}}function X(l){let t,s;return t=new W({}),{c(){O(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,o){q(t,e,o),s=!0},i(e){s||(_(t.$$.fragment,e),s=!0)},o(e){$(t.$$.fragment,e),s=!1},d(e){A(t,e)}}}function Y(l){let t,s,e,o,i,u,p,m,d,h,a=l[1]&&N(l);const v=l[2].default,r=R(v,l,l[6],null);return{c(){t=k("section"),a&&a.c(),s=T(),e=k("form"),o=k("button"),i=G("Save My Answers"),p=T(),r&&r.c(),this.h()},l(n){t=w(n,"SECTION",{class:!0});var f=y(t);a&&a.l(f),s=E(f),e=w(f,"FORM",{id:!0,class:!0,action:!0,method:!0});var b=y(e);o=w(b,"BUTTON",{type:!0,form:!0});var M=y(o);i=H(M,"Save My Answers"),M.forEach(S),p=E(b),r&&r.l(b),b.forEach(S),f.forEach(S),this.h()},h(){o.hidden=u=!l[0],c(o,"type","submit"),c(o,"form","settingsForm"),c(e,"id","settingsForm"),c(e,"class","flex flex-col py-3 mx-auto min-h-full w-full text-orange-900 bg-orange-300"),c(e,"action","/profile/settings"),c(e,"method","POST"),c(t,"class","min-h-full bg-orange-300")},m(n,f){U(n,t,f),a&&a.m(t,null),g(t,s),g(t,e),g(e,o),g(o,i),g(e,p),r&&r.m(e,null),m=!0,d||(h=[F(o,"click",l[4]),F(e,"change",l[5])],d=!0)},p(n,[f]){n[1]?a?(a.p(n,f),f&2&&_(a,1)):(a=N(n),a.c(),_(a,1),a.m(t,s)):a&&(K(),$(a,1,1,()=>{a=null}),V()),(!m||f&1&&u!==(u=!n[0]))&&(o.hidden=u),r&&r.p&&(!m||f&64)&&j(r,v,n,n[6],m?D(v,n[6],f,null):z(n[6]),null)},i(n){m||(_(a),_(r,n),m=!0)},o(n){$(a),$(r,n),m=!1},d(n){n&&S(t),a&&a.d(),r&&r.d(n),d=!1,J(h)}}}function Z(l,t,s){let{$$slots:e={},$$scope:o}=t,i=!1,u=!1;L(({})=>{!i||s(1,u=!u)});const p=()=>s(1,u=!u),m=()=>{s(0,i=!1)},d=()=>{s(0,i=!0)};return l.$$set=h=>{"$$scope"in h&&s(6,o=h.$$scope)},[i,u,e,p,m,d,o]}class ae extends B{constructor(t){super(),C(this,t,Z,Y,I,{})}}export{ae as default};