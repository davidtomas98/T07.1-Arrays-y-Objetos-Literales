// Objeto receta de cocina
const recetaCocina = {
  nombre: "Pastel de Chocolate",
  tiempoPreparacion: "1 hora",
  ingredientes: ["chocolate", "huevos", "azúcar", "harina", "mantequilla", "esencia de vainilla"],
};

// Función para mostrar los detalles de una receta
function mostrarReceta(receta) {
  console.log("Nombre:", receta.nombre);
  console.log("Tiempo de preparación:", receta.tiempoPreparacion);
  console.log("Ingredientes:", receta.ingredientes.join(", "));
}

// Array de recetas con propiedades similares
const recetas = [
  recetaCocina,
  {
    nombre: "Tarta de Manzana",
    tiempoPreparacion: "45 minutos",
    ingredientes: ["manzanas", "azúcar", "harina", "mantequilla", "canela"],
  },
];

// Función para mostrar todas las recetas
function mostrarTodasLasRecetas(arr) {
  arr.forEach((receta, index) => {
    console.log(`Receta ${index + 1}:`);
    mostrarReceta(receta);
    console.log("--------------------");
  });
}

// Llamada a la función para mostrar todas las recetas
mostrarTodasLasRecetas(recetas);
