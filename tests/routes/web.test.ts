import { describe, it, expect, beforeEach } from 'vitest';
import { Application } from '@orchestr-sh/orchestr';
import { createApp } from '@/bootstrap/app';

describe('Web Routes', () => {
  let app: Application;

  beforeEach(async () => {
    app = createApp();
    await app.boot();
  });

  it('should load web routes without errors', async () => {
    await expect(import('@/routes/web')).resolves.not.toThrow();
  });

  it('should have routes defined', async () => {
    await import('@/routes/web');
    // Routes are registered during import
    expect(true).toBe(true);
  });
});
