<script>
   let { notaID, titulo, texto, etiqueta, fecha, estado } = $props();

   function stylesestados() {
      if (estado == 1) return "hecho";
      if (estado == 2) return "por_hacer";
      if (estado == 3) return "progreso";
   }
</script>

<div class="card {stylesestados()}" role="button" tabindex="0" id={notaID}>
   <h3 class="title">{titulo}</h3>
   <p class="body">{texto}</p>
   <div class="footer">
      <p class="date">{fecha}</p>
      <p class="tag">{etiqueta}</p>
   </div>
</div>

<style>
   .card {
      display: flex;
      flex-direction: column;
      max-width: 306px;
      min-height: 232px;
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
