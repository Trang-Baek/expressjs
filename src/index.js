const { engine } = require("express-handlebars");
const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const port = 4000;

app.use(morgan("combined"));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
    // res.send(`<h1 style="color:red;">Hello World!</h1>`)
    res.render("home");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
