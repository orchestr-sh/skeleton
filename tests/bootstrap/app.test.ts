import { describe, it, expect, beforeEach } from 'vitest';
import { Application } from '@orchestr-sh/orchestr';
import { createApp } from '../../bootstrap/app';

describe('Bootstrap App', () => {
  let app: Application;

  beforeEach(() => {
    app = createApp();
  });

  it('should create an application instance', () => {
    expect(app).toBeInstanceOf(Application);
  });

  it('should boot all service providers', async () => {
    await expect(app.boot()).resolves.not.toThrow();
  });

  it('should export createApp as default', async () => {
    const createAppDefault = await import('../../bootstrap/app');
    expect(createAppDefault.default).toBe(createApp);
  });

  it('should create app with correct working directory', () => {
    const testApp = createApp();
    expect(testApp).toBeDefined();
    expect(testApp).toBeInstanceOf(Application);
  });
});
