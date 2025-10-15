// ========================================
// EXERCÍCIO 5 - Classe Máquinas
// ========================================
class Maquina {
  constructor(nomeMaquina, quantidadeEixos, rotacoesPorMinuto, consumoEnergia) {
    this.nomeMaquina = nomeMaquina;
    this.quantidadeEixos = quantidadeEixos;
    this.rotacoesPorMinuto = rotacoesPorMinuto;
    this.consumoEnergia = consumoEnergia;
    this.ligada = false;
  }

  ligar() {
    if (!this.ligada) {
      this.ligada = true;
      console.log(`${this.nomeMaquina} ligada!`);
    } else {
      console.log(`${this.nomeMaquina} já está ligada.`);
    }
  }

  desligar() {
    if (this.ligada) {
      this.ligada = false;
      console.log(`${this.nomeMaquina} desligada!`);
    } else {
      console.log(`${this.nomeMaquina} já está desligada.`);
    }
  }
}

class Furadeira extends Maquina {
  constructor(nomeMaquina, rotacoesPorMinuto, consumoEnergia) {
    super(nomeMaquina, 1, rotacoesPorMinuto, consumoEnergia);
  }

  ajustarVelocidade(novaRotacao) {
    if (this.ligada) {
      this.rotacoesPorMinuto = novaRotacao;
      console.log(`Velocidade ajustada para ${novaRotacao} RPM`);
    } else {
      console.log('Ligue a máquina primeiro!');
    }
  }
}

// Teste Exercício 5
console.log('\n=== EXERCÍCIO 5 - TESTE ===');
const furadeira = new Furadeira('Furadeira Bosch', 2000, 500);
furadeira.ligar();
furadeira.ajustarVelocidade(2500);
furadeira.desligar();