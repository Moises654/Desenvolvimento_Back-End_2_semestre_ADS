// ========================================
// EXERCÍCIO 1 - Classe Carro
// ========================================
class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.motorLigado = false;
  }

  ligarMotor() {
    if (!this.motorLigado) {
      this.motorLigado = true;
      console.log(`Motor do ${this.marca} ${this.modelo} ligado!`);
    } else {
      console.log('O motor já está ligado.');
    }
  }

  desligarMotor() {
    if (this.motorLigado) {
      this.motorLigado = false;
      console.log(`Motor do ${this.marca} ${this.modelo} desligado!`);
    } else {
      console.log('O motor já está desligado.');
    }
  }

  statusMotor() {
    if (this.motorLigado) {
      console.log(`Status: Motor está LIGADO`);
    } else {
      console.log(`Status: Motor está DESLIGADO`);
    }
  }
}

// Teste Exercício 1
console.log('\n=== EXERCÍCIO 1 - TESTE ===');
const meuCarro = new Carro('Toyota', 'Corolla', 2023);
meuCarro.statusMotor();
meuCarro.ligarMotor();
meuCarro.statusMotor();
meuCarro.desligarMotor();
meuCarro.statusMotor();