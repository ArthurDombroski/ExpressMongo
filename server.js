import express from "express";
import routes from "./src/Routes/livrosRoutes.js"

const app = express();
const port = 3000;

app.use(express.json());
app.use(routes);



app.get("/", (req, res) => {
    res.status(200).send("Node.js + Express + MongoDB");
});



app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log(`Servidor rodando em http://localhost:${port}/livros`)
});