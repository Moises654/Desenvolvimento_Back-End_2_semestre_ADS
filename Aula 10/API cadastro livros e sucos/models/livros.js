const mongoose = require ('mongoose');

// Definindo o esquema do livro
const livroSchema = new mongoose.Schema ({
    titulo: { type: String, required: true},
    autor: { type: String, required: true },
    ano: { type: Number },
});

// Exportando o modelo
module.exports = mongoose.model ('livro', livroSchema);