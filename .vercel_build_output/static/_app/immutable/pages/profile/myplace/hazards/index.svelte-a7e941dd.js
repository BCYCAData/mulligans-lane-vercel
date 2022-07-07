import{S as ve,i as be,s as xe,e as g,k as j,t as N,c as v,a as k,m as I,h as P,d as f,b as d,g as Z,N as r,R as pe,a7 as X,a8 as Y,w as ee,x as te,y as ae,a6 as le,q as ne,o as se,Z as re,B as ie,a9 as ze}from"../../../../chunks/index-b429d93a.js";import{k as oe,e as de}from"../../../../chunks/profileOptions-e1ddd3e6.js";import{T as ue}from"../../../../chunks/TextAreaInput-f15cb8d6.js";function _e(l,t,e){const n=l.slice();return n[6]=t[e].value,n[7]=t[e].lable,n}function he(l,t,e){const n=l.slice();return n[6]=t[e].value,n[7]=t[e].lable,n}function ce(l){let t,e,n,z,u,y=l[7]+"",h,E,i,b;return{c(){t=g("li"),e=g("input"),z=j(),u=g("label"),h=N(y),E=j(),this.h()},l(_){t=v(_,"LI",{class:!0,name:!0});var o=k(t);e=v(o,"INPUT",{name:!0,type:!0}),z=I(o),u=v(o,"LABEL",{for:!0});var V=k(u);h=P(V,y),V.forEach(f),E=I(o),o.forEach(f),this.h()},h(){d(e,"name","site_hazards"),d(e,"type","checkbox"),e.__value=n=l[6],e.value=e.__value,l[2][0].push(e),d(u,"for","site_hazards"),d(t,"class","list-none sm:text-base sm:font-semibold sm:p-1"),d(t,"name","site_hazards_list")},m(_,o){Z(_,t,o),r(t,e),e.checked=~l[0].site_hazards.indexOf(e.__value),r(t,z),r(t,u),r(u,h),r(t,E),i||(b=pe(e,"change",l[1]),i=!0)},p(_,o){o&1&&(e.checked=~_[0].site_hazards.indexOf(e.__value))},d(_){_&&f(t),l[2][0].splice(l[2][0].indexOf(e),1),i=!1,b()}}}function fe(l){let t,e,n,z,u,y=l[7]+"",h,E,i,b;return{c(){t=g("li"),e=g("input"),z=j(),u=g("label"),h=N(y),E=j(),this.h()},l(_){t=v(_,"LI",{class:!0,name:!0});var o=k(t);e=v(o,"INPUT",{name:!0,type:!0}),z=I(o),u=v(o,"LABEL",{for:!0});var V=k(u);h=P(V,y),V.forEach(f),E=I(o),o.forEach(f),this.h()},h(){d(e,"name","land_adjacent_hazard"),d(e,"type","radio"),e.__value=n=l[6],e.value=e.__value,l[2][1].push(e),d(u,"for","land_adjacent_hazard"),d(t,"class","list-none sm:text-base sm:font-semibold sm:p-1"),d(t,"name","land_adjacent_hazard_list")},m(_,o){Z(_,t,o),r(t,e),e.checked=e.__value===l[0].land_adjacent_hazard,r(t,z),r(t,u),r(u,h),r(t,E),i||(b=pe(e,"change",l[4]),i=!0)},p(_,o){o&1&&(e.checked=e.__value===_[0].land_adjacent_hazard)},d(_){_&&f(t),l[2][1].splice(l[2][1].indexOf(e),1),i=!1,b()}}}function ye(l){let t,e,n,z,u,y,h,E,i,b,_,o,V,$,S,U,L,M,T,w,R,B,C=oe,p=[];for(let a=0;a<C.length;a+=1)p[a]=ce(he(l,C,a));function me(a){l[3](a)}let F={lableClass:"tracking-wide text-lg font-bold mb-1",headingText:"Are there any other hazards on the property that should be noted?",divClass:"rounded-lg bg-orange-300 sm:text-lg",nameText:"other_site_hazards",textAreaClass:"w-full resize-y sm:text-lg"};l[0].other_site_hazards!==void 0&&(F.inputValue=l[0].other_site_hazards),b=new ue({props:F}),X.push(()=>Y(b,"inputValue",me));let H=de,m=[];for(let a=0;a<H.length;a+=1)m[a]=fe(_e(l,H,a));function ge(a){l[5](a)}let G={lableClass:"tracking-wide text-lg font-bold mb-1",headingText:"Are there other areas that concern you or represent a potential threat?",divClass:"rounded-lg bg-orange-300 sm:text-lg",nameText:"other_hazards",textAreaClass:"w-full resize-y sm:text-lg"};return l[0].other_hazards!==void 0&&(G.inputValue=l[0].other_hazards),w=new ue({props:G}),X.push(()=>Y(w,"inputValue",ge)),{c(){t=g("div"),e=g("div"),n=g("label"),z=N("Do you have any of the following on your property?"),u=j(),y=g("div"),h=g("div");for(let a=0;a<p.length;a+=1)p[a].c();E=j(),i=g("div"),ee(b.$$.fragment),o=j(),V=g("div"),$=g("label"),S=N("Does any adjoining land represent a hazard?"),U=j(),L=g("div");for(let a=0;a<m.length;a+=1)m[a].c();M=j(),T=g("div"),ee(w.$$.fragment),this.h()},l(a){t=v(a,"DIV",{class:!0});var c=k(t);e=v(c,"DIV",{class:!0});var x=k(e);n=v(x,"LABEL",{class:!0,for:!0});var O=k(n);z=P(O,"Do you have any of the following on your property?"),O.forEach(f),u=I(x),y=v(x,"DIV",{class:!0});var s=k(y);h=v(s,"DIV",{class:!0,name:!0});var D=k(h);for(let A=0;A<p.length;A+=1)p[A].l(D);D.forEach(f),s.forEach(f),x.forEach(f),E=I(c),i=v(c,"DIV",{class:!0});var J=k(i);te(b.$$.fragment,J),J.forEach(f),o=I(c),V=v(c,"DIV",{class:!0});var q=k(V);$=v(q,"LABEL",{class:!0,for:!0});var K=k($);S=P(K,"Does any adjoining land represent a hazard?"),K.forEach(f),U=I(q),L=v(q,"DIV",{class:!0});var Q=k(L);for(let A=0;A<m.length;A+=1)m[A].l(Q);Q.forEach(f),q.forEach(f),M=I(c),T=v(c,"DIV",{class:!0});var W=k(T);te(w.$$.fragment,W),W.forEach(f),c.forEach(f),this.h()},h(){d(n,"class","tracking-wide mr-4 mt-1 text-orange-900 text-l font-bold mb-1"),d(n,"for","site_hazards_list"),d(h,"class","tracking-wide text-lg font-bold mb-1"),d(h,"name","site_hazards_list"),d(y,"class","flex rounded-lg bg-orange-50 mx-3"),d(e,"class","flex flex-row justify-start items-center mt-3 mx-2"),d(i,"class","flex flex-row justify-start items-center mx-2 mt-2"),d($,"class","tracking-wide text-lg font-bold mb-1"),d($,"for","land_adjacent_hazard_list"),d(L,"class","flex flex-row rounded-lg bg-orange-50 p-1 mx-2"),d(V,"class","flex flex-row justify-start items-center mx-2 mt-2"),d(T,"class","flex flex-row justify-start items-center mx-2 mt-2"),d(t,"class","flex flex-col mx-2")},m(a,c){Z(a,t,c),r(t,e),r(e,n),r(n,z),r(e,u),r(e,y),r(y,h);for(let x=0;x<p.length;x+=1)p[x].m(h,null);r(t,E),r(t,i),ae(b,i,null),r(t,o),r(t,V),r(V,$),r($,S),r(V,U),r(V,L);for(let x=0;x<m.length;x+=1)m[x].m(L,null);r(t,M),r(t,T),ae(w,T,null),B=!0},p(a,[c]){if(c&1){C=oe;let s;for(s=0;s<C.length;s+=1){const D=he(a,C,s);p[s]?p[s].p(D,c):(p[s]=ce(D),p[s].c(),p[s].m(h,null))}for(;s<p.length;s+=1)p[s].d(1);p.length=C.length}const x={};if(!_&&c&1&&(_=!0,x.inputValue=a[0].other_site_hazards,le(()=>_=!1)),b.$set(x),c&1){H=de;let s;for(s=0;s<H.length;s+=1){const D=_e(a,H,s);m[s]?m[s].p(D,c):(m[s]=fe(D),m[s].c(),m[s].m(L,null))}for(;s<m.length;s+=1)m[s].d(1);m.length=H.length}const O={};!R&&c&1&&(R=!0,O.inputValue=a[0].other_hazards,le(()=>R=!1)),w.$set(O)},i(a){B||(ne(b.$$.fragment,a),ne(w.$$.fragment,a),B=!0)},o(a){se(b.$$.fragment,a),se(w.$$.fragment,a),B=!1},d(a){a&&f(t),re(p,a),ie(b),re(m,a),ie(w)}}}function Ve(l,t,e){let{profileHazards:n}=t;const z=[[],[]];function u(){n.site_hazards=ze(z[0],this.__value,this.checked),e(0,n)}function y(i){l.$$.not_equal(n.other_site_hazards,i)&&(n.other_site_hazards=i,e(0,n))}function h(){n.land_adjacent_hazard=this.__value,e(0,n)}function E(i){l.$$.not_equal(n.other_hazards,i)&&(n.other_hazards=i,e(0,n))}return l.$$set=i=>{"profileHazards"in i&&e(0,n=i.profileHazards)},[n,u,z,y,h,E]}class je extends ve{constructor(t){super(),be(this,t,Ve,ye,xe,{profileHazards:0})}}export{je as default};
