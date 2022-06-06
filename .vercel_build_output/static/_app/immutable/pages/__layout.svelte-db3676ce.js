import{S as ye,i as we,s as xe,e as c,c as u,a as i,d as n,b as t,F as rt,g as M,G as s,n as ae,x as et,k as y,t as x,H as Qe,y as tt,m as w,h as I,I as Xe,J as k,z as at,K as ne,r as ke,p as Ee,C as st,L as nt,M as oe,N as ot,O as it,P as ct,Q as ut,R as te}from"../chunks/index-574d3e5d.js";import{d as Ze}from"../chunks/dbClient-c8a5cf69.js";import{p as lt,s as F}from"../chunks/stores-e24d1d4b.js";import{b as B}from"../chunks/paths-396f020f.js";import"../chunks/_commonjsHelpers-7d66b65f.js";var ht="/_app/immutable/assets/hall_logo_image_90px-c8a9d17c.png";function ft(h){let e,a,l,o;return{c(){e=c("div"),a=c("a"),l=c("img"),this.h()},l(r){e=u(r,"DIV",{});var f=i(e);a=u(f,"A",{class:!0,"aria-label":!0,href:!0});var v=i(a);l=u(v,"IMG",{class:!0,src:!0,alt:!0}),v.forEach(n),f.forEach(n),this.h()},h(){t(l,"class","rounded-full p-1"),rt(l.src,o=ht)||t(l,"src",o),t(l,"alt","BCYCA Inc"),t(a,"class","absolute top-0"),t(a,"aria-label","Hall photo"),t(a,"href","https://www.facebook.com/Burrell-Creek-Youth-and-Community-Association-Inc-1584955455117833/?__tn__=-UC*F")},m(r,f){M(r,e,f),s(e,a),s(a,l)},p:ae,i:ae,o:ae,d(r){r&&n(e)}}}class dt extends ye{constructor(e){super(),we(this,e,null,ft,xe,{})}}function vt(h){let e,a,l;return{c(){e=c("a"),a=c("button"),l=x("Sign In"),this.h()},l(o){e=u(o,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var r=i(e);a=u(r,"BUTTON",{class:!0});var f=i(a);l=I(f,"Sign In"),f.forEach(n),r.forEach(n),this.h()},h(){t(a,"class","py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black svelte-173hj3l"),t(e,"sveltekit:prefetch",""),t(e,"href",B+"/auth/signin"),t(e,"class","svelte-173hj3l"),k(e,"active",h[1].url.pathname.endsWith("/signin"))},m(o,r){M(o,e,r),s(e,a),s(a,l)},p(o,r){r&2&&k(e,"active",o[1].url.pathname.endsWith("/signin"))},d(o){o&&n(e)}}}function pt(h){let e,a,l;return{c(){e=c("form"),a=c("button"),l=x("Sign Out"),this.h()},l(o){e=u(o,"FORM",{action:!0,method:!0});var r=i(e);a=u(r,"BUTTON",{class:!0});var f=i(a);l=I(f,"Sign Out"),f.forEach(n),r.forEach(n),this.h()},h(){t(a,"class","py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black"),t(e,"action","/api/auth/signout"),t(e,"method","post")},m(o,r){M(o,e,r),s(e,a),s(a,l)},p:ae,d(o){o&&n(e)}}}function mt(h){let e,a,l;return{c(){e=c("a"),a=c("button"),l=x("Sign In"),this.h()},l(o){e=u(o,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var r=i(e);a=u(r,"BUTTON",{class:!0});var f=i(a);l=I(f,"Sign In"),f.forEach(n),r.forEach(n),this.h()},h(){t(a,"class","py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black svelte-173hj3l"),t(e,"sveltekit:prefetch",""),t(e,"href",B+"/auth/signin"),t(e,"class","svelte-173hj3l"),k(e,"active",h[1].url.pathname.endsWith("/signin"))},m(o,r){M(o,e,r),s(e,a),s(a,l)},p(o,r){r&2&&k(e,"active",o[1].url.pathname.endsWith("/signin"))},d(o){o&&n(e)}}}function _t(h){let e,a,l;return{c(){e=c("form"),a=c("button"),l=x("Sign Out"),this.h()},l(o){e=u(o,"FORM",{action:!0,method:!0});var r=i(e);a=u(r,"BUTTON",{class:!0});var f=i(a);l=I(f,"Sign Out"),f.forEach(n),r.forEach(n),this.h()},h(){t(a,"class","py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black"),t(e,"action","/api/auth/signout"),t(e,"method","post")},m(o,r){M(o,e,r),s(e,a),s(a,l)},p:ae,d(o){o&&n(e)}}}function bt(h){let e,a,l,o,r,f,v,j,p,_,d,g,T,E,C,P,ie,H,ce,R,ue,he,G,L,O,Q,fe,D,A,X,N,q,de,ve,Z,$,z,pe,me,ee,W,Y,_e,be,J,se,ge,Ie;a=new dt({});function Te(m,b){return m[2].authenticated?pt:vt}let le=Te(h),S=le(h);function Oe(m,b){return m[2].authenticated?_t:mt}let re=Oe(h),U=re(h);return{c(){e=c("nav"),et(a.$$.fragment),l=y(),o=c("div"),r=c("div"),f=c("a"),v=c("button"),j=x("Home"),p=y(),_=c("a"),d=c("button"),g=x("About"),T=y(),E=c("a"),C=c("button"),P=x("Contact Us"),ie=y(),H=c("div"),S.c(),ce=y(),R=c("div"),ue=x("Strengthening Our Community"),he=y(),G=c("div"),L=c("button"),O=Qe("svg"),Q=Qe("path"),fe=y(),D=c("div"),A=c("ul"),X=c("li"),N=c("a"),q=c("button"),de=x("Home"),ve=y(),Z=c("li"),$=c("a"),z=c("button"),pe=x("About"),me=y(),ee=c("li"),W=c("a"),Y=c("button"),_e=x("Contact Us"),be=y(),J=c("li"),U.c(),this.h()},l(m){e=u(m,"NAV",{class:!0});var b=i(e);tt(a.$$.fragment,b),l=w(b),o=u(b,"DIV",{class:!0});var je=i(o);r=u(je,"DIV",{class:!0});var K=i(r);f=u(K,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var Ae=i(f);v=u(Ae,"BUTTON",{class:!0});var Ne=i(v);j=I(Ne,"Home"),Ne.forEach(n),Ae.forEach(n),p=w(K),_=u(K,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var $e=i(_);d=u($e,"BUTTON",{class:!0});var We=i(d);g=I(We,"About"),We.forEach(n),$e.forEach(n),T=w(K),E=u(K,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var Se=i(E);C=u(Se,"BUTTON",{class:!0});var Ue=i(C);P=I(Ue,"Contact Us"),Ue.forEach(n),Se.forEach(n),K.forEach(n),je.forEach(n),ie=w(b),H=u(b,"DIV",{class:!0});var Be=i(H);S.l(Be),Be.forEach(n),ce=w(b),R=u(b,"DIV",{class:!0});var Ce=i(R);ue=I(Ce,"Strengthening Our Community"),Ce.forEach(n),he=w(b),G=u(b,"DIV",{class:!0});var De=i(G);L=u(De,"BUTTON",{class:!0});var Ve=i(L);O=Xe(Ve,"svg",{class:!0,"x-show":!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,viewBox:!0,stroke:!0});var Me=i(O);Q=Xe(Me,"path",{d:!0}),i(Q).forEach(n),Me.forEach(n),Ve.forEach(n),De.forEach(n),fe=w(b),D=u(b,"DIV",{class:!0});var He=i(D);A=u(He,"UL",{class:!0});var V=i(A);X=u(V,"LI",{});var Le=i(X);N=u(Le,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var Fe=i(N);q=u(Fe,"BUTTON",{class:!0});var Pe=i(q);de=I(Pe,"Home"),Pe.forEach(n),Fe.forEach(n),Le.forEach(n),ve=w(V),Z=u(V,"LI",{});var Re=i(Z);$=u(Re,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var Ge=i($);z=u(Ge,"BUTTON",{class:!0});var qe=i(z);pe=I(qe,"About"),qe.forEach(n),Ge.forEach(n),Re.forEach(n),me=w(V),ee=u(V,"LI",{});var ze=i(ee);W=u(ze,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var Ye=i(W);Y=u(Ye,"BUTTON",{class:!0});var Je=i(Y);_e=I(Je,"Contact Us"),Je.forEach(n),Ye.forEach(n),ze.forEach(n),be=w(V),J=u(V,"LI",{});var Ke=i(J);U.l(Ke),Ke.forEach(n),V.forEach(n),He.forEach(n),b.forEach(n),this.h()},h(){t(v,"class","py-2 px-2 font-semibold text-white bg-orange-500 rounded-xl svelte-173hj3l"),t(f,"sveltekit:prefetch",""),t(f,"href",B+"/"),t(f,"class","svelte-173hj3l"),k(f,"active",h[1].url.pathname.endsWith("/")),t(d,"class","py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black svelte-173hj3l"),t(_,"sveltekit:prefetch",""),t(_,"href",B+"/about"),t(_,"class","svelte-173hj3l"),k(_,"active",h[1].url.pathname.endsWith("/about")),t(C,"class","py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black svelte-173hj3l"),t(E,"sveltekit:prefetch",""),t(E,"href",B+"/contact"),t(E,"class","svelte-173hj3l"),k(E,"active",h[1].url.pathname.endsWith("/contact")),t(r,"class","hidden md:block"),t(o,"class","flex ml-[89px] items-center"),t(H,"class","hidden md:flex items-center"),t(R,"class","text-sm pl-3 mb-4 mt-6 bg-orange-300 text-center z-50 font-extrabold text-orange-500 md:hidden"),t(Q,"d","M4 6h16M4 12h16M4 18h16"),t(O,"class","w-6 h-6 text-orange-500 hover:text-purple-500 "),t(O,"x-show","!showMenu"),t(O,"fill","none"),t(O,"stroke-linecap","round"),t(O,"stroke-linejoin","round"),t(O,"stroke-width","2"),t(O,"viewBox","0 0 24 24"),t(O,"stroke","currentColor"),t(L,"class","outline-none bg-transparent mobile-menu-button"),t(G,"class","md:hidden flex items-center"),t(q,"class","py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black svelte-173hj3l"),t(N,"sveltekit:prefetch",""),t(N,"href",B+"/"),t(N,"class","svelte-173hj3l"),k(N,"active",h[1].url.pathname.endsWith("/")),t(z,"class","py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black svelte-173hj3l"),t($,"sveltekit:prefetch",""),t($,"href",B+"/about"),t($,"class","svelte-173hj3l"),k($,"active",h[1].url.pathname.endsWith("/about")),t(Y,"class","py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black svelte-173hj3l"),t(W,"sveltekit:prefetch",""),t(W,"href",B+"/contact"),t(W,"class","svelte-173hj3l"),k(W,"active",h[1].url.pathname.endsWith("/contact")),t(A,"class","space-y-2 list-none"),t(D,"class","bg-orange-300 absolute w-full mobile-menu"),k(D,"hidden",h[0]),t(e,"class","container h-15 flex justify-around items-center mx-auto bg-orange-300")},m(m,b){M(m,e,b),at(a,e,null),s(e,l),s(e,o),s(o,r),s(r,f),s(f,v),s(v,j),s(r,p),s(r,_),s(_,d),s(d,g),s(r,T),s(r,E),s(E,C),s(C,P),s(e,ie),s(e,H),S.m(H,null),s(e,ce),s(e,R),s(R,ue),s(e,he),s(e,G),s(G,L),s(L,O),s(O,Q),s(e,fe),s(e,D),s(D,A),s(A,X),s(X,N),s(N,q),s(q,de),s(A,ve),s(A,Z),s(Z,$),s($,z),s(z,pe),s(A,me),s(A,ee),s(ee,W),s(W,Y),s(Y,_e),s(A,be),s(A,J),U.m(J,null),se=!0,ge||(Ie=[ne(L,"click",h[3]),ne(N,"click",h[3]),ne($,"click",h[3]),ne(W,"click",h[3])],ge=!0)},p(m,[b]){b&2&&k(f,"active",m[1].url.pathname.endsWith("/")),b&2&&k(_,"active",m[1].url.pathname.endsWith("/about")),b&2&&k(E,"active",m[1].url.pathname.endsWith("/contact")),le===(le=Te(m))&&S?S.p(m,b):(S.d(1),S=le(m),S&&(S.c(),S.m(H,null))),b&2&&k(N,"active",m[1].url.pathname.endsWith("/")),b&2&&k($,"active",m[1].url.pathname.endsWith("/about")),b&2&&k(W,"active",m[1].url.pathname.endsWith("/contact")),re===(re=Oe(m))&&U?U.p(m,b):(U.d(1),U=re(m),U&&(U.c(),U.m(J,null))),b&1&&k(D,"hidden",m[0])},i(m){se||(ke(a.$$.fragment,m),se=!0)},o(m){Ee(a.$$.fragment,m),se=!1},d(m){m&&n(e),st(a),S.d(),U.d(),ge=!1,nt(Ie)}}}function gt(h,e,a){let l,o;oe(h,lt,v=>a(1,l=v)),oe(h,F,v=>a(2,o=v));let r=!0;return[r,l,o,()=>{a(0,r=!r)}]}class kt extends ye{constructor(e){super(),we(this,e,gt,bt,xe,{})}}function Et(h){let e,a,l,o,r,f,v,j,p,_;return{c(){e=c("footer"),a=c("div"),l=c("a"),o=x("Terms of Service"),r=y(),f=c("h3"),v=x("Building a safer connected community"),j=y(),p=c("a"),_=x("Privacy Policy"),this.h()},l(d){e=u(d,"FOOTER",{class:!0});var g=i(e);a=u(g,"DIV",{class:!0});var T=i(a);l=u(T,"A",{"sveltekit:prefetch":!0,href:!0});var E=i(l);o=I(E,"Terms of Service"),E.forEach(n),r=w(T),f=u(T,"H3",{});var C=i(f);v=I(C,"Building a safer connected community"),C.forEach(n),j=w(T),p=u(T,"A",{"sveltekit:prefetch":!0,href:!0});var P=i(p);_=I(P,"Privacy Policy"),P.forEach(n),T.forEach(n),g.forEach(n),this.h()},h(){t(l,"sveltekit:prefetch",""),t(l,"href",B+"/policies/termsofservice"),k(l,"active",h[0].url.pathname.endsWith("/policies/termsofservice")),t(p,"sveltekit:prefetch",""),t(p,"href",B+"/policies/privacy"),k(p,"active",h[0].url.pathname.endsWith("/policies/privacy")),t(a,"class","flex content-center items-center justify-around bg-orange-600 text-light-600 w-full h-[45px]"),t(e,"class","col-span-8 row-span-1 sticky bottom-0")},m(d,g){M(d,e,g),s(e,a),s(a,l),s(l,o),s(a,r),s(a,f),s(f,v),s(a,j),s(a,p),s(p,_)},p(d,g){g&1&&k(l,"active",d[0].url.pathname.endsWith("/policies/termsofservice")),g&1&&k(p,"active",d[0].url.pathname.endsWith("/policies/privacy"))},d(d){d&&n(e)}}}function yt(h){let e,a,l,o,r,f,v;l=new kt({});const j=h[2].default,p=ot(j,h,h[1],null);let _=Et(h);return{c(){e=c("div"),a=c("header"),et(l.$$.fragment),o=y(),r=c("main"),p&&p.c(),f=y(),_&&_.c(),this.h()},l(d){e=u(d,"DIV",{class:!0,id:!0});var g=i(e);a=u(g,"HEADER",{class:!0});var T=i(a);tt(l.$$.fragment,T),T.forEach(n),o=w(g),r=u(g,"MAIN",{class:!0});var E=i(r);p&&p.l(E),E.forEach(n),f=w(g),_&&_.l(g),g.forEach(n),this.h()},h(){t(a,"class","col-span-8 row-span-1"),t(r,"class","col-span-8 row-span-22"),t(e,"class","grid w-11/12 mx-auto min-h-screen svelte-1jjqws8"),t(e,"id","wrapper")},m(d,g){M(d,e,g),s(e,a),at(l,a,null),s(e,o),s(e,r),p&&p.m(r,null),s(e,f),_&&_.m(e,null),v=!0},p(d,[g]){p&&p.p&&(!v||g&2)&&it(p,j,d,d[1],v?ut(j,d[1],g,null):ct(d[1]),null),_.p(d,g)},i(d){v||(ke(l.$$.fragment,d),ke(p,d),v=!0)},o(d){Ee(l.$$.fragment,d),Ee(p,d),v=!1},d(d){d&&n(e),st(l),p&&p.d(d),_&&_.d()}}}async function At({url:h,session:e}){return h.pathname==="/profile"&&e.user==="guest"||h.pathname==="/profile"&&e.user===""?{redirect:"/",status:302}:{props:{}}}function wt(h,e,a){let l,o;oe(h,F,v=>a(3,l=v)),oe(h,lt,v=>a(0,o=v));let{$$slots:r={},$$scope:f}=e;return Ze.auth.onAuthStateChange(async(v,j)=>{if(v==="SIGNED_IN"&&te(F,l.user="guest",l)){let _=Ze.auth.session().user.email.split("@")[0];te(F,l.user=`${_}`,l),te(F,l.signInError="none",l),te(F,l.authenticated=!0,l),te(F,l.authEvent="SIGNED_OUT",l)}}),h.$$set=v=>{"$$scope"in v&&a(1,f=v.$$scope)},[o,f,r]}class Nt extends ye{constructor(e){super(),we(this,e,wt,yt,xe,{})}}export{Nt as default,At as load};