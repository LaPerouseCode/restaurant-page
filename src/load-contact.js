const container = document.querySelector('#content');

export default function loadContactPage() {
    container.innerHTML = '';

    const contactBox = document.createElement('div');
    contactBox.classList.add('contact-box');

    const contactTitle = document.createElement('p');
    contactTitle.innerHTML = 'Contact';
    contactTitle.classList.add('contact-title');

    const addressText = document.createElement('p');
    addressText.innerText = '123 Example Rd., City, State';
    addressText.classList.add('address-text');

    const phoneText = document.createElement('p');
    phoneText.innerText = 'Phone: (123)-456-7890';
    phoneText.classList.add('phone-text');

    const hoursText = document.createElement('p');
    hoursText.innerText = 'Business hours: 6:30 A.M. - 9:00 P.M.';
    hoursText.classList.add('hours-text');

    const mapsImage = document.createElement('img');
    mapsImage.classList.add('maps-image');
    mapsImage.setAttribute('src', 'https://lh3.googleusercontent.com/gYE0KowUZ6rICF8vtgJTWAGv3tr6Nnxh4aaWDLVgQPU0gtU7xGwp0VYT9oDmrAInBRJODEV0SAXWMEboQ1vtsl7OzoF8XPeVmFfVQtk=w450');

    const githubLink = document.createElement('a');
    githubLink.classList.add('github-link');
    githubLink.innerText = 'My Github';
    githubLink.setAttribute('href', 'https://github.com/LaPerouseCode/');
    githubLink.setAttribute('target', '_blank');

    contactBox.appendChild(contactTitle);
    contactBox.appendChild(addressText);
    contactBox.appendChild(phoneText);
    contactBox.appendChild(hoursText);
    contactBox.appendChild(mapsImage);
    contactBox.appendChild(githubLink);

    container.appendChild(contactBox);
}