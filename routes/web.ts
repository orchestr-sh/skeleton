/**
 * Web Routes
 *
 * Define your application routes here. These routes are loaded
 * by the RouteServiceProvider.
 */

import { Route } from '@orchestr-sh/orchestr';

Route.get('/', (_req: any, res: any) => {
  res.json({
    message: 'Welcome to Orchestr!',
    docs: 'https://github.com/orchestr-sh/orchestr',
  });
});

Route.get('/health', (_req: any, res: any) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});
