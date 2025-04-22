
const express = require('express')
const app = express()
const port = 3010

// // middleware
// app.use(express.static('public'))
// app.use(express.json())

// // routes
// app.use('/api/v1/food-truck', require('./public/routes/api/v1/food-truck'))
// app.use('/', require('./public/routes/api/v1/food-truck'))


// server
const url = 'http://localhost:3010/'
const message = `Server is running on port ${port}. Visit ${url} in your browser.`
app.listen(port, () => console.log(message))