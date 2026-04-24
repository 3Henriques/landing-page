import { StyleSheet } from 'react-native';
import { tema } from '../../Tema';

export const styles = StyleSheet.create({
  bar: {
    backgroundColor: tema.accent,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 8,
  },
  text: {
    color: tema.textOnAccent,
    fontSize: 11,
    textAlign: 'center',
    lineHeight: 16,
  },
});