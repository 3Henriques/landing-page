import { View, Text } from "react-native";
import { desenvolvedores } from "../../data/desenvolvedores";
import type { SobreMimScreenProps } from "../../navigation/AppNavigator";
import { styles } from "./SobreMimStyle";
import { FotoPerfil } from "../../components/FotoPerfil/FotoPerfil";
import Titulo from "../../components/Titulo/Titulo";
import CampoTexto from "../../components/CampoTexto/CampoTexto";
import Rodape from "../../components/Rodape/Rodape";


export function SobreMim({ route }: SobreMimScreenProps){
    const { idDesenvolvedor } = route.params;
    const desenvolvedor = desenvolvedores.find((dev) => dev.id === idDesenvolvedor);

    if (!desenvolvedor) {
        throw new Error("Desenvolvedor não localizado");
    }

    return(
        <View style={[styles.container, styles.root]}>
            <FotoPerfil idDesenvolvedor={idDesenvolvedor} />
            <Titulo texto="Sobre mim"/>
            <CampoTexto texto={desenvolvedor.descricao}/>
            <Rodape/>
        </View>
    )
}