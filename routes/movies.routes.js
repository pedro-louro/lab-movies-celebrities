// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/Movie.model")
const Celebrities = require("../models/Celebrity.model")


// all your routes here
router.get("/movies/create", async(req, res) => {
  try {
    const celebrities = await Celebrities.find();
    res.render("movies/new-movie", {celebrities})

  } catch (error) {
    console.log(error)
  }
})

router.post("/movies/create", async (req, res) => {

  try {
    const {title, genre, plot, cast} = req.body
    await Movie.create({title, genre, plot, cast})
    res.redirect("/movies")

  } catch (error) {
    console.log(error)
  }
})

router.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find().populate("cast")
    res.render("movies/movies", {movies})

  } catch (error) {
    console.log(error)
  }
})

router.get("/movies/:id", async (req, res) => {
  try {
    const getMovie = await Movie.findById(req.params.id).populate("cast")
    console.log(getMovie.cast)
    res.render("movies/movie-details", {getMovie})

  } catch (error) {
    console.log(error)
  }
})

router.post("/movies/:id/delete", async (req, res) => {
try {
  await Movie.findByIdAndRemove(req.params.id)
  res.redirect("/movies")
} catch (error) {
  console.log(error)
}
})

router.get("movies/:id/edit", async (req, res) => {
  
  try {
    const findMovie = await Movie.findById(req.params.id);
    const findCelebrity = await Celebrity.findById(findMovie.cast)
    res.render("movies/edit-movie", {findMovie})
  } catch (error) {
    console.log(error)
  }
})



module.exports = router;