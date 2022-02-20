let express = require('express');
let router = express.Router();

let businessController = require('../controllers/business');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();
}




// We add authentication through requireAuth

/* GET business contacts list */
router.get('/list', requireAuth, businessController.list);


/*  Get method to Render the Add Items Page*/
router.get('/add', requireAuth, businessController.displayAddPage);

/* Post method to handle the Add Items process */
router.post('/add', requireAuth, businessController.processAddPage);


/* Get method to Render the Edit Items Page */
router.get('/edit/:id', requireAuth, businessController.displayEditPage);

/* Post method to handle the Edit Items process*/
router.post('/edit/:id', requireAuth, businessController.processEditPage);


/* Get method to delete business contact */
router.get('/delete/:id', requireAuth, businessController.performDelete);


module.exports = router;