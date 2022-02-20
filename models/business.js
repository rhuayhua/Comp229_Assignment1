let mongoose = require('mongoose');

// Here we create a model class for business contacts
let businessModel = mongoose.Schema(
    {
        contactName: String,
        contactNumber: Number,
        email: String
    },

    {
        // we use a collection named business in our db
        collection: "business"
    }
);

module.exports = mongoose.model('Business', businessModel);