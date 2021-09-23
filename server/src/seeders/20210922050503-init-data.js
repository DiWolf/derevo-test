"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("Roles", [
      {
        id: 1,
        rol: "administrador",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        rol: "capturista",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        rol: "supervisor",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        rol: "invitado",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    //Creamos usuarios
    await queryInterface.bulkInsert("Users", [
      {
        id: 1,
        nombre: "Juan",
        user: "juan",
        role_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        nombre: "alex",
        user: "alex",
        role_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        nombre: "Fernando",
        user: "fernando",
        role_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        nombre: "Raul",
        user: "raul",
        role_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        nombre: "Luis",
        user: "luis",
        role_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    //Creamos permisos
    await queryInterface.bulkInsert("Permisos", [
      {
        id: 1,
        permiso: "escritura",
        role_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        permiso: "lectura",
        role_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        permiso: "escritura",
        role_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        permiso: "lectura",
        role_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
