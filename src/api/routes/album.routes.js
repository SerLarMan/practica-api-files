const {
  getAlbums,
  getAlbumById,
  addAlbum,
  updateAlbum,
  deleteAlbum,
} = require("../controllers/album");

const { upload } = require("../../middlewares/file");

const albumRouter = require("express").Router();

albumRouter.get("/", getAlbums);
albumRouter.get("/:id", getAlbumById);
albumRouter.post("/", upload.single("img"), addAlbum);
albumRouter.put("/:id", upload.single("img"), updateAlbum);
albumRouter.delete("/:id", deleteAlbum);

module.exports = albumRouter;
