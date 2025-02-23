const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "devarcoder"
// post request - localhost:5000/api/auth/createuser
router.post(
  "/createuser",
  [
    body("name", "Enter a Valid Name").isLength({ min: 3 }),
    body("email", "Enter a Valid Email").isEmail(),
    body("password", "Password must be atleast five character").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "sorry this email already exist" });
      }

      const salt = await bcrypt.genSalt()
      const secPass = await bcrypt.hash(req.body.password, salt)
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass
      });

      const data = {
        user:{
          id: user.id
        }
      }
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({authToken})
      // res.json({ success: "Your email has been successfully added" });


    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

// post request - localhost:5000/api/auth/login
router.post(
  "/login",
  [
    body("email", "Enter a Valid Email").isEmail(),
    body("password", "Password cannot be empty").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;
    try {
      let user = await User.findOne({email});
      if (!user){
        return res.status(400).json({error: "Please try to login with correct credential."});
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare){
        return res.status(400).json({error: "Please try to login with correct credential."});
      }
      const data = {
        user:{
          id: user.id
        }
      }
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({authToken})
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error n 2");
    }
    })
    
module.exports = router;
