"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hospede = void 0;
const usuario_1 = require("../Seguranca/usuario");
class Hospede extends usuario_1.Usuario {
    constructor(id, nome, idade, cpf, senha, quarto, dataChegada, dataSaida) {
        super(id, nome, idade, cpf, senha);
        this.dataChegada = dataChegada;
        this.dataSaida = dataSaida;
        this.quarto = quarto;
    }
    exibirInformacoes() {
        return `Hóspede: ${this.nome}, CPF: ${this.cpf} está no Quarto: ${this.quarto} desde ${this.dataChegada} com previsão de saída: ${this.dataSaida}`;
    }
    mudarQuarto(novoQuarto) {
        this.quarto = novoQuarto;
        return `O hóspede ${this.nome} foi realocado para o quarto ${this.quarto}.`;
    }
}
exports.Hospede = Hospede;
