import { StyleSheet } from 'react-native';
import { tema } from '../../Tema';

const SIZE = 280;

export const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    maxWidth: SIZE,
    height: SIZE,
    alignSelf: 'center',
    marginTop: 24,
    marginBottom: 8,
  },
  frame: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: SIZE * 0.9,
    height: SIZE * 0.9,
    borderWidth: 3,
    borderColor: tema.accent,
    borderRadius: 4,
  },
  imageWrap: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: SIZE * 0.9,
    height: SIZE * 0.9,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});