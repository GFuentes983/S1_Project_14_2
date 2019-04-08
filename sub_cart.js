"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Gabriel Fuentes
   Date: 4.5.19

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/
// Step 3 - Created an Event Listenter to have the setupCart function run when the page is loaded
window.addEventListener('load', setupCart);

// Step 4 - Define Event Handlers and add to the order buttons
function setupCart() {
   // body...

   // addButtons a Variable that contains the collection of element belonging to the add button class
   var addButtons = document.querySelectorAll('.addButton'); 

   // A for loop to add an event handler that runs the addItem function for each button in the addButtons collection when clicked
   for (var i = 0; i < addButtons.length; i++) {
      addButtons[i].addEventListener('click', addItem);
   }
}

// Step 5 - addItem is meant to add items to the shopping cart 
function addItem(e) {
   // body...
   
   // Storing the sibling element of the food item that was clicked by the customer in a variable
   var foodItem = event.target.nextElementSibling;
   console.log(foodItem);
   // A variable that contains the id value for fooditem
   var foodID = foodItem.getAttribute('id');

   // Store the copy of the foodItem and its descendants
   var foodDescription = foodItem.cloneNode(true);

   // Store a reference of the shopping cart
   var cartBox = document.getElementById('cart');

   // A variable to test for duplicate items
   var duplicateOrder = false;
// A for loop to check for duplicates and rid of duplicates
   for (var n = cartBox.firstChild; n = n.nextElementSibling; n !== null) {
      if (n.id === foodID) {
         duplicateOrder = true;
         n.firstElementChild.textContent++;
         break;
      }
   }

   // Testing if duplicate order is still false
   if (duplicateOrder === false) {
      var orderCount = document.createElement("span");
      orderCount.textContent = "1";
      foodDescription.prepend(orderCount);
      cartBox.appendChild(foodDescription);
   }
}