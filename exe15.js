// Clase Receta
class Receta {
  constructor(nombre, tiempoPreparacion, ingredientes) {
    this.nombre = nombre;
    this.tiempoPreparacion = tiempoPreparacion;
    this.ingredientes = ingredientes;
  }
}

// Instanciación de las recetas
const receta1 = new Receta("Pastel de Chocolate", "1 hora", ["chocolate", "huevos", "azúcar", "harina", "mantequilla", "esencia de vainilla"]);
const receta2 = new Receta("Tarta de Manzana", "45 minutos", ["manzanas", "azúcar", "harina", "mantequilla", "canela"]);
// Agregar más instancias de Receta aquí

// Array de recetas
const recetasArray = [receta1, receta2];

// Función para mostrar los detalles de una receta
function mostrarReceta(receta) {
  console.log("Nombre:", receta.nombre);
  console.log("Tiempo de preparación:", receta.tiempoPreparacion);
  console.log("Ingredientes:", receta.ingredientes.join(", "));
}

// Función para mostrar todas las recetas
function mostrarTodasLasRecetas(arr) {
  arr.forEach((receta, index) => {
    console.log(`Receta ${index + 1}:`);
    mostrarReceta(receta);
    console.log("--------------------");
  });
}

// Llamada a la función para mostrar todas las recetas
mostrarTodasLasRecetas(recetasArray);
