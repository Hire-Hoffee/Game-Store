const { Sequelize } = require('sequelize')


const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'postgres',
  user: process.env.DB_USER || 'portgres',
  password: process.env.DB_PASSWORD || 'root',
  dialect: process.env.DB_DIALECT || 'postgres'
}

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect
  }
)

module.exports = sequelize
