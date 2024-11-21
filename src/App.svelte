<script>
  import Pills from "./lib/Pills.svelte";
  import Header from "./lib/Header.svelte";

  let states = [0, 1, 2];

  setTimeout(()=>{
   let pills = document.querySelectorAll('.pill');

   // @ts-ignore
   pills[0].style.transform = 'translateX(-180px)';

   // @ts-ignore
   pills[2].style.transform = 'translateX(180px)';

  }, 1100)
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

  </div>

</main>

<style>
  .pill_container{
    display: flex;
    justify-content: space-evenly;
    margin: auto;
    max-width: 30%;
    min-height: 40px;
  }

  .title{
    text-align: center;
    font-size: 2.225rem;
    margin-top: 0;
    margin-bottom: 3rem;
  }

  .notes_container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
  }
</style>
