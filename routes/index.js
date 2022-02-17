let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.home);

/* GET about page. */
router.get('/about', indexController.about);

/* GET project page. */
router.get('/projects', indexController.projects);

/* GET service page. */
router.get('/services', indexController.services);

/* GET contact page. */
router.get('/contact', indexController.contact);


module.exports = router;
