import{S as Fl,i as Hl,s as Rl,a6 as bt,a7 as gt,l as _,a as b,r as D,w as je,m as d,n as p,c as g,h as f,u as $,x as qe,p as r,q as tt,Q as Vl,b as ve,N as s,$ as Q,y as Fe,R as L,f as se,t as ge,d as Ql,a8 as vt,Z as lt,B as He,T as Zl,g as zl}from"../../../chunks/index-0c810e59.js";import{b as Gl}from"../../../chunks/navigation-7ffe60d0.js";import{a as Se,r as Il,l as xl}from"../../../chunks/profileOptions-1cfe764b.js";import{M as Jl}from"../../../chunks/Modal-81269e6d.js";import{S as Kl}from"../../../chunks/SaveProfilePrompt-4e986229.js";import{N as yt}from"../../../chunks/NumberInput-3b26ca3c.js";import"../../../chunks/singletons-cdeec3fd.js";function Ll(l,e,t){const n=l.slice();return n[30]=e[t].value,n[31]=e[t].lable,n}function Al(l,e,t){const n=l.slice();return n[30]=e[t].value,n[31]=e[t].lable,n}function Pl(l,e,t){const n=l.slice();return n[30]=e[t].value,n[31]=e[t].lable,n}function Dl(l,e,t){const n=l.slice();return n[30]=e[t].value,n[31]=e[t].lable,n}function $l(l,e,t){const n=l.slice();return n[30]=e[t].value,n[31]=e[t].lable,n}function Bl(l){let e,t;return e=new Jl({props:{$$slots:{default:[Wl]},$$scope:{ctx:l}}}),e.$on("exit",l[4]),{c(){je(e.$$.fragment)},l(n){qe(e.$$.fragment,n)},m(n,i){Fe(e,n,i),t=!0},p(n,i){const o={};i[1]&2048&&(o.$$scope={dirty:i,ctx:n}),e.$set(o)},i(n){t||(se(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){He(e,n)}}}function Wl(l){let e,t;return e=new Kl({}),{c(){je(e.$$.fragment)},l(n){qe(e.$$.fragment,n)},m(n,i){Fe(e,n,i),t=!0},i(n){t||(se(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){He(e,n)}}}function Nl(l){let e,t,n,i,o=l[31]+"",k,E,V,w;return{c(){e=_("li"),t=_("input"),n=b(),i=_("label"),k=D(o),E=b(),this.h()},l(h){e=d(h,"LI",{class:!0,name:!0});var c=p(e);t=d(c,"INPUT",{name:!0,type:!0}),n=g(c),i=d(c,"LABEL",{for:!0});var I=p(i);k=$(I,o),I.forEach(f),E=g(c),c.forEach(f),this.h()},h(){r(t,"name","property_rented"),r(t,"type","radio"),t.__value=l[30],t.value=t.__value,l[14][0].push(t),r(i,"for","property_rented"),r(e,"class","list-none sm:text-base sm:font-semibold sm:p-1"),r(e,"name","rented_list")},m(h,c){ve(h,e,c),s(e,t),t.checked=t.__value===l[0].property_rented,s(e,n),s(e,i),s(i,k),s(e,E),V||(w=L(t,"change",l[13]),V=!0)},p(h,c){c[0]&1&&(t.checked=t.__value===h[0].property_rented)},d(h){h&&f(e),l[14][0].splice(l[14][0].indexOf(t),1),V=!1,w()}}}function Tl(l){let e,t,n,i,o=l[31]+"",k,E,V,w;return{c(){e=_("li"),t=_("input"),n=b(),i=_("label"),k=D(o),E=b(),this.h()},l(h){e=d(h,"LI",{class:!0,name:!0});var c=p(e);t=d(c,"INPUT",{class:!0,name:!0,type:!0}),n=g(c),i=d(c,"LABEL",{for:!0});var I=p(i);k=$(I,o),I.forEach(f),E=g(c),c.forEach(f),this.h()},h(){r(t,"class","m-1"),r(t,"name","residency_profile"),r(t,"type","radio"),t.__value=l[30],t.value=t.__value,l[14][1].push(t),r(i,"for","residency_profile"),r(e,"class","list-none sm:text-base sm:font-semibold sm:p-1"),r(e,"name","residency_profile_list")},m(h,c){ve(h,e,c),s(e,t),t.checked=t.__value===l[0].residency_profile,s(e,n),s(e,i),s(i,k),s(e,E),V||(w=L(t,"change",l[19]),V=!0)},p(h,c){c[0]&1&&(t.checked=t.__value===h[0].residency_profile)},d(h){h&&f(e),l[14][1].splice(l[14][1].indexOf(t),1),V=!1,w()}}}function Ol(l){let e,t,n,i,o=l[31]+"",k,E,V,w;return{c(){e=_("li"),t=_("input"),n=b(),i=_("label"),k=D(o),E=b(),this.h()},l(h){e=d(h,"LI",{class:!0,name:!0});var c=p(e);t=d(c,"INPUT",{name:!0,type:!0}),n=g(c),i=d(c,"LABEL",{for:!0});var I=p(i);k=$(I,o),I.forEach(f),E=g(c),c.forEach(f),this.h()},h(){r(t,"name","sign_posted"),r(t,"type","radio"),t.__value=l[30],t.value=t.__value,l[14][2].push(t),r(i,"for","sign_posted"),r(e,"class","list-none sm:text-base sm:font-semibold sm:p-1"),r(e,"name","sign_posted_list")},m(h,c){ve(h,e,c),s(e,t),t.checked=t.__value===l[0].sign_posted,s(e,n),s(e,i),s(i,k),s(e,E),V||(w=L(t,"change",l[20]),V=!0)},p(h,c){c[0]&1&&(t.checked=t.__value===h[0].sign_posted)},d(h){h&&f(e),l[14][2].splice(l[14][2].indexOf(t),1),V=!1,w()}}}function Xl(l){let e,t,n;return{c(){e=_("input"),this.h()},l(i){e=d(i,"INPUT",{name:!0,type:!0}),this.h()},h(){r(e,"name","truck_access"),r(e,"type","radio"),e.__value=l[30],e.value=e.__value,l[14][3].push(e)},m(i,o){ve(i,e,o),e.checked=e.__value===l[0].truck_access,t||(n=L(e,"change",l[22]),t=!0)},p(i,o){o[0]&1&&(e.checked=e.__value===i[0].truck_access)},d(i){i&&f(e),l[14][3].splice(l[14][3].indexOf(e),1),t=!1,n()}}}function Yl(l){let e,t,n;return{c(){e=_("input"),this.h()},l(i){e=d(i,"INPUT",{class:!0,name:!0,type:!0}),this.h()},h(){r(e,"class","m-1"),r(e,"name","truck_access"),r(e,"type","radio"),e.__value=l[30],e.value=e.__value,l[14][3].push(e)},m(i,o){ve(i,e,o),e.checked=e.__value===l[0].truck_access,t||(n=L(e,"change",l[21]),t=!0)},p(i,o){o[0]&1&&(e.checked=e.__value===i[0].truck_access)},d(i){i&&f(e),l[14][3].splice(l[14][3].indexOf(e),1),t=!1,n()}}}function Ml(l){let e,t,n,i=l[31]+"",o,k;function E(h,c){return h[31]==="Other"?Yl:Xl}let w=E(l)(l);return{c(){e=_("li"),w.c(),t=b(),n=_("label"),o=D(i),k=b(),this.h()},l(h){e=d(h,"LI",{class:!0,name:!0});var c=p(e);w.l(c),t=g(c),n=d(c,"LABEL",{for:!0});var I=p(n);o=$(I,i),I.forEach(f),k=g(c),c.forEach(f),this.h()},h(){r(n,"for","truck_access"),r(e,"class","list-none sm:text-base sm:font-semibold sm:p-1"),r(e,"name","truck_access_list")},m(h,c){ve(h,e,c),w.m(e,null),s(e,t),s(e,n),s(n,o),s(e,k)},p(h,c){w.p(h,c)},d(h){h&&f(e),w.d()}}}function Ul(l){let e,t,n,i,o=l[31]+"",k,E,V,w;return{c(){e=_("li"),t=_("input"),n=b(),i=_("label"),k=D(o),E=b(),this.h()},l(h){e=d(h,"LI",{class:!0,name:!0});var c=p(e);t=d(c,"INPUT",{name:!0,type:!0}),n=g(c),i=d(c,"LABEL",{for:!0});var I=p(i);k=$(I,o),I.forEach(f),E=g(c),c.forEach(f),this.h()},h(){r(t,"name","vulnerable_residents"),r(t,"type","radio"),t.__value=l[30],t.value=t.__value,l[14][4].push(t),r(i,"for","vulnerable_residents"),r(e,"class","list-none sm:text-base sm:font-semibold sm:p-1"),r(e,"name","vulnerable_residents_list")},m(h,c){ve(h,e,c),s(e,t),t.checked=t.__value===l[0].vulnerable_residents,s(e,n),s(e,i),s(i,k),s(e,E),V||(w=L(t,"change",l[28]),V=!0)},p(h,c){c[0]&1&&(t.checked=t.__value===h[0].vulnerable_residents)},d(h){h&&f(e),l[14][4].splice(l[14][4].indexOf(t),1),V=!1,w()}}}function er(l){let e,t,n,i,o,k,E,V,w,h,c,I,Ne,Re,R,Z,J,Qe,Ze,B,ze,z,K,Ge,Je,N,Ke,G,W,We,Xe,S,y,ne,ye,Et,kt,Ee,wt,ke,ae,oe,we,Vt,It,q,xt,ue,Ve,Lt,At,j,Pt,ie,Ie,Dt,$t,ce,Bt,_e,xe,Nt,Tt,Le,Ot,de,Ae,Mt,Ut,Pe,Ct,fe,X,St,rt,jt,F,st,qt,pe,De,Ft,Ht,H,Y,Rt,Qt,ee,Zt,zt,te,Gt,Jt,le,Kt,Wt,he,$e,Xt,Yt,Be,me,el,tl,x=l[2]&&Bl(l),Te=Se,T=[];for(let a=0;a<Te.length;a+=1)T[a]=Nl($l(l,Te,a));let Oe=Il,O=[];for(let a=0;a<Oe.length;a+=1)O[a]=Tl(Dl(l,Oe,a));let Me=Se,M=[];for(let a=0;a<Me.length;a+=1)M[a]=Ol(Pl(l,Me,a));let Ue=xl,U=[];for(let a=0;a<Ue.length;a+=1)U[a]=Ml(Al(l,Ue,a));function Cl(a){l[24](a)}let ll={name:"residents0_18",lable:"0-18 years",lableClass:"text-orange-900 text-lg px-2 font-bold mb-1",inputClass:"border border-orange-700 w-10 rounded py-1 sm:text-lg"};l[0].residents0_18!==void 0&&(ll.inputValue=l[0].residents0_18),Y=new yt({props:ll}),bt.push(()=>gt(Y,"inputValue",Cl));function Sl(a){l[25](a)}let rl={name:"residents19_50",lable:"19-50 years",lableClass:"text-orange-900 text-lg px-2 font-bold mb-1",inputClass:"border border-orange-700 w-10 rounded py-1 sm:text-lg"};l[0].residents19_50!==void 0&&(rl.inputValue=l[0].residents19_50),ee=new yt({props:rl}),bt.push(()=>gt(ee,"inputValue",Sl));function jl(a){l[26](a)}let sl={name:"residents51_70",lable:"51-70 years",lableClass:"text-orange-900 text-lg px-2 font-bold mb-1",inputClass:"border border-orange-700 w-10 rounded py-1 sm:text-lg"};l[0].residents51_70!==void 0&&(sl.inputValue=l[0].residents51_70),te=new yt({props:sl}),bt.push(()=>gt(te,"inputValue",jl));function ql(a){l[27](a)}let nl={name:"residents71_",lable:"71 years +",lableClass:"text-orange-900 text-lg px-2 font-bold mb-1",inputClass:"border border-orange-700 w-10 rounded py-1 sm:text-lg"};l[0].residents71_!==void 0&&(nl.inputValue=l[0].residents71_),le=new yt({props:nl}),bt.push(()=>gt(le,"inputValue",ql));let Ce=Se,C=[];for(let a=0;a<Ce.length;a+=1)C[a]=Ul(Ll(l,Ce,a));return{c(){e=_("section"),x&&x.c(),t=b(),n=_("form"),i=_("div"),o=_("div"),k=b(),E=_("button"),V=D("Save My Answers"),h=b(),c=_("button"),I=D("Cancel"),Re=b(),R=_("div"),Z=_("div"),J=_("label"),Qe=D("Property address"),Ze=b(),B=_("input"),ze=b(),z=_("div"),K=_("label"),Ge=D("Suburb"),Je=b(),N=_("input"),Ke=b(),G=_("div"),W=_("label"),We=D("Postcode"),Xe=b(),S=_("input"),y=b(),ne=_("div"),ye=_("label"),Et=D("Do you Own this property?"),kt=b(),Ee=_("div");for(let a=0;a<T.length;a+=1)T[a].c();wt=b(),ke=_("div"),ae=_("div"),oe=_("div"),we=_("label"),Vt=D("Managing Agent"),It=b(),q=_("input"),xt=b(),ue=_("div"),Ve=_("label"),Lt=D("Phone"),At=b(),j=_("input"),Pt=b(),ie=_("div"),Ie=_("label"),Dt=D("Are you:"),$t=b(),ce=_("ul");for(let a=0;a<O.length;a+=1)O[a].c();Bt=b(),_e=_("div"),xe=_("label"),Nt=D("Is your property well sign_posted and numbered clearly from the road?"),Tt=b(),Le=_("div");for(let a=0;a<M.length;a+=1)M[a].c();Ot=b(),de=_("div"),Ae=_("label"),Mt=D("Is there easy access to property and paddocks?"),Ut=b(),Pe=_("div");for(let a=0;a<U.length;a+=1)U[a].c();Ct=b(),fe=_("div"),X=_("label"),St=D("Other Access Information:"),jt=b(),F=_("input"),qt=b(),pe=_("div"),De=_("label"),Ft=D("How many people usually live here:"),Ht=b(),H=_("div"),je(Y.$$.fragment),Qt=b(),je(ee.$$.fragment),zt=b(),je(te.$$.fragment),Jt=b(),je(le.$$.fragment),Wt=b(),he=_("div"),$e=_("label"),Xt=D("Do you consider any person on the property to be vulnerable?"),Yt=b(),Be=_("div");for(let a=0;a<C.length;a+=1)C[a].c();this.h()},l(a){e=d(a,"SECTION",{class:!0});var v=p(e);x&&x.l(v),t=g(v),n=d(v,"FORM",{id:!0,class:!0,action:!0,method:!0});var m=p(n);i=d(m,"DIV",{class:!0});var re=p(i);o=d(re,"DIV",{class:!0}),p(o).forEach(f),k=g(re),E=d(re,"BUTTON",{class:!0,type:!0,form:!0});var Ye=p(E);V=$(Ye,"Save My Answers"),Ye.forEach(f),h=g(re),c=d(re,"BUTTON",{class:!0});var et=p(c);I=$(et,"Cancel"),et.forEach(f),re.forEach(f),Re=g(m),R=d(m,"DIV",{class:!0});var u=p(R);Z=d(u,"DIV",{class:!0});var A=p(Z);J=d(A,"LABEL",{class:!0,for:!0});var al=p(J);Qe=$(al,"Property address"),al.forEach(f),Ze=g(A),B=d(A,"INPUT",{type:!0,name:!0,class:!0,placeholder:!0,autocomplete:!0,style:!0}),A.forEach(f),ze=g(u),z=d(u,"DIV",{class:!0});var nt=p(z);K=d(nt,"LABEL",{class:!0,for:!0});var ol=p(K);Ge=$(ol,"Suburb"),ol.forEach(f),Je=g(nt),N=d(nt,"INPUT",{type:!0,name:!0,class:!0,placeholder:!0,autocomplete:!0,style:!0}),nt.forEach(f),Ke=g(u),G=d(u,"DIV",{class:!0});var at=p(G);W=d(at,"LABEL",{class:!0,for:!0});var ul=p(W);We=$(ul,"Postcode"),ul.forEach(f),Xe=g(at),S=d(at,"INPUT",{type:!0,name:!0,class:!0,placeholder:!0,autocomplete:!0}),at.forEach(f),u.forEach(f),y=g(m),ne=d(m,"DIV",{class:!0});var ot=p(ne);ye=d(ot,"LABEL",{class:!0,for:!0});var il=p(ye);Et=$(il,"Do you Own this property?"),il.forEach(f),kt=g(ot),Ee=d(ot,"DIV",{class:!0});var cl=p(Ee);for(let P=0;P<T.length;P+=1)T[P].l(cl);cl.forEach(f),ot.forEach(f),wt=g(m),ke=d(m,"DIV",{});var _l=p(ke);ae=d(_l,"DIV",{class:!0});var ut=p(ae);oe=d(ut,"DIV",{class:!0});var it=p(oe);we=d(it,"LABEL",{class:!0,for:!0});var dl=p(we);Vt=$(dl,"Managing Agent"),dl.forEach(f),It=g(it),q=d(it,"INPUT",{type:!0,name:!0,class:!0,placeholder:!0,style:!0}),it.forEach(f),xt=g(ut),ue=d(ut,"DIV",{class:!0});var ct=p(ue);Ve=d(ct,"LABEL",{class:!0,for:!0});var fl=p(Ve);Lt=$(fl,"Phone"),fl.forEach(f),At=g(ct),j=d(ct,"INPUT",{type:!0,name:!0,class:!0,placeholder:!0,autocomplete:!0,style:!0}),ct.forEach(f),ut.forEach(f),_l.forEach(f),Pt=g(m),ie=d(m,"DIV",{class:!0});var _t=p(ie);Ie=d(_t,"LABEL",{class:!0,for:!0});var pl=p(Ie);Dt=$(pl,"Are you:"),pl.forEach(f),$t=g(_t),ce=d(_t,"UL",{style:!0,class:!0});var hl=p(ce);for(let P=0;P<O.length;P+=1)O[P].l(hl);hl.forEach(f),_t.forEach(f),Bt=g(m),_e=d(m,"DIV",{class:!0});var dt=p(_e);xe=d(dt,"LABEL",{class:!0,for:!0});var ml=p(xe);Nt=$(ml,"Is your property well sign_posted and numbered clearly from the road?"),ml.forEach(f),Tt=g(dt),Le=d(dt,"DIV",{class:!0});var bl=p(Le);for(let P=0;P<M.length;P+=1)M[P].l(bl);bl.forEach(f),dt.forEach(f),Ot=g(m),de=d(m,"DIV",{class:!0});var ft=p(de);Ae=d(ft,"LABEL",{class:!0,for:!0});var gl=p(Ae);Mt=$(gl,"Is there easy access to property and paddocks?"),gl.forEach(f),Ut=g(ft),Pe=d(ft,"DIV",{class:!0});var vl=p(Pe);for(let P=0;P<U.length;P+=1)U[P].l(vl);vl.forEach(f),ft.forEach(f),Ct=g(m),fe=d(m,"DIV",{class:!0});var pt=p(fe);X=d(pt,"LABEL",{class:!0,for:!0});var yl=p(X);St=$(yl,"Other Access Information:"),yl.forEach(f),jt=g(pt),F=d(pt,"INPUT",{type:!0,class:!0,id:!0,name:!0}),pt.forEach(f),qt=g(m),pe=d(m,"DIV",{class:!0});var ht=p(pe);De=d(ht,"LABEL",{class:!0,for:!0});var El=p(De);Ft=$(El,"How many people usually live here:"),El.forEach(f),Ht=g(ht),H=d(ht,"DIV",{class:!0,name:!0});var be=p(H);qe(Y.$$.fragment,be),Qt=g(be),qe(ee.$$.fragment,be),zt=g(be),qe(te.$$.fragment,be),Jt=g(be),qe(le.$$.fragment,be),be.forEach(f),ht.forEach(f),Wt=g(m),he=d(m,"DIV",{class:!0});var mt=p(he);$e=d(mt,"LABEL",{class:!0,for:!0});var kl=p($e);Xt=$(kl,"Do you consider any person on the property to be vulnerable?"),kl.forEach(f),Yt=g(mt),Be=d(mt,"DIV",{class:!0});var wl=p(Be);for(let P=0;P<C.length;P+=1)C[P].l(wl);wl.forEach(f),mt.forEach(f),m.forEach(f),v.forEach(f),this.h()},h(){r(o,"class","w-1/3"),r(E,"class","w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"),E.hidden=w=!l[1],r(E,"type","submit"),r(E,"form","profileMyPlaceForm"),r(c,"class","w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"),c.hidden=Ne=!l[1],r(i,"class","flex flex-row"),r(J,"class","text-lg font-bold mb-1"),r(J,"for","property_address_street"),r(B,"type","text"),r(B,"name","property_address_street"),r(B,"class","border w-full border-orange-700 rounded bg-orange-50 py-1 sm:text-lg"),r(B,"placeholder","Street Address"),r(B,"autocomplete","street-address"),tt(B,"text-transform","uppercase sm:text-lg"),r(Z,"class","flex flex-col basis-full mx-2"),r(K,"class","text-lg font-bold mb-1"),r(K,"for","property_address_suburb"),r(N,"type","text"),r(N,"name","property_address_suburb"),r(N,"class","border w-full border-orange-700 rounded bg-orange-50 py-1 sm:text-lg"),r(N,"placeholder","Suburb"),r(N,"autocomplete","address-level2"),tt(N,"text-transform","uppercase sm:text-lg"),r(z,"class","flex flex-col basis-3/12 mx-2"),r(W,"class","text-lg font-bold mb-1"),r(W,"for","property_address_postcode"),r(S,"type","text"),r(S,"name","property_address_postcode"),r(S,"class","border w-full border-orange-700 rounded bg-orange-50 py-1 sm:text-lg"),r(S,"placeholder","Postcode"),r(S,"autocomplete","postal-code"),r(G,"class","flex flex-col basis-2/12 mx-2"),r(R,"class","flex flex-row mx-2"),r(ye,"class","mt-1 text-lg font-bold mb-1"),r(ye,"for","rented_list"),r(Ee,"class","flex flex-row rounded-lg bg-orange-50 p-1 mx-2"),r(ne,"class","flex flex-row justify-between items-center px-4 mt-2"),r(we,"class","text-lg font-bold mb-1"),r(we,"for","agent_name"),r(q,"type","text"),r(q,"name","agent_name"),r(q,"class","border w-full border-orange-700 rounded bg-orange-50 py-1 sm:text-lg"),r(q,"placeholder","Managing Agent name"),tt(q,"text-transform","titlecase sm:text-lg"),r(oe,"class","flex flex-col basis-full mx-2"),r(Ve,"class","text-lg font-bold mb-1"),r(Ve,"for","agent_phone"),r(j,"type","text"),r(j,"name","agent_phone"),r(j,"class","border w-full border-orange-700 rounded bg-orange-50 py-1 sm:text-lg"),r(j,"placeholder","Managing Agent phone"),r(j,"autocomplete",""),tt(j,"text-transform","uppercase sm:text-lg"),r(ue,"class","flex flex-col basis-5/12 mx-2"),r(ae,"class","flex flex-row mx-2"),Vl(ke,"hidden",l[0].property_rented===!0),r(Ie,"class","mt-1 text-lg font-bold mb-1"),r(Ie,"for","residency_profile_list"),tt(ce,"column-count","2"),r(ce,"class","rounded-lg bg-orange-50 p-1"),r(ie,"class","flex flex-row justify-between items-center px-4 mt-2"),r(xe,"class","mt-1 text-lg font-bold mb-1"),r(xe,"for","sign_posted_list"),r(Le,"class","flex flex-row rounded-lg bg-orange-50 p-1"),r(_e,"class","flex flex-row justify-between items-center px-4 mt-2"),r(Ae,"class","text-lg font-bold mb-1"),r(Ae,"for","truck_access_list"),r(Pe,"class","flex flex-col rounded-lg bg-orange-50 p-1"),r(de,"class","flex flex-row justify-between items-center px-4 mt-2"),r(X,"class","mt-1 text-lg font-bold mb-1"),X.hidden=rt=l[0].truck_access!==4,r(X,"for","truck_access_other_information"),r(F,"type","text"),r(F,"class","border w-full border-orange-700 rounded bg-orange-50 py-1 sm:text-lg"),F.hidden=st=l[0].truck_access!==4,r(F,"id","truck_access_other_information"),r(F,"name","truck_access_other_information"),r(fe,"class","flex flex-row justify-between items-center px-4 mt-2"),r(De,"class","mt-1 text-lg font-bold mb-1"),r(De,"for","residents_profile"),r(H,"class","flex flex-row justify-around list-none rounded-lg bg-orange-50 p-1 mx-2"),r(H,"name","residents_profile"),r(pe,"class","flex flex-row justify-between items-center px-4 mt-2"),r($e,"class","mt-1 text-lg font-bold mb-1"),r($e,"for","vulnerable_residents_list"),r(Be,"class","flex flex-row rounded-lg bg-orange-50 p-1 mx-2"),r(he,"class","flex flex-row justify-between items-center px-4 mt-2"),r(n,"id","profileMyPlaceForm"),r(n,"class","flex flex-col py-3 mx-auto min-h-full w-full text-orange-900 bg-orange-300"),r(n,"action","/profile/myplace"),r(n,"method","POST"),r(e,"class","min-h-full bg-orange-300")},m(a,v){ve(a,e,v),x&&x.m(e,null),s(e,t),s(e,n),s(n,i),s(i,o),s(i,k),s(i,E),s(E,V),s(i,h),s(i,c),s(c,I),s(n,Re),s(n,R),s(R,Z),s(Z,J),s(J,Qe),s(Z,Ze),s(Z,B),Q(B,l[0].property_address_street),s(R,ze),s(R,z),s(z,K),s(K,Ge),s(z,Je),s(z,N),Q(N,l[0].property_address_suburb),s(R,Ke),s(R,G),s(G,W),s(W,We),s(G,Xe),s(G,S),Q(S,l[0].property_address_postcode),s(n,y),s(n,ne),s(ne,ye),s(ye,Et),s(ne,kt),s(ne,Ee);for(let m=0;m<T.length;m+=1)T[m].m(Ee,null);s(n,wt),s(n,ke),s(ke,ae),s(ae,oe),s(oe,we),s(we,Vt),s(oe,It),s(oe,q),Q(q,l[0].agent_name),s(ae,xt),s(ae,ue),s(ue,Ve),s(Ve,Lt),s(ue,At),s(ue,j),Q(j,l[0].agent_phone),s(n,Pt),s(n,ie),s(ie,Ie),s(Ie,Dt),s(ie,$t),s(ie,ce);for(let m=0;m<O.length;m+=1)O[m].m(ce,null);s(n,Bt),s(n,_e),s(_e,xe),s(xe,Nt),s(_e,Tt),s(_e,Le);for(let m=0;m<M.length;m+=1)M[m].m(Le,null);s(n,Ot),s(n,de),s(de,Ae),s(Ae,Mt),s(de,Ut),s(de,Pe);for(let m=0;m<U.length;m+=1)U[m].m(Pe,null);s(n,Ct),s(n,fe),s(fe,X),s(X,St),s(fe,jt),s(fe,F),Q(F,l[0].truck_access_other_information),s(n,qt),s(n,pe),s(pe,De),s(De,Ft),s(pe,Ht),s(pe,H),Fe(Y,H,null),s(H,Qt),Fe(ee,H,null),s(H,zt),Fe(te,H,null),s(H,Jt),Fe(le,H,null),s(n,Wt),s(n,he),s(he,$e),s($e,Xt),s(he,Yt),s(he,Be);for(let m=0;m<C.length;m+=1)C[m].m(Be,null);me=!0,el||(tl=[L(E,"click",l[5]),L(c,"click",l[6]),L(B,"change",l[7]),L(B,"input",l[8]),L(N,"change",l[9]),L(N,"input",l[10]),L(S,"change",l[11]),L(S,"input",l[12]),L(q,"change",l[15]),L(q,"input",l[16]),L(j,"change",l[17]),L(j,"input",l[18]),L(F,"input",l[23]),L(n,"change",l[29])],el=!0)},p(a,v){if(a[2]?x?(x.p(a,v),v[0]&4&&se(x,1)):(x=Bl(a),x.c(),se(x,1),x.m(e,t)):x&&(zl(),ge(x,1,1,()=>{x=null}),Ql()),(!me||v[0]&2&&w!==(w=!a[1]))&&(E.hidden=w),(!me||v[0]&2&&Ne!==(Ne=!a[1]))&&(c.hidden=Ne),v[0]&1&&B.value!==a[0].property_address_street&&Q(B,a[0].property_address_street),v[0]&1&&N.value!==a[0].property_address_suburb&&Q(N,a[0].property_address_suburb),v[0]&1&&S.value!==a[0].property_address_postcode&&Q(S,a[0].property_address_postcode),v[0]&1){Te=Se;let u;for(u=0;u<Te.length;u+=1){const A=$l(a,Te,u);T[u]?T[u].p(A,v):(T[u]=Nl(A),T[u].c(),T[u].m(Ee,null))}for(;u<T.length;u+=1)T[u].d(1);T.length=Te.length}if(v[0]&1&&q.value!==a[0].agent_name&&Q(q,a[0].agent_name),v[0]&1&&j.value!==a[0].agent_phone&&Q(j,a[0].agent_phone),v[0]&1&&Vl(ke,"hidden",a[0].property_rented===!0),v[0]&1){Oe=Il;let u;for(u=0;u<Oe.length;u+=1){const A=Dl(a,Oe,u);O[u]?O[u].p(A,v):(O[u]=Tl(A),O[u].c(),O[u].m(ce,null))}for(;u<O.length;u+=1)O[u].d(1);O.length=Oe.length}if(v[0]&1){Me=Se;let u;for(u=0;u<Me.length;u+=1){const A=Pl(a,Me,u);M[u]?M[u].p(A,v):(M[u]=Ol(A),M[u].c(),M[u].m(Le,null))}for(;u<M.length;u+=1)M[u].d(1);M.length=Me.length}if(v[0]&1){Ue=xl;let u;for(u=0;u<Ue.length;u+=1){const A=Al(a,Ue,u);U[u]?U[u].p(A,v):(U[u]=Ml(A),U[u].c(),U[u].m(Pe,null))}for(;u<U.length;u+=1)U[u].d(1);U.length=Ue.length}(!me||v[0]&1&&rt!==(rt=a[0].truck_access!==4))&&(X.hidden=rt),(!me||v[0]&1&&st!==(st=a[0].truck_access!==4))&&(F.hidden=st),v[0]&1&&F.value!==a[0].truck_access_other_information&&Q(F,a[0].truck_access_other_information);const m={};!Rt&&v[0]&1&&(Rt=!0,m.inputValue=a[0].residents0_18,vt(()=>Rt=!1)),Y.$set(m);const re={};!Zt&&v[0]&1&&(Zt=!0,re.inputValue=a[0].residents19_50,vt(()=>Zt=!1)),ee.$set(re);const Ye={};!Gt&&v[0]&1&&(Gt=!0,Ye.inputValue=a[0].residents51_70,vt(()=>Gt=!1)),te.$set(Ye);const et={};if(!Kt&&v[0]&1&&(Kt=!0,et.inputValue=a[0].residents71_,vt(()=>Kt=!1)),le.$set(et),v[0]&1){Ce=Se;let u;for(u=0;u<Ce.length;u+=1){const A=Ll(a,Ce,u);C[u]?C[u].p(A,v):(C[u]=Ul(A),C[u].c(),C[u].m(Be,null))}for(;u<C.length;u+=1)C[u].d(1);C.length=Ce.length}},i(a){me||(se(x),se(Y.$$.fragment,a),se(ee.$$.fragment,a),se(te.$$.fragment,a),se(le.$$.fragment,a),me=!0)},o(a){ge(x),ge(Y.$$.fragment,a),ge(ee.$$.fragment,a),ge(te.$$.fragment,a),ge(le.$$.fragment,a),me=!1},d(a){a&&f(e),x&&x.d(),lt(T,a),lt(O,a),lt(M,a),lt(U,a),He(Y),He(ee),He(te),He(le),lt(C,a),el=!1,Zl(tl)}}}function tr(l,e,t){let n=!1,i=!1;Gl(async({cancel:y})=>{n&&(y(),t(2,i=!i))});let{profileMyPlace:o}=e;const k=y=>{console.log("Validate address:  ",y.currentTarget.value)},E=[[],[],[],[],[]],V=()=>t(2,i=!i),w=()=>{t(1,n=!1)},h=()=>{t(1,n=!1)},c=y=>{k(y)};function I(){o.property_address_street=this.value,t(0,o)}const Ne=y=>{k(y)};function Re(){o.property_address_suburb=this.value,t(0,o)}const R=y=>{k(y)};function Z(){o.property_address_postcode=this.value,t(0,o)}function J(){o.property_rented=this.__value,t(0,o)}const Qe=y=>{k(y)};function Ze(){o.agent_name=this.value,t(0,o)}const B=y=>{k(y)};function ze(){o.agent_phone=this.value,t(0,o)}function z(){o.residency_profile=this.__value,t(0,o)}function K(){o.sign_posted=this.__value,t(0,o)}function Ge(){o.truck_access=this.__value,t(0,o)}function Je(){o.truck_access=this.__value,t(0,o)}function N(){o.truck_access_other_information=this.value,t(0,o)}function Ke(y){l.$$.not_equal(o.residents0_18,y)&&(o.residents0_18=y,t(0,o))}function G(y){l.$$.not_equal(o.residents19_50,y)&&(o.residents19_50=y,t(0,o))}function W(y){l.$$.not_equal(o.residents51_70,y)&&(o.residents51_70=y,t(0,o))}function We(y){l.$$.not_equal(o.residents71_,y)&&(o.residents71_=y,t(0,o))}function Xe(){o.vulnerable_residents=this.__value,t(0,o)}const S=()=>{t(1,n=!0)};return l.$$set=y=>{"profileMyPlace"in y&&t(0,o=y.profileMyPlace)},[o,n,i,k,V,w,h,c,I,Ne,Re,R,Z,J,E,Qe,Ze,B,ze,z,K,Ge,Je,N,Ke,G,W,We,Xe,S]}class ir extends Fl{constructor(e){super(),Hl(this,e,tr,er,Rl,{profileMyPlace:0},null,[-1,-1])}}export{ir as default};
