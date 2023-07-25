

function createHeader(){
    const headerDiv = document.createElement('div')
    const headerTitle = document.createElement('h1')

    headerDiv.classList.add('header')
    headerTitle.classList.add('header-title')
    headerTitle.textContent = 'RESTAURANT PAGE'


    headerDiv.appendChild(headerTitle)
    document.getElementById('content').appendChild(headerDiv)
}


function createContent(){
    const imageDiv = document.createElement('div')
    const image = document.createElement('img')
    image.src = './src/restaurant.jpg'
    image.alt = 'A restaurant.'

    // imageDiv.classList.add('restaurant-image')

    imageDiv.appendChild(image)
    document.getElementById('content').appendChild(imageDiv)
    
}

export {createHeader, createContent}