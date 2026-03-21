const express = require("express");
const router = express.Router();
const Job = require("../models/Job");
const { protect, adminOnly } = require("../middleware/auth");

// CREATE job
router.post("/", protect, adminOnly, async (req, res) => {
  try {
    const job = await Job.create({ ...req.body, createdBy: req.user._id });
    res.status(201).json(job);
  } catch (err) {
    console.error("Create job error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// GET all jobs (admin dashboard)
router.get("/", protect, adminOnly, async (req, res) => {
  const jobs = await Job.find().sort({ createdAt: -1 });
  res.json(jobs);
});

// GET single job
router.get("/:id", protect, adminOnly, async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) return res.status(404).json({ message: "Job not found" });
  res.json(job);
});

// UPDATE job
router.put("/:id", protect, adminOnly, async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!job) return res.status(404).json({ message: "Job not found" });
  res.json(job);
});

// DELETE job
router.delete("/:id", protect, adminOnly, async (req, res) => {
  const job = await Job.findByIdAndDelete(req.params.id);
  if (!job) return res.status(404).json({ message: "Job not found" });
  res.json({ message: "Job removed" });
});

module.exports = router;
