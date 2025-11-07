import livros from "../Models/livros.js"

const livrosController = {
    
    getLivros(req,res)  {
        res.status(200).json(livros);
    },

    postLivros(req,res)  {
         livros.push(req.body);
         res.status(201).send("Livro cadastrado com sucesso");
    }
}

export default livrosController;