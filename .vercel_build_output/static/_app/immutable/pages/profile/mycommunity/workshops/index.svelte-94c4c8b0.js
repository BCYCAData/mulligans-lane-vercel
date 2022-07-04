import{S as le,i as ne,s as ie,e as w,k as T,t as ee,c as g,a as V,m as A,h as te,d as a,b as c,g as W,N as f,R as ae,a7 as P,a8 as R,w as U,x as Z,y as F,a6 as G,q as H,o as J,Z as re,B as K,a9 as ue}from"../../../../chunks/index-b429d93a.js";import{d as M}from"../../../../chunks/profileOptions-c8b3e43d.js";import{T as Q}from"../../../../chunks/TextAreaInput-fbf36c84.js";function X(l,o,t){const s=l.slice();return s[5]=o[t].value,s[6]=o[t].lable,s}function Y(l){let o,t,s,k,m,h=l[6]+"",v,n,b,p;return{c(){o=w("li"),t=w("input"),k=T(),m=w("label"),v=ee(h),n=T(),this.h()},l(d){o=g(d,"LI",{class:!0,name:!0});var u=V(o);t=g(u,"INPUT",{name:!0,type:!0}),k=A(u),m=g(u,"LABEL",{for:!0});var y=V(m);v=te(y,h),y.forEach(a),n=A(u),u.forEach(a),this.h()},h(){c(t,"name","community_workshop_choices"),c(t,"type","checkbox"),t.__value=s=l[5],t.value=t.__value,l[2][0].push(t),c(m,"for","community_workshop_choices"),c(o,"class","list-none sm:text-base sm:font-semibold sm:p-1"),c(o,"name","community_workshop_choices")},m(d,u){W(d,o,u),f(o,t),t.checked=~l[0][0].community_workshop_choices.indexOf(t.__value),f(o,k),f(o,m),f(m,v),f(o,n),b||(p=ae(t,"change",l[1]),b=!0)},p(d,u){u&1&&(t.checked=~d[0][0].community_workshop_choices.indexOf(t.__value))},d(d){d&&a(o),l[2][0].splice(l[2][0].indexOf(t),1),b=!1,p()}}}function ce(l){let o,t,s,k,m,h,v,n,b,p,d,u,y,E,$,q,L,I=M,i=[];for(let e=0;e<I.length;e+=1)i[e]=Y(X(l,I,e));function oe(e){l[3](e)}let j={lableClass:"tracking-wide mr-4 mt-1 text-orange-900 text-l font-bold mb-1",headingText:`If there are other workshops that you would like to see run, please add\r
			the details here`,divClass:"p-2 rounded-lg bg-orange-300 sm:text-xl",nameText:"other_community_workshop",textAreaClass:"w-full resize-y sm:text-xl"};l[0][0].other_community_workshop!==void 0&&(j.inputValue=l[0][0].other_community_workshop),p=new Q({props:j}),P.push(()=>R(p,"inputValue",oe));function se(e){l[4](e)}let B={lableClass:"tracking-wide mr-4 mt-1 text-orange-900 text-l font-bold mb-1",headingText:`If you would like to help run any of the workshops, please indicate which\r
			ones below.`,divClass:"p-2 rounded-lg bg-orange-300 sm:text-xl",nameText:"will_run_community_workshops",textAreaClass:"w-full resize-y sm:text-xl"};return l[0][0].will_run_community_workshops!==void 0&&(B.inputValue=l[0][0].will_run_community_workshops),$=new Q({props:B}),P.push(()=>R($,"inputValue",se)),{c(){o=w("div"),t=w("div"),s=w("label"),k=ee("Which of these community initiated workshops would be useful to you?"),m=T(),h=w("div");for(let e=0;e<i.length;e+=1)i[e].c();v=T(),n=w("div"),b=w("div"),U(p.$$.fragment),u=T(),y=w("div"),E=w("div"),U($.$$.fragment),this.h()},l(e){o=g(e,"DIV",{class:!0});var _=V(o);t=g(_,"DIV",{class:!0});var x=V(t);s=g(x,"LABEL",{class:!0,for:!0});var C=V(s);k=te(C,"Which of these community initiated workshops would be useful to you?"),C.forEach(a),m=A(x),h=g(x,"DIV",{class:!0});var r=V(h);for(let O=0;O<i.length;O+=1)i[O].l(r);r.forEach(a),x.forEach(a),_.forEach(a),v=A(e),n=g(e,"DIV",{class:!0});var D=V(n);b=g(D,"DIV",{class:!0});var z=V(b);Z(p.$$.fragment,z),z.forEach(a),D.forEach(a),u=A(e),y=g(e,"DIV",{class:!0});var N=V(y);E=g(N,"DIV",{class:!0});var S=V(E);Z($.$$.fragment,S),S.forEach(a),N.forEach(a),this.h()},h(){c(s,"class","tracking-wide mr-4 mt-1 text-orange-900 text-l font-bold mb-1"),c(s,"for","community_workshop_choices_list"),c(h,"class","flex flex-col rounded-lg bg-orange-50 p-1 mx-2"),c(t,"class","flex items-center justify-start"),c(o,"class","flex flex-row mt-4 mx-4"),c(b,"class","flex items-center justify-start"),c(n,"class","flex flex-col mt-4 mx-4"),c(E,"class","flex items-center justify-start"),c(y,"class","flex flex-col mt-4 mx-4")},m(e,_){W(e,o,_),f(o,t),f(t,s),f(s,k),f(t,m),f(t,h);for(let x=0;x<i.length;x+=1)i[x].m(h,null);W(e,v,_),W(e,n,_),f(n,b),F(p,b,null),W(e,u,_),W(e,y,_),f(y,E),F($,E,null),L=!0},p(e,[_]){if(_&1){I=M;let r;for(r=0;r<I.length;r+=1){const D=X(e,I,r);i[r]?i[r].p(D,_):(i[r]=Y(D),i[r].c(),i[r].m(h,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=I.length}const x={};!d&&_&1&&(d=!0,x.inputValue=e[0][0].other_community_workshop,G(()=>d=!1)),p.$set(x);const C={};!q&&_&1&&(q=!0,C.inputValue=e[0][0].will_run_community_workshops,G(()=>q=!1)),$.$set(C)},i(e){L||(H(p.$$.fragment,e),H($.$$.fragment,e),L=!0)},o(e){J(p.$$.fragment,e),J($.$$.fragment,e),L=!1},d(e){e&&a(o),re(i,e),e&&a(v),e&&a(n),K(p),e&&a(u),e&&a(y),K($)}}}function _e(l,o,t){let{profileWorkshops:s}=o;const k=[[]];function m(){s[0].community_workshop_choices=ue(k[0],this.__value,this.checked),t(0,s)}function h(n){l.$$.not_equal(s[0].other_community_workshop,n)&&(s[0].other_community_workshop=n,t(0,s))}function v(n){l.$$.not_equal(s[0].will_run_community_workshops,n)&&(s[0].will_run_community_workshops=n,t(0,s))}return l.$$set=n=>{"profileWorkshops"in n&&t(0,s=n.profileWorkshops)},[s,m,k,h,v]}class fe extends le{constructor(o){super(),ne(this,o,_e,ce,ie,{profileWorkshops:0})}}export{fe as default};
