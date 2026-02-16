/**
 * Database Configuration
 *
 * Supported adapters: "drizzle"
 * Supported drivers: "better-sqlite3", "mysql2", "postgres"
 */
export default {
  default: process.env.DB_CONNECTION || 'sqlite',

  connections: {
    sqlite: {
      adapter: 'drizzle',
      driver: 'better-sqlite3',
      database: process.env.DB_DATABASE || 'database/database.sqlite',
    },

    // mysql: {
    //   adapter: 'drizzle',
    //   driver: 'mysql2',
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
