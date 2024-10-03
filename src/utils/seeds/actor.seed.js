const mongoose = require("mongoose");
require("dotenv").config();
const Actor = require("../../api/models/Actor");
const actors = require("../../data/actors");

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    let allActors = await Actor.find();

    if (allActors.length) {
      await Actor.collection.drop();
    }
  })
  .catch((error) => console.log(error))
  .then(async () => {
    await Actor.insertMany(actors);
    console.log("Actors added");
  })
  .catch((error) => console.log(error))
  .finally(() => mongoose.disconnect());
