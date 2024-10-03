const {
  getActors,
  getActorById,
  addActor,
  updateActor,
  deleteActor,
} = require("../controllers/actor");

const { upload } = require("../../middlewares/file");

const actorRouter = require("express").Router();

actorRouter.get("/", getActors);
actorRouter.get("/:id", getActorById);
actorRouter.post("/", upload.single("img"), addActor);
actorRouter.get("/:id", updateActor);
actorRouter.get("/:id", deleteActor);
