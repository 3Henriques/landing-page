import { type ReactNode } from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { styles } from './BotaoRedesSociaisStyle';

type Props = {
  label: string;
  onPress: () => void;
  icon: ReactNode;
};

export function BotaoRedesSociais({ label, onPress, icon }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.btn, pressed && { opacity: 0.8 }]}
    >
      <View style={styles.content}>
        {icon}
        <Text style={styles.label}>{label}</Text>
      </View>
    </Pressable>
  );
}
