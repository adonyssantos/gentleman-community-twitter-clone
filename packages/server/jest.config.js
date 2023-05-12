/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
  clearMocks: true,
  coverageProvider: 'v8',
  setupFiles: ['dotenv/config'],
  transform: {
    '^.+\\.mjs$': 'ts-jest',
  },
};
