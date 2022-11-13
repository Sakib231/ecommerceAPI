const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

const ProductSchema = new mongoose.Schema({
    productID:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true

    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
});
module.exports = mongoose.model('Product', ProductSchema);