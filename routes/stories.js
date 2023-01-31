const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware/auth");
const Story = require("../models/Story");

//@desc add new story
//@route POST /add

router.post("/", ensureAuth, async (req, res) => {
  try {
    req.body.user = req.user._id;
    await Story.create(req.body);
    res.redirect("dashboard");
  } catch (err) {
    console.log(err);
    res.render("error/500");
  }
});

//@desc add form
//@route GET /add
router.get("/add", ensureAuth, (req, res) => {
  res.render("stories/add");
});

module.exports = router;
