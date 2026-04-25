import { View, Text } from "react-native";
import { desenvolvedores } from "../../data/desenvolvedores";
import type { SobreMimScreenProps } from "../../navigation/AppNavigator";
import { styles } from "./SobreMimStyle";
import { FotoPerfil } from "../../components/FotoPerfil/FotoPerfil";

export function SobreMim({ route }: SobreMimScreenProps){
    const { idDesenvolvedor } = route.params;
    const desenvolvedor = desenvolvedores.find((dev) => dev.id === idDesenvolvedor);

    if (!desenvolvedor) {
        throw new Error("Desenvolvedor não localizado");
    }


    return(
        <View style={[styles.container, styles.root]}>
            <FotoPerfil idDesenvolvedor={idDesenvolvedor} />
            <Text style={styles.texto}>Nome do desenvolvedor: {desenvolvedor.nome}</Text>
        </View>
    )
}