import { drawer } from '../drawer.js'

// Level 4

//Advice from google search define the const for taget ammount here so it is easy to see at my stage of deveoping 
const targetAmount = 1963;
const result = canMakeAmount(targetAmount, drawer);
/**
 * Returns true if it is possible to make the target amount out of the cash in the drawer
 * Returns false if it is not possible
 * @param {number} target - the amount of money to try and make
 * @param {object[]} drawer
 * @returns {boolean} whether it is possible to make the amount from the drawer
 */
  export function canMakeAmount(target, drawer) {
    // like i do for each one make the "currentamount be 0"
    let currentAmount = 0;
    
    //as usual go through the draw with loop 
    for (let i = 0; i < drawer.length; i++) {
      // get the the maximum amount we can use from this item without exceeding the target
      let maxAmountFromItem = drawer[i].value * drawer[i].quantity;
  
      // look at how much we still need to reach the target amoutn i put in the const
      let amountNeeded = target - currentAmount;
      
      // Use as much as possible from the current item without exceeding what we need
      //if  max*** is less than or equal too amount needed then add current ammount to max 
      if (maxAmountFromItem <= amountNeeded) {
        currentAmount += maxAmountFromItem;
      } else {
        // how much we can take from this item to exactly reach the target
        let amountWeCanTake = Math.floor(amountNeeded / drawer[i].value) * drawer[i].value;
        currentAmount += amountWeCanTake;
      }
  
      // sum for check if we've reached or exceeded the const target
      if (currentAmount >= target) {
        return true; // We can make the target amount
      }
    }
    
    //If we finish the loop without reaching the target
    return false; // We cannot make the target amount
  
  
  

  
}
