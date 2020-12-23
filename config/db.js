const Sequelize = require("sequelize");

// Option 1: Passing parameters separately

const db = new Sequelize("alkemyblog", "user", "userola", {
  host: 3306,
  dialect: "mysql",
});
module.exports = db;
