import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { createApp } from '@/bootstrap/app';
import { AppConsoleKernel } from '@/app/Console/Kernel';

describe('CLI Bootstrap', () => {
  const originalArgv = process.argv;
  const originalExit = process.exit;
  const originalError = console.error;

  beforeEach(() => {
    vi.clearAllMocks();
    process.exit = vi.fn() as any;
    console.error = vi.fn();
  });

  afterEach(() => {
    process.argv = originalArgv;
    process.exit = originalExit;
    console.error = originalError;
  });

  it('should create app instance', () => {
    const app = createApp();
    expect(app).toBeDefined();
  });

  it('should create console kernel with app', () => {
    const app = createApp();
    const kernel = new AppConsoleKernel(app);
    expect(kernel).toBeInstanceOf(AppConsoleKernel);
  });

  it('should have main function structure', async () => {
    // Test that the CLI module can be imported
    const cliModule = await import('@/bootstrap/cli');
    expect(cliModule).toBeDefined();
  });
});
