const express = require('express'); // importamos o Express
const sucos = require('../models/sucos'); // Importamos o modelo sucos
const router  = express.Router (); // Criamos o roteador

// ======= CRIAÇÃO (POST) ======= //
router.post('/', async (req, res) => {
    const { sabor } = req.body; // Extraímos os dados da requisição
    try {
        const newsuco = new sucos ({ sabor }); // Criamos e salvamos o suco
        await newsuco.save();
        res.status(201).json(newsucos); // Retornamos o suco criado
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar suco', error });
    }
});

// ======= LEITURA (GET) ======= //
router.get ('/', async (req, res) => {
    try {
        const suco = await sucos.find (); // Buscamos todos os sucos
        res.status(200).json(suco); // Retornamos a lista de sucos
    } catch (error) {
        res.status(500).json ({ message: ' Erro ao buscar sucos', error }); // Retornamos erro, se houver
    }
});

// ======= ATUALIZAÇÃO (PUT) ======= //
router.put ('/:id', async (req, res) => {
    const { sabor } = req.body; // Extraímos os novos dados
    try {
        const updatesucos = await sucos.findByIdAndUpdate(req.params.id, { sabor }, { new: true }); // Atualizamos o suco pelo ID
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar suco', error }); // Retornamos erro, se houver
    }
});

// ======= EXCLUSÃO (DELETE) ======= //
router.delete('/:id', async (req, res) => {
    try {
        await sucos.findByIdAndDelete(req.params.id); // Deletamos o suco pelo ID
        res.status(200).json ({ message: 'Suco deletado com sucesso' }); // Retornamos mensagem de sucesso
    } catch {error} {
        res.status(500).json ({ message: 'Erro ao deletar suco', error }); // Retornamos erro, se houver
    }
});

// Exportamos o roteador para ser usado no server.js
module.exports = router