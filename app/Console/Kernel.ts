/**
 * Console Kernel
 *
 * Registers all console commands available to the application.
 * Framework commands (migrate, seed, etc.) are included by default.
 * Add your own custom commands here.
 */

import {
  ConsoleKernel,
  // Migration commands
  MigrateCommand,
  MigrateRollbackCommand,
  MigrateResetCommand,
  MigrateRefreshCommand,
  MigrateFreshCommand,
  MigrateStatusCommand,
  MakeMigrationCommand,
  // Seeder commands
  SeedCommand,
  MakeSeederCommand,
  // Event commands
  MakeEventCommand,
  MakeListenerCommand,
  EventListCommand,
  EventCacheCommand,
  EventClearCommand,
  // Queue commands
  QueueWorkCommand,
  QueueRestartCommand,
  QueueFailedCommand,
  QueueRetryCommand,
  QueueForgetCommand,
  QueueFlushCommand,
  QueueClearCommand,
  QueueMonitorCommand,
  QueueTableCommand,
  QueueFailedTableCommand,
  QueueBatchesTableCommand,
  QueuePruneBatchesCommand,
  QueuePruneFailedCommand,
  MakeJobCommand,
  // Cache commands
  CacheClearCommand,
  CacheForgetCommand,
  CacheTableCommand,
} from '@orchestr-sh/orchestr';

export class AppConsoleKernel extends ConsoleKernel {
  /**
   * Register all console commands
   */
  protected registerCommands(): void {
    this.registerMany([
      // Migrations
      new MigrateCommand(this.app),
      new MigrateRollbackCommand(this.app),
      new MigrateResetCommand(this.app),
      new MigrateRefreshCommand(this.app),
      new MigrateFreshCommand(this.app),
      new MigrateStatusCommand(this.app),
      new MakeMigrationCommand(this.app),

      // Seeders
      new SeedCommand(this.app),
      new MakeSeederCommand(this.app),

      // Events
      new MakeEventCommand(this.app),
      new MakeListenerCommand(this.app),
      new EventListCommand(this.app),
      new EventCacheCommand(this.app),
      new EventClearCommand(this.app),

      // Queue
      new QueueWorkCommand(this.app),
      new QueueRestartCommand(this.app),
      new QueueFailedCommand(this.app),
      new QueueRetryCommand(this.app),
      new QueueForgetCommand(this.app),
      new QueueFlushCommand(this.app),
      new QueueClearCommand(this.app),
      new QueueMonitorCommand(this.app),
      new QueueTableCommand(this.app),
      new QueueFailedTableCommand(this.app),
      new QueueBatchesTableCommand(this.app),
      new QueuePruneBatchesCommand(this.app),
      new QueuePruneFailedCommand(this.app),
      new MakeJobCommand(this.app),

      // Cache
      new CacheClearCommand(this.app),
      new CacheForgetCommand(this.app),
      new CacheTableCommand(this.app),

      // Register your custom commands here:
      // new YourCustomCommand(this.app),
    ]);
  }
}
