// Array dado
const arrayLetras = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

// Función para obtener la longitud del array y mostrarla por consola
function obtenerLongitudArray(arr) {
  console.log("Longitud del array:", arr.length);
}

// Función para obtener un elemento aleatorio del array y mostrarlo por consola
function obtenerElementoAleatorio(arr) {
  const indiceAleatorio = Math.floor(Math.random() * arr.length);
  console.log("Elemento aleatorio:", arr[indiceAleatorio]);
}

// Uso de las funciones
obtenerLongitudArray(arrayLetras);
obtenerElementoAleatorio(arrayLetras);
