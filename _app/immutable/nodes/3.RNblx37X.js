import{_ as j}from"../chunks/preload-helper.D6kgxu3v.js";import{s as S,n as I,o as C,b as x}from"../chunks/scheduler.Bmg8oFKD.js";import{S as L,i as H,e as g,s as _,c as v,h as T,g as w,a as k,f as y,b as f,z as b,d as P,k as p}from"../chunks/index.DT6_L_I0.js";import{s as E}from"../chunks/IMG_0853.CzKBXOMN.js";const A=""+new URL("../assets/1712593503122.DoITKJSR.jpg",import.meta.url).href;function z(c){let r,o,m=`<div class="parallax"><img src="${E}" class="object-cover" alt="In front of the sun."/></div>`,d,a,e,h='<h2>Hello, there!</h2> <h3 class="relative">I&#39;m an aspiring software developer.</h3> <hr class="mt-10"/>',u,i,n=`<img src="${A}" alt="Portrait of Trent." class="w-1/5 rounded-full float-left mr-10 mb-5 shadow-black shadow-xl"/> <h5>A little about me...</h5> <p class="svelte-tjc1gx">My name is Trent. I&#39;m graduating from the University of Toronto with a major in computer science and minors in environmental studies and statistics. I&#39;m passionate about software development, data science, and environmental sustainability. I am always looking for opportunities to learn and grow. I&#39;m seeking a full-time position in software development or data science. I would be honoured to have the chance to work with you.</p> <p class="svelte-tjc1gx">I have been programming since I was around ten years old. My first programming language was Java, which I used to develop Minecraft mods as a very light hobby. Around the same time, I learned to make games using LWJGL, a Java game development library and later moved on to learning Unity. However, I also immediately became fascinated with web development. My first website was made using pure HTML and CSS using Adobe Dreamweaver, a now-defunct software initially used for creating, viewing, and testing sites in real time.</p> <p class="svelte-tjc1gx">In high school, I began to learn the basics of JavaScript while also getting back to game development. With a pixel artist, I helped design a detailed two-dimensional story-based game built using Processing, a Java-based graphics library. That was my passion project at the time. I was elected the lead programmer of North Toronto Collegiate Institute&#39;s VEX robotics team in 2018. I performed excellently in developing and testing an autonomous system for our robot.</p> <p class="svelte-tjc1gx">A couple of years later, I was accepted into the computer science program at the University of Toronto&#39;s St. George campus. At this time, I had no idea what I wanted to do with my life, but my calling was always something related to computers. I found joy in simply helping people fix computer-related problems and have been the go-to person for tech support among my family and close friends.</p> <h5>Academics and experience</h5> <p class="svelte-tjc1gx">Since being accepted into the computer science program, I have developed a foundation in data structures and algorithms and broadened my horizons by learning and improving my skills in various programming languages. I used C/C++, Java, Racket, Haskell, JavaScript/TypeScript, and Python in school. Part of my experience from school has been in writing code to train and test machine learning models. Most of the code I have written about machine learning uses PyTorch. I eventually finished my statistics minor; since then, I have taken courses from the School of the Environment, learning how to use data to model issues in environmental studies, which would later become my second minor.</p> <p class="svelte-tjc1gx">Since then, I have strengthened my ability to read and write code in Python and R and learned to use libraries like NumPy and Matplotlib, as well as complete frameworks such as Tableau, to analyze and visualize data. I have also learned to use libraries like scikit-learn to train and test machine learning models.</p> <p class="svelte-tjc1gx">I have experience in the Information Technology field, stemming from my time as a web developer intern at Canadian law firm Osler, Hoskin &amp; Harcourt, and my passion has continued to be web and full-stack development. I was the team lead in developing a banking tie-in microservice, when my team signed up to help with the new CheaprEats Centro student finance management app. For that project, I used TypeScript and the JSON RPC protocol, as well as MongoDB. I am open to using other frameworks and languages as well, and I consider myself qualified for positions in a large variety of roles, not just those in web development and infrastructure.</p> <h5>And by the way...</h5> <p class="svelte-tjc1gx">If you made it this far, thank you so much for reading my little blurb about myself! I am a passionate and driven programmer with room to improve in all areas, and I would love the opportunity to interview for your company.</p> <br/> <p class="svelte-tjc1gx">Best regards,</p> <p class="svelte-tjc1gx">Trent W. Thompson</p>`;return{c(){r=g("main"),o=g("div"),o.innerHTML=m,d=_(),a=g("div"),e=g("div"),e.innerHTML=h,u=_(),i=g("div"),i.innerHTML=n,this.h()},l(s){r=v(s,"MAIN",{});var t=T(r);o=v(t,"DIV",{class:!0,"data-svelte-h":!0}),w(o)!=="svelte-48ezo"&&(o.innerHTML=m),d=k(t),a=v(t,"DIV",{class:!0});var l=T(a);e=v(l,"DIV",{class:!0,"data-svelte-h":!0}),w(e)!=="svelte-d0hz67"&&(e.innerHTML=h),u=k(l),i=v(l,"DIV",{class:!0,"data-svelte-h":!0}),w(i)!=="svelte-137i0x3"&&(i.innerHTML=n),l.forEach(y),t.forEach(y),this.h()},h(){f(o,"class","parallax-container"),f(e,"class","relative bottom-6 fade-in-section transition-from-bottom"),b(e,"is-visible",c[0]),f(i,"class","mt-5 text-left fade-in-section transition-from-bottom"),b(i,"is-visible",c[1]),f(a,"class","flex flex-col w-screen justify-center text-center p-5 container")},m(s,t){P(s,r,t),p(r,o),p(r,d),p(r,a),p(a,e),c[4](e),p(a,u),p(a,i),c[5](i)},p(s,[t]){t&1&&b(e,"is-visible",s[0]),t&2&&b(i,"is-visible",s[1])},i:I,o:I,d(s){s&&y(r),c[4](null),c[5](null)}}}function J(c,r,o){let m=!1,d=!1,a,e;const h=n=>()=>{const s=document.querySelectorAll(".parallax");n.Parallax.init(s)};C(()=>{const n=new IntersectionObserver(t=>{t.forEach(l=>o(0,m=m||l.isIntersecting))}),s=new IntersectionObserver(t=>{t.forEach(l=>o(1,d=d||l.isIntersecting))});return n.observe(a),s.observe(e),(async()=>{const t=await j(()=>import("../chunks/materialize.DtHL2YfK.js").then(l=>l.m),[],import.meta.url);h(t)(),window.addEventListener("resize",h(t))})(),()=>{n.unobserve(a),s.unobserve(e),window.removeEventListener("resize",h(M))}});function u(n){x[n?"unshift":"push"](()=>{a=n,o(2,a)})}function i(n){x[n?"unshift":"push"](()=>{e=n,o(3,e)})}return[m,d,a,e,u,i]}class N extends L{constructor(r){super(),H(this,r,J,z,S,{})}}export{N as component};
