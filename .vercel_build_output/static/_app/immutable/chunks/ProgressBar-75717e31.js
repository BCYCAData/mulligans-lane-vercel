import{S as w,i as E,s as S,e as d,t as q,c as f,a as p,h as T,d as g,b as h,g as k,N as v,R as z,k as D,m as I,E as m,Z as V,a7 as j}from"./index-b429d93a.js";function b(o,t,i){const a=o.slice();return a[9]=t[i],a[11]=i,a}function x(o){let t,i,a,l,s,r;return{c(){t=d("div"),i=q(`.\r
		`),this.h()},l(n){t=f(n,"DIV",{class:!0,"data-title":!0});var e=p(t);i=T(e,`.\r
		`),e.forEach(g),this.h()},h(){h(t,"class",a="circle "+(o[11]==0?"active":"")+" svelte-95ggu7"),h(t,"data-title",l=o[9])},m(n,e){k(n,t,e),v(t,i),s||(r=z(t,"click",o[6]),s=!0)},p(n,e){e&1&&l!==(l=n[9])&&h(t,"data-title",l)},d(n){n&&g(t),s=!1,r()}}}function B(o){let t,i,a,l=o[0],s=[];for(let r=0;r<l.length;r+=1)s[r]=x(b(o,l,r));return{c(){t=d("div"),i=d("div"),a=D();for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){t=f(r,"DIV",{class:!0});var n=p(t);i=f(n,"DIV",{class:!0}),p(i).forEach(g),a=I(n);for(let e=0;e<s.length;e+=1)s[e].l(n);n.forEach(g),this.h()},h(){h(i,"class","progress svelte-95ggu7"),h(t,"class","progress-container z-50 svelte-95ggu7")},m(r,n){k(r,t,n),v(t,i),o[5](i),v(t,a);for(let e=0;e<s.length;e+=1)s[e].m(t,null)},p(r,[n]){if(n&3){l=r[0];let e;for(e=0;e<l.length;e+=1){const u=b(r,l,e);s[e]?s[e].p(u,n):(s[e]=x(u),s[e].c(),s[e].m(t,null))}for(;e<s.length;e+=1)s[e].d(1);s.length=l.length}},i:m,o:m,d(r){r&&g(t),o[5](null),V(s,r)}}}function L(o,t,i){let{steps:a=[]}=t,{currentActive:l=1}=t,s,r;const n=c=>{s=document.querySelectorAll(".circle"),c==1?(i(3,l++,l),l>s.length&&i(3,l=s.length)):(i(3,l--,l),l<1&&i(3,l=1)),e()};function e(){s.forEach((_,P)=>{P<l?_.classList.add("active"):_.classList.remove("active")});const c=document.querySelectorAll(".active");i(2,r.style.width=(c.length-1)/(s.length-1)*100+"%",r)}const u=c=>{s=document.querySelectorAll(".circle"),i(3,l=c.currentTarget.attributes["data-title"].value),e()};function y(c){j[c?"unshift":"push"](()=>{r=c,i(2,r)})}const A=c=>{u(c)};return o.$$set=c=>{"steps"in c&&i(0,a=c.steps),"currentActive"in c&&i(3,l=c.currentActive)},[a,u,r,l,n,y,A]}class C extends w{constructor(t){super(),E(this,t,L,B,S,{steps:0,currentActive:3,handleProgress:4,skipTo:1})}get handleProgress(){return this.$$.ctx[4]}get skipTo(){return this.$$.ctx[1]}}export{C as P};