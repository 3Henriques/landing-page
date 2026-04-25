import { View, Text } from "react-native";
import { desenvolvedores } from "../../data/desenvolvedores";
import type { SobreMimScreenProps } from "../../navigation/AppNavigator";
import { styles } from "./SobreMimStyle";

export function SobreMim({ route }: SobreMimScreenProps){
    const { idDesenvolvedor } = route.params;
    const desenvolvedor = desenvolvedores[idDesenvolvedor];


    return(
        <View style={styles.container}>
            <Text>Nome do desenvolvedor: {desenvolvedor.nome}</Text>
        </View>
    )
}