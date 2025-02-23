const router = require('express').Router();

Users = require('./auth-model');

/*********** LOGIN  ***********/
router.post('/login', (req, res) => {
  let {username, password} = req.body;
  Users.findBy({ username })
    .first()
    .then(user => {
      if(user ){
        
      }
    })
})