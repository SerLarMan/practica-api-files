require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/utils/database");
const cloudinary = require("cloudinary").v2;
const movieRoutes = require("./src/api/routes/movie.routes");
const actorRoutes = require("./src/api/routes/actor.routes");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  api_key: process.env.CLOUDINARY_API_KEY,
});

// Database connection
connectDB();

// Server configuration
const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/movies", movieRoutes);
app.use("/actors", actorRoutes);

app.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.messaje || "Unexpected error");
});

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
