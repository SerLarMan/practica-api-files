const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    albums: [{ type: mongoose.Types.ObjectId, ref: "Album", required: false }],
    img: { type: String, trim: true, required: false },
  },
  {
    timestamps: true,
  }
);

const Author = mongoose.model("Author", authorSchema);
module.exports = Author;