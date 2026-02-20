import { describe, it, expect } from 'vitest';
import { Controller as BaseController } from '@orchestr-sh/orchestr';

describe('Controller', () => {
  it('should be importable', async () => {
    const { Controller } = await import('../../../../app/Http/Controllers/Controller');
    expect(Controller).toBeDefined();
    expect(typeof Controller).toBe('function');
  });

  it('should extend BaseController', async () => {
    const { Controller } = await import('../../../../app/Http/Controllers/Controller');
    expect(Controller.prototype).toBeInstanceOf(BaseController);
  });
});
