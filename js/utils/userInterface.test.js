import { describe, it, expect } from 'vitest';
import { isActivePath } from './userInterface.js';

describe('isActivePath', () => {
  it(`returns true when the current path matches the given path`, () => {
    expect(isActivePath('/login', '/login')).toBe(true);
  });
  it(`returns true when the current path includes the given path`, () => {
    expect(isActivePath('/login', '/login/forgot-password')).toBe(true);
  });
  it(`returns false when the current path does not match or include the given path`, () => {
    expect(isActivePath('/login', '/register')).toBe(false);
  });
  it(`returns true when the given path is '/' and the current path is '/'`, () => {
    expect(isActivePath('/', '/')).toBe(true);
  });
  it(`returns true when the given path is '/' and the current path is '/index.html'`, () => {
    expect(isActivePath('/', '/index.html')).toBe(true);
  });
});
