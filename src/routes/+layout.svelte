<script>
  import "../app.css";

  export const prerender = true;
  export const trailingSlash = 'always';
</script>

<header>
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
</header>
<main>
  <slot />
</main>
<footer class="w-full mt-5 p-8 bg-gray-200">
  <p>© 2024 Trent W. Thompson</p>
  <p>Built using TypeScript and Svelte</p>
  <p>CSS courtesy of <a href="https://materializecss.com/">Materialize</a>, Material Icons and Tailwind</p>
</footer>