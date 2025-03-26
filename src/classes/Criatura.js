class Criatura {
  constructor(genoma = new Genoma()) {
    this.saude = random(1e1, 1e3);
    this.genoma = genoma;
    this.opacidade = 255; // OPACIDADE MAXIMA
    this.raio = 10;
    this.taxaOpacidade = 0.002;
    this.taxaDeDesgaste = random(0.01, 0.2);

    this.velocidade = createVector(
      random(-0.2, 0.2),
      random(-0.2, 0.2),
      random(-0.2, 0.2)
    );
    this.posicao = createVector(
      random(-MEIO_WIDTH, MEIO_WIDTH),
      random(-MEIO_HEIGHT, MEIO_HEIGHT),
      random(-1000, 1000)
    );
  }

  corSaude() {
    let faixaSaude = Math.floor(this.saude / 20);

    switch (faixaSaude) {
      case 0:
        return color(255, 0, 0); // Vermelho (0-20%)
      case 1:
        return color(255, 255, 0); // Amarelo (20-40%)
      case 2:
        return color(255, 165, 0); // Laranja (40-60%)
      case 3:
        return color(0, 0, 255); // Azul (60-80%)
      default:
        return color(0, 255, 0); // Verde (80-100%)
    }
  }

  mover() {
    if (!this.seEstaVivo()) return;

    this.posicao.add(this.velocidade);
    this.velocidade.limit(1);
    this.velocidade.add(
      createVector(random(-0.2, 0.2), random(-0.2, 0.2), random(-0.2, 0.2))
    );

    //Por exemplo, em vez de random(-1, 1) em todos os eixos, você poderia usar uma direção de movimento com base em algum fator, como a proximidade de alimento ou a interação com outras criaturas.
  }

  atualizar() {
    if (this.seEstaVivo()) {
      this.mover();
      this.desgastes();
    }
  }

  desgastes() {
    this.saude -= this.taxaDeDesgaste;
  }

  seEstaVivo() {
    return this.saude > 0;
  }
}
