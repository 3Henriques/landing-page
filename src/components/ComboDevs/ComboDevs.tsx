import { View, Text, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { tema } from '../../Tema';
import { desenvolvedores } from '../../data/desenvolvedores';
import { styles } from './ComboDevsStyle';

type Props = {
  idDesenvolvedor: number | null;
  onChangeIdDesenvolvedor: (id: number | null) => void;
};

export function ComboDevs({ idDesenvolvedor, onChangeIdDesenvolvedor }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Desenvolvedor:</Text>

      <View style={styles.pickerWrap}>
        <Picker
          selectedValue={idDesenvolvedor}
          onValueChange={(itemValue) => onChangeIdDesenvolvedor(itemValue)}
          style={styles.picker}
          dropdownIconColor={tema.accent}
          mode={Platform.OS === 'android' ? 'dropdown' : 'dialog'}
        >
          <Picker.Item
            label="Selecione um desenvolvedor"
            value={null}
            color="#64748b"
          />

          {desenvolvedores.map((developer) => (
            <Picker.Item
              key={developer.id}
              label={developer.nome}
              value={developer.id}
              color={Platform.OS === 'android' ? "#000" : "#FFF"} 
            />
          ))}
        </Picker>
      </View>
    </View>
  );
}