var express = require('express');
var router = express.Router();
let useController = require('../controllers/user');

/* GET users listing. */
router.get('/', useController.user);

/* GET rudy page. */
router.get('/rudy', useController.rudy);



/*  Get method to Render signup */
router.get('/signup', useController.renderSignup);

/*  Post method to process signup */
router.post('/signup', useController.signup);


/*  Get method to Render signin */
router.get('/signin', useController.renderSignin);

/*  Post method to process signin */
router.post('/signin', useController.signin);


/*  Get method to Render signout */
router.get('/signout', useController.signout);

module.exports = router;
