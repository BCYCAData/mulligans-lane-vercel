import{S as v,i as A,s as E,l as r,r as V,a as x,m as T,n as _,u as o,h,c as I,p as n,b as c,N as b,v as L,E as d}from"./index-1b426719.js";function S(t){let a,f,m,u,l;return{c(){a=r("label"),f=V(t[1]),m=x(),u=r("div"),l=r("textarea"),this.h()},l(e){a=T(e,"LABEL",{class:!0,for:!0});var s=_(a);f=o(s,t[1]),s.forEach(h),m=I(e),u=T(e,"DIV",{class:!0});var C=_(u);l=T(C,"TEXTAREA",{id:!0,name:!0,class:!0}),_(l).forEach(h),C.forEach(h),this.h()},h(){n(a,"class",t[0]),n(a,"for",t[2]),n(l,"id",t[2]),n(l,"name",t[2]),n(l,"class",t[4]),l.value=t[5],n(u,"class",t[3])},m(e,s){c(e,a,s),b(a,f),c(e,m,s),c(e,u,s),b(u,l)},p(e,[s]){s&2&&L(f,e[1]),s&1&&n(a,"class",e[0]),s&4&&n(a,"for",e[2]),s&4&&n(l,"id",e[2]),s&4&&n(l,"name",e[2]),s&16&&n(l,"class",e[4]),s&32&&(l.value=e[5]),s&8&&n(u,"class",e[3])},i:d,o:d,d(e){e&&h(a),e&&h(m),e&&h(u)}}}function g(t,a,f){let{lableClass:m}=a,{headingText:u}=a,{nameText:l}=a,{divClass:e}=a,{textAreaClass:s}=a,{inputValue:C}=a;return t.$$set=i=>{"lableClass"in i&&f(0,m=i.lableClass),"headingText"in i&&f(1,u=i.headingText),"nameText"in i&&f(2,l=i.nameText),"divClass"in i&&f(3,e=i.divClass),"textAreaClass"in i&&f(4,s=i.textAreaClass),"inputValue"in i&&f(5,C=i.inputValue)},[m,u,l,e,s,C]}class B extends v{constructor(a){super(),A(this,a,g,S,E,{lableClass:0,headingText:1,nameText:2,divClass:3,textAreaClass:4,inputValue:5})}}export{B as T};
