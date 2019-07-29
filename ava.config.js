export default {
  "babel": false,
  "compileEnhancements": false, 
  "files": [
      "./js/**/__tests__/**/*.test.js"
   ],
  "require": [
      "./test/setupGlobal.test.js",
      "./test/setupEnzyme.test.js"
  ]
}