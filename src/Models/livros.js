import { ObjectId } from "mongodb";
import mongoose, { mongo } from "mongoose";
import {autorSchema} from "./autor.js"

const livroSchema = new mongoose.Schema({
    id: {
        type: ObjectId
    },

    titulo: {
        type: String, required: true
    },

    editora: {
        type: String
    },

    preco: {
        type: Number
    },

    paginas: {
        type: Number
    },

    autor: autorSchema

}, {versionKey: false});

const livro = mongoose.model("livros", livroSchema);

export default livro;