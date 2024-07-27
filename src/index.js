import "./style.css";
import loadHomePage from "./load-home";
import loadMenuPage from "./load-menu";
import loadContactPage from "./load-contact";

const homeButton = document.querySelector('.home-button');
const menuButton  = document.querySelector('.menu-button');
const contactButton = document.querySelector('.contact-button');

document.addEventListener("DOMContentLoaded", loadHomePage);

homeButton.addEventListener("click", loadHomePage);
menuButton.addEventListener("click", loadMenuPage);
contactButton.addEventListener("click", loadContactPage);