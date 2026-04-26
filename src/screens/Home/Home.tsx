import { Linking, ScrollView, View, Text } from "react-native";
import { styles } from './HomeStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';   
import { FotoPerfil } from "../../components/FotoPerfil/FotoPerfil";
import { Botao } from "../../components/Botao/Botao";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BotaoRedesSociais } from "../../components/BotaoRedesSociais/BotaoRedesSociais";
import { tema } from "../../Tema";
import { ComboDevs } from "../../components/ComboDevs/ComboDevs";
import { useState } from 'react';
import { useDesenvolvedor } from "../../hooks/useDesenvolvedor";
import CampoTexto from "../../components/CampoTexto/CampoTexto";
import Rodape from "../../components/Rodape/Rodape";
import Titulo from "../../components/Titulo/Titulo";
import Logo from "../../components/Logo/Logo";


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
        return (
            <>
                <Botao idDesenvolvedor={idDesenvolvedor} />
                <View style={styles.socialRow}>
                    <BotaoRedesSociais
                        label="GitHub"
                        onPress={() => openUrl(SOCIAL_URLS.github + desenvolvedor.redesSociais.GitHub)}
                        icon={<MaterialCommunityIcons name="github" size={20} color={tema.accent} />} />
                    <BotaoRedesSociais
                        label="LinkedIn"
                        onPress={() => openUrl(SOCIAL_URLS.linkedin + desenvolvedor.redesSociais.LinkedIn)}
                        icon={<MaterialCommunityIcons name="linkedin" size={20} color={tema.accent} />} />
                </View>
                <View style={styles.socialRow}>
                    <BotaoRedesSociais
                        label="Instagram"
                        onPress={() => openUrl(SOCIAL_URLS.instagram + desenvolvedor.redesSociais.Instagram)}
                        icon={<MaterialCommunityIcons name="instagram" size={20} color={tema.accent} />} />
                    <BotaoRedesSociais
                        label="Twitch"
                        onPress={() => openUrl(SOCIAL_URLS.twitch)}
                        icon={<MaterialCommunityIcons name="twitch" size={20} color={tema.accent} />} />
                </View>
            </>
        );
    }

    return(
        <View style={[styles.root, { paddingTop: insets.top }]}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <Logo />
                <FotoPerfil />
                <Titulo texto="Bem-vindo aos 3Henriques!" />
                <CampoTexto texto={"Somos três estudantes de Análise e Desenvolvimento de Sistemas, atualmente no quinto semestre, unidos pela paixão por tecnologia e pela busca constante por evolução na área de desenvolvimento.\nAo longo da graduação, participamos de diversos projetos práticos que fortaleceram nossos conhecimentos técnicos e nosso trabalho em equipe.\nJá desenvolvemos aplicações utilizando Angular, Spring Boot, Java e linguagem C, além de experiências com banco de dados MongoDB e modelagem de sistemas. Também aplicamos conceitos essenciais de Engenharia de Software, como DER, diagramas de classes, casos de uso e diagramas de sequência.\nEntre nossos principais projetos, destacamos o desenvolvimento de um sistema para controle de laboratórios e salas da faculdade, focado em organização, eficiência e facilidade de uso.\nEste portfólio representa nossa trajetória acadêmica, dedicação e vontade de transformar ideias em soluções reais."}/>
                <ComboDevs
                    idDesenvolvedor={idDesenvolvedor}
                    onChangeIdDesenvolvedor={setIdDesenvolvedor}
                />                
                {idDesenvolvedor !== null && defDesenvolvedor(idDesenvolvedor)}
                <Rodape />
            </ScrollView>
        </View>
    )
}