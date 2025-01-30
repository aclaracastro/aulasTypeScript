import { Usuario } from "./usuario";

export class ControleAcesso {
    private usuarios: Map<number, Usuario> = new Map();

    adicionarUsuario(usuario: Usuario): void {
        this.usuarios.set(usuario.id, usuario);
    }

    permitirAcesso(usuario: Usuario): boolean {
        return this.usuarios.has(usuario.id); // Verifica se o usuário existe no sistema
    }
}
