<script lang="ts">
  import { onMount } from 'svelte';
  import 'materialize-css/dist/css/materialize.min.css';

  import sunImage from '$lib/images/IMG_0853.jpg';
  import portrait from '$lib/images/1712593503122.jpg'

  let isIntroInView = false;
  let isContentInView = false;

  let introRef: HTMLDivElement;
  let contentRef: HTMLDivElement;

  const onResize = (materializeInstance: any) => {
    return () => {
      const parallax = document.querySelectorAll('.parallax');
      materializeInstance.Parallax.init(parallax);
    }
  }

  onMount(() => {
    const introObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => isIntroInView = isIntroInView || entry.isIntersecting);
    });
    const contentObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => isContentInView = isContentInView || entry.isIntersecting);
    });
    introObserver.observe(introRef);
    contentObserver.observe(contentRef);

    (async () => {
      const M = await import('materialize-css');
      onResize(M)();
      window.addEventListener('resize', onResize(M));
    })();

    return () => {
      introObserver.unobserve(introRef);
      contentObserver.unobserve(contentRef);
      window.removeEventListener('resize', onResize(M));
    };
  });
</script>

<style lang="postcss">
  p {
    margin-top: 1rem;
  }
</style>
<main>
  <div class="parallax-container">
    <div class="parallax">
      <img src={sunImage} class="object-cover" alt="In front of the sun.">
    </div>
  </div>
  <div class="flex flex-col w-screen justify-center text-center p-5 container">
    <div bind:this={introRef} class="relative bottom-6 fade-in-section transition-from-bottom" class:is-visible={isIntroInView}>
      <h2>Hello, there!</h2>
      <h3 class="relative">I'm an aspiring software developer.</h3>
      <hr class="mt-10" />
    </div>
    <div bind:this={contentRef} class="mt-5 text-left fade-in-section transition-from-bottom" class:is-visible={isContentInView}>
      <img src={portrait} alt="Portrait of Trent." class="w-1/5 rounded-full float-left mr-10 mb-5 shadow-black shadow-xl" />
      <h5>A little about me...</h5>
      <p>
        My name is Trent. I'm graduating from the University of Toronto with a major in computer science and minors in environmental studies and statistics. I'm passionate about software development, data science, and environmental sustainability. I am always looking for opportunities to learn and grow. I'm seeking a full-time position in software development or data science. I would be honoured to have the chance to work with you.
      </p>
      <p>
        I have been programming since I was around ten years old. My first programming language was Java, which I used to develop Minecraft mods as a very light hobby. Around the same time, I learned to make games using LWJGL, a Java game development library and later moved on to learning Unity. However, I also immediately became fascinated with web development. My first website was made using pure HTML and CSS using Adobe Dreamweaver, a now-defunct software initially used for creating, viewing, and testing sites in real time.
      </p>
      <p>
        In high school, I began to learn the basics of JavaScript while also getting back to game development. With a pixel artist, I helped design a detailed two-dimensional story-based game built using Processing, a Java-based graphics library. That was my passion project at the time. I was elected the lead programmer of North Toronto Collegiate Institute's VEX robotics team in 2018. I performed excellently in developing and testing an autonomous system for our robot.
      </p>
      <p>
        A couple of years later, I was accepted into the computer science program at the University of Toronto's St. George campus. At this time, I had no idea what I wanted to do with my life, but my calling was always something related to computers. I found joy in simply helping people fix computer-related problems and have been the go-to person for tech support among my family and close friends.
      </p>
      <h5>Academics and experience</h5>
      <p>
        Since being accepted into the computer science program, I have developed a foundation in data structures and algorithms and broadened my horizons by learning and improving my skills in various programming languages. I used C/C++, Java, Racket, Haskell, JavaScript/TypeScript, and Python in school. Part of my experience from school has been in writing code to train and test machine learning models. Most of the code I have written about machine learning uses PyTorch. I eventually finished my statistics minor; since then, I have taken courses from the School of the Environment, learning how to use data to model issues in environmental studies, which would later become my second minor.
      </p>
      <p>
        Since then, I have strengthened my ability to read and write code in Python and R and learned to use libraries like NumPy and Matplotlib, as well as complete frameworks such as Tableau, to analyze and visualize data. I have also learned to use libraries like scikit-learn to train and test machine learning models.
      </p>
      <p>
        I have experience in the Information Technology field, stemming from my time as a web developer intern at Canadian law firm Osler, Hoskin & Harcourt, and my passion has continued to be web and full-stack development. I was the team lead in developing a banking tie-in microservice, when my team signed up to help with the new CheaprEats Centro student finance management app. For that project, I used TypeScript and the JSON RPC protocol, as well as MongoDB. I am open to using other frameworks and languages as well, and I consider myself qualified for positions in a large variety of roles, not just those in web development and infrastructure.
      </p>
      <h5>And by the way...</h5>
      <p>
        If you made it this far, thank you so much for reading my little blurb about myself! I am a passionate and driven programmer with room to improve in all areas, and I would love the opportunity to interview for your company.
      </p>
      <br />
      <p>
        Best regards,
      </p>
      <p>
        Trent W. Thompson
      </p>
    </div>
  </div>
</main>