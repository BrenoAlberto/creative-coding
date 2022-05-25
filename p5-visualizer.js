const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sketch = "/color/3.js";

//Set view engine to ejs
app.set("view engine", "ejs");

//Tell Express where we keep our index.ejs
app.set("views", __dirname + "/views");
app.use("/scripts", express.static(__dirname + "/node_modules/p5/lib/"));
app.use("/sketch", express.static(__dirname + "/Learning/p5/"));

//Use body-parser
app.use(bodyParser.urlencoded({ extended: false }));

//Instead of sending Hello World, we render index.ejs
app.get("/", (req, res) => {
  res.render("p5", { sketch });
});

app.listen(8080, () => {
  console.log("Server online on http://localhost:8080");
});
