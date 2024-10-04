const Movie = require("../models/Movie");
const { deleteCloudinary } = require("../../utils/deleteCloudinary");

const getMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    return res.status(200).json(movies);
  } catch (error) {
    next(error);
  }
};

const getMovieById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const movie = await Movie.findById(id);
    return res.status(200).json(movie);
  } catch (error) {
    next(error);
  }
};

const addMovie = async (req, res, next) => {
  try {
    const movie = new Movie(req.body);

    if (req.file) {
      img: req.file.path;
    }

    const movieDB = await movie.save();
    res.status(200).json(movieDB);
  } catch (error) {
    return next(error);
  }
};

const updateMovie = async (req, res, next) => {
  try {
    const { id } = req.params;

    const newMovie = new Movie(req.body);
    newMovie._id = id;
    const updatedMovie = await Movie.findByIdAndUpdate(id, newMovie, {
      new: true,
    });
    return res.status(200).json(updatedMovie);
  } catch (error) {
    next(error);
  }
};

const deleteMovie = async (req, res, next) => {
  try {
    const { id } = req.params;

    const movie = await Movie.findByIdAndDelete(id);
    deleteCloudinary(movie.img);
    return res.status(200).json("Movie deleted");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
};
