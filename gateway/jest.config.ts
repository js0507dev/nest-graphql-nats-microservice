import type { Config } from '@jest/types';
import { pathsToModuleNameMapper } from 'ts-jest/utils';

const { compilerOptions } = require('./tsconfig.json');

const config: Config.InitialOptions = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  // globalSetup: '<rootDir>/src/test/globalSetup.ts',
  // globalTeardown: '<rootDir>/src/test/globalTeardown.ts',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.graphql$': 'graphql-import-node/jest', // graphql for jest
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src' }),
  testTimeout: 3000,
};

export default config;
