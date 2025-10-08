// ============================================
// EXERCÍCIO 10 - Excluindo Propriedade
// ============================================
console.log("\n=== EXERCÍCIO 10 ===");
let livro6 = {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    anoPublicacao: 1943,
    genero: "Fábula",
    idadePublicacao: new Date().getFullYear() - 1943,
    avaliacao: 5
};

console.log("Antes de excluir a avaliação:", livro6);

delete livro6.avaliacao;

console.log("\nDepois de excluir a avaliação:", livro6);
console.log("\nDetalhes formatados:");
console.log(`Título: ${livro6.titulo}`);
console.log(`Autor: ${livro6.autor}`);
console.log(`Ano de Publicação: ${livro6.anoPublicacao}`);
console.log(`Gênero: ${livro6.genero}`);
console.log(`Idade de Publicação: ${livro6.idadePublicacao} anos`);