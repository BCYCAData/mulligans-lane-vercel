import{S as oe,i as le,s as ie,x as z,y as G,z as H,r as v,p as T,C as K,e as f,t as S,k as y,c as p,a as $,h as q,d as _,m as I,b as s,g as ue,G as a,K as ce,q as te,M as me,o as re,R as de}from"../../chunks/index-27e8d48c.js";import{s as se}from"../../chunks/stores-619a4aad.js";import{A as fe,a as pe}from"../../chunks/AddressChallenge-9100db77.js";import{M as ge}from"../../chunks/Modal-7232ca99.js";import"../../chunks/utils-b80a401c.js";function ae(u){let t,r;return t=new fe({props:{message:u[1].signInError}}),{c(){z(t.$$.fragment)},l(e){G(t.$$.fragment,e)},m(e,n){H(t,e,n),r=!0},p(e,n){const g={};n&2&&(g.message=e[1].signInError),t.$set(g)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){T(t.$$.fragment,e),r=!1},d(e){K(t,e)}}}function ne(u){let t,r;return t=new ge({props:{$$slots:{default:[he]},$$scope:{ctx:u}}}),t.$on("exit",u[2]),{c(){z(t.$$.fragment)},l(e){G(t.$$.fragment,e)},m(e,n){H(t,e,n),r=!0},p(e,n){const g={};n&16&&(g.$$scope={dirty:n,ctx:e}),t.$set(g)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){T(t.$$.fragment,e),r=!1},d(e){K(t,e)}}}function he(u){let t,r;return t=new pe({}),{c(){z(t.$$.fragment)},l(e){G(t.$$.fragment,e)},m(e,n){H(t,e,n),r=!0},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){T(t.$$.fragment,e),r=!1},d(e){K(t,e)}}}function _e(u){let t,r,e,n,g,i,m,V,b,A,N,w,B,D,C,x,O,U,F,E,R,k,W,M,Y,J,o=u[1].signInError!=="none"&&u[1].signInError!==""&&ae(u),l=u[0]&&ne(u);return{c(){t=f("div"),r=f("div"),e=f("h1"),n=S("Welcome Back"),g=y(),i=f("form"),m=f("input"),V=y(),b=f("input"),A=y(),N=f("div"),w=f("a"),B=S("Forgot Your Password? <<<"),D=y(),o&&o.c(),C=y(),x=f("button"),O=S("Sign In"),U=y(),l&&l.c(),F=y(),E=f("div"),R=S(`Not registered?\r
		`),k=f("button"),W=S("Create an account"),this.h()},l(c){t=p(c,"DIV",{class:!0});var d=$(t);r=p(d,"DIV",{class:!0});var P=$(r);e=p(P,"H1",{class:!0});var L=$(e);n=q(L,"Welcome Back"),L.forEach(_),g=I(P),i=p(P,"FORM",{action:!0,method:!0});var h=$(i);m=p(h,"INPUT",{id:!0,type:!0,class:!0,name:!0,placeholder:!0,autocomplete:!0}),V=I(h),b=p(h,"INPUT",{id:!0,type:!0,class:!0,name:!0,placeholder:!0}),A=I(h),N=p(h,"DIV",{class:!0});var Q=$(N);w=p(Q,"A",{href:!0,class:!0});var X=$(w);B=q(X,"Forgot Your Password? <<<"),X.forEach(_),Q.forEach(_),D=I(h),o&&o.l(h),C=I(h),x=p(h,"BUTTON",{type:!0,class:!0});var Z=$(x);O=q(Z,"Sign In"),Z.forEach(_),h.forEach(_),U=I(P),l&&l.l(P),P.forEach(_),F=I(d),E=p(d,"DIV",{class:!0});var j=$(E);R=q(j,`Not registered?\r
		`),k=p(j,"BUTTON",{class:!0});var ee=$(k);W=q(ee,"Create an account"),ee.forEach(_),j.forEach(_),d.forEach(_),this.h()},h(){s(e,"class","text-2xl text-center"),s(m,"id","email"),s(m,"type","email"),s(m,"class","block text-xl border border-orange-700 w-full py-3 rounded mb-4"),s(m,"name","email"),m.required=!0,s(m,"placeholder","Email"),s(m,"autocomplete","email"),s(b,"id","password"),s(b,"type","password"),s(b,"class","block text-xl border border-orange-700 w-full py-3 rounded mb-4"),s(b,"name","password"),b.required=!0,s(b,"placeholder","Password"),s(w,"href","/auth/requestresetpassword"),s(w,"class","text-sm font-semibold text-orange-600 dark:text-gray-400 hover:underline"),s(N,"class","flex justify-between mt-4 mb-3"),s(x,"type","submit"),s(x,"class","w-full text-center py-3 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1"),s(i,"action","/api/auth/signin"),s(i,"method","POST"),s(r,"class","bg-white p-6 sm:ml-0 rounded shadow-md text-black w-5/6 sm:w-full"),s(k,"class","text-center py-1 px-5 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1"),s(E,"class","text-grey-dark mt-6"),s(t,"class","container max-w-sm max-w-screen-xsm mx-auto")},m(c,d){ue(c,t,d),a(t,r),a(r,e),a(e,n),a(r,g),a(r,i),a(i,m),a(i,V),a(i,b),a(i,A),a(i,N),a(N,w),a(w,B),a(i,D),o&&o.m(i,null),a(i,C),a(i,x),a(x,O),a(r,U),l&&l.m(r,null),a(t,F),a(t,E),a(E,R),a(E,k),a(k,W),M=!0,Y||(J=ce(k,"click",u[3]),Y=!0)},p(c,[d]){c[1].signInError!=="none"&&c[1].signInError!==""?o?(o.p(c,d),d&2&&v(o,1)):(o=ae(c),o.c(),v(o,1),o.m(i,C)):o&&(re(),T(o,1,1,()=>{o=null}),te()),c[0]?l?(l.p(c,d),d&1&&v(l,1)):(l=ne(c),l.c(),v(l,1),l.m(r,null)):l&&(re(),T(l,1,1,()=>{l=null}),te())},i(c){M||(v(o),v(l),M=!0)},o(c){T(o),T(l),M=!1},d(c){c&&_(t),o&&o.d(),l&&l.d(),Y=!1,J()}}}function be(u,t,r){let e;me(u,se,m=>r(1,e=m));let n=!1;return(e.user==="guest"||e.user==="")&&de(se,e.signInError="none",e),[n,e,()=>r(0,n=!n),()=>r(0,n=!n)]}class ke extends oe{constructor(t){super(),le(this,t,be,_e,ie,{})}}export{ke as default};
