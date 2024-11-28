<script>
   import Quill from "quill";
   import "quill/dist/quill.snow.css";

   import Banner from "../lib/Banner.svelte";
   import SwitchSideBar from "../lib/SwitchSideBar.svelte";

   import { dataNotes, dataStatus } from "../stores/store";
   import { onMount } from "svelte";
   import InputDate from "../lib/InputDate.svelte";
   import {putNote} from "../utils/api"

   let { params } = $props();

   let note = $state($dataNotes.find((note) => note.notaID == params.id));

   let quill;

   onMount(() => {
      quill = new Quill("#editor", {
         theme: "snow",
      });
   });

   function save() {
      note.texto = quill.getSemanticHTML()
      putNote(note)
   }

   $inspect($dataNotes)
</script>

<header class="header">
   <SwitchSideBar />
   <InputDate bind:date={note.fecha} />
</header>

<main class="main">
   <Banner />
   <input type="text" class="berkshire titulo" bind:value={note.titulo} />
   <div class="body">
      <select name="states" id="inputStates" bind:value={note.estado}>
         {#each $dataStatus as status}
            <option value={status.estadoID} class="option"
               >{status.nombre}</option
            >
         {/each}
      </select>
      <input type="text" class="etiqueta" bind:value={note.etiqueta} />
   </div>
   <div id="editor">
      {note.texto}
   </div>
   <button class="save" onclick={save}>Guardar</button>
   <!-- <button class="delete" onclick={drop}>Eliminar</button> -->
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

   .main {
      text-align: center;
      max-width: 60%;
      margin: auto;
   }

   #inputStates {
      box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.25);
      border: 0px;
      background-color: white;
      border-radius: 10px;
      width: 120px;
      min-height: 40px;
   }

   .etiqueta {
      box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.25);
      border: 0px;
      background-color: white;
      border-radius: 10px;
      min-height: 40px;
      text-align: center;
      width: auto;
   }

   .body {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin-bottom: 20px;
   }

   .titulo {
      margin: auto;
      text-align: center;
      font-size: 2.225rem;
      background-color: transparent;
      margin-top: 0;
      border: 0;
      border-radius: 10px;
      margin-bottom: 1rem;
      width: 80%;
   }

   .save {
      background-color: green;
      padding: 10px;
      color: white;
      font-weight: bold;
      margin-top: 20px;
      border: 0px;
      border-radius: 10px;
      float: right;
      cursor: pointer;
   }

   .save:hover {
      background-color: rgb(11, 158, 11);
   }

   .delete{
      background-color: red;
      padding: 10px;
      color: white;
      font-weight: bold;
      margin-top: 20px;
      margin-right: 20px;
      border: 0px;
      border-radius: 10px;
      float: right;
      cursor: pointer;
   }

   .delete:hover {
      background-color: rgb(255, 73, 73);
   }

   #editor {
      background-color: white;
      font-family: "Montserrat";
   }
</style>
