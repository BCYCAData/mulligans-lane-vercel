import{S as z,i as D,s as H,l as i,m as p,n as _,h as n,p as I,b as W,E as y,o as L,a as v,r as h,w as N,_ as V,c as x,u,x as Z,N as a,y as k,f as Y,t as F,B as G}from"../../chunks/index-84b22e2d.js";import{_ as J}from"../../chunks/preload-helper-c28b9807.js";function K(d){let e;return{c(){e=i("div"),this.h()},l(t){e=p(t,"DIV",{id:!0,class:!0}),_(e).forEach(n),this.h()},h(){I(e,"id","map"),I(e,"class","m-4 h-1/2 w-3/4 ")},m(t,s){W(t,e,s)},p:y,i:y,o:y,d(t){t&&n(e)}}}function Q(d){return L(async()=>{const e=await J(()=>import("../../chunks/leaflet-src-cc4153a8.js").then(s=>s.l),["_app/immutable/chunks/leaflet-src-cc4153a8.js","_app/immutable/chunks/_commonjsHelpers-e864563f.js"]),t=e.map("map",{center:[-31.952345,152.295649],zoom:12,scrollWheelZoom:!0,tap:!1});e.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",{maxZoom:17,attribution:'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'}).addTo(t),e.marker([-31.952345,152.295649]).addTo(t).bindPopup("The centre of our community")}),[]}class U extends z{constructor(e){super(),D(this,e,Q,K,H,{})}}function X(d){let e,t,s,g,$,f,E,w,r,M,B,R,T,A,C,O,P,m,b;return m=new U({}),{c(){e=v(),t=i("section"),s=i("h1"),g=h("About this app"),$=v(),f=i("h3"),E=h("We have a project"),w=v(),r=i("p"),M=h("Our aim is to "),B=i("br"),R=h(`\r
		Prepare`),T=i("br"),A=h(`\r
		Connect`),C=i("br"),O=h(`\r
		Rebound`),P=v(),N(m.$$.fragment),this.h()},l(o){V('[data-svelte="svelte-1ine71f"]',document.head).forEach(n),e=x(o),t=p(o,"SECTION",{class:!0});var l=_(t);s=p(l,"H1",{});var j=_(s);g=u(j,"About this app"),j.forEach(n),$=x(l),f=p(l,"H3",{});var q=_(f);E=u(q,"We have a project"),q.forEach(n),w=x(l),r=p(l,"P",{});var c=_(r);M=u(c,"Our aim is to "),B=p(c,"BR",{}),R=u(c,`\r
		Prepare`),T=p(c,"BR",{}),A=u(c,`\r
		Connect`),C=p(c,"BR",{}),O=u(c,`\r
		Rebound`),c.forEach(n),P=x(l),Z(m.$$.fragment,l),l.forEach(n),this.h()},h(){document.title="About",I(t,"class","flex flex-col items-center mx-auto mt-10 sm:mt-1 h-full max-w-3xl text-gray-800 text-center")},m(o,S){W(o,e,S),W(o,t,S),a(t,s),a(s,g),a(t,$),a(t,f),a(f,E),a(t,w),a(t,r),a(r,M),a(r,B),a(r,R),a(r,T),a(r,A),a(r,C),a(r,O),a(t,P),k(m,t,null),b=!0},p:y,i(o){b||(Y(m.$$.fragment,o),b=!0)},o(o){F(m.$$.fragment,o),b=!1},d(o){o&&n(e),o&&n(t),G(m)}}}class at extends z{constructor(e){super(),D(this,e,null,X,H,{})}}export{at as default};
