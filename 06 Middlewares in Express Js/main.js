const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const blog = require("./routes/blog");

// app.use(express.static("public"));

app.use("/blog", blog);

// Middleware 1 - Logger for our application
app.use((req, res, next) => {
  console.log(req.headers);
  req.priyanshu = "I am priyanshu";

  fs.appendFileSync(
    "log.txt",
    `${Date.now()} is a ${req.method} request for ${req.url}\n`,
    { flag: "a" }
  );
  console.log(`${Date.now()} is a ${req.method} request for ${req.url}`);
  //   res.send("Hacked by Middleware 1");
  next();
});

// Middleware 2
app.use((req, res, next) => {
  console.log("m2");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Hello about! " + req.priyanshu);
});

app.get("/contact", (req, res) => {
  res.send("Hello World contact!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
