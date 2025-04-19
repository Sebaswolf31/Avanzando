

const validateCreateMovie = (req, res, next) => {

    const field = ["title", "year", "director", "duration", "genre", "rate", "poster"]
    const lostFields = field.filter( field => !req.body[field])

    if (lostFields.length > 0) {
        return res.status(400).json({
            message: `Falta Informacion para poder crear la pelicula: ${lostFields.join(", ")}`
        })
    }
   
    next()
}


module.exports = {
    validateCreateMovie
}