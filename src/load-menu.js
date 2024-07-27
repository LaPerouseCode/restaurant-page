const container = document.querySelector('#content');

export default function loadMenuPage() {
    container.innerHTML = '';

    const menuBox = document.createElement('div');
    menuBox.classList.add('menu-box');

    const menuTitle = document.createElement('p');
    menuTitle.innerText = 'Menu';
    menuTitle.classList.add('menu-title');

    const horizontalLine = document.createElement('hr');
    horizontalLine.classList.add('menu-hr');

    const foodTitle = document.createElement('p');
    foodTitle.innerText = "Food";
    foodTitle.classList.add('food-title');

    const foodContainer = document.createElement('div');
    foodContainer.classList.add('food-container');

    const pizzaTitle = document.createElement('p');
    pizzaTitle.innerText = 'Pizza';
    pizzaTitle.classList.add('entry-title');

    const pizzaPrice = document.createElement('p');
    pizzaPrice.classList.add('entry-price');
    pizzaPrice.innerText = '12.99';

    const pizzaCont = document.createElement('div');
    pizzaCont.classList.add('entry-container');

    const cheeseburgerTitle = document.createElement('p');
    cheeseburgerTitle.innerText = "Cheeseburger";
    cheeseburgerTitle.classList.add('entry-title');

    const cheeseburgerPrice = document.createElement('p');
    cheeseburgerPrice.classList.add('entry-price');
    cheeseburgerPrice.innerText = '9.99';

    const cheeseburgerCont = document.createElement('div');
    cheeseburgerCont.classList.add('entry-container');

    const pastaTitle = document.createElement('p');
    pastaTitle.innerText = 'Pasta';
    pastaTitle.classList.add('entry-title');

    const pastaPrice = document.createElement('p');
    pastaPrice.classList.add('entry-price');
    pastaPrice.innerText = '11.99';

    const pastaCont = document.createElement('div');
    pastaCont.classList.add('entry-container');

    const saladTitle = document.createElement('p');
    saladTitle.innerText = 'Chicken Caesar Salad';
    saladTitle.classList.add('entry-title');

    const saladPrice = document.createElement('p');
    saladPrice.classList.add('entry-price');
    saladPrice.innerText = '7.99';

    const saladCont = document.createElement('div');
    saladCont.classList.add('entry-container');

    const salmonTitle = document.createElement('p');
    salmonTitle.innerText = 'Salmon Grill';
    salmonTitle.classList.add('entry-title');

    const salmonPrice = document.createElement('p');
    salmonPrice.classList.add('entry-price');
    salmonPrice.innerText = '18.99';

    const salmonCont = document.createElement('div');
    salmonCont.classList.add('entry-container');

    const drinkContainer = document.createElement('div');
    drinkContainer.classList.add('drink-container');

    const drinkTitle = document.createElement('p');
    drinkTitle.innerText = 'Drink';
    drinkTitle.classList.add('food-title');

    const horizontalLine2 = document.createElement('hr');
    horizontalLine2.classList.add('menu-hr-two');

    const waterTitle = document.createElement('p');
    waterTitle.innerText = 'Water';
    waterTitle.classList.add('entry-title');

    const waterPrice = document.createElement('p');
    waterPrice.classList.add('entry-price');
    waterPrice.innerText = '2.99';

    const waterCont = document.createElement('div');
    waterCont.classList.add('entry-container');

    const sparkTitle = document.createElement('p');
    sparkTitle.innerText = 'Sparkling Water';
    sparkTitle.classList.add('entry-title');

    const sparkPrice = document.createElement('p');
    sparkPrice.classList.add('entry-price');
    sparkPrice.innerText = '3.99';

    const sparkCont = document.createElement('div');
    sparkCont.classList.add('entry-container');

    const sodaTitle = document.createElement('p');
    sodaTitle.innerText = 'Soft Drinks';
    sodaTitle.classList.add('entry-title');

    const sodaPrice = document.createElement('p');
    sodaPrice.classList.add('entry-price');
    sodaPrice.innerText = '5.99';

    const sodaCont = document.createElement('div');
    sodaCont.classList.add('entry-container');

    const cocktailTitle = document.createElement('p');
    cocktailTitle.innerText = 'Special Cocktail';
    cocktailTitle.classList.add('entry-title');

    const cocktailPrice = document.createElement('p');
    cocktailPrice.classList.add('entry-price');
    cocktailPrice.innerText = '8.99';

    const cocktailCont = document.createElement('div');
    cocktailCont.classList.add('entry-container');

    const coffeeTitle = document.createElement('p');
    coffeeTitle.innerText = 'Coffee';
    coffeeTitle.classList.add('entry-title');

    const coffeePrice = document.createElement('p');
    coffeePrice.classList.add('entry-price');
    coffeePrice.innerText = '4.99';

    const coffeeCont = document.createElement('div');
    coffeeCont.classList.add('entry-container');

    container.appendChild(menuBox);

    menuBox.appendChild(menuTitle);
    menuBox.appendChild(foodTitle);
    menuBox.appendChild(horizontalLine);

    pizzaCont.appendChild(pizzaTitle);
    pizzaCont.appendChild(pizzaPrice);

    cheeseburgerCont.appendChild(cheeseburgerTitle);
    cheeseburgerCont.appendChild(cheeseburgerPrice);

    pastaCont.appendChild(pastaTitle);
    pastaCont.appendChild(pastaPrice);

    saladCont.appendChild(saladTitle);
    saladCont.appendChild(saladPrice);

    salmonCont.appendChild(salmonTitle);
    salmonCont.appendChild(salmonPrice);

    foodContainer.appendChild(pizzaCont);
    foodContainer.appendChild(cheeseburgerCont);
    foodContainer.appendChild(pastaCont);
    foodContainer.appendChild(saladCont);
    foodContainer.appendChild(salmonCont);

    waterCont.appendChild(waterTitle);
    waterCont.appendChild(waterPrice);

    sparkCont.appendChild(sparkTitle);
    sparkCont.appendChild(sparkPrice);

    sodaCont.appendChild(sodaTitle);
    sodaCont.appendChild(sodaPrice);

    cocktailCont.appendChild(cocktailTitle);
    cocktailCont.appendChild(cocktailPrice);

    coffeeCont.appendChild(coffeeTitle);
    coffeeCont.appendChild(coffeePrice);

    drinkContainer.appendChild(drinkTitle);
    drinkContainer.appendChild(horizontalLine2);
    drinkContainer.appendChild(waterCont);
    drinkContainer.appendChild(sparkCont);
    drinkContainer.appendChild(sodaCont);
    drinkContainer.appendChild(cocktailCont);
    drinkContainer.appendChild(coffeeCont);

    menuBox.appendChild(foodContainer);
    menuBox.appendChild(drinkContainer);
}