const newsRouter = require("./news");
const siteRouter = require("./site");

function route(app) {
    // app.get("/", (req, res) => {
    //     // res.send(`<h1 style="color:red;">Hello World!</h1>`)
    //     res.render("home");
    // });
    app.use("/news", newsRouter);
    app.use("/", siteRouter);
}

module.exports = route;
