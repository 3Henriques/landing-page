import { StyleSheet } from 'react-native';
import { tema } from '../../Tema';

export const styles = StyleSheet.create({
  bar: {
    flex: 1,
    backgroundColor: tema.accent,
    paddingVertical: 12,
    paddingHorizontal: 16,
    paddingBottom: 20,
    marginTop: 20,
    //marginBottom: 40
  },
  text: {
    color: tema.textOnAccent,
    fontSize: 11,
    textAlign: 'center',
    lineHeight: 16,
    fontWeight: 'bold',
  },
});