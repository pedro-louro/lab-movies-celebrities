// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrities = require("../models/Celebrity.model")


// all your routes here
router.get("/celebrities/create", (req, res) => {
  res.render("celebrities/new-celebrity")
})

router.post("/celebrities/create", async (req, res) => {

  try {
    const {name, occupation, catchPhrase} = req.body;
    await Celebrities.create({name, occupation, catchPhrase})
    res.redirect("/celebrities")

  } catch (error) {
    console.log(error)
    res.redirect("/celebrities/new-celebrity")
  }
  
})

router.get("/celebrities", async (req, res) => {
  try {
    const celebrities = await Celebrities.find();
    res.render("celebrities/celebrities", {celebrities})
  } catch (error) {
    console.log(error)
  }
})

router.get("/celebrities/:id", async (req, res) => {
  try {
    const celebrity = await Celebrities.findById(req.params.id)
    res.render("celebrities/celebrities-details", celebrity)
  } catch (error) {
    console.log(error)
  }
})

router.post("/celebrities/:id/delete", async (req, res) => {
  try {
    await Celebrities.findByIdAndRemove(req.params.id)
    res.redirect("/celebrities")
  } catch (error) {
    console.log(error)
  }
})


module.exports = router;