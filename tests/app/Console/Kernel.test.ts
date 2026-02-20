import { describe, it, expect, beforeEach } from 'vitest';
import { Application } from '@orchestr-sh/orchestr';
import { AppConsoleKernel } from '@/app/Console/Kernel';

describe('AppConsoleKernel', () => {
  let app: Application;
  let kernel: AppConsoleKernel;

  beforeEach(() => {
    app = new Application(process.cwd());
    kernel = new AppConsoleKernel(app);
  });

  it('should be an instance of ConsoleKernel', () => {
    expect(kernel).toBeInstanceOf(AppConsoleKernel);
  });

  it('should have access to the application', () => {
    expect(kernel['app']).toBe(app);
  });

  it('should have registerCommands method', () => {
    expect(typeof kernel['registerCommands']).toBe('function');
  });

  it('should register commands without errors', () => {
    expect(() => kernel['registerCommands']()).not.toThrow();
  });
});
