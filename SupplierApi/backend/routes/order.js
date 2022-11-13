const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.post("/add", async(req,res)=>{
const{transactionID,userID,name,amount,products,payment,address} = req.body;

try{
const order = await Order.create({transactionID,userID,name,amount,products,payment,address});
if(order)
{
    res.json({success:true,data:order});
}
else{
    
    res.json("Order Failed");
}
}catch(err)
{
    console.log(err);
    res.json(err)
}

});


module.exports = router;