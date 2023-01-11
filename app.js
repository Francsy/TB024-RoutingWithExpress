const express = require('express')
const { dirname } = require('path')
const path = require('path');

const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/pages/index.html'))
})

app.get('/about', (req, res) => {
  console.log(__dirname)
  res.sendFile(path.join(__dirname + '/pages/about.html'))
})

app.get('/location', (req, res) => {
  res.sendFile(path.join(__dirname + '/pages/location.html'))
})

app.get('/mission', (req, res) => {
  res.sendFile(path.join(__dirname + '/pages/mission.html'))
})

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname + '/pages/contact.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
