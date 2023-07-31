// Array javascript1
const javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];

// Eliminar "DOM" del array y añadir "Objetos"
javascript1.shift();
javascript1.unshift("Objetos");

// Eliminar "Arrays" del array y añadir "ArraysDifíciles"
const indiceArrays = javascript1.indexOf("Arrays");
if (indiceArrays !== -1) {
  javascript1.splice(indiceArrays, 1, "ArraysDifíciles");
}

// Copiar los últimos dos elementos en un nuevo array
const ultimosDosElementos = javascript1.slice(-2);

// Obtener el índice del elemento "Funciones"
const indiceFunciones = javascript1.indexOf("Funciones");

console.log("Array javascript1:", javascript1);
console.log("Copia de los últimos dos elementos:", ultimosDosElementos);
console.log("Índice del elemento 'Funciones':", indiceFunciones);
