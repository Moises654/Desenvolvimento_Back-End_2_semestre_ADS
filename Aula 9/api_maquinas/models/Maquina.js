// importa biblioteca do mongoose
const mongoose = require ("mongoose");

// Cria a estrutura (schema) para b documento da maquina
const MaquinaSchema = new mongoose.Schema({
    nome:{type: String, required: true}, // Nome da máquina
    tipo: {type: String, required: true}, // Tipo ex impressora, rotativa
    status:{type: String, required: true}, // status ativa, inativa, manutenção
    ultimaManutencao: {type: Date, required: true}, // última manutenção
    proximaManutencao: {type: Date, required: true} // próxima manutenção

})

// Exporta o modelo
module.exports = mongoose.model ("Maquina", MaquinaSchema);