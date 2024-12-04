<script>
   import Banner from "../lib/Banner.svelte";
   import InputDate from "../lib/InputDate.svelte";
   import Note from "../lib/Note.svelte";
   import SwitchSideBar from "../lib/SwitchSideBar.svelte";
   import { dataNotes, dataStatus } from "../stores/store";

   const notes = $derived($dataNotes);
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
               <input type="text" class="title_input"/>
            </div>
            <div class="input_container">
               <label for="" class="label_container">Fecha</label>
               <InputDate />
            </div>
            <div class="input_container">
               <label for="" class="label_container">Estado</label>
               {#each $dataStatus as status}
                  <label>
                     <input type="checkbox" value={status.estadoID} >
                     {status.nombre}
                  </label>
               {/each}
            </div>
            <div class="input_container">
               <label for="" class="label_container">Etiqueta</label>
               <input type="text" class="label_input"/>
            </div>
         </form>
         <button class="drop">Eliminar</button>
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

   .title_input{
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
      font-family: 'Lato';
      font-weight: 600;
      font-size: 1.125rem;
      margin-bottom: 17px;
   }

   .label_input{
      font-size: 1.25rem;
      padding: 10px;
      border: 0;
      background-color: transparent;
      border-bottom: 1px solid #CDCDCD;
   }

   .drop{
      background-color: #E56969;
      color: white;
      font-weight: bold;
      font-size: 1.5rem;
      padding: 5.5px 26px;
      border: 0px;
      border-radius: 16px;
   }
</style>
