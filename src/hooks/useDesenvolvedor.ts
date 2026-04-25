import { desenvolvedores } from "../data/desenvolvedores";
import type { Desenvolvedor } from "../types/desenvolvedor";

export function useDesenvolvedor(idDesenvolvedor: number): Desenvolvedor {

    const desenvolvedor = desenvolvedores.find((dev) => dev.id === idDesenvolvedor);

    if (!desenvolvedor) {
        throw new Error("Desenvolvedor não localizado");
    }

    return desenvolvedor;
}