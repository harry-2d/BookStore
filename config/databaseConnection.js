const mongoose = require('mongoose');

const connectDatabase = async()=>{
    mongoose
    .connect(`mongodb://localhost:27017/Bookstore`)
    .then((con)=>{
        console.log(
            `MongoDB Connected with PORT:${con.connection.port} and PORT:${con.connection.port}`
        )
    })

};

module.exports=connectDatabase;