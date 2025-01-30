export enum StatusQuarto{
    Ocupado = "OCUPADO",
    Livre = "LIVRE",
    Manutenção = "MANUTENÇÃO"
}

export enum TipoQuarto{
    Suite = "Suíte",
    Duplo = "Duplo",
    Varanda = "Com Varanda"
}

export class Quarto {
    constructor(
        public numero: number, 
        public tipo: TipoQuarto, 
        public status: StatusQuarto, 
        public comodidade: string[]
    ) {}

    alterarStatus(status: StatusQuarto): void {
        this.status = status;
    }

    adicionarComodidade(comodidade: string): void{
        this.comodidade.push(comodidade);
        console.log(`Comodidade ${comodidade} adicionada ao quarto ${this.numero}`);
    }

}
