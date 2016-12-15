const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('ELLO GOV\'NA')
})

app.listen(3000)