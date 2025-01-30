"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Limpeza = void 0;
const funcionario_1 = require("../RH/funcionario");
class Limpeza extends funcionario_1.Funcionario {
    constructor(nome, idade, cpf, salarioBruto, senha) {
        super(nome, idade, cpf, "Limpeza", salarioBruto, senha);
    }
    verificarProduto(produto, equipamento) {
        if (produto.length == 0 || equipamento.length == 0) {
            return `${produto} ou ${equipamento} faltando!`;
        }
        return "Nenhum produto ou equipamento faltando!";
    }
    verificarLimpeza(area, qualidade) {
        if (qualidade >= 8) {
            return `${area} está limpa e dentro dos padrões de qualidade.`;
        }
        else {
            return `${area} precisa de mais atenção para atender aos padrões de limpeza.`;
        }
    }
}
exports.Limpeza = Limpeza;
