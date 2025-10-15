// Exemplo 9 - Armazenando informações digitadas pelo usuário

let readline = require('readline'); // biblioteca que permite armazenar informações digitadas
// Cria uma interface de leitura
const rl = readline.createInterface({
    input: process.stdin, // process.stdin gerencia processo de entrada donode
    output: process.stdout // process.stdout gerencia processo de saída do node
});

// Pergunta ao usuário
rl.question('Digite algo: ', (answer) => {
    // Resposta do usuário
    console.log(`Você digitou ${answer}`);
    rl.close(); // fecha a caixa de pergunta
});

console.log(readline);