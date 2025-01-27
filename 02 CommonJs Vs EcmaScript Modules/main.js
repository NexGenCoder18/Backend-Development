// import { a, b, c, d, e, f } from './mymodule.js';
// console.log(a, b, c, d, e, f); // 1, 3, 4, 6

// import obj from './mymodule.js';
// console.log(obj); // { x: 5, y: 6, z: 7 }

const a = require('./mymodule2.js');
console.log(a); // { a: 1, b: 2 }

console.log(__dirname, __filename);