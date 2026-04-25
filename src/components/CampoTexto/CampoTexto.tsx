import { Text, View } from "react-native";
import { styles } from "./CampoTextoStyle";

type CampoTextoProps = {
    texto: string;
}

export default function CampoTexto({ texto }: CampoTextoProps) {
    return(
        <View>
            <Text style={styles.text}>{texto}</Text>
        </View>
    )
}