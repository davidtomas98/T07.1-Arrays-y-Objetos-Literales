// String original
const cadenaOriginal = "Hola";

// Convertir la string a un array utilizando el método split()
const arrayLetras = cadenaOriginal.split("");

// Obtener la versión invertida del array utilizando el método reverse()
const arrayInvertido = arrayLetras.reverse();

// Convertir el array invertido a una string utilizando el método join()
const cadenaInvertida = arrayInvertido.join("");

console.log("String original:", cadenaOriginal);
console.log("Versión invertida:", cadenaInvertida);
