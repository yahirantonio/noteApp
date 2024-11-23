<script>
   import { invisibleBanner } from "../stores/store";

   function switchSideBar() {
      invisibleBanner.set(false);
   }
</script>

<button class="menu_button" onclick={switchSideBar}>
   <span class="material-symbols-outlined menu_icon"> menu </span>
</button>

<style>
   .menu_button {
      border: 0;
      background-color: transparent;
      cursor: pointer;
   }

   .menu_icon {
      font-size: 41px;
   }
</style>
