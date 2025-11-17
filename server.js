import dotenv from "dotenv";
dotenv.config();
import express from "express";
import routes from "./src/Routes/routes.js";
import conectaDB from "./src/config/dbConnect.js";

await conectaDB();


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