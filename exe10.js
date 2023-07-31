// Objeto con datos de una persona
const persona = {
    nombre: "David",
    apellidos: "Tomàs Vergés",
    edad: 30,
    direccion: "Calle Principal 25",
    ciudad: "Tortosa",
    pais: "España",
  };
  
  // Función para mostrar el nombre completo de la persona
  function mostrarNombreCompleto({ nombre, apellidos }) {
    console.log("Nombre completo:", `${nombre} ${apellidos}`);
  }
  
  // Llamada a la función
  mostrarNombreCompleto(persona);
  