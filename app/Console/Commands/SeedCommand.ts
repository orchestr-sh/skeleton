/**
 * db:seed - overrides the framework command (see app/Console/Commands
 * discovery in bootstrap/cli.ts).
 *
 * Workaround for an upstream SeederRunner bug: the default `./database/
 * seeders` path is passed through path.join, which drops the leading './',
 * so the dynamic import treats "database/seeders" as a bare package name
 * and fails. Handing the runner an absolute path avoids it. Delete this
 * command once the framework resolves seeder paths from the app root.
 */

import { CommandOptions, SeedCommand as BaseSeedCommand } from '@orchestr-sh/orchestr';
import path from 'node:path';

export class SeedCommand extends BaseSeedCommand {
  async handle(args: string[], options: CommandOptions): Promise<void> {
    const toAbsolute = (p: string) => (path.isAbsolute(p) ? p : path.resolve(p));
    const configured = options.path as string | string[] | undefined;
    options.path = Array.isArray(configured)
      ? configured.map(toAbsolute)
      : toAbsolute(configured ?? 'database/seeders');
    await super.handle(args, options);
  }
}
