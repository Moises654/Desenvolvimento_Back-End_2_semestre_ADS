// arquivo que cria nossa api
// importa as bibliotecas
const express = require("express"); // importa a biblioteca express
const mongoose = require("mongoose"); // importa a biblioteca mongoose

const usuarioRoutes = require("./routes/usuario"); // importa a rota do usuário
const maquinaRoutes = require("./routes/maquina"); // importa a rota maquina

const app = express(); // cria a variável app para armazenar o express
const PORT = 4000;

// Middlewarepara interpretar o json
app.use(express.json());

// Conecta ao Mongo DB
mongoose.connect("mondbd://localhost:27017/", {
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>console.log("Conectado ao Mongo DB")).catch(err=>console.error("Erro ao conectar", err));

// Usando as rotas de usuário e máquina
app.use("/api/usuario",usuarioRoutes);
app.use("/api/maquina",maquinaRoutes);

// Inicia o servidor
app.listen(PORT,()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});