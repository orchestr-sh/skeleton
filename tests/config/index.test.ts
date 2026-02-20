import { describe, it, expect } from 'vitest';
import config from '../../config/index';

describe('Config Index', () => {
  it('should export app config', () => {
    expect(config.app).toBeDefined();
    expect(config.app.name).toBeDefined();
  });

  it('should export database config', () => {
    expect(config.database).toBeDefined();
    expect(config.database.default).toBeDefined();
  });

  it('should export queue config', () => {
    expect(config.queue).toBeDefined();
    expect(config.queue.default).toBeDefined();
  });

  it('should export cache config', () => {
    expect(config.cache).toBeDefined();
    expect(config.cache.default).toBeDefined();
  });

  it('should export view config', () => {
    expect(config.view).toBeDefined();
    expect(config.view.paths).toBeDefined();
  });
});
