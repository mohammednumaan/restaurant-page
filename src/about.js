// shows about details

import { aboutLink, menuLink } from "./homepage"
import { menuBox, menuHeader } from "./menu"
import rickroll from './rickroll-roll.gif'

const aboutHeader = document.createElement('h1')
const aboutBox = document.createElement('div')
const aboutDetails = document.createElement('p')
const content = document.getElementById('content')

const rickRoll = document.createElement('img')
rickRoll.src = rickroll
rickRoll.classList.add('rick-roll-hidden')
aboutBox.appendChild(rickRoll)


function aboutContent(){
    aboutLink.style.backgroundColor = '#234E70'
    aboutLink.style.color = 'white'
    menuLink.style.color ='black'
    menuLink.style.backgroundColor = '#FBF8BE'
    aboutHeader.classList.add('about-title')
    aboutBox.classList.add('about-box')
    aboutHeader.textContent = 'ABOUT'


    rickRoll.classList.remove('rick-roll-hidden')
    rickRoll.classList.add('rick-roll')
    document.getElementById('content').appendChild(aboutHeader)
    document.getElementById('content').appendChild(aboutBox)
    removeMenu()


}

function removeMenu(){
    content.removeChild(menuHeader)
    content.removeChild(menuBox)
    aboutHeader.textContent = 'ABOUT'
    //aboutDetails.textContent = 'ABOUT Details Goes Here...'

}

export {aboutContent, aboutHeader, aboutBox}