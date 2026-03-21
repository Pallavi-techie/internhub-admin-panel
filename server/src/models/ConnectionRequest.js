const mongoose = require("mongoose");

const connectionRequestSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    company: String,
    message: String,
    status: {
      type: String,
      enum: ["Pending", "Accepted", "Rejected"],
      default: "Pending"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("ConnectionRequest", connectionRequestSchema);
