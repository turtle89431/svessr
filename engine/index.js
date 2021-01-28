const app = require("../public/App");
var fs = require('fs')
module.exports = function(filePath, options, callback) { // define the template engine
    let { url, sprops, title } = options
    const { html } = app.render({ url, sprops, title })
    let mout = `
    <div id="app">${html}</div>
    <script src="/bundle.js"></script>
  `
    fs.readFile(filePath, function(err, content) {
        if (err) return callback(err)
        var rendered = content.toString().replace("{{app}}", mout).replace("{{title}}", title)
        return callback(null, rendered)
    })

}