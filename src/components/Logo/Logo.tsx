import { View, Image, Text } from 'react-native';
import { styles } from './LogoStyle';

export default function Logo() {
  return (
    <View style={styles.bar}>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>3Henriques</Text>
    </View>
  );
}