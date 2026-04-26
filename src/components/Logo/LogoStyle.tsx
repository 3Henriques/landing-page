import { StyleSheet } from 'react-native';
import { tema } from '../../Tema';

export const styles = StyleSheet.create({
  bar: {
    backgroundColor: tema.accent,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: -16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  image:{
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  text: {
    color: tema.textOnAccent,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 12,
  }
});