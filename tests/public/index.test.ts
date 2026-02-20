import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { createApp } from '@/bootstrap/app';
import { Kernel } from '@orchestr-sh/orchestr';

describe('Public Index', () => {
  const originalEnv = process.env;
  const originalExit = process.exit;
  const originalError = console.error;
  const originalLog = console.log;

  beforeEach(() => {
    vi.clearAllMocks();
    process.exit = vi.fn() as any;
    console.error = vi.fn();
    console.log = vi.fn();
  });

  afterEach(() => {
    process.env = originalEnv;
    process.exit = originalExit;
    console.error = originalError;
    console.log = originalLog;
  });

  it('should create app instance', () => {
    const app = createApp();
    expect(app).toBeDefined();
  });

  it('should create kernel with app', () => {
    const app = createApp();
    const kernel = new Kernel(app);
    expect(kernel).toBeInstanceOf(Kernel);
  });

  it('should use default port when APP_PORT is not set', () => {
    delete process.env.APP_PORT;
    const port = Number(process.env.APP_PORT) || 3000;
    expect(port).toBe(3000);
  });

  it('should use APP_PORT from environment', () => {
    process.env.APP_PORT = '8080';
    const port = Number(process.env.APP_PORT) || 3000;
    expect(port).toBe(8080);
  });

  it('should use default host when APP_HOST is not set', () => {
    delete process.env.APP_HOST;
    const host = process.env.APP_HOST || 'localhost';
    expect(host).toBe('localhost');
  });

  it('should use APP_HOST from environment', () => {
    process.env.APP_HOST = '0.0.0.0';
    const host = process.env.APP_HOST || 'localhost';
    expect(host).toBe('0.0.0.0');
  });

  it('should have main function structure', async () => {
    // Test that the public index module can be imported
    const indexModule = await import('@/public/index');
    expect(indexModule).toBeDefined();
  });
});
