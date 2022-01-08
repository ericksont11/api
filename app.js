const express = require('express')
const app = express()
const port = 3000
const db = require('./db.json')

app.get('/', (req, res) => {
  res.send(db)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})