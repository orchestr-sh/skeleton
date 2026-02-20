import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Application } from '@orchestr-sh/orchestr';
import { createApp } from '../../bootstrap/app';
import { AppServiceProvider } from '../../app/Providers/AppServiceProvider';
import { EventServiceProvider } from '../../app/Providers/EventServiceProvider';
import { RouteServiceProvider } from '../../app/Providers/RouteServiceProvider';

describe('Bootstrap App', () => {
  let app: Application;

  beforeEach(() => {
    app = createApp();
  });

  it('should create an application instance', () => {
    expect(app).toBeInstanceOf(Application);
  });

  it('should have the correct base path', () => {
    expect(app.basePath).toBe(process.cwd());
  });

  it('should register AppServiceProvider', () => {
    const providers = app.getRegisteredProviders();
    const appProvider = providers.find(
      (p) => p instanceof AppServiceProvider
    );
    expect(appProvider).toBeInstanceOf(AppServiceProvider);
  });

  it('should register EventServiceProvider', () => {
    const providers = app.getRegisteredProviders();
    const eventProvider = providers.find(
      (p) => p instanceof EventServiceProvider
    );
    expect(eventProvider).toBeInstanceOf(EventServiceProvider);
  });

  it('should register RouteServiceProvider', () => {
    const providers = app.getRegisteredProviders();
    const routeProvider = providers.find(
      (p) => p instanceof RouteServiceProvider
    );
    expect(routeProvider).toBeInstanceOf(RouteServiceProvider);
  });

  it('should boot all service providers', async () => {
    await expect(app.boot()).resolves.not.toThrow();
  });

  it('should export createApp as default', async () => {
    const createAppDefault = await import('../../bootstrap/app');
    expect(createAppDefault.default).toBe(createApp);
  });
});
