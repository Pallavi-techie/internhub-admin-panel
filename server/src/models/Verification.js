const mongoose = require("mongoose");

const verificationSchema = new mongoose.Schema(
  {
    employeeName: String,
    employeeId: String,
    position: String,
    department: String,
    startDate: String,
    endDate: String,
    status: { 
      type: String, 
      enum: ["Active", "Inactive"], 
      default: "Active" 
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Verification", verificationSchema);
