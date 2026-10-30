import { defineConfig } from '@rstest/core';

export default defineConfig({
  testEnvironment: 'node',
  globals: true,

  roots: [
    "<rootDir>/src/components/charts",
    "<rootDir>/src/flux/",
    "<rootDir>/src/utils/"
  ]  
});