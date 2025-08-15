const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema(
  {
    title: { type: String, trim: true, required: true },
    releaseDate: { type: Date, required: true },
    genre: { type: String, trim: true, required: true },
    img: { type: String, trim: true, required: false },
  },
  {
    timestamps: true,
  }
);

const Album = mongoose.model("Album", albumSchema);
module.exports = Album;
