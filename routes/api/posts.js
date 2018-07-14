const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// @route  GET api/posts/test
// @desc   Tests post route
// @access public
router.get("/test", (req, res) =>
  res.json({
    msg: "Posts Works"
  })
);

module.exports = router;
