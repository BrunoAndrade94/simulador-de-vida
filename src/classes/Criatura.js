class Criatura {
  constructor(genoma = new Genoma()) {
    this.genoma = genoma;
    this.saude = 100;
    this.raio = random(0.1, 2.9);
    this.velocidade = "AINDA NAO IMPLEMENTADO";
    this.posicao = createVector(
      random(WIDTH),
      random(HEIGHT),
      random(-1000, 1000)
    );
  }

  mover() {
    if (!this.seEstaVivo()) return;

    this.posicao.x += random(-1, 1);
    this.posicao.y += random(-1, 1);
    this.posicao.z += random(-1, 1);

    //Por exemplo, em vez de random(-1, 1) em todos os eixos, você poderia usar uma direção de movimento com base em algum fator, como a proximidade de alimento ou a interação com outras criaturas.
  }

  atualizar() {
    this.mover();
    this.desgastes();
  }

  desgastes() {
    this.saude -= 0.1;
  }

  seEstaVivo() {
    return this.saude > 0;
  }
}
