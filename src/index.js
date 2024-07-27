import './styles.css';
import loadHomepage from './pageLoad';
import _ from 'lodash';
import loadMenu from './menu';  // Import the menu module
import loadContact from './contact';  // Import the contact module

loadHomepage();


// Get buttons and content div
const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const contactButton = document.getElementById('about');
const contentDiv = document.getElementById('content');

// Function to clear content and load a specific tab
function loadTab(tabFunction) {
  contentDiv.innerHTML = ''; // Clear current content
  tabFunction(); // Load new tab content
}

// Event listeners for buttons
homeButton.addEventListener('click', () => loadHomepage());
menuButton.addEventListener('click', () => loadTab(loadMenu));
contactButton.addEventListener('click', () => loadTab(loadContact));

// function component() {
//     const element = document.createElement('div');
  
//     // Lodash now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
//     return element;
//   }
  
//   document.body.appendChild(component());
//   console.log("Index.js is working")
//   alert('ALERT FROM INDEX.JS IS WORKING')