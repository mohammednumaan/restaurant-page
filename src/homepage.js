import img from './restaurant.jpg'


// creates the header

const headerDiv = document.createElement('div')

function createHeader(){

    const headerTitle = document.createElement('h1')

    headerDiv.classList.add('header')
    headerTitle.classList.add('header-title')
    headerTitle.textContent = 'RESTAURANT PAGE'


    headerDiv.appendChild(headerTitle)
    document.getElementById('content').appendChild(headerDiv)
}


// creates the content container

function createContent(){
    const imageDiv = document.createElement('div')
    const image = document.createElement('img')
    image.src = img
    image.alt = 'A restaurant.'

    imageDiv.classList.add('image-container')
    image.classList.add('restaurant-image')

    imageDiv.appendChild(image)
    document.getElementById('content').appendChild(imageDiv)
    
}


// creates the tabs


function createTab(){
    const tabDiv = document.createElement('div')
    menuLink.textContent = 'Menu'
    aboutLink.textContent = 'About'
    tabDiv.classList.add('tab')

    tabDiv.appendChild(menuLink)
    tabDiv.appendChild(aboutLink)
    headerDiv.appendChild(tabDiv)  

}

// creating buttons 

const menuLink = document.createElement('button')
menuLink.id = 'menuBtn'
const aboutLink = document.createElement('button')
aboutLink.id = 'aboutBtn'



export {createHeader, createContent, createTab, menuLink, aboutLink}