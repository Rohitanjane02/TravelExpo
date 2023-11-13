const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

//REGISTER
router.post("/register", async(req, res)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });
        const user = await newUser.save();
        res.status(200).json(user);
    } catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});

//LOGINN
router.post("/login", async(req, res)=>{
    try{

        // find & check is there any user exist in db
        //checking for username
        const user = await User.findOne({username: req.body.username})
        if(!user) return res.status(400).json("Wrong credentials!")

        //checking for password
        const validate = await bcrypt.compare(req.body.password, user.password)
        !validate && res.status(400).json("Wrong credentials!")

        const {password, ...others} = user._doc;//it will send every details of user except the password
        res.status(200).json(others);        
    } catch(err){
        res.status(500).json(err);
    }
});


module.exports = router

