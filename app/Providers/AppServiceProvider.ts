/**
 * Application Service Provider
 *
 * Register and bootstrap application services here.
 * This provider is loaded before most other providers.
 */

import { DatabaseManager, Ensemble, ServiceProvider } from '@orchestr-sh/orchestr';

export class AppServiceProvider extends ServiceProvider {
  /**
   * Register any application services.
   */
  register(): void {
    //
  }

  /**
   * Bootstrap any application services.
   *
   * The framework's DatabaseServiceProvider only binds the 'db' manager -
   * connecting the default connection and handing the resolver to Ensembles
   * is the application's job. Once this runs, `Model.query()`, `Model.find()`
   * and friends work everywhere, and migrations/seeders share the same pool.
   */
  async boot(): Promise<void> {
    if (!this.app.bound('db')) return;

    const db = this.app.make<DatabaseManager>('db');
    await db.connection().connect();
    Ensemble.setConnectionResolver(db);
  }
}
