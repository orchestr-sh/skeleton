import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import appConfig from '../../config/app';

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

  it('should use APP_NAME from environment', () => {
    process.env.APP_NAME = 'TestApp';
    const config = require('../../config/app').default;
    expect(config.name).toBe('TestApp');
  });

  it('should have default env', () => {
    delete process.env.APP_ENV;
    expect(appConfig.env).toBe('local');
  });

  it('should use APP_ENV from environment', () => {
    process.env.APP_ENV = 'production';
    const config = require('../../config/app').default;
    expect(config.env).toBe('production');
  });

  it('should have default debug value', () => {
    delete process.env.APP_DEBUG;
    expect(appConfig.debug).toBe(false);
  });

  it('should set debug to true when APP_DEBUG is "true"', () => {
    process.env.APP_DEBUG = 'true';
    const config = require('../../config/app').default;
    expect(config.debug).toBe(true);
  });

  it('should have default port', () => {
    delete process.env.APP_PORT;
    expect(appConfig.port).toBe(3000);
  });

  it('should use APP_PORT from environment', () => {
    process.env.APP_PORT = '8080';
    const config = require('../../config/app').default;
    expect(config.port).toBe(8080);
  });
});
