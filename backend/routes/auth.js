const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

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
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      res.json({ success: "Your email has been successfully added" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error ocuure");
    }
  }
);

module.exports = router;
