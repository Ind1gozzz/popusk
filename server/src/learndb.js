const { Sequelize } = require("sequelize")
const config = require("./config/default")

module.exports = new Sequelize(
  config.LEARNING_DB_NAME,
  config.DB_USER,
  config.LEARNING_DB_PASSWORD,
  {
    dialect: "postgres",
    host: config.DB_HOST,
    port: config.DB_PORT
  }
)