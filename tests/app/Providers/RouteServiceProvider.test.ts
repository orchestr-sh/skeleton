import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Application } from '@orchestr-sh/orchestr';
import { RouteServiceProvider } from '../../../app/Providers/RouteServiceProvider';

describe('RouteServiceProvider', () => {
  let app: Application;
  let provider: RouteServiceProvider;

  beforeEach(() => {
    app = new Application(process.cwd());
    provider = new RouteServiceProvider(app);
  });

  it('should be an instance of RouteServiceProvider', () => {
    expect(provider).toBeInstanceOf(RouteServiceProvider);
  });

  it('should have access to the application', () => {
    expect(provider['app']).toBe(app);
  });

  it('should boot and load web routes', async () => {
    const importSpy = vi.spyOn(provider, 'boot');
    
    await provider.boot();
    
    expect(importSpy).toHaveBeenCalled();
  });

  it('should be registerable with the application', () => {
    expect(() => app.register(provider)).not.toThrow();
  });
});
