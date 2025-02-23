
const router = require('express').Router();

const Recipes = require('./recipe-model')

/************** GET ALL RECIPES **************/
router.get('/', (req, res) => {
  Recipes.getRecipes()
    .then(r => {
      res.status(200).json(r)
    })
    .catch(err => {
      console.log('GET Recipes', err)
      res.status(500).json({ message: 'Failed to get products'})
    })
})

module.exports = router;