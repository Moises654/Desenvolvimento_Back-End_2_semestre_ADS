// ===========================
// ROTA GET /alert
// ===========================
app.get ('/alert', async (req, res) => {
    // Captura os parâmetros da URL: ?city=Lisboa&country=PT
    const {city, country} = req.query;

    // Validação: se cidade ou país não forem informados, retorna erro 400
    if (!city || !country) {
        return res.status(400).json({error: 'Informe cidade e país.'});
    }

    try {
        // Requisição para obter dados do clima
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric&lang=pt_br`
        );

        // Extrai temperatura com tratamento de caso nulo
        const temp = response.data.main?.temp ?? 0;

        // Cria alerta baseado na temperatura
        // >30º -> "Quente", <10ºC -> "Frio", caso contrário -> "Agradável"
        let alert = temp > 30 ? 'Quente' : temp < 10 ? 'Frio' : 'Agradável';

        // Retorna cidade, temperatura e alerta
        res.json ({city, temperature: temp, alert});

    } catch (err) {
        // Retorna erro caso falha a requisição
        res.status(500).json({error: 'Erro ao obter dados do clima.'});
    }
});