<script>
    import { dataStatus } from "../stores/store";

   let {statusID} = $props();

   const status = $derived($dataStatus.find(dataStatus => dataStatus.estadoID == statusID))

   let colorNote = {
    0: "done",
    1: "todo",
    2: "progress",
  };
  
</script>

<div class={'pill ' + colorNote[status.estadoID]} >
   <p class="pill_text monserrat">{status.nombre}</p>
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
