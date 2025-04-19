

const { getMovieService, createMovieService, getmovieServiceById } = require("../services/movieService")

const getMoviesController =  async (req, res) =>{
    const { id } = req.query
    if(id) {

        try {

            const movie = await getmovieServiceById(id)
            return res.status(200).json({
                message: "Movie Found",
                data: movie
            })
            
        } catch (error) {
            
            return res.status(400).json({
                message: " Id not found",
                data: error.message
            })
        }

    }


    try {

     const movies = await getMovieService() 
     return res.status(200).json({ 
     message: "Get All Movies Succesfull",
     data: movies
      
    })
        
    } catch (error) {

       return res.status(500).json({ 
            message: "Server Internal Error ",
            

        })
        
    }

    
}

const createMovieController = async (req, res) => {

    try {

    const response = await createMovieService(req.body)
    return res.status(201).json({
        message: "create movie Successfully",
        data: response
 })
        
    } catch (error) {

        return res.status(400).json({ 
            message: "Error:  ",
            data: error.message

            

        })
        
    }

}

module.exports = {

    getMoviesController,
    createMovieController
}