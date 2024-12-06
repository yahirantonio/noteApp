<script>
   import { link } from "svelte-spa-router";
   import { dataNotes, invisibleBanner, today } from "../stores/store";

   let date = new Date();

   const recentNote = $derived.by(() => {
      let count = 0;
      return $dataNotes.filter((note) => {
         if (note.fecha == $today && count < 3) {
            count++;
            return true;
         }
         return false;
      });
   });

   function switchSideBar() {
      invisibleBanner.set(true);
   }
</script>

<nav class="nav" class:hidden_nav={$invisibleBanner}>
   <button onclick={switchSideBar} class="switchSideBar">
      <span class="material-symbols-outlined chevron">
         arrow_back_ios_new
      </span>
   </button>
   <div class="header_nav">
      <img src="https://picsum.photos/60/60" class="user_image" alt="Persona" />
      <p class="user_name">Juan alvarado</p>
   </div>
   <div class="hour_nav">
      <p>{date.toLocaleString("default", { month: "long" })}</p>
      <p>{date.toLocaleString("default", { day: "numeric" })}</p>
      <p>{date.toLocaleString("default", { year: "numeric" })}</p>
   </div>
   <ul class="nav_container">
      <li class="link_container">
         <span class="material-symbols-outlined sizing"> home </span>
         <a href="/" class="white" use:link onclick={switchSideBar}>Home</a>
      </li>
      <li class="link_container">
         <span class="material-symbols-outlined sizing"> note_add </span>
         <a href="/note/" class="white" use:link onclick={() => switchSideBar}
            >New Note</a
         >
      </li>
      <li class="link_container">
         <!-- <div> -->
         <span class="material-symbols-outlined sizing"> draft </span>
         <p class="white recent">Recent Note</p>
         <!-- </div> -->
         <ul>
            {#each recentNote as note}
               <li>
                  <a href={"/note/" + note.notaID} class="white" use:link onclick={switchSideBar}
                     >{note.titulo}</a
                  >
               </li>
            {/each}
         </ul>
      </li>
      <li class="link_container">
         <span class="material-symbols-outlined sizing"> history </span>
         <a href="/history" class="white" use:link onclick={switchSideBar}
            >History</a
         >
      </li>
   </ul>
</nav>

<style>
   .nav {
      background-color: #333;
      position: fixed;
      left: 0px;
      top: 0px;
      width: 250px;
      max-width: 250px;
      padding: 0px 19px 0 19px;
      z-index: 2;
      height: 100%;
      border-radius: 0 20px 20px 0;
      color: white;
      transform: translateX(0);
      transition: all 1s ease;
   }

   .recent {
      margin: 0;
   }

   .hidden_nav {
      transform: translateX(-100%);
   }

   .switchSideBar {
      background-color: transparent;
      box-shadow: none;
      border: 0;
      color: white;
      float: right;
      margin-top: 26px;
      margin-bottom: 28px;
      cursor: pointer;
   }

   .chevron {
      font-size: 30px;
   }

   .header_nav {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      width: 100%;
      margin: auto;
   }

   .user_image {
      border-radius: 50%;
   }

   .hour_nav {
      display: flex;
      justify-content: space-around;
      border-top: 1px solid #4ec8d5;
      border-bottom: 1px solid #4ec8d5;
      margin: 22px 0;
   }

   .nav_container {
      margin-top: 31px;
   }

   .sizing {
      font-size: 30px;
   }

   .white {
      color: white;
   }

   .link_container {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin: 12px 0px;
      flex-wrap: wrap;
   }
</style>
