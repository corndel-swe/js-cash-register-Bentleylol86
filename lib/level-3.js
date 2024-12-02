import { drawer } from '../drawer.js'

// Level 3

/**
 * Calculates the total value of all money in the drawer
 * Give the answer as a string formatted in dollars, i.e. "$23.78" not 2378
 *
 * Consider using the .toFixed() method:
 * https://www.w3schools.com/jsref/jsref_tofixed.asp
 *
 * @param {object[]} - drawer
 * @returns {string} The amount of money in the drawer formatted in dollars
 */
export function sumDrawer(drawer) {
  
let totalMoney = 0; // Initialize the count of coins to 0 // Loop through each item in the drawer 
    
for (let i = 0; i < drawer.length; i++) { 
          
  totalMoney += drawer[i].value * drawer[i].quantity;
}
      let totalinDollars = (totalMoney / 100).toFixed(2) ;
     // Return the total number in dollars
        return `$${totalinDollars}` ; 
    
}
