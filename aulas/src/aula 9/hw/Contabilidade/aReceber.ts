import { FormaPagamento } from "./aPagar";

export class AReceber {
    constructor(
        public hospede: string,
        public valor: number,
        public formaPagamento: FormaPagamento
    ) {}
    
    dadosRecebidos(): string {
        return `Hóspede: ${this.hospede}, Valor: ${this.valor}, Forma de pagamento ${this.formaPagamento}`
    }

    tipoPagamento(): string {
        return `O pagamento do hóspede ${this.hospede} foi realizado via ${this.formaPagamento}`
    }

}