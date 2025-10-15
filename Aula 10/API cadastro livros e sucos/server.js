const express = require ('express');
const mongoose = require('mongoose');
const cors = require ('cors');

// Inicialização do app
const app = express ();
app.use (cors());
app.use(express.json());

// Conexão ao MongoDB
mongoose.connect("mongodb://localhost...", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
.then(() => console.log ('MongoDB conectado'))
.catch(err => console.error ('Erro ao conectar ao MongoDB:', err));

// Importação das rotas
const livroRoutes = require ('./routes/livro');
app.use ('/api/livro', livroRoutes);

const sucoRoutes = require('./routes/suco');
app.use ('/api/books', sucoRoutes);

// Definir a porta do servidor
app.listen (3000, () => {
    console.log ('Servidor rodando na porta 3000');
});