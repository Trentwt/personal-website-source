import{R as y}from"../chunks/control.CYgJF_JY.js";import{s as S,d as $,u as w,g as T,e as x}from"../chunks/scheduler.Bmg8oFKD.js";import{S as M,i as C,e as d,s as v,c as h,g,a as b,h as E,f as u,b as H,d as p,p as L,n as j}from"../chunks/index.DT6_L_I0.js";function O(n,t){throw new y(n,t.toString())}new TextEncoder;const R=!0,z="always";async function A({url:n}){if(n.pathname==="/")return O(308,"/about")}const F=Object.freeze(Object.defineProperty({__proto__:null,load:A,prerender:R,trailingSlash:z},Symbol.toStringTag,{value:"Module"}));function k(n){let t,m='<nav class="white"><div class="flex flex-row nav-wrapper container"><ul class="flex w-full justify-center space-x-3"><li><a href="/about" class="text-black">About me</a></li> <li><a href="/contact" class="text-black">Contact</a></li></ul></div></nav>',i,r,o,l,f='<p>© 2024 Trent W. Thompson</p> <p>Built using TypeScript and Svelte</p> <p>CSS courtesy of <a href="https://materializecss.com/">Materialize</a>, Material Icons and Tailwind</p>',c;const _=n[3].default,a=$(_,n,n[2],null);return{c(){t=d("header"),t.innerHTML=m,i=v(),r=d("main"),a&&a.c(),o=v(),l=d("footer"),l.innerHTML=f,this.h()},l(e){t=h(e,"HEADER",{"data-svelte-h":!0}),g(t)!=="svelte-1pvfsyb"&&(t.innerHTML=m),i=b(e),r=h(e,"MAIN",{});var s=E(r);a&&a.l(s),s.forEach(u),o=b(e),l=h(e,"FOOTER",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-6hjfbu"&&(l.innerHTML=f),this.h()},h(){H(l,"class","w-full mt-5 p-8 bg-gray-200")},m(e,s){p(e,t,s),p(e,i,s),p(e,r,s),a&&a.m(r,null),p(e,o,s),p(e,l,s),c=!0},p(e,[s]){a&&a.p&&(!c||s&4)&&w(a,_,e,e[2],c?x(_,e[2],s,null):T(e[2]),null)},i(e){c||(L(a,e),c=!0)},o(e){j(a,e),c=!1},d(e){e&&(u(t),u(i),u(r),u(o),u(l)),a&&a.d(e)}}}function I(n,t,m){let{$$slots:i={},$$scope:r}=t;const o=!0,l="always";return n.$$set=f=>{"$$scope"in f&&m(2,r=f.$$scope)},[o,l,r,i]}class N extends M{constructor(t){super(),C(this,t,I,k,S,{prerender:0,trailingSlash:1})}get prerender(){return this.$$.ctx[0]}get trailingSlash(){return this.$$.ctx[1]}}export{N as component,F as universal};
