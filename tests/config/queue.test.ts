import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import queueConfig from '../../config/queue';

describe('Queue Config', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('should have default queue connection', () => {
    delete process.env.QUEUE_CONNECTION;
    expect(queueConfig.default).toBe('sync');
  });

  it('should use QUEUE_CONNECTION from environment', async () => {
    process.env.QUEUE_CONNECTION = 'database';
    const configModule = await import('../../config/queue');
    expect(configModule.default.default).toBe('database');
  });

  it('should have sync connection configuration', () => {
    expect(queueConfig.connections.sync).toBeDefined();
    expect(queueConfig.connections.sync.driver).toBe('sync');
  });

  it('should have database connection configuration', () => {
    expect(queueConfig.connections.database).toBeDefined();
    expect(queueConfig.connections.database.driver).toBe('database');
    expect(queueConfig.connections.database.table).toBe('jobs');
  });

  it('should have batching configuration', () => {
    expect(queueConfig.batching).toBeDefined();
    expect(queueConfig.batching.database).toBe('sqlite');
    expect(queueConfig.batching.table).toBe('job_batches');
  });

  it('should have failed jobs configuration', () => {
    expect(queueConfig.failed).toBeDefined();
    expect(queueConfig.failed.driver).toBe('database');
    expect(queueConfig.failed.table).toBe('failed_jobs');
  });
});
