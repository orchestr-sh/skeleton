import { describe, it, expect } from 'vitest';
import path from 'path';
import viewConfig from '@/config/view';

describe('View Config', () => {
  it('should have paths array', () => {
    expect(viewConfig.paths).toBeDefined();
    expect(Array.isArray(viewConfig.paths)).toBe(true);
  });

  it('should have default views path', () => {
    const expectedPath = path.join(process.cwd(), 'resources', 'views');
    expect(viewConfig.paths[0]).toBe(expectedPath);
  });

  it('should have extensions array', () => {
    expect(viewConfig.extensions).toBeDefined();
    expect(Array.isArray(viewConfig.extensions)).toBe(true);
  });

  it('should include .html extension', () => {
    expect(viewConfig.extensions).toContain('.html');
  });

  it('should include .orchestr.html extension', () => {
    expect(viewConfig.extensions).toContain('.orchestr.html');
  });
});
