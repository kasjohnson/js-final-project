
const express = require('express')
const router = express.Router()


const path = require('path')
const root = path.join(__dirname, '..', 'public')

//webpage routes

router.get('/menu', (_, response) =>{
    response.sendFile('index.html', {root})
})

router.get('/events', (_, response) =>{
    response.sendFile('index.html', {root})
})

router.get('/menu/:id', (_, response) =>{
    response.sendFile('menu.html', {root})
})

router.get('/event/:id', (_, response) =>{
    response.sendFile('event.html', {root})
})


router.post('/menu', (_, response) =>{
    response.sendFile('admin.html', {root})
})

router.post('/events', (_, response) =>{

    response.sendFile('admin.html', {root})
})

module.exports = router