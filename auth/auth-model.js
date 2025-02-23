const db = require('../database/dbConfig');

module.exports = {
  findBy
}

//Registration?
//Login"
function findBy(filter){
  return db(users).where(filter)
}