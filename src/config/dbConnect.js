import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function conectaDB() {

    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Banco de Dados conectado com sucesso");

        return mongoose.connection;
    } catch(error) {
        console.log("Falha em conectar o banco de dados", error);
    }
}

export default conectaDB;


