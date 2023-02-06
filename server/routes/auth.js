const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

const JWT_SECRET = 'Yashisgood$boy';

// create a user using POST "/api/auth/createuser" no login required

router.post('/createuser',[
    body('name','Enter a valid name').isLength({ min: 3 }),
    body('email','Enter a valid email').isEmail(),
    body('password','Password length must be atleast 5').isLength({ min: 5 })
],async (req,res)=>{
    // if there are error return bad request and error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // check if email exist already
    
    try{
    let user = await User.findOne({email : req.body.email});
    if(user){
      return res.status(400).json("Sorry a user with this email already exists");
    }

    var salt = bcrypt.genSaltSync(10);
    var secPass = bcrypt.hashSync(req.body.password, salt);

    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    })

    const data = {user : {
      id : user.id,
    }}

    var authtoken = jwt.sign(data, JWT_SECRET);

    res.json({authtoken});

    }catch(error){
      console.error(error.message);
      res.status(500).json({"Some error occured" : error.message});
    }
})


module.exports = router;