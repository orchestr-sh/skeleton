/**
 * Database Seeder
 *
 * The root seeder that calls other seeders.
 *
 * Usage:
 *   npm run seed
 *   npm run orchestr seed
 */

import { Seeder } from '@orchestr-sh/orchestr';

export class DatabaseSeeder extends Seeder {
  async run(): Promise<void> {
    // Call other seeders:
    // await this.call(UserSeeder);

    console.log('Database seeded successfully.');
  }
}

export default DatabaseSeeder;
