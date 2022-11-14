
exports.seed = function(knex) {
  return knex('notes').insert([
    {
      recipe_id:1,
      note: 'one note'
    },
    {
      recipe_id:2,
      note: 'If mango is greener, unripe, and/or not sweet, add 1 tsp of sugar into the mixture.'
    },
    {
      recipe_id:2,
      note: 'Tastes good with or without bell peppers.'
    },
    {
      recipe_id:2,
      note: 'Apple cider vinegar adds a tangy flavor to the salsa. Could also use lemon juice if cider is not available.'
    },
    {
      recipe_id:2,
      note: 'For more spice, leave some seeds in or add a touch of cayenne pepper'
    },
  ])
};
