import { Linking, ScrollView, View } from "react-native";
import { styles } from './HomeStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';   
import Rodape from "../../components/Rodape/Rodape";
import { FotoPerfil } from "../../components/FotoPerfil/FotoPerfil";
import { Botao } from "../../components/Botao/Botao";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Titulo from "../../components/Titulo/Titulo";
import CampoTexto from "../../components/CampoTexto/CampoTexto";
import { BotaoRedesSociais } from "../../components/BotaoRedesSociais/BotaoRedesSociais";
import { tema } from "../../Tema";


export function Home(){
    const insets = useSafeAreaInsets();

    const SOCIAL_URLS = {
        github: 'https://github.com',
        linkedin: 'https://www.linkedin.com',
        instagram: 'https://www.instagram.com',
        twitch: 'https://www.twitch.tv',
    } as const;

    function openUrl(url: string) {
        Linking.openURL(url).catch(() => {});
    }

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
                <View style={styles.socialRow}>
                    <BotaoRedesSociais
                        label="GitHub"
                        onPress={() => openUrl(SOCIAL_URLS.github)}
                        icon={<MaterialCommunityIcons name="github" size={20} color={tema.accent} />} />
                    <BotaoRedesSociais
                        label="LinkedIn"
                        onPress={() => openUrl(SOCIAL_URLS.linkedin)}
                        icon={<MaterialCommunityIcons name="linkedin" size={20} color={tema.accent} />} />
                </View>
                <View style={styles.socialRow}>
                        <BotaoRedesSociais
                            label="Instagram"
                            onPress={() => openUrl(SOCIAL_URLS.instagram)}
                            icon={<MaterialCommunityIcons name="instagram" size={20} color={tema.accent} />} />
                        <BotaoRedesSociais
                            label="Twitch"
                            onPress={() => openUrl(SOCIAL_URLS.twitch)}
                            icon={<MaterialCommunityIcons name="twitch" size={20} color={tema.accent} />} />
                </View>
                <Rodape />
            </ScrollView>
        </View>
    )
}