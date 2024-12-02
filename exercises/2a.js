/**
 * Given a list of recipes, return the number of vegetarian recipes in the list
 */
function countVeggies(recipes) {
  
 const numberofveg = recipes.filter (recipe => recipe.isVegetarian).length ;
 return numberofveg ;


  // code here
}

// array provided for debugging:
const recipes = [
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

// don't change below
export default countVeggies
