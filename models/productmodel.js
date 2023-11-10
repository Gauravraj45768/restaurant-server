const mongoose = require("mongoose");
const productschema = new mongoose.Schema({
 
    caption: {
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
    rating: {
        type: Number,
        required: true
        },
    imageUrl: {
        type: String,
        required: true
        },
},{timestamps:true})

const Product = mongoose.model("Product", productschema);
 module.exports = Product;
