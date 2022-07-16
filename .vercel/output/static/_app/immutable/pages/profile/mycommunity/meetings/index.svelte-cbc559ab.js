import{S as ue,i as ce,s as me,a6 as fe,a7 as _e,l as v,a as V,r as P,w as H,m as y,n as x,c as I,h as p,u as F,x as J,p as u,b as ie,N as a,y as K,R as U,f as N,t as L,d as de,a8 as he,Z as ge,B as Q,T as pe,g as be,a9 as ve}from"../../../../chunks/index-0c810e59.js";import{b as ye}from"../../../../chunks/navigation-7ffe60d0.js";import{c as le}from"../../../../chunks/profileOptions-1cfe764b.js";import{T as xe}from"../../../../chunks/TextAreaInput-5908379f.js";import{M as $e}from"../../../../chunks/Modal-81269e6d.js";import{S as we}from"../../../../chunks/SaveProfilePrompt-4e986229.js";import"../../../../chunks/singletons-cdeec3fd.js";function oe(o,t,n){const e=o.slice();return e[10]=t[n].value,e[11]=t[n].lable,e}function se(o){let t,n;return t=new $e({props:{$$slots:{default:[ke]},$$scope:{ctx:o}}}),t.$on("exit",o[3]),{c(){H(t.$$.fragment)},l(e){J(t.$$.fragment,e)},m(e,l){K(t,e,l),n=!0},p(e,l){const c={};l&16384&&(c.$$scope={dirty:l,ctx:e}),t.$set(c)},i(e){n||(N(t.$$.fragment,e),n=!0)},o(e){L(t.$$.fragment,e),n=!1},d(e){Q(t,e)}}}function ke(o){let t,n;return t=new we({}),{c(){H(t.$$.fragment)},l(e){J(t.$$.fragment,e)},m(e,l){K(t,e,l),n=!0},i(e){n||(N(t.$$.fragment,e),n=!0)},o(e){L(t.$$.fragment,e),n=!1},d(e){Q(t,e)}}}function ae(o){let t,n,e,l,c=o[11]+"",$,f,w,k;return{c(){t=v("li"),n=v("input"),e=V(),l=v("label"),$=P(c),f=V(),this.h()},l(h){t=y(h,"LI",{class:!0,name:!0});var i=x(t);n=y(i,"INPUT",{name:!0,type:!0}),e=I(i),l=y(i,"LABEL",{for:!0});var M=x(l);$=F(M,c),M.forEach(p),f=I(i),i.forEach(p),this.h()},h(){u(n,"name","community_meeting_choices"),u(n,"type","checkbox"),n.__value=o[10],n.value=n.__value,o[7][0].push(n),u(l,"for","community_meeting_choices"),u(t,"class","list-none sm:text-base sm:font-semibold sm:p-1"),u(t,"name","community_meeting_choices_list")},m(h,i){ie(h,t,i),a(t,n),n.checked=~o[0].community_meeting_choices.indexOf(n.__value),a(t,e),a(t,l),a(l,$),a(t,f),w||(k=U(n,"change",o[6]),w=!0)},p(h,i){i&1&&(n.checked=~h[0].community_meeting_choices.indexOf(n.__value))},d(h){h&&p(t),o[7][0].splice(o[7][0].indexOf(n),1),w=!1,k()}}}function Ee(o){let t,n,e,l,c,$,f,w,k,h,i,M,b,q,T,O,R,W,S,j,E,z,C,Z,X,r=o[2]&&se(o),A=le,_=[];for(let s=0;s<A.length;s+=1)_[s]=ae(oe(o,A,s));function re(s){o[8](s)}let Y={lableClass:"font-bold pl-4 pt-4 text-base sm:text-lg",headingText:`If there are other events you would be interested in, please add them\r
			below.`,divClass:"px-4 rounded-lg bg-orange-300 sm:text-lg",nameText:"other_community_meeting",textAreaClass:"w-full resize-y sm:text-lg"};return o[0].other_community_meeting!==void 0&&(Y.inputValue=o[0].other_community_meeting),E=new xe({props:Y}),fe.push(()=>_e(E,"inputValue",re)),{c(){t=v("section"),r&&r.c(),n=V(),e=v("form"),l=v("div"),c=v("div"),$=V(),f=v("button"),w=P("Save My Answers"),h=V(),i=v("button"),M=P("Cancel"),q=V(),T=v("div"),O=v("label"),R=P("What community meetings would be useful to you?"),W=V(),S=v("div");for(let s=0;s<_.length;s+=1)_[s].c();j=V(),H(E.$$.fragment),this.h()},l(s){t=y(s,"SECTION",{class:!0});var d=x(t);r&&r.l(d),n=I(d),e=y(d,"FORM",{id:!0,class:!0,action:!0,method:!0});var g=x(e);l=y(g,"DIV",{class:!0});var m=x(l);c=y(m,"DIV",{class:!0}),x(c).forEach(p),$=I(m),f=y(m,"BUTTON",{class:!0,type:!0,form:!0});var B=x(f);w=F(B,"Save My Answers"),B.forEach(p),h=I(m),i=y(m,"BUTTON",{class:!0});var ee=x(i);M=F(ee,"Cancel"),ee.forEach(p),m.forEach(p),q=I(g),T=y(g,"DIV",{class:!0});var D=x(T);O=y(D,"LABEL",{class:!0,for:!0});var te=x(O);R=F(te,"What community meetings would be useful to you?"),te.forEach(p),W=I(D),S=y(D,"DIV",{class:!0});var ne=x(S);for(let G=0;G<_.length;G+=1)_[G].l(ne);ne.forEach(p),D.forEach(p),j=I(g),J(E.$$.fragment,g),g.forEach(p),d.forEach(p),this.h()},h(){u(c,"class","w-1/3"),u(f,"class","w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"),f.hidden=k=!o[1],u(f,"type","submit"),u(f,"form","profileMeetingsForm"),u(i,"class","w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"),i.hidden=b=!o[1],u(l,"class","flex flex-row"),u(O,"class","mt-1 text-lg font-bold mb-1"),u(O,"for","community_meeting_choices_list"),u(S,"class","flex flex-col rounded-lg bg-orange-50 p-1"),u(T,"class","flex flex-row justify-between items-center px-4 mt-2"),u(e,"id","profileMeetingsForm"),u(e,"class","flex flex-col py-3 mx-auto min-h-full w-full text-orange-900 bg-orange-300"),u(e,"action","/profile/mycommunity/meetings"),u(e,"method","POST"),u(t,"class","min-h-full bg-orange-300")},m(s,d){ie(s,t,d),r&&r.m(t,null),a(t,n),a(t,e),a(e,l),a(l,c),a(l,$),a(l,f),a(f,w),a(l,h),a(l,i),a(i,M),a(e,q),a(e,T),a(T,O),a(O,R),a(T,W),a(T,S);for(let g=0;g<_.length;g+=1)_[g].m(S,null);a(e,j),K(E,e,null),C=!0,Z||(X=[U(f,"click",o[4]),U(i,"click",o[5]),U(e,"change",o[9])],Z=!0)},p(s,[d]){if(s[2]?r?(r.p(s,d),d&4&&N(r,1)):(r=se(s),r.c(),N(r,1),r.m(t,n)):r&&(be(),L(r,1,1,()=>{r=null}),de()),(!C||d&2&&k!==(k=!s[1]))&&(f.hidden=k),(!C||d&2&&b!==(b=!s[1]))&&(i.hidden=b),d&1){A=le;let m;for(m=0;m<A.length;m+=1){const B=oe(s,A,m);_[m]?_[m].p(B,d):(_[m]=ae(B),_[m].c(),_[m].m(S,null))}for(;m<_.length;m+=1)_[m].d(1);_.length=A.length}const g={};!z&&d&1&&(z=!0,g.inputValue=s[0].other_community_meeting,he(()=>z=!1)),E.$set(g)},i(s){C||(N(r),N(E.$$.fragment,s),C=!0)},o(s){L(r),L(E.$$.fragment,s),C=!1},d(s){s&&p(t),r&&r.d(),ge(_,s),Q(E),Z=!1,pe(X)}}}function Me(o,t,n){let e=!1,l=!1;ye(async({cancel:b})=>{e&&(b(),n(2,l=!l))});let{profileMeetings:c}=t;const $=[[]],f=()=>n(2,l=!l),w=()=>{n(1,e=!1)},k=()=>{n(1,e=!1)};function h(){c.community_meeting_choices=ve($[0],this.__value,this.checked),n(0,c)}function i(b){o.$$.not_equal(c.other_community_meeting,b)&&(c.other_community_meeting=b,n(0,c))}const M=()=>{n(1,e=!0)};return o.$$set=b=>{"profileMeetings"in b&&n(0,c=b.profileMeetings)},[c,e,l,f,w,k,h,$,i,M]}class Ne extends ue{constructor(t){super(),ce(this,t,Me,Ee,me,{profileMeetings:0})}}export{Ne as default};
