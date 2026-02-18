/**
 * Web Routes
 *
 * Define your application routes here. These routes are loaded
 * by the RouteServiceProvider.
 */

import { Route, view } from '@orchestr-sh/orchestr';

Route.get('/', () => {
  return view('welcome', {
    name: 'World',
    appName: 'Orchestr',
    features: [
      'Service Container & IoC',
      'Service Providers & Facades',
      'Routing with Middleware',
      'Database (Drizzle / Ensemble ORM)',
      'Queue System (Sync, Database, Null)',
      'Cache System (Array, File, Database)',
      'View System with Template Engine',
      'Console Commands (Artisan-style)',
      'Events & Listeners',
    ],
  });
});

Route.get('/health', (_req: any, res: any) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});
