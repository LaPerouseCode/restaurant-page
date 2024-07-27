export default function loadContact() {
    const contentDiv = document.getElementById('content');
  
    // Clear previous content
    contentDiv.innerHTML = '';
  
    // Create and append the headline
    const headline = document.createElement('h1');
    headline.textContent = 'Contact Us';
    contentDiv.appendChild(headline);
  
    // Create and append contact details
    const contactInfo = document.createElement('p');
    contactInfo.innerHTML = `
      <strong>Address:</strong> 123 Gourmet Lane, Flavor Town<br>
      <strong>Phone:</strong> (555) 123-4567<br>
      <strong>Email:</strong> info@ourrestaurant.com
    `;
    contentDiv.appendChild(contactInfo);
  }