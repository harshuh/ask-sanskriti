import mongoose from "mongoose";
export const ticket = new mongoose.Schema({
  num_adult: {
    type: Number,
    required: true,
  },
  num_childern: {
    type: Number,
    required: true,
  },
  timestams: true,
});

export const soldTckt = mongoose.model("soldTckt", schema);
