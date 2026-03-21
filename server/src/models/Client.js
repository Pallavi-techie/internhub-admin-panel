const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    name: String,
    logoUrl: String,
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Client", clientSchema);
