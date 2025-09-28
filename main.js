/************************************************************
Instructions
------------
You are working as a developer for a local café that needs a system to track
customer orders. The café serves drinks and pastries, and orders are stored in a
2D array, where each row represents a category (drinks or pastries), and each
column represents an order within that category.
Your task is to use the .length property to track the number of items in the
café’s order system dynamically.
*/

console.log('\nWelcome to your Local Cafe!');

/************************************************************
Task 1: Create the Order System
Create a multi-dimensional array called orders with two rows:
● The first row stores three drink orders (e.g., “Latte”, “Tea”, “Espresso”).
● The second row stores three pastry orders (e.g., “Croissant”, “Muffin”,
“Bagel”).
*/

const orders = [
  ['Latte', 'Tea', 'Espresso'],
  ['Croissant', 'Muffin', 'Bagel'],
];

/************************************************************
Task 2: Log the number of drinks and number of pastries by using .length on each
row.
*/

console.log(`Number of drinks: ${orders[0].length}`);
console.log(`Number of pastries: ${orders[1].length}`);

/************************************************************
Task 3: Access Orders Using Bracket Notation
Use bracket notation to log a specific drink and a specific pastry using
hardcoded numbers. For example, you might want to log the first drink and last
pastry. Do this for three combinations.
*/

let order1 = [orders[0][0], orders[1][orders[1].length - 1]];
let order2 = [orders[0][1], orders[1][1]];
let order3 = [orders[0][2], orders[1][0]];

console.log('\nHere are your orders:');
console.log(`\t1st order: ${order1}`);
console.log(`\t2nd order: ${order2}`);
console.log(`\t3rd order: ${order3}`);

/************************************************************
Task 4: Access Orders Dynamically with Variables
*/

let drinkIndex = 0;
let pastryIndex = 1;
let order4 = [orders[0][drinkIndex], orders[1][pastryIndex]];
console.log(`\t4th order: ${order4}`);

/************************************************************
Task 5: Write a loop that logs all the items in the drink category, ensuring the loop
dynamically adjusts to the number of items using .length.
*/

console.log('\nHere are your drinks:');
for (let i = 0; i < orders[0].length; i++) {
  console.log(`\t${i + 1}. ${orders[0][i]}`);
}

/************************************************************
Task 6: Add a New Order & Track Length
Suppose a new order has been placed: a customer ordered a flat white. Add “flat
white” to the drinks category dynamically. Log the updated number of drinks after
the addition.
Declare two variables and use them with bracket notation to log the selected order
dynamically.
*/

let newDrinkOrder = 'flat white';
let totalDrinks = orders[0].push(newDrinkOrder);
console.log(`\nAdding "${newDrinkOrder}" to drinks, total drinks is now ${totalDrinks}`);

let drinksIndex = 0;
drinkIndex = orders[drinkIndex].indexOf(newDrinkOrder);
let order5 = [orders[drinksIndex][drinkIndex]];
console.log(`\nLatest order is "${order5}"`);
console.log('\n');

/************************************************************
Sample Output:

➜  practice-common-array-methods-grace-p git:(main) ✗ node main.js

Welcome to your Local Cafe!
Number of drinks: 3
Number of pastries: 3

Here are your orders:
        1st order: Latte,Bagel
        2nd order: Tea,Muffin
        3rd order: Espresso,Croissant
        4th order: Latte,Muffin

Here are your drinks:
        1. Latte
        2. Tea
        3. Espresso

Adding "flat white" to drinks, total drinks is now 4

Latest order is "flat white"
*/
