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

import { pathToFileURL } from 'node:url';
import { AppConsoleKernel } from '../app/Console/Kernel.js';
import { createApp } from './app.js';

export async function main(): Promise<void> {
  const app = createApp();

  // Boot all service providers
  await app.boot();

  // Create console kernel and run
  const kernel = new AppConsoleKernel(app);

  // Import any custom commands in app/Console/Commands (they can override
  // framework commands by name)
  await kernel.discoverCommands();

  await kernel.run(process.argv);
}

// Execute when run directly, but stay inert when imported (tests).
if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  main().catch((error) => {
    console.error(`\x1b[31mError: ${error.message}\x1b[0m`);
    process.exit(1);
  });
}
