
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').insert([
    {
      recipe_name:'Banana Bread',
      image:'',
      description:'Bill\'s Famous Banana Bread',
      prep_time:'30 min',
      cook_time:'50 min',
      rating:'',
      difficulty:'',
      course_id: 5,
      cuisine_id: 1,
      note_id:'',
      source:'',
    },
    {
      recipe_name:'Mango Salsa',
      image:'',
      description:'Sweet Tropical Salsa perfect to a hot summers day',
      prep_time:'15 mins',
      cook_time:'1 hour',
      rating:'',
      difficulty:'',
      course_id: 6,
      cuisine_id: 7,
      note_id:'',
      source:'',
    }
  ])
};
