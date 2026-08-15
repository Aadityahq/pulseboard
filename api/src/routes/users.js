const express = require("express");
const User = require("../models/User");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();

// GET /api/users
router.get("/", requireAuth, async (req, res) => {
  try {
    const users = await User.find().select("id displayName role");
    return res.status(200).json({ users });
    } catch (err) {
      return res.status(500).json({
          error: err.message
      })
    }  
});

module.exports = router;
