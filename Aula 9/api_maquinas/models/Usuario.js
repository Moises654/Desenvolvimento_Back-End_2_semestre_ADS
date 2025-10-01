// Cria o modelo para salvar o usuário

// Importa o mongoose para definição do Schema e modelo
const mongoose = require("mongoose");

// Cria a estrutura schema para o documento de usuário
const UsuarioSchema = new mongoose.UsuarioSchema({
    nome: {type: String, required: true}, //  Campo nome, obrigatório e do tipo String
    email: {type: String, required: true} // Campo e-mail, obrigatório e do tipo String
});

// Exporta o modelo Usuário que será utilizado nas rotas CRUD

module.exports = mongoose.model("Usuario", UsuarioSchema);