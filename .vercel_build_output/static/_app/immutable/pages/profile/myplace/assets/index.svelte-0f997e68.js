import{S as dt,i as mt,s as vt,w as ct,x as ut,y as _t,q as _e,o as be,B as ft,e as h,k as E,t as B,c as d,a as m,m as y,h as N,d as _,b as o,g as Y,N as r,R as P,Q as Ge,a5 as Je,p as pt,aa as ht,Z as pe,T as Te,n as gt,a9 as ge}from"../../../../chunks/index-2a980a40.js";import{b as bt}from"../../../../chunks/navigation-7ffe60d0.js";import{g as Ke,a as Xe,h as Ye,j as $e}from"../../../../chunks/profileOptions-6a6787ed.js";import{M as kt}from"../../../../chunks/Modal-a92e6365.js";import{S as wt}from"../../../../chunks/SaveProfilePrompt-903d0a9b.js";import"../../../../chunks/singletons-cdeec3fd.js";function et(s,e,t){const l=s.slice();return l[20]=e[t].value,l[21]=e[t].lable,l}function tt(s,e,t){const l=s.slice();return l[20]=e[t].value,l[21]=e[t].lable,l}function lt(s,e,t){const l=s.slice();return l[20]=e[t].value,l[21]=e[t].lable,l}function at(s,e,t){const l=s.slice();return l[20]=e[t].value,l[21]=e[t].lable,l}function st(s){let e,t;return e=new kt({props:{$$slots:{default:[Et]},$$scope:{ctx:s}}}),e.$on("exit",s[6]),{c(){ct(e.$$.fragment)},l(l){ut(e.$$.fragment,l)},m(l,c){_t(e,l,c),t=!0},p(l,c){const i={};c&1073741824&&(i.$$scope={dirty:c,ctx:l}),e.$set(i)},i(l){t||(_e(e.$$.fragment,l),t=!0)},o(l){be(e.$$.fragment,l),t=!1},d(l){ft(e,l)}}}function Et(s){let e,t;return e=new wt({}),{c(){ct(e.$$.fragment)},l(l){ut(e.$$.fragment,l)},m(l,c){_t(e,l,c),t=!0},i(l){t||(_e(e.$$.fragment,l),t=!0)},o(l){be(e.$$.fragment,l),t=!1},d(l){ft(e,l)}}}function yt(s){let e,t,l;return{c(){e=h("input"),this.h()},l(c){e=d(c,"INPUT",{name:!0,type:!0}),this.h()},h(){o(e,"name","static_water_available"),o(e,"type","checkbox"),e.__value=s[20],e.value=e.__value,e.checked=s[3],s[10][2].push(e)},m(c,i){Y(c,e,i),e.checked=~s[0].static_water_available.indexOf(e.__value),t||(l=[P(e,"change",s[12]),P(e,"change",s[13])],t=!0)},p(c,i){i&8&&(e.checked=c[3]),i&1&&(e.checked=~c[0].static_water_available.indexOf(e.__value))},d(c){c&&_(e),s[10][2].splice(s[10][2].indexOf(e),1),t=!1,Te(l)}}}function zt(s){let e,t,l;return{c(){e=h("input"),this.h()},l(c){e=d(c,"INPUT",{name:!0,type:!0}),this.h()},h(){o(e,"name","static_water_available"),o(e,"type","checkbox"),e.__value=s[20],e.value=e.__value,s[10][2].push(e)},m(c,i){Y(c,e,i),e.checked=~s[0].static_water_available.indexOf(e.__value),t||(l=[P(e,"change",s[9]),P(e,"change",s[11])],t=!0)},p(c,i){i&1&&(e.checked=~c[0].static_water_available.indexOf(e.__value))},d(c){c&&_(e),s[10][2].splice(s[10][2].indexOf(e),1),t=!1,Te(l)}}}function rt(s){let e,t,l,c=s[21]+"",i,k;function v(p,u){return p[20]<5?zt:yt}let g=v(s)(s);return{c(){e=h("li"),g.c(),t=E(),l=h("label"),i=B(c),k=E(),this.h()},l(p){e=d(p,"LI",{class:!0,name:!0});var u=m(e);g.l(u),t=y(u),l=d(u,"LABEL",{for:!0});var f=m(l);i=N(f,c),f.forEach(_),k=y(u),u.forEach(_),this.h()},h(){o(l,"for","static_water_available"),o(e,"class","justify-start place-items-center"),o(e,"name","static_water_available_list")},m(p,u){Y(p,e,u),g.m(e,null),r(e,t),r(e,l),r(l,i),r(e,k)},p(p,u){g.p(p,u)},d(p){p&&_(e),g.d()}}}function nt(s){let e,t,l,c,i,k=s[21]+"",v,I,g,p;return{c(){e=h("li"),t=h("input"),c=E(),i=h("label"),v=B(k),I=E(),this.h()},l(u){e=d(u,"LI",{class:!0,name:!0});var f=m(e);t=d(f,"INPUT",{name:!0,type:!0}),c=y(f),i=d(f,"LABEL",{for:!0});var T=m(i);v=N(T,k),T.forEach(_),I=y(f),f.forEach(_),this.h()},h(){o(t,"name","have_stortz"),o(t,"type","radio"),t.__value=l=s[20],t.value=t.__value,s[10][3].push(t),o(i,"for","have_stortz"),o(e,"class","list-none sm:text-base sm:font-semibold sm:p-1"),o(e,"name","have_stortz_list")},m(u,f){Y(u,e,f),r(e,t),t.checked=t.__value===s[0].have_stortz,r(e,c),r(e,i),r(i,v),r(e,I),g||(p=P(t,"change",s[14]),g=!0)},p(u,f){f&1&&(t.checked=t.__value===u[0].have_stortz)},d(u){u&&_(e),s[10][3].splice(s[10][3].indexOf(t),1),g=!1,p()}}}function ot(s){let e,t,l,c,i,k=s[21]+"",v,I,g,p;return{c(){e=h("li"),t=h("input"),c=E(),i=h("label"),v=B(k),I=E(),this.h()},l(u){e=d(u,"LI",{class:!0,name:!0});var f=m(e);t=d(f,"INPUT",{name:!0,type:!0}),c=y(f),i=d(f,"LABEL",{for:!0});var T=m(i);v=N(T,k),T.forEach(_),I=y(f),f.forEach(_),this.h()},h(){o(t,"name","fire_fighting_assets"),o(t,"type","checkbox"),t.__value=l=s[20],t.value=t.__value,s[10][1].push(t),o(i,"for","fire_fighting_assets"),o(e,"class","list-none sm:text-base sm:font-semibold sm:p-1"),o(e,"name","fire_fighting_assets_list")},m(u,f){Y(u,e,f),r(e,t),t.checked=~s[0].fire_fighting_assets.indexOf(t.__value),r(e,c),r(e,i),r(i,v),r(e,I),g||(p=P(t,"change",s[16]),g=!0)},p(u,f){f&1&&(t.checked=~u[0].fire_fighting_assets.indexOf(t.__value))},d(u){u&&_(e),s[10][1].splice(s[10][1].indexOf(t),1),g=!1,p()}}}function it(s){let e,t,l,c,i,k=s[21]+"",v,I,g,p;return{c(){e=h("li"),t=h("input"),c=E(),i=h("label"),v=B(k),I=E(),this.h()},l(u){e=d(u,"LI",{});var f=m(e);t=d(f,"INPUT",{name:!0,type:!0}),c=y(f),i=d(f,"LABEL",{for:!0});var T=m(i);v=N(T,k),T.forEach(_),I=y(f),f.forEach(_),this.h()},h(){o(t,"name","fire_hazard_reduction"),o(t,"type","checkbox"),t.__value=l=s[20],t.value=t.__value,s[10][0].push(t),o(i,"for","fire_hazard_reduction")},m(u,f){Y(u,e,f),r(e,t),t.checked=~s[0].fire_hazard_reduction.indexOf(t.__value),r(e,c),r(e,i),r(i,v),r(e,I),g||(p=P(t,"change",s[17]),g=!0)},p(u,f){f&1&&(t.checked=~u[0].fire_hazard_reduction.indexOf(t.__value))},d(u){u&&_(e),s[10][0].splice(s[10][0].indexOf(t),1),g=!1,p()}}}function It(s){let e,t,l,c,i,k,v,I,g,p,u,f,T,ne,U,M,oe,ie,F,j,ce,C,b,ue,ke,Z,we,G,R,J,Ee,ye,S,ze,W,K,Ie,xe,$,q,Ae,H,X,Le,De,ee,Q,te,Oe,Ve,z=s[2]&&st(s),le=Ke,A=[];for(let n=0;n<le.length;n+=1)A[n]=rt(at(s,le,n));let ae=Xe,L=[];for(let n=0;n<ae.length;n+=1)L[n]=nt(lt(s,ae,n));let se=Ye,D=[];for(let n=0;n<se.length;n+=1)D[n]=ot(tt(s,se,n));let re=$e,O=[];for(let n=0;n<re.length;n+=1)O[n]=it(et(s,re,n));return{c(){e=h("section"),z&&z.c(),t=E(),l=h("form"),c=h("div"),i=h("div"),k=E(),v=h("button"),I=B("Save My Answers"),p=E(),u=h("button"),f=B("Cancel"),ne=E(),U=h("div"),M=h("label"),oe=B("Are there any static water supplies on the property?"),ie=E(),F=h("div"),j=h("div");for(let n=0;n<A.length;n+=1)A[n].c();ce=E(),C=h("div"),b=h("label"),ue=B("Do you have a Stortz fitting attached to a water tank?"),ke=E(),Z=h("div");for(let n=0;n<L.length;n+=1)L[n].c();we=E(),G=h("div"),R=h("div"),J=h("label"),Ee=B("Please include the size (mm)"),ye=E(),S=h("input"),ze=E(),W=h("div"),K=h("label"),Ie=B("Do you have any of the following at this property?"),xe=E(),$=h("div"),q=h("div");for(let n=0;n<D.length;n+=1)D[n].c();Ae=E(),H=h("div"),X=h("label"),Le=B("Does your property have?"),De=E(),ee=h("div"),Q=h("div");for(let n=0;n<O.length;n+=1)O[n].c();this.h()},l(n){e=d(n,"SECTION",{class:!0});var w=m(e);z&&z.l(w),t=y(w),l=d(w,"FORM",{id:!0,class:!0,action:!0,method:!0});var a=m(l);c=d(a,"DIV",{class:!0});var x=m(c);i=d(x,"DIV",{class:!0}),m(i).forEach(_),k=y(x),v=d(x,"BUTTON",{class:!0,type:!0,form:!0});var Se=m(v);I=N(Se,"Save My Answers"),Se.forEach(_),p=y(x),u=d(x,"BUTTON",{class:!0});var Be=m(u);f=N(Be,"Cancel"),Be.forEach(_),x.forEach(_),ne=y(a),U=d(a,"DIV",{class:!0});var fe=m(U);M=d(fe,"LABEL",{class:!0,for:!0});var Ne=m(M);oe=N(Ne,"Are there any static water supplies on the property?"),Ne.forEach(_),ie=y(fe),F=d(fe,"DIV",{class:!0});var Pe=m(F);j=d(Pe,"DIV",{class:!0,name:!0});var Ue=m(j);for(let V=0;V<A.length;V+=1)A[V].l(Ue);Ue.forEach(_),Pe.forEach(_),fe.forEach(_),ce=y(a),C=d(a,"DIV",{class:!0});var he=m(C);b=d(he,"LABEL",{class:!0,for:!0});var je=m(b);ue=N(je,"Do you have a Stortz fitting attached to a water tank?"),je.forEach(_),ke=y(he),Z=d(he,"DIV",{class:!0});var Ce=m(Z);for(let V=0;V<L.length;V+=1)L[V].l(Ce);Ce.forEach(_),he.forEach(_),we=y(a),G=d(a,"DIV",{});var Me=m(G);R=d(Me,"DIV",{class:!0});var de=m(R);J=d(de,"LABEL",{class:!0,for:!0});var Fe=m(J);Ee=N(Fe,"Please include the size (mm)"),Fe.forEach(_),ye=y(de),S=d(de,"INPUT",{type:!0,id:!0,name:!0,class:!0}),de.forEach(_),Me.forEach(_),ze=y(a),W=d(a,"DIV",{class:!0});var me=m(W);K=d(me,"LABEL",{class:!0,for:!0});var Re=m(K);Ie=N(Re,"Do you have any of the following at this property?"),Re.forEach(_),xe=y(me),$=d(me,"DIV",{class:!0});var We=m($);q=d(We,"DIV",{class:!0,name:!0});var qe=m(q);for(let V=0;V<D.length;V+=1)D[V].l(qe);qe.forEach(_),We.forEach(_),me.forEach(_),Ae=y(a),H=d(a,"DIV",{class:!0});var ve=m(H);X=d(ve,"LABEL",{class:!0,for:!0});var He=m(X);Le=N(He,"Does your property have?"),He.forEach(_),De=y(ve),ee=d(ve,"DIV",{class:!0});var Qe=m(ee);Q=d(Qe,"DIV",{class:!0,name:!0});var Ze=m(Q);for(let V=0;V<O.length;V+=1)O[V].l(Ze);Ze.forEach(_),Qe.forEach(_),ve.forEach(_),a.forEach(_),w.forEach(_),this.h()},h(){o(i,"class","w-1/3"),o(v,"class","w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"),v.hidden=g=!s[1],o(v,"type","submit"),o(v,"form","profileAssetsForm"),o(u,"class","w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"),u.hidden=T=!s[1],o(c,"class","flex flex-row"),o(M,"class","tracking-wide mr-4 mt-1 text-lg font-bold mb-1"),o(M,"for","static_water_available_list"),o(j,"class","list-none sm:text-base sm:font-semibold sm:p-1"),o(j,"name","static_water_available_list"),o(F,"class","flex rounded-lg bg-orange-50 mx-3"),o(U,"class","flex flex-row justify-between items-center px-4 mt-2"),o(b,"class","tracking-wide mr-4 mt-1 text-lg font-bold mb-1"),o(b,"for","have_stortz_list"),o(Z,"class","flex flex-row rounded-lg bg-orange-50 p-1 mx-2"),o(C,"class","flex flex-row justify-between items-center px-4 mt-2"),o(J,"class","mt-1 text-lg font-bold mb-1"),o(J,"for","stortz_size"),o(S,"type","number"),o(S,"id","stortz_size"),o(S,"name","stortz_size"),o(S,"class","border border-orange-700 w-20 rounded ml-4 py-1 sm:text-lg"),o(R,"class","flex flex-row justify-start items-center px-4 mt-2"),Ge(G,"hidden",s[0].have_stortz!==!0),o(K,"class","tracking-wide mr-4 mt-1 text-lg font-bold mb-1"),o(K,"for","fire_fighting_assets_list"),o(q,"class","list-none sm:text-base sm:font-semibold sm:p-1"),o(q,"name","fire_fighting_assets_list"),o($,"class","flex rounded-lg bg-orange-50 mx-3"),o(W,"class","flex flex-row justify-between items-center px-4 mt-2"),o(X,"class","tracking-wide mr-4 mt-1 text-lg font-bold mb-1"),o(X,"for","fire_hazard_reduction_list"),o(Q,"class","list-none sm:text-base sm:font-semibold sm:p-1"),o(Q,"name","fire_hazard_reduction_list"),o(ee,"class","flex rounded-lg bg-orange-50 mx-3"),o(H,"class","flex flex-row justify-between items-center px-4 mt-2"),o(l,"id","profileAssetsForm"),o(l,"class","flex flex-col py-3 mx-auto min-h-full w-full text-orange-900 bg-orange-300"),o(l,"action","/profile/myplace/assets"),o(l,"method","POST"),o(e,"class","min-h-full bg-orange-300")},m(n,w){Y(n,e,w),z&&z.m(e,null),r(e,t),r(e,l),r(l,c),r(c,i),r(c,k),r(c,v),r(v,I),r(c,p),r(c,u),r(u,f),r(l,ne),r(l,U),r(U,M),r(M,oe),r(U,ie),r(U,F),r(F,j);for(let a=0;a<A.length;a+=1)A[a].m(j,null);r(l,ce),r(l,C),r(C,b),r(b,ue),r(C,ke),r(C,Z);for(let a=0;a<L.length;a+=1)L[a].m(Z,null);r(l,we),r(l,G),r(G,R),r(R,J),r(J,Ee),r(R,ye),r(R,S),Je(S,s[0].stortz_size),r(l,ze),r(l,W),r(W,K),r(K,Ie),r(W,xe),r(W,$),r($,q);for(let a=0;a<D.length;a+=1)D[a].m(q,null);r(l,Ae),r(l,H),r(H,X),r(X,Le),r(H,De),r(H,ee),r(ee,Q);for(let a=0;a<O.length;a+=1)O[a].m(Q,null);te=!0,Oe||(Ve=[P(v,"click",s[7]),P(u,"click",s[8]),P(S,"input",s[15]),P(l,"change",s[18])],Oe=!0)},p(n,[w]){if(n[2]?z?(z.p(n,w),w&4&&_e(z,1)):(z=st(n),z.c(),_e(z,1),z.m(e,t)):z&&(gt(),be(z,1,1,()=>{z=null}),pt()),(!te||w&2&&g!==(g=!n[1]))&&(v.hidden=g),(!te||w&2&&T!==(T=!n[1]))&&(u.hidden=T),w&57){le=Ke;let a;for(a=0;a<le.length;a+=1){const x=at(n,le,a);A[a]?A[a].p(x,w):(A[a]=rt(x),A[a].c(),A[a].m(j,null))}for(;a<A.length;a+=1)A[a].d(1);A.length=le.length}if(w&1){ae=Xe;let a;for(a=0;a<ae.length;a+=1){const x=lt(n,ae,a);L[a]?L[a].p(x,w):(L[a]=nt(x),L[a].c(),L[a].m(Z,null))}for(;a<L.length;a+=1)L[a].d(1);L.length=ae.length}if(w&1&&ht(S.value)!==n[0].stortz_size&&Je(S,n[0].stortz_size),w&1&&Ge(G,"hidden",n[0].have_stortz!==!0),w&1){se=Ye;let a;for(a=0;a<se.length;a+=1){const x=tt(n,se,a);D[a]?D[a].p(x,w):(D[a]=ot(x),D[a].c(),D[a].m(q,null))}for(;a<D.length;a+=1)D[a].d(1);D.length=se.length}if(w&1){re=$e;let a;for(a=0;a<re.length;a+=1){const x=et(n,re,a);O[a]?O[a].p(x,w):(O[a]=it(x),O[a].c(),O[a].m(Q,null))}for(;a<O.length;a+=1)O[a].d(1);O.length=re.length}},i(n){te||(_e(z),te=!0)},o(n){be(z),te=!1},d(n){n&&_(e),z&&z.d(),pe(A,n),pe(L,n),pe(D,n),pe(O,n),Oe=!1,Te(Ve)}}}function xt(s,e,t){let l=!1,c=!1;bt(async({cancel:b})=>{l&&(b(),t(2,c=!c))});let{profileAssets:i}=e,k=!1,v=new Set;const I=b=>{if(b.currentTarget.checked){console.log("unset");for(const ue of v)ue.checked=!1;v.clear(),t(3,k=!0)}},g=b=>{console.log("set"),b.currentTarget.checked?v.add(b.currentTarget):v.delete(b.currentTarget),k&&t(3,k=!1)},p=[[],[],[],[]],u=()=>t(2,c=!c),f=()=>{t(1,l=!1)},T=()=>{t(1,l=!1)};function ne(){i.static_water_available=ge(p[2],this.__value,this.checked),t(0,i)}const U=b=>{g(b)};function M(){i.static_water_available=ge(p[2],this.__value,this.checked),t(0,i)}const oe=b=>{I(b)};function ie(){i.have_stortz=this.__value,t(0,i)}function F(){i.stortz_size=ht(this.value),t(0,i)}function j(){i.fire_fighting_assets=ge(p[1],this.__value,this.checked),t(0,i)}function ce(){i.fire_hazard_reduction=ge(p[0],this.__value,this.checked),t(0,i)}const C=()=>{t(1,l=!0)};return s.$$set=b=>{"profileAssets"in b&&t(0,i=b.profileAssets)},[i,l,c,k,I,g,u,f,T,ne,p,U,M,oe,ie,F,j,ce,C]}class St extends dt{constructor(e){super(),mt(this,e,xt,It,vt,{profileAssets:0})}}export{St as default};