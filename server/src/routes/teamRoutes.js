const express = require("express");
const router = express.Router();
const TeamMember = require("../models/TeamMember");
const { protect, adminOnly } = require("../middleware/auth");

// CREATE member
router.post("/", protect, adminOnly, async (req, res) => {
  const m = await TeamMember.create(req.body);
  res.status(201).json(m);
});

// GET all team members
router.get("/", async (req, res) => {
  const list = await TeamMember.find().sort({ order: 1 });
  res.json(list);
});

// UPDATE member
router.put("/:id", protect, adminOnly, async (req, res) => {
  const updated = await TeamMember.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

// DELETE member
router.delete("/:id", protect, adminOnly, async (req, res) => {
  await TeamMember.findByIdAndDelete(req.params.id);
  res.json({ message: "Team member removed" });
});

module.exports = router;
