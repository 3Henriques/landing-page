import { Text, View } from "react-native";
import { styles } from "./TituloStyle";

type TituloProps = {
    texto: string;
}

function Titulo({ texto }: TituloProps) {
    return(
        <View>
            <Text style={styles.text}>{texto}</Text>
        </View>
    )
}

export default Titulo;