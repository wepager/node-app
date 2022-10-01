module.exports = function(app) {

app.get('/', function(req, res) {
    console.dir(req.vhost)
    res.send('Welcome to our API!');
});

app.use(function (req,res) {
    res.sendStatus(404)
})

return app;
}