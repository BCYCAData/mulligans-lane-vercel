import{S as C,i as d,s as v,e as b,t as V,k as E,c,a as _,h as I,d as h,m as N,b as i,g,G as r,j,n as o}from"./index-27e8d48c.js";function L(u){let e,n,f,m,a;return{c(){e=b("div"),n=b("label"),f=V(u[1]),m=E(),a=b("input"),this.h()},l(l){e=c(l,"DIV",{class:!0});var s=_(e);n=c(s,"LABEL",{class:!0,for:!0});var t=_(n);f=I(t,u[1]),t.forEach(h),m=N(s),a=c(s,"INPUT",{type:!0,id:!0,name:!0,class:!0,min:!0}),s.forEach(h),this.h()},h(){i(n,"class",u[3]),i(n,"for",u[0]),i(a,"type","number"),i(a,"id",u[0]),i(a,"name",u[0]),i(a,"class",u[2]),a.value=u[4],i(a,"min","0"),i(e,"class","flex flex-col justify-items-center m-4 ")},m(l,s){g(l,e,s),r(e,n),r(n,f),r(e,m),r(e,a)},p(l,[s]){s&2&&j(f,l[1]),s&8&&i(n,"class",l[3]),s&1&&i(n,"for",l[0]),s&1&&i(a,"id",l[0]),s&1&&i(a,"name",l[0]),s&4&&i(a,"class",l[2]),s&16&&a.value!==l[4]&&(a.value=l[4])},i:o,o,d(l){l&&h(e)}}}function S(u,e,n){let{name:f}=e,{lable:m}=e,{inputClass:a}=e,{lableClass:l}=e,{inputValue:s}=e;return u.$$set=t=>{"name"in t&&n(0,f=t.name),"lable"in t&&n(1,m=t.lable),"inputClass"in t&&n(2,a=t.inputClass),"lableClass"in t&&n(3,l=t.lableClass),"inputValue"in t&&n(4,s=t.inputValue)},[f,m,a,l,s]}class q extends C{constructor(e){super(),d(this,e,S,L,v,{name:0,lable:1,inputClass:2,lableClass:3,inputValue:4})}}export{q as N};
