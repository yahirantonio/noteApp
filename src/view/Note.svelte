<script>
   import Quill from "quill";
   import "quill/dist/quill.snow.css";

   import Banner from "../lib/Banner.svelte";
   import SwitchSideBar from "../lib/SwitchSideBar.svelte";

   import { dataNotes, dataStatus, today, note } from "../stores/store";
   import { onMount, untrack } from "svelte";
   import InputDate from "../lib/InputDate.svelte";
   import { dropNote, postNote, putNote } from "../utils/api";
   import { replace } from "svelte-spa-router";

   let { params } = $props();
   let quill;

   let savebutton;

   let notaInicial = $derived(
      $dataNotes.find((dataNote) => dataNote.notaID == params.id),
   );

   $note = params.id
      ? untrack(() =>
           $dataNotes.find((dataNote) => dataNote.notaID == params.id),
        )
      : {
           titulo: "Titulo...",
           texto: "Escribe tu texto aqui...",
           etiqueta: "Etiqueta...",
           fecha: $today,
           content: { ops: [{ insert: "Escribe tu texto aqui...\n" }] },
           estadoID: 1,
        };

   $effect(() => {
      params.id;
      if (quill) {
         quill.setContents($note.content);
      }
   });

   onMount(() => {
      quill = new Quill("#editor", {
         theme: "snow",
      });

      quill.setContents($note.content);

      if (params.id) {
         savebutton.disabled = true;
      }

      quill.on("text-change", () => {
         const delta = quill.getContents();
         console.log(delta.ops)
         if (JSON.stringify($note.content.ops) !== JSON.stringify(delta.ops) ) $note.content = delta;
      });
   });

   $effect(() => {
      $note;
      if (
         notaInicial &&
         notaInicial.titulo === $note.titulo &&
         notaInicial.etiqueta === $note.etiqueta &&
         notaInicial.fecha == $note.fecha &&
         notaInicial.estadoID == $note.estadoID &&
         JSON.stringify(notaInicial.content.ops) ==
            JSON.stringify($note.content.ops)
      ) {
         savebutton.disabled = true;
      } else {
         savebutton.disabled = false;
      }

      if (!notaInicial) savebutton.disabled = false;
   });

   function save() {
      $note.texto = quill.getSemanticHTML();
      $note.content = quill.getContents();

      if (params.id) {
         putNote({ ...$note });
      } else {
         const id = postNote($note);
         replace("/note/" + id);
      }

      savebutton.disabled = true;
   }

   function drop() {
      if ($note.notaID) {
         dropNote($note.notaID);
         replace("/");
      } else {
         replace("/");
      }
   }
</script>

<header class="header">
   <SwitchSideBar />
   <InputDate bind:date={$note.fecha} />
</header>

<main class="main">
   <Banner />
   <input type="text" class="berkshire titulo" bind:value={$note.titulo} />
   <div class="body">
      <select name="states" id="inputStates" bind:value={$note.estadoID}>
         {#each $dataStatus as status}
            <option value={status.estadoID} class="option"
               >{status.nombre}</option
            >
         {/each}
      </select>
      <input type="text" class="etiqueta" bind:value={$note.etiqueta} />
   </div>
   <div id="editor">
      <!-- {$note.texto} -->
   </div>
   <button class="save" onclick={save} bind:this={savebutton}>Guardar</button>
   <button class="delete" onclick={drop}>Eliminar</button>
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

   .save:disabled {
      background-color: gray;
   }

   .delete {
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
