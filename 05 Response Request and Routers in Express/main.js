const express = require("express");
const blog = require("./routes/blog");

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use("/blog", blog);

app
  .get("/", (req, res) => {
    console.log("Hello World get!");
    res.send("Hello World get!");
  })
  .post("/", (req, res) => {
    console.log("Hello World post!");
    res.send("Hello World post!");
  })
  .put("/", (req, res) => {
    console.log("Hello World put!");
    res.send("Hello World put!");
  });

app.get("/index", (req, res) => {
  console.log("Hey its index");
  res.sendFile("templates/index.html", { root: __dirname });
});

app.get("/api", (req, res) => {
  res.json({
    message: "Hello World",
    code: 200,
    data: ["priyanshu", "singh"],
    error: null,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});