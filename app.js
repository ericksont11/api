const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const students = require('./students.json')
const topics = require('./topics.json')
const cors = require('cors')

app.use(cors())

app.get('/students', (req, res) => {
  res.send(students)
})

app.get('/topics', (req, res) => {
  res.send(topics)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})