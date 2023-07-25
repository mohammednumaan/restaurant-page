import {createHeader, createContent,createTab, menuLink, aboutLink} from "./homepage";
import {menuContent} from "./menu";
import {aboutContent} from "./about";
import './style.css'

createHeader()
createContent()
createTab()


menuLink.addEventListener('click', menuContent)
aboutLink.addEventListener('click', aboutContent)

