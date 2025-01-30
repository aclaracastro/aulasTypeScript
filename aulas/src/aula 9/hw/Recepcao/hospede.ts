import { Usuario } from '../Seguranca/usuario';  

export class Hospede extends Usuario {
    public quarto: number; 

    constructor(
        id: number,
        nome: string,
        idade: number,
        cpf: string,
        senha: string,
        quarto: number,
        public dataChegada: string,
        public dataSaida: string
    ) {
        super(id, nome, idade, cpf, senha);  
        this.quarto = quarto;
    }

    exibirInformacoes(): string {
        return `Hóspede: ${this.nome}, CPF: ${this.cpf} está no Quarto: ${this.quarto} desde ${this.dataChegada} com previsão de saída: ${this.dataSaida}`;
    }

    mudarQuarto(novoQuarto: number): string {
        this.quarto = novoQuarto;
        return `O hóspede ${this.nome} foi realocado para o quarto ${this.quarto}.`;
    }
}