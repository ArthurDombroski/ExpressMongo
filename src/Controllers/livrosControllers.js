import livros from "../Models/livros.js"

const livrosController = {
    
    getLivros(req,res)  {
        res.status(200).json(livros);
    },

    postLivros(req,res)  {
         livros.push(req.body);
    }
}

export default livrosController;