export default function loadHomepage() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    // Create and append the headline
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to the Hunger Cave!';
    contentDiv.appendChild(headline);
  
    // Create and append the image
    const image = document.createElement('img');
    image.src = 'https://www.bistrobrain.com/wp-content/uploads/2021/06/WhatsApp-Image-2021-06-06-at-22.26.18.jpeg';
    image.alt = 'Restaurant Image';
    image.style.maxWidth = '80%';  // Ensure it doesn’t take up the full width
    image.style.maxHeight = '400px';  // Set a maximum height
    image.style.margin = '0 auto';
    image.style.display = 'block';
    contentDiv.appendChild(image);
  
    // Create and append the paragraph
    const paragraph = document.createElement('p');
    paragraph.textContent = 'At Our Restaurant, we pride ourselves on offering the finest dining experience. Our chefs use only the freshest ingredients to create delicious meals that will leave you coming back for more. Whether you\'re here for a special occasion or just a casual meal, we promise you\'ll have a wonderful time. Enjoy our cozy atmosphere and let us take care of you!';
    contentDiv.appendChild(paragraph);
  }