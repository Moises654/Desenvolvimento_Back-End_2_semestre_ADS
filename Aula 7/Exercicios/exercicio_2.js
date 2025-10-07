// ========================================
// EXERCÍCIO 2 - Classe Pessoa
// ========================================
class Pessoa {
  constructor(nome, idade, profissao, salario) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
    this.salario = salario;
  }

  exibeTrabalho(nomeEmpresa, tempoTrabalho) {
    console.log(`\n${this.nome} trabalha na empresa ${nomeEmpresa} há ${tempoTrabalho} anos.`);
    console.log(`Profissão: ${this.profissao}`);
    console.log(`Salário: R$ ${this.salario.toFixed(2)}`);
  }
}

// Teste Exercício 2
console.log('\n=== EXERCÍCIO 2 - TESTE ===');
const pessoa1 = new Pessoa('Moisés', 25, 'Designer de volante de locomotiva', 50);
pessoa1.exibeTrabalho('Tech Solutions', 3);