


const { Movie } = require('../models/Movie')    
const getMovieService = async () => { 

    return await Movie.find() 

}

const getmovieServiceById =  async (id) => {


  return await Movie.findById(id)
   
}


const createMovieService = async (movie) => {

    return await Movie.create(movie)

}



module.exports = {
    getMovieService,
    getmovieServiceById,
    createMovieService
}