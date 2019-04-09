var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema(
    {
        productID: Number,
        price: Number,
        quantity: Number,
    }
);

//Export model
module.exports = mongoose.model('product', ProductSchema);