
const express = require('express')
const router = express.Router()


const path = require('path')
const root = path.join(__dirname, 'public')

//webpage routes

router.get('api/v1/menu', (_, response) =>{
    response.sendFile('index.html', {root})
})

router.get('api/v1/events', (_, response) =>{
    response.sendFile('index.html', {root})
})

router.get('api/v1/menu/:id', (_, response) =>{
    response.sendFile('index.html', {root})
})

router.get('api/v1/event/:id', (_, response) =>{
    response.sendFile('event.html', {root})
})


router.post('api/v1/menu', (_, response) =>{
    response.sendFile('index.html', {root})
})

router.post('api/v1/events', (_, response) =>{

    response.sendFile('index.html', {root})
})

module.exports = router