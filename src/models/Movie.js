

const mongoose = require('mongoose');   

const movieObject = {                   
                                        
       title: {                         
        type: String,
        required: true
        } , 
        year: { 
            type: Number,
            required: true
        },
        director: {
            type: String,
            required: true
        },
        duration: {
            type: String,
            required: true
        },
        genre: {
            type: [String],
            required: true
        },
        rate: {
            type: Number,
            required: true
        },
        poster: {
            type: String,
            required: true
        },
}

//No olvidar que todo esta basado en POO y que debemos instanciar el schema como una clase
// el schema es un objeto que nos permite interactuar con la coleccion movie, es decir nos permite hacer operaciones CRUD
// Create, Read, Update, Delete
// El schema se crea con la clase Schema de mongoose, y recibe como parametro el objeto que representa la estructura de la coleccion movie

const movieSchema = new mongoose.Schema(movieObject); 

const Movie = mongoose.model('movies', movieSchema); 

module.exports = { 
    Movie 
} 