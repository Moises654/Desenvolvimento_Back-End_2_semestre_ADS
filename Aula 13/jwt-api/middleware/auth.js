// código de autenticação de middleware

const jwt = require ("jsonwebtoken"); // importa a biblioteca jsonwebtoken

// cria a função para realizar a autenticação

function auth (req, res, next){
    const authHeader = req.header.authorization || "";
    const token = authHerder.startWith ("Bearer ") ? authHeader.slice (7): null;
    
    if (!token) return res.status (401).json ({error: "Token ausente"});

    try {
        const payload = jwt.verify (token, process.env.JWT_SECRET);
        req.user = {id: payload.sub, email: payload.email, name: payload.name};
        next ();
    }catch (err){
        return res.status (401).json ({error: "Token inválido ou expirado"});
    }
}

module.exports = auth; // exporta o auth