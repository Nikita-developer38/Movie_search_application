const mongoose = require("mongoose")

const connect = () => {
    mongoose.connect("mongodb://localhost:27017/movie_search").then(() => {
        console.log("database is Connected")
    }).catch((error) => {
        console.log(error)
    })
}

module.exports = connect