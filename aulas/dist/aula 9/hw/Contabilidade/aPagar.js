"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APagar = exports.FormaPagamento = void 0;
var FormaPagamento;
(function (FormaPagamento) {
    FormaPagamento["PIX"] = "Pix";
    FormaPagamento["CARTAO"] = "Cart\u00E3o de cr\u00E9dito";
    FormaPagamento["DINHEIRO"] = "Dinheiro";
    FormaPagamento["BOLETO"] = "Boleto banc\u00E1rio";
})(FormaPagamento || (exports.FormaPagamento = FormaPagamento = {}));
class APagar {
    constructor(descricao, valor, dataVencimento, formaPagamento, pago = false //inicializa que nao pagou
    ) {
        this.descricao = descricao;
        this.valor = valor;
        this.dataVencimento = dataVencimento;
        this.formaPagamento = formaPagamento;
        this.pago = pago;
    }
    pagamentoDetalhado() {
        return `Pagamento de ${this.descricao} no valor de R$${this.valor} com vencimento no dia ${this.dataVencimento} na forma de pagamento ${this.formaPagamento}`;
    }
    pagar() {
        this.pago = true;
        return `${this.descricao} no valor de R$${this.valor} foi paga!`;
    }
    verificarVencimento() {
        const hoje = new Date();
        const vencimento = new Date(this.dataVencimento);
        return vencimento < hoje && !this.pago;
    }
}
exports.APagar = APagar;
