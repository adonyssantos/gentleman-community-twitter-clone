import { describe, expect, test } from '@jest/globals';
import { generateFromEmail, generateFromName } from '../usernameGenerator';

describe('username generator from name', () => {
  test('generating username for basic pattern', async () => {
    // mockMath.random() = 1
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0;
    global.Math = mockMath;

    const randomDigits = 1;
    const actual: string = generateFromName('John Arnold Doe', randomDigits).slice(
      0,
      -randomDigits,
    );
    expect(actual).toBe('johnarnolddoe');
  });

  // John Arnold Doe -> john_arlnold_doe
  test('generating username for underscore pattern', async () => {
    // mockMath.random() = 2
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.2;
    global.Math = mockMath;

    const randomDigits = 1;
    const actual: string = generateFromName('John Arnold Doe', randomDigits).slice(
      0,
      -randomDigits,
    );
    expect(actual).toBe('john_arnold_doe');
  });

  test('generating username for dot pattern', async () => {
    // mockMathm.random() = 3
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.4;
    global.Math = mockMath;

    const randomDigits = 1;
    const actual: string = generateFromName('John Arnold Doe', randomDigits).slice(
      0,
      -randomDigits,
    );
    expect(actual).toBe('john.arnold.doe');
  });

  test('generating username for dot pattern and initials', async () => {
    // mockMath.random() = 4
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.6;
    global.Math = mockMath;

    const randomDigits = 1;
    const actual: string = generateFromName('John Arnold Doe', randomDigits).slice(
      0,
      -randomDigits,
    );
    expect(actual).toBe('john.a.doe');
  });

  test('generating username for underscore pattern and initials', async () => {
    // mockMath.random() = 5
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.8;
    global.Math = mockMath;

    const randomDigits = 1;
    const actual: string = generateFromName('John Arnold Doe', randomDigits).slice(
      0,
      -randomDigits,
    );
    expect(actual).toBe('john_a_doe');
  });

  test('generating a username that input name is longer than 15 letters', async () => {
    // mockMath.random() = 1
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0;
    global.Math = mockMath;

    const randomDigits = 1;
    const actual: string = generateFromName('John Arnold Doe Developer', randomDigits).slice(
      0,
      -randomDigits,
    );
    expect(actual).toBe('johnarnolddoede');
  });
});

describe('username generator from email', () => {
  test('generating username for basic pattern', async () => {
    // mockMath.random() = 1
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0;
    global.Math = mockMath;

    const randomDigits = 1;
    const actual: string = generateFromEmail('johnarnolddev@gmail.com', randomDigits).slice(
      0,
      -randomDigits,
    );
    expect(actual).toBe('johnarnolddev');
  });

  test('generating username for underscore prefix pattern', async () => {
    // mockMath.random() = 2
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.4;
    global.Math = mockMath;

    const randomDigits = 1;
    const actual: string = generateFromEmail('johnarnolddev@gmail.com', randomDigits).slice(
      0,
      -randomDigits,
    );
    expect(actual).toBe('_johnarnolddev');
  });

  test('generating username for dot prefix pattern', async () => {
    //mockMath.random() = 3
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.7;
    global.Math = mockMath;

    const randomDigits = 1;
    const actual: string = generateFromEmail('johnarnolddev@gmail.com', randomDigits).slice(
      0,
      -randomDigits,
    );
    expect(actual).toBe('.johnarnolddev');
  });

  test('generating a username that input email is longer than 15 letters', async () => {
    // mockMath.random() = 1
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0;
    global.Math = mockMath;

    const randomDigits = 1;
    const actual: string = generateFromEmail('johnarnolddoedev@gmail.com', randomDigits).slice(
      0,
      -randomDigits,
    );
    expect(actual).toBe('johnarnolddoede');
  });
});
