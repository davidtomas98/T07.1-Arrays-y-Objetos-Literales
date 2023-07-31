// Array con los nombres de los planetas
const planetas = ["Mercurio", "Venus", "Tierra", "Marte", "Jupiter", "Saturno", "Urano", "Neptuno"];

// Función para listar los nombres de los planetas y mostrarlos por consola
function listarPlanetas(arr) {
  console.log("Nombres de los planetas:");
  arr.forEach((planeta) => {
    console.log(planeta);
  });
}

// Uso de la función
listarPlanetas(planetas);
