const express =require('express')

const router =express.Router()

//Import Controllers

const {login} = require('../controllers/auth')
const { requireSignin } = require('../controllers/auth'); // Import the requireSignin middleware

router.post('/login' , login);

// Protected route
// router.get('/post', requireSignin, (req, res) => {
//     res.json({ message: 'This is a protected route.' });
//   });
  
module.exports = router;
 