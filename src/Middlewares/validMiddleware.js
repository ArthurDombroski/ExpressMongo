import express from "express";

function validarCampos (campos) {
    return (req,res,next) => {

        const faltando = [];

        campos.forEach(campo => {
            
            if(
                req.body[campo] === undefined ||
                req.body[campo] === null ||
                req.body[campo] === ""

            ) {
                faltando.push(campo);
            }
        });

        if(faltando.length > 0 ){ 
            return res.status(400).json({ message: ` Os seguintes campos estão faltando : ${faltando.join(", ")}`});
        }

        next();
    }
}

export default validarCampos;