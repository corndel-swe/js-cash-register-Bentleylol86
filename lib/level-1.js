import { drawer } from '../drawer.js'

// Level 1

/**
 * Goes into the given drawer and removes 1 item with the given name.
 * E.g. ('penny', drawer) removes 1 penny from the given drawer.
 * @param {string} name - the name of the currency to remove
 * @param {object[]} drawer - the drawer of currency
 * @returns {object[]} - the drawer, after removing the item
 */
export function removeItem(name, drawer) {
 // Loop through the drawer, done a loop like in the extercises 
 for (let i = 0; i < drawer.length; i++) { 
  // Check if the current item's name matches the given name 
  if (drawer[i].name === name) { 
    // make sure that what is inside the drawer is greater 0
    if (drawer[i].quantity > 0) { 
      // remove a 1 from the drawer 
      drawer[i].quantity = drawer[i].quantity - 1; } 
      // remeber you need a break as if the condition is correct it will need a break to stop the loop 
      break; } } 
      // Return the updated ammount in the drawer 
      return drawer;
}
/**
 * 
 * The same as removeItem but adds an item of currency instead
 * @param {string} name
 * @param {object[]} drawer
 * @returns {object[]}
 */
export function addItem(name, drawer) {
  for (let i = 0; i < drawer.length; i++) { 
    // Check if the current item's name matches the given name 
    if (drawer[i].name === name) { 
      // make sure that what is inside the drawer is greater 0
       { 
        // remove a 1 from the drawer 
        drawer[i].quantity = drawer[i].quantity + 1; } 
        // remeber you need a break as if the condition is correct it will need a break to stop the loop 
        break; } } 
        // Return the updated ammount in the drawer 
        return drawer;
}