import{S as z,i as J,s as K,w as U,x as G,y as H,q as k,o as T,B as j,F as L,e as $,k as N,t as x,c as v,a as w,m as O,d as h,h as D,b as m,g as Q,N as d,R as B,p as W,G as X,H as Y,I as Z,T as ee,n as te}from"../../../../chunks/index-b429d93a.js";import{b as se}from"../../../../chunks/navigation-c2011339.js";import{M as oe}from"../../../../chunks/Modal-454a9f1a.js";import{S as ae}from"../../../../chunks/SaveProfilePrompt-ca8dc1ce.js";import"../../../../chunks/singletons-d1fb5791.js";/* empty css                                                             */function R(r){let t,s;return t=new oe({props:{$$slots:{default:[le]},$$scope:{ctx:r}}}),t.$on("exit",r[3]),{c(){U(t.$$.fragment)},l(e){G(t.$$.fragment,e)},m(e,o){H(t,e,o),s=!0},p(e,o){const i={};o&128&&(i.$$scope={dirty:o,ctx:e}),t.$set(i)},i(e){s||(k(t.$$.fragment,e),s=!0)},o(e){T(t.$$.fragment,e),s=!1},d(e){j(t,e)}}}function le(r){let t,s;return t=new ae({}),{c(){U(t.$$.fragment)},l(e){G(t.$$.fragment,e)},m(e,o){H(t,e,o),s=!0},i(e){s||(k(t.$$.fragment,e),s=!0)},o(e){T(t.$$.fragment,e),s=!1},d(e){j(t,e)}}}function re(r){let t,s,e,o,i,_,f,S,b,E,n,A,y,C,p,F,P,a=r[1]&&R(r);const I=r[2].default,u=L(I,r,r[7],null);return{c(){t=$("section"),a&&a.c(),s=N(),e=$("form"),o=$("div"),i=$("div"),_=N(),f=$("button"),S=x("Save My Answers"),E=N(),n=$("button"),A=x("Cancel"),C=N(),u&&u.c(),this.h()},l(l){t=v(l,"SECTION",{class:!0});var c=w(t);a&&a.l(c),s=O(c),e=v(c,"FORM",{id:!0,class:!0,action:!0,method:!0});var M=w(e);o=v(M,"DIV",{class:!0});var g=w(o);i=v(g,"DIV",{class:!0}),w(i).forEach(h),_=O(g),f=v(g,"BUTTON",{class:!0,type:!0,form:!0});var V=w(f);S=D(V,"Save My Answers"),V.forEach(h),E=O(g),n=v(g,"BUTTON",{class:!0});var q=w(n);A=D(q,"Cancel"),q.forEach(h),g.forEach(h),C=O(M),u&&u.l(M),M.forEach(h),c.forEach(h),this.h()},h(){m(i,"class","w-1/3"),m(f,"class","w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"),f.hidden=b=!r[0],m(f,"type","submit"),m(f,"form","profileAnimalsForm"),m(n,"class","w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"),n.hidden=y=!r[0],m(o,"class","flex flex-row"),m(e,"id","profileAnimalsForm"),m(e,"class","flex flex-col mx-auto min-h-full w-full text-orange-900 bg-orange-300"),m(e,"action","/profile/myplace/animals"),m(e,"method","POST"),m(t,"class","min-h-full bg-orange-300")},m(l,c){Q(l,t,c),a&&a.m(t,null),d(t,s),d(t,e),d(e,o),d(o,i),d(o,_),d(o,f),d(f,S),d(o,E),d(o,n),d(n,A),d(e,C),u&&u.m(e,null),p=!0,F||(P=[B(f,"click",r[4]),B(n,"click",r[5]),B(e,"change",r[6])],F=!0)},p(l,[c]){l[1]?a?(a.p(l,c),c&2&&k(a,1)):(a=R(l),a.c(),k(a,1),a.m(t,s)):a&&(te(),T(a,1,1,()=>{a=null}),W()),(!p||c&1&&b!==(b=!l[0]))&&(f.hidden=b),(!p||c&1&&y!==(y=!l[0]))&&(n.hidden=y),u&&u.p&&(!p||c&128)&&X(u,I,l,l[7],p?Z(I,l[7],c,null):Y(l[7]),null)},i(l){p||(k(a),k(u,l),p=!0)},o(l){T(a),T(u,l),p=!1},d(l){l&&h(t),a&&a.d(),u&&u.d(l),F=!1,ee(P)}}}function ne(r,t,s){let{$$slots:e={},$$scope:o}=t,i=!1,_=!1;se(async({cancel:n})=>{i&&(n(),s(1,_=!_))});const f=()=>s(1,_=!_),S=n=>{s(0,i=!1)},b=n=>{s(0,i=!1)},E=n=>{s(0,i=!0)};return r.$$set=n=>{"$$scope"in n&&s(7,o=n.$$scope)},[i,_,e,f,S,b,E,o]}class _e extends z{constructor(t){super(),J(this,t,ne,re,K,{})}}export{_e as default};
