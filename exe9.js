// Array de nombres de competidores
const nombresCompetidores = ["Juan", "María", "Pedro", "Lucía", "Carlos"];

// Desestructuración del array para obtener el ganador, el segundo y el resto de competidores
const [ganador, segundo, ...restoCompetidores] = nombresCompetidores;

console.log("Ganador:", ganador);
console.log("Segundo lugar:", segundo);
console.log("Resto de competidores:", restoCompetidores);
