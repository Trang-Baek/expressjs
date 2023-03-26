const { engine } = require("express-handlebars");
const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const port = 4000;

app.use(express.static(path.join(__dirname,"public")));

//HTTP logger
app.use(morgan("combined"));

// template engine
app.engine(".hbs", engine({extname:'.hbs'}));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
    // res.send(`<h1 style="color:red;">Hello World!</h1>`)
    res.render("home");
});
app.get("/news", (req, res) => {
    // res.send(`<h1 style="color:red;">Hello World!</h1>`)
    res.render("news");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
