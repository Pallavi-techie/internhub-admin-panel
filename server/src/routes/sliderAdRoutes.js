const express = require("express");
const router = express.Router();
const SliderAd = require("../models/SliderAd");
const { protect, adminOnly } = require("../middleware/auth");

// CREATE
router.post("/", protect, adminOnly, async (req, res) => {
  const ad = await SliderAd.create(req.body);
  res.status(201).json(ad);
});

// GET all slider ads
router.get("/", async (req, res) => {
  const list = await SliderAd.find().sort({ order: 1 });
  res.json(list);
});

// UPDATE
router.put("/:id", protect, adminOnly, async (req, res) => {
  const updated = await SliderAd.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

// DELETE
router.delete("/:id", protect, adminOnly, async (req, res) => {
  await SliderAd.findByIdAndDelete(req.params.id);
  res.json({ message: "Slider removed" });
});

module.exports = router;
