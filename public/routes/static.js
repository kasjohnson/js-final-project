
const path = require('path')
const router = require('express').Router()

const root = path.join(__dirname, '..', 'public')

router.get('/', (request, response) => {
    response.sendFile('index.html', { root })
})

router.get('/pokemon/:id', (request, response) => {
    response.sendFile('index.html', { root })
})

router.get('/type/:type', (request, response) => {
    response.sendFile('index.html', { root })
})

module.exports = router