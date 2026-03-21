const mongoose = require("mongoose");

const teamMemberSchema = new mongoose.Schema(
  {
    name: String,
    role: String,
    photoUrl: String,
    linkedin: String,
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

module.exports = mongoose.model("TeamMember", teamMemberSchema);
