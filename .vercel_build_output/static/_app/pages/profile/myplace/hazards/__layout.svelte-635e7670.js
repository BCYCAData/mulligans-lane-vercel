import{S as L,i as Q,s as R,x as H,y as U,z as G,r as k,p as O,C as K,N as j,e as $,k as M,t as A,c as v,a as w,m as N,d as h,h as B,b as m,g as J,G as d,K as I,q as W,O as X,P as Y,Q as Z,L as ee,o as te}from"../../../../chunks/index-27e8d48c.js";import{b as se}from"../../../../chunks/navigation-3f1ea447.js";import{M as oe}from"../../../../chunks/Modal-7232ca99.js";import{S as ae}from"../../../../chunks/SaveProfilePrompt-80006133.js";import"../../../../chunks/singletons-d1fb5791.js";function D(r){let t,s;return t=new oe({props:{$$slots:{default:[le]},$$scope:{ctx:r}}}),t.$on("exit",r[3]),{c(){H(t.$$.fragment)},l(e){U(t.$$.fragment,e)},m(e,o){G(t,e,o),s=!0},p(e,o){const f={};o&128&&(f.$$scope={dirty:o,ctx:e}),t.$set(f)},i(e){s||(k(t.$$.fragment,e),s=!0)},o(e){O(t.$$.fragment,e),s=!1},d(e){K(t,e)}}}function le(r){let t,s;return t=new ae({}),{c(){H(t.$$.fragment)},l(e){U(t.$$.fragment,e)},m(e,o){G(t,e,o),s=!0},i(e){s||(k(t.$$.fragment,e),s=!0)},o(e){O(t.$$.fragment,e),s=!1},d(e){K(t,e)}}}function re(r){let t,s,e,o,f,_,i,S,b,E,n,T,y,z,p,P,V,a=r[1]&&D(r);const F=r[2].default,u=j(F,r,r[7],null);return{c(){t=$("section"),a&&a.c(),s=M(),e=$("form"),o=$("div"),f=$("div"),_=M(),i=$("button"),S=A("Save My Answers"),E=M(),n=$("button"),T=A("Cancel"),z=M(),u&&u.c(),this.h()},l(l){t=v(l,"SECTION",{class:!0});var c=w(t);a&&a.l(c),s=N(c),e=v(c,"FORM",{id:!0,class:!0,action:!0,method:!0});var C=w(e);o=v(C,"DIV",{class:!0});var g=w(o);f=v(g,"DIV",{class:!0}),w(f).forEach(h),_=N(g),i=v(g,"BUTTON",{class:!0,type:!0,form:!0});var q=w(i);S=B(q,"Save My Answers"),q.forEach(h),E=N(g),n=v(g,"BUTTON",{class:!0});var x=w(n);T=B(x,"Cancel"),x.forEach(h),g.forEach(h),z=N(C),u&&u.l(C),C.forEach(h),c.forEach(h),this.h()},h(){m(f,"class","w-1/3"),m(i,"class","w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"),i.hidden=b=!r[0],m(i,"type","submit"),m(i,"form","profileHazardsForm"),m(n,"class","w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"),n.hidden=y=!r[0],m(o,"class","flex flex-row"),m(e,"id","profileHazardsForm"),m(e,"class","flex flex-col mx-auto min-h-full w-full text-orange-900 bg-orange-300"),m(e,"action","/profile/myplace/hazards"),m(e,"method","POST"),m(t,"class","content min-h-full bg-orange-300")},m(l,c){J(l,t,c),a&&a.m(t,null),d(t,s),d(t,e),d(e,o),d(o,f),d(o,_),d(o,i),d(i,S),d(o,E),d(o,n),d(n,T),d(e,z),u&&u.m(e,null),p=!0,P||(V=[I(i,"click",r[4]),I(n,"click",r[5]),I(e,"change",r[6])],P=!0)},p(l,[c]){l[1]?a?(a.p(l,c),c&2&&k(a,1)):(a=D(l),a.c(),k(a,1),a.m(t,s)):a&&(te(),O(a,1,1,()=>{a=null}),W()),(!p||c&1&&b!==(b=!l[0]))&&(i.hidden=b),(!p||c&1&&y!==(y=!l[0]))&&(n.hidden=y),u&&u.p&&(!p||c&128)&&X(u,F,l,l[7],p?Z(F,l[7],c,null):Y(l[7]),null)},i(l){p||(k(a),k(u,l),p=!0)},o(l){O(a),O(u,l),p=!1},d(l){l&&h(t),a&&a.d(),u&&u.d(l),P=!1,ee(V)}}}function ne(r,t,s){let{$$slots:e={},$$scope:o}=t,f=!1,_=!1;se(({to:n,cancel:T})=>{!f||s(1,_=!_)});const i=()=>s(1,_=!_),S=n=>{s(0,f=!1)},b=n=>{s(0,f=!1)},E=n=>{s(0,f=!0)};return r.$$set=n=>{"$$scope"in n&&s(7,o=n.$$scope)},[f,_,e,i,S,b,E,o]}class de extends L{constructor(t){super(),Q(this,t,ne,re,R,{})}}export{de as default};
