import{S as st,i as lt,s as rt,e as l,t as v,k as d,c as r,a as n,h as w,d as o,m,b as t,Q as k,g as ot,N as e,a5 as tt,R as G,j as se,E as at,T as nt}from"../../chunks/index-2a980a40.js";import{s as ut}from"../../chunks/dbClient-7ecda8d3.js";import"../../chunks/preload-helper-96c8edfa.js";function it(s){let g,a,A,U,M,p,x,b,q,E,S=(s[5],"\u{1F441}"),Q,le,f,H,re,y,L,h,B=(s[5],"\u{1F441}"),J,ge,_,pe,Ee,P,O,Pe,R,Ae,V,Se,Z,Ne,N,z,K,oe=s[4][0]?"\u2714\uFE0F":"\u274C",ce,ye,W,Le,Te,D,X,ne=s[4][1]?"\u2714\uFE0F":"\u274C",de,Ce,Y,Ie,ke,j,$,ue=s[4][2]?"\u2714\uFE0F":"\u274C",me,Ue,ee,xe,qe,F,te,ie=s[4][3]?"\u2714\uFE0F":"\u274C",fe,Be,ae,Oe,Re,T,Ve,he,Ze,je;return{c(){g=l("div"),a=l("form"),A=l("label"),U=v("Email:"),M=d(),p=l("input"),x=d(),b=l("label"),q=v(`Password:\r
			`),E=l("span"),Q=v(S),le=d(),f=l("input"),re=d(),y=l("label"),L=v(`Confirm Password:\r
			`),h=l("span"),J=v(B),ge=d(),_=l("input"),Ee=d(),P=l("div"),O=l("span"),Pe=d(),R=l("span"),Ae=d(),V=l("span"),Se=d(),Z=l("span"),Ne=d(),N=l("ul"),z=l("li"),K=l("span"),ce=v(oe),ye=d(),W=l("span"),Le=v("must be at least 5 characters"),Te=d(),D=l("li"),X=l("span"),de=v(ne),Ce=d(),Y=l("span"),Ie=v("must contain a capital letter"),ke=d(),j=l("li"),$=l("span"),me=v(ue),Ue=d(),ee=l("span"),xe=v("must contain a number"),qe=d(),F=l("li"),te=l("span"),fe=v(ie),Be=d(),ae=l("span"),Oe=v("must contain one symbol ($&+,:;=?#^!)"),Re=d(),T=l("button"),Ve=v("Create Account"),this.h()},l(u){g=r(u,"DIV",{class:!0});var i=n(g);a=r(i,"FORM",{action:!0,method:!0});var c=n(a);A=r(c,"LABEL",{class:!0,for:!0});var Fe=n(A);U=w(Fe,"Email:"),Fe.forEach(o),M=m(c),p=r(c,"INPUT",{id:!0,type:!0,class:!0,name:!0,placeholder:!0,autocomplete:!0}),x=m(c),b=r(c,"LABEL",{class:!0,for:!0});var ze=n(b);q=w(ze,`Password:\r
			`),E=r(ze,"SPAN",{class:!0});var Ge=n(E);Q=w(Ge,S),Ge.forEach(o),ze.forEach(o),le=m(c),f=r(c,"INPUT",{id:!0,type:!0,class:!0,name:!0,placeholder:!0}),re=m(c),y=r(c,"LABEL",{class:!0,for:!0});var De=n(y);L=w(De,`Confirm Password:\r
			`),h=r(De,"SPAN",{class:!0});var Me=n(h);J=w(Me,B),Me.forEach(o),De.forEach(o),ge=m(c),_=r(c,"INPUT",{id:!0,type:!0,class:!0,name:!0,placeholder:!0}),Ee=m(c),P=r(c,"DIV",{class:!0});var C=n(P);O=r(C,"SPAN",{class:!0}),n(O).forEach(o),Pe=m(C),R=r(C,"SPAN",{class:!0}),n(R).forEach(o),Ae=m(C),V=r(C,"SPAN",{class:!0}),n(V).forEach(o),Se=m(C),Z=r(C,"SPAN",{class:!0}),n(Z).forEach(o),C.forEach(o),Ne=m(c),N=r(c,"UL",{});var I=n(N);z=r(I,"LI",{});var be=n(z);K=r(be,"SPAN",{class:!0});var Qe=n(K);ce=w(Qe,oe),Qe.forEach(o),ye=m(be),W=r(be,"SPAN",{class:!0});var He=n(W);Le=w(He,"must be at least 5 characters"),He.forEach(o),be.forEach(o),Te=m(I),D=r(I,"LI",{});var _e=n(D);X=r(_e,"SPAN",{class:!0});var Je=n(X);de=w(Je,ne),Je.forEach(o),Ce=m(_e),Y=r(_e,"SPAN",{class:!0});var Ke=n(Y);Ie=w(Ke,"must contain a capital letter"),Ke.forEach(o),_e.forEach(o),ke=m(I),j=r(I,"LI",{});var ve=n(j);$=r(ve,"SPAN",{class:!0});var We=n($);me=w(We,ue),We.forEach(o),Ue=m(ve),ee=r(ve,"SPAN",{class:!0});var Xe=n(ee);xe=w(Xe,"must contain a number"),Xe.forEach(o),ve.forEach(o),qe=m(I),F=r(I,"LI",{});var we=n(F);te=r(we,"SPAN",{class:!0});var Ye=n(te);fe=w(Ye,ie),Ye.forEach(o),Be=m(we),ae=r(we,"SPAN",{class:!0});var $e=n(ae);Oe=w($e,"must contain one symbol ($&+,:;=?#^!)"),$e.forEach(o),we.forEach(o),I.forEach(o),Re=m(c),T=r(c,"BUTTON",{type:!0,class:!0});var et=n(T);Ve=w(et,"Create Account"),et.forEach(o),c.forEach(o),i.forEach(o),this.h()},h(){t(A,"class","inline uppercase tracking-wide text-orange-500 text-xs font-bold"),t(A,"for","email"),t(p,"id","email"),t(p,"type","email"),t(p,"class","block border border-orange-700 w-full py-3 rounded mb-4"),t(p,"name","email"),p.required=!0,t(p,"placeholder","Email"),t(p,"autocomplete","email"),t(E,"class","toggle-password text-3xl text-gray-700 font-normal ml-3 align-middle "),t(b,"class","inline uppercase tracking-wide text-orange-500 text-xs font-bold"),t(b,"for","password"),t(f,"id","password"),t(f,"type",H=s[5]?"text":"password"),t(f,"class","block border border-orange-700 w-full py-3 rounded mb-4"),t(f,"name","password"),f.required=!0,t(f,"placeholder","New Password"),f.value=s[3],t(h,"class","toggle-password text-3xl text-gray-700 font-normal ml-3 align-middle "),t(y,"class","inline uppercase tracking-wide text-orange-500 text-xs font-bold"),t(y,"for","confirmPassword"),t(_,"id","confirmPassword"),t(_,"type",pe=s[5]?"text":"password"),t(_,"class","block border border-orange-700 w-full py-3 rounded mb-4"),t(_,"name","confirmPassword"),_.required=!0,t(_,"placeholder","Confirm New Password"),_.value=s[2],t(O,"class","bar bar-1 svelte-1nr3gt"),k(O,"bar-show",s[1]>0),t(R,"class","bar bar-2 svelte-1nr3gt"),k(R,"bar-show",s[1]>1),t(V,"class","bar bar-3 svelte-1nr3gt"),k(V,"bar-show",s[1]>2),t(Z,"class","bar bar-4 svelte-1nr3gt"),k(Z,"bar-show",s[1]>3),t(P,"class","strength svelte-1nr3gt"),t(K,"class","text-[10px]"),t(W,"class","text-sm"),t(X,"class","text-[10px]"),t(Y,"class","text-sm"),t($,"class","text-[10px]"),t(ee,"class","text-sm"),t(te,"class","text-[10px]"),t(ae,"class","text-sm"),t(T,"type","submit"),t(T,"class","w-full text-center py-3 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1 disabled:opacity-25"),T.value="",T.disabled=he=!s[6],t(a,"action","/api/auth/updateuser"),t(a,"method","POST"),t(g,"class","flex flex-col items-center bg-white p-6 max-w-sm max-w-screen-xsm mx-auto")},m(u,i){ot(u,g,i),e(g,a),e(a,A),e(A,U),e(a,M),e(a,p),tt(p,s[0]),e(a,x),e(a,b),e(b,q),e(b,E),e(E,Q),e(a,le),e(a,f),e(a,re),e(a,y),e(y,L),e(y,h),e(h,J),e(a,ge),e(a,_),e(a,Ee),e(a,P),e(P,O),e(P,Pe),e(P,R),e(P,Ae),e(P,V),e(P,Se),e(P,Z),e(a,Ne),e(a,N),e(N,z),e(z,K),e(K,ce),e(z,ye),e(z,W),e(W,Le),e(N,Te),e(N,D),e(D,X),e(X,de),e(D,Ce),e(D,Y),e(Y,Ie),e(N,ke),e(N,j),e(j,$),e($,me),e(j,Ue),e(j,ee),e(ee,xe),e(N,qe),e(N,F),e(F,te),e(te,fe),e(F,Be),e(F,ae),e(ae,Oe),e(a,Re),e(a,T),e(T,Ve),Ze||(je=[G(p,"input",s[10]),G(E,"mouseenter",s[11]),G(E,"mouseleave",s[12]),G(f,"input",s[7]),G(h,"mouseenter",s[13]),G(h,"mouseleave",s[14]),G(_,"input",s[7])],Ze=!0)},p(u,[i]){i&1&&p.value!==u[0]&&tt(p,u[0]),i&32&&S!==(S=(u[5],"\u{1F441}"))&&se(Q,S),i&32&&H!==(H=u[5]?"text":"password")&&t(f,"type",H),i&8&&f.value!==u[3]&&(f.value=u[3]),i&32&&B!==(B=(u[5],"\u{1F441}"))&&se(J,B),i&32&&pe!==(pe=u[5]?"text":"password")&&t(_,"type",pe),i&4&&_.value!==u[2]&&(_.value=u[2]),i&2&&k(O,"bar-show",u[1]>0),i&2&&k(R,"bar-show",u[1]>1),i&2&&k(V,"bar-show",u[1]>2),i&2&&k(Z,"bar-show",u[1]>3),i&16&&oe!==(oe=u[4][0]?"\u2714\uFE0F":"\u274C")&&se(ce,oe),i&16&&ne!==(ne=u[4][1]?"\u2714\uFE0F":"\u274C")&&se(de,ne),i&16&&ue!==(ue=u[4][2]?"\u2714\uFE0F":"\u274C")&&se(me,ue),i&16&&ie!==(ie=u[4][3]?"\u2714\uFE0F":"\u274C")&&se(fe,ie),i&64&&he!==(he=!u[6])&&(T.disabled=he)},i:at,o:at,d(u){u&&o(g),Ze=!1,nt(je)}}}function pt(s){var g=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return g.test(String(s).toLowerCase())}function ct(s,g,a){let A,U,M,p,{redirectType:x}=g,b="",q=0,E=[],S=!1;x=="invite"&&(heading="Please Set a Password",submitText="Set Password"),ut.auth.onAuthStateChange(async(L,h)=>{a(0,b=h.user.email),console.log("Supabase event: ",L)});function Q(L){const h=L.target.value;a(4,E=[h.length>8,h.search(/[A-Z]/)>-1,h.search(/[0-9]/)>-1,h.search(/[$&+,:;=?#^!]/)>-1]),a(1,q=E.reduce((B,J)=>B+J,0))}function le(){b=this.value,a(0,b)}const f=()=>a(5,S=!0),H=()=>a(5,S=!1),re=()=>a(5,S=!0),y=()=>a(5,S=!1);return s.$$set=L=>{"redirectType"in L&&a(8,x=L.redirectType)},s.$$.update=()=>{s.$$.dirty&1&&a(9,p=pt(b)),s.$$.dirty&526&&a(6,M=p&&A===U&&q===4)},a(3,A=""),a(2,U=""),[b,q,U,A,E,S,M,Q,x,p,le,f,H,re,y]}class ht extends st{constructor(g){super(),lt(this,g,ct,it,rt,{redirectType:8})}}export{ht as default};