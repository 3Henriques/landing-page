import { Linking, ScrollView, View, Text } from "react-native";
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
import { ComboDevs } from "../../components/ComboDevs/ComboDevs";
import { useState } from 'react';
import { useDesenvolvedor } from "../../hooks/useDesenvolvedor";


export function Home(){
    const insets = useSafeAreaInsets();
    const [idDesenvolvedor, setIdDesenvolvedor] = useState<number | null>(null);

    const SOCIAL_URLS = {
        github: 'https://github.com/',
        linkedin: 'https://www.linkedin.com/',
        instagram: 'https://www.instagram.com/',
        twitch: 'https://www.twitch.tv/',
    } as const;

    function openUrl(url: string) {
        Linking.openURL(url).catch(() => {});
    }

    function defDesenvolvedor(idDesenvolvedor: number) {
        const desenvolvedor = useDesenvolvedor(idDesenvolvedor);
        const accentAtual = desenvolvedor.cor || tema.accent;
        return (
            <>
                <Botao idDesenvolvedor={idDesenvolvedor} accentColor={accentAtual} />
                <View style={styles.socialRow}>
                    <BotaoRedesSociais
                        label="GitHub"
                        onPress={() => openUrl(SOCIAL_URLS.github + desenvolvedor.redesSociais.GitHub)}
                        accentColor={accentAtual}
                        icon={<MaterialCommunityIcons name="github" size={20} color={accentAtual} />} />
                    <BotaoRedesSociais
                        label="LinkedIn"
                        onPress={() => openUrl(SOCIAL_URLS.linkedin + desenvolvedor.redesSociais.LinkedIn)}
                        accentColor={accentAtual}
                        icon={<MaterialCommunityIcons name="linkedin" size={20} color={accentAtual} />} />
                </View>
                <View style={styles.socialRow}>
                    <BotaoRedesSociais
                        label="Instagram"
                        onPress={() => openUrl(SOCIAL_URLS.instagram + desenvolvedor.redesSociais.Instagram)}
                        accentColor={accentAtual}
                        icon={<MaterialCommunityIcons name="instagram" size={20} color={accentAtual} />} />
                    <BotaoRedesSociais
                        label="Twitch"
                        onPress={() => openUrl(SOCIAL_URLS.twitch)}
                        accentColor={accentAtual}
                        icon={<MaterialCommunityIcons name="twitch" size={20} color={accentAtual} />} />
                </View>
                <Rodape accentColor={accentAtual} />
            </>
        );
    }

    return(
        <View style={[styles.root, { paddingTop: insets.top }]}>
            <ScrollView
                contentContainerStyle={styles.scroll}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <FotoPerfil idDesenvolvedor={idDesenvolvedor ?? undefined} />
                <Titulo texto="Bem-vindo aos 3Henriques!" />
                <CampoTexto texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar malesuada bibendum. Nam non sem sed massa aliquet gravida vitae sodales lectus. Aliquam eu mi eget nibh laoreet accumsan. Vestibulum in nibh nec lectus commodo hendrerit at sit amet dolor. Nam sed ex blandit, semper purus sed, gravida tortor. Mauris eget ultricies orci. Nulla et libero felis. Vivamus rutrum a lacus ut iaculis. Etiam sed faucibus felis, eget tincidunt erat. Donec rhoncus suscipit mollis. Donec fermentum at ipsum in pulvinar. Duis elementum laoreet ligula. Proin iaculis mollis dignissim. Fusce sit amet sapien mattis, pretium ipsum in, faucibus odio." />
                <ComboDevs
                idDesenvolvedor={idDesenvolvedor}
                onChangeIdDesenvolvedor={setIdDesenvolvedor}
                />                
                {idDesenvolvedor !== null && defDesenvolvedor(idDesenvolvedor)}
            </ScrollView>
        </View>
    )
}