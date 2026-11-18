/**
 * Console Kernel
 *
 * Registers all console commands available to the application.
 * Framework commands (migrate, db:seed, etc.) are included by default.
 * Add your own custom commands here, or drop them into
 * `app/Console/Commands/` - the CLI discovers and imports them at run time.
 */

import {
  ConsoleKernel,
  // Migrations
  MigrateCommand,
  MigrateInstallCommand,
  MigrateRollbackCommand,
  MigrateResetCommand,
  MigrateRefreshCommand,
  MigrateFreshCommand,
  MigrateStatusCommand,
  MakeMigrationCommand,
  // Seeders
  SeedCommand,
  MakeSeederCommand,
  // Database & models
  DbWipeCommand,
  DbMonitorCommand,
  ModelShowCommand,
  // Events
  MakeEventCommand,
  MakeListenerCommand,
  EventListCommand,
  EventCacheCommand,
  EventClearCommand,
  // Queue
  QueueWorkCommand,
  QueueListenCommand,
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
  // Cache
  CacheClearCommand,
  CacheForgetCommand,
  CacheTableCommand,
  // Configuration & routing caches
  ConfigCacheCommand,
  ConfigClearCommand,
  RouteListCommand,
  RouteCacheCommand,
  RouteClearCommand,
  OptimizeCommand,
  OptimizeClearCommand,
  // Task scheduling
  ScheduleRunCommand,
  ScheduleWorkCommand,
  ScheduleListCommand,
  ScheduleTestCommand,
  // Server & diagnostics
  ServeCommand,
  AboutCommand,
  KeyGenerateCommand,
  StorageLinkCommand,
  LangPublishCommand,
  NotificationsTableCommand,
  // Views
  MakeViewCommand,
  ViewCacheCommand,
  ViewClearCommand,
  // Scaffolding (make:*)
  MakeModelCommand,
  MakeControllerCommand,
  MakeRequestCommand,
  MakeMiddlewareCommand,
  MakeProviderCommand,
  MakeObserverCommand,
  MakePolicyCommand,
  MakeFactoryCommand,
  MakeResourceCommand,
  MakeCollectionCommand,
  MakeRuleCommand,
  MakeCommandCommand,
  MakeTestCommand,
  MakeMailCommand,
  MakeNotificationCommand,
  MakeCastCommand,
  MakeChannelCommand,
  MakeExceptionCommand,
  MakeEnumCommand,
  MakeInterfaceCommand,
  MakeTraitCommand,
  MakeClassCommand,
} from '@orchestr-sh/orchestr';

export class AppConsoleKernel extends ConsoleKernel {
  /**
   * Register all console commands
   */
  protected registerCommands(): void {
    this.registerMany([
      // Migrations
      new MigrateCommand(this.app),
      new MigrateInstallCommand(this.app),
      new MigrateRollbackCommand(this.app),
      new MigrateResetCommand(this.app),
      new MigrateRefreshCommand(this.app),
      new MigrateFreshCommand(this.app),
      new MigrateStatusCommand(this.app),
      new MakeMigrationCommand(this.app),

      // Seeders
      new SeedCommand(this.app),
      new MakeSeederCommand(this.app),

      // Database & models
      new DbWipeCommand(this.app),
      new DbMonitorCommand(this.app),
      new ModelShowCommand(this.app),

      // Events
      new MakeEventCommand(this.app),
      new MakeListenerCommand(this.app),
      new EventListCommand(this.app),
      new EventCacheCommand(this.app),
      new EventClearCommand(this.app),

      // Queue
      new QueueWorkCommand(this.app),
      new QueueListenCommand(this.app),
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

      // Configuration & routing caches
      new ConfigCacheCommand(this.app),
      new ConfigClearCommand(this.app),
      new RouteListCommand(this.app),
      new RouteCacheCommand(this.app),
      new RouteClearCommand(this.app),
      new OptimizeCommand(this.app),
      new OptimizeClearCommand(this.app),

      // Task scheduling
      new ScheduleRunCommand(this.app),
      new ScheduleWorkCommand(this.app),
      new ScheduleListCommand(this.app),
      new ScheduleTestCommand(this.app),

      // Server & diagnostics
      new ServeCommand(this.app),
      new AboutCommand(this.app),
      new KeyGenerateCommand(this.app),
      new StorageLinkCommand(this.app),
      new LangPublishCommand(this.app),
      new NotificationsTableCommand(this.app),

      // Views
      new MakeViewCommand(this.app),
      new ViewCacheCommand(this.app),
      new ViewClearCommand(this.app),

      // Scaffolding (make:*)
      new MakeModelCommand(this.app),
      new MakeControllerCommand(this.app),
      new MakeRequestCommand(this.app),
      new MakeMiddlewareCommand(this.app),
      new MakeProviderCommand(this.app),
      new MakeObserverCommand(this.app),
      new MakePolicyCommand(this.app),
      new MakeFactoryCommand(this.app),
      new MakeResourceCommand(this.app),
      new MakeCollectionCommand(this.app),
      new MakeRuleCommand(this.app),
      new MakeCommandCommand(this.app),
      new MakeTestCommand(this.app),
      new MakeMailCommand(this.app),
      new MakeNotificationCommand(this.app),
      new MakeCastCommand(this.app),
      new MakeChannelCommand(this.app),
      new MakeExceptionCommand(this.app),
      new MakeEnumCommand(this.app),
      new MakeInterfaceCommand(this.app),
      new MakeTraitCommand(this.app),
      new MakeClassCommand(this.app),

      // Register your custom commands here:
      // new YourCustomCommand(this.app),
    ]);
  }
}
