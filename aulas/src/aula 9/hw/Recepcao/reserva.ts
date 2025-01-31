import { Hospede } from './hospede';  
import { TipoQuarto } from '../Operacional/quartos';

export class Reserva {

    constructor(
        public numeroHospedes: number,
        public tipoQuarto: TipoQuarto,
        public hospede: Hospede,
        public dataSaida: string    
    ) {}

    detalhesReserva(): string {
        return `Reserva feita para o hóspede ${this.hospede.nome} (CPF: ${this.hospede.cpf}). ${this.numeroHospedes} pessoas. Tipo de quarto: ${this.tipoQuarto}`;
    }

    alterarDataSaida(novaData: string): string {
        this.dataSaida = novaData;
        return `A data de saída da reserva foi alterada para ${this.dataSaida}.`;
    }
}