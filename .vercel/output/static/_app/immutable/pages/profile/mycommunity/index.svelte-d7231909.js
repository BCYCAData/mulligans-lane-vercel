import{S as He,i as Re,s as je,a6 as ze,a7 as Qe,l as c,a as E,r as j,w as ye,m as d,n as p,c as k,h as _,u as z,x as xe,p as l,q as De,Q as Ne,b as qe,N as a,$ as K,y as we,R as P,f as W,t as se,d as Ze,a8 as Ge,Z as Je,B as Ee,T as Ke,g as We,a9 as Xe}from"../../../chunks/index-1b426719.js";import{b as Ye}from"../../../chunks/navigation-6ce14b0f.js";import{b as Oe}from"../../../chunks/profileOptions-a101d701.js";import{T as et}from"../../../chunks/TextAreaInput-fa3717b0.js";import{M as tt}from"../../../chunks/Modal-6b781413.js";import{S as st}from"../../../chunks/SaveProfilePrompt-87393c69.js";import"../../../chunks/singletons-eca981c1.js";function Be(o,t,s){const e=o.slice();return e[17]=t[s].value,e[18]=t[s].lable,e}function Me(o){let t,s;return t=new tt({props:{$$slots:{default:[lt]},$$scope:{ctx:o}}}),t.$on("exit",o[4]),{c(){ye(t.$$.fragment)},l(e){xe(t.$$.fragment,e)},m(e,n){we(t,e,n),s=!0},p(e,n){const u={};n&2097152&&(u.$$scope={dirty:n,ctx:e}),t.$set(u)},i(e){s||(W(t.$$.fragment,e),s=!0)},o(e){se(t.$$.fragment,e),s=!1},d(e){Ee(t,e)}}}function lt(o){let t,s;return t=new st({}),{c(){ye(t.$$.fragment)},l(e){xe(t.$$.fragment,e)},m(e,n){we(t,e,n),s=!0},i(e){s||(W(t.$$.fragment,e),s=!0)},o(e){se(t.$$.fragment,e),s=!1},d(e){Ee(t,e)}}}function Ue(o){let t,s,e,n,u=o[18]+"",T,b,S,A;return{c(){t=c("li"),s=c("input"),e=E(),n=c("label"),T=j(u),b=E(),this.h()},l(I){t=d(I,"LI",{});var f=p(t);s=d(f,"INPUT",{name:!0,type:!0}),e=k(f),n=d(f,"LABEL",{for:!0});var N=p(n);T=z(N,u),N.forEach(_),b=k(f),f.forEach(_),this.h()},h(){l(s,"name","stay_in_touch_choices"),l(s,"type","checkbox"),s.__value=o[17],s.value=s.__value,o[8][0].push(s),l(n,"for","stay_in_touch_choices")},m(I,f){qe(I,t,f),a(t,s),s.checked=~o[0].stay_in_touch_choices.indexOf(s.__value),a(t,e),a(t,n),a(n,T),a(t,b),S||(A=P(s,"change",o[7]),S=!0)},p(I,f){f&1&&(s.checked=~I[0].stay_in_touch_choices.indexOf(s.__value))},d(I){I&&_(t),o[8][0].splice(o[8][0].indexOf(s),1),S=!1,A()}}}function at(o){let t,s,e,n,u,T,b,S,A,I,f,N,Q,X,$,L,Y,ee,O,i,ne,q,C,B,F,ue,ie,x,ce,M,H,de,_e,w,fe,U,R,me,pe,V,he,D,be,Z,ge,ke,m=o[2]&&Me(o),G=Oe,v=[];for(let r=0;r<G.length;r+=1)v[r]=Ue(Be(o,G,r));function Fe(r){o[15](r)}let Ie={lableClass:"font-bold pl-4 pt-4 text-base sm:text-lg",headingText:"If you have any other comments, add them here.",divClass:"px-4 rounded-lg bg-orange-300 sm:text-lg",nameText:"other_community_workshop",textAreaClass:"w-full resize-y sm:text-lg"};return o[0].other_comments!==void 0&&(Ie.inputValue=o[0].other_comments),D=new et({props:Ie}),ze.push(()=>Qe(D,"inputValue",Fe)),{c(){t=c("section"),m&&m.c(),s=E(),e=c("form"),n=c("div"),u=c("div"),T=E(),b=c("button"),S=j("Save My Answers"),I=E(),f=c("button"),N=j("Cancel"),X=E(),$=c("div"),L=c("label"),Y=j("How would you prefer to stay in touch?"),ee=E(),O=c("div"),i=c("div");for(let r=0;r<v.length;r+=1)v[r].c();ne=E(),q=c("div"),C=c("div"),B=c("div"),F=c("label"),ue=j("Postal address"),ie=E(),x=c("input"),ce=E(),M=c("div"),H=c("label"),de=j("Suburb"),_e=E(),w=c("input"),fe=E(),U=c("div"),R=c("label"),me=j("Postcode"),pe=E(),V=c("input"),he=E(),ye(D.$$.fragment),this.h()},l(r){t=d(r,"SECTION",{class:!0});var g=p(t);m&&m.l(g),s=k(g),e=d(g,"FORM",{id:!0,class:!0,action:!0,method:!0});var y=p(e);n=d(y,"DIV",{class:!0});var h=p(n);u=d(h,"DIV",{class:!0}),p(u).forEach(_),T=k(h),b=d(h,"BUTTON",{class:!0,type:!0,form:!0});var te=p(b);S=z(te,"Save My Answers"),te.forEach(_),I=k(h),f=d(h,"BUTTON",{class:!0});var Ve=p(f);N=z(Ve,"Cancel"),Ve.forEach(_),h.forEach(_),X=k(y),$=d(y,"DIV",{class:!0});var le=p($);L=d(le,"LABEL",{class:!0,for:!0});var Te=p(L);Y=z(Te,"How would you prefer to stay in touch?"),Te.forEach(_),ee=k(le),O=d(le,"DIV",{class:!0});var $e=p(O);i=d($e,"DIV",{class:!0,name:!0});var Ce=p(i);for(let ve=0;ve<v.length;ve+=1)v[ve].l(Ce);Ce.forEach(_),$e.forEach(_),le.forEach(_),ne=k(y),q=d(y,"DIV",{});var Pe=p(q);C=d(Pe,"DIV",{class:!0});var J=p(C);B=d(J,"DIV",{class:!0});var ae=p(B);F=d(ae,"LABEL",{class:!0,for:!0});var Se=p(F);ue=z(Se,"Postal address"),Se.forEach(_),ie=k(ae),x=d(ae,"INPUT",{type:!0,name:!0,class:!0,placeholder:!0,autocomplete:!0,style:!0}),ae.forEach(_),ce=k(J),M=d(J,"DIV",{class:!0});var oe=p(M);H=d(oe,"LABEL",{class:!0,for:!0});var Ae=p(H);de=z(Ae,"Suburb"),Ae.forEach(_),_e=k(oe),w=d(oe,"INPUT",{type:!0,name:!0,class:!0,placeholder:!0,autocomplete:!0,style:!0}),oe.forEach(_),fe=k(J),U=d(J,"DIV",{class:!0});var re=p(U);R=d(re,"LABEL",{class:!0,for:!0});var Le=p(R);me=z(Le,"Postcode"),Le.forEach(_),pe=k(re),V=d(re,"INPUT",{type:!0,name:!0,class:!0,placeholder:!0,autocomplete:!0}),re.forEach(_),J.forEach(_),Pe.forEach(_),he=k(y),xe(D.$$.fragment,y),y.forEach(_),g.forEach(_),this.h()},h(){l(u,"class","w-1/3"),l(b,"class","w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"),b.hidden=A=!o[1],l(b,"type","submit"),l(b,"form","profileCommunityForm"),l(f,"class","w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"),f.hidden=Q=!o[1],l(n,"class","flex flex-row"),l(L,"class","tracking-wide mr-4 mt-1 text-lg font-bold mb-1"),l(L,"for","stay_in_touch_choices_list"),l(i,"class","list-none sm:text-base sm:font-semibold sm:p-1"),l(i,"name","stay_in_touch_choices_list"),l(O,"class","flex rounded-lg bg-orange-50 mx-3"),l($,"class","flex flex-row justify-between items-center px-4 mt-2"),l(F,"class","tracking-wide text-lg font-bold mb-1"),l(F,"for","postal_address_street"),l(x,"type","text"),l(x,"name","postal_address_street"),l(x,"class","border w-full border-orange-700 rounded bg-orange-50 py-1 sm:text-lg"),l(x,"placeholder","Street Address"),l(x,"autocomplete","street-address"),De(x,"text-transform","uppercase sm:text-lg"),l(B,"class","flex flex-col basis-7/12 mx-2"),l(H,"class","tracking-wide text-lg font-bold mb-1"),l(H,"for","postal_address_suburb"),l(w,"type","text"),l(w,"name","postal_address_suburb"),l(w,"class","border w-full border-orange-700 rounded bg-orange-50 py-1 sm:text-lg"),l(w,"placeholder","Suburb"),l(w,"autocomplete",""),De(w,"text-transform","uppercase sm:text-lg"),l(M,"class","flex flex-col basis-3/12 mx-2"),l(R,"class","tracking-wide text-lg font-bold mb-1"),l(R,"for","postal_address_postcode"),l(V,"type","text"),l(V,"name","postal_address_postcode"),l(V,"class","border w-full border-orange-700 rounded bg-orange-50 py-1 sm:text-lg"),l(V,"placeholder","Postcode"),l(V,"autocomplete",""),l(U,"class","flex flex-col basis-2/12 mx-2"),l(C,"class","flex flex-row mx-2"),Ne(q,"hidden",!o[0].stay_in_touch_choices.includes(5)),l(e,"id","profileCommunityForm"),l(e,"class","flex flex-col py-3 mx-auto min-h-full w-full text-orange-900 bg-orange-300"),l(e,"action","/profile/mycommunity"),l(e,"method","POST"),l(t,"class","min-h-full bg-orange-300")},m(r,g){qe(r,t,g),m&&m.m(t,null),a(t,s),a(t,e),a(e,n),a(n,u),a(n,T),a(n,b),a(b,S),a(n,I),a(n,f),a(f,N),a(e,X),a(e,$),a($,L),a(L,Y),a($,ee),a($,O),a(O,i);for(let y=0;y<v.length;y+=1)v[y].m(i,null);a(e,ne),a(e,q),a(q,C),a(C,B),a(B,F),a(F,ue),a(B,ie),a(B,x),K(x,o[0].postal_address_street),a(C,ce),a(C,M),a(M,H),a(H,de),a(M,_e),a(M,w),K(w,o[0].postal_address_suburb),a(C,fe),a(C,U),a(U,R),a(R,me),a(U,pe),a(U,V),K(V,o[0].postal_address_postcode),a(e,he),we(D,e,null),Z=!0,ge||(ke=[P(b,"click",o[5]),P(f,"click",o[6]),P(x,"change",o[9]),P(x,"input",o[10]),P(w,"change",o[11]),P(w,"input",o[12]),P(V,"change",o[13]),P(V,"input",o[14]),P(e,"change",o[16])],ge=!0)},p(r,[g]){if(r[2]?m?(m.p(r,g),g&4&&W(m,1)):(m=Me(r),m.c(),W(m,1),m.m(t,s)):m&&(We(),se(m,1,1,()=>{m=null}),Ze()),(!Z||g&2&&A!==(A=!r[1]))&&(b.hidden=A),(!Z||g&2&&Q!==(Q=!r[1]))&&(f.hidden=Q),g&1){G=Oe;let h;for(h=0;h<G.length;h+=1){const te=Be(r,G,h);v[h]?v[h].p(te,g):(v[h]=Ue(te),v[h].c(),v[h].m(i,null))}for(;h<v.length;h+=1)v[h].d(1);v.length=G.length}g&1&&x.value!==r[0].postal_address_street&&K(x,r[0].postal_address_street),g&1&&w.value!==r[0].postal_address_suburb&&K(w,r[0].postal_address_suburb),g&1&&V.value!==r[0].postal_address_postcode&&K(V,r[0].postal_address_postcode),g&1&&Ne(q,"hidden",!r[0].stay_in_touch_choices.includes(5));const y={};!be&&g&1&&(be=!0,y.inputValue=r[0].other_comments,Ge(()=>be=!1)),D.$set(y)},i(r){Z||(W(m),W(D.$$.fragment,r),Z=!0)},o(r){se(m),se(D.$$.fragment,r),Z=!1},d(r){r&&_(t),m&&m.d(),Je(v,r),Ee(D),ge=!1,Ke(ke)}}}function ot(o,t,s){let e=!1,n=!1;Ye(async({cancel:i})=>{e&&(i(),s(2,n=!n))});let{profileCommunity:u}=t;const T=i=>{console.log("Validate address:  ",i.currentTarget.value)},b=[[]],S=()=>s(2,n=!n),A=()=>{s(1,e=!1)},I=()=>{s(1,e=!1)};function f(){u.stay_in_touch_choices=Xe(b[0],this.__value,this.checked),s(0,u)}const N=i=>{T(i)};function Q(){u.postal_address_street=this.value,s(0,u)}const X=i=>{T(i)};function $(){u.postal_address_suburb=this.value,s(0,u)}const L=i=>{T(i)};function Y(){u.postal_address_postcode=this.value,s(0,u)}function ee(i){o.$$.not_equal(u.other_comments,i)&&(u.other_comments=i,s(0,u))}const O=()=>{s(1,e=!0)};return o.$$set=i=>{"profileCommunity"in i&&s(0,u=i.profileCommunity)},[u,e,n,T,S,A,I,f,b,N,Q,X,$,L,Y,ee,O]}class ft extends He{constructor(t){super(),Re(this,t,ot,at,je,{profileCommunity:0})}}export{ft as default};
