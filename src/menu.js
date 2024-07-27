
export default function loadMenu() {
    const contentDiv = document.getElementById('content');
    
    // Clear previous content
    contentDiv.innerHTML = '';
  
    // Create and append the headline
    const headline = document.createElement('h1');
    headline.textContent = 'Our Menu';
    contentDiv.appendChild(headline);
  
    // Create and append menu items
    const menuItems = [
      'Spaghetti Carbonara - $12',
      'Margherita Pizza - $10',
      'Caesar Salad - $8',
      'Tiramisu - $6'
    ];
  
    const list = document.createElement('ul');
    menuItems.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      list.appendChild(listItem);
    });
  
    contentDiv.appendChild(list);
  }