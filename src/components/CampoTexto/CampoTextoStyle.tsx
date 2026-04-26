import { StyleSheet } from 'react-native';
import { tema } from '../../Tema';

export const styles = StyleSheet.create({
  text: {
    color: tema.text,
    fontSize: 16,
    textAlign: 'justify',
    lineHeight: 24,
    marginTop: 12,
    paddingHorizontal: 20,
  },
});