import{S as T,i as q,s as I,l as u,r as E,a as k,m as d,n as h,u as P,h as n,c as g,p as s,b as R,N as o,E as w}from"../../chunks/index-1b426719.js";function N(f){let e,r;return{c(){e=u("button"),r=E("Send Password Reset Link"),this.h()},l(t){e=d(t,"BUTTON",{type:!0,class:!0});var a=h(e);r=P(a,"Send Password Reset Link"),a.forEach(n),this.h()},h(){s(e,"type","submit"),s(e,"class","w-full text-center py-3 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1")},m(t,a){R(t,e,a),o(e,r)},d(t){t&&n(e)}}}function O(f){let e,r,t,a,_,x,l,b;function S(c,m){return N}let p=S()(f);return{c(){e=u("div"),r=u("div"),t=u("form"),a=u("h1"),_=E("Reset Password"),x=k(),l=u("input"),b=k(),p.c(),this.h()},l(c){e=d(c,"DIV",{class:!0});var m=h(e);r=d(m,"DIV",{class:!0});var v=h(r);t=d(v,"FORM",{action:!0,method:!0});var i=h(t);a=d(i,"H1",{class:!0});var y=h(a);_=P(y,"Reset Password"),y.forEach(n),x=g(i),l=d(i,"INPUT",{id:!0,type:!0,class:!0,name:!0,placeholder:!0,autocomplete:!0}),b=g(i),p.l(i),i.forEach(n),v.forEach(n),m.forEach(n),this.h()},h(){s(a,"class","mb-8 text-3xl text-center"),s(l,"id","email"),s(l,"type","email"),s(l,"class","block text-xl border border-orange-700 w-full py-3 rounded mb-4"),s(l,"name","email"),l.required=!0,s(l,"placeholder","Email"),s(l,"autocomplete","email"),s(t,"action","/api/auth/resetpassword"),s(t,"method","POST"),s(r,"class","bg-white p-6 ml-1.5 sm:ml-0 rounded shadow-md text-black w-5/6 sm:w-full"),s(e,"class","flex flex-col items-center max-w-sm max-w-screen-xsm mx-auto")},m(c,m){R(c,e,m),o(e,r),o(r,t),o(t,a),o(a,_),o(t,x),o(t,l),o(t,b),p.m(t,null)},p:w,i:w,o:w,d(c){c&&n(e),p.d()}}}class U extends T{constructor(e){super(),q(this,e,null,O,I,{})}}export{U as default};
