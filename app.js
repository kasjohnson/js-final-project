const express = require('express')

const app = express()
const port = 3000

app.use(express.json())
app.use(express.static('public'))

app.use('/', require('./public/routes/static.js'))
app.use('/api/v1/', require('./public/routes/api/v1/food-truck'))

app.listen(port,() => console.log(`Running: http://localhost:${port}`))