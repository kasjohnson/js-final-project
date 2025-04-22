
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
    const number = parseInt(id)
    const collection =  await getCollection('food-truckDB', 'menuItems')

    if (isNaN(number)){
        const found = await collection.findOne({"name": id})
        if(found) return response.send(found)
    }
    else{
        const found = await collection.findOne({"number": number})
        if(found) return response.send(found)
        }
})

router.get('/events/:id', async (request, response) => {
    const {id} = request.params
    const collection =  await getCollection('food-truckDB', 'events')
})

router.post('/menu', async (request, response) => {
    const collection =  await getCollection('food-truckDB', 'menuItems')
})

router.post('/events', async (request, response) => {
    const collection =  await getCollection('food-truckDB', 'menuItems')

})

module.exports = router