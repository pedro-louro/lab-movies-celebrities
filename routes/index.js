const router = require("express").Router();
const movies = require('./movies.routes.js');
const celebrities = require('./celebrities.routes.js');

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
