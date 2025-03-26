class Genoma {
  constructor() {
    this.dna = [];
    this.numeroGenomas = 10;

    for (let i = 0; i < this.numeroGenomas; i++) {
      this.dna.push(Math.random());
    }
  }

  cruzamento(parceiro) {
    let filho = new Genoma();
    for (let i = 0; i < this.dna.length; i++) {
      filho.dna[i] = Math.random() > 0.5 ? this.dna[i] : parceiro.dna[i];
    }
    return filho;
  }

  mutacao() {
    const taxaDeMutacao = 0.01;
    for (let i = 0; i < this.dna.length; i++) {
      if (Math.random() < taxaDeMutacao) {
        this.dna[i] = Math.random();
      }
    }
  }
}
