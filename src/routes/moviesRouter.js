const { Router } = require ("express");
const { getMoviesController, createMovieController } = require("../controllers/moviesController");
const { validateCreateMovie } = require("../midlewares/index.js");


const moviesRouter = Router();

moviesRouter.get("/", getMoviesController)
moviesRouter.post("/", validateCreateMovie, createMovieController) 
                    



module.exports = {

    moviesRouter,
    createMovieController
}
