import { readable, writable } from "svelte/store";

export const invisibleBanner = writable(true);

let dia = new Date()
let date = `${dia.getFullYear().toString()}-${String(dia.getMonth() + 1)}-${dia.getDate().toString()}`
export const today = readable('', (set) => {set(date)})

export const dataStatus = readable([
   {
      estadoID: 0,
      nombre: "hecho"
   },
   {
      estadoID: 1,
      nombre: "por hacer"
   },
   {
      estadoID: 2,
      nombre: "progreso"
   }
])

export const note = writable({
   titulo: "Titulo...",
   texto: "Escribe tu texto aqui...",
   etiqueta: "Etiqueta...",
   fecha: date,
   content: [{ insert: "Escribe tu texto aqui...\n" }],
   estadoID: 1,
})

export const dataNotes = writable([
   {
      "notaID": 1,
      "titulo": "Ejemplo de título",
      "texto": "Este es el contenido de la nota.",
      "etiqueta": "Personal",
      "fecha": "2024-11-22",
      "content": [{ insert: 'Este es el contenido de la nota.\n' }],
      "estadoID": 1
   },
   {
      "notaID": 2,
      "titulo": "Lista de compras",
      "texto": "Necesito comprar frutas, verduras, pan, leche, huevos y carne. También debo verificar si hay suficiente café en casa y, si no, añadirlo a la lista.",
      "etiqueta": "Personal",
      "fecha": "2024-11-22",
      "content": [{ insert: 'Necesito comprar frutas, verduras, pan, leche, huevos y carne. También debo verificar si hay suficiente café en casa y, si no, añadirlo a la lista.\n' }],
      "estadoID": 1
   },
   {
      "notaID": 3,
      "titulo": "Planificación de proyecto",
      "texto": "El proyecto requiere coordinar varias tareas: asignación de roles, establecer fechas límite, y preparar reuniones semanales para el seguimiento. Es crucial definir el alcance y los entregables en la primera reunión.",
      "etiqueta": "Trabajo",
      "fecha": "2024-11-22",
      "content": [{ insert: 'El proyecto requiere coordinar varias tareas: asignación de roles, establecer fechas límite, y preparar reuniones semanales para el seguimiento. Es crucial definir el alcance y los entregables en la primera reunión.\n' }],
      "estadoID": 2
   },
   {
      "notaID": 4,
      "titulo": "Ideas para el blog",
      "texto": "Investigar sobre temas actuales en tecnología como inteligencia artificial, ciberseguridad, y avances en desarrollo web. Preparar un borrador inicial para cada tema y buscar imágenes relevantes para ilustrar los artículos.",
      "etiqueta": "Creativo",
      "fecha": "2024-11-22",
      "content": [{ insert: 'Investigar sobre temas actuales en tecnología como inteligencia artificial, ciberseguridad, y avances en desarrollo web. Preparar un borrador inicial para cada tema y buscar imágenes relevantes para ilustrar los artículos.\n' }],
      "estadoID": 2
   },
   {
      "notaID": 5,
      "titulo": "Rutina de ejercicio",
      "texto": "Crear una rutina de ejercicios semanal: lunes, miércoles y viernes para entrenamiento de fuerza; martes y jueves para cardio; y sábado para yoga. También debo recordar calentar antes de cada sesión y estirar al final.",
      "etiqueta": "Salud",
      "fecha": "2024-11-22",
      "content": [{ insert: 'Crear una rutina de ejercicios semanal: lunes, miércoles y viernes para entrenamiento de fuerza; martes y jueves para cardio; y sábado para yoga. También debo recordar calentar antes de cada sesión y estirar al final.\n' }],
      "estadoID": 1
   },
   {
      "notaID": 6,
      "titulo": "Resumen de reunión",
      "texto": "En la reunión discutimos los puntos clave del proyecto: definir prioridades, delegar tareas específicas y acordar un cronograma inicial. La próxima reunión será el viernes para evaluar el progreso y ajustar el plan según sea necesario.",
      "etiqueta": "Trabajo",
      "fecha": "2024-11-22",
      "content": [{ insert: 'En la reunión discutimos los puntos clave del proyecto: definir prioridades, delegar tareas específicas y acordar un cronograma inicial. La próxima reunión será el viernes para evaluar el progreso y ajustar el plan según sea necesario.\n' }],
      "estadoID": 2
   }
])