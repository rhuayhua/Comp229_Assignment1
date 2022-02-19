let Inventory = require('../models/inventory');


exports.list = function(req, res, next) {
    ///res.render('contact', { title: 'Contact me' }); //here i need to update
    Inventory.find( (err, inventoryList) => {
        if (err) {
            return console.error(err);
        }
        else {
            //console.log(inventoryList);
            res.render(
                'inventory/list', 
                { 
                    title: 'Inventory List',
                    InventoryList : inventoryList,
                    userName: req.user ? req.user.username : '' 
                }     
            );
        }
    })
  } 

module.exports.displayAddPage = (req, res, next) => {
    
    let newItem = Inventory();

    res.render(
        'inventory/add_edit', 
        {
            title: 'Add a new Item',
            item: newItem,
            userName: req.user ? req.user.username : '' 
        }
    )          
}

module.exports.processAddPage = (req, res, next) => {
    
    let newItem = Inventory({
        _id: req.body.id,
        item: req.body.item,
        qty: req.body.qty,
        status: req.body.status,
        size : {
            h: req.body.size_h,
            w: req.body.size_w,
            uom: req.body.size_uom,
        },
        tags: req.body.tags.split(",").map(word => word.trim())
    });

    Inventory.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(item);
            res.redirect('/inventory/list');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Inventory.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render(
                'inventory/add_edit', 
                {
                    title: 'Edit Item', 
                    item: itemToEdit,
                    userName: req.user ? req.user.username : '' 
                }
            )
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedItem = Inventory({
        _id: req.body.id,
        item: req.body.item,
        qty: req.body.qty,
        status: req.body.status,
        size : {
            h: req.body.size_h,
            w: req.body.size_w,
            uom: req.body.size_uom,
        },
        tags: req.body.tags.split(",").map(word => word.trim())
    });

    // console.log(updatedItem);

    Inventory.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            // refresh the book list
            res.redirect('/inventory/list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Inventory.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/inventory/list');
        }
    });
}
