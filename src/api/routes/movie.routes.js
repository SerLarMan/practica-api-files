const {
  getMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movie");

const { upload } = require("../../middlewares/file");

const movieRouter = require("express").Router();

movieRouter.get("/", getMovies);
movieRouter.get("/:id", getMovieById);
movieRouter.post("/", upload.single("img"), addMovie);
movieRouter.put("/:id", updateMovie);
movieRouter.delete("/:id", deleteMovie);

module.exports = movieRouter;
