
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('courses').insert([
    {course_name:'Breakfast'},
    {course_name:'Brunch'},
    {course_name:'Lunch'},
    {course_name:'Dinner'},
    {course_name:'Dessert'},
    {course_name:'Appetizer/Side'},
    {course_name:'Soups'},
    {course_name:'Drinks'},
  ])
};
