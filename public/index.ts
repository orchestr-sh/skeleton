/**
 * Orchestr - The TypeScript Framework
 *
 * This file is the entry point for all HTTP requests.
 * It bootstraps the application and starts the server.
 *
 * Usage:
 *   npm run dev     (development with hot reload)
 *   npm run start   (production)
 */

import { Kernel } from '@orchestr-sh/orchestr';
import { createApp } from '@/bootstrap/app';

async function main() {
  const app = createApp();

  // Boot all service providers
  await app.boot();

  // Create HTTP kernel and handle requests
  const kernel = new Kernel(app);

  const port = Number(process.env.APP_PORT) || 3000;
  const host = process.env.APP_HOST || 'localhost';

  kernel.listen(port, host, () => {
    console.log(`\x1b[32m[Orchestr]\x1b[0m Server running at http://${host}:${port}`);
  });
}

main().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
