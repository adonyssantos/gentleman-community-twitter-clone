import { describe, expect, test } from '@jest/globals';
import { generateFromEmail } from '../usernameGenerator';

describe('username generator from email', () => {
  test('generating containing no special character in the name', async () => {
    const actual: string = generateFromEmail('lakshminarayan@example.com');
    expect(actual).toBe('lakshminarayan');
  });

  test('generating with special character in the name', (): void => {
    const actual: string = generateFromEmail('lakshmi.narayan@example.com');
    expect(actual).toBe('lakshminarayan');
  });

  test('generating containing no special character in the name and adding one random digtest', (): void => {
    const actual: string = generateFromEmail('lakshminarayan@example.com', 1);
    expect(actual.slice(0, -1)).toBe('lakshminarayan');
  });

  test('generating with special character in the name and adding one random digtest', (): void => {
    const actual: string = generateFromEmail('lakshmi.narayan@example.com', 1);
    expect(actual.slice(0, -1)).toBe('lakshminarayan');
  });

  test('generating containing no special character in the name and adding two random digtest', (): void => {
    const actual: string = generateFromEmail('lakshminarayan@example.com', 2);
    expect(actual.slice(0, -2)).toBe('lakshminarayan');
  });

  test('generating with special character in the name and adding two random digtest', (): void => {
    const actual: string = generateFromEmail('lakshmi.narayan@example.com', 2);
    expect(actual.slice(0, -2)).toBe('lakshminarayan');
  });

  test('generating containing no special character in the name and adding three random digtest', (): void => {
    const actual: string = generateFromEmail('lakshminarayan@example.com', 3);
    expect(actual.slice(0, -3)).toBe('lakshminarayan');
  });

  test('generating with special character in the name and adding three random digtest', (): void => {
    const actual: string = generateFromEmail('lakshmi.narayan@example.com', 3);
    expect(actual.slice(0, -3)).toBe('lakshminarayan');
  });

  test('generating containing no special character in the name and adding four random digtest', (): void => {
    const actual: string = generateFromEmail('lakshminarayan@example.com', 4);
    expect(actual.slice(0, -4)).toBe('lakshminarayan');
  });

  test('generating with special character in the name and adding four random digtest', (): void => {
    const actual: string = generateFromEmail('lakshmi.narayan@example.com', 4);
    expect(actual.slice(0, -4)).toBe('lakshminarayan');
  });

  test('generating containing no special character in the name and adding five random digtest', (): void => {
    const actual: string = generateFromEmail('lakshminarayan@example.com', 5);
    expect(actual.slice(0, -5)).toBe('lakshminarayan');
  });

  test('generating with special character in the name and adding five random digtest', (): void => {
    const actual: string = generateFromEmail('lakshmi.narayan@example.com', 5);
    expect(actual.slice(0, -5)).toBe('lakshminarayan');
  });

  test('generating containing no special character in the name and adding six random digtest', (): void => {
    const actual: string = generateFromEmail('lakshminarayan@example.com', 6);
    expect(actual.slice(0, -6)).toBe('lakshminarayan');
  });

  test('generating with special character in the name and adding six random digtest', (): void => {
    const actual: string = generateFromEmail('lakshmi.narayan@example.com', 6);
    expect(actual.slice(0, -6)).toBe('lakshminarayan');
  });
});
