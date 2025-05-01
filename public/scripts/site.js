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


;(async () => {
    const menuItems = await getMenuItems()
    showMenuList(menuItems)
    const eventItems = await getEventItems()
    showEventList(eventItems)

})()


const getEventItems = async () => {
    const response = await fetch('api/v1/events')
    return await response.json()
}

const showEventList = eventItems => {
    eventItems.forEach(({_id,name, date}) => {
        const eventItem = document.createElement('div')
       
        eventItem.innerHTML = `
        <a href="event/${_id}" class= "event-link">
            <h3>${name}</h3></a>
            <p> ${date}</p>
        `
        eventList.appendChild(eventItem)

    });
}


