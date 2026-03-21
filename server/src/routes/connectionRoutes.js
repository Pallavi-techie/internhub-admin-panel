const express = require("express");
const router = express.Router();
const ConnectionRequest = require("../models/ConnectionRequest");
const { protect, adminOnly } = require("../middleware/auth");

// PUBLIC: Submit request
router.post("/", async (req, res) => {
  const reqst = await ConnectionRequest.create(req.body);
  res.status(201).json(reqst);
});

// ADMIN: List all
router.get("/", protect, adminOnly, async (req, res) => {
  const list = await ConnectionRequest.find().sort({ createdAt: -1 });
  res.json(list);
});

// ADMIN: Update status
router.patch("/:id/status", protect, adminOnly, async (req, res) => {
  const updated = await ConnectionRequest.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(updated);
});

// ADMIN: Delete request
router.delete("/:id", protect, adminOnly, async (req, res) => {
  await ConnectionRequest.findByIdAndDelete(req.params.id);
  res.json({ message: "Request deleted" });
});

module.exports = router;
