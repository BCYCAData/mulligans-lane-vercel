import{S as fe,i as ue,s as ce,w as G,x as J,y as K,q as B,o as M,B as Q,e as v,k as V,t as D,c as x,a as $,m as O,h as P,d as b,b as f,g as re,N as r,R as q,a7 as me,a8 as he,p as _e,a6 as de,Z as pe,T as ge,n as be,a9 as ve}from"../../../../chunks/index-2a980a40.js";import{b as xe}from"../../../../chunks/navigation-7ffe60d0.js";import{i as ne}from"../../../../chunks/profileOptions-6a6787ed.js";import{T as $e}from"../../../../chunks/TextAreaInput-110f90a9.js";import{M as we}from"../../../../chunks/Modal-a92e6365.js";import{S as ke}from"../../../../chunks/SaveProfilePrompt-903d0a9b.js";import"../../../../chunks/singletons-cdeec3fd.js";function ae(n,t,o){const e=n.slice();return e[10]=t[o].value,e[11]=t[o].lable,e}function le(n){let t,o;return t=new we({props:{$$slots:{default:[Ee]},$$scope:{ctx:n}}}),t.$on("exit",n[3]),{c(){G(t.$$.fragment)},l(e){J(t.$$.fragment,e)},m(e,l){K(t,e,l),o=!0},p(e,l){const s={};l&16384&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){o||(B(t.$$.fragment,e),o=!0)},o(e){M(t.$$.fragment,e),o=!1},d(e){Q(t,e)}}}function Ee(n){let t,o;return t=new ke({}),{c(){G(t.$$.fragment)},l(e){J(t.$$.fragment,e)},m(e,l){K(t,e,l),o=!0},i(e){o||(B(t.$$.fragment,e),o=!0)},o(e){M(t.$$.fragment,e),o=!1},d(e){Q(t,e)}}}function se(n){let t,o,e,l,s,k=n[11]+"",m,E,w,y;return{c(){t=v("li"),o=v("input"),l=V(),s=v("label"),m=D(k),E=V(),this.h()},l(u){t=x(u,"LI",{class:!0,name:!0});var _=$(t);o=x(_,"INPUT",{name:!0,type:!0}),l=O(_),s=x(_,"LABEL",{for:!0});var d=$(s);m=P(d,k),d.forEach(b),E=O(_),_.forEach(b),this.h()},h(){f(o,"name","information_sheet_choices"),f(o,"type","checkbox"),o.__value=e=n[10],o.value=o.__value,n[7][0].push(o),f(s,"for","information_sheet_choices"),f(t,"class","list-none sm:text-base sm:font-semibold sm:p-1"),f(t,"name","information_sheet_choices_list")},m(u,_){re(u,t,_),r(t,o),o.checked=~n[0].information_sheet_choices.indexOf(o.__value),r(t,l),r(t,s),r(s,m),r(t,E),w||(y=q(o,"change",n[6]),w=!0)},p(u,_){_&1&&(o.checked=~u[0].information_sheet_choices.indexOf(o.__value))},d(u){u&&b(t),n[7][0].splice(n[7][0].indexOf(o),1),w=!1,y()}}}function Ie(n){let t,o,e,l,s,k,m,E,w,y,u,_,d,F,T,S,U,H,A,R,I,W,C,j,X,i=n[2]&&le(n),N=ne,h=[];for(let a=0;a<N.length;a+=1)h[a]=se(ae(n,N,a));function ie(a){n[8](a)}let Y={lableClass:"font-bold pl-4 pt-4 text-base sm:text-lg",headingText:"Are there other information sheets that you would find useful?",divClass:"px-4 rounded-lg bg-orange-300 sm:text-lg",nameText:"other_information_sheet",textAreaClass:"w-full resize-y sm:text-lg"};return n[0].other_information_sheet!==void 0&&(Y.inputValue=n[0].other_information_sheet),I=new $e({props:Y}),me.push(()=>he(I,"inputValue",ie)),{c(){t=v("section"),i&&i.c(),o=V(),e=v("form"),l=v("div"),s=v("div"),k=V(),m=v("button"),E=D("Save My Answers"),y=V(),u=v("button"),_=D("Cancel"),F=V(),T=v("div"),S=v("label"),U=D("What information sheets would be useful to you?"),H=V(),A=v("div");for(let a=0;a<h.length;a+=1)h[a].c();R=V(),G(I.$$.fragment),this.h()},l(a){t=x(a,"SECTION",{class:!0});var p=$(t);i&&i.l(p),o=O(p),e=x(p,"FORM",{id:!0,class:!0,action:!0,method:!0});var g=$(e);l=x(g,"DIV",{class:!0});var c=$(l);s=x(c,"DIV",{class:!0}),$(s).forEach(b),k=O(c),m=x(c,"BUTTON",{class:!0,type:!0,form:!0});var L=$(m);E=P(L,"Save My Answers"),L.forEach(b),y=O(c),u=x(c,"BUTTON",{class:!0});var ee=$(u);_=P(ee,"Cancel"),ee.forEach(b),c.forEach(b),F=O(g),T=x(g,"DIV",{class:!0});var z=$(T);S=x(z,"LABEL",{class:!0,for:!0});var te=$(S);U=P(te,"What information sheets would be useful to you?"),te.forEach(b),H=O(z),A=x(z,"DIV",{class:!0});var oe=$(A);for(let Z=0;Z<h.length;Z+=1)h[Z].l(oe);oe.forEach(b),z.forEach(b),R=O(g),J(I.$$.fragment,g),g.forEach(b),p.forEach(b),this.h()},h(){f(s,"class","w-1/3"),f(m,"class","w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"),m.hidden=w=!n[1],f(m,"type","submit"),f(m,"form","profileHazardsForm"),f(u,"class","w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"),u.hidden=d=!n[1],f(l,"class","flex flex-row"),f(S,"class","mt-1 text-orange-900 text-l font-bold mb-1"),f(S,"for","information_sheet_choices_list"),f(A,"class","flex flex-col rounded-lg bg-orange-50 p-1"),f(T,"class","flex flex-row justify-between items-center px-4 mt-2"),f(e,"id","profileHazardsForm"),f(e,"class","flex flex-col py-3 mx-auto min-h-full w-full text-orange-900 bg-orange-300"),f(e,"action","/profile/myplace/hazards"),f(e,"method","POST"),f(t,"class","min-h-full bg-orange-300")},m(a,p){re(a,t,p),i&&i.m(t,null),r(t,o),r(t,e),r(e,l),r(l,s),r(l,k),r(l,m),r(m,E),r(l,y),r(l,u),r(u,_),r(e,F),r(e,T),r(T,S),r(S,U),r(T,H),r(T,A);for(let g=0;g<h.length;g+=1)h[g].m(A,null);r(e,R),K(I,e,null),C=!0,j||(X=[q(m,"click",n[4]),q(u,"click",n[5]),q(e,"change",n[9])],j=!0)},p(a,[p]){if(a[2]?i?(i.p(a,p),p&4&&B(i,1)):(i=le(a),i.c(),B(i,1),i.m(t,o)):i&&(be(),M(i,1,1,()=>{i=null}),_e()),(!C||p&2&&w!==(w=!a[1]))&&(m.hidden=w),(!C||p&2&&d!==(d=!a[1]))&&(u.hidden=d),p&1){N=ne;let c;for(c=0;c<N.length;c+=1){const L=ae(a,N,c);h[c]?h[c].p(L,p):(h[c]=se(L),h[c].c(),h[c].m(A,null))}for(;c<h.length;c+=1)h[c].d(1);h.length=N.length}const g={};!W&&p&1&&(W=!0,g.inputValue=a[0].other_information_sheet,de(()=>W=!1)),I.$set(g)},i(a){C||(B(i),B(I.$$.fragment,a),C=!0)},o(a){M(i),M(I.$$.fragment,a),C=!1},d(a){a&&b(t),i&&i.d(),pe(h,a),Q(I),j=!1,ge(X)}}}function ye(n,t,o){let e=!1,l=!1;xe(async({cancel:d})=>{e&&(d(),o(2,l=!l))});let{profileInformation:s}=t;const k=[[]],m=()=>o(2,l=!l),E=()=>{o(1,e=!1)},w=()=>{o(1,e=!1)};function y(){s.information_sheet_choices=ve(k[0],this.__value,this.checked),o(0,s)}function u(d){n.$$.not_equal(s.other_information_sheet,d)&&(s.other_information_sheet=d,o(0,s))}const _=()=>{o(1,e=!0)};return n.$$set=d=>{"profileInformation"in d&&o(0,s=d.profileInformation)},[s,e,l,m,E,w,y,k,u,_]}class Be extends fe{constructor(t){super(),ue(this,t,ye,Ie,ce,{profileInformation:0})}}export{Be as default};