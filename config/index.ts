/**
 * Configuration Index
 *
 * Aggregates all configuration files into a single object
 * for the ConfigServiceProvider.
 */

import app from './app';
import database from './database';
import queue from './queue';
import cache from './cache';

export default {
  app,
  database,
  queue,
  cache,
};
