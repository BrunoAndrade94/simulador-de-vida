class Comida {
  constructor(valor) {
    this.valor = valor;
    this.taxaDeSurgimento = 0.01;
    this.raio = RAIO_COMIDA;

    this.posicao = createVector(
      random(-MEIO_WIDTH, MEIO_WIDTH),
      random(-MEIO_HEIGHT, MEIO_HEIGHT),
      random(-1000, 1000)
    );
  }

  exibir() {
    push();
    translate(this.posicao.x, this.posicao.y, this.posicao.z);
    fill(255);
    sphere(this.raio);
    pop();
  }
}
