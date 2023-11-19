// In script.js

// You can add JavaScript code here

// For demonstration purposes, let's use a simple array to store cart items
let cart = [];

// Function to add an item to the cart
function addToCart(productName, price) {
  const item = { productName, price };
  cart.push(item);
  updateCart();
  alert(`Added ${productName} to the cart!`);
}

// Function to update the cart display
function updateCart() {
  const cartItemsElement = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');

  // Clear the previous content
  cartItemsElement.innerHTML = '';

  // Populate the cart items
  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
    cartItemsElement.appendChild(listItem);
  });

  // Calculate and display the total price
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotalElement.textContent = total.toFixed(2);
}

  