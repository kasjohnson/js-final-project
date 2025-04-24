
const express = require('express')
const router = express.Router()


const path = require('path')
const root = path.join(__dirname, 'public')

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


router.post('/menu/', (_, response) =>{
    response.sendFile('index.html', {root})
})

router.post('/events', (_, response) =>{

    response.sendFile('index.html', {root})
})

module.exports = router