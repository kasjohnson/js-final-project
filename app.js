const express = require('express')

const foodTruckApiRoutes = require('../../../api/v1/food-truck')

const app = express()
const port = 3000

app.use(express.json())
app.use(express.static('public'))

app.use('/', require('../../static.js'))

app.use('api/v1/food-truck', foodTruckApiRoutes)

app.listen(port,() => console.log(`Running: http://localhost:${port}`))