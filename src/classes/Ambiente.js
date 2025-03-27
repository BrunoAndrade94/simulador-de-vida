class Ambiente {
  constructor() {
    this.criaturas = [];
    this.comidas = [];
    this.taxaSurgimentoComida = TAXA_SURGIMENTO_COMIDA;
    this.valorComida = VALOR_DA_COMIDA;
    // this.evolucao = new Evolucao(this);
  }

  adicionarCriatura(criatura) {
    this.criaturas.push(criatura);
  }

  adicionarComida() {
    if (TOTAL_COMIDAS >= MAXIMO_COMIDA) return;

    if (random(1) < this.taxaSurgimentoComida) {
      let comida = new Comida(this.valorComida);
      this.comidas.push(comida);
    }
  }

  atualizar() {
    for (let criatura of this.criaturas) {
      criatura.atualizar(this.criaturas);
    }

    this.seAchouComida();

    this.criaturas = this.criaturas.filter((criatura) => criatura.seEstaVivo());

    this.adicionarComida();
    // this.evolucao.evoluir();
  }

  // seAchouComida() {
  //   for (let criatura of this.criaturas) {
  //     for (let i = 0; i < this.comidas.length; i++) {
  //       let comida = this.comidas[i];
  //       let distancia = dist(
  //         criatura.posicao.x,
  //         criatura.posicao.y,
  //         criatura.posicao.z,
  //         comida.posicao.x,
  //         comida.posicao.y,
  //         comida.posicao.z
  //       );

  //       // Verifica se a criatura tocou a comida
  //       if (distancia < criatura.raio + comida.tamanho) {
  //         criatura.saude += comida.valor; // A criatura absorve o valor da comida
  //         this.comidas.splice(i, 1); // Remove a comida do ambiente
  //         break; // Para não tentar acessar o próximo índice depois de remover a comida
  //       }
  //     }
  //   }
  //   TOTAL_COMIDAS = this.comidas.length;
  // }

  seAchouComida() {
    // Percorre todas as criaturas
    for (let criatura of this.criaturas) {
      // Percorre o array de comidas de trás para frente para evitar problemas ao remover elementos
      for (let i = this.comidas.length - 1; i >= 0; i--) {
        let comida = this.comidas[i];
        // Calcula a distância entre a criatura e a comida
        let d = p5.Vector.dist(criatura.posicao, comida.posicao);
        // Se a distância for menor que a soma dos raios (ou um limite definido), considera que houve contato
        if (d < criatura.raio + comida.raio) {
          // Aumenta a saúde da criatura com o valor da comida
          criatura.saude += comida.valor;
          // Remove a comida do ambiente
          this.comidas.splice(i, 1);
        }
      }
    }
    TOTAL_COMIDAS = this.comidas.length;
  }

  exibir() {
    for (let criatura of this.criaturas) {
      push();
      noStroke();
      fill(criatura.corSaude());
      translate(criatura.posicao.x, criatura.posicao.y, criatura.posicao.z);
      sphere(criatura.raio);
      pop();
    }

    for (let comida of this.comidas) {
      comida.exibir();
    }
  }
}
