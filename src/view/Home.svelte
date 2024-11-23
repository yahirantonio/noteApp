<script>
  import Pills from "../lib/Pills.svelte";
  import Header from "../lib/Header.svelte";
  import Note from "../lib/Note.svelte";
  import Banner from "../lib/Banner.svelte";

  import { dataNotes } from "../stores/store";

  setTimeout(() => {
    let pills = document.querySelectorAll(".pill");

    // @ts-ignore
    pills[0].style.transform = "translateX(-180px)";

    // @ts-ignore
    pills[2].style.transform = "translateX(180px)";
  }, 1100);



</script>

<Header />

<main>
  <h1 class="title berkshire">Home</h1>

  <div class="pill_container">
    <Pills title="Hecho" status={0} />
    <Pills title="Por Hacer" status={1} />
    <Pills title="Progreso" status={2} />
  </div>

  <div class="notes_container">
    {#each $dataNotes as note}
      <Note {...note} />
    {/each}
  </div>

  {#if $dataNotes.length > 1}
    <button class="verMas">Ver mas</button>
  {/if}
</main>

<Banner />

<style>
  .pill_container {
    display: flex;
    justify-content: space-evenly;
    margin: auto;
    max-width: 30%;
    min-height: 40px;
  }

  .title {
    text-align: center;
    font-size: 2.225rem;
    margin-top: 0;
    margin-bottom: 3rem;
  }

  .notes_container {
    width: 90%;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    margin: auto;
    margin-top: 40px;
    flex-wrap: wrap;
    gap: 10px 20px;
    margin-bottom: 40px;
  }

  .verMas {
    border: 1px solid #d1d5db;
    background-color: white;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.15);
    padding: 10px 20px;
    border-radius: 20px;
    display: block;
    margin: auto;
    cursor: pointer;
    margin-bottom: 20px;
  }

  .verMas:hover{
    background-color: #fcfcfc;
  }
</style>
