<script>
  import Pills from "./lib/Pills.svelte";
  import Header from "./lib/Header.svelte";
  import Note from "./lib/Note.svelte";

  let states = [0, 1, 2];

  setTimeout(() => {
    let pills = document.querySelectorAll(".pill");

    pills[0].style.transform = "translateX(-180px)";

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
    <Note
      title="Titulo"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum tellus et ante sagittis, nec interdum eros imper..."
      date="21/02/2023"
      tag="Educacion"
    />
  </div>
</main>

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
    justify-content: space-between;
    align-items: center;
    margin: auto;
    margin-top: 40px;
  }
</style>
