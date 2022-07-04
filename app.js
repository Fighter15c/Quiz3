const { urlencoded } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

mongoose.connect("mongodb://localhost:27017/terminalProducts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/images", express.static(path.resolve(__dirname, "assets/images")));
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use(require("./routes/productroute"));

app.listen(3000, () => console.log("Server started listening on port: 3000"));
