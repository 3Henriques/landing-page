import { StyleSheet } from 'react-native';
import { tema } from '../../Tema';

export const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,
    borderColor: tema.accent,
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 8,
    width: '48%',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  label: {
    color: tema.text,
    fontSize: 12,
    fontWeight: '500',
  },
});