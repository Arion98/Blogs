const db = require("../sequelize");
const Sequelize = require("sequelize");

const Usuarios = db.define("Usuarios", {

  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: Sequelize.STRING,
  email: Sequelize.STRING,

});

Usuarios.sync();

module.exports = Usuarios;

