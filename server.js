const path = require("path");
const express = require("express");
const app = require("./public/App.js");
const sve = require("./engine")
const server = express();
server.engine('sve', sve)
server.set('views', './views')
server.set("view engine", 'sve')
server.use(express.static(path.join(__dirname, "public")));

server.get("/api", function(req, res) {
    res.json({ api: "example" })
})

/** Make * route last */
server.get("*", function(req, res) {
    res.render('main', { title: "shit", sprops: "from Server 2", url: req.url, title: "My Page 2" })
});

const port = 3001;
server.listen(port, () => console.log(`Listening on port ${port}`));