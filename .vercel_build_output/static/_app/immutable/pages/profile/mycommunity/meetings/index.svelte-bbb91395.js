import{S as O,i as q,s as B,e as x,k as E,t as A,c as k,a as V,m as $,h as C,d as b,b as p,g as I,N as g,R as D,a7 as N,a8 as S,w as W,x as j,y as z,a6 as P,q as R,o as U,Z,B as F,a9 as G}from"../../../../chunks/index-b429d93a.js";import{c as M}from"../../../../chunks/profileOptions-e1ddd3e6.js";import{T as H}from"../../../../chunks/TextAreaInput-f15cb8d6.js";function L(a,n,e){const s=a.slice();return s[4]=n[e].value,s[5]=n[e].lable,s}function T(a){let n,e,s,m,o,_=a[5]+"",l,y,d,f;return{c(){n=x("li"),e=x("input"),m=E(),o=x("label"),l=A(_),y=E(),this.h()},l(i){n=k(i,"LI",{class:!0,name:!0});var c=V(n);e=k(c,"INPUT",{name:!0,type:!0}),m=$(c),o=k(c,"LABEL",{for:!0});var w=V(o);l=C(w,_),w.forEach(b),y=$(c),c.forEach(b),this.h()},h(){p(e,"name","community_meeting_choices"),p(e,"type","checkbox"),e.__value=s=a[4],e.value=e.__value,a[2][0].push(e),p(o,"for","community_meeting_choices"),p(n,"class","list-none sm:text-base sm:font-semibold sm:p-1"),p(n,"name","community_meeting_choices_list")},m(i,c){I(i,n,c),g(n,e),e.checked=~a[0].community_meeting_choices.indexOf(e.__value),g(n,m),g(n,o),g(o,l),g(n,y),d||(f=D(e,"change",a[1]),d=!0)},p(i,c){c&1&&(e.checked=~i[0].community_meeting_choices.indexOf(e.__value))},d(i){i&&b(n),a[2][0].splice(a[2][0].indexOf(e),1),d=!1,f()}}}function J(a){let n,e,s,m,o,_,l,y,d,f=M,i=[];for(let t=0;t<f.length;t+=1)i[t]=T(L(a,f,t));function c(t){a[3](t)}let w={lableClass:"font-bold pl-4 pt-4 text-base sm:text-lg",headingText:`If there are other events you would be interested in, please add them\r
			below.`,divClass:"px-4 rounded-lg bg-orange-300 sm:text-lg",nameText:"other_community_meeting",textAreaClass:"w-full resize-y sm:text-lg"};return a[0].other_community_meeting!==void 0&&(w.inputValue=a[0].other_community_meeting),l=new H({props:w}),N.push(()=>S(l,"inputValue",c)),{c(){n=x("div"),e=x("label"),s=A("What community meetings would be useful to you?"),m=E(),o=x("div");for(let t=0;t<i.length;t+=1)i[t].c();_=E(),W(l.$$.fragment),this.h()},l(t){n=k(t,"DIV",{class:!0});var r=V(n);e=k(r,"LABEL",{class:!0,for:!0});var h=V(e);s=C(h,"What community meetings would be useful to you?"),h.forEach(b),m=$(r),o=k(r,"DIV",{class:!0});var u=V(o);for(let v=0;v<i.length;v+=1)i[v].l(u);u.forEach(b),r.forEach(b),_=$(t),j(l.$$.fragment,t),this.h()},h(){p(e,"class","mt-1 text-lg font-bold mb-1"),p(e,"for","community_meeting_choices_list"),p(o,"class","flex flex-col rounded-lg bg-orange-50 p-1"),p(n,"class","flex flex-row justify-between items-center px-4 mt-2")},m(t,r){I(t,n,r),g(n,e),g(e,s),g(n,m),g(n,o);for(let h=0;h<i.length;h+=1)i[h].m(o,null);I(t,_,r),z(l,t,r),d=!0},p(t,[r]){if(r&1){f=M;let u;for(u=0;u<f.length;u+=1){const v=L(t,f,u);i[u]?i[u].p(v,r):(i[u]=T(v),i[u].c(),i[u].m(o,null))}for(;u<i.length;u+=1)i[u].d(1);i.length=f.length}const h={};!y&&r&1&&(y=!0,h.inputValue=t[0].other_community_meeting,P(()=>y=!1)),l.$set(h)},i(t){d||(R(l.$$.fragment,t),d=!0)},o(t){U(l.$$.fragment,t),d=!1},d(t){t&&b(n),Z(i,t),t&&b(_),F(l,t)}}}function K(a,n,e){let{profileMeetings:s}=n;const m=[[]];function o(){s.community_meeting_choices=G(m[0],this.__value,this.checked),e(0,s)}function _(l){a.$$.not_equal(s.other_community_meeting,l)&&(s.other_community_meeting=l,e(0,s))}return a.$$set=l=>{"profileMeetings"in l&&e(0,s=l.profileMeetings)},[s,o,m,_]}class ee extends O{constructor(n){super(),q(this,n,K,J,B,{profileMeetings:0})}}export{ee as default};