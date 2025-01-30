"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reserva = void 0;
class Reserva {
    constructor(numeroHospedes, tipoQuarto, hospede, dataSaida) {
        this.numeroHospedes = numeroHospedes;
        this.tipoQuarto = tipoQuarto;
        this.hospede = hospede;
        this.dataSaida = dataSaida;
    }
    detalhesReserva() {
        return `Reserva feita para o hóspede ${this.hospede.nome} (CPF: ${this.hospede.cpf}). ${this.numeroHospedes} pessoas. Tipo de quarto: ${this.tipoQuarto}`;
    }
    alterarDataSaida(novaData) {
        this.dataSaida = novaData;
        return `A data de saída da reserva foi alterada para ${this.dataSaida}.`;
    }
}
exports.Reserva = Reserva;
