class Evolucao {
  constructor(ambiente) {
    this.ambiente = ambiente;
    this.taxaDeSelecao = TAXA_DE_SELECAO;
  }

  selecionarCriaturas() {
    if (this.ambiente.criaturas.length === 0) return;

    this.ambiente.criaturas.sort((a, b) => b.saude - a.saude);

    const limite = Math.floor(
      this.ambiente.criaturas.length * this.taxaDeSelecao
    );

    return this.ambiente.criaturas.slice(0, limite);
  }

  criarGeracao(criaturas) {
    if (this.ambiente.criaturas.length === 0 || criaturas.length === 0) return;

    const novaGeracao = [];

    while (novaGeracao.length < this.ambiente.criaturas.length) {
      const pai = random(criaturas);
      const mae = random(criaturas);
      const filho = pai.genoma.cruzamento(mae.genoma);

      filho.mutacao();

      const novaCriatura = new Criatura(filho);
      novaGeracao.push(novaCriatura);
    }

    this.ambiente.criaturas = novaGeracao;
  }

  evoluir() {
    const criaturas = this.selecionarCriaturas();
    this.criarGeracao(criaturas);
  }
}
