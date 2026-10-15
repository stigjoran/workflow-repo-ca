import { describe, it, expect, beforeEach } from 'vitest';
import { saveUser, getUsername, clearStorage } from './storage.js';

beforeEach(() => {
  clearStorage();
});

describe(`getUsername`, () => {
  it(`expect .toBeNull() when no user is saved`, () => {
    expect(getUsername()).toBeNull();
  });
  it(`returns the name of the saved user`, () => {
    saveUser({ data: { name: 'Stig' } });
    expect(getUsername()).toBe('Stig');
  });
});
