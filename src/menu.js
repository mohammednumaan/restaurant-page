import { aboutBox, aboutHeader } from "./about"
import { aboutLink, menuLink } from "./homepage"

// shows menu details
const menuHeader = document.createElement('h1')
const menuBox = document.createElement('div')
const content = document.getElementById('content')
const menuDetails = document.createElement('p')

function menuContent(){
    menuLink.style.backgroundColor = '#234E70'
    menuLink.style.color = 'white'
    aboutLink.style.color ='black'
    aboutLink.style.backgroundColor = '#FBF8BE'
    menuHeader.classList.add('menu-title')
    menuBox.classList.add('menu-box')
    menuHeader.textContent = 'MENU'
    menuDetails.textContent = 'Menu Details Goes Here...'
    
    menuBox.appendChild(menuDetails)
    document.getElementById('content').appendChild(menuHeader)
    document.getElementById('content').appendChild(menuBox)
    removeAbout()

}

function removeAbout(){
    content.removeChild(aboutHeader)
    content.removeChild(aboutBox)
    menuHeader.textContent = 'MENU'
    menuDetails.textContent = 'Menu Details Goes Here...'

}

export {menuContent, menuHeader, menuBox}