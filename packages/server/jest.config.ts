import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  testEnvironment: 'node',
  clearMocks: true,
  coverageProvider: 'v8',
  setupFiles: ['dotenv/config'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@root/shared/(.*)$': '<rootDir>../shared/src/$1',
  },
};

export default jestConfig;
