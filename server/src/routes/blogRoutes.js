const express = require("express");
const router = express.Router();
const BlogPost = require("../models/BlogPost");
const { protect, adminOnly } = require("../middleware/auth");

// CREATE
router.post("/", protect, adminOnly, async (req, res) => {
  try {
    const post = await BlogPost.create({
      ...req.body,
      createdBy: req.user._id,
    });
    res.status(201).json(post);
  } catch (err) {
    console.error("Create blog error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// ADMIN: all posts
router.get("/", protect, adminOnly, async (req, res) => {
  const posts = await BlogPost.find().sort({ createdAt: -1 });
  res.json(posts);
});

// PUBLIC: published posts
router.get("/public/list", async (req, res) => {
  const posts = await BlogPost.find({ status: "Published" }).sort({
    createdAt: -1,
  });
  res.json(posts);
});

// GET single
router.get("/:id", protect, adminOnly, async (req, res) => {
  const post = await BlogPost.findById(req.params.id);
  if (!post) return res.status(404).json({ message: "Blog not found" });
  res.json(post);
});

// UPDATE
router.put("/:id", protect, adminOnly, async (req, res) => {
  const post = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!post) return res.status(404).json({ message: "Blog not found" });
  res.json(post);
});

// DELETE
router.delete("/:id", protect, adminOnly, async (req, res) => {
  const post = await BlogPost.findByIdAndDelete(req.params.id);
  if (!post) return res.status(404).json({ message: "Blog not found" });
  res.json({ message: "Blog removed" });
});

module.exports = router;
