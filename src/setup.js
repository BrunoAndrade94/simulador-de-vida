function mainSetup() {
  createCanvas(WIDTH, HEIGHT, WEBGL);
  noStroke();
  FONTE = loadFont("assets/AGENCYR.TTF");
  camera(3000, 0, 0, 0, 0, 0);

  novosObjetos();
}

function novosObjetos() {
  AMBIENTE = new Ambiente();
  PAINEL = new Painel(AMBIENTE);

  for (let i = 0; i < CRIATURAS_INICIAIS; i++) {
    AMBIENTE.adicionarCriatura(new Criatura());
  }

  EVOLUCAO = new Evolucao(AMBIENTE);
}
