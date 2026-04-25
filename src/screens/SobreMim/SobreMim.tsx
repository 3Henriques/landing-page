import { View, Text } from "react-native";
import type { SobreMimScreenProps } from "../../navigation/AppNavigator";
import { styles } from "./SobreMimStyle";
import { FotoPerfil } from "../../components/FotoPerfil/FotoPerfil";
import Titulo from "../../components/Titulo/Titulo";
import CampoTexto from "../../components/CampoTexto/CampoTexto";
import Rodape from "../../components/Rodape/Rodape";
import { useDesenvolvedor } from "../../hooks/useDesenvolvedor";


export function SobreMim({ route }: SobreMimScreenProps){
    const { idDesenvolvedor } = route.params;
    const desenvolvedor = useDesenvolvedor(idDesenvolvedor);

    return(
        <View style={[styles.container, styles.root]}>
            <FotoPerfil idDesenvolvedor={idDesenvolvedor} />
            <Titulo texto="Sobre mim"/>
            <CampoTexto texto={desenvolvedor?.descricao}/>
            <Rodape/>
        </View>
    )
}