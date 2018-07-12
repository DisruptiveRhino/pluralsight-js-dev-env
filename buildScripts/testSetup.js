// this file isn't tranpiled, so must use CommonJS and ES5

// Register babel to tranpile before our tests run.
require('babel-register')();

// Disable wepack features that Moca doesn't understand.
require.extensions['.css'] = function() {}; //this treats the testing of this as if it were an empty function.
