<script>
   let {title, status} = $props();

   let colorNote = {
    0: "done",
    1: "progress",
    2: "todo",
  };
  
</script>

<div class={'pill ' + colorNote[status]} >
   <p class="pill_text monserrat">{title}</p>
</div>

<style>

.pill {
   line-height: 0;
   padding: .125rem;
   border-radius: 1rem;
   text-align: center;
   min-width: 120px;
   max-height: 40px;
   font-size: 1.25rem;
   position: absolute;
   transition: all 1.5s;
   box-shadow: 0px 10px 40px rgba(0, 0, 0, 25%);
}

.pill_text {
   color: white;
   font-weight: bold;
}
</style>
