<script>
  import Pills from "../lib/Pills.svelte";
  import Note from "../lib/Note.svelte";
  import Banner from "../lib/Banner.svelte";
  import SearchNotes from "../lib/Search-Notes.svelte";
  import SwitchSideBar from "../lib/SwitchSideBar.svelte";
  import InputDate from "../lib/InputDate.svelte";

  import Fuse from "fuse.js";

  import { dataNotes, today } from "../stores/store";

  setTimeout(() => {
    let pills = document.querySelectorAll(".pill");
    // @ts-ignore
    pills[0].style.transform = "translateX(-180px)";
    // @ts-ignore
    pills[2].style.transform = "translateX(180px)";
  }, 1100);

  let date = $state($today);
  let title = $state("");

  const options = {
    includeScore: false, // Incluir la puntuación de coincidencia (opcional)
    threshold: 0.4, // Cuanto más bajo, más estricta es la búsqueda (0.0 - 1.0)
    keys: ["titulo"],
  };

  let notes = $derived.by(() => {
    let data = $dataNotes.filter((note) => note.fecha == date);
    if (title.length == 0) return data;

    const fuse = new Fuse(data, options);
    let resultado = fuse.search(title);
    return resultado.map((value) => value.item);
  });
</script>

<header class="header">
  <div class="container">
    <SwitchSideBar />
    <SearchNotes bind:title />
  </div>
  <InputDate bind:date />
</header>

<main>
  <h1 class="title berkshire">Home</h1>

  <div class="pill_container">
    <Pills statusID={0} />
    <Pills statusID={1} />
    <Pills statusID={2} />
  </div>

  <div class="notes_container">
    {#each notes as note}
      <Note {...note} />
    {/each}
  </div>

  {#if notes.length > 8}
    <button class="verMas">Ver mas</button>
  {/if}
</main>

<Banner />

<style>
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 100px;
    margin-bottom: 26px;
    margin-top: 26px;
  }

  .container {
    display: flex;
    justify-content: space-between;
    gap: 70px;
  }

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

  .verMas:hover {
    background-color: #fcfcfc;
  }
</style>
