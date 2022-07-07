import{S as Ze,i as ze,s as Fe,a7 as ae,a8 as se,e as m,k as $,t as Z,c as d,a as h,m as x,h as z,d as _,b as u,g as N,N as o,R as $e,w as re,x as ie,Q as oe,y as ue,a6 as _e,q as fe,o as pe,B as ce,Z as Ee}from"../../../../chunks/index-b429d93a.js";import{a as Oe,e as me}from"../../../../chunks/profileOptions-e1ddd3e6.js";import{N as de}from"../../../../chunks/NumberInput-1ba88cd4.js";function je(n,l,t){const s=n.slice();return s[9]=l[t].value,s[10]=l[t].lable,s}function Pe(n,l,t){const s=n.slice();return s[9]=l[t].value,s[10]=l[t].lable,s}function Te(n,l,t){const s=n.slice();return s[9]=l[t].value,s[10]=l[t].lable,s}function Ue(n){let l,t,s,v,i,b=n[10]+"",g,k,c,I;return{c(){l=m("li"),t=m("input"),v=$(),i=m("label"),g=Z(b),k=$(),this.h()},l(f){l=d(f,"LI",{class:!0,name:!0});var a=h(l);t=d(a,"INPUT",{name:!0,type:!0}),v=x(a),i=d(a,"LABEL",{for:!0});var L=h(i);g=z(L,b),L.forEach(_),k=x(a),a.forEach(_),this.h()},h(){u(t,"name","live_stock_present"),u(t,"type","radio"),t.__value=s=n[9],t.value=t.__value,n[6][0].push(t),u(i,"for","live_stock_present"),u(l,"class","list-none sm:text-base sm:font-semibold sm:p-1"),u(l,"name","live_stock_present_list")},m(f,a){N(f,l,a),o(l,t),t.checked=t.__value===n[0].live_stock_present,o(l,v),o(l,i),o(i,g),o(l,k),c||(I=$e(t,"change",n[5]),c=!0)},p(f,a){a&1&&(t.checked=t.__value===f[0].live_stock_present)},d(f){f&&_(l),n[6][0].splice(n[6][0].indexOf(t),1),c=!1,I()}}}function He(n){let l,t,s,v,i,b=n[10]+"",g,k,c,I;return{c(){l=m("li"),t=m("input"),v=$(),i=m("label"),g=Z(b),k=$(),this.h()},l(f){l=d(f,"LI",{class:!0,name:!0});var a=h(l);t=d(a,"INPUT",{name:!0,type:!0}),v=x(a),i=d(a,"LABEL",{for:!0});var L=h(i);g=z(L,b),L.forEach(_),k=x(a),a.forEach(_),this.h()},h(){u(t,"name","live_stock_safe_area"),u(t,"type","radio"),t.__value=s=n[9],t.value=t.__value,n[6][1].push(t),u(i,"for","live_stock_safe_area"),u(l,"class","list-none sm:text-base sm:font-semibold sm:p-1"),u(l,"name","live_stock_safe_area_list")},m(f,a){N(f,l,a),o(l,t),t.checked=t.__value===n[0].live_stock_safe_area,o(l,v),o(l,i),o(i,g),o(l,k),c||(I=$e(t,"change",n[7]),c=!0)},p(f,a){a&1&&(t.checked=t.__value===f[0].live_stock_safe_area)},d(f){f&&_(l),n[6][1].splice(n[6][1].indexOf(t),1),c=!1,I()}}}function Se(n){let l,t,s,v,i,b=n[10]+"",g,k,c,I;return{c(){l=m("li"),t=m("input"),v=$(),i=m("label"),g=Z(b),k=$(),this.h()},l(f){l=d(f,"LI",{class:!0,name:!0});var a=h(l);t=d(a,"INPUT",{name:!0,type:!0}),v=x(a),i=d(a,"LABEL",{for:!0});var L=h(i);g=z(L,b),L.forEach(_),k=x(a),a.forEach(_),this.h()},h(){u(t,"name","share_livestock_safe_area"),u(t,"type","radio"),t.__value=s=n[9],t.value=t.__value,n[6][2].push(t),u(i,"for","share_livestock_safe_area"),u(l,"class","list-none sm:text-base sm:font-semibold sm:p-1"),u(l,"name","share_livestock_safe_area_list")},m(f,a){N(f,l,a),o(l,t),t.checked=t.__value===n[0].share_livestock_safe_area,o(l,v),o(l,i),o(i,g),o(l,k),c||(I=$e(t,"change",n[8]),c=!0)},p(f,a){a&1&&(t.checked=t.__value===f[0].share_livestock_safe_area)},d(f){f&&_(l),n[6][2].splice(n[6][2].indexOf(t),1),c=!1,I()}}}function Ge(n){let l,t,s,v,i,b,g,k,c,I,f,a,L,be,B,he,X,q,U,ve,ge,H,Y,O,j,S,ke,Ve,W,ee,P,T,M,ye,we,Q,te;function We(e){n[1](e)}let xe={name:"number_dogs",lable:"Dogs",lableClass:"tracking-wide text-orange-900 px-2 text-l font-bold mb-1",inputClass:"border border-orange-700 w-10 rounded py-1 sm:text-lg"};n[0].number_dogs!==void 0&&(xe.inputValue=n[0].number_dogs),b=new de({props:xe}),ae.push(()=>se(b,"inputValue",We));function Me(e){n[2](e)}let Ie={name:"number_cats",lable:"Cats",lableClass:"tracking-wide text-orange-900 px-2 text-l font-bold mb-1",inputClass:"border border-orange-700 w-10 rounded py-1 sm:text-lg"};n[0].number_cats!==void 0&&(Ie.inputValue=n[0].number_cats),c=new de({props:Ie}),ae.push(()=>se(c,"inputValue",Me));function Qe(e){n[3](e)}let Le={name:"number_birds",lable:"Birds",lableClass:"tracking-wide text-orange-900 px-2 text-l font-bold mb-1",inputClass:"border border-orange-700 w-10 rounded py-1 sm:text-lg"};n[0].number_birds!==void 0&&(Le.inputValue=n[0].number_birds),a=new de({props:Le}),ae.push(()=>se(a,"inputValue",Qe));function Re(e){n[4](e)}let De={name:"number_other_pets",lable:"Other",lableClass:"tracking-wide text-orange-900 px-2 text-l font-bold mb-1",inputClass:"border border-orange-700 w-10 rounded py-1 sm:text-lg"};n[0].number_other_pets!==void 0&&(De.inputValue=n[0].number_other_pets),B=new de({props:De}),ae.push(()=>se(B,"inputValue",Re));let F=Oe,y=[];for(let e=0;e<F.length;e+=1)y[e]=Ue(Te(n,F,e));let G=me,w=[];for(let e=0;e<G.length;e+=1)w[e]=He(Pe(n,G,e));let J=me,E=[];for(let e=0;e<J.length;e+=1)E[e]=Se(je(n,J,e));return{c(){l=m("div"),t=m("label"),s=Z("How many pets do you usually have at this property:"),v=$(),i=m("div"),re(b.$$.fragment),k=$(),re(c.$$.fragment),f=$(),re(a.$$.fragment),be=$(),re(B.$$.fragment),X=$(),q=m("div"),U=m("label"),ve=Z("Do you have livestock?"),ge=$(),H=m("div");for(let e=0;e<y.length;e+=1)y[e].c();Y=$(),O=m("div"),j=m("div"),S=m("label"),ke=Z("Do you have a safe area for stock in the event of a bushfire or flood?"),Ve=$(),W=m("div");for(let e=0;e<w.length;e+=1)w[e].c();ee=$(),P=m("div"),T=m("div"),M=m("label"),ye=Z(`Would you let leave their stock in your safe area, for a short time in an\r
			emergency?`),we=$(),Q=m("div");for(let e=0;e<E.length;e+=1)E[e].c();this.h()},l(e){l=d(e,"DIV",{class:!0});var p=h(l);t=d(p,"LABEL",{class:!0,for:!0});var V=h(t);s=z(V,"How many pets do you usually have at this property:"),V.forEach(_),v=x(p),i=d(p,"DIV",{class:!0,name:!0});var D=h(i);ie(b.$$.fragment,D),k=x(D),ie(c.$$.fragment,D),f=x(D),ie(a.$$.fragment,D),be=x(D),ie(B.$$.fragment,D),D.forEach(_),p.forEach(_),X=x(e),q=d(e,"DIV",{class:!0});var R=h(q);U=d(R,"LABEL",{class:!0,for:!0});var K=h(U);ve=z(K,"Do you have livestock?"),K.forEach(_),ge=x(R),H=d(R,"DIV",{class:!0});var r=h(H);for(let C=0;C<y.length;C+=1)y[C].l(r);r.forEach(_),R.forEach(_),Y=x(e),O=d(e,"DIV",{});var A=h(O);j=d(A,"DIV",{class:!0});var le=h(j);S=d(le,"LABEL",{class:!0,for:!0});var Ae=h(S);ke=z(Ae,"Do you have a safe area for stock in the event of a bushfire or flood?"),Ae.forEach(_),Ve=x(le),W=d(le,"DIV",{class:!0});var Ce=h(W);for(let C=0;C<w.length;C+=1)w[C].l(Ce);Ce.forEach(_),le.forEach(_),A.forEach(_),ee=x(e),P=d(e,"DIV",{});var Ne=h(P);T=d(Ne,"DIV",{class:!0});var ne=h(T);M=d(ne,"LABEL",{class:!0,for:!0});var Be=h(M);ye=z(Be,`Would you let leave their stock in your safe area, for a short time in an\r
			emergency?`),Be.forEach(_),we=x(ne),Q=d(ne,"DIV",{class:!0});var qe=h(Q);for(let C=0;C<E.length;C+=1)E[C].l(qe);qe.forEach(_),ne.forEach(_),Ne.forEach(_),this.h()},h(){u(t,"class","mt-1 text-lg font-bold mb-1"),u(t,"for","animals_profile"),u(i,"class","flex flex-row justify-around list-none rounded-lg bg-orange-50 p-1 mx-2"),u(i,"name","animals_profile"),u(l,"class","flex flex-row justify-between items-center px-4 mt-2"),u(U,"class","mt-1 text-lg font-bold mb-1"),u(U,"for","live_stock_present_list"),u(H,"class","flex flex-row rounded-lg bg-orange-50 p-1 mx-2"),u(q,"class","flex flex-row justify-between items-center px-4 mt-2"),u(S,"class","mt-1 text-lg font-bold mb-1"),u(S,"for","live_stock_safe_area_list"),u(W,"class","flex flex-row rounded-lg bg-orange-50 p-1"),u(j,"class","flex flex-row justify-between items-center px-4 mt-2"),oe(O,"hidden",n[0].live_stock_present!=!0),u(M,"class","mt-1 text-lg font-bold mb-1"),u(M,"for","share_livestock_safe_area_list"),u(Q,"class","flex flex-row rounded-lg bg-orange-50 p-1 mx-2"),u(T,"class","flex flex-row justify-between items-center px-4 mt-2"),oe(P,"hidden",n[0].live_stock_safe_area==="N")},m(e,p){N(e,l,p),o(l,t),o(t,s),o(l,v),o(l,i),ue(b,i,null),o(i,k),ue(c,i,null),o(i,f),ue(a,i,null),o(i,be),ue(B,i,null),N(e,X,p),N(e,q,p),o(q,U),o(U,ve),o(q,ge),o(q,H);for(let V=0;V<y.length;V+=1)y[V].m(H,null);N(e,Y,p),N(e,O,p),o(O,j),o(j,S),o(S,ke),o(j,Ve),o(j,W);for(let V=0;V<w.length;V+=1)w[V].m(W,null);N(e,ee,p),N(e,P,p),o(P,T),o(T,M),o(M,ye),o(T,we),o(T,Q);for(let V=0;V<E.length;V+=1)E[V].m(Q,null);te=!0},p(e,[p]){const V={};!g&&p&1&&(g=!0,V.inputValue=e[0].number_dogs,_e(()=>g=!1)),b.$set(V);const D={};!I&&p&1&&(I=!0,D.inputValue=e[0].number_cats,_e(()=>I=!1)),c.$set(D);const R={};!L&&p&1&&(L=!0,R.inputValue=e[0].number_birds,_e(()=>L=!1)),a.$set(R);const K={};if(!he&&p&1&&(he=!0,K.inputValue=e[0].number_other_pets,_e(()=>he=!1)),B.$set(K),p&1){F=Oe;let r;for(r=0;r<F.length;r+=1){const A=Te(e,F,r);y[r]?y[r].p(A,p):(y[r]=Ue(A),y[r].c(),y[r].m(H,null))}for(;r<y.length;r+=1)y[r].d(1);y.length=F.length}if(p&1){G=me;let r;for(r=0;r<G.length;r+=1){const A=Pe(e,G,r);w[r]?w[r].p(A,p):(w[r]=He(A),w[r].c(),w[r].m(W,null))}for(;r<w.length;r+=1)w[r].d(1);w.length=G.length}if(p&1&&oe(O,"hidden",e[0].live_stock_present!=!0),p&1){J=me;let r;for(r=0;r<J.length;r+=1){const A=je(e,J,r);E[r]?E[r].p(A,p):(E[r]=Se(A),E[r].c(),E[r].m(Q,null))}for(;r<E.length;r+=1)E[r].d(1);E.length=J.length}p&1&&oe(P,"hidden",e[0].live_stock_safe_area==="N")},i(e){te||(fe(b.$$.fragment,e),fe(c.$$.fragment,e),fe(a.$$.fragment,e),fe(B.$$.fragment,e),te=!0)},o(e){pe(b.$$.fragment,e),pe(c.$$.fragment,e),pe(a.$$.fragment,e),pe(B.$$.fragment,e),te=!1},d(e){e&&_(l),ce(b),ce(c),ce(a),ce(B),e&&_(X),e&&_(q),Ee(y,e),e&&_(Y),e&&_(O),Ee(w,e),e&&_(ee),e&&_(P),Ee(E,e)}}}function Je(n,l,t){let{profileAnimals:s}=l;const v=[[],[],[]];function i(a){n.$$.not_equal(s.number_dogs,a)&&(s.number_dogs=a,t(0,s))}function b(a){n.$$.not_equal(s.number_cats,a)&&(s.number_cats=a,t(0,s))}function g(a){n.$$.not_equal(s.number_birds,a)&&(s.number_birds=a,t(0,s))}function k(a){n.$$.not_equal(s.number_other_pets,a)&&(s.number_other_pets=a,t(0,s))}function c(){s.live_stock_present=this.__value,t(0,s)}function I(){s.live_stock_safe_area=this.__value,t(0,s)}function f(){s.share_livestock_safe_area=this.__value,t(0,s)}return n.$$set=a=>{"profileAnimals"in a&&t(0,s=a.profileAnimals)},[s,i,b,g,k,c,v,I,f]}class et extends Ze{constructor(l){super(),ze(this,l,Je,Ge,Fe,{profileAnimals:0})}}export{et as default};