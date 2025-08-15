const {
  getAuthors,
  getAuthorById,
  addAuthor,
  updateAuthor,
  deleteAuthor,
} = require("../controllers/author");

const { upload } = require("../../middlewares/file");

const authorRouter = require("express").Router();

authorRouter.get("/", getAuthors);
authorRouter.get("/:id", getAuthorById);
authorRouter.post("/", upload.single("img"), addAuthor);
authorRouter.put("/:id", upload.single("img"), updateAuthor);
authorRouter.delete("/:id", deleteAuthor);

module.exports = authorRouter;
