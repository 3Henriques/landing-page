import { View, Pressable, ScrollView } from "react-native";
import type { SobreMimScreenProps } from "../../navigation/AppNavigator";
import { styles } from "./SobreMimStyle";
import { FotoPerfil } from "../../components/FotoPerfil/FotoPerfil";
import Titulo from "../../components/Titulo/Titulo";
import CampoTexto from "../../components/CampoTexto/CampoTexto";
import Rodape from "../../components/Rodape/Rodape";
import { Ionicons } from "@expo/vector-icons";
import { tema } from "../../Tema";
import { useNavigation } from "@react-navigation/native";
import { useDesenvolvedor } from "../../hooks/useDesenvolvedor";

export function SobreMim({ route }: SobreMimScreenProps) {
  const { idDesenvolvedor } = route.params;
  const navigation = useNavigation();
  const desenvolvedor = useDesenvolvedor(idDesenvolvedor);

  return (
    <View style={[styles.root]}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Pressable
          onPress={() => navigation.goBack()}
          hitSlop={8}
          style={({ pressed }) => [
            styles.back,
            pressed && { opacity: 0.7 }
          ]}
        >
          <Ionicons
            name="chevron-back"
            size={30}
            color={tema.text}
          />
        </Pressable>

        <FotoPerfil idDesenvolvedor={idDesenvolvedor} />

        <Titulo texto="Sobre mim" />

        <CampoTexto texto={desenvolvedor?.descricao} />

        <CampoTexto texto={desenvolvedor?.sobreMim} />

        <Rodape />
      </ScrollView>
    </View>
  );
}