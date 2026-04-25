import { View, Text } from 'react-native';

import { styles } from './RodapeStyle';

type RodapeProps = {
  accentColor?: string;
};

export default function Rodape({ accentColor }: RodapeProps) {
  return (
    <View style={[styles.bar, accentColor ? { backgroundColor: accentColor } : null]}>
      <Text style={styles.text}>Desenvolvido por alunos da Fatec. Projeto fictício sem fins comerciais.</Text>
    </View>
  );
}