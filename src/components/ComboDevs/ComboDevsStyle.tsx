import { StyleSheet } from 'react-native';
import { tema } from '../../Tema';

export const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginBottom: 6,
    paddingHorizontal: 20,
  },

  label: {
    color: '#94a3b8',
    fontSize: 12,
    marginBottom: 4,
    marginLeft: 4,
  },

  pickerWrap: {
    borderWidth: 1,
    borderColor: '#1e293b',
    borderRadius: 10,
    backgroundColor: '#020617',
    height: 75,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,

    elevation: 2,

    overflow: 'hidden',
  },

  picker: {
    color: tema.text,
    backgroundColor: '#020617',
    transform: [{ scaleY: 0.9 }],
  },
});