import livros from '../models/livros';

const express = require ('express'); // importamos o Express
const livro = require ('../models/livros') // importamos o modelo livros
const router = express.Router (); // Criamos o roteador

// ======= CRIAÇÃO (POST) ======= //
router.post ('/', async (req, res) => {
    const { titulo, autor, ano } = req.body; // Extrímos os dados da requisição
    try {
        const newlivros = new livros ({ titulo, autor, ano }); // Criamos e salvamos o livro
        await newlivros.save();
        res.status(201).json(newLivros); // Retornamos o livro criado
    }  catch (error) {
        res.status(500).json({ message: 'Erro ao criar livro'. error });
    }
});

// ======= LEITURA (GET) ======= //
router.get ('/', async (req, res) => {
    try {
        const livro = await livros.find(); // Buscamos todos os livros
        res.status(200).json(livro);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar livros', error });
    }
});

// ======= ATUALIZAÇÃO (PUT) ======= //
router.put('/:id', async (req, res) => {
    const { titulo, autor, ano } = req.body // Extraímos os novos dados
    try {
        const updatelivros = await livros.findByIdandUpdate(req.params.id, {titulo, autor, ano}, {new: true}); // Atualizamos o livro pelo ID
        res.status(200).json(updatelivros); // Retornamos o livro atualizado
    } catch (error) {
        res.status(500).json({message: 'Erro ao atualizar livro', error}); // Retornamos erro, se houver
    }
});

// ======= EXCLUSÃO (DELETE) ======= //
router.delete('/:id', async (req, res) => {
    try {
        await livros.findByIdAndDelete(req.params.id); // Deletamos o livro pelo ID
        res.status(200).json({ message: 'Livro deletado com sucesso' }); // Retornamos mensagem de sucesso
    } catch {error} {
        res.status(500).json({ message: 'Erro ao deletar livro', error });
    }
});

// Exportamos o roteador para ser usado no server.js
module.exports = router;