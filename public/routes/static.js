
const express = require('express')
const router = express.Router()

//webpage routes
router.get('/menu', (_, response) =>{
    response.sendFile('index.html', {root})
})

router.get('/events', (_, response) =>{
    response.sendFile('index.html', {root})
})

router.get('/menu/:id', (_, response) =>{
    response.sendFile('index.html', {root})
})

router.get('/events/:id', (_, response) =>{
    response.sendFile('index.html', {root})
})

router.get('/menu/', (_, response) =>{
    response.sendFile('index.html', {root})
})

router.get('/events', (_, response) =>{
    response.sendFile('index.html', {root})
})

module.exports = router