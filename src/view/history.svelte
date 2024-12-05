<script>
   import Banner from "../lib/Banner.svelte";
   import InputDate from "../lib/InputDate.svelte";
   import Note from "../lib/Note.svelte";
   import SwitchSideBar from "../lib/SwitchSideBar.svelte";
   import { dataNotes, dataStatus, today } from "../stores/store";

   import Fuse from "fuse.js";

   const options = {
      threshold: 0.4, // Cuanto más bajo, más estricta es la búsqueda (0.0 - 1.0)
      keys: ["titulo", "etiqueta"],
   };

   let date = $state($today);
   let stages = $state([]);
   let title = $state("");
   let category = $state("");

   const notes = $derived.by(() => {
      let data = $dataNotes.filter((note) => note.fecha == date);

      if(stages.length > 0){
         data = data.filter(note => stages.includes(note.estadoID));
      }

      if(category.length == 0 && title.length == 0) return data;

      let query = { $and: [] };

      if (category.length > 0) {
         query.$and.push({
            $path: ["etiqueta"],
            $val: category,
         });
      }

      if (title.length > 0) {
         query.$and.push({
            $path: ["titulo"],
            $val: title,
         });
      }

      const fuse = new Fuse(data, options);
      let resultado = fuse.search(query);

      return resultado.map((value) => value.item);
   });

   
</script>

<header class="header">
   <SwitchSideBar />
</header>

<main>
   <Banner />
   <h1 class="title berkshire">Historial</h1>

   <div class="history_container">
      <div>
         <form action="">
            <div class="input_container">
               <label for="title" class="label_container">Titulo</label>
               <input type="text" class="title_input" bind:value={title} />
            </div>
            <div class="input_container">
               <label for="" class="label_container">Fecha</label>
               <InputDate bind:date />
            </div>
            <div class="input_container">
               <label for="" class="label_container">Estado</label>
               {#each $dataStatus as status}
                  <label>
                     <input type="checkbox" value={status.estadoID} bind:group={stages}/>
                     {status.nombre}
                  </label>
               {/each}
            </div>
            <div class="input_container">
               <label for="" class="label_container">Etiqueta</label>
               <input type="text" class="label_input" bind:value={category} />
            </div>
         </form>
      </div>

      <div class="notes">
         {#each notes as note}
            <Note {...note} />
         {/each}
      </div>
   </div>
</main>

<style>
   .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 100px;
      margin-bottom: 26px;
      margin-top: 26px;
   }

   .title {
      text-align: center;
      font-size: 2.225rem;
      margin-top: 0;
      margin-bottom: 3rem;
      font-weight: 100;
   }

   .history_container {
      display: flex;
      justify-content: space-around;
      margin: 0 60px;
      margin-bottom: 60px;
   }

   .notes {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
   }

   .title_input {
      border: 0;
      border-radius: 10px;
      font-size: 1.25rem;
      box-shadow: 0px 10px 40px rgba(0, 0, 0, 25%);
      padding: 10px;
   }

   .input_container {
      margin-bottom: 34px;
      display: flex;
      flex-direction: column;
   }

   .label_container {
      font-family: "Lato";
      font-weight: 600;
      font-size: 1.125rem;
      margin-bottom: 17px;
   }

   .label_input {
      font-size: 1.25rem;
      padding: 10px;
      border: 0;
      background-color: transparent;
      border-bottom: 1px solid #cdcdcd;
   }
</style>
