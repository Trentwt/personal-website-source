<script lang="ts">
  import sunImage from '$lib/images/IMG_0853.jpg';
  import 'materialize-css/dist/css/materialize.min.css';
  import { onMount } from 'svelte';

  const onResize = (materializeInstance: any) => {
    return () => {
      const parallax = document.querySelectorAll('.parallax');
      materializeInstance.Parallax.init(parallax);
    }
  }

  onMount(() => {
    (async () => {
      const M = await import('materialize-css');
      onResize(M)();
      window.addEventListener('resize', onResize(M));
    })();

    return () => {
      window.removeEventListener('resize', onResize(M));
    }
  })
</script>

<div class="parallax-container">
  <div class="parallax">
    <img src={sunImage} class="object-cover" alt="In front of the sun.">
  </div>
</div>
<div class="container">
  <div class="mt-5 flex flex-col text-center w-full">
    <h4>Leave a message for me!</h4>
  </div>
  <form
    action="https://formspree.io/f/xyyroddv"
    method="POST"
  >
    <label>
      Your email:
      <input type="email" name="email">
    </label>
    <label>
      Your message for me:
      <textarea class="materialize-textarea" name="message"></textarea>
    </label>
    <div class="mt-5 flex flex-auto align-middle justify-center">
      <button class="btn waves-effect waves-light w-40" type="submit" name="action">
        Submit
        <i class="material-icons right">send</i>
      </button>
    </div>
  </form>
</div>