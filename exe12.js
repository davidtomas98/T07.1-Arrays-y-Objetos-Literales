// Array de objetos con propiedades similares
const personas = [
    { nombre: "Juan", edad: 30, ciudad: "Tortosa" },
    { nombre: "María", edad: 25, ciudad: "Amposta" },
    { nombre: "Pedro", edad: 28, ciudad: "Tarragona" },
  ];
  
  // Función para obtener el valor de una propiedad para todos los objetos del array
  function obtenerPropiedad(arr, propiedad) {
    arr.forEach((objeto) => {
      console.log(objeto[propiedad]);
    });
  }
  
  // Llamada a la función para obtener la propiedad "nombre"
  obtenerPropiedad(personas, "nombre");
  