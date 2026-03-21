const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ["job", "internship"], required: true },
    relatedId: { type: mongoose.Schema.Types.ObjectId, required: true }, // jobId or internshipId
    name: { type: String, required: true },
    email: { type: String, required: true },
    resumeUrl: String,
    status: {
      type: String,
      enum: ["Pending", "Shortlisted", "Rejected", "Hired"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);
