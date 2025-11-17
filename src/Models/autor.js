import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const autorSchema = new mongoose.Schema({
    id: {
        type: ObjectId
    },

    nome: {
        type: String, required: true
    },

    nacionalidade:{
        type: String, required: true
    }
}, {versionKey: false});

const autor = mongoose.model("autores", autorSchema);

export default {autor, autorSchema};