const express = require("express");
const cors = require("cors");
const path = require("path");
require("express-async-errors");
const { ErrorMiddleware } = require("../middleware");
const swaggerUI = require("swagger-ui-express");
const { SWAGGER_PATH } = require("../config");
const swaggerDocument = require(SWAGGER_PATH);
module.exports = function ({ UserRoutes }) {
  const crm = express.Router();
  const router = express.Router();

  //middlewares
  crm.use(express.json()).use(cors());

  //define las rutas del crm
  crm.use("/user", UserRoutes);

  router.use("/v1/api/", crm);
  router.use("/api-docs/", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
  router.use(ErrorMiddleware);

  return router;
};
