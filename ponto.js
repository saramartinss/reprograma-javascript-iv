class Ponto {
    constructor(nome, posicaoX, posicaoY) {
        this.nome = nome
        this.posicaoX = posicaoX;
        this.posicaoY = posicaoY;
    }
    mover_horizontalmente(valor) {
        this.posicaoX += valor;
    }
    mover_verticalmente(valor) {
        this.posicaoY += valor;
    }
    distancia_entre_dois_pontos(outro_ponto) {
        const x1 = this.posicaoX;
        const y1 = this.posicaoY;

        const x2 = outro_ponto.posicaoX;
        const y2 = outro_ponto.posicaoY;

        return Math.sqrt((Math.abs(x1-x2)) ** 2 + (Math.abs(y1-y2)) ** 2)
    }
}

const a = new Ponto("A", 30, 6);
const b = new Ponto("B", 33, 10);

class divQueAnda extends Ponto {
    constructor(nome, cor, altura, largura) {
        super(nome, 0, 0);
        this.cor = cor;
        this.altura = altura;
        this.largura = largura;
    }
    desenhar () {
        const body = document.querySelector("body");
        const div = document.createElement("div");
        div.style.width = this.largura + "px";
        div.style.height = this.altura + "px";
        div.style.borderRadius = "50%";
        div.style.backgroundColor = this.cor;
        body.appendChild(div);
    }
}

const azul = new divQueAnda("ponto azul", "blue", 50, 50);
console.log(azul);