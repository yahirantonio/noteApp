<script>
   import Banner from "../lib/Banner.svelte";
   import SwitchSideBar from "../lib/SwitchSideBar.svelte";
</script>

<header class="header">
   <SwitchSideBar />
</header>

<main>
   <Banner />
   <h1 class="title berkshire">History</h1>
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
   }
</style>
