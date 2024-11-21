<script>
   let { title, body, date, tag } = $props();
</script>

<div class="card">
   <div class="title">{title}</div>
   <div class="body">{body}</div>
   <div class="footer">
      <p class="date">{date}</p>
      <p class="tag">{tag}</p>
   </div>
</div>

<style>
   .card {
      max-width: 306px;
      padding: 15px;
      background-color: white;
      border-radius: 20px;
      box-shadow: 0 4px 20px #ff9999;
   }
   .title {
      font-family: "Lato";
      font-weight: bold;
      font-size: 1.5rem;
      margin-bottom: 13px;
   }
   .body {
      font-family: "montserrat";
      margin-bottom: 40px;
   }
   .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
   .date{
      margin: 0;
   }
   .tag{
      border: 1px solid black;
      border-radius: 30px;
      padding: 3px;
      margin: 0;
      font-size: .75rem;
   }
</style>
