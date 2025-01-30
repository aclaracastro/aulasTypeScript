"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contrato = void 0;
class Contrato {
    constructor(dataInicio, dataTermino, tipo) {
        this.dataInicio = dataInicio;
        this.dataTermino = dataTermino;
        this.tipo = tipo;
    }
    criarContrato(funcionario) {
        return `Contrato criado para ${funcionario.nome} (${funcionario.cargo}) com início em ${this.dataInicio} do tipo ${this.tipo}`;
    }
    rescindirContrato(funcionario) {
        return `Contrato de ${funcionario.nome} finalizado em ${this.dataTermino}`;
    }
}
exports.Contrato = Contrato;
