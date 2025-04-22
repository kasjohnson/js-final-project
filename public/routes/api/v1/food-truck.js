
const router = require('express').Router()
const { getCollection, ObjectId } = require('../../../../dbconnect.js')

// routes
router.get('/', async (req, res) => 
    {
        // const collection = getColelction('food-truckDB', 'menuItems')
        // response.send(collection)
        response.send('hi')
    })