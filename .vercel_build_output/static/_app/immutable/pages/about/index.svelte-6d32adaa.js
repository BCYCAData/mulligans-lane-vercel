import{S as j,i as z,s as D,e as i,c as p,a as d,d as r,b as k,g as q,E as y,v as H,k as b,t as h,w as L,a3 as N,m as x,h as u,x as V,N as a,y as Z,q as Y,o as F,B as G}from"../../chunks/index-b429d93a.js";import{_ as J}from"../../chunks/preload-helper-60cab3ee.js";function K(_){let e;return{c(){e=i("div"),this.h()},l(t){e=p(t,"DIV",{id:!0,class:!0}),d(e).forEach(r),this.h()},h(){k(e,"id","map"),k(e,"class","m-4 h-1/2 w-3/4 ")},m(t,n){q(t,e,n)},p:y,i:y,o:y,d(t){t&&r(e)}}}function Q(_){return H(async()=>{const e=await J(()=>import("../../chunks/leaflet-src-68143d96.js").then(function(n){return n.l}),["chunks/leaflet-src-68143d96.js","chunks/_commonjsHelpers-7d66b65f.js"]),t=e.map("map",{center:[-31.952345,152.295649],zoom:12,scrollWheelZoom:!0,tap:!1});e.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",{maxZoom:17,attribution:'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'}).addTo(t),e.marker([-31.952345,152.295649]).addTo(t).bindPopup("The centre of our community")}),[]}class U extends j{constructor(e){super(),z(this,e,Q,K,D,{})}}function X(_){let e,t,n,g,$,f,E,w,s,M,B,R,T,A,C,O,P,m,v;return m=new U({}),{c(){e=b(),t=i("section"),n=i("h1"),g=h("About this app"),$=b(),f=i("h3"),E=h("We have a project"),w=b(),s=i("p"),M=h("Our aim is to "),B=i("br"),R=h(`
		Prepare`),T=i("br"),A=h(`
		Connect`),C=i("br"),O=h(`
		Rebound`),P=b(),L(m.$$.fragment),this.h()},l(o){N('[data-svelte="svelte-1ine71f"]',document.head).forEach(r),e=x(o),t=p(o,"SECTION",{class:!0});var l=d(t);n=p(l,"H1",{});var I=d(n);g=u(I,"About this app"),I.forEach(r),$=x(l),f=p(l,"H3",{});var W=d(f);E=u(W,"We have a project"),W.forEach(r),w=x(l),s=p(l,"P",{});var c=d(s);M=u(c,"Our aim is to "),B=p(c,"BR",{}),R=u(c,`
		Prepare`),T=p(c,"BR",{}),A=u(c,`
		Connect`),C=p(c,"BR",{}),O=u(c,`
		Rebound`),c.forEach(r),P=x(l),V(m.$$.fragment,l),l.forEach(r),this.h()},h(){document.title="About",k(t,"class","flex flex-col items-center mx-auto mt-10 sm:mt-1 h-full max-w-3xl text-gray-800 text-center")},m(o,S){q(o,e,S),q(o,t,S),a(t,n),a(n,g),a(t,$),a(t,f),a(f,E),a(t,w),a(t,s),a(s,M),a(s,B),a(s,R),a(s,T),a(s,A),a(s,C),a(s,O),a(t,P),Z(m,t,null),v=!0},p:y,i(o){v||(Y(m.$$.fragment,o),v=!0)},o(o){F(m.$$.fragment,o),v=!1},d(o){o&&r(e),o&&r(t),G(m)}}}class at extends j{constructor(e){super(),z(this,e,null,X,D,{})}}export{at as default};