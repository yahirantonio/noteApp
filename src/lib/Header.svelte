<script>
   import SearchNotes from "./Search-Notes.svelte";
   import SwitchSideBar from "./SwitchSideBar.svelte";
   import InputDate from "./InputDate.svelte";
</script>

<header class="header">
   <div class="container">
      <SwitchSideBar />
      <SearchNotes />
   </div>
   <InputDate />
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

   .container {
      display: flex;
      justify-content: space-between;
      gap: 70px;
   }
</style>
