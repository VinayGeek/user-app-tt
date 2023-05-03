const mongoose = require("mongoose");

const industrySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "please enter email"],
      trim: true,
    },
    description: {
      type: String,
      default: "",
      trim: true,
    },
    website: {
      type: String,
    },
    invoiceNumber: {
      type: Number,
      required: true,
      default: 0,
    },
    slug: {
      type: String,
      slug: ["name"],
      unique: true,
    },
    address: {
      line1: {
        type: String,
      },
      line2: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      pin: {
        type: Number,
      },
      country: {
        type: String,
      },
      location: {
        type: {
          type: String,
          enum: ["Point"],
          default: "Point",
        },
        coordinates: [Number],
      },
    },
    isDeleted: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    isBlocked: { type: Boolean, default: false },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "branch",
        index: true,
    },
  },
  {
    timestamps: true,
  }
);

industrySchema.index({ "address.location": "2dsphere" });

module.exports = mongoose.model("industry", industrySchema);
