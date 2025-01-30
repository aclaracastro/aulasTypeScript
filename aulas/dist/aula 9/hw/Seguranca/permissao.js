"use strict";
// Define os tipos de permissões (ex: acessar áreas restritas, visualizar relatórios).
var Permissao;
(function (Permissao) {
    Permissao["ACESSAR_COZINHA"] = "acessar_cozinha";
    Permissao["VISUALIZAR_RELATORIOS"] = "visualizar_relatorios";
    Permissao["ABRIR_PORTAO"] = "abrir_portao";
    Permissao["LIMPEZA"] = "limpeza";
    Permissao["RECEPCIONISTA"] = "recepcionista";
    Permissao["MANUTENCAO"] = "manutencao";
})(Permissao || (Permissao = {}));
