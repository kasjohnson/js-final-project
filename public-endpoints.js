const path = require('path')
const express = require('express')

const router = express.Router()

const root = path.join(__dirname, 'public')

router.get('/', (_, response) => {
    response.send('hi')
})



module.exports = router