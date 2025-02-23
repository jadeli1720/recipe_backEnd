
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').insert([
    { name:'sugar'},
    { name:'butter'},
    { name:'egg'},
    { name:'milk'},
    { name:'flour'},
    { name:'backing powder'},
    { name:'salt'},
    { name:'bananas'},
    { name:'mangos'},
    { name:'roma tomatoes'},
    { name:'red onion'},
    { name:'red bell pepper'},
    { name:'jalapeno pepper'},
    { name:'Lime'},
    { name:'apple cider vinegar'},
    { name:'cilantro'},
    { name:'salt'},
    { name:'pepper'},
  ])
};
