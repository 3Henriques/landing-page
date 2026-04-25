import { View, Image, ImageSourcePropType } from 'react-native';

import { desenvolvedores } from '../../data/desenvolvedores';
import { tema } from '../../Tema';
import { styles } from './FotoPerfilStyle';

const PROFILE = require('../../../assets/images/Foto home.png') as ImageSourcePropType;

type Props = {
  idDesenvolvedor?: number;
};

export function FotoPerfil({ idDesenvolvedor }: Props) {
  const desenvolvedorSelecionado =
    idDesenvolvedor != null
      ? desenvolvedores.find((desenvolvedor) => desenvolvedor.id === idDesenvolvedor)
      : undefined;

  const imagem = desenvolvedorSelecionado?.imagens ?? PROFILE;
  const accentAtual = desenvolvedorSelecionado?.cor ?? tema.accent;

  return (
    <View style={styles.wrap}>
      <View style={[styles.frame, { borderColor: accentAtual }]} />
      <View style={styles.imageWrap}>
        <Image source={imagem} style={styles.image} />
      </View>
    </View>
  );
}