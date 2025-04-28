const menuList = document.querySelector('.menuList')
const eventList = document.querySelector('.eventList')
const eventDetails =document.querySelector('#eventDetails')

const getMenuItems = async () => {
        const response = await fetch('api/v1/menu')
        return await response.json()
}

const getMenuItemById = async id => {
    const response = await fetch(`api/v1/menu/${id}`)
    return await response.json()
}

const showMenuList = menuItems => {
    menuItems.forEach(({name, description, price, image}) => {
        const menuItem = document.createElement('div')
        menuItem.innerHTML = `
        <img src ="${image}" width="300px">
        <h2>${name}</h2>
         <p> ${description}</p>
         <p> ${price}</p>
         `
        menuList.appendChild(menuItem)
    });
}

const showMenuDetails = async id => {
    const {name, description, price, url} = await getMenuItemById(id)
}

;(async () => {
    const menuItems = await getMenuItems()
    showMenuList(menuItems)
    const eventItems = await getEventItems()
    showEventList(eventItems)

    if (window.location.pathname.startsWith("/event/")) {
        document.addEventListener("DOMContentLoaded", async () => {
            await getEventItemById();
        });
    }
})()


const getEventItems = async () => {
    const response = await fetch('api/v1/events')
    return await response.json()
}

const showEventList = eventItems => {
    eventItems.forEach(({_id,name, date}) => {
        const eventItem = document.createElement('div')
        eventItem.innerHTML = `
        <a href="/event.html?${_id}" class= "event-link">
            <h2>${name}</h2></a>
            <p> ${date}</p>
        `
        eventList.appendChild(eventItem)
    });
}


