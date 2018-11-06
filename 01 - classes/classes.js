// function Mulher (nome, signo, cor_do_cabelo, etnia) {
//     this.nome = nome;
//     this.altura = 0.4;
//     this.signo = signo;
//     this.cor_do_cabelo = cor_do_cabelo;
//     this.id_genero = "F";
//     this.etnia = etnia;
//     this.profissao = [];
//     this.pintar_o_cabelo = function (cor) {
//         this.cor_do_cabelo = cor;
//     }
//     this.contratar = function () {
//         this.profissao.push(...arguments);
//     }
//     this.crescer = function () {
//         let nova_altura = this.altura + 0.01;
//         this.altura = parseFloat(nova_altura.toFixed(2));
//     }
// }

class Mulher {
    constructor(nome, signo, cor_do_cabelo, etnia) {
        this.nome = nome;
        this.altura = 0.4;
        this.signo = signo;
        this.cor_do_cabelo = cor_do_cabelo;
        this.id_genero = "F";
        this.etnia = etnia;
        this.profissao = [];
    }
    pintar_o_cabelo(cor) {
        this.cor_do_cabelo = cor;
    }
    contratar() {
        this.profissao.push(...arguments);
    }
    crescer() {
        let nova_altura = this.altura + 0.01;
        this.altura = parseFloat(nova_altura.toFixed(2));
    }
}

const jo = new Mulher("Joseline", "Capricórnio", "Preto", "Negra");
jo.contratar("Desenvolvedora");
jo.crescer();
jo.pintar_o_cabelo("verde");
for (const prop in jo) {
    console.log(prop, jo[prop])
}

const ale = new Mulher("Alessandra", "Leão", "Ruivo", "Negra");
ale.Idade = "20";
ale.contratar("desenvolvedora");
ale.contratar("influenciadora");
console.log(ale);