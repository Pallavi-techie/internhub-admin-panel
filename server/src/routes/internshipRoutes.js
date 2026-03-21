const express = require("express");
const router = express.Router();
const Internship = require("../models/Internship");
const { protect, adminOnly } = require("../middleware/auth");

// CREATE internship
router.post("/", protect, adminOnly, async (req, res) => {
  try {
    const internship = await Internship.create({
      ...req.body,
      createdBy: req.user._id,
    });
    res.status(201).json(internship);
  } catch (err) {
    console.error("Create internship error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// GET all internships
router.get("/", protect, adminOnly, async (req, res) => {
  const list = await Internship.find().sort({ createdAt: -1 });
  res.json(list);
});

// GET one
router.get("/:id", protect, adminOnly, async (req, res) => {
  const item = await Internship.findById(req.params.id);
  if (!item) return res.status(404).json({ message: "Internship not found" });
  res.json(item);
});

// UPDATE
router.put("/:id", protect, adminOnly, async (req, res) => {
  const item = await Internship.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!item) return res.status(404).json({ message: "Internship not found" });
  res.json(item);
});

// DELETE
router.delete("/:id", protect, adminOnly, async (req, res) => {
  const item = await Internship.findByIdAndDelete(req.params.id);
  if (!item) return res.status(404).json({ message: "Internship not found" });
  res.json({ message: "Internship removed" });
});

module.exports = router;
