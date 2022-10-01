module.exports = function (app) {
    const fs = require('fs');
    app.use(cors({ origin: '*' }))
    
    var dir = fs.readdirSync('./control room/api')
    dir.length = dir.length-1
    for (const val of dir) {
        app.use(`/${val}/*`, require(`./${val}/index`))
    }
    return app;
}