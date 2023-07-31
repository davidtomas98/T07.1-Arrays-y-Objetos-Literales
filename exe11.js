// Objeto con datos de una persona
const persona = {
    nombre: "David",
    apellidos: "Tomàs Vergés",
    edad: 30,
    direccion: "Calle Principal 25",
    ciudad: "Tortosa",
    pais: "España",
  };
  
  // Desestructuración para acceder a tres propiedades del objeto
  const { nombre, apellidos, edad } = persona;
  
  console.log("Nombre:", nombre);
  console.log("Apellidos:", apellidos);
  console.log("Edad:", edad);
  