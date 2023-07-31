// Arrays de ejemplo
const arrayUno = [1, 2, 3];
const arrayDos = [4, 5, 6];

// Función para intercalar los elementos de dos arrays y vaciar los arrays originales
function intercalarArrays(arr1, arr2) {
  const nuevoArray = [];
  const longitud = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < longitud; i++) {
    if (i < arr1.length) {
      nuevoArray.push(arr1[i]);
    }
    if (i < arr2.length) {
      nuevoArray.push(arr2[i]);
    }
  }

  arr1.length = 0;
  arr2.length = 0;

  return nuevoArray;
}

// Uso de la función
const resultado = intercalarArrays(arrayUno, arrayDos);
console.log("Nuevo array:", resultado);
console.log("Array uno vacío:", arrayUno);
console.log("Array dos vacío:", arrayDos);
