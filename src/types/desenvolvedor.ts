import { ImageSourcePropType } from "react-native";

export type Desenvolvedor = {
    id: number,
    nome: string,
    especialidade: string,
    imagens: ImageSourcePropType,
    apelido: string,
    fraseAprensentacao: string,
    descricao: string,
    sobreMim: string,
    redesSociais: {
        GitHub: string,
        LinkedIn: string,
        Instagram: string
    },
    cor: string
};