
exports.up = function(knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string('username', 255).unique().notNullable();
      tbl.string('password', 128).unique().notNullable()
    })

    .createTable('recipes', (tbl) => {
      tbl.increments();
      tbl.string('title', 255).notNullable();
      tbl.binary('image', 255);
      tbl.string('description', 255);
      tbl.integer('prep_time');
      tbl.integer('cook_time');
      tbl.integer('rating');
      tbl.string('difficulty');

      tbl
      .integer('course_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('courses')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

      tbl
      .integer('cuisine_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('cuisine_types')
      .onUpdate('CASCADE')
      .onDelete('CASCADE'); 
      
      tbl
      .integer('cuisine_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('cuisine_types')
      .onUpdate('CASCADE')
      .onDelete('CASCADE'); 

      tbl
      .integer('instruction_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('instructions')
      .onUpdate('CASCADE')
      .onDelete('CASCADE'); 

      tbl
      .integer('note_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('notes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE'); 

      tbl.string('source', 255);
    })

    .createTable('recipe_ingredients', (tbl) => {
      tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');  
      
      tbl
      .integer('ingredients_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
      
      tbl.integer('quantity').notNullable();

      tbl
        .integer('measurement_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('measurements')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

      tbl.string('prep_method')
    })

    .createTable('courses', (tbl) => {
      tbl.increments()
      tbl.string('course', 128).notNullable()
    })

    .createTable('cuisine_types', (tbl) => {
      tbl.increments()
      tbl.string('cuisine', 128).notNullable()
    })

    .createTable('ingredients', (tbl) => {
      tbl.increments()
      tbl.string('name', 128).notNullable()
    })

    .createTable('instructions', (tbl) => {
      tbl.increments()
      tbl.text('instruction').notNullable()
    })

    .createTable('measurements', (tbl) => {
      tbl.increments()
      tbl.text('measurement').notNullable()
    })

    .createTable('notes', (tbl) => {
      tbl.increments()
      tbl.text('note')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('notes')
    .dropTableIfExists('measurements')
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('cuisine_types')
    .dropTableIfExists('courses')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('recipes')
    .dropTableIfExists('users');
};
