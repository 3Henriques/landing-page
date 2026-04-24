import { View } from "react-native";
import { styles } from './HomeStyles';
import Rodape from "../../components/Rodape/Rodape";
import { FotoPerfil } from "../../components/FotoPerfil/FotoPerfil";

export function Home(){
    return(
        <View style={styles.container}>
            <FotoPerfil />
            <Rodape />
        </View>
    )
}