// Array de números
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Función para dividir el array en dos arrays: uno para pares y otro para impares
function dividirEnParesEImpares(arr) {
  const pares = [];
  const impares = [];

  arr.forEach((numero) => {
    if (numero % 2 === 0) {
      pares.push(numero);
    } else {
      impares.push(numero);
    }
  });

  return [pares, impares];
}

// Llamada a la función y muestra de los arrays resultantes concatenados
const [pares, impares] = dividirEnParesEImpares(numeros);
console.log("Array de números pares:", pares);
console.log("Array de números impares:", impares);
console.log("Arrays concatenados:", pares.concat(impares));
