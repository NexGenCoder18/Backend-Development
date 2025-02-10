const e = require("express");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/blog", (req, res) => {
  res.send("Blog page");
});

app.get("/blog/:slug", (req, res) => {
  res.send(`hello ${req.params.slug}`);
});

// app.get("/blog/intro-to-express", (req, res) => {
//   res.send("Intro to Express blog post");
// });

// app.get("/blog/express-advanced", (req, res) => {
//   res.send("Express advanced blog post");
// });

// app.get("/blog/express-advanced/cool-feature", (req, res) => {
//   res.send("Cool feature blog post");
// });

app.get("/contact", (req, res) => {
  res.send("Contact page");
});

app.get("/services", (req, res) => {
  res.send("Services page");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
