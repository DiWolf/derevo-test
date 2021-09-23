const { createContainer, asClass, asValue, asFunction } = require("awilix");

//Configuiraciones básicas
const config = require("../config"); //Esto puede cambiar
const app = require(".");

//Repositorios
const { UserRepository } = require("../repositories");
//Servicios
const { UserService } = require("../service");
//Controladores
const { UserController } = require("../controller");
//Rutas
const { UserRoutes } = require("../routes/index.routes");

const Routes = require("../routes");

//Creamos el contenedor
const container = createContainer();

//Inyección de dependencias

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })

  //Registramos los servicios de la aplicación
  .register({
    UserService: asClass(UserService).singleton(),
  })
  //Registramos los Controladores
  .register({
    UserController: asClass(UserController.bind(UserController)).singleton(),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
  })
  .register({
    UserRoutes: asFunction(UserRoutes).singleton(),
  });

//Exportamos el contenedor con las dependencias inyectadas.
module.exports = container;
