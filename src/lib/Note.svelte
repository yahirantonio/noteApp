<script>
    import { push } from "svelte-spa-router";

   let { notaID, titulo, texto, etiqueta, fecha, estadoID } = $props();

   function stylesestados() {
      if (estadoID == 0) return "hecho";
      if (estadoID == 1) return "por_hacer";
      if (estadoID == 2) return "progreso";
   }

   function moveToNote(){
      push('/note/' + notaID)
   }
</script>

<div class="card {stylesestados()}" role="button" tabindex="0" id={notaID} onclick={moveToNote}>
   <h3 class="title">{titulo}</h3>
   <div class="body">
      {@html texto}
   </div>
   <div class="footer">
      <p class="date">{fecha}</p>
      <p class="tag">{etiqueta}</p>
   </div>
</div>

<style>
   .card {
      display: flex;
      flex-direction: column;
      width: 306px;
      height: 232px;
      padding: 15px;
      background-color: white;
      border-radius: 20px;
      transition: transform 1s ease;
      cursor: pointer;
   }
   .card:hover {
      transform: scale(1.1);
   }
   .card:hover .title {
      text-decoration: underline;
   }
   .title {
      font-family: "Lato";
      font-weight: bold;
      font-size: 1.5rem;
      margin: 0;
      margin-bottom: 13px;
   }
   .body {
      font-family: "montserrat";
      margin-bottom: 40px;
      flex: 1;
   }
   .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
   .date {
      margin: 0;
   }
   .tag {
      border: 1px solid black;
      border-radius: 30px;
      padding: 3px;
      margin: 0;
      font-size: 0.75rem;
   }
</style>
