
const express = require("express")
const connect = require("./Config/db")
const dotenv = require("dotenv").config()
const port = process.env.port
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
connect()


const movieSchema = mongoose.Schema({
    title: { type: String },
    poster: { type: String },
    genre: { type: String },
    story: { type: String },

})

const Movie = mongoose.model("movies", movieSchema)

app.get("/", async (req, res) => {
    try {
        const movie = await Movie.find()
        res.status(200).json(movie)
    } catch (error) {
        res.status(400).json({ message: error })
    }
})


app.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const movie = await Movie.findOne({ id })
        res.status(200).json(movie)
    } catch (error) {
        res.status(400).json({ message: error })
    }
})

app.post("/addMovie", async (req, res) => {
    const { title, poster, genre, story } = req.body
    try {
        const movie = await Movie.create({ title, poster, genre, story })
        res.status(200).json({ message: "Movie Added Successfully" })
    } catch (error) {
        res.status(400).json({ message: error })
    }
})


app.put("/update/:id", async (req, res) => {
    const { id } = req.params
    const { title, poster, genre, story } = req.body

    try {
        const movie = await Movie.findByIdAndUpdate(id, { title, poster, genre, story })
        res.status(200).json({ message: "Movie successfully updated" })
    } catch (error) {
        res.status(400).json({ message: error })
    }
})

app.delete("/delete/:id", async (req, res) => {
    const { id } = req.params
    try {
        const movie = await Movie.findByIdAndDelete(id)
        res.status(200).json({ message: "Movie successfully deleted" })
    } catch (error) {
        res.status(400).json({ message: error })
    }
})


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})