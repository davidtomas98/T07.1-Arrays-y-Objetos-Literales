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

// Llamada a la función para mostrar los detalles de la receta
mostrarReceta(recetaCocina);
