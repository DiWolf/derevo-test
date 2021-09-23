//Contenedor inicial
const container = require("./startup/container");
//iniciamos el servidor.
const server = container.resolve("app");

server
  .start()
  .then((result) => {
    console.log(`Servidor iniciado`);
  })
  .catch((err) => {
    console.log(`Ocurrió el siguiente fallo al inicial ${err}`);
  });
