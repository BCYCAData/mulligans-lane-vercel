import{S as fe,i as ue,s as ce,a6 as me,a7 as he,l as v,a as V,r as P,w as H,m as x,n as $,c as O,h as g,u as F,x as J,p as f,b as re,N as s,y as K,R as U,f as B,t as M,d as _e,a8 as de,Z as pe,B as Q,T as ge,g as be,a9 as ve}from"../../../../chunks/index-1b426719.js";import{b as xe}from"../../../../chunks/navigation-6ce14b0f.js";import{i as ne}from"../../../../chunks/profileOptions-a101d701.js";import{T as $e}from"../../../../chunks/TextAreaInput-fa3717b0.js";import{M as we}from"../../../../chunks/Modal-6b781413.js";import{S as ke}from"../../../../chunks/SaveProfilePrompt-87393c69.js";import"../../../../chunks/singletons-eca981c1.js";function ae(a,t,o){const e=a.slice();return e[10]=t[o].value,e[11]=t[o].lable,e}function le(a){let t,o;return t=new we({props:{$$slots:{default:[Ie]},$$scope:{ctx:a}}}),t.$on("exit",a[3]),{c(){H(t.$$.fragment)},l(e){J(t.$$.fragment,e)},m(e,n){K(t,e,n),o=!0},p(e,n){const u={};n&16384&&(u.$$scope={dirty:n,ctx:e}),t.$set(u)},i(e){o||(B(t.$$.fragment,e),o=!0)},o(e){M(t.$$.fragment,e),o=!1},d(e){Q(t,e)}}}function Ie(a){let t,o;return t=new ke({}),{c(){H(t.$$.fragment)},l(e){J(t.$$.fragment,e)},m(e,n){K(t,e,n),o=!0},i(e){o||(B(t.$$.fragment,e),o=!0)},o(e){M(t.$$.fragment,e),o=!1},d(e){Q(t,e)}}}function se(a){let t,o,e,n,u=a[11]+"",w,m,k,I;return{c(){t=v("li"),o=v("input"),e=V(),n=v("label"),w=P(u),m=V(),this.h()},l(d){t=x(d,"LI",{class:!0,name:!0});var r=$(t);o=x(r,"INPUT",{name:!0,type:!0}),e=O(r),n=x(r,"LABEL",{for:!0});var y=$(n);w=F(y,u),y.forEach(g),m=O(r),r.forEach(g),this.h()},h(){f(o,"name","information_sheet_choices"),f(o,"type","checkbox"),o.__value=a[10],o.value=o.__value,a[7][0].push(o),f(n,"for","information_sheet_choices"),f(t,"class","list-none sm:text-base sm:font-semibold sm:p-1"),f(t,"name","information_sheet_choices_list")},m(d,r){re(d,t,r),s(t,o),o.checked=~a[0].information_sheet_choices.indexOf(o.__value),s(t,e),s(t,n),s(n,w),s(t,m),k||(I=U(o,"change",a[6]),k=!0)},p(d,r){r&1&&(o.checked=~d[0].information_sheet_choices.indexOf(o.__value))},d(d){d&&g(t),a[7][0].splice(a[7][0].indexOf(o),1),k=!1,I()}}}function Ee(a){let t,o,e,n,u,w,m,k,I,d,r,y,b,q,T,S,R,W,A,j,E,z,C,Z,X,i=a[2]&&le(a),N=ne,h=[];for(let l=0;l<N.length;l+=1)h[l]=se(ae(a,N,l));function ie(l){a[8](l)}let Y={lableClass:"font-bold pl-4 pt-4 text-base sm:text-lg",headingText:"Are there other information sheets that you would find useful?",divClass:"px-4 rounded-lg bg-orange-300 sm:text-lg",nameText:"other_information_sheet",textAreaClass:"w-full resize-y sm:text-lg"};return a[0].other_information_sheet!==void 0&&(Y.inputValue=a[0].other_information_sheet),E=new $e({props:Y}),me.push(()=>he(E,"inputValue",ie)),{c(){t=v("section"),i&&i.c(),o=V(),e=v("form"),n=v("div"),u=v("div"),w=V(),m=v("button"),k=P("Save My Answers"),d=V(),r=v("button"),y=P("Cancel"),q=V(),T=v("div"),S=v("label"),R=P("What information sheets would be useful to you?"),W=V(),A=v("div");for(let l=0;l<h.length;l+=1)h[l].c();j=V(),H(E.$$.fragment),this.h()},l(l){t=x(l,"SECTION",{class:!0});var _=$(t);i&&i.l(_),o=O(_),e=x(_,"FORM",{id:!0,class:!0,action:!0,method:!0});var p=$(e);n=x(p,"DIV",{class:!0});var c=$(n);u=x(c,"DIV",{class:!0}),$(u).forEach(g),w=O(c),m=x(c,"BUTTON",{class:!0,type:!0,form:!0});var L=$(m);k=F(L,"Save My Answers"),L.forEach(g),d=O(c),r=x(c,"BUTTON",{class:!0});var ee=$(r);y=F(ee,"Cancel"),ee.forEach(g),c.forEach(g),q=O(p),T=x(p,"DIV",{class:!0});var D=$(T);S=x(D,"LABEL",{class:!0,for:!0});var te=$(S);R=F(te,"What information sheets would be useful to you?"),te.forEach(g),W=O(D),A=x(D,"DIV",{class:!0});var oe=$(A);for(let G=0;G<h.length;G+=1)h[G].l(oe);oe.forEach(g),D.forEach(g),j=O(p),J(E.$$.fragment,p),p.forEach(g),_.forEach(g),this.h()},h(){f(u,"class","w-1/3"),f(m,"class","w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"),m.hidden=I=!a[1],f(m,"type","submit"),f(m,"form","profileInformationForm"),f(r,"class","w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"),r.hidden=b=!a[1],f(n,"class","flex flex-row"),f(S,"class","mt-1 text-orange-900 text-l font-bold mb-1"),f(S,"for","information_sheet_choices_list"),f(A,"class","flex flex-col rounded-lg bg-orange-50 p-1"),f(T,"class","flex flex-row justify-between items-center px-4 mt-2"),f(e,"id","profileInformationForm"),f(e,"class","flex flex-col py-3 mx-auto min-h-full w-full text-orange-900 bg-orange-300"),f(e,"action","/profile/mycommunity/information"),f(e,"method","POST"),f(t,"class","min-h-full bg-orange-300")},m(l,_){re(l,t,_),i&&i.m(t,null),s(t,o),s(t,e),s(e,n),s(n,u),s(n,w),s(n,m),s(m,k),s(n,d),s(n,r),s(r,y),s(e,q),s(e,T),s(T,S),s(S,R),s(T,W),s(T,A);for(let p=0;p<h.length;p+=1)h[p].m(A,null);s(e,j),K(E,e,null),C=!0,Z||(X=[U(m,"click",a[4]),U(r,"click",a[5]),U(e,"change",a[9])],Z=!0)},p(l,[_]){if(l[2]?i?(i.p(l,_),_&4&&B(i,1)):(i=le(l),i.c(),B(i,1),i.m(t,o)):i&&(be(),M(i,1,1,()=>{i=null}),_e()),(!C||_&2&&I!==(I=!l[1]))&&(m.hidden=I),(!C||_&2&&b!==(b=!l[1]))&&(r.hidden=b),_&1){N=ne;let c;for(c=0;c<N.length;c+=1){const L=ae(l,N,c);h[c]?h[c].p(L,_):(h[c]=se(L),h[c].c(),h[c].m(A,null))}for(;c<h.length;c+=1)h[c].d(1);h.length=N.length}const p={};!z&&_&1&&(z=!0,p.inputValue=l[0].other_information_sheet,de(()=>z=!1)),E.$set(p)},i(l){C||(B(i),B(E.$$.fragment,l),C=!0)},o(l){M(i),M(E.$$.fragment,l),C=!1},d(l){l&&g(t),i&&i.d(),pe(h,l),Q(E),Z=!1,ge(X)}}}function ye(a,t,o){let e=!1,n=!1;xe(async({cancel:b})=>{e&&(b(),o(2,n=!n))});let{profileInformation:u}=t;const w=[[]],m=()=>o(2,n=!n),k=()=>{o(1,e=!1)},I=()=>{o(1,e=!1)};function d(){u.information_sheet_choices=ve(w[0],this.__value,this.checked),o(0,u)}function r(b){a.$$.not_equal(u.other_information_sheet,b)&&(u.other_information_sheet=b,o(0,u))}const y=()=>{o(1,e=!0)};return a.$$set=b=>{"profileInformation"in b&&o(0,u=b.profileInformation)},[u,e,n,m,k,I,d,w,r,y]}class Be extends fe{constructor(t){super(),ue(this,t,ye,Ee,ce,{profileInformation:0})}}export{Be as default};
