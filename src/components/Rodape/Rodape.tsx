import { View, Text } from 'react-native';

import { styles } from './RodapeStyle';

export default function Rodape() {
  return (
    <View style={styles.bar}>
      <Text style={styles.text}>Desenvolvido por alunos da Fatec. Projeto fictício sem fins comerciais.</Text>
    </View>
  );
}