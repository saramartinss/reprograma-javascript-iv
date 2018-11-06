// const rect = {
//     altura: 10,
//     largura: 30,
//     cor: "red",
//     unidade: "px",
//     area: function () {
//         return this.altura * this.largura + this.unidade
//     }
// }
// console.log(rect.area());

// Função construtora
// function Rect (altura, largura, cor, unidade) {
//     this.altura = altura;
//     this.largura = largura;
//     this.cor = cor;
//     this.unidade = unidade;
//     this.area = function () {
//         return this.altura * this.largura + this.unidade + "²";
//     }
// }
// const retangulo = new Rect(10, 10, "blue", "px");
// console.log(retangulo);
// console.log(`Área: ${retangulo.area()}`);


// Classe
class Rect {
    constructor(nome, altura, largura, cor, unidade) {
        this.nome = nome;
        this.altura = altura;
        this.largura = largura;
        this.cor = cor;
        this.unidade = unidade;
    }
    area() {
        return this.altura * this.largura + this.unidade + "²";
    }
}
const retangulo = new Rect("retangulo", 5, 3, "red", "px")
console.log(retangulo);
console.log(`Área: ${retangulo.area()}`);

class Quadrado extends Rect {
    constructor(nome, lado, cor, unidade) {
        super(nome, lado, lado, cor, unidade);
    }
}
const quadradinho = new Quadrado("quadradinho", 5, "blue", "px");
console.log(quadradinho);
const outroRect = new Rect("outro retangulo", 6, 9, "yellow", "px");
console.log(outroRect);

// Criando novo método
Rect.prototype.center = function() {
    return [this.largura/2, this.altura/2];
}

class quadradinhoLado2 extends Quadrado {
    constructor(nome, cor, unidade, value) {
        super(nome, 2, cor, unidade);
        this.prop = value;
    }
}