// Array de números
const numeros = [1, 7, 3, 9, 5, 8, 2, 6, 4];

// Función para mostrar únicamente los números mayores que 5
function mostrarMayoresQueCinco(arr) {
  const mayoresQueCinco = arr.filter((numero) => numero > 5);
  console.log("Números mayores que 5:", mayoresQueCinco);
}

// Llamada a la función
mostrarMayoresQueCinco(numeros);
