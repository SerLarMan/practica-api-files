const { deleteImgCloudinary } = require("../../utils/deleteCloudinary");
const Album = require("../models/Album");

const getAlbums = async (req, res, next) => {
  try {
    const albums = await Album.find();
    return res.status(200).json(albums);
  } catch (error) {
    next(error);
  }
};

const getAlbumById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const album = await Album.findById(id);
    return res.status(200).json(album);
  } catch (error) {
    next(error);
  }
};

const addAlbum = async (req, res, next) => {
  try {
    const album = new Album(req.body);

    if (req.file) {
      album.img = req.file.path;
    }

    const albumDB = await album.save();
    return res.status(200).json(albumDB);
  } catch (error) {
    return next(error);
  }
};

const updateAlbum = async (req, res, next) => {
  try {
    const { id } = req.params;

    const newAlbum = new Album(req.body);
    newAlbum._id = id;

    if (req.file) {
      const existingAlbum = await Album.findById(id);
      if(existingAlbum.img) {
        deleteImgCloudinary(existingAlbum.img);
      }
      newAlbum.img = req.file.path;
    }

    const updatedAlbum = await Album.findByIdAndUpdate(id, newAlbum, {
      new: true,
    });
    return res.status(200).json(updatedAlbum);
  } catch (error) {
    next(error);
  }
};

const deleteAlbum = async (req, res, next) => {
  try {
    const { id } = req.params;

    const album = await Album.findByIdAndDelete(id);
    deleteImgCloudinary(album.img);
    return res.status(200).json("Album deleted");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAlbums,
  getAlbumById,
  addAlbum,
  updateAlbum,
  deleteAlbum,
};
