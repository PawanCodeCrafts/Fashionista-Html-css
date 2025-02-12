let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Dhruvi trendz Fancy Shirts ',
        images: 'p4-1.jpg',
        price: 379
    },
    {
        id: 2,
        name: 'Women Anarkali kurta printed',
        images: 'new3.jpg',
        price: 650
    },
    {
        id: 3,
        name: 'Womens Cotton  Night Suit',
        images: 'p10.jpg',
        price: 799
    },
    {
        id: 4,
        name: 'Crystal-13 Sports Running & Gym Shoes',
        images: 'p5.jpg',
        price: 1349
    },
    {
        id: 5,
        name: 'Symbol Men Regular Fit Shirt',
        images: 'p6.jpg',
        price: 459
    },
    {
        id: 6,
        name: 'Women Floral printed Flared Kurta',
        images: 'new2.jpg',
        price: 787
    },
    {
        id: 7,
        name: 'Womens fit fancy top',
        images: 'new5.jpg',
        price: 499
    },
    {
        id: 8,
        name: 'mens fancy shirts',
        images: 'p4-2.jpg',
        price: 279
    },
    {
        id: 9,
        name: 'mens full sleeve shirt',
        images: 'new6.jpg',
        price: 665
    },

];
let listCards = [];
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.images}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key) {
    if (listCards[key] == null) {
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.images}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}