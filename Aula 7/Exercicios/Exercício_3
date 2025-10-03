// ========================================
// EXERCÍCIO 3 - Herança com Automóveis
// ========================================
class Automovel {
  constructor(cor, modelo, tipoCombustivel, quantidadeRodas) {
    this.cor = cor;
    this.modelo = modelo;
    this.tipoCombustivel = tipoCombustivel;
    this.quantidadeRodas = quantidadeRodas;
    this.ligado = false;
  }

  ligarCarro() {
    if (!this.ligado) {
      this.ligado = true;
      console.log(`${this.modelo} ligado!`);
    } else {
      console.log(`${this.modelo} já está ligado.`);
    }
  }

  desligarCarro() {
    if (this.ligado) {
      this.ligado = false;
      console.log(`${this.modelo} desligado!`);
    } else {
      console.log(`${this.modelo} já está desligado.`);
    }
  }
}

class CarroHeranca extends Automovel {
  constructor(cor, modelo, tipoCombustivel) {
    super(cor, modelo, tipoCombustivel, 4);
    this.vidroAberto = false;
  }

  abrirVidro() {
    if (!this.vidroAberto) {
      this.vidroAberto = true;
      console.log('Vidro aberto!');
    } else {
      console.log('Vidro já está aberto.');
    }
  }

  descerVidro() {
    if (this.vidroAberto) {
      this.vidroAberto = false;
      console.log('Vidro fechado!');
    } else {
      console.log('Vidro já está fechado.');
    }
  }
}

class Moto extends Automovel {
  constructor(cor, modelo, tipoCombustivel) {
    super(cor, modelo, tipoCombustivel, 2);
    this.capaceteObrigatorio = true;
  }
}

class Caminhao extends Automovel {
  constructor(cor, modelo, tipoCombustivel) {
    super(cor, modelo, tipoCombustivel, 6);
    this.capacidadeCarga = 0;
  }

  definirCarga(toneladas) {
    this.capacidadeCarga = toneladas;
    console.log(`Carga definida: ${toneladas} toneladas`);
  }
}

// Teste Exercício 3
console.log('\n=== EXERCÍCIO 3 - TESTE ===');
const carroTeste = new CarroHeranca('Prata', 'Honda Civic', 'Gasolina');
carroTeste.ligarCarro();
carroTeste.abrirVidro();
carroTeste.desligarCarro();