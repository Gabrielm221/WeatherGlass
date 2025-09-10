import rootConfig from '../jest.config.js'; // config raiz

export default {
  ...rootConfig,
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { useESM: true }],
  },
  extensionsToTreatAsEsm: ['.ts'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/test/jest-setup.ts'],
  displayName: 'end2end-tests',
  testMatch: ['<rootDir>/test/**/*.test.ts'],
};
