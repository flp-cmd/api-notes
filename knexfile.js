const path = require("path");

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "knex_database",
      user: "postgres",
      password: "123"
    },
    migrations: {
      directory: path.resolve(
        __dirname,
        "src",
        "database",
        "knex",
        "migrations"
      ),
    },
    useNullAsDefault: true,
  },
};
