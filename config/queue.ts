/**
 * Queue Configuration
 *
 * Supported drivers: "sync", "database", "null"
 *
 * The sync driver executes jobs immediately (great for development).
 * The database driver stores jobs in a database table for async processing.
 */
export default {
  default: process.env.QUEUE_CONNECTION || 'sync',

  connections: {
    sync: {
      driver: 'sync',
    },

    database: {
      driver: 'database',
      table: 'jobs',
      queue: 'default',
      retry_after: 90,
      after_commit: false,
    },
  },

  /**
   * Job Batching
   *
   * Run `npx orchestr queue:batches-table` to create the migration.
   */
  batching: {
    database: 'sqlite',
    table: 'job_batches',
  },

  /**
   * Failed Queue Jobs
   *
   * Run `npx orchestr queue:failed-table` to create the migration.
   */
  failed: {
    driver: 'database',
    database: 'sqlite',
    table: 'failed_jobs',
  },
};
