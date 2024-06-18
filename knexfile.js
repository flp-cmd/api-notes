const path = require("path");


module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "rocket-notes-rocket-notes-db.e.aivencloud.com",
      port: 17771,
      user: "avnadmin",
      password: process.env.DB_PASSWORD,
      database: "defaultdb",
      ssl: {
        rejectUnauthorized: true,
        ca: process.env.CA_CERTIFICATE, 
      }
    },
    pool: { min: 0, max: 10 },
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
