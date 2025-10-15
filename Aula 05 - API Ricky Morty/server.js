const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;
const BASE_URL = "https://rickandmortyapi.com/api";

app.get("/", (req, res) => {
  res.send("Bem-vindo à minha API Ricky Morty 🚀");
});

// Rota para listar personagens
app.get("/personagens", async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/character`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar personagens" });
  }
});

// Rota para buscar personagem por ID
app.get("/personagem/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${BASE_URL}/character/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar personagem" });
  }
});

// Rota para múltiplos personagens
app.get("/multiplospersonagens", async (req, res) => {
  try {
    // Exemplo fixo de IDs
    const ids = [1, 2, 3];
    const response = await axios.get(`${BASE_URL}/character/[${ids}]`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar múltiplos personagens" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
