// Arrays de palabras
const javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
const javascript2 = ["Objetos", "Arrays", "ParseInt"];

// Función para determinar si se repite algún elemento entre dos arrays y mostrarlo por consola
function elementosRepetidos(arr1, arr2) {
  const repetidos = arr1.filter((elemento) => arr2.includes(elemento));
  console.log("Elementos repetidos:", repetidos);
}

// Llamada a la función
elementosRepetidos(javascript1, javascript2);
