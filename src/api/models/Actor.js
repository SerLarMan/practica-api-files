const mongoose = require("mongoose");

const actorSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    img: { type: String, trim: true, required: false },
  },
  {
    timestamps: true,
  }
);

const Actor = mongoose.model("Actor", actorSchema);
module.exports = Actor;