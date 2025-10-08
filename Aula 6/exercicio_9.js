// ============================================
// EXERCÍCIO 9 - Alterando Gênero
// ============================================
console.log("\n=== EXERCÍCIO 9 ===");
let livro5 = {
    titulo: "A Ilha do Tesouro",
    autor: "Robert Louis Stevenson",
    anoPublicacao: 1883,
    genero: "Romance",
    idadePublicacao: new Date().getFullYear() - 1883
};

console.log("Antes da alteração:");
console.log(`Título: ${livro5.titulo}`);
console.log(`Gênero: ${livro5.genero}`);

livro5.genero = "Aventura";

console.log("\nDepois da alteração:");
console.log(`Título: ${livro5.titulo}`);
console.log(`Gênero: ${livro5.genero}`);