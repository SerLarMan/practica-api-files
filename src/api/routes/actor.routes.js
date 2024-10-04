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
actorRouter.put("/:id", updateActor);
actorRouter.delete("/:id", deleteActor);

module.exports = actorRouter;
