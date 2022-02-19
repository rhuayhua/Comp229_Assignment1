let Business = require('../models/business');

exports.list = function(req, res, next) {
    
    Business.aggregate([{ $sort : { contactName : 1 } }], (err, businessList) => {
    //Business.find( (err, businessList) => {
        if (err) {
            return console.error(err);
        }
        else {
            res.render(
                'business/list', 
                { 
                    title: 'Business Contacts',
                    BusinessList : businessList,
                    userName: req.user ? req.user.username : '' 
                }     
            );
        }
    })
  } 

module.exports.displayAddPage = (req, res, next) => {
    
    let newItem = Business();

    res.render(
        'business/add', 
        {
            title: 'Add a new Contact',
            item: newItem,
            userName: req.user ? req.user.username : '' 
        }
    )          
}

module.exports.processAddPage = (req, res, next) => {
    
    let newItem = Business({
        _id: req.body.id,
        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,
        email: req.body.email
    });

    Business.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(item);
            res.redirect('/business/list');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Business.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render(
                'business/edit', 
                {
                    title: 'Update Contact', 
                    item: itemToEdit,
                    userName: req.user ? req.user.username : '' 
                }
            )
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedItem = Business({
        _id: req.body.id,
        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,
        email: req.body.email
    });

    // console.log(updatedItem);

    Business.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            // refresh the book list
            res.redirect('/business/list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Business.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/business/list');
        }
    });
}
