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
        menuItem
    });
}