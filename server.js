const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));

const connectDatabase = require("./config/databaseConnection")


app.get("/",(req,res)=>{
    res.send("Hello")
});

app.post("/",(req,res)=>{
    res.render("home",
    {name:req.body.name, 
     author:req.body.author,
     page:req.body.page,
     price:req.body.price,
     review:req.body.review
    }
    )
    
});

app.get("/create",(req,res)=>{
    res.render("index")
})

connectDatabase();
app.listen(4000);