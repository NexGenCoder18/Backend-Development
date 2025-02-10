import fs from 'fs/promises';

let a = await fs.readFile("hello.txt");

let b = await fs.appendFile("hello.txt", "\n\n\n\n\n Hello from Node.js too"); 

console.log(a.toString(), b)