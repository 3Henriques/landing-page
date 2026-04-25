import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Home } from './src/screens/Home/Home';
import { SobreMim } from './src/screens/SobreMim/SobreMim';
import type { RootStackParamList } from './src/navigation/AppNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SobreMim" component={SobreMim} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
