// ============================================
// EXERCÍCIO 7 - Acesso com Colchetes
// ============================================
console.log("\n=== EXERCÍCIO 7 ===");
let livro3 = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia",
    idadePublicacao: new Date().getFullYear() - 1954
};

console.log("Detalhes do Livro (usando colchetes):");
console.log(`Título: ${livro3["titulo"]}`);
console.log(`Autor: ${livro3["autor"]}`);
console.log(`Ano de Publicação: ${livro3["anoPublicacao"]}`);
console.log(`Gênero: ${livro3["genero"]}`);
console.log(`Idade de Publicação: ${livro3["idadePublicacao"]} anos`);