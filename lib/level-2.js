import { drawer } from '../drawer.js'

// Level 2

/**
 * Goes through the given drawer and counts how many *coins* there are in total
 * N.b. just the number of coins, not the total value of them
 * N.b. $1 is a note, not a coin
 * @param {object[]} drawer
 * @returns {number} How many coins are in the drawer
 */
export function countCoins(drawer) {
  let coinCount = 0; // Initialize the count of coins to 0 // Loop through each item in the drawer 
  for (let i = 0; i < drawer.length; i++) { // Check if the item is a coin (not a $1 note)
    if (drawer[i].value < 100 ) { // Add the quantity of coins to the count 
      coinCount += drawer[i].quantity; 
    } 
  } // Return the total number of coins 
      return coinCount; }
  // code here


/**
 * Same as count coins but for *notes* instead
 * @param {object[]} drawer
 * @returns {number} How many notes are in the drawer
 */
export function countNotes(drawer) {
  let noteCount = 0; // Initialize the count of notes to 0 
  // Loop through each item in the drawer 
  for (let i = 0; i < drawer.length; i++) { 
    // Check if the item< is a note (not a coin )
    if (drawer[i].value >= 100 ) { 
      // Add the quantity of coins to the count **(error remeber >= its greater or equal not the other way)** 
      noteCount += drawer[i].quantity; 
    } 
  } // Return the total number of coins 
      return noteCount; 
    
    
    }

