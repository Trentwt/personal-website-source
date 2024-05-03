<script lang="ts">
  import { onMount } from 'svelte';
  import 'materialize-css/dist/css/materialize.min.css';

  import sunImage from '$lib/images/IMG_0853.jpg';
  import portrait from '$lib/images/1712593503122.jpg'

  onMount(async () => {
    const M = await import('materialize-css');
    const parallax = document.querySelectorAll('.parallax');
    M.Parallax.init(parallax);

    window.addEventListener('resize', () => {
      const parallax = document.querySelectorAll('.parallax');
      M.Parallax.init(parallax);
    });
  });
</script>

<style lang="postcss">
  p {
    margin-top: 1rem;
  }
</style>

<main>
  <nav class="white">
    <div class="flex flex-row nav-wrapper container">
      <ul class="flex w-full justify-center space-x-3">
        <li>
          <a href="/about" class="text-black">About me</a>
        </li>
        <li>
          <a href="/contact" class="text-black">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="parallax-container">
    <div class="parallax">
      <img src={sunImage} alt="In front of the sun.">
    </div>
  </div>
  <div class="flex flex-col w-screen justify-center text-center p-5 container">
    <div class="relative bottom-6">
      <h2>Hello, there!</h2>
      <h3 class="relative">I'm an aspiring software developer.</h3>
      <hr />
    </div>
    <div class="mt-5 text-left">
      <img src={portrait} alt="Portrait of Trent." class="w-1/5 rounded-full float-left mr-10 shadow-black shadow-xl" />
      <h5>A little about me...</h5>
      <p>
        My name is Trent. I'm currently in the process of graduating from the University of Toronto with a major in computer science and minors in environmental studies and statistics.
        I'm passionate about software development, data science, and environmental sustainability. I'm always looking for opportunities to learn and grow. I'm currently seeking a full-time position in software development or data science.
        I would be honoured to have the chance to work with you.
      </p>
      <p>
        I have been programming since around 10 years old. My first programming language was Java, which I used to develop minecraft mods as a very light hobby. Around the same time I learned to make games using LWJGL, a Java game development library, and later moved onto learning Unity.
        However I did not find much of a footing in the game development field, as I immediately became fascinated with web development. My first website was made using pure HTML and CSS using Adobe Dreamweaver, a now defunct software originally used for making, viewing, and testing websites in real time.
      </p>
      <p>
        In high school, I began to learn the basics of JavaScript, while also getting back to game development. With a pixel artist, I helped design a detailed two-dimensional story-based game built using Processing, a Java-based graphics library. That was my passion project at the time.
        I was elected the lead programmer of North Toronto Collegiate Institute's VEX robotics team in 2018, and I performed with excellence in developing and testing an autonomous system designed to win games by shooting a projectile at a target.
      </p>
      <p>
        A couple years later, I was accepted into the computer science program at University of Toronto St. George campus. At this time, I had no idea what I wanted to do with my life, but my calling was always something related to computers. 
        I found joy in simply helping people fix problems related to computers, and have been the go-to person for tech support amongst my family and close friends.
      </p>
      <h5>Academics and experience</h5>
      <p>
        Since being accepted into UofT's computer science program, I have developed a foundation in data structures and algorithms, and have broadened my horizons by taking the time to learn and improve my skills in various programming languages. In school, I used C/C++, Java, Racket, Haskell, and Python.
        Part of my experience from school has been in writing code to train and test machine learning models. These models have ranged from speaker identification using Gaussian mixture models to more fundimental models in statistics like linear regression and decision trees. The vast majority of code I have written in relation to machine learning has been using PyTorch. I eventually finished my minor is statistics, and since then have taken courses from the school of the environment learning
        about ways to use data to model issues in environmental studies, which would later become my second minor.
      </p>
      <p>
        I have since strengthened my ability to read and write code in Python and R, and have learned to use libraries like numpy and matplotlib, as well as complete frameworks such as Tableau, to analyze and visualize data. I have also learned to use libraries like scikit-learn and tensorflow to train and test machine learning models.
      </p>
    </div>
  </div>
</main>