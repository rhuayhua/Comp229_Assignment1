let Inventory = require('../models/inventory');


exports.list = function(req, res, next) {
    ///res.render('contact', { title: 'Contact me' }); //here i need to update
    Inventory.find( (err, inventoryList) => {
        if (err) {
            return console.error(err);
        }
        else {
            console.log(inventoryList);
        }
    })
  } 