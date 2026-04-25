import { View, Image, ImageSourcePropType } from 'react-native';

import { styles } from './FotoPerfilStyle';

const PROFILE = require('../../../assets/photos/Foto home.png') as ImageSourcePropType;

type Props = {
  source?: ImageSourcePropType;
};

export function FotoPerfil({ source = PROFILE }: Props) {
  return (
    <View style={styles.wrap}>
      <View style={styles.frame} />
      <View style={styles.imageWrap}>
        <Image source={source} style={styles.image} />
      </View>
    </View>
  );
}