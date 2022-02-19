let mongoose = require('mongoose');

let businessModel = mongoose.Schema(
    {
        contactName: String,
        contactNumber: Number,
        email: String
    },

    {
        collection: "business"
    }
);

module.exports = mongoose.model('Business', businessModel);