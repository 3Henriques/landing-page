import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  SobreMim: {
    idDesenvolvedor: number;
  };
};

export type HomeNavigation = NativeStackNavigationProp<RootStackParamList, 'Home'>;
export type SobreMimScreenProps = NativeStackScreenProps<RootStackParamList, 'SobreMim'>;
