"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manutencao = void 0;
const funcionario_1 = require("../RH/funcionario");
class Manutencao extends funcionario_1.Funcionario {
    constructor(nome, idade, cpf, salarioBruto, senha) {
        super(nome, idade, cpf, "Manutenção", salarioBruto, senha);
    }
    realizarManutencao(equipamento, data) {
        return `Manutenção de ${equipamento} agendada para dia ${data} com o funcionário ${this.nome}`;
    }
    verificarStatusEquipamento(equipamento, status) {
        if (status) {
            return `${equipamento} está funcionando corretamente.`;
        }
        else {
            return `${equipamento} precisa de manutenção urgente.`;
        }
    }
}
exports.Manutencao = Manutencao;
