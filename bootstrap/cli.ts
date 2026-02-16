#!/usr/bin/env node
/**
 * Console CLI Entry Point
 *
 * Boots the application and runs console commands.
 *
 * Usage:
 *   npx tsx bootstrap/cli.ts migrate
 *   npx tsx bootstrap/cli.ts make:event UserRegistered
 *   npx tsx bootstrap/cli.ts queue:work
 *   npx tsx bootstrap/cli.ts cache:clear
 *
 * Or via npm scripts:
 *   npm run orchestr migrate
 *   npm run orchestr make:job ProcessPodcast
 */

import { createApp } from './app';
import { AppConsoleKernel } from '../app/Console/Kernel';

async function main() {
  const app = createApp();

  // Boot all service providers
  await app.boot();

  // Create console kernel and run
  const kernel = new AppConsoleKernel(app);
  await kernel.run(process.argv);
}

main().catch((error) => {
  console.error(`\x1b[31mError: ${error.message}\x1b[0m`);
  process.exit(1);
});
