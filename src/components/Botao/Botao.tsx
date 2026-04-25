import { View, Pressable, Text, Alert } from 'react-native';
import { styles } from './BotaoStyle';
import { useNavigation } from '@react-navigation/native';
import { HomeNavigation } from '../../navigation/AppNavigator';

export function Botao(){
    const navigation = useNavigation<HomeNavigation>();

    return(
        <View>
            <Pressable
                onPress={() => navigation.navigate('About')}
                style={({ pressed }) => [styles.primaryBtn, pressed && styles.pressed]}
            >
            <Text style={styles.primaryLabel}>Sobre mim</Text>
            </Pressable>
            <Pressable
                onPress={() => Alert.alert('Entre em contato')}
                style={({ pressed }) => [styles.primaryBtn, pressed && styles.pressed]}
            >
            <Text style={styles.primaryLabel}>Entre em contato!</Text>
            </Pressable>
        </View>
    )
}