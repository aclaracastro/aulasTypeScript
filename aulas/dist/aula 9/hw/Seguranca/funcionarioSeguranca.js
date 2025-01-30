"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioSeguranca = void 0;
const funcionario_1 = require("../RH/funcionario");
class FuncionarioSeguranca extends funcionario_1.Funcionario {
    constructor(nome, idade, cpf, treinamento) {
        super(nome, idade, cpf, "Segurança"); //chama o construtor da classe pai (funcionario), ou seja, ta acessando membros da classe pai em uma classe derivada
        this.treinamento = treinamento;
    }
    registrarOcorrencia(ocorrencia) {
        return `Ocorrência registrada ${ocorrencia}`;
    }
    avaliarRisco(nivel) {
        return nivel > 5 ? "Alto risco!" : "Risco moderado";
    } // se > 5 retornar alto risco, caso contrário risco moderado
}
exports.FuncionarioSeguranca = FuncionarioSeguranca;
