const menuMessage =document.querySelector('#menuMessage')
const eventMessage =document.querySelector('#eventMessage')

const menuSubmit= document.querySelector('#menuSubmit')
const eventSubmit= document.querySelector('#eventSubmit')


const addMenuItem = async () => {
    const name = document.querySelector('#name').value;
    const description = document.querySelector('#description').value;
    const price = document.querySelector('#price').value;
    const url = document.querySelector('#image-url').value;

    const response = await fetch(`/api/v1/menu`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'},
            body: JSON.stringify({name, description, price, url})
        })
    
    const result= await response.json()
    menuMessage.innerHTML = result.message
    
}

(async () => {
    await addMenuItem()
});

menuSubmit.addEventListener('click', addMenuItem )


const addEventItem = async () => {

    const response = await fetch(`/api/v1/events`)
    return await response.json()
    
}
(async () => {
    await addEventItem()
})();
    