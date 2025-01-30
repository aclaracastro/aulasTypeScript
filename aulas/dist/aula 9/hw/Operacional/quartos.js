"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quarto = exports.TipoQuarto = exports.StatusQuarto = void 0;
var StatusQuarto;
(function (StatusQuarto) {
    StatusQuarto["Ocupado"] = "OCUPADO";
    StatusQuarto["Livre"] = "LIVRE";
    StatusQuarto["Manuten\u00E7\u00E3o"] = "MANUTEN\u00C7\u00C3O";
})(StatusQuarto || (exports.StatusQuarto = StatusQuarto = {}));
var TipoQuarto;
(function (TipoQuarto) {
    TipoQuarto["Suite"] = "Su\u00EDte";
    TipoQuarto["Duplo"] = "Duplo";
    TipoQuarto["Varanda"] = "Com Varanda";
})(TipoQuarto || (exports.TipoQuarto = TipoQuarto = {}));
class Quarto {
    constructor(numero, tipo, status, comodidade) {
        this.numero = numero;
        this.tipo = tipo;
        this.status = status;
        this.comodidade = comodidade;
    }
    alterarStatus(status) {
        this.status = status;
    }
    adicionarComodidade(comodidade) {
        this.comodidade.push(comodidade);
        console.log(`Comodidade ${comodidade} adicionada ao quarto ${this.numero}`);
    }
}
exports.Quarto = Quarto;
