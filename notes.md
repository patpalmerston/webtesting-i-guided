1. yarn add jest --dev

2. change scripts to 
"test": "jest --watchAll" // this works like nodemon for testing

3. yarn test // run test this will search for tests to run

// in order for jest to work it has to be connected to a git repository. It works through file changes from git.
// test folders are like this index.test.js or index.spec.js and should be kept in the same directory as the file needed to be tested
// write a test that fails first, proof of fail in jest. write just enough code to make it pass and run test again.

.4 in calculator file const { add } = require('./calculator'); // step4

.5 step 5 in calculator.js