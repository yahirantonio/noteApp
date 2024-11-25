<script>
   import { onMount } from "svelte";
   import flatpickr from "flatpickr";
   import "flatpickr/dist/themes/dark.css";

   let inputElement;

   let {date = $bindable()} = $props();
   
   onMount(() => {
      flatpickr(inputElement, {
         enableTime: false, // Habilita la selección de hora
         dateFormat: "Y-m-d", // Formato de fecha
         altInput: true,
         altInputClass: "my-custom-class",
         defaultDate: new Date(),
      });
   });
</script>

<input type="text" bind:this={inputElement} bind:value={date} />
