const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    location: String,
    stipend: String,
    duration: String,
    mode: { type: String, default: "On-site" },
    description: String,
    status: { type: String, enum: ["active", "closed", "draft"], default: "active" },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Internship", internshipSchema);
