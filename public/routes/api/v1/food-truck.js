
const router = require ('express').Router()

const {ObjectId, getCollection } = require('../../dbconnect')

router.get('/menu', async (request, response) => {
    const collection =  await getCollection('food-truckDB', 'menuItems')
})

router.get('/events', async (request, response) => {
    const collection =  await getCollection('food-truckDB', 'events')
})

router.get('/menu/:id', async (request, response) => {
    const {id} = request.params
    const collection =  await getCollection('food-truckDB', 'menuItems')
})

router.get('/events/:id', async (request, response) => {
    const {id} = request.params
    const collection =  await getCollection('food-truckDB', 'events')
})

router.get('/menu', async (request, response) => {
    const collection =  await getCollection('food-truckDB', 'menuItems')
})

router.get('/events', async (request, response) => {
    const collection =  await getCollection('food-truckDB', 'menuItems')

})

module.exports = router