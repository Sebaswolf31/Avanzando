
const { Router } = require("express");
const { getMoviesController } = require("../controllers/moviesController");
const { moviesRouter } = require("./moviesRouter");


const router = Router();


router.use("/movies", moviesRouter)


module.exports = { 
    router 
}

