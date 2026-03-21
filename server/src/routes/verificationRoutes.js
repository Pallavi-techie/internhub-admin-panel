const express = require("express");
const router = express.Router();
const Verification = require("../models/Verification");
const { protect, adminOnly } = require("../middleware/auth");

// CREATE verification
router.post("/", protect, adminOnly, async (req, res) => {
  const v = await Verification.create(req.body);
  res.status(201).json(v);
});

// ADMIN: Get all
router.get("/", protect, adminOnly, async (req, res) => {
  const list = await Verification.find().sort({ createdAt: -1 });
  res.json(list);
});

// PUBLIC: Verify by ID
router.get("/check/:employeeId", async (req, res) => {
  const found = await Verification.findOne({ employeeId: req.params.employeeId });
  if (!found) return res.json({ valid: false });
  res.json({ valid: true, data: found });
});

// UPDATE
router.put("/:id", protect, adminOnly, async (req, res) => {
  const updated = await Verification.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

// DELETE
router.delete("/:id", protect, adminOnly, async (req, res) => {
  await Verification.findByIdAndDelete(req.params.id);
  res.json({ message: "Verification removed" });
});

module.exports = router;
