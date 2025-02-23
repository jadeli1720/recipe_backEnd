
exports.up = function(knex) {
  return knex.schema
    .createTable('users', users => {
      users.increments();
      users.string('username', 128).unique().notNullable();
      users.string('password', 128).unique().notNullable()
    })

    .createTable('recipes', (recipes) => {
      recipes.increments();
      recipes.string('recipe_name', 255).notNullable();
      recipes.binary('image', 255);
      recipes.string('description', 255);
      //time --> integer or string
      recipes.string('prep_time', 128);
      //time --> integer or string
      recipes.string('cook_time', 128);
      recipes.integer('rating');
      recipes.string('difficulty');

      recipes
      .integer('course_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('courses')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

      recipes
      .integer('cuisine_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('cuisine_types')
      .onUpdate('CASCADE')
      .onDelete('CASCADE'); 

      recipes
      .integer('note_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('notes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE'); 

      recipes.string('source', 255);
    })

    //single recipe ingredient and it's quantity
    .createTable('recipe_ingredient', (recipe_ingredient) => {
      recipe_ingredient
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');  
      
      recipe_ingredient
      .integer('ingredients_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

      //Composite Key: composes all of the FK's from above
      recipe_ingredient.primary(['recipe_id','ingredients_id'])
      
      recipe_ingredient.float('quantity', 2).notNullable();

      recipe_ingredient.string('measurements')
      
      recipe_ingredient.string('prep_method');
      recipe_ingredient.boolean('optional').defaultTo(false)

    })

    .createTable('courses', courses => {
      courses.increments()
      courses.string('course_name', 128).notNullable()
    })

    .createTable('cuisine', cuisine => {
      cuisine.increments()
      cuisine.string('cuisine_type', 128).notNullable()
    })

    .createTable('ingredients', ingredients => {
      ingredients.increments()
      ingredients.string('name', 128).notNullable()
    })

    .createTable('instructions', (instructions) => {
      instructions.increments()
      instructions
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE'); 

      instructions.text('instruction').notNullable()
    })

    .createTable('notes', (notes) => {
      notes
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE'); 
      notes.text('note')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('notes')
  .dropTableIfExists('instructions')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('cuisine_types')
  .dropTableIfExists('courses')
  .dropTableIfExists('recipe_ingredient')
  .dropTableIfExists('recipes')
  .dropTableIfExists('users');
};
