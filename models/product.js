const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter product name"],
      trim: true,
    },
    price: {
      type: String,
      required: [true, "please enter product price"],
      trim: true,
    },
    taxList: [
      {
        tax: {
          type: Schema.Types.ObjectId,
          ref: "tax",
          index: true,
        },
      },
    ],
    isDeleted: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    isBlocked: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
