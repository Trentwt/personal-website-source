import{_ as p}from"../chunks/preload-helper.D6kgxu3v.js";import{s as x,n as l,o as _}from"../chunks/scheduler.Bmg8oFKD.js";import{S as h,i as b,e as f,s as g,c as u,g as d,a as w,b as v,d as r,f as o}from"../chunks/index.DT6_L_I0.js";import{s as y}from"../chunks/IMG_0853.CzKBXOMN.js";function L(m){let e,i=`<div class="parallax"><img src="${y}" class="object-cover" alt="In front of the sun."/></div>`,a,s,c=`<div class="mt-5 flex flex-col text-center w-full"><h4>Leave a message for me!</h4></div> <form action="https://formspree.io/f/xyyroddv" method="POST"><label>Your email:
      <input type="email" name="email"/></label> <label>Your message for me:
      <textarea class="materialize-textarea" name="message"></textarea></label> <div class="mt-5 flex flex-auto align-middle justify-center"><button class="btn waves-effect waves-light w-40" type="submit" name="action">Submit
        <i class="material-icons right">send</i></button></div></form>`;return{c(){e=f("div"),e.innerHTML=i,a=g(),s=f("div"),s.innerHTML=c,this.h()},l(t){e=u(t,"DIV",{class:!0,"data-svelte-h":!0}),d(e)!=="svelte-15f32w4"&&(e.innerHTML=i),a=w(t),s=u(t,"DIV",{class:!0,"data-svelte-h":!0}),d(s)!=="svelte-2y0s6r"&&(s.innerHTML=c),this.h()},h(){v(e,"class","parallax-container"),v(s,"class","container")},m(t,n){r(t,e,n),r(t,a,n),r(t,s,n)},p:l,i:l,o:l,d(t){t&&(o(e),o(a),o(s))}}}function T(m){const e=i=>()=>{const a=document.querySelectorAll(".parallax");i.Parallax.init(a)};return _(()=>((async()=>{const i=await p(()=>import("../chunks/materialize.DtHL2YfK.js").then(a=>a.m),[],import.meta.url);e(i)(),window.addEventListener("resize",e(i))})(),()=>{window.removeEventListener("resize",e(M))})),[]}class E extends h{constructor(e){super(),b(this,e,T,L,x,{})}}export{E as component};