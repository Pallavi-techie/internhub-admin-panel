const express = require("express");
const router = express.Router();
const Interview = require("../models/Interview");
const { protect, adminOnly } = require("../middleware/auth");

// ADMIN: Schedule interview
router.post("/", protect, adminOnly, async (req, res) => {
  try {
    const interview = await Interview.create(req.body);
    res.status(201).json(interview);
  } catch (err) {
    console.error("Interview create error:", err.message);
    res.status(500).json({ message: "Failed to schedule interview" });
  }
});

// ADMIN: Get all interviews
router.get("/", protect, adminOnly, async (req, res) => {
  const list = await Interview.find().sort({ createdAt: -1 });
  res.json(list);
});

// ADMIN: Update interview (reschedule / status change)
router.put("/:id", protect, adminOnly, async (req, res) => {
  const updated = await Interview.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// ADMIN: Delete interview
router.delete("/:id", protect, adminOnly, async (req, res) => {
  await Interview.findByIdAndDelete(req.params.id);
  res.json({ message: "Interview removed" });
});

module.exports = router;
