const menuMessage =document.querySelector('#menuMessage')
const eventMessage =document.querySelector('#eventMessage')

const menuSubmit= document.querySelector('#menuA')
const eventSubmit= document.querySelector('#eventsA')


const addMenuItem = async () => {
    const name = document.querySelector('#name').value
    const description = document.querySelector('#description').value
    const price = document.querySelector('#price').value
    const url = document.querySelector('#image-url').value

    const response = await fetch(`/api/v1/menu`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'},
            body: JSON.stringify({name, description, price, url})
        })
    
    const result= await response.json()

    menuMessage.textContent = result.message

    menuMessage.classList.remove("red")
    menuMessage.classList.remove("green")
    const condition = menuMessage.innerHTML.includes("Item already exists.")
    if(!condition){
        menuMessage.classList.add("green")
    }
    else{
        menuMessage.classList.add("red")
    }
    
}

menuSubmit.addEventListener('submit', async function(event) {
    event.preventDefault() 
    await addMenuItem()  
    const name = document.querySelector('#name').value=""
    const description = document.querySelector('#description').value=""
    const price = document.querySelector('#price').value=""
    const url = document.querySelector('#image-url').value=""
})


const addEventItem = async () => {
    const name = document.querySelector('#eventName').value
    const location = document.querySelector('#location').value
    const date = document.querySelector('#date').value
    const time = document.querySelector('#time').value
console.log(name, location, date, time)
    const response = await fetch(`/api/v1/events`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'},
            body: JSON.stringify({name, location, date, time})
        })
    
    const result= await response.json()
    eventMessage.textContent = result.message

    eventMessage.classList.remove("red")
    eventMessage.classList.remove("green")
    const condition = eventMessage.innerHTML.includes("Event already exists.")
    if(!condition){
        eventMessage.classList.add("green")
    }
    else{
        eventMessage.classList.add("red")
    }
}

eventSubmit.addEventListener('submit', async function(event) {
    event.preventDefault() 
    await addEventItem()  
    const name = document.querySelector('#eventName').value=""
    const location = document.querySelector('#location').value=""
    const date = document.querySelector('#date').value=""
    const time = document.querySelector('#time').value=""
})


    