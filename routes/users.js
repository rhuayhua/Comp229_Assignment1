var express = require('express');
var router = express.Router();
let useController = require('../controllers/user');

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/
router.get('/', useController.user);

/* GET rudy page. */
/*router.get('/rudy', function(req, res, next) {
  res.render('users', { 
    title: 'Users',
    name:  'Rudy'
  });
});*/
router.get('/rudy', useController.rudy);

// Sign-up
router.get('/signup', useController.renderSignup);
router.post('/signup', useController.signup);

// Sign-in
router.get('/signin', useController.renderSignin);
router.post('/signin', useController.signin);

// Sign-out
router.get('/signout', useController.signout);

module.exports = router;
