import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import appConfig from '@/config/app';

describe('App Config', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('should have default name', () => {
    delete process.env.APP_NAME;
    expect(appConfig.name).toBe('Orchestr');
  });

  it('should use APP_NAME from environment', async () => {
    process.env.APP_NAME = 'TestApp';
    const configModule = await import('@/config/app');
    expect(configModule.default.name).toBe('TestApp');
  });

  it('should have default env', () => {
    delete process.env.APP_ENV;
    expect(appConfig.env).toBe('local');
  });

  it('should use APP_ENV from environment', async () => {
    process.env.APP_ENV = 'production';
    const configModule = await import('@/config/app');
    expect(configModule.default.env).toBe('production');
  });

  it('should have default debug value', () => {
    delete process.env.APP_DEBUG;
    expect(appConfig.debug).toBe(false);
  });

  it('should set debug to true when APP_DEBUG is "true"', async () => {
    process.env.APP_DEBUG = 'true';
    const configModule = await import('@/config/app');
    expect(configModule.default.debug).toBe(true);
  });

  it('should have default port', () => {
    delete process.env.APP_PORT;
    expect(appConfig.port).toBe(3000);
  });

  it('should use APP_PORT from environment', async () => {
    process.env.APP_PORT = '8080';
    const configModule = await import('@/config/app');
    expect(configModule.default.port).toBe(8080);
  });
});
