<script>
   let date = new Date();
</script>

<nav class="nav">
   <span class="material-symbols-outlined chevron"> arrow_back_ios_new </span>
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
         <a href="#" class="white">Home</a>
      </li>
      <li class="link_container">
         <span class="material-symbols-outlined sizing"> note_add </span>
         <a href="#" class="white">New Note</a>
      </li>
      <li class="link_container">
         <span class="material-symbols-outlined sizing"> draft </span>
         <a href="#" class="white">Recent Note</a>
      </li>
      <li class="link_container">
         <span class="material-symbols-outlined sizing"> history </span>
         <a href="#" class="white">History</a>
      </li>
   </ul>
</nav>

<style>
   .nav {
      background-color: #333;
      position: absolute;
      left: 0px;
      top: 0px;
      width: 277px;
      max-width: 277px;
      padding: 0px 19px 0 19px;
      z-index: 2;
      height: 100vh;
      border-radius: 0 20px 20px 0;
      color: white;
   }

   .chevron {
      font-size: 30px;
      margin-top: 26px;
      margin-bottom: 28px;
      float: right;
      cursor: pointer;
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

   .nav_container{
      margin-top: 31px;
   }

   .sizing{
      font-size: 30px;
   }

   .white{
      color: white;
   }

   .link_container{
      display: flex;
      align-items: center;
      gap: 1rem;
      margin: 12px 0px;
   }
</style>
