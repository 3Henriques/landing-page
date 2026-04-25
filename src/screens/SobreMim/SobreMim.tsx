import { View, Text, Pressable } from "react-native";
import { desenvolvedores } from "../../data/desenvolvedores";
import type { HomeNavigation, SobreMimScreenProps } from "../../navigation/AppNavigator";
import { styles } from "./SobreMimStyle";
import { FotoPerfil } from "../../components/FotoPerfil/FotoPerfil";
import Titulo from "../../components/Titulo/Titulo";
import CampoTexto from "../../components/CampoTexto/CampoTexto";
import Rodape from "../../components/Rodape/Rodape";
import { Ionicons } from "@expo/vector-icons";
import { tema } from "../../Tema";
import { useNavigation } from "@react-navigation/native";


export function SobreMim({ route }: SobreMimScreenProps){
    const { idDesenvolvedor } = route.params;
    const navigation = useNavigation<HomeNavigation>();
    const desenvolvedor = desenvolvedores.find((dev) => dev.id === idDesenvolvedor);

    if (!desenvolvedor) {
        throw new Error("Desenvolvedor não localizado");
    }

    return(
        <View style={[styles.container, styles.root]}>
            <Pressable
            onPress={() => navigation.goBack()}
            hitSlop={8}
            style={({ pressed }) => [styles.back, pressed && { opacity: 0.7 }]}
            >
            <Ionicons name="chevron-back" size={24} color={tema.text} />
            </Pressable>
            <FotoPerfil idDesenvolvedor={idDesenvolvedor} />
            <Titulo texto="Sobre mim"/>
            <CampoTexto texto={desenvolvedor.descricao}/>
            <Rodape/>
        </View>
    )
}