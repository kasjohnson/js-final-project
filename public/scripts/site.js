const menuList = document.querySelector('.menuList')
const eventList = document.querySelector('.eventList')

const getMenuItems = async () => {
    const response = await fetch('api/v1/menu')
    return await response.json()
}

const getMenuItemById = async id => {
    const response = await fetch(`/api/v1/menu/${id}`)
    return await response.json()
}

const getEventItems = async () => {
    const response = await fetch('api/v1/events')
    return await response.json()
}

const getEventItemById = async id => {
    const response = await fetch(`/api/v1/events/${id}`)
    return await response.json()
}

const showMenuList = menuItems => {
    menuItems.forEach(({id, name, description, price, url}) => {
        const menuItem = document.createElement('div')
        menuItem.className = "menu-item"
        menuItem.innerHTML = `
        <img src ="${url}">
        <h2>${name}</h2>
        <p> ${description}</p>
        <p> ${price}</p>
        `
        menuItem.onclick = () => showMenuDetails(id)
        menuList.appendChild(menuItem)
    });
}

const showMenuDetails = async id => {
    const {name, description, price, url} = await getMenuItemById(id)

}

;(async () => {
    const menuItems = await getMenuItems()
    showMenuList(menuItems)
})

const showEventList = eventItems => {
    eventItems.forEach(({id, name, location, date, time}) => {
        const eventItem = document.createElement('div')
        eventItem.className = "event-item"
        eventItem.innerHTML = `
        <h2>${name}</h2>
        <p> ${location}</p>
        <p> ${date}</p>
        <p> ${time}</p>
        `
        eventItem.onclick = () => showEventDetails(id)
        eventList.appendChild(eventItem)
    });
}

const showEventDetails = async id => {
    const {name, location, date, time} = await getEventItemById(id)

}

;(async () => {
    const eventItems = await getEventItems()
    showEventList(eventItems)
})