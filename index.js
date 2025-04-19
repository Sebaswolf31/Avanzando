
const { app } = require("./src/server.js")
const { dbConnect } = require("./src/config/dbConfig.js") 
dbConnect()
    .then( () => {
        console.log("DB connected OK")
        app.listen(3000, () => {
        console.log("Server listen on port 3000")
    })
})
.catch( (error) => {
    console.log("DB connection error: ", error)
})









