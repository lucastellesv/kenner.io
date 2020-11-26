module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: "root",
      password: "25131974",
      database: "stock_io"
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/backend/database/migrations`
    }
  }
}
