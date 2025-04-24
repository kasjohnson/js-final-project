

const router = require('express').Router()
const { ObjectId, getCollection} = require('../../../../dbconnect.js')

// routes
router.get('/test', async (_, response) =>{
        const collection = await getCollection('food-truckDB', 'menuItems')
        const data = await collection.find({}).toArray()
        response.send(data)
    })
    
    router.get('/menu', async (_, response) => {
        const collection =  await getCollection('food-truckDB', 'menuItems')
        const found = await collection.find({}).toArray()
        const data = found.map((item) => {
            return {
                name: item.name,
                description: item.description,
                price: item.price,
                image: item.url
            }
        })
        response.send(data)
    })
    
    router.get('/events', async (request, response) => {
        const collection =  await getCollection('food-truckDB', 'events')
        const found = await collection.find({}).toArray()
        const data = found.map((event) => {
            return {
                name: event.name,
                location: event.location,
                date: event.date,
                image: event.time
            }
        })
        response.send(data)
    })
    
    router.get('/menu/:id', async (request, response) => {
        const {id} = request.params
        const collection =  await getCollection('food-truckDB', 'menuItems')
        const found = await collection.findOne({_id: new ObjectId(id)})
        if (!found) return response.status(404).send('Item not found')
            return response.send({
                name: found.name,
                description: found.description,
                price: found.price,
                image: found.url
            })
    })
    
    router.get('/events/:id', async (request, response) => {
        const {id} = request.params
        const collection =  await getCollection('food-truckDB', 'events')
        const found = await collection.findOne({_id: new ObjectId(id)})
        if (!found) return response.status(404).send('Event not found')
            return response.send({
                name: found.name,
                location: found.location,
                date: found.date,
                image: found.time
            })
    })
    
    router.post('/menu', async (request, response) => {
        const {name, description, price, url} = request.body

        if( !name || !description || !price || !url) {
            return response.status(400).send({ error: true, message: `Please provide all required fields`})
        }

        const collection = await getCollection('food-truckDB', 'menuItems')
        const found = await collection.findOne({ "name": name })
        if (found) return response.status(400).send(`Item already exists`)

        // Insert worked!
        const { acknowledged, insertedId } = await collection.insertOne({
            name,
            description,
            price,
            url
        })
        //response.send({acknowledged, insertedId})

        response.send({ message: 'Item added successfully' })
    })
    
    
    router.post('/events', async (request, response) => {
        const {name, location, date, time} = request.body

        if( !name || !location || !date || !time) {
            return response.status(400).send({ error: true, message: 'Please provide all required fields'})
        }

        const collection =  await getCollection('food-truckDB', 'events')
        const found = await collection.findOne({ "name": name })
        if (found) return response.status(400).send('Event already exists')

        // Insert worked!
        const { acknowledged, insertedId } = await collection.insertOne({
            name,
            location,
            date,
            time
        })
        //response.send({acknowledged, insertedId})

        response.send({ message: 'Event added successfully' })

    })
    
    module.exports = router
