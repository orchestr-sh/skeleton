/**
 * Application Bootstrap
 *
 * Creates and configures the application instance with all
 * service providers, middleware, and configuration.
 *
 * The Application constructor loads `.env` (and `.env.{APP_ENV}`) from the
 * base path, so config files can read environment variables at import time.
 */

import 'reflect-metadata';
import {
  Application,
  ConfigServiceProvider,
  DatabaseServiceProvider,
  QueueServiceProvider,
  CacheServiceProvider,
  ViewServiceProvider,
  Facade,
} from '@orchestr-sh/orchestr';
import { AppServiceProvider } from '../app/Providers/AppServiceProvider.js';
import { EventServiceProvider } from '../app/Providers/EventServiceProvider.js';
import { RouteServiceProvider } from '../app/Providers/RouteServiceProvider.js';

/**
 * Workaround for orchestr-sh/orchestr#72: the published bundle minifies
 * class names, and Application.register() de-dupes providers by
 * `constructor.name` - ConfigServiceProvider and DatabaseServiceProvider are
 * both `r` at runtime, so registering both would silently drop the second.
 * A named subclass carries a distinct runtime name. Delete this once the
 * package preserves class names in its dist.
 */
class DatabaseConnectionServiceProvider extends DatabaseServiceProvider {}

/**
 * Create and configure the application
 */
export function createApp(): Application {
  const app = new Application(process.cwd());

  // Set up facades (RouteServiceProvider.register() re-binds this, but doing
  // it here keeps the facades usable from the moment the app is created)
  Facade.setFacadeApplication(app);

  // --- Core Providers ---

  // Configuration (must be first - everything below resolves from it).
  // Files in config/ are auto-loaded and deep-merged at boot(); inline
  // values passed here act as fallbacks the files can override.
  app.register(new ConfigServiceProvider(app, {}));

  // Database (binds the 'db' manager; AppServiceProvider boots the connection)
  app.register(new DatabaseConnectionServiceProvider(app));

  // Queue
  app.register(new QueueServiceProvider(app));

  // Cache
  app.register(new CacheServiceProvider(app));

  // Views
  app.register(new ViewServiceProvider(app));

  // --- Application Providers ---

  app.register(new AppServiceProvider(app));
  app.register(new EventServiceProvider(app));
  app.register(new RouteServiceProvider(app));

  return app;
}

export default createApp;
