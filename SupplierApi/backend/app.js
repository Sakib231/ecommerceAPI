const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const app = express();
const dotenv = require("dotenv");

//Config
dotenv.config()
app.use(bodyParser.json());

//Databse
mongoose
.connect(process.env.DB_URL)
.then(()=>console.log("Database Connected"))
.catch((err)=>{
    console.log(err);
});



app.get("/",(req,res)=>{
    res.send("Supplier");
});


const orderRoute = require("./routes/order");

app.use('/api/order',orderRoute);


const port = process.env.PORT || 6000;
app.listen(port,()=>console.log(`Listening on port ${port}...`));