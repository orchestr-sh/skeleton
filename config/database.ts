/**
 * Database Configuration
 *
 * Supported adapters: "drizzle"
 * Supported drivers: "sqlite" (better-sqlite3), "mysql" (mysql2), "postgres"
 *
 * The drivers ship as optional dependencies of @orchestr-sh/orchestr and are
 * installed automatically; feature add-ons like `ioredis` stay opt-in.
 */
export default {
  default: process.env.DB_CONNECTION || 'sqlite',

  connections: {
    sqlite: {
      adapter: 'drizzle',
      driver: 'sqlite',
      database: process.env.DB_DATABASE || 'database/database.sqlite',
    },

    // mysql: {
    //   adapter: 'drizzle',
    //   driver: 'mysql',
    //   host: process.env.DB_HOST || '127.0.0.1',
    //   port: Number(process.env.DB_PORT) || 3306,
    //   database: process.env.DB_DATABASE || 'orchestr',
    //   user: process.env.DB_USERNAME || 'root',
    //   password: process.env.DB_PASSWORD || '',
    // },

    // postgres: {
    //   adapter: 'drizzle',
    //   driver: 'postgres',
    //   host: process.env.DB_HOST || '127.0.0.1',
    //   port: Number(process.env.DB_PORT) || 5432,
    //   database: process.env.DB_DATABASE || 'orchestr',
    //   user: process.env.DB_USERNAME || 'root',
    //   password: process.env.DB_PASSWORD || '',
    // },
  },
};
