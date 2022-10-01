$__dirname = __dirname;

require('./control room/global functions')

const express = require('express'),
    vhost = require('vhost'),
    subdomainRouter = express.Router(),
    ApiRouter = express.Router(),
    app = express(),
    fs = require('fs'),
    server = app.listen(process.env.PORT || 12345, () => {
        var port = server.address().port;
        console.log(`http://localhost:${port}\n\nhttp://nimo.localhost:${port}`);
    }),
    db=[];

app.set('view engine', 'ejs')
app.use(express.static('./lib/'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(require('./control room/header'))

app.use(vhost('nimo.nimo2000.herokuapp.com', require('./control room/subdomains/nimo/index')(subdomainRouter)))
app.use(vhost('nimo.localhost', subdomainRouter))

app.use('/api',require('./control room/api/index')(ApiRouter))

fs.readdirSync(path('views/html routers')).forEach(e => {
    e = parseString(e)[0]
    e = e
    e = '/' + e
    $e = e
    app.get(e, (req, res) => {
        e = e.substring(1, e.length)
        db.push(Date.now())
        res.render(`html routers/${e}`, { name: e || 'home',db }) // 
    })
})


app.use(require('./control room/404'))

//heroku logs --tail --app nimo2000
//heroku logs --tail --app nimo2000

//git add . 
//git commit -m 'update'

//git push heroku main

//git push
