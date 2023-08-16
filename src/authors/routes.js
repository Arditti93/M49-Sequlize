const {Router} = require("express")

const authorRouter = Router()

const {addAuthor} = require("./controllers")

authorRouter.post("/authors/addAuthor", addAuthor)

module.exports = authorRouter