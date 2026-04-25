import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  About: { developerId: number } | undefined;
};

export type HomeNavigation = NativeStackNavigationProp<RootStackParamList, 'Home'>;
export type AboutNavigation = NativeStackNavigationProp<RootStackParamList, 'About'>;
