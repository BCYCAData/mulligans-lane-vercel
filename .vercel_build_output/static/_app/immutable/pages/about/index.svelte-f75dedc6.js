import{S as k,i as q,s as D,e as i,c as p,a as d,d as s,b as z,g as I,n as y,w as H,k as v,t as h,x as L,a2 as V,m as x,h as u,y as Z,G as a,z as G,r as N,p as Y,C as F}from"../../chunks/index-574d3e5d.js";import{_ as J}from"../../chunks/preload-helper-60cab3ee.js";function K(_){let e;return{c(){e=i("div"),this.h()},l(t){e=p(t,"DIV",{id:!0,class:!0}),d(e).forEach(s),this.h()},h(){z(e,"id","map"),z(e,"class","m-4 h-1/2 w-3/4 ")},m(t,r){I(t,e,r)},p:y,i:y,o:y,d(t){t&&s(e)}}}function Q(_){return H(async()=>{const e=await J(()=>import("../../chunks/leaflet-src-68143d96.js").then(function(r){return r.l}),["chunks/leaflet-src-68143d96.js","chunks/_commonjsHelpers-7d66b65f.js"]),t=e.map("map",{center:[-31.952345,152.295649],zoom:12,scrollWheelZoom:!0,tap:!1});e.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",{maxZoom:17,attribution:'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'}).addTo(t),e.marker([-31.952345,152.295649]).addTo(t).bindPopup("The centre of our community")}),[]}class U extends k{constructor(e){super(),q(this,e,Q,K,D,{})}}function X(_){let e,t,r,g,$,f,w,E,n,M,C,R,T,A,B,O,P,m,b;return m=new U({}),{c(){e=v(),t=i("section"),r=i("h1"),g=h("About this app"),$=v(),f=i("h3"),w=h("We have a project"),E=v(),n=i("p"),M=h("Our aim is to "),C=i("br"),R=h(`
		Prepare`),T=i("br"),A=h(`
		Connect`),B=i("br"),O=h(`
		Rebound`),P=v(),L(m.$$.fragment),this.h()},l(o){V('[data-svelte="svelte-1ine71f"]',document.head).forEach(s),e=x(o),t=p(o,"SECTION",{class:!0});var l=d(t);r=p(l,"H1",{});var W=d(r);g=u(W,"About this app"),W.forEach(s),$=x(l),f=p(l,"H3",{});var j=d(f);w=u(j,"We have a project"),j.forEach(s),E=x(l),n=p(l,"P",{});var c=d(n);M=u(c,"Our aim is to "),C=p(c,"BR",{}),R=u(c,`
		Prepare`),T=p(c,"BR",{}),A=u(c,`
		Connect`),B=p(c,"BR",{}),O=u(c,`
		Rebound`),c.forEach(s),P=x(l),Z(m.$$.fragment,l),l.forEach(s),this.h()},h(){document.title="About",z(t,"class","flex flex-col items-center mx-auto mt-10 sm:mt-1 h-full max-w-3xl text-gray-800 text-center")},m(o,S){I(o,e,S),I(o,t,S),a(t,r),a(r,g),a(t,$),a(t,f),a(f,w),a(t,E),a(t,n),a(n,M),a(n,C),a(n,R),a(n,T),a(n,A),a(n,B),a(n,O),a(t,P),G(m,t,null),b=!0},p:y,i(o){b||(N(m.$$.fragment,o),b=!0)},o(o){Y(m.$$.fragment,o),b=!1},d(o){o&&s(e),o&&s(t),F(m)}}}class at extends k{constructor(e){super(),q(this,e,null,X,D,{})}}export{at as default};