<script>
   import SearchNotes from "./Search-Notes.svelte";
   import { onMount } from "svelte";
   import flatpickr from "flatpickr";
   import "flatpickr/dist/themes/dark.css";
    import { invisibleBanner } from "../stores/store";

   let inputElement;

   let date = $state("");

   onMount(() => {
      flatpickr(inputElement, {
         enableTime: false, // Habilita la selección de hora
         dateFormat: "Y-m-d", // Formato de fecha
         altInput: true,
         altInputClass: "my-custom-class",
         defaultDate: new Date(),
      });
   });

   function switchSideBar(){
      invisibleBanner.set(false);
   }
</script>

<header class="header">
   <div class="container">
      <button class="menu_button" onclick={switchSideBar}>
         <span class="material-symbols-outlined menu_icon"> menu </span>
      </button>
      <SearchNotes />
   </div>
   <input type="text" bind:this={inputElement} bind:value={date} />
</header>

<style>
   .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 100px;
      margin-bottom: 26px;
      margin-top: 26px;
   }

   .menu_button{
      border: 0;
      background-color: transparent;
      cursor: pointer;
   }

   .menu_icon{
      font-size: 41px;
   }

   .container {
      display: flex;
      justify-content: space-between;
      gap: 70px;
   }
</style>
