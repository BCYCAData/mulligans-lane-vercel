import{S as ne,i as le,s as ie,x as z,y as G,z as H,r as v,p as T,C as K,e as d,t as S,k as y,c as p,a as $,h as q,d as _,m as I,b as s,g as ue,G as a,K as ce,q as te,M as me,o as re,R as fe}from"../../chunks/index-574d3e5d.js";import{s as se}from"../../chunks/stores-e24d1d4b.js";import{A as de,a as pe}from"../../chunks/AddressChallenge-36588023.js";import{M as ge}from"../../chunks/Modal-3706472a.js";import"../../chunks/utils-b80a401c.js";/* empty css                                                       */function ae(u){let t,r;return t=new de({props:{message:u[1].signInError}}),{c(){z(t.$$.fragment)},l(e){G(t.$$.fragment,e)},m(e,o){H(t,e,o),r=!0},p(e,o){const g={};o&2&&(g.message=e[1].signInError),t.$set(g)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){T(t.$$.fragment,e),r=!1},d(e){K(t,e)}}}function oe(u){let t,r;return t=new ge({props:{$$slots:{default:[he]},$$scope:{ctx:u}}}),t.$on("exit",u[2]),{c(){z(t.$$.fragment)},l(e){G(t.$$.fragment,e)},m(e,o){H(t,e,o),r=!0},p(e,o){const g={};o&16&&(g.$$scope={dirty:o,ctx:e}),t.$set(g)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){T(t.$$.fragment,e),r=!1},d(e){K(t,e)}}}function he(u){let t,r;return t=new pe({}),{c(){z(t.$$.fragment)},l(e){G(t.$$.fragment,e)},m(e,o){H(t,e,o),r=!0},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){T(t.$$.fragment,e),r=!1},d(e){K(t,e)}}}function _e(u){let t,r,e,o,g,i,m,V,b,A,N,w,B,D,C,x,O,U,F,E,R,k,W,M,Y,J,n=u[1].signInError!=="none"&&u[1].signInError!==""&&ae(u),l=u[0]&&oe(u);return{c(){t=d("div"),r=d("div"),e=d("h1"),o=S("Welcome Back"),g=y(),i=d("form"),m=d("input"),V=y(),b=d("input"),A=y(),N=d("div"),w=d("a"),B=S("Forgot Your Password? <<<"),D=y(),n&&n.c(),C=y(),x=d("button"),O=S("Sign In"),U=y(),l&&l.c(),F=y(),E=d("div"),R=S(`Not registered?\r
		`),k=d("button"),W=S("Create an account"),this.h()},l(c){t=p(c,"DIV",{class:!0});var f=$(t);r=p(f,"DIV",{class:!0});var P=$(r);e=p(P,"H1",{class:!0});var L=$(e);o=q(L,"Welcome Back"),L.forEach(_),g=I(P),i=p(P,"FORM",{action:!0,method:!0});var h=$(i);m=p(h,"INPUT",{id:!0,type:!0,class:!0,name:!0,placeholder:!0,autocomplete:!0}),V=I(h),b=p(h,"INPUT",{id:!0,type:!0,class:!0,name:!0,placeholder:!0}),A=I(h),N=p(h,"DIV",{class:!0});var Q=$(N);w=p(Q,"A",{href:!0,class:!0});var X=$(w);B=q(X,"Forgot Your Password? <<<"),X.forEach(_),Q.forEach(_),D=I(h),n&&n.l(h),C=I(h),x=p(h,"BUTTON",{type:!0,class:!0});var Z=$(x);O=q(Z,"Sign In"),Z.forEach(_),h.forEach(_),U=I(P),l&&l.l(P),P.forEach(_),F=I(f),E=p(f,"DIV",{class:!0});var j=$(E);R=q(j,`Not registered?\r
		`),k=p(j,"BUTTON",{class:!0});var ee=$(k);W=q(ee,"Create an account"),ee.forEach(_),j.forEach(_),f.forEach(_),this.h()},h(){s(e,"class","text-2xl text-center"),s(m,"id","email"),s(m,"type","email"),s(m,"class","block text-xl border border-orange-700 w-full py-3 rounded mb-4"),s(m,"name","email"),m.required=!0,s(m,"placeholder","Email"),s(m,"autocomplete","email"),s(b,"id","password"),s(b,"type","password"),s(b,"class","block text-xl border border-orange-700 w-full py-3 rounded mb-4"),s(b,"name","password"),b.required=!0,s(b,"placeholder","Password"),s(w,"href","/auth/requestresetpassword"),s(w,"class","text-sm font-semibold text-orange-600 dark:text-gray-400 hover:underline"),s(N,"class","flex justify-between mt-4 mb-3"),s(x,"type","submit"),s(x,"class","w-full text-center py-3 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1"),s(i,"action","/api/auth/signin"),s(i,"method","POST"),s(r,"class","bg-white p-6 sm:ml-0 rounded shadow-md text-black w-5/6 sm:w-full"),s(k,"class","text-center py-1 px-5 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1"),s(E,"class","text-grey-dark mt-6"),s(t,"class","flex flex-col items-center max-w-sm max-w-screen-xsm mx-auto")},m(c,f){ue(c,t,f),a(t,r),a(r,e),a(e,o),a(r,g),a(r,i),a(i,m),a(i,V),a(i,b),a(i,A),a(i,N),a(N,w),a(w,B),a(i,D),n&&n.m(i,null),a(i,C),a(i,x),a(x,O),a(r,U),l&&l.m(r,null),a(t,F),a(t,E),a(E,R),a(E,k),a(k,W),M=!0,Y||(J=ce(k,"click",u[3]),Y=!0)},p(c,[f]){c[1].signInError!=="none"&&c[1].signInError!==""?n?(n.p(c,f),f&2&&v(n,1)):(n=ae(c),n.c(),v(n,1),n.m(i,C)):n&&(re(),T(n,1,1,()=>{n=null}),te()),c[0]?l?(l.p(c,f),f&1&&v(l,1)):(l=oe(c),l.c(),v(l,1),l.m(r,null)):l&&(re(),T(l,1,1,()=>{l=null}),te())},i(c){M||(v(n),v(l),M=!0)},o(c){T(n),T(l),M=!1},d(c){c&&_(t),n&&n.d(),l&&l.d(),Y=!1,J()}}}function be(u,t,r){let e;me(u,se,m=>r(1,e=m));let o=!1;return(e.user==="guest"||e.user==="")&&fe(se,e.signInError="none",e),[o,e,()=>r(0,o=!o),()=>r(0,o=!o)]}class ye extends ne{constructor(t){super(),le(this,t,be,_e,ie,{})}}export{ye as default};