function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c;function a(t,e){return c||(c=document.createElement("a")),c.href=e,t===c.href}function l(t,e,n,r){if(t){const o=f(t,e,n,r);return t[0](o)}}function f(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function u(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}function h(t,e,n,r,o,s){if(o){const i=f(e,n,r,s);t.p(i,o)}}function d(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function p(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function m(t,e){const n={};e=new Set(e);for(const r in t)e.has(r)||"$"===r[0]||(n[r]=t[r]);return n}let g,v=!1;function $(t,e,n,r){for(;t<e;){const o=t+(e-t>>1);n(o)<=r?t=o+1:e=o}return t}function _(t,e){if(v){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const r=e[n];void 0!==r.claim_order&&t.push(r)}e=t}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let o=0;for(let t=0;t<e.length;t++){const s=e[t].claim_order,i=(o>0&&e[n[o]].claim_order<=s?o+1:$(1,o,(t=>e[n[t]].claim_order),s))-1;r[t]=n[i]+1;const c=i+1;n[c]=t,o=Math.max(c,o)}const s=[],i=[];let c=e.length-1;for(let t=n[o]+1;0!=t;t=r[t-1]){for(s.push(e[t-1]);c>=t;c--)i.push(e[c]);c--}for(;c>=0;c--)i.push(e[c]);s.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<s.length&&i[e].claim_order>=s[n].claim_order;)n++;const r=n<s.length?s[n]:null;t.insertBefore(i[e],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function b(t,e,n){v&&!n?_(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function w(t){t.parentNode.removeChild(t)}function y(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function x(t){return document.createElement(t)}function E(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function k(){return S(" ")}function C(){return S("")}function N(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function A(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:N(t,r,e[r])}function P(t,e){for(const n in e)N(t,n,e[n])}function j(t){return Array.from(t.childNodes)}function R(t,e,n,r,o=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const s=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const s=t[r];if(e(s)){const e=n(s);return void 0===e?t.splice(r,1):t[r]=e,o||(t.claim_info.last_index=r),s}}for(let r=t.claim_info.last_index-1;r>=0;r--){const s=t[r];if(e(s)){const e=n(s);return void 0===e?t.splice(r,1):t[r]=e,o?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=r,s}}return r()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function I(t,e,n,r){return R(t,(t=>t.nodeName===e),(t=>{const e=[];for(let r=0;r<t.attributes.length;r++){const o=t.attributes[r];n[o.name]||e.push(o.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>r(e)))}function L(t,e,n){return I(t,e,n,x)}function O(t,e,n){return I(t,e,n,E)}function B(t,e){return R(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>S(e)),!0)}function H(t){return B(t," ")}function T(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function V(t,e=document.body){return Array.from(e.querySelectorAll(t))}function M(t){g=t}function U(){if(!g)throw new Error("Function called outside component initialization");return g}const q=[],J=[],z=[],Z=[],D=Promise.resolve();let K=!1;function F(t){z.push(t)}const G=new Set;let W=0;function Y(){const t=g;do{for(;W<q.length;){const t=q[W];W++,M(t),X(t.$$)}for(M(null),q.length=0,W=0;J.length;)J.pop()();for(let t=0;t<z.length;t+=1){const e=z[t];G.has(e)||(G.add(e),e())}z.length=0}while(q.length);for(;Z.length;)Z.pop()();K=!1,G.clear(),M(t)}function X(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}const Q=new Set;let tt;function et(){tt={r:0,c:[],p:tt}}function nt(){tt.r||o(tt.c),tt=tt.p}function rt(t,e){t&&t.i&&(Q.delete(t),t.i(e))}function ot(t,e,n,r){if(t&&t.o){if(Q.has(t))return;Q.add(t),tt.c.push((()=>{Q.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function st(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=e[s];if(c){for(const t in i)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in i)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function it(t){return"object"==typeof t&&null!==t?t:{}}function ct(t){t&&t.c()}function at(t,e){t&&t.l(e)}function lt(t,e,r,i){const{fragment:c,on_mount:a,on_destroy:l,after_update:f}=t.$$;c&&c.m(e,r),i||F((()=>{const e=a.map(n).filter(s);l?l.push(...e):o(e),t.$$.on_mount=[]})),f.forEach(F)}function ft(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){-1===t.$$.dirty[0]&&(q.push(t),K||(K=!0,D.then(Y)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ht(e,n,s,i,c,a,l,f=[-1]){const u=g;M(e);const h=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(u?u.$$.context:[])),callbacks:r(),dirty:f,skip_bound:!1,root:n.target||u.$$.root};l&&l(h.root);let d=!1;if(h.ctx=s?s(e,n.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),d&&ut(e,t)),n})):[],h.update(),d=!0,o(h.before_update),h.fragment=!!i&&i(h.ctx),n.target){if(n.hydrate){v=!0;const t=j(n.target);h.fragment&&h.fragment.l(t),t.forEach(w)}else h.fragment&&h.fragment.c();n.intro&&rt(e.$$.fragment),lt(e,n.target,n.anchor,n.customElement),v=!1,Y()}M(u)}class dt{$destroy(){ft(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const pt=[];function mt(e,n=t){let r;const o=new Set;function s(t){if(i(e,t)&&(e=t,r)){const t=!pt.length;for(const t of o)t[1](),pt.push(t,e);if(t){for(let t=0;t<pt.length;t+=2)pt[t][0](pt[t+1]);pt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,c=t){const a=[i,c];return o.add(a),1===o.size&&(r=n(s)||t),i(e),()=>{o.delete(a),0===o.size&&(r(),r=null)}}}}const gt={};function vt(n){let r,o,s=[{stroke:"currentColor"},{fill:"currentColor"},{"stroke-width":"0"},{viewBox:"0 0 1024 1024"},{height:"1em"},{width:"1em"},{xmlns:"http://www.w3.org/2000/svg"},n[0]],i={};for(let t=0;t<s.length;t+=1)i=e(i,s[t]);return{c(){r=E("svg"),o=E("path"),this.h()},l(t){r=O(t,"svg",{stroke:!0,fill:!0,"stroke-width":!0,viewBox:!0,height:!0,width:!0,xmlns:!0});var e=j(r);o=O(e,"path",{d:!0,stroke:!0}),j(o).forEach(w),e.forEach(w),this.h()},h(){N(o,"d","M946.5 505 560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"),N(o,"stroke","none"),P(r,i)},m(t,e){b(t,r,e),_(r,o)},p(t,[e]){P(r,i=st(s,[{stroke:"currentColor"},{fill:"currentColor"},{"stroke-width":"0"},{viewBox:"0 0 1024 1024"},{height:"1em"},{width:"1em"},{xmlns:"http://www.w3.org/2000/svg"},1&e&&t[0]]))},i:t,o:t,d(t){t&&w(r)}}}function $t(t,n,r){return t.$$set=t=>{r(0,n=e(e({},n),p(t)))},[n=p(n)]}class _t extends dt{constructor(t){super(),ht(this,t,$t,vt,i,{})}}function bt(n){let r,o,s=[{stroke:"currentColor"},{fill:"currentColor"},{"stroke-width":"0"},{viewBox:"0 0 1024 1024"},{height:"1em"},{width:"1em"},{xmlns:"http://www.w3.org/2000/svg"},n[0]],i={};for(let t=0;t<s.length;t+=1)i=e(i,s[t]);return{c(){r=E("svg"),o=E("path"),this.h()},l(t){r=O(t,"svg",{stroke:!0,fill:!0,"stroke-width":!0,viewBox:!0,height:!0,width:!0,xmlns:!0});var e=j(r);o=O(e,"path",{d:!0,stroke:!0}),j(o).forEach(w),e.forEach(w),this.h()},h(){N(o,"d","M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"),N(o,"stroke","none"),P(r,i)},m(t,e){b(t,r,e),_(r,o)},p(t,[e]){P(r,i=st(s,[{stroke:"currentColor"},{fill:"currentColor"},{"stroke-width":"0"},{viewBox:"0 0 1024 1024"},{height:"1em"},{width:"1em"},{xmlns:"http://www.w3.org/2000/svg"},1&e&&t[0]]))},i:t,o:t,d(t){t&&w(r)}}}function wt(t,n,r){return t.$$set=t=>{r(0,n=e(e({},n),p(t)))},[n=p(n)]}class yt extends dt{constructor(t){super(),ht(this,t,wt,bt,i,{})}}function xt(n){let r,o,s,i=[{stroke:"currentColor"},{fill:"none"},{"stroke-width":"0"},{viewBox:"0 0 24 24"},{height:"1em"},{width:"1em"},{xmlns:"http://www.w3.org/2000/svg"},n[0]],c={};for(let t=0;t<i.length;t+=1)c=e(c,i[t]);return{c(){r=E("svg"),o=E("path"),s=E("path"),this.h()},l(t){r=O(t,"svg",{stroke:!0,fill:!0,"stroke-width":!0,viewBox:!0,height:!0,width:!0,xmlns:!0});var e=j(r);o=O(e,"path",{d:!0,fill:!0,stroke:!0}),j(o).forEach(w),s=O(e,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0,stroke:!0}),j(s).forEach(w),e.forEach(w),this.h()},h(){N(o,"d","M7 18h10v-2H7v2ZM17 14H7v-2h10v2ZM7 10h4V8H7v2Z"),N(o,"fill","currentColor"),N(o,"stroke","none"),N(s,"fill-rule","evenodd"),N(s,"clip-rule","evenodd"),N(s,"d","M6 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a7 7 0 0 0-7-7H6Zm0 2h7v5h6v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm9 .1A5.009 5.009 0 0 1 18.584 7H15V4.1Z"),N(s,"fill","currentColor"),N(s,"stroke","none"),P(r,c)},m(t,e){b(t,r,e),_(r,o),_(r,s)},p(t,[e]){P(r,c=st(i,[{stroke:"currentColor"},{fill:"none"},{"stroke-width":"0"},{viewBox:"0 0 24 24"},{height:"1em"},{width:"1em"},{xmlns:"http://www.w3.org/2000/svg"},1&e&&t[0]]))},i:t,o:t,d(t){t&&w(r)}}}function Et(t,n,r){return t.$$set=t=>{r(0,n=e(e({},n),p(t)))},[n=p(n)]}class St extends dt{constructor(t){super(),ht(this,t,Et,xt,i,{})}}function kt(t){let e,n,r,o,s,i,c,a,l,f,u,h,d,p,m,g,v,$,y,E,C,A,P,R,I;return s=new _t({}),u=new yt({}),v=new St({}),{c(){e=x("nav"),n=x("ul"),r=x("li"),o=x("a"),ct(s.$$.fragment),i=S("\n                Home"),a=k(),l=x("li"),f=x("a"),ct(u.$$.fragment),h=S("\n                about"),p=k(),m=x("li"),g=x("a"),ct(v.$$.fragment),$=S("\n                resume"),E=k(),C=x("li"),A=x("a"),P=S("blog"),this.h()},l(t){e=L(t,"NAV",{});var c=j(e);n=L(c,"UL",{class:!0});var d=j(n);r=L(d,"LI",{class:!0});var _=j(r);o=L(_,"A",{"aria-current":!0,href:!0,class:!0});var b=j(o);at(s.$$.fragment,b),i=B(b,"\n                Home"),b.forEach(w),_.forEach(w),a=H(d),l=L(d,"LI",{class:!0});var y=j(l);f=L(y,"A",{"aria-current":!0,href:!0,class:!0});var x=j(f);at(u.$$.fragment,x),h=B(x,"\n                about"),x.forEach(w),y.forEach(w),p=H(d),m=L(d,"LI",{class:!0});var S=j(m);g=L(S,"A",{"aria-current":!0,href:!0,class:!0});var k=j(g);at(v.$$.fragment,k),$=B(k,"\n                resume"),k.forEach(w),S.forEach(w),E=H(d),C=L(d,"LI",{class:!0});var N=j(C);A=L(N,"A",{rel:!0,"aria-current":!0,href:!0,class:!0});var R=j(A);P=B(R,"blog"),R.forEach(w),N.forEach(w),d.forEach(w),c.forEach(w),this.h()},h(){N(o,"aria-current",c=void 0===t[0]?"page":void 0),N(o,"href","."),N(o,"class","svelte-1i9oi6r"),N(r,"class","svelte-1i9oi6r"),N(f,"aria-current",d="about"===t[0]?"page":void 0),N(f,"href","about"),N(f,"class","svelte-1i9oi6r"),N(l,"class","svelte-1i9oi6r"),N(g,"aria-current",y="resume"===t[0]?"resume":void 0),N(g,"href","resume"),N(g,"class","svelte-1i9oi6r"),N(m,"class","svelte-1i9oi6r"),N(A,"rel","prefetch"),N(A,"aria-current",R="blog"===t[0]?"page":void 0),N(A,"href","blog"),N(A,"class","svelte-1i9oi6r"),N(C,"class","svelte-1i9oi6r"),N(n,"class","svelte-1i9oi6r")},m(t,c){b(t,e,c),_(e,n),_(n,r),_(r,o),lt(s,o,null),_(o,i),_(n,a),_(n,l),_(l,f),lt(u,f,null),_(f,h),_(n,p),_(n,m),_(m,g),lt(v,g,null),_(g,$),_(n,E),_(n,C),_(C,A),_(A,P),I=!0},p(t,[e]){(!I||1&e&&c!==(c=void 0===t[0]?"page":void 0))&&N(o,"aria-current",c),(!I||1&e&&d!==(d="about"===t[0]?"page":void 0))&&N(f,"aria-current",d),(!I||1&e&&y!==(y="resume"===t[0]?"resume":void 0))&&N(g,"aria-current",y),(!I||1&e&&R!==(R="blog"===t[0]?"page":void 0))&&N(A,"aria-current",R)},i(t){I||(rt(s.$$.fragment,t),rt(u.$$.fragment,t),rt(v.$$.fragment,t),I=!0)},o(t){ot(s.$$.fragment,t),ot(u.$$.fragment,t),ot(v.$$.fragment,t),I=!1},d(t){t&&w(e),ft(s),ft(u),ft(v)}}}function Ct(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class Nt extends dt{constructor(t){super(),ht(this,t,Ct,kt,i,{segment:0})}}function At(t){let e,n,r,o,s,i;r=new Nt({props:{segment:t[0]}});const c=t[2].default,a=l(c,t,t[1],null);return{c(){e=x("link"),n=k(),ct(r.$$.fragment),o=k(),s=x("main"),a&&a.c(),this.h()},l(t){const i=V('[data-svelte="svelte-1841a0m"]',document.head);e=L(i,"LINK",{rel:!0,href:!0}),i.forEach(w),n=H(t),at(r.$$.fragment,t),o=H(t),s=L(t,"MAIN",{class:!0});var c=j(s);a&&a.l(c),c.forEach(w),this.h()},h(){N(e,"rel","stylesheet"),N(e,"href","https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"),N(s,"class","svelte-1uhnsl8")},m(t,c){_(document.head,e),b(t,n,c),lt(r,t,c),b(t,o,c),b(t,s,c),a&&a.m(s,null),i=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),r.$set(n),a&&a.p&&(!i||2&e)&&h(a,c,t,t[1],i?u(c,t[1],e,null):d(t[1]),null)},i(t){i||(rt(r.$$.fragment,t),rt(a,t),i=!0)},o(t){ot(r.$$.fragment,t),ot(a,t),i=!1},d(t){w(e),t&&w(n),ft(r,t),t&&w(o),t&&w(s),a&&a.d(t)}}}function Pt(t,e,n){let{$$slots:r={},$$scope:o}=e,{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[s,o,r]}class jt extends dt{constructor(t){super(),ht(this,t,Pt,At,i,{segment:0})}}function Rt(t){let e,n,r=t[1].stack+"";return{c(){e=x("pre"),n=S(r)},l(t){e=L(t,"PRE",{});var o=j(e);n=B(o,r),o.forEach(w)},m(t,r){b(t,e,r),_(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&T(n,r)},d(t){t&&w(e)}}}function It(e){let n,r,o,s,i,c,a,l,f,u=e[1].message+"";document.title=n=e[0];let h=e[2]&&e[1].stack&&Rt(e);return{c(){r=k(),o=x("h1"),s=S(e[0]),i=k(),c=x("p"),a=S(u),l=k(),h&&h.c(),f=C(),this.h()},l(t){V('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(w),r=H(t),o=L(t,"H1",{class:!0});var n=j(o);s=B(n,e[0]),n.forEach(w),i=H(t),c=L(t,"P",{class:!0});var d=j(c);a=B(d,u),d.forEach(w),l=H(t),h&&h.l(t),f=C(),this.h()},h(){N(o,"class","svelte-8od9u6"),N(c,"class","svelte-8od9u6")},m(t,e){b(t,r,e),b(t,o,e),_(o,s),b(t,i,e),b(t,c,e),_(c,a),b(t,l,e),h&&h.m(t,e),b(t,f,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&T(s,t[0]),2&e&&u!==(u=t[1].message+"")&&T(a,u),t[2]&&t[1].stack?h?h.p(t,e):(h=Rt(t),h.c(),h.m(f.parentNode,f)):h&&(h.d(1),h=null)},i:t,o:t,d(t){t&&w(r),t&&w(o),t&&w(i),t&&w(c),t&&w(l),h&&h.d(t),t&&w(f)}}}function Lt(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class Ot extends dt{constructor(t){super(),ht(this,t,Lt,It,i,{status:0,error:1})}}function Bt(t){let n,r,o;const s=[t[4].props];var i=t[4].component;function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return i&&(n=new i(c())),{c(){n&&ct(n.$$.fragment),r=C()},l(t){n&&at(n.$$.fragment,t),r=C()},m(t,e){n&&lt(n,t,e),b(t,r,e),o=!0},p(t,e){const o=16&e?st(s,[it(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){et();const t=n;ot(t.$$.fragment,1,0,(()=>{ft(t,1)})),nt()}i?(n=new i(c()),ct(n.$$.fragment),rt(n.$$.fragment,1),lt(n,r.parentNode,r)):n=null}else i&&n.$set(o)},i(t){o||(n&&rt(n.$$.fragment,t),o=!0)},o(t){n&&ot(n.$$.fragment,t),o=!1},d(t){t&&w(r),n&&ft(n,t)}}}function Ht(t){let e,n;return e=new Ot({props:{error:t[0],status:t[1]}}),{c(){ct(e.$$.fragment)},l(t){at(e.$$.fragment,t)},m(t,r){lt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(rt(e.$$.fragment,t),n=!0)},o(t){ot(e.$$.fragment,t),n=!1},d(t){ft(e,t)}}}function Tt(t){let e,n,r,o;const s=[Ht,Bt],i=[];function c(t,e){return t[0]?0:1}return e=c(t),n=i[e]=s[e](t),{c(){n.c(),r=C()},l(t){n.l(t),r=C()},m(t,n){i[e].m(t,n),b(t,r,n),o=!0},p(t,o){let a=e;e=c(t),e===a?i[e].p(t,o):(et(),ot(i[a],1,1,(()=>{i[a]=null})),nt(),n=i[e],n?n.p(t,o):(n=i[e]=s[e](t),n.c()),rt(n,1),n.m(r.parentNode,r))},i(t){o||(rt(n),o=!0)},o(t){ot(n),o=!1},d(t){i[e].d(t),t&&w(r)}}}function Vt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[Tt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new jt({props:s}),{c(){ct(n.$$.fragment)},l(t){at(n.$$.fragment,t)},m(t,e){lt(n,t,e),r=!0},p(t,[e]){const r=12&e?st(o,[4&e&&{segment:t[2][0]},8&e&&it(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(rt(n.$$.fragment,t),r=!0)},o(t){ot(n.$$.fragment,t),r=!1},d(t){ft(n,t)}}}function Mt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:i}=e,{level0:c}=e,{level1:a=null}=e,{notify:l}=e;var f,u,h;return f=l,U().$$.after_update.push(f),u=gt,h=r,U().$$.context.set(u,h),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,a=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,i,c,a,r,l]}class Ut extends dt{constructor(t){super(),ht(this,t,Mt,Vt,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const qt=[/^\/blog\.json$/,/^\/blog\/([^/]+?)\.json$/],Jt=[{js:()=>Promise.all([import("./index.2fbcdccb.js"),__inject_styles(["client-ca3e8492.css","index-74da05bc.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./resume.f9f149f5.js"),__inject_styles(["client-ca3e8492.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./about.e71c73b9.js"),__inject_styles(["client-ca3e8492.css","about-8f1daf66.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.c8d919c1.js"),__inject_styles(["client-ca3e8492.css","index-7ed37c94.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_slug_.2c951410.js"),__inject_styles(["client-ca3e8492.css","_slug_-5bc8f95f.css"])]).then((function(t){return t[0]}))}],zt=(Zt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/resume\/?$/,parts:[{i:1}]},{pattern:/^\/about\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/?$/,parts:[{i:3}]},{pattern:/^\/blog\/([^/]+?)\/?$/,parts:[null,{i:4,params:t=>({slug:Zt(t[1])})}]}]);var Zt;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Dt(t,e,n,r){return new(n||(n=Promise))((function(o,s){function i(t){try{a(r.next(t))}catch(t){s(t)}}function c(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}a((r=r.apply(t,e||[])).next())}))}function Kt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let Ft,Gt=1;const Wt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},Yt={};let Xt,Qt;function te(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function ee(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Xt))return null;let e=t.pathname.slice(Xt.length);if(""===e&&(e="/"),!qt.some((t=>t.test(e))))for(let n=0;n<zt.length;n+=1){const r=zt[n],o=r.pattern.exec(e);if(o){const n=te(t.search),s=r.parts[r.parts.length-1],i=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:i};return{href:t.href,route:r,match:o,page:c}}}}function ne(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Kt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=ee(o);if(s){se(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),Wt.pushState({id:Ft},"",o.href)}}function re(){return{x:pageXOffset,y:pageYOffset}}function oe(t){if(Yt[Ft]=re(),t.state){const e=ee(new URL(location.href));e?se(e,t.state.id):location.href=location.href}else Gt=Gt+1,function(t){Ft=t}(Gt),Wt.replaceState({id:Ft},"",location.href)}function se(t,e,n,r){return Dt(this,void 0,void 0,(function*(){const o=!!e;if(o)Ft=e;else{const t=re();Yt[Ft]=t,Ft=e=++Gt,Yt[Ft]=n?t:{x:0,y:0}}if(yield Qt(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=Yt[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),Yt[Ft]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function ie(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let ce,ae=null;function le(t){const e=Kt(t.target);e&&"prefetch"===e.rel&&function(t){const e=ee(new URL(t,ie(document)));if(e)ae&&t===ae.href||(ae={href:t,promise:ke(e)}),ae.promise}(e.href)}function fe(t){clearTimeout(ce),ce=setTimeout((()=>{le(t)}),20)}function ue(t,e={noscroll:!1,replaceState:!1}){const n=ee(new URL(t,ie(document)));return n?(Wt[e.replaceState?"replaceState":"pushState"]({id:Ft},"",t),se(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const he="undefined"!=typeof __SAPPER__&&__SAPPER__;let de,pe,me,ge=!1,ve=[],$e="{}";const _e={page:function(t){const e=mt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:mt(null),session:mt(he&&he.session)};let be,we,ye;function xe(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Ee(t){return Dt(this,void 0,void 0,(function*(){de&&_e.preloading.set(!0);const e=function(t){return ae&&ae.href===t.href?ae.promise:ke(t)}(t),n=pe={},r=yield e,{redirect:o}=r;if(n===pe)if(o)yield ue(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield Se(n,e,xe(e,t.page))}}))}function Se(t,e,n){return Dt(this,void 0,void 0,(function*(){_e.page.set(n),_e.preloading.set(!1),de?de.$set(e):(e.stores={page:{subscribe:_e.page.subscribe},preloading:{subscribe:_e.preloading.subscribe},session:_e.session},e.level0={props:yield me},e.notify=_e.page.notify,de=new Ut({target:ye,props:e,hydrate:!0})),ve=t,$e=JSON.stringify(n.query),ge=!0,we=!1}))}function ke(t){return Dt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!me){const t=()=>({});me=he.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},be)}let c,a=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let f=!1;c=yield Promise.all(e.parts.map(((e,c)=>Dt(this,void 0,void 0,(function*(){const u=r[c];if(function(t,e,n,r){if(r!==$e)return!0;const o=ve[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,u,l,o)&&(f=!0),s.segments[a]=r[c+1],!e)return{segment:u};const h=a++;if(!we&&!f&&ve[c]&&ve[c].part===e.i)return ve[c];f=!1;const{default:d,preload:p}=yield Jt[e.i].js();let m;return m=ge||!he.preloaded[c+1]?p?yield p.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},be):{}:he.preloaded[c+1],s[`level${h}`]={component:d,props:m,segment:u,match:l,part:e.i}})))))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}))}var Ce,Ne,Ae;_e.session.subscribe((t=>Dt(void 0,void 0,void 0,(function*(){if(be=t,!ge)return;we=!0;const e=ee(new URL(location.href)),n=pe={},{redirect:r,props:o,branch:s}=yield ke(e);n===pe&&(r?yield ue(r.location,{replaceState:!0}):yield Se(s,o,xe(o,e.page)))})))),Ce={target:document.querySelector("#sapper")},Ne=Ce.target,ye=Ne,Ae=he.baseUrl,Xt=Ae,Qt=Ee,"scrollRestoration"in Wt&&(Wt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{Wt.scrollRestoration="auto"})),addEventListener("load",(()=>{Wt.scrollRestoration="manual"})),addEventListener("click",ne),addEventListener("popstate",oe),addEventListener("touchstart",le),addEventListener("mousemove",fe),he.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:i}=he;me||(me=o&&o[0]);const c={error:i,status:s,session:r,level0:{props:me},level1:{props:{status:s,error:i},component:Ot},segments:o},a=te(n);Se([],c,{host:t,path:e,query:a,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;Wt.replaceState({id:Gt},"",e);const n=ee(new URL(location.href));if(n)return se(n,Gt,!0,t)}));export{p as A,J as B,ct as C,at as D,lt as E,ft as F,E as G,O as H,T as I,y as J,dt as S,k as a,H as b,L as c,w as d,x as e,j as f,B as g,N as h,ht as i,a as j,_ as k,b as l,l as m,t as n,e as o,A as p,V as q,d as r,i as s,S as t,h as u,u as v,st as w,rt as x,ot as y,m as z};

import __inject_styles from './inject_styles.5607aec6.js';