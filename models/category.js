const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter category name"],
      trim: true,
    },
    price: {
      type: String,
      required: [true, "please enter category price"],
      trim: true,
    },
    isDeleted: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    isBlocked: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("category", categorySchema);
