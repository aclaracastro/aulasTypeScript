//Fornecedor, descrição, valor, data de vencimento, forma de pagamento.

export enum FormaPagamento{
    PIX = "Pix",
    CARTAO = "Cartão de crédito",
    DINHEIRO = "Dinheiro",
    BOLETO = "Boleto bancário"
}


export class APagar {
    constructor(
        public descricao: string,
        public valor: number,
        public dataVencimento: string,
        public formaPagamento: FormaPagamento,
        public pago: boolean = false //inicializa que nao pagou
    ) {}

    pagamentoDetalhado(): string {
        return `Pagamento de ${this.descricao} no valor de R$${this.valor} com vencimento no dia ${this.dataVencimento} na forma de pagamento ${this.formaPagamento}`
    }

    pagar(): string {
        this.pago = true
        return `${this.descricao} no valor de R$${this.valor} foi paga!`

    }

    verificarVencimento(): boolean {
        const hoje = new Date();
        const vencimento = new Date(this.dataVencimento);
        return vencimento < hoje && !this.pago
    }

}