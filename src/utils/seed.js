const mongoose = require("mongoose");
require("dotenv").config();
const Album = require("../api/models/Album");
const albums = require("../data/albums");

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    let allAlbums = await Album.find();

    if (allAlbums.length) {
      await Album.collection.drop();
    }
  })
  .catch((error) => console.log(error))
  .then(async () => {
    await Album.insertMany(albums);
    console.log("Albums added");
  })
  .catch((error) => console.log(error))
  .finally(() => mongoose.disconnect());
