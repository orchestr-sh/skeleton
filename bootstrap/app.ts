/**
 * Application Bootstrap
 *
 * Creates and configures the application instance with all
 * service providers, middleware, and configuration.
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
import config from '@/config';
import { AppServiceProvider } from '@/app/Providers/AppServiceProvider';
import { EventServiceProvider } from '@/app/Providers/EventServiceProvider';
import { RouteServiceProvider } from '@/app/Providers/RouteServiceProvider';

/**
 * Create and configure the application
 */
export function createApp(): Application {
  const app = new Application(process.cwd());

  // Set up facades
  Facade.setFacadeApplication(app);

  // --- Core Providers ---

  // Configuration (must be first)
  app.register(new ConfigServiceProvider(app, config));

  // Database
  app.register(new DatabaseServiceProvider(app));

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
