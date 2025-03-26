function mainDraw() {
  background(COR_DE_FUNDO);
  rotateY(frameCount * 0.01);

  AMBIENTE.atualizar();
  AMBIENTE.exibir();

  PAINEL.exibir();

  // if (frameCount % 300 === 0) EVOLUCAO.evoluir();
}
