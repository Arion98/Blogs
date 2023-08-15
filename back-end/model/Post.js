const db = require("../sequelize");
const Sequelize = require("sequelize");

const Posts = db.define("Posts", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: Sequelize.STRING,
  conteudo: Sequelize.TEXT,
  autor_id: Sequelize.INTEGER,
 
});

Posts.sync();

module.exports = Posts;

