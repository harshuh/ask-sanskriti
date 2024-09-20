import mongoose from "mongoose";
export const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    mlocation: {
      type: String,
      required: true,
    },
    Otimings: {
      type: String,
      required: true,
    },
    Ctimings: {
      type: String,
      required: true,
    },
    closingDay: {
      type: String,
      required: true,
    },
    entry_price_adult: {
      type: Number,
      required: true,
    },
    entry_price_child: {
      type: Number,
      required: true,
    },
    entry_price_Foreign: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Museum = mongoose.model("museum", Schema);
