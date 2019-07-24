// console.log(arguments);

//console.log(require('module').wrapper);

//module.exports
const C = require('./test-module1');

const c1 = new C();

console.log(c1.add(2, 4));

//exports
//const calc2 = require('./test-module2');

const { add, multiply, divide } = require('./test-module2');
console.log(add(3, 5));
console.log(multiply(3, 5));
console.log(divide(3, 5));

//caching

require('./test-module3')();
require('./test-module3')();
require('./test-module3')();
