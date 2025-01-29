// Número do quarto, tipo (simples, duplo, suíte), status (ocupado, livre, manutenção), comodidades.

export class Quarto {
    constructor(
        numero: number, 
        tipo: "Suíte" | "Duplo" | "Simples", 
        status: "OCUPADO" | "LIVRE" | "MANUTENÇÃO", 
        comodidade: string
    ) {}
}