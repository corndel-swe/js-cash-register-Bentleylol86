/**
 * Given a recipeBook containing recipes, returns the total number of servings in the book
 */
function countServings(recipeBook) {
  if (recipeBook.recipes.length === 0) {
    return  0 ;
  //this will require a for loop 
  }
  let totalServings = 0; 
  for (let i = 0; i < recipeBook.recipes.length; i++) { 
    totalServings += recipeBook.recipes[i].servings; } 
    return totalServings;
}

// we've provided a sample object for debugging:
const recipeBook = {
  title: 'My Recipe Book',
  recipes: [
    {
      name: 'Spaghetti Bolognese',
      ingredients: ['spaghetti', 'beef', 'tomato sauce'],
      servings: 4,
      isVegetarian: false
    },

    {
      name: 'Vegetable Stir Fry',
      ingredients: ['broccoli', 'carrots', 'bell peppers', 'soy sauce'],
      servings: 2,
      isVegetarian: true
    }
  ]
}

// don't change below
export default countServings
