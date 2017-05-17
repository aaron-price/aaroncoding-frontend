/*
This server is meant to replace the default but with the addition of headers for forcing HTTPS
Default:
 "start:prod": "node_modules/serve/bin/serve.js -s build",
 */
var express = require('express')
var app = express()
const path = require('path')
const publicPath = path.join(__dirname + "/../build")
const anyPath = /^\/(.*)/
app.get(anyPath, function (req, res, next) {
    if(req.headers['x-forwarded-proto']!='https')
        res.redirect('https://aaroncoding.com'+req.url)
    else
        next() /* Continue to other routes if we're not redirecting */
})

app.use(express.static(publicPath))

app.get(anyPath, function (req, res) {
    res.sendFile(publicPath + '/index.html')
})

app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!')
})