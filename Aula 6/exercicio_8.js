// ============================================
// EXERCÍCIO 8 - Avaliação do Livro
// ============================================
console.log("\n=== EXERCÍCIO 8 ===");
let livro4 = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    anoPublicacao: 1899,
    genero: "Romance",
    idadePublicacao: new Date().getFullYear() - 1899,
    avaliacao: null
};

console.log("Livro criado:", livro4);
console.log("\nTentando adicionar avaliação...");

if (livro4.avaliacao === null) {
    livro4.avaliacao = 5;
    console.log("Avaliação adicionada com sucesso!");
    console.log(`Avaliação do livro: ${livro4.avaliacao} estrelas`);
} else {
    console.log("Este livro já possui uma avaliação.");
}

console.log("\nTentando adicionar avaliação novamente...");
if (livro4.avaliacao === null) {
    livro4.avaliacao = 4;
    console.log("Avaliação adicionada com sucesso!");
} else {
    console.log("Este livro já possui uma avaliação.");
}