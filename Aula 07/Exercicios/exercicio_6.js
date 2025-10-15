// ========================================
// EXERCÍCIO 6 - Classe Produtos
// ========================================
class Produto {
  constructor(nomeProduto, quantidade, preco, tipoComunicacao, consumoEnergia) {
    this.nomeProduto = nomeProduto;
    this.quantidade = quantidade;
    this.preco = preco;
    this.tipoComunicacao = tipoComunicacao;
    this.consumoEnergia = consumoEnergia;
    this.ligado = false;
  }

  ligar() {
    if (!this.ligado) {
      this.ligado = true;
      console.log(`${this.nomeProduto} ligado(a)!`);
    } else {
      console.log(`${this.nomeProduto} já está ligado(a).`);
    }
  }

  desligar() {
    if (this.ligado) {
      this.ligado = false;
      console.log(`${this.nomeProduto} desligado(a)!`);
    } else {
      console.log(`${this.nomeProduto} já está desligado(a).`);
    }
  }
}

class Fritadeira extends Produto {
  constructor(nomeProduto, quantidade, preco, tipoComunicacao, consumoEnergia) {
    super(nomeProduto, quantidade, preco, tipoComunicacao, consumoEnergia);
    this.temperatura = 180;
  }

  ajusteTemperatura(setpoint) {
    if (this.ligado) {
      this.temperatura = setpoint;
      console.log(`Temperatura ajustada para ${setpoint}°C`);
    } else {
      console.log('Ligue a fritadeira primeiro!');
    }
  }
}

class Televisao extends Produto {
  constructor(nomeProduto, quantidade, preco, tipoComunicacao, consumoEnergia) {
    super(nomeProduto, quantidade, preco, tipoComunicacao, consumoEnergia);
    this.canal = 1;
  }
}

class ArCondicionado extends Produto {
  constructor(nomeProduto, quantidade, preco, tipoComunicacao, consumoEnergia) {
    super(nomeProduto, quantidade, preco, tipoComunicacao, consumoEnergia);
    this.temperatura = 24;
  }

  ajusteTemperatura(setpoint) {
    if (this.ligado) {
      if (setpoint >= 16 && setpoint <= 30) {
        this.temperatura = setpoint;
        console.log(`Temperatura ajustada para ${setpoint}°C`);
      } else {
        console.log('Temperatura deve estar entre 16°C e 30°C');
      }
    } else {
      console.log('Ligue o ar-condicionado primeiro!');
    }
  }
}

// Teste Exercício 6
console.log('\n=== EXERCÍCIO 6 - TESTE ===');
const airFryer = new Fritadeira('Air Fryer Philips', 5, 399.90, 'Bluetooth', 1200);
airFryer.ligar();
airFryer.ajusteTemperatura(200);
airFryer.desligar();