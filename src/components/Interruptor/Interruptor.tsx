import { View, Pressable, Text, Alert } from 'react-native';
import { styles } from '../Interruptor/InterruptorStyles';

export function BotaoSwitch() {
    return (
        <View>
            <Pressable
                onPress={() => Alert.alert('Switch pressionado')}
                style={({ pressed }) => [styles.primaryBtn, pressed && styles.pressed]}
            >
                <Text style={styles.primaryLabel}>Switch</Text>
            </Pressable>
        </View>
    );
}

export default BotaoSwitch;