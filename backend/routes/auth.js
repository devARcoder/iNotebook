const express = require('express');
const router = express.Router();
const User = require("../models/User")
const { body, validationResult } = require('express-validator');

router.post('/',[
    body('name','Enter a Valid Name').isLength({min: 3}),
    body('email', 'Enter a Valid Email').isEmail(),
    body('password', 'Password must be atleast five character').isLength({min: 5}),
] , (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }).then(user => res.json(user))
      .catch(err=> {console.log(err)
        (res.json({errror: "please enter a unique value to email", message: err.message}))
      });
})

module.exports = router