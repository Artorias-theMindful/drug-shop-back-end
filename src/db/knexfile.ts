import type { Knex } from "knex";
import path from "path"

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: `${process.env.URL}`,
    migrations: {
      directory: path.resolve(__dirname, 'migrations')
    }
  }

};

module.exports = config;
