const Actor = require("../models/Actor");

const getActors = async (req, res, next) => {
  try {
    const actors = await Actor.find();
    return res.status(200).json(actors);
  } catch (error) {
    next(error);
  }
};

const getActorById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const actor = await Actor.findById(id);
    return res.status(200).json(actor);
  } catch (error) {
    next(error);
  }
};

const addActor = async (req, res, next) => {
  try {
    const actor = new Actor(req.body);

    if (req.file) {
      img: req.file.path;
    }

    const actorDB = await actor.save();
    return res.status(200).json(actorDB);
  } catch (error) {
    next(error);
  }
};

const updateActor = async (req, res, next) => {
  try {
    const { id } = req.params;

    const newActor = new Actor(req.body);
    newActor._id = id;
    const updatedActor = await Actor.findByIdAndUpdate(id, newActor, {
      new: true,
    });
    return res.status(200).json(updatedActor);
  } catch (error) {
    next(error);
  }
};

const deleteActor = async (req, res, next) => {
  try {
    const { id } = req.params;

    await Actor.findByIdAndDelete(id);
    return res.status(200).json("Actor deleted");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getActors,
  getActorById,
  addActor,
  updateActor,
  deleteActor,
};
