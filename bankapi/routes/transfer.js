const express = require('express');
const router = express.Router();
const User = require("../models/User");

router.put("/", async(req,res)=>{
    try{
        const senderacc = req.body.senderacc;
        const receiveracc = req.body.receiveracc;
        const sender = await User.findOne({account: senderacc});
        const receiver =  await User.findOne({account: receiveracc});

        if(!receiver){
            res.json({message:"receiver acc not found,", success:false});
            return;
        }
        console.log(sender.password);
        console.log(req.body.password);

        if(req.body.password !== sender.password){
            res.json({message:"invalid password", success:false});
            return;
        }

        const amount = req.body.amount;

        if(amount > sender.balance){
            res.json({message:"low balance", success:false});
            return;
        }
        if((sender.balance-amount)<100){
            res.json({message:"at least 100 balance required", success:false});
            return;
        }
        sender.balance = sender.balance - amount;
        receiver.balance = receiver.balance + amount;

        await sender.save();
        await receiver.save();
        res.json({message:"Balance Transferred", success:true});


    
    }catch(err){
            console.log(err);
            res.json(err);
    }
});

module.exports = router;