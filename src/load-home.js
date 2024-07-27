const container = document.querySelector("#content");

export default function loadHomePage() {
    container.innerHTML = '';

    let restaurantTitle = document.createElement("h1");
    restaurantTitle.classList.add("title");
    restaurantTitle.innerText = "Hunger Cave";

    let textBox = document.createElement("div");
    textBox.classList.add("text-box");

    let aboutTitle = document.createElement("p");
    aboutTitle.classList.add("about-title");
    aboutTitle.innerText = "About";
    textBox.appendChild(aboutTitle);

    let aboutText  = document.createElement("p");
    aboutText.classList.add("about-text");
    aboutText.innerText = `This project is an example restaurant website created using Webpack, CSS, JavaScript, and HTML. The website features a clean and modular design with three main tabs: Home, Menu, and Contact. Each tab is dynamically created and appended to the HTML using JavaScript, ensuring a seamless user experience.

The website is organized into distinct modules for each tab, allowing for better maintainability and scalability of the codebase. JavaScript is used extensively to create and append DOM elements, providing a dynamic and interactive user interface. This approach eliminates the need for hardcoded HTML, making the website more flexible and easier to update.

Webpack is used as the module bundler to manage and bundle the JavaScript, CSS, and HTML files, ensuring efficient asset management and optimized performance. The website is styled using CSS to ensure it looks great on all devices, from desktops to mobile phones.

This project demonstrates the effective use of modern web development tools and techniques to create a modular, dynamic, and responsive website. It showcases the power of JavaScript in DOM manipulation, the importance of modular design for maintainability, and the efficiency of Webpack in managing and bundling project assets.`
    textBox.appendChild(aboutText);

    container.appendChild(restaurantTitle);
    container.appendChild(textBox);
}