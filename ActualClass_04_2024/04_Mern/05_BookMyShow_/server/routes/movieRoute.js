const movieRouter = require("express").Router();
const {
    addMovie,
    getAllMovie,
    updateMovie,
    deleteMovie,
    getMovieById
} = require("../controllers/movieControllers");

movieRouter.post("/add-movie", addMovie);
movieRouter.get("/get-all-movie", getAllMovie);
movieRouter.put("/update-movie", updateMovie)
movieRouter.post("/delete-movie", deleteMovie);
movieRouter.get("/movie/:id", getMovieById);

module.exports = movieRouter;
