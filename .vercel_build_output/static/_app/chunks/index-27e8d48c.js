function v(){}const W=t=>t;function _t(t,e){for(const n in e)t[n]=e[n];return t}function Z(t){return t()}function X(){return Object.create(null)}function w(t){t.forEach(Z)}function z(t){return typeof t=="function"}function Lt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let D;function Tt(t,e){return D||(D=document.createElement("a")),D.href=e,t===D.href}function dt(t){return Object.keys(t).length===0}function ht(t,...e){if(t==null)return v;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function zt(t,e,n){t.$$.on_destroy.push(ht(e,n))}function Bt(t,e,n,i){if(t){const r=tt(t,e,n,i);return t[0](r)}}function tt(t,e,n,i){return t[1]&&i?_t(n.ctx.slice(),t[1](i(e))):n.ctx}function Ft(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)l[o]=e.dirty[o]|r[o];return l}return e.dirty|r}return e.dirty}function Ht(t,e,n,i,r,l){if(r){const s=tt(e,n,i,l);t.p(s,r)}}function It(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Wt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Gt(t,e,n){return t.set(n),e}const et=typeof window!="undefined";let G=et?()=>window.performance.now():()=>Date.now(),J=et?t=>requestAnimationFrame(t):v;const k=new Set;function nt(t){k.forEach(e=>{e.c(t)||(k.delete(e),e.f())}),k.size!==0&&J(nt)}function K(t){let e;return k.size===0&&J(nt),{promise:new Promise(n=>{k.add(e={c:t,f:n})}),abort(){k.delete(e)}}}let B=!1;function mt(){B=!0}function pt(){B=!1}function yt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function gt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,_=(r>0&&e[n[r]].claim_order<=u?r+1:yt(1,r,a=>e[n[a]].claim_order,u))-1;i[c]=n[_]+1;const f=_+1;n[f]=c,r=Math.max(f,r)}const l=[],s=[];let o=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);l.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<l.length&&s[c].claim_order>=l[u].claim_order;)u++;const _=u<l.length?l[u]:null;t.insertBefore(s[c],_)}}function bt(t,e){t.appendChild(e)}function it(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $t(t){const e=rt("style");return xt(it(t),e),e.sheet}function xt(t,e){bt(t.head||t,e)}function vt(t,e){if(B){for(gt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Jt(t,e,n){B&&!n?vt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function wt(t){t.parentNode.removeChild(t)}function Kt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function rt(t){return document.createElement(t)}function kt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Q(t){return document.createTextNode(t)}function Qt(){return Q(" ")}function Ut(){return Q("")}function Vt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Xt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Et(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Yt(t,e){for(const n in e)Et(t,n,e[n])}function Zt(t,e,n){const i=new Set;for(let r=0;r<t.length;r+=1)t[r].checked&&i.add(t[r].__value);return n||i.delete(e),Array.from(i)}function te(t){return t===""?null:+t}function At(t){return Array.from(t.childNodes)}function Nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function st(t,e,n,i,r=!1){Nt(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function ct(t,e,n,i){return st(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||l.push(o.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function ee(t,e,n){return ct(t,e,n,rt)}function ne(t,e,n){return ct(t,e,n,kt)}function St(t,e){return st(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Q(e),!0)}function ie(t){return St(t," ")}function re(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function se(t,e){t.value=e==null?"":e}function ce(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function le(t,e,n){t.classList[n?"add":"remove"](e)}function lt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function oe(t,e=document.body){return Array.from(e.querySelectorAll(t))}const R=new Map;let O=0;function Ct(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:$t(e),rules:{}};return R.set(t,n),n}function L(t,e,n,i,r,l,s,o=0){const c=16.666/i;let u=`{
`;for(let m=0;m<=1;m+=c){const g=e+(n-e)*l(m);u+=m*100+`%{${s(g,1-g)}}
`}const _=u+`100% {${s(n,1-n)}}
}`,f=`__svelte_${Ct(_)}_${o}`,a=it(t),{stylesheet:d,rules:h}=R.get(a)||jt(a,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${r}ms 1 both`,O+=1,f}function T(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),O-=r,O||Dt())}function Dt(){J(()=>{O||(R.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),R.clear())})}let j;function C(t){j=t}function A(){if(!j)throw new Error("Function called outside component initialization");return j}function ue(t){A().$$.on_mount.push(t)}function ae(t){A().$$.after_update.push(t)}function fe(t){A().$$.on_destroy.push(t)}function _e(){const t=A();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const l=lt(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,l)}),!l.defaultPrevented}return!0}}function de(t,e){return A().$$.context.set(t,e),e}function he(t){return A().$$.context.get(t)}const S=[],Y=[],q=[],H=[],ot=Promise.resolve();let I=!1;function ut(){I||(I=!0,ot.then(at))}function me(){return ut(),ot}function E(t){q.push(t)}function pe(t){H.push(t)}const F=new Set;let M=0;function at(){const t=j;do{for(;M<S.length;){const e=S[M];M++,C(e),Mt(e.$$)}for(C(null),S.length=0,M=0;Y.length;)Y.pop()();for(let e=0;e<q.length;e+=1){const n=q[e];F.has(n)||(F.add(n),n())}q.length=0}while(S.length);for(;H.length;)H.pop()();I=!1,F.clear(),C(t)}function Mt(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}let N;function U(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function x(t,e,n){t.dispatchEvent(lt(`${e?"intro":"outro"}${n}`))}const P=new Set;let y;function ye(){y={r:0,c:[],p:y}}function ge(){y.r||w(y.c),y=y.p}function qt(t,e){t&&t.i&&(P.delete(t),t.i(e))}function be(t,e,n,i){if(t&&t.o){if(P.has(t))return;P.add(t),y.c.push(()=>{P.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const V={duration:0};function $e(t,e,n){let i=e(t,n),r=!1,l,s,o=0;function c(){l&&T(t,l)}function u(){const{delay:f=0,duration:a=300,easing:d=W,tick:h=v,css:p}=i||V;p&&(l=L(t,0,1,a,f,d,p,o++)),h(0,1);const m=G()+f,g=m+a;s&&s.abort(),r=!0,E(()=>x(t,!0,"start")),s=K(b=>{if(r){if(b>=g)return h(1,0),x(t,!0,"end"),c(),r=!1;if(b>=m){const $=d((b-m)/a);h($,1-$)}}return r})}let _=!1;return{start(){_||(_=!0,T(t),z(i)?(i=i(),U().then(u)):u())},invalidate(){_=!1},end(){r&&(c(),r=!1)}}}function xe(t,e,n){let i=e(t,n),r=!0,l;const s=y;s.r+=1;function o(){const{delay:c=0,duration:u=300,easing:_=W,tick:f=v,css:a}=i||V;a&&(l=L(t,1,0,u,c,_,a));const d=G()+c,h=d+u;E(()=>x(t,!1,"start")),K(p=>{if(r){if(p>=h)return f(0,1),x(t,!1,"end"),--s.r||w(s.c),!1;if(p>=d){const m=_((p-d)/u);f(1-m,m)}}return r})}return z(i)?U().then(()=>{i=i(),o()}):o(),{end(c){c&&i.tick&&i.tick(1,0),r&&(l&&T(t,l),r=!1)}}}function ve(t,e,n,i){let r=e(t,n),l=i?0:1,s=null,o=null,c=null;function u(){c&&T(t,c)}function _(a,d){const h=a.b-l;return d*=Math.abs(h),{a:l,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:p=W,tick:m=v,css:g}=r||V,b={start:G()+d,b:a};a||(b.group=y,y.r+=1),s||o?o=b:(g&&(u(),c=L(t,l,a,h,d,p,g)),a&&m(0,1),s=_(b,h),E(()=>x(t,a,"start")),K($=>{if(o&&$>o.start&&(s=_(o,h),o=null,x(t,s.b,"start"),g&&(u(),c=L(t,l,s.b,s.duration,0,p,r.css))),s){if($>=s.end)m(l=s.b,1-l),x(t,s.b,"end"),o||(s.b?u():--s.group.r||w(s.group.c)),s=null;else if($>=s.start){const ft=$-s.start;l=s.a+s.d*p(ft/s.duration),m(l,1-l)}}return!!(s||o)}))}return{run(a){z(r)?U().then(()=>{r=r(),f(a)}):f(a)},end(){u(),s=o=null}}}function we(t,e){const n={},i={},r={$$scope:1};let l=t.length;for(;l--;){const s=t[l],o=e[l];if(o){for(const c in s)c in o||(i[c]=1);for(const c in o)r[c]||(n[c]=o[c],r[c]=1);t[l]=o}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function ke(t){return typeof t=="object"&&t!==null?t:{}}function Ee(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ae(t){t&&t.c()}function Ne(t,e){t&&t.l(e)}function Pt(t,e,n,i){const{fragment:r,on_mount:l,on_destroy:s,after_update:o}=t.$$;r&&r.m(e,n),i||E(()=>{const c=l.map(Z).filter(z);s?s.push(...c):w(c),t.$$.on_mount=[]}),o.forEach(E)}function Rt(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(t,e){t.$$.dirty[0]===-1&&(S.push(t),ut(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Se(t,e,n,i,r,l,s,o=[-1]){const c=j;C(t);const u=t.$$={fragment:null,ctx:null,props:l,update:v,not_equal:r,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:X(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};s&&s(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return u.ctx&&r(u.ctx[f],u.ctx[f]=h)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](h),_&&Ot(t,f)),a}):[],u.update(),_=!0,w(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){mt();const f=At(e.target);u.fragment&&u.fragment.l(f),f.forEach(wt)}else u.fragment&&u.fragment.c();e.intro&&qt(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),pt(),at()}C(c)}class Ce{$destroy(){Rt(this,1),this.$destroy=v}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ve as $,we as A,ke as B,Rt as C,_t as D,me as E,Tt as F,vt as G,kt as H,ne as I,le as J,Vt as K,w as L,zt as M,Bt as N,Ht as O,It as P,Ft as Q,Gt as R,Ce as S,he as T,Yt as U,fe as V,Wt as W,_e as X,Kt as Y,W as Z,E as _,At as a,$e as a0,xe as a1,oe as a2,se as a3,Xt as a4,pe as a5,Y as a6,Ee as a7,Zt as a8,te as a9,Et as b,ee as c,wt as d,rt as e,ce as f,Jt as g,St as h,Se as i,re as j,Qt as k,Ut as l,ie as m,v as n,ye as o,be as p,ge as q,qt as r,Lt as s,Q as t,de as u,ae as v,ue as w,Ae as x,Ne as y,Pt as z};
