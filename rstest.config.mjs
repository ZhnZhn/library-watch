import { defineConfig } from '@rstest/core';

const _crIncludeDir = (
 token
) => `<rootDir>/src/${token}/__tests__/*.test.js`
, _crInclude = (...tokens) => tokens.map(_crIncludeDir);

export default defineConfig({
  globals: true,

  include: _crInclude(
    'components/charts',
    'flux',
    'utils'
  ),
  resolve: {
    alias: {
      '@testHelpers': './src/__tests__/setupHelpers.test.js'
    }
  }        
});