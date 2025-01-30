"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AReceber = void 0;
class AReceber {
    constructor(hospede, valor, formaPagamento) {
        this.hospede = hospede;
        this.valor = valor;
        this.formaPagamento = formaPagamento;
    }
    dadosRecebidos() {
        return `Hóspede: ${this.hospede}, Valor: ${this.valor}, Forma de pagamento ${this.formaPagamento}`;
    }
    tipoPagamento() {
        return `O pagamento do hóspede ${this.hospede} foi realizado via ${this.formaPagamento}`;
    }
}
exports.AReceber = AReceber;
