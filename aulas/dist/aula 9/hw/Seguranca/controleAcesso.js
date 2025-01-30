"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControleAcesso = void 0;
class ControleAcesso {
    constructor() {
        this.usuarios = new Map();
    }
    adicionarUsuario(usuario) {
        this.usuarios.set(usuario.id, usuario);
    }
    permitirAcesso(usuario) {
        return this.usuarios.has(usuario.id); // Verifica se o usuário existe no sistema
    }
}
exports.ControleAcesso = ControleAcesso;
