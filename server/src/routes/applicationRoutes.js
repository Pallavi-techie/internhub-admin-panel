const express = require("express");
const router = express.Router();
const Application = require("../models/Application");
const { protect, adminOnly } = require("../middleware/auth");

// PUBLIC: submit application (you can later call from career site)
router.post("/", async (req, res) => {
  try {
    const app = await Application.create(req.body);
    res.status(201).json(app);
  } catch (err) {
    console.error("Create application error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// ADMIN: get all applications (optionally filter by type)
router.get("/", protect, adminOnly, async (req, res) => {
  const { type } = req.query;
  const filter = type ? { type } : {};
  const apps = await Application.find(filter).sort({ createdAt: -1 });
  res.json(apps);
});

// ADMIN: change status
router.patch("/:id/status", protect, adminOnly, async (req, res) => {
  const { status } = req.body;
  const app = await Application.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  );
  if (!app) return res.status(404).json({ message: "Application not found" });
  res.json(app);
});
  
module.exports = router;
