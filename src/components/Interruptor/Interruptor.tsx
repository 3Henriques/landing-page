import { View, Text, Alert, Switch } from 'react-native';
import { styles } from '../Interruptor/InterruptorStyles';
import { useState } from 'react';

export default function BotaoSwitch() {
    const [switchOn, setSwitchOn] = useState(false);

    return (
      <View style={styles.topBlock}>
        <Text style={styles.heading}>Acesse nossas redes:</Text>
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Alterar visualização</Text>
          <Switch
            value={switchOn}
            onValueChange={(v) => { 
              setSwitchOn(v);
              Alert.alert('Switch pressionado');
            }}
            trackColor={{ false: '#334155', true: '#5bc0de' }}
            thumbColor="#ffffff"
            ios_backgroundColor="#334155"
          />
        </View>
      </View>
    );
}