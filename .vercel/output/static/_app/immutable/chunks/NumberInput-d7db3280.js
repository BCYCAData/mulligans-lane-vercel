import{S as C,i as d,s as v,l as c,r as V,a as E,m as b,n as _,u as N,h,c as I,p as i,b as L,N as r,v as S,E as o}from"./index-84b22e2d.js";function g(u){let e,n,f,m,a;return{c(){e=c("div"),n=c("label"),f=V(u[1]),m=E(),a=c("input"),this.h()},l(l){e=b(l,"DIV",{class:!0});var s=_(e);n=b(s,"LABEL",{class:!0,for:!0});var t=_(n);f=N(t,u[1]),t.forEach(h),m=I(s),a=b(s,"INPUT",{type:!0,id:!0,name:!0,class:!0,min:!0}),s.forEach(h),this.h()},h(){i(n,"class",u[3]),i(n,"for",u[0]),i(a,"type","number"),i(a,"id",u[0]),i(a,"name",u[0]),i(a,"class",u[2]),a.value=u[4],i(a,"min","0"),i(e,"class","flex flex-col justify-center items-center")},m(l,s){L(l,e,s),r(e,n),r(n,f),r(e,m),r(e,a)},p(l,[s]){s&2&&S(f,l[1]),s&8&&i(n,"class",l[3]),s&1&&i(n,"for",l[0]),s&1&&i(a,"id",l[0]),s&1&&i(a,"name",l[0]),s&4&&i(a,"class",l[2]),s&16&&a.value!==l[4]&&(a.value=l[4])},i:o,o,d(l){l&&h(e)}}}function j(u,e,n){let{name:f}=e,{lable:m}=e,{inputClass:a}=e,{lableClass:l}=e,{inputValue:s}=e;return u.$$set=t=>{"name"in t&&n(0,f=t.name),"lable"in t&&n(1,m=t.lable),"inputClass"in t&&n(2,a=t.inputClass),"lableClass"in t&&n(3,l=t.lableClass),"inputValue"in t&&n(4,s=t.inputValue)},[f,m,a,l,s]}class A extends C{constructor(e){super(),d(this,e,j,g,v,{name:0,lable:1,inputClass:2,lableClass:3,inputValue:4})}}export{A as N};