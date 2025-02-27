const express = require("express");
const router = express.Router();
const Notes = require("../models/Notes");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

// RIUTER 1 Get request - localhost:5000/api/notes/fetchallnotes - login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});
// RIUTER 2 Post request - localhost:5000/api/notes/addnote - login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a Valid Title").isLength({ min: 3 }),
    body("description", "Enter a description atleast 5 character").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNotes = await note.save();
      res.json(savedNotes);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

// RIUTER 3 Post request - localhost:5000/api/notes/updatenote - login required
router.put(
  "/updatenote/:id",
  fetchuser, async (req, res) => {
    const {title, description, tag} = req.body;
    const newNote = {};
    if (title){newNote.title = title;}
    if (description){newNote.description = description;}
    if (tag){newNote.tag = tag;}

    // find the note to update and update it
    let note = await Notes.findById(req.params.id);
    if (!note){return res.status(404).send("Not Found")};

    if (note.user.toString() !== req.user.id){
      return res.status(401).send("Not Allowed")
    }

    let newdata = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true})
    res.json(newdata)
  })

module.exports = router;
