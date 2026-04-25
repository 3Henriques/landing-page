import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './ComboDevsStyle';
import { tema } from '../../Tema';
import { desenvolvedores } from '../../data/desenvolvedores';


type Props = {
  idDesenvolvedor: number | null;
  onChangeIdDesenvolvedor: (id: number | null) => void;
};

export function ComboDevs({ idDesenvolvedor, onChangeIdDesenvolvedor }: Props) {
  return (
    <View style={styles.pickerWrap}>
      <Picker
        selectedValue={idDesenvolvedor}
        onValueChange={onChangeIdDesenvolvedor}
        style={styles.picker}
        dropdownIconColor={tema.text}
      >
        <Picker.Item label="Selecione um desenvolvedor" value={null} color="#64748b" />
        {desenvolvedores.map((developer) => (
          <Picker.Item key={developer.id} label={developer.nome} value={developer.id} />
        ))}
      </Picker>
    </View>
  );
}