import { desenvolvedores } from "../data/desenvolvedores";
import type { Desenvolvedor } from "../types/desenvolvedor";

export function useDesenvolvedor(idDesenvolvedor: number): Desenvolvedor;
export function useDesenvolvedor(idDesenvolvedor: null): null;
export function useDesenvolvedor(idDesenvolvedor: number | null): Desenvolvedor | null {

    if (idDesenvolvedor == null) {
        return null;
    }

    const desenvolvedor = desenvolvedores.find((dev) => dev.id === idDesenvolvedor);

    if (!desenvolvedor) {
        throw new Error("Desenvolvedor não localizado");
    }

    return desenvolvedor;
}