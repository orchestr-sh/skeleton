import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import cacheConfig from '@/config/cache';

describe('Cache Config', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('should have default cache store', () => {
    delete process.env.CACHE_STORE;
    expect(cacheConfig.default).toBe('file');
  });

  it('should use CACHE_STORE from environment', async () => {
    process.env.CACHE_STORE = 'array';
    const configModule = await import('@/config/cache');
    expect(configModule.default.default).toBe('array');
  });

  it('should have default prefix', () => {
    delete process.env.CACHE_PREFIX;
    expect(cacheConfig.prefix).toBe('orchestr_cache_');
  });

  it('should use CACHE_PREFIX from environment', async () => {
    process.env.CACHE_PREFIX = 'custom_';
    const configModule = await import('@/config/cache');
    expect(configModule.default.prefix).toBe('custom_');
  });

  it('should have array store configuration', () => {
    expect(cacheConfig.stores.array).toBeDefined();
    expect(cacheConfig.stores.array.driver).toBe('array');
  });

  it('should have file store configuration', () => {
    expect(cacheConfig.stores.file).toBeDefined();
    expect(cacheConfig.stores.file.driver).toBe('file');
  });

  it('should have database store configuration', () => {
    expect(cacheConfig.stores.database).toBeDefined();
    expect(cacheConfig.stores.database.driver).toBe('database');
  });

  it('should have null store configuration', () => {
    expect(cacheConfig.stores.null).toBeDefined();
    expect(cacheConfig.stores.null.driver).toBe('null');
  });
});
