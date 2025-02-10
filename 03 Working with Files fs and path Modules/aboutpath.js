import path from "path";

// console.log(path)

let myPath =
  "C:\\Users\\priya\\OneDrive\\Coding\\Backend Development\\03 Working with Files fs and path Modules\\hello.txt";
console.log(path.extname(myPath));
console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.parse(myPath));
console.log(path.join("C:", "Users", "priya", "OneDrive", "Coding", "Backend Development", "03 Working with Files fs and path Modules", "hello.txt"));




