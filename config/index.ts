/**
 * Configuration Index
 *
 * Aggregates all configuration files into a single object
 * for the ConfigServiceProvider.
 */

import app from './app';
import cache from './cache';
import database from './database';
import queue from './queue';
import view from './view';

export default {
  app,
  database,
  queue,
  cache,
  view,
};
