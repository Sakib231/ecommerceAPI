const router = require("express").Router();
const User = require("../models/User");


//register
router.post("/register", async (req,res) => {
    const newUser = new User({
        mobile:req.body.mobile,
        name:req.body.name,
        password:req.body.password,
        account:req.body.mobile,
    });

try{
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
    }catch(err){
     res.status(500).json(err);
    }
});



//balance
router.post("/balance", async (req,res) => {
    
    try{
        console.log(req.body);
    const {mobile, password} = req.body;

    const user = await User.findOne({mobile:mobile});
    if(user)
    {
        console.log(user)
        if(user.password === password)
        {
            res.json({balance:user.balance});
        }
    }
    }catch(err){
     res.status(500).json(err);
    }
});

module.exports = router;