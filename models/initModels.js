const config = require("../database/config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: config.dialect,
  operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.todos = require("./todoModel.js")(sequelize, Sequelize);

module.exports = db;
