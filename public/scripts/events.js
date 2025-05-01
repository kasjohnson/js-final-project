const eventDetails =document.querySelector('#eventDetails')

const getEventItemById = async () => {
    const id = window.location.pathname.split("/").pop()

    const response = await fetch(`/api/v1/events/${id}`)
    const event = await response.json()

    eventDetails.innerHTML=`
        <h3> ${event.name}</h3>
        <p><strong>Location:</strong> ${event.location}</p>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Time:</strong> ${event.time}</p>
    `
}
(async () => {
    await getEventItemById()
})();

