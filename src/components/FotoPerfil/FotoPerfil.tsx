import { View, Image, ImageSourcePropType } from 'react-native';

import { desenvolvedores } from '../../data/desenvolvedores';
import { styles } from './FotoPerfilStyle';

const PROFILE = require('../../../assets/images/Foto home.png') as ImageSourcePropType;

type Props = {
  idDesenvolvedor?: number;
};

export function FotoPerfil({ idDesenvolvedor }: Props) {
  const imagemDoDesenvolvedor =
    idDesenvolvedor != null
      ? desenvolvedores.find((desenvolvedor) => desenvolvedor.id === idDesenvolvedor)?.imagens
      : undefined;

  const imagem = imagemDoDesenvolvedor ?? PROFILE;

  return (
    <View style={styles.wrap}>
      <View style={styles.frame} />
      <View style={styles.imageWrap}>
        <Image source={imagem} style={styles.image} />
      </View>
    </View>
  );
}