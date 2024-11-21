<script>
   let title = $state("");
   
   const handleWidth = () => {
      let input = document.querySelector(".search_input");
      if (title.length > 0) {
         input.style.width = '250px'
         input.style.paddingLeft = '50px'
      } else {
         input.style.width = '50px'
         input.style.paddingLeft = '0px'
      }
   };

   const focusInput = () => {
      let input = document.querySelector(".search_input");
      input.focus()
   }

</script>

<div class="search_container" class:growBox={title.length}>
   <!-- <span class="material-symbols-outlined icon_search" onclick={focusInput}> -->
   <span class="material-symbols-outlined icon_search">
      search
   </span>
   <input
      type="text"
      class="search_input"
      bind:value={title}
      oninput={handleWidth}
      />
   </div>
<style>
   .growBox{
      width: 300px !important;
   }

   .search_container {
      display: flex;
      align-items: center;
      box-shadow: 0px 10px 40px rgba(0, 0, 0, 25%);
      border-radius: 10px;
      transition: all 1s ease;
   }

   .icon_search{
      cursor: pointer;
      position: absolute;
      font-size: 41px;
      width: fit-content;
      transform: translateX(3px);
      background-color: transparent;
   }

   .search_input {
      border: 0px;
      height: 46px;
      font-size: 30px;
      border-radius: 10px;
      width: 50px;
      /* outline: none; */
      transition: all 1s ease;
   }
   

   .search_input:focus,
   .search_container:hover input{
      width: 250px !important;
      padding-left: 50px !important;
   }
</style>
