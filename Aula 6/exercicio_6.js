// ============================================
// EXERCÍCIO 6 - Idade de Publicação
// ============================================
console.log("\n=== EXERCÍCIO 6 ===");
let anoAtual = new Date().getFullYear();

let livro2 = {
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J.K. Rowling",
    anoPublicacao: 1997,
    genero: "Fantasia"
};

livro2.idadePublicacao = anoAtual - livro2.anoPublicacao;

let mostrarDetalhes = `
Detalhes do Livro:
Título: ${livro2.titulo}
Autor: ${livro2.autor}
Ano de Publicação: ${livro2.anoPublicacao}
Gênero: ${livro2.genero}
Idade de Publicação: ${livro2.idadePublicacao} anos
`;

console.log(mostrarDetalhes);