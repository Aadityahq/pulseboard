const express = require("express");
const User = require("../models/User");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();

// GET /api/users
// returns a list of all users
router.get("/", requireAuth, async (req, res) => {
  try {
    const { _id, displayName, role } = req.query;
    const filter = {};

    if (_id) {
        filter._id = _id;
    }

    const users = await User.find(filter).select("_id displayName role");

    return res.status(200).json({ users });
    } catch (err) {
        return res.status(500).json({
            error: err.message
        })
    }
       
});

module.exports = router;
