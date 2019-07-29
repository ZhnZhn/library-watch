import baseConfig from './ava.config.js';

export default {
   ...baseConfig,
   files: [
     "./js/**/__tests__/**/*.test.js"
   ]
}