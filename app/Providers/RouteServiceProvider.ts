/**
 * Route Service Provider
 *
 * Loads your application's route files. Register loaders with `routes()`
 * instead of importing files in `boot()` so that `orchestr route:cache`
 * snapshots are honoured (cached routes hydrate from the snapshot and the
 * loaders below never run).
 */

import { RouteServiceProvider as BaseRouteServiceProvider } from '@orchestr-sh/orchestr';

export class RouteServiceProvider extends BaseRouteServiceProvider {
  register(): void {
    super.register();

    // Web routes
    this.routes(async () => {
      await import('../../routes/web.js');
    });
  }
}
