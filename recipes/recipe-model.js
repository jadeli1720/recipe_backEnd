const db = require('../database/dbConfig');

module.exports = {
  getRecipes
}

async function getRecipes() {
    // let recipes = await db('recipes as r')
    return(db('recipes as r'))
      .select(
        'r.id',
        'r.recipe_name',
        'r.image',
        'r.course_id',
        'r.cuisine_id'
      )
      .join(
        
      )

      // let cuisine = await db('cuisine')

      // let course = await db('courses')

      // await recipes.forEach(recipe => {
      //   recipe.cuisine = []
      //   recipe.course = []
      // })
}