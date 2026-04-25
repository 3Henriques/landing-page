import { ScrollView, View } from "react-native";
import { styles } from './HomeStyles';
import Rodape from "../../components/Rodape/Rodape";
import { FotoPerfil } from "../../components/FotoPerfil/FotoPerfil";
import { Botao } from "../../components/Botao/Botao";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Home(){
    const insets = useSafeAreaInsets();

    return(
        <View style={[styles.root, { paddingTop: insets.top }]}>
            <ScrollView
                contentContainerStyle={styles.scroll}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <FotoPerfil />
                <Botao />
                <Rodape />
            </ScrollView>
        </View>
    )
}