class Personagem extends Animacao {
  constructor(matriz, imagem, x, variaçaoY, largura, altura, larguraSprite, alturaSprite) {

    super(matriz, imagem, x, variaçaoY, largura, altura, larguraSprite, alturaSprite);
    this.variaçaoY = variaçaoY;
    this.yInicial = height - this.altura - variaçaoY;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.alturaDoPulo = -50;
    this.pulos = 0;

  }

  pula() {
    if (this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++;
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.pulos = 0;
    }

  }

  estaColidindo(inimigo) {
    const precisao = .7;
    // noFill();
    // rect(this.x,
    //   this.y,
    //   this.largura * precisao,
    //   this.altura * precisao);
    // rect(inimigo.x,
    //   inimigo.y,
    //   inimigo.largura * precisao,
    //   inimigo.altura * precisao);
    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao);
    return colisao;

  }

}