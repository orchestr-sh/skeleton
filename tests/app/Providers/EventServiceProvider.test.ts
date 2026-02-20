import { describe, it, expect, beforeEach } from 'vitest';
import { Application } from '@orchestr-sh/orchestr';
import { EventServiceProvider } from '@/app/Providers/EventServiceProvider';

describe('EventServiceProvider', () => {
  let app: Application;
  let provider: EventServiceProvider;

  beforeEach(() => {
    app = new Application(process.cwd());
    provider = new EventServiceProvider(app);
  });

  it('should be an instance of EventServiceProvider', () => {
    expect(provider).toBeInstanceOf(EventServiceProvider);
  });

  it('should have access to the application', () => {
    expect(provider['app']).toBe(app);
  });

  it('should have an empty listen object by default', () => {
    const listen = provider['listen'];
    expect(listen).toBeDefined();
    expect(typeof listen).toBe('object');
  });

  it('should have an empty subscribe array by default', () => {
    const subscribe = provider['subscribe'];
    expect(subscribe).toBeDefined();
    expect(Array.isArray(subscribe)).toBe(true);
  });

  it('should be registerable with the application', () => {
    expect(() => app.register(provider)).not.toThrow();
  });
});
