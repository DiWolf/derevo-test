if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({});
}

//Variables de entorno
module.exports = {
  PORT: process.env.PORT,
  SWAGGER_PATH: `../config/swagger/${process.env.SWAGGER_DOC}.json`,
};
