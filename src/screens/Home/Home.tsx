import { ScrollView, View } from "react-native";
import { styles } from './HomeStyles';
import Rodape from "../../components/Rodape/Rodape";
import { FotoPerfil } from "../../components/FotoPerfil/FotoPerfil";
import { Botao } from "../../components/Botao/Botao";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Titulo from "../../components/Titulo/Titulo";
import CampoTexto from "../../components/CampoTexto/CampoTexto";

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
                <Titulo texto="Bem-vindo aos 3Henriques!" />
                <CampoTexto texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar malesuada bibendum. Nam non sem sed massa aliquet gravida vitae sodales lectus. Aliquam eu mi eget nibh laoreet accumsan. Vestibulum in nibh nec lectus commodo hendrerit at sit amet dolor. Nam sed ex blandit, semper purus sed, gravida tortor. Mauris eget ultricies orci. Nulla et libero felis. Vivamus rutrum a lacus ut iaculis. Etiam sed faucibus felis, eget tincidunt erat. Donec rhoncus suscipit mollis. Donec fermentum at ipsum in pulvinar. Duis elementum laoreet ligula. Proin iaculis mollis dignissim. Fusce sit amet sapien mattis, pretium ipsum in, faucibus odio." />
                <Botao />
                <Rodape />
            </ScrollView>
        </View>
    )
}