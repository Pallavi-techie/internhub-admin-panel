const mongoose = require("mongoose");

const sliderAdSchema = new mongoose.Schema(
  {
    imageUrl: String,
    title: String,
    subtitle: String,
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

module.exports = mongoose.model("SliderAd", sliderAdSchema);
