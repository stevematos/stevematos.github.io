import{T as t,_ as n,a as e,b as r,c as s,i as a,d as o,e as c,S as u,s as i,g as f,f as l,t as h,q as p,j as v,k as m,h as d,l as y,m as x,n as b,r as R,p as g,z as j,Q as w,u as k}from"./client.4695e6b1.js";function E(t,n,e,r,s,a,o){try{var c=t[a](o),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,s)}function H(t){return function(){var n=this,e=arguments;return new Promise((function(r,s){var a=t.apply(n,e);function o(t){E(a,r,s,o,c,"next",t)}function c(t){E(a,r,s,o,c,"throw",t)}o(void 0)}))}}function P(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,a=e(t);if(n){var o=e(this).constructor;s=Reflect.construct(a,arguments,o)}else s=a.apply(this,arguments);return r(this,s)}}function T(t){var n,e,r,s,a,o,c=t[0].title+"",u=t[0].html+"";return document.title=n=t[0].title,{c:function(){e=f(),r=l("h1"),s=h(c),a=f(),o=l("div"),this.h()},l:function(t){p('[data-svelte="svelte-1uty71u"]',document.head).forEach(v),e=m(t),r=d(t,"H1",{});var n=y(r);s=x(n,c),n.forEach(v),a=m(t),o=d(t,"DIV",{class:!0}),y(o).forEach(v),this.h()},h:function(){b(o,"class","content svelte-emm3f3")},m:function(t,n){R(t,e,n),R(t,r,n),g(r,s),R(t,a,n),R(t,o,n),o.innerHTML=u},p:function(t,e){var r=j(e,1)[0];1&r&&n!==(n=t[0].title)&&(document.title=n),1&r&&c!==(c=t[0].title+"")&&w(s,c),1&r&&u!==(u=t[0].html+"")&&(o.innerHTML=u)},i:k,o:k,d:function(t){t&&v(e),t&&v(r),t&&v(a),t&&v(o)}}}function B(t){return L.apply(this,arguments)}function L(){return(L=H(t.mark((function n(e){var r,s,a;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,t.next=3,this.fetch("blog/".concat(r.slug,".json"));case 3:return s=t.sent,t.next=6,s.json();case 6:if(a=t.sent,200!==s.status){t.next=11;break}return t.abrupt("return",{post:a});case 11:this.error(s.status,a.message);case 12:case"end":return t.stop()}}),n,this)})))).apply(this,arguments)}function M(t,n,e){var r=n.post;return t.$$set=function(t){"post"in t&&e(0,r=t.post)},[r]}var $=function(t){n(r,u);var e=P(r);function r(t){var n;return s(this,r),n=e.call(this),a(o(n),t,M,T,i,{post:0}),n}return c(r)}();export{$ as default,B as preload};