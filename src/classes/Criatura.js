class Criatura {
  constructor(genoma = new Genoma()) {
    this.saude = CRIATURAS_SAUDE;
    // this.saude = random(1e1, 1e3);
    this.genoma = genoma;
    this.opacidade = 255; // OPACIDADE MAXIMA
    this.raio = 10;
    // this.raio = random(2, 10);
    this.taxaOpacidade = 0.002;
    this.taxaDeDesgaste = random(0.01, 0.2);

    // this.velocidade = createVector(
    //   random(-0.2, 0.9),
    //   random(-0.2, 0.9),
    //   random(-0.2, 0.9)
    // );
    this.velocidade = p5.Vector.random3D();
    this.aceleracao = createVector(0, 0, 0);
    this.posicao = createVector(
      random(-MEIO_WIDTH, MEIO_WIDTH),
      random(-MEIO_HEIGHT, MEIO_HEIGHT),
      random(-1000, 1000)
    );
  }

  aplicarForca(forca) {
    this.aceleracao.add(forca);
  }

  calcularForcaSeparacao(outro) {
    let direcao = p5.Vector.sub(this.posicao, outro.posicao);
    let distancia = direcao.mag();
    if (distancia > 0 && distancia < this.raio + outro.raio) {
      // Inverte a direção e inverte a magnitude proporcional à distância
      direcao.normalize();
      let forca = map(distancia, 0, this.raio + outro.raio, 5, 0);
      direcao.mult(forca);
      return direcao;
    }
    return createVector(0, 0, 0);
  }

  aplicarInteracoes(criaturas) {
    for (let outro of criaturas) {
      if (outro !== this) {
        let forca = this.calcularForcaSeparacao(outro);
        this.aplicarForca(forca);
      }
    }
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

  atualizar(criaturas) {
    if (this.seEstaVivo()) {
      this.aplicarInteracoes(criaturas);
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
