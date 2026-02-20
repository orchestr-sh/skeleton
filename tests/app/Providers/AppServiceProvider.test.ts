import { describe, it, expect, beforeEach } from 'vitest';
import { Application } from '@orchestr-sh/orchestr';
import { AppServiceProvider } from '../../../app/Providers/AppServiceProvider';

describe('AppServiceProvider', () => {
  let app: Application;
  let provider: AppServiceProvider;

  beforeEach(() => {
    app = new Application(process.cwd());
    provider = new AppServiceProvider(app);
  });

  it('should be an instance of ServiceProvider', () => {
    expect(provider).toBeInstanceOf(AppServiceProvider);
  });

  it('should have access to the application', () => {
    expect(provider['app']).toBe(app);
  });

  it('should register services without errors', () => {
    expect(() => provider.register()).not.toThrow();
  });

  it('should boot services without errors', () => {
    expect(() => provider.boot()).not.toThrow();
  });

  it('should be registerable with the application', () => {
    expect(() => app.register(provider)).not.toThrow();
  });
});
