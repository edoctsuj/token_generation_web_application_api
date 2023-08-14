require("dotenv").config({ path: "../.env" });

const knexConfig = {
  development: {
    client: process.env.DB_CONNECTION,
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      port: process.env.DB_PORT,
    },
    migrations: {
      directory: "./migrations",
    },
  },
};

module.exports = knexConfig;
