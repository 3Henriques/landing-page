import { StyleSheet } from 'react-native';
import { tema } from '../../Tema';

export const styles = StyleSheet.create({
  pickerWrap: {
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 4,
    overflow: 'hidden',
  },
  picker: {
    color: tema.text,
    backgroundColor: '#0f172a',
  },
})