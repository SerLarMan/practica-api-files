const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    genre: { type: String, trim: true, required: true },
    year: { type: Date, required: true },
    actors: [{ type: mongoose.Types.ObjectId, ref: "Actor" }],
    img: { type: String, trim: true, required: false },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
