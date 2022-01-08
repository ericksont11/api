const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const students = require('./students.json')
const topics = require('./topics.json')
const instructors = require('./instructors.json')
const cors = require('cors')

app.use(cors())

app.get('/students/:key', (req, res) => {
  let params = req.params
  res.send(params)
})

app.get('/topics', (req, res) => {
  res.send(topics)
})

app.get('/instructors', (req, res) => {
  res.send(instructors)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})