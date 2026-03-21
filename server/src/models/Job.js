const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: { type: String, default: "Full-time" },
    location: String,
    salary: String,
    experience: String,
    description: String,
    status: { type: String, enum: ["active", "closed", "draft"], default: "active" },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
