import express from "express"
import livros from "../Controllers/livrosControllers.js"

const routes = express.Router()

routes.get("/livros", (req,res) => {
    res.status(200).json(livros);
})

export default routes;