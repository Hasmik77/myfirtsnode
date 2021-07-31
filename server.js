
var express = require('express')
var app = express()
var port = 3000

app.get( (req, res,next) => {
    next()
})

app.get('/', (req, res,next) => {
  res.send('You have already logged in')
  console.log('patasxan')
})
app.get('/', (req, res,) => {
    res.send('Logout Success')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})