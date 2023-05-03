const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "please enter name"],
      trim: true,
    },
    last_name: {
      type: String,
      required: [true, "please enter name"],
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "please enter email"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "please enter password"],
      trim: true,
    },
    token: {
      type: String,
      required: true,
      default: false,
    },
    phone_number: {
      type: Number,
      required: [true, "please enter phone_number"],
    },
    website: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("admin", adminSchema);
