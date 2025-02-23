
exports.seed = function(knex) {
  return knex('cuisine').insert([
    {cuisine_type:'American'},
    {cuisine_type:'Asian'},
    {cuisine_type:'Chinese'},
    {cuisine_type:'Cuban'},
    {cuisine_type:'French'},
    {cuisine_type:'Italian'},
    {cuisine_type:'Mexican'},
  ])
};
