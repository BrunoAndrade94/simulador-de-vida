class Painel {
  constructor(ambiente) {
    this.ambiente = ambiente;
    this.margem = 20;
  }

  calcMediaSaude() {
    const criaturas = this.ambiente.criaturas.filter((criatura) =>
      criatura.seEstaVivo()
    );

    if (criaturas.length === 0) return 0;

    const somaSaude = criaturas.reduce(
      (soma, criatura) => soma + criatura.saude,
      0
    );

    return (somaSaude / criaturas.length).toFixed();
  }

  calcTotalCriaturas() {
    return this.ambiente.criaturas.length;
  }

  calcMaximaSaude() {
    const maxima = Math.max(
      ...this.ambiente.criaturas.map((criatura) => criatura.saude)
    ).toFixed();

    return maxima == -Infinity ? 0 : maxima;
  }

  calcCriaturasMortas() {
    let totalCriaturas = this.calcTotalCriaturas();
    if (totalCriaturas == 0) return 0;
    return CRIATURAS_INICIAIS - totalCriaturas;
  }

  exibir() {
    const mediaSaude = this.calcMediaSaude();
    const totalCriaturas = this.calcTotalCriaturas();
    const maximaSaude = this.calcMaximaSaude();
    const criaturasMortas = this.calcCriaturasMortas();

    push();
    resetMatrix();
    translate(-360, -230, -400);
    textFont(FONTE);
    fill(100, 120, 150, 150);
    noStroke();
    rectMode(CORNER);
    rect(this.margem, this.margem, 140, 220);

    fill(255);
    textSize(14);
    textAlign(LEFT, TOP);
    text("-- Informações --", this.margem + 30, this.margem + 3);

    text(
      `¤ Criaturas Iniciais: ${CRIATURAS_INICIAIS}`,
      this.margem + 4,
      this.margem + 20
    );

    text(
      `¤ Criaturas Vivas: ${totalCriaturas}`,
      this.margem + 4,
      this.margem + 40
    );

    text(
      `¤ Criaturas Mortas: ${criaturasMortas}`,
      this.margem + 4,
      this.margem + 60
    );

    text(
      `¤ Máxima de Saúde: ${maximaSaude}`,
      this.margem + 4,
      this.margem + 80
    );

    text(`¤ Média de Saúde: ${mediaSaude}`, this.margem + 4, this.margem + 100);

    text(
      `¤ Comidas Atuais: ${TOTAL_COMIDAS}`,
      this.margem + 4,
      this.margem + 120
    );

    text(
      `¤ Taxa de Seleção: ${TAXA_DE_SELECAO}`,
      this.margem + 4,
      this.margem + 200
    );

    pop();
  }
}
