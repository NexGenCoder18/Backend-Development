const fs = require("fs");

console.log("starting");
// fs.writeFileSync("hello.txt", "Hello from Node.js");
fs.writeFile("hello2.txt", "Hello from Node.js", () => {
  console.log("done");
  fs.readFile("hello2.txt", (err, data) => {
    console.log(err, data.toString());
  });
});

fs.appendFile("hello.txt", " priyanshurobo", (e, d) => {
  console.log(d);
});

console.log("ending");
