/**
 * Cache Configuration
 *
 * Supported drivers: "array", "file", "database", "null"
 *
 * The array driver stores values in memory (great for testing).
 * The file driver stores values as files on disk.
 * The database driver stores values in a database table.
 */
export default {
  default: process.env.CACHE_STORE || 'file',

  prefix: process.env.CACHE_PREFIX || 'orchestr_cache_',

  stores: {
    array: {
      driver: 'array',
      serialize: false,
    },

    file: {
      driver: 'file',
      path: 'storage/framework/cache/data',
    },

    database: {
      driver: 'database',
      connection: null,
      table: 'cache',
    },

    null: {
      driver: 'null',
    },
  },

  /**
   * Stampede protection for Cache.remember() - routes the compute callback
   * through a cache lock so concurrent callers only ever run it once.
   */
  remember: {
    lock: false,
    lock_seconds: 30,
  },
};
