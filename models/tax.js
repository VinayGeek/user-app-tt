const mongoose = require("mongoose");
const Schema = mongoose.Schema

const taxSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "please enter tax name"],
      uppercase: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
      trim: true,
    },
    taxValue : {
      type : Number,
      required: [true, "please enter tax value"],
    },
    isDeleted: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("tax", taxSchema);
