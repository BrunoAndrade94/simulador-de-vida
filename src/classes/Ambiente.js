class Ambiente {
  constructor() {
    this.criaturas = [];
    this.evolucao = new Evolucao(this);
  }

  adicionarCriatura(criatura) {
    if (criatura instanceof Criatura) this.criaturas.push(criatura);
    else console.error("CRIATURA NAO VALIDA");
  }

  atualizar() {
    for (let criatura of this.criaturas) criatura.atualizar();

    this.criaturas = this.criaturas.filter((criatura) => criatura.seEstaVivo());

    this.evolucao.evoluir();
  }

  exibir() {
    for (let criatura of this.criaturas) {
      push();
      translate(criatura.posicao.x, this.posicao.y, this.posicao.z);
      sphere(criatura.raio * 10);
      pop();
    }
  }
}
