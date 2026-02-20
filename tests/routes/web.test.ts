import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Application, Route } from '@orchestr-sh/orchestr';
import { createApp } from '../../bootstrap/app';

describe('Web Routes', () => {
  let app: Application;

  beforeEach(async () => {
    app = createApp();
    await app.boot();
    // Clear routes before each test
    Route.clear();
  });

  it('should register the home route', async () => {
    await import('../../routes/web');
    
    const routes = Route.getRoutes();
    const homeRoute = routes.find((r) => r.path === '/' && r.method === 'GET');
    
    expect(homeRoute).toBeDefined();
    expect(homeRoute?.path).toBe('/');
    expect(homeRoute?.method).toBe('GET');
  });

  it('should register the health check route', async () => {
    await import('../../routes/web');
    
    const routes = Route.getRoutes();
    const healthRoute = routes.find(
      (r) => r.path === '/health' && r.method === 'GET'
    );
    
    expect(healthRoute).toBeDefined();
    expect(healthRoute?.path).toBe('/health');
    expect(healthRoute?.method).toBe('GET');
  });

  it('should have correct route methods', async () => {
    await import('../../routes/web');
    
    const routes = Route.getRoutes();
    const methods = routes.map((r) => r.method);
    
    expect(methods).toContain('GET');
    expect(methods.every((m) => m === 'GET')).toBe(true);
  });
});
