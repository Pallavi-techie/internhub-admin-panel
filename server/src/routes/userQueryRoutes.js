const express = require("express");
const router = express.Router();
const UserQuery = require("../models/UserQuery");
const { protect, adminOnly } = require("../middleware/auth");

// PUBLIC: Create new query (from Contact page)
router.post("/", async (req, res) => {
  try {
    const q = await UserQuery.create(req.body);
    res.status(201).json(q);
  } catch (err) {
    res.status(500).json({ message: "Failed to submit query" });
  }
});

// ADMIN: Get all queries
router.get("/", protect, adminOnly, async (req, res) => {
  const list = await UserQuery.find().sort({ createdAt: -1 });
  res.json(list);
});

// ADMIN: Update status (Pending → Resolved)
router.patch("/:id/status", protect, adminOnly, async (req, res) => {
  const q = await UserQuery.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(q);
});

// ADMIN: Delete query
router.delete("/:id", protect, adminOnly, async (req, res) => {
  await UserQuery.findByIdAndDelete(req.params.id);
  res.json({ message: "Query deleted" });
});

module.exports = router;
