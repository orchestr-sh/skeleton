import { describe, it, expect } from 'vitest';
import { Controller } from '../../../app/Http/Controllers/Controller';
import { Controller as BaseController } from '@orchestr-sh/orchestr';

describe('Controller', () => {
  it('should extend BaseController', () => {
    expect(Controller.prototype).toBeInstanceOf(BaseController);
  });

  it('should be a class', () => {
    expect(typeof Controller).toBe('function');
  });

  it('should be instantiable', () => {
    const app = new (require('@orchestr-sh/orchestr').Application)(process.cwd());
    const controller = new Controller(app);
    expect(controller).toBeInstanceOf(Controller);
    expect(controller).toBeInstanceOf(BaseController);
  });
});
