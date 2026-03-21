const express = require("express");
const router = express.Router();
const Client = require("../models/Client");
const { protect, adminOnly } = require("../middleware/auth");

// CREATE client
router.post("/", protect, adminOnly, async (req, res) => {
  const client = await Client.create(req.body);
  res.status(201).json(client);
});

// GET all clients
router.get("/", async (req, res) => {
  const list = await Client.find().sort({ order: 1 });
  res.json(list);
});

// UPDATE client
router.put("/:id", protect, adminOnly, async (req, res) => {
  const updated = await Client.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

// DELETE client
router.delete("/:id", protect, adminOnly, async (req, res) => {
  await Client.findByIdAndDelete(req.params.id);
  res.json({ message: "Client removed" });
});

module.exports = router;
