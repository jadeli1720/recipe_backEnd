
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredient').insert([
    {
      recipe_id:1, 
      ingredients_id: 1,
      quantity:.75,
      measurements: 'cup',
      prep_method:'',
      optional:false
    },
    {
      recipe_id:1, 
      ingredients_id: 2,
      quantity:4,
      measurements: 'Tbsp',
      prep_method:'',
      optional:false
    },
    {
      recipe_id:1, 
      ingredients_id:3,
      quantity: 1,
      measurements: '',
      prep_method:'',
      optional:false
    },
    {
      recipe_id:1, 
      ingredients_id: 4,
      quantity:.5,
      measurements: 'cup',
      prep_method:'',
      optional:false
    },
    {
      recipe_id:1, 
      ingredients_id: 5,
      quantity: 2,
      measurements: 'cups',
      prep_method:'',
      optional:false
    },
    {
      recipe_id:1, 
      ingredients_id: 6,
      quantity:2,
      measurements: 'Tsp',
      prep_method:'',
      optional:false
    },
    {
      recipe_id:1, 
      ingredients_id: 7,
      quantity:.25,
      measurements: 'tsp',
      prep_method:'',
      optional:false
    },
    {
      recipe_id:1, 
      ingredients_id: 8,
      quantity: 4,
      measurements: '',
      prep_method:'over ripe',
      optional:false
    },
    {
      recipe_id:2, 
      ingredients_id: 9,
      quantity: 2,
      measurements: '',
      prep_method:'peeled and diced',
      optional:false
    },
    {
      recipe_id:2, 
      ingredients_id: 10,
      quantity: 3,
      measurements:'',
      prep_method:'diced',
      optional:false
    },
    {
      recipe_id:2, 
      ingredients_id: 11,
      quantity: .25,
      measurements:'',
      prep_method:'diced',
      optional:false
    },
    {
      recipe_id:2, 
      ingredients_id: 12,
      quantity: .25,
      measurements:'',
      prep_method:'diced',
      optional:true
    },
    {
      recipe_id:2, 
      ingredients_id: 13,
      quantity: 1,
      measurements:'',
      prep_method:'de-seeded and finely chopped',
      optional:false
    },
    {
      recipe_id:2, 
      ingredients_id: 14,
      quantity: 1,
      measurements:'',
      prep_method:'zested and juiced',
      optional:false
    },
    {
      recipe_id:2, 
      ingredients_id: 15,
      quantity: 1,
      measurements:'tbsp',
      prep_method:'',
      optional:true
    },
    {
      recipe_id:2, 
      ingredients_id: 16,
      quantity: 0.25,
      measurements:'cup',
      prep_method:'chopped',
      optional:false
    },
    {
      recipe_id:2, 
      ingredients_id: 17,
      quantity: 0,
      measurements:'to taste',
      prep_method:'',
      optional:false
    },
    {
      recipe_id:2, 
      ingredients_id: 1,
      quantity: 0,
      measurements:'to taste',
      prep_method:'',
      optional:true
    },
  ])
};
