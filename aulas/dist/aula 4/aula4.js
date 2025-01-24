"use strict";
var Funcao;
(function (Funcao) {
    Funcao[Funcao["DonoDaLoja"] = 1] = "DonoDaLoja";
    Funcao[Funcao["GerenteDaLoja"] = 2] = "GerenteDaLoja";
    Funcao[Funcao["Admin"] = 3] = "Admin";
    Funcao[Funcao["User"] = 4] = "User";
})(Funcao || (Funcao = {}));
const qualFuncao = (param) => {
    'quarta';
    switch (param) {
        case Funcao.DonoDaLoja:
            return 'dono da loja';
            break;
        case Funcao.GerenteDaLoja:
            return 'gerente da loja';
            break;
        default:
            return 'função não encontrada';
            break;
    }
};
console.log(qualFuncao(2)); //gerente
console.log(qualFuncao(3)); //função não encontrada
