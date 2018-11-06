class Ponto {
    constructor(nome, posX, posY) {
        this.nome = nome
        this.x = posX
        this.y = posY
    }

    mover_horizontalmente(distancia) {
        this.x += distancia
        return this.x
    }

    mover_verticalmente(distancia) {
        this.y += distancia
        return this.y
    }

    mover(distanciaX, distanciaY) {
        this.x += distanciaX
        this.y += distanciaY
        return [ this.x, this.y ]
    }

    distancia_entre_dois_pontos(outro_ponto) {
        const x1 = this.x
        const y1 = this.y
        const x2 = outro_ponto.x
        const y2 = outro_ponto.y
        return Math.sqrt( ( Math.abs( x1 - x2 ) ) ** 2 + ( Math.abs( y1 - y2 ) ) ** 2 )
    }
}

class Div extends Ponto {
    constructor(nome, cor, posX, posY, altura, largura) {
        super(nome, posX, posY)
        this.cor = cor
        this.altura = altura
        this.largura = largura
    }

    desenhar() {
        const body = document.querySelector("body")
        this.node = document.createElement("div")
        this.node.style.width = this.largura + "px"
        this.node.style.height = this.altura + "px"
        this.node.style.backgroundColor = this.cor
        this.node.style.left = this.x + "px"
        this.node.style.top = this.y + "px"
        body.appendChild(this.node)
    }

    destruir() {
        this.node.remove();
    }
}

const circle = new Div("sara", "pink", 630, 250, 20, 20);
circle.desenhar();

document.addEventListener("keydown", function(event){
    if (event.key === "ArrowLeft") {
        circle.mover(-10, 0);
        circle.destruir();
        circle.desenhar();
    }
    if (event.key === "ArrowRight") {
        circle.mover(10, 0);
        circle.destruir();
        circle.desenhar();
    }
    if (event.key === "ArrowUp") {
        circle.mover(0, -10);
        circle.destruir();
        circle.desenhar();
    }
    if (event.key === "ArrowDown") {
        circle.mover(0, 10);
        circle.destruir();
        circle.desenhar();
    }  
})