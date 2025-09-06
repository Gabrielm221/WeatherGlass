import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import rootConfig from '../test/jest.config.js'; // import do config raiz

// Simula __dirname em ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const root = resolve(__dirname, '..');

export default {
  ...rootConfig,
  rootDir: root,
  displayName: 'end2end-tests',
  setupFilesAfterEnv: ['<rootDir>/test/jest-setup.ts'],
  testMatch: ['<rootDir>/test/**/*.test.ts'],
};
