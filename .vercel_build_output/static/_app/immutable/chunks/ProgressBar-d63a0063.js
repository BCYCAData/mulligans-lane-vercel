import{S,i as q,s as T,e as g,t as x,c as f,a as _,h as D,d as u,b as d,g as b,N as v,R as I,k as V,m as B,E as p,Z as L,a7 as w}from"./index-2a980a40.js";function k(i,t,r){const o=i.slice();return o[9]=t[r],o[11]=r,o}function y(i){let t,r,o,c,s,l;return{c(){t=g("div"),r=x(`.\r
		`),this.h()},l(n){t=f(n,"DIV",{class:!0,"data-title":!0});var e=_(t);r=D(e,`.\r
		`),e.forEach(u),this.h()},h(){d(t,"class",o="circle "+(i[11]==0?"active":"")+" svelte-95ggu7"),d(t,"data-title",c=i[9])},m(n,e){b(n,t,e),v(t,r),s||(l=I(t,"click",i[6]),s=!0)},p(n,e){e&1&&c!==(c=n[9])&&d(t,"data-title",c)},d(n){n&&u(t),s=!1,l()}}}function z(i){let t,r,o,c=i[0],s=[];for(let l=0;l<c.length;l+=1)s[l]=y(k(i,c,l));return{c(){t=g("div"),r=g("div"),o=V();for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){t=f(l,"DIV",{class:!0});var n=_(t);r=f(n,"DIV",{class:!0}),_(r).forEach(u),o=B(n);for(let e=0;e<s.length;e+=1)s[e].l(n);n.forEach(u),this.h()},h(){d(r,"class","progress svelte-95ggu7"),d(t,"class","progress-container z-50 svelte-95ggu7")},m(l,n){b(l,t,n),v(t,r),i[5](r),v(t,o);for(let e=0;e<s.length;e+=1)s[e].m(t,null)},p(l,[n]){if(n&3){c=l[0];let e;for(e=0;e<c.length;e+=1){const h=k(l,c,e);s[e]?s[e].p(h,n):(s[e]=y(h),s[e].c(),s[e].m(t,null))}for(;e<s.length;e+=1)s[e].d(1);s.length=c.length}},i:p,o:p,d(l){l&&u(t),i[5](null),L(s,l)}}}function C(i,t,r){let{steps:o=[]}=t,{currentActive:c=1}=t,s,l;const n=a=>{s=document.querySelectorAll(".circle"),a==1?(r(3,c++,c),c>s.length&&r(3,c=s.length)):(r(3,c--,c),c<1&&r(3,c=1)),e()};function e(){s.forEach((m,E)=>{E<c?m.classList.add("active"):m.classList.remove("active")});const a=document.querySelectorAll(".active");r(2,l.style.width=(a.length-1)/(s.length-1)*100+"%",l)}const h=a=>{s=document.querySelectorAll(".circle"),r(3,c=a.currentTarget.attributes["data-title"].value),e()};function A(a){w[a?"unshift":"push"](()=>{l=a,r(2,l)})}const P=a=>{h(a)};return i.$$set=a=>{"steps"in a&&r(0,o=a.steps),"currentActive"in a&&r(3,c=a.currentActive)},[o,h,l,c,n,A,P]}class R extends S{constructor(t){super(),q(this,t,C,z,T,{steps:0,currentActive:3,handleProgress:4,skipTo:1})}get handleProgress(){return this.$$.ctx[4]}get skipTo(){return this.$$.ctx[1]}}export{R as P};