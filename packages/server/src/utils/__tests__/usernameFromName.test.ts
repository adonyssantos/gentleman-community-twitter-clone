import { describe, expect, test } from '@jest/globals';
import { generateFromName } from '../usernameGenerator';

describe('username generator from name', () => {
  test('generating username', async () => {
    const actual: string = generateFromName('john f doe');
    expect(actual).toBe('johnfdoe');
  });

  test('generating username and adding one random digit', (): void => {
    const actual: string = generateFromName('john f doe', 1);
    expect(actual.slice(0, -1)).toBe('johnfdoe');
  });

  test('generating username and adding two random digit', (): void => {
    const actual: string = generateFromName('john f doe', 2);
    expect(actual.slice(0, -2)).toBe('johnfdoe');
  });

  test('generating username and adding three random digit', (): void => {
    const actual: string = generateFromName('john f doe', 3);
    expect(actual.slice(0, -3)).toBe('johnfdoe');
  });

  test('generating username and adding four random digit', (): void => {
    const actual: string = generateFromName('john f doe', 4);
    expect(actual.slice(0, -4)).toBe('johnfdoe');
  });

  test('generating username and adding five random digit', (): void => {
    const actual: string = generateFromName('john f doe', 5);
    expect(actual.slice(0, -5)).toBe('johnfdoe');
  });

  test('generating username and adding six random digit', (): void => {
    const actual: string = generateFromName('john f doe', 6);
    expect(actual.slice(0, -6)).toBe('johnfdoe');
  });
});
