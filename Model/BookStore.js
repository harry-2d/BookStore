const mongoose = require('mongoose');

const BookStoreSchema = new mongoose.Schema({
    BookName:{
        type:String,
        required:true
    },
    Author:{
        type:String,
        required:true
    },
    Pages:{
        type:Number,
        required:true

    },
    Price:{
        type:Number,
        required:true

    },
    Review:{
        type:String,
        minLength:0,
        maxLength:256,
        required:false

    }


});

module.exports = mongoose.model("BookStore", BookStoreSchema);

