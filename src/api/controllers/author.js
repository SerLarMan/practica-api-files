const { deleteImgCloudinary } = require("../../utils/deleteCloudinary");
const Author = require("../models/Author");

const getAuthors = async (req, res, next) => {
  try {
    const authors = await Author.find().populate("albums");
    return res.status(200).json(authors);
  } catch (error) {
    next(error);
  }
};

const getAuthorById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const author = await Author.findById(id).populate("albums");
    return res.status(200).json(author);
  } catch (error) {
    next(error);
  }
};

const addAuthor = async (req, res, next) => {
  try {
    const author = new Author(req.body);

    if (req.file) {
      author.img = req.file.path;
    }

    const authorDB = await author.save();
    return res.status(200).json(authorDB);
  } catch (error) {
    next(error);
  }
};

const updateAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;

    const newAuthor = new Author(req.body);
    newAuthor._id = id;

    if (req.file) {
      const existingAuthor = await Author.findById(id);
      if (existingAuthor.img) {
        deleteImgCloudinary(existingAuthor.img);
      }
      newAuthor.img = req.file.path;
    }

    const updatedAuthor = await Author.findByIdAndUpdate(id, newAuthor, {
      new: true,
    });
    return res.status(200).json(updatedAuthor);
  } catch (error) {
    next(error);
  }
};

const deleteAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;

    const author = await Author.findByIdAndDelete(id);
    deleteImgCloudinary(author.img);
    return res.status(200).json("Author deleted");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAuthors,
  getAuthorById,
  addAuthor,
  updateAuthor,
  deleteAuthor,
};
